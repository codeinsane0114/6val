import{_ as E}from"./AppTextField-CidaaHzM.js";import{R as z}from"./videojs-player.esm-Bt1UivdH.js";import{_ as N}from"./AppSelect-crBF-FCt.js";import{u as Q}from"./useApi-DdK-gkOH.js";import{c as W}from"./createUrl-DNLxE3Ao.js";import{_ as H}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{V as O}from"./VSwitch-lAdZ86xz.js";import{V as P,a as C}from"./VRow-DcLldsAi.js";import{V as f}from"./VCard-DPA8ST1d.js";import{V as X}from"./VImg-MA4fhMLa.js";import{V as h}from"./VCardText-RhVa6W5U.js";import{V as Y}from"./VChip-Gdsswa87.js";import{r as _,bb as K,$ as F,w as Z,o as l,f as $,e as s,b as e,d as t,m as a,aZ as I,c as y,F as M,h as R,t as g,v as i,a3 as w,bc as J,al as k,y as G,a as ee,Q as te,R as se,x as B}from"./main-BpgBUGps.js";import{V as oe}from"./VPagination-CNJZqHFv.js";import{u as ae}from"./useGenerateImageVariant-DW3DZK7L.js";import{V as le}from"./VAvatar-B9R7oHU8.js";import"./form-jV7EneQK.js";import"./VTextField-DNnTNwAs.js";/* empty css                   */import"./VCounter-B6UOvRBl.js";import"./VField-CsvBDBUR.js";import"./easing-CjukEv2V.js";import"./VInput-h-v4JtUG.js";import"./forwardRefs-C-GTDzx5.js";import"./_commonjsHelpers-BosuxZz1.js";import"./VSelect-CvnWonW6.js";import"./VList-Bu48BGuL.js";import"./ssrBoot-Cao_hl35.js";import"./VDivider-CPy3CxIk.js";import"./dialog-transition-Dw95iG-S.js";import"./VMenu-D0wOrHxC.js";import"./VOverlay-BSwVgU5G.js";import"./delay-CiIYTbkJ.js";import"./lazy-CKzIgbSD.js";import"./scopeId-D5DaYZNr.js";import"./VCheckboxBtn-KnKlC77n.js";import"./VSelectionControl-tBJoG7de.js";import"./index-B3bPRkoL.js";/* empty css              */import"./VSlideGroup-qhrbewnN.js";const U=x=>(te("data-v-10eccdea"),x=x(),se(),x),re={class:"d-flex justify-space-between align-center flex-wrap gap-4 mb-6"},ie=U(()=>t("div",null,[t("h5",{class:"text-h5"}," My Courses "),t("div",{class:"text-body-1"}," Total 6 course you have purchased ")],-1)),ne={class:"d-flex flex-wrap gap-x-6 gap-y-4 align-center"},ce={key:0,class:"mb-6"},de={class:"px-2 pt-2"},ue={class:"d-flex justify-space-between align-center mb-4"},me={class:"d-flex"},pe={class:"text-h6 text-medium-emphasis align-center me-1"},_e={class:"text-body-1"},fe={class:"text-h5 mb-1"},he={key:0,class:"d-flex align-center mb-1"},ye={class:"text-body-1 my-auto"},ge={key:1,class:"mb-1"},xe=U(()=>t("span",{class:"text-success text-body-1"},"Completed",-1)),be={class:"d-flex flex-wrap gap-4"},ve={key:1},we=U(()=>t("h4",{class:"text-center text-h4 mb-6"}," No course found ",-1)),Ve=[we],Ce={__name:"AcademyMyCourses",props:{searchQuery:{type:String,required:!0}},async setup(x){let b,d;const n=x,V=_(6),u=_(1),v=_(),T=_(),r=_(!0),m=_("All Courses"),{data:A}=([b,d]=K(()=>Q(W("/apps/academy/courses",{query:{q:()=>n.searchQuery,hideCompleted:r,label:m,itemsPerPage:V,page:u,sortBy:v,orderBy:T}}))),b=await b,d(),b),S=F(()=>A.value.courses),L=F(()=>A.value.total);Z([r,m,()=>n.searchQuery],()=>{u.value=1});const j=p=>{if(p==="Web")return"primary";if(p==="Art")return"success";if(p==="UI/UX")return"error";if(p==="Psychology")return"warning";if(p==="Design")return"info"};return(p,c)=>{const q=N,D=ee("RouterLink");return l(),$(f,{class:"mb-6"},{default:s(()=>[e(h,null,{default:s(()=>[t("div",re,[ie,t("div",ne,[e(q,{modelValue:a(m),"onUpdate:modelValue":c[0]||(c[0]=o=>I(m)?m.value=o:null),items:[{title:"Web",value:"web"},{title:"Art",value:"art"},{title:"UI/UX",value:"ui/ux"},{title:"Psychology",value:"psychology"},{title:"Design",value:"design"},{title:"All Courses",value:"All Courses"}],style:{"min-inline-size":"260px"}},null,8,["modelValue"]),e(O,{modelValue:a(r),"onUpdate:modelValue":c[1]||(c[1]=o=>I(r)?r.value=o:null),label:"Hide Completed"},null,8,["modelValue"])])]),a(S).length?(l(),y("div",ce,[e(P,null,{default:s(()=>[(l(!0),y(M,null,R(a(S),o=>(l(),$(C,{key:o.id,cols:"12",md:"4",sm:"6"},{default:s(()=>[o?(l(),$(f,{key:0,flat:"",border:""},{default:s(()=>[t("div",de,[e(X,{src:o.tutorImg,class:"cursor-pointer",onClick:c[2]||(c[2]=()=>p.$router.push({name:"apps-academy-course-details"}))},null,8,["src"])]),e(h,null,{default:s(()=>[t("div",ue,[e(Y,{variant:"tonal",color:j(o.tags),density:"comfortable"},{default:s(()=>[g(i(o.tags),1)]),_:2},1032,["color"]),t("div",me,[t("h6",pe,i(o.rating),1),e(w,{icon:"bx-bxs-star",color:"warning",size:"20",class:"me-2"}),t("div",_e," ("+i(o.ratingCount)+") ",1)])]),t("h5",fe,[e(D,{to:{name:"apps-academy-course-details"},class:"course-title"},{default:s(()=>[g(i(o.courseTitle),1)]),_:2},1024)]),t("p",null,i(o.desc),1),o.completedTasks!==o.totalTasks?(l(),y("div",he,[e(w,{icon:"bx-time-five",size:"20",class:"me-1"}),t("span",ye,i(o.time),1)])):(l(),y("div",ge,[e(w,{icon:"bx-check",size:"20",color:"success",class:"me-1"}),xe])),e(J,{"model-value":o.completedTasks/o.totalTasks*100,rounded:"",color:"primary",height:"8",class:"mb-4"},null,8,["model-value"]),t("div",be,[e(k,{variant:"tonal",color:"secondary",class:"flex-grow-1",to:{name:"apps-academy-course-details"}},{prepend:s(()=>[e(w,{icon:"bx-rotate-right",class:"flip-in-rtl"})]),default:s(()=>[g(" Start Over ")]),_:1}),o.completedTasks!==o.totalTasks?(l(),$(k,{key:0,variant:"tonal",class:"flex-grow-1",to:{name:"apps-academy-course-details"}},{append:s(()=>[e(w,{icon:"bx-chevron-right",class:"flip-in-rtl"})]),default:s(()=>[g(" Continue ")]),_:1})):G("",!0)])]),_:2},1024)]),_:2},1024)):G("",!0)]),_:2},1024))),128))]),_:1})])):(l(),y("div",ve,Ve)),e(oe,{modelValue:a(u),"onUpdate:modelValue":c[3]||(c[3]=o=>I(u)?u.value=o:null),"active-color":"primary","first-icon":"bx-chevrons-left","last-icon":"bx-chevrons-right","show-first-last-page":"",length:Math.ceil(a(L)/a(V))},null,8,["modelValue","length"])]),_:1})]),_:1})}}},$e=H(Ce,[["__scopeId","data-v-10eccdea"]]),ke="/build/assets/academy-certificate-girl-aVsW7KRq.png",Ae="/build/assets/academy-courses-girl-DwMP5nbH.png",Ie="/build/assets/academy-course-illustration1-3jA_I8wV.png",Te="/build/assets/academy-course-illustration2-dark-IMaG0sSw.png",Be="/build/assets/academy-course-illustration2-light-P0fad4nP.png",Pe="/build/assets/guitar-course-poster-Yygh9Sa0.png",Ue="/build/assets/singing-course-poster-BcE4AhBB.png",Se=t("span",{class:"text-primary text-no-wrap"}," All in one place.",-1),ze=t("p",{class:"text-center text-wrap text-body-1 mx-auto mb-0"}," Grow your skill with the most reliable online courses and certifications in marketing, information technology, programming, and data science. ",-1),Fe={class:"d-flex justify-center align-center gap-4 flex-wrap"},Ge={class:"flex-grow-1",style:{"max-inline-size":"350px"}},Me=["src"],Re=["src"],Le={class:"mb-6"},je={class:"d-flex justify-space-between gap-6 align-center flex-column-reverse flex-sm-row"},qe={class:"text-center text-sm-start"},De={class:"text-body-1 mx-auto",style:{"max-inline-size":"300px"}},Ee=["src"],Ne={class:"d-flex flex-column align-center gap-y-4 h-100 justify-center"},Qe=t("h4",{class:"text-h4"}," Today's Free Courses ",-1),We=t("p",{class:"text-body-1 text-center mb-0"}," We offers 284 Free Online courses from top tutors and companies to help you start or advance your career skills. Learn online for free and fast today! ",-1),He={class:"px-2 pt-2"},Oe=t("h5",{class:"text-h5 mb-2"}," Your First Singing Lesson ",-1),Xe=t("p",{class:"text-body-1 mb-0"}," In the same way as any other artistic domain, singing lends itself perfectly to self-teaching. ",-1),Ye={class:"px-2 pt-2"},Ke=t("h5",{class:"text-h5 mb-2"}," Guitar for Beginners ",-1),Ze=t("p",{class:"text-body-1 mb-0"}," The Fender Acoustic Guitar is best choice for beginners and professionals. ",-1),Lt={__name:"my-course",setup(x){const b=ae(Be,Te),d=_("");return(n,V)=>{const u=E;return l(),y("div",null,[e(f,{class:"mb-6"},{default:s(()=>[e(h,{class:"py-12 position-relative"},{default:s(()=>[t("div",{class:B(["d-flex flex-column gap-y-4 mx-auto",n.$vuetify.display.mdAndUp?"w-50":n.$vuetify.display.xs?"w-100":"w-75"])},[t("h4",{class:B(["text-h4 text-center text-wrap mx-auto",n.$vuetify.display.mdAndUp?"w-75":"w-100"])},[g(" Education, talents, and career opportunities. "),Se],2),ze,t("div",Fe,[t("div",Ge,[e(u,{modelValue:a(d),"onUpdate:modelValue":V[0]||(V[0]=v=>I(d)?d.value=v:null),placeholder:"Find your course"},null,8,["modelValue"])]),e(k,{color:"primary",density:"comfortable",icon:"bx-search",class:"rounded"})])],2),t("img",{src:a(Ie),class:"illustration1 d-none d-md-block",height:"180"},null,8,Me),t("img",{src:a(b),class:"illustration2 d-none d-md-block",height:"124"},null,8,Re)]),_:1})]),_:1}),e($e,{"search-query":a(d)},null,8,["search-query"]),t("div",Le,[e(P,null,{default:s(()=>[(l(!0),y(M,null,R([{title:"Earn a Certificate",description:"Get the right professional certificate program for you.",btnText:"View Programs",color:"primary",image:a(ke)},{title:"Best Rated Courses",description:"Enroll now in the most popular and best rated courses.",btnText:"View Courses",color:"error",image:a(Ae)}],({title:v,btnText:T,color:r,description:m,image:A})=>(l(),$(C,{key:v,cols:"12",md:"6"},{default:s(()=>[e(f,{flat:"",color:`rgba(var(--v-theme-${r}), var(--v-selected-opacity))`},{default:s(()=>[e(h,null,{default:s(()=>[t("div",je,[t("div",qe,[t("h5",{class:B(["text-h5 mb-2",`text-${r}`])},i(v),3),t("p",De,i(m),1),e(k,{color:r,size:"small"},{default:s(()=>[g(i(T),1)]),_:2},1032,["color"])]),t("img",{src:A,height:"127",class:"flip-in-rtl"},null,8,Ee)])]),_:2},1024)]),_:2},1032,["color"])]),_:2},1024))),128))]),_:1})]),e(f,null,{default:s(()=>[e(h,null,{default:s(()=>[e(P,null,{default:s(()=>[e(C,{cols:"12",md:"4"},{default:s(()=>[t("div",Ne,[e(le,{variant:"tonal",size:"52",rounded:"",color:"primary"},{default:s(()=>[e(w,{icon:"bx-gift",size:"36"})]),_:1}),Qe,We,e(k,null,{default:s(()=>[g("Get Premium Courses")]),_:1})])]),_:1}),e(C,{cols:"12",md:"4",sm:"6"},{default:s(()=>[e(f,{flat:"",border:""},{default:s(()=>[t("div",He,[e(a(z),{src:"https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",poster:a(Ue),controls:"","plays-inline":"",height:n.$vuetify.display.mdAndUp?200:150,class:"w-100 rounded"},null,8,["poster","height"])]),e(h,null,{default:s(()=>[Oe,Xe]),_:1})]),_:1})]),_:1}),e(C,{cols:"12",md:"4",sm:"6"},{default:s(()=>[e(f,{flat:"",border:""},{default:s(()=>[t("div",Ye,[e(a(z),{src:"https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-576p.mp4",poster:a(Pe),controls:"","plays-inline":"",height:n.$vuetify.display.mdAndUp?200:150,class:"w-100 rounded"},null,8,["poster","height"])]),e(h,null,{default:s(()=>[Ke,Ze]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})])}}};export{Lt as default};
