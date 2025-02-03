"use strict";(self.webpackChunkportal_project=self.webpackChunkportal_project||[]).push([[162],{162:(n,e,t)=>{t.r(e),t.d(e,{UrlSetContext:()=>Y,default:()=>nn});var r,s=t(7528),o=t(5043),a=t(3003),i=t(3592),c=t(5732),l=t(6580),d=t(5464),x=t(2163),p=t(2576),u=t(6922),h=t(579);const g=(0,d.Ay)(p.A)(r||(r=(0,s.A)(["\n  width: 200px;\n  background: var(--black);\n  border: 2px solid var(--green);\n  box-sizing: content-box;\n\n  .ant-card-meta-detail {\n    display: flex;\n    justify-content: center;\n  }\n\n  .ant-card-body {\n    border-top: 2px solid var(--green);\n  }\n\n  .ant-card-meta-title {\n    color: var(--orange);\n  }\n"])));function j(n){let{data:e}=n;return(0,h.jsx)(g,{cover:(0,h.jsx)("img",{width:200,height:200,alt:"product_image",src:e.set_img_url}),children:(0,h.jsx)(u.A,{title:e.name})})}var f,y,v,A=t(1462);const m=d.Ay.div(f||(f=(0,s.A)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n"]))),b=d.Ay.p(y||(y=(0,s.A)(["\n  color: var(--green);\n  margin-top: 0px;\n"]))),w=(0,d.Ay)(l.N_)(v||(v=(0,s.A)(["\n  margin: 10px;\n  text-decoration: none;\n  outline: none;\n\n  &:hover,\n  &:focus-visible {\n    cursor: pointer;\n    transform: perspective(100px) translateZ(10px);\n  }\n"])));function k(){const n=(0,a.d4)((n=>n.page.page)),e=(0,a.d4)((n=>n.response.responses)),t=(0,o.useContext)(Y),r=(0,a.wA)();return e[n]?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(b,{children:"\u041f\u043e\u043a\u0430\u0437\u0430\u043d\u043e ".concat(10*(n-1)+e[n].results.length," \u0438\u0437 ").concat(e[n].count," \u0442\u043e\u0432\u0430\u0440\u043e\u0432")}),0===e[n].count?(0,h.jsx)(b,{style:{color:"var(--orange)"},children:"\u0423\u0432\u044b, \u043f\u043e \u0434\u0430\u043d\u043d\u043e\u043c\u0443 \u0437\u0430\u043f\u0440\u043e\u0441\u0443 \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e."}):(0,h.jsx)(m,{children:e[n].results.map(((e,t)=>{let r="".concat(n,"/").concat(e.set_num);return(0,h.jsx)(w,{style:{margin:10,textDecoration:"none",outline:"none"},to:r,children:(0,h.jsx)(j,{data:e})},e.set_num)}))}),(0,h.jsx)(A.m,{counter:n,leftCircleFunction:function(){1!==n&&r((0,x.q5)())},rightCircleFunction:function(){let s=e[n].next;null!==s&&(t(s),r((0,x.M2)()))}})]}):null}var C,S=t(3620);const _=d.Ay.div(C||(C=(0,s.A)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n"]))),z={width:"200px",height:"260px",border:"2px solid var(--green)",borderRadius:"8px",margin:"10px",overflow:"hidden"};function F(){return(0,h.jsxs)(_,{children:[(0,h.jsx)(S.c,{style:z}),(0,h.jsx)(S.c,{style:z}),(0,h.jsx)(S.c,{style:z}),(0,h.jsx)(S.c,{style:z}),(0,h.jsx)(S.c,{style:z}),(0,h.jsx)(S.c,{style:z}),(0,h.jsx)(S.c,{style:z}),(0,h.jsx)(S.c,{style:z}),(0,h.jsx)(S.c,{style:z}),(0,h.jsx)(S.c,{style:z})]})}var P;const O=d.Ay.div(P||(P=(0,s.A)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"])));function R(n){let{url:e,setFetch:t}=n;const r=(0,a.wA)(),s=(0,a.d4)((n=>n.page.page)),l=(0,a.d4)((n=>n.response.responses)),{data:d,error:x,isFetching:p}=(0,i.Kc)(e,{skip:!(e&&!l[s])});return(0,o.useEffect)((()=>{d&&r((0,c.f7)({page:s,data:d}))}),[d]),(0,o.useEffect)((()=>{t(p)}),[p]),(0,h.jsx)(O,{children:x?(0,h.jsx)("p",{style:{color:"var(--green)"},children:"Oh no, there was an error"}):p?(0,h.jsx)(F,{}):(0,h.jsx)(k,{})})}var U,E,L,$,q=t(2624),D=t(2289);const J=d.Ay.div(U||(U=(0,s.A)(["\n  display: flex;\n  align-items: center;\n  margin: 0px 10px 0px 10px;\n"]))),K=d.Ay.p(E||(E=(0,s.A)(["\n  color: var(--orange);\n  margin-right: 10px;\n"]))),M=d.Ay.div(L||(L=(0,s.A)(["\n  display: flex;\n"]))),N=(0,d.Ay)(q.A)($||($=(0,s.A)(["\n  &.ant-switch-checked {\n    background: var(--green);\n  }\n"])));function V(n){let{disabled:e,onClick:t}=n;const r=(0,a.wA)(),s=(0,a.d4)((n=>n.filterStore.filterState));function o(n){r(s===n?(0,D.$u)(void 0):(0,D.$u)(n)),t(s===n?void 0:n)}return(0,h.jsxs)(M,{children:[(0,h.jsxs)(J,{children:[(0,h.jsx)(K,{children:"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u0441\u0442\u0430\u0440\u044b\u0435:"}),(0,h.jsx)(N,{checked:!("year"!==s),onChange:()=>o("year"),disabled:e})]}),(0,h.jsxs)(J,{children:[(0,h.jsx)(K,{children:"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u043d\u043e\u0432\u044b\u0435:"}),(0,h.jsx)(N,{checked:!("-year"!==s),onChange:()=>o("-year"),disabled:e})]})]})}var Z,B,G,H=t(6543),I=t(6734),Q=t(3613);const T=d.Ay.div(Z||(Z=(0,s.A)(["\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  max-width: 1120px;\n  width: 100%;\n  margin: auto;\n"]))),W=d.Ay.div(B||(B=(0,s.A)(["\n  display: flex;\n  margin: 30px 0px 20px 0px;\n"]))),X=d.Ay.button(G||(G=(0,s.A)(["\n  outline: none;\n  border: 1px solid var(--orange);\n  background: var(--orange);\n  height: 32px;\n  box-sizing: border-box;\n  border-radius: 0px 6px 6px 0px;\n\n  &:hover,\n  &:focus-visible {\n    cursor: pointer;\n    border: 1px solid var(--green);\n    box-shadow: none;\n  }\n"]))),Y=(0,o.createContext)();function nn(){const[n,e]=(0,o.useState)(""),[t,r]=(0,o.useState)(!1),s=(0,a.wA)(),i=(0,a.d4)((n=>n.filterStore.filterState)),l=(0,a.d4)((n=>n.inputStore.inputStore));return(0,h.jsx)(Y.Provider,{value:e,children:(0,h.jsxs)(T,{children:[(0,h.jsxs)(W,{children:[(0,h.jsx)(I.pd,{value:l,onChangeValue:n=>s((0,Q.J5)(n.target.value))}),(0,h.jsx)(X,{onClick:function(){const t=new URL(H.O);""!==l&&t.searchParams.set("search",l),i&&t.searchParams.set("ordering",i);const r=t.toString();r!==n&&(e(r),s((0,x.zC)()),s((0,c.zw)()))},disabled:t,children:"\u041f\u043e\u0438\u0441\u043a"})]}),(0,h.jsx)(V,{disabled:t,onClick:n=>{const t=new URL(H.O);""!==l&&t.searchParams.set("search",l),n&&t.searchParams.set("ordering",n);const r=t.toString();e(r),s((0,x.zC)()),s((0,c.zw)())}}),(0,h.jsx)(R,{url:n,setFetch:r})]})})}}}]);
//# sourceMappingURL=162.15e53a4d.chunk.js.map