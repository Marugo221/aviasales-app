(this.webpackJsonpaviasales=this.webpackJsonpaviasales||[]).push([[0],[,,,,function(e,t,n){e.exports={one:"ticket-info_one__28USy",infoTitle:"ticket-info_infoTitle__3Ioy7",info:"ticket-info_info__1_Lf7"}},,function(e,t,n){e.exports={tabs:"tabs_tabs__2yO4y",btn:"tabs_btn__3IzjR",active:"tabs_active__1weiv"}},function(e,t,n){e.exports={btn:"tickets-all_btn__3NRus",noTicketsMessage:"tickets-all_noTicketsMessage__2C4Y1"}},,,,,,function(e,t,n){e.exports={visible:"tiket_visible__3738l",invisible:"tiket_invisible__2Yfu5",ticket:"tiket_ticket__v6k5n",header:"tiket_header__1PV8a",price:"tiket_price__1V_Jo"}},function(e,t,n){e.exports={checkbox:"checkbox_checkbox__3OIWQ",text:"checkbox_text__1YN3x",textMob:"checkbox_textMob__TF-Mt"}},,,function(e,t,n){e.exports={header:"header_header__2TKYz",logo:"header_logo__72Pr_"}},,function(e,t,n){e.exports={"loader-wrap":"spinner_loader-wrap__1Y83U","lds-ellipsis":"spinner_lds-ellipsis__2JbT3","lds-ellipsis1":"spinner_lds-ellipsis1__3vz7I","lds-ellipsis2":"spinner_lds-ellipsis2__9bUkW","lds-ellipsis3":"spinner_lds-ellipsis3__36qgP"}},function(e,t,n){e.exports={sidebar:"filters_sidebar__2twNZ",header:"filters_header__1_fSh"}},function(e,t,n){},,,function(e,t,n){e.exports={main:"main_main__HBJ87"}},,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"fetchTicketsSuccess",(function(){return z})),n.d(r,"fetchTicketsError",(function(){return G})),n.d(r,"getSearchIdSuccess",(function(){return U})),n.d(r,"getSearchId",(function(){return K})),n.d(r,"stopFetching",(function(){return V})),n.d(r,"fetchTickets",(function(){return W})),n.d(r,"sortPrice",(function(){return J})),n.d(r,"sortTime",(function(){return Y})),n.d(r,"sortOptimal",(function(){return Z})),n.d(r,"filterAllFunc",(function(){return X})),n.d(r,"filterZeroFunc",(function(){return B})),n.d(r,"filterOneFunc",(function(){return q})),n.d(r,"filterTwoFunc",(function(){return Q})),n.d(r,"filterThreeFunc",(function(){return $})),n.d(r,"calcLoadingProgress",(function(){return ee})),n.d(r,"removeLoadingProgress",(function(){return te})),n.d(r,"finishLoadingProgress",(function(){return ne})),n.d(r,"showMoreTickets",(function(){return re}));var c=n(1),i=n.n(c),s=n(10),o=n.n(s),a=n(5),u=n(8),l=n(23),f=n(3),j=n(2),b=n(40),d={searchId:null,tickets:[],howManyTicketsToShow:5,stop:!1,sort:{price:!0,time:!1,optimal:!1},filters:{zero:!0,one:!0,two:!0,three:!0},filterAll:!0,loading:!0,loadingProgress:0,loadingProgressDelete:!1,error:0},O=function(e,t,n){return Object(f.a)(e).map((function(e){return e.segments.some((function(e){return e.stops.length===t}))||"number"!==typeof t?Object(j.a)(Object(j.a)({},e),{},{visible:!n}):Object(j.a)({},e)}))},h=function(e,t,n){var r=!0;return function(e,t,n){return r=!n||!r,Object(j.a)(Object(j.a)({},e),{},{tickets:Object(f.a)(t).sort((function(e,t){return r?e.price-t.price:t.price-e.price})),sort:{price:!0,time:!1,optimal:!1}})}}(),_=function(e,t,n){var r=!0;return function(e,t,n){return r=!n||!r,Object(j.a)(Object(j.a)({},e),{},{tickets:Object(f.a)(t).sort((function(e,t){var n=e.segments[0].duration+e.segments[1].duration,c=t.segments[0].duration+t.segments[1].duration;return r?n-c:c-n})),sort:{price:!1,time:!0,optimal:!1}})}}(),p=function(e,t,n){var r=!0;return function(e,t,n){r=!n||!r;var c=Object(f.a)(t).map((function(e){return e.segments[0].duration+e.segments[1].duration})).reduce((function(e,t){return e+t}))/(2*t.length),i=Object(f.a)(t).sort((function(e,t){return e.price-t.price})),s=Object(f.a)(i).filter((function(e){return r?e.segments[0].duration<=c&&e.segments[1].duration<=c:e.segments[0].duration>c&&e.segments[1].duration>c})),o=new Set([].concat(Object(f.a)(s),Object(f.a)(i)));return Object(j.a)(Object(j.a)({},e),{},{tickets:Object(f.a)(o),sort:{price:!1,time:!1,optimal:!0}})}}(),x=function(e,t){var n=100*t.length/9e3;return e?100:n>100?100:n},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0,n=e.error,r=e.filters,c=r.zero,i=r.one,s=r.two,o=r.three,a=e.filterAll,u=e.howManyTicketsToShow,l=e.sort,T=l.price,m=l.time,k=l.optimal,v=e.stop,g=e.tickets;switch(t.type){case"STOP_FETCHING":return Object(j.a)(Object(j.a)({},e),{},{stop:!0});case"GET_SEARCH_ID_SUCCESS":return Object(j.a)(Object(j.a)({},e),{},{searchId:t.searchId});case"FETCH_TICKETS_SUCCESS":var E=Object(f.a)(t.tickets).map((function(e){return Object(j.a)({id:Object(b.a)(),visible:!0},e)}));return Object(j.a)(Object(j.a)({},e),{},{tickets:[].concat(Object(f.a)(g),Object(f.a)(E)).sort((function(e,t){return e.price-t.price})),loading:!1});case"FETCH_TICKETS_ERROR":return Object(j.a)(Object(j.a)({},e),{},{loading:!1,error:n+1});case"SORT_PRICE":return h(e,g,T);case"SORT_TIME":return _(e,g,m);case"SORT_OPTIMAL":return p(e,g,k);case"FILTER_ALL":return Object(j.a)(Object(j.a)({},e),{},{tickets:O(g,null,a),filterAll:!a,filters:{zero:!a,one:!a,two:!a,three:!a}});case"FILTER_ZERO":return Object(j.a)(Object(j.a)({},e),{},{tickets:O(g,0,c),filters:{zero:!c,one:i,two:s,three:o},filterAll:!0===!c&&!0===i&&!0===s&&!0===o});case"FILTER_ONE":return Object(j.a)(Object(j.a)({},e),{},{tickets:O(g,1,i),filters:{zero:c,one:!i,two:s,three:o},filterAll:!0===!i&&!0===c&&!0===s&&!0===o});case"FILTER_TWO":return Object(j.a)(Object(j.a)({},e),{},{tickets:O(g,2,s),filters:{zero:c,one:i,two:!s,three:o},filterAll:!0===!s&&!0===c&&!0===i&&!0===o});case"FILTER_THREE":return Object(j.a)(Object(j.a)({},e),{},{tickets:O(g,3,o),filters:{zero:c,one:i,two:s,three:!o},filterAll:!0===!o&&!0===c&&!0===i&&!0===s});case"SHOW_MORE_TICKETS":return Object(j.a)(Object(j.a)({},e),{},{howManyTicketsToShow:u+5});case"LOADING_PROGRESS":return Object(j.a)(Object(j.a)({},e),{},{loadingProgress:x(v,g)});case"REMOVE_LOADING_PROGRESS":return Object(j.a)(Object(j.a)({},e),{},{loadingProgressDelete:!0});default:return e}},m="object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):u.b,k=Object(u.c)(T,m(Object(u.a)(l.a))),v=(n(21),n(17)),g=n.n(v),E=n.p+"static/media/Logo.1b6f90ed.png",S=n(0),w=function(){return Object(S.jsx)("div",{className:g.a.header,children:Object(S.jsx)("img",{className:g.a.logo,src:E,alt:"logo"})})},I=n(24),R=n.n(I),y=n(6),N=n.n(y),C=function(e){var t=e.active,n=e.text,r=e.sort,c=t?"".concat(N.a.btn," ").concat(N.a.active):N.a.btn;return Object(S.jsx)("button",{onClick:r,type:"button",className:c,children:n})},F=n(9),M=n.n(F),L=n(18),P=n(11),A=n(12),D=function(){function e(){Object(P.a)(this,e)}return Object(A.a)(e,[{key:"getSearchId",value:function(){var e=Object(L.a)(M.a.mark((function e(){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://front-test.beta.aviasales.ru/search").then((function(e){if(!e.ok)throw new Error("\u041e\u0448\u0438\u0431\u043a\u0430, \u0441\u0442\u0430\u0442\u0443\u0441 \u043e\u0448\u0438\u0431\u043a\u0438 ".concat(e.status));return e.json()})).then((function(e){return e.searchId})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getTickets",value:function(){var e=Object(L.a)(M.a.mark((function e(t){return M.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://front-test.beta.aviasales.ru/tickets?searchId=".concat(t)).then((function(e){if(!e.ok)throw new Error("\u041e\u0448\u0438\u0431\u043a\u0430, \u0441\u0442\u0430\u0442\u0443\u0441 \u043e\u0448\u0438\u0431\u043a\u0438 ".concat(e.status));return console.log(e),e.json()})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}(),H=new D,z=function(e){return{type:"FETCH_TICKETS_SUCCESS",tickets:e}},G=function(){return{type:"FETCH_TICKETS_ERROR"}},U=function(e){return{type:"GET_SEARCH_ID_SUCCESS",searchId:e}},K=function(){return function(e){H.getSearchId().then((function(t){e(U(t))}),(function(){return e(G())}))}},V=function(){return{type:"STOP_FETCHING"}},W=function(e){return function(t){H.getTickets(e).then((function(e){e.stop?t(V()):t(z(e.tickets))}),(function(){t(G())}))}},J=function(){return{type:"SORT_PRICE"}},Y=function(){return{type:"SORT_TIME"}},Z=function(){return{type:"SORT_OPTIMAL"}},X=function(){return{type:"FILTER_ALL"}},B=function(){return{type:"FILTER_ZERO"}},q=function(){return{type:"FILTER_ONE"}},Q=function(){return{type:"FILTER_TWO"}},$=function(){return{type:"FILTER_THREE"}},ee=function(){return{type:"LOADING_PROGRESS"}},te=function(){return{type:"REMOVE_LOADING_PROGRESS"}},ne=function(){return function(e){setTimeout((function(){e(te())}),2e3)}},re=function(){return{type:"SHOW_MORE_TICKETS"}},ce=Object(a.b)((function(e){var t=e.sort;return{price:t.price,time:t.time,optimal:t.optimal}}),r)((function(e){var t=e.price,n=e.time,r=e.optimal,c=e.sortPrice,i=e.sortTime,s=e.sortOptimal;return Object(S.jsxs)("div",{className:N.a.tabs,children:[Object(S.jsx)(C,{active:t,sort:c,text:"\u0441\u0430\u043c\u044b\u0439 \u0434\u0435\u0448\u0435\u0432\u044b\u0439"}),Object(S.jsx)(C,{active:n,sort:i,text:"\u0441\u0430\u043c\u044b\u0439 \u0431\u044b\u0441\u0442\u0440\u044b\u0439"}),Object(S.jsx)(C,{active:r,sort:s,text:"\u043e\u043f\u0442\u0438\u043c\u0430\u043b\u044c\u043d\u044b\u0439"})]})})),ie=n(26),se=n(27),oe=n(25),ae=n(7),ue=n.n(ae),le=n(13),fe=n.n(le),je=n(4),be=n.n(je),de=function(e){return e>9?e:"0"+e},Oe=function(e){var t=new Date(e).getHours(),n=new Date(e).getMinutes();return de(t)+":"+de(n)},he=function(e){var t=e.details,n=t.transfers,r=t.date,c=t.destination,i=t.duration,s=t.origin,o=t.stops,a=new Date(new Date(r).getTime()+new Date(60*i*100).getTime()),u=Oe(r),l=Oe(a),f=Math.floor(i/60),j=i-60*f,b=o.join(", ");return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)("div",{className:be.a.one,children:[Object(S.jsx)("div",{className:be.a.infoTitle,children:"".concat(s," ").concat(c)}),Object(S.jsx)("div",{className:be.a.infoTitle,children:"\u0432 \u043f\u0443\u0442\u0438"}),Object(S.jsxs)("div",{className:be.a.infoTitle,children:[n," \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438"]})]}),Object(S.jsxs)("div",{className:be.a.one,children:[Object(S.jsx)("div",{className:be.a.info,children:"".concat(u,"-").concat(l)}),Object(S.jsx)("div",{className:be.a.info,children:"".concat(f,"\u0447 ").concat(j,"\u043c")}),Object(S.jsx)("div",{className:be.a.info,children:b})]})]})},_e=function(e){var t=e.price,n="https://pics.avs.io/99/36/"+e.carrier+".png",r=e.segments.map((function(e,t){return Object(S.jsx)(he,{details:e},t)}));return Object(S.jsxs)("div",{className:fe.a.ticket,children:[Object(S.jsxs)("div",{className:fe.a.header,children:[Object(S.jsx)("div",{className:fe.a.price,children:"".concat(t," \u0420")}),Object(S.jsx)("img",{src:n,alt:""})]}),r]})},pe=n(19),xe=n.n(pe),Te=function(){return Object(S.jsxs)("div",{className:xe.a["loader-wrap"],children:["\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0431\u0438\u043b\u0435\u0442\u043e\u0432...",Object(S.jsxs)("div",{className:xe.a["lds-ellipsis"],children:[Object(S.jsx)("div",{}),Object(S.jsx)("div",{}),Object(S.jsx)("div",{})]})]})},me=function(e){var t=e.func;return Object(S.jsx)("button",{onClick:t,type:"button",className:ue.a.btn,children:"\u041f\u041e\u041a\u0410\u0417\u0410\u0422\u042c \u0415\u0429\u0401 5 \u0411\u0418\u041b\u0415\u0422\u041e\u0412!"})},ke=function(){return Object(S.jsx)("div",{className:ue.a.noTicketsMessage,children:Object(S.jsx)("span",{children:"\u0420\u0435\u0439\u0441\u043e\u0432, \u043f\u043e\u0434\u0445\u043e\u0434\u044f\u0449\u0438\u0445 \u043f\u043e\u0434 \u0437\u0430\u0434\u0430\u043d\u043d\u044b\u0439 \u0444\u0438\u043b\u044c\u0442\u0440, \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e."})})},ve=["id","visible"],ge=function(e){Object(se.a)(n,e);var t=Object(oe.a)(n);function n(){return Object(P.a)(this,n),t.apply(this,arguments)}return Object(A.a)(n,[{key:"componentDidMount",value:function(){(0,this.props.getSearchId)()}},{key:"componentDidUpdate",value:function(){var e=this.props,t=e.fetchTickets,n=e.stop,r=e.searchId;n||t(r)}},{key:"render",value:function(){var e=this.props,t=e.howManyTicketsToShow,n=e.loading,r=e.stop,c=e.showMoreTickets,i=e.tickets,s=n?Object(S.jsx)(Te,{}):null,o=i.map((function(e){var t=e.id,n=e.visible,r=Object(ie.a)(e,ve);return n?Object(S.jsx)(_e,Object(j.a)({},r),t):null})).filter((function(e){return null!==e})).slice(0,t),a=r&&!o.length?Object(S.jsx)(ke,{}):null,u=o.length<5?null:Object(S.jsx)(me,{func:c});return Object(S.jsxs)(S.Fragment,{children:[s,o,a,u]})}}]),n}(i.a.Component),Ee=Object(a.b)((function(e){return{tickets:e.tickets,loading:e.loading,error:e.error,stop:e.stop,searchId:e.searchId,howManyTicketsToShow:e.howManyTicketsToShow}}),r)(ge),Se=function(){return Object(S.jsxs)("div",{className:R.a.main,children:[Object(S.jsx)(ce,{}),Object(S.jsx)(Ee,{})]})},we=n(14),Ie=n.n(we),Re=function(e){var t=e.checked,n=e.text,r=e.func,c="\u0412\u0441\u0435"===n?n:parseInt(n,10)||"0";return Object(S.jsxs)("div",{className:Ie.a.checkbox,children:[Object(S.jsx)("input",{id:n,type:"checkbox",checked:t,onChange:r}),Object(S.jsx)("span",{"aria-label":"checkbox",role:"checkbox",tabIndex:"0","aria-checked":t,onClick:r,onKeyDown:r}),Object(S.jsx)("label",{htmlFor:n,className:Ie.a.text,children:n}),Object(S.jsx)("label",{htmlFor:n,className:Ie.a.textMob,children:c})]})},ye=n(20),Ne=n.n(ye),Ce=Object(a.b)((function(e){var t=e.filters;return{zero:t.zero,one:t.one,two:t.two,three:t.three,all:e.filterAll}}),r)((function(e){var t=e.zero,n=e.one,r=e.two,c=e.three,i=e.all,s=e.filterAllFunc,o=e.filterZeroFunc,a=e.filterOneFunc,u=e.filterTwoFunc,l=e.filterThreeFunc;return Object(S.jsxs)("div",{className:Ne.a.sidebar,children:[Object(S.jsx)("p",{className:Ne.a.header,children:"\u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a"}),Object(S.jsx)(Re,{checked:i,func:s,text:"\u0412\u0441\u0435"}),Object(S.jsx)(Re,{checked:t,func:o,text:"\u0411\u0435\u0437 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043e\u043a"}),Object(S.jsx)(Re,{checked:n,func:a,text:"1 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0430"}),Object(S.jsx)(Re,{checked:r,func:u,text:"2 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438"}),Object(S.jsx)(Re,{checked:c,func:l,text:"3 \u043f\u0435\u0440\u0435\u0441\u0430\u0434\u043a\u0438"})]})})),Fe=function(){return Object(S.jsxs)("section",{className:"app",children:[Object(S.jsx)(w,{}),Object(S.jsx)(Ce,{}),Object(S.jsx)(Se,{})]})};o.a.render(Object(S.jsx)(a.a,{store:k,children:Object(S.jsx)(Fe,{})}),document.getElementById("root"))}],[[37,1,2]]]);
//# sourceMappingURL=main.e5392cff.chunk.js.map