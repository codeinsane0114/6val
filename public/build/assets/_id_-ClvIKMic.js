import{V as I}from"./VNodeRenderer-BTYogJaJ.js";import{r as h,bb as $,m as e,c as w,b as s,e as a,aZ as D,o as v,d as t,H as k,v as o,F as O,h as N,x as f,al as d,t as c,i as P}from"./main-BpgBUGps.js";import{_ as R}from"./InvoiceAddPaymentDrawer-CAj79adp.js";import{_ as A}from"./InvoiceSendInvoiceDrawer-B1tFn2Wc.js";import{u as E}from"./useApi-DdK-gkOH.js";import{V,a as b}from"./VRow-DcLldsAi.js";import{V as q}from"./VAlert-B9i9L_5n.js";import{V as S}from"./VCard-DPA8ST1d.js";import{V as L}from"./VTable-BGk_-fzG.js";import{V as C}from"./VDivider-CPy3CxIk.js";import{V as U}from"./VCardText-RhVa6W5U.js";import"./AppTextarea-CSkT_cUL.js";import"./form-jV7EneQK.js";/* empty css                   */import"./VCounter-B6UOvRBl.js";import"./VImg-MA4fhMLa.js";import"./VField-CsvBDBUR.js";import"./easing-CjukEv2V.js";import"./VInput-h-v4JtUG.js";import"./forwardRefs-C-GTDzx5.js";import"./AppSelect-crBF-FCt.js";import"./VSelect-CvnWonW6.js";import"./VTextField-DNnTNwAs.js";import"./VList-Bu48BGuL.js";import"./ssrBoot-Cao_hl35.js";import"./VAvatar-B9R7oHU8.js";import"./dialog-transition-Dw95iG-S.js";import"./VMenu-D0wOrHxC.js";import"./VOverlay-BSwVgU5G.js";import"./delay-CiIYTbkJ.js";import"./lazy-CKzIgbSD.js";import"./scopeId-D5DaYZNr.js";import"./VCheckboxBtn-KnKlC77n.js";import"./VSelectionControl-tBJoG7de.js";import"./VChip-Gdsswa87.js";import"./VSlideGroup-qhrbewnN.js";import"./AppDateTimePicker-CAkHnYZf.js";import"./AppTextField-CidaaHzM.js";import"./AppDrawerHeaderSection-3Bs6Y9hY.js";import"./VSpacer-BwkbVUnR.js";/* empty css              */import"./vue3-perfect-scrollbar.esm-BBUBQ5qB.js";import"./VForm-HbYQbjWg.js";import"./VNavigationDrawer-BkJcA9O0.js";const W={key:0},j={class:"invoice-header-preview d-flex flex-wrap justify-space-between flex-column flex-sm-row print-row bg-var-theme-background gap-6 rounded pa-6 mb-6"},F={class:"d-flex align-center app-logo mb-6"},M={class:"app-logo-title"},z=t("h6",{class:"text-h6 font-weight-regular"}," Office 149, 450 South Brand Brooklyn ",-1),G=t("h6",{class:"text-h6 font-weight-regular"}," San Diego County, CA 91905, USA ",-1),H=t("h6",{class:"text-h6 font-weight-regular"}," +1 (123) 456 7891, +44 (876) 543 2198 ",-1),Y={class:"text-h5 mb-6"},J={class:"text-h6 mb-1"},Q=t("span",{class:"font-weight-regular"},"Date Issued: ",-1),Z={class:"text-h6"},K=t("span",{class:"font-weight-regular"},"Due Date: ",-1),X=t("h6",{class:"text-h6 mb-4"}," Invoice To: ",-1),tt={class:"mb-0 text-body-1"},et={class:"mb-0 text-body-1"},st={class:"mb-0 text-body-1"},ot={class:"mb-0 text-body-1"},at={class:"mb-0 text-body-1"},nt=t("h6",{class:"text-h6 mb-4"}," Bill To: ",-1),lt={class:"text-body-1"},it=t("td",{class:"pe-4"}," Total Due: ",-1),rt=t("td",{class:"pe-4"}," Bank Name: ",-1),ct=t("td",{class:"pe-4"}," Country: ",-1),dt=t("td",{class:"pe-4"}," IBAN: ",-1),pt=t("td",{class:"pe-4"}," SWIFT Code: ",-1),_t=t("thead",null,[t("tr",null,[t("th",{scope:"col"}," ITEM "),t("th",{scope:"col"}," DESCRIPTION "),t("th",{scope:"col",class:"text-center"}," HOURS "),t("th",{scope:"col",class:"text-center"}," QTY "),t("th",{scope:"col",class:"text-center"}," TOTAL ")])],-1),mt={class:"text-base"},ut={class:"text-no-wrap"},ht={class:"text-no-wrap"},ft={class:"text-center"},bt={class:"text-center"},xt={class:"text-center"},yt={class:"d-flex justify-space-between flex-column flex-sm-row print-row"},wt=t("div",{class:"mb-2"},[t("div",{class:"d-flex align-center mb-1"},[t("h6",{class:"text-h6 me-2"}," Salesperson: "),t("span",{class:"text-body-1"},"Jenny Parker")]),t("p",{class:"text-body-1"}," Thanks for your business ")],-1),vt={class:"w-100"},gt={class:"text-body-1"},Dt=t("td",{class:"pe-16"}," Subtotal: ",-1),kt=t("h6",{class:"text-h6"}," $1800 ",-1),Vt=[kt],St=t("td",{class:"pe-16"}," Discount: ",-1),Ct=t("h6",{class:"text-h6"}," $28 ",-1),Tt=[Ct],Bt=t("td",{class:"pe-16"}," Tax: ",-1),It=t("h6",{class:"text-h6"}," 21% ",-1),$t=[It],Ot={class:"w-100"},Nt={class:"text-body-1"},Pt=t("td",{class:"pe-16"}," Total: ",-1),Rt=t("h6",{class:"text-h6"}," $1690 ",-1),At=[Rt],Et=t("p",{class:"mb-0 text-body-1"},[t("span",{class:"text-high-emphasis font-weight-medium me-1"}," Note: "),t("span",null,"It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!")],-1),qt={class:"d-flex flex-wrap gap-4"},Lt={key:1},$e={__name:"[id]",async setup(Ut){let p,g;const x=P(),_=h(!1),m=h(!1),{data:y}=([p,g]=$(()=>E(`/apps/invoice/${Number(x.params.id)}`)),p=await p,g(),p),l=h(),r=h();y.value&&(l.value=y.value.invoice,r.value=y.value.paymentDetails);const T=[{name:"Premium Branding Package",description:"Branding & Promotion",qty:1,hours:15,price:32},{name:"SMM",description:"Social media templates",qty:1,hours:14,price:28},{name:"Web Design",description:"Web designing package",qty:1,hours:12,price:24},{name:"SEO",description:"Search engine optimization",qty:1,hours:5,price:22}],B=()=>{window.print()};return(u,i)=>e(l)&&e(r)?(v(),w("section",W,[s(V,null,{default:a(()=>[s(b,{cols:"12",md:"9"},{default:a(()=>[s(S,{class:"invoice-preview-wrapper pa-6 pa-sm-12"},{default:a(()=>[t("div",j,[t("div",null,[t("div",F,[s(e(I),{nodes:e(k).app.logo},null,8,["nodes"]),t("h6",M,o(e(k).app.title),1)]),z,G,H]),t("div",null,[t("h5",Y," Invoice #"+o(e(l).id),1),t("h6",J,[Q,t("span",null,o(new Date(e(l).issuedDate).toLocaleDateString("en-GB")),1)]),t("h6",Z,[K,t("span",null,o(new Date(e(l).dueDate).toLocaleDateString("en-GB")),1)])])]),s(V,{class:"print-row mb-6"},{default:a(()=>[s(b,{class:"text-no-wrap"},{default:a(()=>[X,t("p",tt,o(e(l).client.name),1),t("p",et,o(e(l).client.company),1),t("p",st,o(e(l).client.address)+", "+o(e(l).client.country),1),t("p",ot,o(e(l).client.contact),1),t("p",at,o(e(l).client.companyEmail),1)]),_:1}),s(b,{class:"text-no-wrap"},{default:a(()=>[nt,t("table",null,[t("tbody",lt,[t("tr",null,[it,t("td",null,o(e(r).totalDue),1)]),t("tr",null,[rt,t("td",null,o(e(r).bankName),1)]),t("tr",null,[ct,t("td",null,o(e(r).country),1)]),t("tr",null,[dt,t("td",null,o(e(r).iban),1)]),t("tr",null,[pt,t("td",null,o(e(r).swiftCode),1)])])])]),_:1})]),_:1}),s(L,{class:"invoice-preview-table border text-high-emphasis overflow-hidden mb-6"},{default:a(()=>[_t,t("tbody",mt,[(v(),w(O,null,N(T,n=>t("tr",{key:n.name},[t("td",ut,o(n.name),1),t("td",ht,o(n.description),1),t("td",ft,o(n.hours),1),t("td",bt,o(n.qty),1),t("td",xt," $"+o(n.price),1)])),64))])]),_:1}),t("div",yt,[wt,t("div",null,[t("table",vt,[t("tbody",gt,[t("tr",null,[Dt,t("td",{class:f(u.$vuetify.locale.isRtl?"text-start":"text-end")},Vt,2)]),t("tr",null,[St,t("td",{class:f(u.$vuetify.locale.isRtl?"text-start":"text-end")},Tt,2)]),t("tr",null,[Bt,t("td",{class:f(u.$vuetify.locale.isRtl?"text-start":"text-end")},$t,2)])])]),s(C,{class:"my-2"}),t("table",Ot,[t("tbody",Nt,[t("tr",null,[Pt,t("td",{class:f(u.$vuetify.locale.isRtl?"text-start":"text-end")},At,2)])])])])]),s(C,{class:"my-6 border-dashed"}),Et]),_:1})]),_:1}),s(b,{cols:"12",md:"3",class:"d-print-none"},{default:a(()=>[s(S,null,{default:a(()=>[s(U,null,{default:a(()=>[s(d,{block:"","prepend-icon":"bx-paper-plane",class:"mb-4",onClick:i[0]||(i[0]=n=>m.value=!0)},{default:a(()=>[c(" Send Invoice ")]),_:1}),s(d,{block:"",color:"secondary",variant:"tonal",class:"mb-4"},{default:a(()=>[c(" Download ")]),_:1}),t("div",qt,[s(d,{variant:"tonal",color:"secondary",class:"flex-grow-1",onClick:B},{default:a(()=>[c(" Print ")]),_:1}),s(d,{color:"secondary",variant:"tonal",class:"mb-4 flex-grow-1",to:{name:"apps-invoice-edit-id",params:{id:e(x).params.id}}},{default:a(()=>[c(" Edit ")]),_:1},8,["to"])]),s(d,{block:"","prepend-icon":"bx-dollar",color:"success",onClick:i[1]||(i[1]=n=>_.value=!0)},{default:a(()=>[c(" Add Payment ")]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),s(R,{isDrawerOpen:e(_),"onUpdate:isDrawerOpen":i[2]||(i[2]=n=>D(_)?_.value=n:null)},null,8,["isDrawerOpen"]),s(A,{isDrawerOpen:e(m),"onUpdate:isDrawerOpen":i[3]||(i[3]=n=>D(m)?m.value=n:null)},null,8,["isDrawerOpen"])])):(v(),w("section",Lt,[s(q,{type:"error",variant:"tonal"},{default:a(()=>[c(" Invoice with ID "+o(e(x).params.id)+" not found! ",1)]),_:1})]))}};export{$e as default};
