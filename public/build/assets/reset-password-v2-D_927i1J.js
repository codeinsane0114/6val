import{_ as w}from"./AppTextField-CidaaHzM.js";import{r as p,o as V,c as h,b as e,e as s,d as a,m as t,H as c,v as x,b2 as b,al as g,t as v,a3 as P,F as y,a as C}from"./main-BpgBUGps.js";import{V as k}from"./VNodeRenderer-BTYogJaJ.js";import{a as l,V as f}from"./VRow-DcLldsAi.js";import{V as R}from"./VImg-MA4fhMLa.js";import{V as B}from"./VCard-DPA8ST1d.js";import{V as _}from"./VCardText-RhVa6W5U.js";import{V as N}from"./VForm-HbYQbjWg.js";import"./form-jV7EneQK.js";import"./VTextField-DNnTNwAs.js";/* empty css                   */import"./VCounter-B6UOvRBl.js";import"./VField-CsvBDBUR.js";import"./easing-CjukEv2V.js";import"./VInput-h-v4JtUG.js";import"./forwardRefs-C-GTDzx5.js";/* empty css              */import"./VAvatar-B9R7oHU8.js";const I="/build/assets/auth-v2-reset-password-illustration-BMKQ-Rr8.png",F={class:"auth-logo d-flex align-center gap-x-2"},j={class:"auth-title"},S={class:"position-relative bg-background w-100 pa-8"},T={class:"d-flex align-center justify-center w-100 h-100"},$=a("h4",{class:"text-h4 mb-1"}," Reset Password 🔒 ",-1),L=a("p",{class:"mb-0"}," Your new password must be different from previously used passwords ",-1),M=a("span",null,"Back to login",-1),ae={__name:"reset-password-v2",setup(U){const r=p({newPassword:"",confirmPassword:""}),i=p(!1),d=p(!1);return(z,o)=>{const m=C("RouterLink"),u=w;return V(),h(y,null,[e(m,{to:"/"},{default:s(()=>[a("div",F,[e(t(k),{nodes:t(c).app.logo},null,8,["nodes"]),a("h1",j,x(t(c).app.title),1)])]),_:1}),e(f,{"no-gutters":"",class:"auth-wrapper bg-surface"},{default:s(()=>[e(l,{md:"8",class:"d-none d-md-flex"},{default:s(()=>[a("div",S,[a("div",T,[e(R,{"max-width":"700",src:t(I),class:"auth-illustration"},null,8,["src"])])])]),_:1}),e(l,{cols:"12",md:"4",class:"auth-card-v2 d-flex align-center justify-center"},{default:s(()=>[e(B,{flat:"","max-width":500,class:"mt-12 mt-sm-0 pa-6"},{default:s(()=>[e(_,null,{default:s(()=>[$,L]),_:1}),e(_,null,{default:s(()=>[e(N,{onSubmit:b(()=>{},["prevent"])},{default:s(()=>[e(f,null,{default:s(()=>[e(l,{cols:"12"},{default:s(()=>[e(u,{modelValue:t(r).newPassword,"onUpdate:modelValue":o[0]||(o[0]=n=>t(r).newPassword=n),autofocus:"",label:"New Password",placeholder:"············",type:t(i)?"text":"password","append-inner-icon":t(i)?"bx-hide":"bx-show","onClick:appendInner":o[1]||(o[1]=n=>i.value=!t(i))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(l,{cols:"12"},{default:s(()=>[e(u,{modelValue:t(r).confirmPassword,"onUpdate:modelValue":o[2]||(o[2]=n=>t(r).confirmPassword=n),label:"Confirm Password",placeholder:"············",type:t(d)?"text":"password","append-inner-icon":t(d)?"bx-hide":"bx-show","onClick:appendInner":o[3]||(o[3]=n=>d.value=!t(d))},null,8,["modelValue","type","append-inner-icon"])]),_:1}),e(l,{cols:"12"},{default:s(()=>[e(g,{block:"",type:"submit"},{default:s(()=>[v(" Save New Password ")]),_:1})]),_:1}),e(l,{cols:"12"},{default:s(()=>[e(m,{class:"d-flex align-center justify-center",to:{name:"pages-authentication-login-v2"}},{default:s(()=>[e(P,{icon:"bx-chevron-left",size:"20",class:"me-1 flip-in-rtl"}),M]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})],64)}}};export{ae as default};