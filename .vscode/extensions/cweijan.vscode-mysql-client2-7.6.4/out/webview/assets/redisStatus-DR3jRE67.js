import{d as V,r as m,h as R,c as y,C as K,j as v,a3 as M,a as w,e as s,f as t,q as r,D as A,E as D,o as U,s as c,t as l,_ as L}from"./app-2NaTuxnu.js";import{E as N}from"./index-C65URB2z.js";import{E as j}from"./index-e1cOMqQr.js";import{a as O,E as P}from"./index-CmPSkci9.js";import{E as W}from"./index-CuMOC1RV.js";import"./focus-trap-DG7KuklN.js";import"./isUndefined-DCTLXrZ8.js";import"./index-Cp2VIddr.js";import"./_baseIteratee-DQg0Nld-.js";import"./isEqual-DHsF_i4S.js";import"./merge-BzC6ATj8.js";import"./_initCloneObject-D2waUEFG.js";import"./isArrayLikeObject-t1WFdFiN.js";import"./index-CKBpPw1z.js";import"./validator-Ck6uYmy0.js";const _=p=>(A("data-v-738fd53c"),p=p(),D(),p),q={id:"app",class:"redis-status-container"},z=_(()=>s("i",{class:"el-icon-refresh"},null,-1)),F={class:"grid grid-cols-3 gap-4 mt-4 px-3"},G={class:"col-span-1"},H={class:"box-card p-3 bg-secondBg mb-3"},J=_(()=>s("span",{class:"text-base mb-2 block"},"Server",-1)),Q={class:"server-status-tag-p"},X={class:"server-status-text"},Y={class:"server-status-tag-p"},Z=["title"],$={class:"server-status-tag-p"},ss={class:"server-status-text"},ts={class:"col-span-1"},es={class:"box-card p-3 bg-secondBg mb-3"},os=_(()=>s("span",{class:"text-base mb-2 block"}," Memory",-1)),as={class:"server-status-tag-p"},ns={class:"server-status-text"},rs={class:"server-status-tag-p"},cs={class:"server-status-text"},ls={class:"server-status-tag-p"},is={class:"server-status-text"},ds={class:"col-span-1"},_s={class:"box-card p-3 bg-secondBg mb-3"},ps=_(()=>s("span",{class:"text-base mb-2 block"},"Stats",-1)),us={class:"server-status-tag-p"},ms={class:"server-status-text"},vs={class:"server-status-tag-p"},hs={class:"server-status-text"},fs={class:"server-status-tag-p"},bs={class:"server-status-text"},ys={class:"mt-4 px-3"},gs={class:"box-card p-3 bg-secondBg mb-3"},xs=_(()=>s("span",{class:"text-base mb-2 block"},"Key Statistics",-1)),ks={class:"mt-4 px-3"},Ss={class:"box-card p-3 bg-secondBg mb-3"},Es=_(()=>s("span",{class:"text-base mb-2 block"}," All Redis Info",-1)),Bs=V({__name:"redisStatus",setup(p){const u=m(!1),h=m(null),g=m(2e3),n=R({}),x=y(()=>{const e=[];for(const o in n)if(o.startsWith("db")){const i=n[o].split(",");e.push({db:o,keys:i[0].split("=")[1],expires:i[1].split("=")[1],avg_ttl:i[2].split("=")[1]})}return e}),k=y(()=>{const e=[];for(const o in n)e.push({key:o,value:n[o]});return e});K(()=>{f(),v.on("info",e=>{T(e)}),v.emit("init")}),M(()=>{clearInterval(h.value)});const f=()=>{h.value=setInterval(()=>{u.value&&v.emit("init")},g.value)},S=(e,o)=>e.keys-o.keys,E=(e,o)=>e.expires-o.expires,B=(e,o)=>e.avg_ttl-o.avg_ttl,T=e=>{if(!e)return{};e=e.split(`
`);const o={};for(let a of e){if(a=a.replace(/\s/gi,""),a.startsWith("#")||!a)continue;const i=a.split(":");o[i[0]]=i[1]}Object.assign(n,o)};return(e,o)=>{const a=N,i=W,I=j,d=P,b=O;return U(),w("div",q,[s("div",null,[t(a,{type:"info"},{default:r(()=>[z,c(" Auto Refresh ")]),_:1}),t(I,{class:"item",effect:"dark",content:"Auto Refresh Switch, Refresh Every 2 Seconds",placement:"bottom",style:{"margin-left":"20px"}},{default:r(()=>[t(i,{modelValue:u.value,"onUpdate:modelValue":o[0]||(o[0]=C=>u.value=C),onChange:f},null,8,["modelValue"])]),_:1})]),s("div",F,[s("div",G,[s("div",H,[J,s("p",Q,[t(a,{class:"server-status-container",type:"info"},{default:r(()=>[c(" Redis Version: "),s("span",X,l(n.redis_version),1)]),_:1})]),s("p",Y,[t(a,{class:"server-status-container",type:"info"},{default:r(()=>[c(" OS: "),s("span",{class:"server-status-text",title:n.os},l(n.os),9,Z)]),_:1})]),s("p",$,[t(a,{class:"server-status-container",type:"info"},{default:r(()=>[c(" Process ID: "),s("span",ss,l(n.process_id),1)]),_:1})])])]),s("div",ts,[s("div",es,[os,s("p",as,[t(a,{class:"server-status-container",type:"info"},{default:r(()=>[c(" Used Memory: "),s("span",ns,l(n.used_memory_human),1)]),_:1})]),s("p",rs,[t(a,{class:"server-status-container",type:"info"},{default:r(()=>[c(" Used Memory Peak: "),s("span",cs,l(n.used_memory_peak_human),1)]),_:1})]),s("p",ls,[t(a,{class:"server-status-container",type:"info"},{default:r(()=>[c(" Used Memory Lua: "),s("span",is,l(Math.round(n.used_memory_lua/1024))+"K",1)]),_:1})])])]),s("div",ds,[s("div",_s,[ps,s("p",us,[t(a,{class:"server-status-container",type:"info"},{default:r(()=>[c(" Connected Clients: "),s("span",ms,l(n.connected_clients),1)]),_:1})]),s("p",vs,[t(a,{class:"server-status-container",type:"info"},{default:r(()=>[c(" Total Connections: "),s("span",hs,l(n.total_connections_received),1)]),_:1})]),s("p",fs,[t(a,{class:"server-status-container",type:"info"},{default:r(()=>[c(" Total Commands: "),s("span",bs,l(n.total_commands_processed),1)]),_:1})])])])]),s("div",ys,[s("div",gs,[xs,t(b,{data:x.value},{default:r(()=>[t(d,{prop:"db",label:"DB"}),t(d,{sortable:"",prop:"keys",label:"Keys","sort-method":S}),t(d,{sortable:"",prop:"expires",label:"Expires","sort-method":E}),t(d,{sortable:"",prop:"avg_ttl",label:"Avg TTL","sort-method":B})]),_:1},8,["data"])])]),s("div",ks,[s("div",Ss,[Es,t(b,{data:k.value},{default:r(()=>[t(d,{prop:"key",label:"Key"}),t(d,{prop:"value",label:"Value"})]),_:1},8,["data"])])])])}}}),Ps=L(Bs,[["__scopeId","data-v-738fd53c"]]);export{Ps as default};
