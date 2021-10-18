(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{30:function(e,t,n){},32:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(23),s=n.n(o),c=(n(30),n(7)),i=n.n(c),l=n(8),u=n(2),d=n(6),h=n(4),f=n(3),p=(n(32),n(0)),v=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={details:!1},e.toggleDetails=function(t){e.setState({details:!t})},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event,n=this.state.details;return Object(p.jsxs)("div",{className:"Event",children:[Object(p.jsx)("h1",{className:"EventSummary",children:t.summary}),Object(p.jsx)("div",{className:"EventStart",children:t.start.dateTime}),Object(p.jsx)("div",{className:"EventLocation",children:t.location}),Object(p.jsx)("button",{className:"showDetail",onClick:function(){return e.toggleDetails(n)},children:"Details"}),this.state.details&&Object(p.jsxs)("div",{className:"EventLink",children:["See details on Google Calendar ",t.htmlLink]}),this.state.details&&Object(p.jsx)("div",{className:"EventDetails",children:t.description})]})}}]),n}(a.Component),m=v,b=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(p.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(p.jsx)("li",{children:Object(p.jsx)(m,{event:e})},e.id)}))})}}]),n}(a.Component),g=b,j=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(d.a)(n,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"Alert",children:Object(p.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(a.Component),w=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="blue",a}return n}(j),O=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="red",a}return n}(j),x=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).color="green",a}return n}(j),y=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:void 0,infoText:""},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));0===a.length?e.setState({query:n,infoText:"We can not find the city you are looking for. Please try another city."}):e.setState({query:n,suggestions:a,infoText:""})},e.handleItemClicked=function(t){e.setState({query:t,suggestions:[],showSuggestions:!1,infoText:""}),e.props.updateEvents(t)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{className:"CitySearch",children:[Object(p.jsx)(w,{text:this.state.infoText}),Object(p.jsx)("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(p.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(p.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(p.jsx)("li",{onClick:function(){return e.handleItemClicked("all")},children:Object(p.jsx)("b",{children:"See all cities"})})]})]})}}]),n}(a.Component),k=y,S=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:32,errorText:""},e.handleInputChanged=function(t){var n=t.target.value;n>0&&n<100?e.setState({query:n,errorText:""}):e.setState({query:32,errorText:"Please enter a number between 0 and 100."})},e}return Object(d.a)(n,[{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("input",{type:"number",className:"NumberOfEvents",value:this.state.query,onChange:this.handleInputChanged}),Object(p.jsx)(O,{text:this.state.errorText})]})}}]),n}(a.Component),T=S,C=n(25),E=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],W=n(13),N=n.n(W),Z=n(9),q=n.n(Z),I=function(e){var t=e.map((function(e){return e.location}));return Object(C.a)(new Set(t))},A=function(){var e=Object(l.a)(i.a.mark((function e(t){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},M=function(){var e=Object(l.a)(i.a.mark((function e(t){var n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://94c6uv49q4.execute-api.us-east-2.amazonaws.com/dev/api/token/"+n).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(q.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return q.a.done(),e.abrupt("return",E);case 4:if(navigator.onLine){e.next=8;break}return t=localStorage.getItem("lastEvents"),q.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 8:return e.next=10,J();case 10:if(!(n=e.sent)){e.next=20;break}return L(),a="https://94c6uv49q4.execute-api.us-east-2.amazonaws.com/dev/api/get-events/"+n,e.next=16,N.a.get(a);case 16:return(r=e.sent).data&&(o=I(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(o))),q.a.done(),e.abrupt("return",r.data.events);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,o,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,A(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,N.a.get("https://94c6uv49q4.execute-api.us-east-2.amazonaws.com/dev/api/get-auth-url");case 17:return o=e.sent,s=o.data.authUrl,e.abrupt("return",window.location.href=s);case 20:return e.abrupt("return",r&&M(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();n(51),n(52);var U=function(e){return e.showWelcomeScreen?Object(p.jsxs)("div",{className:"WelcomeScreen",children:[Object(p.jsx)("h1",{children:"Welcome to the Meet app"}),Object(p.jsx)("h4",{children:"Log in to see upcoming events around the world for full-stack developers"}),Object(p.jsx)("div",{className:"button_cont",align:"center",children:Object(p.jsxs)("div",{class:"google-btn",children:[Object(p.jsx)("div",{class:"google-icon-wrapper",children:Object(p.jsx)("img",{class:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"Google sign-in"})}),Object(p.jsx)("button",{onClick:function(){e.getAccessToken()},rel:"nofollow noopener",class:"btn-text",children:Object(p.jsx)("b",{children:"Sign in with google"})})]})}),Object(p.jsx)("a",{href:"https://nguyenbrandon5303.github.io/meet/privacy.html",rel:"nofollow noopener",children:"Privacy policy"})]}):null},B=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],numberOfEvents:32,offlineText:"",showWelcomeScreen:void 0},e.updateEvents=function(t,n){D().then((function(a){var r="all"===t?a:a.filter((function(e){return e.location===t}));e.setState({events:r.slice(0,n),numberOfEvents:n})}))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){var e=Object(l.a)(i.a.mark((function e(){var t,n,a,r,o=this;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.mounted=!0,t=localStorage.getItem("access_token"),e.next=4,A(t);case 4:if(!e.sent.error){e.next=8;break}e.t0=!1,e.next=9;break;case 8:e.t0=!0;case 9:n=e.t0,a=new URLSearchParams(window.location.search),r=a.get("code"),this.setState({showWelcomeScreen:!(r||n)}),(r||n)&&this.mounted&&D().then((function(e){o.mounted&&o.setState({events:e.slice(0,o.state.numberOfEvents),locations:I(e)})}));case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){return void 0===this.state.showWelcomeScreen?Object(p.jsx)("div",{className:"App"}):Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(x,{text:this.state.offlineText}),Object(p.jsx)("p",{children:"Name of Cities:"}),Object(p.jsx)(k,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(p.jsx)("p",{children:"Number of Events:"}),Object(p.jsx)(T,{numberOfEvents:this.state.numberOfEvents,updateEvents:this.updateEvents}),Object(p.jsx)(g,{events:this.state.events}),Object(p.jsx)(U,{showWelcomeScreen:this.state.showWelcomeScreen,getAccessToken:function(){J()}})]})}}]),n}(a.Component),R=B,_=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function F(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,55)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),o(e),s(e)}))};n(24).config("fdc7e02fc1b64a55bf163d02cc9e0fa7").install(),s.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(R,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");_?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):F(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):F(t,e)}))}}(),P()}},[[54,1,2]]]);
//# sourceMappingURL=main.16117698.chunk.js.map