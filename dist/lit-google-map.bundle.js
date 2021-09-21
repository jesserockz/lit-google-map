(function (exports) {
    'use strict';

    /**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const t$1=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e$3=Symbol(),n$4=new Map;class s$2{constructor(t,n){if(this._$cssResult$=!0,n!==e$3)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t;}get styleSheet(){let e=n$4.get(this.cssText);return t$1&&void 0===e&&(n$4.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const o$3=t=>new s$2("string"==typeof t?t:t+"",e$3),r$3=(t,...n)=>{const o=1===t.length?t[0]:n.reduce(((e,n,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[s+1]),t[0]);return new s$2(o,e$3)},i$2=(e,n)=>{t$1?e.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((t=>{const n=document.createElement("style"),s=window.litNonce;void 0!==s&&n.setAttribute("nonce",s),n.textContent=t.cssText,e.appendChild(n);}));},S$1=t$1?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return o$3(e)})(t):t;

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */var s$1,e$2;const r$2={toAttribute(t,i){switch(i){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},h$1=(t,i)=>i!==t&&(i==i||t==t),o$2={attribute:!0,type:String,converter:r$2,reflect:!1,hasChanged:h$1};class n$3 extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o();}static addInitializer(t){var i;null!==(i=this.l)&&void 0!==i||(this.l=[]),this.l.push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Eh(s,i);void 0!==e&&(this._$Eu.set(e,s),t.push(e));})),t}static createProperty(t,i=o$2){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||o$2}static finalize(){if(this.hasOwnProperty("finalized"))return !1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(S$1(i));}else void 0!==i&&s.push(S$1(i));return s}static _$Eh(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ev=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Ep(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$Em)&&void 0!==i?i:this._$Em=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$Em)||void 0===i||i.splice(this._$Em.indexOf(t)>>>0,1);}_$Ep(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Et.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return i$2(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Em)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$Eg(t,i,s=o$2){var e,h;const n=this.constructor._$Eh(t,s);if(void 0!==n&&!0===s.reflect){const o=(null!==(h=null===(e=s.converter)||void 0===e?void 0:e.toAttribute)&&void 0!==h?h:r$2.toAttribute)(i,s.type);this._$Ei=t,null==o?this.removeAttribute(n):this.setAttribute(n,o),this._$Ei=null;}}_$AK(t,i){var s,e,h;const o=this.constructor,n=o._$Eu.get(t);if(void 0!==n&&this._$Ei!==n){const t=o.getPropertyOptions(n),l=t.converter,a=null!==(h=null!==(e=null===(s=l)||void 0===s?void 0:s.fromAttribute)&&void 0!==e?e:"function"==typeof l?l:null)&&void 0!==h?h:r$2.fromAttribute;this._$Ei=n,this[n]=a(i,t.type),this._$Ei=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||h$1)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$Ei!==t&&(void 0===this._$ES&&(this._$ES=new Map),this._$ES.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$Ev=this._$EC());}async _$EC(){this.isUpdatePending=!0;try{await this._$Ev;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,i)=>this[i]=t)),this._$Et=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$Em)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$ET();}catch(t){throw i=!1,this._$ET(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$Em)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$ET(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ev}shouldUpdate(t){return !0}update(t){void 0!==this._$ES&&(this._$ES.forEach(((t,i)=>this._$Eg(i,this[i],t))),this._$ES=void 0),this._$ET();}updated(t){}firstUpdated(t){}}n$3.finalized=!0,n$3.elementProperties=new Map,n$3.elementStyles=[],n$3.shadowRootOptions={mode:"open"},null===(s$1=globalThis.reactiveElementPolyfillSupport)||void 0===s$1||s$1.call(globalThis,{ReactiveElement:n$3}),(null!==(e$2=globalThis.reactiveElementVersions)&&void 0!==e$2?e$2:globalThis.reactiveElementVersions=[]).push("1.0.0");

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    var t,i$1;const s=globalThis.trustedTypes,e$1=s?s.createPolicy("lit-html",{createHTML:t=>t}):void 0,o$1=`lit$${(Math.random()+"").slice(9)}$`,n$2="?"+o$1,l$1=`<${n$2}>`,h=document,r$1=(t="")=>h.createComment(t),d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,v=t=>{var i;return u(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])},c=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,a=/-->/g,f=/>/g,_=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,g=/'/g,m=/"/g,$=/^(?:script|style|textarea)$/i,p=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),y=p(1),T=Symbol.for("lit-noChange"),x=Symbol.for("lit-nothing"),w=new WeakMap,A=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new S(i.insertBefore(r$1(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l},C=h.createTreeWalker(h,129,null,!1),P=(t,i)=>{const s=t.length-1,n=[];let h,r=2===i?"<svg>":"",d=c;for(let i=0;i<s;i++){const s=t[i];let e,u,v=-1,p=0;for(;p<s.length&&(d.lastIndex=p,u=d.exec(s),null!==u);)p=d.lastIndex,d===c?"!--"===u[1]?d=a:void 0!==u[1]?d=f:void 0!==u[2]?($.test(u[2])&&(h=RegExp("</"+u[2],"g")),d=_):void 0!==u[3]&&(d=_):d===_?">"===u[0]?(d=null!=h?h:c,v=-1):void 0===u[1]?v=-2:(v=d.lastIndex-u[2].length,e=u[1],d=void 0===u[3]?_:'"'===u[3]?m:g):d===m||d===g?d=_:d===a||d===f?d=c:(d=_,h=void 0);const y=d===_&&t[i+1].startsWith("/>")?" ":"";r+=d===c?s+l$1:v>=0?(n.push(e),s.slice(0,v)+"$lit$"+s.slice(v)+o$1+y):s+o$1+(-2===v?(n.push(void 0),i):y);}const u=r+(t[s]||"<?>")+(2===i?"</svg>":"");return [void 0!==e$1?e$1.createHTML(u):u,n]};class V{constructor({strings:t,_$litType$:i},e){let l;this.parts=[];let h=0,d=0;const u=t.length-1,v=this.parts,[c,a]=P(t,i);if(this.el=V.createElement(c,e),C.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(l=C.nextNode())&&v.length<u;){if(1===l.nodeType){if(l.hasAttributes()){const t=[];for(const i of l.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(o$1)){const s=a[d++];if(t.push(i),void 0!==s){const t=l.getAttribute(s.toLowerCase()+"$lit$").split(o$1),i=/([.?@])?(.*)/.exec(s);v.push({type:1,index:h,name:i[2],strings:t,ctor:"."===i[1]?k:"?"===i[1]?H:"@"===i[1]?I:M});}else v.push({type:6,index:h});}for(const i of t)l.removeAttribute(i);}if($.test(l.tagName)){const t=l.textContent.split(o$1),i=t.length-1;if(i>0){l.textContent=s?s.emptyScript:"";for(let s=0;s<i;s++)l.append(t[s],r$1()),C.nextNode(),v.push({type:2,index:++h});l.append(t[i],r$1());}}}else if(8===l.nodeType)if(l.data===n$2)v.push({type:2,index:h});else {let t=-1;for(;-1!==(t=l.data.indexOf(o$1,t+1));)v.push({type:7,index:h}),t+=o$1.length-1;}h++;}}static createElement(t,i){const s=h.createElement("template");return s.innerHTML=t,s}}function E(t,i,s=t,e){var o,n,l,h;if(i===T)return i;let r=void 0!==e?null===(o=s._$Cl)||void 0===o?void 0:o[e]:s._$Cu;const u=d(i)?void 0:i._$litDirective$;return (null==r?void 0:r.constructor)!==u&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===u?r=void 0:(r=new u(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Cl)&&void 0!==l?l:h._$Cl=[])[e]=r:s._$Cu=r),void 0!==r&&(i=E(t,r._$AS(t,i.values),r,e)),i}class N{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:h).importNode(s,!0);C.currentNode=o;let n=C.nextNode(),l=0,r=0,d=e[0];for(;void 0!==d;){if(l===d.index){let i;2===d.type?i=new S(n,n.nextSibling,this,t):1===d.type?i=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(i=new L(n,this,t)),this.v.push(i),d=e[++r];}l!==(null==d?void 0:d.index)&&(n=C.nextNode(),l++);}return o}m(t){let i=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class S{constructor(t,i,s,e){var o;this.type=2,this._$AH=x,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cg=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=E(this,t,i),d(t)?t===x||null==t||""===t?(this._$AH!==x&&this._$AR(),this._$AH=x):t!==this._$AH&&t!==T&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):v(t)?this.M(t):this.$(t);}A(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t));}$(t){this._$AH!==x&&d(this._$AH)?this._$AA.nextSibling.data=t:this.S(h.createTextNode(t)),this._$AH=t;}T(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=V.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.m(s);else {const t=new N(o,this),i=t.p(this.options);t.m(s),this.S(i),this._$AH=t;}}_$AC(t){let i=w.get(t.strings);return void 0===i&&w.set(t.strings,i=new V(t)),i}M(t){u(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new S(this.A(r$1()),this.A(r$1()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cg=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class M{constructor(t,i,s,e,o){this.type=1,this._$AH=x,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=x;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=E(this,t,i,0),n=!d(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=E(this,e[s+l],i,l),h===T&&(h=this._$AH[l]),n||(n=!d(h)||h!==this._$AH[l]),h===x?t=x:t!==x&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.k(t);}k(t){t===x?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class k extends M{constructor(){super(...arguments),this.type=3;}k(t){this.element[this.name]=t===x?void 0:t;}}class H extends M{constructor(){super(...arguments),this.type=4;}k(t){t&&t!==x?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name);}}class I extends M{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=E(this,t,i,0))&&void 0!==s?s:x)===T)return;const e=this._$AH,o=t===x&&e!==x||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==x&&(e===x||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){E(this,t);}}null===(t=globalThis.litHtmlPolyfillSupport)||void 0===t||t.call(globalThis,V,S),(null!==(i$1=globalThis.litHtmlVersions)&&void 0!==i$1?i$1:globalThis.litHtmlVersions=[]).push("2.0.0");

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */var l,o,r;class n$1 extends n$3{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=A(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1);}render(){return T}}n$1.finalized=!0,n$1._$litElement$=!0,null===(l=globalThis.litElementHydrateSupport)||void 0===l||l.call(globalThis,{LitElement:n$1}),null===(o=globalThis.litElementPolyfillSupport)||void 0===o||o.call(globalThis,{LitElement:n$1});(null!==(r=globalThis.litElementVersions)&&void 0!==r?r:globalThis.litElementVersions=[]).push("3.0.0");

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const n=n=>e=>"function"==typeof e?((n,e)=>(window.customElements.define(n,e),e))(n,e):((n,e)=>{const{kind:t,elements:i}=e;return {kind:t,elements:i,finisher(e){window.customElements.define(n,e);}}})(n,e);

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const i=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}};function e(e){return (n,t)=>void 0!==t?((i,e,n)=>{e.constructor.createProperty(n,i);})(e,n,t):i(e,n)}

    class ScriptLoaderMap {
        constructor() {
            this.apiMap = {};
        }
        require(url, notifyCallback, jsonpCallbackName) {
            var name = this.nameFromUrl(url);
            if (!this.apiMap[name])
                this.apiMap[name] = new ScriptLoader(name, url, jsonpCallbackName);
            this.apiMap[name].requestNotify(notifyCallback);
        }
        static getInstance() {
            if (!ScriptLoaderMap.instance) {
                ScriptLoaderMap.instance = new ScriptLoaderMap();
            }
            return ScriptLoaderMap.instance;
        }
        nameFromUrl(url) {
            return url.replace(/[\:\/\%\?\&\.\=\-\,]/g, '_') + '_api';
        }
    }
    class ScriptLoader {
        constructor(name, url, callbackName) {
            this.callbackMacro = '%%callback%%';
            this.loaded = false;
            this.script = null;
            this.notifiers = [];
            if (!callbackName) {
                if (url.indexOf(this.callbackMacro) >= 0) {
                    callbackName = name + '_loaded';
                    url = url.replace(this.callbackMacro, callbackName);
                }
                else {
                    console.error('ScriptLoader class: a %%callback%% parameter is required in libraryUrl');
                    return;
                }
            }
            this.callbackName = callbackName;
            window[this.callbackName] = this.success.bind(this);
            this.addScript(url);
        }
        addScript(src) {
            var script = document.createElement('script');
            script.src = src;
            script.onerror = this.handleError.bind(this);
            var s = document.querySelector('script') || document.body;
            s.parentNode.insertBefore(script, s);
            this.script = script;
        }
        removeScript() {
            if (this.script.parentNode) {
                this.script.parentNode.removeChild(this.script);
            }
            this.script = null;
        }
        handleError(ev) {
            this.error = new Error('Library failed to load');
            this.notifyAll();
            this.cleanup();
        }
        success() {
            this.loaded = true;
            this.result = Array.prototype.slice.call(arguments);
            this.notifyAll();
            this.cleanup();
        }
        cleanup() {
            delete window[this.callbackName];
        }
        notifyAll() {
            this.notifiers.forEach(function (notifyCallback) {
                notifyCallback(this.error, this.result);
            }.bind(this));
            this.notifiers = [];
        }
        requestNotify(notifyCallback) {
            if (this.loaded || this.error) {
                notifyCallback(this.error, this.result);
            }
            else {
                this.notifiers.push(notifyCallback);
            }
        }
    }

    var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata$3 = (undefined && undefined.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    class JsonpLibraryElement extends n$1 {
        constructor() {
            super(...arguments);
            this.libraryLoaded = false;
            this.libraryErrorMessage = null;
            this.isReady = false;
        }
        get callbackName() {
            return null;
        }
        libraryUrlChanged() {
            if (this.isReady && this.libraryUrl != null)
                this.loadLibrary();
        }
        libraryLoadCallback(error, detail) {
            if (error) {
                console.warn('Library load failed:', error.message);
                this.libraryErrorMessage = error.message;
            }
            else {
                this.libraryErrorMessage = null;
                this.libraryLoaded = true;
                if (this.notifyEvent != null) {
                    this.dispatchEvent(new CustomEvent(this.notifyEvent, { detail: detail, composed: true }));
                }
            }
        }
        loadLibrary() {
            ScriptLoaderMap.getInstance().require(this.libraryUrl, this.libraryLoadCallback.bind(this), this.callbackName);
        }
        connectedCallback() {
            super.connectedCallback();
            this.isReady = true;
            if (this.libraryUrl != null)
                this.loadLibrary();
        }
    }
    exports.LitGoogleMapsApi = class LitGoogleMapsApi extends JsonpLibraryElement {
        constructor() {
            super(...arguments);
            this.apiKey = '';
            this.clientId = '';
            this.mapsUrl = 'https://maps.googleapis.com/maps/api/js?callback=%%callback%%';
            this.version = '3.43';
            this.language = '';
            this.mapId = '';
        }
        get libraryUrl() {
            return this.computeUrl(this.mapsUrl, this.version, this.apiKey, this.clientId, this.language, this.mapId);
        }
        get notifyEvent() {
            return 'api-load';
        }
        computeUrl(mapsUrl, version, apiKey, clientId, language, mapId) {
            var url = mapsUrl + '&v=' + version;
            url += '&libraries=drawing,geometry,places,visualization';
            if (apiKey && !clientId) {
                url += '&key=' + apiKey;
            }
            if (clientId) {
                url += '&client=' + clientId;
            }
            if (!apiKey && !clientId) {
                var warning = 'No Google Maps API Key or Client ID specified. ' +
                    'See https://developers.google.com/maps/documentation/javascript/get-api-key ' +
                    'for instructions to get started with a key or client id.';
                console.warn(warning);
            }
            if (language) {
                url += '&language=' + language;
            }
            if (mapId) {
                url += '&map_ids=' + mapId;
            }
            return url;
        }
    };
    __decorate$3([
        e({ type: String, attribute: 'api-key' }),
        __metadata$3("design:type", Object)
    ], exports.LitGoogleMapsApi.prototype, "apiKey", void 0);
    __decorate$3([
        e({ type: String, attribute: 'client-id' }),
        __metadata$3("design:type", Object)
    ], exports.LitGoogleMapsApi.prototype, "clientId", void 0);
    __decorate$3([
        e({ type: String, attribute: 'maps-url' }),
        __metadata$3("design:type", Object)
    ], exports.LitGoogleMapsApi.prototype, "mapsUrl", void 0);
    __decorate$3([
        e({ type: String }),
        __metadata$3("design:type", Object)
    ], exports.LitGoogleMapsApi.prototype, "version", void 0);
    __decorate$3([
        e({ type: String }),
        __metadata$3("design:type", Object)
    ], exports.LitGoogleMapsApi.prototype, "language", void 0);
    __decorate$3([
        e({ type: String }),
        __metadata$3("design:type", Object)
    ], exports.LitGoogleMapsApi.prototype, "mapId", void 0);
    exports.LitGoogleMapsApi = __decorate$3([
        n('lit-google-maps-api')
    ], exports.LitGoogleMapsApi);

    var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata$2 = (undefined && undefined.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    exports.LitGoogleMapMarker = class LitGoogleMapMarker extends n$1 {
        constructor() {
            super(...arguments);
            this.latitude = 0;
            this.longitude = 0;
            this.label = null;
            this.labelStyles = {};
            this.zIndex = 0;
            this.open = false;
            this.icon = null;
            this.iconStyles = null;
            this.map = null;
            this.marker = null;
        }
        attributeChangedCallback(name, oldval, newval) {
            var _a, _b;
            super.attributeChangedCallback(name, oldval, newval);
            switch (name) {
                case 'open': {
                    this.openChanged();
                    break;
                }
                case 'latitude': {
                    this.updatePosition();
                    break;
                }
                case 'longitude': {
                    this.updatePosition();
                    break;
                }
                case 'label': {
                    (_a = this.marker) === null || _a === void 0 ? void 0 : _a.setLabel(newval);
                    break;
                }
                case 'z-index': {
                    if (typeof newval == "number") {
                        (_b = this.marker) === null || _b === void 0 ? void 0 : _b.setZIndex(newval);
                    }
                    break;
                }
            }
        }
        openChanged() {
            if (!this.info)
                return;
            if (this.open) {
                this.info.open(this.map, this.marker);
                this.dispatchEvent(new CustomEvent('google-map-marker-open', { bubbles: true }));
            }
            else {
                this.info.close();
                this.dispatchEvent(new CustomEvent('google-map-marker-close', { bubbles: true }));
            }
        }
        updatePosition() {
            var _a;
            (_a = this.marker) === null || _a === void 0 ? void 0 : _a.setPosition(new google.maps.LatLng(this.latitude, this.longitude));
        }
        removeMap() {
            this.map = null;
            this.mapChanged();
        }
        changeMap(newMap) {
            this.map = newMap;
            this.mapChanged();
        }
        mapChanged() {
            if (this.marker) {
                this.marker.setMap(null);
                google.maps.event.clearInstanceListeners(this.marker);
            }
            if (this.map && this.map instanceof google.maps.Map) {
                this.mapReady();
            }
        }
        mapReady() {
            let iconStyles;
            if (this.iconStyles) {
                iconStyles = {
                    size: new google.maps.Size(this.iconStyles.size.width, this.iconStyles.size.height),
                    scaledSize: new google.maps.Size(this.iconStyles.scaledSize.width, this.iconStyles.scaledSize.height),
                    anchor: new google.maps.Point(this.iconStyles.anchor.x, this.iconStyles.anchor.y),
                    labelOrigin: new google.maps.Point(this.iconStyles.labelOrigin.x, this.iconStyles.labelOrigin.y)
                };
            }
            else {
                iconStyles = {};
            }
            this.marker = new google.maps.Marker({
                map: this.map,
                icon: Object.assign({ url: this.icon }, iconStyles),
                position: {
                    lat: this.latitude,
                    lng: this.longitude
                },
                label: Object.assign({ text: this.label }, this.labelStyles),
                zIndex: this.zIndex
            });
            this.contentChanged();
        }
        contentChanged() {
            if (this.contentObserver)
                this.contentObserver.disconnect();
            this.contentObserver = new MutationObserver(this.contentChanged.bind(this));
            this.contentObserver.observe(this, {
                childList: true,
                subtree: true
            });
            var content = this.innerHTML.trim();
            if (content) {
                if (this.info) {
                    google.maps.event.removeListener(this.openInfoHandler);
                    google.maps.event.removeListener(this.closeInfoHandler);
                    this.info = null;
                }
                this.info = new google.maps.InfoWindow();
                this.openInfoHandler = google.maps.event.addListener(this.marker, 'click', function () {
                    this.open = true;
                }.bind(this));
                this.closeInfoHandler = google.maps.event.addListener(this.info, 'closeclick', function () {
                    this.open = false;
                }.bind(this));
                this.info.setContent(content);
            }
            else {
                if (this.info) {
                    google.maps.event.removeListener(this.openInfoHandler);
                    google.maps.event.removeListener(this.closeInfoHandler);
                    this.info = null;
                }
            }
        }
    };
    __decorate$2([
        e({ type: Number, reflect: true }),
        __metadata$2("design:type", Number)
    ], exports.LitGoogleMapMarker.prototype, "latitude", void 0);
    __decorate$2([
        e({ type: Number, reflect: true }),
        __metadata$2("design:type", Number)
    ], exports.LitGoogleMapMarker.prototype, "longitude", void 0);
    __decorate$2([
        e({ type: String, reflect: true }),
        __metadata$2("design:type", String)
    ], exports.LitGoogleMapMarker.prototype, "label", void 0);
    __decorate$2([
        e({ type: Object }),
        __metadata$2("design:type", Object)
    ], exports.LitGoogleMapMarker.prototype, "labelStyles", void 0);
    __decorate$2([
        e({ type: Number, reflect: true, attribute: 'z-index' }),
        __metadata$2("design:type", Number)
    ], exports.LitGoogleMapMarker.prototype, "zIndex", void 0);
    __decorate$2([
        e({ type: Boolean, reflect: true }),
        __metadata$2("design:type", Boolean)
    ], exports.LitGoogleMapMarker.prototype, "open", void 0);
    __decorate$2([
        e({ type: String, reflect: true }),
        __metadata$2("design:type", String)
    ], exports.LitGoogleMapMarker.prototype, "icon", void 0);
    __decorate$2([
        e({ type: Object }),
        __metadata$2("design:type", Object)
    ], exports.LitGoogleMapMarker.prototype, "iconStyles", void 0);
    exports.LitGoogleMapMarker = __decorate$2([
        n('lit-google-map-marker')
    ], exports.LitGoogleMapMarker);

    var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata$1 = (undefined && undefined.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    exports.LitGoogleMap = class LitGoogleMap extends n$1 {
        constructor() {
            super(...arguments);
            this.apiKey = '';
            this.version = '3.39';
            this.styles = {};
            this.zoom = 8;
            this.fitToMarkers = false;
            this.mapType = 'roadmap';
            this.centerLatitude = 39.1031;
            this.centerLongitude = -84.5120;
            this.setCenter = false;
            this.setRadius = 0;
            this.radiusColor = '#f99d1c';
            this.radiusBorderColor = '#f99d1c';
            this.radiusOpacity = 0.3;
            this.radiusBorderOpacity = 0.8;
            this.radiusBorderWeight = 2;
            this.language = '';
            this.mapId = '';
            this.map = null;
            this.markerObserverSet = false;
            this.attrObserverSet = false;
            this.circle = null;
        }
        initGMap() {
            if (this.map != null) {
                return;
            }
            var gMapApiElement = this.shadowRoot.getElementById('api');
            if (gMapApiElement == null || gMapApiElement.libraryLoaded != true) {
                return;
            }
            this.map = new google.maps.Map(this.shadowRoot.getElementById('map'), this.getMapOptions());
            this.updateMarkers();
        }
        getMapOptions() {
            return {
                zoom: this.zoom,
                center: { lat: this.centerLatitude, lng: this.centerLongitude },
                mapTypeId: this.mapType,
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
        attachChildrenToMap(children) {
            if (this.map) {
                for (var i = 0, child; child = children[i]; ++i) {
                    child.changeMap(this.map);
                }
            }
        }
        removeChildrenFromMap(children) {
            if (this.map) {
                for (var i = 0, child; child = children[i]; ++i) {
                    child.removeMap();
                }
            }
        }
        observeMarkers() {
            if (this.markerObserverSet)
                return;
            this.addEventListener("selector-items-changed", event => { this.updateMarkers(); });
            this.markerObserverSet = true;
        }
        observeAttrs() {
            if (this.attrObserverSet)
                return;
            this.addEventListener("map-attrs-changed", event => {
                if (this.fitToMarkers) {
                    this.fitToMarkersChanged();
                }
                else if (this.setCenter) {
                    this.setCenterPoint();
                }
                else if (this.setRadius > 0) {
                    this.setRadiusCircle();
                }
            });
            this.attrObserverSet = true;
        }
        updateMarkers() {
            this.observeMarkers();
            this.observeAttrs();
            var markersSelector = this.shadowRoot.getElementById("markers-selector");
            if (!markersSelector)
                return;
            var newMarkers = markersSelector.items;
            if (this.markers && newMarkers.length === this.markers.length) {
                var added = newMarkers.filter(m => {
                    return this.markers && this.markers.indexOf(m) === -1;
                });
                if (added.length == 0)
                    return;
            }
            if (this.markers) {
                this.removeChildrenFromMap(this.markers);
            }
            this.markers = newMarkers;
            this.attachChildrenToMap(this.markers);
            if (this.fitToMarkers) {
                this.fitToMarkersChanged();
                return;
            }
            if (this.setRadius > 0) {
                this.setRadiusCircle();
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
                    latLngBounds.extend(new google.maps.LatLng(this.centerLatitude, this.centerLongitude));
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
                    this.circle.setMap(this.map);
                    latLngBounds.union(radius.getBounds());
                }
                if (this.markers.length > 1 || this.setCenter) {
                    this.map.fitBounds(latLngBounds);
                }
                if (!this.setCenter) {
                    this.map.setCenter(latLngBounds.getCenter());
                    this.map.panToBounds;
                    return;
                }
                this.setCenterPoint();
            }
        }
        setCenterPoint() {
            this.map.setCenter(new google.maps.LatLng(this.centerLatitude, this.centerLongitude));
            if (this.setRadius > 0) {
                this.setRadiusCircle();
                return;
            }
            this.map.panTo(new google.maps.LatLng(this.centerLatitude, this.centerLongitude));
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
        deselectMarker(event) {
        }
        static get styles() {
            return r$3 `
            #map {
                width: 100%;
                height: 100%;
            }
        `;
        }
        render() {
            return y `
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
    };
    __decorate$1([
        e({ type: String, attribute: 'api-key' }),
        __metadata$1("design:type", String)
    ], exports.LitGoogleMap.prototype, "apiKey", void 0);
    __decorate$1([
        e({ type: String }),
        __metadata$1("design:type", String)
    ], exports.LitGoogleMap.prototype, "version", void 0);
    __decorate$1([
        e({ type: Object }),
        __metadata$1("design:type", Object)
    ], exports.LitGoogleMap.prototype, "styles", void 0);
    __decorate$1([
        e({ type: Number }),
        __metadata$1("design:type", Number)
    ], exports.LitGoogleMap.prototype, "zoom", void 0);
    __decorate$1([
        e({ type: Boolean, attribute: 'fit-to-markers' }),
        __metadata$1("design:type", Boolean)
    ], exports.LitGoogleMap.prototype, "fitToMarkers", void 0);
    __decorate$1([
        e({ type: String, attribute: 'map-type' }),
        __metadata$1("design:type", String)
    ], exports.LitGoogleMap.prototype, "mapType", void 0);
    __decorate$1([
        e({ type: Number, attribute: 'center-latitude' }),
        __metadata$1("design:type", Number)
    ], exports.LitGoogleMap.prototype, "centerLatitude", void 0);
    __decorate$1([
        e({ type: Number, attribute: 'center-longitude' }),
        __metadata$1("design:type", Number)
    ], exports.LitGoogleMap.prototype, "centerLongitude", void 0);
    __decorate$1([
        e({ type: Boolean, attribute: 'set-center' }),
        __metadata$1("design:type", Boolean)
    ], exports.LitGoogleMap.prototype, "setCenter", void 0);
    __decorate$1([
        e({ type: Number, attribute: 'set-radius' }),
        __metadata$1("design:type", Number)
    ], exports.LitGoogleMap.prototype, "setRadius", void 0);
    __decorate$1([
        e({ type: String, attribute: 'radius-color' }),
        __metadata$1("design:type", String)
    ], exports.LitGoogleMap.prototype, "radiusColor", void 0);
    __decorate$1([
        e({ type: String, attribute: 'radius-border-color' }),
        __metadata$1("design:type", String)
    ], exports.LitGoogleMap.prototype, "radiusBorderColor", void 0);
    __decorate$1([
        e({ type: Number, attribute: 'radius-opacity' }),
        __metadata$1("design:type", Number)
    ], exports.LitGoogleMap.prototype, "radiusOpacity", void 0);
    __decorate$1([
        e({ type: Number, attribute: 'radius-border-opacity' }),
        __metadata$1("design:type", Number)
    ], exports.LitGoogleMap.prototype, "radiusBorderOpacity", void 0);
    __decorate$1([
        e({ type: Number, attribute: 'radius-border-weight' }),
        __metadata$1("design:type", Number)
    ], exports.LitGoogleMap.prototype, "radiusBorderWeight", void 0);
    __decorate$1([
        e({ type: String }),
        __metadata$1("design:type", String)
    ], exports.LitGoogleMap.prototype, "language", void 0);
    __decorate$1([
        e({ type: String }),
        __metadata$1("design:type", String)
    ], exports.LitGoogleMap.prototype, "mapId", void 0);
    exports.LitGoogleMap = __decorate$1([
        n('lit-google-map')
    ], exports.LitGoogleMap);

    class XSelection {
        constructor(selectCallback) {
            this.multi = false;
            this.selection = [];
            this.selectCallback = selectCallback;
        }
        get() {
            return this.multi ? this.selection.slice() : this.selection[0];
        }
        clear(excludes) {
            this.selection.slice().forEach(item => {
                if (!excludes || excludes.indexOf(item) < 0)
                    this.setItemSelected(item, false);
            });
        }
        isSelected(item) {
            return this.selection.indexOf(item) >= 0;
        }
        setItemSelected(item, isSelected) {
            if (item == null || isSelected == this.isSelected(item))
                return;
            if (isSelected) {
                this.selection.push(item);
            }
            else {
                var i = this.selection.indexOf(item);
                if (i >= 0) {
                    this.selection.splice(i, 1);
                }
            }
            if (this.selectCallback) {
                this.selectCallback(item, isSelected);
            }
        }
        select(item) {
            if (this.multi) {
                this.toggle(item);
            }
            else if (this.get() !== item) {
                this.setItemSelected(this.get(), false);
                this.setItemSelected(item, true);
            }
        }
        toggle(item) {
            this.setItemSelected(item, !this.isSelected(item));
        }
    }

    var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (undefined && undefined.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    exports.LitSelector = class LitSelector extends n$1 {
        constructor() {
            super(...arguments);
            this.activateEvent = 'tap';
            this.selectedAttribute = null;
            this.selected = null;
            this._selection = new XSelection((item, isSelected) => this.applySelection(item, isSelected));
            this._items = [];
        }
        get items() {
            return this._items;
        }
        connectedCallback() {
            super.connectedCallback();
            this.addEventListener('slotchange', event => {
                event.stopPropagation();
                this.updateItems();
                this.dispatchEvent(new CustomEvent("selector-items-changed", { detail: {}, composed: true }));
            });
            this.addListener(this.activateEvent);
            this.observer = new MutationObserver(() => this.updateMap());
            this.observer.observe(this, { attributes: true });
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            this.removeListener(this.activateEvent);
            this.observer.disconnect();
        }
        attributeChangedCallback(name, oldval, newval) {
            super.attributeChangedCallback(name, oldval, newval);
            switch (name) {
                case 'selected': {
                    this.updateSelected();
                    break;
                }
            }
        }
        applySelection(item, isSelected) {
            if (this.selectedAttribute && item instanceof Element) {
                if (isSelected != item.hasAttribute(this.selectedAttribute))
                    item.toggleAttribute(this.selectedAttribute);
            }
        }
        updateMap() {
            this.dispatchEvent(new CustomEvent("map-attrs-changed", { detail: {}, composed: true }));
        }
        updateItems() {
            var _a;
            var slotElement = this.querySelector("slot");
            this._items = (_a = slotElement === null || slotElement === void 0 ? void 0 : slotElement.assignedNodes()) !== null && _a !== void 0 ? _a : [];
        }
        addListener(eventName) {
            this.addEventListener(eventName, (event) => this.activateHandler(event));
        }
        removeListener(eventName) {
            this.removeEventListener(eventName, (event) => this.activateHandler(event));
        }
        activateHandler(event) {
            var t = event.target;
            var items = this.items;
            while (t && t != this) {
                var i = items.indexOf(t);
                if (i >= 0) {
                    var value = this.indexToValue(i);
                    this.itemActivate(value, t);
                    return;
                }
                t = t.parentNode;
            }
        }
        itemActivate(value, item) {
            if (this.dispatchEvent(new CustomEvent('selector-item-activate', { detail: { selected: value, item: item }, composed: true, cancelable: true })))
                this.select(value);
        }
        select(value) {
            this.selected = value;
        }
        updateSelected() {
            this.selectSelected(this.selected);
        }
        selectSelected(selected) {
            if (!this._items)
                return;
            var item = this.valueToItem(this.selected);
            if (item) {
                this._selection.select(item);
            }
            else {
                this._selection.clear();
            }
        }
        valueToItem(value) {
            return (value == null) ? null : this._items[this.valueToIndex(value)];
        }
        valueToIndex(value) {
            return Number(value);
        }
        indexToValue(index) {
            return index;
        }
        indexOf(item) {
            return this._items ? this._items.indexOf(item) : -1;
        }
    };
    __decorate([
        e({ type: String, attribute: 'activate-event' }),
        __metadata("design:type", String)
    ], exports.LitSelector.prototype, "activateEvent", void 0);
    __decorate([
        e({ type: String, attribute: 'selected-attribute' }),
        __metadata("design:type", String)
    ], exports.LitSelector.prototype, "selectedAttribute", void 0);
    __decorate([
        e({ type: Number, reflect: true }),
        __metadata("design:type", Object)
    ], exports.LitSelector.prototype, "selected", void 0);
    exports.LitSelector = __decorate([
        n('lit-selector')
    ], exports.LitSelector);

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}));
