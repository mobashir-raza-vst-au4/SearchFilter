(this["webpackJsonpsearch-people"]=this["webpackJsonpsearch-people"]||[]).push([[0],{25:function(e,t,a){e.exports=a(56)},30:function(e,t,a){},37:function(e,t,a){},56:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),s=a.n(c),o=(a(30),a(6)),i=a(7),l={data:""};var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0,a=JSON.parse(JSON.stringify(e));switch(t.type){case"set_data":return a.data=t.payload,a}return e},p={id:1};var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0,a=JSON.parse(JSON.stringify(e));switch(t.type){case"set_id":return a.id=t.payload,a}return e},m={input:""};var f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0,a=JSON.parse(JSON.stringify(e));switch(t.type){case"set_input":return a.input=t.payload,a}return e},v=Object(i.b)({setData:u,setId:d,setInput:f}),h=Object(i.c)(v),b=a(2),y=a(3),g=a(5),O=a(4),j=(a(37),Object(o.b)((function(e){return{store:e}}),(function(e){return{setInput:e}}))(function(e){Object(g.a)(a,e);var t=Object(O.a)(a);function a(){var e;Object(b.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleInput=function(t){var a={type:"set_input",payload:t.target.value};e.props.setInput(a)},e}return Object(y.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-dark bg-dark fixed-top"},r.a.createElement("div",{className:"container-fluid justify-content-center"},r.a.createElement("div",{className:"d-flex"},r.a.createElement("input",{onChange:function(t){e.handleInput(t)},className:"form-control mx-2",type:"search",placeholder:"Search","aria-label":"Search"})))))}}]),a}(n.Component))),E=a(8),w=a.n(E),N=a(13),k=a(14),I=a.n(k),x=Object(o.b)((function(e){return{store:e}}),(function(e){return{setId:e}}))(function(e){Object(g.a)(a,e);var t=Object(O.a)(a);function a(){var e;Object(b.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleId=function(t){var a={type:"set_id",payload:t};e.props.setId(a)},e}return Object(y.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"pt-5"},r.a.createElement("nav",{"aria-label":"Page navigation example"},r.a.createElement("ul",{class:"pagination justify-content-center"},r.a.createElement("li",{onClick:function(){e.handleId(1)},key:"1",class:"page-item"},r.a.createElement("span",{class:"page-link"},"1")),r.a.createElement("li",{onClick:function(){e.handleId(2)},key:"2",class:"page-item"},r.a.createElement("span",{class:"page-link"},"2")))))}}]),a}(n.Component)),C=function(e){Object(g.a)(a,e);var t=Object(O.a)(a);function a(){return Object(b.a)(this,a),t.apply(this,arguments)}return Object(y.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{style:{width:"18rem"},className:"pt-5"},r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:this.props.src,className:"card-img-top",alt:"..."}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},this.props.firstName," ",this.props.lastName),r.a.createElement("p",{className:"card-text"},this.props.email))))}}]),a}(n.Component),_=Object(o.b)((function(e){return{data:e.setData.data,id:e.setId.id,input:e.setInput.input}}),(function(e){return{setData:e}}))(function(e){Object(g.a)(a,e);var t=Object(O.a)(a);function a(){var e;Object(b.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).componentDidMount=Object(N.a)(w.a.mark((function t(){var a,n;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,I.a.get("https://reqres.in/api/users?page=".concat(e.props.id));case 3:a=t.sent,n={type:"set_data",payload:a.data.data},e.props.setData(n),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])}))),e.componentDidUpdate=function(){var t=Object(N.a)(w.a.mark((function t(a,n){return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.props.id!==a.id){t.next=4;break}return t.abrupt("return",!1);case 4:return t.prev=4,t.next=7,I.a.get("https://reqres.in/api/users?page=".concat(e.props.id)).then((function(t){var a={type:"set_data",payload:t.data.data};e.props.setData(a)}));case 7:t.next=12;break;case 9:t.prev=9,t.t0=t.catch(4),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[4,9]])})));return function(e,a){return t.apply(this,arguments)}}(),e}return Object(y.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container pt-5"},r.a.createElement("div",{className:"row justify-content-center"},this.props.data&&this.props.data.filter((function(t){return null===e.props.input||"".concat(t.first_name.toLowerCase()," ").concat(t.last_name.toLowerCase()).includes(e.props.input.toLowerCase())||t.last_name.toLowerCase().includes(e.props.input.toLowerCase())?t:void 0})).map((function(e){return r.a.createElement(C,{src:e.avatar,firstName:e.first_name,lastName:e.last_name,email:e.email})}))),r.a.createElement(x,null))}}]),a}(n.Component)),S=function(e){Object(g.a)(a,e);var t=Object(O.a)(a);function a(){return Object(b.a)(this,a),t.apply(this,arguments)}return Object(y.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(j,null),r.a.createElement(_,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,{store:h},r.a.createElement(S,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.075b9a00.chunk.js.map