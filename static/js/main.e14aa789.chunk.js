(this["webpackJsonppets-app"]=this["webpackJsonppets-app"]||[]).push([[0],{23:function(e,t,a){e.exports=a(36)},28:function(e,t,a){},29:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(20),c=a.n(l),i=(a(28),a(29),a(30),a(13));var s=function(){return r.a.createElement("div",null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{className:"navbar-brand",href:"#"},"Pets"),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarResponsive"},r.a.createElement("ul",{className:"navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{className:"nav-link",to:"/"},"HomePage")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{className:"nav-link",to:"/pets-app"},"Favoriler")))))))},o=a(3),u=a(7),m=a(8),v=a(10),p=a(9),h=a(11),d=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(v.a)(this,Object(p.a)(t).call(this,e))).filterPets=function(e){a.setState({activeFilter:e})},a.search=function(e){a.setState({searchValue:e})},a.state={activeFilter:"",searchValue:""},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){document.title="Home Page"}},{key:"componentWillUnmount",value:function(){document.title="Pets App"}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-3"},r.a.createElement(b,{onFilterPets:this.filterPets,activeFilter:this.state.activeFilter,onSearch:this.search})),r.a.createElement("div",{className:"col-lg-9"},r.a.createElement(y,{activeFilter:this.state.activeFilter,searchValue:this.state.searchValue})))))}}]),t}(r.a.Component);var f=function(){return r.a.createElement("div",null,"FavoritesPage")};var E=function(e){return r.a.createElement("div",null,r.a.createElement(o.c,null,r.a.createElement(o.a,{exact:!0,path:"/",component:d}),r.a.createElement(o.a,{exact:!0,path:"/pets-app",component:f})))};var b=function(e){return r.a.createElement("div",null,r.a.createElement(P,{onSearch:e.onSearch}),r.a.createElement(O,{onFilterPets:e.onFilterPets,activeFilter:e.activeFilter}))},g=["Cavalier King Charles Spaniel","Golden Retriever","Beagle","French Bulldog"],N=function(e,t){return e.toLowerCase().indexOf(t.toLowerCase())>-1},y=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(v.a)(this,Object(p.a)(t).call(this,e))).filterPets=function(){a.props.activeFilter?a.setState({pets:a.state._pets.filter((function(e){return e.breed===a.props.activeFilter})).filter((function(e){return N(e.name,a.props.searchValue)}))}):a.setState({pets:a.state._pets.filter((function(e){return N(e.name,a.props.searchValue)}))})},a.state={_pets:[],pets:[],yukleniyor:!0},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://5dd7af92505c590014d3b4ac.mockapi.io/pets").then((function(e){return e.json()})).then((function(t){e.setState({_pets:t,pets:t,yukleniyor:!1})}))}},{key:"componentDidUpdate",value:function(e){e.activeFilter!==this.props.activeFilter&&this.filterPets(),e.searchValue!==this.props.searchValue&&this.filterPets()}},{key:"render",value:function(){var e=r.a.createElement("div",null,"Yukleniyor"),t=r.a.createElement("div",null,"Bulunamad\u0131"),a=[r.a.createElement("h3",null,"G\xf6sterilen Pet Say\u0131s\u0131: 5"),r.a.createElement("div",{className:"row"},this.state.pets.map((function(e){return r.a.createElement(k,Object.assign({key:Math.random()},e))})))];return this.state.yukleniyor?e:0===this.state.pets.length?t:a}}]),t}(r.a.Component);var k=function(e){var t=e.name,a=e.image,n=e.age,l=e.description,c=e.breed;return r.a.createElement("div",{className:"col-lg-6 col-md-4 mb-4"},r.a.createElement("div",{className:"card h-100"},r.a.createElement("a",{href:"#"},r.a.createElement("img",{className:"card-img-top",src:a,alt:"",style:{height:"292px"}})),r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",{className:"card-title"},r.a.createElement("a",{href:"#"},t),r.a.createElement("div",null,r.a.createElement("span",{className:"badge badge-primary",style:{fontSize:"12px"}},c)),r.a.createElement("div",null,r.a.createElement("span",{className:"badge badge-warning",style:{fontSize:"12px"}},n))),r.a.createElement("p",{className:"card-text"},l)),r.a.createElement("div",{className:"card-footer"},r.a.createElement("div",{className:"btn btn-success"},"Favorilere Ekle"))))},F=a(17),j=a.n(F);var O=function(e){return console.log(e.activeFilter),r.a.createElement("div",null,r.a.createElement("h4",{className:"my-4 text-left"},"Cins"),r.a.createElement("ul",null,r.a.createElement("li",{className:j()({"list-group-item":!0,active:!e.activeFilter}),onClick:function(){e.onFilterPets("")}},"Hepsi"),g.map((function(t){return r.a.createElement("li",{key:t,className:j()({"list-group-item":!0,active:t===e.activeFilter}),onClick:function(a){a.preventDefault(),e.onFilterPets(t)}},t)}))))},P=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(v.a)(this,Object(p.a)(t).call(this,e))).changeValue=function(e){var t=e.target.value;a.setState({value:t},(function(){a.props.onSearch(t)}))},a.state={value:""},a}return Object(h.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h4",null,"Arama"),r.a.createElement("input",{type:"text",value:this.state.value,onChange:this.changeValue}))}}]),t}(r.a.Component);var S=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(s,null),r.a.createElement(E,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(i.a,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.e14aa789.chunk.js.map