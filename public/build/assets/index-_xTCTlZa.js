import{_ as S}from"./AppTextField-CidaaHzM.js";import{_ as L}from"./DialogCloseBtn-do27yBJz.js";import{V as E}from"./VCard-DPA8ST1d.js";import{V as F}from"./VCardText-RhVa6W5U.js";import{V as M}from"./VForm-HbYQbjWg.js";import{V as O}from"./VAlert-B9i9L_5n.js";import{r as m,w as W,o as w,f as h,e as i,b as t,d,v as g,t as A,m as o,aZ as p,al as k,bb as Z,$ as T,c as G,h as H,F as J,a3 as K,a as Q}from"./main-BpgBUGps.js";import{V as X}from"./VCheckbox-DLyduI3k.js";import{V as Y}from"./VDialog-pRXmThFU.js";import{_ as ee}from"./TablePagination-DDm5e6mo.js";import{_ as te}from"./AppSelect-crBF-FCt.js";import{u as se}from"./useApi-DdK-gkOH.js";import{c as ie}from"./createUrl-DNLxE3Ao.js";import{V as oe,a as ae}from"./VRow-DcLldsAi.js";import{V as le}from"./VDivider-CPy3CxIk.js";import{V as re}from"./VDataTableServer-BAtj0Uzn.js";import{V as ne}from"./VChip-Gdsswa87.js";import"./form-jV7EneQK.js";import"./VTextField-DNnTNwAs.js";/* empty css                   */import"./VCounter-B6UOvRBl.js";import"./VImg-MA4fhMLa.js";import"./VField-CsvBDBUR.js";import"./easing-CjukEv2V.js";import"./VInput-h-v4JtUG.js";import"./forwardRefs-C-GTDzx5.js";import"./VAvatar-B9R7oHU8.js";import"./VCheckboxBtn-KnKlC77n.js";import"./VSelectionControl-tBJoG7de.js";import"./VOverlay-BSwVgU5G.js";import"./delay-CiIYTbkJ.js";import"./lazy-CKzIgbSD.js";import"./scopeId-D5DaYZNr.js";import"./dialog-transition-Dw95iG-S.js";import"./VPagination-CNJZqHFv.js";import"./VSelect-CvnWonW6.js";import"./VList-Bu48BGuL.js";import"./ssrBoot-Cao_hl35.js";import"./VMenu-D0wOrHxC.js";import"./index-B3bPRkoL.js";/* empty css              */import"./VDataTable-D1zlCTrG.js";import"./VTable-BGk_-fzG.js";import"./filter-BHKMO-vf.js";import"./VSlideGroup-qhrbewnN.js";const me={class:"text-h4 text-center mb-2"},pe={class:"text-body-1 text-center mb-6"},de={class:"d-flex gap-4 mb-4 flex-wrap flex-column flex-sm-row"},ue={__name:"AddEditPermissionDialog",props:{isDialogVisible:{type:Boolean,required:!0},permissionName:{type:String,required:!1,default:""}},emits:["update:isDialogVisible","update:permissionName"],setup(N,{emit:u}){const l=N,_=u,a=m(""),r=()=>{_("update:isDialogVisible",!1),a.value=""},n=()=>{_("update:isDialogVisible",!1),_("update:permissionName",a.value)};return W(()=>l,()=>{a.value=l.permissionName}),(b,v)=>{const P=L,c=S;return w(),h(Y,{width:b.$vuetify.display.smAndDown?"auto":600,"model-value":l.isDialogVisible,"onUpdate:modelValue":r},{default:i(()=>[t(P,{onClick:r}),t(E,{class:"pa-2 pa-sm-10"},{default:i(()=>[t(F,null,{default:i(()=>[d("h4",me,g(l.permissionName?"Edit":"Add")+" Permission ",1),d("p",pe,g(l.permissionName?"Edit":"Add")+" permission as per your requirements. ",1),t(M,null,{default:i(()=>[t(O,{type:"warning",title:"Warning!",variant:"tonal",class:"mb-6"},{text:i(()=>[A(" By "+g(l.permissionName?"editing":"adding")+" the permission name, you might break the system permissions functionality. ",1)]),_:1}),d("div",de,[t(c,{modelValue:o(a),"onUpdate:modelValue":v[0]||(v[0]=f=>p(a)?a.value=f:null),placeholder:"Enter Permission Name"},null,8,["modelValue"]),t(k,{onClick:n},{default:i(()=>[A(g(l.permissionName?"Update":"Add"),1)]),_:1})]),t(X,{label:"Set as core permission"})]),_:1})]),_:1})]),_:1})]),_:1},8,["width","model-value"])}}},ce={class:"d-flex gap-2 align-center"},fe=d("p",{class:"text-body-1 mb-0"}," Show ",-1),ge={class:"d-flex align-center gap-4 flex-wrap"},_e={class:"text-high-emphasis text-body-1"},ve={class:"d-flex gap-4"},mt={__name:"index",async setup(N){let u,l;const _=[{title:"Name",key:"name"},{title:"Assigned To",key:"assignedTo",sortable:!1},{title:"Created Date",key:"createdDate",sortable:!1},{title:"Actions",key:"actions",sortable:!1}],a=m(""),r=m(10),n=m(1),b=m(),v=m(),P=V=>{var s,y;b.value=(s=V.sortBy[0])==null?void 0:s.key,v.value=(y=V.sortBy[0])==null?void 0:y.order},c=m(!1),f=m(!1),x=m(""),C={support:{color:"info",text:"Support"},users:{color:"success",text:"Users"},manager:{color:"warning",text:"Manager"},administrator:{color:"primary",text:"Administrator"},"restricted-user":{color:"error",text:"Restricted User"}},{data:U}=([u,l]=Z(()=>se(ie("/apps/permissions",{query:{q:a,itemsPerPage:r,page:n,sortBy:b,orderBy:v}}))),u=await u,l(),u),q=T(()=>U.value.permissions),B=T(()=>U.value.totalPermissions),I=V=>{c.value=!0,x.value=V};return(V,s)=>{const y=te,R=S,z=ee,j=Q("IconBtn"),$=ue;return w(),h(oe,null,{default:i(()=>[t(ae,{cols:"12"},{default:i(()=>[t(E,null,{default:i(()=>[t(F,{class:"d-flex align-center justify-space-between flex-wrap gap-4"},{default:i(()=>[d("div",ce,[fe,t(y,{"model-value":o(r),items:[{value:5,title:"5"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"All"}],style:{"inline-size":"5.5rem"},"onUpdate:modelValue":s[0]||(s[0]=e=>r.value=parseInt(e,10))},null,8,["model-value"])]),d("div",ge,[t(R,{modelValue:o(a),"onUpdate:modelValue":s[1]||(s[1]=e=>p(a)?a.value=e:null),placeholder:"Search Permission",style:{"inline-size":"15.625rem"}},null,8,["modelValue"]),t(k,{density:"default","prepend-icon":"bx-plus",onClick:s[2]||(s[2]=e=>f.value=!0)},{default:i(()=>[A(" Add Permission ")]),_:1})])]),_:1}),t(le),t(re,{"items-per-page":o(r),"onUpdate:itemsPerPage":s[4]||(s[4]=e=>p(r)?r.value=e:null),page:o(n),"onUpdate:page":s[5]||(s[5]=e=>p(n)?n.value=e:null),"items-length":o(B),"items-per-page-options":[{value:5,title:"5"},{value:10,title:"10"},{value:-1,title:"$vuetify.dataFooter.itemsPerPageAll"}],headers:_,items:o(q),"item-value":"name",class:"text-no-wrap","onUpdate:options":P},{"item.name":i(({item:e})=>[d("div",_e,g(e.name),1)]),"item.assignedTo":i(({item:e})=>[d("div",ve,[(w(!0),G(J,null,H(e.assignedTo,D=>(w(),h(ne,{key:D,label:"",size:"small",color:C[D].color,class:"font-weight-medium"},{default:i(()=>[A(g(C[D].text),1)]),_:2},1032,["color"]))),128))])]),bottom:i(()=>[t(z,{page:o(n),"onUpdate:page":s[3]||(s[3]=e=>p(n)?n.value=e:null),"items-per-page":o(r),"total-items":o(B)},null,8,["page","items-per-page","total-items"])]),"item.actions":i(({item:e})=>[t(k,{color:"medium-emphasis",variant:"text",icon:"bx-edit",onClick:D=>I(e.name)},null,8,["onClick"]),t(j,null,{default:i(()=>[t(K,{icon:"bx-dots-vertical-rounded"})]),_:1})]),_:1},8,["items-per-page","page","items-length","items"])]),_:1}),t($,{isDialogVisible:o(c),"onUpdate:isDialogVisible":s[6]||(s[6]=e=>p(c)?c.value=e:null),"permission-name":o(x),"onUpdate:permissionName":s[7]||(s[7]=e=>p(x)?x.value=e:null)},null,8,["isDialogVisible","permission-name"]),t($,{isDialogVisible:o(f),"onUpdate:isDialogVisible":s[8]||(s[8]=e=>p(f)?f.value=e:null)},null,8,["isDialogVisible"])]),_:1})]),_:1})}}};export{mt as default};
