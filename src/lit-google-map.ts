import {LitElement, html, css, customElement, property} from 'lit-element';
import {LitGoogleMapsApi} from './lit-google-maps-api';
import {LitGoogleMapMarker} from './lit-google-map-marker';
import {LitSelector} from './lit-selector';

@customElement('lit-google-map')
export class LitGoogleMap extends LitElement {

    /**
     * A Maps API key. To obtain an API key, see https://developers.google.com/maps/documentation/javascript/tutorial#api_key.
     */
    @property({type : String, attribute: 'api-key'})
    apiKey: string = '';

    /**
     * Version of the Google Maps API to use.
     */
    @property({type : String})
    version: string = '3.39';

    /**
     * If set, custom styles can be applied to the map.
     * For style documentation see https://developers.google.com/maps/documentation/javascript/reference#MapTypeStyle
    */
    @property({type : Object})
    styles: object = {};

    /**
     * A zoom level to set the map to.
     */
    @property({type : Number})
    zoom: number = 8;

    /**
     * If set, the zoom level is set such that all markers (google-map-marker children) are brought into view.
     */
    @property({type : Boolean, attribute: 'fit-to-markers'})
    fitToMarkers: boolean = false;

    /**
     * Map type to display. One of 'roadmap', 'satellite', 'hybrid', 'terrain'.
     */
    @property({type : String, attribute: 'map-type'})
    mapType: string = 'roadmap';

    @property({type : Number, attribute: 'center-latitude'})
    centerLatitude: number = 39.1031;

    @property({type : Number, attribute: 'center-longitude'})
    centerLongitude: number = -84.5120;

    @property({type : Boolean, attribute: 'set-center'})
    setCenter: boolean = false;

    @property({type : Number, attribute: 'set-radius'})
    setRadius: number = 0;

    @property({type : String, attribute: 'radius-color'})
    radiusColor: string = '#f99d1c';

    @property({type : String, attribute: 'radius-border-color'})
    radiusBorderColor: string = '#f99d1c';

    @property({type : Number, attribute: 'radius-opacity'})
    radiusOpacity: number = 0.3;

    @property({type : Number, attribute: 'radius-border-opacity'})
    radiusBorderOpacity: number = 0.8;

    @property({type : Number, attribute: 'radius-border-weight'})
    radiusBorderWeight: number = 2;

    @property({type : String})
    language: string = '';

    @property({type : String})
    mapId: string = '';

    map : google.maps.Map = null;

    markers : Array<Node>;

    markerObserverSet : boolean = false;

    attrObserverSet : boolean = false;

    circle : google.maps.Circle = null;

    initGMap() {
        if (this.map != null) {
            return; // already initialized
        }

        var gMapApiElement = this.shadowRoot.getElementById('api') as LitGoogleMapsApi;

        if (gMapApiElement == null || gMapApiElement.libraryLoaded != true) {
            return;
        }

        this.map = new google.maps.Map(this.shadowRoot.getElementById('map'), this.getMapOptions());

        this.updateMarkers();
    }

    getMapOptions() : google.maps.MapOptions {
        return {
            zoom: this.zoom,
            center: {lat: this.centerLatitude, lng: this.centerLongitude},
            mapTypeId: this.mapType,
            // @ts-ignore
            styles: this.styles,
            mapId: this.mapId
        };
    }

    mapApiLoaded() {
        this.initGMap();
    }

    connectedCallback() {
        super.connectedCallback();

        this.initGMap();
    }

    attachChildrenToMap(children : Array<Node>) {
        if (this.map) {
          for (var i = 0, child; child = children[i]; ++i) {
            (child as LitGoogleMapMarker).changeMap(this.map);
          }
        }
    }

    removeChildrenFromMap(children : Array<Node>) {
        if (this.map) {
            for (var i = 0, child; child = children[i]; ++i) {
                (child as LitGoogleMapMarker).removeMap();
              }
        }
    }

    observeMarkers() {
        if (this.markerObserverSet)
            return;

        this.addEventListener("selector-items-changed", event => { this.updateMarkers() });
        this.markerObserverSet = true;
    }

    observeAttrs() {
        if (this.attrObserverSet)
            return;

        this.addEventListener("map-attrs-changed", event => {
            if (this.fitToMarkers) {
                this.fitToMarkersChanged()
            } else if (this.setCenter) {
                this.setCenterPoint()
            } else if (this.setRadius > 0) {
                this.setRadiusCircle()
            }
        });
        this.attrObserverSet = true;
    }

