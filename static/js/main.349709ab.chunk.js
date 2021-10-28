(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{26:function(n,e,t){},34:function(n,e,t){"use strict";t.r(e);var c,r,a,o,i,b,l,d,s,j,u,p,x,h,O=t(0),g=t.n(O),f=t(11),m=t.n(f),w=t(19),y=(t(26),t(2)),v=t(3),C=v.a.h1(c||(c=Object(y.a)(["\n  font-size: 64px;\n  margin: 24px 24px;\n  color: rgb(93 203 152);\n"]))),k=v.a.h2(r||(r=Object(y.a)(["\n  color: rgb(75, 75, 75);\n  margin: 0;\n"]))),z=v.a.div(a||(a=Object(y.a)(["\n  display: flex;\n"]))),A=v.a.div(o||(o=Object(y.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 24px;\n  background-color: rgba(165, 230, 250, 0.3);\n  width: 65%;\n"]))),S=t(18),D=t(17),F=t.n(D),L=v.a.button(i||(i=Object(y.a)(["\n  height: 50px;\n  padding: 12px 24px;\n  font-size: 18px;\n  color: white;\n  box-shadow: rgb(0 0 0 / 15%) 2px 2px 3px;\n  background-color: rgb(93 203 152);\n  outline: none;\n  cursor: pointer;\n  border: none;\n"]))),J=t(1),Z=function(n){var e=n.children,t=n.onClick;return Object(J.jsx)(L,{onClick:t,children:e})},q=v.a.form(b||(b=Object(y.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 35%;\n  padding: 24px 32px;\n  background-color: rgba(67, 67, 67, 0.3);\n\n  & > button {\n    margin-top: 40px;\n  }\n"]))),B=v.a.label(l||(l=Object(y.a)(["\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-bottom: 24px;\n"]))),M=v.a.span(d||(d=Object(y.a)(["\n  margin-bottom: 16px;\n  font-weight: 600;\n  font-size: 24px;\n  color: rgb(75 75 75);\n"]))),N=v.a.input(s||(s=Object(y.a)(["\n  height: 40px;\n  padding: 8px 24px;\n  font-size: 18px;\n  box-shadow: rgb(0 0 0 / 15%) 2px 2px 3px;\n  background-color: rgba(228, 228, 228, 0.5);\n  outline: none;\n  border: none;\n"]))),T=t(36),E=t(6),I=Object(E.b)("contacts/add",(function(n,e){return{payload:{name:n,number:e,id:Object(T.a)()}}})),P=Object(E.b)("contacts/delete"),$=Object(E.b)("contacts/changeFilter"),G=t(7),H=function(){var n=Object(G.c)(),e=Object(O.useState)(""),t=Object(S.a)(e,2),c=t[0],r=t[1],a=Object(O.useState)(""),o=Object(S.a)(a,2),i=o[0],b=o[1],l=function(n){var e=n.currentTarget,t=e.name,c=e.value;"name"===t&&r(c),"number"===t&&b(c)},d=function(){r(""),b("")};return Object(J.jsxs)(q,{onSubmit:function(e){e.preventDefault(),function(e,t){n(I(e,t))}(c,i),d()},children:[Object(J.jsxs)(B,{children:[Object(J.jsx)(M,{children:"Name"}),Object(J.jsx)(N,{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,value:c,onChange:l})]}),Object(J.jsxs)(B,{children:[Object(J.jsx)(M,{children:"Number"}),Object(J.jsx)(N,{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:i,onChange:l})]}),Object(J.jsx)(Z,{type:"submit",children:"Add Contact"})]})};q.propTypes={onSubmit:F.a.func};var K,Q,R,U=v.a.ul(j||(j=Object(y.a)(["\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  width: 600px;\n"]))),V=v.a.li(u||(u=Object(y.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px 12px;\n  margin-bottom: 12px;\n  box-shadow: rgb(0 0 0 / 15%) 2px 2px 3px;\n  background-color: rgb(93 203 152 / 20%);\n"]))),W=v.a.span(p||(p=Object(y.a)(["\n  width: 40%;\n  margin-right: 12px;\n  font-weight: 600;\n  font-size: 24px;\n  color: rgb(75 75 75);\n"]))),X=v.a.span(x||(x=Object(y.a)(["\n  margin-right: 12px;\n  font-weight: 500;\n  font-size: 20px;\n  color: rgb(75 75 75);\n"]))),Y=v.a.p(h||(h=Object(y.a)(["\n  font-weight: 600;\n  font-size: 24px;\n  color: rgb(75 75 75);\n"]))),_=function(n,e){var t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(t)}))},nn=Object(G.b)((function(n){var e=n.contacts,t=e.items,c=e.filter;return{contacts:_(t,c)}}),(function(n){return{handleDeleteContact:function(e){return n(P(e))}}}))((function(n){var e=n.contacts,t=n.handleDeleteContact;return e.length>0?Object(J.jsx)(U,{children:e.map((function(n){var e=n.name,c=n.number,r=n.id;return Object(J.jsxs)(V,{id:r,children:[Object(J.jsx)(W,{children:e}),Object(J.jsx)(X,{children:c}),Object(J.jsx)(Z,{type:"button",onClick:function(){return t(r)},children:"Delete"})]},r)}))}):Object(J.jsx)(Y,{children:"Contact not found"})})),en=v.a.h3(K||(K=Object(y.a)(["\n  color: rgb(93 203 152);\n  font-weight: 600;\n"]))),tn=v.a.input(Q||(Q=Object(y.a)(["\n  width: 400px;\n  /* height: 40px; */\n  padding: 8px 24px;\n  margin-bottom: 24px;\n  font-size: 18px;\n  box-shadow: rgb(0 0 0 / 15%) 2px 2px 3px;\n  /* background-color: rgba(228, 228, 228, 0.5); */\n  outline: none;\n  border: none;\n"]))),cn=function(){var n=Object(G.d)((function(n){return n.contacts.filter})),e=Object(G.c)();return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(en,{children:"Find contact by name"}),Object(J.jsx)(tn,{type:"text",name:"filter",value:n,onChange:function(n){return e($(n.target.value.trim()))}})]})},rn=function(){return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)(C,{children:"Phonebook"}),Object(J.jsxs)(z,{children:[Object(J.jsx)(H,{}),Object(J.jsxs)(A,{children:[Object(J.jsx)(k,{children:"Contacts"}),Object(J.jsx)(cn,{}),Object(J.jsx)(nn,{})]})]})]})},an=t(13),on=t(14),bn=t(4),ln=Object(E.c)("",Object(on.a)({},$,(function(n,e){return e.payload}))),dn=Object(E.c)([],(R={},Object(on.a)(R,I,(function(n,e){var t=e.payload;return n.some((function(n){return n.name.toLowerCase().trim()===t.name.toLowerCase()}))?(alert(" ".concat(t.name," is alredy in the contacts list")),n):[].concat(Object(an.a)(n),[t])})),Object(on.a)(R,P,(function(n,e){var t=e.payload;return n.filter((function(n){return n.id!==t}))})),R)),sn=Object(bn.b)({items:dn,filter:ln}),jn=t(8),un=t(20),pn={key:"Contacts",storage:t.n(un).a,blacklist:["filter"]},xn=Object(an.a)(Object(E.d)({serializableCheck:{ignoredActions:[jn.a,jn.f,jn.b,jn.c,jn.d,jn.e]}})),hn=Object(E.a)({reducer:{contacts:Object(jn.g)(pn,sn)},middleware:xn}),On=Object(jn.h)(hn);m.a.render(Object(J.jsx)(g.a.StrictMode,{children:Object(J.jsx)(G.a,{store:hn,children:Object(J.jsx)(w.a,{loading:null,persistor:On,children:Object(J.jsx)(rn,{})})})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.349709ab.chunk.js.map