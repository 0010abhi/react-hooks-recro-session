(this["webpackJsonpreact-hooks-recro-session"]=this["webpackJsonpreact-hooks-recro-session"]||[]).push([[0],{149:function(e,t,a){e.exports=a(302)},154:function(e,t,a){},156:function(e,t,a){},301:function(e,t,a){},302:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(19),i=a.n(r),c=(a(154),a(155),a(156),a(17)),o=a(18),d=a(6),s=a(100),m=a(304),u=a(306);function p(e){return l.a.createElement(m.a.Item,{name:e.sid,label:e.sid,rules:[]},l.a.createElement(u.a,{disabled:e.disabled}))}var E=a(307),h=a(305),f=E.a.Sider,b=["Applications","Profile","Settings"];var v=Object(d.h)((function(e){return l.a.createElement(f,{theme:"light"},l.a.createElement(h.b,{size:"large",header:l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("h1",null,"sastoo")),footer:l.a.createElement(s.a,{type:"primary",onClick:function(){e.history.push("")}},"Log Out"),dataSource:b,renderItem:function(e){return l.a.createElement(h.b.Item,null,e)}}))})),g=a(303),y=a(308),x=E.a.Header;function k(){return l.a.createElement(x,{style:{backgroundColor:"#fff",display:"flex",justifyContent:"space-between"}},l.a.createElement("div",null,l.a.createElement("h3",null,"Applications")),l.a.createElement("div",null,l.a.createElement(g.a,{size:"large",icon:l.a.createElement(y.a,null)})))}var w=E.a.Content;function C(e){return l.a.createElement("div",{className:"App"},l.a.createElement(E.a,null,l.a.createElement(v,null),l.a.createElement(E.a,null,l.a.createElement(k,null),l.a.createElement(w,{style:{display:"flex"}},e.children))))}a(301);var O=a(38),j=a(47),N=a(82),S=a(146),A=Object(n.createContext)(),I=function(e){Object(N.a)(a,e);var t=Object(S.a)(a);function a(e){var n;return Object(O.a)(this,a),(n=t.call(this,e)).handleFirstNameChange=function(e){n.setState({firstName:e.target.value})},n.handleLastNameChange=function(e){n.setState({lastName:e.target.value})},n.handleResize=function(){n.setState({screenWidth:window.innerWidth})},n.state={firstName:"Abhishek",lastName:"Sachdeva",screenWidth:window.innerWidth},n}return Object(j.a)(a,[{key:"componentDidMount",value:function(){document.title="".concat(this.state.firstName," ").concat(this.state.lastName),window.addEventListener("resize",this.handleResize)}},{key:"componentDidUpdate",value:function(){document.title="".concat(this.state.firstName," ").concat(this.state.lastName)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize)}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("label",null,"First Name"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",value:this.state.firstName,onChange:this.handleFirstNameChange})),l.a.createElement("div",null,l.a.createElement("label",null,"Last Name"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",value:this.state.lastName,onChange:this.handleLastNameChange})),l.a.createElement("hr",null),l.a.createElement("div",null,"Screen Width: ",this.state.screenWidth),l.a.createElement("hr",null),l.a.createElement(A.Consumer,null,(function(e){var t=e.theme,a=e.toggleTheme;return l.a.createElement("button",{style:{width:"300px",height:"40px",color:"#fff",backgroundColor:"light"===t?"grey":"black"},onClick:function(){a()}},t)})))}}]),a}(n.Component),L=a(27),z={count:0};function _(e,t){switch(t.type){case"inc":case"dec":return Object(L.a)(Object(L.a)({},e),{},{count:t.payload});default:alert("No action found")}}function P(){var e=Object(n.useState)("Abhishek"),t=Object(c.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)("Abhishek"),o=Object(c.a)(i,2),d=o[0],s=o[1],m=function(){var e=Object(n.useState)(window.innerWidth),t=Object(c.a)(e,2),a=t[0],l=t[1];return Object(n.useEffect)((function(){function e(){l(window.innerWidth)}return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),a}(),u=Object(n.useContext)(A),p=u.theme,E=u.toggleTheme,h=Object(n.useReducer)(_,z),f=Object(c.a)(h,2),b=f[0],v=f[1];return function(e,t){Object(n.useEffect)((function(){document.title="".concat(e," ").concat(t)}))}(a,d),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("label",null,"First Name"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",value:a,onChange:function(e){r(e.target.value)}})),l.a.createElement("div",null,l.a.createElement("label",null,"Last Name"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",value:d,onChange:function(e){s(e.target.value)}})),l.a.createElement("hr",null),l.a.createElement("div",null,"Screen Width: ",m),l.a.createElement("hr",null),l.a.createElement("button",{style:{width:"300px",height:"40px",color:"#fff",backgroundColor:"light"===p?"grey":"black"},onClick:function(){E()}},p),l.a.createElement("div",{style:{border:"1px solid red"}},l.a.createElement("button",{onClick:function(){v({type:"dec",payload:b.count-1})}},"-"),b.count,l.a.createElement("button",{onClick:function(){v({type:"inc",payload:b.count+1})}},"+")))}var W=function(){var e=Object(n.useState)("light"),t=Object(c.a)(e,2),a=t[0],r=t[1];return l.a.createElement(A.Provider,{value:{theme:a,toggleTheme:function(){r("light"===a?"dark":"light")}}},l.a.createElement("div",{className:"App"},l.a.createElement("header",null,l.a.createElement("h2",null,"React Hooks Demo 1")),l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("div",{style:{fontSize:"24px",border:"1px solid black",padding:"15px",margin:"15px"}},l.a.createElement(o.b,{to:"/home"},"Home")),l.a.createElement("div",{style:{fontSize:"24px",border:"1px solid black",padding:"15px",margin:"15px"}},l.a.createElement(o.b,{to:"/login"},"Demo 2"))),l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("div",{style:{flex:1}},l.a.createElement("h3",null,"Class Implementation"),l.a.createElement(I,null)),l.a.createElement("div",{style:{flex:1}},l.a.createElement("h3",null,"Function Implementation"),l.a.createElement(P,null)))))};var D=function(e){var t=Object(n.useState)(!1),a=Object(c.a)(t,2),l=a[0],r=a[1],i=Object(d.g)();return{loading:l,handleAction:function(){r(!0),setTimeout((function(){r(!1),e&&i.push(e)}),3e3)}}},R=a(139),T=a(309);function F(){return l.a.createElement(T.a,{style:{fontSize:24},spin:!0})}function H(){return l.a.createElement(R.a,{indicator:F})}var G=Object(d.h)((function(e){var t=D(e.history,"/login");return l.a.createElement("div",{style:{padding:"15px",border:"1px solid black",backgroundColor:"#fff",width:"400px",margin:"15px auto"}},l.a.createElement("div",null,"Enter The OTP sent to your mail"),l.a.createElement(m.a,{layout:"vertical"},l.a.createElement(p,{sid:"otp",disabled:t.loading}),t.loading?l.a.createElement(H,null):l.a.createElement(s.a,{onClick:t.handleAction},"Activate Account")),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(s.a,{type:"link",onClick:function(){e.history.push("/login")}},"Go To Log In"))))}));var U=Object(d.h)((function(e){var t=D(e.history,"/reset-password");return l.a.createElement("div",{style:{padding:"15px",border:"1px solid black",backgroundColor:"#fff",width:"400px",margin:"15px auto"}},l.a.createElement("div",null,"Forgot Password?"),l.a.createElement(m.a,{layout:"vertical"},l.a.createElement(p,{sid:"email",disabled:t.loading}),t.loading?l.a.createElement(H,null):l.a.createElement(s.a,{onClick:t.handleAction},"Send OTP")),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(s.a,{type:"link",onClick:function(){e.history.push("/login")}},"Go To Log In"))))}));function B(e){return l.a.createElement(m.a.Item,{name:e.sid,label:e.sid,rules:[]},l.a.createElement(u.a.Password,{disabled:e.disabled}))}var J=function(e,t,a){var r=l.a.createContext();return{Context:r,Provider:function(i){var o=i.children,d=Object(n.useReducer)(e,a),s=Object(c.a)(d,2),m=s[0],u=s[1],p={};for(var E in t)p[E]=t[E](u);return l.a.createElement(r.Provider,{value:Object(L.a)({state:m},p)},o)}}}((function(e,t){switch(t.type){case"update_first_name":return Object(L.a)(Object(L.a)({},e),{},{firstName:t.payload});case"update_last_name":return Object(L.a)(Object(L.a)({},e),{},{lastName:t.payload});default:console.log("No action type found")}}),{changeName:function(e){return function(t){e({type:"update_first_name",payload:t})}},changeLastName:function(e){return function(t){e({type:"update_last_name",payload:t})}}},{firstName:"",lastName:""}),M=J.Context,V=J.Provider;var $=Object(d.h)((function(e){var t=D("/dashboard/applications"),a=Object(n.useContext)(M),r=a.state,i=r.firstName,c=r.lastName,d=a.changeLastName,u=a.changeName;return Object(n.useEffect)((function(){u("Abhishek"),d("Sachdeva")}),[]),l.a.createElement("div",null,l.a.createElement("header",{style:{textAlign:"center"}},l.a.createElement("h2",null,"React Hooks Demo 2")),l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("div",{style:{fontSize:"24px",border:"1px solid black",padding:"15px",margin:"15px"}},l.a.createElement(o.b,{to:"/home"},"Home")),l.a.createElement("div",{style:{fontSize:"24px",border:"1px solid black",padding:"15px",margin:"15px"}},l.a.createElement(o.b,{to:"/demo1"},"Demo 1"))),l.a.createElement("div",{style:{padding:"15px",border:"1px solid black",backgroundColor:"#fff",width:"400px",margin:"15px auto"}},l.a.createElement("div",null,"Log In"),l.a.createElement("div",null,i+c),l.a.createElement(m.a,{layout:"vertical"},l.a.createElement(p,{sid:"email",disabled:t.loading}),l.a.createElement(B,{sid:"password",disabled:t.loading}),t.loading?l.a.createElement(H,null):l.a.createElement(s.a,{onClick:t.handleAction},"Log In")),l.a.createElement("div",null,l.a.createElement(s.a,{type:"link",onClick:function(){e.history.push("/forgot-password")}},"Forgot Password?"),l.a.createElement("div",null,l.a.createElement("span",null,"Not a member? "),l.a.createElement(s.a,{type:"link",onClick:function(){e.history.push("/signup")}},"Create Account")))))}));var q=Object(d.h)((function(e){var t=D(e.history,"/login");return l.a.createElement("div",{style:{padding:"15px",border:"1px solid black",backgroundColor:"#fff",width:"400px",margin:"15px auto"}},l.a.createElement("div",null,"Reset Password"),l.a.createElement(m.a,{layout:"vertical"},l.a.createElement(p,{sid:"otp",disabled:t.loading}),l.a.createElement(B,{sid:"password",disabled:t.loading}),l.a.createElement(B,{sid:"confirmPassword",disabled:t.loading}),t.loading?l.a.createElement(H,null):l.a.createElement(s.a,{onClick:t.handleAction},"Set New Password")),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement(s.a,{type:"link",onClick:function(){e.history.push("/login")}},"Go To Log In"))))})),K=a(62),Q=K.a.Option;function X(e){return e.noForm?l.a.createElement(K.a,{defaultValue:"+91",style:{width:"30%"}},l.a.createElement(Q,{value:"+91"},"+91"),l.a.createElement(Q,{value:"+92"},"+92")):l.a.createElement(m.a.Item,{name:e.sid,label:e.sid,rules:[]},l.a.createElement(K.a,{defaultValue:"+91",style:{width:"30%"}},l.a.createElement(Q,{value:"+91"},"+91"),l.a.createElement(Q,{value:"+92"},"+92")))}function Y(e){return l.a.createElement(m.a.Item,{name:e.sid,label:e.sid,rules:[]},l.a.createElement(u.a.Group,{compact:!0},l.a.createElement(X,{noForm:!0,sid:"countryCode"}),l.a.createElement(u.a,{style:{width:"70%"},placeholder:"Mobile Number"})))}var Z=Object(d.h)((function(e){var t=D("/activate-account");return l.a.createElement("div",{style:{padding:"15px",backgroundColor:"#fff",width:"400px",margin:"15px auto"}},l.a.createElement("div",null,"Sign Up"),l.a.createElement(m.a,{layout:"vertical"},l.a.createElement(p,{sid:"firstName",disabled:t.loading}),l.a.createElement(p,{sid:"lastName",disabled:t.loading}),l.a.createElement(p,{sid:"email",disabled:t.loading}),l.a.createElement(B,{sid:"password",disabled:t.loading}),l.a.createElement(Y,{sid:"phoneNumber",disabled:t.loading}),l.a.createElement("p",null,"I have read and accepted the Sastoo terms of service, use policy and privacy policy."),t.loading?l.a.createElement(H,null):l.a.createElement(s.a,{onClick:t.handleAction},"Sign Up")),l.a.createElement("div",null,l.a.createElement("div",null,l.a.createElement("span",null,"Already a member? "),l.a.createElement(s.a,{type:"link",onClick:function(){e.history.push("/login")}},"Log In"))))})),ee=[{id:"home",path:"/home",component:function(){return l.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"}},l.a.createElement("div",null,l.a.createElement("h2",null,"React Hooks Demo 1")),l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("div",{style:{fontSize:"24px",border:"1px solid black",padding:"15px",margin:"15px"}},l.a.createElement(o.b,{to:"/demo1"},"Demo 1")),l.a.createElement("div",{style:{fontSize:"24px",border:"1px solid black",padding:"15px",margin:"15px"}},l.a.createElement(o.b,{to:"/login"},"Demo 2"))))}},{id:"demo1",path:"/demo1",component:W},{id:"log_in",path:"/login",component:$},{id:"sign_up",path:"/signup",component:Z},{id:"activate_account",path:"/activate-account",component:G},{id:"forgot_password",path:"/forgot-password",component:U},{id:"reset_password",path:"/reset-password",component:q},{id:"dashboard_applications",path:"/dashboard/applications",component:function(){return l.a.createElement(C,null,l.a.createElement("div",{style:{backgroundColor:"#fff",borderRadius:"4px",padding:"15px",margin:"15px",flexGrow:1}},l.a.createElement("div",null,l.a.createElement(p,{sid:"search_applications"}),l.a.createElement(s.a,null,"Create Applications"))))}}];var te=function(){var e=Object(n.useState)(!1),t=Object(c.a)(e,1)[0];return l.a.createElement(o.a,null,l.a.createElement(d.d,null,l.a.createElement(d.b,{exact:!0,path:"/"},l.a.createElement(d.a,{to:t?"/dashboard":"/home"})),ee.map((function(e,t){return l.a.createElement(d.b,{key:t,path:e.path,component:e.component})}))))};var ae=function(){return l.a.createElement(V,null,l.a.createElement(te,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[149,1,2]]]);
//# sourceMappingURL=main.446eda84.chunk.js.map