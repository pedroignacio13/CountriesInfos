(this.webpackJsonpcountries=this.webpackJsonpcountries||[]).push([[0],{104:function(e,t,n){},105:function(e,t,n){},106:function(e,t,n){"use strict";n.r(t);var c=n(2),r=n(1),a=n.n(r),s=n(22),o=n.n(s),i=n(54),l=n.n(i),j=n(64),u=n(75),d=n(19),b=n(23),O=a.a.createContext(),h=(n(84),n(65));var p=function(){var e=Object(r.useContext)(O),t=e.setMostrarInputs,n=e.darkModeOn,a=e.setDarkModeOn;return Object(c.jsxs)("nav",{className:!0===n?"nav dark-nav":"nav",children:[Object(c.jsx)(b.b,{className:!0===n?"titulo dark-titulo":"titulo",to:"/",onClick:function(){return t(!0)},children:"Where in the world?"}),Object(c.jsxs)("div",{className:!0===n?"darkmode dark-titulo":"darkmode",onClick:function(){a(!n)},children:[Object(c.jsx)(h.a,{id:"lua",style:{fill:"".concat(!0===n?"white":null)}}),Object(c.jsx)("p",{children:"Dark Mode"})]})]})},x=n(7),f=n(66),m=(n(90),function(){return Object(c.jsx)("div",{className:"loading",children:Object(c.jsx)(f.Bars,{})})});n(59),n(40);var g=function(e){var t=e.pais,n=t.flag,a=t.name,s=t.population,o=t.region,i=t.capital,l=t.alpha2Code,j=Object(r.useContext)(O),u=j.setMostrarInputs,d=j.darkModeOn;return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(b.b,{className:!0===d?"card dark-card":"card",to:"/".concat(l),onClick:function(){return u(!1)},children:[Object(c.jsx)("img",{src:n,alt:a}),Object(c.jsxs)("section",{className:!0===d?"infos dark-infos":"infos",children:[Object(c.jsxs)("h4",{children:[" ",a," "]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{className:"topico",children:"Population:"})," ",s]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{className:"topico",children:"Region:"})," ",o]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{className:"topico",children:"Capital:"})," ",i]})]})]})})};n(91);var v=function(){var e=Object(r.useContext)(O).darkModeOn;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h1",{className:!0===e?"erroh1 dark-title":"erroh1",children:" Pa\xeds n\xe3o encontrado "}),Object(c.jsxs)("h3",{className:!0===e?"erroh3 dark-title":"erroh3",children:["Verifique se:",Object(c.jsx)("span",{className:!0===e?"tipo-erro dark-title":"tipo-erro",children:"- A primeira letra \xe9 mai\xfascula"}),Object(c.jsx)("span",{className:!0===e?"tipo-erro dark-title":"tipo-erro",children:"- O nome do pa\xeds est\xe1 correto (precisa ser em ingl\xeas)"}),Object(c.jsx)("span",{className:!0===e?"tipo-erro dark-title":"tipo-erro"})]})]})},k=n(6),C=n(49),N=n(5),S=n(74),y=n(117),w=function(e){var t=e.regions,n=Object(r.useContext)(O),a=n.setCountries,s=n.countriesBackup,o=n.darkModeOn;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(S.a,{onChange:function(e){return t=e.value,void a(s.filter((function(e){return e.region===t})));var t},placeholder:"Filter by region",options:t,className:"".concat(!0===o?"lista dark-lista":"lista"),components:{SelectContainer:function(e){var t=e.children,n=Object(C.a)(e,["children"]);return Object(c.jsx)(y.a,{delay:0,children:Object(c.jsx)(N.f.SelectContainer,Object(k.a)(Object(k.a)({},n),{},{children:t}))})},ValueContainer:function(e){var t=e.children,n=Object(C.a)(e,["children"]);return Object(c.jsx)(N.f.ValueContainer,Object(k.a)(Object(k.a)({},n),{},{children:t}))},IndicatorsContainer:function(e){return Object(c.jsx)("div",{children:Object(c.jsx)(N.f.IndicatorsContainer,Object(k.a)({},e))})},Placeholder:function(e){return Object(c.jsx)(N.f.Placeholder,Object(k.a)({},e))},SingleValue:function(e){var t=e.children,n=Object(C.a)(e,["children"]);return Object(c.jsx)(N.f.SingleValue,Object(k.a)(Object(k.a)({},n),{},{children:t}))},MenuList:function(e){return Object(c.jsx)(N.f.MenuList,Object(k.a)(Object(k.a)({},e),{},{children:e.children}))},Option:function(e){return Object(c.jsx)(y.a,{truncateText:!0,children:Object(c.jsx)(N.f.Option,Object(k.a)({className:!0===o?"dark-option":"option"},e))})}},styles:{container:function(e){return Object(k.a)(Object(k.a)({},e),{},{border:"".concat(!0===o?"0px":"1px solid hsl(0%, 0%, 80%)")})},valueContainer:function(e){return Object(k.a)(Object(k.a)({},e),{},{backgroundColor:"".concat(!0===o?"hsl(209, 23%, 22%)":"initial"),width:"calc(100% - 47px)",height:38.5,paddingLeft:"10px",borderTopLeftRadius:2.5,borderBottomLeftRadius:2.5})},placeholder:function(e){return Object(k.a)(Object(k.a)({},e),{},{color:"".concat(!0===o?"whitesmoke":"hsl(0,0%,80%)")})},indicatorsContainer:function(e){return Object(k.a)(Object(k.a)({},e),{},{backgroundColor:"".concat(!0===o?"hsl(209, 23%, 22%)":"initial"),height:38.5,borderTopRightRadius:2.5,borderBottomRightRadius:2.5})},singleValue:function(e){return Object(k.a)(Object(k.a)({},e),{},{color:"".concat(!0===o?"whitesmoke":"initial")})},menuList:function(e){return Object(k.a)(Object(k.a)({},e),{},{backgroundColor:"".concat(!0===o?"hsl(209, 23%, 22%)":"initial"),borderRadius:3})},option:function(e,t){return Object(k.a)(Object(k.a)({},e),{},{color:"".concat(!0===o?"whitesmoke":"hsl(0%, 0%, 80%)")})},control:function(e,t){return Object(k.a)(Object(k.a)({},e),{},{borderColor:"".concat(!0===o?"hsl(209, 23%, 22%)":"lightgrey")})}}})})},I=function(){var e=Object(r.useState)(""),t=Object(d.a)(e,2),n=t[0],a=t[1],s=Object(r.useContext)(O),o=s.setCountries,i=s.countriesBackup,l=s.darkModeOn;return Object(r.useEffect)((function(){var e;e=n,o((function(){return i.filter((function(t){return t.name.startsWith(e)}))}))}),[n,i,o]),Object(c.jsx)("input",{type:"text",name:"country name",htmlFor:"",placeholder:"Search for a country...",className:!0===l?"search dark-search":"search",value:n,onChange:function(e){return t=e.target.value,void a(t);var t}})};var M=function(){var e=Object(r.useContext)(O),t=e.countries,n=e.regions;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"form",children:[Object(c.jsx)(I,{}),Object(c.jsx)(w,{regions:n})]}),0===t.length?Object(c.jsx)(v,{}):t.map((function(e){return Object(c.jsx)(g,{pais:e},e.alpha2Code)}))]})},A=n(73);n(104);var B=function(){var e=Object(x.e)().code,t=Object(r.useState)([]),n=Object(d.a)(t,2),a=n[0],s=n[1],o=Object(r.useContext)(O),i=o.countries,l=o.darkModeOn,j=o.setMostrarInputs;return Object(r.useEffect)((function(){s(i.filter((function(t){return t.alpha2Code===e})))}),[e,i]),Object(c.jsx)(c.Fragment,{children:a.length>0&&a.map((function(e){var t=e.flag,n=e.name,r=e.nativeName,a=e.population,s=e.region,o=e.capital,u=e.subregion,d=e.topLevelDomain,O=e.currencies,h=e.languages,p=e.alpha2Code,x=e.borders,f=function(e,t){for(var n=[],c=0;c<t.length;c++)for(var r=0;r<e.length;r++)t[c]===e[r].alpha3Code&&n.push(e[r].name);return n}(i,x);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"form",children:Object(c.jsxs)(b.b,{className:!0===l?"back dark-back":"back",to:"/",onClick:function(){return j(!0)},children:[" ",Object(c.jsx)(A.a,{})," Back "]})}),Object(c.jsxs)("section",{className:"bigcountry",children:[Object(c.jsx)("img",{src:t,alt:n}),Object(c.jsxs)("div",{className:!0===l?"countryinfos dark-textinfos":"countryinfos",children:[Object(c.jsxs)("h2",{children:[" ",n," "]}),Object(c.jsxs)("div",{className:!0===l?"textinfos dark-textinfos":"textinfos",children:[Object(c.jsxs)("div",{className:"firstinfos",children:[Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{className:"topico",children:"Native Name: "})," ",r]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{className:"topico",children:"Population: "})," ",a]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{className:"topico",children:" Region: "})," ",s]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{className:"topico",children:"Sub Region: "})," ",u]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{className:"topico",children:"Capital: "})," ",o]})]}),Object(c.jsxs)("div",{className:"otherinfos",children:[Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{className:"topico",children:"Top Level Domain: "})," ",d[0]]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{className:"topico",children:"Currencies: "})," ",O.map((function(e,t){return t!==O.length-1?"".concat(e.name,", "):"".concat(e.name,".")}))]}),Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{className:"topico",children:"Languages: "})," ",h.map((function(e,t){return t!==h.length-1?"".concat(e.name,", "):"".concat(e.name,".")}))]})]})]}),Object(c.jsx)("div",{className:"bordercountries",children:Object(c.jsxs)("span",{className:"topicoborder",children:["Border Countries: ",0===f.length?Object(c.jsx)("b",{children:"Sem Informa\xe7\xf5es"}):f.map((function(e,t){return Object(c.jsxs)("span",{className:!0===l?"border dark-border":"border",children:[" ",e," "]},t)}))]})})]})]},p)]})}))})};n(63),n(105);var R=function(){var e=Object(r.useContext)(O),t=e.loading,n=e.darkModeOn,a=e.countries;return Object(c.jsx)("main",{className:!0===n?"main dark-main":"main",style:{height:"".concat(0===a.length?"calc(100vh - 60px)":"fit-content")},children:t?Object(c.jsx)(m,{}):Object(c.jsx)("section",{className:"paises",children:Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(x.a,{exact:!0,path:"/",children:Object(c.jsx)(M,{})}),Object(c.jsx)(x.a,{path:"/:code",children:Object(c.jsx)(B,{})})]})})})};var F=function(){var e=Object(r.useState)("true"===window.localStorage.getItem("darkModeActive")),t=Object(d.a)(e,2),n=t[0],a=t[1];Object(r.useEffect)((function(){window.localStorage.setItem("darkModeActive",n)}),[n]);var s=Object(r.useState)(!0),o=Object(d.a)(s,2),i=o[0],h=o[1],x=Object(r.useState)([]),f=Object(d.a)(x,2),m=f[0],g=f[1],v=Object(r.useState)([]),k=Object(d.a)(v,2),C=k[0],N=k[1],S=Object(r.useState)(!0),y=Object(d.a)(S,2),w=y[0],I=y[1],M=Object(r.useState)(window.localStorage.getItem("CountriesArray")?JSON.parse(localStorage.getItem("CountriesArray")):[]),A=Object(d.a)(M,2),B=A[0],F=A[1],L=function(e){var t=e.map((function(e){return e.region})),n=(t=(t=Object(u.a)(new Set(t))).filter((function(e){return""!==e}))).map((function(e){return{value:e,label:e}}));F(n)};return Object(r.useEffect)((function(){window.localStorage.getItem("CountriesArray")||function(){var e=Object(j.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://restcountries.eu/rest/v2/");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,g((function(){return L(n),N(n),n})),I(!1),window.localStorage.setItem("CountriesArray",JSON.stringify(n));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()();L(JSON.parse(localStorage.getItem("CountriesArray"))?JSON.parse(localStorage.getItem("CountriesArray")):[]),N(JSON.parse(localStorage.getItem("CountriesArray"))?JSON.parse(localStorage.getItem("CountriesArray")):[]),I(!1)}),[]),Object(c.jsx)(O.Provider,{value:{mostrarInputs:i,setMostrarInputs:h,countries:m,setCountries:g,loading:w,regions:B,countriesBackup:C,setCountriesBackup:N,darkModeOn:n,setDarkModeOn:a},children:Object(c.jsxs)(b.a,{children:[Object(c.jsx)(p,{}),Object(c.jsx)(R,{})]})})};o.a.render(Object(c.jsx)(F,{}),document.getElementById("root"))},40:function(e,t,n){},59:function(e,t,n){},63:function(e,t,n){},84:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){}},[[106,1,2]]]);
//# sourceMappingURL=main.9a8e49bd.chunk.js.map