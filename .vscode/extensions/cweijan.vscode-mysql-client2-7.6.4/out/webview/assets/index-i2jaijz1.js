import{af as r}from"./app-2NaTuxnu.js";const f=e=>[...new Set(e)],m=e=>!e&&e!==0?[]:Array.isArray(e)?e:[e],d=100,v=600,A={beforeMount(e,c){const t=c.value,{interval:i=d,delay:u=v}=r(t)?{}:t;let n,o;const s=()=>r(t)?t():t.handler(),a=()=>{o&&(clearTimeout(o),o=void 0),n&&(clearInterval(n),n=void 0)};e.addEventListener("mousedown",l=>{l.button===0&&(a(),s(),document.addEventListener("mouseup",()=>a(),{once:!0}),o=setTimeout(()=>{n=setInterval(()=>{s()},i)},u))})}};export{m as c,f as u,A as v};