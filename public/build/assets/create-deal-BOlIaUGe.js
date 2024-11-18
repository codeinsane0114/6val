import{_ as I}from"./AppStepper-6p-jwTXp.js";import{_ as N}from"./AppDateTimePicker-CAkHnYZf.js";import{_ as w}from"./AppSelect-crBF-FCt.js";import{_ as M}from"./AppTextarea-CSkT_cUL.js";import{_ as A}from"./AppTextField-CidaaHzM.js";import{V as g,a as i}from"./VRow-DcLldsAi.js";import{V as v}from"./VCheckbox-DLyduI3k.js";import{V as P}from"./VForm-HbYQbjWg.js";import{r as U,w as y,o as b,f as D,e as o,b as e,m as l,d as n,t as h,x as O,aZ as T,al as S,a3 as F}from"./main-BpgBUGps.js";import{V as B}from"./VChip-Gdsswa87.js";import{V as R}from"./VSwitch-lAdZ86xz.js";import{V as k}from"./VImg-MA4fhMLa.js";import{_ as z}from"./CustomRadiosWithIcon-DkGM1zg8.js";import{V as W}from"./VCard-DPA8ST1d.js";import{V as $}from"./VCardText-RhVa6W5U.js";import{V as E,a as x}from"./VWindowItem-COAbTIN-.js";import"./VSlideGroup-qhrbewnN.js";import"./VAvatar-B9R7oHU8.js";import"./VField-CsvBDBUR.js";import"./form-jV7EneQK.js";import"./easing-CjukEv2V.js";import"./VInput-h-v4JtUG.js";import"./VSelect-CvnWonW6.js";import"./VTextField-DNnTNwAs.js";/* empty css                   */import"./VCounter-B6UOvRBl.js";import"./forwardRefs-C-GTDzx5.js";import"./VList-Bu48BGuL.js";import"./ssrBoot-Cao_hl35.js";import"./VDivider-CPy3CxIk.js";import"./dialog-transition-Dw95iG-S.js";import"./VMenu-D0wOrHxC.js";import"./VOverlay-BSwVgU5G.js";import"./delay-CiIYTbkJ.js";import"./lazy-CKzIgbSD.js";import"./scopeId-D5DaYZNr.js";import"./VCheckboxBtn-KnKlC77n.js";import"./VSelectionControl-tBJoG7de.js";/* empty css              */import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VRadioGroup-Dii_hqxm.js";const q=n("h6",{class:"text-body-2 text-high-emphasis mb-2"}," Notify Users ",-1),L={class:"d-flex align-center flex-wrap gap-x-2"},G={__name:"DealDetails",props:{formData:{type:null,required:!0}},emits:["update:formData"],setup(V,{emit:c}){const d=V,m=c,t=U(d.formData),f=["iPhone 12 Pro Max","iPhone 12 Pro","iPhone 11 Pro Max","iPhone 11","iPhone 12 Mini","OnePlus Nord CE"];return y(t,()=>{m("update:formData",t.value)}),(a,s)=>{const r=A,u=M,C=w,_=N;return b(),D(P,null,{default:o(()=>[e(g,null,{default:o(()=>[e(i,{cols:"12",sm:"6"},{default:o(()=>[e(r,{modelValue:l(t).title,"onUpdate:modelValue":s[0]||(s[0]=p=>l(t).title=p),label:"Deal Title",placeholder:"Black Friday Sale, 50% off on all products"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",sm:"6"},{default:o(()=>[e(r,{modelValue:l(t).code,"onUpdate:modelValue":s[1]||(s[1]=p=>l(t).code=p),label:"Deal Code",placeholder:"BLACKFRIDAY50"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",sm:"6"},{default:o(()=>[e(u,{modelValue:l(t).description,"onUpdate:modelValue":s[2]||(s[2]=p=>l(t).description=p),label:"Deal Description",placeholder:"Write something about this deal",rows:"5","auto-grow":""},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",sm:"6"},{default:o(()=>[e(g,null,{default:o(()=>[e(i,{cols:"12"},{default:o(()=>[e(C,{modelValue:l(t).offeredUItems,"onUpdate:modelValue":s[3]||(s[3]=p=>l(t).offeredUItems=p),multiple:"",chips:"",label:"Offered Items",placeholder:"Select Offered Items",items:f},null,8,["modelValue"])]),_:1}),e(i,{cols:"12"},{default:o(()=>[e(C,{modelValue:l(t).cartCondition,"onUpdate:modelValue":s[4]||(s[4]=p=>l(t).cartCondition=p),label:"Cart Condition",placeholder:"Select Cart Condition",items:["Cart must contain all selected Downloads","Cart needs one or more of the selected Downloads"]},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),e(i,{cols:"12",sm:"6"},{default:o(()=>[e(_,{modelValue:l(t).dealDuration,"onUpdate:modelValue":s[5]||(s[5]=p=>l(t).dealDuration=p),label:"Deal Duration",placeholder:"Select Date Range",config:{mode:"range"}},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",sm:"6"},{default:o(()=>[q,n("div",L,[e(v,{modelValue:l(t).notification.email,"onUpdate:modelValue":s[6]||(s[6]=p=>l(t).notification.email=p),label:"Email",value:"email"},null,8,["modelValue"]),e(v,{modelValue:l(t).notification.sms,"onUpdate:modelValue":s[7]||(s[7]=p=>l(t).notification.sms=p),label:"SMS",value:"sms"},null,8,["modelValue"]),e(v,{modelValue:l(t).notification.pushNotification,"onUpdate:modelValue":s[8]||(s[8]=p=>l(t).notification.pushNotification=p),label:"Push Notification",value:"push-notification"},null,8,["modelValue"])])]),_:1})]),_:1})]),_:1})}}},j="/build/assets/sitting-girl-checkout-BN78X_n8.png",K=n("h4",{class:"text-h4 mb-4"}," Almost done! 🚀 ",-1),X=n("p",null,"Confirm your deal details information and submit to create it.",-1),Y={class:"text-base"},Z=n("tr",null,[n("td",{style:{"inline-size":"150px"}},[n("p",{class:"font-weight-medium mb-2"}," Deal Type ")]),n("td",null,[n("p",{class:"mb-2"}," Percentage ")])],-1),H=n("tr",null,[n("td",null,[n("p",{class:"font-weight-medium mb-2"}," Amount ")]),n("td",null,[n("p",{class:"mb-2"}," 25% ")])],-1),J=n("td",null,[n("p",{class:"font-weight-medium mb-2"}," Deal Code ")],-1),Q={class:"mb-2"},ee=n("tr",null,[n("td",null,[n("p",{class:"font-weight-medium mb-2"}," Deal Title ")]),n("td",null,[n("p",{class:"mb-2"}," Black friday sale, 25% OFF ")])],-1),le=n("tr",null,[n("td",null,[n("p",{class:"font-weight-medium mb-2"}," Deal Duration ")]),n("td",null,[n("p",{class:"mb-2"}," 2021-07-14 to 2021-07-30 ")])],-1),te={__name:"DealReviewComplete",props:{formData:{type:null,required:!0}},emits:["update:formData"],setup(V,{emit:c}){const d=V,m=c,t=U(d.formData);return y(t,()=>{m("update:formData",t.value)}),(f,a)=>(b(),D(g,null,{default:o(()=>[e(i,{cols:"12",md:"6",class:"pb-4 pb-sm-0"},{default:o(()=>[K,X,n("table",Y,[Z,H,n("tr",null,[J,n("td",null,[n("p",Q,[e(B,{size:"small",color:"warning",label:""},{default:o(()=>[h(" 25PEROFF ")]),_:1})])])]),ee,le]),e(R,{modelValue:l(t).isDealDetailsConfirmed,"onUpdate:modelValue":a[0]||(a[0]=s=>l(t).isDealDetailsConfirmed=s),label:"I have confirmed the deal details.",class:"mb-3"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",md:"6"},{default:o(()=>[e(k,{width:"334",src:l(j),class:"mx-auto flip-in-rtl"},null,8,["src"])]),_:1})]),_:1}))}},oe="/build/assets/shopping-girl-TR_mbW4a.png",ae={__name:"DealType",props:{formData:{type:null,required:!0}},emits:["update:formData"],setup(V,{emit:c}){const d=V,m=c,t=[{icon:{icon:"bx-purchase-tag",size:"28"},title:"Percentage",desc:"Create a deal which offer uses some % off (i.e 5% OFF) on total.",value:"percentage"},{icon:{icon:"bx-dollar",size:"28"},title:"Flat Amount",desc:"Create a deal which offer uses flat $5 OFF on total.",value:"flat"},{icon:{icon:"bx-user",size:"28"},title:"Prime member",desc:"Create prime member only deal to encourage the prime members.",value:"prime"}],f=U(d.formData);return y(f,()=>{m("update:formData",f.value)}),(a,s)=>{const r=z,u=A,C=w;return b(),D(P,null,{default:o(()=>[e(g,null,{default:o(()=>[e(i,{cols:"12"},{default:o(()=>[e(k,{src:l(oe),"max-height":"240",class:"border rounded"},null,8,["src"])]),_:1}),e(i,{cols:"12"},{default:o(()=>[e(r,{"selected-radio":l(f).Offer,"onUpdate:selectedRadio":s[0]||(s[0]=_=>l(f).Offer=_),"radio-content":t,"grid-column":{cols:"12",sm:"4"}},null,8,["selected-radio"])]),_:1}),e(i,{cols:"12",sm:"6"},{default:o(()=>[e(u,{modelValue:l(f).discount,"onUpdate:modelValue":s[1]||(s[1]=_=>l(f).discount=_),type:"number",label:"Discount",placeholder:"25",hint:"Enter the discount percentage. 10 = 10%","persistent-hint":""},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",sm:"6"},{default:o(()=>[e(C,{modelValue:l(f).region,"onUpdate:modelValue":s[2]||(s[2]=_=>l(f).region=_),label:"Region",items:["Asia","Europe","Africa","Australia","North America","South America"],placeholder:"Select Region",hint:"Select applicable regions for the deal.","persistent-hint":""},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})}}},se={__name:"DealUsage",props:{formData:{type:null,required:!0}},emits:["update:formData"],setup(V,{emit:c}){const d=V,m=c,t=U(d.formData);return y(t,()=>{m("update:formData",t.value)}),(f,a)=>{const s=w,r=A;return b(),D(P,null,{default:o(()=>[e(g,null,{default:o(()=>[e(i,{cols:"12",sm:"6"},{default:o(()=>[e(s,{modelValue:l(t).userType,"onUpdate:modelValue":a[0]||(a[0]=u=>l(t).userType=u),label:"User Type",placeholder:"Select User Type",items:["All","Registered","Unregistered","Prime Member"]},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",sm:"6"},{default:o(()=>[e(r,{modelValue:l(t).maxUsers,"onUpdate:modelValue":a[1]||(a[1]=u=>l(t).maxUsers=u),label:"Max Users",placeholder:"1000",type:"number"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",sm:"6"},{default:o(()=>[e(r,{modelValue:l(t).cartAmount,"onUpdate:modelValue":a[2]||(a[2]=u=>l(t).cartAmount=u),label:"Minimum Cart Amount",placeholder:"$199",type:"number"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",sm:"6"},{default:o(()=>[e(r,{modelValue:l(t).promotionFree,"onUpdate:modelValue":a[3]||(a[3]=u=>l(t).promotionFree=u),label:"Promotion Fee",placeholder:"$4.99",type:"number"},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",sm:"6"},{default:o(()=>[e(s,{modelValue:l(t).paymentMethod,"onUpdate:modelValue":a[4]||(a[4]=u=>l(t).paymentMethod=u),label:"Payment Method",placeholder:"Select Payment Method",items:["Any","Credit Card","Net Banking","Wallet"]},null,8,["modelValue"])]),_:1}),e(i,{cols:"12",sm:"6"},{default:o(()=>[e(s,{modelValue:l(t).dealStatus,"onUpdate:modelValue":a[5]||(a[5]=u=>l(t).dealStatus=u),label:"Deal Status",placeholder:"Select Deal Status",items:["Active","Inactive","Suspended","Abandoned"]},null,8,["modelValue"])]),_:1}),e(i,{cols:"12"},{default:o(()=>[e(R,{modelValue:l(t).isSingleUserCustomer,"onUpdate:modelValue":a[6]||(a[6]=u=>l(t).isSingleUserCustomer=u),label:"Limit this discount to a single-use per customer?"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})}}},ne={class:"d-flex flex-wrap gap-4 justify-space-between mt-6"},Xe={__name:"create-deal",setup(V){const c=[{title:"Deal Type",subtitle:"Choose type of deal",icon:"bx-purchase-tag"},{title:"Deal Details",subtitle:"Provide deal details",icon:"bx-detail"},{title:"Deal Usage",subtitle:"Limitations & Offers",icon:"bx-credit-card"},{title:"Review & Complete",subtitle:"Launch a deal",icon:"bx-rocket"}],d=U(0),m=U({dealType:{Offer:"percentage",discount:null,region:null},dealDetails:{title:"",code:"",description:"",offeredUItems:[],cartCondition:null,dealDuration:"",notification:{email:!1,sms:!1,pushNotification:!1}},dealUsage:{userType:null,maxUsers:null,cartAmount:null,promotionFree:null,paymentMethod:null,dealStatus:null,isSingleUserCustomer:!1},dealReviewComplete:{isDealDetailsConfirmed:!0}}),t=()=>{console.log("createDealData :>> ",m.value)};return(f,a)=>{const s=I;return b(),D(W,null,{default:o(()=>[e(g,{"no-gutters":""},{default:o(()=>[e(i,{cols:"12",md:"4",lg:"3",class:O(f.$vuetify.display.mdAndUp?"border-e":"border-b")},{default:o(()=>[e($,null,{default:o(()=>[e(s,{"current-step":l(d),"onUpdate:currentStep":a[0]||(a[0]=r=>T(d)?d.value=r:null),direction:"vertical",items:c,"icon-size":"22",class:"stepper-icon-step-bg"},null,8,["current-step"])]),_:1})]),_:1},8,["class"]),e(i,{cols:"12",md:"8",lg:"9"},{default:o(()=>[e($,null,{default:o(()=>[e(E,{modelValue:l(d),"onUpdate:modelValue":a[5]||(a[5]=r=>T(d)?d.value=r:null),class:"disable-tab-transition"},{default:o(()=>[e(x,null,{default:o(()=>[e(ae,{"form-data":l(m).dealType,"onUpdate:formData":a[1]||(a[1]=r=>l(m).dealType=r)},null,8,["form-data"])]),_:1}),e(x,null,{default:o(()=>[e(G,{"form-data":l(m).dealDetails,"onUpdate:formData":a[2]||(a[2]=r=>l(m).dealDetails=r)},null,8,["form-data"])]),_:1}),e(x,null,{default:o(()=>[e(se,{"form-data":l(m).dealUsage,"onUpdate:formData":a[3]||(a[3]=r=>l(m).dealUsage=r)},null,8,["form-data"])]),_:1}),e(x,null,{default:o(()=>[e(te,{"form-data":l(m).dealReviewComplete,"onUpdate:formData":a[4]||(a[4]=r=>l(m).dealReviewComplete=r)},null,8,["form-data"])]),_:1})]),_:1},8,["modelValue"]),n("div",ne,[e(S,{color:"secondary",variant:"tonal",disabled:l(d)===0,onClick:a[6]||(a[6]=r=>d.value--)},{default:o(()=>[e(F,{icon:"bx-left-arrow-alt",start:"",class:"flip-in-rtl"}),h(" Previous ")]),_:1},8,["disabled"]),c.length-1===l(d)?(b(),D(S,{key:0,color:"success",onClick:t},{default:o(()=>[h(" submit ")]),_:1})):(b(),D(S,{key:1,onClick:a[7]||(a[7]=r=>d.value++)},{default:o(()=>[h(" Next "),e(F,{icon:"bx-right-arrow-alt",end:"",class:"flip-in-rtl"})]),_:1}))])]),_:1})]),_:1})]),_:1})]),_:1})}}};export{Xe as default};