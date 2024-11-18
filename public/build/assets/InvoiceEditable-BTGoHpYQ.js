import{_ as Y}from"./AppDateTimePicker-CAkHnYZf.js";import{_ as B}from"./AppTextField-CidaaHzM.js";import{_ as F,V as j}from"./AppTextarea-CSkT_cUL.js";import{_ as E}from"./AppSelect-crBF-FCt.js";import{a as p,V as T}from"./VRow-DcLldsAi.js";import{V as U}from"./VTooltip-Cuy6b6Ub.js";import{r as h,bk as M,w as z,$ as q,a as O,o as y,c as w,d as e,b as t,e as l,m as s,aZ as C,t as V,v as c,x as g,a3 as H,F as P,f as W,H as N,y as J,h as L,al as Z}from"./main-BpgBUGps.js";import{V as S}from"./VCard-DPA8ST1d.js";import{V as G}from"./VNodeRenderer-BTYogJaJ.js";import{u as K}from"./useApi-DdK-gkOH.js";import{V as Q}from"./VSelect-CvnWonW6.js";import{V as $}from"./VDivider-CPy3CxIk.js";const X={class:"add-products-header mb-2 d-none d-md-flex mb-4"},ee=e("h6",{class:"text-h6"}," Item ",-1),te=e("h6",{class:"text-h6 ps-2"}," Cost ",-1),se=e("h6",{class:"text-h6 ps-2"}," Hours ",-1),oe=e("h6",{class:"text-h6"}," Price ",-1),le={class:"pa-6 flex-grow-1"},ae={class:"text-high-emphasis text-no-wrap mt-4"},ne=e("p",{class:"mb-1"}," Discount ",-1),de=e("span",null,"0%",-1),ie={class:"mx-2"},ce={class:"my-2"},me=e("span",{class:"d-inline d-md-none"},"Price: ",-1),re={class:"text-high-emphasis"},ue={__name:"InvoiceProductEdit",props:{id:{type:Number,required:!0},data:{type:Object,required:!0,default:()=>({title:"App Design",cost:24,hours:1,description:"Designed UI kit & app pages."})}},emits:["removeProduct","totalAmount"],setup(A,{emit:k}){const d=A,x=k,a=[{title:"App Design",cost:24,hours:1,description:"Designed UI kit & app pages."},{title:"App Customization",cost:26,hours:1,description:"Customization & Bug Fixes."},{title:"ABC Template",cost:28,hours:1,description:"Vuetify admin template."},{title:"App Development",cost:32,hours:1,description:"Native App Development."}],_=h("App Customization"),i=h(structuredClone(M(d.data)));z(_,()=>{const D=a.filter(m=>m.title===_.value);i.value=D[0]});const b=()=>{x("removeProduct",d.id)},f=q(()=>Number(i.value.cost)*Number(i.value.hours));return z(f,()=>{x("totalAmount",f.value)},{immediate:!0}),(D,m)=>{const I=E,r=F,o=B,v=O("IconBtn");return y(),w(P,null,[e("div",X,[t(T,{class:"me-10"},{default:l(()=>[t(p,{cols:"12",md:"6"},{default:l(()=>[ee]),_:1}),t(p,{cols:"12",md:"2"},{default:l(()=>[te]),_:1}),t(p,{cols:"12",md:"2"},{default:l(()=>[se]),_:1}),t(p,{cols:"12",md:"2"},{default:l(()=>[oe]),_:1})]),_:1})]),t(S,{flat:"",border:"",class:"d-flex flex-sm-row flex-column-reverse"},{default:l(()=>[e("div",le,[t(T,null,{default:l(()=>[t(p,{cols:"12",md:"6"},{default:l(()=>[t(I,{modelValue:s(_),"onUpdate:modelValue":m[0]||(m[0]=u=>C(_)?_.value=u:null),items:a,"item-title":"title","item-value":"title",placeholder:"Select Item",class:"mb-6"},null,8,["modelValue"]),t(r,{modelValue:s(i).description,"onUpdate:modelValue":m[1]||(m[1]=u=>s(i).description=u),rows:"2",placeholder:"Item description","persistent-placeholder":""},null,8,["modelValue"])]),_:1}),t(p,{cols:"12",md:"2",sm:"4"},{default:l(()=>[t(o,{modelValue:s(i).cost,"onUpdate:modelValue":m[2]||(m[2]=u=>s(i).cost=u),type:"number",placeholder:"Cost",class:"mb-6"},null,8,["modelValue"]),e("div",ae,[ne,de,e("span",ie,[V(" 0% "),t(U,{activator:"parent"},{default:l(()=>[V("Tax 1")]),_:1})]),e("span",null,[V(" 0% "),t(U,{activator:"parent"},{default:l(()=>[V("Tax 2")]),_:1})])])]),_:1}),t(p,{cols:"12",md:"2",sm:"4"},{default:l(()=>[t(o,{modelValue:s(i).hours,"onUpdate:modelValue":m[3]||(m[3]=u=>s(i).hours=u),type:"number",placeholder:"5"},null,8,["modelValue"])]),_:1}),t(p,{cols:"12",md:"2",sm:"4"},{default:l(()=>[e("p",ce,[me,e("span",re,"$"+c(s(f)),1)])]),_:1})]),_:1})]),e("div",{class:g(["d-flex flex-column align-end item-actions",D.$vuetify.display.smAndUp?"border-s":"border-b"])},[t(v,{size:"36",onClick:b},{default:l(()=>[t(H,{size:24,icon:"bx-x"})]),_:1})],2)]),_:1})],64)}}},pe={class:"d-flex flex-wrap justify-space-between flex-column rounded bg-var-theme-background flex-sm-row gap-6 pa-6 mb-6"},_e={class:"d-flex align-center app-logo mb-6"},he={class:"app-logo-title"},fe=e("p",{class:"text-high-emphasis mb-0 text-body-1"}," Office 149, 450 South Brand Brooklyn ",-1),xe=e("p",{class:"text-high-emphasis mb-0 text-body-1"}," San Diego County, CA 91905, USA ",-1),be=e("p",{class:"text-high-emphasis mb-0 text-body-1"}," +1 (123) 456 7891, +44 (876) 543 2198 ",-1),ve={class:"d-flex flex-column gap-2"},ye={class:"d-flex align-start align-sm-center gap-x-4 font-weight-medium text-h5 flex-column flex-sm-row"},Ve=e("span",{class:"text-high-emphasis text-sm-end",style:{"inline-size":"5.625rem"}},"Invoice",-1),ge={class:"d-flex gap-x-4 align-start align-sm-center flex-column flex-sm-row"},De=e("span",{class:"text-high-emphasis text-body-1 text-sm-end",style:{"inline-size":"5.625rem"}},"Date Issued:",-1),$e={style:{"inline-size":"9.5rem"}},we={class:"d-flex gap-x-4 align-start align-sm-center flex-column flex-sm-row"},Ce=e("span",{class:"text-high-emphasis text-body-1 text-sm-end",style:{"inline-size":"5.625rem"}},"Due Date:",-1),Ae={style:{"min-inline-size":"9.5rem"}},ke=e("h6",{class:"text-h6 mb-4"}," Invoice To: ",-1),Ie={class:"mb-0 text-body-1"},Te={class:"mb-0 text-body-1"},Ue={key:0,class:"mb-0 text-body-1"},ze={class:"mb-0 text-body-1"},Ne={class:"mb-0 text-body-1"},Be=e("h6",{class:"text-h6 mb-4"}," Bill To: ",-1),Pe={class:"text-body-1"},Se=e("td",{class:"pe-4"}," Total Due: ",-1),Re=e("td",{class:"pe-4"}," Bank Name: ",-1),Ye=e("td",{class:"pe-4"}," Country: ",-1),Fe=e("td",{class:"pe-4"}," IBAN: ",-1),je={class:"mb-0"},Ee=e("td",{class:"pe-4"}," SWIFT Code: ",-1),Me={class:"add-products-form"},qe={class:"d-flex justify-space-between flex-wrap flex-column flex-sm-row"},Oe={class:"mb-6 mb-sm-0"},He={class:"d-flex align-center mb-4"},We=e("h6",{class:"text-h6 me-2"}," Salesperson: ",-1),Je={class:"w-100"},Le={class:"text-body-1"},Ze=e("td",{class:"pe-16"}," Subtotal: ",-1),Ge=e("h6",{class:"text-h6"}," $1800 ",-1),Ke=[Ge],Qe=e("td",{class:"pe-16"}," Discount: ",-1),Xe=e("h6",{class:"text-h6"}," $28 ",-1),et=[Xe],tt=e("td",{class:"pe-16"}," Tax: ",-1),st=e("h6",{class:"text-h6"}," 21% ",-1),ot=[st],lt={class:"w-100"},at=e("td",{class:"pe-16 text-body-1"}," Total: ",-1),nt=e("h6",{class:"text-h6"}," $1690 ",-1),dt=[nt],it=e("h6",{class:"text-h6 font-weight-regular mb-1"}," Note: ",-1),Vt={__name:"InvoiceEditable",props:{data:{type:null,required:!0}},emits:["push","remove"],setup(A,{emit:k}){const d=A,x=k,a=h(d.data.invoice),_=h(d.data.salesperson),i=h(d.data.thanksNote),b=h(d.data.note),f=h([]);(async()=>{const{data:r,error:o}=await K("/apps/invoice/clients");o.value?console.log(o.value):f.value=r.value})();const m=()=>{x("push",{title:"App Design",cost:24,hours:1,description:"Designed UI kit & app pages."})},I=r=>{x("remove",r)};return(r,o)=>{const v=B,u=Y;return y(),W(S,{class:"pa-6 pa-sm-12"},{default:l(()=>[e("div",pe,[e("div",null,[e("div",_e,[t(s(G),{nodes:s(N).app.logo},null,8,["nodes"]),e("h6",he,c(s(N).app.title),1)]),fe,xe,be]),e("div",ve,[e("div",ye,[Ve,e("span",null,[t(v,{modelValue:s(a).id,"onUpdate:modelValue":o[0]||(o[0]=n=>s(a).id=n),disabled:"",prefix:"#",style:{"inline-size":"9.5rem"}},null,8,["modelValue"])])]),e("div",ge,[De,e("span",$e,[t(u,{modelValue:s(a).issuedDate,"onUpdate:modelValue":o[1]||(o[1]=n=>s(a).issuedDate=n),placeholder:"YYYY-MM-DD",config:{position:"auto right"}},null,8,["modelValue"])])]),e("div",we,[Ce,e("span",Ae,[t(u,{modelValue:s(a).dueDate,"onUpdate:modelValue":o[2]||(o[2]=n=>s(a).dueDate=n),placeholder:"YYYY-MM-DD",config:{position:"auto right"}},null,8,["modelValue"])])])])]),t(T,null,{default:l(()=>[t(p,{class:"text-no-wrap"},{default:l(()=>[ke,t(Q,{modelValue:s(a).client,"onUpdate:modelValue":o[3]||(o[3]=n=>s(a).client=n),items:s(f),"item-title":"name","item-value":"name",placeholder:"Select Client","return-object":"",class:"mb-4",style:{"inline-size":"11.875rem"}},null,8,["modelValue","items"]),e("p",Ie,c(s(a).client.name),1),e("p",Te,c(s(a).client.company),1),s(a).client.address?(y(),w("p",Ue,c(s(a).client.address)+", "+c(s(a).client.country),1)):J("",!0),e("p",ze,c(s(a).client.contact),1),e("p",Ne,c(s(a).client.companyEmail),1)]),_:1}),t(p,{class:"text-no-wrap"},{default:l(()=>[Be,e("table",null,[e("tbody",Pe,[e("tr",null,[Se,e("td",null,c(d.data.paymentDetails.totalDue),1)]),e("tr",null,[Re,e("td",null,c(d.data.paymentDetails.bankName),1)]),e("tr",null,[Ye,e("td",null,c(d.data.paymentDetails.country),1)]),e("tr",null,[Fe,e("td",null,[e("p",je,c(d.data.paymentDetails.iban),1)])]),e("tr",null,[Ee,e("td",null,c(d.data.paymentDetails.swiftCode),1)])])])]),_:1})]),_:1}),t($,{class:"my-6 border-dashed"}),e("div",Me,[(y(!0),w(P,null,L(d.data.purchasedProducts,(n,R)=>(y(),w("div",{key:n.title,class:"mb-4"},[t(ue,{id:R,data:n,onRemoveProduct:I},null,8,["id","data"])]))),128)),t(Z,{size:"small","prepend-icon":"bx-plus",onClick:m},{default:l(()=>[V(" Add Item ")]),_:1})]),t($,{class:"my-6 border-dashed"}),e("div",qe,[e("div",Oe,[e("div",He,[We,t(v,{modelValue:s(_),"onUpdate:modelValue":o[4]||(o[4]=n=>C(_)?_.value=n:null),style:{"inline-size":"8rem"},placeholder:"John Doe"},null,8,["modelValue"])]),t(v,{modelValue:s(i),"onUpdate:modelValue":o[5]||(o[5]=n=>C(i)?i.value=n:null),placeholder:"Thanks for your business"},null,8,["modelValue"])]),e("div",null,[e("table",Je,[e("tbody",Le,[e("tr",null,[Ze,e("td",{class:g(r.$vuetify.locale.isRtl?"text-start":"text-end")},Ke,2)]),e("tr",null,[Qe,e("td",{class:g(r.$vuetify.locale.isRtl?"text-start":"text-end")},et,2)]),e("tr",null,[tt,e("td",{class:g(r.$vuetify.locale.isRtl?"text-start":"text-end")},ot,2)])])]),t($,{class:"my-2"}),e("table",lt,[e("tbody",null,[e("tr",null,[at,e("td",{class:g(r.$vuetify.locale.isRtl?"text-start":"text-end")},dt,2)])])])])]),t($,{class:"my-6 border-dashed"}),e("div",null,[it,t(j,{modelValue:s(b),"onUpdate:modelValue":o[6]||(o[6]=n=>C(b)?b.value=n:null),placeholder:"Write note here...",rows:2},null,8,["modelValue"])])]),_:1})}}};export{Vt as _};