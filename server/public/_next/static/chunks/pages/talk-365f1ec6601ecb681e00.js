_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{"30+C":function(e,t,r){"use strict";var a=r("wx14"),n=r("Ff2n"),i=r("q1tI"),c=(r("17x9"),r("iuhU")),o=r("kKAo"),s=r("H2TA"),l=i.forwardRef((function(e,t){var r=e.classes,s=e.className,l=e.raised,d=void 0!==l&&l,u=Object(n.a)(e,["classes","className","raised"]);return i.createElement(o.a,Object(a.a)({className:Object(c.a)(r.root,s),elevation:d?8:1,ref:t},u))}));t.a=Object(s.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(l)},"5Il3":function(e,t,r){"use strict";r.r(t);var a=r("nKUr"),n=r("hlFM"),i=r("ofer"),c=r("rePB"),o=r("R/WZ"),s=r("q1tI");var l=r("2+Dk"),d=r("469l"),u=r("30+C"),b=Object(o.a)((function(e){return{card:{padding:"10px"},message:{wordBreak:"break-word"},avatar:{margin:"1rem",width:e.spacing(6),height:e.spacing(6)}}}));function j(e){var t=Object(l.a)().user,r=b(),c=e.from,o=e.body,s=e._id;return Object(a.jsxs)(n.a,{display:"flex",margin:"0.7rem 0.5rem",flexDirection:c._id===t._id?"row-reverse":"row",children:[Object(a.jsx)(d.a,{src:c.image,className:r.avatar}),Object(a.jsxs)(n.a,{maxWidth:"400px",display:"flex",className:r.message,flexDirection:"column",alignItems:c._id===t._id?"flex-end":"flex-start",children:[Object(a.jsx)(i.a,{variant:"body2",color:"textSecondary",gutterBottom:!0,children:c._id===t._id?"You":c.displayName}),Object(a.jsx)(u.a,{variant:"outlined",className:r.card,children:Object(a.jsx)(i.a,{variant:"body1",component:"p",children:o})},s)]})]})}var p=r("wx14"),m=r("Ff2n"),f=(r("17x9"),r("iuhU")),h=r("pdwK"),O=r("TLZQ"),x=r("KmP9"),v=r("1AYd"),g=r("ADg1"),y=r("28cb"),w=r("EHdT"),k=r("H2TA"),P=s.forwardRef((function(e,t){var r=e.children,a=e.classes,n=e.className,i=e.component,c=void 0===i?"p":i,o=(e.disabled,e.error,e.filled,e.focused,e.margin,e.required,e.variant,Object(m.a)(e,["children","classes","className","component","disabled","error","filled","focused","margin","required","variant"])),l=Object(w.a)(),d=Object(y.a)({props:e,muiFormControl:l,states:["variant","margin","disabled","error","filled","focused","required"]});return s.createElement(c,Object(p.a)({className:Object(f.a)(a.root,("filled"===d.variant||"outlined"===d.variant)&&a.contained,n,d.disabled&&a.disabled,d.error&&a.error,d.filled&&a.filled,d.focused&&a.focused,d.required&&a.required,"dense"===d.margin&&a.marginDense),ref:t},o)," "===r?s.createElement("span",{dangerouslySetInnerHTML:{__html:"&#8203;"}}):r)})),D=Object(k.a)((function(e){return{root:Object(p.a)({color:e.palette.text.secondary},e.typography.caption,{textAlign:"left",marginTop:3,margin:0,"&$disabled":{color:e.palette.text.disabled},"&$error":{color:e.palette.error.main}}),error:{},disabled:{},marginDense:{marginTop:4},contained:{marginLeft:14,marginRight:14},focused:{},filled:{},required:{}}}),{name:"MuiFormHelperText"})(P),N=r("cVXz"),I={standard:h.a,filled:O.a,outlined:x.a},F=s.forwardRef((function(e,t){var r=e.autoComplete,a=e.autoFocus,n=void 0!==a&&a,i=e.children,c=e.classes,o=e.className,l=e.color,d=void 0===l?"primary":l,u=e.defaultValue,b=e.disabled,j=void 0!==b&&b,h=e.error,O=void 0!==h&&h,x=e.FormHelperTextProps,y=e.fullWidth,w=void 0!==y&&y,k=e.helperText,P=e.hiddenLabel,F=e.id,E=e.InputLabelProps,S=e.inputProps,T=e.InputProps,_=e.inputRef,C=e.label,q=e.multiline,M=void 0!==q&&q,R=e.name,L=e.onBlur,A=e.onChange,H=e.onFocus,V=e.placeholder,B=e.required,K=void 0!==B&&B,z=e.rows,W=e.rowsMax,U=e.select,Y=void 0!==U&&U,Z=e.SelectProps,$=e.type,G=e.value,X=e.variant,J=void 0===X?"standard":X,Q=Object(m.a)(e,["autoComplete","autoFocus","children","classes","className","color","defaultValue","disabled","error","FormHelperTextProps","fullWidth","helperText","hiddenLabel","id","InputLabelProps","inputProps","InputProps","inputRef","label","multiline","name","onBlur","onChange","onFocus","placeholder","required","rows","rowsMax","select","SelectProps","type","value","variant"]);var ee={};if("outlined"===J&&(E&&"undefined"!==typeof E.shrink&&(ee.notched=E.shrink),C)){var te,re=null!==(te=null===E||void 0===E?void 0:E.required)&&void 0!==te?te:K;ee.label=s.createElement(s.Fragment,null,C,re&&"\xa0*")}Y&&(Z&&Z.native||(ee.id=void 0),ee["aria-describedby"]=void 0);var ae=k&&F?"".concat(F,"-helper-text"):void 0,ne=C&&F?"".concat(F,"-label"):void 0,ie=I[J],ce=s.createElement(ie,Object(p.a)({"aria-describedby":ae,autoComplete:r,autoFocus:n,defaultValue:u,fullWidth:w,multiline:M,name:R,rows:z,rowsMax:W,type:$,value:G,id:F,inputRef:_,onBlur:L,onChange:A,onFocus:H,placeholder:V,inputProps:S},ee,T));return s.createElement(g.a,Object(p.a)({className:Object(f.a)(c.root,o),disabled:j,error:O,fullWidth:w,hiddenLabel:P,ref:t,required:K,color:d,variant:J},Q),C&&s.createElement(v.a,Object(p.a)({htmlFor:F,id:ne},E),C),Y?s.createElement(N.a,Object(p.a)({"aria-describedby":ae,id:F,labelId:ne,value:G,input:ce},Z),i):ce,k&&s.createElement(D,Object(p.a)({id:ae},x),k))})),E=Object(k.a)({root:{}},{name:"MuiTextField"})(F),S=r("Z3vd"),T=r("AqyA"),_=r("HsFV"),C=r("lO0E");function q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?q(Object(r),!0).forEach((function(t){Object(c.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var R=Object(o.a)((function(e){var t;return{button:{margin:"0.5rem 1.5rem"},text:{flex:1},form:(t={padding:"1.5rem"},Object(c.a)(t,e.breakpoints.up("sm"),{padding:"1rem 3rem"}),Object(c.a)(t,"background",e.palette.grey[800]),Object(c.a)(t,"marginTop","auto"),t),wrapper:{display:"flex",flexDirection:"column",flexGrow:1}}}));function L(e){var t=e.room,r=R(),i=Object(s.useState)(!1),c=i[0],o=i[1],l=Object(_.b)(),d=l.messages,u=l.sendMessage,b=Object(s.useRef)(),p=function(e){var t=Object(s.useState)(e),r=t[0],a=t[1];return{input:{value:r,onChange:function(e){a(e.target.value)}},setValue:a}}(""),m=p.input,f=p.setValue;Object(s.useEffect)((function(){f(""),b.current.scrollIntoView({behavior:"smooth"})}),[t]),Object(s.useEffect)((function(){b.current.scrollIntoView({behavior:"smooth"})}),[]);return d?Object(a.jsxs)(n.a,{position:"relative",className:r.wrapper,children:[Object(a.jsxs)("div",{style:{overflow:"auto"},children:[Object(a.jsx)(C.a,{}),Object(a.jsxs)(n.a,{children:[d.map((function(e){return Object(a.jsx)(j,M({},e),e._id)})),Object(a.jsx)("div",{ref:b})]})]}),Object(a.jsxs)(n.a,{onSubmit:function(e){e.preventDefault(),m.value.trim()?(u(m.value),o(!1),f(""),b.current.scrollIntoView({behavior:"smooth"})):o(!0)},component:"form",display:"flex",className:r.form,children:[Object(a.jsx)(E,M(M({label:"Type something..."},m),{},{className:r.text,error:c,helperText:"Message is required"})),Object(a.jsx)(S.a,{variant:"contained",color:"primary",size:"large",type:"submit",className:r.button,endIcon:Object(a.jsx)(T.a,{children:"send"}),children:"Send"})]})]}):"Loading..."}var A=r("eD//"),H=r("tVbE"),V=r("56Ss"),B=r("IsqK"),K=r("wb2y"),z=r("1NhI"),W=r("IIOH"),U=r("rZK2"),Y=r("YFqc"),Z=r.n(Y),$=r("QIDe"),G=Object(o.a)((function(e){return{root:{display:"flex",flexShrink:0},appBar:{zIndex:e.zIndex.drawer+1},drawer:Object(c.a)({},e.breakpoints.up("sm"),{width:280,flexShrink:0}),drawerPaper:{width:280},drawerContainer:{overflow:"auto",display:"flex",flexDirection:"column",height:"100%"},content:{flexGrow:1,padding:e.spacing(3)},create:{width:"100%",marginTop:"auto",display:"flex",alignItems:"center",flexDirection:"column"},button:{margin:e.spacing(2.7),paddingBottom:e.spacing(2),paddingTop:e.spacing(2)},activeList:{background:e.palette.grey[700]},divider:{width:"100%"}}})),X=function(){return window.document.body};function J(e){var t=e.navbar,r=Object(_.b)()||{rooms:[]},n=r.selectedRoomIndex,i=r.rooms,c=r.setSelectedRoomIndex,o=Object(U.b)(),u=o.mobileOpen,b=o.handleDrawerToggle,j=G(),p=Object(l.a)(),m=p.user,f=p.isAuthenticated,h=p.logout,O=p.login,x=Object(s.useState)(!1),v=x[0],g=x[1];if(!i)return"Loading...";var y=t?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(C.a,{}),Object(a.jsx)("div",{className:j.drawerContainer,children:Object(a.jsx)(A.a,{children:f?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(H.a,{button:!0,children:Object(a.jsx)(Z.a,{href:"/courses",passHref:!0,children:Object(a.jsx)(S.a,{color:"inherit",children:"Courses"})})}),Object(a.jsx)(H.a,{button:!0,children:Object(a.jsx)(Z.a,{href:"/talk",children:Object(a.jsx)("a",{children:Object(a.jsx)(S.a,{color:"inherit",children:"Chat"})})})}),Object(a.jsx)(H.a,{button:!0,children:Object(a.jsx)(Z.a,{href:"https://mokshitjain01.typeform.com/to/GyKOKiaK",children:Object(a.jsx)("a",{children:Object(a.jsx)(S.a,{color:"inherit",children:"Report Someone"})})})}),m.isAdmin&&Object(a.jsx)(H.a,{button:!0,children:Object(a.jsx)(Z.a,{href:"/admin",children:Object(a.jsx)("a",{children:Object(a.jsx)(S.a,{color:"inherit",children:"Admin"})})})}),Object(a.jsx)(H.a,{button:!0,children:Object(a.jsx)(S.a,{color:"inherit",onClick:h,children:"Logout"})})]}):Object(a.jsx)(H.a,{button:!0,children:Object(a.jsx)(S.a,{color:"inherit",onClick:O,children:"Login"})})})})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(C.a,{}),Object(a.jsxs)("div",{className:j.drawerContainer,children:[Object(a.jsx)(A.a,{children:i.map((function(e,t){var r=e.users.filter((function(e){return e._id!==m._id}))[0],i=n===t;return r&&Object(a.jsxs)(H.a,{className:i?j.activeList:null,button:!0,onClick:function(){return c(t)},children:[Object(a.jsx)(V.a,{children:Object(a.jsx)(d.a,{src:null===r||void 0===r?void 0:r.image})}),Object(a.jsx)(B.a,{primary:null===r||void 0===r?void 0:r.displayName})]},e._id)}))}),Object(a.jsxs)("div",{className:j.create,children:[Object(a.jsx)(K.a,{className:j.divider}),Object(a.jsx)(S.a,{variant:"contained",color:"primary",type:"submit",size:"large",className:j.button,onClick:function(){g(!0)},startIcon:Object(a.jsx)(T.a,{children:"playlist_add"}),children:"Talk to Someone"}),Object(a.jsx)($.a,{open:v,setOpen:g})]})]})]});return Object(a.jsxs)("nav",{className:j.drawer,children:[Object(a.jsx)(z.a,{smUp:!0,implementation:"js",children:Object(a.jsx)(W.a,{container:X,variant:"temporary",open:u,onClose:b,ModalProps:{keepMounted:!0},classes:{paper:j.drawerPaper},children:y})}),Object(a.jsx)(z.a,{xsDown:!0,implementation:"js",children:Object(a.jsx)(W.a,{classes:{paper:j.drawerPaper},variant:"permanent",open:!0,children:y})})]})}var Q=r("i2en"),ee=r("512M"),te=r("5Yp1");function re(){var e=Object(_.b)().selectedRoom;return Object(a.jsxs)(te.a,{flex:!0,noFooter:!0,children:[Object(a.jsx)(J,{}),e?Object(a.jsx)(L,{}):Object(a.jsx)(n.a,{display:"flex",alignItems:"center",justifyContent:"center",position:"fixed",bottom:0,top:0,left:240,right:0,children:Object(a.jsx)(i.a,{variant:"h2",color:"textSecondary",children:"No Room selected"})})]})}t.default=Object(Q.a)((function(){return Object(a.jsx)(ee.a,{children:Object(a.jsx)(_.a,{children:Object(a.jsx)(re,{})})})}))},D7TT:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/talk",function(){return r("5Il3")}])},i2en:function(e,t,r){"use strict";var a=r("rePB"),n=r("nKUr"),i=r("iae6"),c=r("hlFM"),o=r("5Yp1"),s=r("2+Dk"),l=r("nOHt"),d=r("q1tI");function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){Object(a.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(r){var a=Object(s.a)(),u=a.user,j=a.error,p=Object(l.useRouter)();return Object(d.useEffect)((function(){t?!j&&u.isAdmin?p.push(p.asPath):p.replace("/"):!j&&u?p.push(p.asPath):p.replace("/")}),[u,t,j]),u?Object(n.jsx)(e,b({},r)):Object(n.jsx)(o.a,{flex:!0,children:Object(n.jsx)(c.a,{height:"100%",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",children:Object(n.jsx)(i.a,{})})})}}},iae6:function(e,t,r){"use strict";var a=r("wx14"),n=r("Ff2n"),i=r("q1tI"),c=(r("17x9"),r("iuhU")),o=r("H2TA"),s=r("NqtD");function l(e){var t,r,a;return t=e,r=0,a=1,e=(Math.min(Math.max(r,t),a)-r)/(a-r),e=(e-=1)*e*e+1}var d=i.forwardRef((function(e,t){var r,o=e.classes,d=e.className,u=e.color,b=void 0===u?"primary":u,j=e.disableShrink,p=void 0!==j&&j,m=e.size,f=void 0===m?40:m,h=e.style,O=e.thickness,x=void 0===O?3.6:O,v=e.value,g=void 0===v?0:v,y=e.variant,w=void 0===y?"indeterminate":y,k=Object(n.a)(e,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),P={},D={},N={};if("determinate"===w||"static"===w){var I=2*Math.PI*((44-x)/2);P.strokeDasharray=I.toFixed(3),N["aria-valuenow"]=Math.round(g),"static"===w?(P.strokeDashoffset="".concat(((100-g)/100*I).toFixed(3),"px"),D.transform="rotate(-90deg)"):(P.strokeDashoffset="".concat((r=(100-g)/100,r*r*I).toFixed(3),"px"),D.transform="rotate(".concat((270*l(g/70)).toFixed(3),"deg)"))}return i.createElement("div",Object(a.a)({className:Object(c.a)(o.root,d,"inherit"!==b&&o["color".concat(Object(s.a)(b))],{indeterminate:o.indeterminate,static:o.static}[w]),style:Object(a.a)({width:f,height:f},D,h),ref:t,role:"progressbar"},N,k),i.createElement("svg",{className:o.svg,viewBox:"".concat(22," ").concat(22," ").concat(44," ").concat(44)},i.createElement("circle",{className:Object(c.a)(o.circle,p&&o.circleDisableShrink,{indeterminate:o.circleIndeterminate,static:o.circleStatic}[w]),style:P,cx:44,cy:44,r:(44-x)/2,fill:"none",strokeWidth:x})))}));t.a=Object(o.a)((function(e){return{root:{display:"inline-block"},static:{transition:e.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:e.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},"@keyframes circular-rotate":{"0%":{transformOrigin:"50% 50%"},"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}}),{name:"MuiCircularProgress",flip:!1})(d)}},[["D7TT",0,2,1,3,4]]]);