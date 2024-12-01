import{s as H}from"./notify-Bt1gVq3I.js";import{_ as S,o as h,a as C,e,s as c,t as s,D as V,E as T,d as z,c as M,u as b,$ as f,r as P,am as O,j as $,k as E,f as p,q as _,z as R,C as A,l as L,b as x,as as U}from"./app-2NaTuxnu.js";import{E as j}from"./index-DkgCsvPV.js";import{E as F}from"./index-BsJiTF7k.js";import"./focus-trap-DG7KuklN.js";import"./validator-Ck6uYmy0.js";import"./isUndefined-DCTLXrZ8.js";function G(o,r=2){const l=new TextEncoder().encode(o),m=new Uint8Array(l.length);for(let n=0;n<l.length;n++)m[n]=l[n]^r;return new TextDecoder().decode(m)}function Q(o){return[...`${o}`].reduce((r,l)=>r+parseInt(l),1)}const X={},g=o=>(V("data-v-4d4f5c64"),o=o(),T(),o),Y={class:"div-block-price"},J=g(()=>e("div",{class:"plan-basic"},"Basic",-1)),K={class:"div-block-111"},W={class:"text-block-26-copy free"},Z=g(()=>e("span",{class:"text-span-43"},null,-1)),ee={class:"payment-terms"},oe={class:"div-block-87-copy"},se={class:"button-plan-basic w-button"},te={class:"div-block-plan-features"},ne={class:"div-block-182"},ie=g(()=>e("img",{src:"icon/checkmark-basic.svg",alt:"",class:"image-28-copy"},null,-1)),ce={class:"text-block-12"},le={class:"div-block-182"},ae=g(()=>e("img",{src:"icon/checkmark-basic.svg",alt:"",class:"image-28-copy"},null,-1)),de={class:"text-block-12",style:{color:"#f94e4e"}},re={class:"div-block-182"},pe=g(()=>e("img",{src:"icon/checkmark-basic.svg",alt:"",class:"image-28-copy"},null,-1)),ue={class:"text-block-12"};function _e(o,r){return h(),C("div",Y,[J,e("div",K,[e("div",W,[c(s(o.$t("plan.free")),1),Z]),e("div",ee,s(o.$t("plan.basicNotice")),1)]),e("div",oe,[e("a",se,s(o.$t("plan.installed")),1)]),e("div",te,[e("div",ne,[ie,e("div",ce,s(o.$t("plan.basicSQLCompletion")),1)]),e("div",le,[ae,e("div",de,s(o.$t("plan.freeLimitConnection")),1)]),e("div",re,[pe,e("div",ue,s(o.$t("plan.connectionSupport")),1)])])])}const me=S(X,[["render",_e],["__scopeId","data-v-4d4f5c64"]]),ve={class:"div-block-price"},fe=e("div",{class:"plan-premium"},"Premium",-1),$e={class:"div-block-111"},he=e("div",{class:"text-block-26-copy free"},[c("$30"),e("span",{class:"text-span-43"})],-1),ke={class:"payment-monthly"},be=e("div",{class:"payment-montly-price"},"中国区为74元/年",-1),ge={class:"div-block-plan-features"},ye={class:"div-block-182"},we=e("img",{src:"icon/checkmark-premium.svg",alt:"",class:"image-28-copy"},null,-1),Ce={class:"text-block-12"},Ie={class:"div-block-182"},Le=e("img",{src:"icon/checkmark-premium.svg",alt:"",class:"image-28-copy"},null,-1),xe={class:"text-block-12"},Me={class:"div-block-182"},Pe=e("img",{src:"icon/checkmark-premium.svg",alt:"",class:"image-28-copy"},null,-1),Se={class:"text-block-12"},Ve={class:"div-block-182"},Te=e("img",{src:"icon/checkmark-premium.svg",alt:"",class:"image-28-copy"},null,-1),ze={class:"text-block-12",style:{color:"#f94e4e"}},Be=z({__name:"ProPlan",props:{isPay:Boolean},emits:["buy"],setup(o,{emit:r}){const l=o,m=r,n=M(()=>l.isPay?f("plan.bought"):f("plan.buyNow")),t=()=>{m("buy")};return(i,u)=>(h(),C("div",ve,[fe,e("div",$e,[he,e("div",ke,s(b(f)("plan.perYear")),1),be]),e("a",{class:"button-plan-premium w-button",onClick:t},s(n.value),1),e("div",ge,[e("div",ye,[we,e("div",Ce,s(b(f)("plan.cloudSync")),1)]),e("div",Ie,[Le,e("div",xe,s(b(f)("plan.unlimitedConnection")),1)]),e("div",Me,[Pe,e("div",Se,s(b(f)("plan.workLevelConnection")),1)]),e("div",Ve,[Te,e("div",ze,s(b(f)("plan.unlimitedMachine")),1)])])]))}}),y=o=>(V("data-v-48fee3a5"),o=o(),T(),o),Ee={style:{"word-break":"break-word"}},Ne=y(()=>e("span",{style:{color:"var(--vscode-charts-red)"}}," Online ",-1)),De=y(()=>e("br",null,null,-1)),qe=y(()=>e("span",{style:{display:"inline-block","margin-bottom":"5px"}}," License ",-1)),He=y(()=>e("span",{class:"red"},"Enterprise",-1)),Oe={class:"mb-1"},Re=y(()=>e("span",{class:"red"},"Offline",-1)),Ae=["innerHTML"],Ue={style:{"margin-top":"5px"}},je={style:{"margin-top":"10px"}},Fe=z({__name:"Offline",emits:["reqLogin","getMachineId","activate","cancel"],setup(o,{emit:r}){const l=P(""),m=P(""),n=r;return O(()=>{$.on("email",t=>{m.value=t})}),(t,i)=>{const u=E("vsc-button"),I=j;return h(),C("div",Ee,[e("div",null,[Ne,c(" : "+s(t.$t("offline.online"))+" ",1),De,p(u,{size:"small",icon:"codicon-account",style:{display:"inline-block",margin:"15px 0"},onClick:i[0]||(i[0]=v=>n("reqLogin"))},{default:_(()=>[c(s(t.$t("global.login")),1)]),_:1})]),qe,c(": "),e("div",null,[e("div",null,[He,c(": "+s(t.$t("offline.enterprise")),1)]),e("div",Oe,[Re,c(": "),e("span",{innerHTML:t.$t("offline.detail")},null,8,Ae)])]),e("div",Ue,[p(I,{modelValue:l.value,"onUpdate:modelValue":i[1]||(i[1]=v=>l.value=v),type:"textarea",autosize:{minRows:5,maxRows:5}},null,8,["modelValue"])]),e("div",je,[p(u,{size:"small",icon:"codicon-vm",onClick:i[2]||(i[2]=v=>n("getMachineId"))},{default:_(()=>[c(s(t.$t("offline.getMachineId")),1)]),_:1}),p(u,{size:"small",type:"primary",icon:"codicon-save",onClick:i[3]||(i[3]=v=>n("activate",l.value))},{default:_(()=>[c(s(t.$t("offline.activate")),1)]),_:1}),p(u,{type:"secondary",icon:"codicon-close",onClick:i[4]||(i[4]=v=>n("cancel"))},{default:_(()=>[c(s(t.$t("common.cancel")),1)]),_:1})])])}}}),Ge=S(Fe,[["__scopeId","data-v-48fee3a5"]]),Qe=o=>(V("data-v-e6494196"),o=o(),T(),o),Xe={class:"plan-container"},Ye={class:"flex flex-col m-auto w-fit"},Je={class:"notice"},Ke=["innerHTML"],We=Qe(()=>e("div",{class:"line"},null,-1)),Ze={class:"plan-block flex w-fit"},eo=z({__name:"Plan",emits:["openLogin"],setup(o,{emit:r}){const l=r,m=U(),n=R(),t=P(!1),i=M(()=>n.user),u=M(()=>n.isPay);A(()=>{$.on("boundLicense",d=>{n.user=d,t.value=!1,H("Activation success!")}).init()});const I=()=>{m.push("/center/document/#/start")},v=()=>{$.emit("githubLogin")},N=()=>{$.emit("copyMachineId")},D=d=>{$.emit("license",d)},B=()=>{if(i.value){const d=new Date().getTime(),a=Q(d);$.emit("openSite",`plan?token=${btoa(G(i.value.token,a))}&t=${d}&ir=${a}`)}else $.emit("openLogin")};return(d,a)=>{const w=E("vsc-button"),q=F;return h(),C("div",Xe,[e("div",Ye,[e("div",Je,[e("div",{innerHTML:d.$t("pay.notice")},null,8,Ke),We,u.value?(h(),L(w,{key:0,size:"small",icon:"el-icon-document",class:"relative",style:{top:"-1px"},onClick:I},{default:_(()=>[c(s(d.$t("plan.document")),1)]),_:1})):x("",!0),i.value?x("",!0):(h(),L(w,{key:1,size:"small",icon:"codicon-github-inverted",onClick:v},{default:_(()=>[c(s(d.$t("plan.freeTier")),1)]),_:1})),u.value?x("",!0):(h(),L(w,{key:2,size:"small",icon:"codicon-package",onClick:B},{default:_(()=>[c(s(d.$t("plan.buyNow")),1)]),_:1})),p(w,{size:"small",icon:"codicon-github-action",onClick:a[0]||(a[0]=k=>t.value=!0)},{default:_(()=>[c(s(d.$t("plan.activation")),1)]),_:1})]),e("div",Ze,[p(me),p(Be,{isPay:u.value,onBuy:B},null,8,["isPay"])])]),p(q,{modelValue:t.value,"onUpdate:modelValue":a[3]||(a[3]=k=>t.value=k),width:"600px",class:"activate-dialog","modal-append-to-body":!1,"close-on-click-modal":!1,onClose:a[4]||(a[4]=k=>t.value=!1)},{default:_(()=>[p(Ge,{onCancel:a[1]||(a[1]=k=>t.value=!1),onGetMachineId:N,onReqLogin:a[2]||(a[2]=k=>{t.value=!1,l("openLogin")}),onActivate:D})]),_:1},8,["modelValue"])])}}}),ao=S(eo,[["__scopeId","data-v-e6494196"]]);export{ao as default};
