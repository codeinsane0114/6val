import{a5 as F,bI as M,a6 as R,bV as $,cq as A,az as z,aA as N,aB as T,bJ as w,aC as q,aL as H,$ as s,a9 as D,cT as E,a8 as J,bM as U,ac as j,b as i,F as k,al as G,q as K,t as O}from"./main-BpgBUGps.js";const Q=F({name:String,itemAriaLabel:{type:String,default:"$vuetify.rating.ariaLabel.item"},activeColor:String,color:String,clearable:Boolean,disabled:Boolean,emptyIcon:{type:M,default:"$ratingEmpty"},fullIcon:{type:M,default:"$ratingFull"},halfIncrements:Boolean,hover:Boolean,length:{type:[Number,String],default:5},readonly:Boolean,modelValue:{type:[Number,String],default:0},itemLabels:Array,itemLabelPosition:{type:String,default:"top",validator:e=>["top","bottom"].includes(e)},ripple:Boolean,...R(),...$(),...A(),...z(),...N()},"VRating"),X=T()({name:"VRating",props:Q(),emits:{"update:modelValue":e=>!0},setup(e,C){let{slots:u}=C;const{t:f}=w(),{themeClasses:P}=q(e),h=H(e,"modelValue"),c=s(()=>D(parseFloat(h.value),0,+e.length)),y=s(()=>E(Number(e.length),1)),I=s(()=>y.value.flatMap(a=>e.halfIncrements?[a-.5,a]:[a])),d=J(-1),g=s(()=>I.value.map(a=>{const t=e.hover&&d.value>-1,n=c.value>=a,l=d.value>=a,o=(t?l:n)?e.fullIcon:e.emptyIcon,b=e.activeColor??e.color,v=n||l?b:e.color;return{isFilled:n,isHovered:l,icon:o,color:v}})),B=s(()=>[0,...I.value].map(a=>{function t(){d.value=a}function n(){d.value=-1}function l(){e.disabled||e.readonly||(h.value=c.value===a&&e.clearable?0:a)}return{onMouseenter:e.hover?t:void 0,onMouseleave:e.hover?n:void 0,onClick:l}})),L=s(()=>e.name??`v-rating-${U()}`);function m(a){var S,_;let{value:t,index:n,showStar:l=!0}=a;const{onMouseenter:r,onMouseleave:o,onClick:b}=B.value[n+1],v=`${L.value}-${String(t).replace(".","-")}`,x={color:(S=g.value[n])==null?void 0:S.color,density:e.density,disabled:e.disabled,icon:(_=g.value[n])==null?void 0:_.icon,ripple:e.ripple,size:e.size,variant:"plain"};return i(k,null,[i("label",{for:v,class:{"v-rating__item--half":e.halfIncrements&&t%1>0,"v-rating__item--full":e.halfIncrements&&t%1===0},onMouseenter:r,onMouseleave:o,onClick:b},[i("span",{class:"v-rating__hidden"},[f(e.itemAriaLabel,t,e.length)]),l?u.item?u.item({...g.value[n],props:x,value:t,index:n,rating:c.value}):i(G,K({"aria-label":f(e.itemAriaLabel,t,e.length)},x),null):void 0]),i("input",{class:"v-rating__hidden",name:L.value,id:v,type:"radio",value:t,checked:c.value===t,tabindex:-1,readonly:e.readonly,disabled:e.disabled},null)])}function V(a){return u["item-label"]?u["item-label"](a):a.label?i("span",null,[a.label]):i("span",null,[O(" ")])}return j(()=>{var t;const a=!!((t=e.itemLabels)!=null&&t.length)||u["item-label"];return i(e.tag,{class:["v-rating",{"v-rating--hover":e.hover,"v-rating--readonly":e.readonly},P.value,e.class],style:e.style},{default:()=>[i(m,{value:0,index:-1,showStar:!1},null),y.value.map((n,l)=>{var r,o;return i("div",{class:"v-rating__wrapper"},[a&&e.itemLabelPosition==="top"?V({value:n,index:l,label:(r=e.itemLabels)==null?void 0:r[l]}):void 0,i("div",{class:"v-rating__item"},[e.halfIncrements?i(k,null,[i(m,{value:n-.5,index:l*2},null),i(m,{value:n,index:l*2+1},null)]):i(m,{value:n,index:l},null)]),a&&e.itemLabelPosition==="bottom"?V({value:n,index:l,label:(o=e.itemLabels)==null?void 0:o[l]}):void 0])})]})}),{}}});export{X as V};