    updateMarkers() {
        this.observeMarkers();
        this.observeAttrs();
        var markersSelector = this.shadowRoot.getElementById("markers-selector") as LitSelector;
        if (!markersSelector)
            return;

        var newMarkers = markersSelector.items;

        // do not recompute if markers have not been added or removed
        if (this.markers && newMarkers.length === this.markers.length)
        {
            var added = newMarkers.filter(m => {
                return this.markers && this.markers.indexOf(m) === -1;
            });
            if (added.length == 0)
                return
        }

        if (this.markers) {
            this.removeChildrenFromMap(this.markers)
        }

        this.markers = newMarkers;

        this.attachChildrenToMap(this.markers);
        if (this.fitToMarkers) {
            this.fitToMarkersChanged();
            return;
        }
        if (this.setRadius > 0) {
            this.setRadiusCircle()
        }
    }

    fitToMarkersChanged() {
        if (this.circle != null) {
            this.circle.setMap(null);
        }
        if (this.map && this.fitToMarkers && this.markers.length > 0) {
            var latLngBounds = new google.maps.LatLngBounds();
            for (var i = 0, m; m = this.markers[i]; ++i) {
                latLngBounds.extend(new google.maps.LatLng(m.latitude, m.longitude));
            }

            if (this.setCenter) {
                latLngBounds.extend(new google.maps.LatLng(this.centerLatitude, this.centerLongitude))
            }
            if (this.setRadius > 0) {
                let radius = new google.maps.Circle({
                    strokeOpacity: this.radiusBorderOpacity,
                    strokeColor: this.radiusBorderColor,
                    strokeWeight: this.radiusBorderWeight,
                    fillColor: this.radiusColor,
                    fillOpacity: this.radiusOpacity,
                    center: new google.maps.LatLng(this.centerLatitude, this.centerLongitude),
                    radius: this.setRadius
                  });
                this.circle = radius;
                this.circle.setMap(this.map)
                latLngBounds.union(radius.getBounds())
            }
            // For one marker, don't alter zoom, just center it.
            if (this.markers.length > 1 || this.setCenter) {
                this.map.fitBounds(latLngBounds);
            }
            if (!this.setCenter) {
                this.map.setCenter(latLngBounds.getCenter());
                this.map.panToBounds;
                return;
            }
            this.setCenterPoint()
        }
    }

    setCenterPoint() {
        this.map.setCenter(new google.maps.LatLng(this.centerLatitude, this.centerLongitude))
        if (this.setRadius > 0) {
            this.setRadiusCircle();
            return;
        }
        this.map.panTo(new google.maps.LatLng(this.centerLatitude, this.centerLongitude))
    }

    setRadiusCircle() {
        if (this.circle != null) {
            this.circle.setMap(null);
        }
        var bounds = new google.maps.LatLngBounds();
        let radius = new google.maps.Circle({
            strokeOpacity: this.radiusBorderOpacity,
            strokeColor: this.radiusBorderColor,
            strokeWeight: this.radiusBorderWeight,
            fillColor: this.radiusColor,
            fillOpacity: this.radiusOpacity,
            center: new google.maps.LatLng(this.centerLatitude, this.centerLongitude),
            radius: this.setRadius
          });
        this.circle = radius;
        this.circle.setMap(this.map);
        bounds.union(radius.getBounds());
        this.map.fitBounds(bounds);
        this.map.panToBounds;
    }

    deselectMarker(event : Event) {
    }

    static get styles() {
        return css`
            #map {
                width: 100%;
                height: 100%;
            }
        `;
    }

    render() {
        return html`
            <lit-google-maps-api
                id="api"
                api-key="${this.apiKey}"
                version="${this.version}"
                language="${this.language}"
                mapId="${this.mapId}"
                @api-load=${() => this.mapApiLoaded()}></lit-google-maps-api>
            <lit-selector
                id="markers-selector"
                selected-attribute="open"
                activate-event="google-map-marker-open"
                set-radius=${this.setRadius}
                set-center=${this.setCenter}
                fit-to-markers=${this.fitToMarkers}
                center-latitude=${this.centerLatitude}
                center-longitude=${this.centerLongitude}
                @google-map-marker-close=${(e) => this.deselectMarker(e)}>
                    <slot id="markers" name="markers"></slot>
            </lit-selector>
            <div id="map">
            </div>
        `;
    }
}