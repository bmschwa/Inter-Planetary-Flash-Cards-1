(function(t){function e(e){for(var i,o,c=e[0],s=e[1],l=e[2],p=0,d=[];p<c.length;p++)o=c[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);u&&u(e);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],i=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(i=!1)}i&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},r={app:0},a=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"33b0":function(t,e,n){},"399e":function(t,e,n){"use strict";var i=n("b492"),r=n.n(i);r.a},"3d20":function(t,e,n){"use strict";var i=n("da82"),r=n.n(i);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e623"),n("e379"),n("5dc8"),n("37e1");var i=n("2b0e"),r=(n("d3b7"),n("96cf"),n("8c4f")),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"body"}},[n("b-alert",{attrs:{show:t.dismissCountDown,dismissible:"",fade:"",variant:"warning"},on:{"dismiss-count-down":t.countDownChanged}},[t._v(" "+t._s(t.apiErrorMsg)+" ")]),n("h1",[t._v("IPFC Login")]),n("b-form",{attrs:{id:"form-signin"},on:{submit:function(t){t.stopPropagation(),t.preventDefault()}}},[n("label",{attrs:{for:"feedback-email"}},[t._v("Email")]),n("b-input",{attrs:{state:t.emailValidation,id:"feedback-email"},model:{value:t.input.email,callback:function(e){t.$set(t.input,"email",e)},expression:"input.email"}}),t.input.email?n("b-form-invalid-feedback",{attrs:{state:t.emailValidation}},[t._v(t._s(t.emailValidationErrorMsg))]):t._e(),n("label",{attrs:{for:"feedback-password"}},[t._v("Password")]),n("b-input",{attrs:{state:t.passwordValidation,type:"password",id:"feedback-password"},model:{value:t.input.password,callback:function(e){t.$set(t.input,"password",e)},expression:"input.password"}}),t.input.password?n("b-form-invalid-feedback",{attrs:{state:t.passwordValidation}},[t._v(t._s(t.passwordValidationErrorMsg))]):t._e(),t.signingUp?n("b-button",{attrs:{id:"button-get-pinata",type:"submit",variant:"warning"},on:{click:function(e){return t.OpenPinata()}}},[t._v("Get Pinata")]):t._e(),n("br"),t.signingUp?n("label",{attrs:{for:"feedback-pinata-api"}},[t._v("Pinata API key")]):t._e(),t.signingUp?n("b-input",{attrs:{state:t.pinataApiValidation,id:"feedback-pinata-api"},model:{value:t.input.pinataApi,callback:function(e){t.$set(t.input,"pinataApi",e)},expression:"input.pinataApi"}}):t._e(),t.signingUp?n("b-form-invalid-feedback",{attrs:{state:t.pinataApiValidation}},[t._v(t._s(t.pinataApiValidationErrorMsg))]):t._e(),t.signingUp?n("label",{attrs:{for:"feedback-pinata-secret"}},[t._v("Pinata secret API key")]):t._e(),t.signingUp?n("b-input",{attrs:{state:t.pinataSecretValidation,type:"password",id:"feedback-pinata-secret"},model:{value:t.input.pinataSecret,callback:function(e){t.$set(t.input,"pinataSecret",e)},expression:"input.pinataSecret"}}):t._e(),t.signingUp?n("b-form-invalid-feedback",{attrs:{state:t.pinataSecretValidation}},[t._v(t._s(t.pinataSecretValidationErrorMsg))]):t._e(),n("div",{attrs:{id:"login-signup-buttons"}},[n("span",[t.signingUp?n("b-button",{attrs:{disabled:t.invalidSignUp,type:"submit",variant:"primary"},on:{click:function(e){return t.SignUp()}}},[t._v("Sign up")]):n("b-button",{attrs:{disabled:t.invalidLogin,type:"submit",variant:"primary"},on:{click:function(e){return t.login()}}},[t._v("Log in")]),t.signingUp?n("a",{attrs:{type:"submit",id:"sign-up-a",variant:"primary"},on:{click:function(e){return t.toggleSigningUp()}}},[t._v("Returning user? Log in now!")]):n("a",{attrs:{type:"submit",id:"sign-up-a",variant:"primary"},on:{click:function(e){return t.toggleSigningUp()}}},[t._v("New account? Sign up now!")])],1)])],1)],1)},o=[],c=(n("caad"),n("2532"),{name:"Login",data:function(){return{input:{email:"",password:"",pinataApi:"",pinataSecret:"",signingUp:!1},apiErrorMsg:"",failedLogin:!1,dismissSecs:5,dismissCountDown:0}},computed:{signingUp:function(){return this.input.signingUp},emailValidation:function(){var t=this.input.email;return!(t.length<4||t.length>25)&&!(!t.includes("@")||!t.includes("."))},emailValidationErrorMsg:function(){var t=this.input.email;return t.length<4||t.length>25?"Email must be 5-25 characters long":t.includes("@")&&t.includes(".")?null:"Invalid email"},passwordValidation:function(){var t=this.input.password;return!(t.length<8||t.length>20)},passwordValidationErrorMsg:function(){var t=this.input.password;return t.length<8||t.length>20?"Password must be 8-20 characters long":null},pinataApiValidation:function(){var t=this.input.pinataApi;return!(t.length<20||t.length>20)},pinataApiValidationErrorMsg:function(){var t=this.input.pinataApi;return t.length<20||t.length>20?"Invalid pinata api key. In pinata, click the profile icon, then 'account'":null},pinataSecretValidation:function(){var t=this.input.pinataSecret;return!(t.length<64||t.password>64)},pinataSecretValidationErrorMsg:function(){var t=this.input.pinataSecret;return t.length<64||t.length>64?"Invalid pinata api secret key. In pinata, click the profile icon, then 'account'":null},invalidSignUp:function(){return!(this.emailValidation&&this.passwordValidation&&this.pinataApiValidation&&this.pinataSecretValidation)},invalidLogin:function(){return!this.emailValidation||!this.passwordValidation}},watch:{failedLogin:function(){!0===this.failedLogin&&this.showAlert()}},methods:{login:function(){var t=this;this.failedLogin=!1;var e="https://ipfc-midware.herokuapp.com/login",n=new Headers,i=this.input.email,r=this.input.password;n.append("Content-Type","application/json"),n.append("Authorization","Basic "+btoa(i+":"+r)),fetch(e,{headers:n}).then((function(t){return t.json()})).then((function(e){e["token"]?(t.$store.commit("updateJwt",e["token"]),t.$store.dispatch("checkJwt"),t.$store.commit("updateUserCollection",e["user_collection"]),t.$store.commit("updateDecksMeta",e["decks_meta"]),t.$store.commit("updateDecks",e["decks"]),t.$router.push("home")):(t.failedLogin=!0,t.apiErrorMsg=e["error"])})).catch((function(){this.failedLogin=!0,this.apiErrorMsg="Server error"}))},SignUp:function(){var t=this;this.failedLogin=!1;var e="https://ipfc-midware.herokuapp.com/sign_up",n={email:this.input.email,password:this.input.password,pinata_api:this.input.pinataApi,pinata_key:this.input.pinataSecret};fetch(e,{headers:{"Content-Type":"application/json"},body:JSON.stringify(n),method:"POST"}).then((function(t){return t.json()})).then((function(e){e["message  "]?t.login():(t.failedLogin=!0,t.apiErrorMsg=e["error"])})).catch((function(){this.failedLogin=!0,this.apiErrorMsg="Server error"}))},toggleSigningUp:function(){this.input.signingUp=!this.input.signingUp},changeErrorMsg:function(t){this.emailValidationErrorMsg=t},OpenPinata:function(){window.open("https://pinata.cloud/signup","_blank")},countDownChanged:function(t){this.dismissCountDown=t},showAlert:function(){this.dismissCountDown=this.dismissSecs}}}),s=c,l=(n("3d20"),n("2877")),u=Object(l["a"])(s,a,o,!1,null,"3e870050",null),p=u.exports,d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{attrs:{id:"review-body"}},[n("b-row",{staticClass:"justify-content-end",attrs:{id:"top-buttons-row"}},[n("a",{staticClass:"btn-gray"},[n("font-awesome-icon",{attrs:{size:"0.5x",icon:"edit"},on:{click:function(e){return t.openCardEditor()}}})],1)]),n("b-row",{attrs:{id:"card-row"},on:{click:function(e){return t.flipCard()}}},[n("vue-flashcard",{attrs:{isToggle:t.cardFlipToggle,front:t.currentCard.front_text,back:t.currentCard.back_text,imgFront:t.currentCard.front_image,imgBack:t.currentCard.back_image}})],1),n("b-row",{attrs:{id:"buttons-row"}},[n("b-col",[n("b-button",{staticClass:"btn-circle btn-xl",on:{click:function(e){return t.incorrect()}}},[n("font-awesome-icon",{attrs:{size:"2x",icon:"times"}})],1)],1),n("b-col",[n("b-button",{staticClass:"btn-circle btn-xl",on:{click:function(e){return t.flipCard()}}},[n("font-awesome-icon",{attrs:{size:"2x",icon:"sync"}})],1)],1),n("b-col",[n("b-button",{staticClass:"btn-circle btn-xl",on:{click:function(e){return t.correct()}}},[n("font-awesome-icon",{attrs:{size:"2x",icon:"check"}})],1)],1)],1)],1)},f=[],g=(n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("ade3")),b=n("2f62"),h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.isToggle,expression:"!isToggle"}],staticClass:"animated flipInY flashcard",style:{backgroundColor:t.colorFront,color:t.colorTextFront}},[n("div",{staticClass:"card-content center"},[n("p",{style:{fontSize:t.textSizeFront,fontWeight:"bold"}},[t._v(t._s(t.front))]),""!=t.imgFront?n("img",{attrs:{src:t.imgFront,width:"350",height:"200"}}):t._e()])]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isToggle,expression:"isToggle"}],staticClass:"animated flipInY flashcard",style:{backgroundColor:t.colorBack,color:t.colorTextBack}},[n("div",{staticClass:"card-content center"},[n("p",{style:{fontSize:t.textSizeBack,fontWeight:"bold"}},[t._v(t._s(t.back))]),""!=t.imgBack?n("img",{attrs:{src:t.imgBack,width:"350",height:"200"}}):t._e()])])])},m=[],v={data:function(){return{}},props:{imgFront:{type:String,default:""},imgBack:{type:String,default:""},front:{type:String,default:""},back:{type:String,default:""},textSizeFront:{type:String,default:"1.5em"},textSizeBack:{type:String,default:"1.5em"},colorTextFront:{type:String,default:"black"},colorTextBack:{type:String,default:"black"},colorFront:{type:String,default:"white"},colorBack:{type:String,default:"white"},isToggle:{type:Boolean}}},w=v,k=(n("ab34"),Object(l["a"])(w,h,m,!1,null,"1118d09a",null)),y=k.exports;function _(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?_(Object(n),!0).forEach((function(e){Object(g["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var x={name:"home",data:function(){return{currentCardIndex:0,cardFlipToggle:!1}},computed:O({},Object(b["b"])({reviewDeck:"reviewDeck"}),{currentCard:function(){return this.reviewDeck[this.currentCardIndex]}}),methods:{openCardEditor:function(){this.$router.push()},flipCard:function(){this.cardFlipToggle=!this.cardFlipToggle},incorrect:function(){this.currentCardIndex++},correct:function(){this.currentCardIndex++}},created:function(){this.$store.dispatch("updateReviewDeck"),this.currentCardIndex=0},components:{vueFlashcard:y}},j=x,S=(n("399e"),Object(l["a"])(j,d,f,!1,null,"c08f8fac",null)),C=S.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"deck-selection"},[n("b-container",{attrs:{fluid:""}},[n("h3",{staticStyle:{"margin-left":"20px"}},[t._v("Deck Selection")]),n("b-list-group",t._l(t.decksMeta,(function(e){return n("b-list-group-item",{key:e.edited,attrs:{button:""},on:{click:function(n){return t.openDeck(e.deck_id)}}},[t._v(t._s(e.title))])})),1)],1)],1)},P=[];n("e01a"),n("d28b"),n("3ca3"),n("ddb0");function E(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function V(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?E(Object(n),!0).forEach((function(e){Object(g["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var $={name:"deck-selection",data:function(){return{}},computed:V({},Object(b["b"])(["decksMeta"])),methods:{openDeck:function(t){var e,n=!0,i=!1,r=void 0;try{for(var a,o=this.$store.getters.getDecks[Symbol.iterator]();!(n=(a=o.next()).done);n=!0)e=a.value,e.deck_id===t&&this.$store.commit("updateCurrentDeck",e)}catch(c){i=!0,r=c}finally{try{n||null==o.return||o.return()}finally{if(i)throw r}}this.$router.push("/deck-editor")}}},M=$,A=Object(l["a"])(M,D,P,!1,null,null,null),U=A.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"quiz-options"})},z=[],I={data:function(){return{}}},L=I,F=Object(l["a"])(L,T,z,!1,null,null,null),J=F.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",{attrs:{fluid:"",id:"body"}},[n("b-row",[n("h3",{staticStyle:{"margin-left":"30px","margin-top":"10px"}},[t._v(t._s(t.deck.title))])]),n("b-row",{attrs:{"align-h":"start"}},[n("b-col",{attrs:{cols:"11"}},t._l(t.deck.cards,(function(e){return n("b-card",{key:e.card_id,staticStyle:{"max-width":"400px",margin:"10px","box-shadow":"0px 0px 15px 5px rgba(0, 0, 0, 0.1)"}},[n("b-container",[n("b-row",[e.front_image?n("b-col",{attrs:{cols:"5"}},[e.front_image?n("b-img-lazy",{attrs:{src:e.front_image}}):t._e()],1):t._e(),n("b-col",[n("b-card-text",{staticClass:"font-weight-bold"},[t._v(t._s(e.front_text))])],1),n("b-col",{attrs:{cols:"1"}},[n("font-awesome-icon",{attrs:{icon:"edit"}})],1)],1),n("hr",{staticClass:"divider"}),n("b-row",[e.back_image?n("b-col",[n("b-img-lazy",{attrs:{src:e.back_image}})],1):t._e(),n("b-col",[n("b-card-text",[t._v(" "+t._s(e.back_text)+" ")])],1)],1)],1)],1)})),1)],1)],1)},R=[];function N(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function q(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?N(Object(n),!0).forEach((function(e){Object(g["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var W={name:"deck-editor",data:function(){return{}},computed:q({},Object(b["b"])({deck:"currentDeck"}))},Y=W,G=Object(l["a"])(Y,B,R,!1,null,"2d2585af",null),H=G.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-list-group",[n("b-list-group-item",{attrs:{id:"logout",button:""},on:{click:function(e){return t.logout()}}},[t._v(" Logout ")])],1)],1)},Q=[],X={methods:{logout:function(){this.$store.dispatch("logout"),this.$router.push("/login")}}},Z=X,tt=Object(l["a"])(Z,K,Q,!1,null,null,null),et=tt.exports,nt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",[n("b-card",{staticStyle:{width:"400px",height:"450px",margin:"10px","box-shadow":"0px 0px 15px 5px rgba(0, 0, 0, 0.1)"}})],1)},it=[],rt={},at=rt,ot=Object(l["a"])(at,nt,it,!1,null,null,null),ct=ot.exports,st=(n("0d03"),n("ac1f"),n("1276"),n("bfa9"));i["default"].use(b["a"]);var lt=new st["a"]({key:"vuex",storage:window.localStorage,reducer:function(t){return{jwt:t.jwt,userCollection:t.userCollection,decksMeta:t.decksMeta,decks:t.decks,currentDeck:t.deck}}}),ut=new b["a"].Store({state:{jwt:null,jwtValid:!1,userCollection:null,decksMeta:null,decks:null,currentDeck:null,reviewDeck:null},mutations:{updateJwt:function(t,e){t.jwt=e},deleteJwt:function(t){t.jwt=null},toggleJwtValid:function(t,e){t.jwtValid=e},updateUserCollection:function(t,e){t.userCollection=e},updateDecksMeta:function(t,e){t.decksMeta=e},updateDecks:function(t,e){t.decks=e},updateCurrentDeck:function(t,e){t.currentDeck=e},updateReviewDeck:function(t,e){t.reviewDeck=e}},actions:{logout:function(t){t.commit("deleteJwt"),t.commit("toggleJwtValid",!1)},checkJwt:function(t){var e=t.state.jwt;(!e||e.split(".").length<3)&&t.commit("toggleJwtValid",!1);var n=JSON.parse(atob(e.split(".")[1])),i=new Date(1e3*n.exp),r=new Date;t.commit("toggleJwtValid",r<i)},updateReviewDeck:function(t){var e,n=t.state.decks,i=[],r=!0,a=!1,o=void 0;try{for(var c,s=n[Symbol.iterator]();!(r=(c=s.next()).done);r=!0){e=c.value;var l=void 0,u=!0,p=!1,d=void 0;try{for(var f,g=e.cards[Symbol.iterator]();!(u=(f=g.next()).done);u=!0)l=f.value,l.card_tags.includes("Daily Review")&&i.push(l)}catch(b){p=!0,d=b}finally{try{u||null==g.return||g.return()}finally{if(p)throw d}}}}catch(b){a=!0,o=b}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}t.commit("updateReviewDeck",i)}},getters:{isAuthenticated:function(t){return t.jwtValid},getDecks:function(t){return t.decks}},plugins:[lt.plugin]}),pt=ut;function dt(t,e,n){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(pt.dispatch("checkJwt"));case 2:pt.getters.isAuthenticated?n():"/login"!==this.$router.path&&n("/login");case 3:case"end":return t.stop()}}),null,this)}i["default"].use(r["a"]);var ft=new r["a"]({mode:"history",routes:[{path:"/",redirect:{name:"login"}},{path:"/login",name:"login",component:p},{path:"/home",name:"home",component:C,beforeEnter:dt},{path:"/deck-selection",name:"deck-selection",component:U,beforeEnter:dt},{path:"/quiz-options",name:"quiz-options",component:J,beforeEnter:dt},{path:"/deck-editor",name:"deck-editor",component:H,beforeEnter:dt},{path:"/settings",name:"settings",component:et,beforeEnter:dt},{path:"/card-editor",name:"card-editor",component:ct,beforeEnter:dt}]}),gt=n("5f5b"),bt=(n("f9e3"),n("2dd8"),n("ecee")),ht=n("c074"),mt=n("ad3d"),vt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("router-view")],1)},wt=[],kt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("b-navbar",{attrs:{toggleable:"xs",variant:"primary"}},[i("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),i("b-link",{attrs:{to:"#"}},[i("font-awesome-icon",{staticStyle:{color:"white"},attrs:{icon:"search"}})],1),i("b-nav-text",{staticStyle:{color:"white"},attrs:{id:"session-counter"}},[t._v("0/0")]),i("b-link",{attrs:{to:"#"}},[i("img",{attrs:{src:n("6200"),alt:"add"}})]),i("b-link",{staticClass:"icon",attrs:{to:"#"}},[i("font-awesome-icon",{staticStyle:{color:"white"},attrs:{icon:"cloud"}})],1),i("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[i("b-navbar-nav",[i("b-nav-item",{attrs:{to:"/home"}},[t._v("Review")]),i("b-nav-item",{attrs:{to:"/Settings"}},[t._v("Settings")]),i("b-nav-item",{attrs:{to:"/deck-selection"}},[t._v("Decks")]),i("b-nav-item",{attrs:{to:"#",disabled:""}},[t._v("Lessons")]),i("b-nav-item",{attrs:{to:"#",disabled:""}},[t._v("Classes")]),i("b-nav-form",[i("b-form-input",{staticClass:"mr-sm-1",attrs:{size:"sm",placeholder:"find decks and classes"}}),i("b-button",{attrs:{size:"sm",type:"submit"}},[t._v("Search")])],1)],1)],1)],1)],1)},yt=[],_t={name:"Navbar"},Ot=_t,xt=Object(l["a"])(Ot,kt,yt,!1,null,"44abf910",null),jt=xt.exports,St={name:"App",data:function(){return{}},mounted:function(){this.redirectIfAuth()},methods:{redirectIfAuth:function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.$store.dispatch("checkJwt"));case 2:this.$store.getters.isAuthenticated&&this.$router.push("/home");case 3:case"end":return t.stop()}}),null,this)}},components:{Navbar:jt}},Ct=St,Dt=(n("5c0b"),Object(l["a"])(Ct,vt,wt,!1,null,null,null)),Pt=Dt.exports;bt["c"].add(ht["c"],ht["d"],ht["b"],ht["a"],ht["f"],ht["e"]),i["default"].component("font-awesome-icon",mt["a"]),i["default"].use(gt["a"]),i["default"].config.productionTip=!1,new i["default"]({router:ft,store:pt,render:function(t){return t(Pt)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var i=n("9c0c"),r=n.n(i);r.a},6200:function(t,e,n){t.exports=n.p+"img/add card logo.50e189ef.svg"},"9c0c":function(t,e,n){},ab34:function(t,e,n){"use strict";var i=n("33b0"),r=n.n(i);r.a},b492:function(t,e,n){},da82:function(t,e,n){}});
//# sourceMappingURL=app.b735c32d.js.map