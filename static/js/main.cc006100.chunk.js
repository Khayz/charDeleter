(this["webpackJsonpwork-react-2"]=this["webpackJsonpwork-react-2"]||[]).push([[0],[,function(e,t,n){e.exports={userInput:"ValidationComponent_userInput__2oHNM",someText:"ValidationComponent_someText__58Hoa"}},function(e,t,n){e.exports={App:"App_App__25kXy",listChars:"App_listChars__3WxK8"}},,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(4),l=n.n(s),u=n(5),c=n(6),o=n(8),i=n(7),p=n(9),h=n(2),m=n.n(h),d=n(1),f=n.n(d);function v(e){var t=null;t=e.userInput.length<=5?r.a.createElement("h3",{className:f.a.someText},"Text too short"):r.a.createElement("h3",{className:f.a.someText},"Text long enough");var n=null;return e.userInput.length>=1&&(n=r.a.createElement("h3",{className:f.a.someText},"Now click in anyword and enjoy!")),r.a.createElement("div",{className:f.a.userInput},r.a.createElement("h3",{className:f.a.someText},e.userInput),t,n)}n(15);function I(e){return r.a.createElement("div",{onClick:e.deleteChar,className:"Char"},e.char)}var E=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).state={userInput:""},n.lengthHandler=function(e){n.setState({userInput:e.target.value})},n.deleteCharHandler=function(e){var t=n.state.userInput.split("");t.splice(e,1),n.setState({userInput:t.join("")})},n}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=null;return this.state.userInput&&(t=r.a.createElement(a.Fragment,null,this.state.userInput.split("").map((function(t,n){return r.a.createElement(I,{deleteChar:function(){return e.deleteCharHandler(n)},key:Math.random(),char:t})})))),r.a.createElement("div",{className:m.a.App},r.a.createElement("div",null,r.a.createElement("input",{onChange:this.lengthHandler,placeholder:"Type Something",value:this.state.userInput,type:"text"})),r.a.createElement(v,{userInput:this.state.userInput}),r.a.createElement("div",{className:m.a.listChars},t))}}]),t}(a.Component);n(16);l.a.render(r.a.createElement(E,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.cc006100.chunk.js.map