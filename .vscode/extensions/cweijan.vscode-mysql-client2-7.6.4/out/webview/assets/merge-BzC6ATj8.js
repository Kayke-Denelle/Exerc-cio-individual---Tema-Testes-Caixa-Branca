import{i as b,l as M,a as S,b as T,q as _}from"./isEqual-DHsF_i4S.js";import{f as v,ai as x,e as A,m as I,n as L,j as R,i as y,l as c,aj as q}from"./focus-trap-DG7KuklN.js";import{g as B,c as E,k as P,d as G,e as D,b as V,i as j}from"./_initCloneObject-D2waUEFG.js";import{b as H,i as J}from"./isArrayLikeObject-t1WFdFiN.js";function K(r,e,n){if(!v(n))return!1;var i=typeof e;return(i=="number"?b(n)&&x(e,n.length):i=="string"&&e in n)?A(n[e],r):!1}function N(r){return H(function(e,n){var i=-1,f=n.length,a=f>1?n[f-1]:void 0,t=f>2?n[2]:void 0;for(a=r.length>3&&typeof a=="function"?(f--,a):void 0,t&&K(n[0],n[1],t)&&(a=f<3?void 0:a,f=1),e=Object(e);++i<f;){var s=n[i];s&&r(e,s,i,a)}return e})}var Q="[object Object]",U=Function.prototype,W=Object.prototype,w=U.toString,X=W.hasOwnProperty,Y=w.call(Object);function Z(r){if(!I(r)||L(r)!=Q)return!1;var e=B(r);if(e===null)return!0;var n=X.call(e,"constructor")&&e.constructor;return typeof n=="function"&&n instanceof n&&w.call(n)==Y}function $(r){return function(e,n,i){for(var f=-1,a=Object(e),t=i(e),s=t.length;s--;){var u=t[++f];if(n(a[u],u,a)===!1)break}return e}}var C=$();function z(r,e){return r&&C(r,e,M)}function k(r,e){return function(n,i){if(n==null)return n;if(!b(n))return r(n,i);for(var f=n.length,a=-1,t=Object(n);++a<f&&i(t[a],a,t)!==!1;);return n}}var nn=k(z);function p(r,e,n){(n!==void 0&&!A(r[e],n)||n===void 0&&!(e in r))&&R(r,e,n)}function h(r,e){if(!(e==="constructor"&&typeof r[e]=="function")&&e!="__proto__")return r[e]}function rn(r){return E(r,P(r))}function en(r,e,n,i,f,a,t){var s=h(r,n),u=h(e,n),O=t.get(u);if(O){p(r,n,O);return}var o=a?a(s,u,n+"",r,e,t):void 0,l=o===void 0;if(l){var d=y(u),g=!d&&S(u),m=!d&&!g&&T(u);o=u,d||g||m?y(s)?o=s:J(s)?o=G(s):g?(l=!1,o=D(u,!0)):m?(l=!1,o=V(u,!0)):o=[]:Z(u)||c(u)?(o=s,c(s)?o=rn(s):(!v(s)||q(s))&&(o=j(u))):l=!1}l&&(t.set(u,o),f(o,u,i,a,t),t.delete(u)),p(r,n,o)}function F(r,e,n,i,f){r!==e&&C(e,function(a,t){if(f||(f=new _),v(a))en(r,e,t,n,F,i,f);else{var s=i?i(h(r,t),a,t+"",r,e,f):void 0;s===void 0&&(s=a),p(r,t,s)}},P)}function un(r,e){var n=-1,i=b(r)?Array(r.length):[];return nn(r,function(f,a,t){i[++n]=e(f,a,t)}),i}var on=N(function(r,e,n){F(r,e,n)});export{F as a,nn as b,N as c,un as d,Z as e,K as i,on as m};