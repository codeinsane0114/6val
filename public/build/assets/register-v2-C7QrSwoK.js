import{_ as h}from"./AppTextField-CidaaHzM.js";import{r as p,o as x,c as g,b as e,e as a,d as o,m as t,H as c,v,b2 as y,al as b,t as u,F as w,a as k}from"./main-BpgBUGps.js";import{V as C}from"./VNodeRenderer-BTYogJaJ.js";import{_ as P}from"./AuthProvider-cHQOChhJ.js";import{a as R}from"./auth-v2-register-illustration-S8yhhavi.js";import{a as r,V as f}from"./VRow-DcLldsAi.js";import{V as U}from"./VImg-MA4fhMLa.js";import{V as j}from"./VCard-DPA8ST1d.js";import{V as _}from"./VCardText-RhVa6W5U.js";import{V as B}from"./VForm-HbYQbjWg.js";import{V as F}from"./VCheckbox-DLyduI3k.js";import{V as I}from"./form-jV7EneQK.js";import{V}from"./VDivider-CPy3CxIk.js";import"./VTextField-DNnTNwAs.js";/* empty css                   */import"./VCounter-B6UOvRBl.js";import"./VField-CsvBDBUR.js";import"./easing-CjukEv2V.js";import"./VInput-h-v4JtUG.js";import"./forwardRefs-C-GTDzx5.js";/* empty css              */import"./VAvatar-B9R7oHU8.js";import"./VCheckboxBtn-KnKlC77n.js";import"./VSelectionControl-tBJoG7de.js";const N={class:"auth-logo d-flex align-center gap-x-2"},S={class:"auth-title"},A={class:"position-relative bg-background w-100 pa-8"},L={class:"d-flex align-center justify-center w-100 h-100"},T=o("h4",{class:"text-h4 mb-1"}," Adventure starts here 🚀 ",-1),$=o("p",{class:"mb-0"}," Make your app management easy and fun! ",-1),D={class:"d-flex align-center my-6"},E=o("span",{class:"me-1 text-high-emphasis"},"I agree to",-1),M=o("a",{href:"javascript:void(0)",class:"text-primary"},"privacy policy & terms",-1),H=o("span",{class:"d-inline-block"},"Already have an account?",-1),J=o("span",{class:"mx-4"},"or",-1),Ve={__name:"register-v2",setup(q){const l=p({username:"",email:"",password:"",privacyPolicies:!1}),n=p(!1);return(z,s)=>{const m=k("RouterLink"),d=h;return x(),g(w,null,[e(m,{to:"/"},{default:a(()=>[o("div",N,[e(t(C),{nodes:t(c).app.logo},null,8,["nodes"]),o("h1",S,v(t(c).app.title),1)])]),_:1}),e(f,{"no-gutters":"",class:"auth-wrapper bg-surface"},{default:a(()=>[e(r,{md:"8",class:"d-none d-md-flex"},{default:a(()=>[o("div",A,[o("div",L,[e(U,{"max-width":"700",src:t(R),class:"auth-illustration"},null,8,["src"])])])]),_:1}),e(r,{cols:"12",md:"4",class:"auth-card-v2 d-flex align-center justify-center"},{default:a(()=>[e(j,{flat:"","max-width":500,class:"mt-12 pa-6"},{default:a(()=>[e(_,null,{default:a(()=>[T,$]),_:1}),e(_,null,{default:a(()=>[e(B,{onSubmit:y(()=>{},["prevent"])},{default:a(()=>[e(f,null,{default:a(()=>[e(r,{cols:"12"},{default:a(()=>[e(d,{modelValue:t(l).username,"onUpdate:modelValue":s[0]||(s[0]=i=>t(l).username=i),autofocus:"",label:"Username",placeholder:"Johndoe"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12"},{default:a(()=>[e(d,{modelValue:t(l).email,"onUpdate:modelValue":s[1]||(s[1]=i=>t(l).email=i),label:"Email",type:"email",placeholder:"johndoe@email.com"},null,8,["modelValue"])]),_:1}),e(r,{cols:"12"},{default:a(()=>[e(d,{modelValue:t(l).password,"onUpdate:modelValue":s[2]||(s[2]=i=>t(l).password=i),label:"Password",placeholder:"············",type:t(n)?"text":"password","append-inner-icon":t(n)?"bx-hide":"bx-show","onClick:appendInner":s[3]||(s[3]=i=>n.value=!t(n))},null,8,["modelValue","type","append-inner-icon"]),o("div",D,[e(F,{id:"privacy-policy",modelValue:t(l).privacyPolicies,"onUpdate:modelValue":s[4]||(s[4]=i=>t(l).privacyPolicies=i),inline:""},null,8,["modelValue"]),e(I,{for:"privacy-policy",style:{opacity:"1"}},{default:a(()=>[E,M]),_:1})]),e(b,{block:"",type:"submit"},{default:a(()=>[u(" Sign up ")]),_:1})]),_:1}),e(r,{cols:"12",class:"text-center text-base"},{default:a(()=>[H,e(m,{class:"text-primary ms-1 d-inline-block",to:{name:"pages-authentication-login-v2"}},{default:a(()=>[u(" Sign in instead ")]),_:1})]),_:1}),e(r,{cols:"12",class:"d-flex align-center"},{default:a(()=>[e(V),J,e(V)]),_:1}),e(r,{cols:"12",class:"text-center"},{default:a(()=>[e(P)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64)}}};export{Ve as default};