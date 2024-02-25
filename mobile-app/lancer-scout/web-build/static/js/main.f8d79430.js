(()=>{"use strict";var e={9180:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Ie});var r=n(5861),o=n(885),a=n(5004),i=n(9385),l=n(2344),s=n(1263),u=n(5705),c=n(4246),d=n(4486),f=n(3392),h=n(7129),p=n(9688),g=n(7602),y=n(3224),m=n(1054),b=n(6792),j=n(4942),x=n(3737),v=window.innerWidth,O=(window.innerHeight,0),w=0,C="rgb(245, 245, 245)",S="rgb(220, 220, 220)",T="rgb(90, 90, 90)",P="rgb(20, 20, 20)",k="rgb(184, 1, 0)",I="rgb(250, 180, 180)",z=n(2629);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){(0,j.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var F=b.default.create({wrapper:{position:"relative",marginTop:10},undershadow:{position:"absolute",width:"100%",height:60,backgroundColor:I,borderRadius:10},container:{height:60,flexDirection:"row",alignItems:"center",justifyContent:"space-between",paddingHorizontal:20,backgroundColor:C,borderRadius:10},date:{fontFamily:"Open Sans",fontSize:18,color:P}});const E=function(e){var t=e.matchTimestamp,n=e.data,r=e.navigation,o=e.mode,l=(0,a.useRef)(new x.default.Value(-4)).current,s=new Date(t),u=s.toDateString()+" at "+s.getHours()%12+":"+(s.getMinutes()<10?"0"+s.getMinutes():s.getMinutes())+" "+(s.getHours()>12?"pm":"am");return(0,z.jsx)(h.default,{onPress:function(){return r.push("OpenQr",{id:t,data:n,mode:o})},onPressIn:function(){x.default.timing(l,{toValue:0,duration:200,useNativeDriver:!1}).start()},onPressOut:function(){x.default.timing(l,{toValue:-4,duration:200,useNativeDriver:!1}).start()},children:(0,z.jsxs)(i.default,{style:F.wrapper,children:[(0,z.jsx)(i.default,{style:F.undershadow}),(0,z.jsxs)(x.default.View,{style:B(B({},F.container),{},{top:l}),children:[(0,z.jsx)(m.default,{style:F.date,children:u}),(0,z.jsx)(d.FontAwesomeIcon,{icon:f.faChevronRight,size:24,color:k})]})]})})};function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){(0,j.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var W=b.default.create({wrapper:{position:"relative",marginTop:10,marginBottom:0},container:{height:60,alignItems:"center",justifyContent:"center",backgroundColor:I,borderRadius:10,borderWidth:2,borderColor:k},text:{fontFamily:"Open Sans",fontWeight:"500",fontSize:18,color:P}});const R=function(e){var t=e.children,n=e.handlePress,r=e.marginHorizontal,o=void 0===r?40:r,l=(0,a.useRef)(new x.default.Value(1)).current;return(0,z.jsx)(h.default,{onPress:n,onPressIn:function(){x.default.timing(l,{toValue:.8,duration:200,useNativeDriver:!1}).start()},onPressOut:function(){x.default.timing(l,{toValue:1,duration:200,useNativeDriver:!1}).start()},children:(0,z.jsx)(i.default,{style:M(M({},W.wrapper),{},{marginHorizontal:o}),children:(0,z.jsx)(x.default.View,{style:M(M({},W.container),{},{transform:[{scale:l}]}),children:(0,z.jsx)(m.default,{style:W.text,children:t})})})})};var A=n(2982),N=n(519);const V=function(e){return{success:!0}};var H=function(){var e=(0,r.default)((function*(e){if((yield N.default.getAllKeys()).includes("lancer-scout-schema-"+e)){var t=yield N.default.getItem("lancer-scout-schema-"+e);return JSON.parse(t)}return yield N.default.setItem("lancer-scout-schema-"+e,JSON.stringify([])),[]}));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=(0,r.default)((function*(e,t){var n=V(JSON.parse(e));return n.success&&(yield N.default.setItem("lancer-scout-schema-"+t,e)),n}));return function(t,n){return e.apply(this,arguments)}}(),U=function(){var e=(0,r.default)((function*(e){if((yield N.default.getAllKeys()).includes("lancer-scout-entries-"+e)){var t=yield N.default.getItem("lancer-scout-entries-"+e);return JSON.parse(t)}return yield N.default.setItem("lancer-scout-entries-"+e,JSON.stringify([])),[]}));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=(0,r.default)((function*(e,t){var n=yield U(t),r=[].concat((0,A.default)(n),[e]);yield N.default.setItem("lancer-scout-entries-"+t,JSON.stringify(r))}));return function(t,n){return e.apply(this,arguments)}}(),Q=function(){var e=(0,r.default)((function*(e,t){var n=(yield U(t)).filter((function(t){return t.id!=e}));yield N.default.setItem("lancer-scout-entries-"+t,JSON.stringify(n))}));return function(t,n){return e.apply(this,arguments)}}(),X=b.default.create({wrapper:{flex:1,backgroundColor:C},headerContainer:{alignItems:"center",justifyContent:"center",height:70,backgroundColor:C,borderBottomWidth:1,borderBottomColor:k},headerText:{fontFamily:"Open Sans",fontWeight:"700",fontSize:24,color:P},emptyList:{marginTop:20,fontFamily:"Open Sans",fontSize:24,color:k,textAlign:"center"}});const Y=function(e){var t=e.route,n=e.navigation,r=t.params.mode,l=(0,a.useState)([]),s=(0,o.default)(l,2),u=s[0],c=s[1],d=(0,a.useState)([]),f=(0,o.default)(d,2),h=f[0],p=f[1];(0,a.useEffect)((function(){H(r).then(c),U(r).then(p),n.addListener("state",(function(){H(r).then(c),U(r).then(p)}))}),[]);var b=[];return h.reverse().forEach((function(e){b.push((0,z.jsx)(E,{matchTimestamp:e.id,data:e.buffer,navigation:n,mode:r},e.id))})),(0,z.jsxs)(g.default,{style:X.wrapper,children:[(0,z.jsx)(i.default,{style:X.headerContainer,children:(0,z.jsxs)(m.default,{style:X.headerText,children:[r," Scouting Hub"]})}),(0,z.jsxs)(y.default,{style:{backgroundColor:S},children:[(0,z.jsxs)(R,{handlePress:function(){return n.push("DataEntry",{form:u,mode:r})},children:["Start ",r," Scouting"]}),(0,z.jsxs)(R,{handlePress:function(){return n.push("UploadSchema",{mode:r})},children:["Upload ",r," Schema"]}),(0,z.jsx)(i.default,{style:{height:6}}),b.length>0?b:(0,z.jsxs)(a.Fragment,{children:[(0,z.jsx)(i.default,{style:{marginTop:4,height:1,backgroundColor:k}}),(0,z.jsx)(m.default,{style:X.emptyList,children:"No Scouting Entries Yet"})]})]})]})};var K=n(6591),q=n(4294),G=n.n(q);function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach((function(t){(0,j.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ee=function(e){var t=e.title,n=e.setValue;return(0,z.jsx)(i.default,{style:se.headerContainer,onLayout:function(e){n(e.nativeEvent.layout.y)},children:(0,z.jsx)(m.default,{style:se.headerText,numberOfLines:1,children:t})})},te=function(e){var t=e.title,n=e.maxLength,r=e.placeholder,o=e.value,l=e.setValue,s=(0,a.useRef)();return(0,z.jsxs)(i.default,{style:se.inputContainer,children:[(0,z.jsx)(m.default,{style:se.inputTitle,numberOfLines:1,children:t}),(0,z.jsx)(h.default,{onPress:function(){return s.current.focus()},children:(0,z.jsx)(i.default,{style:se.inputTextContainer,children:(0,z.jsx)(K.default,{ref:s,placeholder:r,maxLength:n,value:o,onChangeText:l,style:se.inputText,placeholderTextColor:T,cursorColor:k,selectionColor:k,color:!0,multiline:!0})})})]})},ne=function(e){var t=e.title,n=e.value,r=e.setValue,o=e.dataType,l=(0,a.useRef)(),s=Math.pow(2,parseInt(o.split("bit")[0]))-1,u=function(e){return e<0?0:e>=s?s:e};return(0,z.jsxs)(i.default,{style:se.inputContainer,children:[(0,z.jsx)(m.default,{style:se.inputTitle,numberOfLines:1,children:t}),(0,z.jsxs)(i.default,{style:se.multiControlInputContainer,children:[(0,z.jsx)(h.default,{onPress:function(){return l.current.focus()},children:(0,z.jsx)(i.default,{style:se.inputTextContainer,children:(0,z.jsx)(K.default,{ref:l,value:n.toString(),onChangeText:function(e){var t=parseFloat(e);isNaN(t)?r(0):r(u(t))},style:se.inputText,cursorColor:k,selectionColor:k,color:!0,multiline:!0,keyboardType:"numeric"})})}),(0,z.jsx)(h.default,{onPress:function(){n>0&&r(u(n-1))},children:(0,z.jsx)(i.default,{style:se.controlButton,children:(0,z.jsx)(d.FontAwesomeIcon,{icon:f.faMinus,color:k,size:22})})}),(0,z.jsx)(h.default,{onPress:function(){r(u(n+1))},children:(0,z.jsx)(i.default,{style:se.controlButton,children:(0,z.jsx)(d.FontAwesomeIcon,{icon:f.faPlus,color:k,size:22})})})]})]})},re=function(e){var t=e.title,n=e.value,r=e.setValue,l=e.dataType,s=(0,a.useState)(!1),u=(0,o.default)(s,2),c=u[0],p=u[1],g=(0,a.useState)(0),y=(0,o.default)(g,2),b=y[0],j=y[1];console.log({value:n}),(0,a.useEffect)((function(){if(c){var e=setInterval((function(){r(v(Math.round((Date.now()-b)/1e3)))}),500);return console.log("set v to "+v(Math.round((Date.now()-b)/1e3))),function(){return clearInterval(e)}}}),[c,b]);var x=Math.pow(2,parseInt(l.split("bit")[0]))-1,v=function(e){return e<0?0:e>=x?x:e};return(0,z.jsxs)(i.default,{style:se.inputContainer,children:[(0,z.jsx)(m.default,{style:se.inputTitle,numberOfLines:1,children:t}),(0,z.jsxs)(i.default,{style:se.multiControlInputContainer,children:[(0,z.jsx)(i.default,{style:se.inputTextContainer,children:(0,z.jsx)(m.default,{style:se.inputText,children:G()(1e3*n,{leading:!0})})}),(0,z.jsx)(h.default,{onPress:function(){r(0),j(Date.now())},children:(0,z.jsx)(i.default,{style:se.controlButton,children:(0,z.jsx)(d.FontAwesomeIcon,{icon:f.faRepeat,color:k,size:22})})}),(0,z.jsx)(h.default,{onPress:c?function(){p(!1)}:function(){p(!0),r(0),j(Date.now())},children:(0,z.jsx)(i.default,{style:se.controlButton,children:(0,z.jsx)(d.FontAwesomeIcon,{icon:c?f.faPause:f.faPlay,color:k,size:22})})})]})]})},oe=function(e){var t=e.title,n=e.value,r=e.setValue,l=e.dataType,s=(0,a.useState)(0),u=(0,o.default)(s,2),c=u[0],d=u[1],f=Math.pow(2,parseInt(l.split("bit")[0]))-1;return(0,z.jsxs)(i.default,{style:se.inputContainer,children:[(0,z.jsx)(m.default,{style:se.inputTitle,numberOfLines:1,children:t}),(0,z.jsx)(i.default,{style:{width:"100%"},children:(0,z.jsx)(i.default,{style:[{width:40,alignItems:"center"},{transform:[{translateX:(v-60-10)*(1*Math.round(n/1)-0)/10-5}]}],children:(0,z.jsx)(m.default,{style:se.sliderLabel,children:1*Math.round(n/1)})})}),(0,z.jsx)(h.default,{children:(0,z.jsxs)(i.default,{style:se.sliderInputContainer,children:[(0,z.jsx)(i.default,{style:se.sliderTrackBar}),(0,z.jsx)(h.default,{children:(0,z.jsx)(i.default,{style:[se.sliderInputThumb,{transform:[{translateX:(v-60-10)*(1*Math.round(n/1)-0)/10}]}],onTouchStart:function(e){d(e.nativeEvent.touches[0].pageX)},onTouchMove:function(e){var t,o=v-60-10,a=e.nativeEvent.touches[0].pageX-c,i=Math.max(Math.min(n+a/o*10,10),0);Math.round(n/1),Math.round(i/1),r((t=i)<0?0:t>=f?f:t),d(e.nativeEvent.touches[0].pageX)}})})]})})]})},ae=function(e){var t=e.title,n=e.value,r=e.setValue;return(0,z.jsxs)(i.default,{style:se.inputContainer,children:[(0,z.jsx)(m.default,{style:se.inputTitle,numberOfLines:1,children:t}),(0,z.jsxs)(i.default,{style:se.toggleButtonsContainer,children:[(0,z.jsx)(h.default,{onPress:function(){r(!1)},children:(0,z.jsx)(i.default,{style:[se.toggleButtonContainer,{borderColor:n?C:k,backgroundColor:n?C:I}],children:(0,z.jsx)(m.default,{style:se.toggleButtonText,children:"False"})})}),(0,z.jsx)(h.default,{onPress:function(){r(!0)},children:(0,z.jsx)(i.default,{style:[se.toggleButtonContainer,{borderColor:n?k:C,backgroundColor:n?I:C}],children:(0,z.jsx)(m.default,{style:se.toggleButtonText,children:"True"})})})]})]})},ie=function(e){var t=e.title,n=e.options,r=e.value,o=e.setValue,a=e.dataType,l=[],s=Math.pow(2,parseInt(a.split("bit")[0]))-1;return n.forEach((function(e,t){l.push((0,z.jsx)(h.default,{onPress:function(){var e;o((e=t)<0?0:e>=s?s:e)},children:(0,z.jsx)(i.default,{style:[se.radioOptionButtonContainer,{borderColor:t==r?k:C,backgroundColor:t==r?I:C}],children:(0,z.jsx)(m.default,{style:se.radioOptionButtonText,children:e})})},t))})),(0,z.jsxs)(i.default,{style:[se.inputContainer,{paddingBottom:0}],children:[(0,z.jsx)(m.default,{style:se.inputTitle,numberOfLines:1,children:t}),l]})},le=function(e){var t=e.title,n=e.options,r=e.value,l=e.setValue,s=e.dataType,u=(0,a.useState)(!1),c=(0,o.default)(u,2),p=c[0],g=c[1],y=function(){g(!p)},b=Math.pow(2,parseInt(s.split("bit")[0]))-1,j=[];return n.forEach((function(e,t){j.push((0,z.jsx)(h.default,{onPress:function(){var e;l((e=t)<0?0:e>=b?b:e),y()},children:(0,z.jsx)(i.default,{style:[se.dropdownOptionContainer,{backgroundColor:t==r?I:C,borderColor:t==r?k:C}],children:(0,z.jsx)(m.default,{style:se.dropdownOptionText,children:e})})},t))})),(0,z.jsxs)(i.default,{style:se.inputContainer,children:[(0,z.jsx)(m.default,{style:se.inputTitle,numberOfLines:1,children:t}),(0,z.jsxs)(i.default,{style:[se.multiControlInputContainer,{marginBottom:p?5:0}],children:[(0,z.jsx)(i.default,{style:$($({},se.inputTextContainer),{},{height:48,justifyContent:"center"}),children:(0,z.jsx)(m.default,{style:se.inputText,children:n[r]})}),(0,z.jsx)(h.default,{onPress:y,children:(0,z.jsx)(i.default,{style:se.controlButton,children:(0,z.jsx)(d.FontAwesomeIcon,{icon:p?f.faChevronUp:f.faChevronDown,color:k,size:22})})})]}),p&&j]})},se=b.default.create({headerContainer:{width:"100%",height:60,marginTop:10,alignItems:"center",justifyContent:"center"},headerText:{paddingHorizontal:20,fontFamily:"Open Sans",fontWeight:"700",fontSize:24,color:k,textDecorationLine:"underline",textDecorationColor:k},inputContainer:{margin:10,marginBottom:0,padding:10,borderRadius:10,backgroundColor:C},inputTitle:{fontFamily:"Open Sans",fontWeight:"400",color:P,fontSize:20,marginBottom:10},inputTextContainer:{flex:1,padding:10,borderWidth:1,borderColor:k,borderRadius:10},inputText:{fontFamily:"Open Sans",fontWeight:"500",fontStyle:"italic",fontSize:16,color:P},multiControlInputContainer:{flexDirection:"row",alignItems:"center"},controlButton:{width:48,height:48,alignItems:"center",justifyContent:"center",marginLeft:10,borderWidth:1,borderColor:k,borderRadius:10},sliderLabel:{fontFamily:"Open Sans",fontWeight:"700",fontSize:16,color:P,marginTop:5},sliderInputContainer:{width:"100%",height:30,marginTop:5,justifyContent:"center"},sliderInputThumb:{position:"absolute",width:30,height:30,borderWidth:2.5,borderColor:k,borderRadius:10,backgroundColor:I},sliderTrackBar:{width:"100%",height:4,borderRadius:2,backgroundColor:T},toggleButtonsContainer:{width:"100%",height:50,flexDirection:"row",justifyContent:"space-between"},toggleButtonContainer:{width:.5*(v-40)-5,height:"100%",alignItems:"center",justifyContent:"center",borderRadius:10,borderWidth:2.5},toggleButtonText:{fontFamily:"Open Sans",fontWeight:"700",fontSize:20,color:P},radioOptionButtonContainer:{width:"100%",height:50,justifyContent:"center",marginBottom:10,borderRadius:10,borderWidth:2.5},radioOptionButtonText:{paddingHorizontal:20,fontFamily:"Open Sans",fontWeight:"700",fontSize:18,color:P},dropdownOptionContainer:{marginTop:5,padding:10,borderWidth:2.5,borderRadius:10},dropdownOptionText:{fontFamily:"Open Sans",fontWeight:"700",fontSize:16,color:P}});const ue=function(e){var t=function(){return null};switch(e.ui.type){case"header":t=ee;break;case"text":t=te;break;case"number":t=ne;break;case"timer":t=re;break;case"slider":t=oe;break;case"toggle":t=ae;break;case"radio":t=ie;break;case"dropdown":t=le}return t($($($({},e),e.ui),{},{title:e.title}))};var ce=n(6988),de=n.n(ce),fe=function(e,t){for(var n=e,r=new Array(t).fill(0),o=0;o<t;o++){n/2%1!=0&&(r[t-1-o]=1,n--),n/=2}return r},he=function(e){for(var t=0,n=0;n<e.length;n++){t+=Math.pow(2,n)*e[e.length-1-n]}return t},pe=function(e){var t="abcdefghijklmnopqrstuvwxyz",n="0123456789",r=",.!?()'\" ",o=Math.pow(2,6)-1;return t.includes(e)?o=0+t.indexOf(e):n.includes(e)?o=26+n.indexOf(e):r.includes(e)&&(o=36+r.indexOf(e)),fe(o,6)},ge=function(e){var t=JSON.stringify(e),n=de()(t);return fe(n,32)},ye=function(e,t){return"boolean"==t?[e?1:0]:"string"==t?function(e){for(var t=function(e){var t=e.toLowerCase().replace(/\s\s+/g," ");return[",",".","!","?"].forEach((function(e){t=t.split(e).map((function(e){return e.trim()})).join(e)})),t}(e),n=fe(t.length,8),r=[],o=0;o<t.length;o++){var a=t[o];r.push(pe(a))}return[n].concat(r).flat()}(e):"1bit"==t?fe(e,1):"2bit"==t?fe(e,2):"4bit"==t?fe(e,4):"6bit"==t?fe(e,6):"8bit"==t||"8bit"==t?fe(e,8):void 0},me=function(e){var t=function(e){for(var t=[],n=8-e.length%8,r=0;r<n;r++)e.push(0);for(var o=0;o<e.length/8;o++){for(var a=8*o,i=[],l=0;l<8;l++){var s=l;i.push(e[a+s])}t.push(he(i))}return String.fromCharCode.apply(String,t)}(function(e){var t=ge(e.form),n=fe(e.id,16),r=[];if(e.entries.length!=e.form.length)throw new Error("Expected data and form to be the same size");for(var o=0;o<e.entries.length;o++){var a=e.entries[o],i=e.form[o].dataType;r.push(ye(a,i))}return[t,n].concat(r).flat()}(e));return t};function be(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var je=b.default.create({inputsContainer:{flexGrow:1,backgroundColor:S},linksContainer:{width:"100%",height:80,paddingVertical:10,backgroundColor:C,borderBottomWidth:1,borderBottomColor:k},linkContainer:{alignItems:"center",justifyContent:"center",paddingHorizontal:20,marginLeft:10,backgroundColor:I,borderRadius:10,borderWidth:2,borderColor:k},linkText:{fontFamily:"Open Sans",fontWeight:"500",fontSize:18,color:P},buttonContainer:{alignItems:"center",justifyContent:"center",height:120,margin:20,borderRadius:20,borderWidth:2,borderColor:k,backgroundColor:C},buttonText:{fontFamily:"Open Sans",fontWeight:"700",fontSize:20,color:k}});const xe=function(e){var t=e.route,n=e.navigation,r=(0,a.useRef)(),l=t.params,s=l.form,u=l.mode,c=(0,a.useState)([]),d=(0,o.default)(c,2),f=d[0],p=d[1];Math.max(0,80-(70+w));(0,a.useEffect)((function(){var e=[];s.forEach((function(t){var n=null;switch(t.ui.type){case"text":n="";break;case"number":case"timer":case"slider":case"radio":case"dropdown":n=0;break;case"toggle":n=!1}e.push(n)})),p(e)}),[]);var g=(0,a.useState)(!1),b=(0,o.default)(g,2),x=b[0],v=b[1],O=[];s.forEach((function(e,t){"header"==e.ui.type&&O.push((0,z.jsx)(h.default,{onPress:function(){r.current.scrollTo({x:0,y:f[t]-10,animated:!0})},children:(0,z.jsx)(i.default,{style:je.linkContainer,children:(0,z.jsx)(m.default,{style:je.linkText,children:e.title})})},t))}));var C=[];return f.forEach((function(e,t){C.push((0,z.jsx)(ue,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?be(Object(n),!0).forEach((function(t){(0,j.default)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):be(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({value:e,setValue:function(e){return function(e,t){p((function(n){var r=(0,A.default)(n);return r[e]=t,r}))}(t,e)}},s[t]),t))})),(0,z.jsxs)(i.default,{style:{flex:1},children:[O.length>0?(0,z.jsx)(i.default,{children:(0,z.jsx)(y.default,{style:je.linksContainer,contentContainerStyle:{paddingRight:10},horizontal:!0,showsHorizontalScrollIndicator:!1,children:O})}):(0,z.jsx)(i.default,{style:{height:1,backgroundColor:k}}),(0,z.jsxs)(y.default,{ref:r,style:je.inputsContainer,scrollEnabled:!0,showsVerticalScrollIndicator:!1,children:[C,(0,z.jsx)(h.default,{onPress:function(){if(!x){v(!0);var e=Date.now(),t=[];s.forEach((function(e,n){"header"!=e.ui.type&&t.push("number"==typeof f[n]?Math.round(f[n]):f[n])}));var r=me({form:s.filter((function(e){return"header"!=e.ui.type})),id:e,entries:t});J({id:e,buffer:r},u).then(n.goBack)}},children:(0,z.jsx)(i.default,{style:[je.buttonContainer,{marginBottom:100}],children:(0,z.jsx)(m.default,{style:je.buttonText,children:"Save"})})})]})]})};var ve=b.default.create({wrapper:{width:"100%",flex:1,backgroundColor:C},input:{margin:10,padding:10,maxHeight:200,borderRadius:10,backgroundColor:S}});const Oe=function(e){var t=e.route,n=e.navigation,l=t.params.mode,s=(0,a.useState)("[]"),u=(0,o.default)(s,2),c=u[0],d=u[1],f=(0,a.useState)(!1),h=(0,o.default)(f,2),p=h[0],g=h[1],y=function(){var e=(0,r.default)((function*(){if(!p){g(!0);var e=yield _(c,l);e.success?n.goBack():(alert("Failed To Upload Schema\n\n"+e.reason),g(!1))}}));return function(){return e.apply(this,arguments)}}();return(0,z.jsxs)(i.default,{style:ve.wrapper,children:[(0,z.jsx)(K.default,{style:ve.input,value:c,onChangeText:d,multiline:!0}),(0,z.jsx)(R,{handlePress:y,children:"Upload"})]})};var we=n(9085);const Ce=function(e){var t=e.data;return(0,z.jsx)(we.default,{value:t,ecl:"M",size:300,color:P,backgroundColor:C})};var Se=b.default.create({wrapper:{width:"100%",flex:1,alignItems:"center",justifyContent:"center",backgroundColor:C}});const Te=function(e){var t=e.route,n=e.navigation,r=t.params,l=r.id,s=r.data,u=r.mode,c=(0,a.useState)(!1),d=(0,o.default)(c,2),f=d[0],h=d[1];return(0,z.jsxs)(i.default,{style:Se.wrapper,children:[(0,z.jsx)(Ce,{data:s}),(0,z.jsx)(i.default,{style:{width:300,marginTop:10},children:(0,z.jsx)(R,{handlePress:function(){f||(h(!0),confirm("Are You Sure?\n\nIf you delete this qr code all of the scouting information for this entry will be lost.")?Q(l,u).then(n.goBack):h(!1))},marginHorizontal:0,children:"Delete"})})]})};const Pe=function(){var e=(0,p.default)();return(0,z.jsxs)(e.Navigator,{initialRouteName:"Default",screenOptions:{headerShown:!1},children:[(0,z.jsx)(e.Screen,{name:"Default",initialParams:{mode:"Match"},component:Y}),(0,z.jsx)(e.Screen,{name:"DataEntry",component:xe,options:{headerShown:!0,headerTitle:"Scouting Form",headerStyle:{height:70,backgroundColor:C,shadowOpacity:0},headerTitleStyle:{fontFamily:"Open Sans",fontWeight:"700",fontSize:24,color:P},gestureEnabled:!1,headerLeft:function(e){var t=e.onPress;return(0,z.jsx)(h.default,{onPress:function(){confirm("Are You Sure?\n\nIf you exit the page all of the scouting information for this entry will be lost.")&&t()},children:(0,z.jsx)(i.default,{style:{flex:1,width:80,alignItems:"center",justifyContent:"center"},children:(0,z.jsx)(d.FontAwesomeIcon,{icon:f.faChevronLeft,size:24,color:k})})})}}}),(0,z.jsx)(e.Screen,{name:"UploadSchema",component:Oe,options:{headerShown:!0,headerTitle:"Upload Schema",headerStyle:{height:O+70,backgroundColor:C,shadowOpacity:0},headerTitleStyle:{fontFamily:"Open Sans",fontWeight:"700",fontSize:24,color:P},headerLeft:function(e){var t=e.onPress;return(0,z.jsx)(h.default,{onPress:function(){t()},children:(0,z.jsx)(i.default,{style:{flex:1,width:80,alignItems:"center",justifyContent:"center"},children:(0,z.jsx)(d.FontAwesomeIcon,{icon:f.faChevronLeft,size:24,color:k})})})}}}),(0,z.jsx)(e.Screen,{name:"OpenQr",component:Te,options:{headerShown:!0,headerTitle:"Scan QR Code",headerStyle:{height:O+70,backgroundColor:C,shadowOpacity:0},headerTitleStyle:{fontFamily:"Open Sans",fontWeight:"700",fontSize:24,color:P},headerLeft:function(e){var t=e.onPress;return(0,z.jsx)(h.default,{onPress:function(){t()},children:(0,z.jsx)(i.default,{style:{flex:1,width:80,alignItems:"center",justifyContent:"center"},children:(0,z.jsx)(d.FontAwesomeIcon,{icon:f.faChevronLeft,size:24,color:k})})})}}})]})};const ke=function(){var e=(0,p.default)();return(0,z.jsxs)(e.Navigator,{initialRouteName:"Default",screenOptions:{headerShown:!1},children:[(0,z.jsx)(e.Screen,{name:"Default",initialParams:{mode:"Pit"},component:Y}),(0,z.jsx)(e.Screen,{name:"DataEntry",component:xe,options:{headerShown:!0,headerTitle:"Scouting Form",headerStyle:{height:70,backgroundColor:C,shadowOpacity:0},headerTitleStyle:{fontFamily:"Open Sans",fontWeight:"700",fontSize:24,color:P},gestureEnabled:!1,headerLeft:function(e){var t=e.onPress;return(0,z.jsx)(h.default,{onPress:function(){confirm("Are You Sure?\n\nIf you exit the page all of the scouting information for this entry will be lost.")&&t()},children:(0,z.jsx)(i.default,{style:{flex:1,width:80,alignItems:"center",justifyContent:"center"},children:(0,z.jsx)(d.FontAwesomeIcon,{icon:f.faChevronLeft,size:24,color:k})})})}}}),(0,z.jsx)(e.Screen,{name:"UploadSchema",component:Oe,options:{headerShown:!0,headerTitle:"Upload Schema",headerStyle:{height:O+70,backgroundColor:C,shadowOpacity:0},headerTitleStyle:{fontFamily:"Open Sans",fontWeight:"700",fontSize:24,color:P},headerLeft:function(e){var t=e.onPress;return(0,z.jsx)(h.default,{onPress:function(){t()},children:(0,z.jsx)(i.default,{style:{flex:1,width:80,alignItems:"center",justifyContent:"center"},children:(0,z.jsx)(d.FontAwesomeIcon,{icon:f.faChevronLeft,size:24,color:k})})})}}}),(0,z.jsx)(e.Screen,{name:"OpenQr",component:Te,options:{headerShown:!0,headerTitle:"Scan QR Code",headerStyle:{height:O+70,backgroundColor:C,shadowOpacity:0},headerTitleStyle:{fontFamily:"Open Sans",fontWeight:"700",fontSize:24,color:P},headerLeft:function(e){var t=e.onPress;return(0,z.jsx)(h.default,{onPress:function(){t()},children:(0,z.jsx)(i.default,{style:{flex:1,width:80,alignItems:"center",justifyContent:"center"},children:(0,z.jsx)(d.FontAwesomeIcon,{icon:f.faChevronLeft,size:24,color:k})})})}}})]})};const Ie=function(){var e=(0,l.useFonts)({"Open Sans":n(7383)}),t=(0,o.default)(e,1)[0],h=(0,a.useCallback)((0,r.default)((function*(){t&&(yield s.hideAsync())})),[t]);if(!t)return null;var p=(0,c.default)(),g={Match:f.faChessKnight,Pit:f.faComments,Settings:f.faGear};return(0,z.jsx)(i.default,{style:{flex:1},onLayout:h,children:(0,z.jsx)(u.default,{children:(0,z.jsxs)(p.Navigator,{initialRouteName:"Match",screenOptions:function(e){var t=e.route;return{headerShown:!1,tabBarInactiveTintColor:T,tabBarActiveTintColor:k,tabBarStyle:{paddingTop:10,marginBottom:10,borderTopWidth:1,borderTopColor:k},tabBarLabelStyle:{marginTop:6},tabBarIcon:function(e){var n=e.color,r=e.size;return(0,z.jsx)(d.FontAwesomeIcon,{icon:g[t.name],color:n,size:r})}}},children:[(0,z.jsx)(p.Screen,{name:"Match",component:Pe}),(0,z.jsx)(p.Screen,{name:"Pit",component:ke})]})})})}},7383:(e,t,n)=>{e.exports=n.p+"static/media/OpenSans.071a1becc7f00e33cc5b.ttf"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}n.m=e,(()=>{var e=[];n.O=(t,r,o,a)=>{if(!r){var i=1/0;for(c=0;c<e.length;c++){for(var[r,o,a]=e[c],l=!0,s=0;s<r.length;s++)(!1&a||i>=a)&&Object.keys(n.O).every((e=>n.O[e](r[s])))?r.splice(s--,1):(l=!1,a<i&&(i=a));if(l){e.splice(c--,1);var u=o();void 0!==u&&(t=u)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,o,a]}})(),n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,o){if(1&o&&(r=this(r)),8&o)return r;if("object"===typeof r&&r){if(4&o&&r.__esModule)return r;if(16&o&&"function"===typeof r.then)return r}var a=Object.create(null);n.r(a);var i={};e=e||[null,t({}),t([]),t(t)];for(var l=2&o&&r;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((e=>i[e]=()=>r[e]));return i.default=()=>r,n.d(a,i),a}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",(()=>{var e={179:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,[i,l,s]=r,u=0;if(i.some((t=>0!==e[t]))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(s)var c=s(n)}for(t&&t(r);u<i.length;u++)a=i[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},r=self.webpackChunkweb=self.webpackChunkweb||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var r=n.O(void 0,[205],(()=>n(5530)));r=n.O(r)})();
//# sourceMappingURL=main.f8d79430.js.map