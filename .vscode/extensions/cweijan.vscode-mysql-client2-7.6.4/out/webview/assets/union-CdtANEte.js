import{h as I}from"./focus-trap-DG7KuklN.js";import{b as w,i as m}from"./isArrayLikeObject-t1WFdFiN.js";import{k as u,s as g,S as p,c as A}from"./isEqual-DHsF_i4S.js";import{b as S}from"./_baseFindIndex-D7XfJLKM.js";function x(){}function N(n){return n!==n}function R(n,e,t){for(var i=t-1,o=n.length;++i<o;)if(n[i]===e)return i;return-1}function F(n,e,t){return e===e?R(n,e,t):S(n,N,t)}function O(n,e){var t=n==null?0:n.length;return!!t&&F(n,e,0)>-1}var d=1/0,k=u&&1/g(new u([,-0]))[1]==d?function(n){return new u(n)}:x,v=200;function C(n,e,t){var i=-1,o=O,h=n.length,c=!0,s=[],r=s;if(h>=v){var l=k(n);if(l)return g(l);c=!1,o=A,r=new p}else r=s;n:for(;++i<h;){var f=n[i],a=f;if(f=f!==0?f:0,c&&a===a){for(var b=r.length;b--;)if(r[b]===a)continue n;s.push(f)}else o(r,a,t)||(r!==s&&r.push(a),s.push(f))}return s}var _=w(function(n){return C(I(n,1,m,!0))});export{O as a,C as b,_ as u};
