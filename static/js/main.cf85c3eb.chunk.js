(this.webpackJsonpsmart_pdf=this.webpackJsonpsmart_pdf||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},39:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),o=n(8),s=n.n(o),i=(n(25),n(26),n(4)),r=n(6),l=n(2),p=(n(27),n.p+"static/media/lined_pages.89fa7386.jpg"),j=n.p+"static/media/blank_page.231f45d2.jfif",d=n(16),b=n.n(d),u=n(14),h=n(15),f=n(7),x=n(19),O=n(18),g=(n(28),n(0)),m=function(e){Object(x.a)(n,e);var t=Object(O.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(f.a)(n,[{key:"render",value:function(){var e=this;return Object(g.jsx)("div",{className:"print-container",style:{margin:"0",padding:"0"},children:this.props.finalpdf.map((function(t){return Object(g.jsx)(g.Fragment,{children:"blankPage"===e.props.pagestyle?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{style:{position:"relative"},children:[Object(g.jsxs)("p",{style:{position:"absolute",zIndex:"10",fontSize:"".concat(2+e.props.fontsize,"px"),color:"transparent",textShadow:"0 0 1.9px ".concat(e.props.fontcolor),right:"10%",top:"2%",fontWeight:"".concat(e.props.fontweight),fontFamily:"".concat(e.props.fontstyle)},children:[" ",e.props.rollno," "]}),Object(g.jsxs)("p",{style:{position:"absolute",zIndex:"10",fontSize:"".concat(2+e.props.fontsize,"px"),color:"transparent",textShadow:"0 0 1.9px ".concat(e.props.fontcolor),right:"10%",top:"4%",fontWeight:"".concat(e.props.fontweight),fontFamily:"".concat(e.props.fontstyle)},children:[" ",e.props.studentname," "]}),Object(g.jsx)("p",{style:{position:"absolute",zIndex:"10",fontSize:"".concat(2+e.props.fontsize,"px"),color:"transparent",textShadow:"0 0 1.9px ".concat(e.props.fontcolor),fontWeight:"".concat(e.props.fontweight),paddingLeft:"".concat(20,"px"),paddingTop:"".concat(70,"px"),lineHeight:"".concat(35+e.props.fontsize/16,"px"),fontFamily:"".concat(e.props.fontstyle)},children:t}),Object(g.jsx)("img",{src:j,style:{width:"100%",height:"100vh"},alt:""})]}),Object(g.jsx)("div",{className:"page-break"})]}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("div",{style:{position:"relative"},children:[Object(g.jsxs)("p",{style:{position:"absolute",zIndex:"10",fontSize:"".concat(2+e.props.fontsize,"px"),color:"transparent",textShadow:"0 0 1.9px ".concat(e.props.fontcolor),right:"30%",top:"5%",fontWeight:"".concat(e.props.fontweight),fontFamily:"".concat(e.props.fontstyle)},children:[" ",e.props.rollno," "]}),Object(g.jsxs)("p",{style:{position:"absolute",zIndex:"10",fontSize:"".concat(2+e.props.fontsize,"px"),color:"transparent",textShadow:"0 0 1.9px ".concat(e.props.fontcolor),right:"30%",top:"7%",fontWeight:"".concat(e.props.fontweight),fontFamily:"".concat(e.props.fontstyle)},children:[" ",e.props.studentname," "]}),Object(g.jsx)("p",{style:{position:"absolute",zIndex:"10",fontSize:"".concat(2+e.props.fontsize,"px"),color:"transparent",textShadow:"0 0 1.9px ".concat(e.props.fontcolor),fontWeight:"".concat(e.props.fontweight),paddingLeft:"".concat(e.props.marginleft+10,"px"),paddingTop:"".concat(e.props.margintop+20,"px"),lineHeight:"".concat(35+e.props.fontsize/16,"px"),fontFamily:"".concat(e.props.fontstyle)},children:t}),Object(g.jsx)("img",{src:p,style:{width:"100%"},alt:""})]}),Object(g.jsx)("div",{className:"page-break"})]})})}))})}}]),n}(a.a.PureComponent);function v(e){e.key;var t=e.show,n=(e.pageNumber,e.pagestyle),a=e.fontsize,o=e.fontcolor,s=e.fontweight,i=e.marginleft,d=e.margintop,b=e.lineheight,u=e.fontstyle,h=e.finalpdf,f=e.setfinalpdf,x=Object(c.useState)(!1),O=Object(l.a)(x,2),m=O[0],v=O[1],y=Object(c.useState)(""),S=Object(l.a)(y,2),N=S[0],w=S[1];return Object(g.jsxs)("div",{className:"input-page left",style:{display:!0===t?"flex":"none"},children:[Object(g.jsx)("button",{className:"add-page",onClick:function(){f((function(e){return[].concat(Object(r.a)(e),[N])})),v(!0),console.log(h)},children:"Add this Page"}),Object(g.jsx)("p",{style:{display:"".concat(m?"block":"none"),color:"#22e5a9",marginBottom:"1rem"},children:"Page Added!!!"}),"blankPage"===n?Object(g.jsx)("textarea",{name:"",id:"",cols:"30",rows:"10",style:{fontSize:"".concat(a,"px"),color:"".concat(o),fontWeight:"".concat(s),paddingLeft:"".concat(20,"px"),paddingTop:"".concat(20,"px"),lineHeight:"".concat(b),fontFamily:"".concat(u),backgroundImage:"url(".concat("blankPage"===n?j:p,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",overflow:"hidden"},placeholder:"Type Here or Copy Paster Here!!!",value:N,onChange:function(e){return w(e.target.value)}}):Object(g.jsx)("textarea",{name:"",id:"",cols:"30",rows:"10",style:{fontSize:"".concat(a,"px"),color:"".concat(o),fontWeight:"".concat(s),paddingLeft:"".concat(i,"px"),paddingTop:"".concat(d,"px"),lineHeight:"".concat(b),fontFamily:"".concat(u),backgroundImage:"url(".concat("blankPage"===n?j:p,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",overflow:"hidden"},placeholder:"Type Here or Copy Paster Here!!!",value:N,onChange:function(e){return w(e.target.value)}})]})}var y=function(){var e,t=Object(c.useRef)(),n=Object(u.useReactToPrint)({content:function(){return t.current}}),a=Object(c.useState)("Indie Flower,cursive"),o=Object(l.a)(a,2),s=o[0],d=o[1],h=Object(c.useState)(16),f=Object(l.a)(h,2),x=f[0],O=(f[1],Object(c.useState)("#16264c")),y=Object(l.a)(O,2),S=y[0],N=y[1],w=Object(c.useState)("Normal"),k=Object(l.a)(w,2),z=k[0],F=k[1],P=Object(c.useState)(),C=Object(l.a)(P,2),I=C[0],H=C[1],W=Object(c.useState)(90),L=Object(l.a)(W,2),_=L[0],T=(L[1],Object(c.useState)(120)),A=Object(l.a)(T,2),R=A[0],B=(A[1],Object(c.useState)(1.86)),D=Object(l.a)(B,2),K=D[0],E=(D[1],Object(c.useState)(1)),G=Object(l.a)(E,2),J=G[0],M=G[1],Y=Object(c.useState)([]),q=Object(l.a)(Y,2),Q=q[0],U=q[1],V=Object(c.useState)(1),X=Object(l.a)(V,2),Z=X[0],$=X[1],ee=Object(c.useState)(!1),te=Object(l.a)(ee,2),ne=(te[0],te[1],Object(c.useState)("")),ce=Object(l.a)(ne,2),ae=ce[0],oe=ce[1],se=Object(c.useState)(""),ie=Object(l.a)(se,2),re=ie[0],le=ie[1];return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("center",{children:Object(g.jsx)("p",{className:"message",style:{color:"#22e5a9",marginBottom:"1rem"},children:"Responsive for Desktop"})}),Object(g.jsxs)("div",{id:"smartpdf",children:[Object(g.jsxs)("div",{className:"header",children:[Object(g.jsx)("h3",{children:"Hash/Hub"}),Object(g.jsx)("h2",{children:"Smart PDF"}),Object(g.jsxs)("div",{className:"buttons",children:[Object(g.jsx)("a",{href:"https://github.com/vedant-jain03/smart-pdf",children:"Contribute"}),Object(g.jsx)("a",{href:"https://github.com/vedant-jain03/smart-pdf",children:"Give us Star"})]})]}),Object(g.jsxs)("div",{className:"main",children:[Object(g.jsxs)("div",{className:"navbar",children:[Object(g.jsxs)("div",{className:"inputfield fontstyle",children:[Object(g.jsx)("h2",{children:"Font Style"}),Object(g.jsxs)("select",{name:"",value:s,onChange:function(e){return d(e.target.value)},children:[Object(g.jsx)("option",{style:{fontFamily:"Indie Flower,cursive"},value:"Indie Flower,cursive",children:"Indie Flower"}),Object(g.jsx)("option",{style:{fontFamily:"Caveat, cursive"},value:"Caveat, cursive",children:"Caveat"}),Object(g.jsx)("option",{style:{fontFamily:"Shadows Into Light, cursive"},value:"Shadows Into Light",children:"Shadows Into Light"}),Object(g.jsx)("option",{style:{fontFamily:"Homemade Apple"},value:"Homemade Apple",children:"Homemade Apple"}),Object(g.jsx)("option",{style:{fontFamily:"Nanum Pen Script"},value:"Nanum Pen Script",children:"Nanum Pen Script"}),Object(g.jsx)("option",{style:{fontFamily:"Kalam"},value:"Kalam",children:"Kalam"})]})]}),Object(g.jsxs)("div",{className:"inputfield fontstyle",children:[Object(g.jsx)("h2",{children:"Font Color"}),Object(g.jsx)("input",{type:"text",value:S,onChange:function(e){return N(e.target.value)}})]}),Object(g.jsxs)("div",{className:"inputfield fontstyle",children:[Object(g.jsx)("h2",{children:"Font Weight"}),Object(g.jsxs)("select",{name:"",value:z,onChange:function(e){return F(e.target.value)},children:[Object(g.jsx)("option",{value:"normal",children:"Normal"}),Object(g.jsx)("option",{value:"bold",children:"Bold"})]})]}),Object(g.jsxs)("div",{className:"inputfield fontstyle",children:[Object(g.jsx)("h2",{children:"Page Style"}),Object(g.jsxs)("select",{name:"",value:I,onChange:function(e){return H(e.target.value)},children:[Object(g.jsx)("option",{value:"linedPage",children:"Lined Page"}),Object(g.jsx)("option",{value:"blankPage",children:"Blank Page"})]})]})]}),Object(g.jsxs)("div",{className:"inputfield fontstyle PageNumberInput",children:[Object(g.jsx)("h2",{children:"Number of Pages"}),Object(g.jsxs)("div",{className:"box-buttons",children:[Object(g.jsx)("button",{onClick:function(){return M(J-1>0?J-1:1)},children:"-"}),Object(g.jsx)("input",{type:"number",max:"50",value:J,placeholder:"Enter Number of Pages You wanted"}),Object(g.jsx)("button",{onClick:function(){return M(J+1)},children:"+"})]})]}),Object(g.jsxs)("div",{className:"page_number_navbar",children:[Object(g.jsx)("button",{onClick:function(){return $(Z-1>0?Z-1:1)},children:" Prev "}),Object(g.jsxs)("p",{children:[" Page Number: ",Z,"/","0"===J||""===J?1:J," "]}),Object(g.jsx)("button",{onClick:function(){return $(Z+1>J?J:Z+1)},children:" Next "})]}),Object(g.jsx)("div",{children:Object(r.a)(Array(J)).map((function(e,t){return Object(g.jsx)(v,{show:t+1===Z,pageNumber:t+1,pagestyle:I,fontsize:x,fontcolor:S,fontweight:z,marginleft:_,margintop:R,lineheight:K,fontstyle:s,finalpdf:Q,setfinalpdf:U},t)}))}),Object(g.jsxs)("div",{className:"page_number_navbar",children:[Object(g.jsxs)("div",{className:"inputfield fontstyle",children:[Object(g.jsx)("h2",{children:"Student Name"}),Object(g.jsx)("input",{type:"text",value:ae,onChange:function(e){return oe(e.target.value)}})]}),Object(g.jsxs)("div",{className:"inputfield fontstyle",children:[Object(g.jsx)("h2",{children:"Roll Number"}),Object(g.jsx)("input",{type:"text",value:re,onChange:function(e){return le(e.target.value)}})]})]}),Object(g.jsx)("div",{className:"right",children:Q.map((function(e,t){return Object(g.jsxs)("div",{className:"".concat("blankPage"===I?"blankpage-output output-preview-page ":"output-preview-page "),children:[Object(g.jsx)("img",{src:"blankPage"===I?j:p,alt:""}),Object(g.jsx)("p",{children:e}),Object(g.jsx)(b.a,{onClick:function(){return function(e){U((function(t){return t.filter((function(t,n){return e!==n}))}))}(t)}})]})}))}),Object(g.jsx)("div",{style:{display:"none"},children:Object(g.jsx)(m,(e={pagestyle:I,fontsize:x,fontcolor:S,fontweight:z,marginleft:_,margintop:R,lineheight:K,fontstyle:s,finalpdf:Q},Object(i.a)(e,"finalpdf",Q),Object(i.a)(e,"rollno",re),Object(i.a)(e,"studentname",ae),Object(i.a)(e,"ref",t),e))}),Object(g.jsx)("button",{className:"print-pdf",onClick:n,children:"Get my PDF"})]})]})]})};var S=function(){return Object(g.jsx)("div",{className:"app",children:Object(g.jsx)(y,{})})};s.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(S,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.cf85c3eb.chunk.js.map