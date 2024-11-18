import{_ as N}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as h}from"./VCardText-RhVa6W5U.js";import{V as T,a as v}from"./VRadioGroup-Dii_hqxm.js";import{V as O,a as k}from"./VAlert-B9i9L_5n.js";import{V as b,a as K}from"./VCard-DPA8ST1d.js";import{r as x,o as p,c as _,b as e,e as l,m as y,aZ as C,t as d,d as t,al as u,F as V,h as D,v as g,J as F,bG as Y,a3 as P,K as W,Q as G,R as H,a as J,be as Z,bs as Q,f as X}from"./main-BpgBUGps.js";import{_ as q}from"./AppSelect-crBF-FCt.js";import{_ as B}from"./AppTextField-CidaaHzM.js";import{V as $}from"./VCheckbox-DLyduI3k.js";import{V as w,a as i}from"./VRow-DcLldsAi.js";import{V as I}from"./VTable-BGk_-fzG.js";import{_ as ee,a as le}from"./AddPaymentMethodDialog-BwXHsup8.js";import{V as te}from"./VDivider-CPy3CxIk.js";import{V as ae}from"./VChip-Gdsswa87.js";import{V as M}from"./VMenu-D0wOrHxC.js";import{V as R,a as E,b as z}from"./VList-Bu48BGuL.js";import{V as L}from"./VAvatar-B9R7oHU8.js";import{V as j}from"./VSpacer-BwkbVUnR.js";import{V as oe,a as se}from"./VTabs-sMqPGO29.js";import{V as ne,a as A}from"./VWindowItem-COAbTIN-.js";import"./VSelectionControl-tBJoG7de.js";import"./form-jV7EneQK.js";import"./VInput-h-v4JtUG.js";import"./VImg-MA4fhMLa.js";import"./VSelect-CvnWonW6.js";import"./VTextField-DNnTNwAs.js";/* empty css                   */import"./VCounter-B6UOvRBl.js";import"./VField-CsvBDBUR.js";import"./easing-CjukEv2V.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-Dw95iG-S.js";import"./VOverlay-BSwVgU5G.js";import"./delay-CiIYTbkJ.js";import"./lazy-CKzIgbSD.js";import"./scopeId-D5DaYZNr.js";import"./VCheckboxBtn-KnKlC77n.js";/* empty css              */import"./DialogCloseBtn-do27yBJz.js";import"./american-express-RiSm_jKV.js";import"./mastercard-BccUtaqJ.js";import"./visa-light-OW_Fpctg.js";import"./useGenerateImageVariant-DW3DZK7L.js";import"./VDialog-pRXmThFU.js";import"./VSlideGroup-qhrbewnN.js";import"./ssrBoot-Cao_hl35.js";const de={class:"d-flex justify-end gap-x-4"},ie={__name:"SettingsCheckout",setup(S){const c=x("Phone number"),s=x("Only require last name"),m=x("Don't include"),n=x("Optional"),r=x("Optional");return(o,a)=>(p(),_(V,null,[e(b,{title:"Customer contact method",subtitle:"Select what contact method customers use to check out.",class:"mb-6"},{default:l(()=>[e(h,null,{default:l(()=>[e(T,{modelValue:y(c),"onUpdate:modelValue":a[0]||(a[0]=f=>C(c)?c.value=f:null),class:"mb-4"},{default:l(()=>[e(v,{label:"Phone number",value:"Phone number"}),e(v,{label:"Email",value:"Email"})]),_:1},8,["modelValue"]),e(O,{type:"info",variant:"tonal"},{default:l(()=>[e(k,{class:"mb-0"},{default:l(()=>[d(" To send SMS updates, you need to install an SMS App. ")]),_:1})]),_:1})]),_:1})]),_:1}),e(b,{title:"Customer information",class:"mb-6"},{default:l(()=>[e(h,{class:"customer-info-card"},{default:l(()=>[e(T,{modelValue:y(s),"onUpdate:modelValue":a[1]||(a[1]=f=>C(s)?s.value=f:null),label:"Full name",class:"mb-4"},{default:l(()=>[e(v,{value:"Only require last name",label:"Only require last name"}),e(v,{value:"Require first and last name",label:"Require first and last name"})]),_:1},8,["modelValue"]),e(T,{modelValue:y(m),"onUpdate:modelValue":a[2]||(a[2]=f=>C(m)?m.value=f:null),label:"Company name",class:"mb-4"},{default:l(()=>[e(v,{value:"Don't include",label:"Don't include"}),e(v,{value:"Optional",label:"Optional"}),e(v,{value:"Required",label:"Required"})]),_:1},8,["modelValue"]),e(T,{modelValue:y(n),"onUpdate:modelValue":a[3]||(a[3]=f=>C(n)?n.value=f:null),label:"Address line 2 (apartment, unit, etc.)",class:"mb-4"},{default:l(()=>[e(v,{value:"Don't include",label:"Don't include"}),e(v,{value:"Optional",label:"Optional"}),e(v,{value:"Required",label:"Required"})]),_:1},8,["modelValue"]),e(T,{modelValue:y(r),"onUpdate:modelValue":a[4]||(a[4]=f=>C(r)?r.value=f:null),label:"Shipping address phone number"},{default:l(()=>[e(v,{value:"Don't include",label:"Don't include"}),e(v,{value:"Optional",label:"Optional"}),e(v,{value:"Required",label:"Required"})]),_:1},8,["modelValue"])]),_:1})]),_:1}),t("div",de,[e(u,{variant:"tonal",color:"secondary"},{default:l(()=>[d(" Discard ")]),_:1}),e(u,null,{default:l(()=>[d("Save Changes")]),_:1})])],64))}},re=N(ie,[["__scopeId","data-v-b4023177"]]),ue={class:"my-4"},ce={class:"d-flex justify-end gap-x-4 mt-6"},me={__name:"SettingsLocations",setup(S){const c=x(!0);return(s,m)=>{const n=B,r=q;return p(),_("div",null,[e(b,{title:"Location Name",class:"mb-6"},{default:l(()=>[e(h,null,{default:l(()=>[e(n,{label:"Location Name",placeholder:"Empire Hub"}),t("div",ue,[e($,{modelValue:y(c),"onUpdate:modelValue":m[0]||(m[0]=o=>C(c)?c.value=o:null),label:"Fulfil online orders from this location"},null,8,["modelValue"])]),e(O,{type:"info",variant:"tonal"},{default:l(()=>[e(k,{class:"mb-0"},{default:l(()=>[d(" This is your default location. To change whether you fulfill online orders from this location, select another default location first. ")]),_:1})]),_:1})]),_:1})]),_:1}),e(b,{title:"Address"},{default:l(()=>[e(h,null,{default:l(()=>[e(w,null,{default:l(()=>[e(i,{cols:"12"},{default:l(()=>[e(r,{label:"Country/religion",placeholder:"Select Country",items:["United States","UK","Canada"],"model-value":"United States"})]),_:1}),e(i,{cols:"12",md:"4"},{default:l(()=>[e(n,{label:"Address",placeholder:"123 , New Street"})]),_:1}),e(i,{cols:"12",md:"4"},{default:l(()=>[e(n,{label:"Apartment, suite, etc.",placeholder:"Empire Heights"})]),_:1}),e(i,{cols:"12",md:"4"},{default:l(()=>[e(n,{label:"Phone",placeholder:"+1 (234) 456-7890"})]),_:1}),e(i,{cols:"12",md:"4"},{default:l(()=>[e(n,{label:"City",placeholder:"New York"})]),_:1}),e(i,{cols:"12",md:"4"},{default:l(()=>[e(n,{label:"State",placeholder:"NY"})]),_:1}),e(i,{cols:"12",md:"4"},{default:l(()=>[e(n,{label:"PIN code",type:"number",placeholder:"123897"})]),_:1})]),_:1})]),_:1})]),_:1}),t("div",ce,[e(u,{variant:"tonal",color:"secondary"},{default:l(()=>[d(" Discard ")]),_:1}),e(u,null,{default:l(()=>[d("Save Changes")]),_:1})])])}}},pe=t("h5",{class:"text-h5 mb-4"}," Customer ",-1),_e=t("thead",null,[t("tr",null,[t("th",{scope:"col"}," TYPE "),t("th",{scope:"col"}," EMAIL "),t("th",{scope:"col"}," APP ")])],-1),fe={width:"400px",class:"text-high-emphasis"},he=t("h5",{class:"text-h5 mb-4"}," Orders ",-1),be=t("thead",null,[t("tr",null,[t("th",{scope:"col"}," TYPE "),t("th",{scope:"col"}," EMAIL "),t("th",{scope:"col"}," APP ")])],-1),ye={width:"400px",class:"text-high-emphasis"},ve=t("h5",{class:"text-h5 mb-4"}," Shipping ",-1),Ve=t("thead",null,[t("tr",null,[t("th",{scope:"col"}," TYPE "),t("th",{scope:"col"}," EMAIL "),t("th",{scope:"col"}," APP ")])],-1),ge={width:"400px",class:"text-high-emphasis"},xe={class:"d-flex justify-end gap-x-4"},Se={__name:"SettingsNotifications",setup(S){const c=x([{type:"New customer sign up",email:!0,app:!0},{type:"Customer account password reset",email:!0,app:!0},{type:"Customer account invite",email:!1,app:!1}]),s=x([{type:"Picked up",email:!0,app:!0},{type:"Shipping update ",email:!0,app:!1},{type:"Delivered",email:!1,app:!0}]),m=x([{type:"Order purchase",email:!0,app:!0},{type:"Order cancelled",email:!0,app:!1},{type:"Order refund request",email:!1,app:!0},{type:"Order confirmation",email:!0,app:!1},{type:"Payment error",email:!0,app:!1}]);return(n,r)=>(p(),_(V,null,[e(b,{class:"mb-6"},{default:l(()=>[e(h,null,{default:l(()=>[pe,e(I,{class:"text-no-wrap mb-6 border rounded"},{default:l(()=>[_e,t("tbody",null,[(p(!0),_(V,null,D(y(c),o=>(p(),_("tr",{key:o.type},[t("td",fe,g(o.type),1),t("td",null,[e($,{modelValue:o.email,"onUpdate:modelValue":a=>o.email=a},null,8,["modelValue","onUpdate:modelValue"])]),t("td",null,[e($,{modelValue:o.app,"onUpdate:modelValue":a=>o.app=a},null,8,["modelValue","onUpdate:modelValue"])])]))),128))])]),_:1}),he,e(I,{class:"text-no-wrap mb-6 border rounded"},{default:l(()=>[be,t("tbody",null,[(p(!0),_(V,null,D(y(m),o=>(p(),_("tr",{key:o.type},[t("td",ye,g(o.type),1),t("td",null,[e($,{modelValue:o.email,"onUpdate:modelValue":a=>o.email=a},null,8,["modelValue","onUpdate:modelValue"])]),t("td",null,[e($,{modelValue:o.app,"onUpdate:modelValue":a=>o.app=a},null,8,["modelValue","onUpdate:modelValue"])])]))),128))])]),_:1}),ve,e(I,{class:"text-no-wrap border rounded"},{default:l(()=>[Ve,t("tbody",null,[(p(!0),_(V,null,D(y(s),o=>(p(),_("tr",{key:o.type},[t("td",ge,g(o.type),1),t("td",null,[e($,{modelValue:o.email,"onUpdate:modelValue":a=>o.email=a},null,8,["modelValue","onUpdate:modelValue"])]),t("td",null,[e($,{modelValue:o.app,"onUpdate:modelValue":a=>o.app=a},null,8,["modelValue","onUpdate:modelValue"])])]))),128))])]),_:1})]),_:1})]),_:1}),t("div",xe,[e(u,{variant:"tonal",color:"secondary"},{default:l(()=>[d(" Discard ")]),_:1}),e(u,null,{default:l(()=>[d("Save Changes")]),_:1})])],64))}},Ce="/build/assets/paypal-primary-JR2AHgCz.png",U=S=>(G("data-v-ed4e90ea"),S=S(),H(),S),De=U(()=>t("div",{class:"text-body-1 mb-5"}," Providers that enable you to accept payment methods at a rate set by the third-party. An additional fee will apply to new orders once you select a plan. ",-1)),Pe=U(()=>t("h6",{class:"text-h6 mb-5"}," Default ",-1)),$e={class:"my-class mb-5"},Ae={class:"d-flex justify-space-between align-center"},we={class:"rounded paypal-logo"},Ue=["src"],Te={class:"d-flex justify-space-between flex-wrap gap-4"},Ie=U(()=>t("div",null,[t("div",{class:"text-body-2 mb-2",style:{"min-inline-size":"220px"}}," Provider "),t("h6",{class:"text-h6"}," PayPal ")],-1)),Ne=U(()=>t("div",{class:"text-body-2 mb-2",style:{"min-inline-size":"220px"}}," Status ",-1)),Oe=U(()=>t("div",null,[t("div",{class:"text-body-2 mb-2",style:{"min-inline-size":"220px"}}," Transaction Fee "),t("h6",{class:"text-h6"}," 2.99% ")],-1)),ke=U(()=>t("p",{class:"mb-5"}," Payments that are made outside your online store. When a customer selects a manual payment method such as cash on delivery, you'll need to approve `the`ir order before it can be fulfilled. ",-1)),Me={class:"d-flex justify-end gap-x-4"},Re={__name:"SettingsPayment",setup(S){const c=x(!1),s=x(!1);return(m,n)=>{const r=ee,o=le;return p(),_(V,null,[t("div",null,[e(b,{class:"mb-6",title:"Payment providers"},{default:l(()=>[e(h,null,{default:l(()=>[De,e(u,{variant:"tonal",onClick:n[0]||(n[0]=a=>s.value=!s.value)},{default:l(()=>[d(" Choose a provider ")]),_:1})]),_:1})]),_:1}),e(b,{title:"Supported payment methods",subtitle:"Payment methods that are available with one of Sneat's approved payment providers.",class:"mb-6"},{default:l(()=>[e(h,null,{default:l(()=>[Pe,t("div",$e,[t("div",Ae,[t("div",we,[t("img",{src:y(Ce),alt:"themeselection",style:{"padding-block":"6px","padding-inline":"18px"}},null,8,Ue)]),e(u,{variant:"text"},{default:l(()=>[d(" Activate PayPal ")]),_:1})]),e(te,{class:"my-6"}),t("div",Te,[Ie,t("div",null,[Ne,e(ae,{color:"warning",size:"small",label:""},{default:l(()=>[d(" Inactive ")]),_:1})]),Oe])]),e(u,{variant:"tonal",onClick:n[1]||(n[1]=a=>c.value=!c.value)},{default:l(()=>[d(" Add Payment Methods ")]),_:1})]),_:1})]),_:1}),e(b,{title:"Manual payment methods",class:"mb-6"},{default:l(()=>[e(h,null,{default:l(()=>[ke,F(e(Y,{divided:"",color:"primary",variant:"tonal",density:"comfortable",class:"manual-payment-button"},{default:l(()=>[e(u,null,{default:l(()=>[d(" Add Manual Payment Methods ")]),_:1}),e(u,{icon:""},{default:l(()=>[e(P,{size:"22",icon:"bx-chevron-down"}),e(M,{activator:"parent"},{default:l(()=>[e(R,null,{default:l(()=>[(p(),_(V,null,D(["Create custom payment method","Bank Deposit","Money Order","Cash on Delivery(COD)"],(a,f)=>e(E,{key:f,value:f},{default:l(()=>[e(z,null,{default:l(()=>[d(g(a),1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1})]),_:1})]),_:1})]),_:1},512),[[W,m.$vuetify.display.smAndUp]]),e(u,{variant:"tonal",class:"d-block d-sm-none"},{default:l(()=>[d(" Add Manual Payment Methods "),e(M,{activator:"parent"},{default:l(()=>[e(R,null,{default:l(()=>[(p(),_(V,null,D(["Create custom payment method","Bank Deposit","Money Order","Cash on Delivery(COD)"],(a,f)=>e(E,{key:f,value:f},{default:l(()=>[e(z,null,{default:l(()=>[d(g(a),1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),t("div",Me,[e(u,{color:"secondary",variant:"tonal"},{default:l(()=>[d(" Discard ")]),_:1}),e(u,{color:"primary"},{default:l(()=>[d(" save changes ")]),_:1})])]),e(r,{"is-dialog-visible":c.value,"onUpdate:isDialogVisible":n[2]||(n[2]=a=>c.value=a)},null,8,["is-dialog-visible"]),e(o,{"is-dialog-visible":s.value,"onUpdate:isDialogVisible":n[3]||(n[3]=a=>s.value=a)},null,8,["is-dialog-visible"])],64)}}},Ee=N(Re,[["__scopeId","data-v-ed4e90ea"]]),ze={class:"mb-6"},Le={class:"d-flex flex-wrap align-center mb-4"},je=t("div",null,[t("h6",{class:"text-h6"}," Domestic "),t("div",{class:"text-body-2"}," United state of America ")],-1),qe=t("thead",null,[t("tr",null,[t("th",null,"RATE NAME"),t("th",null,"CONDITION"),t("th",null,"PRICE"),t("th",null,"ACTIONS")])],-1),Be={class:"d-flex flex-wrap align-center mb-4"},Ke=t("div",null,[t("h6",{class:"text-h6"}," International "),t("div",{class:"text-body-2"}," United state of America ")],-1),Fe=t("thead",null,[t("tr",null,[t("th",null,"RATE NAME"),t("th",null,"CONDITION"),t("th",null,"PRICE"),t("th",null,"ACTIONS")])],-1),Ye={class:"d-flex justify-end gap-x-4"},We={__name:"SettingsShippingAndDelivery",setup(S){const c=[{rate:"Weight",condition:"5Kg-10Kg",price:"$9"},{rate:"VAT",condition:"12%",price:"$25"},{rate:"Duty",condition:"-",price:"-"}],s=[{rate:"Weight",condition:"5Kg-10Kg",price:"$9"},{rate:"VAT",condition:"12%",price:"$25"},{rate:"Duty",condition:"Japan",price:"$49"}];return(m,n)=>{const r=J("IconBtn");return p(),_(V,null,[e(b,{class:"mb-6"},{default:l(()=>[e(K,{title:"Shipping Zone",subtitle:"Choose where you ship and how much you charge for shipping at checkout."},{append:l(()=>[e(u,{variant:"text"},{default:l(()=>[d(" Create Zone ")]),_:1})]),_:1}),e(h,null,{default:l(()=>[t("div",ze,[t("div",Le,[e(L,{image:y(Z),size:"34",class:"me-2"},null,8,["image"]),je,e(j),t("div",null,[e(r,{color:"secondary",size:"small"},{default:l(()=>[e(P,{icon:"bx-pencil"})]),_:1}),e(r,{color:"secondary",size:"small"},{default:l(()=>[e(P,{icon:"bx-trash"})]),_:1})])]),e(I,{class:"mb-4 border rounded"},{default:l(()=>[qe,t("tbody",null,[(p(),_(V,null,D(c,(o,a)=>t("tr",{key:a},[t("td",null,g(o.rate),1),t("td",null,g(o.condition),1),t("td",null,g(o.price),1),t("td",null,[e(r,null,{default:l(()=>[e(P,{icon:"bx-dots-vertical-rounded"})]),_:1})])])),64))])]),_:1}),e(u,{variant:"tonal",size:"small"},{default:l(()=>[d(" Add rate ")]),_:1})]),t("div",null,[t("div",Be,[e(L,{image:y(Q),size:"30",class:"me-2"},null,8,["image"]),Ke,e(j),t("div",null,[e(r,{color:"secondary",size:"small"},{default:l(()=>[e(P,{icon:"bx-pencil"})]),_:1}),e(r,{color:"secondary",size:"small"},{default:l(()=>[e(P,{icon:"bx-trash"})]),_:1})])]),e(I,{class:"mb-4 border rounded"},{default:l(()=>[Fe,t("tbody",null,[(p(),_(V,null,D(s,(o,a)=>t("tr",{key:a},[t("td",null,g(o.rate),1),t("td",null,g(o.condition),1),t("td",null,g(o.price),1),t("td",null,[e(r,null,{default:l(()=>[e(P,{icon:"bx-dots-vertical-rounded"})]),_:1})])])),64))])]),_:1}),e(u,{variant:"tonal",size:"small"},{default:l(()=>[d(" Add rate ")]),_:1})])]),_:1})]),_:1}),t("div",Ye,[e(u,{variant:"tonal",color:"secondary"},{default:l(()=>[d(" Discard ")]),_:1}),e(u,null,{default:l(()=>[d("Save Changes")]),_:1})])],64)}}},Ge={},He=t("div",{class:"v-card-title text-wrap"}," Time zone and units of measurement ",-1),Je=t("div",{class:"text-wrap"}," Used to calculate product prices, shipping weights, and order times. ",-1),Ze=t("div",{class:"mt-2"}," Your order ID will appear as #1001, #1002, #1003 ... ",-1),Qe={class:"d-flex justify-end gap-x-4"};function Xe(S,c){const s=B,m=q;return p(),_(V,null,[e(b,{title:"Profile",class:"mb-6"},{default:l(()=>[e(h,null,{default:l(()=>[e(w,null,{default:l(()=>[e(i,{cols:"12",md:"6"},{default:l(()=>[e(s,{label:"Store name",placeholder:"themeselection"})]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(s,{label:"Phone",placeholder:"+(123) 456-7890"})]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(s,{label:"Store contact email",placeholder:"johndoe@email.com"})]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(s,{label:"Sender email",placeholder:"johndoe@email.com"})]),_:1}),e(i,null,{default:l(()=>[e(O,{color:"warning",variant:"tonal",icon:"bx-bell"},{default:l(()=>[e(k,{class:"mb-0"},{default:l(()=>[d(" Confirm that you have access to johndoe@gmail.com in sender email settings. ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(b,{title:"Billing Information",class:"mb-6"},{default:l(()=>[e(h,null,{default:l(()=>[e(w,null,{default:l(()=>[e(i,{cols:"12",md:"6"},{default:l(()=>[e(s,{label:"Legal business name",placeholder:"themeselection"})]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(m,{label:"Country/Region",items:["United States","Canada","UK"],placeholder:"Canada"})]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(s,{placeholder:"126, New Street",label:"Address"})]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(s,{label:"Apartment,suit, etc.",placeholder:"Empire Heights"})]),_:1}),e(i,{cols:"12",md:"4"},{default:l(()=>[e(s,{label:"City",placeholder:"New York"})]),_:1}),e(i,{cols:"12",md:"4"},{default:l(()=>[e(s,{label:"State",placeholder:"NY"})]),_:1}),e(i,{cols:"12",md:"4"},{default:l(()=>[e(s,{label:"PIN Code",placeholder:"111011"})]),_:1})]),_:1})]),_:1})]),_:1}),e(b,{class:"mb-6"},{title:l(()=>[He]),subtitle:l(()=>[Je]),default:l(()=>[e(h,null,{default:l(()=>[e(w,null,{default:l(()=>[e(i,{cols:"12"},{default:l(()=>[e(m,{label:"Time zone",items:["(UTC-12:00) International Date Line West","(UTC-11:00) Coordinated Universal Time-11","(UTC-09:00) Alaska","(UTC-08:00) Baja California"],placeholder:"(UTC-12:00) International Date Line West"})]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(m,{label:"Unit system",items:["Metric System","Imperial","International System"],placeholder:"Metric System"})]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(m,{label:"Default weight unit",placeholder:"Kilogram",items:["Kilogram","Pounds","Gram"]})]),_:1})]),_:1})]),_:1})]),_:1}),e(b,{title:"Store currency",subtitle:"The currency your products are sold in.",class:"mb-6"},{default:l(()=>[e(h,null,{default:l(()=>[e(m,{label:"Store currency",items:["USD","INR","Euro","Pound"],placeholder:"USD"})]),_:1})]),_:1}),e(b,{title:"Order id format",subtitle:"Shown on the Orders page, customer pages, and customer order notifications to identify orders.",class:"mb-6"},{default:l(()=>[e(h,null,{default:l(()=>[e(w,null,{default:l(()=>[e(i,{cols:"12",md:"6"},{default:l(()=>[e(s,{label:"Prefix",prefix:"#"})]),_:1}),e(i,{cols:"12",md:"6"},{default:l(()=>[e(s,{label:"Suffix",suffix:"$"})]),_:1})]),_:1}),Ze]),_:1})]),_:1}),t("div",Qe,[e(u,{variant:"tonal",color:"secondary"},{default:l(()=>[d(" Discard ")]),_:1}),e(u,null,{default:l(()=>[d("Save Changes")]),_:1})])],64)}const el=N(Ge,[["render",Xe]]),ll=t("h5",{class:"text-h5 mb-4"}," Getting Started ",-1),Gl={__name:"settings",setup(S){const c=[{icon:"bx-store-alt",title:"Store Details"},{icon:"bx-credit-card",title:"Payments"},{icon:"bx-cart",title:"Checkout"},{icon:"bx-package",title:"Shipping & Delivery"},{icon:"bx-map",title:"Location"},{icon:"bx-bell",title:"Notifications"}],s=x(null);return(m,n)=>(p(),X(w,null,{default:l(()=>[e(i,{cols:"12",md:"4"},{default:l(()=>[ll,e(oe,{modelValue:y(s),"onUpdate:modelValue":n[0]||(n[0]=r=>C(s)?s.value=r:null),direction:"vertical",class:"v-tabs-pill disable-tab-transition"},{default:l(()=>[(p(),_(V,null,D(c,(r,o)=>e(se,{key:o,"prepend-icon":r.icon},{default:l(()=>[d(g(r.title),1)]),_:2},1032,["prepend-icon"])),64))]),_:1},8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"8"},{default:l(()=>[e(ne,{modelValue:y(s),"onUpdate:modelValue":n[1]||(n[1]=r=>C(s)?s.value=r:null),class:"disable-tab-transition",touch:!1},{default:l(()=>[e(A,null,{default:l(()=>[e(el)]),_:1}),e(A,null,{default:l(()=>[e(Ee)]),_:1}),e(A,null,{default:l(()=>[e(re)]),_:1}),e(A,null,{default:l(()=>[e(We)]),_:1}),e(A,null,{default:l(()=>[e(me)]),_:1}),e(A,null,{default:l(()=>[e(Se)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}))}};export{Gl as default};