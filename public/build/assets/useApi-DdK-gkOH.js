import{ck as c,b8 as o,cl as n}from"./main-BpgBUGps.js";var i={BASE_URL:"/build/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const l=c({baseUrl:i.VITE_API_BASE_URL||"/api",fetchOptions:{headers:{Accept:"application/json"}},options:{refetch:!0,async beforeFetch({options:e}){const r=o("accessToken").value;return r&&(e.headers={...e.headers,Authorization:`Bearer ${r}`}),{options:e}},afterFetch(e){const{data:r,response:t}=e;let a=null;try{a=n(r)}catch(s){console.error(s)}return{data:a,response:t}}}});export{l as u};
