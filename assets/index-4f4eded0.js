import{r as B,am as re,A as U,C as E,B as K,V as O,D as j,X as Z,a5 as ve,q as h,Z as P,a6 as fe,an as de,ao as he,o as F,l as ge,a8 as me,n as we,m as pe,$ as ye,k as $,a0 as L,a7 as G,ak as z,ap as be,aq as _,K as J,aj as Se}from"./index-ec12e08f.js";import{a as Te,u as Q}from"./index-769920f1.js";function ze(){const a=B([]),g=[];return re(()=>{a.value=[]}),[a,o=>(g[o]||(g[o]=r=>{a.value[o]=r}),g[o])]}const[ee,I]=U("swipe"),xe={loop:E,width:K,height:K,vertical:Boolean,autoplay:O(0),duration:O(500),touchable:E,lazyRender:Boolean,initialSwipe:O(0),indicatorColor:String,showIndicators:E,stopPropagation:E},te=Symbol(ee);var Ce=j({name:ee,props:xe,emits:["change","dragStart","dragEnd"],setup(a,{emit:g,slots:m}){const o=B(),r=B(),t=Z({rect:null,width:0,height:0,offset:0,active:0,swiping:!1});let b=!1;const v=Te(),{children:w,linkChildren:c}=ve(te),i=h(()=>w.length),l=h(()=>t[a.vertical?"height":"width"]),f=h(()=>a.vertical?v.deltaY.value:v.deltaX.value),y=h(()=>t.rect?(a.vertical?t.rect.height:t.rect.width)-l.value*i.value:0),M=h(()=>l.value?Math.ceil(Math.abs(y.value)/l.value):i.value),R=h(()=>i.value*l.value),A=h(()=>(t.active+i.value)%i.value),X=h(()=>{const e=a.vertical?"vertical":"horizontal";return v.direction.value===e}),ae=h(()=>{const e={transitionDuration:`${t.swiping?0:a.duration}ms`,transform:`translate${a.vertical?"Y":"X"}(${t.offset}px)`};if(l.value){const s=a.vertical?"height":"width",n=a.vertical?"width":"height";e[s]=`${R.value}px`,e[n]=a[n]?`${a[n]}px`:""}return e}),ie=e=>{const{active:s}=t;return e?a.loop?_(s+e,-1,i.value):_(s+e,0,M.value):s},Y=(e,s=0)=>{let n=e*l.value;a.loop||(n=Math.min(n,-y.value));let d=s-n;return a.loop||(d=_(d,y.value,0)),d},p=({pace:e=0,offset:s=0,emitChange:n})=>{if(i.value<=1)return;const{active:d}=t,u=ie(e),C=Y(u,s);if(a.loop){if(w[0]&&C!==y.value){const D=C<y.value;w[0].setOffset(D?R.value:0)}if(w[i.value-1]&&C!==0){const D=C>0;w[i.value-1].setOffset(D?-R.value:0)}}t.active=u,t.offset=C,n&&u!==d&&g("change",A.value)},k=()=>{t.swiping=!0,t.active<=-1?p({pace:i.value}):t.active>=i.value&&p({pace:-i.value})},ne=()=>{k(),v.reset(),z(()=>{t.swiping=!1,p({pace:-1,emitChange:!0})})},H=()=>{k(),v.reset(),z(()=>{t.swiping=!1,p({pace:1,emitChange:!0})})};let N;const T=()=>clearTimeout(N),x=()=>{T(),a.autoplay>0&&i.value>1&&(N=setTimeout(()=>{H(),x()},+a.autoplay))},S=(e=+a.initialSwipe)=>{if(!o.value)return;const s=()=>{var n,d;if(!L(o)){const u={width:o.value.offsetWidth,height:o.value.offsetHeight};t.rect=u,t.width=+((n=a.width)!=null?n:u.width),t.height=+((d=a.height)!=null?d:u.height)}i.value&&(e=Math.min(i.value-1,e),e===-1&&(e=i.value-1)),t.active=e,t.swiping=!0,t.offset=Y(e),w.forEach(u=>{u.setOffset(0)}),x()};L(o)?G().then(s):s()},V=()=>S(t.active);let W;const se=e=>{!a.touchable||e.touches.length>1||(v.start(e),b=!1,W=Date.now(),T(),k())},oe=e=>{a.touchable&&t.swiping&&(v.move(e),X.value&&(!a.loop&&(t.active===0&&f.value>0||t.active===i.value-1&&f.value<0)||(be(e,a.stopPropagation),p({offset:f.value}),b||(g("dragStart"),b=!0))))},q=()=>{if(!a.touchable||!t.swiping)return;const e=Date.now()-W,s=f.value/e;if((Math.abs(s)>.25||Math.abs(f.value)>l.value/2)&&X.value){const d=a.vertical?v.offsetY.value:v.offsetX.value;let u=0;a.loop?u=d>0?f.value>0?-1:1:0:u=-Math[f.value>0?"ceil":"floor"](f.value/l.value),p({pace:u,emitChange:!0})}else f.value&&p({pace:0});b=!1,t.swiping=!1,g("dragEnd"),x()},le=(e,s={})=>{k(),v.reset(),z(()=>{let n;a.loop&&e===i.value?n=t.active===0?0:e:n=e%i.value,s.immediate?z(()=>{t.swiping=!1}):t.swiping=!1,p({pace:n-t.active,emitChange:!0})})},ce=(e,s)=>{const n=s===A.value,d=n?{backgroundColor:a.indicatorColor}:void 0;return $("i",{style:d,class:I("indicator",{active:n})},null)},ue=()=>{if(m.indicator)return m.indicator({active:A.value,total:i.value});if(a.showIndicators&&i.value>1)return $("div",{class:I("indicators",{vertical:a.vertical})},[Array(i.value).fill("").map(ce)])};return Q({prev:ne,next:H,state:t,resize:V,swipeTo:le}),c({size:l,props:a,count:i,activeIndicator:A}),P(()=>a.initialSwipe,e=>S(+e)),P(i,()=>S(t.active)),P(()=>a.autoplay,x),P([fe,de],V),P(he(),e=>{e==="visible"?x():T()}),F(S),ge(()=>S(t.active)),me(()=>S(t.active)),we(T),pe(T),ye("touchmove",oe,{target:r}),()=>{var e;return $("div",{ref:o,class:I()},[$("div",{ref:r,style:ae.value,class:I("track",{vertical:a.vertical}),onTouchstartPassive:se,onTouchend:q,onTouchcancel:q},[(e=m.default)==null?void 0:e.call(m)]),ue()])}}});const Ie=J(Ce),[Pe,$e]=U("swipe-item");var Ae=j({name:Pe,setup(a,{slots:g}){let m;const o=Z({offset:0,inited:!1,mounted:!1}),{parent:r,index:t}=Se(te);if(!r)return;const b=h(()=>{const c={},{vertical:i}=r.props;return r.size.value&&(c[i?"height":"width"]=`${r.size.value}px`),o.offset&&(c.transform=`translate${i?"Y":"X"}(${o.offset}px)`),c}),v=h(()=>{const{loop:c,lazyRender:i}=r.props;if(!i||m)return!0;if(!o.mounted)return!1;const l=r.activeIndicator.value,f=r.count.value-1,y=l===0&&c?f:l-1,M=l===f&&c?0:l+1;return m=t.value===l||t.value===y||t.value===M,m}),w=c=>{o.offset=c};return F(()=>{G(()=>{o.mounted=!0})}),Q({setOffset:w}),()=>{var c;return $("div",{class:$e(),style:b.value},[v.value?(c=g.default)==null?void 0:c.call(g):null])}}});const Me=J(Ae);export{Ie as S,Me as a,ze as u};
