import{r as w,e as N}from"./validators-DpYrMFzk.js";import{r as c,G as j,o as k,c as C,b as e,e as o,d as l,m as a,H as h,v as R,t as i,b2 as I,aZ as M,y as L,al as U,F as $,i as B,j as D,a as X,b8 as V,b1 as H}from"./main-BpgBUGps.js";import{_ as O}from"./AppTextField-CidaaHzM.js";import{_ as W}from"./AuthProvider-cHQOChhJ.js";import{m as z}from"./auth-v2-login-illustration-BWhVv15T.js";import{V as G}from"./VNodeRenderer-BTYogJaJ.js";import{u as K}from"./useAbility-3Eoi70Kl.js";import{$ as Z}from"./api-TCFOQXkB.js";import{a as d,V as q}from"./VRow-DcLldsAi.js";import{V as J}from"./VImg-MA4fhMLa.js";import{V as Q}from"./VCard-DPA8ST1d.js";import{V as g}from"./VCardText-RhVa6W5U.js";import{V as Y}from"./VAlert-B9i9L_5n.js";import{V as ee}from"./VForm-HbYQbjWg.js";import{V as ae}from"./VCheckbox-DLyduI3k.js";import{V as F}from"./VDivider-CPy3CxIk.js";import"./helpers-DK5QwNv0.js";import"./form-jV7EneQK.js";import"./VTextField-DNnTNwAs.js";/* empty css                   */import"./VCounter-B6UOvRBl.js";import"./VField-CsvBDBUR.js";import"./easing-CjukEv2V.js";import"./VInput-h-v4JtUG.js";import"./forwardRefs-C-GTDzx5.js";import"./index-B3bPRkoL.js";/* empty css              */import"./VAvatar-B9R7oHU8.js";import"./VCheckboxBtn-KnKlC77n.js";import"./VSelectionControl-tBJoG7de.js";const te={class:"auth-logo d-flex align-center gap-x-2"},oe={class:"auth-title"},se={class:"position-relative bg-background w-100 pa-8"},le={class:"d-flex align-center justify-center w-100 h-100"},re={class:"text-h4 mb-1"},ne={class:"text-capitalize"},ie=l("p",{class:"mb-0"}," Please sign-in to your account and start the adventure ",-1),de=l("p",{class:"text-sm mb-2"},[i(" Admin Email: "),l("strong",null,"credentials.email"),i(" / Pass: "),l("strong",null,"admin")],-1),me=l("p",{class:"text-sm mb-0"},[i(" Client Email: "),l("strong",null,"client@demo.com"),i(" / Pass: "),l("strong",null,"client")],-1),ce={class:"d-flex align-center flex-wrap justify-space-between my-6"},ue={class:"d-flex align-center flex-wrap justify-space-between my-6"},pe=["src"],fe=l("span",{class:"d-inline-block"}," New on our platform? ",-1),_e=l("span",{class:"mx-4"},"or",-1),ze={__name:"login",setup(he){const p=c(!1),b=B(),T=D(),E=K(),x=c({email:void 0,password:void 0}),y=c();let r=c({email:"admin@demo.com",password:"admin",role:"admin",recaptcha:""});const _=c(!1);let P="";const S=async()=>{try{console.log(r.role,r.recaptcha);const t=await Z("/login",{method:"POST",body:{_token:P,email:r.value.email,password:r.value.password,role:r.value.role,default_captcha_value:r.value.recaptcha},onResponseError({response:n}){x.value=n._data.errors}}),{accessToken:s,userData:u,userAbilityRules:m}=t;V("userAbilityRules").value=m,E.update(m),V("userData").value=u,V("accessToken").value=s,await H(()=>{T.replace(b.query.to?String(b.query.to):"/")})}catch(t){console.error(t)}};let f=c("");const v=async()=>{const t=Math.floor(Math.random()*100001)+0;f.value=API_URL+"/login/recaptcha/"+t+"?captcha_session_id=default_recaptcha_id_admin_login",console.log("메시지가 변경되었습니다:",f,t)};j(async()=>{v(),axiosapi.get("/csrf-token").then(t=>{console.log("token_____",t);let s=t.data.token;axiosapi.defaults.headers.common["X-Requested-With"]="XMLHttpRequest",axiosapi.defaults.headers.common["X-CSRF-TOKEN"]=s,console.log("token_____",s)}).catch(t=>{console.error("Error fetching CSRF token:",t)})});const A=()=>{var t;(t=y.value)==null||t.validate().then(({valid:s})=>{s&&S()})};return(t,s)=>{const u=X("RouterLink"),m=O;return k(),C($,null,[e(u,{to:"/"},{default:o(()=>[l("div",te,[e(a(G),{nodes:a(h).app.logo},null,8,["nodes"]),l("h1",oe,R(a(h).app.title),1)])]),_:1}),e(q,{"no-gutters":"",class:"auth-wrapper bg-surface"},{default:o(()=>[e(d,{md:"8",class:"d-none d-md-flex"},{default:o(()=>[l("div",se,[l("div",le,[e(J,{"max-width":"700",src:a(z),class:"auth-illustration"},null,8,["src"])])])]),_:1}),e(d,{cols:"12",md:"4",class:"auth-card-v2 d-flex align-center justify-center"},{default:o(()=>[e(Q,{flat:"","max-width":500,class:"mt-12 mt-sm-0 pa-6"},{default:o(()=>[e(g,null,{default:o(()=>[l("h4",re,[i(" Welcome to "),l("span",ne,R(a(h).app.title),1),i("! 👋🏻 ")]),ie]),_:1}),e(g,null,{default:o(()=>[e(Y,{color:"primary",variant:"tonal"},{default:o(()=>[de,me]),_:1})]),_:1}),e(g,null,{default:o(()=>[e(a(ee),{ref_key:"refVForm",ref:y,onSubmit:I(A,["prevent"])},{default:o(()=>[e(q,null,{default:o(()=>[e(d,{cols:"12"},{default:o(()=>[e(m,{modelValue:a(r).email,"onUpdate:modelValue":s[0]||(s[0]=n=>a(r).email=n),label:"Email",placeholder:"johndoe@email.com",type:"email",autofocus:"",rules:["requiredValidator"in t?t.requiredValidator:a(w),"emailValidator"in t?t.emailValidator:a(N)]},null,8,["modelValue","rules"])]),_:1}),e(d,{cols:"12"},{default:o(()=>[e(m,{modelValue:a(r).password,"onUpdate:modelValue":s[1]||(s[1]=n=>a(r).password=n),label:"Password",placeholder:"············",rules:["requiredValidator"in t?t.requiredValidator:a(w)],type:a(p)?"text":"password","error-messages":a(x).password,"append-inner-icon":a(p)?"bx-hide":"bx-show","onClick:appendInner":s[2]||(s[2]=n=>p.value=!a(p))},null,8,["modelValue","rules","type","error-messages","append-inner-icon"]),l("div",ce,[e(ae,{modelValue:a(_),"onUpdate:modelValue":s[3]||(s[3]=n=>M(_)?_.value=n:null),label:"Remember me"},null,8,["modelValue"]),e(u,{class:"text-primary",to:{name:"forgot-password"}},{default:o(()=>[i(" Forgot Password? ")]),_:1})]),l("div",ue,[a(f)?(k(),C("img",{key:0,src:a(f),alt:"Captcha Image",style:{"margin-right":"16px"}},null,8,pe)):L("",!0),e(m,{modelValue:a(r).recaptcha,"onUpdate:modelValue":s[4]||(s[4]=n=>a(r).recaptcha=n),type:"text",placeholder:"Enter captcha value","append-inner-icon":"bx-refresh","onClick:appendInner":v},null,8,["modelValue"])]),e(U,{block:"",type:"submit"},{default:o(()=>[i(" Login ")]),_:1})]),_:1}),e(d,{cols:"12",class:"text-body-1 text-center"},{default:o(()=>[fe,e(u,{class:"text-primary ms-1 d-inline-block text-body-1",to:{name:"register"}},{default:o(()=>[i(" Create an account ")]),_:1})]),_:1}),e(d,{cols:"12",class:"d-flex align-center"},{default:o(()=>[e(F),_e,e(F)]),_:1}),e(d,{cols:"12",class:"text-center"},{default:o(()=>[e(W)]),_:1})]),_:1})]),_:1},512)]),_:1})]),_:1})]),_:1})]),_:1})],64)}}};export{ze as default};
