import{d as w,h as g,c as h,j as c,a as C,e as s,t,u as e,s as r,f as l,V as x,X as U,o as D,$ as a}from"./app-2NaTuxnu.js";import{B as P,L as b,D as m,a as T,b as L}from"./lineChartData-BFXnSvwe.js";import{e as B}from"./notify-Bt1gVq3I.js";import"./focus-trap-DG7KuklN.js";import"./validator-Ck6uYmy0.js";import"./index-DkgCsvPV.js";class u extends P{static getOption(n){return{cutout:45,responsive:!0,plugins:{title:{text:n,display:!0}}}}static formatPercent(n){return`${(n*100).toFixed(1)}%`}static getDoughnutData(n){return{datasets:[{data:[n,1-n],borderColor:["rgb(94, 154, 239)","rgb(233, 233, 233)"],backgroundColor:["rgb(94, 154, 239)","rgb(233, 233, 233)"]}]}}}const V={class:"status-container"},G={class:"info-container"},H={style:{display:"inline-block","margin-right":"50px"}},I={class:"info-title"},O={class:"info-col"},M=["innerHTML"],N={class:"info-col"},$={class:"info-col"},j={class:"red"},z={class:"info-col"},E={style:{display:"inline-block"}},F={class:"info-title"},R={class:"info-col"},X={class:"info-col"},q={class:"info-col"},A=["innerHTML"],J={class:"info-title"},K={class:"ring-graph-status"},Q={class:"donut-inner"},W={class:"ring-graph-status"},Y={class:"donut-inner"},Z={class:"ring-graph-status"},ss={class:"donut-inner"},ts={class:"netword-container"},es={class:"info-title"},os={style:{height:"300px"}},ds=w({__name:"sshStatus",setup(v){const n=g({cpu:null,disk:null,memory:null,network:null}),o=g({serverType:"linux",os:"Loading",kernelVersion:"Loading",arch:"x86_64",hostname:"localhost",upTime:"0",diskUsage:{total:"0G",used:"0G",available:"0G",usePercent:0},memoryUsage:{total:"0 GB",used:"0 GB",free:"0 MB",usePercent:0},cpu:{name:"",clock:"0GHz",logicCoreCount:"0",usePercent:0},traffic:{labels:[],data1:[],data2:[],preivousSent:null,preivousReceived:null,tooltips:[],lock:!1,previous:null}}),{formatPercent:d,getDoughnutData:p}=u,f=h(()=>p(o.cpu.usePercent)),k=h(()=>p(o.memoryUsage.usePercent)),y=h(()=>p(o.diskUsage.usePercent)),_=new b,S=_.toChartData();return c.on("error",()=>{B("SSH service connection failed!")}).on("info",i=>{Object.assign(o,i),n.memory||(n.memory=setInterval(()=>c.emit("memory"),3e3)),o.serverType=="windows"?c.emit("cpu"):(c.emit("network"),n.network||(n.network=setInterval(()=>c.emit("network"),1e3))),n.disk||(n.disk=setInterval(()=>c.emit("disk"),3e3)),n.cpu||(n.cpu=setInterval(()=>c.emit("cpu"),1e3))}).on("cpu",i=>{o.cpu.usePercent=i}).on("disk",i=>{o.diskUsage=i}).on("memory",i=>{o.memoryUsage=i}).on("network",i=>{_.addData(i)}).emit("init"),(i,ns)=>(D(),C("div",V,[s("div",G,[s("div",H,[s("div",I,t(e(a)("sshStatus.systemInfo"))+": ",1),s("div",null,t(e(a)("sshStatus.runTime"))+": "+t(o.upTime),1),s("span",O,[r(t(e(a)("sshStatus.arch"))+": ",1),s("span",{innerHTML:o.arch},null,8,M)]),s("span",N,t(e(a)("sshStatus.hostname"))+": "+t(o.hostname),1),s("span",$,[r(t(e(a)("sshStatus.os"))+": ",1),s("span",j,t(o.os),1)]),s("span",z,t(e(a)("sshStatus.kernelVersion"))+": "+t(o.kernelVersion),1)]),s("div",E,[s("div",F,t(e(a)("sshStatus.cpuInfo"))+": ",1),s("div",null,[s("span",R,t(e(a)("sshStatus.cpuClock"))+":"+t(o.cpu.clock),1),s("span",X,t(e(a)("sshStatus.cpuCoreCount"))+":"+t(o.cpu.logicCoreCount),1),s("span",q,[r(t(e(a)("sshStatus.cpuName"))+": ",1),s("span",{innerHTML:o.cpu.name},null,8,A)])])])]),s("div",null,[s("div",J,t(e(a)("sshStatus.systemStatus"))+": ",1),s("div",K,[l(e(m),{options:e(u).getOption("CPU"),data:f.value,style:{width:"160px",height:"160px"}},null,8,["options","data"]),r(" "+t(o.cpu.clock)+" ",1),s("div",Q,t(e(d)(o.cpu.usePercent)),1)]),s("div",W,[l(e(m),{options:e(u).getOption(e(a)("sshStatus.memory")),data:k.value,style:{width:"160px",height:"160px"}},null,8,["options","data"]),r(" "+t(o.memoryUsage.used)+"/"+t(o.memoryUsage.total)+" ",1),s("div",Y,t(e(d)(o.memoryUsage.usePercent)),1)]),s("div",Z,[l(e(m),{options:e(u).getOption(e(a)("sshStatus.disk")),data:y.value,style:{width:"160px",height:"160px"}},null,8,["options","data"]),r(" "+t(o.diskUsage.used)+"/"+t(o.diskUsage.total)+" ",1),s("div",ss,t(e(d)(o.diskUsage.usePercent)),1)])]),x(s("div",ts,[s("div",es,t(e(a)("sshStatus.network"))+": ",1),s("div",os,[l(e(L),{style:{height:"100%"},options:e(T).getOption(!0),data:e(S)},null,8,["options","data"])])],512),[[U,o.serverType!="windows"]])]))}});export{ds as default};
