var N=Object.defineProperty,O=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var S=(t,o,s)=>o in t?N(t,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[o]=s,a=(t,o)=>{for(var s in o||(o={}))T.call(o,s)&&S(t,s,o[s]);if(g)for(var s of g(o))x.call(o,s)&&S(t,s,o[s]);return t},h=(t,o)=>O(t,y(o));import{D as W}from"./vendor-5b169328.js";const b={pump:{reagent:"",volume:0,op:"pump"},prime:{reagent:"",volume:0,op:"prime"},temp:{temp:25,wait:!0,op:"temp"},hold:{time:0,op:"hold"},takeimage:{name:"Test",path:".",xy0:[0,0],xy1:[1,1],channels:[!0,!0,!0,!0],z_tilt:19850,z_obj:32e3,save:!1,lasers:[0,0],laser_onoff:[!0,!0],od:[0,0],overlap:.1,op:"takeimage",z_from:0,z_to:0,z_spacing:232},autofocus:{channels:[!0,!0,!0,!0],laser_onoff:!0,laser:5,od:0,op:"autofocus"},goto:{step:1,n:4,op:"goto"}},C={name:"",port:1,v_pull:100,v_prime:200,v_push:2e3,wait:26},_={name:"",path:".",fc:!1,reagents:[{uid:0,reagent:a({},C)}],cmds:[{uid:0,cmd:a({},b.pump)}]},f=[2e3,5e3,1e4,3e4,6e4];function d(t,o,s=n=>n,k=!0){console.log(`%cInitializing ${t}.`,"color:green");let n,l,c,m=0;const i=new Set;function w(){const e=m;return m++,f[e>=f.length-1?f.length-1:e]}function z(){c&&clearTimeout(c),n.readyState!==WebSocket.CLOSED&&n.close()}function D(){z(),i.size>0&&(c=setTimeout(()=>p(),w()))}async function p(){return c&&(clearTimeout(c),c=void 0),n=new WebSocket(t),n.onmessage=e=>{console.log(e.data),i.forEach(r=>{o=s(e.data),r(o)})},n.onclose=e=>D(),l=new Promise((e,r)=>{n.onerror=u=>{console.error("Websocket error"),r(u)},n.onopen=u=>{m=0,e(!0)}}),l}return p(),{set(e){console.log(e);const r=typeof e=="object"?()=>n.send(JSON.stringify(e)):()=>n.send(e);switch(n.readyState){case(WebSocket.CLOSED||WebSocket.CLOSING):{p().then(r);break}case WebSocket.CONNECTING:{l.then(r);break}case WebSocket.OPEN:{r();break}}k&&i.forEach(u=>u(e))},update(e){},subscribe(e){return e(o),i.add(e),()=>i.delete(e)}}}const E={n:0,img:[""],hist:[{counts:[10],bin_edges:[0]}],channels:[!1,!1,!1,!1]},J={x:-1,y:-1,z_tilt:[-1,-1,-1],z_obj:-1,od:[0,0],laser_onoff:[!0,!0],lasers:[-1,-1],shutter:!1,msg:""},$={block:"",max_uid:2,mode:"editingA",exps:[a({},_),a({},_)],image_params:h(a({},b.takeimage),{fc:!1})},L=W(a({},E)),P=d(`ws://${window.location.hostname}:8000/status`,a({},J),t=>JSON.parse(t)),G=d(`ws://${window.location.hostname}:8000/user`,a({},$),t=>JSON.parse(t)),v=d(`ws://${window.location.hostname}:8000/cmd`,{msg:"ok"},t=>JSON.parse(t),!1);export{b as a,v as c,_ as e,L as i,C as r,P as s,G as u};
