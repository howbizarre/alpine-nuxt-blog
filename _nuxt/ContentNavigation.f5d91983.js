import{u as d}from"./asyncData.712ce04e.js";import{d as l,av as f,I as v,m as p,V as m,ax as g,aw as h,af as y,N as r,E as _}from"./entry.cea22e4b.js";const C=l({name:"ContentNavigation",props:{query:{type:Object,required:!1,default:void 0}},async setup(u){const{query:t}=f(u),n=v(()=>{var a;return typeof((a=t.value)==null?void 0:a.params)=="function"?t.value.params():t.value});if(!n.value&&p("dd-navigation").value){const{navigation:a}=m();return{navigation:a}}const{data:o}=await d(`content-navigation-${h(n.value)}`,()=>g(n.value));return{navigation:o}},render(u){const t=y(),{navigation:n}=u,o=e=>r(_,{to:e._path},()=>e.title),a=(e,i)=>r("ul",i?{"data-level":i}:null,e.map(s=>s.children?r("li",null,[o(s),a(s.children,i+1)]):r("li",null,o(s)))),c=e=>a(e,0);return t!=null&&t.default?t.default({navigation:n,...this.$attrs}):c(n)}}),x=C;export{x as default};
