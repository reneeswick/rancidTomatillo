(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{22:function(e,t,r){},23:function(e,t,r){},33:function(e,t,r){},34:function(e,t,r){},35:function(e,t,r){},36:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),s=r(15),c=r.n(s),a=(r(22),r(7)),i=r(8),l=r(10),h=r(9),u=(r(23),r(5)),d=r(1),j=function(e){var t=e.id,r=e.poster,n=e.title;return Object(d.jsx)(u.b,{to:"/".concat(t),className:"Card",children:Object(d.jsx)("img",{src:r,alt:"Poster for the movie ".concat(n),className:"moviePoster",id:t})})},v=(r(33),function(e){var t=e.movieData,r=e.selectMovie,n=t.map((function(e){return Object(d.jsx)(j,{id:e.id,poster:e.poster_path,title:e.title,selectMovie:r},e.id)}));return Object(d.jsx)("div",{className:"CardContainer",children:n})}),m=(r(34),r(2)),p=function(e){Object(l.a)(r,e);var t=Object(h.a)(r);function r(){var e;return Object(a.a)(this,r),(e=t.call(this)).returnHome=function(){e.setState({movieData:{},hasError:!1})},e.state={movieData:{},hasError:!1},e}return Object(i.a)(r,[{key:"componentDidMount",value:function(){var e,t=this;(e=this.props.id,fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies/".concat(e)).then((function(e){if(e.status>=500)console.log("fetch one error\n: response status >= 500");else{if(e.ok)return console.log("fetch three: response is good!\n",e),e.json();console.log("fetch two error\n: response not ok")}}))).then((function(e){void 0===e?(t.setState({hasError:!0}),console.log(t.state.hasError)):t.setState({movieData:e.movie})})).catch((function(e){t.props.handleError()}))}},{key:"render",value:function(){if(this.state.hasError)return Object(d.jsx)(m.a,{to:"/Error"});var e=this.state.movieData,t=e.title,r=e.release_date,n=e.backdrop_path,o=e.overview;return Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"movie-details-container",children:[Object(d.jsxs)("h2",{className:"title",children:[t," (",r,")"]}),Object(d.jsx)("img",{className:"movieBackDrop",src:n,alt:o}),Object(d.jsx)("p",{className:"overview",children:o})]}),Object(d.jsx)(u.b,{to:"/",children:Object(d.jsx)("button",{className:"return-home-btn",children:"Home"})})]})}}]),r}(n.Component),b=(r(35),function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Hello world!"}),Object(d.jsx)("p",{children:"This means our error page is working."})]})}),f=function(e){Object(l.a)(r,e);var t=Object(h.a)(r);function r(){var e;return Object(a.a)(this,r),(e=t.call(this)).handleError=function(){console.log("handle error in app")},e.returnHome=function(){e.setState({movieIsSelected:!1,selectedMovie:{},hasError:!1})},e.state={movies:[],selectedMovie:{},movieIsSelected:!1,hasError:!1},e}return Object(i.a)(r,[{key:"componentDidMount",value:function(){var e=this;fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies").then((function(e){return e.json()})).then((function(t){return e.setState({movies:t.movies})})).catch((function(t){console.log("Error getting all movies:",t),e.setState({hasError:!0})}))}},{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)("header",{children:Object(d.jsx)("h1",{className:"page-title",children:"Movie time"})}),this.state.hasError&&Object(d.jsx)("h2",{children:"There is an error with the server, please try again."}),Object(d.jsxs)(m.d,{children:[Object(d.jsx)(m.b,{path:"/Error",component:b}),Object(d.jsx)(m.b,{exact:!0,path:"/",render:function(){return Object(d.jsx)(v,{movieData:e.state.movies,selectedMovie:e.state.selectedMovie,selectMovie:e.selectMovie})}}),Object(d.jsx)(m.b,{exact:!0,path:"/:id",render:function(t){var r=t.match;return Object(d.jsx)(p,{id:r.params.id,handleError:e.handleError})}})]})]})}}]),r}(n.Component),O=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,37)).then((function(t){var r=t.getCLS,n=t.getFID,o=t.getFCP,s=t.getLCP,c=t.getTTFB;r(e),n(e),o(e),s(e),c(e)}))},x=Object(d.jsxs)(u.a,{children:[" ",Object(d.jsx)(f,{className:"app"})," "]});c.a.render(Object(d.jsx)(o.a.StrictMode,{children:x}),document.getElementById("root")),O()}},[[36,1,2]]]);
//# sourceMappingURL=main.b74fdf45.chunk.js.map