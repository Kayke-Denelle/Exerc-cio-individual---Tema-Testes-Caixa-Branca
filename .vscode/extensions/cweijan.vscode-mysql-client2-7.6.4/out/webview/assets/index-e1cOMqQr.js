import{aN as kt,d as I,B as Oe,F as Ft,aO as yt,aP as hn,aQ as yn,aR as bn,b as ee,N as Ze,_ as se,a as Se,aS as _t,ae as $e,T as jt,R as Dt,ap as wn,a5 as bt,as as On,Q as Lt,E as wt,aE as Tn,y as En}from"./focus-trap-DG7KuklN.js";import{c as A,af as De,w as j,C as qe,M as Cn,u as f,L as Rn,r as F,O as Me,am as An,p as Ce,d as L,S as ie,i as le,o as Z,a as He,n as Nt,I as Pn,ag as Je,V as $t,R as xn,az as Sn,F as Mn,T as In,K as Bn,f as Re,l as fe,q as te,m as Xe,b as Ae,g as kn,a9 as we,X as Fn,ap as _n,a0 as jn,aL as Dn,aM as Ln,t as Nn}from"./app-2NaTuxnu.js";import{i as $n}from"./isUndefined-DCTLXrZ8.js";const Q=(e,t,{checkForDefaultPrevented:n=!0}={})=>r=>{const a=e==null?void 0:e(r);if(n===!1||!a)return t==null?void 0:t(r)},Hn=kt({type:I(Boolean),default:null}),Wn=kt({type:I(Function)}),Ht=e=>{const t=`update:${e}`,n=`onUpdate:${e}`,o=[t],r={[e]:Hn,[n]:Wn};return{useModelToggle:({indicator:i,toggleReason:u,shouldHideWhenRouteChanges:s,shouldProceed:l,onShow:c,onHide:d})=>{const y=Cn(),{emit:g}=y,m=y.props,v=A(()=>De(m[n])),T=A(()=>m[e]===null),p=O=>{i.value!==!0&&(i.value=!0,u&&(u.value=O),De(c)&&c(O))},w=O=>{i.value!==!1&&(i.value=!1,u&&(u.value=O),De(d)&&d(O))},E=O=>{if(m.disabled===!0||De(l)&&!l())return;const R=v.value&&Oe;R&&g(t,!0),(T.value||!R)&&p(O)},h=O=>{if(m.disabled===!0||!Oe)return;const R=v.value&&Oe;R&&g(t,!1),(T.value||!R)&&w(O)},C=O=>{Ft(O)&&(m.disabled&&O?v.value&&g(t,!1):i.value!==O&&(O?p():w()))},P=()=>{i.value?h():E()};return j(()=>m[e],C),s&&y.appContext.config.globalProperties.$route!==void 0&&j(()=>({...y.proxy.$route}),()=>{s.value&&i.value&&h()}),qe(()=>{C(m[e])}),{hide:h,show:E,toggle:P,hasUpdateHandler:v}},useModelToggleProps:r,useModelToggleEmits:o}};Ht("modelValue");var H="top",K="bottom",z="right",W="left",Qe="auto",Ie=[H,K,z,W],ce="start",Pe="end",qn="clippingParents",Wt="viewport",be="popper",Kn="reference",Ot=Ie.reduce(function(e,t){return e.concat([t+"-"+ce,t+"-"+Pe])},[]),Ye=[].concat(Ie,[Qe]).reduce(function(e,t){return e.concat([t,t+"-"+ce,t+"-"+Pe])},[]),zn="beforeRead",Un="read",Vn="afterRead",Zn="beforeMain",Jn="main",Gn="afterMain",Xn="beforeWrite",Qn="write",Yn="afterWrite",eo=[zn,Un,Vn,Zn,Jn,Gn,Xn,Qn,Yn];function G(e){return e?(e.nodeName||"").toLowerCase():null}function U(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function de(e){var t=U(e).Element;return e instanceof t||e instanceof Element}function q(e){var t=U(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function et(e){if(typeof ShadowRoot>"u")return!1;var t=U(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function to(e){var t=e.state;Object.keys(t.elements).forEach(function(n){var o=t.styles[n]||{},r=t.attributes[n]||{},a=t.elements[n];!q(a)||!G(a)||(Object.assign(a.style,o),Object.keys(r).forEach(function(i){var u=r[i];u===!1?a.removeAttribute(i):a.setAttribute(i,u===!0?"":u)}))})}function no(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(o){var r=t.elements[o],a=t.attributes[o]||{},i=Object.keys(t.styles.hasOwnProperty(o)?t.styles[o]:n[o]),u=i.reduce(function(s,l){return s[l]="",s},{});!q(r)||!G(r)||(Object.assign(r.style,u),Object.keys(a).forEach(function(s){r.removeAttribute(s)}))})}}var qt={name:"applyStyles",enabled:!0,phase:"write",fn:to,effect:no,requires:["computeStyles"]};function J(e){return e.split("-")[0]}var ae=Math.max,We=Math.min,ve=Math.round;function ge(e,t){t===void 0&&(t=!1);var n=e.getBoundingClientRect(),o=1,r=1;if(q(e)&&t){var a=e.offsetHeight,i=e.offsetWidth;i>0&&(o=ve(n.width)/i||1),a>0&&(r=ve(n.height)/a||1)}return{width:n.width/o,height:n.height/r,top:n.top/r,right:n.right/o,bottom:n.bottom/r,left:n.left/o,x:n.left/o,y:n.top/r}}function tt(e){var t=ge(e),n=e.offsetWidth,o=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-o)<=1&&(o=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:o}}function Kt(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&et(n)){var o=t;do{if(o&&e.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function Y(e){return U(e).getComputedStyle(e)}function oo(e){return["table","td","th"].indexOf(G(e))>=0}function ne(e){return((de(e)?e.ownerDocument:e.document)||window.document).documentElement}function Ke(e){return G(e)==="html"?e:e.assignedSlot||e.parentNode||(et(e)?e.host:null)||ne(e)}function Tt(e){return!q(e)||Y(e).position==="fixed"?null:e.offsetParent}function ro(e){var t=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,n=navigator.userAgent.indexOf("Trident")!==-1;if(n&&q(e)){var o=Y(e);if(o.position==="fixed")return null}var r=Ke(e);for(et(r)&&(r=r.host);q(r)&&["html","body"].indexOf(G(r))<0;){var a=Y(r);if(a.transform!=="none"||a.perspective!=="none"||a.contain==="paint"||["transform","perspective"].indexOf(a.willChange)!==-1||t&&a.willChange==="filter"||t&&a.filter&&a.filter!=="none")return r;r=r.parentNode}return null}function Be(e){for(var t=U(e),n=Tt(e);n&&oo(n)&&Y(n).position==="static";)n=Tt(n);return n&&(G(n)==="html"||G(n)==="body"&&Y(n).position==="static")?t:n||ro(e)||t}function nt(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Te(e,t,n){return ae(e,We(t,n))}function ao(e,t,n){var o=Te(e,t,n);return o>n?n:o}function zt(){return{top:0,right:0,bottom:0,left:0}}function Ut(e){return Object.assign({},zt(),e)}function Vt(e,t){return t.reduce(function(n,o){return n[o]=e,n},{})}var io=function(e,t){return e=typeof e=="function"?e(Object.assign({},t.rects,{placement:t.placement})):e,Ut(typeof e!="number"?e:Vt(e,Ie))};function so(e){var t,n=e.state,o=e.name,r=e.options,a=n.elements.arrow,i=n.modifiersData.popperOffsets,u=J(n.placement),s=nt(u),l=[W,z].indexOf(u)>=0,c=l?"height":"width";if(!(!a||!i)){var d=io(r.padding,n),y=tt(a),g=s==="y"?H:W,m=s==="y"?K:z,v=n.rects.reference[c]+n.rects.reference[s]-i[s]-n.rects.popper[c],T=i[s]-n.rects.reference[s],p=Be(a),w=p?s==="y"?p.clientHeight||0:p.clientWidth||0:0,E=v/2-T/2,h=d[g],C=w-y[c]-d[m],P=w/2-y[c]/2+E,O=Te(h,P,C),R=s;n.modifiersData[o]=(t={},t[R]=O,t.centerOffset=O-P,t)}}function lo(e){var t=e.state,n=e.options,o=n.element,r=o===void 0?"[data-popper-arrow]":o;r!=null&&(typeof r=="string"&&(r=t.elements.popper.querySelector(r),!r)||!Kt(t.elements.popper,r)||(t.elements.arrow=r))}var uo={name:"arrow",enabled:!0,phase:"main",fn:so,effect:lo,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function me(e){return e.split("-")[1]}var po={top:"auto",right:"auto",bottom:"auto",left:"auto"};function fo(e){var t=e.x,n=e.y,o=window,r=o.devicePixelRatio||1;return{x:ve(t*r)/r||0,y:ve(n*r)/r||0}}function Et(e){var t,n=e.popper,o=e.popperRect,r=e.placement,a=e.variation,i=e.offsets,u=e.position,s=e.gpuAcceleration,l=e.adaptive,c=e.roundOffsets,d=e.isFixed,y=i.x,g=y===void 0?0:y,m=i.y,v=m===void 0?0:m,T=typeof c=="function"?c({x:g,y:v}):{x:g,y:v};g=T.x,v=T.y;var p=i.hasOwnProperty("x"),w=i.hasOwnProperty("y"),E=W,h=H,C=window;if(l){var P=Be(n),O="clientHeight",R="clientWidth";if(P===U(n)&&(P=ne(n),Y(P).position!=="static"&&u==="absolute"&&(O="scrollHeight",R="scrollWidth")),P=P,r===H||(r===W||r===z)&&a===Pe){h=K;var k=d&&P===C&&C.visualViewport?C.visualViewport.height:P[O];v-=k-o.height,v*=s?1:-1}if(r===W||(r===H||r===K)&&a===Pe){E=z;var x=d&&P===C&&C.visualViewport?C.visualViewport.width:P[R];g-=x-o.width,g*=s?1:-1}}var M=Object.assign({position:u},l&&po),D=c===!0?fo({x:g,y:v}):{x:g,y:v};if(g=D.x,v=D.y,s){var S;return Object.assign({},M,(S={},S[h]=w?"0":"",S[E]=p?"0":"",S.transform=(C.devicePixelRatio||1)<=1?"translate("+g+"px, "+v+"px)":"translate3d("+g+"px, "+v+"px, 0)",S))}return Object.assign({},M,(t={},t[h]=w?v+"px":"",t[E]=p?g+"px":"",t.transform="",t))}function co(e){var t=e.state,n=e.options,o=n.gpuAcceleration,r=o===void 0?!0:o,a=n.adaptive,i=a===void 0?!0:a,u=n.roundOffsets,s=u===void 0?!0:u,l={placement:J(t.placement),variation:me(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,Et(Object.assign({},l,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:i,roundOffsets:s})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,Et(Object.assign({},l,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:s})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var Zt={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:co,data:{}},Le={passive:!0};function vo(e){var t=e.state,n=e.instance,o=e.options,r=o.scroll,a=r===void 0?!0:r,i=o.resize,u=i===void 0?!0:i,s=U(t.elements.popper),l=[].concat(t.scrollParents.reference,t.scrollParents.popper);return a&&l.forEach(function(c){c.addEventListener("scroll",n.update,Le)}),u&&s.addEventListener("resize",n.update,Le),function(){a&&l.forEach(function(c){c.removeEventListener("scroll",n.update,Le)}),u&&s.removeEventListener("resize",n.update,Le)}}var Jt={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:vo,data:{}},go={left:"right",right:"left",bottom:"top",top:"bottom"};function Ne(e){return e.replace(/left|right|bottom|top/g,function(t){return go[t]})}var mo={start:"end",end:"start"};function Ct(e){return e.replace(/start|end/g,function(t){return mo[t]})}function ot(e){var t=U(e),n=t.pageXOffset,o=t.pageYOffset;return{scrollLeft:n,scrollTop:o}}function rt(e){return ge(ne(e)).left+ot(e).scrollLeft}function ho(e){var t=U(e),n=ne(e),o=t.visualViewport,r=n.clientWidth,a=n.clientHeight,i=0,u=0;return o&&(r=o.width,a=o.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(i=o.offsetLeft,u=o.offsetTop)),{width:r,height:a,x:i+rt(e),y:u}}function yo(e){var t,n=ne(e),o=ot(e),r=(t=e.ownerDocument)==null?void 0:t.body,a=ae(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),i=ae(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),u=-o.scrollLeft+rt(e),s=-o.scrollTop;return Y(r||n).direction==="rtl"&&(u+=ae(n.clientWidth,r?r.clientWidth:0)-a),{width:a,height:i,x:u,y:s}}function at(e){var t=Y(e),n=t.overflow,o=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+r+o)}function Gt(e){return["html","body","#document"].indexOf(G(e))>=0?e.ownerDocument.body:q(e)&&at(e)?e:Gt(Ke(e))}function Ee(e,t){var n;t===void 0&&(t=[]);var o=Gt(e),r=o===((n=e.ownerDocument)==null?void 0:n.body),a=U(o),i=r?[a].concat(a.visualViewport||[],at(o)?o:[]):o,u=t.concat(i);return r?u:u.concat(Ee(Ke(i)))}function Ge(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function bo(e){var t=ge(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}function Rt(e,t){return t===Wt?Ge(ho(e)):de(t)?bo(t):Ge(yo(ne(e)))}function wo(e){var t=Ee(Ke(e)),n=["absolute","fixed"].indexOf(Y(e).position)>=0,o=n&&q(e)?Be(e):e;return de(o)?t.filter(function(r){return de(r)&&Kt(r,o)&&G(r)!=="body"}):[]}function Oo(e,t,n){var o=t==="clippingParents"?wo(e):[].concat(t),r=[].concat(o,[n]),a=r[0],i=r.reduce(function(u,s){var l=Rt(e,s);return u.top=ae(l.top,u.top),u.right=We(l.right,u.right),u.bottom=We(l.bottom,u.bottom),u.left=ae(l.left,u.left),u},Rt(e,a));return i.width=i.right-i.left,i.height=i.bottom-i.top,i.x=i.left,i.y=i.top,i}function Xt(e){var t=e.reference,n=e.element,o=e.placement,r=o?J(o):null,a=o?me(o):null,i=t.x+t.width/2-n.width/2,u=t.y+t.height/2-n.height/2,s;switch(r){case H:s={x:i,y:t.y-n.height};break;case K:s={x:i,y:t.y+t.height};break;case z:s={x:t.x+t.width,y:u};break;case W:s={x:t.x-n.width,y:u};break;default:s={x:t.x,y:t.y}}var l=r?nt(r):null;if(l!=null){var c=l==="y"?"height":"width";switch(a){case ce:s[l]=s[l]-(t[c]/2-n[c]/2);break;case Pe:s[l]=s[l]+(t[c]/2-n[c]/2);break}}return s}function xe(e,t){t===void 0&&(t={});var n=t,o=n.placement,r=o===void 0?e.placement:o,a=n.boundary,i=a===void 0?qn:a,u=n.rootBoundary,s=u===void 0?Wt:u,l=n.elementContext,c=l===void 0?be:l,d=n.altBoundary,y=d===void 0?!1:d,g=n.padding,m=g===void 0?0:g,v=Ut(typeof m!="number"?m:Vt(m,Ie)),T=c===be?Kn:be,p=e.rects.popper,w=e.elements[y?T:c],E=Oo(de(w)?w:w.contextElement||ne(e.elements.popper),i,s),h=ge(e.elements.reference),C=Xt({reference:h,element:p,strategy:"absolute",placement:r}),P=Ge(Object.assign({},p,C)),O=c===be?P:h,R={top:E.top-O.top+v.top,bottom:O.bottom-E.bottom+v.bottom,left:E.left-O.left+v.left,right:O.right-E.right+v.right},k=e.modifiersData.offset;if(c===be&&k){var x=k[r];Object.keys(R).forEach(function(M){var D=[z,K].indexOf(M)>=0?1:-1,S=[H,K].indexOf(M)>=0?"y":"x";R[M]+=x[S]*D})}return R}function To(e,t){t===void 0&&(t={});var n=t,o=n.placement,r=n.boundary,a=n.rootBoundary,i=n.padding,u=n.flipVariations,s=n.allowedAutoPlacements,l=s===void 0?Ye:s,c=me(o),d=c?u?Ot:Ot.filter(function(m){return me(m)===c}):Ie,y=d.filter(function(m){return l.indexOf(m)>=0});y.length===0&&(y=d);var g=y.reduce(function(m,v){return m[v]=xe(e,{placement:v,boundary:r,rootBoundary:a,padding:i})[J(v)],m},{});return Object.keys(g).sort(function(m,v){return g[m]-g[v]})}function Eo(e){if(J(e)===Qe)return[];var t=Ne(e);return[Ct(e),t,Ct(t)]}function Co(e){var t=e.state,n=e.options,o=e.name;if(!t.modifiersData[o]._skip){for(var r=n.mainAxis,a=r===void 0?!0:r,i=n.altAxis,u=i===void 0?!0:i,s=n.fallbackPlacements,l=n.padding,c=n.boundary,d=n.rootBoundary,y=n.altBoundary,g=n.flipVariations,m=g===void 0?!0:g,v=n.allowedAutoPlacements,T=t.options.placement,p=J(T),w=p===T,E=s||(w||!m?[Ne(T)]:Eo(T)),h=[T].concat(E).reduce(function(oe,X){return oe.concat(J(X)===Qe?To(t,{placement:X,boundary:c,rootBoundary:d,padding:l,flipVariations:m,allowedAutoPlacements:v}):X)},[]),C=t.rects.reference,P=t.rects.popper,O=new Map,R=!0,k=h[0],x=0;x<h.length;x++){var M=h[x],D=J(M),S=me(M)===ce,N=[H,K].indexOf(D)>=0,_=N?"width":"height",B=xe(t,{placement:M,boundary:c,rootBoundary:d,altBoundary:y,padding:l}),b=N?S?z:W:S?K:H;C[_]>P[_]&&(b=Ne(b));var $=Ne(b),V=[];if(a&&V.push(B[D]<=0),u&&V.push(B[b]<=0,B[$]<=0),V.every(function(oe){return oe})){k=M,R=!1;break}O.set(M,V)}if(R)for(var ke=m?3:1,ze=function(oe){var X=h.find(function(_e){var ye=O.get(_e);if(ye)return ye.slice(0,oe).every(function(ue){return ue})});if(X)return k=X,"break"},he=ke;he>0;he--){var Fe=ze(he);if(Fe==="break")break}t.placement!==k&&(t.modifiersData[o]._skip=!0,t.placement=k,t.reset=!0)}}var Ro={name:"flip",enabled:!0,phase:"main",fn:Co,requiresIfExists:["offset"],data:{_skip:!1}};function At(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Pt(e){return[H,z,K,W].some(function(t){return e[t]>=0})}function Ao(e){var t=e.state,n=e.name,o=t.rects.reference,r=t.rects.popper,a=t.modifiersData.preventOverflow,i=xe(t,{elementContext:"reference"}),u=xe(t,{altBoundary:!0}),s=At(i,o),l=At(u,r,a),c=Pt(s),d=Pt(l);t.modifiersData[n]={referenceClippingOffsets:s,popperEscapeOffsets:l,isReferenceHidden:c,hasPopperEscaped:d},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":d})}var Po={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Ao};function xo(e,t,n){var o=J(e),r=[W,H].indexOf(o)>=0?-1:1,a=typeof n=="function"?n(Object.assign({},t,{placement:e})):n,i=a[0],u=a[1];return i=i||0,u=(u||0)*r,[W,z].indexOf(o)>=0?{x:u,y:i}:{x:i,y:u}}function So(e){var t=e.state,n=e.options,o=e.name,r=n.offset,a=r===void 0?[0,0]:r,i=Ye.reduce(function(c,d){return c[d]=xo(d,t.rects,a),c},{}),u=i[t.placement],s=u.x,l=u.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=s,t.modifiersData.popperOffsets.y+=l),t.modifiersData[o]=i}var Mo={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:So};function Io(e){var t=e.state,n=e.name;t.modifiersData[n]=Xt({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var Qt={name:"popperOffsets",enabled:!0,phase:"read",fn:Io,data:{}};function Bo(e){return e==="x"?"y":"x"}function ko(e){var t=e.state,n=e.options,o=e.name,r=n.mainAxis,a=r===void 0?!0:r,i=n.altAxis,u=i===void 0?!1:i,s=n.boundary,l=n.rootBoundary,c=n.altBoundary,d=n.padding,y=n.tether,g=y===void 0?!0:y,m=n.tetherOffset,v=m===void 0?0:m,T=xe(t,{boundary:s,rootBoundary:l,padding:d,altBoundary:c}),p=J(t.placement),w=me(t.placement),E=!w,h=nt(p),C=Bo(h),P=t.modifiersData.popperOffsets,O=t.rects.reference,R=t.rects.popper,k=typeof v=="function"?v(Object.assign({},t.rects,{placement:t.placement})):v,x=typeof k=="number"?{mainAxis:k,altAxis:k}:Object.assign({mainAxis:0,altAxis:0},k),M=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,D={x:0,y:0};if(P){if(a){var S,N=h==="y"?H:W,_=h==="y"?K:z,B=h==="y"?"height":"width",b=P[h],$=b+T[N],V=b-T[_],ke=g?-R[B]/2:0,ze=w===ce?O[B]:R[B],he=w===ce?-R[B]:-O[B],Fe=t.elements.arrow,oe=g&&Fe?tt(Fe):{width:0,height:0},X=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:zt(),_e=X[N],ye=X[_],ue=Te(0,O[B],oe[B]),pn=E?O[B]/2-ke-ue-_e-x.mainAxis:ze-ue-_e-x.mainAxis,fn=E?-O[B]/2+ke+ue+ye+x.mainAxis:he+ue+ye+x.mainAxis,Ue=t.elements.arrow&&Be(t.elements.arrow),cn=Ue?h==="y"?Ue.clientTop||0:Ue.clientLeft||0:0,ut=(S=M==null?void 0:M[h])!=null?S:0,dn=b+pn-ut-cn,vn=b+fn-ut,pt=Te(g?We($,dn):$,b,g?ae(V,vn):V);P[h]=pt,D[h]=pt-b}if(u){var ft,gn=h==="x"?H:W,mn=h==="x"?K:z,re=P[C],je=C==="y"?"height":"width",ct=re+T[gn],dt=re-T[mn],Ve=[H,W].indexOf(p)!==-1,vt=(ft=M==null?void 0:M[C])!=null?ft:0,gt=Ve?ct:re-O[je]-R[je]-vt+x.altAxis,mt=Ve?re+O[je]+R[je]-vt-x.altAxis:dt,ht=g&&Ve?ao(gt,re,mt):Te(g?gt:ct,re,g?mt:dt);P[C]=ht,D[C]=ht-re}t.modifiersData[o]=D}}var Fo={name:"preventOverflow",enabled:!0,phase:"main",fn:ko,requiresIfExists:["offset"]};function _o(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function jo(e){return e===U(e)||!q(e)?ot(e):_o(e)}function Do(e){var t=e.getBoundingClientRect(),n=ve(t.width)/e.offsetWidth||1,o=ve(t.height)/e.offsetHeight||1;return n!==1||o!==1}function Lo(e,t,n){n===void 0&&(n=!1);var o=q(t),r=q(t)&&Do(t),a=ne(t),i=ge(e,r),u={scrollLeft:0,scrollTop:0},s={x:0,y:0};return(o||!o&&!n)&&((G(t)!=="body"||at(a))&&(u=jo(t)),q(t)?(s=ge(t,!0),s.x+=t.clientLeft,s.y+=t.clientTop):a&&(s.x=rt(a))),{x:i.left+u.scrollLeft-s.x,y:i.top+u.scrollTop-s.y,width:i.width,height:i.height}}function No(e){var t=new Map,n=new Set,o=[];e.forEach(function(a){t.set(a.name,a)});function r(a){n.add(a.name);var i=[].concat(a.requires||[],a.requiresIfExists||[]);i.forEach(function(u){if(!n.has(u)){var s=t.get(u);s&&r(s)}}),o.push(a)}return e.forEach(function(a){n.has(a.name)||r(a)}),o}function $o(e){var t=No(e);return eo.reduce(function(n,o){return n.concat(t.filter(function(r){return r.phase===o}))},[])}function Ho(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function Wo(e){var t=e.reduce(function(n,o){var r=n[o.name];return n[o.name]=r?Object.assign({},r,o,{options:Object.assign({},r.options,o.options),data:Object.assign({},r.data,o.data)}):o,n},{});return Object.keys(t).map(function(n){return t[n]})}var xt={placement:"bottom",modifiers:[],strategy:"absolute"};function St(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(o){return!(o&&typeof o.getBoundingClientRect=="function")})}function it(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,o=n===void 0?[]:n,r=t.defaultOptions,a=r===void 0?xt:r;return function(i,u,s){s===void 0&&(s=a);var l={placement:"bottom",orderedModifiers:[],options:Object.assign({},xt,a),modifiersData:{},elements:{reference:i,popper:u},attributes:{},styles:{}},c=[],d=!1,y={state:l,setOptions:function(v){var T=typeof v=="function"?v(l.options):v;m(),l.options=Object.assign({},a,l.options,T),l.scrollParents={reference:de(i)?Ee(i):i.contextElement?Ee(i.contextElement):[],popper:Ee(u)};var p=$o(Wo([].concat(o,l.options.modifiers)));return l.orderedModifiers=p.filter(function(w){return w.enabled}),g(),y.update()},forceUpdate:function(){if(!d){var v=l.elements,T=v.reference,p=v.popper;if(St(T,p)){l.rects={reference:Lo(T,Be(p),l.options.strategy==="fixed"),popper:tt(p)},l.reset=!1,l.placement=l.options.placement,l.orderedModifiers.forEach(function(R){return l.modifiersData[R.name]=Object.assign({},R.data)});for(var w=0;w<l.orderedModifiers.length;w++){if(l.reset===!0){l.reset=!1,w=-1;continue}var E=l.orderedModifiers[w],h=E.fn,C=E.options,P=C===void 0?{}:C,O=E.name;typeof h=="function"&&(l=h({state:l,options:P,name:O,instance:y})||l)}}}},update:Ho(function(){return new Promise(function(v){y.forceUpdate(),v(l)})}),destroy:function(){m(),d=!0}};if(!St(i,u))return y;y.setOptions(s).then(function(v){!d&&s.onFirstUpdate&&s.onFirstUpdate(v)});function g(){l.orderedModifiers.forEach(function(v){var T=v.name,p=v.options,w=p===void 0?{}:p,E=v.effect;if(typeof E=="function"){var h=E({state:l,name:T,instance:y,options:w}),C=function(){};c.push(h||C)}})}function m(){c.forEach(function(v){return v()}),c=[]}return y}}it();var qo=[Jt,Qt,Zt,qt];it({defaultModifiers:qo});var Ko=[Jt,Qt,Zt,qt,Mo,Ro,Fo,uo,Po],zo=it({defaultModifiers:Ko});const Uo=(e,t,n={})=>{const o={name:"updateState",enabled:!0,phase:"write",fn:({state:s})=>{const l=Vo(s);Object.assign(i.value,l)},requires:["computeStyles"]},r=A(()=>{const{onFirstUpdate:s,placement:l,strategy:c,modifiers:d}=f(n);return{onFirstUpdate:s,placement:l||"bottom",strategy:c||"absolute",modifiers:[...d||[],o,{name:"applyStyles",enabled:!1}]}}),a=Rn(),i=F({styles:{popper:{position:f(r).strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),u=()=>{a.value&&(a.value.destroy(),a.value=void 0)};return j(r,s=>{const l=f(a);l&&l.setOptions(s)},{deep:!0}),j([e,t],([s,l])=>{u(),!(!s||!l)&&(a.value=zo(s,l,f(r)))}),Me(()=>{u()}),{state:A(()=>{var s;return{...((s=f(a))==null?void 0:s.state)||{}}}),styles:A(()=>f(i).styles),attributes:A(()=>f(i).attributes),update:()=>{var s;return(s=f(a))==null?void 0:s.update()},forceUpdate:()=>{var s;return(s=f(a))==null?void 0:s.forceUpdate()},instanceRef:A(()=>f(a))}};function Vo(e){const t=Object.keys(e.elements),n=yt(t.map(r=>[r,e.styles[r]||{}])),o=yt(t.map(r=>[r,e.attributes[r]]));return{styles:n,attributes:o}}function Mt(){let e;const t=(o,r)=>{n(),e=window.setTimeout(o,r)},n=()=>window.clearTimeout(e);return hn(()=>n()),{registerTimeout:t,cancelTimeout:n}}let It;const Yt=()=>{const e=yn(),t=bn(),n=A(()=>`${e.value}-popper-container-${t.prefix}`),o=A(()=>`#${n.value}`);return{id:n,selector:o}},Zo=e=>{const t=document.createElement("div");return t.id=e,document.body.appendChild(t),t},Jo=()=>{const{id:e,selector:t}=Yt();return An(()=>{Oe&&!It&&!document.body.querySelector(t.value)&&(It=Zo(e.value))}),{id:e,selector:t}},Go=ee({showAfter:{type:Number,default:0},hideAfter:{type:Number,default:200},autoClose:{type:Number,default:0}}),Xo=({showAfter:e,hideAfter:t,autoClose:n,open:o,close:r})=>{const{registerTimeout:a}=Mt(),{registerTimeout:i,cancelTimeout:u}=Mt();return{onOpen:c=>{a(()=>{o(c);const d=f(n);Ze(d)&&d>0&&i(()=>{r(c)},d)},f(e))},onClose:c=>{u(),a(()=>{r(c)},f(t))}}},en=Symbol("elForwardRef"),Qo=e=>{Ce(en,{setForwardRef:n=>{e.value=n}})},Yo=e=>({mounted(t){e(t)},updated(t){e(t)},unmounted(){e(null)}}),st=Symbol("popper"),tn=Symbol("popperContent"),er=["dialog","grid","group","listbox","menu","navigation","tooltip","tree"],nn=ee({role:{type:String,values:er,default:"tooltip"}}),tr=L({name:"ElPopper",inheritAttrs:!1}),nr=L({...tr,props:nn,setup(e,{expose:t}){const n=e,o=F(),r=F(),a=F(),i=F(),u=A(()=>n.role),s={triggerRef:o,popperInstanceRef:r,contentRef:a,referenceRef:i,role:u};return t(s),Ce(st,s),(l,c)=>ie(l.$slots,"default")}});var or=se(nr,[["__file","popper.vue"]]);const on=ee({arrowOffset:{type:Number,default:5}}),rr=L({name:"ElPopperArrow",inheritAttrs:!1}),ar=L({...rr,props:on,setup(e,{expose:t}){const n=e,o=Se("popper"),{arrowOffset:r,arrowRef:a,arrowStyle:i}=le(tn,void 0);return j(()=>n.arrowOffset,u=>{r.value=u}),Me(()=>{a.value=void 0}),t({arrowRef:a}),(u,s)=>(Z(),He("span",{ref_key:"arrowRef",ref:a,class:Nt(f(o).e("arrow")),style:Pn(f(i)),"data-popper-arrow":""},null,6))}});var ir=se(ar,[["__file","arrow.vue"]]);const sr="ElOnlyChild",lr=L({name:sr,setup(e,{slots:t,attrs:n}){var o;const r=le(en),a=Yo((o=r==null?void 0:r.setForwardRef)!=null?o:Je);return()=>{var i;const u=(i=t.default)==null?void 0:i.call(t,n);if(!u||u.length>1)return null;const s=rn(u);return s?$t(xn(s,n),[[a]]):null}}});function rn(e){if(!e)return null;const t=e;for(const n of t){if(Sn(n))switch(n.type){case Bn:continue;case In:case"svg":return Bt(n);case Mn:return rn(n.children);default:return n}return Bt(n)}return null}function Bt(e){const t=Se("only-child");return Re("span",{class:t.e("content")},[e])}const an=ee({virtualRef:{type:I(Object)},virtualTriggering:Boolean,onMouseenter:{type:I(Function)},onMouseleave:{type:I(Function)},onClick:{type:I(Function)},onKeydown:{type:I(Function)},onFocus:{type:I(Function)},onBlur:{type:I(Function)},onContextmenu:{type:I(Function)},id:String,open:Boolean}),ur=L({name:"ElPopperTrigger",inheritAttrs:!1}),pr=L({...ur,props:an,setup(e,{expose:t}){const n=e,{role:o,triggerRef:r}=le(st,void 0);Qo(r);const a=A(()=>u.value?n.id:void 0),i=A(()=>{if(o&&o.value==="tooltip")return n.open&&n.id?n.id:void 0}),u=A(()=>{if(o&&o.value!=="tooltip")return o.value}),s=A(()=>u.value?`${n.open}`:void 0);let l;return qe(()=>{j(()=>n.virtualRef,c=>{c&&(r.value=_t(c))},{immediate:!0}),j(r,(c,d)=>{l==null||l(),l=void 0,$e(c)&&(["onMouseenter","onMouseleave","onClick","onKeydown","onFocus","onBlur","onContextmenu"].forEach(y=>{var g;const m=n[y];m&&(c.addEventListener(y.slice(2).toLowerCase(),m),(g=d==null?void 0:d.removeEventListener)==null||g.call(d,y.slice(2).toLowerCase(),m))}),l=j([a,i,u,s],y=>{["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach((g,m)=>{jt(y[m])?c.removeAttribute(g):c.setAttribute(g,y[m])})},{immediate:!0})),$e(d)&&["aria-controls","aria-describedby","aria-haspopup","aria-expanded"].forEach(y=>d.removeAttribute(y))},{immediate:!0})}),Me(()=>{l==null||l(),l=void 0}),t({triggerRef:r}),(c,d)=>c.virtualTriggering?Ae("v-if",!0):(Z(),fe(f(lr),Xe({key:0},c.$attrs,{"aria-controls":f(a),"aria-describedby":f(i),"aria-expanded":f(s),"aria-haspopup":f(u)}),{default:te(()=>[ie(c.$slots,"default")]),_:3},16,["aria-controls","aria-describedby","aria-expanded","aria-haspopup"]))}});var fr=se(pr,[["__file","trigger.vue"]]);const cr=["fixed","absolute"],dr=ee({boundariesPadding:{type:Number,default:0},fallbackPlacements:{type:I(Array),default:void 0},gpuAcceleration:{type:Boolean,default:!0},offset:{type:Number,default:12},placement:{type:String,values:Ye,default:"bottom"},popperOptions:{type:I(Object),default:()=>({})},strategy:{type:String,values:cr,default:"absolute"}}),sn=ee({...dr,id:String,style:{type:I([String,Array,Object])},className:{type:I([String,Array,Object])},effect:{type:String,default:"dark"},visible:Boolean,enterable:{type:Boolean,default:!0},pure:Boolean,focusOnShow:{type:Boolean,default:!1},trapping:{type:Boolean,default:!1},popperClass:{type:I([String,Array,Object])},popperStyle:{type:I([String,Array,Object])},referenceEl:{type:I(Object)},triggerTargetEl:{type:I(Object)},stopPopperMouseEvent:{type:Boolean,default:!0},virtualTriggering:Boolean,zIndex:Number,...Dt(["ariaLabel"])}),vr={mouseenter:e=>e instanceof MouseEvent,mouseleave:e=>e instanceof MouseEvent,focus:()=>!0,blur:()=>!0,close:()=>!0},gr=(e,t=[])=>{const{placement:n,strategy:o,popperOptions:r}=e,a={placement:n,strategy:o,...r,modifiers:[...hr(e),...t]};return yr(a,r==null?void 0:r.modifiers),a},mr=e=>{if(Oe)return _t(e)};function hr(e){const{offset:t,gpuAcceleration:n,fallbackPlacements:o}=e;return[{name:"offset",options:{offset:[0,t??12]}},{name:"preventOverflow",options:{padding:{top:2,bottom:2,left:5,right:5}}},{name:"flip",options:{padding:5,fallbackPlacements:o}},{name:"computeStyles",options:{gpuAcceleration:n}}]}function yr(e,t){t&&(e.modifiers=[...e.modifiers,...t??[]])}const br=0,wr=e=>{const{popperInstanceRef:t,contentRef:n,triggerRef:o,role:r}=le(st,void 0),a=F(),i=F(),u=A(()=>({name:"eventListeners",enabled:!!e.visible})),s=A(()=>{var p;const w=f(a),E=(p=f(i))!=null?p:br;return{name:"arrow",enabled:!$n(w),options:{element:w,padding:E}}}),l=A(()=>({onFirstUpdate:()=>{m()},...gr(e,[f(s),f(u)])})),c=A(()=>mr(e.referenceEl)||f(o)),{attributes:d,state:y,styles:g,update:m,forceUpdate:v,instanceRef:T}=Uo(c,n,l);return j(T,p=>t.value=p),qe(()=>{j(()=>{var p;return(p=f(c))==null?void 0:p.getBoundingClientRect()},()=>{m()})}),{attributes:d,arrowRef:a,contentRef:n,instanceRef:T,state:y,styles:g,role:r,forceUpdate:v,update:m}},Or=(e,{attributes:t,styles:n,role:o})=>{const{nextZIndex:r}=wn(),a=Se("popper"),i=A(()=>f(t).popper),u=F(Ze(e.zIndex)?e.zIndex:r()),s=A(()=>[a.b(),a.is("pure",e.pure),a.is(e.effect),e.popperClass]),l=A(()=>[{zIndex:f(u)},f(n).popper,e.popperStyle||{}]),c=A(()=>o.value==="dialog"?"false":void 0),d=A(()=>f(n).arrow||{});return{ariaModal:c,arrowStyle:d,contentAttrs:i,contentClass:s,contentStyle:l,contentZIndex:u,updateZIndex:()=>{u.value=Ze(e.zIndex)?e.zIndex:r()}}},Tr=(e,t)=>{const n=F(!1),o=F();return{focusStartRef:o,trapped:n,onFocusAfterReleased:l=>{var c;((c=l.detail)==null?void 0:c.focusReason)!=="pointer"&&(o.value="first",t("blur"))},onFocusAfterTrapped:()=>{t("focus")},onFocusInTrap:l=>{e.visible&&!n.value&&(l.target&&(o.value=l.target),n.value=!0)},onFocusoutPrevented:l=>{e.trapping||(l.detail.focusReason==="pointer"&&l.preventDefault(),n.value=!1)},onReleaseRequested:()=>{n.value=!1,t("close")}}},Er=L({name:"ElPopperContent"}),Cr=L({...Er,props:sn,emits:vr,setup(e,{expose:t,emit:n}){const o=e,{focusStartRef:r,trapped:a,onFocusAfterReleased:i,onFocusAfterTrapped:u,onFocusInTrap:s,onFocusoutPrevented:l,onReleaseRequested:c}=Tr(o,n),{attributes:d,arrowRef:y,contentRef:g,styles:m,instanceRef:v,role:T,update:p}=wr(o),{ariaModal:w,arrowStyle:E,contentAttrs:h,contentClass:C,contentStyle:P,updateZIndex:O}=Or(o,{styles:m,attributes:d,role:T}),R=le(bt,void 0),k=F();Ce(tn,{arrowStyle:E,arrowRef:y,arrowOffset:k}),R&&(R.addInputId||R.removeInputId)&&Ce(bt,{...R,addInputId:Je,removeInputId:Je});let x;const M=(S=!0)=>{p(),S&&O()},D=()=>{M(!1),o.visible&&o.focusOnShow?a.value=!0:o.visible===!1&&(a.value=!1)};return qe(()=>{j(()=>o.triggerTargetEl,(S,N)=>{x==null||x(),x=void 0;const _=f(S||g.value),B=f(N||g.value);$e(_)&&(x=j([T,()=>o.ariaLabel,w,()=>o.id],b=>{["role","aria-label","aria-modal","id"].forEach(($,V)=>{jt(b[V])?_.removeAttribute($):_.setAttribute($,b[V])})},{immediate:!0})),B!==_&&$e(B)&&["role","aria-label","aria-modal","id"].forEach(b=>{B.removeAttribute(b)})},{immediate:!0}),j(()=>o.visible,D,{immediate:!0})}),Me(()=>{x==null||x(),x=void 0}),t({popperContentRef:g,popperInstanceRef:v,updatePopper:M,contentStyle:P}),(S,N)=>(Z(),He("div",Xe({ref_key:"contentRef",ref:g},f(h),{style:f(P),class:f(C),tabindex:"-1",onMouseenter:N[0]||(N[0]=_=>S.$emit("mouseenter",_)),onMouseleave:N[1]||(N[1]=_=>S.$emit("mouseleave",_))}),[Re(f(On),{trapped:f(a),"trap-on-focus-in":!0,"focus-trap-el":f(g),"focus-start-el":f(r),onFocusAfterTrapped:f(u),onFocusAfterReleased:f(i),onFocusin:f(s),onFocusoutPrevented:f(l),onReleaseRequested:f(c)},{default:te(()=>[ie(S.$slots,"default")]),_:3},8,["trapped","focus-trap-el","focus-start-el","onFocusAfterTrapped","onFocusAfterReleased","onFocusin","onFocusoutPrevented","onReleaseRequested"])],16))}});var Rr=se(Cr,[["__file","content.vue"]]);const Ar=Lt(or),lt=Symbol("elTooltip"),ln=ee({...Go,...sn,appendTo:{type:I([String,Object])},content:{type:String,default:""},rawContent:{type:Boolean,default:!1},persistent:Boolean,visible:{type:I(Boolean),default:null},transition:String,teleported:{type:Boolean,default:!0},disabled:Boolean,...Dt(["ariaLabel"])}),un=ee({...an,disabled:Boolean,trigger:{type:I([String,Array]),default:"hover"},triggerKeys:{type:I(Array),default:()=>[wt.enter,wt.space]}}),{useModelToggleProps:Pr,useModelToggleEmits:xr,useModelToggle:Sr}=Ht("visible"),Mr=ee({...nn,...Pr,...ln,...un,...on,showArrow:{type:Boolean,default:!0}}),Ir=[...xr,"before-show","before-hide","show","hide","open","close"],Br=(e,t)=>kn(e)?e.includes(t):e===t,pe=(e,t,n)=>o=>{Br(f(e),t)&&n(o)},kr=L({name:"ElTooltipTrigger"}),Fr=L({...kr,props:un,setup(e,{expose:t}){const n=e,o=Se("tooltip"),{controlled:r,id:a,open:i,onOpen:u,onClose:s,onToggle:l}=le(lt,void 0),c=F(null),d=()=>{if(f(r)||n.disabled)return!0},y=we(n,"trigger"),g=Q(d,pe(y,"hover",u)),m=Q(d,pe(y,"hover",s)),v=Q(d,pe(y,"click",h=>{h.button===0&&l(h)})),T=Q(d,pe(y,"focus",u)),p=Q(d,pe(y,"focus",s)),w=Q(d,pe(y,"contextmenu",h=>{h.preventDefault(),l(h)})),E=Q(d,h=>{const{code:C}=h;n.triggerKeys.includes(C)&&(h.preventDefault(),l(h))});return t({triggerRef:c}),(h,C)=>(Z(),fe(f(fr),{id:f(a),"virtual-ref":h.virtualRef,open:f(i),"virtual-triggering":h.virtualTriggering,class:Nt(f(o).e("trigger")),onBlur:f(p),onClick:f(v),onContextmenu:f(w),onFocus:f(T),onMouseenter:f(g),onMouseleave:f(m),onKeydown:f(E)},{default:te(()=>[ie(h.$slots,"default")]),_:3},8,["id","virtual-ref","open","virtual-triggering","class","onBlur","onClick","onContextmenu","onFocus","onMouseenter","onMouseleave","onKeydown"]))}});var _r=se(Fr,[["__file","trigger.vue"]]);const jr=L({name:"ElTooltipContent",inheritAttrs:!1}),Dr=L({...jr,props:ln,setup(e,{expose:t}){const n=e,{selector:o}=Yt(),r=Se("tooltip"),a=F(null),i=F(!1),{controlled:u,id:s,open:l,trigger:c,onClose:d,onOpen:y,onShow:g,onHide:m,onBeforeShow:v,onBeforeHide:T}=le(lt,void 0),p=A(()=>n.transition||`${r.namespace.value}-fade-in-linear`),w=A(()=>n.persistent);Me(()=>{i.value=!0});const E=A(()=>f(w)?!0:f(l)),h=A(()=>n.disabled?!1:f(l)),C=A(()=>n.appendTo||o.value),P=A(()=>{var b;return(b=n.style)!=null?b:{}}),O=A(()=>!f(l)),R=()=>{m()},k=()=>{if(f(u))return!0},x=Q(k,()=>{n.enterable&&f(c)==="hover"&&y()}),M=Q(k,()=>{f(c)==="hover"&&d()}),D=()=>{var b,$;($=(b=a.value)==null?void 0:b.updatePopper)==null||$.call(b),v==null||v()},S=()=>{T==null||T()},N=()=>{g(),B=Tn(A(()=>{var b;return(b=a.value)==null?void 0:b.popperContentRef}),()=>{if(f(u))return;f(c)!=="hover"&&d()})},_=()=>{n.virtualTriggering||d()};let B;return j(()=>f(l),b=>{b||B==null||B()},{flush:"post"}),j(()=>n.content,()=>{var b,$;($=(b=a.value)==null?void 0:b.updatePopper)==null||$.call(b)}),t({contentRef:a}),(b,$)=>(Z(),fe(jn,{disabled:!b.teleported,to:f(C)},[Re(_n,{name:f(p),onAfterLeave:R,onBeforeEnter:D,onAfterEnter:N,onBeforeLeave:S},{default:te(()=>[f(E)?$t((Z(),fe(f(Rr),Xe({key:0,id:f(s),ref_key:"contentRef",ref:a},b.$attrs,{"aria-label":b.ariaLabel,"aria-hidden":f(O),"boundaries-padding":b.boundariesPadding,"fallback-placements":b.fallbackPlacements,"gpu-acceleration":b.gpuAcceleration,offset:b.offset,placement:b.placement,"popper-options":b.popperOptions,strategy:b.strategy,effect:b.effect,enterable:b.enterable,pure:b.pure,"popper-class":b.popperClass,"popper-style":[b.popperStyle,f(P)],"reference-el":b.referenceEl,"trigger-target-el":b.triggerTargetEl,visible:f(h),"z-index":b.zIndex,onMouseenter:f(x),onMouseleave:f(M),onBlur:_,onClose:f(d)}),{default:te(()=>[i.value?Ae("v-if",!0):ie(b.$slots,"default",{key:0})]),_:3},16,["id","aria-label","aria-hidden","boundaries-padding","fallback-placements","gpu-acceleration","offset","placement","popper-options","strategy","effect","enterable","pure","popper-class","popper-style","reference-el","trigger-target-el","visible","z-index","onMouseenter","onMouseleave","onClose"])),[[Fn,f(h)]]):Ae("v-if",!0)]),_:3},8,["name"])],8,["disabled","to"]))}});var Lr=se(Dr,[["__file","content.vue"]]);const Nr=["innerHTML"],$r={key:1},Hr=L({name:"ElTooltip"}),Wr=L({...Hr,props:Mr,emits:Ir,setup(e,{expose:t,emit:n}){const o=e;Jo();const r=En(),a=F(),i=F(),u=()=>{var p;const w=f(a);w&&((p=w.popperInstanceRef)==null||p.update())},s=F(!1),l=F(),{show:c,hide:d,hasUpdateHandler:y}=Sr({indicator:s,toggleReason:l}),{onOpen:g,onClose:m}=Xo({showAfter:we(o,"showAfter"),hideAfter:we(o,"hideAfter"),autoClose:we(o,"autoClose"),open:c,close:d}),v=A(()=>Ft(o.visible)&&!y.value);Ce(lt,{controlled:v,id:r,open:Dn(s),trigger:we(o,"trigger"),onOpen:p=>{g(p)},onClose:p=>{m(p)},onToggle:p=>{f(s)?m(p):g(p)},onShow:()=>{n("show",l.value)},onHide:()=>{n("hide",l.value)},onBeforeShow:()=>{n("before-show",l.value)},onBeforeHide:()=>{n("before-hide",l.value)},updatePopper:u}),j(()=>o.disabled,p=>{p&&s.value&&(s.value=!1)});const T=p=>{var w,E;const h=(E=(w=i.value)==null?void 0:w.contentRef)==null?void 0:E.popperContentRef,C=(p==null?void 0:p.relatedTarget)||document.activeElement;return h&&h.contains(C)};return Ln(()=>s.value&&d()),t({popperRef:a,contentRef:i,isFocusInsideContent:T,updatePopper:u,onOpen:g,onClose:m,hide:d}),(p,w)=>(Z(),fe(f(Ar),{ref_key:"popperRef",ref:a,role:p.role},{default:te(()=>[Re(_r,{disabled:p.disabled,trigger:p.trigger,"trigger-keys":p.triggerKeys,"virtual-ref":p.virtualRef,"virtual-triggering":p.virtualTriggering},{default:te(()=>[p.$slots.default?ie(p.$slots,"default",{key:0}):Ae("v-if",!0)]),_:3},8,["disabled","trigger","trigger-keys","virtual-ref","virtual-triggering"]),Re(Lr,{ref_key:"contentRef",ref:i,"aria-label":p.ariaLabel,"boundaries-padding":p.boundariesPadding,content:p.content,disabled:p.disabled,effect:p.effect,enterable:p.enterable,"fallback-placements":p.fallbackPlacements,"hide-after":p.hideAfter,"gpu-acceleration":p.gpuAcceleration,offset:p.offset,persistent:p.persistent,"popper-class":p.popperClass,"popper-style":p.popperStyle,placement:p.placement,"popper-options":p.popperOptions,pure:p.pure,"raw-content":p.rawContent,"reference-el":p.referenceEl,"trigger-target-el":p.triggerTargetEl,"show-after":p.showAfter,strategy:p.strategy,teleported:p.teleported,transition:p.transition,"virtual-triggering":p.virtualTriggering,"z-index":p.zIndex,"append-to":p.appendTo},{default:te(()=>[ie(p.$slots,"content",{},()=>[p.rawContent?(Z(),He("span",{key:0,innerHTML:p.content},null,8,Nr)):(Z(),He("span",$r,Nn(p.content),1))]),p.showArrow?(Z(),fe(f(ir),{key:0,"arrow-offset":p.arrowOffset},null,8,["arrow-offset"])):Ae("v-if",!0)]),_:3},8,["aria-label","boundaries-padding","content","disabled","effect","enterable","fallback-placements","hide-after","gpu-acceleration","offset","persistent","popper-class","popper-style","placement","popper-options","pure","raw-content","reference-el","trigger-target-el","show-after","strategy","teleported","transition","virtual-triggering","z-index","append-to"])]),_:3},8,["role"]))}});var qr=se(Wr,[["__file","tooltip.vue"]]);const Vr=Lt(qr);export{Vr as E,lt as T,Ye as a,un as b,ln as u};
