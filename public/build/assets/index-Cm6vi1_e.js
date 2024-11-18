import{p as le}from"./formatters-Cw2xOObF.js";import{_ as se}from"./TablePagination-DDm5e6mo.js";import{_ as ae}from"./AppTextField-CidaaHzM.js";import{_ as re}from"./AppSelect-crBF-FCt.js";import{u as ie}from"./useApi-DdK-gkOH.js";import{c as ne}from"./createUrl-DNLxE3Ao.js";import{$ as ce}from"./api-TCFOQXkB.js";import{V as q}from"./VCard-DPA8ST1d.js";import{V as F}from"./VCardText-RhVa6W5U.js";import{V as L,a as k}from"./VRow-DcLldsAi.js";import{V as W}from"./VChip-Gdsswa87.js";import{V as w}from"./VAvatar-B9R7oHU8.js";import{r as i,bb as ue,$ as G,c as P,b as t,e as o,o as f,F as H,h as de,d as r,v as m,f as $,t as v,m as a,y as C,a3 as S,x as pe,aZ as u,al as R,q as me,a as fe}from"./main-BpgBUGps.js";import{V as U}from"./VDivider-CPy3CxIk.js";import{V as ve}from"./VSpacer-BwkbVUnR.js";import{V as xe}from"./VDataTableServer-BAtj0Uzn.js";import{V as ge}from"./VSwitch-lAdZ86xz.js";import{V as be}from"./VMenu-D0wOrHxC.js";import{V as he,a as A}from"./VList-Bu48BGuL.js";import"./helpers-DK5QwNv0.js";import"./VPagination-CNJZqHFv.js";import"./form-jV7EneQK.js";import"./VTextField-DNnTNwAs.js";/* empty css                   */import"./VCounter-B6UOvRBl.js";import"./VImg-MA4fhMLa.js";import"./VField-CsvBDBUR.js";import"./easing-CjukEv2V.js";import"./VInput-h-v4JtUG.js";import"./forwardRefs-C-GTDzx5.js";import"./VSelect-CvnWonW6.js";import"./dialog-transition-Dw95iG-S.js";import"./VOverlay-BSwVgU5G.js";import"./delay-CiIYTbkJ.js";import"./lazy-CKzIgbSD.js";import"./scopeId-D5DaYZNr.js";import"./VCheckboxBtn-KnKlC77n.js";import"./VSelectionControl-tBJoG7de.js";import"./index-B3bPRkoL.js";/* empty css              */import"./VSlideGroup-qhrbewnN.js";import"./VDataTable-D1zlCTrG.js";import"./VTable-BGk_-fzG.js";import"./filter-BHKMO-vf.js";import"./ssrBoot-Cao_hl35.js";const ye={class:"d-flex flex-column gap-y-1"},_e={class:"text-body-1 text-capitalize"},Ve={class:"text-h4"},ke={class:"d-flex align-center gap-x-2"},Se={class:"text-no-wrap"},we={class:"d-flex flex-wrap gap-4 pa-6"},Pe={class:"d-flex align-center"},$e={class:"d-flex gap-4 flex-wrap align-center"},Ce={class:"d-flex align-center gap-x-4"},Ue={class:"d-flex flex-column"},Ae={class:"text-body-1 font-weight-medium text-high-emphasis"},De={class:"text-body-2"},Be={class:"text-body-1 text-high-emphasis"},wt={__name:"index",async setup(Ie){let g,D;const b=i([{title:"In-Store Sales",value:"$5,345",icon:"bx-store-alt",desc:"5k orders",change:5.7},{title:"Website Sales",value:"$74,347",icon:"bx-laptop",desc:"21k orders",change:12.4},{title:"Discount",value:"$14,235",icon:"bx-gift",desc:"6k orders"},{title:"Affiliate",value:"$8,345",icon:"bx-wallet",desc:"150 orders",change:-3.5}]),Q=[{title:"Product",key:"product"},{title:"Category",key:"category"},{title:"Stock",key:"stock",sortable:!1},{title:"SKU",key:"sku"},{title:"Price",key:"price"},{title:"QTY",key:"qty"},{title:"Status",key:"status"},{title:"Actions",key:"actions",sortable:!1}],h=i(),y=i(),_=i(),V=i(""),x=i([]),j=i([{title:"Scheduled",value:"Scheduled"},{title:"Publish",value:"Published"},{title:"Inactive",value:"Inactive"}]),K=i([{title:"Accessories",value:"Accessories"},{title:"Home Decor",value:"Home Decor"},{title:"Electronics",value:"Electronics"},{title:"Shoes",value:"Shoes"},{title:"Office",value:"Office"},{title:"Games",value:"Games"}]),Y=i([{title:"In Stock",value:!0},{title:"Out of Stock",value:!1}]),d=i(10),p=i(1),B=i(),I=i(),Z=s=>{var l,n;B.value=(l=s.sortBy[0])==null?void 0:l.key,I.value=(n=s.sortBy[0])==null?void 0:n.order},z=s=>{if(s==="Accessories")return{color:"error",icon:"bx-headphone"};if(s==="Home Decor")return{color:"info",icon:"bx-home-smile"};if(s==="Electronics")return{color:"primary",icon:"bx-laptop"};if(s==="Shoes")return{color:"success",icon:"bx-walk"};if(s==="Office")return{color:"warning",icon:"bx-briefcase"};if(s==="Games")return{color:"primary",icon:"bx-game"}},J=s=>{if(s==="Scheduled")return{text:"Scheduled",color:"warning"};if(s==="Published")return{text:"Publish",color:"success"};if(s==="Inactive")return{text:"Inactive",color:"error"}},{data:E,execute:X}=([g,D]=ue(()=>ie(ne("/apps/ecommerce/products",{query:{q:V,stock:_,category:y,status:h,page:p,itemsPerPage:d,sortBy:B,orderBy:I}}))),g=await g,D(),g),M=G(()=>E.value.products),T=G(()=>E.value.total),ee=async s=>{await ce(`apps/ecommerce/products/${s}`,{method:"DELETE"});const l=x.value.findIndex(n=>n===s);l!==-1&&x.value.splice(l,1),X()};return(s,l)=>{const n=re,te=ae,N=fe("IconBtn"),oe=se;return f(),P("div",null,[t(q,{class:"mb-6"},{default:o(()=>[t(F,{class:"px-3"},{default:o(()=>[t(L,null,{default:o(()=>[(f(!0),P(H,null,de(a(b),(e,c)=>(f(),P(H,{key:c},[t(k,{cols:"12",sm:"6",md:"3",class:"px-6"},{default:o(()=>[r("div",{class:pe(["d-flex justify-space-between",s.$vuetify.display.xs?c!==a(b).length-1?"border-b pb-4":"":s.$vuetify.display.sm&&c<a(b).length/2?"border-b pb-4":""])},[r("div",ye,[r("div",_e,m(e.title),1),r("h4",Ve,m(e.value),1),r("div",ke,[r("div",Se,m(e.desc),1),e.change?(f(),$(W,{key:0,label:"",color:e.change>0?"success":"error",size:"small"},{default:o(()=>[v(m(("prefixWithPlus"in s?s.prefixWithPlus:a(le))(e.change))+"% ",1)]),_:2},1032,["color"])):C("",!0)])]),t(w,{variant:"tonal",rounded:"",size:"44"},{default:o(()=>[t(S,{icon:e.icon,size:"24",class:"text-high-emphasis"},null,8,["icon"])]),_:2},1024)],2)]),_:2},1024),(s.$vuetify.display.mdAndUp?c!==a(b).length-1:s.$vuetify.display.smAndUp&&c%2===0)?(f(),$(U,{key:0,vertical:"",inset:"",length:"92"})):C("",!0)],64))),128))]),_:1})]),_:1})]),_:1}),t(q,{title:"Filters",class:"mb-6"},{default:o(()=>[t(F,{class:"pb-5"},{default:o(()=>[t(L,null,{default:o(()=>[t(k,{cols:"12",sm:"4"},{default:o(()=>[t(n,{modelValue:a(h),"onUpdate:modelValue":l[0]||(l[0]=e=>u(h)?h.value=e:null),placeholder:"Status",items:a(j),clearable:"","clear-icon":"bx-x"},null,8,["modelValue","items"])]),_:1}),t(k,{cols:"12",sm:"4"},{default:o(()=>[t(n,{modelValue:a(y),"onUpdate:modelValue":l[1]||(l[1]=e=>u(y)?y.value=e:null),placeholder:"Category",items:a(K),clearable:"","clear-icon":"bx-x"},null,8,["modelValue","items"])]),_:1}),t(k,{cols:"12",sm:"4"},{default:o(()=>[t(n,{modelValue:a(_),"onUpdate:modelValue":l[2]||(l[2]=e=>u(_)?_.value=e:null),placeholder:"Stock",items:a(Y),clearable:"","clear-icon":"bx-x"},null,8,["modelValue","items"])]),_:1})]),_:1})]),_:1}),t(U),r("div",we,[r("div",Pe,[t(te,{modelValue:a(V),"onUpdate:modelValue":l[3]||(l[3]=e=>u(V)?V.value=e:null),placeholder:"Search Product",style:{"inline-size":"250px"},class:"me-3"},null,8,["modelValue"])]),t(ve),r("div",$e,[t(n,{modelValue:a(d),"onUpdate:modelValue":l[4]||(l[4]=e=>u(d)?d.value=e:null),items:[5,10,20,25,50]},null,8,["modelValue"]),t(R,{variant:"tonal",color:"secondary","prepend-icon":"bx-export"},{default:o(()=>[v(" Export ")]),_:1}),t(R,{color:"primary","prepend-icon":"bx-plus",onClick:l[5]||(l[5]=e=>s.$router.push("/apps/ecommerce/product/add"))},{default:o(()=>[v(" Add Product ")]),_:1})])]),t(U),t(xe,{"items-per-page":a(d),"onUpdate:itemsPerPage":l[7]||(l[7]=e=>u(d)?d.value=e:null),"model-value":a(x),"onUpdate:modelValue":l[8]||(l[8]=e=>u(x)?x.value=e:null),page:a(p),"onUpdate:page":l[9]||(l[9]=e=>u(p)?p.value=e:null),headers:Q,"show-select":"",items:a(M),"items-length":a(T),class:"text-no-wrap","onUpdate:options":Z},{"item.product":o(({item:e})=>[r("div",Ce,[e.image?(f(),$(w,{key:0,size:"38",variant:"tonal",rounded:"",image:e.image},null,8,["image"])):C("",!0),r("div",Ue,[r("span",Ae,m(e.productName),1),r("span",De,m(e.productBrand),1)])])]),"item.category":o(({item:e})=>{var c;return[t(w,{size:"30",variant:"tonal",color:(c=z(e.category))==null?void 0:c.color,class:"me-4"},{default:o(()=>{var O;return[t(S,{icon:(O=z(e.category))==null?void 0:O.icon,size:"18"},null,8,["icon"])]}),_:2},1032,["color"]),r("span",Be,m(e.category),1)]}),"item.stock":o(({item:e})=>[t(ge,{"model-value":e.stock},null,8,["model-value"])]),"item.status":o(({item:e})=>[t(W,me(J(e.status),{density:"default",label:"",size:"small"}),null,16)]),"item.actions":o(({item:e})=>[t(N,null,{default:o(()=>[t(S,{icon:"bx-edit"})]),_:1}),t(N,null,{default:o(()=>[t(S,{icon:"bx-dots-vertical-rounded"}),t(be,{activator:"parent"},{default:o(()=>[t(he,null,{default:o(()=>[t(A,{value:"download","prepend-icon":"bx-download"},{default:o(()=>[v(" Download ")]),_:1}),t(A,{value:"delete","prepend-icon":"bx-trash",onClick:c=>ee(e.id)},{default:o(()=>[v(" Delete ")]),_:2},1032,["onClick"]),t(A,{value:"duplicate","prepend-icon":"bx-copy"},{default:o(()=>[v(" Duplicate ")]),_:1})]),_:2},1024)]),_:2},1024)]),_:2},1024)]),bottom:o(()=>[t(oe,{page:a(p),"onUpdate:page":l[6]||(l[6]=e=>u(p)?p.value=e:null),"items-per-page":a(d),"total-items":a(T)},null,8,["page","items-per-page","total-items"])]),_:1},8,["items-per-page","model-value","page","items","items-length"])]),_:1})])}}};export{wt as default};