import{a as se,_ as oe}from"./AddPaymentMethodDialog-BwXHsup8.js";import{_ as ne}from"./UserInfoEditDialog-Bfr32xLj.js";import{_ as re,a as de}from"./TwoFactorAuthDialog-DLM-rJg-.js";import{_ as X}from"./AppTextField-CidaaHzM.js";import{_ as ue}from"./AppStepper-6p-jwTXp.js";import{_ as K}from"./DialogCloseBtn-do27yBJz.js";import{l as me}from"./illustration-john-Zb9Aw9JQ.js";import{V as v,a as $,b as S}from"./VCard-DPA8ST1d.js";import{V as h}from"./VCardText-RhVa6W5U.js";import{V as q,a as f}from"./VRow-DcLldsAi.js";import{V as ce,a as F}from"./VWindowItem-COAbTIN-.js";import{V as Q,a as Y}from"./VRadioGroup-Dii_hqxm.js";import{V as L,a as U,b as R,d as W}from"./VList-Bu48BGuL.js";import{V as P}from"./VAvatar-B9R7oHU8.js";import{r as y,w as pe,o as w,f as j,e as t,b as e,m as i,aZ as D,c as N,F as B,h as M,a3 as m,d as s,v as V,t as o,al as c,H as fe,b2 as Z,bi as be,bj as _e,be as ge,bf as xe,b5 as ve,b3 as he,b4 as Ve,bq as ye,bp as De,dk as we}from"./main-BpgBUGps.js";import{V as J}from"./VForm-HbYQbjWg.js";import{V as Ce}from"./VSwitch-lAdZ86xz.js";import{V as ke}from"./VImg-MA4fhMLa.js";import{V as H}from"./VDialog-pRXmThFU.js";import{_ as $e}from"./AddEditAddressDialog-Bdo5cnGR.js";import{V as Se}from"./VDivider-CPy3CxIk.js";import{_ as Ae}from"./PricingPlanDialog-C5uQurf8.js";import{_ as Ee}from"./AppAutocomplete-DsR-4uvX.js";import{V as ze}from"./VMenu-D0wOrHxC.js";import"./american-express-RiSm_jKV.js";import"./mastercard-BccUtaqJ.js";import"./visa-light-OW_Fpctg.js";import"./useGenerateImageVariant-DW3DZK7L.js";import"./AppSelect-crBF-FCt.js";import"./form-jV7EneQK.js";import"./VSelect-CvnWonW6.js";import"./VTextField-DNnTNwAs.js";/* empty css                   */import"./VCounter-B6UOvRBl.js";import"./VField-CsvBDBUR.js";import"./easing-CjukEv2V.js";import"./VInput-h-v4JtUG.js";import"./forwardRefs-C-GTDzx5.js";import"./dialog-transition-Dw95iG-S.js";import"./VOverlay-BSwVgU5G.js";import"./delay-CiIYTbkJ.js";import"./lazy-CKzIgbSD.js";import"./scopeId-D5DaYZNr.js";import"./VCheckboxBtn-KnKlC77n.js";import"./VSelectionControl-tBJoG7de.js";import"./VChip-Gdsswa87.js";import"./VSlideGroup-qhrbewnN.js";import"./VAlert-B9i9L_5n.js";import"./CustomRadios-CwFztzc9.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./VSpacer-BwkbVUnR.js";/* empty css              */import"./ssrBoot-Cao_hl35.js";import"./CustomRadiosWithIcon-DkGM1zg8.js";import"./AppPricing-zVXNZusi.js";import"./filter-BHKMO-vf.js";const Ue=s("h4",{class:"text-h4 text-center mb-2"}," Create App ",-1),Pe=s("p",{class:"text-body-1 text-center mb-6"}," Provide data with this form to create your app. ",-1),je=s("h5",{class:"text-h5 mt-6 mb-4"}," Category ",-1),Ne={class:"text-h6 mb-1"},Be=s("h5",{class:"text-h5 mb-4"}," Select Framework ",-1),Me={class:"text-h6 mb-1"},Ie=s("h5",{class:"text-h5 mt-6 mb-4"}," Select Database Engine ",-1),Fe={class:"text-h6 mb-1"},Le=s("h6",{class:"text-h6 mb-6"}," Payment Details ",-1),Re=s("h5",{class:"text-h5 mb-1 mt-4"}," Submit ",-1),Te=s("p",{class:"text-sm mb-8"}," Submit to kickstart your project. ",-1),We={class:"d-flex justify-space-between mt-6"},qe={__name:"CreateAppDialog",props:{isDialogVisible:{type:Boolean,required:!0}},emits:["update:isDialogVisible","updatedData"],setup(z,{emit:C}){const b=z,_=C,u=y(0),g=[{icon:"bx-home",title:"DETAILS",subtitle:"Enter Details"},{icon:"bx-box",title:"FRAMEWORKS",subtitle:"Select Framework"},{icon:"bx-data",title:"DATABASE",subtitle:"Select Database"},{icon:"bx-credit-card",title:"BILLING",subtitle:"Payment Details"},{icon:"bx-check",title:"SUBMIT",subtitle:"Submit"}],p=[{icon:"bx-file",color:"info",title:"CRM Application",subtitle:"Scales with any business",slug:"crm-application"},{icon:"bx-cart",color:"success",title:"Ecommerce Platforms",subtitle:"Grow Your Business With App",slug:"ecommerce-application"},{icon:"bx-laptop",color:"error",title:"Online Learning platform",subtitle:"Start learning today",slug:"online-learning-application"}],x=[{icon:"bx-bxl-react",color:"info",title:"React Native",subtitle:"Create truly native apps",slug:"react-framework"},{icon:"bx-bxl-angular",color:"error",title:"Angular",subtitle:"Most suited for your application",slug:"angular-framework"},{icon:"bx-bxl-vuejs",color:"success",title:"Vue",subtitle:"JS web frameworks",slug:"js-framework"},{icon:"bx-bxl-html5",color:"warning",title:"HTML",subtitle:"Progressive Framework",slug:"html-framework"}],k=[{icon:"bx-bxl-firebase",color:"error",title:"Firebase",subtitle:"Cloud Firestore",slug:"firebase-database"},{icon:"bx-bxl-amazon",color:"warning",title:"AWS",subtitle:"Amazon Fast NoSQL Database",slug:"aws-database"},{icon:"bx-data",color:"info",title:"MySQL",subtitle:"Basic MySQL database",slug:"mysql-database"}],n=y({category:"crm-application",framework:"js-framework",database:"firebase-database",cardNumber:null,cardName:"",cardExpiry:"",cardCvv:"",isSave:!0}),d=I=>{_("update:isDialogVisible",I),u.value=0};pe(b,()=>{b.isDialogVisible||(u.value=0)});const A=()=>{alert("submitted...!!"),_("updatedData",n.value)};return(I,l)=>{const G=K,O=ue,E=X;return w(),j(H,{"model-value":b.isDialogVisible,"max-width":"900","min-height":"590","onUpdate:modelValue":d},{default:t(()=>[e(G,{size:"small",onClick:l[0]||(l[0]=a=>_("update:isDialogVisible",!1))}),e(v,null,{default:t(()=>[e(h,{class:"pa-5 pa-sm-16"},{default:t(()=>[Ue,Pe,e(q,null,{default:t(()=>[e(f,{cols:"12",sm:"5",md:"4",lg:"3"},{default:t(()=>[e(O,{"current-step":i(u),"onUpdate:currentStep":l[1]||(l[1]=a=>D(u)?u.value=a:null),direction:"vertical",items:g,"icon-size":"22",class:"stepper-icon-step-bg"},null,8,["current-step"])]),_:1}),e(f,{cols:"12",sm:"7",md:"8",lg:"9"},{default:t(()=>[e(ce,{modelValue:i(u),"onUpdate:modelValue":l[10]||(l[10]=a=>D(u)?u.value=a:null),class:"disable-tab-transition stepper-content"},{default:t(()=>[e(F,null,{default:t(()=>[e(E,{label:"Application Name",placeholder:"Application Name"}),je,e(Q,{modelValue:i(n).category,"onUpdate:modelValue":l[2]||(l[2]=a=>i(n).category=a)},{default:t(()=>[e(L,{class:"card-list"},{default:t(()=>[(w(),N(B,null,M(p,a=>e(U,{key:a.title,onClick:T=>i(n).category=a.slug},{prepend:t(()=>[e(P,{size:"46",rounded:"",variant:"tonal",color:a.color},{default:t(()=>[e(m,{icon:a.icon,size:"30"},null,8,["icon"])]),_:2},1032,["color"])]),append:t(()=>[e(Y,{value:a.slug},null,8,["value"])]),default:t(()=>[e(R,null,{default:t(()=>[s("h6",Ne,V(a.title),1)]),_:2},1024),e(W,null,{default:t(()=>[o(V(a.subtitle),1)]),_:2},1024)]),_:2},1032,["onClick"])),64))]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(F,null,{default:t(()=>[Be,e(Q,{modelValue:i(n).framework,"onUpdate:modelValue":l[3]||(l[3]=a=>i(n).framework=a)},{default:t(()=>[e(L,{class:"card-list"},{default:t(()=>[(w(),N(B,null,M(x,a=>e(U,{key:a.title,onClick:T=>i(n).framework=a.slug},{prepend:t(()=>[e(P,{size:"46",rounded:"",variant:"tonal",color:a.color},{default:t(()=>[e(m,{icon:a.icon,size:"30"},null,8,["icon"])]),_:2},1032,["color"])]),append:t(()=>[e(Y,{value:a.slug},null,8,["value"])]),default:t(()=>[e(R,null,{default:t(()=>[s("h6",Me,V(a.title),1)]),_:2},1024),e(W,null,{default:t(()=>[o(V(a.subtitle),1)]),_:2},1024)]),_:2},1032,["onClick"])),64))]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(F,null,{default:t(()=>[e(E,{label:"Database Name",placeholder:"User DB"}),Ie,e(Q,{modelValue:i(n).database,"onUpdate:modelValue":l[4]||(l[4]=a=>i(n).database=a)},{default:t(()=>[e(L,{class:"card-list"},{default:t(()=>[(w(),N(B,null,M(k,a=>e(U,{key:a.title,onClick:T=>i(n).database=a.slug},{prepend:t(()=>[e(P,{size:"46",rounded:"",variant:"tonal",color:a.color},{default:t(()=>[e(m,{icon:a.icon,size:"30"},null,8,["icon"])]),_:2},1032,["color"])]),append:t(()=>[e(Y,{value:a.slug},null,8,["value"])]),default:t(()=>[e(R,null,{default:t(()=>[s("h6",Fe,V(a.title),1)]),_:2},1024),e(W,null,{default:t(()=>[o(V(a.subtitle),1)]),_:2},1024)]),_:2},1032,["onClick"])),64))]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(F,null,{default:t(()=>[Le,e(J,null,{default:t(()=>[e(q,null,{default:t(()=>[e(f,{cols:"12"},{default:t(()=>[e(E,{modelValue:i(n).cardNumber,"onUpdate:modelValue":l[5]||(l[5]=a=>i(n).cardNumber=a),label:"Card Number",placeholder:"1234 1234 1234 1234",type:"number"},null,8,["modelValue"])]),_:1}),e(f,{cols:"12",md:"6"},{default:t(()=>[e(E,{modelValue:i(n).cardName,"onUpdate:modelValue":l[6]||(l[6]=a=>i(n).cardName=a),label:"Name on Card",placeholder:"John Doe"},null,8,["modelValue"])]),_:1}),e(f,{cols:"6",md:"3"},{default:t(()=>[e(E,{modelValue:i(n).cardExpiry,"onUpdate:modelValue":l[7]||(l[7]=a=>i(n).cardExpiry=a),label:"Expiry",placeholder:"MM/YY"},null,8,["modelValue"])]),_:1}),e(f,{cols:"6",md:"3"},{default:t(()=>[e(E,{modelValue:i(n).cardCvv,"onUpdate:modelValue":l[8]||(l[8]=a=>i(n).cardCvv=a),label:"CVV",placeholder:"123"},null,8,["modelValue"])]),_:1}),e(f,{cols:"12"},{default:t(()=>[e(Ce,{modelValue:i(n).isSave,"onUpdate:modelValue":l[9]||(l[9]=a=>i(n).isSave=a),label:"Save Card for future billing?"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1}),e(F,{class:"text-center"},{default:t(()=>[Re,Te,e(ke,{src:i(me),width:"164",class:"mx-auto"},null,8,["src"])]),_:1})]),_:1},8,["modelValue"]),s("div",We,[e(c,{variant:"tonal",color:"secondary",disabled:i(u)===0,onClick:l[11]||(l[11]=a=>u.value--)},{default:t(()=>[e(m,{icon:"bx-left-arrow-alt",start:"",class:"flip-in-rtl"}),o(" Previous ")]),_:1},8,["disabled"]),g.length-1===i(u)?(w(),j(c,{key:0,color:"success",onClick:A},{default:t(()=>[o(" submit ")]),_:1})):(w(),j(c,{key:1,onClick:l[12]||(l[12]=a=>u.value++)},{default:t(()=>[o(" Next "),e(m,{icon:"bx-right-arrow-alt",end:"",class:"flip-in-rtl"})]),_:1}))])]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model-value"])}}},Ge=s("h4",{class:"text-h4 text-center mb-2"}," Refer & Earn ",-1),Oe={class:"text-body-1 mb-12 text-center"},Qe={class:"text-capitalize"},Ye={class:"text-h5 mt-4 mb-2"},Je={class:"text-body-1"},Ke=s("h5",{class:"text-h5 mb-6"}," Invite your friends ",-1),He=s("h5",{class:"text-h5 my-6"}," Share the referral link ",-1),Ze={class:"d-flex align-self-end gap-1"},Xe={__name:"ReferAndEarnDialog",props:{isDialogVisible:{type:Boolean,required:!0}},emits:["update:isDialogVisible"],setup(z,{emit:C}){const b=z,_=C,u=p=>{_("update:isDialogVisible",p)},g=[{icon:"bx-message-square-dots",title:"Send Invitation 👍🏻",subtitle:"Send your referral link to your friend"},{icon:"bx-detail",title:"Registration 😎",subtitle:"Let them register to our services"},{icon:"bx-gift",title:"Free Trial  🎉",subtitle:"Your friend will get 30 days free trial"}];return(p,x)=>{const k=K,n=X;return w(),j(H,{"model-value":b.isDialogVisible,width:p.$vuetify.display.smAndDown?"auto":800,"onUpdate:modelValue":u},{default:t(()=>[e(k,{onClick:x[0]||(x[0]=d=>p.$emit("update:isDialogVisible",!1))}),e(v,{class:"pa-2 pa-sm-10"},{default:t(()=>[e(h,null,{default:t(()=>[Ge,s("p",Oe,[o(" Invite your friend to "),s("span",Qe,V(i(fe).app.title),1),o(", if they sign up, you and your friend will get 30 days free trial ")]),e(q,{class:"text-center"},{default:t(()=>[(w(),N(B,null,M(g,d=>e(f,{key:d.title,cols:"12",sm:"4"},{default:t(()=>[e(P,{variant:"tonal",size:"88",color:"primary",rounded:""},{default:t(()=>[e(m,{size:"40",icon:d.icon},null,8,["icon"])]),_:2},1024),s("h5",Ye,V(d.title),1),s("div",Je,V(d.subtitle),1)]),_:2},1024)),64))]),_:1}),e(Se,{class:"mt-12 mb-6"}),Ke,e(J,{class:"d-flex align-center flex-wrap gap-4",onSubmit:Z(()=>{},["prevent"])},{default:t(()=>[e(n,{placeholder:"johnDoe@gmail.com",label:"Enter your friend's email address and invite them to join Sneat 😍"}),e(c,{class:"align-self-end",type:"submit"},{default:t(()=>[o(" Send ")]),_:1})]),_:1}),He,e(J,{class:"d-flex align-center flex-wrap gap-4",onSubmit:Z(()=>{},["prevent"])},{default:t(()=>[e(n,{placeholder:"http://themeselection.link",label:"You can also copy and send it or share it on your social media. 🚀",class:"refer-link-input"}),s("div",Ze,[e(c,{icon:"",class:"rounded",color:"#3B5998",size:"38"},{default:t(()=>[e(m,{color:"white",icon:"bx-bxl-facebook",size:"22"})]),_:1}),e(c,{icon:"",class:"rounded",color:"#55ACEE",size:"38"},{default:t(()=>[e(m,{color:"white",icon:"bx-bxl-twitter",size:"22"})]),_:1}),e(c,{icon:"",class:"rounded",color:"#007BB6",size:"38"},{default:t(()=>[e(m,{color:"white",icon:"bx-bxl-linkedin",size:"22"})]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1},8,["model-value","width"])}}},et=s("h4",{class:"text-h4 text-center mb-2"}," Share Project ",-1),tt=s("p",{class:"text-body-1 text-center mb-6"}," Share project with a team members ",-1),lt=s("h5",{class:"text-h5 mb-4 mt-6"}," 8 Members ",-1),at={class:"d-none d-sm-block me-1"},it={class:"d-flex align-center justify-center justify-sm-space-between flex-wrap gap-3 mt-6"},st={class:"text-h6 font-weight-medium d-flex align-start"},ot=s("div",null,"Public to Sneat - Themeselection",-1),nt={__name:"ShareProjectDialog",props:{isDialogVisible:{type:Boolean,required:!0}},emits:["update:isDialogVisible"],setup(z,{emit:C}){const b=z,_=C,u=p=>{_("update:isDialogVisible",p)},g=[{avatar:ge,name:"Lester Palmer",email:"jerrod98@gmail.com",permission:"Can Edit"},{avatar:xe,name:"Mattie Blair",email:"prudence.boehm@yahoo.com",permission:"Owner"},{avatar:ve,name:"Marvin Wheeler",email:"rumet@jujpejah.net",permission:"Can Comment"},{avatar:he,name:"Nannie Ford",email:"negza@nuv.io",permission:"Can View"},{avatar:Ve,name:"Julian Murphy",email:"lunebame@umdomgu.net",permission:"Can Edit"},{avatar:ye,name:"Sophie Gilbert",email:"ha@sugit.gov",permission:"Can View"},{avatar:De,name:"Chris Watkins",email:"zokap@mak.org",permission:"Can Comment"},{avatar:we,name:"Adelaide Nichols",email:"ujinomu@jigo.com",permission:"Can Edit"}];return(p,x)=>{const k=K,n=Ee;return w(),j(H,{"model-value":b.isDialogVisible,width:p.$vuetify.display.smAndDown?"auto":900,"onUpdate:modelValue":u},{default:t(()=>[e(k,{onClick:x[0]||(x[0]=d=>p.$emit("update:isDialogVisible",!1))}),e(v,{class:"share-project-dialog pa-2 pa-sm-10"},{default:t(()=>[e(h,null,{default:t(()=>[et,tt,e(n,{label:"Add Members",items:g,"item-title":"name","item-value":"name",placeholder:"Add project members..."},{item:t(({props:d,item:A})=>[e(U,be(_e(d)),{prepend:t(()=>[e(P,{image:A.raw.avatar,size:"30"},null,8,["image"])]),_:2},1040)]),_:1}),lt,e(L,{class:"card-list"},{default:t(()=>[(w(),N(B,null,M(g,d=>e(U,{key:d.name},{prepend:t(()=>[e(P,{class:"me-1",image:d.avatar},null,8,["image"])]),append:t(()=>[e(c,{variant:"text",color:"secondary",icon:p.$vuetify.display.xs},{default:t(()=>[s("span",at,V(d.permission),1),e(m,{icon:"bx-chevron-down"}),e(ze,{activator:"parent"},{default:t(()=>[e(L,{selected:[d.permission]},{default:t(()=>[(w(),N(B,null,M(["Owner","Can Edit","Can Comment","Can View"],(A,I)=>e(U,{key:I,value:A},{default:t(()=>[e(R,null,{default:t(()=>[o(V(A),1)]),_:2},1024)]),_:2},1032,["value"])),64))]),_:2},1032,["selected"])]),_:2},1024)]),_:2},1032,["icon"])]),default:t(()=>[e(R,null,{default:t(()=>[o(V(d.name),1)]),_:2},1024),e(W,null,{default:t(()=>[o(V(d.email),1)]),_:2},1024)]),_:2},1024)),64))]),_:1}),s("div",it,[s("h6",st,[e(m,{icon:"bx-user",class:"me-2",size:"20"}),ot]),e(c,{class:"text-capitalize","prepend-icon":"bx-link"},{default:t(()=>[o(" Copy Project Link ")]),_:1})])]),_:1})]),_:1})]),_:1},8,["model-value","width"])}}},rt=s("p",{class:"text-base clamp-text"}," Quickly collect the credit card details, built in input mask and form validation support. ",-1),dt=s("p",{class:"text-base clamp-text"}," Quickly collect the credit card details, built in input mask and form validation support. ",-1),ut=s("p",{class:"text-base clamp-text"}," Elegant pricing options dialog popup example, easy to use in any page. ",-1),mt=s("p",{class:"text-base clamp-text"}," Use Refer & Earn modal to encourage your exiting customers refer their friends & colleague. ",-1),ct=s("p",{class:"text-base clamp-text"}," Ready to use form to collect user address data with validation and custom input support. ",-1),pt=s("p",{class:"text-base clamp-text"}," Provide application data with this form to create the app dialog popup example, easy to use in any page. ",-1),ft=s("p",{class:"text-base clamp-text"}," Enhance your application security by enabling two factor authentication. ",-1),bt=s("p",{class:"text-base clamp-text"}," Enhance your application security by enabling two factor authentication. ",-1),_t=s("p",{class:"text-base clamp-text"}," Elegant payment options modal popup example, easy to use in any page. ",-1),gt=s("p",{class:"text-base clamp-text"}," Elegant payment methods modal popup example, easy to use in any page. ",-1),hl={__name:"index",setup(z){const C=y(!1),b=y(!1),_=y(!1),u=y(!1),g=y(!1),p=y(!1),x=y(!1),k=y(!1),n=y(!1),d=y(!1),A={id:110,firstName:"Selena",lastName:"Kyle",company:"Themeselection",role:"Web developer",username:"charwomen1940",country:"United States",contact:"(829) 537-0057",email:"irena.dubrovna@wayne.com",currentPlan:"",status:"Active",avatar:"",taskDone:null,projectDone:null,taxId:"Tax-8894",language:"English",fullName:"Selena Kyle"};return(I,l)=>{const G=nt,O=re,E=Ae,a=Xe,T=$e,ee=qe,te=de,le=ne,ae=se,ie=oe;return w(),j(q,null,{default:t(()=>[e(f,{cols:"12",sm:"6",md:"4"},{default:t(()=>[e(v,{class:"text-high-emphasis text-center"},{default:t(()=>[e($,{class:"d-flex flex-column gap-2"},{prepend:t(()=>[e(m,{size:"34",icon:"bx-file"})]),default:t(()=>[e(S,null,{default:t(()=>[o("Share Project")]),_:1})]),_:1}),e(h,null,{default:t(()=>[rt,e(c,{onClick:l[0]||(l[0]=r=>p.value=!i(p))},{default:t(()=>[o(" Show ")]),_:1})]),_:1}),e(G,{isDialogVisible:i(p),"onUpdate:isDialogVisible":l[1]||(l[1]=r=>D(p)?p.value=r:null)},null,8,["isDialogVisible"])]),_:1})]),_:1}),e(f,{cols:"12",sm:"6",md:"4"},{default:t(()=>[e(v,{class:"text-high-emphasis text-center"},{default:t(()=>[e($,{class:"d-flex flex-column gap-2"},{prepend:t(()=>[e(m,{size:"34",icon:"bx-credit-card"})]),default:t(()=>[e(S,null,{default:t(()=>[o("Add New Card")]),_:1})]),_:1}),e(h,null,{default:t(()=>[dt,e(c,{onClick:l[2]||(l[2]=r=>C.value=!i(C))},{default:t(()=>[o(" Show ")]),_:1})]),_:1}),e(O,{isDialogVisible:i(C),"onUpdate:isDialogVisible":l[3]||(l[3]=r=>D(C)?C.value=r:null)},null,8,["isDialogVisible"])]),_:1})]),_:1}),e(f,{cols:"12",sm:"6",md:"4"},{default:t(()=>[e(v,{class:"text-high-emphasis text-center"},{default:t(()=>[e($,{class:"d-flex flex-column gap-2"},{prepend:t(()=>[e(m,{size:"34",icon:"bx-dollar"})]),default:t(()=>[e(S,null,{default:t(()=>[o("Pricing")]),_:1})]),_:1}),e(h,null,{default:t(()=>[ut,e(c,{onClick:l[4]||(l[4]=r=>b.value=!i(b))},{default:t(()=>[o(" Show ")]),_:1})]),_:1}),e(E,{"is-dialog-visible":i(b),"onUpdate:isDialogVisible":l[5]||(l[5]=r=>D(b)?b.value=r:null)},null,8,["is-dialog-visible"])]),_:1})]),_:1}),e(f,{cols:"12",sm:"6",md:"4"},{default:t(()=>[e(v,{class:"text-high-emphasis text-center"},{default:t(()=>[e($,{class:"d-flex flex-column gap-2"},{prepend:t(()=>[e(m,{size:"34",icon:"bx-gift"})]),default:t(()=>[e(S,null,{default:t(()=>[o("Refer & Earn")]),_:1})]),_:1}),e(h,null,{default:t(()=>[mt,e(c,{onClick:l[6]||(l[6]=r=>x.value=!i(x))},{default:t(()=>[o(" Show ")]),_:1})]),_:1}),e(a,{"is-dialog-visible":i(x),"onUpdate:isDialogVisible":l[7]||(l[7]=r=>D(x)?x.value=r:null)},null,8,["is-dialog-visible"])]),_:1})]),_:1}),e(f,{cols:"12",sm:"6",md:"4"},{default:t(()=>[e(v,{class:"text-high-emphasis text-center"},{default:t(()=>[e($,{class:"d-flex flex-column gap-2"},{prepend:t(()=>[e(m,{size:"34",icon:"bx-home"})]),default:t(()=>[e(S,null,{default:t(()=>[o("Add New Address")]),_:1})]),_:1}),e(h,null,{default:t(()=>[ct,e(c,{onClick:l[8]||(l[8]=r=>_.value=!i(_))},{default:t(()=>[o(" Show ")]),_:1})]),_:1}),e(T,{isDialogVisible:i(_),"onUpdate:isDialogVisible":l[9]||(l[9]=r=>D(_)?_.value=r:null)},null,8,["isDialogVisible"])]),_:1})]),_:1}),e(f,{cols:"12",sm:"6",md:"4"},{default:t(()=>[e(v,{class:"text-high-emphasis text-center"},{default:t(()=>[e($,{class:"d-flex flex-column gap-2"},{prepend:t(()=>[e(m,{size:"34",icon:"bx-box"})]),default:t(()=>[e(S,null,{default:t(()=>[o("Create App")]),_:1})]),_:1}),e(h,null,{default:t(()=>[pt,e(c,{onClick:l[10]||(l[10]=r=>d.value=!i(d))},{default:t(()=>[o(" Show ")]),_:1})]),_:1})]),_:1}),e(ee,{"is-dialog-visible":i(d),"onUpdate:isDialogVisible":l[11]||(l[11]=r=>D(d)?d.value=r:null)},null,8,["is-dialog-visible"])]),_:1}),e(f,{cols:"12",sm:"6",md:"4"},{default:t(()=>[e(v,{class:"text-high-emphasis text-center"},{default:t(()=>[e($,{class:"d-flex flex-column gap-2"},{prepend:t(()=>[e(m,{size:"34",icon:"bx-lock"})]),default:t(()=>[e(S,null,{default:t(()=>[o("Two Factor Auth")]),_:1})]),_:1}),e(h,null,{default:t(()=>[ft,e(c,{onClick:l[12]||(l[12]=r=>u.value=!i(u))},{default:t(()=>[o(" Show ")]),_:1})]),_:1}),e(te,{isDialogVisible:i(u),"onUpdate:isDialogVisible":l[13]||(l[13]=r=>D(u)?u.value=r:null)},null,8,["isDialogVisible"])]),_:1})]),_:1}),e(f,{cols:"12",sm:"6",md:"4"},{default:t(()=>[e(v,{class:"text-high-emphasis text-center"},{default:t(()=>[e($,{class:"d-flex flex-column gap-2"},{prepend:t(()=>[e(m,{size:"34",icon:"bx-lock"})]),default:t(()=>[e(S,null,{default:t(()=>[o("Edit User Info")]),_:1})]),_:1}),e(h,null,{default:t(()=>[bt,e(c,{onClick:l[14]||(l[14]=r=>g.value=!i(g))},{default:t(()=>[o(" Show ")]),_:1})]),_:1}),e(le,{isDialogVisible:i(g),"onUpdate:isDialogVisible":l[15]||(l[15]=r=>D(g)?g.value=r:null),"user-data":A},null,8,["isDialogVisible"])]),_:1})]),_:1}),e(f,{cols:"12",sm:"6",md:"4"},{default:t(()=>[e(v,{class:"text-high-emphasis text-center"},{default:t(()=>[e($,{class:"d-flex flex-column gap-2"},{prepend:t(()=>[e(m,{size:"34",icon:"bx-wallet"})]),default:t(()=>[e(S,null,{default:t(()=>[o("Payment Providers")]),_:1})]),_:1}),e(h,null,{default:t(()=>[_t,e(c,{onClick:l[16]||(l[16]=r=>k.value=!i(k))},{default:t(()=>[o(" Show ")]),_:1})]),_:1}),e(ae,{"is-dialog-visible":i(k),"onUpdate:isDialogVisible":l[17]||(l[17]=r=>D(k)?k.value=r:null)},null,8,["is-dialog-visible"])]),_:1})]),_:1}),e(f,{cols:"12",sm:"6",md:"4"},{default:t(()=>[e(v,{class:"text-high-emphasis text-center"},{default:t(()=>[e($,{class:"d-flex flex-column gap-2"},{prepend:t(()=>[e(m,{size:"34",icon:"bx-credit-card"})]),default:t(()=>[e(S,null,{default:t(()=>[o("Add Payment Methods")]),_:1})]),_:1}),e(h,null,{default:t(()=>[gt,e(c,{onClick:l[18]||(l[18]=r=>n.value=!i(n))},{default:t(()=>[o(" Show ")]),_:1})]),_:1}),e(ie,{"is-dialog-visible":i(n),"onUpdate:isDialogVisible":l[19]||(l[19]=r=>D(n)?n.value=r:null)},null,8,["is-dialog-visible"])]),_:1})]),_:1})]),_:1})}}};export{hl as default};