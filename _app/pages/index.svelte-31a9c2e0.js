import{S as X,i as Z,s as x,L as oe,M as O,N as F,w as d,x as g,y as h,O as H,q as v,o as b,B as k,P as ue,Q as ee,e as z,k as I,c as V,a as D,m as j,d as p,b as C,g as y,J as q,R as fe,T as ce,U as ie,V as $e,t as R,h as L,f as te,W,X as pe,Y as se,Z as me}from"../chunks/vendor-72da776e.js";const ne=a=>a?`${a.title} (${new Date(a.release_date).getFullYear()})`:"",_e="https://emby.cacou.tk/request",de="alexisloiselle97@gmail.com",ge="jellyfin@cacou.tk";var he={sendEmail:async(a,e)=>{const t=`
<i style="font-size: 20px;">
  ${e}
</i>
<br/>
<span style="font-size: 10px;">
  ${a.url}
</span>
`,s={to:de,from:ge,subject:`Request: ${ne(a)}`,text:t,html:t};return await(await fetch(_e,{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}})).text()}};const ve="https://api.themoviedb.org/3",be="https://www.themoviedb.org",ke="/search/movie",we="/search/tv",qe="9ab6f25b30a4f1cdd2fb6bd1df059754";var Se={query:async(a,e)=>{try{const t=a==="Movie";let s=t?ke:we;return s=`${ve}${s}?api_key=${qe}&query=${e}`,(await(await fetch(s)).json()).results.slice(0,5).map(l=>({title:t?l.title:l.name,release_date:t?l.release_date:l.first_air_date,url:`${be}/${t?"movie":"tv"}/${l.id}`}))}catch(t){console.log(t)}}};function ye(a){let e,t,s;function n(l){a[6](l)}let r={disabled:!a[1],search:a[4],showMenuWithNoInput:!1,getOptionLabel:ne,label:"Title"};return a[0]!==void 0&&(r.value=a[0]),e=new oe({props:r}),a[5](e),O.push(()=>F(e,"value",n)),e.$on("SMUIAutocomplete:selected",a[3]),{c(){d(e.$$.fragment)},l(l){g(e.$$.fragment,l)},m(l,i){h(e,l,i),s=!0},p(l,[i]){const f={};i&2&&(f.disabled=!l[1]),!t&&i&1&&(t=!0,f.value=l[0],H(()=>t=!1)),e.$set(f)},i(l){s||(v(e.$$.fragment,l),s=!0)},o(l){b(e.$$.fragment,l),s=!1},d(l){a[5](null),k(e,l)}}}function Ee(a,e,t){let{kind:s}=e,{value:n}=e,r,l=!1;const i=()=>{l=!0},f=async o=>l?(l=!1,r.focus(),r.blur(),!1):o===""||!s?[]:await Se.query(s,o);function $(o){O[o?"unshift":"push"](()=>{r=o,t(2,r)})}function c(o){n=o,t(0,n)}return a.$$set=o=>{"kind"in o&&t(1,s=o.kind),"value"in o&&t(0,n=o.value)},[n,s,r,i,f,$,c]}class Te extends X{constructor(e){super();Z(this,e,Ee,ye,x,{kind:1,value:0})}}function ze(a){let e;return{c(){e=R("TV Show")},l(t){e=L(t,"TV Show")},m(t,s){y(t,e,s)},d(t){t&&p(e)}}}function Ie(a){let e;return{c(){e=R("Movie")},l(t){e=L(t,"Movie")},m(t,s){y(t,e,s)},d(t){t&&p(e)}}}function Ve(a){let e,t,s,n;return e=new se({props:{value:"Show",$$slots:{default:[ze]},$$scope:{ctx:a}}}),s=new se({props:{value:"Movie",$$slots:{default:[Ie]},$$scope:{ctx:a}}}),{c(){d(e.$$.fragment),t=I(),d(s.$$.fragment)},l(r){g(e.$$.fragment,r),t=j(r),g(s.$$.fragment,r)},m(r,l){h(e,r,l),y(r,t,l),h(s,r,l),n=!0},p(r,l){const i={};l&4096&&(i.$$scope={dirty:l,ctx:r}),e.$set(i);const f={};l&4096&&(f.$$scope={dirty:l,ctx:r}),s.$set(f)},i(r){n||(v(e.$$.fragment,r),v(s.$$.fragment,r),n=!0)},o(r){b(e.$$.fragment,r),b(s.$$.fragment,r),n=!1},d(r){k(e,r),r&&p(t),k(s,r)}}}function De(a){let e;return{c(){e=R("e.g. Only season 2")},l(t){e=L(t,"e.g. Only season 2")},m(t,s){y(t,e,s)},d(t){t&&p(e)}}}function je(a){let e,t;return e=new me({props:{slot:"helper",$$slots:{default:[De]},$$scope:{ctx:a}}}),{c(){d(e.$$.fragment)},l(s){g(e.$$.fragment,s)},m(s,n){h(e,s,n),t=!0},p(s,n){const r={};n&4096&&(r.$$scope={dirty:n,ctx:s}),e.$set(r)},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){b(e.$$.fragment,s),t=!1},d(s){k(e,s)}}}function Ce(a){let e;return{c(){e=R("Send")},l(t){e=L(t,"Send")},m(t,s){y(t,e,s)},d(t){t&&p(e)}}}function Me(a){let e,t,s,n,r,l,i;return t=new pe({props:{class:"loading",style:"opacity: "+(a[3]?1:0)+";",indeterminate:!0}}),n=new W({props:{$$slots:{default:[Ce]},$$scope:{ctx:a}}}),{c(){e=z("div"),d(t.$$.fragment),s=I(),d(n.$$.fragment),r=I(),l=z("div"),this.h()},l(f){e=V(f,"DIV",{class:!0});var $=D(e);g(t.$$.fragment,$),s=j($),g(n.$$.fragment,$),r=j($),l=V($,"DIV",{style:!0,class:!0}),D(l).forEach(p),$.forEach(p),this.h()},h(){te(l,"width","24px"),C(l,"class","svelte-gq6z5k"),C(e,"class","button-content svelte-gq6z5k")},m(f,$){y(f,e,$),h(t,e,null),q(e,s),h(n,e,null),q(e,r),q(e,l),i=!0},p(f,$){const c={};$&8&&(c.style="opacity: "+(f[3]?1:0)+";"),t.$set(c);const o={};$&4096&&(o.$$scope={dirty:$,ctx:f}),n.$set(o)},i(f){i||(v(t.$$.fragment,f),v(n.$$.fragment,f),i=!0)},o(f){b(t.$$.fragment,f),b(n.$$.fragment,f),i=!1},d(f){f&&p(e),k(t),k(n)}}}function Oe(a){let e,t,s,n,r,l,i,f,$,c,o,M,E,w,_,J,P,T,B;function ae(u){a[7](u)}let Y={label:"Content Type",$$slots:{default:[Ve]},$$scope:{ctx:a}};a[0]!==void 0&&(Y.value=a[0]),l=new ce({props:Y}),O.push(()=>F(l,"value",ae));function le(u){a[8](u)}let G={kind:a[0]};a[1]!==void 0&&(G.value=a[1]),c=new Te({props:G}),O.push(()=>F(c,"value",le));function re(u){a[9](u)}let K={label:"Note",$$slots:{helper:[je]},$$scope:{ctx:a}};return a[2]!==void 0&&(K.value=a[2]),w=new ie({props:K}),O.push(()=>F(w,"value",re)),T=new $e({props:{disabled:!a[0]||!a[1],variant:"raised",$$slots:{default:[Me]},$$scope:{ctx:a}}}),T.$on("click",a[6]),{c(){e=z("h1"),t=R("Request Form"),s=I(),n=z("div"),r=z("div"),d(l.$$.fragment),f=I(),$=z("div"),d(c.$$.fragment),M=I(),E=z("div"),d(w.$$.fragment),J=I(),P=z("div"),d(T.$$.fragment),this.h()},l(u){e=V(u,"H1",{class:!0});var m=D(e);t=L(m,"Request Form"),m.forEach(p),s=j(u),n=V(u,"DIV",{style:!0,class:!0});var S=D(n);r=V(S,"DIV",{class:!0});var N=D(r);g(l.$$.fragment,N),N.forEach(p),f=j(S),$=V(S,"DIV",{class:!0});var U=D($);g(c.$$.fragment,U),U.forEach(p),M=j(S),E=V(S,"DIV",{class:!0});var A=D(E);g(w.$$.fragment,A),A.forEach(p),J=j(S),P=V(S,"DIV",{class:!0});var Q=D(P);g(T.$$.fragment,Q),Q.forEach(p),S.forEach(p),this.h()},h(){C(e,"class","title svelte-gq6z5k"),C(r,"class","field svelte-gq6z5k"),C($,"class","field svelte-gq6z5k"),C(E,"class","field svelte-gq6z5k"),C(P,"class","field svelte-gq6z5k"),te(n,"width","100%"),C(n,"class","svelte-gq6z5k")},m(u,m){y(u,e,m),q(e,t),y(u,s,m),y(u,n,m),q(n,r),h(l,r,null),q(n,f),q(n,$),h(c,$,null),q(n,M),q(n,E),h(w,E,null),q(n,J),q(n,P),h(T,P,null),B=!0},p(u,m){const S={};m&4096&&(S.$$scope={dirty:m,ctx:u}),!i&&m&1&&(i=!0,S.value=u[0],H(()=>i=!1)),l.$set(S);const N={};m&1&&(N.kind=u[0]),!o&&m&2&&(o=!0,N.value=u[1],H(()=>o=!1)),c.$set(N);const U={};m&4096&&(U.$$scope={dirty:m,ctx:u}),!_&&m&4&&(_=!0,U.value=u[2],H(()=>_=!1)),w.$set(U);const A={};m&3&&(A.disabled=!u[0]||!u[1]),m&4104&&(A.$$scope={dirty:m,ctx:u}),T.$set(A)},i(u){B||(v(l.$$.fragment,u),v(c.$$.fragment,u),v(w.$$.fragment,u),v(T.$$.fragment,u),B=!0)},o(u){b(l.$$.fragment,u),b(c.$$.fragment,u),b(w.$$.fragment,u),b(T.$$.fragment,u),B=!1},d(u){u&&p(e),u&&p(s),u&&p(n),k(l),k(c),k(w),k(T)}}}function Re(a){let e,t;return e=new fe({props:{class:"card-content",$$slots:{default:[Oe]},$$scope:{ctx:a}}}),{c(){d(e.$$.fragment)},l(s){g(e.$$.fragment,s)},m(s,n){h(e,s,n),t=!0},p(s,n){const r={};n&4111&&(r.$$scope={dirty:n,ctx:s}),e.$set(r)},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){b(e.$$.fragment,s),t=!1},d(s){k(e,s)}}}function Le(a){let e;return{c(){e=R("Thank you!")},l(t){e=L(t,"Thank you!")},m(t,s){y(t,e,s)},d(t){t&&p(e)}}}function Pe(a){let e,t;return e=new W({props:{$$slots:{default:[Le]},$$scope:{ctx:a}}}),{c(){d(e.$$.fragment)},l(s){g(e.$$.fragment,s)},m(s,n){h(e,s,n),t=!0},p(s,n){const r={};n&4096&&(r.$$scope={dirty:n,ctx:s}),e.$set(r)},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){b(e.$$.fragment,s),t=!1},d(s){k(e,s)}}}function Ne(a){let e;return{c(){e=R("Sorry, something went wrong")},l(t){e=L(t,"Sorry, something went wrong")},m(t,s){y(t,e,s)},d(t){t&&p(e)}}}function Ue(a){let e,t;return e=new W({props:{$$slots:{default:[Ne]},$$scope:{ctx:a}}}),{c(){d(e.$$.fragment)},l(s){g(e.$$.fragment,s)},m(s,n){h(e,s,n),t=!0},p(s,n){const r={};n&4096&&(r.$$scope={dirty:n,ctx:s}),e.$set(r)},i(s){t||(v(e.$$.fragment,s),t=!0)},o(s){b(e.$$.fragment,s),t=!1},d(s){k(e,s)}}}function Ae(a){let e,t,s,n,r,l,i;t=new ue({props:{class:"card",$$slots:{default:[Re]},$$scope:{ctx:a}}});let f={$$slots:{default:[Pe]},$$scope:{ctx:a}};n=new ee({props:f}),a[10](n);let $={surface$style:"background-color: #951c13;",$$slots:{default:[Ue]},$$scope:{ctx:a}};return l=new ee({props:$}),a[11](l),{c(){e=z("div"),d(t.$$.fragment),s=I(),d(n.$$.fragment),r=I(),d(l.$$.fragment),this.h()},l(c){e=V(c,"DIV",{class:!0});var o=D(e);g(t.$$.fragment,o),s=j(o),g(n.$$.fragment,o),r=j(o),g(l.$$.fragment,o),o.forEach(p),this.h()},h(){C(e,"class","form svelte-gq6z5k")},m(c,o){y(c,e,o),h(t,e,null),q(e,s),h(n,e,null),q(e,r),h(l,e,null),i=!0},p(c,[o]){const M={};o&4111&&(M.$$scope={dirty:o,ctx:c}),t.$set(M);const E={};o&4096&&(E.$$scope={dirty:o,ctx:c}),n.$set(E);const w={};o&4096&&(w.$$scope={dirty:o,ctx:c}),l.$set(w)},i(c){i||(v(t.$$.fragment,c),v(n.$$.fragment,c),v(l.$$.fragment,c),i=!0)},o(c){b(t.$$.fragment,c),b(n.$$.fragment,c),b(l.$$.fragment,c),i=!1},d(c){c&&p(e),k(t),a[10](null),k(n),a[11](null),k(l)}}}function Be(a,e,t){let s,n,r="",l=!1,i,f;const $=async()=>{try{t(3,l=!0),await he.sendEmail(n,r),i.open(),t(0,s=void 0),t(1,n=void 0),t(2,r="")}catch(_){console.log(_),f.open()}finally{t(3,l=!1)}};function c(_){s=_,t(0,s)}function o(_){n=_,t(1,n)}function M(_){r=_,t(2,r)}function E(_){O[_?"unshift":"push"](()=>{i=_,t(4,i)})}function w(_){O[_?"unshift":"push"](()=>{f=_,t(5,f)})}return[s,n,r,l,i,f,$,c,o,M,E,w]}class He extends X{constructor(e){super();Z(this,e,Be,Ae,x,{})}}export{He as default};
