import{l as F,m as C,n as _,o as N,g as l,p as u,f as E,a as v,q as K,r as R}from"./isEqual-DHsF_i4S.js";import{a9 as q,aa as S,m as B,f as W,i as Y,ab as H}from"./focus-trap-DG7KuklN.js";import{c as y,k as j,g as J,a as x,b as Q,d as V,e as X,i as Z}from"./_initCloneObject-D2waUEFG.js";function z(e,r){for(var n=-1,s=e==null?0:e.length;++n<s&&r(e[n],n,e)!==!1;);return e}function k(e,r){return e&&y(r,F(r),e)}function ee(e,r){return e&&y(r,j(r),e)}function re(e,r){return y(e,C(e),r)}var te=Object.getOwnPropertySymbols,L=te?function(e){for(var r=[];e;)q(r,C(e)),e=J(e);return r}:_;function ne(e,r){return y(e,L(e),r)}function ae(e){return N(e,j,L)}var oe=Object.prototype,se=oe.hasOwnProperty;function ce(e){var r=e.length,n=new e.constructor(r);return r&&typeof e[0]=="string"&&se.call(e,"index")&&(n.index=e.index,n.input=e.input),n}function ie(e,r){var n=r?x(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var fe=/\w*$/;function be(e){var r=new e.constructor(e.source,fe.exec(e));return r.lastIndex=e.lastIndex,r}var O=S?S.prototype:void 0,w=O?O.valueOf:void 0;function ge(e){return w?Object(w.call(e)):{}}var ue="[object Boolean]",ye="[object Date]",Te="[object Map]",le="[object Number]",je="[object RegExp]",pe="[object Set]",Ae="[object String]",me="[object Symbol]",de="[object ArrayBuffer]",$e="[object DataView]",Se="[object Float32Array]",Oe="[object Float64Array]",we="[object Int8Array]",Ie="[object Int16Array]",he="[object Int32Array]",Fe="[object Uint8Array]",Ce="[object Uint8ClampedArray]",Ee="[object Uint16Array]",Be="[object Uint32Array]";function xe(e,r,n){var s=e.constructor;switch(r){case de:return x(e);case ue:case ye:return new s(+e);case $e:return ie(e,n);case Se:case Oe:case we:case Ie:case he:case Fe:case Ce:case Ee:case Be:return Q(e,n);case Te:return new s;case le:case Ae:return new s(e);case je:return be(e);case pe:return new s;case me:return ge(e)}}var Le="[object Map]";function Me(e){return B(e)&&l(e)==Le}var I=u&&u.isMap,Ue=I?E(I):Me,Pe="[object Set]";function De(e){return B(e)&&l(e)==Pe}var h=u&&u.isSet,Ge=h?E(h):De,_e=1,Ne=2,ve=4,M="[object Arguments]",Ke="[object Array]",Re="[object Boolean]",qe="[object Date]",We="[object Error]",U="[object Function]",Ye="[object GeneratorFunction]",He="[object Map]",Je="[object Number]",P="[object Object]",Qe="[object RegExp]",Ve="[object Set]",Xe="[object String]",Ze="[object Symbol]",ze="[object WeakMap]",ke="[object ArrayBuffer]",er="[object DataView]",rr="[object Float32Array]",tr="[object Float64Array]",nr="[object Int8Array]",ar="[object Int16Array]",or="[object Int32Array]",sr="[object Uint8Array]",cr="[object Uint8ClampedArray]",ir="[object Uint16Array]",fr="[object Uint32Array]",t={};t[M]=t[Ke]=t[ke]=t[er]=t[Re]=t[qe]=t[rr]=t[tr]=t[nr]=t[ar]=t[or]=t[He]=t[Je]=t[P]=t[Qe]=t[Ve]=t[Xe]=t[Ze]=t[sr]=t[cr]=t[ir]=t[fr]=!0;t[We]=t[U]=t[ze]=!1;function T(e,r,n,s,p,c){var a,b=r&_e,g=r&Ne,D=r&ve;if(a!==void 0)return a;if(!W(e))return e;var A=Y(e);if(A){if(a=ce(e),!b)return V(e,a)}else{var f=l(e),m=f==U||f==Ye;if(v(e))return X(e,b);if(f==P||f==M||m&&!p){if(a=g||m?{}:Z(e),!b)return g?ne(e,ee(a,e)):re(e,k(a,e))}else{if(!t[f])return p?e:{};a=xe(e,f,b)}}c||(c=new K);var d=c.get(e);if(d)return d;c.set(e,a),Ge(e)?e.forEach(function(o){a.add(T(o,r,n,o,e,c))}):Ue(e)&&e.forEach(function(o,i){a.set(i,T(o,r,n,i,e,c))});var G=D?g?ae:R:g?j:F,$=A?void 0:G(e);return z($||e,function(o,i){$&&(i=o,o=e[i]),H(a,i,T(o,r,n,i,e,c))}),a}export{T as b};
