var j=Object.defineProperty,C=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var b=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var y=(e,t,n)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,o=(e,t)=>{for(var n in t||(t={}))W.call(t,n)&&y(e,n,t[n]);if(b)for(var n of b(t))$.call(t,n)&&y(e,n,t[n]);return e},s=(e,t)=>C(e,E(t));import{D as h}from"./vendor-09fd25a6.js";const D={pump:{reagent:"",volume:0,op:"pump"},prime:{reagent:"",volume:0,op:"prime"},temp:{temp:25,wait:!0,op:"temp"},hold:{time:0,op:"hold"},takeimage:{name:"Test",path:".",xy0:[0,0],xy1:[1,1],channels:[!0,!0,!0,!0],z_tilt:19850,z_obj:32e3,save:!1,lasers:[0,0],laser_onoff:[!0,!0],od:[0,0],overlap:.1,op:"takeimage",z_from:0,z_to:0,z_spacing:232},autofocus:{channels:[!0,!0,!0,!0],laser_onoff:!0,laser:5,od:0,op:"autofocus"},goto:{step:1,n:4,op:"goto"}},z={name:"",port:1,v_pull:100,v_prime:200,v_push:2e3,wait:26};function k(e){return{name:"",path:".",fc:!1,reagents:[{uid:e+1,reagent:o({},z)}],cmds:[{uid:e+2,cmd:o({},D.pump)}]}}function P(e,t){return{name:e.name,fc:e.fc,path:e.path,reagents:e.reagents.map(n=>({uid:++t,reagent:n})),cmds:e.cmds.map(n=>({uid:++t,cmd:n}))}}function q(e){return{name:e.name,fc:e.fc,path:e.path,reagents:e.reagents.map(t=>t.reagent),cmds:e.cmds.map(t=>t.cmd)}}const O={n:0,img:[""],hist:[{counts:[10],bin_edges:[0]}],channels:[!1,!1,!1,!1],dim:[0,0]},_={running:!1,step:0,msg:{msg:"",t:Date.now()}},x={x:-1,y:-1,z_tilt:[-1,-1,-1],z_obj:-1,od:[0,0],laser_onoff:[!0,!0],lasers:[-1,-1],shutter:!1,fcs:[o({},_),o({},_)],block:"",msg:{msg:"Error: not connected.",t:Date.now()},msg2:{msg:"",t:Date.now()}};function S(e,t,{f:n=JSON.parse,onOpen:r,localStore:u,sendOnSet:m=!0}={}){let a,i;const{set:p,subscribe:w,update:g}=h(t);async function c(){console.log("Connecting"),i=null,a=new WebSocket(e),a.onmessage=l=>p(n(l.data)),a.onopen=async()=>{r&&await r(),u&&u.update(l=>s(o({},l),{connected:!0})),i&&(clearTimeout(i),i=null)},a.onclose=()=>{u&&u.update(l=>s(o({},l),{connected:!1})),i||(i=setTimeout(c,2e3)),console.error("Connection closed.")}}return c(),{set(l){m&&a&&a.readyState===WebSocket.OPEN&&a.send(typeof l=="object"?JSON.stringify(l):l),p(l)},update:g,subscribe:w}}function N(e,t,n,{f:r=JSON.parse,beforeOpen:u,localStore:m}={}){let a,i;const{set:p,subscribe:w}=h(t);async function g(){console.log("Connecting"),i=null,u&&await u(),a&&a.close(),a=new WebSocket(e),a.onmessage=c=>p(r(c.data)),a.onopen=()=>{m&&m.update(c=>s(o({},c),{connected:!0})),i&&(clearTimeout(i),i=null)},a.onclose=()=>{m&&m.update(c=>s(o({},c),{connected:!1})),i||(i=setTimeout(g,2e3)),console.error("Connection closed.")}}return g(),{set(c){a&&a.readyState===WebSocket.OPEN&&(console.log(),a.send(typeof c=="object"?JSON.stringify(c):c))},update(){throw new Error("Cannot update an asymWritableWebSocket")},subscribe:w}}const v={block:"",max_uid:6,exps:[k(0),k(3)],image_params:s(o({},D.takeimage),{fc:!1})},d=h({mode:"automatic",connected:!1,img:o({},O),afimg:{afimg:Array(259).fill(""),laplacian:Array(259).fill(0)}}),U=S(`ws://${window.location.hostname}:8000/status`,o({},x),{localStore:d,onOpen:T,sendOnSet:!1}),f=h(o({},v)),L=S(`ws://${window.location.hostname}:8000/user`,o({},v),{onOpen:A}),J=N(`ws://${window.location.hostname}:8000/cmd`,{msg:"ok"});async function A(){for(;;)try{const t=await(await fetch(`http://${window.location.hostname}:8000/usersettings`)).json();f.set(t);return}catch{console.error("Cannot get initial user settings.")}}function F(){let e=Date.now(),t=setTimeout(()=>{},1e3);f.subscribe(n=>{let r=Date.now();const u=()=>{L.set(n),e=Date.now()};r-e<1e3?(clearTimeout(t),t=setTimeout(u,1e3-(r-e))):u()})}F();function R(e){e.msg==="imgReady"?(fetch(`http://${window.location.hostname}:8000/img`).then(t=>t.json()).then(t=>d.update(n=>s(o({},n),{img:t}))).catch(t=>alert(t)),f.update(t=>s(o({},t),{block:""}))):e.msg==="afimgReady"?(fetch(`http://${window.location.hostname}:8000/afimg`).then(t=>t.json()).then(t=>d.update(n=>s(o({},n),{afimg:t}))).catch(t=>alert(t)),f.update(t=>s(o({},t),{block:""}))):e.msg==="moveDone"&&f.update(t=>s(o({},t),{block:""}))}J.subscribe(R);async function T(){fetch(`http://${window.location.hostname}:8000/img`).then(e=>e.json()).then(e=>d.update(t=>s(o({},t),{img:e}))).catch(()=>{}),fetch(`http://${window.location.hostname}:8000/afimg`).then(e=>e.json()).then(e=>d.update(t=>s(o({},t),{afimg:e}))).catch(()=>{})}T();function V(e){requestAnimationFrame(()=>{e&&(e.style.transition="none",e.style.backgroundColor="rgba(255,62,0,0.3)",setTimeout(()=>{e.style.transition="background 1s",e.style.backgroundColor=""}))})}function G(e){return e.reduce((t,n)=>s(o({},t),{[n]:(t[n]||0)+1}),{})}function H(e,t=[0,1/0]){const n=()=>{const r=parseFloat(e.value);t[0]<=r&&r<=t[1]?e.classList.remove("invalid"):e.classList.add("invalid")};return document.addEventListener("input",n),{destroy:()=>{document.removeEventListener("input",n)}}}export{H as a,G as b,J as c,D as d,P as e,V as f,k as g,d as l,z as r,U as s,q as t,f as u};
