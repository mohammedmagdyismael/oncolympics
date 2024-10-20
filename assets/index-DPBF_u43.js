(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function ho(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Hf={exports:{}},Wi={},Wf={exports:{}},b={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mo=Symbol.for("react.element"),vm=Symbol.for("react.portal"),xm=Symbol.for("react.fragment"),wm=Symbol.for("react.strict_mode"),Sm=Symbol.for("react.profiler"),Em=Symbol.for("react.provider"),km=Symbol.for("react.context"),Cm=Symbol.for("react.forward_ref"),jm=Symbol.for("react.suspense"),_m=Symbol.for("react.memo"),Rm=Symbol.for("react.lazy"),ku=Symbol.iterator;function Pm(e){return e===null||typeof e!="object"?null:(e=ku&&e[ku]||e["@@iterator"],typeof e=="function"?e:null)}var Vf={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Qf=Object.assign,Kf={};function cr(e,t,n){this.props=e,this.context=t,this.refs=Kf,this.updater=n||Vf}cr.prototype.isReactComponent={};cr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};cr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function qf(){}qf.prototype=cr.prototype;function ha(e,t,n){this.props=e,this.context=t,this.refs=Kf,this.updater=n||Vf}var ma=ha.prototype=new qf;ma.constructor=ha;Qf(ma,cr.prototype);ma.isPureReactComponent=!0;var Cu=Array.isArray,Yf=Object.prototype.hasOwnProperty,ga={current:null},Gf={key:!0,ref:!0,__self:!0,__source:!0};function Xf(e,t,n){var r,o={},i=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)Yf.call(t,r)&&!Gf.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];o.children=a}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:mo,type:e,key:i,ref:s,props:o,_owner:ga.current}}function Tm(e,t){return{$$typeof:mo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ya(e){return typeof e=="object"&&e!==null&&e.$$typeof===mo}function Om(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ju=/\/+/g;function ws(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Om(""+e.key):t.toString(36)}function Ko(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case mo:case vm:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+ws(s,0):r,Cu(o)?(n="",e!=null&&(n=e.replace(ju,"$&/")+"/"),Ko(o,t,n,"",function(u){return u})):o!=null&&(ya(o)&&(o=Tm(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(ju,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=r===""?".":r+":",Cu(e))for(var l=0;l<e.length;l++){i=e[l];var a=r+ws(i,l);s+=Ko(i,t,n,a,o)}else if(a=Pm(e),typeof a=="function")for(e=a.call(e),l=0;!(i=e.next()).done;)i=i.value,a=r+ws(i,l++),s+=Ko(i,t,n,a,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function _o(e,t,n){if(e==null)return e;var r=[],o=0;return Ko(e,r,"","",function(i){return t.call(n,i,o++)}),r}function $m(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Oe={current:null},qo={transition:null},Nm={ReactCurrentDispatcher:Oe,ReactCurrentBatchConfig:qo,ReactCurrentOwner:ga};function Jf(){throw Error("act(...) is not supported in production builds of React.")}b.Children={map:_o,forEach:function(e,t,n){_o(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return _o(e,function(){t++}),t},toArray:function(e){return _o(e,function(t){return t})||[]},only:function(e){if(!ya(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};b.Component=cr;b.Fragment=xm;b.Profiler=Sm;b.PureComponent=ha;b.StrictMode=wm;b.Suspense=jm;b.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Nm;b.act=Jf;b.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Qf({},e.props),o=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=ga.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)Yf.call(t,a)&&!Gf.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&l!==void 0?l[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:mo,type:e.type,key:o,ref:i,props:r,_owner:s}};b.createContext=function(e){return e={$$typeof:km,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Em,_context:e},e.Consumer=e};b.createElement=Xf;b.createFactory=function(e){var t=Xf.bind(null,e);return t.type=e,t};b.createRef=function(){return{current:null}};b.forwardRef=function(e){return{$$typeof:Cm,render:e}};b.isValidElement=ya;b.lazy=function(e){return{$$typeof:Rm,_payload:{_status:-1,_result:e},_init:$m}};b.memo=function(e,t){return{$$typeof:_m,type:e,compare:t===void 0?null:t}};b.startTransition=function(e){var t=qo.transition;qo.transition={};try{e()}finally{qo.transition=t}};b.unstable_act=Jf;b.useCallback=function(e,t){return Oe.current.useCallback(e,t)};b.useContext=function(e){return Oe.current.useContext(e)};b.useDebugValue=function(){};b.useDeferredValue=function(e){return Oe.current.useDeferredValue(e)};b.useEffect=function(e,t){return Oe.current.useEffect(e,t)};b.useId=function(){return Oe.current.useId()};b.useImperativeHandle=function(e,t,n){return Oe.current.useImperativeHandle(e,t,n)};b.useInsertionEffect=function(e,t){return Oe.current.useInsertionEffect(e,t)};b.useLayoutEffect=function(e,t){return Oe.current.useLayoutEffect(e,t)};b.useMemo=function(e,t){return Oe.current.useMemo(e,t)};b.useReducer=function(e,t,n){return Oe.current.useReducer(e,t,n)};b.useRef=function(e){return Oe.current.useRef(e)};b.useState=function(e){return Oe.current.useState(e)};b.useSyncExternalStore=function(e,t,n){return Oe.current.useSyncExternalStore(e,t,n)};b.useTransition=function(){return Oe.current.useTransition()};b.version="18.3.1";Wf.exports=b;var A=Wf.exports;const Z=ho(A);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lm=A,Am=Symbol.for("react.element"),zm=Symbol.for("react.fragment"),Im=Object.prototype.hasOwnProperty,Mm=Lm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Dm={key:!0,ref:!0,__self:!0,__source:!0};function Zf(e,t,n){var r,o={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Im.call(t,r)&&!Dm.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Am,type:e,key:i,ref:s,props:o,_owner:Mm.current}}Wi.Fragment=zm;Wi.jsx=Zf;Wi.jsxs=Zf;Hf.exports=Wi;var d=Hf.exports,ed={exports:{}},qe={},td={exports:{}},nd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,O){var L=T.length;T.push(O);e:for(;0<L;){var D=L-1>>>1,I=T[D];if(0<o(I,O))T[D]=O,T[L]=I,L=D;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var O=T[0],L=T.pop();if(L!==O){T[0]=L;e:for(var D=0,I=T.length,fe=I>>>1;D<fe;){var re=2*(D+1)-1,Ne=T[re],ae=re+1,de=T[ae];if(0>o(Ne,L))ae<I&&0>o(de,Ne)?(T[D]=de,T[ae]=L,D=ae):(T[D]=Ne,T[re]=L,D=re);else if(ae<I&&0>o(de,L))T[D]=de,T[ae]=L,D=ae;else break e}}return O}function o(T,O){var L=T.sortIndex-O.sortIndex;return L!==0?L:T.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var a=[],u=[],c=1,f=null,h=3,x=!1,y=!1,w=!1,C=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(T){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=T)r(u),O.sortIndex=O.expirationTime,t(a,O);else break;O=n(u)}}function S(T){if(w=!1,g(T),!y)if(n(a)!==null)y=!0,Ge(_);else{var O=n(u);O!==null&&ot(S,O.startTime-T)}}function _(T,O){y=!1,w&&(w=!1,m(P),P=-1),x=!0;var L=h;try{for(g(O),f=n(a);f!==null&&(!(f.expirationTime>O)||T&&!Q());){var D=f.callback;if(typeof D=="function"){f.callback=null,h=f.priorityLevel;var I=D(f.expirationTime<=O);O=e.unstable_now(),typeof I=="function"?f.callback=I:f===n(a)&&r(a),g(O)}else r(a);f=n(a)}if(f!==null)var fe=!0;else{var re=n(u);re!==null&&ot(S,re.startTime-O),fe=!1}return fe}finally{f=null,h=L,x=!1}}var E=!1,j=null,P=-1,U=5,z=-1;function Q(){return!(e.unstable_now()-z<U)}function we(){if(j!==null){var T=e.unstable_now();z=T;var O=!0;try{O=j(!0,T)}finally{O?be():(E=!1,j=null)}}else E=!1}var be;if(typeof p=="function")be=function(){p(we)};else if(typeof MessageChannel<"u"){var Se=new MessageChannel,gt=Se.port2;Se.port1.onmessage=we,be=function(){gt.postMessage(null)}}else be=function(){C(we,0)};function Ge(T){j=T,E||(E=!0,be())}function ot(T,O){P=C(function(){T(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){y||x||(y=!0,Ge(_))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(T){switch(h){case 1:case 2:case 3:var O=3;break;default:O=h}var L=h;h=O;try{return T()}finally{h=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,O){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var L=h;h=T;try{return O()}finally{h=L}},e.unstable_scheduleCallback=function(T,O,L){var D=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?D+L:D):L=D,T){case 1:var I=-1;break;case 2:I=250;break;case 5:I=1073741823;break;case 4:I=1e4;break;default:I=5e3}return I=L+I,T={id:c++,callback:O,priorityLevel:T,startTime:L,expirationTime:I,sortIndex:-1},L>D?(T.sortIndex=L,t(u,T),n(a)===null&&T===n(u)&&(w?(m(P),P=-1):w=!0,ot(S,L-D))):(T.sortIndex=I,t(a,T),y||x||(y=!0,Ge(_))),T},e.unstable_shouldYield=Q,e.unstable_wrapCallback=function(T){var O=h;return function(){var L=h;h=O;try{return T.apply(this,arguments)}finally{h=L}}}})(nd);td.exports=nd;var Fm=td.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Um=A,Ke=Fm;function R(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var rd=new Set,Kr={};function Rn(e,t){Xn(e,t),Xn(e+"Capture",t)}function Xn(e,t){for(Kr[e]=t,e=0;e<t.length;e++)rd.add(t[e])}var Ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),il=Object.prototype.hasOwnProperty,bm=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_u={},Ru={};function Bm(e){return il.call(Ru,e)?!0:il.call(_u,e)?!1:bm.test(e)?Ru[e]=!0:(_u[e]=!0,!1)}function Hm(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Wm(e,t,n,r){if(t===null||typeof t>"u"||Hm(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function $e(e,t,n,r,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){xe[e]=new $e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];xe[t]=new $e(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){xe[e]=new $e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){xe[e]=new $e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){xe[e]=new $e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){xe[e]=new $e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){xe[e]=new $e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){xe[e]=new $e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){xe[e]=new $e(e,5,!1,e.toLowerCase(),null,!1,!1)});var va=/[\-:]([a-z])/g;function xa(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(va,xa);xe[t]=new $e(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(va,xa);xe[t]=new $e(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(va,xa);xe[t]=new $e(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){xe[e]=new $e(e,1,!1,e.toLowerCase(),null,!1,!1)});xe.xlinkHref=new $e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){xe[e]=new $e(e,1,!1,e.toLowerCase(),null,!0,!0)});function wa(e,t,n,r){var o=xe.hasOwnProperty(t)?xe[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Wm(t,n,o,r)&&(n=null),r||o===null?Bm(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var At=Um.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ro=Symbol.for("react.element"),$n=Symbol.for("react.portal"),Nn=Symbol.for("react.fragment"),Sa=Symbol.for("react.strict_mode"),sl=Symbol.for("react.profiler"),od=Symbol.for("react.provider"),id=Symbol.for("react.context"),Ea=Symbol.for("react.forward_ref"),ll=Symbol.for("react.suspense"),al=Symbol.for("react.suspense_list"),ka=Symbol.for("react.memo"),Ut=Symbol.for("react.lazy"),sd=Symbol.for("react.offscreen"),Pu=Symbol.iterator;function vr(e){return e===null||typeof e!="object"?null:(e=Pu&&e[Pu]||e["@@iterator"],typeof e=="function"?e:null)}var te=Object.assign,Ss;function Nr(e){if(Ss===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ss=t&&t[1]||""}return`
`+Ss+e}var Es=!1;function ks(e,t){if(!e||Es)return"";Es=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),s=o.length-1,l=i.length-1;1<=s&&0<=l&&o[s]!==i[l];)l--;for(;1<=s&&0<=l;s--,l--)if(o[s]!==i[l]){if(s!==1||l!==1)do if(s--,l--,0>l||o[s]!==i[l]){var a=`
`+o[s].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=s&&0<=l);break}}}finally{Es=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Nr(e):""}function Vm(e){switch(e.tag){case 5:return Nr(e.type);case 16:return Nr("Lazy");case 13:return Nr("Suspense");case 19:return Nr("SuspenseList");case 0:case 2:case 15:return e=ks(e.type,!1),e;case 11:return e=ks(e.type.render,!1),e;case 1:return e=ks(e.type,!0),e;default:return""}}function ul(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Nn:return"Fragment";case $n:return"Portal";case sl:return"Profiler";case Sa:return"StrictMode";case ll:return"Suspense";case al:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case id:return(e.displayName||"Context")+".Consumer";case od:return(e._context.displayName||"Context")+".Provider";case Ea:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ka:return t=e.displayName||null,t!==null?t:ul(e.type)||"Memo";case Ut:t=e._payload,e=e._init;try{return ul(e(t))}catch{}}return null}function Qm(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ul(t);case 8:return t===Sa?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function en(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ld(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Km(e){var t=ld(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Po(e){e._valueTracker||(e._valueTracker=Km(e))}function ad(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ld(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function pi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function cl(e,t){var n=t.checked;return te({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Tu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=en(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ud(e,t){t=t.checked,t!=null&&wa(e,"checked",t,!1)}function fl(e,t){ud(e,t);var n=en(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?dl(e,t.type,n):t.hasOwnProperty("defaultValue")&&dl(e,t.type,en(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Ou(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function dl(e,t,n){(t!=="number"||pi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Lr=Array.isArray;function Wn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+en(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function pl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(R(91));return te({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function $u(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(R(92));if(Lr(n)){if(1<n.length)throw Error(R(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:en(n)}}function cd(e,t){var n=en(t.value),r=en(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Nu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function fd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function hl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?fd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var To,dd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(To=To||document.createElement("div"),To.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=To.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function qr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Mr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qm=["Webkit","ms","Moz","O"];Object.keys(Mr).forEach(function(e){qm.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Mr[t]=Mr[e]})});function pd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Mr.hasOwnProperty(e)&&Mr[e]?(""+t).trim():t+"px"}function hd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=pd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Ym=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ml(e,t){if(t){if(Ym[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(R(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(R(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(R(61))}if(t.style!=null&&typeof t.style!="object")throw Error(R(62))}}function gl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yl=null;function Ca(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var vl=null,Vn=null,Qn=null;function Lu(e){if(e=vo(e)){if(typeof vl!="function")throw Error(R(280));var t=e.stateNode;t&&(t=Yi(t),vl(e.stateNode,e.type,t))}}function md(e){Vn?Qn?Qn.push(e):Qn=[e]:Vn=e}function gd(){if(Vn){var e=Vn,t=Qn;if(Qn=Vn=null,Lu(e),t)for(e=0;e<t.length;e++)Lu(t[e])}}function yd(e,t){return e(t)}function vd(){}var Cs=!1;function xd(e,t,n){if(Cs)return e(t,n);Cs=!0;try{return yd(e,t,n)}finally{Cs=!1,(Vn!==null||Qn!==null)&&(vd(),gd())}}function Yr(e,t){var n=e.stateNode;if(n===null)return null;var r=Yi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(R(231,t,typeof n));return n}var xl=!1;if(Ot)try{var xr={};Object.defineProperty(xr,"passive",{get:function(){xl=!0}}),window.addEventListener("test",xr,xr),window.removeEventListener("test",xr,xr)}catch{xl=!1}function Gm(e,t,n,r,o,i,s,l,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Dr=!1,hi=null,mi=!1,wl=null,Xm={onError:function(e){Dr=!0,hi=e}};function Jm(e,t,n,r,o,i,s,l,a){Dr=!1,hi=null,Gm.apply(Xm,arguments)}function Zm(e,t,n,r,o,i,s,l,a){if(Jm.apply(this,arguments),Dr){if(Dr){var u=hi;Dr=!1,hi=null}else throw Error(R(198));mi||(mi=!0,wl=u)}}function Pn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function wd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Au(e){if(Pn(e)!==e)throw Error(R(188))}function eg(e){var t=e.alternate;if(!t){if(t=Pn(e),t===null)throw Error(R(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Au(o),e;if(i===r)return Au(o),t;i=i.sibling}throw Error(R(188))}if(n.return!==r.return)n=o,r=i;else{for(var s=!1,l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s){for(l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?e:t}function Sd(e){return e=eg(e),e!==null?Ed(e):null}function Ed(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ed(e);if(t!==null)return t;e=e.sibling}return null}var kd=Ke.unstable_scheduleCallback,zu=Ke.unstable_cancelCallback,tg=Ke.unstable_shouldYield,ng=Ke.unstable_requestPaint,oe=Ke.unstable_now,rg=Ke.unstable_getCurrentPriorityLevel,ja=Ke.unstable_ImmediatePriority,Cd=Ke.unstable_UserBlockingPriority,gi=Ke.unstable_NormalPriority,og=Ke.unstable_LowPriority,jd=Ke.unstable_IdlePriority,Vi=null,Et=null;function ig(e){if(Et&&typeof Et.onCommitFiberRoot=="function")try{Et.onCommitFiberRoot(Vi,e,void 0,(e.current.flags&128)===128)}catch{}}var ft=Math.clz32?Math.clz32:ag,sg=Math.log,lg=Math.LN2;function ag(e){return e>>>=0,e===0?32:31-(sg(e)/lg|0)|0}var Oo=64,$o=4194304;function Ar(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function yi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~o;l!==0?r=Ar(l):(i&=s,i!==0&&(r=Ar(i)))}else s=n&~o,s!==0?r=Ar(s):i!==0&&(r=Ar(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ft(t),o=1<<n,r|=e[n],t&=~o;return r}function ug(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cg(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-ft(i),l=1<<s,a=o[s];a===-1?(!(l&n)||l&r)&&(o[s]=ug(l,t)):a<=t&&(e.expiredLanes|=l),i&=~l}}function Sl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function _d(){var e=Oo;return Oo<<=1,!(Oo&4194240)&&(Oo=64),e}function js(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function go(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ft(t),e[t]=n}function fg(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-ft(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function _a(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ft(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var V=0;function Rd(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Pd,Ra,Td,Od,$d,El=!1,No=[],Qt=null,Kt=null,qt=null,Gr=new Map,Xr=new Map,Bt=[],dg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Iu(e,t){switch(e){case"focusin":case"focusout":Qt=null;break;case"dragenter":case"dragleave":Kt=null;break;case"mouseover":case"mouseout":qt=null;break;case"pointerover":case"pointerout":Gr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xr.delete(t.pointerId)}}function wr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=vo(t),t!==null&&Ra(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function pg(e,t,n,r,o){switch(t){case"focusin":return Qt=wr(Qt,e,t,n,r,o),!0;case"dragenter":return Kt=wr(Kt,e,t,n,r,o),!0;case"mouseover":return qt=wr(qt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Gr.set(i,wr(Gr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Xr.set(i,wr(Xr.get(i)||null,e,t,n,r,o)),!0}return!1}function Nd(e){var t=un(e.target);if(t!==null){var n=Pn(t);if(n!==null){if(t=n.tag,t===13){if(t=wd(n),t!==null){e.blockedOn=t,$d(e.priority,function(){Td(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=kl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);yl=r,n.target.dispatchEvent(r),yl=null}else return t=vo(n),t!==null&&Ra(t),e.blockedOn=n,!1;t.shift()}return!0}function Mu(e,t,n){Yo(e)&&n.delete(t)}function hg(){El=!1,Qt!==null&&Yo(Qt)&&(Qt=null),Kt!==null&&Yo(Kt)&&(Kt=null),qt!==null&&Yo(qt)&&(qt=null),Gr.forEach(Mu),Xr.forEach(Mu)}function Sr(e,t){e.blockedOn===t&&(e.blockedOn=null,El||(El=!0,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,hg)))}function Jr(e){function t(o){return Sr(o,e)}if(0<No.length){Sr(No[0],e);for(var n=1;n<No.length;n++){var r=No[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Qt!==null&&Sr(Qt,e),Kt!==null&&Sr(Kt,e),qt!==null&&Sr(qt,e),Gr.forEach(t),Xr.forEach(t),n=0;n<Bt.length;n++)r=Bt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Bt.length&&(n=Bt[0],n.blockedOn===null);)Nd(n),n.blockedOn===null&&Bt.shift()}var Kn=At.ReactCurrentBatchConfig,vi=!0;function mg(e,t,n,r){var o=V,i=Kn.transition;Kn.transition=null;try{V=1,Pa(e,t,n,r)}finally{V=o,Kn.transition=i}}function gg(e,t,n,r){var o=V,i=Kn.transition;Kn.transition=null;try{V=4,Pa(e,t,n,r)}finally{V=o,Kn.transition=i}}function Pa(e,t,n,r){if(vi){var o=kl(e,t,n,r);if(o===null)zs(e,t,r,xi,n),Iu(e,r);else if(pg(o,e,t,n,r))r.stopPropagation();else if(Iu(e,r),t&4&&-1<dg.indexOf(e)){for(;o!==null;){var i=vo(o);if(i!==null&&Pd(i),i=kl(e,t,n,r),i===null&&zs(e,t,r,xi,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else zs(e,t,r,null,n)}}var xi=null;function kl(e,t,n,r){if(xi=null,e=Ca(r),e=un(e),e!==null)if(t=Pn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=wd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return xi=e,null}function Ld(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(rg()){case ja:return 1;case Cd:return 4;case gi:case og:return 16;case jd:return 536870912;default:return 16}default:return 16}}var Wt=null,Ta=null,Go=null;function Ad(){if(Go)return Go;var e,t=Ta,n=t.length,r,o="value"in Wt?Wt.value:Wt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[i-r];r++);return Go=o.slice(e,1<r?1-r:void 0)}function Xo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Lo(){return!0}function Du(){return!1}function Ye(e){function t(n,r,o,i,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Lo:Du,this.isPropagationStopped=Du,this}return te(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Lo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Lo)},persist:function(){},isPersistent:Lo}),t}var fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Oa=Ye(fr),yo=te({},fr,{view:0,detail:0}),yg=Ye(yo),_s,Rs,Er,Qi=te({},yo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:$a,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Er&&(Er&&e.type==="mousemove"?(_s=e.screenX-Er.screenX,Rs=e.screenY-Er.screenY):Rs=_s=0,Er=e),_s)},movementY:function(e){return"movementY"in e?e.movementY:Rs}}),Fu=Ye(Qi),vg=te({},Qi,{dataTransfer:0}),xg=Ye(vg),wg=te({},yo,{relatedTarget:0}),Ps=Ye(wg),Sg=te({},fr,{animationName:0,elapsedTime:0,pseudoElement:0}),Eg=Ye(Sg),kg=te({},fr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Cg=Ye(kg),jg=te({},fr,{data:0}),Uu=Ye(jg),_g={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Rg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Pg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Tg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Pg[e])?!!t[e]:!1}function $a(){return Tg}var Og=te({},yo,{key:function(e){if(e.key){var t=_g[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Xo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Rg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:$a,charCode:function(e){return e.type==="keypress"?Xo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$g=Ye(Og),Ng=te({},Qi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),bu=Ye(Ng),Lg=te({},yo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:$a}),Ag=Ye(Lg),zg=te({},fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ig=Ye(zg),Mg=te({},Qi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Dg=Ye(Mg),Fg=[9,13,27,32],Na=Ot&&"CompositionEvent"in window,Fr=null;Ot&&"documentMode"in document&&(Fr=document.documentMode);var Ug=Ot&&"TextEvent"in window&&!Fr,zd=Ot&&(!Na||Fr&&8<Fr&&11>=Fr),Bu=" ",Hu=!1;function Id(e,t){switch(e){case"keyup":return Fg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Md(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ln=!1;function bg(e,t){switch(e){case"compositionend":return Md(t);case"keypress":return t.which!==32?null:(Hu=!0,Bu);case"textInput":return e=t.data,e===Bu&&Hu?null:e;default:return null}}function Bg(e,t){if(Ln)return e==="compositionend"||!Na&&Id(e,t)?(e=Ad(),Go=Ta=Wt=null,Ln=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return zd&&t.locale!=="ko"?null:t.data;default:return null}}var Hg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Hg[e.type]:t==="textarea"}function Dd(e,t,n,r){md(r),t=wi(t,"onChange"),0<t.length&&(n=new Oa("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ur=null,Zr=null;function Wg(e){Yd(e,0)}function Ki(e){var t=In(e);if(ad(t))return e}function Vg(e,t){if(e==="change")return t}var Fd=!1;if(Ot){var Ts;if(Ot){var Os="oninput"in document;if(!Os){var Vu=document.createElement("div");Vu.setAttribute("oninput","return;"),Os=typeof Vu.oninput=="function"}Ts=Os}else Ts=!1;Fd=Ts&&(!document.documentMode||9<document.documentMode)}function Qu(){Ur&&(Ur.detachEvent("onpropertychange",Ud),Zr=Ur=null)}function Ud(e){if(e.propertyName==="value"&&Ki(Zr)){var t=[];Dd(t,Zr,e,Ca(e)),xd(Wg,t)}}function Qg(e,t,n){e==="focusin"?(Qu(),Ur=t,Zr=n,Ur.attachEvent("onpropertychange",Ud)):e==="focusout"&&Qu()}function Kg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ki(Zr)}function qg(e,t){if(e==="click")return Ki(t)}function Yg(e,t){if(e==="input"||e==="change")return Ki(t)}function Gg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ht=typeof Object.is=="function"?Object.is:Gg;function eo(e,t){if(ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!il.call(t,o)||!ht(e[o],t[o]))return!1}return!0}function Ku(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function qu(e,t){var n=Ku(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ku(n)}}function bd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?bd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Bd(){for(var e=window,t=pi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=pi(e.document)}return t}function La(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Xg(e){var t=Bd(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&bd(n.ownerDocument.documentElement,n)){if(r!==null&&La(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=qu(n,i);var s=qu(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Jg=Ot&&"documentMode"in document&&11>=document.documentMode,An=null,Cl=null,br=null,jl=!1;function Yu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;jl||An==null||An!==pi(r)||(r=An,"selectionStart"in r&&La(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),br&&eo(br,r)||(br=r,r=wi(Cl,"onSelect"),0<r.length&&(t=new Oa("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=An)))}function Ao(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var zn={animationend:Ao("Animation","AnimationEnd"),animationiteration:Ao("Animation","AnimationIteration"),animationstart:Ao("Animation","AnimationStart"),transitionend:Ao("Transition","TransitionEnd")},$s={},Hd={};Ot&&(Hd=document.createElement("div").style,"AnimationEvent"in window||(delete zn.animationend.animation,delete zn.animationiteration.animation,delete zn.animationstart.animation),"TransitionEvent"in window||delete zn.transitionend.transition);function qi(e){if($s[e])return $s[e];if(!zn[e])return e;var t=zn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Hd)return $s[e]=t[n];return e}var Wd=qi("animationend"),Vd=qi("animationiteration"),Qd=qi("animationstart"),Kd=qi("transitionend"),qd=new Map,Gu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nn(e,t){qd.set(e,t),Rn(t,[e])}for(var Ns=0;Ns<Gu.length;Ns++){var Ls=Gu[Ns],Zg=Ls.toLowerCase(),e0=Ls[0].toUpperCase()+Ls.slice(1);nn(Zg,"on"+e0)}nn(Wd,"onAnimationEnd");nn(Vd,"onAnimationIteration");nn(Qd,"onAnimationStart");nn("dblclick","onDoubleClick");nn("focusin","onFocus");nn("focusout","onBlur");nn(Kd,"onTransitionEnd");Xn("onMouseEnter",["mouseout","mouseover"]);Xn("onMouseLeave",["mouseout","mouseover"]);Xn("onPointerEnter",["pointerout","pointerover"]);Xn("onPointerLeave",["pointerout","pointerover"]);Rn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),t0=new Set("cancel close invalid load scroll toggle".split(" ").concat(zr));function Xu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Zm(r,t,void 0,e),e.currentTarget=null}function Yd(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==i&&o.isPropagationStopped())break e;Xu(o,l,u),i=a}else for(s=0;s<r.length;s++){if(l=r[s],a=l.instance,u=l.currentTarget,l=l.listener,a!==i&&o.isPropagationStopped())break e;Xu(o,l,u),i=a}}}if(mi)throw e=wl,mi=!1,wl=null,e}function q(e,t){var n=t[Ol];n===void 0&&(n=t[Ol]=new Set);var r=e+"__bubble";n.has(r)||(Gd(t,e,2,!1),n.add(r))}function As(e,t,n){var r=0;t&&(r|=4),Gd(n,e,r,t)}var zo="_reactListening"+Math.random().toString(36).slice(2);function to(e){if(!e[zo]){e[zo]=!0,rd.forEach(function(n){n!=="selectionchange"&&(t0.has(n)||As(n,!1,e),As(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[zo]||(t[zo]=!0,As("selectionchange",!1,t))}}function Gd(e,t,n,r){switch(Ld(t)){case 1:var o=mg;break;case 4:o=gg;break;default:o=Pa}n=o.bind(null,t,n,e),o=void 0,!xl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function zs(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var a=s.tag;if((a===3||a===4)&&(a=s.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;s=s.return}for(;l!==null;){if(s=un(l),s===null)return;if(a=s.tag,a===5||a===6){r=i=s;continue e}l=l.parentNode}}r=r.return}xd(function(){var u=i,c=Ca(n),f=[];e:{var h=qd.get(e);if(h!==void 0){var x=Oa,y=e;switch(e){case"keypress":if(Xo(n)===0)break e;case"keydown":case"keyup":x=$g;break;case"focusin":y="focus",x=Ps;break;case"focusout":y="blur",x=Ps;break;case"beforeblur":case"afterblur":x=Ps;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Fu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=xg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=Ag;break;case Wd:case Vd:case Qd:x=Eg;break;case Kd:x=Ig;break;case"scroll":x=yg;break;case"wheel":x=Dg;break;case"copy":case"cut":case"paste":x=Cg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=bu}var w=(t&4)!==0,C=!w&&e==="scroll",m=w?h!==null?h+"Capture":null:h;w=[];for(var p=u,g;p!==null;){g=p;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,m!==null&&(S=Yr(p,m),S!=null&&w.push(no(p,S,g)))),C)break;p=p.return}0<w.length&&(h=new x(h,y,null,n,c),f.push({event:h,listeners:w}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",h&&n!==yl&&(y=n.relatedTarget||n.fromElement)&&(un(y)||y[$t]))break e;if((x||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,x?(y=n.relatedTarget||n.toElement,x=u,y=y?un(y):null,y!==null&&(C=Pn(y),y!==C||y.tag!==5&&y.tag!==6)&&(y=null)):(x=null,y=u),x!==y)){if(w=Fu,S="onMouseLeave",m="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(w=bu,S="onPointerLeave",m="onPointerEnter",p="pointer"),C=x==null?h:In(x),g=y==null?h:In(y),h=new w(S,p+"leave",x,n,c),h.target=C,h.relatedTarget=g,S=null,un(c)===u&&(w=new w(m,p+"enter",y,n,c),w.target=g,w.relatedTarget=C,S=w),C=S,x&&y)t:{for(w=x,m=y,p=0,g=w;g;g=Tn(g))p++;for(g=0,S=m;S;S=Tn(S))g++;for(;0<p-g;)w=Tn(w),p--;for(;0<g-p;)m=Tn(m),g--;for(;p--;){if(w===m||m!==null&&w===m.alternate)break t;w=Tn(w),m=Tn(m)}w=null}else w=null;x!==null&&Ju(f,h,x,w,!1),y!==null&&C!==null&&Ju(f,C,y,w,!0)}}e:{if(h=u?In(u):window,x=h.nodeName&&h.nodeName.toLowerCase(),x==="select"||x==="input"&&h.type==="file")var _=Vg;else if(Wu(h))if(Fd)_=Yg;else{_=Kg;var E=Qg}else(x=h.nodeName)&&x.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(_=qg);if(_&&(_=_(e,u))){Dd(f,_,n,c);break e}E&&E(e,h,u),e==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&dl(h,"number",h.value)}switch(E=u?In(u):window,e){case"focusin":(Wu(E)||E.contentEditable==="true")&&(An=E,Cl=u,br=null);break;case"focusout":br=Cl=An=null;break;case"mousedown":jl=!0;break;case"contextmenu":case"mouseup":case"dragend":jl=!1,Yu(f,n,c);break;case"selectionchange":if(Jg)break;case"keydown":case"keyup":Yu(f,n,c)}var j;if(Na)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Ln?Id(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(zd&&n.locale!=="ko"&&(Ln||P!=="onCompositionStart"?P==="onCompositionEnd"&&Ln&&(j=Ad()):(Wt=c,Ta="value"in Wt?Wt.value:Wt.textContent,Ln=!0)),E=wi(u,P),0<E.length&&(P=new Uu(P,e,null,n,c),f.push({event:P,listeners:E}),j?P.data=j:(j=Md(n),j!==null&&(P.data=j)))),(j=Ug?bg(e,n):Bg(e,n))&&(u=wi(u,"onBeforeInput"),0<u.length&&(c=new Uu("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=j))}Yd(f,t)})}function no(e,t,n){return{instance:e,listener:t,currentTarget:n}}function wi(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Yr(e,n),i!=null&&r.unshift(no(e,i,o)),i=Yr(e,t),i!=null&&r.push(no(e,i,o))),e=e.return}return r}function Tn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ju(e,t,n,r,o){for(var i=t._reactName,s=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,o?(a=Yr(n,i),a!=null&&s.unshift(no(n,a,l))):o||(a=Yr(n,i),a!=null&&s.push(no(n,a,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var n0=/\r\n?/g,r0=/\u0000|\uFFFD/g;function Zu(e){return(typeof e=="string"?e:""+e).replace(n0,`
`).replace(r0,"")}function Io(e,t,n){if(t=Zu(t),Zu(e)!==t&&n)throw Error(R(425))}function Si(){}var _l=null,Rl=null;function Pl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Tl=typeof setTimeout=="function"?setTimeout:void 0,o0=typeof clearTimeout=="function"?clearTimeout:void 0,ec=typeof Promise=="function"?Promise:void 0,i0=typeof queueMicrotask=="function"?queueMicrotask:typeof ec<"u"?function(e){return ec.resolve(null).then(e).catch(s0)}:Tl;function s0(e){setTimeout(function(){throw e})}function Is(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Jr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Jr(t)}function Yt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function tc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var dr=Math.random().toString(36).slice(2),wt="__reactFiber$"+dr,ro="__reactProps$"+dr,$t="__reactContainer$"+dr,Ol="__reactEvents$"+dr,l0="__reactListeners$"+dr,a0="__reactHandles$"+dr;function un(e){var t=e[wt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[$t]||n[wt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=tc(e);e!==null;){if(n=e[wt])return n;e=tc(e)}return t}e=n,n=e.parentNode}return null}function vo(e){return e=e[wt]||e[$t],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function In(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(R(33))}function Yi(e){return e[ro]||null}var $l=[],Mn=-1;function rn(e){return{current:e}}function G(e){0>Mn||(e.current=$l[Mn],$l[Mn]=null,Mn--)}function K(e,t){Mn++,$l[Mn]=e.current,e.current=t}var tn={},je=rn(tn),Ie=rn(!1),Sn=tn;function Jn(e,t){var n=e.type.contextTypes;if(!n)return tn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Me(e){return e=e.childContextTypes,e!=null}function Ei(){G(Ie),G(je)}function nc(e,t,n){if(je.current!==tn)throw Error(R(168));K(je,t),K(Ie,n)}function Xd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(R(108,Qm(e)||"Unknown",o));return te({},n,r)}function ki(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||tn,Sn=je.current,K(je,e),K(Ie,Ie.current),!0}function rc(e,t,n){var r=e.stateNode;if(!r)throw Error(R(169));n?(e=Xd(e,t,Sn),r.__reactInternalMemoizedMergedChildContext=e,G(Ie),G(je),K(je,e)):G(Ie),K(Ie,n)}var _t=null,Gi=!1,Ms=!1;function Jd(e){_t===null?_t=[e]:_t.push(e)}function u0(e){Gi=!0,Jd(e)}function on(){if(!Ms&&_t!==null){Ms=!0;var e=0,t=V;try{var n=_t;for(V=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}_t=null,Gi=!1}catch(o){throw _t!==null&&(_t=_t.slice(e+1)),kd(ja,on),o}finally{V=t,Ms=!1}}return null}var Dn=[],Fn=0,Ci=null,ji=0,Xe=[],Je=0,En=null,Rt=1,Pt="";function ln(e,t){Dn[Fn++]=ji,Dn[Fn++]=Ci,Ci=e,ji=t}function Zd(e,t,n){Xe[Je++]=Rt,Xe[Je++]=Pt,Xe[Je++]=En,En=e;var r=Rt;e=Pt;var o=32-ft(r)-1;r&=~(1<<o),n+=1;var i=32-ft(t)+o;if(30<i){var s=o-o%5;i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,Rt=1<<32-ft(t)+o|n<<o|r,Pt=i+e}else Rt=1<<i|n<<o|r,Pt=e}function Aa(e){e.return!==null&&(ln(e,1),Zd(e,1,0))}function za(e){for(;e===Ci;)Ci=Dn[--Fn],Dn[Fn]=null,ji=Dn[--Fn],Dn[Fn]=null;for(;e===En;)En=Xe[--Je],Xe[Je]=null,Pt=Xe[--Je],Xe[Je]=null,Rt=Xe[--Je],Xe[Je]=null}var Ve=null,We=null,X=!1,ct=null;function ep(e,t){var n=Ze(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function oc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ve=e,We=Yt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ve=e,We=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=En!==null?{id:Rt,overflow:Pt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ze(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ve=e,We=null,!0):!1;default:return!1}}function Nl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ll(e){if(X){var t=We;if(t){var n=t;if(!oc(e,t)){if(Nl(e))throw Error(R(418));t=Yt(n.nextSibling);var r=Ve;t&&oc(e,t)?ep(r,n):(e.flags=e.flags&-4097|2,X=!1,Ve=e)}}else{if(Nl(e))throw Error(R(418));e.flags=e.flags&-4097|2,X=!1,Ve=e}}}function ic(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ve=e}function Mo(e){if(e!==Ve)return!1;if(!X)return ic(e),X=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Pl(e.type,e.memoizedProps)),t&&(t=We)){if(Nl(e))throw tp(),Error(R(418));for(;t;)ep(e,t),t=Yt(t.nextSibling)}if(ic(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(R(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){We=Yt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}We=null}}else We=Ve?Yt(e.stateNode.nextSibling):null;return!0}function tp(){for(var e=We;e;)e=Yt(e.nextSibling)}function Zn(){We=Ve=null,X=!1}function Ia(e){ct===null?ct=[e]:ct.push(e)}var c0=At.ReactCurrentBatchConfig;function kr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var l=o.refs;s===null?delete l[i]:l[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,e))}return e}function Do(e,t){throw e=Object.prototype.toString.call(t),Error(R(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function sc(e){var t=e._init;return t(e._payload)}function np(e){function t(m,p){if(e){var g=m.deletions;g===null?(m.deletions=[p],m.flags|=16):g.push(p)}}function n(m,p){if(!e)return null;for(;p!==null;)t(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function o(m,p){return m=Zt(m,p),m.index=0,m.sibling=null,m}function i(m,p,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<p?(m.flags|=2,p):g):(m.flags|=2,p)):(m.flags|=1048576,p)}function s(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,p,g,S){return p===null||p.tag!==6?(p=Ws(g,m.mode,S),p.return=m,p):(p=o(p,g),p.return=m,p)}function a(m,p,g,S){var _=g.type;return _===Nn?c(m,p,g.props.children,S,g.key):p!==null&&(p.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Ut&&sc(_)===p.type)?(S=o(p,g.props),S.ref=kr(m,p,g),S.return=m,S):(S=oi(g.type,g.key,g.props,null,m.mode,S),S.ref=kr(m,p,g),S.return=m,S)}function u(m,p,g,S){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=Vs(g,m.mode,S),p.return=m,p):(p=o(p,g.children||[]),p.return=m,p)}function c(m,p,g,S,_){return p===null||p.tag!==7?(p=gn(g,m.mode,S,_),p.return=m,p):(p=o(p,g),p.return=m,p)}function f(m,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Ws(""+p,m.mode,g),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ro:return g=oi(p.type,p.key,p.props,null,m.mode,g),g.ref=kr(m,null,p),g.return=m,g;case $n:return p=Vs(p,m.mode,g),p.return=m,p;case Ut:var S=p._init;return f(m,S(p._payload),g)}if(Lr(p)||vr(p))return p=gn(p,m.mode,g,null),p.return=m,p;Do(m,p)}return null}function h(m,p,g,S){var _=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return _!==null?null:l(m,p,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ro:return g.key===_?a(m,p,g,S):null;case $n:return g.key===_?u(m,p,g,S):null;case Ut:return _=g._init,h(m,p,_(g._payload),S)}if(Lr(g)||vr(g))return _!==null?null:c(m,p,g,S,null);Do(m,g)}return null}function x(m,p,g,S,_){if(typeof S=="string"&&S!==""||typeof S=="number")return m=m.get(g)||null,l(p,m,""+S,_);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ro:return m=m.get(S.key===null?g:S.key)||null,a(p,m,S,_);case $n:return m=m.get(S.key===null?g:S.key)||null,u(p,m,S,_);case Ut:var E=S._init;return x(m,p,g,E(S._payload),_)}if(Lr(S)||vr(S))return m=m.get(g)||null,c(p,m,S,_,null);Do(p,S)}return null}function y(m,p,g,S){for(var _=null,E=null,j=p,P=p=0,U=null;j!==null&&P<g.length;P++){j.index>P?(U=j,j=null):U=j.sibling;var z=h(m,j,g[P],S);if(z===null){j===null&&(j=U);break}e&&j&&z.alternate===null&&t(m,j),p=i(z,p,P),E===null?_=z:E.sibling=z,E=z,j=U}if(P===g.length)return n(m,j),X&&ln(m,P),_;if(j===null){for(;P<g.length;P++)j=f(m,g[P],S),j!==null&&(p=i(j,p,P),E===null?_=j:E.sibling=j,E=j);return X&&ln(m,P),_}for(j=r(m,j);P<g.length;P++)U=x(j,m,P,g[P],S),U!==null&&(e&&U.alternate!==null&&j.delete(U.key===null?P:U.key),p=i(U,p,P),E===null?_=U:E.sibling=U,E=U);return e&&j.forEach(function(Q){return t(m,Q)}),X&&ln(m,P),_}function w(m,p,g,S){var _=vr(g);if(typeof _!="function")throw Error(R(150));if(g=_.call(g),g==null)throw Error(R(151));for(var E=_=null,j=p,P=p=0,U=null,z=g.next();j!==null&&!z.done;P++,z=g.next()){j.index>P?(U=j,j=null):U=j.sibling;var Q=h(m,j,z.value,S);if(Q===null){j===null&&(j=U);break}e&&j&&Q.alternate===null&&t(m,j),p=i(Q,p,P),E===null?_=Q:E.sibling=Q,E=Q,j=U}if(z.done)return n(m,j),X&&ln(m,P),_;if(j===null){for(;!z.done;P++,z=g.next())z=f(m,z.value,S),z!==null&&(p=i(z,p,P),E===null?_=z:E.sibling=z,E=z);return X&&ln(m,P),_}for(j=r(m,j);!z.done;P++,z=g.next())z=x(j,m,P,z.value,S),z!==null&&(e&&z.alternate!==null&&j.delete(z.key===null?P:z.key),p=i(z,p,P),E===null?_=z:E.sibling=z,E=z);return e&&j.forEach(function(we){return t(m,we)}),X&&ln(m,P),_}function C(m,p,g,S){if(typeof g=="object"&&g!==null&&g.type===Nn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ro:e:{for(var _=g.key,E=p;E!==null;){if(E.key===_){if(_=g.type,_===Nn){if(E.tag===7){n(m,E.sibling),p=o(E,g.props.children),p.return=m,m=p;break e}}else if(E.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===Ut&&sc(_)===E.type){n(m,E.sibling),p=o(E,g.props),p.ref=kr(m,E,g),p.return=m,m=p;break e}n(m,E);break}else t(m,E);E=E.sibling}g.type===Nn?(p=gn(g.props.children,m.mode,S,g.key),p.return=m,m=p):(S=oi(g.type,g.key,g.props,null,m.mode,S),S.ref=kr(m,p,g),S.return=m,m=S)}return s(m);case $n:e:{for(E=g.key;p!==null;){if(p.key===E)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(m,p.sibling),p=o(p,g.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else t(m,p);p=p.sibling}p=Vs(g,m.mode,S),p.return=m,m=p}return s(m);case Ut:return E=g._init,C(m,p,E(g._payload),S)}if(Lr(g))return y(m,p,g,S);if(vr(g))return w(m,p,g,S);Do(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(m,p.sibling),p=o(p,g),p.return=m,m=p):(n(m,p),p=Ws(g,m.mode,S),p.return=m,m=p),s(m)):n(m,p)}return C}var er=np(!0),rp=np(!1),_i=rn(null),Ri=null,Un=null,Ma=null;function Da(){Ma=Un=Ri=null}function Fa(e){var t=_i.current;G(_i),e._currentValue=t}function Al(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function qn(e,t){Ri=e,Ma=Un=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ae=!0),e.firstContext=null)}function tt(e){var t=e._currentValue;if(Ma!==e)if(e={context:e,memoizedValue:t,next:null},Un===null){if(Ri===null)throw Error(R(308));Un=e,Ri.dependencies={lanes:0,firstContext:e}}else Un=Un.next=e;return t}var cn=null;function Ua(e){cn===null?cn=[e]:cn.push(e)}function op(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Ua(t)):(n.next=o.next,o.next=n),t.interleaved=n,Nt(e,r)}function Nt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var bt=!1;function ba(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ip(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Tt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Gt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,H&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Nt(e,n)}return o=r.interleaved,o===null?(t.next=t,Ua(r)):(t.next=o.next,o.next=t),r.interleaved=t,Nt(e,n)}function Jo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_a(e,n)}}function lc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Pi(e,t,n,r){var o=e.updateQueue;bt=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var a=l,u=a.next;a.next=null,s===null?i=u:s.next=u,s=a;var c=e.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==s&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=a))}if(i!==null){var f=o.baseState;s=0,c=u=a=null,l=i;do{var h=l.lane,x=l.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,w=l;switch(h=t,x=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){f=y.call(x,f,h);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,h=typeof y=="function"?y.call(x,f,h):y,h==null)break e;f=te({},f,h);break e;case 2:bt=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=o.effects,h===null?o.effects=[l]:h.push(l))}else x={eventTime:x,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=x,a=f):c=c.next=x,s|=h;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;h=l,l=h.next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}while(!0);if(c===null&&(a=f),o.baseState=a,o.firstBaseUpdate=u,o.lastBaseUpdate=c,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Cn|=s,e.lanes=s,e.memoizedState=f}}function ac(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(R(191,o));o.call(r)}}}var xo={},kt=rn(xo),oo=rn(xo),io=rn(xo);function fn(e){if(e===xo)throw Error(R(174));return e}function Ba(e,t){switch(K(io,t),K(oo,e),K(kt,xo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:hl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=hl(t,e)}G(kt),K(kt,t)}function tr(){G(kt),G(oo),G(io)}function sp(e){fn(io.current);var t=fn(kt.current),n=hl(t,e.type);t!==n&&(K(oo,e),K(kt,n))}function Ha(e){oo.current===e&&(G(kt),G(oo))}var J=rn(0);function Ti(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ds=[];function Wa(){for(var e=0;e<Ds.length;e++)Ds[e]._workInProgressVersionPrimary=null;Ds.length=0}var Zo=At.ReactCurrentDispatcher,Fs=At.ReactCurrentBatchConfig,kn=0,ee=null,ue=null,pe=null,Oi=!1,Br=!1,so=0,f0=0;function Ee(){throw Error(R(321))}function Va(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ht(e[n],t[n]))return!1;return!0}function Qa(e,t,n,r,o,i){if(kn=i,ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Zo.current=e===null||e.memoizedState===null?m0:g0,e=n(r,o),Br){i=0;do{if(Br=!1,so=0,25<=i)throw Error(R(301));i+=1,pe=ue=null,t.updateQueue=null,Zo.current=y0,e=n(r,o)}while(Br)}if(Zo.current=$i,t=ue!==null&&ue.next!==null,kn=0,pe=ue=ee=null,Oi=!1,t)throw Error(R(300));return e}function Ka(){var e=so!==0;return so=0,e}function vt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pe===null?ee.memoizedState=pe=e:pe=pe.next=e,pe}function nt(){if(ue===null){var e=ee.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var t=pe===null?ee.memoizedState:pe.next;if(t!==null)pe=t,ue=e;else{if(e===null)throw Error(R(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},pe===null?ee.memoizedState=pe=e:pe=pe.next=e}return pe}function lo(e,t){return typeof t=="function"?t(e):t}function Us(e){var t=nt(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=ue,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=s=null,a=null,u=i;do{var c=u.lane;if((kn&c)===c)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=f,s=r):a=a.next=f,ee.lanes|=c,Cn|=c}u=u.next}while(u!==null&&u!==i);a===null?s=r:a.next=l,ht(r,t.memoizedState)||(Ae=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ee.lanes|=i,Cn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function bs(e){var t=nt(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do i=e(i,s.action),s=s.next;while(s!==o);ht(i,t.memoizedState)||(Ae=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function lp(){}function ap(e,t){var n=ee,r=nt(),o=t(),i=!ht(r.memoizedState,o);if(i&&(r.memoizedState=o,Ae=!0),r=r.queue,qa(fp.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||pe!==null&&pe.memoizedState.tag&1){if(n.flags|=2048,ao(9,cp.bind(null,n,r,o,t),void 0,null),me===null)throw Error(R(349));kn&30||up(n,t,o)}return o}function up(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ee.updateQueue,t===null?(t={lastEffect:null,stores:null},ee.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function cp(e,t,n,r){t.value=n,t.getSnapshot=r,dp(t)&&pp(e)}function fp(e,t,n){return n(function(){dp(t)&&pp(e)})}function dp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ht(e,n)}catch{return!0}}function pp(e){var t=Nt(e,1);t!==null&&dt(t,e,1,-1)}function uc(e){var t=vt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:lo,lastRenderedState:e},t.queue=e,e=e.dispatch=h0.bind(null,ee,e),[t.memoizedState,e]}function ao(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ee.updateQueue,t===null?(t={lastEffect:null,stores:null},ee.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function hp(){return nt().memoizedState}function ei(e,t,n,r){var o=vt();ee.flags|=e,o.memoizedState=ao(1|t,n,void 0,r===void 0?null:r)}function Xi(e,t,n,r){var o=nt();r=r===void 0?null:r;var i=void 0;if(ue!==null){var s=ue.memoizedState;if(i=s.destroy,r!==null&&Va(r,s.deps)){o.memoizedState=ao(t,n,i,r);return}}ee.flags|=e,o.memoizedState=ao(1|t,n,i,r)}function cc(e,t){return ei(8390656,8,e,t)}function qa(e,t){return Xi(2048,8,e,t)}function mp(e,t){return Xi(4,2,e,t)}function gp(e,t){return Xi(4,4,e,t)}function yp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function vp(e,t,n){return n=n!=null?n.concat([e]):null,Xi(4,4,yp.bind(null,t,e),n)}function Ya(){}function xp(e,t){var n=nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Va(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function wp(e,t){var n=nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Va(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Sp(e,t,n){return kn&21?(ht(n,t)||(n=_d(),ee.lanes|=n,Cn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ae=!0),e.memoizedState=n)}function d0(e,t){var n=V;V=n!==0&&4>n?n:4,e(!0);var r=Fs.transition;Fs.transition={};try{e(!1),t()}finally{V=n,Fs.transition=r}}function Ep(){return nt().memoizedState}function p0(e,t,n){var r=Jt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},kp(e))Cp(t,n);else if(n=op(e,t,n,r),n!==null){var o=Te();dt(n,e,r,o),jp(n,t,r)}}function h0(e,t,n){var r=Jt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(kp(e))Cp(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,l=i(s,n);if(o.hasEagerState=!0,o.eagerState=l,ht(l,s)){var a=t.interleaved;a===null?(o.next=o,Ua(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=op(e,t,o,r),n!==null&&(o=Te(),dt(n,e,r,o),jp(n,t,r))}}function kp(e){var t=e.alternate;return e===ee||t!==null&&t===ee}function Cp(e,t){Br=Oi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function jp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,_a(e,n)}}var $i={readContext:tt,useCallback:Ee,useContext:Ee,useEffect:Ee,useImperativeHandle:Ee,useInsertionEffect:Ee,useLayoutEffect:Ee,useMemo:Ee,useReducer:Ee,useRef:Ee,useState:Ee,useDebugValue:Ee,useDeferredValue:Ee,useTransition:Ee,useMutableSource:Ee,useSyncExternalStore:Ee,useId:Ee,unstable_isNewReconciler:!1},m0={readContext:tt,useCallback:function(e,t){return vt().memoizedState=[e,t===void 0?null:t],e},useContext:tt,useEffect:cc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ei(4194308,4,yp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ei(4194308,4,e,t)},useInsertionEffect:function(e,t){return ei(4,2,e,t)},useMemo:function(e,t){var n=vt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=vt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=p0.bind(null,ee,e),[r.memoizedState,e]},useRef:function(e){var t=vt();return e={current:e},t.memoizedState=e},useState:uc,useDebugValue:Ya,useDeferredValue:function(e){return vt().memoizedState=e},useTransition:function(){var e=uc(!1),t=e[0];return e=d0.bind(null,e[1]),vt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ee,o=vt();if(X){if(n===void 0)throw Error(R(407));n=n()}else{if(n=t(),me===null)throw Error(R(349));kn&30||up(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,cc(fp.bind(null,r,i,e),[e]),r.flags|=2048,ao(9,cp.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=vt(),t=me.identifierPrefix;if(X){var n=Pt,r=Rt;n=(r&~(1<<32-ft(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=so++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=f0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},g0={readContext:tt,useCallback:xp,useContext:tt,useEffect:qa,useImperativeHandle:vp,useInsertionEffect:mp,useLayoutEffect:gp,useMemo:wp,useReducer:Us,useRef:hp,useState:function(){return Us(lo)},useDebugValue:Ya,useDeferredValue:function(e){var t=nt();return Sp(t,ue.memoizedState,e)},useTransition:function(){var e=Us(lo)[0],t=nt().memoizedState;return[e,t]},useMutableSource:lp,useSyncExternalStore:ap,useId:Ep,unstable_isNewReconciler:!1},y0={readContext:tt,useCallback:xp,useContext:tt,useEffect:qa,useImperativeHandle:vp,useInsertionEffect:mp,useLayoutEffect:gp,useMemo:wp,useReducer:bs,useRef:hp,useState:function(){return bs(lo)},useDebugValue:Ya,useDeferredValue:function(e){var t=nt();return ue===null?t.memoizedState=e:Sp(t,ue.memoizedState,e)},useTransition:function(){var e=bs(lo)[0],t=nt().memoizedState;return[e,t]},useMutableSource:lp,useSyncExternalStore:ap,useId:Ep,unstable_isNewReconciler:!1};function st(e,t){if(e&&e.defaultProps){t=te({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function zl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:te({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ji={isMounted:function(e){return(e=e._reactInternals)?Pn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Te(),o=Jt(e),i=Tt(r,o);i.payload=t,n!=null&&(i.callback=n),t=Gt(e,i,o),t!==null&&(dt(t,e,o,r),Jo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Te(),o=Jt(e),i=Tt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Gt(e,i,o),t!==null&&(dt(t,e,o,r),Jo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Te(),r=Jt(e),o=Tt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Gt(e,o,r),t!==null&&(dt(t,e,r,n),Jo(t,e,r))}};function fc(e,t,n,r,o,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):t.prototype&&t.prototype.isPureReactComponent?!eo(n,r)||!eo(o,i):!0}function _p(e,t,n){var r=!1,o=tn,i=t.contextType;return typeof i=="object"&&i!==null?i=tt(i):(o=Me(t)?Sn:je.current,r=t.contextTypes,i=(r=r!=null)?Jn(e,o):tn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ji,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function dc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ji.enqueueReplaceState(t,t.state,null)}function Il(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},ba(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=tt(i):(i=Me(t)?Sn:je.current,o.context=Jn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(zl(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Ji.enqueueReplaceState(o,o.state,null),Pi(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function nr(e,t){try{var n="",r=t;do n+=Vm(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Bs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ml(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var v0=typeof WeakMap=="function"?WeakMap:Map;function Rp(e,t,n){n=Tt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Li||(Li=!0,Kl=r),Ml(e,t)},n}function Pp(e,t,n){n=Tt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ml(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ml(e,t),typeof r!="function"&&(Xt===null?Xt=new Set([this]):Xt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function pc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new v0;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=N0.bind(null,e,t,n),t.then(e,e))}function hc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function mc(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Tt(-1,1),t.tag=2,Gt(n,t,1))),n.lanes|=1),e)}var x0=At.ReactCurrentOwner,Ae=!1;function Re(e,t,n,r){t.child=e===null?rp(t,null,n,r):er(t,e.child,n,r)}function gc(e,t,n,r,o){n=n.render;var i=t.ref;return qn(t,o),r=Qa(e,t,n,r,i,o),n=Ka(),e!==null&&!Ae?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Lt(e,t,o)):(X&&n&&Aa(t),t.flags|=1,Re(e,t,r,o),t.child)}function yc(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!ru(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Tp(e,t,i,r,o)):(e=oi(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:eo,n(s,r)&&e.ref===t.ref)return Lt(e,t,o)}return t.flags|=1,e=Zt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Tp(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(eo(i,r)&&e.ref===t.ref)if(Ae=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Ae=!0);else return t.lanes=e.lanes,Lt(e,t,o)}return Dl(e,t,n,r,o)}function Op(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(Bn,He),He|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,K(Bn,He),He|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,K(Bn,He),He|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,K(Bn,He),He|=r;return Re(e,t,o,n),t.child}function $p(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Dl(e,t,n,r,o){var i=Me(n)?Sn:je.current;return i=Jn(t,i),qn(t,o),n=Qa(e,t,n,r,i,o),r=Ka(),e!==null&&!Ae?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Lt(e,t,o)):(X&&r&&Aa(t),t.flags|=1,Re(e,t,n,o),t.child)}function vc(e,t,n,r,o){if(Me(n)){var i=!0;ki(t)}else i=!1;if(qn(t,o),t.stateNode===null)ti(e,t),_p(t,n,r),Il(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var a=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=tt(u):(u=Me(n)?Sn:je.current,u=Jn(t,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||a!==u)&&dc(t,s,r,u),bt=!1;var h=t.memoizedState;s.state=h,Pi(t,r,s,o),a=t.memoizedState,l!==r||h!==a||Ie.current||bt?(typeof c=="function"&&(zl(t,n,c,r),a=t.memoizedState),(l=bt||fc(t,n,l,r,h,a,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),s.props=r,s.state=a,s.context=u,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,ip(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:st(t.type,l),s.props=u,f=t.pendingProps,h=s.context,a=n.contextType,typeof a=="object"&&a!==null?a=tt(a):(a=Me(n)?Sn:je.current,a=Jn(t,a));var x=n.getDerivedStateFromProps;(c=typeof x=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==f||h!==a)&&dc(t,s,r,a),bt=!1,h=t.memoizedState,s.state=h,Pi(t,r,s,o);var y=t.memoizedState;l!==f||h!==y||Ie.current||bt?(typeof x=="function"&&(zl(t,n,x,r),y=t.memoizedState),(u=bt||fc(t,n,u,r,h,y,a)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,a),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,a)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=a,r=u):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Fl(e,t,n,r,i,o)}function Fl(e,t,n,r,o,i){$p(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&rc(t,n,!1),Lt(e,t,i);r=t.stateNode,x0.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=er(t,e.child,null,i),t.child=er(t,null,l,i)):Re(e,t,l,i),t.memoizedState=r.state,o&&rc(t,n,!0),t.child}function Np(e){var t=e.stateNode;t.pendingContext?nc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&nc(e,t.context,!1),Ba(e,t.containerInfo)}function xc(e,t,n,r,o){return Zn(),Ia(o),t.flags|=256,Re(e,t,n,r),t.child}var Ul={dehydrated:null,treeContext:null,retryLane:0};function bl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Lp(e,t,n){var r=t.pendingProps,o=J.current,i=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),K(J,o&1),e===null)return Ll(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,i?(r=t.mode,i=t.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=ts(s,r,0,null),e=gn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=bl(n),t.memoizedState=Ul,e):Ga(t,s));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return w0(e,t,s,r,l,o,n);if(i){i=r.fallback,s=t.mode,o=e.child,l=o.sibling;var a={mode:"hidden",children:r.children};return!(s&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Zt(o,a),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=Zt(l,i):(i=gn(i,s,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,s=e.child.memoizedState,s=s===null?bl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=Ul,r}return i=e.child,e=i.sibling,r=Zt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ga(e,t){return t=ts({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Fo(e,t,n,r){return r!==null&&Ia(r),er(t,e.child,null,n),e=Ga(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function w0(e,t,n,r,o,i,s){if(n)return t.flags&256?(t.flags&=-257,r=Bs(Error(R(422))),Fo(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=ts({mode:"visible",children:r.children},o,0,null),i=gn(i,o,s,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&er(t,e.child,null,s),t.child.memoizedState=bl(s),t.memoizedState=Ul,i);if(!(t.mode&1))return Fo(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(R(419)),r=Bs(i,r,void 0),Fo(e,t,s,r)}if(l=(s&e.childLanes)!==0,Ae||l){if(r=me,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Nt(e,o),dt(r,e,o,-1))}return nu(),r=Bs(Error(R(421))),Fo(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=L0.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,We=Yt(o.nextSibling),Ve=t,X=!0,ct=null,e!==null&&(Xe[Je++]=Rt,Xe[Je++]=Pt,Xe[Je++]=En,Rt=e.id,Pt=e.overflow,En=t),t=Ga(t,r.children),t.flags|=4096,t)}function wc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Al(e.return,t,n)}function Hs(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Ap(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Re(e,t,r.children,n),r=J.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wc(e,n,t);else if(e.tag===19)wc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(K(J,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Ti(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Hs(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Ti(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Hs(t,!0,n,null,i);break;case"together":Hs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ti(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Lt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Cn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(R(153));if(t.child!==null){for(e=t.child,n=Zt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Zt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function S0(e,t,n){switch(t.tag){case 3:Np(t),Zn();break;case 5:sp(t);break;case 1:Me(t.type)&&ki(t);break;case 4:Ba(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;K(_i,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(K(J,J.current&1),t.flags|=128,null):n&t.child.childLanes?Lp(e,t,n):(K(J,J.current&1),e=Lt(e,t,n),e!==null?e.sibling:null);K(J,J.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Ap(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),K(J,J.current),r)break;return null;case 22:case 23:return t.lanes=0,Op(e,t,n)}return Lt(e,t,n)}var zp,Bl,Ip,Mp;zp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Bl=function(){};Ip=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,fn(kt.current);var i=null;switch(n){case"input":o=cl(e,o),r=cl(e,r),i=[];break;case"select":o=te({},o,{value:void 0}),r=te({},r,{value:void 0}),i=[];break;case"textarea":o=pl(e,o),r=pl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Si)}ml(n,r);var s;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var l=o[u];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Kr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var a=r[u];if(l=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||a&&a.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in a)a.hasOwnProperty(s)&&l[s]!==a[s]&&(n||(n={}),n[s]=a[s])}else n||(i||(i=[]),i.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(i=i||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Kr.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&q("scroll",e),i||l===a||(i=[])):(i=i||[]).push(u,a))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Mp=function(e,t,n,r){n!==r&&(t.flags|=4)};function Cr(e,t){if(!X)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function ke(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function E0(e,t,n){var r=t.pendingProps;switch(za(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ke(t),null;case 1:return Me(t.type)&&Ei(),ke(t),null;case 3:return r=t.stateNode,tr(),G(Ie),G(je),Wa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Mo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ct!==null&&(Gl(ct),ct=null))),Bl(e,t),ke(t),null;case 5:Ha(t);var o=fn(io.current);if(n=t.type,e!==null&&t.stateNode!=null)Ip(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(R(166));return ke(t),null}if(e=fn(kt.current),Mo(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[wt]=t,r[ro]=i,e=(t.mode&1)!==0,n){case"dialog":q("cancel",r),q("close",r);break;case"iframe":case"object":case"embed":q("load",r);break;case"video":case"audio":for(o=0;o<zr.length;o++)q(zr[o],r);break;case"source":q("error",r);break;case"img":case"image":case"link":q("error",r),q("load",r);break;case"details":q("toggle",r);break;case"input":Tu(r,i),q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},q("invalid",r);break;case"textarea":$u(r,i),q("invalid",r)}ml(n,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var l=i[s];s==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Io(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Io(r.textContent,l,e),o=["children",""+l]):Kr.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&q("scroll",r)}switch(n){case"input":Po(r),Ou(r,i,!0);break;case"textarea":Po(r),Nu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Si)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=fd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[wt]=t,e[ro]=r,zp(e,t,!1,!1),t.stateNode=e;e:{switch(s=gl(n,r),n){case"dialog":q("cancel",e),q("close",e),o=r;break;case"iframe":case"object":case"embed":q("load",e),o=r;break;case"video":case"audio":for(o=0;o<zr.length;o++)q(zr[o],e);o=r;break;case"source":q("error",e),o=r;break;case"img":case"image":case"link":q("error",e),q("load",e),o=r;break;case"details":q("toggle",e),o=r;break;case"input":Tu(e,r),o=cl(e,r),q("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=te({},r,{value:void 0}),q("invalid",e);break;case"textarea":$u(e,r),o=pl(e,r),q("invalid",e);break;default:o=r}ml(n,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var a=l[i];i==="style"?hd(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&dd(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&qr(e,a):typeof a=="number"&&qr(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Kr.hasOwnProperty(i)?a!=null&&i==="onScroll"&&q("scroll",e):a!=null&&wa(e,i,a,s))}switch(n){case"input":Po(e),Ou(e,r,!1);break;case"textarea":Po(e),Nu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+en(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Wn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Wn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Si)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ke(t),null;case 6:if(e&&t.stateNode!=null)Mp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(R(166));if(n=fn(io.current),fn(kt.current),Mo(t)){if(r=t.stateNode,n=t.memoizedProps,r[wt]=t,(i=r.nodeValue!==n)&&(e=Ve,e!==null))switch(e.tag){case 3:Io(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Io(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[wt]=t,t.stateNode=r}return ke(t),null;case 13:if(G(J),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(X&&We!==null&&t.mode&1&&!(t.flags&128))tp(),Zn(),t.flags|=98560,i=!1;else if(i=Mo(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(R(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(R(317));i[wt]=t}else Zn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ke(t),i=!1}else ct!==null&&(Gl(ct),ct=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||J.current&1?ce===0&&(ce=3):nu())),t.updateQueue!==null&&(t.flags|=4),ke(t),null);case 4:return tr(),Bl(e,t),e===null&&to(t.stateNode.containerInfo),ke(t),null;case 10:return Fa(t.type._context),ke(t),null;case 17:return Me(t.type)&&Ei(),ke(t),null;case 19:if(G(J),i=t.memoizedState,i===null)return ke(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)Cr(i,!1);else{if(ce!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=Ti(e),s!==null){for(t.flags|=128,Cr(i,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return K(J,J.current&1|2),t.child}e=e.sibling}i.tail!==null&&oe()>rr&&(t.flags|=128,r=!0,Cr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Ti(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Cr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!X)return ke(t),null}else 2*oe()-i.renderingStartTime>rr&&n!==1073741824&&(t.flags|=128,r=!0,Cr(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=oe(),t.sibling=null,n=J.current,K(J,r?n&1|2:n&1),t):(ke(t),null);case 22:case 23:return tu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?He&1073741824&&(ke(t),t.subtreeFlags&6&&(t.flags|=8192)):ke(t),null;case 24:return null;case 25:return null}throw Error(R(156,t.tag))}function k0(e,t){switch(za(t),t.tag){case 1:return Me(t.type)&&Ei(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return tr(),G(Ie),G(je),Wa(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ha(t),null;case 13:if(G(J),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(R(340));Zn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(J),null;case 4:return tr(),null;case 10:return Fa(t.type._context),null;case 22:case 23:return tu(),null;case 24:return null;default:return null}}var Uo=!1,Ce=!1,C0=typeof WeakSet=="function"?WeakSet:Set,$=null;function bn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ne(e,t,r)}else n.current=null}function Hl(e,t,n){try{n()}catch(r){ne(e,t,r)}}var Sc=!1;function j0(e,t){if(_l=vi,e=Bd(),La(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,l=-1,a=-1,u=0,c=0,f=e,h=null;t:for(;;){for(var x;f!==n||o!==0&&f.nodeType!==3||(l=s+o),f!==i||r!==0&&f.nodeType!==3||(a=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(x=f.firstChild)!==null;)h=f,f=x;for(;;){if(f===e)break t;if(h===n&&++u===o&&(l=s),h===i&&++c===r&&(a=s),(x=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=x}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Rl={focusedElem:e,selectionRange:n},vi=!1,$=t;$!==null;)if(t=$,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$=e;else for(;$!==null;){t=$;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,C=y.memoizedState,m=t.stateNode,p=m.getSnapshotBeforeUpdate(t.elementType===t.type?w:st(t.type,w),C);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(S){ne(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,$=e;break}$=t.return}return y=Sc,Sc=!1,y}function Hr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Hl(t,n,i)}o=o.next}while(o!==r)}}function Zi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Wl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Dp(e){var t=e.alternate;t!==null&&(e.alternate=null,Dp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[wt],delete t[ro],delete t[Ol],delete t[l0],delete t[a0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Fp(e){return e.tag===5||e.tag===3||e.tag===4}function Ec(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Fp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Vl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Si));else if(r!==4&&(e=e.child,e!==null))for(Vl(e,t,n),e=e.sibling;e!==null;)Vl(e,t,n),e=e.sibling}function Ql(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ql(e,t,n),e=e.sibling;e!==null;)Ql(e,t,n),e=e.sibling}var ye=null,lt=!1;function Mt(e,t,n){for(n=n.child;n!==null;)Up(e,t,n),n=n.sibling}function Up(e,t,n){if(Et&&typeof Et.onCommitFiberUnmount=="function")try{Et.onCommitFiberUnmount(Vi,n)}catch{}switch(n.tag){case 5:Ce||bn(n,t);case 6:var r=ye,o=lt;ye=null,Mt(e,t,n),ye=r,lt=o,ye!==null&&(lt?(e=ye,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ye.removeChild(n.stateNode));break;case 18:ye!==null&&(lt?(e=ye,n=n.stateNode,e.nodeType===8?Is(e.parentNode,n):e.nodeType===1&&Is(e,n),Jr(e)):Is(ye,n.stateNode));break;case 4:r=ye,o=lt,ye=n.stateNode.containerInfo,lt=!0,Mt(e,t,n),ye=r,lt=o;break;case 0:case 11:case 14:case 15:if(!Ce&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&Hl(n,t,s),o=o.next}while(o!==r)}Mt(e,t,n);break;case 1:if(!Ce&&(bn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ne(n,t,l)}Mt(e,t,n);break;case 21:Mt(e,t,n);break;case 22:n.mode&1?(Ce=(r=Ce)||n.memoizedState!==null,Mt(e,t,n),Ce=r):Mt(e,t,n);break;default:Mt(e,t,n)}}function kc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new C0),t.forEach(function(r){var o=A0.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function it(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:ye=l.stateNode,lt=!1;break e;case 3:ye=l.stateNode.containerInfo,lt=!0;break e;case 4:ye=l.stateNode.containerInfo,lt=!0;break e}l=l.return}if(ye===null)throw Error(R(160));Up(i,s,o),ye=null,lt=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(u){ne(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)bp(t,e),t=t.sibling}function bp(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(it(t,e),yt(e),r&4){try{Hr(3,e,e.return),Zi(3,e)}catch(w){ne(e,e.return,w)}try{Hr(5,e,e.return)}catch(w){ne(e,e.return,w)}}break;case 1:it(t,e),yt(e),r&512&&n!==null&&bn(n,n.return);break;case 5:if(it(t,e),yt(e),r&512&&n!==null&&bn(n,n.return),e.flags&32){var o=e.stateNode;try{qr(o,"")}catch(w){ne(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,l=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&ud(o,i),gl(l,s);var u=gl(l,i);for(s=0;s<a.length;s+=2){var c=a[s],f=a[s+1];c==="style"?hd(o,f):c==="dangerouslySetInnerHTML"?dd(o,f):c==="children"?qr(o,f):wa(o,c,f,u)}switch(l){case"input":fl(o,i);break;case"textarea":cd(o,i);break;case"select":var h=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?Wn(o,!!i.multiple,x,!1):h!==!!i.multiple&&(i.defaultValue!=null?Wn(o,!!i.multiple,i.defaultValue,!0):Wn(o,!!i.multiple,i.multiple?[]:"",!1))}o[ro]=i}catch(w){ne(e,e.return,w)}}break;case 6:if(it(t,e),yt(e),r&4){if(e.stateNode===null)throw Error(R(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(w){ne(e,e.return,w)}}break;case 3:if(it(t,e),yt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Jr(t.containerInfo)}catch(w){ne(e,e.return,w)}break;case 4:it(t,e),yt(e);break;case 13:it(t,e),yt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Za=oe())),r&4&&kc(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Ce=(u=Ce)||c,it(t,e),Ce=u):it(t,e),yt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for($=e,c=e.child;c!==null;){for(f=$=c;$!==null;){switch(h=$,x=h.child,h.tag){case 0:case 11:case 14:case 15:Hr(4,h,h.return);break;case 1:bn(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(w){ne(r,n,w)}}break;case 5:bn(h,h.return);break;case 22:if(h.memoizedState!==null){jc(f);continue}}x!==null?(x.return=h,$=x):jc(f)}c=c.sibling}e:for(c=null,f=e;;){if(f.tag===5){if(c===null){c=f;try{o=f.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=f.stateNode,a=f.memoizedProps.style,s=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=pd("display",s))}catch(w){ne(e,e.return,w)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(w){ne(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:it(t,e),yt(e),r&4&&kc(e);break;case 21:break;default:it(t,e),yt(e)}}function yt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Fp(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(qr(o,""),r.flags&=-33);var i=Ec(e);Ql(e,i,o);break;case 3:case 4:var s=r.stateNode.containerInfo,l=Ec(e);Vl(e,l,s);break;default:throw Error(R(161))}}catch(a){ne(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function _0(e,t,n){$=e,Bp(e)}function Bp(e,t,n){for(var r=(e.mode&1)!==0;$!==null;){var o=$,i=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||Uo;if(!s){var l=o.alternate,a=l!==null&&l.memoizedState!==null||Ce;l=Uo;var u=Ce;if(Uo=s,(Ce=a)&&!u)for($=o;$!==null;)s=$,a=s.child,s.tag===22&&s.memoizedState!==null?_c(o):a!==null?(a.return=s,$=a):_c(o);for(;i!==null;)$=i,Bp(i),i=i.sibling;$=o,Uo=l,Ce=u}Cc(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,$=i):Cc(e)}}function Cc(e){for(;$!==null;){var t=$;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ce||Zi(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ce)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:st(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&ac(t,i,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ac(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Jr(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}Ce||t.flags&512&&Wl(t)}catch(h){ne(t,t.return,h)}}if(t===e){$=null;break}if(n=t.sibling,n!==null){n.return=t.return,$=n;break}$=t.return}}function jc(e){for(;$!==null;){var t=$;if(t===e){$=null;break}var n=t.sibling;if(n!==null){n.return=t.return,$=n;break}$=t.return}}function _c(e){for(;$!==null;){var t=$;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Zi(4,t)}catch(a){ne(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){ne(t,o,a)}}var i=t.return;try{Wl(t)}catch(a){ne(t,i,a)}break;case 5:var s=t.return;try{Wl(t)}catch(a){ne(t,s,a)}}}catch(a){ne(t,t.return,a)}if(t===e){$=null;break}var l=t.sibling;if(l!==null){l.return=t.return,$=l;break}$=t.return}}var R0=Math.ceil,Ni=At.ReactCurrentDispatcher,Xa=At.ReactCurrentOwner,et=At.ReactCurrentBatchConfig,H=0,me=null,se=null,ve=0,He=0,Bn=rn(0),ce=0,uo=null,Cn=0,es=0,Ja=0,Wr=null,Le=null,Za=0,rr=1/0,Ct=null,Li=!1,Kl=null,Xt=null,bo=!1,Vt=null,Ai=0,Vr=0,ql=null,ni=-1,ri=0;function Te(){return H&6?oe():ni!==-1?ni:ni=oe()}function Jt(e){return e.mode&1?H&2&&ve!==0?ve&-ve:c0.transition!==null?(ri===0&&(ri=_d()),ri):(e=V,e!==0||(e=window.event,e=e===void 0?16:Ld(e.type)),e):1}function dt(e,t,n,r){if(50<Vr)throw Vr=0,ql=null,Error(R(185));go(e,n,r),(!(H&2)||e!==me)&&(e===me&&(!(H&2)&&(es|=n),ce===4&&Ht(e,ve)),De(e,r),n===1&&H===0&&!(t.mode&1)&&(rr=oe()+500,Gi&&on()))}function De(e,t){var n=e.callbackNode;cg(e,t);var r=yi(e,e===me?ve:0);if(r===0)n!==null&&zu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&zu(n),t===1)e.tag===0?u0(Rc.bind(null,e)):Jd(Rc.bind(null,e)),i0(function(){!(H&6)&&on()}),n=null;else{switch(Rd(r)){case 1:n=ja;break;case 4:n=Cd;break;case 16:n=gi;break;case 536870912:n=jd;break;default:n=gi}n=Gp(n,Hp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Hp(e,t){if(ni=-1,ri=0,H&6)throw Error(R(327));var n=e.callbackNode;if(Yn()&&e.callbackNode!==n)return null;var r=yi(e,e===me?ve:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=zi(e,r);else{t=r;var o=H;H|=2;var i=Vp();(me!==e||ve!==t)&&(Ct=null,rr=oe()+500,mn(e,t));do try{O0();break}catch(l){Wp(e,l)}while(!0);Da(),Ni.current=i,H=o,se!==null?t=0:(me=null,ve=0,t=ce)}if(t!==0){if(t===2&&(o=Sl(e),o!==0&&(r=o,t=Yl(e,o))),t===1)throw n=uo,mn(e,0),Ht(e,r),De(e,oe()),n;if(t===6)Ht(e,r);else{if(o=e.current.alternate,!(r&30)&&!P0(o)&&(t=zi(e,r),t===2&&(i=Sl(e),i!==0&&(r=i,t=Yl(e,i))),t===1))throw n=uo,mn(e,0),Ht(e,r),De(e,oe()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(R(345));case 2:an(e,Le,Ct);break;case 3:if(Ht(e,r),(r&130023424)===r&&(t=Za+500-oe(),10<t)){if(yi(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Te(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Tl(an.bind(null,e,Le,Ct),t);break}an(e,Le,Ct);break;case 4:if(Ht(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-ft(r);i=1<<s,s=t[s],s>o&&(o=s),r&=~i}if(r=o,r=oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*R0(r/1960))-r,10<r){e.timeoutHandle=Tl(an.bind(null,e,Le,Ct),r);break}an(e,Le,Ct);break;case 5:an(e,Le,Ct);break;default:throw Error(R(329))}}}return De(e,oe()),e.callbackNode===n?Hp.bind(null,e):null}function Yl(e,t){var n=Wr;return e.current.memoizedState.isDehydrated&&(mn(e,t).flags|=256),e=zi(e,t),e!==2&&(t=Le,Le=n,t!==null&&Gl(t)),e}function Gl(e){Le===null?Le=e:Le.push.apply(Le,e)}function P0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!ht(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ht(e,t){for(t&=~Ja,t&=~es,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ft(t),r=1<<n;e[n]=-1,t&=~r}}function Rc(e){if(H&6)throw Error(R(327));Yn();var t=yi(e,0);if(!(t&1))return De(e,oe()),null;var n=zi(e,t);if(e.tag!==0&&n===2){var r=Sl(e);r!==0&&(t=r,n=Yl(e,r))}if(n===1)throw n=uo,mn(e,0),Ht(e,t),De(e,oe()),n;if(n===6)throw Error(R(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,an(e,Le,Ct),De(e,oe()),null}function eu(e,t){var n=H;H|=1;try{return e(t)}finally{H=n,H===0&&(rr=oe()+500,Gi&&on())}}function jn(e){Vt!==null&&Vt.tag===0&&!(H&6)&&Yn();var t=H;H|=1;var n=et.transition,r=V;try{if(et.transition=null,V=1,e)return e()}finally{V=r,et.transition=n,H=t,!(H&6)&&on()}}function tu(){He=Bn.current,G(Bn)}function mn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,o0(n)),se!==null)for(n=se.return;n!==null;){var r=n;switch(za(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ei();break;case 3:tr(),G(Ie),G(je),Wa();break;case 5:Ha(r);break;case 4:tr();break;case 13:G(J);break;case 19:G(J);break;case 10:Fa(r.type._context);break;case 22:case 23:tu()}n=n.return}if(me=e,se=e=Zt(e.current,null),ve=He=t,ce=0,uo=null,Ja=es=Cn=0,Le=Wr=null,cn!==null){for(t=0;t<cn.length;t++)if(n=cn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=o,r.next=s}n.pending=r}cn=null}return e}function Wp(e,t){do{var n=se;try{if(Da(),Zo.current=$i,Oi){for(var r=ee.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Oi=!1}if(kn=0,pe=ue=ee=null,Br=!1,so=0,Xa.current=null,n===null||n.return===null){ce=1,uo=t,se=null;break}e:{var i=e,s=n.return,l=n,a=t;if(t=ve,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,c=l,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var x=hc(s);if(x!==null){x.flags&=-257,mc(x,s,l,i,t),x.mode&1&&pc(i,u,t),t=x,a=u;var y=t.updateQueue;if(y===null){var w=new Set;w.add(a),t.updateQueue=w}else y.add(a);break e}else{if(!(t&1)){pc(i,u,t),nu();break e}a=Error(R(426))}}else if(X&&l.mode&1){var C=hc(s);if(C!==null){!(C.flags&65536)&&(C.flags|=256),mc(C,s,l,i,t),Ia(nr(a,l));break e}}i=a=nr(a,l),ce!==4&&(ce=2),Wr===null?Wr=[i]:Wr.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=Rp(i,a,t);lc(i,m);break e;case 1:l=a;var p=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Xt===null||!Xt.has(g)))){i.flags|=65536,t&=-t,i.lanes|=t;var S=Pp(i,l,t);lc(i,S);break e}}i=i.return}while(i!==null)}Kp(n)}catch(_){t=_,se===n&&n!==null&&(se=n=n.return);continue}break}while(!0)}function Vp(){var e=Ni.current;return Ni.current=$i,e===null?$i:e}function nu(){(ce===0||ce===3||ce===2)&&(ce=4),me===null||!(Cn&268435455)&&!(es&268435455)||Ht(me,ve)}function zi(e,t){var n=H;H|=2;var r=Vp();(me!==e||ve!==t)&&(Ct=null,mn(e,t));do try{T0();break}catch(o){Wp(e,o)}while(!0);if(Da(),H=n,Ni.current=r,se!==null)throw Error(R(261));return me=null,ve=0,ce}function T0(){for(;se!==null;)Qp(se)}function O0(){for(;se!==null&&!tg();)Qp(se)}function Qp(e){var t=Yp(e.alternate,e,He);e.memoizedProps=e.pendingProps,t===null?Kp(e):se=t,Xa.current=null}function Kp(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=k0(n,t),n!==null){n.flags&=32767,se=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ce=6,se=null;return}}else if(n=E0(n,t,He),n!==null){se=n;return}if(t=t.sibling,t!==null){se=t;return}se=t=e}while(t!==null);ce===0&&(ce=5)}function an(e,t,n){var r=V,o=et.transition;try{et.transition=null,V=1,$0(e,t,n,r)}finally{et.transition=o,V=r}return null}function $0(e,t,n,r){do Yn();while(Vt!==null);if(H&6)throw Error(R(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(R(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(fg(e,i),e===me&&(se=me=null,ve=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||bo||(bo=!0,Gp(gi,function(){return Yn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=et.transition,et.transition=null;var s=V;V=1;var l=H;H|=4,Xa.current=null,j0(e,n),bp(n,e),Xg(Rl),vi=!!_l,Rl=_l=null,e.current=n,_0(n),ng(),H=l,V=s,et.transition=i}else e.current=n;if(bo&&(bo=!1,Vt=e,Ai=o),i=e.pendingLanes,i===0&&(Xt=null),ig(n.stateNode),De(e,oe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Li)throw Li=!1,e=Kl,Kl=null,e;return Ai&1&&e.tag!==0&&Yn(),i=e.pendingLanes,i&1?e===ql?Vr++:(Vr=0,ql=e):Vr=0,on(),null}function Yn(){if(Vt!==null){var e=Rd(Ai),t=et.transition,n=V;try{if(et.transition=null,V=16>e?16:e,Vt===null)var r=!1;else{if(e=Vt,Vt=null,Ai=0,H&6)throw Error(R(331));var o=H;for(H|=4,$=e.current;$!==null;){var i=$,s=i.child;if($.flags&16){var l=i.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for($=u;$!==null;){var c=$;switch(c.tag){case 0:case 11:case 15:Hr(8,c,i)}var f=c.child;if(f!==null)f.return=c,$=f;else for(;$!==null;){c=$;var h=c.sibling,x=c.return;if(Dp(c),c===u){$=null;break}if(h!==null){h.return=x,$=h;break}$=x}}}var y=i.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var C=w.sibling;w.sibling=null,w=C}while(w!==null)}}$=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,$=s;else e:for(;$!==null;){if(i=$,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Hr(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,$=m;break e}$=i.return}}var p=e.current;for($=p;$!==null;){s=$;var g=s.child;if(s.subtreeFlags&2064&&g!==null)g.return=s,$=g;else e:for(s=p;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Zi(9,l)}}catch(_){ne(l,l.return,_)}if(l===s){$=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,$=S;break e}$=l.return}}if(H=o,on(),Et&&typeof Et.onPostCommitFiberRoot=="function")try{Et.onPostCommitFiberRoot(Vi,e)}catch{}r=!0}return r}finally{V=n,et.transition=t}}return!1}function Pc(e,t,n){t=nr(n,t),t=Rp(e,t,1),e=Gt(e,t,1),t=Te(),e!==null&&(go(e,1,t),De(e,t))}function ne(e,t,n){if(e.tag===3)Pc(e,e,n);else for(;t!==null;){if(t.tag===3){Pc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Xt===null||!Xt.has(r))){e=nr(n,e),e=Pp(t,e,1),t=Gt(t,e,1),e=Te(),t!==null&&(go(t,1,e),De(t,e));break}}t=t.return}}function N0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Te(),e.pingedLanes|=e.suspendedLanes&n,me===e&&(ve&n)===n&&(ce===4||ce===3&&(ve&130023424)===ve&&500>oe()-Za?mn(e,0):Ja|=n),De(e,t)}function qp(e,t){t===0&&(e.mode&1?(t=$o,$o<<=1,!($o&130023424)&&($o=4194304)):t=1);var n=Te();e=Nt(e,t),e!==null&&(go(e,t,n),De(e,n))}function L0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),qp(e,n)}function A0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(t),qp(e,n)}var Yp;Yp=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ie.current)Ae=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ae=!1,S0(e,t,n);Ae=!!(e.flags&131072)}else Ae=!1,X&&t.flags&1048576&&Zd(t,ji,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ti(e,t),e=t.pendingProps;var o=Jn(t,je.current);qn(t,n),o=Qa(null,t,r,e,o,n);var i=Ka();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Me(r)?(i=!0,ki(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,ba(t),o.updater=Ji,t.stateNode=o,o._reactInternals=t,Il(t,r,e,n),t=Fl(null,t,r,!0,i,n)):(t.tag=0,X&&i&&Aa(t),Re(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ti(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=I0(r),e=st(r,e),o){case 0:t=Dl(null,t,r,e,n);break e;case 1:t=vc(null,t,r,e,n);break e;case 11:t=gc(null,t,r,e,n);break e;case 14:t=yc(null,t,r,st(r.type,e),n);break e}throw Error(R(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:st(r,o),Dl(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:st(r,o),vc(e,t,r,o,n);case 3:e:{if(Np(t),e===null)throw Error(R(387));r=t.pendingProps,i=t.memoizedState,o=i.element,ip(e,t),Pi(t,r,null,n);var s=t.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=nr(Error(R(423)),t),t=xc(e,t,r,n,o);break e}else if(r!==o){o=nr(Error(R(424)),t),t=xc(e,t,r,n,o);break e}else for(We=Yt(t.stateNode.containerInfo.firstChild),Ve=t,X=!0,ct=null,n=rp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Zn(),r===o){t=Lt(e,t,n);break e}Re(e,t,r,n)}t=t.child}return t;case 5:return sp(t),e===null&&Ll(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,s=o.children,Pl(r,o)?s=null:i!==null&&Pl(r,i)&&(t.flags|=32),$p(e,t),Re(e,t,s,n),t.child;case 6:return e===null&&Ll(t),null;case 13:return Lp(e,t,n);case 4:return Ba(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=er(t,null,r,n):Re(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:st(r,o),gc(e,t,r,o,n);case 7:return Re(e,t,t.pendingProps,n),t.child;case 8:return Re(e,t,t.pendingProps.children,n),t.child;case 12:return Re(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,s=o.value,K(_i,r._currentValue),r._currentValue=s,i!==null)if(ht(i.value,s)){if(i.children===o.children&&!Ie.current){t=Lt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){s=i.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=Tt(-1,n&-n),a.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?a.next=a:(a.next=c.next,c.next=a),u.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Al(i.return,n,t),l.lanes|=n;break}a=a.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(R(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Al(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}Re(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,qn(t,n),o=tt(o),r=r(o),t.flags|=1,Re(e,t,r,n),t.child;case 14:return r=t.type,o=st(r,t.pendingProps),o=st(r.type,o),yc(e,t,r,o,n);case 15:return Tp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:st(r,o),ti(e,t),t.tag=1,Me(r)?(e=!0,ki(t)):e=!1,qn(t,n),_p(t,r,o),Il(t,r,o,n),Fl(null,t,r,!0,e,n);case 19:return Ap(e,t,n);case 22:return Op(e,t,n)}throw Error(R(156,t.tag))};function Gp(e,t){return kd(e,t)}function z0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ze(e,t,n,r){return new z0(e,t,n,r)}function ru(e){return e=e.prototype,!(!e||!e.isReactComponent)}function I0(e){if(typeof e=="function")return ru(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ea)return 11;if(e===ka)return 14}return 2}function Zt(e,t){var n=e.alternate;return n===null?(n=Ze(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function oi(e,t,n,r,o,i){var s=2;if(r=e,typeof e=="function")ru(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Nn:return gn(n.children,o,i,t);case Sa:s=8,o|=8;break;case sl:return e=Ze(12,n,t,o|2),e.elementType=sl,e.lanes=i,e;case ll:return e=Ze(13,n,t,o),e.elementType=ll,e.lanes=i,e;case al:return e=Ze(19,n,t,o),e.elementType=al,e.lanes=i,e;case sd:return ts(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case od:s=10;break e;case id:s=9;break e;case Ea:s=11;break e;case ka:s=14;break e;case Ut:s=16,r=null;break e}throw Error(R(130,e==null?e:typeof e,""))}return t=Ze(s,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function gn(e,t,n,r){return e=Ze(7,e,r,t),e.lanes=n,e}function ts(e,t,n,r){return e=Ze(22,e,r,t),e.elementType=sd,e.lanes=n,e.stateNode={isHidden:!1},e}function Ws(e,t,n){return e=Ze(6,e,null,t),e.lanes=n,e}function Vs(e,t,n){return t=Ze(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function M0(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=js(0),this.expirationTimes=js(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=js(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function ou(e,t,n,r,o,i,s,l,a){return e=new M0(e,t,n,l,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ze(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ba(i),e}function D0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$n,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Xp(e){if(!e)return tn;e=e._reactInternals;e:{if(Pn(e)!==e||e.tag!==1)throw Error(R(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(R(171))}if(e.tag===1){var n=e.type;if(Me(n))return Xd(e,n,t)}return t}function Jp(e,t,n,r,o,i,s,l,a){return e=ou(n,r,!0,e,o,i,s,l,a),e.context=Xp(null),n=e.current,r=Te(),o=Jt(n),i=Tt(r,o),i.callback=t??null,Gt(n,i,o),e.current.lanes=o,go(e,o,r),De(e,r),e}function ns(e,t,n,r){var o=t.current,i=Te(),s=Jt(o);return n=Xp(n),t.context===null?t.context=n:t.pendingContext=n,t=Tt(i,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Gt(o,t,s),e!==null&&(dt(e,o,s,i),Jo(e,o,s)),s}function Ii(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Tc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function iu(e,t){Tc(e,t),(e=e.alternate)&&Tc(e,t)}function F0(){return null}var Zp=typeof reportError=="function"?reportError:function(e){console.error(e)};function su(e){this._internalRoot=e}rs.prototype.render=su.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(R(409));ns(e,t,null,null)};rs.prototype.unmount=su.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;jn(function(){ns(null,e,null,null)}),t[$t]=null}};function rs(e){this._internalRoot=e}rs.prototype.unstable_scheduleHydration=function(e){if(e){var t=Od();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Bt.length&&t!==0&&t<Bt[n].priority;n++);Bt.splice(n,0,e),n===0&&Nd(e)}};function lu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function os(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Oc(){}function U0(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Ii(s);i.call(u)}}var s=Jp(t,r,e,0,null,!1,!1,"",Oc);return e._reactRootContainer=s,e[$t]=s.current,to(e.nodeType===8?e.parentNode:e),jn(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var u=Ii(a);l.call(u)}}var a=ou(e,0,!1,null,null,!1,!1,"",Oc);return e._reactRootContainer=a,e[$t]=a.current,to(e.nodeType===8?e.parentNode:e),jn(function(){ns(t,a,n,r)}),a}function is(e,t,n,r,o){var i=n._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var l=o;o=function(){var a=Ii(s);l.call(a)}}ns(t,s,e,o)}else s=U0(n,t,e,o,r);return Ii(s)}Pd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ar(t.pendingLanes);n!==0&&(_a(t,n|1),De(t,oe()),!(H&6)&&(rr=oe()+500,on()))}break;case 13:jn(function(){var r=Nt(e,1);if(r!==null){var o=Te();dt(r,e,1,o)}}),iu(e,1)}};Ra=function(e){if(e.tag===13){var t=Nt(e,134217728);if(t!==null){var n=Te();dt(t,e,134217728,n)}iu(e,134217728)}};Td=function(e){if(e.tag===13){var t=Jt(e),n=Nt(e,t);if(n!==null){var r=Te();dt(n,e,t,r)}iu(e,t)}};Od=function(){return V};$d=function(e,t){var n=V;try{return V=e,t()}finally{V=n}};vl=function(e,t,n){switch(t){case"input":if(fl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Yi(r);if(!o)throw Error(R(90));ad(r),fl(r,o)}}}break;case"textarea":cd(e,n);break;case"select":t=n.value,t!=null&&Wn(e,!!n.multiple,t,!1)}};yd=eu;vd=jn;var b0={usingClientEntryPoint:!1,Events:[vo,In,Yi,md,gd,eu]},jr={findFiberByHostInstance:un,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},B0={bundleType:jr.bundleType,version:jr.version,rendererPackageName:jr.rendererPackageName,rendererConfig:jr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:At.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Sd(e),e===null?null:e.stateNode},findFiberByHostInstance:jr.findFiberByHostInstance||F0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bo.isDisabled&&Bo.supportsFiber)try{Vi=Bo.inject(B0),Et=Bo}catch{}}qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=b0;qe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lu(t))throw Error(R(200));return D0(e,t,null,n)};qe.createRoot=function(e,t){if(!lu(e))throw Error(R(299));var n=!1,r="",o=Zp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=ou(e,1,!1,null,null,n,!1,r,o),e[$t]=t.current,to(e.nodeType===8?e.parentNode:e),new su(t)};qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(R(188)):(e=Object.keys(e).join(","),Error(R(268,e)));return e=Sd(t),e=e===null?null:e.stateNode,e};qe.flushSync=function(e){return jn(e)};qe.hydrate=function(e,t,n){if(!os(t))throw Error(R(200));return is(null,e,t,!0,n)};qe.hydrateRoot=function(e,t,n){if(!lu(e))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",s=Zp;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=Jp(t,null,e,1,n??null,o,!1,i,s),e[$t]=t.current,to(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new rs(t)};qe.render=function(e,t,n){if(!os(t))throw Error(R(200));return is(null,e,t,!1,n)};qe.unmountComponentAtNode=function(e){if(!os(e))throw Error(R(40));return e._reactRootContainer?(jn(function(){is(null,null,e,!1,function(){e._reactRootContainer=null,e[$t]=null})}),!0):!1};qe.unstable_batchedUpdates=eu;qe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!os(n))throw Error(R(200));if(e==null||e._reactInternals===void 0)throw Error(R(38));return is(e,t,n,!1,r)};qe.version="18.3.1-next-f1338f8080-20240426";function eh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(eh)}catch(e){console.error(e)}}eh(),ed.exports=qe;var H0=ed.exports,th,$c=H0;th=$c.createRoot,$c.hydrateRoot;var W0=function(){},V0=W0;const St=ho(V0);var nh={exports:{}},Q0="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",K0=Q0,q0=K0;function rh(){}function oh(){}oh.resetWarningCache=rh;var Y0=function(){function e(r,o,i,s,l,a){if(a!==q0){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:oh,resetWarningCache:rh};return n.PropTypes=n,n};nh.exports=Y0();var G0=nh.exports;const N=ho(G0);function Mi(){return Mi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Mi.apply(null,arguments)}function Ho(e){return e.charAt(0)==="/"}function Qs(e,t){for(var n=t,r=n+1,o=e.length;r<o;n+=1,r+=1)e[n]=e[r];e.pop()}function X0(e,t){t===void 0&&(t="");var n=e&&e.split("/")||[],r=t&&t.split("/")||[],o=e&&Ho(e),i=t&&Ho(t),s=o||i;if(e&&Ho(e)?r=n:n.length&&(r.pop(),r=r.concat(n)),!r.length)return"/";var l;if(r.length){var a=r[r.length-1];l=a==="."||a===".."||a===""}else l=!1;for(var u=0,c=r.length;c>=0;c--){var f=r[c];f==="."?Qs(r,c):f===".."?(Qs(r,c),u++):u&&(Qs(r,c),u--)}if(!s)for(;u--;u)r.unshift("..");s&&r[0]!==""&&(!r[0]||!Ho(r[0]))&&r.unshift("");var h=r.join("/");return l&&h.substr(-1)!=="/"&&(h+="/"),h}function Nc(e){return e.valueOf?e.valueOf():Object.prototype.valueOf.call(e)}function ii(e,t){if(e===t)return!0;if(e==null||t==null)return!1;if(Array.isArray(e))return Array.isArray(t)&&e.length===t.length&&e.every(function(o,i){return ii(o,t[i])});if(typeof e=="object"||typeof t=="object"){var n=Nc(e),r=Nc(t);return n!==e||r!==t?ii(n,r):Object.keys(Object.assign({},e,t)).every(function(o){return ii(e[o],t[o])})}return!1}var J0="Invariant failed";function Z0(e,t){throw new Error(J0)}function ey(e){return e.charAt(0)==="/"?e:"/"+e}function ty(e,t){return e.toLowerCase().indexOf(t.toLowerCase())===0&&"/?#".indexOf(e.charAt(t.length))!==-1}function ny(e,t){return ty(e,t)?e.substr(t.length):e}function ry(e){return e.charAt(e.length-1)==="/"?e.slice(0,-1):e}function oy(e){var t=e||"/",n="",r="",o=t.indexOf("#");o!==-1&&(r=t.substr(o),t=t.substr(0,o));var i=t.indexOf("?");return i!==-1&&(n=t.substr(i),t=t.substr(0,i)),{pathname:t,search:n==="?"?"":n,hash:r==="#"?"":r}}function iy(e){var t=e.pathname,n=e.search,r=e.hash,o=t||"/";return n&&n!=="?"&&(o+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(o+=r.charAt(0)==="#"?r:"#"+r),o}function Gn(e,t,n,r){var o;typeof e=="string"?(o=oy(e),o.state=t):(o=Mi({},e),o.pathname===void 0&&(o.pathname=""),o.search?o.search.charAt(0)!=="?"&&(o.search="?"+o.search):o.search="",o.hash?o.hash.charAt(0)!=="#"&&(o.hash="#"+o.hash):o.hash="",t!==void 0&&o.state===void 0&&(o.state=t));try{o.pathname=decodeURI(o.pathname)}catch(i){throw i instanceof URIError?new URIError('Pathname "'+o.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):i}return n&&(o.key=n),r?o.pathname?o.pathname.charAt(0)!=="/"&&(o.pathname=X0(o.pathname,r.pathname)):o.pathname=r.pathname:o.pathname||(o.pathname="/"),o}function sy(e,t){return e.pathname===t.pathname&&e.search===t.search&&e.hash===t.hash&&e.key===t.key&&ii(e.state,t.state)}function ly(){var e=null;function t(s){return e=s,function(){e===s&&(e=null)}}function n(s,l,a,u){if(e!=null){var c=typeof e=="function"?e(s,l):e;typeof c=="string"?typeof a=="function"?a(c,u):u(!0):u(c!==!1)}else u(!0)}var r=[];function o(s){var l=!0;function a(){l&&s.apply(void 0,arguments)}return r.push(a),function(){l=!1,r=r.filter(function(u){return u!==a})}}function i(){for(var s=arguments.length,l=new Array(s),a=0;a<s;a++)l[a]=arguments[a];r.forEach(function(u){return u.apply(void 0,l)})}return{setPrompt:t,confirmTransitionTo:n,appendListener:o,notifyListeners:i}}var ay=!!(typeof window<"u"&&window.document&&window.document.createElement);function uy(e,t){t(window.confirm(e))}function cy(){var e=window.navigator.userAgent;return(e.indexOf("Android 2.")!==-1||e.indexOf("Android 4.0")!==-1)&&e.indexOf("Mobile Safari")!==-1&&e.indexOf("Chrome")===-1&&e.indexOf("Windows Phone")===-1?!1:window.history&&"pushState"in window.history}function fy(){return window.navigator.userAgent.indexOf("Trident")===-1}function dy(e){return e.state===void 0&&navigator.userAgent.indexOf("CriOS")===-1}var Lc="popstate",Ac="hashchange";function zc(){try{return window.history.state||{}}catch{return{}}}function py(e){e===void 0&&(e={}),ay||Z0();var t=window.history,n=cy(),r=!fy(),o=e,i=o.forceRefresh,s=i===void 0?!1:i,l=o.getUserConfirmation,a=l===void 0?uy:l,u=o.keyLength,c=u===void 0?6:u,f=e.basename?ry(ey(e.basename)):"";function h(O){var L=O||{},D=L.key,I=L.state,fe=window.location,re=fe.pathname,Ne=fe.search,ae=fe.hash,de=re+Ne+ae;return f&&(de=ny(de,f)),Gn(de,I,D)}function x(){return Math.random().toString(36).substr(2,c)}var y=ly();function w(O){Mi(T,O),T.length=t.length,y.notifyListeners(T.location,T.action)}function C(O){dy(O)||g(h(O.state))}function m(){g(h(zc()))}var p=!1;function g(O){if(p)p=!1,w();else{var L="POP";y.confirmTransitionTo(O,L,a,function(D){D?w({action:L,location:O}):S(O)})}}function S(O){var L=T.location,D=E.indexOf(L.key);D===-1&&(D=0);var I=E.indexOf(O.key);I===-1&&(I=0);var fe=D-I;fe&&(p=!0,z(fe))}var _=h(zc()),E=[_.key];function j(O){return f+iy(O)}function P(O,L){var D="PUSH",I=Gn(O,L,x(),T.location);y.confirmTransitionTo(I,D,a,function(fe){if(fe){var re=j(I),Ne=I.key,ae=I.state;if(n)if(t.pushState({key:Ne,state:ae},null,re),s)window.location.href=re;else{var de=E.indexOf(T.location.key),zt=E.slice(0,de+1);zt.push(I.key),E=zt,w({action:D,location:I})}else window.location.href=re}})}function U(O,L){var D="REPLACE",I=Gn(O,L,x(),T.location);y.confirmTransitionTo(I,D,a,function(fe){if(fe){var re=j(I),Ne=I.key,ae=I.state;if(n)if(t.replaceState({key:Ne,state:ae},null,re),s)window.location.replace(re);else{var de=E.indexOf(T.location.key);de!==-1&&(E[de]=I.key),w({action:D,location:I})}else window.location.replace(re)}})}function z(O){t.go(O)}function Q(){z(-1)}function we(){z(1)}var be=0;function Se(O){be+=O,be===1&&O===1?(window.addEventListener(Lc,C),r&&window.addEventListener(Ac,m)):be===0&&(window.removeEventListener(Lc,C),r&&window.removeEventListener(Ac,m))}var gt=!1;function Ge(O){O===void 0&&(O=!1);var L=y.setPrompt(O);return gt||(Se(1),gt=!0),function(){return gt&&(gt=!1,Se(-1)),L()}}function ot(O){var L=y.appendListener(O);return Se(1),function(){Se(-1),L()}}var T={length:t.length,action:"POP",location:_,createHref:j,push:P,replace:U,go:z,goBack:Q,goForward:we,block:Ge,listen:ot};return T}var hy=function(e,t,n,r,o,i,s,l){if(!e){var a;if(t===void 0)a=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,o,i,s,l],c=0;a=new Error(t.replace(/%s/g,function(){return u[c++]})),a.name="Invariant Violation"}throw a.framesToPop=1,a}},my=hy;const or=ho(my);var gy=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function yy(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ic(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function vy(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var ss=function(e){vy(t,e);function t(){var n,r,o;yy(this,t);for(var i=arguments.length,s=Array(i),l=0;l<i;l++)s[l]=arguments[l];return o=(n=(r=Ic(this,e.call.apply(e,[this].concat(s))),r),r.state={match:r.computeMatch(r.props.history.location.pathname)},n),Ic(r,o)}return t.prototype.getChildContext=function(){return{router:gy({},this.context.router,{history:this.props.history,route:{location:this.props.history.location,match:this.state.match}})}},t.prototype.computeMatch=function(r){return{path:"/",url:"/",params:{},isExact:r==="/"}},t.prototype.componentWillMount=function(){var r=this,o=this.props,i=o.children,s=o.history;or(i==null||Z.Children.count(i)===1,"A <Router> may have only one child element"),this.unlisten=s.listen(function(){r.setState({match:r.computeMatch(s.location.pathname)})})},t.prototype.componentWillReceiveProps=function(r){St(this.props.history===r.history,"You cannot change <Router history>")},t.prototype.componentWillUnmount=function(){this.unlisten()},t.prototype.render=function(){var r=this.props.children;return r?Z.Children.only(r):null},t}(Z.Component);ss.propTypes={history:N.object.isRequired,children:N.node};ss.contextTypes={router:N.object};ss.childContextTypes={router:N.object.isRequired};function xy(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Mc(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function wy(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var ih=function(e){wy(t,e);function t(){var n,r,o;xy(this,t);for(var i=arguments.length,s=Array(i),l=0;l<i;l++)s[l]=arguments[l];return o=(n=(r=Mc(this,e.call.apply(e,[this].concat(s))),r),r.history=py(r.props),n),Mc(r,o)}return t.prototype.componentWillMount=function(){St(!this.props.history,"<BrowserRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { BrowserRouter as Router }`.")},t.prototype.render=function(){return Z.createElement(ss,{history:this.history,children:this.props.children})},t}(Z.Component);ih.propTypes={basename:N.string,forceRefresh:N.bool,getUserConfirmation:N.func,keyLength:N.number,children:N.node};var Sy=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function Ey(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function ky(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Dc(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Cy(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var jy=function(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)},wo=function(e){Cy(t,e);function t(){var n,r,o;ky(this,t);for(var i=arguments.length,s=Array(i),l=0;l<i;l++)s[l]=arguments[l];return o=(n=(r=Dc(this,e.call.apply(e,[this].concat(s))),r),r.handleClick=function(a){if(r.props.onClick&&r.props.onClick(a),!a.defaultPrevented&&a.button===0&&!r.props.target&&!jy(a)){a.preventDefault();var u=r.context.router.history,c=r.props,f=c.replace,h=c.to;f?u.replace(h):u.push(h)}},n),Dc(r,o)}return t.prototype.render=function(){var r=this.props;r.replace;var o=r.to,i=r.innerRef,s=Ey(r,["replace","to","innerRef"]);or(this.context.router,"You should not use <Link> outside a <Router>"),or(o!==void 0,'You must specify the "to" property');var l=this.context.router.history,a=typeof o=="string"?Gn(o,null,null,l.location):o,u=l.createHref(a);return Z.createElement("a",Sy({},s,{onClick:this.handleClick,href:u,ref:i}))},t}(Z.Component);wo.propTypes={onClick:N.func,target:N.string,replace:N.bool,to:N.oneOfType([N.string,N.object]).isRequired,innerRef:N.oneOfType([N.string,N.func])};wo.defaultProps={replace:!1};wo.contextTypes={router:N.shape({history:N.shape({push:N.func.isRequired,replace:N.func.isRequired,createHref:N.func.isRequired}).isRequired}).isRequired};var pr={exports:{}},_y=Array.isArray||function(e){return Object.prototype.toString.call(e)=="[object Array]"},Di=_y;pr.exports=ah;pr.exports.parse=au;pr.exports.compile=Ty;pr.exports.tokensToFunction=sh;pr.exports.tokensToRegExp=lh;var Ry=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function au(e,t){for(var n=[],r=0,o=0,i="",s=t&&t.delimiter||"/",l;(l=Ry.exec(e))!=null;){var a=l[0],u=l[1],c=l.index;if(i+=e.slice(o,c),o=c+a.length,u){i+=u[1];continue}var f=e[o],h=l[2],x=l[3],y=l[4],w=l[5],C=l[6],m=l[7];i&&(n.push(i),i="");var p=h!=null&&f!=null&&f!==h,g=C==="+"||C==="*",S=C==="?"||C==="*",_=h||s,E=y||w,j=h||(typeof n[n.length-1]=="string"?n[n.length-1]:"");n.push({name:x||r++,prefix:h||"",delimiter:_,optional:S,repeat:g,partial:p,asterisk:!!m,pattern:E?Ny(E):m?".*":Py(_,j)})}return o<e.length&&(i+=e.substr(o)),i&&n.push(i),n}function Py(e,t){return!t||t.indexOf(e)>-1?"[^"+dn(e)+"]+?":dn(t)+"|(?:(?!"+dn(t)+")[^"+dn(e)+"])+?"}function Ty(e,t){return sh(au(e,t),t)}function Oy(e){return encodeURI(e).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function $y(e){return encodeURI(e).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function sh(e,t){for(var n=new Array(e.length),r=0;r<e.length;r++)typeof e[r]=="object"&&(n[r]=new RegExp("^(?:"+e[r].pattern+")$",cu(t)));return function(o,i){for(var s="",l=o||{},a=i||{},u=a.pretty?Oy:encodeURIComponent,c=0;c<e.length;c++){var f=e[c];if(typeof f=="string"){s+=f;continue}var h=l[f.name],x;if(h==null)if(f.optional){f.partial&&(s+=f.prefix);continue}else throw new TypeError('Expected "'+f.name+'" to be defined');if(Di(h)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(h.length===0){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var y=0;y<h.length;y++){if(x=u(h[y]),!n[c].test(x))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+JSON.stringify(x)+"`");s+=(y===0?f.prefix:f.delimiter)+x}continue}if(x=f.asterisk?$y(h):u(h),!n[c].test(x))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+x+'"');s+=f.prefix+x}return s}}function dn(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function Ny(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function uu(e,t){return e.keys=t,e}function cu(e){return e&&e.sensitive?"":"i"}function Ly(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return uu(e,t)}function Ay(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(ah(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",cu(n));return uu(i,t)}function zy(e,t,n){return lh(au(e,n),t,n)}function lh(e,t,n){Di(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",s=0;s<e.length;s++){var l=e[s];if(typeof l=="string")i+=dn(l);else{var a=dn(l.prefix),u="(?:"+l.pattern+")";t.push(l),l.repeat&&(u+="(?:"+a+u+")*"),l.optional?l.partial?u=a+"("+u+")?":u="(?:"+a+"("+u+"))?":u=a+"("+u+")",i+=u}}var c=dn(n.delimiter||"/"),f=i.slice(-c.length)===c;return r||(i=(f?i.slice(0,-c.length):i)+"(?:"+c+"(?=$))?"),o?i+="$":i+=r&&f?"":"(?="+c+"|$)",uu(new RegExp("^"+i,cu(n)),t)}function ah(e,t,n){return Di(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?Ly(e,t):Di(e)?Ay(e,t,n):zy(e,t,n)}var Iy=pr.exports;const uh=ho(Iy);var Fc={},My=1e4,Uc=0,Dy=function(t,n){var r=""+n.end+n.strict+n.sensitive,o=Fc[r]||(Fc[r]={});if(o[t])return o[t];var i=[],s=uh(t,i,n),l={re:s,keys:i};return Uc<My&&(o[t]=l,Uc++),l},ch=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments[2];typeof n=="string"&&(n={path:n});var o=n,i=o.path,s=o.exact,l=s===void 0?!1:s,a=o.strict,u=a===void 0?!1:a,c=o.sensitive,f=c===void 0?!1:c;if(i==null)return r;var h=Dy(i,{end:l,strict:u,sensitive:f}),x=h.re,y=h.keys,w=x.exec(t);if(!w)return null;var C=w[0],m=w.slice(1),p=t===C;return l&&!p?null:{path:i,url:i==="/"&&C===""?"/":C,isExact:p,params:y.reduce(function(g,S,_){return g[S.name]=m[_],g},{})}},Fy=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function Uy(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function bc(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function by(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Ks=function(t){return Z.Children.count(t)===0},at=function(e){by(t,e);function t(){var n,r,o;Uy(this,t);for(var i=arguments.length,s=Array(i),l=0;l<i;l++)s[l]=arguments[l];return o=(n=(r=bc(this,e.call.apply(e,[this].concat(s))),r),r.state={match:r.computeMatch(r.props,r.context.router)},n),bc(r,o)}return t.prototype.getChildContext=function(){return{router:Fy({},this.context.router,{route:{location:this.props.location||this.context.router.route.location,match:this.state.match}})}},t.prototype.computeMatch=function(r,o){var i=r.computedMatch,s=r.location,l=r.path,a=r.strict,u=r.exact,c=r.sensitive;if(i)return i;or(o,"You should not use <Route> or withRouter() outside a <Router>");var f=o.route,h=(s||f.location).pathname;return ch(h,{path:l,strict:a,exact:u,sensitive:c},f.match)},t.prototype.componentWillMount=function(){St(!(this.props.component&&this.props.render),"You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored"),St(!(this.props.component&&this.props.children&&!Ks(this.props.children)),"You should not use <Route component> and <Route children> in the same route; <Route children> will be ignored"),St(!(this.props.render&&this.props.children&&!Ks(this.props.children)),"You should not use <Route render> and <Route children> in the same route; <Route children> will be ignored")},t.prototype.componentWillReceiveProps=function(r,o){St(!(r.location&&!this.props.location),'<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.'),St(!(!r.location&&this.props.location),'<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.'),this.setState({match:this.computeMatch(r,o.router)})},t.prototype.render=function(){var r=this.state.match,o=this.props,i=o.children,s=o.component,l=o.render,a=this.context.router,u=a.history,c=a.route,f=a.staticContext,h=this.props.location||c.location,x={match:r,location:h,history:u,staticContext:f};return s?r?Z.createElement(s,x):null:l?r?l(x):null:typeof i=="function"?i(x):i&&!Ks(i)?Z.Children.only(i):null},t}(Z.Component);at.propTypes={computedMatch:N.object,path:N.string,exact:N.bool,strict:N.bool,sensitive:N.bool,component:N.func,render:N.func,children:N.oneOfType([N.func,N.node]),location:N.object};at.contextTypes={router:N.shape({history:N.object.isRequired,route:N.object.isRequired,staticContext:N.object})};at.childContextTypes={router:N.object.isRequired};var Bc=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},By=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function Hy(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var hr=function(t){var n=t.to,r=t.exact,o=t.strict,i=t.location,s=t.activeClassName,l=t.className,a=t.activeStyle,u=t.style,c=t.isActive,f=t["aria-current"],h=Hy(t,["to","exact","strict","location","activeClassName","className","activeStyle","style","isActive","aria-current"]),x=(typeof n>"u"?"undefined":By(n))==="object"?n.pathname:n,y=x&&x.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1");return Z.createElement(at,{path:y,exact:r,strict:o,location:i,children:function(C){var m=C.location,p=C.match,g=!!(c?c(p,m):p);return Z.createElement(wo,Bc({to:n,className:g?[l,s].filter(function(S){return S}).join(" "):l,style:g?Bc({},u,a):u,"aria-current":g&&f||null},h))}})};hr.propTypes={to:wo.propTypes.to,exact:N.bool,strict:N.bool,location:N.object,activeClassName:N.string,className:N.string,activeStyle:N.object,style:N.object,isActive:N.func,"aria-current":N.oneOf(["page","step","location","date","time","true"])};hr.defaultProps={activeClassName:"active","aria-current":"page"};var Hc={},Wy=1e4,Wc=0,Vy=function(t){var n=t,r=Hc[n]||(Hc[n]={});if(r[t])return r[t];var o=uh.compile(t);return Wc<Wy&&(r[t]=o,Wc++),o},Vc=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"/",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(t==="/")return t;var r=Vy(t);return r(n,{pretty:!0})},Qy=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function Ky(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function qy(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Yy(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var ls=function(e){Yy(t,e);function t(){return Ky(this,t),qy(this,e.apply(this,arguments))}return t.prototype.isStatic=function(){return this.context.router&&this.context.router.staticContext},t.prototype.componentWillMount=function(){or(this.context.router,"You should not use <Redirect> outside a <Router>"),this.isStatic()&&this.perform()},t.prototype.componentDidMount=function(){this.isStatic()||this.perform()},t.prototype.componentDidUpdate=function(r){var o=Gn(r.to),i=Gn(this.props.to);if(sy(o,i)){St(!1,"You tried to redirect to the same route you're currently on: "+('"'+i.pathname+i.search+'"'));return}this.perform()},t.prototype.computeTo=function(r){var o=r.computedMatch,i=r.to;return o?typeof i=="string"?Vc(i,o.params):Qy({},i,{pathname:Vc(i.pathname,o.params)}):i},t.prototype.perform=function(){var r=this.context.router.history,o=this.props.push,i=this.computeTo(this.props);o?r.push(i):r.replace(i)},t.prototype.render=function(){return null},t}(Z.Component);ls.propTypes={computedMatch:N.object,push:N.bool,from:N.string,to:N.oneOfType([N.string,N.object]).isRequired};ls.defaultProps={push:!1};ls.contextTypes={router:N.shape({history:N.shape({push:N.func.isRequired,replace:N.func.isRequired}).isRequired,staticContext:N.object}).isRequired};function Gy(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Xy(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Jy(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var fu=function(e){Jy(t,e);function t(){return Gy(this,t),Xy(this,e.apply(this,arguments))}return t.prototype.componentWillMount=function(){or(this.context.router,"You should not use <Switch> outside a <Router>")},t.prototype.componentWillReceiveProps=function(r){St(!(r.location&&!this.props.location),'<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.'),St(!(!r.location&&this.props.location),'<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.')},t.prototype.render=function(){var r=this.context.router.route,o=this.props.children,i=this.props.location||r.location,s=void 0,l=void 0;return Z.Children.forEach(o,function(a){if(s==null&&Z.isValidElement(a)){var u=a.props,c=u.path,f=u.exact,h=u.strict,x=u.sensitive,y=u.from,w=c||y;l=a,s=ch(i.pathname,{path:w,exact:f,strict:h,sensitive:x},r.match)}}),s?Z.cloneElement(l,{location:i,computedMatch:s}):null},t}(Z.Component);fu.contextTypes={router:N.shape({route:N.object.isRequired}).isRequired};fu.propTypes={children:N.node,location:N.object};function fh(e,t){return function(){return e.apply(t,arguments)}}const{toString:Zy}=Object.prototype,{getPrototypeOf:du}=Object,as=(e=>t=>{const n=Zy.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),mt=e=>(e=e.toLowerCase(),t=>as(t)===e),us=e=>t=>typeof t===e,{isArray:mr}=Array,co=us("undefined");function ev(e){return e!==null&&!co(e)&&e.constructor!==null&&!co(e.constructor)&&Qe(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const dh=mt("ArrayBuffer");function tv(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&dh(e.buffer),t}const nv=us("string"),Qe=us("function"),ph=us("number"),cs=e=>e!==null&&typeof e=="object",rv=e=>e===!0||e===!1,si=e=>{if(as(e)!=="object")return!1;const t=du(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},ov=mt("Date"),iv=mt("File"),sv=mt("Blob"),lv=mt("FileList"),av=e=>cs(e)&&Qe(e.pipe),uv=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||Qe(e.append)&&((t=as(e))==="formdata"||t==="object"&&Qe(e.toString)&&e.toString()==="[object FormData]"))},cv=mt("URLSearchParams"),[fv,dv,pv,hv]=["ReadableStream","Request","Response","Headers"].map(mt),mv=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function So(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),mr(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),s=i.length;let l;for(r=0;r<s;r++)l=i[r],t.call(null,e[l],l,e)}}function hh(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const pn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,mh=e=>!co(e)&&e!==pn;function Xl(){const{caseless:e}=mh(this)&&this||{},t={},n=(r,o)=>{const i=e&&hh(t,o)||o;si(t[i])&&si(r)?t[i]=Xl(t[i],r):si(r)?t[i]=Xl({},r):mr(r)?t[i]=r.slice():t[i]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&So(arguments[r],n);return t}const gv=(e,t,n,{allOwnKeys:r}={})=>(So(t,(o,i)=>{n&&Qe(o)?e[i]=fh(o,n):e[i]=o},{allOwnKeys:r}),e),yv=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),vv=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},xv=(e,t,n,r)=>{let o,i,s;const l={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)s=o[i],(!r||r(s,e,t))&&!l[s]&&(t[s]=e[s],l[s]=!0);e=n!==!1&&du(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},wv=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Sv=e=>{if(!e)return null;if(mr(e))return e;let t=e.length;if(!ph(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Ev=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&du(Uint8Array)),kv=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},Cv=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},jv=mt("HTMLFormElement"),_v=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),Qc=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Rv=mt("RegExp"),gh=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};So(n,(o,i)=>{let s;(s=t(o,i,e))!==!1&&(r[i]=s||o)}),Object.defineProperties(e,r)},Pv=e=>{gh(e,(t,n)=>{if(Qe(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(Qe(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Tv=(e,t)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return mr(e)?r(e):r(String(e).split(t)),n},Ov=()=>{},$v=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,qs="abcdefghijklmnopqrstuvwxyz",Kc="0123456789",yh={DIGIT:Kc,ALPHA:qs,ALPHA_DIGIT:qs+qs.toUpperCase()+Kc},Nv=(e=16,t=yh.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Lv(e){return!!(e&&Qe(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Av=e=>{const t=new Array(10),n=(r,o)=>{if(cs(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const i=mr(r)?[]:{};return So(r,(s,l)=>{const a=n(s,o+1);!co(a)&&(i[l]=a)}),t[o]=void 0,i}}return r};return n(e,0)},zv=mt("AsyncFunction"),Iv=e=>e&&(cs(e)||Qe(e))&&Qe(e.then)&&Qe(e.catch),vh=((e,t)=>e?setImmediate:t?((n,r)=>(pn.addEventListener("message",({source:o,data:i})=>{o===pn&&i===n&&r.length&&r.shift()()},!1),o=>{r.push(o),pn.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Qe(pn.postMessage)),Mv=typeof queueMicrotask<"u"?queueMicrotask.bind(pn):typeof process<"u"&&process.nextTick||vh,k={isArray:mr,isArrayBuffer:dh,isBuffer:ev,isFormData:uv,isArrayBufferView:tv,isString:nv,isNumber:ph,isBoolean:rv,isObject:cs,isPlainObject:si,isReadableStream:fv,isRequest:dv,isResponse:pv,isHeaders:hv,isUndefined:co,isDate:ov,isFile:iv,isBlob:sv,isRegExp:Rv,isFunction:Qe,isStream:av,isURLSearchParams:cv,isTypedArray:Ev,isFileList:lv,forEach:So,merge:Xl,extend:gv,trim:mv,stripBOM:yv,inherits:vv,toFlatObject:xv,kindOf:as,kindOfTest:mt,endsWith:wv,toArray:Sv,forEachEntry:kv,matchAll:Cv,isHTMLForm:jv,hasOwnProperty:Qc,hasOwnProp:Qc,reduceDescriptors:gh,freezeMethods:Pv,toObjectSet:Tv,toCamelCase:_v,noop:Ov,toFiniteNumber:$v,findKey:hh,global:pn,isContextDefined:mh,ALPHABET:yh,generateString:Nv,isSpecCompliantForm:Lv,toJSONObject:Av,isAsyncFn:zv,isThenable:Iv,setImmediate:vh,asap:Mv};function M(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o,this.status=o.status?o.status:null)}k.inherits(M,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:k.toJSONObject(this.config),code:this.code,status:this.status}}});const xh=M.prototype,wh={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{wh[e]={value:e}});Object.defineProperties(M,wh);Object.defineProperty(xh,"isAxiosError",{value:!0});M.from=(e,t,n,r,o,i)=>{const s=Object.create(xh);return k.toFlatObject(e,s,function(a){return a!==Error.prototype},l=>l!=="isAxiosError"),M.call(s,e.message,t,n,r,o),s.cause=e,s.name=e.name,i&&Object.assign(s,i),s};const Dv=null;function Jl(e){return k.isPlainObject(e)||k.isArray(e)}function Sh(e){return k.endsWith(e,"[]")?e.slice(0,-2):e}function qc(e,t,n){return e?e.concat(t).map(function(o,i){return o=Sh(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function Fv(e){return k.isArray(e)&&!e.some(Jl)}const Uv=k.toFlatObject(k,{},null,function(t){return/^is[A-Z]/.test(t)});function fs(e,t,n){if(!k.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=k.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(w,C){return!k.isUndefined(C[w])});const r=n.metaTokens,o=n.visitor||c,i=n.dots,s=n.indexes,a=(n.Blob||typeof Blob<"u"&&Blob)&&k.isSpecCompliantForm(t);if(!k.isFunction(o))throw new TypeError("visitor must be a function");function u(y){if(y===null)return"";if(k.isDate(y))return y.toISOString();if(!a&&k.isBlob(y))throw new M("Blob is not supported. Use a Buffer instead.");return k.isArrayBuffer(y)||k.isTypedArray(y)?a&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function c(y,w,C){let m=y;if(y&&!C&&typeof y=="object"){if(k.endsWith(w,"{}"))w=r?w:w.slice(0,-2),y=JSON.stringify(y);else if(k.isArray(y)&&Fv(y)||(k.isFileList(y)||k.endsWith(w,"[]"))&&(m=k.toArray(y)))return w=Sh(w),m.forEach(function(g,S){!(k.isUndefined(g)||g===null)&&t.append(s===!0?qc([w],S,i):s===null?w:w+"[]",u(g))}),!1}return Jl(y)?!0:(t.append(qc(C,w,i),u(y)),!1)}const f=[],h=Object.assign(Uv,{defaultVisitor:c,convertValue:u,isVisitable:Jl});function x(y,w){if(!k.isUndefined(y)){if(f.indexOf(y)!==-1)throw Error("Circular reference detected in "+w.join("."));f.push(y),k.forEach(y,function(m,p){(!(k.isUndefined(m)||m===null)&&o.call(t,m,k.isString(p)?p.trim():p,w,h))===!0&&x(m,w?w.concat(p):[p])}),f.pop()}}if(!k.isObject(e))throw new TypeError("data must be an object");return x(e),t}function Yc(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function pu(e,t){this._pairs=[],e&&fs(e,this,t)}const Eh=pu.prototype;Eh.append=function(t,n){this._pairs.push([t,n])};Eh.toString=function(t){const n=t?function(r){return t.call(this,r,Yc)}:Yc;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function bv(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function kh(e,t,n){if(!t)return e;const r=n&&n.encode||bv,o=n&&n.serialize;let i;if(o?i=o(t,n):i=k.isURLSearchParams(t)?t.toString():new pu(t,n).toString(r),i){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class Gc{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){k.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Ch={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Bv=typeof URLSearchParams<"u"?URLSearchParams:pu,Hv=typeof FormData<"u"?FormData:null,Wv=typeof Blob<"u"?Blob:null,Vv={isBrowser:!0,classes:{URLSearchParams:Bv,FormData:Hv,Blob:Wv},protocols:["http","https","file","blob","url","data"]},hu=typeof window<"u"&&typeof document<"u",Zl=typeof navigator=="object"&&navigator||void 0,Qv=hu&&(!Zl||["ReactNative","NativeScript","NS"].indexOf(Zl.product)<0),Kv=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",qv=hu&&window.location.href||"http://localhost",Yv=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:hu,hasStandardBrowserEnv:Qv,hasStandardBrowserWebWorkerEnv:Kv,navigator:Zl,origin:qv},Symbol.toStringTag,{value:"Module"})),Fe={...Yv,...Vv};function Gv(e,t){return fs(e,new Fe.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,i){return Fe.isNode&&k.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function Xv(e){return k.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Jv(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function jh(e){function t(n,r,o,i){let s=n[i++];if(s==="__proto__")return!0;const l=Number.isFinite(+s),a=i>=n.length;return s=!s&&k.isArray(o)?o.length:s,a?(k.hasOwnProp(o,s)?o[s]=[o[s],r]:o[s]=r,!l):((!o[s]||!k.isObject(o[s]))&&(o[s]=[]),t(n,r,o[s],i)&&k.isArray(o[s])&&(o[s]=Jv(o[s])),!l)}if(k.isFormData(e)&&k.isFunction(e.entries)){const n={};return k.forEachEntry(e,(r,o)=>{t(Xv(r),o,n,0)}),n}return null}function Zv(e,t,n){if(k.isString(e))try{return(t||JSON.parse)(e),k.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(0,JSON.stringify)(e)}const Eo={transitional:Ch,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=k.isObject(t);if(i&&k.isHTMLForm(t)&&(t=new FormData(t)),k.isFormData(t))return o?JSON.stringify(jh(t)):t;if(k.isArrayBuffer(t)||k.isBuffer(t)||k.isStream(t)||k.isFile(t)||k.isBlob(t)||k.isReadableStream(t))return t;if(k.isArrayBufferView(t))return t.buffer;if(k.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Gv(t,this.formSerializer).toString();if((l=k.isFileList(t))||r.indexOf("multipart/form-data")>-1){const a=this.env&&this.env.FormData;return fs(l?{"files[]":t}:t,a&&new a,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),Zv(t)):t}],transformResponse:[function(t){const n=this.transitional||Eo.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(k.isResponse(t)||k.isReadableStream(t))return t;if(t&&k.isString(t)&&(r&&!this.responseType||o)){const s=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(l){if(s)throw l.name==="SyntaxError"?M.from(l,M.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Fe.classes.FormData,Blob:Fe.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};k.forEach(["delete","get","head","post","put","patch"],e=>{Eo.headers[e]={}});const e1=k.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),t1=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(s){o=s.indexOf(":"),n=s.substring(0,o).trim().toLowerCase(),r=s.substring(o+1).trim(),!(!n||t[n]&&e1[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Xc=Symbol("internals");function _r(e){return e&&String(e).trim().toLowerCase()}function li(e){return e===!1||e==null?e:k.isArray(e)?e.map(li):String(e)}function n1(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const r1=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Ys(e,t,n,r,o){if(k.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!k.isString(t)){if(k.isString(r))return t.indexOf(r)!==-1;if(k.isRegExp(r))return r.test(t)}}function o1(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function i1(e,t){const n=k.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,s){return this[r].call(this,t,o,i,s)},configurable:!0})})}class Ue{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function i(l,a,u){const c=_r(a);if(!c)throw new Error("header name must be a non-empty string");const f=k.findKey(o,c);(!f||o[f]===void 0||u===!0||u===void 0&&o[f]!==!1)&&(o[f||a]=li(l))}const s=(l,a)=>k.forEach(l,(u,c)=>i(u,c,a));if(k.isPlainObject(t)||t instanceof this.constructor)s(t,n);else if(k.isString(t)&&(t=t.trim())&&!r1(t))s(t1(t),n);else if(k.isHeaders(t))for(const[l,a]of t.entries())i(a,l,r);else t!=null&&i(n,t,r);return this}get(t,n){if(t=_r(t),t){const r=k.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return n1(o);if(k.isFunction(n))return n.call(this,o,r);if(k.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=_r(t),t){const r=k.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Ys(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function i(s){if(s=_r(s),s){const l=k.findKey(r,s);l&&(!n||Ys(r,r[l],l,n))&&(delete r[l],o=!0)}}return k.isArray(t)?t.forEach(i):i(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const i=n[r];(!t||Ys(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const n=this,r={};return k.forEach(this,(o,i)=>{const s=k.findKey(r,i);if(s){n[s]=li(o),delete n[i];return}const l=t?o1(i):String(i).trim();l!==i&&delete n[i],n[l]=li(o),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return k.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&k.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[Xc]=this[Xc]={accessors:{}}).accessors,o=this.prototype;function i(s){const l=_r(s);r[l]||(i1(o,s),r[l]=!0)}return k.isArray(t)?t.forEach(i):i(t),this}}Ue.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);k.reduceDescriptors(Ue.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});k.freezeMethods(Ue);function Gs(e,t){const n=this||Eo,r=t||n,o=Ue.from(r.headers);let i=r.data;return k.forEach(e,function(l){i=l.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function _h(e){return!!(e&&e.__CANCEL__)}function gr(e,t,n){M.call(this,e??"canceled",M.ERR_CANCELED,t,n),this.name="CanceledError"}k.inherits(gr,M,{__CANCEL__:!0});function Rh(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new M("Request failed with status code "+n.status,[M.ERR_BAD_REQUEST,M.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function s1(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function l1(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,i=0,s;return t=t!==void 0?t:1e3,function(a){const u=Date.now(),c=r[i];s||(s=u),n[o]=a,r[o]=u;let f=i,h=0;for(;f!==o;)h+=n[f++],f=f%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),u-s<t)return;const x=c&&u-c;return x?Math.round(h*1e3/x):void 0}}function a1(e,t){let n=0,r=1e3/t,o,i;const s=(u,c=Date.now())=>{n=c,o=null,i&&(clearTimeout(i),i=null),e.apply(null,u)};return[(...u)=>{const c=Date.now(),f=c-n;f>=r?s(u,c):(o=u,i||(i=setTimeout(()=>{i=null,s(o)},r-f)))},()=>o&&s(o)]}const Fi=(e,t,n=3)=>{let r=0;const o=l1(50,250);return a1(i=>{const s=i.loaded,l=i.lengthComputable?i.total:void 0,a=s-r,u=o(a),c=s<=l;r=s;const f={loaded:s,total:l,progress:l?s/l:void 0,bytes:a,rate:u||void 0,estimated:u&&l&&c?(l-s)/u:void 0,event:i,lengthComputable:l!=null,[t?"download":"upload"]:!0};e(f)},n)},Jc=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Zc=e=>(...t)=>k.asap(()=>e(...t)),u1=Fe.hasStandardBrowserEnv?function(){const t=Fe.navigator&&/(msie|trident)/i.test(Fe.navigator.userAgent),n=document.createElement("a");let r;function o(i){let s=i;return t&&(n.setAttribute("href",s),s=n.href),n.setAttribute("href",s),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(s){const l=k.isString(s)?o(s):s;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}(),c1=Fe.hasStandardBrowserEnv?{write(e,t,n,r,o,i){const s=[e+"="+encodeURIComponent(t)];k.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),k.isString(r)&&s.push("path="+r),k.isString(o)&&s.push("domain="+o),i===!0&&s.push("secure"),document.cookie=s.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function f1(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function d1(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Ph(e,t){return e&&!f1(t)?d1(e,t):t}const ef=e=>e instanceof Ue?{...e}:e;function _n(e,t){t=t||{};const n={};function r(u,c,f){return k.isPlainObject(u)&&k.isPlainObject(c)?k.merge.call({caseless:f},u,c):k.isPlainObject(c)?k.merge({},c):k.isArray(c)?c.slice():c}function o(u,c,f){if(k.isUndefined(c)){if(!k.isUndefined(u))return r(void 0,u,f)}else return r(u,c,f)}function i(u,c){if(!k.isUndefined(c))return r(void 0,c)}function s(u,c){if(k.isUndefined(c)){if(!k.isUndefined(u))return r(void 0,u)}else return r(void 0,c)}function l(u,c,f){if(f in t)return r(u,c);if(f in e)return r(void 0,u)}const a={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:l,headers:(u,c)=>o(ef(u),ef(c),!0)};return k.forEach(Object.keys(Object.assign({},e,t)),function(c){const f=a[c]||o,h=f(e[c],t[c],c);k.isUndefined(h)&&f!==l||(n[c]=h)}),n}const Th=e=>{const t=_n({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:o,xsrfCookieName:i,headers:s,auth:l}=t;t.headers=s=Ue.from(s),t.url=kh(Ph(t.baseURL,t.url),e.params,e.paramsSerializer),l&&s.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):"")));let a;if(k.isFormData(n)){if(Fe.hasStandardBrowserEnv||Fe.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if((a=s.getContentType())!==!1){const[u,...c]=a?a.split(";").map(f=>f.trim()).filter(Boolean):[];s.setContentType([u||"multipart/form-data",...c].join("; "))}}if(Fe.hasStandardBrowserEnv&&(r&&k.isFunction(r)&&(r=r(t)),r||r!==!1&&u1(t.url))){const u=o&&i&&c1.read(i);u&&s.set(o,u)}return t},p1=typeof XMLHttpRequest<"u",h1=p1&&function(e){return new Promise(function(n,r){const o=Th(e);let i=o.data;const s=Ue.from(o.headers).normalize();let{responseType:l,onUploadProgress:a,onDownloadProgress:u}=o,c,f,h,x,y;function w(){x&&x(),y&&y(),o.cancelToken&&o.cancelToken.unsubscribe(c),o.signal&&o.signal.removeEventListener("abort",c)}let C=new XMLHttpRequest;C.open(o.method.toUpperCase(),o.url,!0),C.timeout=o.timeout;function m(){if(!C)return;const g=Ue.from("getAllResponseHeaders"in C&&C.getAllResponseHeaders()),_={data:!l||l==="text"||l==="json"?C.responseText:C.response,status:C.status,statusText:C.statusText,headers:g,config:e,request:C};Rh(function(j){n(j),w()},function(j){r(j),w()},_),C=null}"onloadend"in C?C.onloadend=m:C.onreadystatechange=function(){!C||C.readyState!==4||C.status===0&&!(C.responseURL&&C.responseURL.indexOf("file:")===0)||setTimeout(m)},C.onabort=function(){C&&(r(new M("Request aborted",M.ECONNABORTED,e,C)),C=null)},C.onerror=function(){r(new M("Network Error",M.ERR_NETWORK,e,C)),C=null},C.ontimeout=function(){let S=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const _=o.transitional||Ch;o.timeoutErrorMessage&&(S=o.timeoutErrorMessage),r(new M(S,_.clarifyTimeoutError?M.ETIMEDOUT:M.ECONNABORTED,e,C)),C=null},i===void 0&&s.setContentType(null),"setRequestHeader"in C&&k.forEach(s.toJSON(),function(S,_){C.setRequestHeader(_,S)}),k.isUndefined(o.withCredentials)||(C.withCredentials=!!o.withCredentials),l&&l!=="json"&&(C.responseType=o.responseType),u&&([h,y]=Fi(u,!0),C.addEventListener("progress",h)),a&&C.upload&&([f,x]=Fi(a),C.upload.addEventListener("progress",f),C.upload.addEventListener("loadend",x)),(o.cancelToken||o.signal)&&(c=g=>{C&&(r(!g||g.type?new gr(null,e,C):g),C.abort(),C=null)},o.cancelToken&&o.cancelToken.subscribe(c),o.signal&&(o.signal.aborted?c():o.signal.addEventListener("abort",c)));const p=s1(o.url);if(p&&Fe.protocols.indexOf(p)===-1){r(new M("Unsupported protocol "+p+":",M.ERR_BAD_REQUEST,e));return}C.send(i||null)})},m1=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,o;const i=function(u){if(!o){o=!0,l();const c=u instanceof Error?u:this.reason;r.abort(c instanceof M?c:new gr(c instanceof Error?c.message:c))}};let s=t&&setTimeout(()=>{s=null,i(new M(`timeout ${t} of ms exceeded`,M.ETIMEDOUT))},t);const l=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach(u=>{u.unsubscribe?u.unsubscribe(i):u.removeEventListener("abort",i)}),e=null)};e.forEach(u=>u.addEventListener("abort",i));const{signal:a}=r;return a.unsubscribe=()=>k.asap(l),a}},g1=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,o;for(;r<n;)o=r+t,yield e.slice(r,o),r=o},y1=async function*(e,t){for await(const n of v1(e))yield*g1(n,t)},v1=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},tf=(e,t,n,r)=>{const o=y1(e,t);let i=0,s,l=a=>{s||(s=!0,r&&r(a))};return new ReadableStream({async pull(a){try{const{done:u,value:c}=await o.next();if(u){l(),a.close();return}let f=c.byteLength;if(n){let h=i+=f;n(h)}a.enqueue(new Uint8Array(c))}catch(u){throw l(u),u}},cancel(a){return l(a),o.return()}},{highWaterMark:2})},ds=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Oh=ds&&typeof ReadableStream=="function",x1=ds&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),$h=(e,...t)=>{try{return!!e(...t)}catch{return!1}},w1=Oh&&$h(()=>{let e=!1;const t=new Request(Fe.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),nf=64*1024,ea=Oh&&$h(()=>k.isReadableStream(new Response("").body)),Ui={stream:ea&&(e=>e.body)};ds&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!Ui[t]&&(Ui[t]=k.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new M(`Response type '${t}' is not supported`,M.ERR_NOT_SUPPORT,r)})})})(new Response);const S1=async e=>{if(e==null)return 0;if(k.isBlob(e))return e.size;if(k.isSpecCompliantForm(e))return(await new Request(Fe.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(k.isArrayBufferView(e)||k.isArrayBuffer(e))return e.byteLength;if(k.isURLSearchParams(e)&&(e=e+""),k.isString(e))return(await x1(e)).byteLength},E1=async(e,t)=>{const n=k.toFiniteNumber(e.getContentLength());return n??S1(t)},k1=ds&&(async e=>{let{url:t,method:n,data:r,signal:o,cancelToken:i,timeout:s,onDownloadProgress:l,onUploadProgress:a,responseType:u,headers:c,withCredentials:f="same-origin",fetchOptions:h}=Th(e);u=u?(u+"").toLowerCase():"text";let x=m1([o,i&&i.toAbortSignal()],s),y;const w=x&&x.unsubscribe&&(()=>{x.unsubscribe()});let C;try{if(a&&w1&&n!=="get"&&n!=="head"&&(C=await E1(c,r))!==0){let _=new Request(t,{method:"POST",body:r,duplex:"half"}),E;if(k.isFormData(r)&&(E=_.headers.get("content-type"))&&c.setContentType(E),_.body){const[j,P]=Jc(C,Fi(Zc(a)));r=tf(_.body,nf,j,P)}}k.isString(f)||(f=f?"include":"omit");const m="credentials"in Request.prototype;y=new Request(t,{...h,signal:x,method:n.toUpperCase(),headers:c.normalize().toJSON(),body:r,duplex:"half",credentials:m?f:void 0});let p=await fetch(y);const g=ea&&(u==="stream"||u==="response");if(ea&&(l||g&&w)){const _={};["status","statusText","headers"].forEach(U=>{_[U]=p[U]});const E=k.toFiniteNumber(p.headers.get("content-length")),[j,P]=l&&Jc(E,Fi(Zc(l),!0))||[];p=new Response(tf(p.body,nf,j,()=>{P&&P(),w&&w()}),_)}u=u||"text";let S=await Ui[k.findKey(Ui,u)||"text"](p,e);return!g&&w&&w(),await new Promise((_,E)=>{Rh(_,E,{data:S,headers:Ue.from(p.headers),status:p.status,statusText:p.statusText,config:e,request:y})})}catch(m){throw w&&w(),m&&m.name==="TypeError"&&/fetch/i.test(m.message)?Object.assign(new M("Network Error",M.ERR_NETWORK,e,y),{cause:m.cause||m}):M.from(m,m&&m.code,e,y)}}),ta={http:Dv,xhr:h1,fetch:k1};k.forEach(ta,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const rf=e=>`- ${e}`,C1=e=>k.isFunction(e)||e===null||e===!1,Nh={getAdapter:e=>{e=k.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let i=0;i<t;i++){n=e[i];let s;if(r=n,!C1(n)&&(r=ta[(s=String(n)).toLowerCase()],r===void 0))throw new M(`Unknown adapter '${s}'`);if(r)break;o[s||"#"+i]=r}if(!r){const i=Object.entries(o).map(([l,a])=>`adapter ${l} `+(a===!1?"is not supported by the environment":"is not available in the build"));let s=t?i.length>1?`since :
`+i.map(rf).join(`
`):" "+rf(i[0]):"as no adapter specified";throw new M("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return r},adapters:ta};function Xs(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new gr(null,e)}function of(e){return Xs(e),e.headers=Ue.from(e.headers),e.data=Gs.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Nh.getAdapter(e.adapter||Eo.adapter)(e).then(function(r){return Xs(e),r.data=Gs.call(e,e.transformResponse,r),r.headers=Ue.from(r.headers),r},function(r){return _h(r)||(Xs(e),r&&r.response&&(r.response.data=Gs.call(e,e.transformResponse,r.response),r.response.headers=Ue.from(r.response.headers))),Promise.reject(r)})}const Lh="1.7.7",mu={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{mu[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const sf={};mu.transitional=function(t,n,r){function o(i,s){return"[Axios v"+Lh+"] Transitional option '"+i+"'"+s+(r?". "+r:"")}return(i,s,l)=>{if(t===!1)throw new M(o(s," has been removed"+(n?" in "+n:"")),M.ERR_DEPRECATED);return n&&!sf[s]&&(sf[s]=!0,console.warn(o(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,s,l):!0}};function j1(e,t,n){if(typeof e!="object")throw new M("options must be an object",M.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],s=t[i];if(s){const l=e[i],a=l===void 0||s(l,i,e);if(a!==!0)throw new M("option "+i+" must be "+a,M.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new M("Unknown option "+i,M.ERR_BAD_OPTION)}}const na={assertOptions:j1,validators:mu},Dt=na.validators;class yn{constructor(t){this.defaults=t,this.interceptors={request:new Gc,response:new Gc}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let o;Error.captureStackTrace?Error.captureStackTrace(o={}):o=new Error;const i=o.stack?o.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=_n(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:i}=n;r!==void 0&&na.assertOptions(r,{silentJSONParsing:Dt.transitional(Dt.boolean),forcedJSONParsing:Dt.transitional(Dt.boolean),clarifyTimeoutError:Dt.transitional(Dt.boolean)},!1),o!=null&&(k.isFunction(o)?n.paramsSerializer={serialize:o}:na.assertOptions(o,{encode:Dt.function,serialize:Dt.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s=i&&k.merge(i.common,i[n.method]);i&&k.forEach(["delete","get","head","post","put","patch","common"],y=>{delete i[y]}),n.headers=Ue.concat(s,i);const l=[];let a=!0;this.interceptors.request.forEach(function(w){typeof w.runWhen=="function"&&w.runWhen(n)===!1||(a=a&&w.synchronous,l.unshift(w.fulfilled,w.rejected))});const u=[];this.interceptors.response.forEach(function(w){u.push(w.fulfilled,w.rejected)});let c,f=0,h;if(!a){const y=[of.bind(this),void 0];for(y.unshift.apply(y,l),y.push.apply(y,u),h=y.length,c=Promise.resolve(n);f<h;)c=c.then(y[f++],y[f++]);return c}h=l.length;let x=n;for(f=0;f<h;){const y=l[f++],w=l[f++];try{x=y(x)}catch(C){w.call(this,C);break}}try{c=of.call(this,x)}catch(y){return Promise.reject(y)}for(f=0,h=u.length;f<h;)c=c.then(u[f++],u[f++]);return c}getUri(t){t=_n(this.defaults,t);const n=Ph(t.baseURL,t.url);return kh(n,t.params,t.paramsSerializer)}}k.forEach(["delete","get","head","options"],function(t){yn.prototype[t]=function(n,r){return this.request(_n(r||{},{method:t,url:n,data:(r||{}).data}))}});k.forEach(["post","put","patch"],function(t){function n(r){return function(i,s,l){return this.request(_n(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:s}))}}yn.prototype[t]=n(),yn.prototype[t+"Form"]=n(!0)});class gu{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const s=new Promise(l=>{r.subscribe(l),i=l}).then(o);return s.cancel=function(){r.unsubscribe(i)},s},t(function(i,s,l){r.reason||(r.reason=new gr(i,s,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new gu(function(o){t=o}),cancel:t}}}function _1(e){return function(n){return e.apply(null,n)}}function R1(e){return k.isObject(e)&&e.isAxiosError===!0}const ra={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ra).forEach(([e,t])=>{ra[t]=e});function Ah(e){const t=new yn(e),n=fh(yn.prototype.request,t);return k.extend(n,yn.prototype,t,{allOwnKeys:!0}),k.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return Ah(_n(e,o))},n}const B=Ah(Eo);B.Axios=yn;B.CanceledError=gr;B.CancelToken=gu;B.isCancel=_h;B.VERSION=Lh;B.toFormData=fs;B.AxiosError=M;B.Cancel=B.CanceledError;B.all=function(t){return Promise.all(t)};B.spread=_1;B.isAxiosError=R1;B.mergeConfig=_n;B.AxiosHeaders=Ue;B.formToJSON=e=>jh(k.isHTMLForm(e)?new FormData(e):e);B.getAdapter=Nh.getAdapter;B.HttpStatusCode=ra;B.default=B;/*! js-cookie v3.0.5 | MIT */function Wo(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}var P1={read:function(e){return e[0]==='"'&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function oa(e,t){function n(o,i,s){if(!(typeof document>"u")){s=Wo({},t,s),typeof s.expires=="number"&&(s.expires=new Date(Date.now()+s.expires*864e5)),s.expires&&(s.expires=s.expires.toUTCString()),o=encodeURIComponent(o).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var l="";for(var a in s)s[a]&&(l+="; "+a,s[a]!==!0&&(l+="="+s[a].split(";")[0]));return document.cookie=o+"="+e.write(i,o)+l}}function r(o){if(!(typeof document>"u"||arguments.length&&!o)){for(var i=document.cookie?document.cookie.split("; "):[],s={},l=0;l<i.length;l++){var a=i[l].split("="),u=a.slice(1).join("=");try{var c=decodeURIComponent(a[0]);if(s[c]=e.read(u,c),o===c)break}catch{}}return o?s[o]:s}}return Object.create({set:n,get:r,remove:function(o,i){n(o,"",Wo({},i,{expires:-1}))},withAttributes:function(o){return oa(this.converter,Wo({},this.attributes,o))},withConverter:function(o){return oa(Wo({},this.converter,o),this.attributes)}},{attributes:{value:Object.freeze(t)},converter:{value:Object.freeze(e)}})}var le=oa(P1,{path:"/"});const ge="https://oncolympics-api.onrender.com/api",_e={login:`${ge}/users/login`,userInfo:`${ge}/users/userInfo`,allmatches:`${ge}/standings/all-matches`,matchdetails:`${ge}/standings/matchdetails`,groups:`${ge}/groups`,playermatch:`${ge}/match/playermatch`,answer:`${ge}/match/answer`,matchscores:`${ge}/match/matchscores`,questionanswers:`${ge}/match/questionanswers`,moderatormatch:`${ge}/match/moderatormatch`,startmatch:`${ge}/match/startmatch`,nextquestion:`${ge}/match/nextquestion`,endmatch:`${ge}/match/endmatch`,stopanswer:`${ge}/match/stopanswer`,resetmatch:`${ge}/match/resetmatch`,reward:`${ge}/match/reward`,penalty:`${ge}/match/penalty`},T1=async(e,t)=>{try{const n=await B.post(_e.login,{username:e,password:t});if(n.data.status===200){const{token:r,role:o}=n.data.data;le.set("token",r),le.set("username",e),le.set("role",o)}return n==null?void 0:n.data}catch(n){return console.log(n),""}},O1=async()=>{try{if(le.get("token")){const e=await B.get(_e.userInfo,{headers:{token:le.get("token")}});return e==null?void 0:e.data}else return""}catch(e){return console.log(e),""}},zh=e=>{const t=e==="Admin",n=e==="Team",r=[{label:"Groups",route:"/groups"},{label:"Schedule",route:"/schedule"},{label:"Knockouts",route:"/knockouts"}];return t&&r.push({label:"Moderator",route:"/matchmoderator"}),n&&r.push({label:"Your Match",route:"/yourmatch"}),r};var ze=function(){return ze=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ze.apply(this,arguments)};function fo(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var Y="-ms-",Qr="-moz-",W="-webkit-",Ih="comm",ps="rule",yu="decl",$1="@import",Mh="@keyframes",N1="@layer",Dh=Math.abs,vu=String.fromCharCode,ia=Object.assign;function L1(e,t){return he(e,0)^45?(((t<<2^he(e,0))<<2^he(e,1))<<2^he(e,2))<<2^he(e,3):0}function Fh(e){return e.trim()}function jt(e,t){return(e=t.exec(e))?e[0]:e}function F(e,t,n){return e.replace(t,n)}function ai(e,t,n){return e.indexOf(t,n)}function he(e,t){return e.charCodeAt(t)|0}function ir(e,t,n){return e.slice(t,n)}function xt(e){return e.length}function Uh(e){return e.length}function Ir(e,t){return t.push(e),e}function A1(e,t){return e.map(t).join("")}function lf(e,t){return e.filter(function(n){return!jt(n,t)})}var hs=1,sr=1,bh=0,rt=0,ie=0,yr="";function ms(e,t,n,r,o,i,s,l){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:hs,column:sr,length:s,return:"",siblings:l}}function Ft(e,t){return ia(ms("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function On(e){for(;e.root;)e=Ft(e.root,{children:[e]});Ir(e,e.siblings)}function z1(){return ie}function I1(){return ie=rt>0?he(yr,--rt):0,sr--,ie===10&&(sr=1,hs--),ie}function pt(){return ie=rt<bh?he(yr,rt++):0,sr++,ie===10&&(sr=1,hs++),ie}function vn(){return he(yr,rt)}function ui(){return rt}function gs(e,t){return ir(yr,e,t)}function sa(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function M1(e){return hs=sr=1,bh=xt(yr=e),rt=0,[]}function D1(e){return yr="",e}function Js(e){return Fh(gs(rt-1,la(e===91?e+2:e===40?e+1:e)))}function F1(e){for(;(ie=vn())&&ie<33;)pt();return sa(e)>2||sa(ie)>3?"":" "}function U1(e,t){for(;--t&&pt()&&!(ie<48||ie>102||ie>57&&ie<65||ie>70&&ie<97););return gs(e,ui()+(t<6&&vn()==32&&pt()==32))}function la(e){for(;pt();)switch(ie){case e:return rt;case 34:case 39:e!==34&&e!==39&&la(ie);break;case 40:e===41&&la(e);break;case 92:pt();break}return rt}function b1(e,t){for(;pt()&&e+ie!==57;)if(e+ie===84&&vn()===47)break;return"/*"+gs(t,rt-1)+"*"+vu(e===47?e:pt())}function B1(e){for(;!sa(vn());)pt();return gs(e,rt)}function H1(e){return D1(ci("",null,null,null,[""],e=M1(e),0,[0],e))}function ci(e,t,n,r,o,i,s,l,a){for(var u=0,c=0,f=s,h=0,x=0,y=0,w=1,C=1,m=1,p=0,g="",S=o,_=i,E=r,j=g;C;)switch(y=p,p=pt()){case 40:if(y!=108&&he(j,f-1)==58){ai(j+=F(Js(p),"&","&\f"),"&\f",Dh(u?l[u-1]:0))!=-1&&(m=-1);break}case 34:case 39:case 91:j+=Js(p);break;case 9:case 10:case 13:case 32:j+=F1(y);break;case 92:j+=U1(ui()-1,7);continue;case 47:switch(vn()){case 42:case 47:Ir(W1(b1(pt(),ui()),t,n,a),a);break;default:j+="/"}break;case 123*w:l[u++]=xt(j)*m;case 125*w:case 59:case 0:switch(p){case 0:case 125:C=0;case 59+c:m==-1&&(j=F(j,/\f/g,"")),x>0&&xt(j)-f&&Ir(x>32?uf(j+";",r,n,f-1,a):uf(F(j," ","")+";",r,n,f-2,a),a);break;case 59:j+=";";default:if(Ir(E=af(j,t,n,u,c,o,l,g,S=[],_=[],f,i),i),p===123)if(c===0)ci(j,t,E,E,S,i,f,l,_);else switch(h===99&&he(j,3)===110?100:h){case 100:case 108:case 109:case 115:ci(e,E,E,r&&Ir(af(e,E,E,0,0,o,l,g,o,S=[],f,_),_),o,_,f,l,r?S:_);break;default:ci(j,E,E,E,[""],_,0,l,_)}}u=c=x=0,w=m=1,g=j="",f=s;break;case 58:f=1+xt(j),x=y;default:if(w<1){if(p==123)--w;else if(p==125&&w++==0&&I1()==125)continue}switch(j+=vu(p),p*w){case 38:m=c>0?1:(j+="\f",-1);break;case 44:l[u++]=(xt(j)-1)*m,m=1;break;case 64:vn()===45&&(j+=Js(pt())),h=vn(),c=f=xt(g=j+=B1(ui())),p++;break;case 45:y===45&&xt(j)==2&&(w=0)}}return i}function af(e,t,n,r,o,i,s,l,a,u,c,f){for(var h=o-1,x=o===0?i:[""],y=Uh(x),w=0,C=0,m=0;w<r;++w)for(var p=0,g=ir(e,h+1,h=Dh(C=s[w])),S=e;p<y;++p)(S=Fh(C>0?x[p]+" "+g:F(g,/&\f/g,x[p])))&&(a[m++]=S);return ms(e,t,n,o===0?ps:l,a,u,c,f)}function W1(e,t,n,r){return ms(e,t,n,Ih,vu(z1()),ir(e,2,-2),0,r)}function uf(e,t,n,r,o){return ms(e,t,n,yu,ir(e,0,r),ir(e,r+1,-1),r,o)}function Bh(e,t,n){switch(L1(e,t)){case 5103:return W+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return W+e+e;case 4789:return Qr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return W+e+Qr+e+Y+e+e;case 5936:switch(he(e,t+11)){case 114:return W+e+Y+F(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return W+e+Y+F(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return W+e+Y+F(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return W+e+Y+e+e;case 6165:return W+e+Y+"flex-"+e+e;case 5187:return W+e+F(e,/(\w+).+(:[^]+)/,W+"box-$1$2"+Y+"flex-$1$2")+e;case 5443:return W+e+Y+"flex-item-"+F(e,/flex-|-self/g,"")+(jt(e,/flex-|baseline/)?"":Y+"grid-row-"+F(e,/flex-|-self/g,""))+e;case 4675:return W+e+Y+"flex-line-pack"+F(e,/align-content|flex-|-self/g,"")+e;case 5548:return W+e+Y+F(e,"shrink","negative")+e;case 5292:return W+e+Y+F(e,"basis","preferred-size")+e;case 6060:return W+"box-"+F(e,"-grow","")+W+e+Y+F(e,"grow","positive")+e;case 4554:return W+F(e,/([^-])(transform)/g,"$1"+W+"$2")+e;case 6187:return F(F(F(e,/(zoom-|grab)/,W+"$1"),/(image-set)/,W+"$1"),e,"")+e;case 5495:case 3959:return F(e,/(image-set\([^]*)/,W+"$1$`$1");case 4968:return F(F(e,/(.+:)(flex-)?(.*)/,W+"box-pack:$3"+Y+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+W+e+e;case 4200:if(!jt(e,/flex-|baseline/))return Y+"grid-column-align"+ir(e,t)+e;break;case 2592:case 3360:return Y+F(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,jt(r.props,/grid-\w+-end/)})?~ai(e+(n=n[t].value),"span",0)?e:Y+F(e,"-start","")+e+Y+"grid-row-span:"+(~ai(n,"span",0)?jt(n,/\d+/):+jt(n,/\d+/)-+jt(e,/\d+/))+";":Y+F(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return jt(r.props,/grid-\w+-start/)})?e:Y+F(F(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return F(e,/(.+)-inline(.+)/,W+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(xt(e)-1-t>6)switch(he(e,t+1)){case 109:if(he(e,t+4)!==45)break;case 102:return F(e,/(.+:)(.+)-([^]+)/,"$1"+W+"$2-$3$1"+Qr+(he(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ai(e,"stretch",0)?Bh(F(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return F(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,s,l,a,u){return Y+o+":"+i+u+(s?Y+o+"-span:"+(l?a:+a-+i)+u:"")+e});case 4949:if(he(e,t+6)===121)return F(e,":",":"+W)+e;break;case 6444:switch(he(e,he(e,14)===45?18:11)){case 120:return F(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+W+(he(e,14)===45?"inline-":"")+"box$3$1"+W+"$2$3$1"+Y+"$2box$3")+e;case 100:return F(e,":",":"+Y)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return F(e,"scroll-","scroll-snap-")+e}return e}function bi(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function V1(e,t,n,r){switch(e.type){case N1:if(e.children.length)break;case $1:case yu:return e.return=e.return||e.value;case Ih:return"";case Mh:return e.return=e.value+"{"+bi(e.children,r)+"}";case ps:if(!xt(e.value=e.props.join(",")))return""}return xt(n=bi(e.children,r))?e.return=e.value+"{"+n+"}":""}function Q1(e){var t=Uh(e);return function(n,r,o,i){for(var s="",l=0;l<t;l++)s+=e[l](n,r,o,i)||"";return s}}function K1(e){return function(t){t.root||(t=t.return)&&e(t)}}function q1(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case yu:e.return=Bh(e.value,e.length,n);return;case Mh:return bi([Ft(e,{value:F(e.value,"@","@"+W)})],r);case ps:if(e.length)return A1(n=e.props,function(o){switch(jt(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":On(Ft(e,{props:[F(o,/:(read-\w+)/,":"+Qr+"$1")]})),On(Ft(e,{props:[o]})),ia(e,{props:lf(n,r)});break;case"::placeholder":On(Ft(e,{props:[F(o,/:(plac\w+)/,":"+W+"input-$1")]})),On(Ft(e,{props:[F(o,/:(plac\w+)/,":"+Qr+"$1")]})),On(Ft(e,{props:[F(o,/:(plac\w+)/,Y+"input-$1")]})),On(Ft(e,{props:[o]})),ia(e,{props:lf(n,r)});break}return""})}}var Y1={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Be={},lr=typeof process<"u"&&Be!==void 0&&(Be.REACT_APP_SC_ATTR||Be.SC_ATTR)||"data-styled",Hh="active",Wh="data-styled-version",ys="6.1.13",xu=`/*!sc*/
`,Bi=typeof window<"u"&&"HTMLElement"in window,G1=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Be!==void 0&&Be.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Be.REACT_APP_SC_DISABLE_SPEEDY!==""?Be.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Be.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Be!==void 0&&Be.SC_DISABLE_SPEEDY!==void 0&&Be.SC_DISABLE_SPEEDY!==""&&Be.SC_DISABLE_SPEEDY!=="false"&&Be.SC_DISABLE_SPEEDY),vs=Object.freeze([]),ar=Object.freeze({});function X1(e,t,n){return n===void 0&&(n=ar),e.theme!==n.theme&&e.theme||t||n.theme}var Vh=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),J1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Z1=/(^-|-$)/g;function cf(e){return e.replace(J1,"-").replace(Z1,"")}var ex=/(a)(d)/gi,Vo=52,ff=function(e){return String.fromCharCode(e+(e>25?39:97))};function aa(e){var t,n="";for(t=Math.abs(e);t>Vo;t=t/Vo|0)n=ff(t%Vo)+n;return(ff(t%Vo)+n).replace(ex,"$1-$2")}var Zs,Qh=5381,Hn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Kh=function(e){return Hn(Qh,e)};function qh(e){return aa(Kh(e)>>>0)}function tx(e){return e.displayName||e.name||"Component"}function el(e){return typeof e=="string"&&!0}var Yh=typeof Symbol=="function"&&Symbol.for,Gh=Yh?Symbol.for("react.memo"):60115,nx=Yh?Symbol.for("react.forward_ref"):60112,rx={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ox={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Xh={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ix=((Zs={})[nx]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Zs[Gh]=Xh,Zs);function df(e){return("type"in(t=e)&&t.type.$$typeof)===Gh?Xh:"$$typeof"in e?ix[e.$$typeof]:rx;var t}var sx=Object.defineProperty,lx=Object.getOwnPropertyNames,pf=Object.getOwnPropertySymbols,ax=Object.getOwnPropertyDescriptor,ux=Object.getPrototypeOf,hf=Object.prototype;function Jh(e,t,n){if(typeof t!="string"){if(hf){var r=ux(t);r&&r!==hf&&Jh(e,r,n)}var o=lx(t);pf&&(o=o.concat(pf(t)));for(var i=df(e),s=df(t),l=0;l<o.length;++l){var a=o[l];if(!(a in ox||n&&n[a]||s&&a in s||i&&a in i)){var u=ax(t,a);try{sx(e,a,u)}catch{}}}}return e}function ur(e){return typeof e=="function"}function wu(e){return typeof e=="object"&&"styledComponentId"in e}function hn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function ua(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function po(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function ca(e,t,n){if(n===void 0&&(n=!1),!n&&!po(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=ca(e[r],t[r]);else if(po(t))for(var r in t)e[r]=ca(e[r],t[r]);return e}function Su(e,t){Object.defineProperty(e,"toString",{value:t})}function ko(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var cx=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw ko(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var s=o;s<i;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(t+1),a=(s=0,n.length);s<a;s++)this.tag.insertRule(l,n[s])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,s=o;s<i;s++)n+="".concat(this.tag.getRule(s)).concat(xu);return n},e}(),fi=new Map,Hi=new Map,di=1,Qo=function(e){if(fi.has(e))return fi.get(e);for(;Hi.has(di);)di++;var t=di++;return fi.set(e,t),Hi.set(t,e),t},fx=function(e,t){di=t+1,fi.set(e,t),Hi.set(t,e)},dx="style[".concat(lr,"][").concat(Wh,'="').concat(ys,'"]'),px=new RegExp("^".concat(lr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),hx=function(e,t,n){for(var r,o=n.split(","),i=0,s=o.length;i<s;i++)(r=o[i])&&e.registerName(t,r)},mx=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(xu),o=[],i=0,s=r.length;i<s;i++){var l=r[i].trim();if(l){var a=l.match(px);if(a){var u=0|parseInt(a[1],10),c=a[2];u!==0&&(fx(c,u),hx(e,c,a[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(l)}}},mf=function(e){for(var t=document.querySelectorAll(dx),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(lr)!==Hh&&(mx(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function gx(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Zh=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(l){var a=Array.from(l.querySelectorAll("style[".concat(lr,"]")));return a[a.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(lr,Hh),r.setAttribute(Wh,ys);var s=gx();return s&&r.setAttribute("nonce",s),n.insertBefore(r,i),r},yx=function(){function e(t){this.element=Zh(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var s=r[o];if(s.ownerNode===n)return s}throw ko(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),vx=function(){function e(t){this.element=Zh(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),xx=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),gf=Bi,wx={isServer:!Bi,useCSSOMInjection:!G1},em=function(){function e(t,n,r){t===void 0&&(t=ar),n===void 0&&(n={});var o=this;this.options=ze(ze({},wx),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Bi&&gf&&(gf=!1,mf(this)),Su(this,function(){return function(i){for(var s=i.getTag(),l=s.length,a="",u=function(f){var h=function(m){return Hi.get(m)}(f);if(h===void 0)return"continue";var x=i.names.get(h),y=s.getGroup(f);if(x===void 0||!x.size||y.length===0)return"continue";var w="".concat(lr,".g").concat(f,'[id="').concat(h,'"]'),C="";x!==void 0&&x.forEach(function(m){m.length>0&&(C+="".concat(m,","))}),a+="".concat(y).concat(w,'{content:"').concat(C,'"}').concat(xu)},c=0;c<l;c++)u(c);return a}(o)})}return e.registerId=function(t){return Qo(t)},e.prototype.rehydrate=function(){!this.server&&Bi&&mf(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(ze(ze({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new xx(o):r?new yx(o):new vx(o)}(this.options),new cx(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Qo(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Qo(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Qo(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Sx=/&/g,Ex=/^\s*\/\/.*$/gm;function tm(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=tm(n.children,t)),n})}function kx(e){var t,n,r,o=ar,i=o.options,s=i===void 0?ar:i,l=o.plugins,a=l===void 0?vs:l,u=function(h,x,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):h},c=a.slice();c.push(function(h){h.type===ps&&h.value.includes("&")&&(h.props[0]=h.props[0].replace(Sx,n).replace(r,u))}),s.prefix&&c.push(q1),c.push(V1);var f=function(h,x,y,w){x===void 0&&(x=""),y===void 0&&(y=""),w===void 0&&(w="&"),t=w,n=x,r=new RegExp("\\".concat(n,"\\b"),"g");var C=h.replace(Ex,""),m=H1(y||x?"".concat(y," ").concat(x," { ").concat(C," }"):C);s.namespace&&(m=tm(m,s.namespace));var p=[];return bi(m,Q1(c.concat(K1(function(g){return p.push(g)})))),p};return f.hash=a.length?a.reduce(function(h,x){return x.name||ko(15),Hn(h,x.name)},Qh).toString():"",f}var Cx=new em,fa=kx(),nm=Z.createContext({shouldForwardProp:void 0,styleSheet:Cx,stylis:fa});nm.Consumer;Z.createContext(void 0);function yf(){return A.useContext(nm)}var rm=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=fa);var s=r.name+i.hash;o.hasNameForId(r.id,s)||o.insertRules(r.id,s,i(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Su(this,function(){throw ko(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=fa),this.name+t.hash},e}(),jx=function(e){return e>="A"&&e<="Z"};function vf(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;jx(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var om=function(e){return e==null||e===!1||e===""},im=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!om(i)&&(Array.isArray(i)&&i.isCss||ur(i)?r.push("".concat(vf(o),":"),i,";"):po(i)?r.push.apply(r,fo(fo(["".concat(o," {")],im(i),!1),["}"],!1)):r.push("".concat(vf(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in Y1||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function xn(e,t,n,r){if(om(e))return[];if(wu(e))return[".".concat(e.styledComponentId)];if(ur(e)){if(!ur(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return xn(o,t,n,r)}var i;return e instanceof rm?n?(e.inject(n,r),[e.getName(r)]):[e]:po(e)?im(e):Array.isArray(e)?Array.prototype.concat.apply(vs,e.map(function(s){return xn(s,t,n,r)})):[e.toString()]}function _x(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ur(n)&&!wu(n))return!1}return!0}var Rx=Kh(ys),Px=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&_x(t),this.componentId=n,this.baseHash=Hn(Rx,n),this.baseStyle=r,em.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=hn(o,this.staticRulesId);else{var i=ua(xn(this.rules,t,n,r)),s=aa(Hn(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,s)){var l=r(i,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,l)}o=hn(o,s),this.staticRulesId=s}else{for(var a=Hn(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var f=this.rules[c];if(typeof f=="string")u+=f;else if(f){var h=ua(xn(f,t,n,r));a=Hn(a,h+c),u+=h}}if(u){var x=aa(a>>>0);n.hasNameForId(this.componentId,x)||n.insertRules(this.componentId,x,r(u,".".concat(x),void 0,this.componentId)),o=hn(o,x)}}return o},e}(),sm=Z.createContext(void 0);sm.Consumer;var tl={};function Tx(e,t,n){var r=wu(e),o=e,i=!el(e),s=t.attrs,l=s===void 0?vs:s,a=t.componentId,u=a===void 0?function(S,_){var E=typeof S!="string"?"sc":cf(S);tl[E]=(tl[E]||0)+1;var j="".concat(E,"-").concat(qh(ys+E+tl[E]));return _?"".concat(_,"-").concat(j):j}(t.displayName,t.parentComponentId):a,c=t.displayName,f=c===void 0?function(S){return el(S)?"styled.".concat(S):"Styled(".concat(tx(S),")")}(e):c,h=t.displayName&&t.componentId?"".concat(cf(t.displayName),"-").concat(t.componentId):t.componentId||u,x=r&&o.attrs?o.attrs.concat(l).filter(Boolean):l,y=t.shouldForwardProp;if(r&&o.shouldForwardProp){var w=o.shouldForwardProp;if(t.shouldForwardProp){var C=t.shouldForwardProp;y=function(S,_){return w(S,_)&&C(S,_)}}else y=w}var m=new Px(n,h,r?o.componentStyle:void 0);function p(S,_){return function(E,j,P){var U=E.attrs,z=E.componentStyle,Q=E.defaultProps,we=E.foldedComponentIds,be=E.styledComponentId,Se=E.target,gt=Z.useContext(sm),Ge=yf(),ot=E.shouldForwardProp||Ge.shouldForwardProp,T=X1(j,gt,Q)||ar,O=function(Ne,ae,de){for(var zt,sn=ze(ze({},ae),{className:void 0,theme:de}),xs=0;xs<Ne.length;xs+=1){var jo=ur(zt=Ne[xs])?zt(sn):zt;for(var It in jo)sn[It]=It==="className"?hn(sn[It],jo[It]):It==="style"?ze(ze({},sn[It]),jo[It]):jo[It]}return ae.className&&(sn.className=hn(sn.className,ae.className)),sn}(U,j,T),L=O.as||Se,D={};for(var I in O)O[I]===void 0||I[0]==="$"||I==="as"||I==="theme"&&O.theme===T||(I==="forwardedAs"?D.as=O.forwardedAs:ot&&!ot(I,L)||(D[I]=O[I]));var fe=function(Ne,ae){var de=yf(),zt=Ne.generateAndInjectStyles(ae,de.styleSheet,de.stylis);return zt}(z,O),re=hn(we,be);return fe&&(re+=" "+fe),O.className&&(re+=" "+O.className),D[el(L)&&!Vh.has(L)?"class":"className"]=re,D.ref=P,A.createElement(L,D)}(g,S,_)}p.displayName=f;var g=Z.forwardRef(p);return g.attrs=x,g.componentStyle=m,g.displayName=f,g.shouldForwardProp=y,g.foldedComponentIds=r?hn(o.foldedComponentIds,o.styledComponentId):"",g.styledComponentId=h,g.target=r?o.target:e,Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=r?function(_){for(var E=[],j=1;j<arguments.length;j++)E[j-1]=arguments[j];for(var P=0,U=E;P<U.length;P++)ca(_,U[P],!0);return _}({},o.defaultProps,S):S}}),Su(g,function(){return".".concat(g.styledComponentId)}),i&&Jh(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),g}function xf(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var wf=function(e){return Object.assign(e,{isCss:!0})};function Co(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(ur(e)||po(e))return wf(xn(xf(vs,fo([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?xn(r):wf(xn(xf(r,t)))}function da(e,t,n){if(n===void 0&&(n=ar),!t)throw ko(1,t);var r=function(o){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return e(t,n,Co.apply(void 0,fo([o],i,!1)))};return r.attrs=function(o){return da(e,t,ze(ze({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return da(e,t,ze(ze({},n),o))},r}var lm=function(e){return da(Tx,e)},v=lm;Vh.forEach(function(e){v[e]=lm(e)});function am(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=ua(Co.apply(void 0,fo([e],t,!1))),o=qh(r);return new rm(o,r)}const Ox=v.div`
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 1000;
  cursor: pointer;
  
  div {
    width: 30px;
    height: 3px;
    background-color: ${({isOpen:e})=>e?"#fff":"#1A4870"};
    margin: 5px 0;
    transition: 0.3s;
    
    &:nth-child(1) {
      transform: ${({isOpen:e})=>e?"rotate(45deg) translateY(12px)":"rotate(0)"};
    }
    
    &:nth-child(2) {
      opacity: ${({isOpen:e})=>e?"0":"1"};
    }
    
    &:nth-child(3) {
      transform: ${({isOpen:e})=>e?"rotate(-45deg) translateY(-11px)":"rotate(0)"};
    }
  }
`,$x=v.div`
  position: fixed;
  top: 0;
  left: ${({isOpen:e})=>e?"0":"-100%"};
  width: 250px;
  height: 100%;
  background-color: #1A4870;
  color: white;
  transition: 0.3s;
  padding: 75px 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
  
  ul {
    list-style: none;
    padding: 0;
    
    li {
      margin: 20px 0;
    }
  }
`,Nx=v.div`
    display: none;
    @media only screen and (max-width: 855px) {
        display: block;
        height: 73px;
        width: 100%;
        position: sticky;
        top: 0;
    }
`,Lx=v(hr)`
  height: 60px;
  color: white;
  text-decoration: none;
  font-size: 1.2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  &.active {
    font-weight: bold;
    color: #61dafb;
    font-size: 1.4rem;
  }
`,Ax=v.p`
    font-size: 22px;
    font-weight: bold;
`,Sf=v.div`
    color: white;
    font-size: 1.2rem;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: center;
    font-weight: bold;
`;v.p`
    font-size: 28px;
    font-weight: 700;
    margin: 14px 0;
    width: 100%;
    text-align: center;
    color: #1A4870;
`;const zx=v.img`
    width: 116px;
    margin: auto;
    display: flex;
    cursor: pointer;
`,Ix=({items:e,title:t,isLogged:n,handleLogout:r,handleLogin:o})=>{const[i,s]=A.useState(!1);return d.jsxs(Nx,{children:[d.jsxs(Ox,{isOpen:i,onClick:()=>s(!i),children:[d.jsx("div",{}),d.jsx("div",{}),d.jsx("div",{})]}),d.jsx(zx,{onClick:()=>{window.location.href="/"},src:"https://oncolympics-assets.expression-egy.com/assets/image/Oncolympics Logo.png",alt:"Oncolympics_Logo"}),d.jsxs($x,{isOpen:i,children:[d.jsx(Ax,{children:t}),e==null?void 0:e.map((l,a)=>d.jsx(Lx,{exact:!0,to:l.route,activeClassName:"active",children:l.label},a)),n&&d.jsx(Sf,{onClick:r,children:"Logout"}),!n&&d.jsx(Sf,{onClick:o,children:"Login"})]})]})},Mx=["yourmatch","matchmoderator"],Dx=v.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  ${e=>!e.hidebackground&&!e.isMatch&&`
      background-image: linear-gradient(to right, #ffffffc7, transparent 125%), url(https://oncolympics-assets.expression-egy.com/assets/image/landing.png);
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      background-size: 100vw 100vh;
      background-position: center top;
      background-repeat: no-repeat;
  `}
  ${e=>!e.hidebackground&&e.isMatch&&`
      background-image: linear-gradient(to right, #ffffffc7, transparent 125%), url(https://oncolympics-assets.expression-egy.com/assets/image/matchBG.png);
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      background-size: 100vw 100vh;
      background-position: center top;
      background-repeat: no-repeat;
  `}
  width: 100%;
  height: 100vh;
  
  overflow: hidden; 
`,Fx=v.div`
  display: flex;
  position: relative;
  @media only screen and (max-width: 855px) {
    display: none;
  }
`,Ux=v.div`
  display: flex;
  gap: 10px;
  margin: 26px auto;
`,bx=v(hr)`
  box-shadow: 0 0 25px rgb(0 0 0 / 25%);
  border-radius: 8px;
  text-align: center;
  width: 150px;
  text-decoration: none;
  flex-direction: column;
  margin: auto 0;
  align-items: center;
  background-color: rgb(255, 255, 255);
  border: none;
  border-radius: 3.625rem;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  font-weight: 700;
  height: 2.5rem;
  justify-content: center;
  padding: 0px 1rem;
  text-transform: uppercase;
  white-space: nowrap;
  z-index: 1;
  color: rgb(0, 0, 0);
  font-family: "Source Sans Pro Paris2024", "Olympic Sans", Arial, Helvetica, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  font-weight: bold;
  color: #369DA0;
  &.active {
    color: #ffff;
    background: #369DA0;
  }
`,Bx=v.div`
  margin: auto 0;
  align-items: center;
  border: none;
  border-radius: 3.625rem;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  font-weight: 700;
  height: 2.5rem;
  justify-content: center;
  padding: 0px 1rem;
  text-transform: uppercase;
  white-space: nowrap;
  z-index: 1;
  color: rgb(0, 0, 0);
  font-family: "Source Sans Pro Paris2024", "Olympic Sans", Arial, Helvetica, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  font-weight: bold;
  background: #890053;
  color: #fff;
  text-align: center;
  width: 150px;
`,Hx=v.div`
    color: #282c34;
    flex-direction: column;
    margin: auto 0;
    align-items: center;
    background-color: rgb(255, 255, 255);
    border: none;
    border-radius: 3.625rem;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    height: 2.5rem;
    justify-content: center;
    padding: 0px 1rem;
    text-transform: uppercase;
    white-space: nowrap;
    z-index: 1;
    color: rgb(0, 0, 0);
    font-family: "Source Sans Pro Paris2024", "Olympic Sans", Arial, Helvetica, sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
    font-weight: bold;
    background: black;
    color: #fff;
    position: absolute;
    right: 0;
    top: 5px;
    transition: top 0.7s;
`,Wx=v.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 48px;

  color: #ffff;
  font-family: "Source Sans Pro Paris2024", "Olympic Sans", Arial, Helvetica, sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
  font-weight: bold;
  border-radius: 3.625rem;
  box-sizing: border-box;
  height: 2.5rem;
  margin: auto 0;
  min-width: 48px;
  background: #890053;
  cursor: pointer;
  position: relative;

  &:hover > #logout {
    top: 3.3rem;
  }
`,Ef=v.div`
  display: flex;
  flex-direction: row;  
  justify-content: center;

  border-radius: 3.625rem;
  box-sizing: border-box;
  margin: auto 0;
  background: #890053;
  position: relative;
  z-index: 5;

  min-height: 45px;
  min-width: 190px;
`,Vx=v.img`
  width: 40px;
  height: 40px;
  background: #ffff;
  border-radius: 50%;
  padding: 3px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`,kf=v.p`
  font-weight: 700;
  margin: auto 16px;
  font-size: 18px;
  height: fit-content;
`,Qx=v.img`
    width: 140px;
    display: flex;
    margin: 10px 0px 0px 100px;
    cursor: pointer;
    position: absolute;
    z-index: 20;
`,Kx=v.div`
  // padding-top: 20px;
  overflow: auto;
  margin-top: 20px;
  ${e=>e.extendChildContainer||""};
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background: #9c9c9c;
    border-radius: 15px;
  }
`,Pe=({children:e,hidebackground:t,extendChildContainer:n,isMatch:r})=>{const[o,i]=A.useState(null),s=le.get("role");!s&&Mx.includes(String(window.location.pathname.split("/")[1]).toLowerCase())&&(window.location.href="/login"),A.useEffect(()=>{(async()=>{try{const f=await O1();i(f==null?void 0:f.data)}catch(f){console.log(f)}})()},[]);const l=()=>{le.remove("username"),le.remove("token"),le.remove("role"),window.location.href="/"},a=()=>{window.location.href="/login"},u=zh(s);return d.jsxs(Dx,{hidebackground:t,isMatch:r,children:[d.jsx(Ix,{items:u,title:`Hi! ${(o==null?void 0:o.name)||""}`,isLogged:!!s,handleLogin:a,handleLogout:l}),d.jsxs(Fx,{children:[d.jsx(Qx,{onClick:()=>{window.location.href="/"},src:"https://oncolympics-assets.expression-egy.com/assets/image/Oncolympics Logo.png",alt:"Oncolympics_Logo"}),d.jsxs(Ux,{children:[u==null?void 0:u.map((c,f)=>d.jsx(bx,{exact:!0,to:c.route,activeClassName:"active",children:c.label},f)),!s&&d.jsx(Bx,{onClick:a,children:"Login"}),!!s&&d.jsxs(Wx,{children:[o?d.jsxs(Ef,{children:[d.jsx(kf,{children:`Hi! ${o==null?void 0:o.name}`}),!!o.logo&&d.jsx(Vx,{src:`https://oncolympics-assets.expression-egy.com/assets/teamslogos/${o==null?void 0:o.logo}`,alt:"user_logo"})]}):d.jsx(Ef,{children:d.jsx(kf,{children:". . ."})}),o&&d.jsx(Hx,{id:"logout",onClick:l,children:"Logout"})]})]})]}),d.jsx(Kx,{extendChildContainer:n,children:e})]})},qx=v.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 115px);
`,Yx=v.form`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
`,Cf=v.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`,Gx=v.button`
  padding: 0.5rem;
  font-size: 1rem;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`,Xx=()=>{const[e,t]=A.useState(""),[n,r]=A.useState(""),[o,i]=A.useState(!1),[s,l]=A.useState(""),a=async u=>{u.preventDefault(),i(!0),l("");try{const c=await T1(e,n);(c==null?void 0:c.status)===200?window.location.href="/groups":l("Wrong Email or Password, Try Again!")}catch(c){console.log(c),l("Wrong Email or Password, Try Again!")}finally{i(!1)}};return d.jsx(Pe,{children:d.jsx(qx,{children:d.jsxs(Yx,{onSubmit:a,children:[d.jsx(Cf,{type:"text",placeholder:"Username",value:e,onChange:u=>t(u.target.value)}),d.jsx(Cf,{type:"password",placeholder:"Password",value:n,onChange:u=>r(u.target.value)}),d.jsx(Gx,{type:"submit",disabled:o,children:o?"Logging in...":"Login"}),s&&d.jsx("p",{style:{color:"red"},children:s})]})})})},Jx=async()=>{try{return(await B.get(_e.groups)).data}catch(e){return console.error(e),""}},Zx=v.div`
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  padding: 2rem;

  > *:nth-child(odd):last-child {
    grid-column: 1 / -1;
    justify-self: center;
  }

  @media only screen and (max-width: 855px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5px;
  }
`,ew=v.table`
  border-collapse: collapse;
  width: 80%;
  max-width: 740px;
  margin-bottom: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 18px auto;
  background: #fff;
  @media only screen and (max-width: 855px) {
    margin: 5px auto;
  }
`,tw=v.caption`
  caption-side: top;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #333;
`,jf=v.tr`

    > :first-child {
      width: 60%;
    }

   > *:not(:first-child) {
    text-align: center;
    width: 10%;
  }
`,Rr=v.th`
  border: 1px solid #ddd;
  padding: 0.5rem;
  text-align: left;
  background-color: #EDAA20;
  color: white;
`,Pr=v.td`
  border: 1px solid #ddd;
  padding: 0.5rem;
  text-align: left;
`,_f=v.div`
    height: 100vh;
    display: flex;
    width: 100%;
    justify-content: center;
`,Rf=v.p`
    display: flex;
    height: fit-content;
    margin: auto;
    font-size: 24px;
    font-weight: 500;
`,nw=()=>{var s;const[e,t]=A.useState({}),[n,r]=A.useState(!0),[o,i]=A.useState(null);return A.useEffect(()=>{(async()=>{try{const a=await Jx();t(a==null?void 0:a.data),r(!1)}catch(a){console.log(a),i("Failed to fetch data"),r(!1)}})()},[]),n?d.jsx(_f,{children:d.jsx(Rf,{children:"Loading ..."})}):o?d.jsx(_f,{children:d.jsx(Rf,{children:o})}):d.jsx(Pe,{children:d.jsx(Zx,{children:(s=Object.entries(e))==null?void 0:s.map(([l,a],u)=>d.jsxs(ew,{children:[d.jsx(tw,{children:l}),d.jsx("thead",{children:d.jsxs(jf,{children:[d.jsx(Rr,{children:"Name"}),d.jsx(Rr,{children:"W"}),d.jsx(Rr,{children:"D"}),d.jsx(Rr,{children:"L"}),d.jsx(Rr,{children:"Pts"})]})}),d.jsx("tbody",{children:a.map((c,f)=>d.jsxs(jf,{children:[d.jsx(Pr,{children:d.jsxs("div",{style:{display:"flex",gap:"15px"},children:[d.jsx("div",{style:{width:"30px"},children:c.logo&&d.jsx("img",{style:{width:"30px"},src:`https://oncolympics-assets.expression-egy.com/assets/teamslogos/${c.logo}`,alt:c.logo})}),d.jsx("p",{style:{margin:"0",lineHeight:"28px"},children:c.teamName})]})}),d.jsx(Pr,{children:c.W}),d.jsx(Pr,{children:c.D}),d.jsx(Pr,{children:c.L}),d.jsx(Pr,{children:c.Pts})]},f))})]},u))})})},rw=async()=>{var e;try{const t=await B.get(_e.allmatches);return(e=t==null?void 0:t.data)==null?void 0:e.data.map(r=>{let o=r==null?void 0:r.date_time.replace("Z",""),i=new Date(o);return{team1:r.team1_name,team2:r.team2_name,date:i.toLocaleString("en-EG",{weekday:"long",day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"}),team1Score:r.score_team1,team2Score:r.score_team2,matchStatus:r.match_status,matchId:r.match_id,team1Logo:r.team1_logo,team2Logo:r.team2_logo}})}catch(t){return console.log(t),""}},ow=async e=>{var t;try{const n=await B.get(`${_e.matchdetails}?matchid=${e}`);return(t=n==null?void 0:n.data)==null?void 0:t.data}catch(n){return console.log(n),""}},iw=v.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,sw=v.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 80%;
  max-height: 90vh;
  width: 100%;
  position: relative;

  @media only screen and (max-width: 855px) {
    max-width: unset;
    width: 100%;
    max-height: unset;
    height: 100vh;
    padding: 0px;
  }
`,lw=v.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`,aw=v.div`
  margin-top: 20px;
  overflow: auto;
  max-height: calc(90vh - 30px);
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background: #9c9c9c;
    border-radius: 15px;
  }
`,um=({isOpen:e,onClose:t,children:n})=>e?d.jsx(iw,{children:d.jsxs(sw,{children:[d.jsx(lw,{onClick:t,children:"×"}),d.jsx(aw,{children:n})]})}):null;v.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 40px;
    ${e=>e.isMini&&`
        padding: 20px 40px;
        background: #fff;
        border-radius: 8px;
        box-shadow: 0 0 25px rgb(0 0 0 / 25%);
    `};

    @media only screen and (max-width: 855px) {
        padding: 0 20px;
    }
`;v.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;v.div`
    display: flex;
    gap: 100px;
    ${e=>e.isMini&&`
        gap: 55px;
    `};
`;v.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    ${e=>e.isRtL&&`
        direction: rtl;
    `};

    ${e=>e.isMini&&`
        flex-direction: row;
        gap: 15px;
    `};
`;v.p`
    font-weight: bold;
    font-size: 28px;
    text-align: center;
    ${e=>e.isMini&&`
        font-size: 18px;
        margin: 10px;
    `};
`;v.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    ${e=>e.isRtL&&`
        direction: rtl;
    `};

    ${e=>e.isLTR&&`
        direction: ltr;
    `};
    ${e=>e.isMini&&`
        flex-direction: row;
        gap: 15px;
    `};
`;const uw=v.p`
    font-weight: bold;
    font-size: 28px;
    text-align: center;
    ${e=>e.isMini&&`
        font-size: 18px;
        margin: 13px 0;
    `};
`;v(uw)`
    ${e=>e.isMini&&`
        font-size: 18px
    `};
`;v.img`
    width: 120px;
    height: 120px;
    margin: auto;
    ${e=>e.isMini&&`
        width: 50px
        height: 50px;
    `};
`;v.p`
    font-weight: bold;
    font-size: 20px;
    text-align: center;
`;Co`
    font-size: 16px;
    font-weight: 700;
    height: 40px;
    width: 40px;
    border-radius: 8px;
    background-color: lightgreen;
`;Co`
    font-size: 16px;
    font-weight: 700;
    height: 40px;
    width: 40px;
    border-radius: 8px;
    background-color: red;
    color: #fff;
`;v.div`
    display: flex;
    gap: 5px;
    justify-content: center;
    margin-top: 10px;
`;const cw=v.div`
    position: relative;
    width: fit-content;
    z-index: 1;
    ${e=>e.notStarted&&`
        margin: 4% auto;
    `}
`,Pf=v.img`
    width: 600px;

    @media only screen and (max-width: 855px) {
        width: 350px;
    }
`;v.p``;const cm=v.img`
    width: 120px;
    height: 120px;
    position: absolute;
    top: 52px;

    @media only screen and (max-width: 855px) {
        width: 65px;
        height: 65px;
        top: 34px;
    }
`,fw=v(cm)`
    left: 35px;    

    @media only screen and (max-width: 855px) {
        left: 23px; 
    }
`,dw=v(cm)`
    right: 35px;
    @media only screen and (max-width: 855px) {
        right: 23px; 
    }
`,fm=v.p`
    margin: 0;
    font-weight: 900;
    color: #843891;
    position: absolute;
    top: 189px;
    width: 119px;
    text-align: center;
    font-size: 17px;

    @media only screen and (max-width: 855px) {
        top: 107px;
        width: 93px;
    }
`,pw=v(fm)`
    left: 105px;
    @media only screen and (max-width: 855px) {
        left: 50px;
        font-size: 12px;
    }
`,hw=v(fm)`
    right: 105px;
    @media only screen and (max-width: 855px) {
        right: 50px;
        font-size: 12px;
    }
`,nl=v.p`
    width: 80px;
    text-align: center;
    margin: 0;
    font-weight: 900;
    color: #843891;
    position: absolute;
    top: 189px;
    left: 50%;
    transform: translate(-50%, 0%);
    background-color: white;

    @media only screen and (max-width: 855px) {
        top: 107px;
        font-size: 12px;
    }
`,dm=v.div`
    width: 20px;
    height: 33px;
    position: absolute;
    bottom: 18px;
    cursor: pointer;
    @media only screen and (max-width: 855px) {
        width: 13px;
        bottom: 13px;
    }
`,mw=v(dm)`
    left: 49px;

    @media only screen and (max-width: 855px) {
        left: 27px;
    }
`,gw=v(dm)`
    right: 49px;

    @media only screen and (max-width: 855px) {
        right: 27px;
    }
`,pm=v.div`
    width: 20px;
    height: 45px;
    position: absolute;
    bottom: 4px;
    cursor: pointer;

    @media only screen and (max-width: 855px) {
        width: 13px;
        bottom: 3px;
    }
`,yw=v(pm)`
    left: 73px;

    @media only screen and (max-width: 855px) {
        left: 43px;
    }
`,vw=v(pm)`
    right: 73px;
    @media only screen and (max-width: 855px) {
        right: 43px;
    }
`,xw=v.div`
    display: flex;
    justify-content: space-between;
    width: fit-content;
    min-width: 100px;
    position: absolute;
    top: 89px;
    
    left: 50%;
    transform: translate(-50%, 0%);

    @media only screen and (max-width: 855px) {
        top: 55px;
    }
`,rl=v.p`
    font-weight: 900;
    color: #843891;
    max-width: 10px;
    margin: 0;
    font-size: 30px;

    @media only screen and (max-width: 855px) {
        font-size: 18px;
    }
`,ww=v.div`
    left: 50%;
    transform: translate(-50%, 0%);
    top: 96px;
    position: absolute;
    width: 200px;

    @media only screen and (max-width: 855px) {
        top: 45px;
        width: 150px;
    }
`,Sw=v.p`
    margin: 0;
    font-weight: 900;
    color: #843891;
    text-align: center;

    @media only screen and (max-width: 855px) {
        font-size: 12px;
    }
`,Ew=e=>{let t=e.replace("Z",""),n=new Date(t);return n==null?void 0:n.toLocaleDateString("en-Eg",{weekday:"long",day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"})},wn=({match:e,penaltyTeam:t,rewardTeam:n,isAdmin:r})=>{const o=e.match_status===1||e.match_status===2,i=e.match_status===1&&r,s=(e==null?void 0:e.match_status)===1&&e.team1_abbrev||e.team1_name,l=e==null?void 0:e.score_team1,a=`https://oncolympics-assets.expression-egy.com/assets/teamslogos/${e.team1_logo}`,u=(e==null?void 0:e.match_status)===1&&e.team2_abbrev||e.team2_name,c=e==null?void 0:e.score_team2,f=`https://oncolympics-assets.expression-egy.com/assets/teamslogos/${e.team2_logo}`,h=y=>{n&&n(y)},x=y=>{t&&t(y)};return d.jsx(d.Fragment,{children:d.jsxs(cw,{notStarted:e.match_status===0||e.match_status===2,children:[i?d.jsx(Pf,{src:"https://oncolympics-assets.expression-egy.com/assets/image/SCOREBOARD.png",alt:"score-board"}):d.jsx(Pf,{src:"https://oncolympics-assets.expression-egy.com/assets/image/SCOREBOARD2.png",alt:"score-board"}),d.jsx(fw,{src:a,alt:"team1_logo"}),d.jsx(dw,{src:f,alt:"team2_logo"}),d.jsx(pw,{children:s}),d.jsx(hw,{children:u}),o?d.jsxs(xw,{children:[d.jsx(rl,{children:l}),d.jsx(rl,{children:"-"}),d.jsx(rl,{children:c})]}):d.jsx(ww,{children:d.jsx(Sw,{children:Ew(e==null?void 0:e.date_time)})}),e.match_status===0&&d.jsx(nl,{children:"NEXT"}),e.match_status===1&&d.jsx(nl,{isMini:e.match_status===1,children:"LIVE"}),e.match_status===2&&d.jsx(nl,{children:"ENDED"}),i&&d.jsx(mw,{onClick:()=>h(e.team1_id)}),i&&d.jsx(gw,{onClick:()=>h(e.team2_id)}),i&&d.jsx(yw,{onClick:()=>x(e.team1_id)}),i&&d.jsx(vw,{onClick:()=>x(e.team2_id)})]})})};v.div``;const Tf=v.div`
    height: 100vh;
    display: flex;
    width: 100%;
    justify-content: center;
`,Of=v.p`
    display: flex;
    height: fit-content;
    margin: auto;
    font-size: 24px;
    font-weight: 500;
`,kw=v.div`
    margin-bottom: 1.5rem;
`,Cw=v.p`
    font-size: 32px;
    text-align: center;
    color: #333;
    font-weight: 700;
`,jw=v.div`
    margin-bottom: 3px;
`,_w=v.p`
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    margin: 15px 0px 0 0;
`,Rw=v.div`
    display : flex;
    justify-content: center;
    gap: 60px;
`,$f=v.div`
    display: flex;
    gap: 15px;
`,Nf=v.p`
    font-size: 18px;
    font-weight: bold;
`,Lf=v.p`
    font-size: 18px;
    font-weight: bold;
`,Pw=v.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;

    @media only screen and (max-width: 855px) {
        display: flex;
        flex-direction: column;
    }
`,Tw=v.div`
    display: flex;
    @media only screen and (max-width: 855px) {
        max-width: unset;
        width: 100%;
        max-height: unset;
        height: 95vh;
        flex-direction: column;
        gap: 30px;
    }
`,Ow=({isOpen:e,onClose:t,match:n})=>{const[r,o]=A.useState(null),[i,s]=A.useState(!0),[l,a]=A.useState(null);return A.useEffect(()=>{e?(async()=>{s(!0);try{const c=await ow(n==null?void 0:n.matchId);o(c),s(!1)}catch(c){a(c),s(!1)}})():o(null)},[e,n]),i?d.jsx(Tf,{children:d.jsx(Of,{children:"Loading..."})}):l?d.jsx(Tf,{children:d.jsxs(Of,{children:["Error: ",l.message]})}):d.jsx(um,{isOpen:e,onClose:t,children:d.jsxs("div",{children:[d.jsx(kw,{children:d.jsx(Cw,{children:"Match Details"})}),d.jsxs(Tw,{children:[d.jsx(wn,{match:{...n,match_status:n==null?void 0:n.matchStatus,team1_name:n==null?void 0:n.team1,team1_logo:n==null?void 0:n.team1Logo,score_team1:n==null?void 0:n.team1Score,team2_name:n==null?void 0:n.team2,team2_logo:n==null?void 0:n.team2Logo,score_team2:n==null?void 0:n.team2Score}}),d.jsx(Pw,{children:r==null?void 0:r.map((u,c)=>d.jsxs(jw,{children:[d.jsxs(_w,{children:["Question ",u.questionId+1]}),d.jsxs(Rw,{children:[d.jsxs($f,{children:[d.jsxs(Nf,{children:[u.team1_name,":"]})," ",d.jsx(Lf,{children:u.score_team1})]}),d.jsxs($f,{children:[d.jsx(Lf,{children:u.score_team2})," ",d.jsxs(Nf,{children:[":",u.team2_name]})]})]})]},c))})]})]})})},$w=v.div`
  
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;

  align-items: center;
  padding: 2rem;

  @media only screen and (max-width: 855px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px 5px;
  }
`,Nw=v.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  padding: 1rem;
  margin: 1rem 0;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 80%;
`,Tr=v.p`
  font-weight: bold;
  color: #333;
  margin: 0;
`,Lw=v.div`
  margin-top: 0.5rem;
  color: #777;
`,Af=v.div`
    height: 100vh;
    display: flex;
    width: 100%;
    justify-content: center;
`,zf=v.p`
    display: flex;
    height: fit-content;
    margin: auto;
    font-size: 24px;
    font-weight: 500;
`,Aw=v.div`
  cursor: pointer;
  color: blue;
  text-decoration: underline;
  line-height: 18px;
`,zw=()=>{const[e,t]=A.useState(!1),[n,r]=A.useState(null),[o,i]=A.useState([]),[s,l]=A.useState(!0),[a,u]=A.useState(null);if(A.useEffect(()=>{const f=async()=>{try{const x=await rw();i(x),l(!1)}catch(x){console.log(x),u("Failed to fetch data"),l(!1)}};f();const h=setInterval(f,1e4);return()=>clearInterval(h)},[]),s&&!(o!=null&&o.length))return d.jsx(Af,{children:d.jsx(zf,{children:"Loading ..."})});if(a)return d.jsx(Af,{children:d.jsx(zf,{children:a})});const c=f=>{r(f),t(!0)};return d.jsxs(Pe,{children:[d.jsx($w,{children:o==null?void 0:o.map((f,h)=>d.jsxs(Nw,{children:[d.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%"},children:[d.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:"10px"},children:[d.jsx(Tr,{style:{width:"40%",textAlign:"center"},children:f.team1})," vs ",d.jsx(Tr,{style:{width:"40%",textAlign:"center"},children:f.team2})]}),d.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:"10px"},children:[d.jsx(Tr,{children:f.team1Score})," : ",d.jsx(Tr,{children:f.team2Score})]}),d.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:"10px",marginTop:"5px"},children:[d.jsxs(Tr,{children:[f.matchStatus===0&&"Not Started Yet",f.matchStatus===1&&"Live Now",f.matchStatus===2&&"Ended"]}),f.matchStatus!==0&&d.jsx(Aw,{onClick:()=>c(f),children:d.jsx("p",{style:{margin:"0"},children:"Details"})})]})]}),d.jsx(Lw,{children:f.date})]},h))}),e&&d.jsx(Ow,{match:n,isOpen:e,onClose:()=>t(!1)})]})},Iw=async()=>{var e;try{return(e=(await B.get(_e.playermatch,{headers:{token:le.get("token")}})).data.data)==null?void 0:e[0]}catch(t){return console.log(t),""}},Mw=async(e,t)=>{try{await B.post(_e.answer,{answer:e,answerId:t},{headers:{token:le.get("token")}})}catch(n){return console.log(n),""}};v.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f0f2f5;
  height: 100vh;
`;v.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #333;
`;v.div`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: #ff0000;
`;v.div`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #333;
`;v.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 600px;
`;v.button`
  background-color: ${e=>e.selected?"#4CAF50":"#ffffff"};
  color: ${e=>e.selected?"#ffffff":"#333"};
  border: 1px solid #ccc;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  cursor: pointer;
  text-align: left;
  font-size: 1rem;
  
  &:hover {
    background-color: #e0e0e0;
  }
`;v.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.2rem;

  &:hover {
    background-color: #0056b3;
  }
`;v.button`
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 18px;
  
  &:hover {
    background-color: #0056b3;
  }
`;v.p`
      font-size: 32px;
      font-weight: 700;
`;v.button`
  width: 147px;
  height: 60px;
  border: unset;
  border-radius: 8px;
  background-color: #282c34;
  display: flex;
  margin: 10px auto;
  cursor: pointer;
  :hover > p {
    color: #61dafb;
  }
`;v.p`
  margin: auto;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;const If=v.div`
    height: calc(100vh - 85px);
    display: flex;
    width: 100%;
    justify-content: center;
`,Mf=v.p`
    display: flex;
    height: fit-content;
    margin: auto;
    font-size: 28px;
    font-weight: 700;
`,hm=v.div`
  display: grid;
  grid-template-columns: 1fr;
`;v(hm)``;const ut={0:"a. ",1:"b. ",2:"c. ",3:"d. "},Dw=v.div`
    padding: 40px;
`,Fw=v.div`
    margin-bottom: 1.5rem;
`,Uw=v.p`
    font-size: 32px;
    // text-align: center;
    color: #333;
    font-weight: 700;
`,bw=v.div`
    background-color: #fff;
  
    ${e=>e.isSelected&&`
      background-color: #979595;
    `};

    background-color: ${e=>e.isRight&&"#4CAF50"};
    background-color: ${e=>e.isWrong&&"red"};

    color: ${e=>e.isRight?"#ffffff":"#333"};

    cursor: pointer;

    border: 1px solid #ccc;
    padding: 0px 30px;
    margin-bottom: 1rem;
    border-radius: 4px;
    text-align: left;
    font-size: 20px;
    font-weight: 700;
`,Bw=v.p`
    
`,Hw=v.p`
    padding: 0 40px;
    font-size: 25px;
    color: darkgreen;
    font-weight: 700;
`,Ww=v.div`
  font-size: 32px;
  // text-align: center;
  color: #333;
  font-weight: 700;
`;v.button`
  width: 280px;
  height: 50px;
  border: unset;
  border-radius: 8px;
  background-color: darkmagenta;
  display: flex;
  margin: 10px auto;
  cursor: pointer;
  :hover > p {
    color: #61dafb;
  }
`;v.p`
  margin: auto;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`;const Vw=v.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
  padding: 0;
`,Qw=v.div`
  display: flex;
  @media only screen and (max-width: 855px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`,Kw=v.div`
  width: fit-content;
  @media only screen and (max-width: 855px) {
    margin: 0px auto 35px auto;
  }
`,qw=({questionFile:e,currentQuestion:t,answerQuestion:n,match:r,matchDetails:o})=>{var y;const[i,s]=A.useState([]),[l,a]=A.useState(null),[u,c]=A.useState(),f=r==null?void 0:r.canAnswer;if(A.useEffect(()=>{c(null)},[t]),A.useEffect(()=>{(async()=>{try{const m=await(await fetch(`https://oncolympics-assets.expression-egy.com/assets/matchesquestions/${e}`)).json();s(m.questions)}catch(C){a(C)}})()},[e]),l)return d.jsxs("div",{children:["Error: ",l.message]});const h=i[t],x=(w,C)=>{f&&(n(w,C),c(C))};return d.jsxs(Dw,{children:[d.jsxs(Qw,{children:[d.jsxs("div",{style:{width:"100%"},children:[d.jsx(Ww,{children:`${t+1} / ${i==null?void 0:i.length}`}),d.jsx(Fw,{children:d.jsx(Uw,{children:h==null?void 0:h.question})})]}),d.jsx(Kw,{children:o})]}),d.jsx(Vw,{children:h==null?void 0:h.answers.map((w,C)=>d.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:d.jsx(bw,{onClick:()=>x(w.correct,C),isSelected:C===u,isRight:w.correct&&!f,isWrong:!w.correct&&!f&&C===u,children:d.jsx(Bw,{children:`${ut[C]}${w.answer}`})},C)},C))}),!f&&d.jsx(Hw,{children:`${ut[h==null?void 0:h.answers.findIndex(w=>w==null?void 0:w.correct)]}${(y=h==null?void 0:h.answers.find(w=>w==null?void 0:w.correct))==null?void 0:y.reason}`})]})},Yw=()=>{const[e,t]=A.useState(null),[n,r]=A.useState(null),o=async(s,l)=>{await Mw(s,l)};if(A.useEffect(()=>{const s=async()=>{try{const a=await Iw();t(a?[a]:null)}catch(a){r(a)}};s();const l=setInterval(s,4e3);return()=>clearInterval(l)},[e]),n)return d.jsx(Pe,{isMatch:!0,children:d.jsx(If,{children:d.jsxs(Mf,{children:["Error: ",n.message]})})});if((e==null?void 0:e.length)===0||e===null)return d.jsx(Pe,{isMatch:!0,children:d.jsx(If,{children:d.jsx(Mf,{children:"No Matches Yet"})})});const i=e==null?void 0:e[0];if((i==null?void 0:i.match_status)===0)return d.jsx(Pe,{isMatch:!0,children:d.jsx("div",{children:d.jsx(wn,{match:i})})});if((i==null?void 0:i.match_status)===1)return d.jsx(Pe,{isMatch:!0,children:d.jsx(hm,{children:d.jsx("div",{children:d.jsx(qw,{match:i,answerQuestion:o,questionFile:i==null?void 0:i.question_file,currentQuestion:i==null?void 0:i.current_question,matchDetails:d.jsx(wn,{match:i})})})})});if((i==null?void 0:i.match_status)===2)return d.jsx(Pe,{isMatch:!0,children:d.jsx("div",{children:d.jsx(wn,{match:i})})})},Gw=async()=>{var e;try{const t=await B.get(_e.moderatormatch,{headers:{token:le.get("token")}});return(e=t==null?void 0:t.data)==null?void 0:e.data}catch(t){return console.log(t),""}},Xw=async()=>{try{await B.get(_e.startmatch,{headers:{token:le.get("token")}})}catch(e){return console.log(e),""}},Jw=async()=>{try{await B.get(_e.nextquestion,{headers:{token:le.get("token")}})}catch(e){return console.log(e),""}},Zw=async()=>{try{await B.get(_e.endmatch,{headers:{token:le.get("token")}})}catch(e){return console.log(e),""}},eS=async()=>{try{return await B.get(_e.stopanswer,{headers:{token:le.get("token")}})}catch(e){return console.log(e),""}},tS=async()=>{try{return await B.get(_e.resetmatch,{headers:{token:le.get("token")}})}catch(e){return console.log(e),""}},nS=async e=>{try{await B.post(_e.reward,{teamId:e},{headers:{token:le.get("token")}})}catch(t){return console.log(t),""}},rS=async e=>{try{await B.post(_e.penalty,{teamId:e},{headers:{token:le.get("token")}})}catch(t){return console.log(t),""}},oS=async(e,t)=>{var n;try{const r=await B.get(`${_e.questionanswers}?matchId=${e}&questionId=${t}`,{headers:{token:le.get("token")}});return(n=r==null?void 0:r.data)==null?void 0:n.data}catch(r){return console.log(r),""}},iS=v.div`
    margin-bottom: 1.5rem;
`,sS=v.p`
    font-size: 32px;
    text-align: center;
    color: #333;
    font-weight: 700;
`,lS=v.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    min-height: 330px;
    margin-bottom: 20px;
    column-gap: 10px;
    width: calc(98% - 10px);
    margin: 0 auto 10px;
`,Df=v.img`
    width: 120px;
    height: 120px;
    margin: auto;
    display: flex;
`,Ff=v.p`
    font-weight: bold;
    font-size: 28px;
    text-align: center;
`,pa=v.p`
    font-weight: bold;
    font-size: 28px;
    text-align: center;
    
    color: ${e=>e.isRight&&"#4CAF50"};
    color: ${e=>e.isWrong&&"red"};
`,Eu=v(pa)`
    font-weight: bold;
    font-size: 22px;
    text-align: unset;
    color: unset;
    margin: 15px 20px;
`,aS=v(Eu)`
    font-weight: bold;
    font-size: 22px;
    text-align: unset;
    
    color: ${e=>e.isRight&&"#4CAF50"};
    color: ${e=>e.isWrong&&"red"};
`,uS=v(Eu)`
    font-weight: bold;
    font-size: 22px;
    text-align: unset;
    
    color: ${e=>e.isRight&&"#4CAF50"};
    color: ${e=>e.isWrong&&"red"};
`,Uf=v.div`
    border: 1px solid rgb(169, 169, 169);
    border-radius: 8px;
    width: 100%;
    padding: 20px 0px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`,cS=v.div`
    padding: 30px 0px;
    border: 1px solid #a9a9a9;
    border-radius: 8px;
    width: calc(98% - 10px);
    margin: 0 auto;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`,fS=({isOpen:e,onClose:t,match:n})=>{const{question_file:r,team1_name:o,team2_name:i,team1_logo:s,team2_logo:l,current_question:a,id:u}=n,[c,f]=A.useState(null),[h,x]=A.useState(null),[y,w]=A.useState(!1),[C,m]=A.useState(null);return A.useEffect(()=>{e?(async()=>{var g,S,_,E,j;try{const U=await(await fetch(`https://oncolympics-assets.expression-egy.com/assets/matchesquestions/${r}`)).json(),z=(g=U==null?void 0:U.questions)==null?void 0:g[a],Q=await oS(u,a);let we=(S=z==null?void 0:z.answers)==null?void 0:S[Q==null?void 0:Q.team1answerid],be=(ut==null?void 0:ut[Q==null?void 0:Q.team1answerid])||"";we={...we,answer:`${be}${(we==null?void 0:we.answer)||""}`};let Se=(_=z==null?void 0:z.answers)==null?void 0:_[Q==null?void 0:Q.team2answerid],gt=(ut==null?void 0:ut[Q==null?void 0:Q.team2answerid])||"";Se={...Se,answer:`${gt}${(Se==null?void 0:Se.answer)||""}`};let Ge=(E=z==null?void 0:z.answers)==null?void 0:E.find(T=>T.correct),ot=ut[(j=z==null?void 0:z.answers)==null?void 0:j.findIndex(T=>T.correct)];Ge={...Ge,answer:`${ot}${Ge.answer}`},m(Ge),f(we),x(Se),w(!0)}catch(P){console.log(P)}})():(f(null),x(null),w(!1),m(null))},[a,u,e,n,r]),d.jsx(um,{isOpen:e,onClose:t,children:d.jsxs("div",{children:[d.jsx(iS,{children:d.jsx(sS,{children:"Teams answers"})}),d.jsxs(lS,{children:[d.jsx(Uf,{children:d.jsxs("div",{children:[d.jsx(Df,{src:`https://oncolympics-assets.expression-egy.com/assets/teamslogos/${s}`,alt:"team1_logo"}),d.jsx(Ff,{children:o}),y?d.jsx("div",{children:d.jsx(pa,{isRight:c==null?void 0:c.correct,isWrong:!(c!=null&&c.correct),children:(c==null?void 0:c.answer)||"N/A"})}):""]})}),d.jsx(Uf,{children:d.jsxs("div",{children:[d.jsx(Df,{src:`https://oncolympics-assets.expression-egy.com/assets/teamslogos/${l}`,alt:"team2_logo"}),d.jsx(Ff,{children:i}),y?d.jsx("div",{children:d.jsx(pa,{isRight:h==null?void 0:h.correct,isWrong:!(h!=null&&h.correct),children:(h==null?void 0:h.answer)||"N/A"})}):""]})})]}),C&&d.jsxs(cS,{children:[d.jsxs("div",{style:{display:"flex",gap:"0px"},children:[d.jsx(Eu,{isRight:!0,children:"Right Answer:"}),d.jsx(aS,{style:{margin:"15px 0"},isRight:!0,children:C.answer})]}),d.jsx(uS,{isRight:!0,children:C.reason})]})]})})};v.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f0f2f5;
  height: 100vh;
`;v.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #333;
`;v.div`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: #ff0000;
`;v.div`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #333;
`;v.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  max-width: 600px;
`;v.button`
  background-color: ${e=>e.selected?"#4CAF50":"#ffffff"};
  color: ${e=>e.selected?"#ffffff":"#333"};
  border: 1px solid #ccc;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  cursor: pointer;
  text-align: left;
  font-size: 1rem;
  
  &:hover {
    background-color: #e0e0e0;
  }
`;v.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.2rem;

  &:hover {
    background-color: #0056b3;
  }
`;v.button`
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 18px;
  
  &:hover {
    background-color: #0056b3;
  }
`;v.p`
      font-size: 32px;
      font-weight: 700;
`;const Or=v.button`
  width: 147px;
  height: 60px;
  border: unset;
  border-radius: 8px;
  background-color: #282c34;
  display: flex;
  cursor: pointer;
  :hover > p {
    color: #61dafb;
  }
  @media only screen and (max-width: 855px) {
    margin: auto;

  }
`,$r=v.p`
  margin: auto;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`,bf=v.div`
    height: calc(100vh - 85px);
    display: flex;
    width: 100%;
    justify-content: center;
`,Bf=v.p`
    display: flex;
    height: fit-content;
    margin: auto;
    font-size: 28px;
    font-weight: 700;
`,mm=v.div`
  display: grid;
  grid-template-columns: 1fr;
`;v(mm)``;const ol=v.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  @media only screen and (max-width: 855px) {
    flex-direction: column;
  }
`,dS=v.div`
    padding: 40px;

    @media only screen and (max-width: 855px) {
      padding: 5px;
  }
`,pS=v.div`
    margin-bottom: 1.5rem;
`,hS=v.p`
    font-size: 32px;
    text-align: unset;
    color: #333;
    font-weight: 700;

    @media only screen and (max-width: 855px) {
      font-size: 18px;
    }
`,mS=v.div`
    background-color: ${e=>e.isRight?"#4CAF50":"#ffffff"};
    color: ${e=>e.isRight?"#ffffff":"#333"};
    border: 1px solid #ccc;
    padding: 0px 30px;
    margin-bottom: 1rem;
    border-radius: 4px;
    text-align: left;
    font-size: 20px;
    font-weight: 700;
`,gS=v.p`
    
`,yS=v.p`
    padding: 0 40px;
    font-size: 25px;
    color: darkgreen;
    font-weight: 700;
`,vS=v.div`
  font-size: 32px;
  text-align: unset;
  color: #333;
  font-weight: 700;

  @media only screen and (max-width: 855px) {
      font-size: 18px;
  }
`,xS=v.button`
  width: 280px;
  height: 50px;
  border: unset;
  border-radius: 8px;
  background-color: darkmagenta;
  display: flex;
  margin: 10px auto;
  cursor: pointer;
  :hover > p {
    color: #61dafb;
  }
`,wS=v.p`
  margin: auto;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`,SS=v.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
  padding: 0;

  @media only screen and (max-width: 855px) {
      display: flex;
      flex-direction: column;
  }
`,ES=v.div`
  display: flex;
  @media only screen and (max-width: 855px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`,kS=v.div`
  width: fit-content;
  @media only screen and (max-width: 855px) {
    margin: 0px auto 35px auto;
  }
`,CS=v.img`
    width: 40px;
    height: 40px;
    cursor: pointer;
    margin: 0px 30px;
`,jS=v.div`
  font-size: 28px;
  font-weight: bold;
  color: red;
  width: fit-content;
  margin: auto;

  @media only screen and (max-width: 855px) {
      font-size: 18px;
  }
`,_S=({isChanged:e,stopCounter:t})=>{const[n,r]=A.useState(60);return A.useEffect(()=>{if(n>0){const o=setInterval(()=>{r(i=>i-1)},1e3);return()=>clearInterval(o)}},[n]),A.useEffect(()=>{r(t?0:60)},[e,t]),d.jsx(jS,{children:`${n===0?"Timeout!":`${n} sec`}`})},RS=({toggleDetailsPopUp:e,teamCanAnswer:t,stopAnswer:n,matchDetails:r,questionFile:o,currentQuestion:i,setNumberOfQuestions:s})=>{var p,g;console.log(r);const[l,a]=A.useState([]),[u,c]=A.useState(!0),[f,h]=A.useState(null),[x,y]=A.useState(!1),[w,C]=A.useState(!1);if(A.useEffect(()=>{y(!1),C(!1)},[i]),A.useEffect(()=>{(async()=>{var _;try{const j=await(await fetch(`https://oncolympics-assets.expression-egy.com/assets/matchesquestions/${o}`)).json();a(j.questions),s((_=j==null?void 0:j.questions)==null?void 0:_.length),c(!1)}catch(E){h(E),c(!1)}})()},[o,s]),u)return d.jsx("div",{children:"Loading..."});if(f)return d.jsxs("div",{children:["Error: ",f.message]});const m=l[i];return d.jsxs(dS,{children:[d.jsxs(ES,{children:[d.jsxs("div",{style:{width:"100%"},children:[d.jsxs("div",{style:{display:"flex"},children:[d.jsx(vS,{children:`${i+1} / ${l==null?void 0:l.length}`}),d.jsxs("div",{style:{margin:"0 auto",display:"flex",justifyContent:"center"},children:[d.jsx("div",{style:{width:"110px"},children:d.jsx(_S,{isChanged:i,stopCounter:w})}),t&&d.jsx(CS,{onClick:()=>{n(),C(!0)},src:"https://oncolympics-assets.expression-egy.com/assets/image/stopwatch.png",alt:"stopwatch"})]})]}),d.jsx(pS,{children:d.jsx(hS,{children:m==null?void 0:m.question})})]}),d.jsx(kS,{children:r})]}),d.jsx(SS,{children:m==null?void 0:m.answers.map((S,_)=>d.jsx("div",{children:d.jsx(mS,{isRight:S.correct&&x,children:d.jsx(gS,{children:`${ut[_]}${S.answer}`})},_)},_))}),x&&d.jsx(yS,{children:`${ut[(p=m==null?void 0:m.answers)==null?void 0:p.findIndex(S=>S==null?void 0:S.correct)]} ${(g=m==null?void 0:m.answers.find(S=>S==null?void 0:S.correct))==null?void 0:g.reason}`}),d.jsx(xS,{onClick:()=>{y(!0),e(!0)},children:d.jsx(wS,{children:"Show Right Answer"})})]})},PS=()=>{const[e,t]=A.useState(!1),[n,r]=A.useState(null),[o,i]=A.useState(!0),[s,l]=A.useState(null),[a,u]=A.useState(0),[c,f]=A.useState(void 0),[h,x]=A.useState(void 0),y=async()=>{i(!0);try{const P=await Gw();r(P),i(!1),f(void 0),x(void 0)}catch(P){l(P),i(!1)}};A.useEffect(()=>{y()},[]);const w=async()=>{i(!0);try{await Xw(),y()}catch(P){console.error(P)}},C=async()=>{x(!0);try{await Jw(),y()}catch(P){console.error(P)}},m=async()=>{try{await eS().then(()=>{y()})}catch(P){console.error(P)}},p=async()=>{try{await Zw(),y()}catch(P){console.error(P)}},g=async()=>{f(!0);try{await tS().then(()=>{y()})}catch(P){console.error(P)}},S=async P=>{try{await nS(P).then(()=>y())}catch(U){console.error(U)}},_=async P=>{try{await rS(P).then(()=>y())}catch(U){console.error(U)}};if(s)return d.jsx(Pe,{isMatch:!0,children:d.jsx(bf,{children:d.jsxs(Bf,{children:["Error: ",s.message]})})});if((n==null?void 0:n.length)===0)return d.jsx(Pe,{isMatch:!0,children:d.jsx(bf,{children:d.jsx(Bf,{children:"No Matches Yet"})})});const E=n==null?void 0:n[0],j=(E==null?void 0:E.canAnswer)===1;if((E==null?void 0:E.match_status)===0)return d.jsx(Pe,{isMatch:!0,children:d.jsxs("div",{children:[d.jsx(wn,{isAdmin:!0,match:E}),d.jsx(ol,{id:"panel",children:d.jsx(Or,{onClick:w,children:d.jsx($r,{children:o?"Loading":"Start Match"})})})]})});if((E==null?void 0:E.match_status)===1)return d.jsxs(Pe,{isMatch:!0,children:[d.jsx(mm,{children:d.jsxs("div",{children:[d.jsx(RS,{toggleDetailsPopUp:t,teamCanAnswer:j,stopAnswer:m,setNumberOfQuestions:u,questionFile:E==null?void 0:E.question_file,currentQuestion:E==null?void 0:E.current_question,matchDetails:d.jsx(wn,{isAdmin:!0,match:E,rewardTeam:S,penaltyTeam:_})}),d.jsxs(ol,{id:"panel",children:[a===(E==null?void 0:E.current_question)+1?d.jsx("div",{children:!j&&d.jsx(Or,{onClick:p,children:d.jsx($r,{children:"End Match"})})}):d.jsx("div",{children:!j&&d.jsx(Or,{onClick:C,children:d.jsx($r,{children:h?"Loading ...":"Next"})})}),d.jsx(Or,{onClick:g,children:d.jsx($r,{children:c?"Resetting ...":"Reset"})})]})]})}),e&&d.jsx(fS,{match:E,isOpen:e,onClose:()=>t(!1)})]});if((E==null?void 0:E.match_status)===2)return d.jsx(Pe,{isMatch:!0,children:d.jsxs("div",{children:[d.jsx(wn,{isAdmin:!0,match:E}),d.jsx(ol,{id:"panel",BtnsPanel:!0,children:d.jsx(Or,{onClick:g,children:d.jsx($r,{children:c?"Resetting ...":"Reset Match"})})})]})})},TS=v.div`
  display: flex;
  padding: 60px 0;
`,OS=v.img`
    width: 70%;
    margin: auto;
`,$S=()=>d.jsx(Pe,{children:d.jsx(TS,{children:d.jsx(OS,{src:"https://oncolympics-assets.expression-egy.com/assets/image/knockouts.png",alt:"knockouts"})})}),NS=v.div`
    background-image: linear-gradient(to right, white, transparent 125%), url(${"https://oncolympics-assets.expression-egy.com/assets"}/videos/Animation.gif);
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center;
`,gm=am`
  to {
    opacity: 1;
    transform: translateX(0);
  }
`,LS=v.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  margin: 50px 0;
`;v.div`
  opacity: 0;
  transform: translateX(-100%);
  animation: ${gm} 0.5s forwards;
  animation-delay: ${e=>e.delay};
`;v.p`
  height: 100px;
  font-size: 68px;
  font-weight: bolder;
  color: #DE7FAE;
  padding: 0px 70px;

  @media only screen and (max-width: 855px) {
    font-size: 38px;
    padding: 0 30px;
    margin: 40px 0px 0 0;
  }
`;const AS=v(hr)`
  height: 80px;
  color: black;
  text-decoration: none;

  font-size: 48px;
  font-weight: bolder;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 6px 70px;

  opacity: 0;
  transform: translateX(-100%);
  animation: ${gm} 1s forwards;
  animation-delay: ${e=>e.delay};

  &.active {
    font-weight: bold;
    border-bottom: 5px solid #61dafb;
  }

  &:hover {
    color: #61dafb;
  }

  @media only screen and (max-width: 855px) {
    padding: 3px 30px;
    font-size: 38px;
  }
`,zS=v.img`
      width: 527px;
      padding: 0 40px;

      @media only screen and (max-width: 855px) {
        width: 200px;
      padding: 0 15px;
      }
`;v.img`
      width: 630px;
      height: 632px;
      padding: 0 40px;

      @media only screen and (max-width: 855px) {
        width: 200px;
      padding: 0 15px;
      }
`;const IS=()=>{const e=zh();return d.jsx(NS,{children:d.jsx("div",{style:{display:"flex",justifyContent:"space-between"},children:d.jsxs(LS,{children:[d.jsx(zS,{src:"https://oncolympics-assets.expression-egy.com/assets/image/Oncolympics Logo.png",alt:"Oncolympics_Logo"}),e==null?void 0:e.map((t,n)=>d.jsx(AS,{exact:!0,to:t.route,activeClassName:"active",children:t.label},n))]})})})},MS=Co`
  position: absolute;
  margin-top: unset;
  width: 100%;
`;v.div`
    background-image: linear-gradient(to right, white, transparent 125%), url(${"https://oncolympics-assets.expression-egy.com/assets"}/image/landing.png);
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center;
`;const ym=am`
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;v.video`
  width: 100%;
`;v.source`
  z-index: 10;
`;v.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  margin: 50px 0;
`;v.div`
  opacity: 0;
  transform: translateX(-100%);
  animation: ${ym} 0.5s forwards;
  animation-delay: ${e=>e.delay};
`;v.p`
  height: 100px;
  font-size: 68px;
  font-weight: bolder;
  color: #DE7FAE;
  padding: 0px 70px;

  @media only screen and (max-width: 855px) {
    font-size: 38px;
    padding: 0 30px;
    margin: 40px 0px 0 0;
  }
`;v(hr)`
  height: 80px;
  color: black;
  text-decoration: none;

  font-size: 48px;
  font-weight: bolder;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 6px 70px;

  opacity: 0;
  transform: translateX(-100%);
  animation: ${ym} 1s forwards;
  animation-delay: ${e=>e.delay};

  &.active {
    font-weight: bold;
    border-bottom: 5px solid #61dafb;
  }

  &:hover {
    color: #61dafb;
  }

  @media only screen and (max-width: 855px) {
    padding: 3px 30px;
    font-size: 38px;
  }
`;v.img`
      width: 527px;
      padding: 0 40px;

      @media only screen and (max-width: 855px) {
        width: 200px;
      padding: 0 15px;
      }
`;v.img`
      width: 630px;
      height: 632px;
      padding: 0 40px;

      @media only screen and (max-width: 855px) {
        width: 200px;
      padding: 0 15px;
      }
`;const DS=v.div`
  @media only screen and (max-width: 855px) {
    display: none;
  }
`,FS=v.div`
  @media only screen and (min-width: 855px) {
    display: none;
  }
`;v.div`
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;

    video {
        position: absolute;
        top: 50%;
        left: 50%;
        min-width: 100%;
        min-height: 100%;
        width: auto;
        height: auto;
        opacity: 0.5; // Adjust as needed
        transform: translate(-50%, -50%);
        z-index: -1;
    }
`;const US=()=>{const e=A.useRef(null);return d.jsxs(d.Fragment,{children:[d.jsx(DS,{children:d.jsx(Pe,{hidebackground:!0,extendChildContainer:MS,children:d.jsx("div",{children:d.jsxs("video",{ref:e,poster:"https://oncolympics-assets.expression-egy.com/assets/image/landing.png",autoPlay:!0,loop:!0,muted:!0,style:{width:"100%",height:"auto"},children:[d.jsx("source",{src:"https://oncolympics-assets.expression-egy.com/assets/videos/landingvideo.mp4",type:"video/mp4"}),"Your browser does not support the video tag."]})})})}),d.jsx(FS,{children:d.jsx(IS,{})})]})},bS=()=>d.jsx(ih,{children:d.jsxs(fu,{children:[d.jsx(at,{exact:!0,path:"/",component:US}),d.jsx(at,{exact:!0,path:"/login",component:Xx}),d.jsx(at,{path:"/groups",component:nw}),d.jsx(at,{path:"/knockouts",component:$S}),d.jsx(at,{path:"/schedule",component:zw}),d.jsx(at,{path:"/yourmatch",component:Yw}),d.jsx(at,{path:"/matchmoderator",component:PS}),d.jsx(ls,{to:"/"})]})});th(document.getElementById("root")).render(d.jsx(bS,{}));
