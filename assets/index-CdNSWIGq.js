(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function ho(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var rd={exports:{}},Qi={},od={exports:{}},U={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mo=Symbol.for("react.element"),$m=Symbol.for("react.portal"),Nm=Symbol.for("react.fragment"),Lm=Symbol.for("react.strict_mode"),Am=Symbol.for("react.profiler"),zm=Symbol.for("react.provider"),Mm=Symbol.for("react.context"),Im=Symbol.for("react.forward_ref"),Dm=Symbol.for("react.suspense"),Fm=Symbol.for("react.memo"),bm=Symbol.for("react.lazy"),Pu=Symbol.iterator;function Um(e){return e===null||typeof e!="object"?null:(e=Pu&&e[Pu]||e["@@iterator"],typeof e=="function"?e:null)}var id={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},sd=Object.assign,ld={};function cr(e,t,n){this.props=e,this.context=t,this.refs=ld,this.updater=n||id}cr.prototype.isReactComponent={};cr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};cr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ad(){}ad.prototype=cr.prototype;function va(e,t,n){this.props=e,this.context=t,this.refs=ld,this.updater=n||id}var xa=va.prototype=new ad;xa.constructor=va;sd(xa,cr.prototype);xa.isPureReactComponent=!0;var Tu=Array.isArray,ud=Object.prototype.hasOwnProperty,wa={current:null},cd={key:!0,ref:!0,__self:!0,__source:!0};function fd(e,t,n){var r,o={},i=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(i=""+t.key),t)ud.call(t,r)&&!cd.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];o.children=a}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:mo,type:e,key:i,ref:s,props:o,_owner:wa.current}}function Bm(e,t){return{$$typeof:mo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Sa(e){return typeof e=="object"&&e!==null&&e.$$typeof===mo}function Hm(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Ou=/\/+/g;function ks(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Hm(""+e.key):t.toString(36)}function Yo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case mo:case $m:s=!0}}if(s)return s=e,o=o(s),e=r===""?"."+ks(s,0):r,Tu(o)?(n="",e!=null&&(n=e.replace(Ou,"$&/")+"/"),Yo(o,t,n,"",function(u){return u})):o!=null&&(Sa(o)&&(o=Bm(o,n+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(Ou,"$&/")+"/")+e)),t.push(o)),1;if(s=0,r=r===""?".":r+":",Tu(e))for(var l=0;l<e.length;l++){i=e[l];var a=r+ks(i,l);s+=Yo(i,t,n,a,o)}else if(a=Um(e),typeof a=="function")for(e=a.call(e),l=0;!(i=e.next()).done;)i=i.value,a=r+ks(i,l++),s+=Yo(i,t,n,a,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function _o(e,t,n){if(e==null)return e;var r=[],o=0;return Yo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function Wm(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Oe={current:null},Go={transition:null},Vm={ReactCurrentDispatcher:Oe,ReactCurrentBatchConfig:Go,ReactCurrentOwner:wa};function dd(){throw Error("act(...) is not supported in production builds of React.")}U.Children={map:_o,forEach:function(e,t,n){_o(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return _o(e,function(){t++}),t},toArray:function(e){return _o(e,function(t){return t})||[]},only:function(e){if(!Sa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};U.Component=cr;U.Fragment=Nm;U.Profiler=Am;U.PureComponent=va;U.StrictMode=Lm;U.Suspense=Dm;U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vm;U.act=dd;U.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=sd({},e.props),o=e.key,i=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,s=wa.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)ud.call(t,a)&&!cd.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&l!==void 0?l[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:mo,type:e.type,key:o,ref:i,props:r,_owner:s}};U.createContext=function(e){return e={$$typeof:Mm,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:zm,_context:e},e.Consumer=e};U.createElement=fd;U.createFactory=function(e){var t=fd.bind(null,e);return t.type=e,t};U.createRef=function(){return{current:null}};U.forwardRef=function(e){return{$$typeof:Im,render:e}};U.isValidElement=Sa;U.lazy=function(e){return{$$typeof:bm,_payload:{_status:-1,_result:e},_init:Wm}};U.memo=function(e,t){return{$$typeof:Fm,type:e,compare:t===void 0?null:t}};U.startTransition=function(e){var t=Go.transition;Go.transition={};try{e()}finally{Go.transition=t}};U.unstable_act=dd;U.useCallback=function(e,t){return Oe.current.useCallback(e,t)};U.useContext=function(e){return Oe.current.useContext(e)};U.useDebugValue=function(){};U.useDeferredValue=function(e){return Oe.current.useDeferredValue(e)};U.useEffect=function(e,t){return Oe.current.useEffect(e,t)};U.useId=function(){return Oe.current.useId()};U.useImperativeHandle=function(e,t,n){return Oe.current.useImperativeHandle(e,t,n)};U.useInsertionEffect=function(e,t){return Oe.current.useInsertionEffect(e,t)};U.useLayoutEffect=function(e,t){return Oe.current.useLayoutEffect(e,t)};U.useMemo=function(e,t){return Oe.current.useMemo(e,t)};U.useReducer=function(e,t,n){return Oe.current.useReducer(e,t,n)};U.useRef=function(e){return Oe.current.useRef(e)};U.useState=function(e){return Oe.current.useState(e)};U.useSyncExternalStore=function(e,t,n){return Oe.current.useSyncExternalStore(e,t,n)};U.useTransition=function(){return Oe.current.useTransition()};U.version="18.3.1";od.exports=U;var A=od.exports;const Z=ho(A);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qm=A,Km=Symbol.for("react.element"),qm=Symbol.for("react.fragment"),Ym=Object.prototype.hasOwnProperty,Gm=Qm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Xm={key:!0,ref:!0,__self:!0,__source:!0};function pd(e,t,n){var r,o={},i=null,s=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)Ym.call(t,r)&&!Xm.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:Km,type:e,key:i,ref:s,props:o,_owner:Gm.current}}Qi.Fragment=qm;Qi.jsx=pd;Qi.jsxs=pd;rd.exports=Qi;var f=rd.exports,hd={exports:{}},qe={},md={exports:{}},gd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,O){var L=T.length;T.push(O);e:for(;0<L;){var D=L-1>>>1,M=T[D];if(0<o(M,O))T[D]=O,T[L]=M,L=D;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var O=T[0],L=T.pop();if(L!==O){T[0]=L;e:for(var D=0,M=T.length,fe=M>>>1;D<fe;){var re=2*(D+1)-1,Ne=T[re],ae=re+1,de=T[ae];if(0>o(Ne,L))ae<M&&0>o(de,Ne)?(T[D]=de,T[ae]=L,D=ae):(T[D]=Ne,T[re]=L,D=re);else if(ae<M&&0>o(de,L))T[D]=de,T[ae]=L,D=ae;else break e}}return O}function o(T,O){var L=T.sortIndex-O.sortIndex;return L!==0?L:T.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var a=[],u=[],c=1,d=null,m=3,w=!1,y=!1,x=!1,C=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(T){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=T)r(u),O.sortIndex=O.expirationTime,t(a,O);else break;O=n(u)}}function S(T){if(x=!1,g(T),!y)if(n(a)!==null)y=!0,Ge(_);else{var O=n(u);O!==null&&ot(S,O.startTime-T)}}function _(T,O){y=!1,x&&(x=!1,h(P),P=-1),w=!0;var L=m;try{for(g(O),d=n(a);d!==null&&(!(d.expirationTime>O)||T&&!Q());){var D=d.callback;if(typeof D=="function"){d.callback=null,m=d.priorityLevel;var M=D(d.expirationTime<=O);O=e.unstable_now(),typeof M=="function"?d.callback=M:d===n(a)&&r(a),g(O)}else r(a);d=n(a)}if(d!==null)var fe=!0;else{var re=n(u);re!==null&&ot(S,re.startTime-O),fe=!1}return fe}finally{d=null,m=L,w=!1}}var k=!1,j=null,P=-1,b=5,z=-1;function Q(){return!(e.unstable_now()-z<b)}function we(){if(j!==null){var T=e.unstable_now();z=T;var O=!0;try{O=j(!0,T)}finally{O?Ue():(k=!1,j=null)}}else k=!1}var Ue;if(typeof p=="function")Ue=function(){p(we)};else if(typeof MessageChannel<"u"){var Se=new MessageChannel,gt=Se.port2;Se.port1.onmessage=we,Ue=function(){gt.postMessage(null)}}else Ue=function(){C(we,0)};function Ge(T){j=T,k||(k=!0,Ue())}function ot(T,O){P=C(function(){T(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){y||w||(y=!0,Ge(_))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return m},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(T){switch(m){case 1:case 2:case 3:var O=3;break;default:O=m}var L=m;m=O;try{return T()}finally{m=L}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,O){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var L=m;m=T;try{return O()}finally{m=L}},e.unstable_scheduleCallback=function(T,O,L){var D=e.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?D+L:D):L=D,T){case 1:var M=-1;break;case 2:M=250;break;case 5:M=1073741823;break;case 4:M=1e4;break;default:M=5e3}return M=L+M,T={id:c++,callback:O,priorityLevel:T,startTime:L,expirationTime:M,sortIndex:-1},L>D?(T.sortIndex=L,t(u,T),n(a)===null&&T===n(u)&&(x?(h(P),P=-1):x=!0,ot(S,L-D))):(T.sortIndex=M,t(a,T),y||w||(y=!0,Ge(_))),T},e.unstable_shouldYield=Q,e.unstable_wrapCallback=function(T){var O=m;return function(){var L=m;m=O;try{return T.apply(this,arguments)}finally{m=L}}}})(gd);md.exports=gd;var Jm=md.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zm=A,Ke=Jm;function R(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var yd=new Set,Kr={};function Rn(e,t){Xn(e,t),Xn(e+"Capture",t)}function Xn(e,t){for(Kr[e]=t,e=0;e<t.length;e++)yd.add(t[e])}var Ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),al=Object.prototype.hasOwnProperty,eg=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,$u={},Nu={};function tg(e){return al.call(Nu,e)?!0:al.call($u,e)?!1:eg.test(e)?Nu[e]=!0:($u[e]=!0,!1)}function ng(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function rg(e,t,n,r){if(t===null||typeof t>"u"||ng(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function $e(e,t,n,r,o,i,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=s}var xe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){xe[e]=new $e(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];xe[t]=new $e(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){xe[e]=new $e(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){xe[e]=new $e(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){xe[e]=new $e(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){xe[e]=new $e(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){xe[e]=new $e(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){xe[e]=new $e(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){xe[e]=new $e(e,5,!1,e.toLowerCase(),null,!1,!1)});var ka=/[\-:]([a-z])/g;function Ea(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ka,Ea);xe[t]=new $e(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ka,Ea);xe[t]=new $e(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ka,Ea);xe[t]=new $e(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){xe[e]=new $e(e,1,!1,e.toLowerCase(),null,!1,!1)});xe.xlinkHref=new $e("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){xe[e]=new $e(e,1,!1,e.toLowerCase(),null,!0,!0)});function Ca(e,t,n,r){var o=xe.hasOwnProperty(t)?xe[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(rg(t,n,o,r)&&(n=null),r||o===null?tg(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var At=Zm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ro=Symbol.for("react.element"),$n=Symbol.for("react.portal"),Nn=Symbol.for("react.fragment"),ja=Symbol.for("react.strict_mode"),ul=Symbol.for("react.profiler"),vd=Symbol.for("react.provider"),xd=Symbol.for("react.context"),_a=Symbol.for("react.forward_ref"),cl=Symbol.for("react.suspense"),fl=Symbol.for("react.suspense_list"),Ra=Symbol.for("react.memo"),bt=Symbol.for("react.lazy"),wd=Symbol.for("react.offscreen"),Lu=Symbol.iterator;function vr(e){return e===null||typeof e!="object"?null:(e=Lu&&e[Lu]||e["@@iterator"],typeof e=="function"?e:null)}var te=Object.assign,Es;function Nr(e){if(Es===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Es=t&&t[1]||""}return`
`+Es+e}var Cs=!1;function js(e,t){if(!e||Cs)return"";Cs=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),s=o.length-1,l=i.length-1;1<=s&&0<=l&&o[s]!==i[l];)l--;for(;1<=s&&0<=l;s--,l--)if(o[s]!==i[l]){if(s!==1||l!==1)do if(s--,l--,0>l||o[s]!==i[l]){var a=`
`+o[s].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=s&&0<=l);break}}}finally{Cs=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Nr(e):""}function og(e){switch(e.tag){case 5:return Nr(e.type);case 16:return Nr("Lazy");case 13:return Nr("Suspense");case 19:return Nr("SuspenseList");case 0:case 2:case 15:return e=js(e.type,!1),e;case 11:return e=js(e.type.render,!1),e;case 1:return e=js(e.type,!0),e;default:return""}}function dl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Nn:return"Fragment";case $n:return"Portal";case ul:return"Profiler";case ja:return"StrictMode";case cl:return"Suspense";case fl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case xd:return(e.displayName||"Context")+".Consumer";case vd:return(e._context.displayName||"Context")+".Provider";case _a:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ra:return t=e.displayName||null,t!==null?t:dl(e.type)||"Memo";case bt:t=e._payload,e=e._init;try{return dl(e(t))}catch{}}return null}function ig(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return dl(t);case 8:return t===ja?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function en(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Sd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function sg(e){var t=Sd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(s){r=""+s,i.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Po(e){e._valueTracker||(e._valueTracker=sg(e))}function kd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Sd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function mi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function pl(e,t){var n=t.checked;return te({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Au(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=en(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Ed(e,t){t=t.checked,t!=null&&Ca(e,"checked",t,!1)}function hl(e,t){Ed(e,t);var n=en(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ml(e,t.type,n):t.hasOwnProperty("defaultValue")&&ml(e,t.type,en(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function zu(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ml(e,t,n){(t!=="number"||mi(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Lr=Array.isArray;function Wn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+en(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function gl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(R(91));return te({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Mu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(R(92));if(Lr(n)){if(1<n.length)throw Error(R(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:en(n)}}function Cd(e,t){var n=en(t.value),r=en(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Iu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function jd(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?jd(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var To,_d=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(To=To||document.createElement("div"),To.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=To.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function qr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Ir={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},lg=["Webkit","ms","Moz","O"];Object.keys(Ir).forEach(function(e){lg.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ir[t]=Ir[e]})});function Rd(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Ir.hasOwnProperty(e)&&Ir[e]?(""+t).trim():t+"px"}function Pd(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=Rd(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var ag=te({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vl(e,t){if(t){if(ag[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(R(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(R(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(R(61))}if(t.style!=null&&typeof t.style!="object")throw Error(R(62))}}function xl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wl=null;function Pa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Sl=null,Vn=null,Qn=null;function Du(e){if(e=vo(e)){if(typeof Sl!="function")throw Error(R(280));var t=e.stateNode;t&&(t=Xi(t),Sl(e.stateNode,e.type,t))}}function Td(e){Vn?Qn?Qn.push(e):Qn=[e]:Vn=e}function Od(){if(Vn){var e=Vn,t=Qn;if(Qn=Vn=null,Du(e),t)for(e=0;e<t.length;e++)Du(t[e])}}function $d(e,t){return e(t)}function Nd(){}var _s=!1;function Ld(e,t,n){if(_s)return e(t,n);_s=!0;try{return $d(e,t,n)}finally{_s=!1,(Vn!==null||Qn!==null)&&(Nd(),Od())}}function Yr(e,t){var n=e.stateNode;if(n===null)return null;var r=Xi(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(R(231,t,typeof n));return n}var kl=!1;if(Ot)try{var xr={};Object.defineProperty(xr,"passive",{get:function(){kl=!0}}),window.addEventListener("test",xr,xr),window.removeEventListener("test",xr,xr)}catch{kl=!1}function ug(e,t,n,r,o,i,s,l,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Dr=!1,gi=null,yi=!1,El=null,cg={onError:function(e){Dr=!0,gi=e}};function fg(e,t,n,r,o,i,s,l,a){Dr=!1,gi=null,ug.apply(cg,arguments)}function dg(e,t,n,r,o,i,s,l,a){if(fg.apply(this,arguments),Dr){if(Dr){var u=gi;Dr=!1,gi=null}else throw Error(R(198));yi||(yi=!0,El=u)}}function Pn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Ad(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Fu(e){if(Pn(e)!==e)throw Error(R(188))}function pg(e){var t=e.alternate;if(!t){if(t=Pn(e),t===null)throw Error(R(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Fu(o),e;if(i===r)return Fu(o),t;i=i.sibling}throw Error(R(188))}if(n.return!==r.return)n=o,r=i;else{for(var s=!1,l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s){for(l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?e:t}function zd(e){return e=pg(e),e!==null?Md(e):null}function Md(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Md(e);if(t!==null)return t;e=e.sibling}return null}var Id=Ke.unstable_scheduleCallback,bu=Ke.unstable_cancelCallback,hg=Ke.unstable_shouldYield,mg=Ke.unstable_requestPaint,oe=Ke.unstable_now,gg=Ke.unstable_getCurrentPriorityLevel,Ta=Ke.unstable_ImmediatePriority,Dd=Ke.unstable_UserBlockingPriority,vi=Ke.unstable_NormalPriority,yg=Ke.unstable_LowPriority,Fd=Ke.unstable_IdlePriority,Ki=null,kt=null;function vg(e){if(kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(Ki,e,void 0,(e.current.flags&128)===128)}catch{}}var ft=Math.clz32?Math.clz32:Sg,xg=Math.log,wg=Math.LN2;function Sg(e){return e>>>=0,e===0?32:31-(xg(e)/wg|0)|0}var Oo=64,$o=4194304;function Ar(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function xi(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~o;l!==0?r=Ar(l):(i&=s,i!==0&&(r=Ar(i)))}else s=n&~o,s!==0?r=Ar(s):i!==0&&(r=Ar(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-ft(t),o=1<<n,r|=e[n],t&=~o;return r}function kg(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Eg(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var s=31-ft(i),l=1<<s,a=o[s];a===-1?(!(l&n)||l&r)&&(o[s]=kg(l,t)):a<=t&&(e.expiredLanes|=l),i&=~l}}function Cl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function bd(){var e=Oo;return Oo<<=1,!(Oo&4194240)&&(Oo=64),e}function Rs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function go(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ft(t),e[t]=n}function Cg(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-ft(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Oa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ft(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var V=0;function Ud(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Bd,$a,Hd,Wd,Vd,jl=!1,No=[],Qt=null,Kt=null,qt=null,Gr=new Map,Xr=new Map,Bt=[],jg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Uu(e,t){switch(e){case"focusin":case"focusout":Qt=null;break;case"dragenter":case"dragleave":Kt=null;break;case"mouseover":case"mouseout":qt=null;break;case"pointerover":case"pointerout":Gr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xr.delete(t.pointerId)}}function wr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=vo(t),t!==null&&$a(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function _g(e,t,n,r,o){switch(t){case"focusin":return Qt=wr(Qt,e,t,n,r,o),!0;case"dragenter":return Kt=wr(Kt,e,t,n,r,o),!0;case"mouseover":return qt=wr(qt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Gr.set(i,wr(Gr.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Xr.set(i,wr(Xr.get(i)||null,e,t,n,r,o)),!0}return!1}function Qd(e){var t=un(e.target);if(t!==null){var n=Pn(t);if(n!==null){if(t=n.tag,t===13){if(t=Ad(n),t!==null){e.blockedOn=t,Vd(e.priority,function(){Hd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Xo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=_l(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);wl=r,n.target.dispatchEvent(r),wl=null}else return t=vo(n),t!==null&&$a(t),e.blockedOn=n,!1;t.shift()}return!0}function Bu(e,t,n){Xo(e)&&n.delete(t)}function Rg(){jl=!1,Qt!==null&&Xo(Qt)&&(Qt=null),Kt!==null&&Xo(Kt)&&(Kt=null),qt!==null&&Xo(qt)&&(qt=null),Gr.forEach(Bu),Xr.forEach(Bu)}function Sr(e,t){e.blockedOn===t&&(e.blockedOn=null,jl||(jl=!0,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,Rg)))}function Jr(e){function t(o){return Sr(o,e)}if(0<No.length){Sr(No[0],e);for(var n=1;n<No.length;n++){var r=No[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Qt!==null&&Sr(Qt,e),Kt!==null&&Sr(Kt,e),qt!==null&&Sr(qt,e),Gr.forEach(t),Xr.forEach(t),n=0;n<Bt.length;n++)r=Bt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Bt.length&&(n=Bt[0],n.blockedOn===null);)Qd(n),n.blockedOn===null&&Bt.shift()}var Kn=At.ReactCurrentBatchConfig,wi=!0;function Pg(e,t,n,r){var o=V,i=Kn.transition;Kn.transition=null;try{V=1,Na(e,t,n,r)}finally{V=o,Kn.transition=i}}function Tg(e,t,n,r){var o=V,i=Kn.transition;Kn.transition=null;try{V=4,Na(e,t,n,r)}finally{V=o,Kn.transition=i}}function Na(e,t,n,r){if(wi){var o=_l(e,t,n,r);if(o===null)Is(e,t,r,Si,n),Uu(e,r);else if(_g(o,e,t,n,r))r.stopPropagation();else if(Uu(e,r),t&4&&-1<jg.indexOf(e)){for(;o!==null;){var i=vo(o);if(i!==null&&Bd(i),i=_l(e,t,n,r),i===null&&Is(e,t,r,Si,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Is(e,t,r,null,n)}}var Si=null;function _l(e,t,n,r){if(Si=null,e=Pa(r),e=un(e),e!==null)if(t=Pn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Ad(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Si=e,null}function Kd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(gg()){case Ta:return 1;case Dd:return 4;case vi:case yg:return 16;case Fd:return 536870912;default:return 16}default:return 16}}var Wt=null,La=null,Jo=null;function qd(){if(Jo)return Jo;var e,t=La,n=t.length,r,o="value"in Wt?Wt.value:Wt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===o[i-r];r++);return Jo=o.slice(e,1<r?1-r:void 0)}function Zo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Lo(){return!0}function Hu(){return!1}function Ye(e){function t(n,r,o,i,s){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Lo:Hu,this.isPropagationStopped=Hu,this}return te(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Lo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Lo)},persist:function(){},isPersistent:Lo}),t}var fr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Aa=Ye(fr),yo=te({},fr,{view:0,detail:0}),Og=Ye(yo),Ps,Ts,kr,qi=te({},yo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:za,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==kr&&(kr&&e.type==="mousemove"?(Ps=e.screenX-kr.screenX,Ts=e.screenY-kr.screenY):Ts=Ps=0,kr=e),Ps)},movementY:function(e){return"movementY"in e?e.movementY:Ts}}),Wu=Ye(qi),$g=te({},qi,{dataTransfer:0}),Ng=Ye($g),Lg=te({},yo,{relatedTarget:0}),Os=Ye(Lg),Ag=te({},fr,{animationName:0,elapsedTime:0,pseudoElement:0}),zg=Ye(Ag),Mg=te({},fr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ig=Ye(Mg),Dg=te({},fr,{data:0}),Vu=Ye(Dg),Fg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},bg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ug={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Bg(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ug[e])?!!t[e]:!1}function za(){return Bg}var Hg=te({},yo,{key:function(e){if(e.key){var t=Fg[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Zo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?bg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:za,charCode:function(e){return e.type==="keypress"?Zo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Wg=Ye(Hg),Vg=te({},qi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qu=Ye(Vg),Qg=te({},yo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:za}),Kg=Ye(Qg),qg=te({},fr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Yg=Ye(qg),Gg=te({},qi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Xg=Ye(Gg),Jg=[9,13,27,32],Ma=Ot&&"CompositionEvent"in window,Fr=null;Ot&&"documentMode"in document&&(Fr=document.documentMode);var Zg=Ot&&"TextEvent"in window&&!Fr,Yd=Ot&&(!Ma||Fr&&8<Fr&&11>=Fr),Ku=" ",qu=!1;function Gd(e,t){switch(e){case"keyup":return Jg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ln=!1;function e0(e,t){switch(e){case"compositionend":return Xd(t);case"keypress":return t.which!==32?null:(qu=!0,Ku);case"textInput":return e=t.data,e===Ku&&qu?null:e;default:return null}}function t0(e,t){if(Ln)return e==="compositionend"||!Ma&&Gd(e,t)?(e=qd(),Jo=La=Wt=null,Ln=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Yd&&t.locale!=="ko"?null:t.data;default:return null}}var n0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!n0[e.type]:t==="textarea"}function Jd(e,t,n,r){Td(r),t=ki(t,"onChange"),0<t.length&&(n=new Aa("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var br=null,Zr=null;function r0(e){up(e,0)}function Yi(e){var t=Mn(e);if(kd(t))return e}function o0(e,t){if(e==="change")return t}var Zd=!1;if(Ot){var $s;if(Ot){var Ns="oninput"in document;if(!Ns){var Gu=document.createElement("div");Gu.setAttribute("oninput","return;"),Ns=typeof Gu.oninput=="function"}$s=Ns}else $s=!1;Zd=$s&&(!document.documentMode||9<document.documentMode)}function Xu(){br&&(br.detachEvent("onpropertychange",ep),Zr=br=null)}function ep(e){if(e.propertyName==="value"&&Yi(Zr)){var t=[];Jd(t,Zr,e,Pa(e)),Ld(r0,t)}}function i0(e,t,n){e==="focusin"?(Xu(),br=t,Zr=n,br.attachEvent("onpropertychange",ep)):e==="focusout"&&Xu()}function s0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Yi(Zr)}function l0(e,t){if(e==="click")return Yi(t)}function a0(e,t){if(e==="input"||e==="change")return Yi(t)}function u0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var ht=typeof Object.is=="function"?Object.is:u0;function eo(e,t){if(ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!al.call(t,o)||!ht(e[o],t[o]))return!1}return!0}function Ju(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Zu(e,t){var n=Ju(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Ju(n)}}function tp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?tp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function np(){for(var e=window,t=mi();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=mi(e.document)}return t}function Ia(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function c0(e){var t=np(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&tp(n.ownerDocument.documentElement,n)){if(r!==null&&Ia(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Zu(n,i);var s=Zu(n,r);o&&s&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var f0=Ot&&"documentMode"in document&&11>=document.documentMode,An=null,Rl=null,Ur=null,Pl=!1;function ec(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pl||An==null||An!==mi(r)||(r=An,"selectionStart"in r&&Ia(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ur&&eo(Ur,r)||(Ur=r,r=ki(Rl,"onSelect"),0<r.length&&(t=new Aa("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=An)))}function Ao(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var zn={animationend:Ao("Animation","AnimationEnd"),animationiteration:Ao("Animation","AnimationIteration"),animationstart:Ao("Animation","AnimationStart"),transitionend:Ao("Transition","TransitionEnd")},Ls={},rp={};Ot&&(rp=document.createElement("div").style,"AnimationEvent"in window||(delete zn.animationend.animation,delete zn.animationiteration.animation,delete zn.animationstart.animation),"TransitionEvent"in window||delete zn.transitionend.transition);function Gi(e){if(Ls[e])return Ls[e];if(!zn[e])return e;var t=zn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in rp)return Ls[e]=t[n];return e}var op=Gi("animationend"),ip=Gi("animationiteration"),sp=Gi("animationstart"),lp=Gi("transitionend"),ap=new Map,tc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nn(e,t){ap.set(e,t),Rn(t,[e])}for(var As=0;As<tc.length;As++){var zs=tc[As],d0=zs.toLowerCase(),p0=zs[0].toUpperCase()+zs.slice(1);nn(d0,"on"+p0)}nn(op,"onAnimationEnd");nn(ip,"onAnimationIteration");nn(sp,"onAnimationStart");nn("dblclick","onDoubleClick");nn("focusin","onFocus");nn("focusout","onBlur");nn(lp,"onTransitionEnd");Xn("onMouseEnter",["mouseout","mouseover"]);Xn("onMouseLeave",["mouseout","mouseover"]);Xn("onPointerEnter",["pointerout","pointerover"]);Xn("onPointerLeave",["pointerout","pointerover"]);Rn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Rn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Rn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Rn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Rn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Rn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var zr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),h0=new Set("cancel close invalid load scroll toggle".split(" ").concat(zr));function nc(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,dg(r,t,void 0,e),e.currentTarget=null}function up(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==i&&o.isPropagationStopped())break e;nc(o,l,u),i=a}else for(s=0;s<r.length;s++){if(l=r[s],a=l.instance,u=l.currentTarget,l=l.listener,a!==i&&o.isPropagationStopped())break e;nc(o,l,u),i=a}}}if(yi)throw e=El,yi=!1,El=null,e}function q(e,t){var n=t[Ll];n===void 0&&(n=t[Ll]=new Set);var r=e+"__bubble";n.has(r)||(cp(t,e,2,!1),n.add(r))}function Ms(e,t,n){var r=0;t&&(r|=4),cp(n,e,r,t)}var zo="_reactListening"+Math.random().toString(36).slice(2);function to(e){if(!e[zo]){e[zo]=!0,yd.forEach(function(n){n!=="selectionchange"&&(h0.has(n)||Ms(n,!1,e),Ms(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[zo]||(t[zo]=!0,Ms("selectionchange",!1,t))}}function cp(e,t,n,r){switch(Kd(t)){case 1:var o=Pg;break;case 4:o=Tg;break;default:o=Na}n=o.bind(null,t,n,e),o=void 0,!kl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Is(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(s===4)for(s=r.return;s!==null;){var a=s.tag;if((a===3||a===4)&&(a=s.stateNode.containerInfo,a===o||a.nodeType===8&&a.parentNode===o))return;s=s.return}for(;l!==null;){if(s=un(l),s===null)return;if(a=s.tag,a===5||a===6){r=i=s;continue e}l=l.parentNode}}r=r.return}Ld(function(){var u=i,c=Pa(n),d=[];e:{var m=ap.get(e);if(m!==void 0){var w=Aa,y=e;switch(e){case"keypress":if(Zo(n)===0)break e;case"keydown":case"keyup":w=Wg;break;case"focusin":y="focus",w=Os;break;case"focusout":y="blur",w=Os;break;case"beforeblur":case"afterblur":w=Os;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=Wu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=Ng;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Kg;break;case op:case ip:case sp:w=zg;break;case lp:w=Yg;break;case"scroll":w=Og;break;case"wheel":w=Xg;break;case"copy":case"cut":case"paste":w=Ig;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=Qu}var x=(t&4)!==0,C=!x&&e==="scroll",h=x?m!==null?m+"Capture":null:m;x=[];for(var p=u,g;p!==null;){g=p;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,h!==null&&(S=Yr(p,h),S!=null&&x.push(no(p,S,g)))),C)break;p=p.return}0<x.length&&(m=new w(m,y,null,n,c),d.push({event:m,listeners:x}))}}if(!(t&7)){e:{if(m=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",m&&n!==wl&&(y=n.relatedTarget||n.fromElement)&&(un(y)||y[$t]))break e;if((w||m)&&(m=c.window===c?c:(m=c.ownerDocument)?m.defaultView||m.parentWindow:window,w?(y=n.relatedTarget||n.toElement,w=u,y=y?un(y):null,y!==null&&(C=Pn(y),y!==C||y.tag!==5&&y.tag!==6)&&(y=null)):(w=null,y=u),w!==y)){if(x=Wu,S="onMouseLeave",h="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(x=Qu,S="onPointerLeave",h="onPointerEnter",p="pointer"),C=w==null?m:Mn(w),g=y==null?m:Mn(y),m=new x(S,p+"leave",w,n,c),m.target=C,m.relatedTarget=g,S=null,un(c)===u&&(x=new x(h,p+"enter",y,n,c),x.target=g,x.relatedTarget=C,S=x),C=S,w&&y)t:{for(x=w,h=y,p=0,g=x;g;g=Tn(g))p++;for(g=0,S=h;S;S=Tn(S))g++;for(;0<p-g;)x=Tn(x),p--;for(;0<g-p;)h=Tn(h),g--;for(;p--;){if(x===h||h!==null&&x===h.alternate)break t;x=Tn(x),h=Tn(h)}x=null}else x=null;w!==null&&rc(d,m,w,x,!1),y!==null&&C!==null&&rc(d,C,y,x,!0)}}e:{if(m=u?Mn(u):window,w=m.nodeName&&m.nodeName.toLowerCase(),w==="select"||w==="input"&&m.type==="file")var _=o0;else if(Yu(m))if(Zd)_=a0;else{_=s0;var k=i0}else(w=m.nodeName)&&w.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(_=l0);if(_&&(_=_(e,u))){Jd(d,_,n,c);break e}k&&k(e,m,u),e==="focusout"&&(k=m._wrapperState)&&k.controlled&&m.type==="number"&&ml(m,"number",m.value)}switch(k=u?Mn(u):window,e){case"focusin":(Yu(k)||k.contentEditable==="true")&&(An=k,Rl=u,Ur=null);break;case"focusout":Ur=Rl=An=null;break;case"mousedown":Pl=!0;break;case"contextmenu":case"mouseup":case"dragend":Pl=!1,ec(d,n,c);break;case"selectionchange":if(f0)break;case"keydown":case"keyup":ec(d,n,c)}var j;if(Ma)e:{switch(e){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Ln?Gd(e,n)&&(P="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(P="onCompositionStart");P&&(Yd&&n.locale!=="ko"&&(Ln||P!=="onCompositionStart"?P==="onCompositionEnd"&&Ln&&(j=qd()):(Wt=c,La="value"in Wt?Wt.value:Wt.textContent,Ln=!0)),k=ki(u,P),0<k.length&&(P=new Vu(P,e,null,n,c),d.push({event:P,listeners:k}),j?P.data=j:(j=Xd(n),j!==null&&(P.data=j)))),(j=Zg?e0(e,n):t0(e,n))&&(u=ki(u,"onBeforeInput"),0<u.length&&(c=new Vu("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=j))}up(d,t)})}function no(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ki(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Yr(e,n),i!=null&&r.unshift(no(e,i,o)),i=Yr(e,t),i!=null&&r.push(no(e,i,o))),e=e.return}return r}function Tn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function rc(e,t,n,r,o){for(var i=t._reactName,s=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,o?(a=Yr(n,i),a!=null&&s.unshift(no(n,a,l))):o||(a=Yr(n,i),a!=null&&s.push(no(n,a,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var m0=/\r\n?/g,g0=/\u0000|\uFFFD/g;function oc(e){return(typeof e=="string"?e:""+e).replace(m0,`
`).replace(g0,"")}function Mo(e,t,n){if(t=oc(t),oc(e)!==t&&n)throw Error(R(425))}function Ei(){}var Tl=null,Ol=null;function $l(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Nl=typeof setTimeout=="function"?setTimeout:void 0,y0=typeof clearTimeout=="function"?clearTimeout:void 0,ic=typeof Promise=="function"?Promise:void 0,v0=typeof queueMicrotask=="function"?queueMicrotask:typeof ic<"u"?function(e){return ic.resolve(null).then(e).catch(x0)}:Nl;function x0(e){setTimeout(function(){throw e})}function Ds(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Jr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Jr(t)}function Yt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function sc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var dr=Math.random().toString(36).slice(2),wt="__reactFiber$"+dr,ro="__reactProps$"+dr,$t="__reactContainer$"+dr,Ll="__reactEvents$"+dr,w0="__reactListeners$"+dr,S0="__reactHandles$"+dr;function un(e){var t=e[wt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[$t]||n[wt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=sc(e);e!==null;){if(n=e[wt])return n;e=sc(e)}return t}e=n,n=e.parentNode}return null}function vo(e){return e=e[wt]||e[$t],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Mn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(R(33))}function Xi(e){return e[ro]||null}var Al=[],In=-1;function rn(e){return{current:e}}function G(e){0>In||(e.current=Al[In],Al[In]=null,In--)}function K(e,t){In++,Al[In]=e.current,e.current=t}var tn={},je=rn(tn),Me=rn(!1),Sn=tn;function Jn(e,t){var n=e.type.contextTypes;if(!n)return tn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ie(e){return e=e.childContextTypes,e!=null}function Ci(){G(Me),G(je)}function lc(e,t,n){if(je.current!==tn)throw Error(R(168));K(je,t),K(Me,n)}function fp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(R(108,ig(e)||"Unknown",o));return te({},n,r)}function ji(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||tn,Sn=je.current,K(je,e),K(Me,Me.current),!0}function ac(e,t,n){var r=e.stateNode;if(!r)throw Error(R(169));n?(e=fp(e,t,Sn),r.__reactInternalMemoizedMergedChildContext=e,G(Me),G(je),K(je,e)):G(Me),K(Me,n)}var _t=null,Ji=!1,Fs=!1;function dp(e){_t===null?_t=[e]:_t.push(e)}function k0(e){Ji=!0,dp(e)}function on(){if(!Fs&&_t!==null){Fs=!0;var e=0,t=V;try{var n=_t;for(V=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}_t=null,Ji=!1}catch(o){throw _t!==null&&(_t=_t.slice(e+1)),Id(Ta,on),o}finally{V=t,Fs=!1}}return null}var Dn=[],Fn=0,_i=null,Ri=0,Xe=[],Je=0,kn=null,Rt=1,Pt="";function ln(e,t){Dn[Fn++]=Ri,Dn[Fn++]=_i,_i=e,Ri=t}function pp(e,t,n){Xe[Je++]=Rt,Xe[Je++]=Pt,Xe[Je++]=kn,kn=e;var r=Rt;e=Pt;var o=32-ft(r)-1;r&=~(1<<o),n+=1;var i=32-ft(t)+o;if(30<i){var s=o-o%5;i=(r&(1<<s)-1).toString(32),r>>=s,o-=s,Rt=1<<32-ft(t)+o|n<<o|r,Pt=i+e}else Rt=1<<i|n<<o|r,Pt=e}function Da(e){e.return!==null&&(ln(e,1),pp(e,1,0))}function Fa(e){for(;e===_i;)_i=Dn[--Fn],Dn[Fn]=null,Ri=Dn[--Fn],Dn[Fn]=null;for(;e===kn;)kn=Xe[--Je],Xe[Je]=null,Pt=Xe[--Je],Xe[Je]=null,Rt=Xe[--Je],Xe[Je]=null}var Ve=null,We=null,X=!1,ct=null;function hp(e,t){var n=Ze(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function uc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ve=e,We=Yt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ve=e,We=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=kn!==null?{id:Rt,overflow:Pt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Ze(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ve=e,We=null,!0):!1;default:return!1}}function zl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ml(e){if(X){var t=We;if(t){var n=t;if(!uc(e,t)){if(zl(e))throw Error(R(418));t=Yt(n.nextSibling);var r=Ve;t&&uc(e,t)?hp(r,n):(e.flags=e.flags&-4097|2,X=!1,Ve=e)}}else{if(zl(e))throw Error(R(418));e.flags=e.flags&-4097|2,X=!1,Ve=e}}}function cc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ve=e}function Io(e){if(e!==Ve)return!1;if(!X)return cc(e),X=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!$l(e.type,e.memoizedProps)),t&&(t=We)){if(zl(e))throw mp(),Error(R(418));for(;t;)hp(e,t),t=Yt(t.nextSibling)}if(cc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(R(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){We=Yt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}We=null}}else We=Ve?Yt(e.stateNode.nextSibling):null;return!0}function mp(){for(var e=We;e;)e=Yt(e.nextSibling)}function Zn(){We=Ve=null,X=!1}function ba(e){ct===null?ct=[e]:ct.push(e)}var E0=At.ReactCurrentBatchConfig;function Er(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(s){var l=o.refs;s===null?delete l[i]:l[i]=s},t._stringRef=i,t)}if(typeof e!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,e))}return e}function Do(e,t){throw e=Object.prototype.toString.call(t),Error(R(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function fc(e){var t=e._init;return t(e._payload)}function gp(e){function t(h,p){if(e){var g=h.deletions;g===null?(h.deletions=[p],h.flags|=16):g.push(p)}}function n(h,p){if(!e)return null;for(;p!==null;)t(h,p),p=p.sibling;return null}function r(h,p){for(h=new Map;p!==null;)p.key!==null?h.set(p.key,p):h.set(p.index,p),p=p.sibling;return h}function o(h,p){return h=Zt(h,p),h.index=0,h.sibling=null,h}function i(h,p,g){return h.index=g,e?(g=h.alternate,g!==null?(g=g.index,g<p?(h.flags|=2,p):g):(h.flags|=2,p)):(h.flags|=1048576,p)}function s(h){return e&&h.alternate===null&&(h.flags|=2),h}function l(h,p,g,S){return p===null||p.tag!==6?(p=Qs(g,h.mode,S),p.return=h,p):(p=o(p,g),p.return=h,p)}function a(h,p,g,S){var _=g.type;return _===Nn?c(h,p,g.props.children,S,g.key):p!==null&&(p.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===bt&&fc(_)===p.type)?(S=o(p,g.props),S.ref=Er(h,p,g),S.return=h,S):(S=si(g.type,g.key,g.props,null,h.mode,S),S.ref=Er(h,p,g),S.return=h,S)}function u(h,p,g,S){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=Ks(g,h.mode,S),p.return=h,p):(p=o(p,g.children||[]),p.return=h,p)}function c(h,p,g,S,_){return p===null||p.tag!==7?(p=gn(g,h.mode,S,_),p.return=h,p):(p=o(p,g),p.return=h,p)}function d(h,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=Qs(""+p,h.mode,g),p.return=h,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ro:return g=si(p.type,p.key,p.props,null,h.mode,g),g.ref=Er(h,null,p),g.return=h,g;case $n:return p=Ks(p,h.mode,g),p.return=h,p;case bt:var S=p._init;return d(h,S(p._payload),g)}if(Lr(p)||vr(p))return p=gn(p,h.mode,g,null),p.return=h,p;Do(h,p)}return null}function m(h,p,g,S){var _=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return _!==null?null:l(h,p,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ro:return g.key===_?a(h,p,g,S):null;case $n:return g.key===_?u(h,p,g,S):null;case bt:return _=g._init,m(h,p,_(g._payload),S)}if(Lr(g)||vr(g))return _!==null?null:c(h,p,g,S,null);Do(h,g)}return null}function w(h,p,g,S,_){if(typeof S=="string"&&S!==""||typeof S=="number")return h=h.get(g)||null,l(p,h,""+S,_);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ro:return h=h.get(S.key===null?g:S.key)||null,a(p,h,S,_);case $n:return h=h.get(S.key===null?g:S.key)||null,u(p,h,S,_);case bt:var k=S._init;return w(h,p,g,k(S._payload),_)}if(Lr(S)||vr(S))return h=h.get(g)||null,c(p,h,S,_,null);Do(p,S)}return null}function y(h,p,g,S){for(var _=null,k=null,j=p,P=p=0,b=null;j!==null&&P<g.length;P++){j.index>P?(b=j,j=null):b=j.sibling;var z=m(h,j,g[P],S);if(z===null){j===null&&(j=b);break}e&&j&&z.alternate===null&&t(h,j),p=i(z,p,P),k===null?_=z:k.sibling=z,k=z,j=b}if(P===g.length)return n(h,j),X&&ln(h,P),_;if(j===null){for(;P<g.length;P++)j=d(h,g[P],S),j!==null&&(p=i(j,p,P),k===null?_=j:k.sibling=j,k=j);return X&&ln(h,P),_}for(j=r(h,j);P<g.length;P++)b=w(j,h,P,g[P],S),b!==null&&(e&&b.alternate!==null&&j.delete(b.key===null?P:b.key),p=i(b,p,P),k===null?_=b:k.sibling=b,k=b);return e&&j.forEach(function(Q){return t(h,Q)}),X&&ln(h,P),_}function x(h,p,g,S){var _=vr(g);if(typeof _!="function")throw Error(R(150));if(g=_.call(g),g==null)throw Error(R(151));for(var k=_=null,j=p,P=p=0,b=null,z=g.next();j!==null&&!z.done;P++,z=g.next()){j.index>P?(b=j,j=null):b=j.sibling;var Q=m(h,j,z.value,S);if(Q===null){j===null&&(j=b);break}e&&j&&Q.alternate===null&&t(h,j),p=i(Q,p,P),k===null?_=Q:k.sibling=Q,k=Q,j=b}if(z.done)return n(h,j),X&&ln(h,P),_;if(j===null){for(;!z.done;P++,z=g.next())z=d(h,z.value,S),z!==null&&(p=i(z,p,P),k===null?_=z:k.sibling=z,k=z);return X&&ln(h,P),_}for(j=r(h,j);!z.done;P++,z=g.next())z=w(j,h,P,z.value,S),z!==null&&(e&&z.alternate!==null&&j.delete(z.key===null?P:z.key),p=i(z,p,P),k===null?_=z:k.sibling=z,k=z);return e&&j.forEach(function(we){return t(h,we)}),X&&ln(h,P),_}function C(h,p,g,S){if(typeof g=="object"&&g!==null&&g.type===Nn&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ro:e:{for(var _=g.key,k=p;k!==null;){if(k.key===_){if(_=g.type,_===Nn){if(k.tag===7){n(h,k.sibling),p=o(k,g.props.children),p.return=h,h=p;break e}}else if(k.elementType===_||typeof _=="object"&&_!==null&&_.$$typeof===bt&&fc(_)===k.type){n(h,k.sibling),p=o(k,g.props),p.ref=Er(h,k,g),p.return=h,h=p;break e}n(h,k);break}else t(h,k);k=k.sibling}g.type===Nn?(p=gn(g.props.children,h.mode,S,g.key),p.return=h,h=p):(S=si(g.type,g.key,g.props,null,h.mode,S),S.ref=Er(h,p,g),S.return=h,h=S)}return s(h);case $n:e:{for(k=g.key;p!==null;){if(p.key===k)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(h,p.sibling),p=o(p,g.children||[]),p.return=h,h=p;break e}else{n(h,p);break}else t(h,p);p=p.sibling}p=Ks(g,h.mode,S),p.return=h,h=p}return s(h);case bt:return k=g._init,C(h,p,k(g._payload),S)}if(Lr(g))return y(h,p,g,S);if(vr(g))return x(h,p,g,S);Do(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(h,p.sibling),p=o(p,g),p.return=h,h=p):(n(h,p),p=Qs(g,h.mode,S),p.return=h,h=p),s(h)):n(h,p)}return C}var er=gp(!0),yp=gp(!1),Pi=rn(null),Ti=null,bn=null,Ua=null;function Ba(){Ua=bn=Ti=null}function Ha(e){var t=Pi.current;G(Pi),e._currentValue=t}function Il(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function qn(e,t){Ti=e,Ua=bn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Ae=!0),e.firstContext=null)}function tt(e){var t=e._currentValue;if(Ua!==e)if(e={context:e,memoizedValue:t,next:null},bn===null){if(Ti===null)throw Error(R(308));bn=e,Ti.dependencies={lanes:0,firstContext:e}}else bn=bn.next=e;return t}var cn=null;function Wa(e){cn===null?cn=[e]:cn.push(e)}function vp(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Wa(t)):(n.next=o.next,o.next=n),t.interleaved=n,Nt(e,r)}function Nt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ut=!1;function Va(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Tt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Gt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,H&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Nt(e,n)}return o=r.interleaved,o===null?(t.next=t,Wa(r)):(t.next=o.next,o.next=t),r.interleaved=t,Nt(e,n)}function ei(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Oa(e,n)}}function dc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=s:i=i.next=s,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Oi(e,t,n,r){var o=e.updateQueue;Ut=!1;var i=o.firstBaseUpdate,s=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var a=l,u=a.next;a.next=null,s===null?i=u:s.next=u,s=a;var c=e.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==s&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=a))}if(i!==null){var d=o.baseState;s=0,c=u=a=null,l=i;do{var m=l.lane,w=l.eventTime;if((r&m)===m){c!==null&&(c=c.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,x=l;switch(m=t,w=n,x.tag){case 1:if(y=x.payload,typeof y=="function"){d=y.call(w,d,m);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,m=typeof y=="function"?y.call(w,d,m):y,m==null)break e;d=te({},d,m);break e;case 2:Ut=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,m=o.effects,m===null?o.effects=[l]:m.push(l))}else w={eventTime:w,lane:m,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=w,a=d):c=c.next=w,s|=m;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;m=l,l=m.next,m.next=null,o.lastBaseUpdate=m,o.shared.pending=null}}while(!0);if(c===null&&(a=d),o.baseState=a,o.firstBaseUpdate=u,o.lastBaseUpdate=c,t=o.shared.interleaved,t!==null){o=t;do s|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Cn|=s,e.lanes=s,e.memoizedState=d}}function pc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(R(191,o));o.call(r)}}}var xo={},Et=rn(xo),oo=rn(xo),io=rn(xo);function fn(e){if(e===xo)throw Error(R(174));return e}function Qa(e,t){switch(K(io,t),K(oo,e),K(Et,xo),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:yl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=yl(t,e)}G(Et),K(Et,t)}function tr(){G(Et),G(oo),G(io)}function wp(e){fn(io.current);var t=fn(Et.current),n=yl(t,e.type);t!==n&&(K(oo,e),K(Et,n))}function Ka(e){oo.current===e&&(G(Et),G(oo))}var J=rn(0);function $i(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var bs=[];function qa(){for(var e=0;e<bs.length;e++)bs[e]._workInProgressVersionPrimary=null;bs.length=0}var ti=At.ReactCurrentDispatcher,Us=At.ReactCurrentBatchConfig,En=0,ee=null,ue=null,pe=null,Ni=!1,Br=!1,so=0,C0=0;function ke(){throw Error(R(321))}function Ya(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!ht(e[n],t[n]))return!1;return!0}function Ga(e,t,n,r,o,i){if(En=i,ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ti.current=e===null||e.memoizedState===null?P0:T0,e=n(r,o),Br){i=0;do{if(Br=!1,so=0,25<=i)throw Error(R(301));i+=1,pe=ue=null,t.updateQueue=null,ti.current=O0,e=n(r,o)}while(Br)}if(ti.current=Li,t=ue!==null&&ue.next!==null,En=0,pe=ue=ee=null,Ni=!1,t)throw Error(R(300));return e}function Xa(){var e=so!==0;return so=0,e}function vt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pe===null?ee.memoizedState=pe=e:pe=pe.next=e,pe}function nt(){if(ue===null){var e=ee.alternate;e=e!==null?e.memoizedState:null}else e=ue.next;var t=pe===null?ee.memoizedState:pe.next;if(t!==null)pe=t,ue=e;else{if(e===null)throw Error(R(310));ue=e,e={memoizedState:ue.memoizedState,baseState:ue.baseState,baseQueue:ue.baseQueue,queue:ue.queue,next:null},pe===null?ee.memoizedState=pe=e:pe=pe.next=e}return pe}function lo(e,t){return typeof t=="function"?t(e):t}function Bs(e){var t=nt(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=ue,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var s=o.next;o.next=i.next,i.next=s}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var l=s=null,a=null,u=i;do{var c=u.lane;if((En&c)===c)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=d,s=r):a=a.next=d,ee.lanes|=c,Cn|=c}u=u.next}while(u!==null&&u!==i);a===null?s=r:a.next=l,ht(r,t.memoizedState)||(Ae=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ee.lanes|=i,Cn|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Hs(e){var t=nt(),n=t.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var s=o=o.next;do i=e(i,s.action),s=s.next;while(s!==o);ht(i,t.memoizedState)||(Ae=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Sp(){}function kp(e,t){var n=ee,r=nt(),o=t(),i=!ht(r.memoizedState,o);if(i&&(r.memoizedState=o,Ae=!0),r=r.queue,Ja(jp.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||pe!==null&&pe.memoizedState.tag&1){if(n.flags|=2048,ao(9,Cp.bind(null,n,r,o,t),void 0,null),me===null)throw Error(R(349));En&30||Ep(n,t,o)}return o}function Ep(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ee.updateQueue,t===null?(t={lastEffect:null,stores:null},ee.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Cp(e,t,n,r){t.value=n,t.getSnapshot=r,_p(t)&&Rp(e)}function jp(e,t,n){return n(function(){_p(t)&&Rp(e)})}function _p(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!ht(e,n)}catch{return!0}}function Rp(e){var t=Nt(e,1);t!==null&&dt(t,e,1,-1)}function hc(e){var t=vt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:lo,lastRenderedState:e},t.queue=e,e=e.dispatch=R0.bind(null,ee,e),[t.memoizedState,e]}function ao(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ee.updateQueue,t===null?(t={lastEffect:null,stores:null},ee.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function Pp(){return nt().memoizedState}function ni(e,t,n,r){var o=vt();ee.flags|=e,o.memoizedState=ao(1|t,n,void 0,r===void 0?null:r)}function Zi(e,t,n,r){var o=nt();r=r===void 0?null:r;var i=void 0;if(ue!==null){var s=ue.memoizedState;if(i=s.destroy,r!==null&&Ya(r,s.deps)){o.memoizedState=ao(t,n,i,r);return}}ee.flags|=e,o.memoizedState=ao(1|t,n,i,r)}function mc(e,t){return ni(8390656,8,e,t)}function Ja(e,t){return Zi(2048,8,e,t)}function Tp(e,t){return Zi(4,2,e,t)}function Op(e,t){return Zi(4,4,e,t)}function $p(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Np(e,t,n){return n=n!=null?n.concat([e]):null,Zi(4,4,$p.bind(null,t,e),n)}function Za(){}function Lp(e,t){var n=nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ya(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ap(e,t){var n=nt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ya(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function zp(e,t,n){return En&21?(ht(n,t)||(n=bd(),ee.lanes|=n,Cn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ae=!0),e.memoizedState=n)}function j0(e,t){var n=V;V=n!==0&&4>n?n:4,e(!0);var r=Us.transition;Us.transition={};try{e(!1),t()}finally{V=n,Us.transition=r}}function Mp(){return nt().memoizedState}function _0(e,t,n){var r=Jt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Ip(e))Dp(t,n);else if(n=vp(e,t,n,r),n!==null){var o=Te();dt(n,e,r,o),Fp(n,t,r)}}function R0(e,t,n){var r=Jt(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ip(e))Dp(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var s=t.lastRenderedState,l=i(s,n);if(o.hasEagerState=!0,o.eagerState=l,ht(l,s)){var a=t.interleaved;a===null?(o.next=o,Wa(t)):(o.next=a.next,a.next=o),t.interleaved=o;return}}catch{}finally{}n=vp(e,t,o,r),n!==null&&(o=Te(),dt(n,e,r,o),Fp(n,t,r))}}function Ip(e){var t=e.alternate;return e===ee||t!==null&&t===ee}function Dp(e,t){Br=Ni=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Fp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Oa(e,n)}}var Li={readContext:tt,useCallback:ke,useContext:ke,useEffect:ke,useImperativeHandle:ke,useInsertionEffect:ke,useLayoutEffect:ke,useMemo:ke,useReducer:ke,useRef:ke,useState:ke,useDebugValue:ke,useDeferredValue:ke,useTransition:ke,useMutableSource:ke,useSyncExternalStore:ke,useId:ke,unstable_isNewReconciler:!1},P0={readContext:tt,useCallback:function(e,t){return vt().memoizedState=[e,t===void 0?null:t],e},useContext:tt,useEffect:mc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ni(4194308,4,$p.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ni(4194308,4,e,t)},useInsertionEffect:function(e,t){return ni(4,2,e,t)},useMemo:function(e,t){var n=vt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=vt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=_0.bind(null,ee,e),[r.memoizedState,e]},useRef:function(e){var t=vt();return e={current:e},t.memoizedState=e},useState:hc,useDebugValue:Za,useDeferredValue:function(e){return vt().memoizedState=e},useTransition:function(){var e=hc(!1),t=e[0];return e=j0.bind(null,e[1]),vt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ee,o=vt();if(X){if(n===void 0)throw Error(R(407));n=n()}else{if(n=t(),me===null)throw Error(R(349));En&30||Ep(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,mc(jp.bind(null,r,i,e),[e]),r.flags|=2048,ao(9,Cp.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=vt(),t=me.identifierPrefix;if(X){var n=Pt,r=Rt;n=(r&~(1<<32-ft(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=so++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=C0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},T0={readContext:tt,useCallback:Lp,useContext:tt,useEffect:Ja,useImperativeHandle:Np,useInsertionEffect:Tp,useLayoutEffect:Op,useMemo:Ap,useReducer:Bs,useRef:Pp,useState:function(){return Bs(lo)},useDebugValue:Za,useDeferredValue:function(e){var t=nt();return zp(t,ue.memoizedState,e)},useTransition:function(){var e=Bs(lo)[0],t=nt().memoizedState;return[e,t]},useMutableSource:Sp,useSyncExternalStore:kp,useId:Mp,unstable_isNewReconciler:!1},O0={readContext:tt,useCallback:Lp,useContext:tt,useEffect:Ja,useImperativeHandle:Np,useInsertionEffect:Tp,useLayoutEffect:Op,useMemo:Ap,useReducer:Hs,useRef:Pp,useState:function(){return Hs(lo)},useDebugValue:Za,useDeferredValue:function(e){var t=nt();return ue===null?t.memoizedState=e:zp(t,ue.memoizedState,e)},useTransition:function(){var e=Hs(lo)[0],t=nt().memoizedState;return[e,t]},useMutableSource:Sp,useSyncExternalStore:kp,useId:Mp,unstable_isNewReconciler:!1};function st(e,t){if(e&&e.defaultProps){t=te({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Dl(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:te({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var es={isMounted:function(e){return(e=e._reactInternals)?Pn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Te(),o=Jt(e),i=Tt(r,o);i.payload=t,n!=null&&(i.callback=n),t=Gt(e,i,o),t!==null&&(dt(t,e,o,r),ei(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Te(),o=Jt(e),i=Tt(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Gt(e,i,o),t!==null&&(dt(t,e,o,r),ei(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Te(),r=Jt(e),o=Tt(n,r);o.tag=2,t!=null&&(o.callback=t),t=Gt(e,o,r),t!==null&&(dt(t,e,r,n),ei(t,e,r))}};function gc(e,t,n,r,o,i,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,s):t.prototype&&t.prototype.isPureReactComponent?!eo(n,r)||!eo(o,i):!0}function bp(e,t,n){var r=!1,o=tn,i=t.contextType;return typeof i=="object"&&i!==null?i=tt(i):(o=Ie(t)?Sn:je.current,r=t.contextTypes,i=(r=r!=null)?Jn(e,o):tn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=es,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function yc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&es.enqueueReplaceState(t,t.state,null)}function Fl(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Va(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=tt(i):(i=Ie(t)?Sn:je.current,o.context=Jn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Dl(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&es.enqueueReplaceState(o,o.state,null),Oi(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function nr(e,t){try{var n="",r=t;do n+=og(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Ws(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function bl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var $0=typeof WeakMap=="function"?WeakMap:Map;function Up(e,t,n){n=Tt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){zi||(zi=!0,Gl=r),bl(e,t)},n}function Bp(e,t,n){n=Tt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){bl(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){bl(e,t),typeof r!="function"&&(Xt===null?Xt=new Set([this]):Xt.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function vc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new $0;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=V0.bind(null,e,t,n),t.then(e,e))}function xc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function wc(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Tt(-1,1),t.tag=2,Gt(n,t,1))),n.lanes|=1),e)}var N0=At.ReactCurrentOwner,Ae=!1;function Re(e,t,n,r){t.child=e===null?yp(t,null,n,r):er(t,e.child,n,r)}function Sc(e,t,n,r,o){n=n.render;var i=t.ref;return qn(t,o),r=Ga(e,t,n,r,i,o),n=Xa(),e!==null&&!Ae?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Lt(e,t,o)):(X&&n&&Da(t),t.flags|=1,Re(e,t,r,o),t.child)}function kc(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!lu(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Hp(e,t,i,r,o)):(e=si(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var s=i.memoizedProps;if(n=n.compare,n=n!==null?n:eo,n(s,r)&&e.ref===t.ref)return Lt(e,t,o)}return t.flags|=1,e=Zt(i,r),e.ref=t.ref,e.return=t,t.child=e}function Hp(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(eo(i,r)&&e.ref===t.ref)if(Ae=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(Ae=!0);else return t.lanes=e.lanes,Lt(e,t,o)}return Ul(e,t,n,r,o)}function Wp(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},K(Bn,He),He|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,K(Bn,He),He|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,K(Bn,He),He|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,K(Bn,He),He|=r;return Re(e,t,o,n),t.child}function Vp(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ul(e,t,n,r,o){var i=Ie(n)?Sn:je.current;return i=Jn(t,i),qn(t,o),n=Ga(e,t,n,r,i,o),r=Xa(),e!==null&&!Ae?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Lt(e,t,o)):(X&&r&&Da(t),t.flags|=1,Re(e,t,n,o),t.child)}function Ec(e,t,n,r,o){if(Ie(n)){var i=!0;ji(t)}else i=!1;if(qn(t,o),t.stateNode===null)ri(e,t),bp(t,n,r),Fl(t,n,r,o),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var a=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=tt(u):(u=Ie(n)?Sn:je.current,u=Jn(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof s.getSnapshotBeforeUpdate=="function";d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||a!==u)&&yc(t,s,r,u),Ut=!1;var m=t.memoizedState;s.state=m,Oi(t,r,s,o),a=t.memoizedState,l!==r||m!==a||Me.current||Ut?(typeof c=="function"&&(Dl(t,n,c,r),a=t.memoizedState),(l=Ut||gc(t,n,l,r,m,a,u))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),s.props=r,s.state=a,s.context=u,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,xp(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:st(t.type,l),s.props=u,d=t.pendingProps,m=s.context,a=n.contextType,typeof a=="object"&&a!==null?a=tt(a):(a=Ie(n)?Sn:je.current,a=Jn(t,a));var w=n.getDerivedStateFromProps;(c=typeof w=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==d||m!==a)&&yc(t,s,r,a),Ut=!1,m=t.memoizedState,s.state=m,Oi(t,r,s,o);var y=t.memoizedState;l!==d||m!==y||Me.current||Ut?(typeof w=="function"&&(Dl(t,n,w,r),y=t.memoizedState),(u=Ut||gc(t,n,u,r,m,y,a)||!1)?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,a),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,a)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=a,r=u):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),r=!1)}return Bl(e,t,n,r,i,o)}function Bl(e,t,n,r,o,i){Vp(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return o&&ac(t,n,!1),Lt(e,t,i);r=t.stateNode,N0.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=er(t,e.child,null,i),t.child=er(t,null,l,i)):Re(e,t,l,i),t.memoizedState=r.state,o&&ac(t,n,!0),t.child}function Qp(e){var t=e.stateNode;t.pendingContext?lc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&lc(e,t.context,!1),Qa(e,t.containerInfo)}function Cc(e,t,n,r,o){return Zn(),ba(o),t.flags|=256,Re(e,t,n,r),t.child}var Hl={dehydrated:null,treeContext:null,retryLane:0};function Wl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Kp(e,t,n){var r=t.pendingProps,o=J.current,i=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),K(J,o&1),e===null)return Ml(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,i?(r=t.mode,i=t.child,s={mode:"hidden",children:s},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=s):i=rs(s,r,0,null),e=gn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Wl(n),t.memoizedState=Hl,e):eu(t,s));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return L0(e,t,s,r,l,o,n);if(i){i=r.fallback,s=t.mode,o=e.child,l=o.sibling;var a={mode:"hidden",children:r.children};return!(s&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=Zt(o,a),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?i=Zt(l,i):(i=gn(i,s,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,s=e.child.memoizedState,s=s===null?Wl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},i.memoizedState=s,i.childLanes=e.childLanes&~n,t.memoizedState=Hl,r}return i=e.child,e=i.sibling,r=Zt(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function eu(e,t){return t=rs({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Fo(e,t,n,r){return r!==null&&ba(r),er(t,e.child,null,n),e=eu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function L0(e,t,n,r,o,i,s){if(n)return t.flags&256?(t.flags&=-257,r=Ws(Error(R(422))),Fo(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=rs({mode:"visible",children:r.children},o,0,null),i=gn(i,o,s,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&er(t,e.child,null,s),t.child.memoizedState=Wl(s),t.memoizedState=Hl,i);if(!(t.mode&1))return Fo(e,t,s,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(R(419)),r=Ws(i,r,void 0),Fo(e,t,s,r)}if(l=(s&e.childLanes)!==0,Ae||l){if(r=me,r!==null){switch(s&-s){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|s)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Nt(e,o),dt(r,e,o,-1))}return su(),r=Ws(Error(R(421))),Fo(e,t,s,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Q0.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,We=Yt(o.nextSibling),Ve=t,X=!0,ct=null,e!==null&&(Xe[Je++]=Rt,Xe[Je++]=Pt,Xe[Je++]=kn,Rt=e.id,Pt=e.overflow,kn=t),t=eu(t,r.children),t.flags|=4096,t)}function jc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Il(e.return,t,n)}function Vs(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function qp(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Re(e,t,r.children,n),r=J.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&jc(e,n,t);else if(e.tag===19)jc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(K(J,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&$i(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Vs(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&$i(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Vs(t,!0,n,null,i);break;case"together":Vs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ri(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Lt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Cn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(R(153));if(t.child!==null){for(e=t.child,n=Zt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Zt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function A0(e,t,n){switch(t.tag){case 3:Qp(t),Zn();break;case 5:wp(t);break;case 1:Ie(t.type)&&ji(t);break;case 4:Qa(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;K(Pi,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(K(J,J.current&1),t.flags|=128,null):n&t.child.childLanes?Kp(e,t,n):(K(J,J.current&1),e=Lt(e,t,n),e!==null?e.sibling:null);K(J,J.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return qp(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),K(J,J.current),r)break;return null;case 22:case 23:return t.lanes=0,Wp(e,t,n)}return Lt(e,t,n)}var Yp,Vl,Gp,Xp;Yp=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Vl=function(){};Gp=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,fn(Et.current);var i=null;switch(n){case"input":o=pl(e,o),r=pl(e,r),i=[];break;case"select":o=te({},o,{value:void 0}),r=te({},r,{value:void 0}),i=[];break;case"textarea":o=gl(e,o),r=gl(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ei)}vl(n,r);var s;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var l=o[u];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Kr.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var a=r[u];if(l=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||a&&a.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in a)a.hasOwnProperty(s)&&l[s]!==a[s]&&(n||(n={}),n[s]=a[s])}else n||(i||(i=[]),i.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(i=i||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(i=i||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Kr.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&q("scroll",e),i||l===a||(i=[])):(i=i||[]).push(u,a))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Xp=function(e,t,n,r){n!==r&&(t.flags|=4)};function Cr(e,t){if(!X)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ee(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function z0(e,t,n){var r=t.pendingProps;switch(Fa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ee(t),null;case 1:return Ie(t.type)&&Ci(),Ee(t),null;case 3:return r=t.stateNode,tr(),G(Me),G(je),qa(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Io(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,ct!==null&&(Zl(ct),ct=null))),Vl(e,t),Ee(t),null;case 5:Ka(t);var o=fn(io.current);if(n=t.type,e!==null&&t.stateNode!=null)Gp(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(R(166));return Ee(t),null}if(e=fn(Et.current),Io(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[wt]=t,r[ro]=i,e=(t.mode&1)!==0,n){case"dialog":q("cancel",r),q("close",r);break;case"iframe":case"object":case"embed":q("load",r);break;case"video":case"audio":for(o=0;o<zr.length;o++)q(zr[o],r);break;case"source":q("error",r);break;case"img":case"image":case"link":q("error",r),q("load",r);break;case"details":q("toggle",r);break;case"input":Au(r,i),q("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},q("invalid",r);break;case"textarea":Mu(r,i),q("invalid",r)}vl(n,i),o=null;for(var s in i)if(i.hasOwnProperty(s)){var l=i[s];s==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Mo(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Mo(r.textContent,l,e),o=["children",""+l]):Kr.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&q("scroll",r)}switch(n){case"input":Po(r),zu(r,i,!0);break;case"textarea":Po(r),Iu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ei)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=jd(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[wt]=t,e[ro]=r,Yp(e,t,!1,!1),t.stateNode=e;e:{switch(s=xl(n,r),n){case"dialog":q("cancel",e),q("close",e),o=r;break;case"iframe":case"object":case"embed":q("load",e),o=r;break;case"video":case"audio":for(o=0;o<zr.length;o++)q(zr[o],e);o=r;break;case"source":q("error",e),o=r;break;case"img":case"image":case"link":q("error",e),q("load",e),o=r;break;case"details":q("toggle",e),o=r;break;case"input":Au(e,r),o=pl(e,r),q("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=te({},r,{value:void 0}),q("invalid",e);break;case"textarea":Mu(e,r),o=gl(e,r),q("invalid",e);break;default:o=r}vl(n,o),l=o;for(i in l)if(l.hasOwnProperty(i)){var a=l[i];i==="style"?Pd(e,a):i==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&_d(e,a)):i==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&qr(e,a):typeof a=="number"&&qr(e,""+a):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Kr.hasOwnProperty(i)?a!=null&&i==="onScroll"&&q("scroll",e):a!=null&&Ca(e,i,a,s))}switch(n){case"input":Po(e),zu(e,r,!1);break;case"textarea":Po(e),Iu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+en(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Wn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Wn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Ei)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ee(t),null;case 6:if(e&&t.stateNode!=null)Xp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(R(166));if(n=fn(io.current),fn(Et.current),Io(t)){if(r=t.stateNode,n=t.memoizedProps,r[wt]=t,(i=r.nodeValue!==n)&&(e=Ve,e!==null))switch(e.tag){case 3:Mo(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Mo(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[wt]=t,t.stateNode=r}return Ee(t),null;case 13:if(G(J),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(X&&We!==null&&t.mode&1&&!(t.flags&128))mp(),Zn(),t.flags|=98560,i=!1;else if(i=Io(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(R(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(R(317));i[wt]=t}else Zn(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ee(t),i=!1}else ct!==null&&(Zl(ct),ct=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||J.current&1?ce===0&&(ce=3):su())),t.updateQueue!==null&&(t.flags|=4),Ee(t),null);case 4:return tr(),Vl(e,t),e===null&&to(t.stateNode.containerInfo),Ee(t),null;case 10:return Ha(t.type._context),Ee(t),null;case 17:return Ie(t.type)&&Ci(),Ee(t),null;case 19:if(G(J),i=t.memoizedState,i===null)return Ee(t),null;if(r=(t.flags&128)!==0,s=i.rendering,s===null)if(r)Cr(i,!1);else{if(ce!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=$i(e),s!==null){for(t.flags|=128,Cr(i,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,s=i.alternate,s===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return K(J,J.current&1|2),t.child}e=e.sibling}i.tail!==null&&oe()>rr&&(t.flags|=128,r=!0,Cr(i,!1),t.lanes=4194304)}else{if(!r)if(e=$i(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Cr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!X)return Ee(t),null}else 2*oe()-i.renderingStartTime>rr&&n!==1073741824&&(t.flags|=128,r=!0,Cr(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(n=i.last,n!==null?n.sibling=s:t.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=oe(),t.sibling=null,n=J.current,K(J,r?n&1|2:n&1),t):(Ee(t),null);case 22:case 23:return iu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?He&1073741824&&(Ee(t),t.subtreeFlags&6&&(t.flags|=8192)):Ee(t),null;case 24:return null;case 25:return null}throw Error(R(156,t.tag))}function M0(e,t){switch(Fa(t),t.tag){case 1:return Ie(t.type)&&Ci(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return tr(),G(Me),G(je),qa(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Ka(t),null;case 13:if(G(J),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(R(340));Zn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(J),null;case 4:return tr(),null;case 10:return Ha(t.type._context),null;case 22:case 23:return iu(),null;case 24:return null;default:return null}}var bo=!1,Ce=!1,I0=typeof WeakSet=="function"?WeakSet:Set,$=null;function Un(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ne(e,t,r)}else n.current=null}function Ql(e,t,n){try{n()}catch(r){ne(e,t,r)}}var _c=!1;function D0(e,t){if(Tl=wi,e=np(),Ia(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var s=0,l=-1,a=-1,u=0,c=0,d=e,m=null;t:for(;;){for(var w;d!==n||o!==0&&d.nodeType!==3||(l=s+o),d!==i||r!==0&&d.nodeType!==3||(a=s+r),d.nodeType===3&&(s+=d.nodeValue.length),(w=d.firstChild)!==null;)m=d,d=w;for(;;){if(d===e)break t;if(m===n&&++u===o&&(l=s),m===i&&++c===r&&(a=s),(w=d.nextSibling)!==null)break;d=m,m=d.parentNode}d=w}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ol={focusedElem:e,selectionRange:n},wi=!1,$=t;$!==null;)if(t=$,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,$=e;else for(;$!==null;){t=$;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,C=y.memoizedState,h=t.stateNode,p=h.getSnapshotBeforeUpdate(t.elementType===t.type?x:st(t.type,x),C);h.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(S){ne(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,$=e;break}$=t.return}return y=_c,_c=!1,y}function Hr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Ql(t,n,i)}o=o.next}while(o!==r)}}function ts(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Kl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Jp(e){var t=e.alternate;t!==null&&(e.alternate=null,Jp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[wt],delete t[ro],delete t[Ll],delete t[w0],delete t[S0])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Zp(e){return e.tag===5||e.tag===3||e.tag===4}function Rc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Zp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ql(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ei));else if(r!==4&&(e=e.child,e!==null))for(ql(e,t,n),e=e.sibling;e!==null;)ql(e,t,n),e=e.sibling}function Yl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Yl(e,t,n),e=e.sibling;e!==null;)Yl(e,t,n),e=e.sibling}var ye=null,lt=!1;function It(e,t,n){for(n=n.child;n!==null;)eh(e,t,n),n=n.sibling}function eh(e,t,n){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(Ki,n)}catch{}switch(n.tag){case 5:Ce||Un(n,t);case 6:var r=ye,o=lt;ye=null,It(e,t,n),ye=r,lt=o,ye!==null&&(lt?(e=ye,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ye.removeChild(n.stateNode));break;case 18:ye!==null&&(lt?(e=ye,n=n.stateNode,e.nodeType===8?Ds(e.parentNode,n):e.nodeType===1&&Ds(e,n),Jr(e)):Ds(ye,n.stateNode));break;case 4:r=ye,o=lt,ye=n.stateNode.containerInfo,lt=!0,It(e,t,n),ye=r,lt=o;break;case 0:case 11:case 14:case 15:if(!Ce&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,s=i.destroy;i=i.tag,s!==void 0&&(i&2||i&4)&&Ql(n,t,s),o=o.next}while(o!==r)}It(e,t,n);break;case 1:if(!Ce&&(Un(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ne(n,t,l)}It(e,t,n);break;case 21:It(e,t,n);break;case 22:n.mode&1?(Ce=(r=Ce)||n.memoizedState!==null,It(e,t,n),Ce=r):It(e,t,n);break;default:It(e,t,n)}}function Pc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new I0),t.forEach(function(r){var o=K0.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function it(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:ye=l.stateNode,lt=!1;break e;case 3:ye=l.stateNode.containerInfo,lt=!0;break e;case 4:ye=l.stateNode.containerInfo,lt=!0;break e}l=l.return}if(ye===null)throw Error(R(160));eh(i,s,o),ye=null,lt=!1;var a=o.alternate;a!==null&&(a.return=null),o.return=null}catch(u){ne(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)th(t,e),t=t.sibling}function th(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(it(t,e),yt(e),r&4){try{Hr(3,e,e.return),ts(3,e)}catch(x){ne(e,e.return,x)}try{Hr(5,e,e.return)}catch(x){ne(e,e.return,x)}}break;case 1:it(t,e),yt(e),r&512&&n!==null&&Un(n,n.return);break;case 5:if(it(t,e),yt(e),r&512&&n!==null&&Un(n,n.return),e.flags&32){var o=e.stateNode;try{qr(o,"")}catch(x){ne(e,e.return,x)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,s=n!==null?n.memoizedProps:i,l=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&Ed(o,i),xl(l,s);var u=xl(l,i);for(s=0;s<a.length;s+=2){var c=a[s],d=a[s+1];c==="style"?Pd(o,d):c==="dangerouslySetInnerHTML"?_d(o,d):c==="children"?qr(o,d):Ca(o,c,d,u)}switch(l){case"input":hl(o,i);break;case"textarea":Cd(o,i);break;case"select":var m=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var w=i.value;w!=null?Wn(o,!!i.multiple,w,!1):m!==!!i.multiple&&(i.defaultValue!=null?Wn(o,!!i.multiple,i.defaultValue,!0):Wn(o,!!i.multiple,i.multiple?[]:"",!1))}o[ro]=i}catch(x){ne(e,e.return,x)}}break;case 6:if(it(t,e),yt(e),r&4){if(e.stateNode===null)throw Error(R(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(x){ne(e,e.return,x)}}break;case 3:if(it(t,e),yt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Jr(t.containerInfo)}catch(x){ne(e,e.return,x)}break;case 4:it(t,e),yt(e);break;case 13:it(t,e),yt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(ru=oe())),r&4&&Pc(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Ce=(u=Ce)||c,it(t,e),Ce=u):it(t,e),yt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for($=e,c=e.child;c!==null;){for(d=$=c;$!==null;){switch(m=$,w=m.child,m.tag){case 0:case 11:case 14:case 15:Hr(4,m,m.return);break;case 1:Un(m,m.return);var y=m.stateNode;if(typeof y.componentWillUnmount=="function"){r=m,n=m.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(x){ne(r,n,x)}}break;case 5:Un(m,m.return);break;case 22:if(m.memoizedState!==null){Oc(d);continue}}w!==null?(w.return=m,$=w):Oc(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{o=d.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=d.stateNode,a=d.memoizedProps.style,s=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Rd("display",s))}catch(x){ne(e,e.return,x)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(x){ne(e,e.return,x)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:it(t,e),yt(e),r&4&&Pc(e);break;case 21:break;default:it(t,e),yt(e)}}function yt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Zp(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(qr(o,""),r.flags&=-33);var i=Rc(e);Yl(e,i,o);break;case 3:case 4:var s=r.stateNode.containerInfo,l=Rc(e);ql(e,l,s);break;default:throw Error(R(161))}}catch(a){ne(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function F0(e,t,n){$=e,nh(e)}function nh(e,t,n){for(var r=(e.mode&1)!==0;$!==null;){var o=$,i=o.child;if(o.tag===22&&r){var s=o.memoizedState!==null||bo;if(!s){var l=o.alternate,a=l!==null&&l.memoizedState!==null||Ce;l=bo;var u=Ce;if(bo=s,(Ce=a)&&!u)for($=o;$!==null;)s=$,a=s.child,s.tag===22&&s.memoizedState!==null?$c(o):a!==null?(a.return=s,$=a):$c(o);for(;i!==null;)$=i,nh(i),i=i.sibling;$=o,bo=l,Ce=u}Tc(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,$=i):Tc(e)}}function Tc(e){for(;$!==null;){var t=$;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ce||ts(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ce)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:st(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&pc(t,i,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}pc(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Jr(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}Ce||t.flags&512&&Kl(t)}catch(m){ne(t,t.return,m)}}if(t===e){$=null;break}if(n=t.sibling,n!==null){n.return=t.return,$=n;break}$=t.return}}function Oc(e){for(;$!==null;){var t=$;if(t===e){$=null;break}var n=t.sibling;if(n!==null){n.return=t.return,$=n;break}$=t.return}}function $c(e){for(;$!==null;){var t=$;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{ts(4,t)}catch(a){ne(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(a){ne(t,o,a)}}var i=t.return;try{Kl(t)}catch(a){ne(t,i,a)}break;case 5:var s=t.return;try{Kl(t)}catch(a){ne(t,s,a)}}}catch(a){ne(t,t.return,a)}if(t===e){$=null;break}var l=t.sibling;if(l!==null){l.return=t.return,$=l;break}$=t.return}}var b0=Math.ceil,Ai=At.ReactCurrentDispatcher,tu=At.ReactCurrentOwner,et=At.ReactCurrentBatchConfig,H=0,me=null,se=null,ve=0,He=0,Bn=rn(0),ce=0,uo=null,Cn=0,ns=0,nu=0,Wr=null,Le=null,ru=0,rr=1/0,Ct=null,zi=!1,Gl=null,Xt=null,Uo=!1,Vt=null,Mi=0,Vr=0,Xl=null,oi=-1,ii=0;function Te(){return H&6?oe():oi!==-1?oi:oi=oe()}function Jt(e){return e.mode&1?H&2&&ve!==0?ve&-ve:E0.transition!==null?(ii===0&&(ii=bd()),ii):(e=V,e!==0||(e=window.event,e=e===void 0?16:Kd(e.type)),e):1}function dt(e,t,n,r){if(50<Vr)throw Vr=0,Xl=null,Error(R(185));go(e,n,r),(!(H&2)||e!==me)&&(e===me&&(!(H&2)&&(ns|=n),ce===4&&Ht(e,ve)),De(e,r),n===1&&H===0&&!(t.mode&1)&&(rr=oe()+500,Ji&&on()))}function De(e,t){var n=e.callbackNode;Eg(e,t);var r=xi(e,e===me?ve:0);if(r===0)n!==null&&bu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&bu(n),t===1)e.tag===0?k0(Nc.bind(null,e)):dp(Nc.bind(null,e)),v0(function(){!(H&6)&&on()}),n=null;else{switch(Ud(r)){case 1:n=Ta;break;case 4:n=Dd;break;case 16:n=vi;break;case 536870912:n=Fd;break;default:n=vi}n=ch(n,rh.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function rh(e,t){if(oi=-1,ii=0,H&6)throw Error(R(327));var n=e.callbackNode;if(Yn()&&e.callbackNode!==n)return null;var r=xi(e,e===me?ve:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ii(e,r);else{t=r;var o=H;H|=2;var i=ih();(me!==e||ve!==t)&&(Ct=null,rr=oe()+500,mn(e,t));do try{H0();break}catch(l){oh(e,l)}while(!0);Ba(),Ai.current=i,H=o,se!==null?t=0:(me=null,ve=0,t=ce)}if(t!==0){if(t===2&&(o=Cl(e),o!==0&&(r=o,t=Jl(e,o))),t===1)throw n=uo,mn(e,0),Ht(e,r),De(e,oe()),n;if(t===6)Ht(e,r);else{if(o=e.current.alternate,!(r&30)&&!U0(o)&&(t=Ii(e,r),t===2&&(i=Cl(e),i!==0&&(r=i,t=Jl(e,i))),t===1))throw n=uo,mn(e,0),Ht(e,r),De(e,oe()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(R(345));case 2:an(e,Le,Ct);break;case 3:if(Ht(e,r),(r&130023424)===r&&(t=ru+500-oe(),10<t)){if(xi(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Te(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Nl(an.bind(null,e,Le,Ct),t);break}an(e,Le,Ct);break;case 4:if(Ht(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var s=31-ft(r);i=1<<s,s=t[s],s>o&&(o=s),r&=~i}if(r=o,r=oe()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*b0(r/1960))-r,10<r){e.timeoutHandle=Nl(an.bind(null,e,Le,Ct),r);break}an(e,Le,Ct);break;case 5:an(e,Le,Ct);break;default:throw Error(R(329))}}}return De(e,oe()),e.callbackNode===n?rh.bind(null,e):null}function Jl(e,t){var n=Wr;return e.current.memoizedState.isDehydrated&&(mn(e,t).flags|=256),e=Ii(e,t),e!==2&&(t=Le,Le=n,t!==null&&Zl(t)),e}function Zl(e){Le===null?Le=e:Le.push.apply(Le,e)}function U0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!ht(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Ht(e,t){for(t&=~nu,t&=~ns,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ft(t),r=1<<n;e[n]=-1,t&=~r}}function Nc(e){if(H&6)throw Error(R(327));Yn();var t=xi(e,0);if(!(t&1))return De(e,oe()),null;var n=Ii(e,t);if(e.tag!==0&&n===2){var r=Cl(e);r!==0&&(t=r,n=Jl(e,r))}if(n===1)throw n=uo,mn(e,0),Ht(e,t),De(e,oe()),n;if(n===6)throw Error(R(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,an(e,Le,Ct),De(e,oe()),null}function ou(e,t){var n=H;H|=1;try{return e(t)}finally{H=n,H===0&&(rr=oe()+500,Ji&&on())}}function jn(e){Vt!==null&&Vt.tag===0&&!(H&6)&&Yn();var t=H;H|=1;var n=et.transition,r=V;try{if(et.transition=null,V=1,e)return e()}finally{V=r,et.transition=n,H=t,!(H&6)&&on()}}function iu(){He=Bn.current,G(Bn)}function mn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,y0(n)),se!==null)for(n=se.return;n!==null;){var r=n;switch(Fa(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ci();break;case 3:tr(),G(Me),G(je),qa();break;case 5:Ka(r);break;case 4:tr();break;case 13:G(J);break;case 19:G(J);break;case 10:Ha(r.type._context);break;case 22:case 23:iu()}n=n.return}if(me=e,se=e=Zt(e.current,null),ve=He=t,ce=0,uo=null,nu=ns=Cn=0,Le=Wr=null,cn!==null){for(t=0;t<cn.length;t++)if(n=cn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var s=i.next;i.next=o,r.next=s}n.pending=r}cn=null}return e}function oh(e,t){do{var n=se;try{if(Ba(),ti.current=Li,Ni){for(var r=ee.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Ni=!1}if(En=0,pe=ue=ee=null,Br=!1,so=0,tu.current=null,n===null||n.return===null){ce=1,uo=t,se=null;break}e:{var i=e,s=n.return,l=n,a=t;if(t=ve,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,c=l,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var m=c.alternate;m?(c.updateQueue=m.updateQueue,c.memoizedState=m.memoizedState,c.lanes=m.lanes):(c.updateQueue=null,c.memoizedState=null)}var w=xc(s);if(w!==null){w.flags&=-257,wc(w,s,l,i,t),w.mode&1&&vc(i,u,t),t=w,a=u;var y=t.updateQueue;if(y===null){var x=new Set;x.add(a),t.updateQueue=x}else y.add(a);break e}else{if(!(t&1)){vc(i,u,t),su();break e}a=Error(R(426))}}else if(X&&l.mode&1){var C=xc(s);if(C!==null){!(C.flags&65536)&&(C.flags|=256),wc(C,s,l,i,t),ba(nr(a,l));break e}}i=a=nr(a,l),ce!==4&&(ce=2),Wr===null?Wr=[i]:Wr.push(i),i=s;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var h=Up(i,a,t);dc(i,h);break e;case 1:l=a;var p=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(Xt===null||!Xt.has(g)))){i.flags|=65536,t&=-t,i.lanes|=t;var S=Bp(i,l,t);dc(i,S);break e}}i=i.return}while(i!==null)}lh(n)}catch(_){t=_,se===n&&n!==null&&(se=n=n.return);continue}break}while(!0)}function ih(){var e=Ai.current;return Ai.current=Li,e===null?Li:e}function su(){(ce===0||ce===3||ce===2)&&(ce=4),me===null||!(Cn&268435455)&&!(ns&268435455)||Ht(me,ve)}function Ii(e,t){var n=H;H|=2;var r=ih();(me!==e||ve!==t)&&(Ct=null,mn(e,t));do try{B0();break}catch(o){oh(e,o)}while(!0);if(Ba(),H=n,Ai.current=r,se!==null)throw Error(R(261));return me=null,ve=0,ce}function B0(){for(;se!==null;)sh(se)}function H0(){for(;se!==null&&!hg();)sh(se)}function sh(e){var t=uh(e.alternate,e,He);e.memoizedProps=e.pendingProps,t===null?lh(e):se=t,tu.current=null}function lh(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=M0(n,t),n!==null){n.flags&=32767,se=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ce=6,se=null;return}}else if(n=z0(n,t,He),n!==null){se=n;return}if(t=t.sibling,t!==null){se=t;return}se=t=e}while(t!==null);ce===0&&(ce=5)}function an(e,t,n){var r=V,o=et.transition;try{et.transition=null,V=1,W0(e,t,n,r)}finally{et.transition=o,V=r}return null}function W0(e,t,n,r){do Yn();while(Vt!==null);if(H&6)throw Error(R(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(R(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Cg(e,i),e===me&&(se=me=null,ve=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Uo||(Uo=!0,ch(vi,function(){return Yn(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=et.transition,et.transition=null;var s=V;V=1;var l=H;H|=4,tu.current=null,D0(e,n),th(n,e),c0(Ol),wi=!!Tl,Ol=Tl=null,e.current=n,F0(n),mg(),H=l,V=s,et.transition=i}else e.current=n;if(Uo&&(Uo=!1,Vt=e,Mi=o),i=e.pendingLanes,i===0&&(Xt=null),vg(n.stateNode),De(e,oe()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(zi)throw zi=!1,e=Gl,Gl=null,e;return Mi&1&&e.tag!==0&&Yn(),i=e.pendingLanes,i&1?e===Xl?Vr++:(Vr=0,Xl=e):Vr=0,on(),null}function Yn(){if(Vt!==null){var e=Ud(Mi),t=et.transition,n=V;try{if(et.transition=null,V=16>e?16:e,Vt===null)var r=!1;else{if(e=Vt,Vt=null,Mi=0,H&6)throw Error(R(331));var o=H;for(H|=4,$=e.current;$!==null;){var i=$,s=i.child;if($.flags&16){var l=i.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for($=u;$!==null;){var c=$;switch(c.tag){case 0:case 11:case 15:Hr(8,c,i)}var d=c.child;if(d!==null)d.return=c,$=d;else for(;$!==null;){c=$;var m=c.sibling,w=c.return;if(Jp(c),c===u){$=null;break}if(m!==null){m.return=w,$=m;break}$=w}}}var y=i.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var C=x.sibling;x.sibling=null,x=C}while(x!==null)}}$=i}}if(i.subtreeFlags&2064&&s!==null)s.return=i,$=s;else e:for(;$!==null;){if(i=$,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Hr(9,i,i.return)}var h=i.sibling;if(h!==null){h.return=i.return,$=h;break e}$=i.return}}var p=e.current;for($=p;$!==null;){s=$;var g=s.child;if(s.subtreeFlags&2064&&g!==null)g.return=s,$=g;else e:for(s=p;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:ts(9,l)}}catch(_){ne(l,l.return,_)}if(l===s){$=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,$=S;break e}$=l.return}}if(H=o,on(),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(Ki,e)}catch{}r=!0}return r}finally{V=n,et.transition=t}}return!1}function Lc(e,t,n){t=nr(n,t),t=Up(e,t,1),e=Gt(e,t,1),t=Te(),e!==null&&(go(e,1,t),De(e,t))}function ne(e,t,n){if(e.tag===3)Lc(e,e,n);else for(;t!==null;){if(t.tag===3){Lc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Xt===null||!Xt.has(r))){e=nr(n,e),e=Bp(t,e,1),t=Gt(t,e,1),e=Te(),t!==null&&(go(t,1,e),De(t,e));break}}t=t.return}}function V0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Te(),e.pingedLanes|=e.suspendedLanes&n,me===e&&(ve&n)===n&&(ce===4||ce===3&&(ve&130023424)===ve&&500>oe()-ru?mn(e,0):nu|=n),De(e,t)}function ah(e,t){t===0&&(e.mode&1?(t=$o,$o<<=1,!($o&130023424)&&($o=4194304)):t=1);var n=Te();e=Nt(e,t),e!==null&&(go(e,t,n),De(e,n))}function Q0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ah(e,n)}function K0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(t),ah(e,n)}var uh;uh=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Me.current)Ae=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Ae=!1,A0(e,t,n);Ae=!!(e.flags&131072)}else Ae=!1,X&&t.flags&1048576&&pp(t,Ri,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;ri(e,t),e=t.pendingProps;var o=Jn(t,je.current);qn(t,n),o=Ga(null,t,r,e,o,n);var i=Xa();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ie(r)?(i=!0,ji(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Va(t),o.updater=es,t.stateNode=o,o._reactInternals=t,Fl(t,r,e,n),t=Bl(null,t,r,!0,i,n)):(t.tag=0,X&&i&&Da(t),Re(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(ri(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Y0(r),e=st(r,e),o){case 0:t=Ul(null,t,r,e,n);break e;case 1:t=Ec(null,t,r,e,n);break e;case 11:t=Sc(null,t,r,e,n);break e;case 14:t=kc(null,t,r,st(r.type,e),n);break e}throw Error(R(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:st(r,o),Ul(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:st(r,o),Ec(e,t,r,o,n);case 3:e:{if(Qp(t),e===null)throw Error(R(387));r=t.pendingProps,i=t.memoizedState,o=i.element,xp(e,t),Oi(t,r,null,n);var s=t.memoizedState;if(r=s.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=nr(Error(R(423)),t),t=Cc(e,t,r,n,o);break e}else if(r!==o){o=nr(Error(R(424)),t),t=Cc(e,t,r,n,o);break e}else for(We=Yt(t.stateNode.containerInfo.firstChild),Ve=t,X=!0,ct=null,n=yp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Zn(),r===o){t=Lt(e,t,n);break e}Re(e,t,r,n)}t=t.child}return t;case 5:return wp(t),e===null&&Ml(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,s=o.children,$l(r,o)?s=null:i!==null&&$l(r,i)&&(t.flags|=32),Vp(e,t),Re(e,t,s,n),t.child;case 6:return e===null&&Ml(t),null;case 13:return Kp(e,t,n);case 4:return Qa(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=er(t,null,r,n):Re(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:st(r,o),Sc(e,t,r,o,n);case 7:return Re(e,t,t.pendingProps,n),t.child;case 8:return Re(e,t,t.pendingProps.children,n),t.child;case 12:return Re(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,s=o.value,K(Pi,r._currentValue),r._currentValue=s,i!==null)if(ht(i.value,s)){if(i.children===o.children&&!Me.current){t=Lt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){s=i.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(i.tag===1){a=Tt(-1,n&-n),a.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?a.next=a:(a.next=c.next,c.next=a),u.pending=a}}i.lanes|=n,a=i.alternate,a!==null&&(a.lanes|=n),Il(i.return,n,t),l.lanes|=n;break}a=a.next}}else if(i.tag===10)s=i.type===t.type?null:i.child;else if(i.tag===18){if(s=i.return,s===null)throw Error(R(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Il(s,n,t),s=i.sibling}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===t){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}Re(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,qn(t,n),o=tt(o),r=r(o),t.flags|=1,Re(e,t,r,n),t.child;case 14:return r=t.type,o=st(r,t.pendingProps),o=st(r.type,o),kc(e,t,r,o,n);case 15:return Hp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:st(r,o),ri(e,t),t.tag=1,Ie(r)?(e=!0,ji(t)):e=!1,qn(t,n),bp(t,r,o),Fl(t,r,o,n),Bl(null,t,r,!0,e,n);case 19:return qp(e,t,n);case 22:return Wp(e,t,n)}throw Error(R(156,t.tag))};function ch(e,t){return Id(e,t)}function q0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ze(e,t,n,r){return new q0(e,t,n,r)}function lu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Y0(e){if(typeof e=="function")return lu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===_a)return 11;if(e===Ra)return 14}return 2}function Zt(e,t){var n=e.alternate;return n===null?(n=Ze(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function si(e,t,n,r,o,i){var s=2;if(r=e,typeof e=="function")lu(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case Nn:return gn(n.children,o,i,t);case ja:s=8,o|=8;break;case ul:return e=Ze(12,n,t,o|2),e.elementType=ul,e.lanes=i,e;case cl:return e=Ze(13,n,t,o),e.elementType=cl,e.lanes=i,e;case fl:return e=Ze(19,n,t,o),e.elementType=fl,e.lanes=i,e;case wd:return rs(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case vd:s=10;break e;case xd:s=9;break e;case _a:s=11;break e;case Ra:s=14;break e;case bt:s=16,r=null;break e}throw Error(R(130,e==null?e:typeof e,""))}return t=Ze(s,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function gn(e,t,n,r){return e=Ze(7,e,r,t),e.lanes=n,e}function rs(e,t,n,r){return e=Ze(22,e,r,t),e.elementType=wd,e.lanes=n,e.stateNode={isHidden:!1},e}function Qs(e,t,n){return e=Ze(6,e,null,t),e.lanes=n,e}function Ks(e,t,n){return t=Ze(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function G0(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Rs(0),this.expirationTimes=Rs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Rs(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function au(e,t,n,r,o,i,s,l,a){return e=new G0(e,t,n,l,a),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Ze(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Va(i),e}function X0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$n,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function fh(e){if(!e)return tn;e=e._reactInternals;e:{if(Pn(e)!==e||e.tag!==1)throw Error(R(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ie(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(R(171))}if(e.tag===1){var n=e.type;if(Ie(n))return fp(e,n,t)}return t}function dh(e,t,n,r,o,i,s,l,a){return e=au(n,r,!0,e,o,i,s,l,a),e.context=fh(null),n=e.current,r=Te(),o=Jt(n),i=Tt(r,o),i.callback=t??null,Gt(n,i,o),e.current.lanes=o,go(e,o,r),De(e,r),e}function os(e,t,n,r){var o=t.current,i=Te(),s=Jt(o);return n=fh(n),t.context===null?t.context=n:t.pendingContext=n,t=Tt(i,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Gt(o,t,s),e!==null&&(dt(e,o,s,i),ei(e,o,s)),s}function Di(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ac(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function uu(e,t){Ac(e,t),(e=e.alternate)&&Ac(e,t)}function J0(){return null}var ph=typeof reportError=="function"?reportError:function(e){console.error(e)};function cu(e){this._internalRoot=e}is.prototype.render=cu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(R(409));os(e,t,null,null)};is.prototype.unmount=cu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;jn(function(){os(null,e,null,null)}),t[$t]=null}};function is(e){this._internalRoot=e}is.prototype.unstable_scheduleHydration=function(e){if(e){var t=Wd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Bt.length&&t!==0&&t<Bt[n].priority;n++);Bt.splice(n,0,e),n===0&&Qd(e)}};function fu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function ss(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function zc(){}function Z0(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=Di(s);i.call(u)}}var s=dh(t,r,e,0,null,!1,!1,"",zc);return e._reactRootContainer=s,e[$t]=s.current,to(e.nodeType===8?e.parentNode:e),jn(),s}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var u=Di(a);l.call(u)}}var a=au(e,0,!1,null,null,!1,!1,"",zc);return e._reactRootContainer=a,e[$t]=a.current,to(e.nodeType===8?e.parentNode:e),jn(function(){os(t,a,n,r)}),a}function ls(e,t,n,r,o){var i=n._reactRootContainer;if(i){var s=i;if(typeof o=="function"){var l=o;o=function(){var a=Di(s);l.call(a)}}os(t,s,e,o)}else s=Z0(n,t,e,o,r);return Di(s)}Bd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ar(t.pendingLanes);n!==0&&(Oa(t,n|1),De(t,oe()),!(H&6)&&(rr=oe()+500,on()))}break;case 13:jn(function(){var r=Nt(e,1);if(r!==null){var o=Te();dt(r,e,1,o)}}),uu(e,1)}};$a=function(e){if(e.tag===13){var t=Nt(e,134217728);if(t!==null){var n=Te();dt(t,e,134217728,n)}uu(e,134217728)}};Hd=function(e){if(e.tag===13){var t=Jt(e),n=Nt(e,t);if(n!==null){var r=Te();dt(n,e,t,r)}uu(e,t)}};Wd=function(){return V};Vd=function(e,t){var n=V;try{return V=e,t()}finally{V=n}};Sl=function(e,t,n){switch(t){case"input":if(hl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Xi(r);if(!o)throw Error(R(90));kd(r),hl(r,o)}}}break;case"textarea":Cd(e,n);break;case"select":t=n.value,t!=null&&Wn(e,!!n.multiple,t,!1)}};$d=ou;Nd=jn;var ey={usingClientEntryPoint:!1,Events:[vo,Mn,Xi,Td,Od,ou]},jr={findFiberByHostInstance:un,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ty={bundleType:jr.bundleType,version:jr.version,rendererPackageName:jr.rendererPackageName,rendererConfig:jr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:At.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=zd(e),e===null?null:e.stateNode},findFiberByHostInstance:jr.findFiberByHostInstance||J0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bo.isDisabled&&Bo.supportsFiber)try{Ki=Bo.inject(ty),kt=Bo}catch{}}qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ey;qe.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!fu(t))throw Error(R(200));return X0(e,t,null,n)};qe.createRoot=function(e,t){if(!fu(e))throw Error(R(299));var n=!1,r="",o=ph;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=au(e,1,!1,null,null,n,!1,r,o),e[$t]=t.current,to(e.nodeType===8?e.parentNode:e),new cu(t)};qe.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(R(188)):(e=Object.keys(e).join(","),Error(R(268,e)));return e=zd(t),e=e===null?null:e.stateNode,e};qe.flushSync=function(e){return jn(e)};qe.hydrate=function(e,t,n){if(!ss(t))throw Error(R(200));return ls(null,e,t,!0,n)};qe.hydrateRoot=function(e,t,n){if(!fu(e))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",s=ph;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=dh(t,null,e,1,n??null,o,!1,i,s),e[$t]=t.current,to(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new is(t)};qe.render=function(e,t,n){if(!ss(t))throw Error(R(200));return ls(null,e,t,!1,n)};qe.unmountComponentAtNode=function(e){if(!ss(e))throw Error(R(40));return e._reactRootContainer?(jn(function(){ls(null,null,e,!1,function(){e._reactRootContainer=null,e[$t]=null})}),!0):!1};qe.unstable_batchedUpdates=ou;qe.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!ss(n))throw Error(R(200));if(e==null||e._reactInternals===void 0)throw Error(R(38));return ls(e,t,n,!1,r)};qe.version="18.3.1-next-f1338f8080-20240426";function hh(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hh)}catch(e){console.error(e)}}hh(),hd.exports=qe;var ny=hd.exports,mh,Mc=ny;mh=Mc.createRoot,Mc.hydrateRoot;var ry=function(){},oy=ry;const St=ho(oy);var gh={exports:{}},iy="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",sy=iy,ly=sy;function yh(){}function vh(){}vh.resetWarningCache=yh;var ay=function(){function e(r,o,i,s,l,a){if(a!==ly){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:vh,resetWarningCache:yh};return n.PropTypes=n,n};gh.exports=ay();var uy=gh.exports;const N=ho(uy);function Fi(){return Fi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Fi.apply(null,arguments)}function Ho(e){return e.charAt(0)==="/"}function qs(e,t){for(var n=t,r=n+1,o=e.length;r<o;n+=1,r+=1)e[n]=e[r];e.pop()}function cy(e,t){t===void 0&&(t="");var n=e&&e.split("/")||[],r=t&&t.split("/")||[],o=e&&Ho(e),i=t&&Ho(t),s=o||i;if(e&&Ho(e)?r=n:n.length&&(r.pop(),r=r.concat(n)),!r.length)return"/";var l;if(r.length){var a=r[r.length-1];l=a==="."||a===".."||a===""}else l=!1;for(var u=0,c=r.length;c>=0;c--){var d=r[c];d==="."?qs(r,c):d===".."?(qs(r,c),u++):u&&(qs(r,c),u--)}if(!s)for(;u--;u)r.unshift("..");s&&r[0]!==""&&(!r[0]||!Ho(r[0]))&&r.unshift("");var m=r.join("/");return l&&m.substr(-1)!=="/"&&(m+="/"),m}function Ic(e){return e.valueOf?e.valueOf():Object.prototype.valueOf.call(e)}function li(e,t){if(e===t)return!0;if(e==null||t==null)return!1;if(Array.isArray(e))return Array.isArray(t)&&e.length===t.length&&e.every(function(o,i){return li(o,t[i])});if(typeof e=="object"||typeof t=="object"){var n=Ic(e),r=Ic(t);return n!==e||r!==t?li(n,r):Object.keys(Object.assign({},e,t)).every(function(o){return li(e[o],t[o])})}return!1}var fy="Invariant failed";function dy(e,t){throw new Error(fy)}function py(e){return e.charAt(0)==="/"?e:"/"+e}function hy(e,t){return e.toLowerCase().indexOf(t.toLowerCase())===0&&"/?#".indexOf(e.charAt(t.length))!==-1}function my(e,t){return hy(e,t)?e.substr(t.length):e}function gy(e){return e.charAt(e.length-1)==="/"?e.slice(0,-1):e}function yy(e){var t=e||"/",n="",r="",o=t.indexOf("#");o!==-1&&(r=t.substr(o),t=t.substr(0,o));var i=t.indexOf("?");return i!==-1&&(n=t.substr(i),t=t.substr(0,i)),{pathname:t,search:n==="?"?"":n,hash:r==="#"?"":r}}function vy(e){var t=e.pathname,n=e.search,r=e.hash,o=t||"/";return n&&n!=="?"&&(o+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(o+=r.charAt(0)==="#"?r:"#"+r),o}function Gn(e,t,n,r){var o;typeof e=="string"?(o=yy(e),o.state=t):(o=Fi({},e),o.pathname===void 0&&(o.pathname=""),o.search?o.search.charAt(0)!=="?"&&(o.search="?"+o.search):o.search="",o.hash?o.hash.charAt(0)!=="#"&&(o.hash="#"+o.hash):o.hash="",t!==void 0&&o.state===void 0&&(o.state=t));try{o.pathname=decodeURI(o.pathname)}catch(i){throw i instanceof URIError?new URIError('Pathname "'+o.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):i}return n&&(o.key=n),r?o.pathname?o.pathname.charAt(0)!=="/"&&(o.pathname=cy(o.pathname,r.pathname)):o.pathname=r.pathname:o.pathname||(o.pathname="/"),o}function xy(e,t){return e.pathname===t.pathname&&e.search===t.search&&e.hash===t.hash&&e.key===t.key&&li(e.state,t.state)}function wy(){var e=null;function t(s){return e=s,function(){e===s&&(e=null)}}function n(s,l,a,u){if(e!=null){var c=typeof e=="function"?e(s,l):e;typeof c=="string"?typeof a=="function"?a(c,u):u(!0):u(c!==!1)}else u(!0)}var r=[];function o(s){var l=!0;function a(){l&&s.apply(void 0,arguments)}return r.push(a),function(){l=!1,r=r.filter(function(u){return u!==a})}}function i(){for(var s=arguments.length,l=new Array(s),a=0;a<s;a++)l[a]=arguments[a];r.forEach(function(u){return u.apply(void 0,l)})}return{setPrompt:t,confirmTransitionTo:n,appendListener:o,notifyListeners:i}}var Sy=!!(typeof window<"u"&&window.document&&window.document.createElement);function ky(e,t){t(window.confirm(e))}function Ey(){var e=window.navigator.userAgent;return(e.indexOf("Android 2.")!==-1||e.indexOf("Android 4.0")!==-1)&&e.indexOf("Mobile Safari")!==-1&&e.indexOf("Chrome")===-1&&e.indexOf("Windows Phone")===-1?!1:window.history&&"pushState"in window.history}function Cy(){return window.navigator.userAgent.indexOf("Trident")===-1}function jy(e){return e.state===void 0&&navigator.userAgent.indexOf("CriOS")===-1}var Dc="popstate",Fc="hashchange";function bc(){try{return window.history.state||{}}catch{return{}}}function _y(e){e===void 0&&(e={}),Sy||dy();var t=window.history,n=Ey(),r=!Cy(),o=e,i=o.forceRefresh,s=i===void 0?!1:i,l=o.getUserConfirmation,a=l===void 0?ky:l,u=o.keyLength,c=u===void 0?6:u,d=e.basename?gy(py(e.basename)):"";function m(O){var L=O||{},D=L.key,M=L.state,fe=window.location,re=fe.pathname,Ne=fe.search,ae=fe.hash,de=re+Ne+ae;return d&&(de=my(de,d)),Gn(de,M,D)}function w(){return Math.random().toString(36).substr(2,c)}var y=wy();function x(O){Fi(T,O),T.length=t.length,y.notifyListeners(T.location,T.action)}function C(O){jy(O)||g(m(O.state))}function h(){g(m(bc()))}var p=!1;function g(O){if(p)p=!1,x();else{var L="POP";y.confirmTransitionTo(O,L,a,function(D){D?x({action:L,location:O}):S(O)})}}function S(O){var L=T.location,D=k.indexOf(L.key);D===-1&&(D=0);var M=k.indexOf(O.key);M===-1&&(M=0);var fe=D-M;fe&&(p=!0,z(fe))}var _=m(bc()),k=[_.key];function j(O){return d+vy(O)}function P(O,L){var D="PUSH",M=Gn(O,L,w(),T.location);y.confirmTransitionTo(M,D,a,function(fe){if(fe){var re=j(M),Ne=M.key,ae=M.state;if(n)if(t.pushState({key:Ne,state:ae},null,re),s)window.location.href=re;else{var de=k.indexOf(T.location.key),zt=k.slice(0,de+1);zt.push(M.key),k=zt,x({action:D,location:M})}else window.location.href=re}})}function b(O,L){var D="REPLACE",M=Gn(O,L,w(),T.location);y.confirmTransitionTo(M,D,a,function(fe){if(fe){var re=j(M),Ne=M.key,ae=M.state;if(n)if(t.replaceState({key:Ne,state:ae},null,re),s)window.location.replace(re);else{var de=k.indexOf(T.location.key);de!==-1&&(k[de]=M.key),x({action:D,location:M})}else window.location.replace(re)}})}function z(O){t.go(O)}function Q(){z(-1)}function we(){z(1)}var Ue=0;function Se(O){Ue+=O,Ue===1&&O===1?(window.addEventListener(Dc,C),r&&window.addEventListener(Fc,h)):Ue===0&&(window.removeEventListener(Dc,C),r&&window.removeEventListener(Fc,h))}var gt=!1;function Ge(O){O===void 0&&(O=!1);var L=y.setPrompt(O);return gt||(Se(1),gt=!0),function(){return gt&&(gt=!1,Se(-1)),L()}}function ot(O){var L=y.appendListener(O);return Se(1),function(){Se(-1),L()}}var T={length:t.length,action:"POP",location:_,createHref:j,push:P,replace:b,go:z,goBack:Q,goForward:we,block:Ge,listen:ot};return T}var Ry=function(e,t,n,r,o,i,s,l){if(!e){var a;if(t===void 0)a=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,o,i,s,l],c=0;a=new Error(t.replace(/%s/g,function(){return u[c++]})),a.name="Invariant Violation"}throw a.framesToPop=1,a}},Py=Ry;const or=ho(Py);var Ty=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function Oy(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Uc(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function $y(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var as=function(e){$y(t,e);function t(){var n,r,o;Oy(this,t);for(var i=arguments.length,s=Array(i),l=0;l<i;l++)s[l]=arguments[l];return o=(n=(r=Uc(this,e.call.apply(e,[this].concat(s))),r),r.state={match:r.computeMatch(r.props.history.location.pathname)},n),Uc(r,o)}return t.prototype.getChildContext=function(){return{router:Ty({},this.context.router,{history:this.props.history,route:{location:this.props.history.location,match:this.state.match}})}},t.prototype.computeMatch=function(r){return{path:"/",url:"/",params:{},isExact:r==="/"}},t.prototype.componentWillMount=function(){var r=this,o=this.props,i=o.children,s=o.history;or(i==null||Z.Children.count(i)===1,"A <Router> may have only one child element"),this.unlisten=s.listen(function(){r.setState({match:r.computeMatch(s.location.pathname)})})},t.prototype.componentWillReceiveProps=function(r){St(this.props.history===r.history,"You cannot change <Router history>")},t.prototype.componentWillUnmount=function(){this.unlisten()},t.prototype.render=function(){var r=this.props.children;return r?Z.Children.only(r):null},t}(Z.Component);as.propTypes={history:N.object.isRequired,children:N.node};as.contextTypes={router:N.object};as.childContextTypes={router:N.object.isRequired};function Ny(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Bc(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Ly(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var xh=function(e){Ly(t,e);function t(){var n,r,o;Ny(this,t);for(var i=arguments.length,s=Array(i),l=0;l<i;l++)s[l]=arguments[l];return o=(n=(r=Bc(this,e.call.apply(e,[this].concat(s))),r),r.history=_y(r.props),n),Bc(r,o)}return t.prototype.componentWillMount=function(){St(!this.props.history,"<BrowserRouter> ignores the history prop. To use a custom history, use `import { Router }` instead of `import { BrowserRouter as Router }`.")},t.prototype.render=function(){return Z.createElement(as,{history:this.history,children:this.props.children})},t}(Z.Component);xh.propTypes={basename:N.string,forceRefresh:N.bool,getUserConfirmation:N.func,keyLength:N.number,children:N.node};var Ay=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function zy(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function My(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Hc(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Iy(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Dy=function(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)},wo=function(e){Iy(t,e);function t(){var n,r,o;My(this,t);for(var i=arguments.length,s=Array(i),l=0;l<i;l++)s[l]=arguments[l];return o=(n=(r=Hc(this,e.call.apply(e,[this].concat(s))),r),r.handleClick=function(a){if(r.props.onClick&&r.props.onClick(a),!a.defaultPrevented&&a.button===0&&!r.props.target&&!Dy(a)){a.preventDefault();var u=r.context.router.history,c=r.props,d=c.replace,m=c.to;d?u.replace(m):u.push(m)}},n),Hc(r,o)}return t.prototype.render=function(){var r=this.props;r.replace;var o=r.to,i=r.innerRef,s=zy(r,["replace","to","innerRef"]);or(this.context.router,"You should not use <Link> outside a <Router>"),or(o!==void 0,'You must specify the "to" property');var l=this.context.router.history,a=typeof o=="string"?Gn(o,null,null,l.location):o,u=l.createHref(a);return Z.createElement("a",Ay({},s,{onClick:this.handleClick,href:u,ref:i}))},t}(Z.Component);wo.propTypes={onClick:N.func,target:N.string,replace:N.bool,to:N.oneOfType([N.string,N.object]).isRequired,innerRef:N.oneOfType([N.string,N.func])};wo.defaultProps={replace:!1};wo.contextTypes={router:N.shape({history:N.shape({push:N.func.isRequired,replace:N.func.isRequired,createHref:N.func.isRequired}).isRequired}).isRequired};var pr={exports:{}},Fy=Array.isArray||function(e){return Object.prototype.toString.call(e)=="[object Array]"},bi=Fy;pr.exports=kh;pr.exports.parse=du;pr.exports.compile=By;pr.exports.tokensToFunction=wh;pr.exports.tokensToRegExp=Sh;var by=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function du(e,t){for(var n=[],r=0,o=0,i="",s=t&&t.delimiter||"/",l;(l=by.exec(e))!=null;){var a=l[0],u=l[1],c=l.index;if(i+=e.slice(o,c),o=c+a.length,u){i+=u[1];continue}var d=e[o],m=l[2],w=l[3],y=l[4],x=l[5],C=l[6],h=l[7];i&&(n.push(i),i="");var p=m!=null&&d!=null&&d!==m,g=C==="+"||C==="*",S=C==="?"||C==="*",_=m||s,k=y||x,j=m||(typeof n[n.length-1]=="string"?n[n.length-1]:"");n.push({name:w||r++,prefix:m||"",delimiter:_,optional:S,repeat:g,partial:p,asterisk:!!h,pattern:k?Vy(k):h?".*":Uy(_,j)})}return o<e.length&&(i+=e.substr(o)),i&&n.push(i),n}function Uy(e,t){return!t||t.indexOf(e)>-1?"[^"+dn(e)+"]+?":dn(t)+"|(?:(?!"+dn(t)+")[^"+dn(e)+"])+?"}function By(e,t){return wh(du(e,t),t)}function Hy(e){return encodeURI(e).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function Wy(e){return encodeURI(e).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function wh(e,t){for(var n=new Array(e.length),r=0;r<e.length;r++)typeof e[r]=="object"&&(n[r]=new RegExp("^(?:"+e[r].pattern+")$",hu(t)));return function(o,i){for(var s="",l=o||{},a=i||{},u=a.pretty?Hy:encodeURIComponent,c=0;c<e.length;c++){var d=e[c];if(typeof d=="string"){s+=d;continue}var m=l[d.name],w;if(m==null)if(d.optional){d.partial&&(s+=d.prefix);continue}else throw new TypeError('Expected "'+d.name+'" to be defined');if(bi(m)){if(!d.repeat)throw new TypeError('Expected "'+d.name+'" to not repeat, but received `'+JSON.stringify(m)+"`");if(m.length===0){if(d.optional)continue;throw new TypeError('Expected "'+d.name+'" to not be empty')}for(var y=0;y<m.length;y++){if(w=u(m[y]),!n[c].test(w))throw new TypeError('Expected all "'+d.name+'" to match "'+d.pattern+'", but received `'+JSON.stringify(w)+"`");s+=(y===0?d.prefix:d.delimiter)+w}continue}if(w=d.asterisk?Wy(m):u(m),!n[c].test(w))throw new TypeError('Expected "'+d.name+'" to match "'+d.pattern+'", but received "'+w+'"');s+=d.prefix+w}return s}}function dn(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function Vy(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function pu(e,t){return e.keys=t,e}function hu(e){return e&&e.sensitive?"":"i"}function Qy(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return pu(e,t)}function Ky(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(kh(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",hu(n));return pu(i,t)}function qy(e,t,n){return Sh(du(e,n),t,n)}function Sh(e,t,n){bi(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",s=0;s<e.length;s++){var l=e[s];if(typeof l=="string")i+=dn(l);else{var a=dn(l.prefix),u="(?:"+l.pattern+")";t.push(l),l.repeat&&(u+="(?:"+a+u+")*"),l.optional?l.partial?u=a+"("+u+")?":u="(?:"+a+"("+u+"))?":u=a+"("+u+")",i+=u}}var c=dn(n.delimiter||"/"),d=i.slice(-c.length)===c;return r||(i=(d?i.slice(0,-c.length):i)+"(?:"+c+"(?=$))?"),o?i+="$":i+=r&&d?"":"(?="+c+"|$)",pu(new RegExp("^"+i,hu(n)),t)}function kh(e,t,n){return bi(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?Qy(e,t):bi(e)?Ky(e,t,n):qy(e,t,n)}var Yy=pr.exports;const Eh=ho(Yy);var Wc={},Gy=1e4,Vc=0,Xy=function(t,n){var r=""+n.end+n.strict+n.sensitive,o=Wc[r]||(Wc[r]={});if(o[t])return o[t];var i=[],s=Eh(t,i,n),l={re:s,keys:i};return Vc<Gy&&(o[t]=l,Vc++),l},Ch=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments[2];typeof n=="string"&&(n={path:n});var o=n,i=o.path,s=o.exact,l=s===void 0?!1:s,a=o.strict,u=a===void 0?!1:a,c=o.sensitive,d=c===void 0?!1:c;if(i==null)return r;var m=Xy(i,{end:l,strict:u,sensitive:d}),w=m.re,y=m.keys,x=w.exec(t);if(!x)return null;var C=x[0],h=x.slice(1),p=t===C;return l&&!p?null:{path:i,url:i==="/"&&C===""?"/":C,isExact:p,params:y.reduce(function(g,S,_){return g[S.name]=h[_],g},{})}},Jy=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function Zy(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Qc(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function ev(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Ys=function(t){return Z.Children.count(t)===0},at=function(e){ev(t,e);function t(){var n,r,o;Zy(this,t);for(var i=arguments.length,s=Array(i),l=0;l<i;l++)s[l]=arguments[l];return o=(n=(r=Qc(this,e.call.apply(e,[this].concat(s))),r),r.state={match:r.computeMatch(r.props,r.context.router)},n),Qc(r,o)}return t.prototype.getChildContext=function(){return{router:Jy({},this.context.router,{route:{location:this.props.location||this.context.router.route.location,match:this.state.match}})}},t.prototype.computeMatch=function(r,o){var i=r.computedMatch,s=r.location,l=r.path,a=r.strict,u=r.exact,c=r.sensitive;if(i)return i;or(o,"You should not use <Route> or withRouter() outside a <Router>");var d=o.route,m=(s||d.location).pathname;return Ch(m,{path:l,strict:a,exact:u,sensitive:c},d.match)},t.prototype.componentWillMount=function(){St(!(this.props.component&&this.props.render),"You should not use <Route component> and <Route render> in the same route; <Route render> will be ignored"),St(!(this.props.component&&this.props.children&&!Ys(this.props.children)),"You should not use <Route component> and <Route children> in the same route; <Route children> will be ignored"),St(!(this.props.render&&this.props.children&&!Ys(this.props.children)),"You should not use <Route render> and <Route children> in the same route; <Route children> will be ignored")},t.prototype.componentWillReceiveProps=function(r,o){St(!(r.location&&!this.props.location),'<Route> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.'),St(!(!r.location&&this.props.location),'<Route> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.'),this.setState({match:this.computeMatch(r,o.router)})},t.prototype.render=function(){var r=this.state.match,o=this.props,i=o.children,s=o.component,l=o.render,a=this.context.router,u=a.history,c=a.route,d=a.staticContext,m=this.props.location||c.location,w={match:r,location:m,history:u,staticContext:d};return s?r?Z.createElement(s,w):null:l?r?l(w):null:typeof i=="function"?i(w):i&&!Ys(i)?Z.Children.only(i):null},t}(Z.Component);at.propTypes={computedMatch:N.object,path:N.string,exact:N.bool,strict:N.bool,sensitive:N.bool,component:N.func,render:N.func,children:N.oneOfType([N.func,N.node]),location:N.object};at.contextTypes={router:N.shape({history:N.object.isRequired,route:N.object.isRequired,staticContext:N.object})};at.childContextTypes={router:N.object.isRequired};var Kc=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},tv=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};function nv(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var hr=function(t){var n=t.to,r=t.exact,o=t.strict,i=t.location,s=t.activeClassName,l=t.className,a=t.activeStyle,u=t.style,c=t.isActive,d=t["aria-current"],m=nv(t,["to","exact","strict","location","activeClassName","className","activeStyle","style","isActive","aria-current"]),w=(typeof n>"u"?"undefined":tv(n))==="object"?n.pathname:n,y=w&&w.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1");return Z.createElement(at,{path:y,exact:r,strict:o,location:i,children:function(C){var h=C.location,p=C.match,g=!!(c?c(p,h):p);return Z.createElement(wo,Kc({to:n,className:g?[l,s].filter(function(S){return S}).join(" "):l,style:g?Kc({},u,a):u,"aria-current":g&&d||null},m))}})};hr.propTypes={to:wo.propTypes.to,exact:N.bool,strict:N.bool,location:N.object,activeClassName:N.string,className:N.string,activeStyle:N.object,style:N.object,isActive:N.func,"aria-current":N.oneOf(["page","step","location","date","time","true"])};hr.defaultProps={activeClassName:"active","aria-current":"page"};var qc={},rv=1e4,Yc=0,ov=function(t){var n=t,r=qc[n]||(qc[n]={});if(r[t])return r[t];var o=Eh.compile(t);return Yc<rv&&(r[t]=o,Yc++),o},Gc=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"/",n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(t==="/")return t;var r=ov(t);return r(n,{pretty:!0})},iv=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function sv(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function lv(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function av(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var us=function(e){av(t,e);function t(){return sv(this,t),lv(this,e.apply(this,arguments))}return t.prototype.isStatic=function(){return this.context.router&&this.context.router.staticContext},t.prototype.componentWillMount=function(){or(this.context.router,"You should not use <Redirect> outside a <Router>"),this.isStatic()&&this.perform()},t.prototype.componentDidMount=function(){this.isStatic()||this.perform()},t.prototype.componentDidUpdate=function(r){var o=Gn(r.to),i=Gn(this.props.to);if(xy(o,i)){St(!1,"You tried to redirect to the same route you're currently on: "+('"'+i.pathname+i.search+'"'));return}this.perform()},t.prototype.computeTo=function(r){var o=r.computedMatch,i=r.to;return o?typeof i=="string"?Gc(i,o.params):iv({},i,{pathname:Gc(i.pathname,o.params)}):i},t.prototype.perform=function(){var r=this.context.router.history,o=this.props.push,i=this.computeTo(this.props);o?r.push(i):r.replace(i)},t.prototype.render=function(){return null},t}(Z.Component);us.propTypes={computedMatch:N.object,push:N.bool,from:N.string,to:N.oneOfType([N.string,N.object]).isRequired};us.defaultProps={push:!1};us.contextTypes={router:N.shape({history:N.shape({push:N.func.isRequired,replace:N.func.isRequired}).isRequired,staticContext:N.object}).isRequired};function uv(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function cv(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function fv(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var mu=function(e){fv(t,e);function t(){return uv(this,t),cv(this,e.apply(this,arguments))}return t.prototype.componentWillMount=function(){or(this.context.router,"You should not use <Switch> outside a <Router>")},t.prototype.componentWillReceiveProps=function(r){St(!(r.location&&!this.props.location),'<Switch> elements should not change from uncontrolled to controlled (or vice versa). You initially used no "location" prop and then provided one on a subsequent render.'),St(!(!r.location&&this.props.location),'<Switch> elements should not change from controlled to uncontrolled (or vice versa). You provided a "location" prop initially but omitted it on a subsequent render.')},t.prototype.render=function(){var r=this.context.router.route,o=this.props.children,i=this.props.location||r.location,s=void 0,l=void 0;return Z.Children.forEach(o,function(a){if(s==null&&Z.isValidElement(a)){var u=a.props,c=u.path,d=u.exact,m=u.strict,w=u.sensitive,y=u.from,x=c||y;l=a,s=Ch(i.pathname,{path:x,exact:d,strict:m,sensitive:w},r.match)}}),s?Z.cloneElement(l,{location:i,computedMatch:s}):null},t}(Z.Component);mu.contextTypes={router:N.shape({route:N.object.isRequired}).isRequired};mu.propTypes={children:N.node,location:N.object};function jh(e,t){return function(){return e.apply(t,arguments)}}const{toString:dv}=Object.prototype,{getPrototypeOf:gu}=Object,cs=(e=>t=>{const n=dv.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),mt=e=>(e=e.toLowerCase(),t=>cs(t)===e),fs=e=>t=>typeof t===e,{isArray:mr}=Array,co=fs("undefined");function pv(e){return e!==null&&!co(e)&&e.constructor!==null&&!co(e.constructor)&&Qe(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const _h=mt("ArrayBuffer");function hv(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&_h(e.buffer),t}const mv=fs("string"),Qe=fs("function"),Rh=fs("number"),ds=e=>e!==null&&typeof e=="object",gv=e=>e===!0||e===!1,ai=e=>{if(cs(e)!=="object")return!1;const t=gu(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},yv=mt("Date"),vv=mt("File"),xv=mt("Blob"),wv=mt("FileList"),Sv=e=>ds(e)&&Qe(e.pipe),kv=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||Qe(e.append)&&((t=cs(e))==="formdata"||t==="object"&&Qe(e.toString)&&e.toString()==="[object FormData]"))},Ev=mt("URLSearchParams"),[Cv,jv,_v,Rv]=["ReadableStream","Request","Response","Headers"].map(mt),Pv=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function So(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),mr(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),s=i.length;let l;for(r=0;r<s;r++)l=i[r],t.call(null,e[l],l,e)}}function Ph(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const pn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Th=e=>!co(e)&&e!==pn;function ea(){const{caseless:e}=Th(this)&&this||{},t={},n=(r,o)=>{const i=e&&Ph(t,o)||o;ai(t[i])&&ai(r)?t[i]=ea(t[i],r):ai(r)?t[i]=ea({},r):mr(r)?t[i]=r.slice():t[i]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&So(arguments[r],n);return t}const Tv=(e,t,n,{allOwnKeys:r}={})=>(So(t,(o,i)=>{n&&Qe(o)?e[i]=jh(o,n):e[i]=o},{allOwnKeys:r}),e),Ov=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),$v=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Nv=(e,t,n,r)=>{let o,i,s;const l={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)s=o[i],(!r||r(s,e,t))&&!l[s]&&(t[s]=e[s],l[s]=!0);e=n!==!1&&gu(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Lv=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Av=e=>{if(!e)return null;if(mr(e))return e;let t=e.length;if(!Rh(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},zv=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&gu(Uint8Array)),Mv=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},Iv=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Dv=mt("HTMLFormElement"),Fv=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),Xc=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),bv=mt("RegExp"),Oh=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};So(n,(o,i)=>{let s;(s=t(o,i,e))!==!1&&(r[i]=s||o)}),Object.defineProperties(e,r)},Uv=e=>{Oh(e,(t,n)=>{if(Qe(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(Qe(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},Bv=(e,t)=>{const n={},r=o=>{o.forEach(i=>{n[i]=!0})};return mr(e)?r(e):r(String(e).split(t)),n},Hv=()=>{},Wv=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,Gs="abcdefghijklmnopqrstuvwxyz",Jc="0123456789",$h={DIGIT:Jc,ALPHA:Gs,ALPHA_DIGIT:Gs+Gs.toUpperCase()+Jc},Vv=(e=16,t=$h.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Qv(e){return!!(e&&Qe(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Kv=e=>{const t=new Array(10),n=(r,o)=>{if(ds(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const i=mr(r)?[]:{};return So(r,(s,l)=>{const a=n(s,o+1);!co(a)&&(i[l]=a)}),t[o]=void 0,i}}return r};return n(e,0)},qv=mt("AsyncFunction"),Yv=e=>e&&(ds(e)||Qe(e))&&Qe(e.then)&&Qe(e.catch),Nh=((e,t)=>e?setImmediate:t?((n,r)=>(pn.addEventListener("message",({source:o,data:i})=>{o===pn&&i===n&&r.length&&r.shift()()},!1),o=>{r.push(o),pn.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Qe(pn.postMessage)),Gv=typeof queueMicrotask<"u"?queueMicrotask.bind(pn):typeof process<"u"&&process.nextTick||Nh,E={isArray:mr,isArrayBuffer:_h,isBuffer:pv,isFormData:kv,isArrayBufferView:hv,isString:mv,isNumber:Rh,isBoolean:gv,isObject:ds,isPlainObject:ai,isReadableStream:Cv,isRequest:jv,isResponse:_v,isHeaders:Rv,isUndefined:co,isDate:yv,isFile:vv,isBlob:xv,isRegExp:bv,isFunction:Qe,isStream:Sv,isURLSearchParams:Ev,isTypedArray:zv,isFileList:wv,forEach:So,merge:ea,extend:Tv,trim:Pv,stripBOM:Ov,inherits:$v,toFlatObject:Nv,kindOf:cs,kindOfTest:mt,endsWith:Lv,toArray:Av,forEachEntry:Mv,matchAll:Iv,isHTMLForm:Dv,hasOwnProperty:Xc,hasOwnProp:Xc,reduceDescriptors:Oh,freezeMethods:Uv,toObjectSet:Bv,toCamelCase:Fv,noop:Hv,toFiniteNumber:Wv,findKey:Ph,global:pn,isContextDefined:Th,ALPHABET:$h,generateString:Vv,isSpecCompliantForm:Qv,toJSONObject:Kv,isAsyncFn:qv,isThenable:Yv,setImmediate:Nh,asap:Gv};function I(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o,this.status=o.status?o.status:null)}E.inherits(I,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:E.toJSONObject(this.config),code:this.code,status:this.status}}});const Lh=I.prototype,Ah={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Ah[e]={value:e}});Object.defineProperties(I,Ah);Object.defineProperty(Lh,"isAxiosError",{value:!0});I.from=(e,t,n,r,o,i)=>{const s=Object.create(Lh);return E.toFlatObject(e,s,function(a){return a!==Error.prototype},l=>l!=="isAxiosError"),I.call(s,e.message,t,n,r,o),s.cause=e,s.name=e.name,i&&Object.assign(s,i),s};const Xv=null;function ta(e){return E.isPlainObject(e)||E.isArray(e)}function zh(e){return E.endsWith(e,"[]")?e.slice(0,-2):e}function Zc(e,t,n){return e?e.concat(t).map(function(o,i){return o=zh(o),!n&&i?"["+o+"]":o}).join(n?".":""):t}function Jv(e){return E.isArray(e)&&!e.some(ta)}const Zv=E.toFlatObject(E,{},null,function(t){return/^is[A-Z]/.test(t)});function ps(e,t,n){if(!E.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=E.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(x,C){return!E.isUndefined(C[x])});const r=n.metaTokens,o=n.visitor||c,i=n.dots,s=n.indexes,a=(n.Blob||typeof Blob<"u"&&Blob)&&E.isSpecCompliantForm(t);if(!E.isFunction(o))throw new TypeError("visitor must be a function");function u(y){if(y===null)return"";if(E.isDate(y))return y.toISOString();if(!a&&E.isBlob(y))throw new I("Blob is not supported. Use a Buffer instead.");return E.isArrayBuffer(y)||E.isTypedArray(y)?a&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function c(y,x,C){let h=y;if(y&&!C&&typeof y=="object"){if(E.endsWith(x,"{}"))x=r?x:x.slice(0,-2),y=JSON.stringify(y);else if(E.isArray(y)&&Jv(y)||(E.isFileList(y)||E.endsWith(x,"[]"))&&(h=E.toArray(y)))return x=zh(x),h.forEach(function(g,S){!(E.isUndefined(g)||g===null)&&t.append(s===!0?Zc([x],S,i):s===null?x:x+"[]",u(g))}),!1}return ta(y)?!0:(t.append(Zc(C,x,i),u(y)),!1)}const d=[],m=Object.assign(Zv,{defaultVisitor:c,convertValue:u,isVisitable:ta});function w(y,x){if(!E.isUndefined(y)){if(d.indexOf(y)!==-1)throw Error("Circular reference detected in "+x.join("."));d.push(y),E.forEach(y,function(h,p){(!(E.isUndefined(h)||h===null)&&o.call(t,h,E.isString(p)?p.trim():p,x,m))===!0&&w(h,x?x.concat(p):[p])}),d.pop()}}if(!E.isObject(e))throw new TypeError("data must be an object");return w(e),t}function ef(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function yu(e,t){this._pairs=[],e&&ps(e,this,t)}const Mh=yu.prototype;Mh.append=function(t,n){this._pairs.push([t,n])};Mh.toString=function(t){const n=t?function(r){return t.call(this,r,ef)}:ef;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function e1(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ih(e,t,n){if(!t)return e;const r=n&&n.encode||e1,o=n&&n.serialize;let i;if(o?i=o(t,n):i=E.isURLSearchParams(t)?t.toString():new yu(t,n).toString(r),i){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class tf{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){E.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Dh={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},t1=typeof URLSearchParams<"u"?URLSearchParams:yu,n1=typeof FormData<"u"?FormData:null,r1=typeof Blob<"u"?Blob:null,o1={isBrowser:!0,classes:{URLSearchParams:t1,FormData:n1,Blob:r1},protocols:["http","https","file","blob","url","data"]},vu=typeof window<"u"&&typeof document<"u",na=typeof navigator=="object"&&navigator||void 0,i1=vu&&(!na||["ReactNative","NativeScript","NS"].indexOf(na.product)<0),s1=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",l1=vu&&window.location.href||"http://localhost",a1=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:vu,hasStandardBrowserEnv:i1,hasStandardBrowserWebWorkerEnv:s1,navigator:na,origin:l1},Symbol.toStringTag,{value:"Module"})),Fe={...a1,...o1};function u1(e,t){return ps(e,new Fe.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,i){return Fe.isNode&&E.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function c1(e){return E.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function f1(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function Fh(e){function t(n,r,o,i){let s=n[i++];if(s==="__proto__")return!0;const l=Number.isFinite(+s),a=i>=n.length;return s=!s&&E.isArray(o)?o.length:s,a?(E.hasOwnProp(o,s)?o[s]=[o[s],r]:o[s]=r,!l):((!o[s]||!E.isObject(o[s]))&&(o[s]=[]),t(n,r,o[s],i)&&E.isArray(o[s])&&(o[s]=f1(o[s])),!l)}if(E.isFormData(e)&&E.isFunction(e.entries)){const n={};return E.forEachEntry(e,(r,o)=>{t(c1(r),o,n,0)}),n}return null}function d1(e,t,n){if(E.isString(e))try{return(t||JSON.parse)(e),E.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(0,JSON.stringify)(e)}const ko={transitional:Dh,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,i=E.isObject(t);if(i&&E.isHTMLForm(t)&&(t=new FormData(t)),E.isFormData(t))return o?JSON.stringify(Fh(t)):t;if(E.isArrayBuffer(t)||E.isBuffer(t)||E.isStream(t)||E.isFile(t)||E.isBlob(t)||E.isReadableStream(t))return t;if(E.isArrayBufferView(t))return t.buffer;if(E.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return u1(t,this.formSerializer).toString();if((l=E.isFileList(t))||r.indexOf("multipart/form-data")>-1){const a=this.env&&this.env.FormData;return ps(l?{"files[]":t}:t,a&&new a,this.formSerializer)}}return i||o?(n.setContentType("application/json",!1),d1(t)):t}],transformResponse:[function(t){const n=this.transitional||ko.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(E.isResponse(t)||E.isReadableStream(t))return t;if(t&&E.isString(t)&&(r&&!this.responseType||o)){const s=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(l){if(s)throw l.name==="SyntaxError"?I.from(l,I.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Fe.classes.FormData,Blob:Fe.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};E.forEach(["delete","get","head","post","put","patch"],e=>{ko.headers[e]={}});const p1=E.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),h1=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(s){o=s.indexOf(":"),n=s.substring(0,o).trim().toLowerCase(),r=s.substring(o+1).trim(),!(!n||t[n]&&p1[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},nf=Symbol("internals");function _r(e){return e&&String(e).trim().toLowerCase()}function ui(e){return e===!1||e==null?e:E.isArray(e)?e.map(ui):String(e)}function m1(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const g1=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Xs(e,t,n,r,o){if(E.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!E.isString(t)){if(E.isString(r))return t.indexOf(r)!==-1;if(E.isRegExp(r))return r.test(t)}}function y1(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function v1(e,t){const n=E.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,i,s){return this[r].call(this,t,o,i,s)},configurable:!0})})}class be{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function i(l,a,u){const c=_r(a);if(!c)throw new Error("header name must be a non-empty string");const d=E.findKey(o,c);(!d||o[d]===void 0||u===!0||u===void 0&&o[d]!==!1)&&(o[d||a]=ui(l))}const s=(l,a)=>E.forEach(l,(u,c)=>i(u,c,a));if(E.isPlainObject(t)||t instanceof this.constructor)s(t,n);else if(E.isString(t)&&(t=t.trim())&&!g1(t))s(h1(t),n);else if(E.isHeaders(t))for(const[l,a]of t.entries())i(a,l,r);else t!=null&&i(n,t,r);return this}get(t,n){if(t=_r(t),t){const r=E.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return m1(o);if(E.isFunction(n))return n.call(this,o,r);if(E.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=_r(t),t){const r=E.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Xs(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function i(s){if(s=_r(s),s){const l=E.findKey(r,s);l&&(!n||Xs(r,r[l],l,n))&&(delete r[l],o=!0)}}return E.isArray(t)?t.forEach(i):i(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const i=n[r];(!t||Xs(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const n=this,r={};return E.forEach(this,(o,i)=>{const s=E.findKey(r,i);if(s){n[s]=ui(o),delete n[i];return}const l=t?y1(i):String(i).trim();l!==i&&delete n[i],n[l]=ui(o),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return E.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&E.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[nf]=this[nf]={accessors:{}}).accessors,o=this.prototype;function i(s){const l=_r(s);r[l]||(v1(o,s),r[l]=!0)}return E.isArray(t)?t.forEach(i):i(t),this}}be.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);E.reduceDescriptors(be.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});E.freezeMethods(be);function Js(e,t){const n=this||ko,r=t||n,o=be.from(r.headers);let i=r.data;return E.forEach(e,function(l){i=l.call(n,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function bh(e){return!!(e&&e.__CANCEL__)}function gr(e,t,n){I.call(this,e??"canceled",I.ERR_CANCELED,t,n),this.name="CanceledError"}E.inherits(gr,I,{__CANCEL__:!0});function Uh(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new I("Request failed with status code "+n.status,[I.ERR_BAD_REQUEST,I.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function x1(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function w1(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,i=0,s;return t=t!==void 0?t:1e3,function(a){const u=Date.now(),c=r[i];s||(s=u),n[o]=a,r[o]=u;let d=i,m=0;for(;d!==o;)m+=n[d++],d=d%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),u-s<t)return;const w=c&&u-c;return w?Math.round(m*1e3/w):void 0}}function S1(e,t){let n=0,r=1e3/t,o,i;const s=(u,c=Date.now())=>{n=c,o=null,i&&(clearTimeout(i),i=null),e.apply(null,u)};return[(...u)=>{const c=Date.now(),d=c-n;d>=r?s(u,c):(o=u,i||(i=setTimeout(()=>{i=null,s(o)},r-d)))},()=>o&&s(o)]}const Ui=(e,t,n=3)=>{let r=0;const o=w1(50,250);return S1(i=>{const s=i.loaded,l=i.lengthComputable?i.total:void 0,a=s-r,u=o(a),c=s<=l;r=s;const d={loaded:s,total:l,progress:l?s/l:void 0,bytes:a,rate:u||void 0,estimated:u&&l&&c?(l-s)/u:void 0,event:i,lengthComputable:l!=null,[t?"download":"upload"]:!0};e(d)},n)},rf=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},of=e=>(...t)=>E.asap(()=>e(...t)),k1=Fe.hasStandardBrowserEnv?function(){const t=Fe.navigator&&/(msie|trident)/i.test(Fe.navigator.userAgent),n=document.createElement("a");let r;function o(i){let s=i;return t&&(n.setAttribute("href",s),s=n.href),n.setAttribute("href",s),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(s){const l=E.isString(s)?o(s):s;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}(),E1=Fe.hasStandardBrowserEnv?{write(e,t,n,r,o,i){const s=[e+"="+encodeURIComponent(t)];E.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),E.isString(r)&&s.push("path="+r),E.isString(o)&&s.push("domain="+o),i===!0&&s.push("secure"),document.cookie=s.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function C1(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function j1(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Bh(e,t){return e&&!C1(t)?j1(e,t):t}const sf=e=>e instanceof be?{...e}:e;function _n(e,t){t=t||{};const n={};function r(u,c,d){return E.isPlainObject(u)&&E.isPlainObject(c)?E.merge.call({caseless:d},u,c):E.isPlainObject(c)?E.merge({},c):E.isArray(c)?c.slice():c}function o(u,c,d){if(E.isUndefined(c)){if(!E.isUndefined(u))return r(void 0,u,d)}else return r(u,c,d)}function i(u,c){if(!E.isUndefined(c))return r(void 0,c)}function s(u,c){if(E.isUndefined(c)){if(!E.isUndefined(u))return r(void 0,u)}else return r(void 0,c)}function l(u,c,d){if(d in t)return r(u,c);if(d in e)return r(void 0,u)}const a={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:l,headers:(u,c)=>o(sf(u),sf(c),!0)};return E.forEach(Object.keys(Object.assign({},e,t)),function(c){const d=a[c]||o,m=d(e[c],t[c],c);E.isUndefined(m)&&d!==l||(n[c]=m)}),n}const Hh=e=>{const t=_n({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:o,xsrfCookieName:i,headers:s,auth:l}=t;t.headers=s=be.from(s),t.url=Ih(Bh(t.baseURL,t.url),e.params,e.paramsSerializer),l&&s.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):"")));let a;if(E.isFormData(n)){if(Fe.hasStandardBrowserEnv||Fe.hasStandardBrowserWebWorkerEnv)s.setContentType(void 0);else if((a=s.getContentType())!==!1){const[u,...c]=a?a.split(";").map(d=>d.trim()).filter(Boolean):[];s.setContentType([u||"multipart/form-data",...c].join("; "))}}if(Fe.hasStandardBrowserEnv&&(r&&E.isFunction(r)&&(r=r(t)),r||r!==!1&&k1(t.url))){const u=o&&i&&E1.read(i);u&&s.set(o,u)}return t},_1=typeof XMLHttpRequest<"u",R1=_1&&function(e){return new Promise(function(n,r){const o=Hh(e);let i=o.data;const s=be.from(o.headers).normalize();let{responseType:l,onUploadProgress:a,onDownloadProgress:u}=o,c,d,m,w,y;function x(){w&&w(),y&&y(),o.cancelToken&&o.cancelToken.unsubscribe(c),o.signal&&o.signal.removeEventListener("abort",c)}let C=new XMLHttpRequest;C.open(o.method.toUpperCase(),o.url,!0),C.timeout=o.timeout;function h(){if(!C)return;const g=be.from("getAllResponseHeaders"in C&&C.getAllResponseHeaders()),_={data:!l||l==="text"||l==="json"?C.responseText:C.response,status:C.status,statusText:C.statusText,headers:g,config:e,request:C};Uh(function(j){n(j),x()},function(j){r(j),x()},_),C=null}"onloadend"in C?C.onloadend=h:C.onreadystatechange=function(){!C||C.readyState!==4||C.status===0&&!(C.responseURL&&C.responseURL.indexOf("file:")===0)||setTimeout(h)},C.onabort=function(){C&&(r(new I("Request aborted",I.ECONNABORTED,e,C)),C=null)},C.onerror=function(){r(new I("Network Error",I.ERR_NETWORK,e,C)),C=null},C.ontimeout=function(){let S=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const _=o.transitional||Dh;o.timeoutErrorMessage&&(S=o.timeoutErrorMessage),r(new I(S,_.clarifyTimeoutError?I.ETIMEDOUT:I.ECONNABORTED,e,C)),C=null},i===void 0&&s.setContentType(null),"setRequestHeader"in C&&E.forEach(s.toJSON(),function(S,_){C.setRequestHeader(_,S)}),E.isUndefined(o.withCredentials)||(C.withCredentials=!!o.withCredentials),l&&l!=="json"&&(C.responseType=o.responseType),u&&([m,y]=Ui(u,!0),C.addEventListener("progress",m)),a&&C.upload&&([d,w]=Ui(a),C.upload.addEventListener("progress",d),C.upload.addEventListener("loadend",w)),(o.cancelToken||o.signal)&&(c=g=>{C&&(r(!g||g.type?new gr(null,e,C):g),C.abort(),C=null)},o.cancelToken&&o.cancelToken.subscribe(c),o.signal&&(o.signal.aborted?c():o.signal.addEventListener("abort",c)));const p=x1(o.url);if(p&&Fe.protocols.indexOf(p)===-1){r(new I("Unsupported protocol "+p+":",I.ERR_BAD_REQUEST,e));return}C.send(i||null)})},P1=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,o;const i=function(u){if(!o){o=!0,l();const c=u instanceof Error?u:this.reason;r.abort(c instanceof I?c:new gr(c instanceof Error?c.message:c))}};let s=t&&setTimeout(()=>{s=null,i(new I(`timeout ${t} of ms exceeded`,I.ETIMEDOUT))},t);const l=()=>{e&&(s&&clearTimeout(s),s=null,e.forEach(u=>{u.unsubscribe?u.unsubscribe(i):u.removeEventListener("abort",i)}),e=null)};e.forEach(u=>u.addEventListener("abort",i));const{signal:a}=r;return a.unsubscribe=()=>E.asap(l),a}},T1=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,o;for(;r<n;)o=r+t,yield e.slice(r,o),r=o},O1=async function*(e,t){for await(const n of $1(e))yield*T1(n,t)},$1=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},lf=(e,t,n,r)=>{const o=O1(e,t);let i=0,s,l=a=>{s||(s=!0,r&&r(a))};return new ReadableStream({async pull(a){try{const{done:u,value:c}=await o.next();if(u){l(),a.close();return}let d=c.byteLength;if(n){let m=i+=d;n(m)}a.enqueue(new Uint8Array(c))}catch(u){throw l(u),u}},cancel(a){return l(a),o.return()}},{highWaterMark:2})},hs=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Wh=hs&&typeof ReadableStream=="function",N1=hs&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),Vh=(e,...t)=>{try{return!!e(...t)}catch{return!1}},L1=Wh&&Vh(()=>{let e=!1;const t=new Request(Fe.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),af=64*1024,ra=Wh&&Vh(()=>E.isReadableStream(new Response("").body)),Bi={stream:ra&&(e=>e.body)};hs&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!Bi[t]&&(Bi[t]=E.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new I(`Response type '${t}' is not supported`,I.ERR_NOT_SUPPORT,r)})})})(new Response);const A1=async e=>{if(e==null)return 0;if(E.isBlob(e))return e.size;if(E.isSpecCompliantForm(e))return(await new Request(Fe.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(E.isArrayBufferView(e)||E.isArrayBuffer(e))return e.byteLength;if(E.isURLSearchParams(e)&&(e=e+""),E.isString(e))return(await N1(e)).byteLength},z1=async(e,t)=>{const n=E.toFiniteNumber(e.getContentLength());return n??A1(t)},M1=hs&&(async e=>{let{url:t,method:n,data:r,signal:o,cancelToken:i,timeout:s,onDownloadProgress:l,onUploadProgress:a,responseType:u,headers:c,withCredentials:d="same-origin",fetchOptions:m}=Hh(e);u=u?(u+"").toLowerCase():"text";let w=P1([o,i&&i.toAbortSignal()],s),y;const x=w&&w.unsubscribe&&(()=>{w.unsubscribe()});let C;try{if(a&&L1&&n!=="get"&&n!=="head"&&(C=await z1(c,r))!==0){let _=new Request(t,{method:"POST",body:r,duplex:"half"}),k;if(E.isFormData(r)&&(k=_.headers.get("content-type"))&&c.setContentType(k),_.body){const[j,P]=rf(C,Ui(of(a)));r=lf(_.body,af,j,P)}}E.isString(d)||(d=d?"include":"omit");const h="credentials"in Request.prototype;y=new Request(t,{...m,signal:w,method:n.toUpperCase(),headers:c.normalize().toJSON(),body:r,duplex:"half",credentials:h?d:void 0});let p=await fetch(y);const g=ra&&(u==="stream"||u==="response");if(ra&&(l||g&&x)){const _={};["status","statusText","headers"].forEach(b=>{_[b]=p[b]});const k=E.toFiniteNumber(p.headers.get("content-length")),[j,P]=l&&rf(k,Ui(of(l),!0))||[];p=new Response(lf(p.body,af,j,()=>{P&&P(),x&&x()}),_)}u=u||"text";let S=await Bi[E.findKey(Bi,u)||"text"](p,e);return!g&&x&&x(),await new Promise((_,k)=>{Uh(_,k,{data:S,headers:be.from(p.headers),status:p.status,statusText:p.statusText,config:e,request:y})})}catch(h){throw x&&x(),h&&h.name==="TypeError"&&/fetch/i.test(h.message)?Object.assign(new I("Network Error",I.ERR_NETWORK,e,y),{cause:h.cause||h}):I.from(h,h&&h.code,e,y)}}),oa={http:Xv,xhr:R1,fetch:M1};E.forEach(oa,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const uf=e=>`- ${e}`,I1=e=>E.isFunction(e)||e===null||e===!1,Qh={getAdapter:e=>{e=E.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let i=0;i<t;i++){n=e[i];let s;if(r=n,!I1(n)&&(r=oa[(s=String(n)).toLowerCase()],r===void 0))throw new I(`Unknown adapter '${s}'`);if(r)break;o[s||"#"+i]=r}if(!r){const i=Object.entries(o).map(([l,a])=>`adapter ${l} `+(a===!1?"is not supported by the environment":"is not available in the build"));let s=t?i.length>1?`since :
`+i.map(uf).join(`
`):" "+uf(i[0]):"as no adapter specified";throw new I("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return r},adapters:oa};function Zs(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new gr(null,e)}function cf(e){return Zs(e),e.headers=be.from(e.headers),e.data=Js.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Qh.getAdapter(e.adapter||ko.adapter)(e).then(function(r){return Zs(e),r.data=Js.call(e,e.transformResponse,r),r.headers=be.from(r.headers),r},function(r){return bh(r)||(Zs(e),r&&r.response&&(r.response.data=Js.call(e,e.transformResponse,r.response),r.response.headers=be.from(r.response.headers))),Promise.reject(r)})}const Kh="1.7.7",xu={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{xu[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const ff={};xu.transitional=function(t,n,r){function o(i,s){return"[Axios v"+Kh+"] Transitional option '"+i+"'"+s+(r?". "+r:"")}return(i,s,l)=>{if(t===!1)throw new I(o(s," has been removed"+(n?" in "+n:"")),I.ERR_DEPRECATED);return n&&!ff[s]&&(ff[s]=!0,console.warn(o(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,s,l):!0}};function D1(e,t,n){if(typeof e!="object")throw new I("options must be an object",I.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const i=r[o],s=t[i];if(s){const l=e[i],a=l===void 0||s(l,i,e);if(a!==!0)throw new I("option "+i+" must be "+a,I.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new I("Unknown option "+i,I.ERR_BAD_OPTION)}}const ia={assertOptions:D1,validators:xu},Dt=ia.validators;class yn{constructor(t){this.defaults=t,this.interceptors={request:new tf,response:new tf}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let o;Error.captureStackTrace?Error.captureStackTrace(o={}):o=new Error;const i=o.stack?o.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=_n(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:i}=n;r!==void 0&&ia.assertOptions(r,{silentJSONParsing:Dt.transitional(Dt.boolean),forcedJSONParsing:Dt.transitional(Dt.boolean),clarifyTimeoutError:Dt.transitional(Dt.boolean)},!1),o!=null&&(E.isFunction(o)?n.paramsSerializer={serialize:o}:ia.assertOptions(o,{encode:Dt.function,serialize:Dt.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s=i&&E.merge(i.common,i[n.method]);i&&E.forEach(["delete","get","head","post","put","patch","common"],y=>{delete i[y]}),n.headers=be.concat(s,i);const l=[];let a=!0;this.interceptors.request.forEach(function(x){typeof x.runWhen=="function"&&x.runWhen(n)===!1||(a=a&&x.synchronous,l.unshift(x.fulfilled,x.rejected))});const u=[];this.interceptors.response.forEach(function(x){u.push(x.fulfilled,x.rejected)});let c,d=0,m;if(!a){const y=[cf.bind(this),void 0];for(y.unshift.apply(y,l),y.push.apply(y,u),m=y.length,c=Promise.resolve(n);d<m;)c=c.then(y[d++],y[d++]);return c}m=l.length;let w=n;for(d=0;d<m;){const y=l[d++],x=l[d++];try{w=y(w)}catch(C){x.call(this,C);break}}try{c=cf.call(this,w)}catch(y){return Promise.reject(y)}for(d=0,m=u.length;d<m;)c=c.then(u[d++],u[d++]);return c}getUri(t){t=_n(this.defaults,t);const n=Bh(t.baseURL,t.url);return Ih(n,t.params,t.paramsSerializer)}}E.forEach(["delete","get","head","options"],function(t){yn.prototype[t]=function(n,r){return this.request(_n(r||{},{method:t,url:n,data:(r||{}).data}))}});E.forEach(["post","put","patch"],function(t){function n(r){return function(i,s,l){return this.request(_n(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:s}))}}yn.prototype[t]=n(),yn.prototype[t+"Form"]=n(!0)});class wu{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(o=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](o);r._listeners=null}),this.promise.then=o=>{let i;const s=new Promise(l=>{r.subscribe(l),i=l}).then(o);return s.cancel=function(){r.unsubscribe(i)},s},t(function(i,s,l){r.reason||(r.reason=new gr(i,s,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new wu(function(o){t=o}),cancel:t}}}function F1(e){return function(n){return e.apply(null,n)}}function b1(e){return E.isObject(e)&&e.isAxiosError===!0}const sa={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(sa).forEach(([e,t])=>{sa[t]=e});function qh(e){const t=new yn(e),n=jh(yn.prototype.request,t);return E.extend(n,yn.prototype,t,{allOwnKeys:!0}),E.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return qh(_n(e,o))},n}const B=qh(ko);B.Axios=yn;B.CanceledError=gr;B.CancelToken=wu;B.isCancel=bh;B.VERSION=Kh;B.toFormData=ps;B.AxiosError=I;B.Cancel=B.CanceledError;B.all=function(t){return Promise.all(t)};B.spread=F1;B.isAxiosError=b1;B.mergeConfig=_n;B.AxiosHeaders=be;B.formToJSON=e=>Fh(E.isHTMLForm(e)?new FormData(e):e);B.getAdapter=Qh.getAdapter;B.HttpStatusCode=sa;B.default=B;/*! js-cookie v3.0.5 | MIT */function Wo(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)e[r]=n[r]}return e}var U1={read:function(e){return e[0]==='"'&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}};function la(e,t){function n(o,i,s){if(!(typeof document>"u")){s=Wo({},t,s),typeof s.expires=="number"&&(s.expires=new Date(Date.now()+s.expires*864e5)),s.expires&&(s.expires=s.expires.toUTCString()),o=encodeURIComponent(o).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var l="";for(var a in s)s[a]&&(l+="; "+a,s[a]!==!0&&(l+="="+s[a].split(";")[0]));return document.cookie=o+"="+e.write(i,o)+l}}function r(o){if(!(typeof document>"u"||arguments.length&&!o)){for(var i=document.cookie?document.cookie.split("; "):[],s={},l=0;l<i.length;l++){var a=i[l].split("="),u=a.slice(1).join("=");try{var c=decodeURIComponent(a[0]);if(s[c]=e.read(u,c),o===c)break}catch{}}return o?s[o]:s}}return Object.create({set:n,get:r,remove:function(o,i){n(o,"",Wo({},i,{expires:-1}))},withAttributes:function(o){return la(this.converter,Wo({},this.attributes,o))},withConverter:function(o){return la(Wo({},this.converter,o),this.attributes)}},{attributes:{value:Object.freeze(t)},converter:{value:Object.freeze(e)}})}var le=la(U1,{path:"/"});const ge="https://oncolympics-api.onrender.com/api",_e={login:`${ge}/users/login`,userInfo:`${ge}/users/userInfo`,allmatches:`${ge}/standings/all-matches`,matchdetails:`${ge}/standings/matchdetails`,groups:`${ge}/groups`,playermatch:`${ge}/match/playermatch`,answer:`${ge}/match/answer`,matchscores:`${ge}/match/matchscores`,questionanswers:`${ge}/match/questionanswers`,moderatormatch:`${ge}/match/moderatormatch`,startmatch:`${ge}/match/startmatch`,nextquestion:`${ge}/match/nextquestion`,endmatch:`${ge}/match/endmatch`,stopanswer:`${ge}/match/stopanswer`,resetmatch:`${ge}/match/resetmatch`,reward:`${ge}/match/reward`,penalty:`${ge}/match/penalty`},B1=async(e,t)=>{try{const n=await B.post(_e.login,{username:e,password:t});if(n.data.status===200){const{token:r,role:o}=n.data.data;le.set("token",r),le.set("username",e),le.set("role",o)}return n==null?void 0:n.data}catch(n){return console.log(n),""}},H1=async()=>{try{if(le.get("token")){const e=await B.get(_e.userInfo,{headers:{token:le.get("token")}});return e==null?void 0:e.data}else return""}catch(e){return console.log(e),""}},Yh=e=>{const t=e==="Admin",n=e==="Team",r=[{label:"Groups",route:"/groups"},{label:"Schedule",route:"/schedule"},{label:"Knockouts",route:"/knockouts"}];return t&&r.push({label:"Moderator",route:"/matchmoderator"}),n&&r.push({label:"Your Match",route:"/yourmatch"}),r};var ze=function(){return ze=Object.assign||function(t){for(var n,r=1,o=arguments.length;r<o;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},ze.apply(this,arguments)};function fo(e,t,n){if(n||arguments.length===2)for(var r=0,o=t.length,i;r<o;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var Y="-ms-",Qr="-moz-",W="-webkit-",Gh="comm",ms="rule",Su="decl",W1="@import",Xh="@keyframes",V1="@layer",Jh=Math.abs,ku=String.fromCharCode,aa=Object.assign;function Q1(e,t){return he(e,0)^45?(((t<<2^he(e,0))<<2^he(e,1))<<2^he(e,2))<<2^he(e,3):0}function Zh(e){return e.trim()}function jt(e,t){return(e=t.exec(e))?e[0]:e}function F(e,t,n){return e.replace(t,n)}function ci(e,t,n){return e.indexOf(t,n)}function he(e,t){return e.charCodeAt(t)|0}function ir(e,t,n){return e.slice(t,n)}function xt(e){return e.length}function em(e){return e.length}function Mr(e,t){return t.push(e),e}function K1(e,t){return e.map(t).join("")}function df(e,t){return e.filter(function(n){return!jt(n,t)})}var gs=1,sr=1,tm=0,rt=0,ie=0,yr="";function ys(e,t,n,r,o,i,s,l){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:gs,column:sr,length:s,return:"",siblings:l}}function Ft(e,t){return aa(ys("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function On(e){for(;e.root;)e=Ft(e.root,{children:[e]});Mr(e,e.siblings)}function q1(){return ie}function Y1(){return ie=rt>0?he(yr,--rt):0,sr--,ie===10&&(sr=1,gs--),ie}function pt(){return ie=rt<tm?he(yr,rt++):0,sr++,ie===10&&(sr=1,gs++),ie}function vn(){return he(yr,rt)}function fi(){return rt}function vs(e,t){return ir(yr,e,t)}function ua(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function G1(e){return gs=sr=1,tm=xt(yr=e),rt=0,[]}function X1(e){return yr="",e}function el(e){return Zh(vs(rt-1,ca(e===91?e+2:e===40?e+1:e)))}function J1(e){for(;(ie=vn())&&ie<33;)pt();return ua(e)>2||ua(ie)>3?"":" "}function Z1(e,t){for(;--t&&pt()&&!(ie<48||ie>102||ie>57&&ie<65||ie>70&&ie<97););return vs(e,fi()+(t<6&&vn()==32&&pt()==32))}function ca(e){for(;pt();)switch(ie){case e:return rt;case 34:case 39:e!==34&&e!==39&&ca(ie);break;case 40:e===41&&ca(e);break;case 92:pt();break}return rt}function ex(e,t){for(;pt()&&e+ie!==57;)if(e+ie===84&&vn()===47)break;return"/*"+vs(t,rt-1)+"*"+ku(e===47?e:pt())}function tx(e){for(;!ua(vn());)pt();return vs(e,rt)}function nx(e){return X1(di("",null,null,null,[""],e=G1(e),0,[0],e))}function di(e,t,n,r,o,i,s,l,a){for(var u=0,c=0,d=s,m=0,w=0,y=0,x=1,C=1,h=1,p=0,g="",S=o,_=i,k=r,j=g;C;)switch(y=p,p=pt()){case 40:if(y!=108&&he(j,d-1)==58){ci(j+=F(el(p),"&","&\f"),"&\f",Jh(u?l[u-1]:0))!=-1&&(h=-1);break}case 34:case 39:case 91:j+=el(p);break;case 9:case 10:case 13:case 32:j+=J1(y);break;case 92:j+=Z1(fi()-1,7);continue;case 47:switch(vn()){case 42:case 47:Mr(rx(ex(pt(),fi()),t,n,a),a);break;default:j+="/"}break;case 123*x:l[u++]=xt(j)*h;case 125*x:case 59:case 0:switch(p){case 0:case 125:C=0;case 59+c:h==-1&&(j=F(j,/\f/g,"")),w>0&&xt(j)-d&&Mr(w>32?hf(j+";",r,n,d-1,a):hf(F(j," ","")+";",r,n,d-2,a),a);break;case 59:j+=";";default:if(Mr(k=pf(j,t,n,u,c,o,l,g,S=[],_=[],d,i),i),p===123)if(c===0)di(j,t,k,k,S,i,d,l,_);else switch(m===99&&he(j,3)===110?100:m){case 100:case 108:case 109:case 115:di(e,k,k,r&&Mr(pf(e,k,k,0,0,o,l,g,o,S=[],d,_),_),o,_,d,l,r?S:_);break;default:di(j,k,k,k,[""],_,0,l,_)}}u=c=w=0,x=h=1,g=j="",d=s;break;case 58:d=1+xt(j),w=y;default:if(x<1){if(p==123)--x;else if(p==125&&x++==0&&Y1()==125)continue}switch(j+=ku(p),p*x){case 38:h=c>0?1:(j+="\f",-1);break;case 44:l[u++]=(xt(j)-1)*h,h=1;break;case 64:vn()===45&&(j+=el(pt())),m=vn(),c=d=xt(g=j+=tx(fi())),p++;break;case 45:y===45&&xt(j)==2&&(x=0)}}return i}function pf(e,t,n,r,o,i,s,l,a,u,c,d){for(var m=o-1,w=o===0?i:[""],y=em(w),x=0,C=0,h=0;x<r;++x)for(var p=0,g=ir(e,m+1,m=Jh(C=s[x])),S=e;p<y;++p)(S=Zh(C>0?w[p]+" "+g:F(g,/&\f/g,w[p])))&&(a[h++]=S);return ys(e,t,n,o===0?ms:l,a,u,c,d)}function rx(e,t,n,r){return ys(e,t,n,Gh,ku(q1()),ir(e,2,-2),0,r)}function hf(e,t,n,r,o){return ys(e,t,n,Su,ir(e,0,r),ir(e,r+1,-1),r,o)}function nm(e,t,n){switch(Q1(e,t)){case 5103:return W+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return W+e+e;case 4789:return Qr+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return W+e+Qr+e+Y+e+e;case 5936:switch(he(e,t+11)){case 114:return W+e+Y+F(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return W+e+Y+F(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return W+e+Y+F(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return W+e+Y+e+e;case 6165:return W+e+Y+"flex-"+e+e;case 5187:return W+e+F(e,/(\w+).+(:[^]+)/,W+"box-$1$2"+Y+"flex-$1$2")+e;case 5443:return W+e+Y+"flex-item-"+F(e,/flex-|-self/g,"")+(jt(e,/flex-|baseline/)?"":Y+"grid-row-"+F(e,/flex-|-self/g,""))+e;case 4675:return W+e+Y+"flex-line-pack"+F(e,/align-content|flex-|-self/g,"")+e;case 5548:return W+e+Y+F(e,"shrink","negative")+e;case 5292:return W+e+Y+F(e,"basis","preferred-size")+e;case 6060:return W+"box-"+F(e,"-grow","")+W+e+Y+F(e,"grow","positive")+e;case 4554:return W+F(e,/([^-])(transform)/g,"$1"+W+"$2")+e;case 6187:return F(F(F(e,/(zoom-|grab)/,W+"$1"),/(image-set)/,W+"$1"),e,"")+e;case 5495:case 3959:return F(e,/(image-set\([^]*)/,W+"$1$`$1");case 4968:return F(F(e,/(.+:)(flex-)?(.*)/,W+"box-pack:$3"+Y+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+W+e+e;case 4200:if(!jt(e,/flex-|baseline/))return Y+"grid-column-align"+ir(e,t)+e;break;case 2592:case 3360:return Y+F(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,o){return t=o,jt(r.props,/grid-\w+-end/)})?~ci(e+(n=n[t].value),"span",0)?e:Y+F(e,"-start","")+e+Y+"grid-row-span:"+(~ci(n,"span",0)?jt(n,/\d+/):+jt(n,/\d+/)-+jt(e,/\d+/))+";":Y+F(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return jt(r.props,/grid-\w+-start/)})?e:Y+F(F(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return F(e,/(.+)-inline(.+)/,W+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(xt(e)-1-t>6)switch(he(e,t+1)){case 109:if(he(e,t+4)!==45)break;case 102:return F(e,/(.+:)(.+)-([^]+)/,"$1"+W+"$2-$3$1"+Qr+(he(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~ci(e,"stretch",0)?nm(F(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return F(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,o,i,s,l,a,u){return Y+o+":"+i+u+(s?Y+o+"-span:"+(l?a:+a-+i)+u:"")+e});case 4949:if(he(e,t+6)===121)return F(e,":",":"+W)+e;break;case 6444:switch(he(e,he(e,14)===45?18:11)){case 120:return F(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+W+(he(e,14)===45?"inline-":"")+"box$3$1"+W+"$2$3$1"+Y+"$2box$3")+e;case 100:return F(e,":",":"+Y)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return F(e,"scroll-","scroll-snap-")+e}return e}function Hi(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function ox(e,t,n,r){switch(e.type){case V1:if(e.children.length)break;case W1:case Su:return e.return=e.return||e.value;case Gh:return"";case Xh:return e.return=e.value+"{"+Hi(e.children,r)+"}";case ms:if(!xt(e.value=e.props.join(",")))return""}return xt(n=Hi(e.children,r))?e.return=e.value+"{"+n+"}":""}function ix(e){var t=em(e);return function(n,r,o,i){for(var s="",l=0;l<t;l++)s+=e[l](n,r,o,i)||"";return s}}function sx(e){return function(t){t.root||(t=t.return)&&e(t)}}function lx(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Su:e.return=nm(e.value,e.length,n);return;case Xh:return Hi([Ft(e,{value:F(e.value,"@","@"+W)})],r);case ms:if(e.length)return K1(n=e.props,function(o){switch(jt(o,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":On(Ft(e,{props:[F(o,/:(read-\w+)/,":"+Qr+"$1")]})),On(Ft(e,{props:[o]})),aa(e,{props:df(n,r)});break;case"::placeholder":On(Ft(e,{props:[F(o,/:(plac\w+)/,":"+W+"input-$1")]})),On(Ft(e,{props:[F(o,/:(plac\w+)/,":"+Qr+"$1")]})),On(Ft(e,{props:[F(o,/:(plac\w+)/,Y+"input-$1")]})),On(Ft(e,{props:[o]})),aa(e,{props:df(n,r)});break}return""})}}var ax={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Be={},lr=typeof process<"u"&&Be!==void 0&&(Be.REACT_APP_SC_ATTR||Be.SC_ATTR)||"data-styled",rm="active",om="data-styled-version",xs="6.1.13",Eu=`/*!sc*/
`,Wi=typeof window<"u"&&"HTMLElement"in window,ux=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Be!==void 0&&Be.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Be.REACT_APP_SC_DISABLE_SPEEDY!==""?Be.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Be.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Be!==void 0&&Be.SC_DISABLE_SPEEDY!==void 0&&Be.SC_DISABLE_SPEEDY!==""&&Be.SC_DISABLE_SPEEDY!=="false"&&Be.SC_DISABLE_SPEEDY),ws=Object.freeze([]),ar=Object.freeze({});function cx(e,t,n){return n===void 0&&(n=ar),e.theme!==n.theme&&e.theme||t||n.theme}var im=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),fx=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,dx=/(^-|-$)/g;function mf(e){return e.replace(fx,"-").replace(dx,"")}var px=/(a)(d)/gi,Vo=52,gf=function(e){return String.fromCharCode(e+(e>25?39:97))};function fa(e){var t,n="";for(t=Math.abs(e);t>Vo;t=t/Vo|0)n=gf(t%Vo)+n;return(gf(t%Vo)+n).replace(px,"$1-$2")}var tl,sm=5381,Hn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},lm=function(e){return Hn(sm,e)};function am(e){return fa(lm(e)>>>0)}function hx(e){return e.displayName||e.name||"Component"}function nl(e){return typeof e=="string"&&!0}var um=typeof Symbol=="function"&&Symbol.for,cm=um?Symbol.for("react.memo"):60115,mx=um?Symbol.for("react.forward_ref"):60112,gx={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},yx={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},fm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},vx=((tl={})[mx]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},tl[cm]=fm,tl);function yf(e){return("type"in(t=e)&&t.type.$$typeof)===cm?fm:"$$typeof"in e?vx[e.$$typeof]:gx;var t}var xx=Object.defineProperty,wx=Object.getOwnPropertyNames,vf=Object.getOwnPropertySymbols,Sx=Object.getOwnPropertyDescriptor,kx=Object.getPrototypeOf,xf=Object.prototype;function dm(e,t,n){if(typeof t!="string"){if(xf){var r=kx(t);r&&r!==xf&&dm(e,r,n)}var o=wx(t);vf&&(o=o.concat(vf(t)));for(var i=yf(e),s=yf(t),l=0;l<o.length;++l){var a=o[l];if(!(a in yx||n&&n[a]||s&&a in s||i&&a in i)){var u=Sx(t,a);try{xx(e,a,u)}catch{}}}}return e}function ur(e){return typeof e=="function"}function Cu(e){return typeof e=="object"&&"styledComponentId"in e}function hn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function da(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function po(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function pa(e,t,n){if(n===void 0&&(n=!1),!n&&!po(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=pa(e[r],t[r]);else if(po(t))for(var r in t)e[r]=pa(e[r],t[r]);return e}function ju(e,t){Object.defineProperty(e,"toString",{value:t})}function Eo(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var Ex=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,o=r.length,i=o;t>=i;)if((i<<=1)<0)throw Eo(16,"".concat(t));this.groupSizes=new Uint32Array(i),this.groupSizes.set(r),this.length=i;for(var s=o;s<i;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(t+1),a=(s=0,n.length);s<a;s++)this.tag.insertRule(l,n[s])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),o=r+n;this.groupSizes[t]=0;for(var i=r;i<o;i++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],o=this.indexOfGroup(t),i=o+r,s=o;s<i;s++)n+="".concat(this.tag.getRule(s)).concat(Eu);return n},e}(),pi=new Map,Vi=new Map,hi=1,Qo=function(e){if(pi.has(e))return pi.get(e);for(;Vi.has(hi);)hi++;var t=hi++;return pi.set(e,t),Vi.set(t,e),t},Cx=function(e,t){hi=t+1,pi.set(e,t),Vi.set(t,e)},jx="style[".concat(lr,"][").concat(om,'="').concat(xs,'"]'),_x=new RegExp("^".concat(lr,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Rx=function(e,t,n){for(var r,o=n.split(","),i=0,s=o.length;i<s;i++)(r=o[i])&&e.registerName(t,r)},Px=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Eu),o=[],i=0,s=r.length;i<s;i++){var l=r[i].trim();if(l){var a=l.match(_x);if(a){var u=0|parseInt(a[1],10),c=a[2];u!==0&&(Cx(c,u),Rx(e,c,a[3]),e.getTag().insertRules(u,o)),o.length=0}else o.push(l)}}},wf=function(e){for(var t=document.querySelectorAll(jx),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(lr)!==rm&&(Px(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function Tx(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var pm=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(l){var a=Array.from(l.querySelectorAll("style[".concat(lr,"]")));return a[a.length-1]}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(lr,rm),r.setAttribute(om,xs);var s=Tx();return s&&r.setAttribute("nonce",s),n.insertBefore(r,i),r},Ox=function(){function e(t){this.element=pm(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,o=0,i=r.length;o<i;o++){var s=r[o];if(s.ownerNode===n)return s}throw Eo(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),$x=function(){function e(t){this.element=pm(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),Nx=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),Sf=Wi,Lx={isServer:!Wi,useCSSOMInjection:!ux},hm=function(){function e(t,n,r){t===void 0&&(t=ar),n===void 0&&(n={});var o=this;this.options=ze(ze({},Lx),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Wi&&Sf&&(Sf=!1,wf(this)),ju(this,function(){return function(i){for(var s=i.getTag(),l=s.length,a="",u=function(d){var m=function(h){return Vi.get(h)}(d);if(m===void 0)return"continue";var w=i.names.get(m),y=s.getGroup(d);if(w===void 0||!w.size||y.length===0)return"continue";var x="".concat(lr,".g").concat(d,'[id="').concat(m,'"]'),C="";w!==void 0&&w.forEach(function(h){h.length>0&&(C+="".concat(h,","))}),a+="".concat(y).concat(x,'{content:"').concat(C,'"}').concat(Eu)},c=0;c<l;c++)u(c);return a}(o)})}return e.registerId=function(t){return Qo(t)},e.prototype.rehydrate=function(){!this.server&&Wi&&wf(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(ze(ze({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,o=n.target;return n.isServer?new Nx(o):r?new Ox(o):new $x(o)}(this.options),new Ex(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(Qo(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(Qo(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(Qo(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Ax=/&/g,zx=/^\s*\/\/.*$/gm;function mm(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=mm(n.children,t)),n})}function Mx(e){var t,n,r,o=ar,i=o.options,s=i===void 0?ar:i,l=o.plugins,a=l===void 0?ws:l,u=function(m,w,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):m},c=a.slice();c.push(function(m){m.type===ms&&m.value.includes("&")&&(m.props[0]=m.props[0].replace(Ax,n).replace(r,u))}),s.prefix&&c.push(lx),c.push(ox);var d=function(m,w,y,x){w===void 0&&(w=""),y===void 0&&(y=""),x===void 0&&(x="&"),t=x,n=w,r=new RegExp("\\".concat(n,"\\b"),"g");var C=m.replace(zx,""),h=nx(y||w?"".concat(y," ").concat(w," { ").concat(C," }"):C);s.namespace&&(h=mm(h,s.namespace));var p=[];return Hi(h,ix(c.concat(sx(function(g){return p.push(g)})))),p};return d.hash=a.length?a.reduce(function(m,w){return w.name||Eo(15),Hn(m,w.name)},sm).toString():"",d}var Ix=new hm,ha=Mx(),gm=Z.createContext({shouldForwardProp:void 0,styleSheet:Ix,stylis:ha});gm.Consumer;Z.createContext(void 0);function kf(){return A.useContext(gm)}var ym=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=ha);var s=r.name+i.hash;o.hasNameForId(r.id,s)||o.insertRules(r.id,s,i(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,ju(this,function(){throw Eo(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=ha),this.name+t.hash},e}(),Dx=function(e){return e>="A"&&e<="Z"};function Ef(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;Dx(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var vm=function(e){return e==null||e===!1||e===""},xm=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!vm(i)&&(Array.isArray(i)&&i.isCss||ur(i)?r.push("".concat(Ef(o),":"),i,";"):po(i)?r.push.apply(r,fo(fo(["".concat(o," {")],xm(i),!1),["}"],!1)):r.push("".concat(Ef(o),": ").concat((t=o,(n=i)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in ax||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function xn(e,t,n,r){if(vm(e))return[];if(Cu(e))return[".".concat(e.styledComponentId)];if(ur(e)){if(!ur(i=e)||i.prototype&&i.prototype.isReactComponent||!t)return[e];var o=e(t);return xn(o,t,n,r)}var i;return e instanceof ym?n?(e.inject(n,r),[e.getName(r)]):[e]:po(e)?xm(e):Array.isArray(e)?Array.prototype.concat.apply(ws,e.map(function(s){return xn(s,t,n,r)})):[e.toString()]}function Fx(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(ur(n)&&!Cu(n))return!1}return!0}var bx=lm(xs),Ux=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&Fx(t),this.componentId=n,this.baseHash=Hn(bx,n),this.baseStyle=r,hm.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))o=hn(o,this.staticRulesId);else{var i=da(xn(this.rules,t,n,r)),s=fa(Hn(this.baseHash,i)>>>0);if(!n.hasNameForId(this.componentId,s)){var l=r(i,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,l)}o=hn(o,s),this.staticRulesId=s}else{for(var a=Hn(this.baseHash,r.hash),u="",c=0;c<this.rules.length;c++){var d=this.rules[c];if(typeof d=="string")u+=d;else if(d){var m=da(xn(d,t,n,r));a=Hn(a,m+c),u+=m}}if(u){var w=fa(a>>>0);n.hasNameForId(this.componentId,w)||n.insertRules(this.componentId,w,r(u,".".concat(w),void 0,this.componentId)),o=hn(o,w)}}return o},e}(),wm=Z.createContext(void 0);wm.Consumer;var rl={};function Bx(e,t,n){var r=Cu(e),o=e,i=!nl(e),s=t.attrs,l=s===void 0?ws:s,a=t.componentId,u=a===void 0?function(S,_){var k=typeof S!="string"?"sc":mf(S);rl[k]=(rl[k]||0)+1;var j="".concat(k,"-").concat(am(xs+k+rl[k]));return _?"".concat(_,"-").concat(j):j}(t.displayName,t.parentComponentId):a,c=t.displayName,d=c===void 0?function(S){return nl(S)?"styled.".concat(S):"Styled(".concat(hx(S),")")}(e):c,m=t.displayName&&t.componentId?"".concat(mf(t.displayName),"-").concat(t.componentId):t.componentId||u,w=r&&o.attrs?o.attrs.concat(l).filter(Boolean):l,y=t.shouldForwardProp;if(r&&o.shouldForwardProp){var x=o.shouldForwardProp;if(t.shouldForwardProp){var C=t.shouldForwardProp;y=function(S,_){return x(S,_)&&C(S,_)}}else y=x}var h=new Ux(n,m,r?o.componentStyle:void 0);function p(S,_){return function(k,j,P){var b=k.attrs,z=k.componentStyle,Q=k.defaultProps,we=k.foldedComponentIds,Ue=k.styledComponentId,Se=k.target,gt=Z.useContext(wm),Ge=kf(),ot=k.shouldForwardProp||Ge.shouldForwardProp,T=cx(j,gt,Q)||ar,O=function(Ne,ae,de){for(var zt,sn=ze(ze({},ae),{className:void 0,theme:de}),Ss=0;Ss<Ne.length;Ss+=1){var jo=ur(zt=Ne[Ss])?zt(sn):zt;for(var Mt in jo)sn[Mt]=Mt==="className"?hn(sn[Mt],jo[Mt]):Mt==="style"?ze(ze({},sn[Mt]),jo[Mt]):jo[Mt]}return ae.className&&(sn.className=hn(sn.className,ae.className)),sn}(b,j,T),L=O.as||Se,D={};for(var M in O)O[M]===void 0||M[0]==="$"||M==="as"||M==="theme"&&O.theme===T||(M==="forwardedAs"?D.as=O.forwardedAs:ot&&!ot(M,L)||(D[M]=O[M]));var fe=function(Ne,ae){var de=kf(),zt=Ne.generateAndInjectStyles(ae,de.styleSheet,de.stylis);return zt}(z,O),re=hn(we,Ue);return fe&&(re+=" "+fe),O.className&&(re+=" "+O.className),D[nl(L)&&!im.has(L)?"class":"className"]=re,D.ref=P,A.createElement(L,D)}(g,S,_)}p.displayName=d;var g=Z.forwardRef(p);return g.attrs=w,g.componentStyle=h,g.displayName=d,g.shouldForwardProp=y,g.foldedComponentIds=r?hn(o.foldedComponentIds,o.styledComponentId):"",g.styledComponentId=m,g.target=r?o.target:e,Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(S){this._foldedDefaultProps=r?function(_){for(var k=[],j=1;j<arguments.length;j++)k[j-1]=arguments[j];for(var P=0,b=k;P<b.length;P++)pa(_,b[P],!0);return _}({},o.defaultProps,S):S}}),ju(g,function(){return".".concat(g.styledComponentId)}),i&&dm(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),g}function Cf(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var jf=function(e){return Object.assign(e,{isCss:!0})};function Co(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(ur(e)||po(e))return jf(xn(Cf(ws,fo([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?xn(r):jf(xn(Cf(r,t)))}function ma(e,t,n){if(n===void 0&&(n=ar),!t)throw Eo(1,t);var r=function(o){for(var i=[],s=1;s<arguments.length;s++)i[s-1]=arguments[s];return e(t,n,Co.apply(void 0,fo([o],i,!1)))};return r.attrs=function(o){return ma(e,t,ze(ze({},n),{attrs:Array.prototype.concat(n.attrs,o).filter(Boolean)}))},r.withConfig=function(o){return ma(e,t,ze(ze({},n),o))},r}var Sm=function(e){return ma(Bx,e)},v=Sm;im.forEach(function(e){v[e]=Sm(e)});function _u(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=da(Co.apply(void 0,fo([e],t,!1))),o=am(r);return new ym(o,r)}const Hx=v.div`
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
`,Wx=v.div`
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
`,Vx=v.div`
    display: none;
    @media only screen and (max-width: 855px) {
        display: block;
        height: 73px;
        width: 100%;
        position: sticky;
        top: 0;
    }
`,Qx=v(hr)`
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
`,Kx=v.p`
    font-size: 22px;
    font-weight: bold;
`,_f=v.div`
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
`;const qx=v.img`
    width: 116px;
    margin: auto;
    display: flex;
    cursor: pointer;
`,Yx=({items:e,title:t,isLogged:n,handleLogout:r,handleLogin:o})=>{const[i,s]=A.useState(!1);return f.jsxs(Vx,{children:[f.jsxs(Hx,{isOpen:i,onClick:()=>s(!i),children:[f.jsx("div",{}),f.jsx("div",{}),f.jsx("div",{})]}),f.jsx(qx,{onClick:()=>{window.location.href="/"},src:"https://oncolympics-assets.expression-egy.com/assets/image/Oncolympics Logo.png",alt:"Oncolympics_Logo"}),f.jsxs(Wx,{isOpen:i,children:[f.jsx(Kx,{children:t}),e==null?void 0:e.map((l,a)=>f.jsx(Qx,{exact:!0,to:l.route,activeClassName:"active",children:l.label},a)),n&&f.jsx(_f,{onClick:r,children:"Logout"}),!n&&f.jsx(_f,{onClick:o,children:"Login"})]})]})},Gx=["yourmatch","matchmoderator"],Xx=v.div`
  display: flex;
  flex-direction: ${e=>e.isMatch?"row":"column"};



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
`,Jx=v.div`
  display: flex;
  position: relative;
  @media only screen and (max-width: 855px) {
    display: none;
  }
`,Zx=v.div`
  flex-direction: ${e=>e.isMatch?"column":"row"};
  display: flex;
  gap: 10px;
  margin: ${e=>e.isMatch?"125px 0 0 8px":"26px auto"};
`,ew=v(hr)`
  box-shadow: 0 0 25px rgb(0 0 0 / 25%);
  border-radius: 8px;
  text-align: center;
  width: ${e=>e.isMatch?"190px":"150px"};
  text-decoration: none;
  flex-direction: column;
  margin: ${e=>e.isMatch?"26px 0":"auto 0"};
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
`,tw=v.div`
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
`,nw=v.div`
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
`,rw=v.div`
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
  margin: ${e=>e.isMatch?"26px 0":"auto 0"};
  min-width: 48px;
  width: ${e=>e.isMatch?"190px":"unset"};

  background: #890053;
  cursor: pointer;
  position: relative;

  &:hover > #logout {
    top: 3.3rem;
  }
`,Rf=v.div`
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
`,ow=v.img`
  width: 40px;
  height: 40px;
  background: #ffff;
  border-radius: 50%;
  padding: 3px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`,Pf=v.p`
  font-weight: 700;
  margin: auto 16px;
  font-size: 18px;
  height: fit-content;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,iw=v.img`
    width: 140px;
    display: flex;
    cursor: pointer;
    position: absolute;
    z-index: 20;

    margin: ${e=>e.isMatch?"20px 30px 0px 30px":"10px 0px 0px 100px"};
`,sw=v.div`
  // padding-top: 20px;

  width: 100%;
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
`,Pe=({children:e,hidebackground:t,extendChildContainer:n,isMatch:r})=>{const[o,i]=A.useState(null),s=le.get("role");!s&&Gx.includes(String(window.location.pathname.split("/")[1]).toLowerCase())&&(window.location.href="/login"),A.useEffect(()=>{(async()=>{try{const d=await H1();i(d==null?void 0:d.data)}catch(d){console.log(d)}})()},[]);const l=()=>{le.remove("username"),le.remove("token"),le.remove("role"),window.location.href="/"},a=()=>{window.location.href="/login"},u=Yh(s);return f.jsxs(Xx,{hidebackground:t,isMatch:r,children:[f.jsx(Yx,{items:u,title:`Hi! ${(o==null?void 0:o.name)||""}`,isLogged:!!s,handleLogin:a,handleLogout:l}),f.jsxs(Jx,{children:[f.jsx(iw,{isMatch:r,onClick:()=>{window.location.href="/"},src:"https://oncolympics-assets.expression-egy.com/assets/image/Oncolympics Logo.png",alt:"Oncolympics_Logo"}),f.jsxs(Zx,{isMatch:r,children:[u==null?void 0:u.map((c,d)=>f.jsx(ew,{isMatch:r,exact:!0,to:c.route,activeClassName:"active",children:c.label},d)),!s&&f.jsx(tw,{onClick:a,children:"Login"}),!!s&&f.jsxs(rw,{isMatch:r,children:[o?f.jsxs(Rf,{children:[f.jsx(Pf,{children:`Hi! ${o==null?void 0:o.name}`}),!!o.logo&&f.jsx(ow,{src:`https://oncolympics-assets.expression-egy.com/assets/teamslogos/${o==null?void 0:o.logo}`,alt:"user_logo"})]}):f.jsx(Rf,{children:f.jsx(Pf,{children:". . ."})}),o&&f.jsx(nw,{id:"logout",onClick:l,children:"Logout"})]})]})]}),f.jsx(sw,{extendChildContainer:n,children:e})]})},lw=v.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 115px);
`,aw=v.form`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
`,Tf=v.input`
  margin-bottom: 1rem;
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`,uw=v.button`
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
`,cw=()=>{const[e,t]=A.useState(""),[n,r]=A.useState(""),[o,i]=A.useState(!1),[s,l]=A.useState(""),a=async u=>{u.preventDefault(),i(!0),l("");try{const c=await B1(e,n);(c==null?void 0:c.status)===200?window.location.href="/groups":l("Wrong Email or Password, Try Again!")}catch(c){console.log(c),l("Wrong Email or Password, Try Again!")}finally{i(!1)}};return f.jsx(Pe,{children:f.jsx(lw,{children:f.jsxs(aw,{onSubmit:a,children:[f.jsx(Tf,{type:"text",placeholder:"Username",value:e,onChange:u=>t(u.target.value)}),f.jsx(Tf,{type:"password",placeholder:"Password",value:n,onChange:u=>r(u.target.value)}),f.jsx(uw,{type:"submit",disabled:o,children:o?"Logging in...":"Login"}),s&&f.jsx("p",{style:{color:"red"},children:s})]})})})},fw=async()=>{try{return(await B.get(_e.groups)).data}catch(e){return console.error(e),""}},dw=v.div`
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
`,pw=v.table`
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
`,hw=v.caption`
  caption-side: top;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: #333;
`,Of=v.tr`

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
`,$f=v.div`
    height: 100vh;
    display: flex;
    width: 100%;
    justify-content: center;
`,Nf=v.p`
    display: flex;
    height: fit-content;
    margin: auto;
    font-size: 24px;
    font-weight: 500;
`,mw=()=>{var s;const[e,t]=A.useState({}),[n,r]=A.useState(!0),[o,i]=A.useState(null);return A.useEffect(()=>{(async()=>{try{const a=await fw();t(a==null?void 0:a.data),r(!1)}catch(a){console.log(a),i("Failed to fetch data"),r(!1)}})()},[]),n?f.jsx($f,{children:f.jsx(Nf,{children:"Loading ..."})}):o?f.jsx($f,{children:f.jsx(Nf,{children:o})}):f.jsx(Pe,{children:f.jsx(dw,{children:(s=Object.entries(e))==null?void 0:s.map(([l,a],u)=>f.jsxs(pw,{children:[f.jsx(hw,{children:l}),f.jsx("thead",{children:f.jsxs(Of,{children:[f.jsx(Rr,{children:"Name"}),f.jsx(Rr,{children:"W"}),f.jsx(Rr,{children:"D"}),f.jsx(Rr,{children:"L"}),f.jsx(Rr,{children:"Pts"})]})}),f.jsx("tbody",{children:a.map((c,d)=>f.jsxs(Of,{children:[f.jsx(Pr,{children:f.jsxs("div",{style:{display:"flex",gap:"15px"},children:[f.jsx("div",{style:{width:"30px"},children:c.logo&&f.jsx("img",{style:{width:"30px"},src:`https://oncolympics-assets.expression-egy.com/assets/teamslogos/${c.logo}`,alt:c.logo})}),f.jsx("p",{style:{margin:"0",lineHeight:"28px"},children:c.teamName})]})}),f.jsx(Pr,{children:c.W}),f.jsx(Pr,{children:c.D}),f.jsx(Pr,{children:c.L}),f.jsx(Pr,{children:c.Pts})]},d))})]},u))})})},gw=async()=>{var e;try{const t=await B.get(_e.allmatches);return(e=t==null?void 0:t.data)==null?void 0:e.data.map(r=>{let o=r==null?void 0:r.date_time.replace("Z",""),i=new Date(o);return{team1:r.team1_name,team2:r.team2_name,team1abbrev:r.team1_abbrev,team2abbrev:r.team2_abbrev,date:i.toLocaleString("en-EG",{weekday:"long",day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"}),team1Score:r.score_team1,team2Score:r.score_team2,matchStatus:r.match_status,matchId:r.match_id,team1Logo:r.team1_logo,team2Logo:r.team2_logo}})}catch(t){return console.log(t),""}},yw=async e=>{var t;try{const n=await B.get(`${_e.matchdetails}?matchid=${e}`);return(t=n==null?void 0:n.data)==null?void 0:t.data}catch(n){return console.log(n),""}},vw=v.div`
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
`,xw=v.div`
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
`,ww=v.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`,Sw=v.div`
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
`,km=({isOpen:e,onClose:t,children:n})=>e?f.jsx(vw,{children:f.jsxs(xw,{children:[f.jsx(ww,{onClick:t,children:"×"}),f.jsx(Sw,{children:n})]})}):null,Lf=_u`
  from {
    transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
  }
`,kw=v.div`
  ${({width:e,height:t,thickness:n,outerColor:r,innerColor:o,theme:i})=>`
    width: ${e}px;
    height: ${t}px;
    border: ${n}px solid gray;
    border-top: ${n}px solid ${r||"blue"};
    border-radius: 50%;
  `}

  animation: 1.5s ${Lf} linear infinte;
  -webkit-animation: 1.5s ${Lf} linear infinite;

  ${({extendStyle:e})=>e||""};
`,Ew=({width:e,height:t,thickness:n,outerColor:r,innerColor:o,extendStyle:i,...s})=>f.jsx(kw,{width:e,height:t,thickness:n,outerColor:r,innerColor:o,extendStyle:i,...s}),Cw=v.div`
    display: flex;
    border: 1px solid lightgray;
    border-radius: 4px;
    ${e=>!e.isDisabled&&`
        cursor: pointer;    
    `};
    & > p {
        width: 100%;
        text-align: center;
    }
    ${e=>e.extendStyles||""};  
`,jw=v.p`
    margin: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`,Ko=({label:e,isLoading:t,onClick:n,disabled:r,extendStyles:o,extendStyleLoader:i})=>{const s=()=>{!t&&!r&&n&&n()};return f.jsx(Cw,{isDisabled:t||r,extendStyles:o,onClick:()=>s(),children:t?f.jsx("div",{style:{margin:"auto",padding:"6% 0"},children:f.jsx(Ew,{extendStyle:i,width:20,height:20,thickness:5})}):f.jsx(jw,{children:e})})},_w=v.div`
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
`,Rw=v.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`,Pw=v.div`
    display: flex;
    justify-content: center;
    gap: 100px;
    ${e=>e.isMini&&`
        gap: 55px;
    `};
`,qo=v.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    min-width: 410px;

    ${e=>e.isRtL&&`
        direction: rtl;
    `};

    ${e=>e.isMini&&`
        flex-direction: row;
        gap: 15px;
    `};
`,ol=v.p`
    font-weight: bold;
    font-size: 28px;
    text-align: center;
    ${e=>e.isMini&&`
        font-size: 18px;
        margin: 10px;
    `};
`,Af=v.div`
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
`,ga=v.p`
    font-weight: bold;
    font-size: 28px;
    text-align: center;
    ${e=>e.isMini&&`
        font-size: 18px;
        margin: 13px 0;
    `};
`,zf=v(ga)`
    ${e=>e.isMini&&`
        font-size: 18px
    `};
`,Mf=v.img`
    width: 120px;
    height: 120px;
    margin: auto;

    background: #fff;
    border-radius: 50%;
    border: 10px solid #fff;
    ${e=>e.isMini&&`
        width: 50px
        height: 50px;
    `};
`,Tw=v.p`
    font-weight: bold;
    font-size: 20px;
    text-align: center;
`,If=Co`
    font-size: 16px;
    font-weight: 700;
    height: 40px;
    width: 40px;
    border-radius: 8px;
    background-color: lightgreen;
`,Df=Co`
    font-size: 16px;
    font-weight: 700;
    height: 40px;
    width: 40px;
    border-radius: 8px;
    background-color: red;
    color: #fff;
`,Ff=v.div`
    display: flex;
    gap: 5px;
    justify-content: center;
    margin-top: 10px;
`,Ow=v.div`
    position: relative;
    width: fit-content;
    z-index: 1;
    ${e=>e.notStarted&&`
        margin: 4% auto;
    `}
`,bf=v.img`
    width: 450px;

    @media only screen and (max-width: 855px) {
        width: 350px;
    }
`;v.p``;const Em=v.img`
    width: 90px;
    height: 90px;
    position: absolute;
    top: 39px;

    @media only screen and (max-width: 855px) {
        width: 65px;
        height: 65px;
        top: 34px;
    }
`,$w=v(Em)`
    left: 26px;    

    @media only screen and (max-width: 855px) {
        left: 23px; 
    }
`,Nw=v(Em)`
    right: 26px;
    @media only screen and (max-width: 855px) {
        right: 23px; 
    }
`,Cm=v.p`
    margin: 0;
    font-weight: 900;
    color: #843891;
    position: absolute;
    top: 141px;
    width: 89px;
    text-align: center;
    font-size: 17px;

    @media only screen and (max-width: 855px) {
        top: 107px;
        width: 93px;
    }
`,Lw=v(Cm)`
    left: 78px;
    @media only screen and (max-width: 855px) {
        left: 50px;
        font-size: 12px;
    }
`,Aw=v(Cm)`
    right: 78px;
    @media only screen and (max-width: 855px) {
        right: 50px;
        font-size: 12px;
    }
`,il=v.p`
    width: 60px;
    text-align: center;
    margin: 0;
    font-weight: 900;
    color: #843891;
    position: absolute;
    top: 141px;
    left: 50%;
    transform: translate(-50%, 0%);
    background-color: white;

    @media only screen and (max-width: 855px) {
        top: 107px;
        font-size: 12px;
    }
`,jm=v.div`
    width: 15px;
    height: 24px;
    position: absolute;
    bottom: 13px;
    cursor: pointer;
    @media only screen and (max-width: 855px) {
        width: 13px;
        bottom: 13px;
    }
`,zw=v(jm)`
    left: 36px;

    @media only screen and (max-width: 855px) {
        left: 27px;
    }
`,Mw=v(jm)`
    right: 36px;

    @media only screen and (max-width: 855px) {
        right: 27px;
    }
`,_m=v.div`
    width: 15px;
    height: 24px;
    position: absolute;
    bottom: 3px;
    cursor: pointer;

    @media only screen and (max-width: 855px) {
        width: 13px;
        bottom: 3px;
    }
`,Iw=v(_m)`
    left: 54px;

    @media only screen and (max-width: 855px) {
        left: 43px;
    }
`,Dw=v(_m)`
    right: 54px;
    @media only screen and (max-width: 855px) {
        right: 43px;
    }
`,Fw=v.div`
    display: flex;
    justify-content: space-between;
    width: fit-content;
    min-width: 100px;
    position: absolute;
    top: 66px;
    
    left: 50%;
    transform: translate(-50%, 0%);

    @media only screen and (max-width: 855px) {
        top: 55px;
    }
`,sl=v.p`
    font-weight: 900;
    color: #843891;
    max-width: 10px;
    margin: 0;
    font-size: 30px;

    @media only screen and (max-width: 855px) {
        font-size: 18px;
    }
`,bw=v.div`
    left: 50%;
    transform: translate(-50%, 0%);
    top: 72px;
    position: absolute;
    width: 150px;

    @media only screen and (max-width: 855px) {
        top: 45px;
        width: 150px;
    }
`,Uw=v.p`
    margin: 0;
    font-weight: 900;
    color: #843891;
    text-align: center;

    @media only screen and (max-width: 855px) {
        font-size: 12px;
    }
`,Uf=e=>{let t=e.replace("Z",""),n=new Date(t);return n==null?void 0:n.toLocaleDateString("en-Eg",{weekday:"long",day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"})},wn=({match:e,penaltyTeam:t,rewardTeam:n,isAdmin:r})=>{const o=e.match_status===0,i=e.match_status===1||e.match_status===2,s=e.match_status===1&&r,l=(e==null?void 0:e.match_status)===1&&e.team1_abbrev||e.team1_name,a=e==null?void 0:e.score_team1,u=`https://oncolympics-assets.expression-egy.com/assets/teamslogos/${e.team1_logo}`,c=(e==null?void 0:e.match_status)===1&&e.team2_abbrev||e.team2_name,d=e==null?void 0:e.score_team2,m=`https://oncolympics-assets.expression-egy.com/assets/teamslogos/${e.team2_logo}`,w=e.match_status===0||e.match_status===2,y=p=>{n&&n(p)},x=p=>{t&&t(p)},C=()=>f.jsx(_w,{isMini:e.match_status===1,children:f.jsxs(Rw,{children:[f.jsxs("div",{children:[e.match_status===0&&f.jsx(ol,{children:"Next"}),e.match_status===1&&f.jsx(ol,{isMini:e.match_status===1,children:"In Progress ..."}),e.match_status===2&&f.jsx(ol,{children:"Ended"})]}),f.jsxs(Pw,{isMini:e.match_status===1,children:[f.jsxs(qo,{children:[f.jsxs(qo,{isMini:e.match_status===1,children:[f.jsxs(Af,{isRtL:e.match_status===1,isMini:e.match_status===1,children:[f.jsx(Mf,{isMini:e.match_status===1,src:u,alt:`${l} logo`}),f.jsx(ga,{isMini:e.match_status===1,children:l})]}),i&&f.jsx(zf,{isMini:e.match_status===1,children:a})]}),s&&f.jsxs(Ff,{children:[f.jsx(Ko,{label:"+ 1",onClick:()=>y(e.team1_id),extendStyles:If}),f.jsx(Ko,{label:"- 1",onClick:()=>x(e.team1_id),extendStyles:Df})]})]}),f.jsxs(qo,{children:[f.jsxs(qo,{isRtL:e.match_status===1,isMini:e.match_status===1,children:[f.jsxs(Af,{isLTR:e.match_status===1,isMini:e.match_status===1,children:[f.jsx(Mf,{isMini:e.match_status===1,src:m,alt:`${c} logo`}),f.jsx(ga,{isMini:e.match_status===1,children:c})]}),i&&f.jsx(zf,{isMini:e.match_status===1,children:d})]}),s&&f.jsxs(Ff,{children:[f.jsx(Ko,{label:"+ 1",onClick:()=>y(e.team2_id),extendStyles:If}),f.jsx(Ko,{label:"- 1",onClick:()=>x(e.team2_id),extendStyles:Df})]})]})]}),o&&f.jsx("div",{children:f.jsx(Tw,{children:Uf(e==null?void 0:e.date_time)})})]})}),h=()=>f.jsxs(Ow,{notStarted:e.match_status===0||e.match_status===2,children:[s?f.jsx(bf,{src:"https://oncolympics-assets.expression-egy.com/assets/image/SCOREBOARD.png",alt:"score-board"}):f.jsx(bf,{src:"https://oncolympics-assets.expression-egy.com/assets/image/SCOREBOARD2.png",alt:"score-board"}),f.jsx($w,{src:u,alt:"team1_logo"}),f.jsx(Nw,{src:m,alt:"team2_logo"}),f.jsx(Lw,{children:l}),f.jsx(Aw,{children:c}),i?f.jsxs(Fw,{children:[f.jsx(sl,{children:a}),f.jsx(sl,{children:"-"}),f.jsx(sl,{children:d})]}):f.jsx(bw,{children:f.jsx(Uw,{children:Uf(e==null?void 0:e.date_time)})}),e.match_status===0&&f.jsx(il,{children:"NEXT"}),e.match_status===1&&f.jsx(il,{isMini:e.match_status===1,children:"LIVE"}),e.match_status===2&&f.jsx(il,{children:"ENDED"}),s&&f.jsx(zw,{onClick:()=>y(e.team1_id)}),s&&f.jsx(Mw,{onClick:()=>y(e.team2_id)}),s&&f.jsx(Iw,{onClick:()=>x(e.team1_id)}),s&&f.jsx(Dw,{onClick:()=>x(e.team2_id)})]});return f.jsx(f.Fragment,{children:w?C():h()})};v.div``;const Bf=v.div`
    height: 100vh;
    display: flex;
    width: 100%;
    justify-content: center;
`,Hf=v.p`
    display: flex;
    height: fit-content;
    margin: auto;
    font-size: 24px;
    font-weight: 500;
`,Bw=v.div`
    margin-bottom: 1.5rem;
`,Hw=v.p`
    font-size: 32px;
    text-align: center;
    color: #333;
    font-weight: 700;
`,Ww=v.div`
    margin-bottom: 3px;
`,Vw=v.p`
    text-align: center;
    font-size: 18px;
    font-weight: 700;
    margin: 15px 0px 0 0;
`,Qw=v.div`
    display : flex;
    justify-content: center;
    gap: 60px;
`,Wf=v.div`
    display: flex;
    gap: 15px;
`,Vf=v.p`
    font-size: 18px;
    font-weight: bold;
`,Qf=v.p`
    font-size: 18px;
    font-weight: bold;
`,Kw=v.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;

    @media only screen and (max-width: 855px) {
        display: flex;
        flex-direction: column;
    }
`,qw=v.div`
    display: flex;
    flex-direction: column;
    @media only screen and (max-width: 855px) {
        max-width: unset;
        width: 100%;
        max-height: unset;
        height: 95vh;
        flex-direction: column;
        gap: 30px;
    }
`,Yw=v.div`
    display: flex;
    justify-content: center;
`,Gw=({isOpen:e,onClose:t,match:n})=>{const[r,o]=A.useState(null),[i,s]=A.useState(!0),[l,a]=A.useState(null);return A.useEffect(()=>{e?(async()=>{s(!0);try{const c=await yw(n==null?void 0:n.matchId);o(c),s(!1)}catch(c){a(c),s(!1)}})():o(null)},[e,n]),i?f.jsx(Bf,{children:f.jsx(Hf,{children:"Loading..."})}):l?f.jsx(Bf,{children:f.jsxs(Hf,{children:["Error: ",l.message]})}):(console.log(n),f.jsx(km,{isOpen:e,onClose:t,children:f.jsxs("div",{children:[f.jsx(Bw,{children:f.jsx(Hw,{children:"Match Details"})}),f.jsxs(qw,{children:[f.jsx(Yw,{children:f.jsx(wn,{match:{...n,match_status:n==null?void 0:n.matchStatus,team1_name:n==null?void 0:n.team1abbrev,team1_logo:n==null?void 0:n.team1Logo,score_team1:n==null?void 0:n.team1Score,team2_name:n==null?void 0:n.team2abbrev,team2_logo:n==null?void 0:n.team2Logo,score_team2:n==null?void 0:n.team2Score}})}),f.jsx(Kw,{children:r==null?void 0:r.map((u,c)=>f.jsxs(Ww,{children:[f.jsxs(Vw,{children:["Question ",u.questionId+1]}),f.jsxs(Qw,{children:[f.jsxs(Wf,{children:[f.jsxs(Vf,{children:[u.team1_abbrev,":"]})," ",f.jsx(Qf,{children:u.score_team1})]}),f.jsxs(Wf,{children:[f.jsx(Qf,{children:u.score_team2})," ",f.jsxs(Vf,{children:[":",u.team2_abbrev]})]})]})]},c))})]})]})}))},Xw=v.div`
  
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
`,Jw=v.div`
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
`,Zw=v.div`
  margin-top: 0.5rem;
  color: #777;
`,Kf=v.div`
    height: 100vh;
    display: flex;
    width: 100%;
    justify-content: center;
`,qf=v.p`
    display: flex;
    height: fit-content;
    margin: auto;
    font-size: 24px;
    font-weight: 500;
`,eS=v.div`
  cursor: pointer;
  color: blue;
  text-decoration: underline;
  line-height: 18px;
`,tS=()=>{const[e,t]=A.useState(!1),[n,r]=A.useState(null),[o,i]=A.useState([]),[s,l]=A.useState(!0),[a,u]=A.useState(null);if(A.useEffect(()=>{const d=async()=>{try{const w=await gw();i(w),l(!1)}catch(w){console.log(w),u("Failed to fetch data"),l(!1)}};d();const m=setInterval(d,1e4);return()=>clearInterval(m)},[]),s&&!(o!=null&&o.length))return f.jsx(Kf,{children:f.jsx(qf,{children:"Loading ..."})});if(a)return f.jsx(Kf,{children:f.jsx(qf,{children:a})});const c=d=>{r(d),t(!0)};return f.jsxs(Pe,{children:[f.jsx(Xw,{children:o==null?void 0:o.map((d,m)=>f.jsxs(Jw,{children:[f.jsxs("div",{style:{display:"flex",flexDirection:"column",width:"100%"},children:[f.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:"10px"},children:[f.jsx(Tr,{style:{width:"40%",textAlign:"center"},children:d.team1})," vs ",f.jsx(Tr,{style:{width:"40%",textAlign:"center"},children:d.team2})]}),f.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:"10px"},children:[f.jsx(Tr,{children:d.team1Score})," : ",f.jsx(Tr,{children:d.team2Score})]}),f.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:"10px",marginTop:"5px"},children:[f.jsxs(Tr,{children:[d.matchStatus===0&&"Not Started Yet",d.matchStatus===1&&"Live Now",d.matchStatus===2&&"Ended"]}),d.matchStatus!==0&&f.jsx(eS,{onClick:()=>c(d),children:f.jsx("p",{style:{margin:"0"},children:"Details"})})]})]}),f.jsx(Zw,{children:d.date})]},m))}),e&&f.jsx(Gw,{match:n,isOpen:e,onClose:()=>t(!1)})]})},nS=async()=>{var e;try{return(e=(await B.get(_e.playermatch,{headers:{token:le.get("token")}})).data.data)==null?void 0:e[0]}catch(t){return console.log(t),""}},rS=async(e,t)=>{try{await B.post(_e.answer,{answer:e,answerId:t},{headers:{token:le.get("token")}})}catch(n){return console.log(n),""}};v.div`
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
`;const Yf=v.div`
    height: calc(100vh - 85px);
    display: flex;
    width: 100%;
    justify-content: center;
`,Gf=v.p`
    display: flex;
    height: fit-content;
    margin: auto;
    font-size: 28px;
    font-weight: 700;
`,Rm=v.div`
  display: grid;
  grid-template-columns: 1fr;
`;v(Rm)``;const ut={0:"a. ",1:"b. ",2:"c. ",3:"d. "},oS=v.div`
    padding: 40px;
`;v.div`
    margin-bottom: 1.5rem;
`;v.p`
    font-size: 22px;
    // text-align: center;
    color: #333;
    font-weight: 700;
    white-space: pre-line;
`;const iS=v.div`
    background-color: #fff;
  
    ${e=>e.isSelected&&`
      background-color: #979595;
    `};

    background-color: ${e=>e.isRight&&"#4CAF50"};
    background-color: ${e=>e.isWrong&&"red"};

    color: #333;
    color: ${e=>e.isRight&&"#ffffff"};
    color: ${e=>e.isWrong&&"#ffffff"};

    cursor: pointer;

    border: 1px solid #ccc;
    padding: 0px 30px;
    margin-bottom: 1rem;
    border-radius: 4px;
    text-align: left;
    font-size: 20px;
    font-weight: 700;
`,sS=v.p`
    
`,lS=v.p`
    padding: 40px;
    font-size: 22px;
    color: darkgreen;
    font-weight: 700;
    white-space: pre-line;
    background-color: #ffffff7d;
`;v.div`
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
`;const aS=v.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
  padding: 0;
`,uS=v.div`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 855px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`,cS=v.div`
  width: fit-content;
  @media only screen and (max-width: 855px) {
    margin: 0px auto 35px auto;
  }
`,fS=({questionFile:e,currentQuestion:t,answerQuestion:n,match:r,matchDetails:o})=>{var y;const[i,s]=A.useState([]),[l,a]=A.useState(null),[u,c]=A.useState(),d=r==null?void 0:r.canAnswer;if(A.useEffect(()=>{c(null)},[t]),A.useEffect(()=>{(async()=>{try{const h=await(await fetch(`/public/assets/matchesquestions/${e}`)).json();s(h.questions)}catch(C){a(C)}})()},[e]),l)return f.jsxs("div",{children:["Error: ",l.message]});const m=i[t],w=(x,C)=>{d&&(n(x,C),c(C))};return f.jsxs(oS,{children:[f.jsx(uS,{children:f.jsx(cS,{children:o})}),f.jsx(aS,{children:m==null?void 0:m.answers.map((x,C)=>f.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:f.jsx(iS,{onClick:()=>w(x.correct,C),isSelected:C===u,isRight:x.correct&&!d,isWrong:!x.correct&&!d&&C===u,children:f.jsx(sS,{children:`${ut[C]}${x.answer}`})},C)},C))}),!d&&f.jsx(lS,{children:`${ut[m==null?void 0:m.answers.findIndex(x=>x==null?void 0:x.correct)]}${(y=m==null?void 0:m.answers.find(x=>x==null?void 0:x.correct))==null?void 0:y.reason}`})]})},dS=()=>{const[e,t]=A.useState(null),[n,r]=A.useState(null),o=async(s,l)=>{await rS(s,l)};if(A.useEffect(()=>{const s=async()=>{try{const a=await nS();t(a?[a]:null)}catch(a){r(a)}};s();const l=setInterval(s,4e3);return()=>clearInterval(l)},[e]),n)return f.jsx(Pe,{isMatch:!0,children:f.jsx(Yf,{children:f.jsxs(Gf,{children:["Error: ",n.message]})})});if((e==null?void 0:e.length)===0||e===null)return f.jsx(Pe,{isMatch:!0,children:f.jsx(Yf,{children:f.jsx(Gf,{children:"No Matches Yet"})})});const i=e==null?void 0:e[0];if((i==null?void 0:i.match_status)===0)return f.jsx(Pe,{isMatch:!0,children:f.jsx("div",{children:f.jsx(wn,{match:i})})});if((i==null?void 0:i.match_status)===1)return f.jsx(Pe,{isMatch:!0,children:f.jsx(Rm,{children:f.jsx("div",{children:f.jsx(fS,{match:i,answerQuestion:o,questionFile:i==null?void 0:i.question_file,currentQuestion:i==null?void 0:i.current_question,matchDetails:f.jsx(wn,{match:i})})})})});if((i==null?void 0:i.match_status)===2)return f.jsx(Pe,{isMatch:!0,children:f.jsx("div",{children:f.jsx(wn,{match:i})})})},pS=async()=>{var e;try{const t=await B.get(_e.moderatormatch,{headers:{token:le.get("token")}});return(e=t==null?void 0:t.data)==null?void 0:e.data}catch(t){return console.log(t),""}},hS=async()=>{try{await B.get(_e.startmatch,{headers:{token:le.get("token")}})}catch(e){return console.log(e),""}},mS=async()=>{try{await B.get(_e.nextquestion,{headers:{token:le.get("token")}})}catch(e){return console.log(e),""}},gS=async()=>{try{await B.get(_e.endmatch,{headers:{token:le.get("token")}})}catch(e){return console.log(e),""}},yS=async()=>{try{return await B.get(_e.stopanswer,{headers:{token:le.get("token")}})}catch(e){return console.log(e),""}},vS=async()=>{try{return await B.get(_e.resetmatch,{headers:{token:le.get("token")}})}catch(e){return console.log(e),""}},xS=async e=>{try{await B.post(_e.reward,{teamId:e},{headers:{token:le.get("token")}})}catch(t){return console.log(t),""}},wS=async e=>{try{await B.post(_e.penalty,{teamId:e},{headers:{token:le.get("token")}})}catch(t){return console.log(t),""}},SS=async(e,t)=>{var n;try{const r=await B.get(`${_e.questionanswers}?matchId=${e}&questionId=${t}`,{headers:{token:le.get("token")}});return(n=r==null?void 0:r.data)==null?void 0:n.data}catch(r){return console.log(r),""}},kS=v.div`
    margin-bottom: 1.5rem;
`,ES=v.p`
    font-size: 32px;
    text-align: center;
    color: #333;
    font-weight: 700;
`,CS=v.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    min-height: 330px;
    margin-bottom: 20px;
    column-gap: 10px;
    width: calc(98% - 10px);
    margin: 0 auto 10px;
`,Xf=v.img`
    width: 120px;
    height: 120px;
    margin: auto;
    display: flex;
`,Jf=v.p`
    font-weight: bold;
    font-size: 28px;
    text-align: center;
`,ya=v.p`
    font-weight: bold;
    font-size: 28px;
    text-align: center;
    
    color: ${e=>e.isRight&&"#4CAF50"};
    color: ${e=>e.isWrong&&"red"};
`,Ru=v(ya)`
    font-weight: bold;
    font-size: 22px;
    text-align: unset;
    color: unset;
    margin: 15px 20px;
`,jS=v(Ru)`
    font-weight: bold;
    font-size: 22px;
    text-align: unset;
    
    color: ${e=>e.isRight&&"#4CAF50"};
    color: ${e=>e.isWrong&&"red"};
`,_S=v(Ru)`
    font-weight: bold;
    font-size: 22px;
    text-align: unset;
    
    color: ${e=>e.isRight&&"#4CAF50"};
    color: ${e=>e.isWrong&&"red"};
`,Zf=v.div`
    border: 1px solid rgb(169, 169, 169);
    border-radius: 8px;
    width: 100%;
    padding: 20px 0px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`,RS=v.div`
    padding: 30px 0px;
    border: 1px solid #a9a9a9;
    border-radius: 8px;
    width: calc(98% - 10px);
    margin: 0 auto;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`,PS=({isOpen:e,onClose:t,match:n})=>{const{question_file:r,team1_name:o,team2_name:i,team1_logo:s,team2_logo:l,current_question:a,id:u}=n,[c,d]=A.useState(null),[m,w]=A.useState(null),[y,x]=A.useState(!1),[C,h]=A.useState(null);return A.useEffect(()=>{e?(async()=>{var g,S,_,k,j;try{const b=await(await fetch(`https://oncolympics-assets.expression-egy.com/assets/matchesquestions/${r}`)).json(),z=(g=b==null?void 0:b.questions)==null?void 0:g[a],Q=await SS(u,a);let we=(S=z==null?void 0:z.answers)==null?void 0:S[Q==null?void 0:Q.team1answerid],Ue=(ut==null?void 0:ut[Q==null?void 0:Q.team1answerid])||"";we={...we,answer:`${Ue}${(we==null?void 0:we.answer)||""}`};let Se=(_=z==null?void 0:z.answers)==null?void 0:_[Q==null?void 0:Q.team2answerid],gt=(ut==null?void 0:ut[Q==null?void 0:Q.team2answerid])||"";Se={...Se,answer:`${gt}${(Se==null?void 0:Se.answer)||""}`};let Ge=(k=z==null?void 0:z.answers)==null?void 0:k.find(T=>T.correct),ot=ut[(j=z==null?void 0:z.answers)==null?void 0:j.findIndex(T=>T.correct)];Ge={...Ge,answer:`${ot}${Ge.answer}`},h(Ge),d(we),w(Se),x(!0)}catch(P){console.log(P)}})():(d(null),w(null),x(!1),h(null))},[a,u,e,n,r]),f.jsx(km,{isOpen:e,onClose:t,children:f.jsxs("div",{children:[f.jsx(kS,{children:f.jsx(ES,{children:"Teams answers"})}),f.jsxs(CS,{children:[f.jsx(Zf,{children:f.jsxs("div",{children:[f.jsx(Xf,{src:`https://oncolympics-assets.expression-egy.com/assets/teamslogos/${s}`,alt:"team1_logo"}),f.jsx(Jf,{children:o}),y?f.jsx("div",{children:f.jsx(ya,{isRight:c==null?void 0:c.correct,isWrong:!(c!=null&&c.correct),children:(c==null?void 0:c.answer)||"N/A"})}):""]})}),f.jsx(Zf,{children:f.jsxs("div",{children:[f.jsx(Xf,{src:`https://oncolympics-assets.expression-egy.com/assets/teamslogos/${l}`,alt:"team2_logo"}),f.jsx(Jf,{children:i}),y?f.jsx("div",{children:f.jsx(ya,{isRight:m==null?void 0:m.correct,isWrong:!(m!=null&&m.correct),children:(m==null?void 0:m.answer)||"N/A"})}):""]})})]}),C&&f.jsxs(RS,{children:[f.jsxs("div",{style:{display:"flex",gap:"0px"},children:[f.jsx(Ru,{isRight:!0,children:"Right Answer:"}),f.jsx(jS,{style:{margin:"15px 0"},isRight:!0,children:C.answer})]}),f.jsx(_S,{isRight:!0,children:C.reason})]})]})})};v.div`
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
`,ed=v.div`
    height: calc(100vh - 85px);
    display: flex;
    width: 100%;
    justify-content: center;
`,td=v.p`
    display: flex;
    height: fit-content;
    margin: auto;
    font-size: 28px;
    font-weight: 700;
`,Pm=v.div`
  display: grid;
  grid-template-columns: 1fr;
`;v(Pm)``;const ll=v.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  @media only screen and (max-width: 855px) {
    flex-direction: column;
  }
`,TS=v.div`
    padding: 40px;

    @media only screen and (max-width: 855px) {
      padding: 5px;
  }
`,OS=v.div`
    margin-bottom: 1.5rem;
`,$S=v.p`
    font-size: 22px;
    text-align: unset;
    color: #333;
    font-weight: 700;
    white-space: pre-line;
    @media only screen and (max-width: 855px) {
      font-size: 18px;
    }
`,NS=v.div`
    background-color: ${e=>e.isRight?"#4CAF50":"#ffffff"};
    color: ${e=>e.isRight?"#ffffff":"#333"};
    border: 1px solid #ccc;
    padding: 0px 30px;
    margin-bottom: 1rem;
    border-radius: 4px;
    text-align: left;
    font-size: 20px;
    font-weight: 700;
`,LS=v.p`
    
`,AS=v.p`
    padding: 40px;
    font-size: 22px;
    color: darkgreen;
    font-weight: 700;
    white-space: pre-line;
    background-color: #ffffff7d;
`,zS=v.div`
  font-size: 32px;
  text-align: unset;
  color: #333;
  font-weight: 700;

  @media only screen and (max-width: 855px) {
      font-size: 18px;
  }
`,MS=v.button`
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
`,IS=v.p`
  margin: auto;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
`,DS=v.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
  padding: 0;

  @media only screen and (max-width: 855px) {
      display: flex;
      flex-direction: column;
  }
`,FS=v.div`
  display: flex;
  @media only screen and (max-width: 855px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`,bS=v.div`
  width: fit-content;
  @media only screen and (max-width: 855px) {
    margin: 0px auto 35px auto;
  }
`,US=v.img`
    width: 40px;
    height: 40px;
    cursor: pointer;
    margin: 0px 30px;
`,BS="/assets/play-button-BnJzDZ_o.png",HS="/assets/pause-button-B4y1qv28.png",WS=v.div`
  display: flex;
  gap: 10px;
`,VS=v.div`
  font-size: 28px;
  font-weight: bold;
  color: red;
  width: fit-content;
  margin: auto;

  @media only screen and (max-width: 855px) {
      font-size: 18px;
  }
`,nd=v.img`
    width: 40px;
    height: 40px;
    cursor: pointer;
`,QS=({isChanged:e,stopCounter:t})=>{const[n,r]=A.useState(60),[o,i]=A.useState(!1);return A.useEffect(()=>{if(n>0&&o){const s=setInterval(()=>{r(l=>l-1)},1e3);return()=>clearInterval(s)}},[n,o]),A.useEffect(()=>{r(t?0:60)},[e,t]),f.jsxs(WS,{children:[f.jsx(VS,{children:`${n===0?"Timeout!":`${n} sec`}`}),o?f.jsx(nd,{onClick:()=>i(!o),src:HS,alt:"PauseImg"}):f.jsx(nd,{onClick:()=>i(!o),src:BS,alt:"PlayImg"})]})},KS=({toggleDetailsPopUp:e,teamCanAnswer:t,stopAnswer:n,matchDetails:r,questionFile:o,currentQuestion:i,setNumberOfQuestions:s})=>{var p,g;console.log(r);const[l,a]=A.useState([]),[u,c]=A.useState(!0),[d,m]=A.useState(null),[w,y]=A.useState(!1),[x,C]=A.useState(!1);if(A.useEffect(()=>{y(!1),C(!1)},[i]),A.useEffect(()=>{(async()=>{var _;try{const j=await(await fetch(`/public/assets/matchesquestions/${o}`)).json();a(j.questions),s((_=j==null?void 0:j.questions)==null?void 0:_.length),c(!1)}catch(k){m(k),c(!1)}})()},[o,s]),u)return f.jsx("div",{children:"Loading..."});if(d)return f.jsxs("div",{children:["Error: ",d.message]});const h=l[i];return f.jsxs(TS,{children:[f.jsxs(FS,{children:[f.jsxs("div",{style:{width:"100%"},children:[f.jsxs("div",{style:{display:"flex"},children:[f.jsx(zS,{children:`${i+1} / ${l==null?void 0:l.length}`}),f.jsxs("div",{style:{margin:"0 auto",display:"flex",justifyContent:"center"},children:[f.jsx("div",{style:{width:"145px"},children:f.jsx(QS,{isChanged:i,stopCounter:x})}),t&&f.jsx(US,{onClick:()=>{n(),C(!0)},src:"https://oncolympics-assets.expression-egy.com/assets/image/stopwatch.png",alt:"stopwatch"})]})]}),f.jsx(OS,{children:f.jsx($S,{children:h==null?void 0:h.question})})]}),f.jsx(bS,{children:r})]}),f.jsx(DS,{children:h==null?void 0:h.answers.map((S,_)=>f.jsx("div",{children:f.jsx(NS,{isRight:S.correct&&w,children:f.jsx(LS,{children:`${ut[_]}${S.answer}`})},_)},_))}),w&&f.jsx(AS,{children:`${ut[(p=h==null?void 0:h.answers)==null?void 0:p.findIndex(S=>S==null?void 0:S.correct)]} ${(g=h==null?void 0:h.answers.find(S=>S==null?void 0:S.correct))==null?void 0:g.reason}`}),f.jsx(MS,{onClick:()=>{y(!0),e(!0)},children:f.jsx(IS,{children:"Show Right Answer"})})]})},qS=()=>{const[e,t]=A.useState(!1),[n,r]=A.useState(null),[o,i]=A.useState(!0),[s,l]=A.useState(null),[a,u]=A.useState(0),[c,d]=A.useState(void 0),[m,w]=A.useState(void 0),y=async()=>{i(!0);try{const P=await pS();r(P),i(!1),d(void 0),w(void 0)}catch(P){l(P),i(!1)}};A.useEffect(()=>{y()},[]);const x=async()=>{i(!0);try{await hS(),y()}catch(P){console.error(P)}},C=async()=>{w(!0);try{await mS(),y()}catch(P){console.error(P)}},h=async()=>{try{await yS().then(()=>{y()})}catch(P){console.error(P)}},p=async()=>{try{await gS(),y()}catch(P){console.error(P)}},g=async()=>{d(!0);try{await vS().then(()=>{y()})}catch(P){console.error(P)}},S=async P=>{try{await xS(P).then(()=>y())}catch(b){console.error(b)}},_=async P=>{try{await wS(P).then(()=>y())}catch(b){console.error(b)}};if(s)return f.jsx(Pe,{isMatch:!0,children:f.jsx(ed,{children:f.jsxs(td,{children:["Error: ",s.message]})})});if((n==null?void 0:n.length)===0)return f.jsx(Pe,{isMatch:!0,children:f.jsx(ed,{children:f.jsx(td,{children:"No Matches Yet"})})});const k=n==null?void 0:n[0],j=(k==null?void 0:k.canAnswer)===1;if((k==null?void 0:k.match_status)===0)return f.jsx(Pe,{isMatch:!0,children:f.jsxs("div",{children:[f.jsx(wn,{isAdmin:!0,match:k}),f.jsx(ll,{id:"panel",children:f.jsx(Or,{onClick:x,children:f.jsx($r,{children:o?"Loading":"Start Match"})})})]})});if((k==null?void 0:k.match_status)===1)return f.jsxs(Pe,{isMatch:!0,children:[f.jsx(Pm,{children:f.jsxs("div",{children:[f.jsx(KS,{toggleDetailsPopUp:t,teamCanAnswer:j,stopAnswer:h,setNumberOfQuestions:u,questionFile:k==null?void 0:k.question_file,currentQuestion:k==null?void 0:k.current_question,matchDetails:f.jsx(wn,{isAdmin:!0,match:k,rewardTeam:S,penaltyTeam:_})}),f.jsxs(ll,{id:"panel",children:[a===(k==null?void 0:k.current_question)+1?f.jsx("div",{children:!j&&f.jsx(Or,{onClick:p,children:f.jsx($r,{children:"End Match"})})}):f.jsx("div",{children:!j&&f.jsx(Or,{onClick:C,children:f.jsx($r,{children:m?"Loading ...":"Next"})})}),f.jsx(Or,{onClick:g,children:f.jsx($r,{children:c?"Resetting ...":"Reset"})})]})]})}),e&&f.jsx(PS,{match:k,isOpen:e,onClose:()=>t(!1)})]});if((k==null?void 0:k.match_status)===2)return f.jsx(Pe,{isMatch:!0,children:f.jsxs("div",{children:[f.jsx(wn,{isAdmin:!0,match:k}),f.jsx(ll,{id:"panel",BtnsPanel:!0,children:f.jsx(Or,{onClick:g,children:f.jsx($r,{children:c?"Resetting ...":"Reset Match"})})})]})})},YS=v.div`
  display: flex;
  padding: 60px 0;
`,GS=v.img`
    width: 70%;
    margin: auto;
`,XS=()=>f.jsx(Pe,{children:f.jsx(YS,{children:f.jsx(GS,{src:"https://oncolympics-assets.expression-egy.com/assets/image/knockouts.png",alt:"knockouts"})})}),JS=v.div`
    background-image: linear-gradient(to right, white, transparent 125%), url(${"https://oncolympics-assets.expression-egy.com/assets"}/videos/Animation.gif);
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center;
`,Tm=_u`
  to {
    opacity: 1;
    transform: translateX(0);
  }
`,ZS=v.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  margin: 50px 0;
`;v.div`
  opacity: 0;
  transform: translateX(-100%);
  animation: ${Tm} 0.5s forwards;
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
`;const ek=v(hr)`
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
  animation: ${Tm} 1s forwards;
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
`,tk=v.img`
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
`;const nk=()=>{const e=Yh();return f.jsx(JS,{children:f.jsx("div",{style:{display:"flex",justifyContent:"space-between"},children:f.jsxs(ZS,{children:[f.jsx(tk,{src:"https://oncolympics-assets.expression-egy.com/assets/image/Oncolympics Logo.png",alt:"Oncolympics_Logo"}),e==null?void 0:e.map((t,n)=>f.jsx(ek,{exact:!0,to:t.route,activeClassName:"active",children:t.label},n))]})})})},rk=Co`
  position: absolute;
  margin-top: unset;
  width: 100%;
`;v.div`
    background-image: linear-gradient(to right, white, transparent 125%), url(${"https://oncolympics-assets.expression-egy.com/assets"}/image/landing.png);
    width: 100%;
    height: 100vh;
    background-size: cover;
    background-position: center;
`;const Om=_u`
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
  animation: ${Om} 0.5s forwards;
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
  animation: ${Om} 1s forwards;
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
`;const ok=v.div`
  @media only screen and (max-width: 855px) {
    display: none;
  }
`,ik=v.div`
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
`;const sk=()=>{const e=A.useRef(null);return f.jsxs(f.Fragment,{children:[f.jsx(ok,{children:f.jsx(Pe,{hidebackground:!0,extendChildContainer:rk,children:f.jsx("div",{children:f.jsxs("video",{ref:e,poster:"https://oncolympics-assets.expression-egy.com/assets/image/landing.png",autoPlay:!0,loop:!0,muted:!0,style:{width:"100%",height:"auto"},children:[f.jsx("source",{src:"https://oncolympics-assets.expression-egy.com/assets/videos/landingvideo.mp4",type:"video/mp4"}),"Your browser does not support the video tag."]})})})}),f.jsx(ik,{children:f.jsx(nk,{})})]})},lk=()=>f.jsx(xh,{children:f.jsxs(mu,{children:[f.jsx(at,{exact:!0,path:"/",component:sk}),f.jsx(at,{exact:!0,path:"/login",component:cw}),f.jsx(at,{path:"/groups",component:mw}),f.jsx(at,{path:"/knockouts",component:XS}),f.jsx(at,{path:"/schedule",component:tS}),f.jsx(at,{path:"/yourmatch",component:dS}),f.jsx(at,{path:"/matchmoderator",component:qS}),f.jsx(us,{to:"/"})]})});mh(document.getElementById("root")).render(f.jsx(lk,{}));
