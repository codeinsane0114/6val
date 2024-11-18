import{a as $}from"./formatters-Cw2xOObF.js";import{_ as D}from"./TablePagination-DDm5e6mo.js";import{_ as P}from"./AppSelect-crBF-FCt.js";import{_ as N}from"./AppTextField-CidaaHzM.js";import{_ as O}from"./ECommerceAddCustomerDrawer-Bzqt9l55.js";import{u as z}from"./useApi-DdK-gkOH.js";import{c as R}from"./createUrl-DNLxE3Ao.js";import{_ as q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as E}from"./VCard-DPA8ST1d.js";import{V as F}from"./VCardText-RhVa6W5U.js";import{r as l,bb as L,$ as w,c as b,b as o,e as r,m as s,aZ as p,o as x,d as a,al as C,t as v,f as j,v as n,a as Q}from"./main-BpgBUGps.js";import{V as Z}from"./VDivider-CPy3CxIk.js";import{V as G}from"./VDataTableServer-BAtj0Uzn.js";import{V as H}from"./VAvatar-B9R7oHU8.js";import{V as J}from"./VImg-MA4fhMLa.js";import"./helpers-DK5QwNv0.js";import"./VPagination-CNJZqHFv.js";import"./form-jV7EneQK.js";import"./VSelect-CvnWonW6.js";import"./VTextField-DNnTNwAs.js";/* empty css                   */import"./VCounter-B6UOvRBl.js";import"./VField-CsvBDBUR.js";import"./easing-CjukEv2V.js";import"./VInput-h-v4JtUG.js";import"./forwardRefs-C-GTDzx5.js";import"./VList-Bu48BGuL.js";import"./ssrBoot-Cao_hl35.js";import"./dialog-transition-Dw95iG-S.js";import"./VMenu-D0wOrHxC.js";import"./VOverlay-BSwVgU5G.js";import"./delay-CiIYTbkJ.js";import"./lazy-CKzIgbSD.js";import"./scopeId-D5DaYZNr.js";import"./VCheckboxBtn-KnKlC77n.js";import"./VSelectionControl-tBJoG7de.js";import"./VChip-Gdsswa87.js";import"./VSlideGroup-qhrbewnN.js";import"./validators-DpYrMFzk.js";import"./AppDrawerHeaderSection-3Bs6Y9hY.js";import"./VSpacer-BwkbVUnR.js";/* empty css              */import"./vue3-perfect-scrollbar.esm-BBUBQ5qB.js";import"./VForm-HbYQbjWg.js";import"./VRow-DcLldsAi.js";import"./VSwitch-lAdZ86xz.js";import"./VNavigationDrawer-BkJcA9O0.js";import"./index-B3bPRkoL.js";import"./VDataTable-D1zlCTrG.js";import"./VTable-BGk_-fzG.js";import"./filter-BHKMO-vf.js";const K={class:"d-flex justify-space-between flex-wrap gap-y-4"},M={class:"d-flex flex-row gap-4 align-center flex-wrap"},W={class:"d-flex align-center gap-x-3"},X={key:1},Y={class:"d-flex flex-column"},tt={class:"text-body-2"},et={class:"text-body-1 text-high-emphasis"},ot={class:"d-flex gap-x-2"},rt=["src"],st={class:"text-body-1"},at={class:"text-h6"},it={__name:"index",async setup(mt){let c,g;const _=l(""),d=l(!1),i=l(10),m=l(1),y=l(),V=l(),B=[{title:"Customer",key:"customer"},{title:"Customer Id",key:"customerId"},{title:"Country",key:"country"},{title:"Orders",key:"orders"},{title:"Total Spent",key:"totalSpent"}],T=u=>{var e,f;y.value=(e=u.sortBy[0])==null?void 0:e.key,V.value=(f=u.sortBy[0])==null?void 0:f.order},{data:h}=([c,g]=L(()=>z(R("/apps/ecommerce/customers",{query:{q:_,itemsPerPage:i,page:m,sortBy:y,orderBy:V}}))),c=await c,g(),c),S=w(()=>h.value.customers),k=w(()=>h.value.total);return(u,e)=>{const f=N,U=P,A=Q("RouterLink"),I=D;return x(),b("div",null,[o(E,null,{default:r(()=>[o(F,null,{default:r(()=>[a("div",K,[o(f,{modelValue:s(_),"onUpdate:modelValue":e[0]||(e[0]=t=>p(_)?_.value=t:null),style:{"max-inline-size":"280px","min-inline-size":"280px"},placeholder:"Search Name"},null,8,["modelValue"]),a("div",M,[o(U,{modelValue:s(i),"onUpdate:modelValue":e[1]||(e[1]=t=>p(i)?i.value=t:null),items:[5,10,20,50,100]},null,8,["modelValue"]),o(C,{"prepend-icon":"bx-export",variant:"tonal",color:"secondary"},{default:r(()=>[v(" Export ")]),_:1}),o(C,{"prepend-icon":"bx-plus",onClick:e[2]||(e[2]=t=>d.value=!s(d))},{default:r(()=>[v(" Add Customer ")]),_:1})])])]),_:1}),o(Z),o(G,{"items-per-page":s(i),"onUpdate:itemsPerPage":e[4]||(e[4]=t=>p(i)?i.value=t:null),page:s(m),"onUpdate:page":e[5]||(e[5]=t=>p(m)?m.value=t:null),items:s(S),"item-value":"customer",headers:B,"items-length":s(k),"show-select":"",class:"text-no-wrap","onUpdate:options":T},{"item.customer":r(({item:t})=>[a("div",W,[o(H,{size:"34",variant:t.avatar?void 0:"tonal"},{default:r(()=>[t.avatar?(x(),j(J,{key:0,src:t.avatar},null,8,["src"])):(x(),b("span",X,n(("avatarText"in u?u.avatarText:s($))(t.customer)),1))]),_:2},1032,["variant"]),a("div",Y,[o(A,{to:{name:"apps-ecommerce-customer-details-id",params:{id:t.customerId}},class:"text-link font-weight-medium d-inline-block",style:{"line-height":"1.375rem"}},{default:r(()=>[v(n(t.customer),1)]),_:2},1032,["to"]),a("div",tt,n(t.email),1)])])]),"item.customerId":r(({item:t})=>[a("div",et," #"+n(t.customerId),1)]),"item.orders":r(({item:t})=>[v(n(t.order),1)]),"item.country":r(({item:t})=>[a("div",ot,[a("img",{src:t.countryFlag,height:"22",width:"22"},null,8,rt),a("span",st,n(t.country),1)])]),"item.totalSpent":r(({item:t})=>[a("h6",at," $"+n(t.totalSpent),1)]),bottom:r(()=>[o(I,{page:s(m),"onUpdate:page":e[3]||(e[3]=t=>p(m)?m.value=t:null),"items-per-page":s(i),"total-items":s(k)},null,8,["page","items-per-page","total-items"])]),_:1},8,["items-per-page","page","items","items-length"])]),_:1}),o(O,{"is-drawer-open":s(d),"onUpdate:isDrawerOpen":e[6]||(e[6]=t=>p(d)?d.value=t:null)},null,8,["is-drawer-open"])])}}},ae=q(it,[["__scopeId","data-v-56a2046d"]]);export{ae as default};
