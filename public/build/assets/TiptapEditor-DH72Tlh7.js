import{u as x,S as A,P as y,U as k,E as C}from"./index-D2c9LgJT.js";import{T as b}from"./index-CP92O-j7.js";import{r as V,w as h,a as T,o as d,c as u,m as t,b as n,e as l,a3 as r,y as c,f as z}from"./main-BpgBUGps.js";import{V as $}from"./VDivider-CPy3CxIk.js";const B={key:0,class:"d-flex gap-2 py-2 px-6 flex-wrap align-center editor"},I={__name:"TiptapEditor",props:{modelValue:{type:String,required:!0},placeholder:{type:String,required:!1},isDivider:{type:Boolean,required:!1,default:!0}},emits:["update:modelValue"],setup(f,{emit:m}){const s=f,v=m,g=V(),e=x({content:s.modelValue,extensions:[A,b.configure({types:["heading","paragraph"]}),y.configure({placeholder:s.placeholder??"Write something here..."}),k],onUpdate(){e.value&&v("update:modelValue",e.value.getHTML())}});return h(()=>s.modelValue,()=>{var i,o;((i=e.value)==null?void 0:i.getHTML())!==s.modelValue&&((o=e.value)==null||o.commands.setContent(s.modelValue))}),(p,i)=>{const o=T("IconBtn");return d(),u("div",null,[t(e)?(d(),u("div",B,[n(o,{size:"small",rounded:"",variant:t(e).isActive("bold")?"tonal":"text",color:t(e).isActive("bold")?"primary":"default",onClick:i[0]||(i[0]=a=>t(e).chain().focus().toggleBold().run())},{default:l(()=>[n(r,{icon:"bx-bold"})]),_:1},8,["variant","color"]),n(o,{size:"small",rounded:"",variant:t(e).isActive("underline")?"tonal":"text",color:t(e).isActive("underline")?"primary":"default",onClick:i[1]||(i[1]=a=>t(e).commands.toggleUnderline())},{default:l(()=>[n(r,{icon:"bx-underline"})]),_:1},8,["variant","color"]),n(o,{size:"small",rounded:"",variant:t(e).isActive("italic")?"tonal":"text",color:t(e).isActive("italic")?"primary":"default",onClick:i[2]||(i[2]=a=>t(e).chain().focus().toggleItalic().run())},{default:l(()=>[n(r,{icon:"bx-italic",class:"font-weight-medium"})]),_:1},8,["variant","color"]),n(o,{size:"small",rounded:"",variant:t(e).isActive("strike")?"tonal":"text",color:t(e).isActive("strike")?"primary":"default",onClick:i[3]||(i[3]=a=>t(e).chain().focus().toggleStrike().run())},{default:l(()=>[n(r,{icon:"bx-strikethrough"})]),_:1},8,["variant","color"]),n(o,{size:"small",rounded:"",variant:t(e).isActive({textAlign:"left"})?"tonal":"text",color:t(e).isActive({textAlign:"left"})?"primary":"default",onClick:i[4]||(i[4]=a=>t(e).chain().focus().setTextAlign("left").run())},{default:l(()=>[n(r,{icon:"bx-align-left"})]),_:1},8,["variant","color"]),n(o,{size:"small",rounded:"",color:t(e).isActive({textAlign:"center"})?"primary":"default",variant:t(e).isActive({textAlign:"center"})?"tonal":"text",onClick:i[5]||(i[5]=a=>t(e).chain().focus().setTextAlign("center").run())},{default:l(()=>[n(r,{icon:"bx-align-middle"})]),_:1},8,["color","variant"]),n(o,{size:"small",rounded:"",variant:t(e).isActive({textAlign:"right"})?"tonal":"text",color:t(e).isActive({textAlign:"right"})?"primary":"default",onClick:i[6]||(i[6]=a=>t(e).chain().focus().setTextAlign("right").run())},{default:l(()=>[n(r,{icon:"bx-align-right"})]),_:1},8,["variant","color"]),n(o,{size:"small",rounded:"",variant:t(e).isActive({textAlign:"justify"})?"tonal":"text",color:t(e).isActive({textAlign:"justify"})?"primary":"default",onClick:i[7]||(i[7]=a=>t(e).chain().focus().setTextAlign("justify").run())},{default:l(()=>[n(r,{icon:"bx-align-justify"})]),_:1},8,["variant","color"])])):c("",!0),s.isDivider?(d(),z($,{key:1})):c("",!0),n(t(C),{ref_key:"editorRef",ref:g,editor:t(e)},null,8,["editor"])])}}};export{I as _};
