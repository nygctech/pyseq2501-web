import{S as de,i as he,s as pe,M as at,e as h,w as Y,c as p,a as v,x as Z,d,b as n,g as x,H as r,y as J,q as F,o as G,B as K,N as Ie,O as Qe,P as nt,k,m as y,t as w,h as $,j as ve,f as Se,Q as j,R as ot,v as ut,T as ct,U as et,V as tt,W as st,L as ne,X as lt,Y as De,Z as Ne,_ as Te,$ as Pe,a0 as it,F as ft,a1 as dt,I as ht,J as pt,K as vt,G as mt}from"../chunks/vendor-2c8cd3e7.js";import{i as me,u as je,c as rt}from"../chunks/store-f30a8796.js";function _t(i){let e,s,t,f=i[3]+"",a;return{c(){e=h("div"),s=k(),t=h("span"),a=w(f),this.h()},l(l){e=p(l,"DIV",{class:!0}),v(e).forEach(d),s=y(l),t=p(l,"SPAN",{class:!0});var o=v(t);a=$(o,f),o.forEach(d),this.h()},h(){n(e,"class","relative block w-full left-0 border-b border-gray-100"),n(t,"class","y label svelte-hvuhv1")},m(l,o){x(l,e,o),x(l,s,o),x(l,t,o),r(t,a)},p(l,o){o&8&&f!==(f=l[3]+"")&&ve(a,f)},d(l){l&&d(e),l&&d(s),l&&d(t)}}}function gt(i){let e;return{c(){e=h("div"),this.h()},l(s){e=p(s,"DIV",{class:!0}),v(e).forEach(d),this.h()},h(){n(e,"class","column f z-10 svelte-hvuhv1")},m(s,t){x(s,e,t)},d(s){s&&d(e)}}}function bt(i){let e,s=i[3]+"",t;return{c(){e=h("span"),t=w(s),this.h()},l(f){e=p(f,"SPAN",{class:!0});var a=v(e);t=$(a,s),a.forEach(d),this.h()},h(){n(e,"class","x label svelte-hvuhv1")},m(f,a){x(f,e,a),r(e,t)},p(f,a){a&8&&s!==(s=f[3]+"")&&ve(t,s)},d(f){f&&d(e)}}}function wt(i){let e,s,t,f,a,l;return e=new Qe({props:{horizontal:!0,count:5,$$slots:{default:[_t,({value:o})=>({3:o}),({value:o})=>o?8:0]},$$scope:{ctx:i}}}),t=new nt({props:{data:i[1],width:5,$$slots:{default:[gt]},$$scope:{ctx:i}}}),a=new Qe({props:{vertical:!0,count:5,$$slots:{default:[bt,({value:o})=>({3:o}),({value:o})=>o?8:0]},$$scope:{ctx:i}}}),{c(){Y(e.$$.fragment),s=k(),Y(t.$$.fragment),f=k(),Y(a.$$.fragment)},l(o){Z(e.$$.fragment,o),s=y(o),Z(t.$$.fragment,o),f=y(o),Z(a.$$.fragment,o)},m(o,u){J(e,o,u),x(o,s,u),J(t,o,u),x(o,f,u),J(a,o,u),l=!0},p(o,u){const m={};u&24&&(m.$$scope={dirty:u,ctx:o}),e.$set(m);const c={};u&2&&(c.data=o[1]),u&16&&(c.$$scope={dirty:u,ctx:o}),t.$set(c);const _={};u&24&&(_.$$scope={dirty:u,ctx:o}),a.$set(_)},i(o){l||(F(e.$$.fragment,o),F(t.$$.fragment,o),F(a.$$.fragment,o),l=!0)},o(o){G(e.$$.fragment,o),G(t.$$.fragment,o),G(a.$$.fragment,o),l=!1},d(o){K(e,o),o&&d(s),K(t,o),o&&d(f),K(a,o)}}}function $t(i){let e,s,t,f;return t=new at({props:{x1:0,x2:4096,y1:0,y2:i[0],$$slots:{default:[wt]},$$scope:{ctx:i}}}),{c(){e=h("div"),s=h("div"),Y(t.$$.fragment),this.h()},l(a){e=p(a,"DIV",{class:!0});var l=v(e);s=p(l,"DIV",{class:!0});var o=v(s);Z(t.$$.fragment,o),o.forEach(d),l.forEach(d),this.h()},h(){n(s,"class","foreground svelte-hvuhv1"),n(e,"class","chart svelte-hvuhv1")},m(a,l){x(a,e,l),r(e,s),J(t,s,null),f=!0},p(a,[l]){const o={};l&1&&(o.y2=a[0]),l&18&&(o.$$scope={dirty:l,ctx:a}),t.$set(o)},i(a){f||(F(t.$$.fragment,a),f=!0)},o(a){G(t.$$.fragment,a),f=!1},d(a){a&&d(e),K(t)}}}function kt(i,e){return i.map((s,t)=>({x:s,y:e[t]}))}function yt(i,e,s){let t;Ie(i,me,l=>s(2,t=l));let f,a=[{x:0,y:0},{x:2e3,y:10}];return i.$$.update=()=>{if(i.$$.dirty&4){const l=t==null?void 0:t.hist;l&&(console.log(l),s(1,a=kt(l.bin_edges,l.counts)),s(0,f=Math.max(...l.counts)))}},[f,a,t]}class Et extends de{constructor(e){super();he(this,e,yt,$t,pe,{})}}function It(i){let e,s,t,f,a,l,o,u,m;return l=new Et({}),{c(){e=h("div"),s=h("canvas"),f=k(),a=h("div"),Y(l.$$.fragment),this.h()},l(c){e=p(c,"DIV",{class:!0,style:!0});var _=v(e);s=p(_,"CANVAS",{id:!0,width:!0,height:!0,style:!0}),v(s).forEach(d),f=y(_),a=p(_,"DIV",{id:!0,class:!0,style:!0});var g=v(a);Z(l.$$.fragment,g),g.forEach(d),_.forEach(d),this.h()},h(){n(s,"id","canvas"),n(s,"width",2048),n(s,"height",t=128*i[1].n),Se(s,"border","2px solid #000000"),Se(s,"background-color","gray"),n(a,"id","histogram"),n(a,"class","z-40 absolute bottom-8 right-8 shadow-lg rounded"),Se(a,"width","400px"),Se(a,"height","300px"),Se(a,"background-color","white"),n(e,"class","mt-4 center shadow border border-gray-400 relative"),Se(e,"height","75vh")},m(c,_){x(c,e,_),r(e,s),i[6](s),r(e,f),r(e,a),J(l,a,null),o=!0,u||(m=j(e,"wheel",function(){ot(i[2].zoomWithWheel)&&i[2].zoomWithWheel.apply(this,arguments)}),u=!0)},p(c,[_]){i=c,(!o||_&2&&t!==(t=128*i[1].n))&&n(s,"height",t)},i(c){o||(F(l.$$.fragment,c),o=!0)},o(c){G(l.$$.fragment,c),o=!1},d(c){c&&d(e),i[6](null),K(l),u=!1,m()}}}function St(i,e,s){let t,f;Ie(i,me,c=>s(5,t=c)),Ie(i,je,c=>s(1,f=c));let a,l,o,u;ut(()=>{s(4,u=a.getContext("2d")),s(2,o=ct(a,{maxZoom:5}))});function m(c){et[c?"unshift":"push"](()=>{a=c,s(0,a)})}return i.$$.update=()=>{i.$$.dirty&59&&a&&t&&("cmd"in t||(console.log(t),t.n==1&&u.clearRect(0,0,a.width,a.height),console.log(t),s(3,l=new Image),s(3,l.onload=()=>u.drawImage(l,0,256*(f.n-t.n)),l),s(3,l.src=t.img,l)))},[a,f,o,l,u,t,m]}class Nt extends de{constructor(e){super();he(this,e,St,It,pe,{})}}function Tt(i){let e,s,t,f,a,l,o,u,m,c,_,g,S,N,I,E,V,U,P,O,D,A,C,b=i[4].toFixed(3)+"",T,M,le,L,H,X=i[4]/2+"",Q,_e,R,B,re,ce,ge,oe,ae,ee,be,q,we,te,$e,se,ke,ye,Ee,ue,Ve,xe,Me,Re;return{c(){e=h("span"),s=h("content"),t=h("button"),f=w("Start"),a=k(),l=h("button"),o=w("Autofocus"),u=k(),m=h("div"),c=h("div"),_=h("div"),g=h("button"),S=k(),N=h("div"),I=h("span"),E=h("span"),V=w(i[3]),U=w(`
          /
          `),P=h("input"),O=k(),D=h("div"),A=h("span"),C=w("Height "),T=w(b),M=w(" mm"),le=k(),L=h("span"),H=w("Total time: "),Q=w(X),_e=w(" s"),R=k(),B=h("div"),re=h("button"),ce=w("Take Dark"),ge=k(),oe=h("span"),ae=w("Dark Corrected"),ee=h("input"),be=k(),q=h("span"),we=w("Show Histogram"),te=h("input"),$e=k(),se=h("div"),ke=w("Bundles taken"),ye=k(),Ee=h("div"),ue=h("progress"),this.h()},l(W){e=p(W,"SPAN",{class:!0});var z=v(e);s=p(z,"CONTENT",{class:!0});var Ae=v(s);t=p(Ae,"BUTTON",{class:!0});var qe=v(t);f=$(qe,"Start"),qe.forEach(d),a=y(Ae),l=p(Ae,"BUTTON",{class:!0});var Fe=v(l);o=$(Fe,"Autofocus"),Fe.forEach(d),Ae.forEach(d),u=y(z),m=p(z,"DIV",{class:!0});var Ge=v(m);c=p(Ge,"DIV",{class:!0});var ie=v(c);_=p(ie,"DIV",{class:!0});var Xe=v(_);g=p(Xe,"BUTTON",{class:!0}),v(g).forEach(d),Xe.forEach(d),S=y(ie),N=p(ie,"DIV",{class:!0});var fe=v(N);I=p(fe,"SPAN",{class:!0});var Ce=v(I);E=p(Ce,"SPAN",{class:!0});var Ye=v(E);V=$(Ye,i[3]),Ye.forEach(d),U=$(Ce,`
          /
          `),P=p(Ce,"INPUT",{type:!0,class:!0,min:!0,max:!0,placeholder:!0}),Ce.forEach(d),O=y(fe),D=p(fe,"DIV",{class:!0});var Be=v(D);A=p(Be,"SPAN",{});var Ue=v(A);C=$(Ue,"Height "),T=$(Ue,b),M=$(Ue," mm"),Ue.forEach(d),le=y(Be),L=p(Be,"SPAN",{});var Oe=v(L);H=$(Oe,"Total time: "),Q=$(Oe,X),_e=$(Oe," s"),Oe.forEach(d),Be.forEach(d),R=y(fe),B=p(fe,"DIV",{class:!0});var He=v(B);re=p(He,"BUTTON",{class:!0});var Ze=v(re);ce=$(Ze,"Take Dark"),Ze.forEach(d),ge=y(He),oe=p(He,"SPAN",{});var We=v(oe);ae=$(We,"Dark Corrected"),ee=p(We,"INPUT",{type:!0,class:!0}),We.forEach(d),He.forEach(d),be=y(fe),q=p(fe,"SPAN",{});var ze=v(q);we=$(ze,"Show Histogram"),te=p(ze,"INPUT",{type:!0,class:!0}),ze.forEach(d),fe.forEach(d),$e=y(ie),se=p(ie,"DIV",{class:!0});var Je=v(se);ke=$(Je,"Bundles taken"),Je.forEach(d),ye=y(ie),Ee=p(ie,"DIV",{class:!0});var Ke=v(Ee);ue=p(Ke,"PROGRESS",{max:!0,class:!0}),v(ue).forEach(d),Ke.forEach(d),ie.forEach(d),Ge.forEach(d),z.forEach(d),this.h()},h(){n(t,"class","_btn btn--primary svelte-10uwj7s"),n(l,"class","_btn btn--secondary svelte-10uwj7s"),n(s,"class","grid grid-row-2 gap-y-2 w-32"),n(g,"class","btn loading btn-circle btn-lg bg-base-200 btn-ghost"),n(_,"class","stat-figure text-primary"),n(E,"class","font-mono"),n(P,"type","number"),n(P,"class","input stat-value w-36 text-right px-2"),n(P,"min","1"),n(P,"max","999"),n(P,"placeholder","1"),n(I,"class","stat-value"),n(D,"class","flex flex-col ml-4 opacity-75"),n(re,"class","btn btn-sm btn--secondary svelte-10uwj7s"),n(ee,"type","checkbox"),n(ee,"class","toggle toggle-sm ml-4 mt-2"),n(B,"class","flex flex-col ml-4"),n(te,"type","checkbox"),n(te,"class","toggle toggle-sm ml-4 mt-2"),n(N,"class","flex"),n(se,"class","stat-title"),ue.value=Ve=i[2].n,n(ue,"max",xe=i[1].n),n(ue,"class","progress progress-secondary transition-all"),n(Ee,"class","stat-desc"),n(c,"class","stat"),n(m,"class","border stats border-base-300 flex-grow"),n(e,"class","flex flex-row gap-x-3 w-full")},m(W,z){x(W,e,z),r(e,s),r(s,t),r(t,f),r(s,a),r(s,l),r(l,o),r(e,u),r(e,m),r(m,c),r(c,_),r(_,g),r(c,S),r(c,N),r(N,I),r(I,E),r(E,V),r(I,U),r(I,P),tt(P,i[1].n),r(N,O),r(N,D),r(D,A),r(A,C),r(A,T),r(A,M),r(D,le),r(D,L),r(L,H),r(L,Q),r(L,_e),r(N,R),r(N,B),r(B,re),r(re,ce),r(B,ge),r(B,oe),r(oe,ae),r(oe,ee),ee.checked=i[0],r(N,be),r(N,q),r(q,we),r(q,te),te.checked=i[0],r(c,$e),r(c,se),r(se,ke),r(c,ye),r(c,Ee),r(Ee,ue),Me||(Re=[j(t,"click",i[6]),j(l,"click",i[8]),j(P,"input",i[9]),j(re,"click",i[10]),j(ee,"change",i[11]),j(te,"change",i[12])],Me=!0)},p(W,[z]){z&8&&ve(V,W[3]),z&2&&st(P.value)!==W[1].n&&tt(P,W[1].n),z&16&&b!==(b=W[4].toFixed(3)+"")&&ve(T,b),z&16&&X!==(X=W[4]/2+"")&&ve(Q,X),z&1&&(ee.checked=W[0]),z&1&&(te.checked=W[0]),z&4&&Ve!==(Ve=W[2].n)&&(ue.value=Ve),z&2&&xe!==(xe=W[1].n)&&n(ue,"max",xe)},i:ne,o:ne,d(W){W&&d(e),Me=!1,lt(Re)}}}function Pt(i,e,s){let t,f,a;Ie(i,je,E=>s(1,t=E)),Ie(i,me,E=>s(2,f=E)),Ie(i,rt,E=>s(5,a=E));let l,o="  --",u=0,m=!1;function c(){0<t.n&&t.n<1e3?De(me,f={cmd:"take",n:t.n},f):alert("Invalid number of bundles.")}const _=()=>De(rt,a={cmd:"autofocus",n:t.n},a);function g(){t.n=st(this.value),je.set(t)}const S=()=>De(me,f={cmd:"dark",n:t.n},f);function N(){m=this.checked,s(0,m)}function I(){m=this.checked,s(0,m)}return i.$$.update=()=>{i.$$.dirty&2&&s(4,u=t.n*128*.375/1e3),i.$$.dirty&3&&(m?De(me,f={cmd:"corr",n:t.n},f):De(me,f={cmd:"uncorr",n:t.n},f)),i.$$.dirty&132&&f&&("cmd"in f||(s(7,l=f?f.n:-1),s(3,o=l==-1?"--":l)))},[m,t,f,o,u,a,c,l,_,g,S,N,I]}class Dt extends de{constructor(e){super();he(this,e,Pt,Tt,pe,{})}}function Vt(i){let e,s,t,f,a,l,o,u,m,c,_,g,S,N,I,E,V,U,P,O,D,A,C,b,T,M,le,L,H,X,Q,_e;return{c(){e=h("div"),s=h("div"),t=h("button"),f=h("b"),a=w(i[0]),l=k(),o=Ne("svg"),u=Ne("path"),m=k(),c=h("div"),_=h("section"),g=h("div"),S=w("Hold"),N=k(),I=h("section"),E=h("div"),V=w("Wash"),U=k(),P=h("div"),O=w("Prime"),D=k(),A=h("div"),C=w("Change Temperature"),b=k(),T=h("section"),M=h("div"),le=w("Image"),L=k(),H=h("div"),X=w("Move Stage"),this.h()},l(R){e=p(R,"DIV",{class:!0});var B=v(e);s=p(B,"DIV",{});var re=v(s);t=p(re,"BUTTON",{type:!0,class:!0,"aria-expanded":!0,"aria-haspopup":!0});var ce=v(t);f=p(ce,"B",{});var ge=v(f);a=$(ge,i[0]),ge.forEach(d),l=y(ce),o=Te(ce,"svg",{class:!0,xmlns:!0,viewBox:!0,fill:!0,"aria-hidden":!0});var oe=v(o);u=Te(oe,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),v(u).forEach(d),oe.forEach(d),ce.forEach(d),re.forEach(d),m=y(B),c=p(B,"DIV",{class:!0,role:!0,id:!0,tabindex:!0});var ae=v(c);_=p(ae,"SECTION",{class:!0});var ee=v(_);g=p(ee,"DIV",{href:!0,class:!0});var be=v(g);S=$(be,"Hold"),be.forEach(d),ee.forEach(d),N=y(ae),I=p(ae,"SECTION",{class:!0});var q=v(I);E=p(q,"DIV",{class:!0});var we=v(E);V=$(we,"Wash"),we.forEach(d),U=y(q),P=p(q,"DIV",{class:!0});var te=v(P);O=$(te,"Prime"),te.forEach(d),D=y(q),A=p(q,"DIV",{class:!0});var $e=v(A);C=$($e,"Change Temperature"),$e.forEach(d),q.forEach(d),b=y(ae),T=p(ae,"SECTION",{class:!0});var se=v(T);M=p(se,"DIV",{class:!0});var ke=v(M);le=$(ke,"Image"),ke.forEach(d),L=y(se),H=p(se,"DIV",{class:!0});var ye=v(H);X=$(ye,"Move Stage"),ye.forEach(d),se.forEach(d),ae.forEach(d),B.forEach(d),this.h()},h(){n(u,"fill-rule","evenodd"),n(u,"d","M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"),n(u,"clip-rule","evenodd"),n(o,"class","absolute mr-2 ml-2 h-5 w-5 right-0 self-center"),n(o,"xmlns","http://www.w3.org/2000/svg"),n(o,"viewBox","0 0 20 20"),n(o,"fill","currentColor"),n(o,"aria-hidden","true"),n(t,"type","button"),n(t,"class","relative text-lg pl-6 inline-flex w-64 rounded-md border border-gray-300 shadow-sm py-2 bg-white font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"),n(t,"aria-expanded","true"),n(t,"aria-haspopup","true"),n(g,"href","#"),n(g,"class","svelte-1py0wu"),n(_,"class","svelte-1py0wu"),n(E,"class","svelte-1py0wu"),n(P,"class","svelte-1py0wu"),n(A,"class","svelte-1py0wu"),n(I,"class","svelte-1py0wu"),n(M,"class","svelte-1py0wu"),n(H,"class","svelte-1py0wu"),n(T,"class","svelte-1py0wu"),n(c,"class","list transition ease-in scale-95 duration-75 z-10 absolute left-0 mt-2 w-64 rounded-md shadow-xl bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-200 focus:outline-none svelte-1py0wu"),n(c,"role","menu"),n(c,"id","list"),n(c,"tabindex","-1"),Pe(c,"opacity-0",!i[1]),Pe(c,"invisible",!i[1]),Pe(c,"scale-100",!i[1]),n(e,"class","relative inline-block text-left")},m(R,B){x(R,e,B),r(e,s),r(s,t),r(t,f),r(f,a),r(t,l),r(t,o),r(o,u),r(e,m),r(e,c),r(c,_),r(_,g),r(g,S),r(c,N),r(c,I),r(I,E),r(E,V),r(I,U),r(I,P),r(P,O),r(I,D),r(I,A),r(A,C),r(c,b),r(c,T),r(T,M),r(M,le),r(T,L),r(T,H),r(H,X),Q||(_e=[j(t,"blur",i[2]),j(t,"click",i[3]),j(g,"click",i[4]),j(E,"click",i[5]),j(P,"click",i[6]),j(A,"click",i[7]),j(M,"click",i[8]),j(H,"click",i[9])],Q=!0)},p(R,[B]){B&1&&ve(a,R[0]),B&2&&Pe(c,"opacity-0",!R[1]),B&2&&Pe(c,"invisible",!R[1]),B&2&&Pe(c,"scale-100",!R[1])},i:ne,o:ne,d(R){R&&d(e),Q=!1,lt(_e)}}}function xt(i,e,s){let{curr:t="Wash"}=e,f=!1;const a=()=>setTimeout(()=>s(1,f=!1),100),l=()=>s(1,f=!f),o=()=>s(0,t="Hold"),u=()=>s(0,t="Wash"),m=()=>s(0,t="Prime"),c=()=>s(0,t="Change Temperature"),_=()=>s(0,t="Image"),g=()=>s(0,t="Move Stage");return i.$$set=S=>{"curr"in S&&s(0,t=S.curr)},[t,f,a,l,o,u,m,c,_,g]}class At extends de{constructor(e){super();he(this,e,xt,Vt,pe,{curr:0})}}function Ct(i){return{c:ne,l:ne,m:ne,d:ne}}function Bt(i){let e,s,t,f,a,l,o,u,m;return{c(){e=h("span"),s=w("X "),t=h("input"),f=w(" mm"),a=k(),l=h("span"),o=w(`Y
          `),u=h("input"),m=w(" mm"),this.h()},l(c){e=p(c,"SPAN",{class:!0});var _=v(e);s=$(_,"X "),t=p(_,"INPUT",{type:!0,class:!0,placeholder:!0}),f=$(_," mm"),_.forEach(d),a=y(c),l=p(c,"SPAN",{class:!0});var g=v(l);o=$(g,`Y
          `),u=p(g,"INPUT",{type:!0,class:!0,placeholder:!0}),m=$(g," mm"),g.forEach(d),this.h()},h(){n(t,"type","number"),n(t,"class","mx-2 form w-24 svelte-1mmvv7w"),n(t,"placeholder","2000"),n(e,"class","svelte-1mmvv7w"),n(u,"type","number"),n(u,"class","mx-2 form w-24 svelte-1mmvv7w"),n(u,"placeholder","2000"),n(l,"class","svelte-1mmvv7w")},m(c,_){x(c,e,_),r(e,s),r(e,t),r(e,f),x(c,a,_),x(c,l,_),r(l,o),r(l,u),r(l,m)},d(c){c&&d(e),c&&d(a),c&&d(l)}}}function Ut(i){let e,s,t,f,a,l,o,u,m;return{c(){e=h("span"),s=w("Reagent "),t=h("input"),f=w(" \u03BCl/min"),a=k(),l=h("span"),o=w("Volume "),u=h("input"),m=w(" \u03BCl"),this.h()},l(c){e=p(c,"SPAN",{class:!0});var _=v(e);s=$(_,"Reagent "),t=p(_,"INPUT",{type:!0,class:!0,placeholder:!0}),f=$(_," \u03BCl/min"),_.forEach(d),a=y(c),l=p(c,"SPAN",{class:!0});var g=v(l);o=$(g,"Volume "),u=p(g,"INPUT",{type:!0,class:!0,placeholder:!0}),m=$(g," \u03BCl"),g.forEach(d),this.h()},h(){n(t,"type","number"),n(t,"class","mx-2 form w-24 svelte-1mmvv7w"),n(t,"placeholder","250"),n(e,"class","svelte-1mmvv7w"),n(u,"type","number"),n(u,"class","mx-2 form w-24 svelte-1mmvv7w"),n(u,"placeholder","2000"),n(l,"class","svelte-1mmvv7w")},m(c,_){x(c,e,_),r(e,s),r(e,t),r(e,f),x(c,a,_),x(c,l,_),r(l,o),r(l,u),r(l,m)},d(c){c&&d(e),c&&d(a),c&&d(l)}}}function Ot(i){let e,s,t,f;return{c(){e=h("span"),s=w("Time "),t=h("input"),f=w(" s"),this.h()},l(a){e=p(a,"SPAN",{class:!0});var l=v(e);s=$(l,"Time "),t=p(l,"INPUT",{type:!0,class:!0,placeholder:!0}),f=$(l," s"),l.forEach(d),this.h()},h(){n(t,"type","number"),n(t,"class","mx-2 form w-32 svelte-1mmvv7w"),n(t,"placeholder","60"),n(e,"class","svelte-1mmvv7w")},m(a,l){x(a,e,l),r(e,s),r(e,t),r(e,f)},d(a){a&&d(e)}}}function Ht(i){let e,s,t,f,a,l,o,u,m,c,_,g,S,N,I,E;function V(b){i[4](b)}let U={};i[0]!==void 0&&(U.curr=i[0]),c=new At({props:U}),et.push(()=>it(c,"curr",V));function P(b,T){return b[0]==="Hold"?Ot:b[0]==="Wash"?Ut:b[0]==="Move Stage"?Bt:Ct}let O=P(i),D=O(i);const A=i[3].default,C=ft(A,i,i[2],null);return{c(){e=h("li"),s=Ne("svg"),t=Ne("path"),f=k(),a=h("div"),l=h("span"),o=w(i[1]),u=k(),m=h("div"),Y(c.$$.fragment),g=k(),S=h("div"),D.c(),N=k(),I=h("p"),C&&C.c(),this.h()},l(b){e=p(b,"LI",{class:!0});var T=v(e);s=Te(T,"svg",{xmlns:!0,class:!0,viewBox:!0,fill:!0});var M=v(s);t=Te(M,"path",{"fill-rule":!0,d:!0,"clip-rule":!0}),v(t).forEach(d),M.forEach(d),f=y(T),a=p(T,"DIV",{class:!0});var le=v(a);l=p(le,"SPAN",{class:!0});var L=v(l);o=$(L,i[1]),L.forEach(d),le.forEach(d),u=y(T),m=p(T,"DIV",{});var H=v(m);Z(c.$$.fragment,H),g=y(H),S=p(H,"DIV",{class:!0});var X=v(S);D.l(X),X.forEach(d),N=y(H),I=p(H,"P",{class:!0});var Q=v(I);C&&C.l(Q),Q.forEach(d),H.forEach(d),T.forEach(d),this.h()},h(){n(t,"fill-rule","evenodd"),n(t,"d","M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"),n(t,"clip-rule","evenodd"),n(s,"xmlns","http://www.w3.org/2000/svg"),n(s,"class","absolute h-5 w-5 -mt-1 right-2"),n(s,"viewBox","0 0 20 20"),n(s,"fill","currentColor"),n(l,"class","flex justify-center items-center w-14 h-14 bg-blue-50 text-lg font-bold rounded-full"),n(a,"class","mr-8"),n(S,"class","clump grid grid-cols-3 divide-x font-medium svelte-1mmvv7w"),n(I,"class","text-lg"),n(e,"class","relative flex py-6 border-b border-gray-50")},m(b,T){x(b,e,T),r(e,s),r(s,t),r(e,f),r(e,a),r(a,l),r(l,o),r(e,u),r(e,m),J(c,m,null),r(m,g),r(m,S),D.m(S,null),r(m,N),r(m,I),C&&C.m(I,null),E=!0},p(b,[T]){(!E||T&2)&&ve(o,b[1]);const M={};!_&&T&1&&(_=!0,M.curr=b[0],dt(()=>_=!1)),c.$set(M),O!==(O=P(b))&&(D.d(1),D=O(b),D&&(D.c(),D.m(S,null))),C&&C.p&&(!E||T&4)&&ht(C,A,b,b[2],E?vt(A,b[2],T,null):pt(b[2]),null)},i(b){E||(F(c.$$.fragment,b),F(C,b),E=!0)},o(b){G(c.$$.fragment,b),G(C,b),E=!1},d(b){b&&d(e),K(c),D.d(),C&&C.d(b)}}}function Mt(i,e,s){let{$$slots:t={},$$scope:f}=e,{curr:a="Wash"}=e,{n:l=1}=e;function o(u){a=u,s(0,a)}return i.$$set=u=>{"curr"in u&&s(0,a=u.curr),"n"in u&&s(1,l=u.n),"$$scope"in u&&s(2,f=u.$$scope)},[a,l,f,t,o]}class Le extends de{constructor(e){super();he(this,e,Mt,Ht,pe,{curr:0,n:1})}}function Wt(i){let e,s,t,f,a,l,o,u,m,c,_,g,S,N,I,E;return l=new Le({props:{n:1}}),u=new Le({props:{n:2}}),c=new Le({props:{n:3}}),{c(){e=h("div"),s=h("p"),t=w("Steps"),f=k(),a=h("ul"),Y(l.$$.fragment),o=k(),Y(u.$$.fragment),m=k(),Y(c.$$.fragment),_=k(),g=h("button"),S=Ne("svg"),N=Ne("path"),I=w(`
    Add Step`),this.h()},l(V){e=p(V,"DIV",{class:!0});var U=v(e);s=p(U,"P",{class:!0});var P=v(s);t=$(P,"Steps"),P.forEach(d),f=y(U),a=p(U,"UL",{class:!0});var O=v(a);Z(l.$$.fragment,O),o=y(O),Z(u.$$.fragment,O),m=y(O),Z(c.$$.fragment,O),O.forEach(d),_=y(U),g=p(U,"BUTTON",{type:!0,class:!0});var D=v(g);S=Te(D,"svg",{class:!0,fill:!0,viewBox:!0,stroke:!0,xmlns:!0});var A=v(S);N=Te(A,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),v(N).forEach(d),A.forEach(d),I=$(D,`
    Add Step`),D.forEach(d),U.forEach(d),this.h()},h(){n(s,"class","text-gray-600 font-bold text-2xl pb-3 border-b"),n(a,"class","divide-y divide-gray-500"),n(N,"stroke-linecap","round"),n(N,"stroke-linejoin","round"),n(N,"stroke-width","2"),n(N,"d","M12 6v6m0 0v6m0-6h6m-6 0H6"),n(S,"class","-ml-2 mr-1 w-6 h-6"),n(S,"fill","none"),n(S,"viewBox","0 0 24 24"),n(S,"stroke","currentColor"),n(S,"xmlns","http://www.w3.org/2000/svg"),n(g,"type","button"),n(g,"class","transition-colors shadow-lg shadow-blue-500/50 text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"),n(e,"class","my-8")},m(V,U){x(V,e,U),r(e,s),r(s,t),r(e,f),r(e,a),J(l,a,null),r(a,o),J(u,a,null),r(a,m),J(c,a,null),r(e,_),r(e,g),r(g,S),r(S,N),r(g,I),E=!0},p:ne,i(V){E||(F(l.$$.fragment,V),F(u.$$.fragment,V),F(c.$$.fragment,V),E=!0)},o(V){G(l.$$.fragment,V),G(u.$$.fragment,V),G(c.$$.fragment,V),E=!1},d(V){V&&d(e),K(l),K(u),K(c)}}}class zt extends de{constructor(e){super();he(this,e,null,Wt,pe,{})}}function jt(i){let e,s,t,f,a,l,o;return s=new Dt({}),f=new zt({}),l=new Nt({}),{c(){e=k(),Y(s.$$.fragment),t=k(),Y(f.$$.fragment),a=k(),Y(l.$$.fragment),this.h()},l(u){mt('[data-svelte="svelte-1g6iwu5"]',document.head).forEach(d),e=y(u),Z(s.$$.fragment,u),t=y(u),Z(f.$$.fragment,u),a=y(u),Z(l.$$.fragment,u),this.h()},h(){document.title="PySeq 2501"},m(u,m){x(u,e,m),J(s,u,m),x(u,t,m),J(f,u,m),x(u,a,m),J(l,u,m),o=!0},p:ne,i(u){o||(F(s.$$.fragment,u),F(f.$$.fragment,u),F(l.$$.fragment,u),o=!0)},o(u){G(s.$$.fragment,u),G(f.$$.fragment,u),G(l.$$.fragment,u),o=!1},d(u){u&&d(e),K(s,u),u&&d(t),K(f,u),u&&d(a),K(l,u)}}}class qt extends de{constructor(e){super();he(this,e,null,jt,pe,{})}}export{qt as default};
