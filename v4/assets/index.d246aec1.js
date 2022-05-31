import{c as q,D as x,l as J,h as K,I as _}from"./use-translate.2660019b.js";import{n as A,m as B,c as L,t as O,a as Q,w as W}from"./with-install.87cec8a5.js";import{u as Z}from"./use-refs.c03004fa.js";import{u as $}from"./use-touch.d1be10ec.js";import{I as F}from"./index.17b6eda3.js";import{A as ee,x as te,D as oe,e as f}from"./vue-libs.df86f395.js";const[ae,m]=q("rate");function le(t,s,n,r){return t>=s?{status:"full",value:1}:t+.5>=s&&n&&!r?{status:"half",value:.5}:t+1>=s&&n&&r?{status:"half",value:Math.round((t-s+1)*1e10)/1e10}:{status:"void",value:0}}const se={size:A,icon:B("star"),color:String,count:L(5),gutter:A,readonly:Boolean,disabled:Boolean,voidIcon:B("star-o"),allowHalf:Boolean,voidColor:String,touchable:O,iconPrefix:String,modelValue:Q(0),disabledColor:String};var ne=ee({name:ae,props:se,emits:["change","update:modelValue"],setup(t,{emit:s}){const n=$(),[r,v]=Z(),p=te(),I=()=>t.readonly||t.disabled||!t.touchable,D=oe(()=>Array(+t.count).fill("").map((o,e)=>le(t.modelValue,e+1,t.allowHalf,t.readonly)));let l,u,h=Number.MAX_SAFE_INTEGER,g=Number.MIN_SAFE_INTEGER;const P=()=>{u=_(p);const o=r.value.map(_);l=[],o.forEach((e,a)=>{h=Math.min(e.top,h),g=Math.max(e.top,g),t.allowHalf?l.push({score:a+.5,left:e.left,top:e.top,height:e.height},{score:a+1,left:e.left+e.width/2,top:e.top,height:e.height}):l.push({score:a+1,left:e.left,top:e.top,height:e.height})})},S=(o,e)=>{for(let a=l.length-1;a>0;a--)if(e>=u.top&&e<=u.bottom){if(o>l[a].left&&e>=l[a].top&&e<=l[a].top+l[a].height)return l[a].score}else{const c=e<u.top?h:g;if(o>l[a].left&&l[a].top===c)return l[a].score}return t.allowHalf?.5:1},T=o=>{!t.disabled&&!t.readonly&&o!==t.modelValue&&(s("update:modelValue",o),s("change",o))},X=o=>{I()||(n.start(o),P())},G=o=>{if(!I()&&(n.move(o),n.isHorizontal())){const{clientX:e,clientY:a}=o.touches[0];J(o),T(S(e,a))}},Y=(o,e)=>{const{icon:a,size:c,color:y,count:N,gutter:V,voidIcon:w,disabled:i,voidColor:C,allowHalf:k,iconPrefix:E,disabledColor:z}=t,b=e+1,R=o.status==="full",d=o.status==="void",U=k&&o.value>0&&o.value<1;let H;V&&b!==+N&&(H={paddingRight:K(V)});const j=M=>{P(),T(k?S(M.clientX,M.clientY):b)};return f("div",{key:e,ref:v(e),role:"radio",style:H,class:m("item"),tabindex:i?void 0:0,"aria-setsize":N,"aria-posinset":b,"aria-checked":!d,onClick:j},[f(F,{size:c,name:R?a:w,class:m("icon",{disabled:i,full:R}),color:i?z:R?y:C,classPrefix:E},null),U&&f(F,{size:c,style:{width:o.value+"em"},name:d?w:a,class:m("icon",["half",{disabled:i,full:!d}]),color:i?z:d?C:y,classPrefix:E},null)])};return x(()=>t.modelValue),()=>f("div",{ref:p,role:"radiogroup",class:m({readonly:t.readonly,disabled:t.disabled}),tabindex:t.disabled?void 0:0,"aria-disabled":t.disabled,"aria-readonly":t.readonly,onTouchstart:X,onTouchmove:G},[D.value.map(Y)])}});const me=W(ne);export{me as R};
