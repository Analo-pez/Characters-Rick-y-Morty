(this["webpackJsonpnew-project-02"]=this["webpackJsonpnew-project-02"]||[]).push([[0],{15:function(e,t,a){},19:function(e,t,a){e.exports=a(32)},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(17),l=a.n(r),i=a(8),s=(a(24),a(11)),m=(a(25),function(){return fetch("https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json").then((function(e){return e.json()})).then((function(e){return e.results}))});a(26);var o=function(){return c.a.createElement("div",{className:"DivHeader"})},u=(a(15),function(e){return c.a.createElement("form",{className:"filter",onSubmit:function(e){e.preventDefault()}},c.a.createElement("label",{className:"filter__label"},"Encuentra tu personaje"),c.a.createElement("input",{className:"filter__input",placeholder:"Buscar por nombre",type:"text",id:"filterName",value:e.filterName,onChange:function(t){e.handleFilterName({key:"filterName",value:t.target.value})}}),c.a.createElement("input",{className:"filter__input",placeholder:"Buscar por localizaci\xf3n",type:"text",id:"filterLocation",value:e.filterLocation,onChange:function(t){e.handleFilterLocation({key:"filterLocation",value:t.target.value})}}))}),f=function(e){return c.a.createElement("article",{className:"card",id:e.id},c.a.createElement(i.b,{to:"/character/".concat(e.id),className:"card__btn"},c.a.createElement("img",{src:e.image,className:"card__img",alt:e.name}),c.a.createElement("h3",{className:"card__title"},e.name),c.a.createElement("p",{className:"card__description"},e.species," ")))},d=function(e){if(0===e.characters.length)return c.a.createElement("p",{className:"Alert"},"No hay coincidencias");var t=e.characters.map((function(e,t){return c.a.createElement(f,{key:t,id:e.id,image:e.image,name:e.name,species:e.species})}));return c.a.createElement("section",{className:"list"},t," ")},p=function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("nav",{className:"rtn"},c.a.createElement(i.b,{to:"/"},c.a.createElement("span",null,"Volver")," ")),c.a.createElement("div",{className:"modal"},c.a.createElement("div",{className:"modal__content"},c.a.createElement("div",null,c.a.createElement("section",null,c.a.createElement("img",{className:"card__img2",src:e.image,alt:e.name}),c.a.createElement("h2",{className:"card__content"},e.name),c.a.createElement("ul",{className:"card__content"},c.a.createElement("li",null,"Species: ",e.species),c.a.createElement("li",null,"Planet: ",e.planet),c.a.createElement("li",null,"Status: ",e.status),c.a.createElement("li",{className:"episodeList"},"Episodes: ",e.episode.length)))))))},E=a(10),h=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)(""),i=Object(s.a)(l,2),f=i[0],h=i[1],N=Object(n.useState)(""),v=Object(s.a)(N,2),_=v[0],g=v[1];Object(n.useEffect)((function(){m().then((function(e){r(e)}))}),[]);var b=a.filter((function(e){return e.name.toLowerCase().includes(f.toLowerCase())})).filter((function(e){return e.location.name.toLowerCase().includes(_.toLowerCase())}));return c.a.createElement("div",{className:"App "},c.a.createElement(o,null),c.a.createElement(E.Switch,null,c.a.createElement(E.Route,{exact:!0,path:"/"},c.a.createElement(u,{filterName:f,handleFilterName:function(e){h(e.value)},filterLocation:_,handleFilterLocation:function(e){g(e.value)}}),c.a.createElement(d,{characters:b})),c.a.createElement(E.Route,{path:"/character/:id",render:function(e){var t=parseInt(e.match.params.id),n=a.find((function(e){return e.id===t}));if(n)return c.a.createElement(p,{image:n.image,name:n.name,species:n.species,planet:n.origin.name,episode:n.episode,status:n.status})}})))};l.a.render(c.a.createElement(i.a,null,c.a.createElement(h,null)),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.2268a789.chunk.js.map