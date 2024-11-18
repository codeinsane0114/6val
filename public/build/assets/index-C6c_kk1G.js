import{p as oe,a as ie}from"./formatters-Cw2xOObF.js";import{_ as re}from"./TablePagination-DDm5e6mo.js";import{_ as ne}from"./AppTextField-CidaaHzM.js";import{_ as ce}from"./AppSelect-crBF-FCt.js";import{_ as ue}from"./AddNewUserDrawer-a_zBDbO5.js";import{u as de}from"./useApi-DdK-gkOH.js";import{c as pe}from"./createUrl-DNLxE3Ao.js";import{$}from"./api-TCFOQXkB.js";import{V as R,a as w}from"./VRow-DcLldsAi.js";import{V as E,a as me,b as fe}from"./VCard-DPA8ST1d.js";import{V as k}from"./VCardText-RhVa6W5U.js";import{V as N}from"./VAvatar-B9R7oHU8.js";import{r,bb as ve,$ as W,c as C,d as s,b as t,e as l,m as o,aZ as u,o as x,F as xe,h as _e,f as O,v as n,x as be,a3 as m,t as f,al as A,a as F}from"./main-BpgBUGps.js";import{V as q}from"./VDivider-CPy3CxIk.js";import{V as ge}from"./VSpacer-BwkbVUnR.js";import{V as Ve}from"./VDataTableServer-BAtj0Uzn.js";import{V as he}from"./VImg-MA4fhMLa.js";import{V as ye}from"./VChip-Gdsswa87.js";import{V as we}from"./VMenu-D0wOrHxC.js";import{V as Ue,a as M,b as j}from"./VList-Bu48BGuL.js";import"./helpers-DK5QwNv0.js";import"./VPagination-CNJZqHFv.js";import"./form-jV7EneQK.js";import"./VTextField-DNnTNwAs.js";/* empty css                   */import"./VCounter-B6UOvRBl.js";import"./VField-CsvBDBUR.js";import"./easing-CjukEv2V.js";import"./VInput-h-v4JtUG.js";import"./forwardRefs-C-GTDzx5.js";import"./VSelect-CvnWonW6.js";import"./dialog-transition-Dw95iG-S.js";import"./VOverlay-BSwVgU5G.js";import"./delay-CiIYTbkJ.js";import"./lazy-CKzIgbSD.js";import"./scopeId-D5DaYZNr.js";import"./VCheckboxBtn-KnKlC77n.js";import"./VSelectionControl-tBJoG7de.js";import"./validators-DpYrMFzk.js";import"./AppDrawerHeaderSection-3Bs6Y9hY.js";import"./vue3-perfect-scrollbar.esm-BBUBQ5qB.js";import"./VForm-HbYQbjWg.js";import"./VNavigationDrawer-BkJcA9O0.js";import"./ssrBoot-Cao_hl35.js";import"./index-B3bPRkoL.js";/* empty css              */import"./VDataTable-D1zlCTrG.js";import"./VTable-BGk_-fzG.js";import"./filter-BHKMO-vf.js";import"./VSlideGroup-qhrbewnN.js";const ke={class:"d-flex mb-6"},Ce={class:"d-flex justify-space-between"},Ae={class:"d-flex flex-column gap-y-1"},Pe={class:"text-body-1 text-high-emphasis"},Se={class:"d-flex gap-x-2 align-center"},Le={class:"text-h4"},Te={class:"text-sm"},Be={class:"me-3 d-flex gap-3"},ze={class:"app-user-search-filter d-flex align-center flex-wrap gap-4"},De={style:{"inline-size":"15.625rem"}},Ie={class:"d-flex align-center gap-x-4"},$e={key:1},Re={class:"d-flex flex-column"},Ee={class:"text-base"},Ne={class:"text-sm"},We={class:"d-flex align-center gap-x-2"},Oe={class:"text-capitalize text-high-emphasis text-body-1"},Fe={class:"text-body-1 text-high-emphasis text-capitalize"},Wt={__name:"index",async setup(qe){let _,P;const b=r(""),g=r(),V=r(),h=r(),d=r(10),p=r(1),S=r(),L=r(),v=r([]),Q=i=>{var a,c;S.value=(a=i.sortBy[0])==null?void 0:a.key,L.value=(c=i.sortBy[0])==null?void 0:c.order},Z=[{title:"User",key:"user"},{title:"Role",key:"role"},{title:"Plan",key:"plan"},{title:"Billing",key:"billing"},{title:"Status",key:"status"},{title:"Actions",key:"actions",sortable:!1}],{data:T,execute:B}=([_,P]=ve(()=>de(pe("/apps/users",{query:{q:b,status:h,plan:V,role:g,itemsPerPage:d,page:p,sortBy:S,orderBy:L}}))),_=await _,P(),_),G=W(()=>T.value.users),z=W(()=>T.value.totalUsers),H=[{title:"Admin",value:"admin"},{title:"Author",value:"author"},{title:"Editor",value:"editor"},{title:"Maintainer",value:"maintainer"},{title:"Subscriber",value:"subscriber"}],J=[{title:"Basic",value:"basic"},{title:"Company",value:"company"},{title:"Enterprise",value:"enterprise"},{title:"Team",value:"team"}],K=[{title:"Pending",value:"pending"},{title:"Active",value:"active"},{title:"Inactive",value:"inactive"}],U=i=>{const a=i.toLowerCase();return a==="subscriber"?{color:"success",icon:"bx-user"}:a==="author"?{color:"error",icon:"bx-desktop"}:a==="maintainer"?{color:"info",icon:"bx-pie-chart-alt"}:a==="editor"?{color:"warning",icon:"bx-edit"}:a==="admin"?{color:"primary",icon:"bx-crown"}:{color:"primary",icon:"bx-user"}},X=i=>{const a=i.toLowerCase();return a==="pending"?"warning":a==="active"?"success":a==="inactive"?"secondary":"primary"},y=r(!1),Y=async i=>{await $("/apps/users",{method:"POST",body:i}),B()},ee=async i=>{await $(`/apps/users/${i}`,{method:"DELETE"});const a=v.value.findIndex(c=>c===i);a!==-1&&v.value.splice(a,1),B()},te=r([{title:"Session",value:"21,459",change:29,desc:"Total Users",icon:"bx-group",iconColor:"primary"},{title:"Paid Users",value:"4,567",change:18,desc:"Last Week Analytics",icon:"bx-user-plus",iconColor:"error"},{title:"Active Users",value:"19,860",change:-14,desc:"Last Week Analytics",icon:"bx-user-check",iconColor:"success"},{title:"Pending Users",value:"237",change:42,desc:"Last Week Analytics",icon:"bx-user-voice",iconColor:"warning"}]);return(i,a)=>{const c=ce,ae=ne,le=F("RouterLink"),D=F("IconBtn"),se=re;return x(),C("section",null,[s("div",ke,[t(R,null,{default:l(()=>[(x(!0),C(xe,null,_e(o(te),(e,I)=>(x(),O(w,{key:I,cols:"12",md:"3",sm:"6"},{default:l(()=>[t(E,null,{default:l(()=>[t(k,null,{default:l(()=>[s("div",Ce,[s("div",Ae,[s("div",Pe,n(e.title),1),s("div",Se,[s("h4",Le,n(e.value),1),s("div",{class:be(["text-base",e.change>0?"text-success":"text-error"])}," ("+n(("prefixWithPlus"in i?i.prefixWithPlus:o(oe))(e.change))+"%) ",3)]),s("div",Te,n(e.desc),1)]),t(N,{color:e.iconColor,variant:"tonal",rounded:"",size:"40"},{default:l(()=>[t(m,{icon:e.icon,size:"24"},null,8,["icon"])]),_:2},1032,["color"])])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),t(E,{class:"mb-6"},{default:l(()=>[t(me,{class:"pb-4"},{default:l(()=>[t(fe,null,{default:l(()=>[f("Filters")]),_:1})]),_:1}),t(k,null,{default:l(()=>[t(R,null,{default:l(()=>[t(w,{cols:"12",sm:"4"},{default:l(()=>[t(c,{modelValue:o(g),"onUpdate:modelValue":a[0]||(a[0]=e=>u(g)?g.value=e:null),placeholder:"Select Role",items:H,clearable:"","clear-icon":"bx-x"},null,8,["modelValue"])]),_:1}),t(w,{cols:"12",sm:"4"},{default:l(()=>[t(c,{modelValue:o(V),"onUpdate:modelValue":a[1]||(a[1]=e=>u(V)?V.value=e:null),placeholder:"Select Plan",items:J,clearable:"","clear-icon":"bx-x"},null,8,["modelValue"])]),_:1}),t(w,{cols:"12",sm:"4"},{default:l(()=>[t(c,{modelValue:o(h),"onUpdate:modelValue":a[2]||(a[2]=e=>u(h)?h.value=e:null),placeholder:"Select Status",items:K,clearable:"","clear-icon":"bx-x"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),t(q),t(k,{class:"d-flex flex-wrap gap-4"},{default:l(()=>[s("div",Be,[t(c,{"model-value":o(d),items:[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"All"}],style:{"inline-size":"6.25rem"},"onUpdate:modelValue":a[3]||(a[3]=e=>d.value=parseInt(e,10))},null,8,["model-value"])]),t(ge),s("div",ze,[s("div",De,[t(ae,{modelValue:o(b),"onUpdate:modelValue":a[4]||(a[4]=e=>u(b)?b.value=e:null),placeholder:"Search User"},null,8,["modelValue"])]),t(A,{variant:"tonal",color:"secondary","prepend-icon":"bx-export"},{default:l(()=>[f(" Export ")]),_:1}),t(A,{"prepend-icon":"bx-plus",onClick:a[5]||(a[5]=e=>y.value=!0)},{default:l(()=>[f(" Add New User ")]),_:1})])]),_:1}),t(q),t(Ve,{"items-per-page":o(d),"onUpdate:itemsPerPage":a[7]||(a[7]=e=>u(d)?d.value=e:null),"model-value":o(v),"onUpdate:modelValue":a[8]||(a[8]=e=>u(v)?v.value=e:null),page:o(p),"onUpdate:page":a[9]||(a[9]=e=>u(p)?p.value=e:null),items:o(G),"item-value":"id","items-length":o(z),headers:Z,class:"text-no-wrap","show-select":"","onUpdate:options":Q},{"item.user":l(({item:e})=>[s("div",Ie,[t(N,{size:"34",variant:e.avatar?void 0:"tonal",color:e.avatar?void 0:U(e.role).color},{default:l(()=>[e.avatar?(x(),O(he,{key:0,src:e.avatar},null,8,["src"])):(x(),C("span",$e,n(("avatarText"in i?i.avatarText:o(ie))(e.fullName)),1))]),_:2},1032,["variant","color"]),s("div",Re,[s("h6",Ee,[t(le,{to:{name:"apps-user-view-id",params:{id:e.id}},class:"font-weight-medium text-link"},{default:l(()=>[f(n(e.fullName),1)]),_:2},1032,["to"])]),s("div",Ne,n(e.email),1)])])]),"item.role":l(({item:e})=>[s("div",We,[t(m,{size:20,icon:U(e.role).icon,color:U(e.role).color},null,8,["icon","color"]),s("div",Oe,n(e.role),1)])]),"item.plan":l(({item:e})=>[s("div",Fe,n(e.currentPlan),1)]),"item.status":l(({item:e})=>[t(ye,{color:X(e.status),size:"small",label:"",class:"text-capitalize"},{default:l(()=>[f(n(e.status),1)]),_:2},1032,["color"])]),"item.actions":l(({item:e})=>[t(D,{onClick:I=>ee(e.id)},{default:l(()=>[t(m,{icon:"bx-trash"})]),_:2},1032,["onClick"]),t(D,null,{default:l(()=>[t(m,{icon:"bx-show"})]),_:1}),t(A,{icon:"",variant:"text",color:"medium-emphasis"},{default:l(()=>[t(m,{icon:"bx-dots-vertical-rounded"}),t(we,{activator:"parent"},{default:l(()=>[t(Ue,null,{default:l(()=>[t(M,{to:{name:"apps-user-view-id",params:{id:e.id}}},{prepend:l(()=>[t(m,{icon:"bx-show"})]),default:l(()=>[t(j,null,{default:l(()=>[f("View")]),_:1})]),_:2},1032,["to"]),t(M,{link:""},{prepend:l(()=>[t(m,{icon:"bx-pencil"})]),default:l(()=>[t(j,null,{default:l(()=>[f("Edit")]),_:1})]),_:1})]),_:2},1024)]),_:2},1024)]),_:2},1024)]),bottom:l(()=>[t(se,{page:o(p),"onUpdate:page":a[6]||(a[6]=e=>u(p)?p.value=e:null),"items-per-page":o(d),"total-items":o(z)},null,8,["page","items-per-page","total-items"])]),_:1},8,["items-per-page","model-value","page","items","items-length"])]),_:1}),t(ue,{isDrawerOpen:o(y),"onUpdate:isDrawerOpen":a[10]||(a[10]=e=>u(y)?y.value=e:null),onUserData:Y},null,8,["isDrawerOpen"])])}}};export{Wt as default};