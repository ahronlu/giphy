(this.webpackJsonpgiphy=this.webpackJsonpgiphy||[]).push([[0],{16:function(e,t,a){e.exports=a(40)},21:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(15),i=a.n(c),s=(a(21),a(3)),l=a.n(s),u=a(4),m=a(2),o=a(5),p=a.n(o),f=function(){return r.a.createElement("div",{className:"loader"},r.a.createElement("i",{className:"fas fa-spinner fa-10x fa-spin"}))},v=function(e){for(var t=e.totalItems,a=e.itemsPerPage,n=e.pageSelected,c=e.currentPage,i=[],s=1;s<=Math.ceil(t/a);s++)i.push(s);return r.a.createElement("nav",null,r.a.createElement("ul",{className:"pagination pagination-sm justify-content-end border-0"},i.map((function(e){var t="page-item ";return e===c&&(t+="active"),r.a.createElement("li",{className:t},r.a.createElement("a",{href:"!#",onClick:function(){return n(e)},className:"page-link"},e))}))))},b=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],c=t[1],i=Object(n.useState)(""),s=Object(m.a)(i,2),o=s[0],b=s[1],d=Object(n.useState)(!1),g=Object(m.a)(d,2),h=g[0],E=g[1],j=Object(n.useState)(!1),O=Object(m.a)(j,2),y=O[0],N=O[1],k=Object(n.useState)(1),x=Object(m.a)(k,2),w=x[0],S=x[1],P=Object(n.useState)(25),I=Object(m.a)(P,2),C=I[0],H=(I[1],w*C),K=H-C,G=a.slice(K,H);Object(n.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return E(!0),e.prev=1,e.next=4,p()("https://api.giphy.com/v1/gifs/trending",{params:{api_key:"QYHGnuIH2dAvwpKhnbpclb1OFNkCM5lK",limit:100}});case 4:t=e.sent,c(t.data.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),N(!0);case 11:E(!1),setTimeout((function(){return N(!1)}),4e3);case 13:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var M=function(){var e=Object(u.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),E(!0),e.prev=2,e.next=5,p()("https://api.giphy.com/v1/gifs/search",{params:{api_key:"QYHGnuIH2dAvwpKhnbpclb1OFNkCM5lK",limit:C,q:o}});case 5:a=e.sent,c(a.data.data),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),N(!0),setTimeout((function(){return N(!1)}),4e3);case 13:E(!1);case 14:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"m-2"},y&&r.a.createElement("div",{className:"alert alert-danger alert-dismissible fade show",role:"alert"},"Please try again"),r.a.createElement("form",{onSubmit:M,className:"form-inline justify-content-center m-2"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"search",onChange:function(e){return b(e.target.value)},value:o}),r.a.createElement("button",{className:"btn btn-primary mx-2"},"Go")),r.a.createElement(v,{pageSelected:function(e){S(e)},currentPage:w,itemsPerPage:C,totalItems:a.length}),r.a.createElement("div",{className:"container gifs"},h?r.a.createElement(f,null):G.map((function(e){return r.a.createElement("div",{className:"gif",key:e.id},r.a.createElement("img",{src:e.images.fixed_height.url,alt:"gif"}))}))))};var d=function(){return r.a.createElement("div",null,r.a.createElement(b,null))};i.a.render(r.a.createElement(d,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.e30d4815.chunk.js.map