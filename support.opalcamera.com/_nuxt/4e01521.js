(window.webpackJsonp=window.webpackJsonp||[]).push([[17,4,12],{1067:function(e,t,r){"use strict";r.r(t);var n=r(1),o=(r(6),r(27),r(408)),c=r(45),l={mixins:[o.a],layout:function(e){var t=e.store.state.project.data.website.layout;return t},mounted:function(){this.$store.state.widgetMode&&this.$store.commit("SET_WIDGET_BACK_BUTTON",!0)},beforeDestroy:function(){this.$store.state.widgetMode&&this.$store.commit("SET_WIDGET_BACK_BUTTON",!1),this.resetForm()},head:function(){return{meta:[{hid:"robots-contact",name:"robots",content:"noindex"}]}},data:function(){return{name:"",email:"",subject:"",message:"",loading:!1,showConfirmation:!1}},computed:{formIsValid:function(){return""!==this.name&&""!==this.email&&""!==this.subject&&""!==this.message}},methods:{sendMessage:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.prev=1,r=e.$store.state.project.data.integrations.contact&&"userEmail"===e.$store.state.project.data.integrations.contact.contactForm.fromSender?e.email:"notifications@helpkit.so",t.next=5,c.post(e.$config.STRAPI_URL+"/email",{from:"".concat(e.name," <").concat(r,">"),replyTo:e.email,to:e.$store.state.project.data.supportEmail,subject:e.$store.state.project.data.integrations.contact.contactForm.showSubjectPretext?"HelpKit Support Ticket: ".concat(e.subject):e.subject,text:e.message,html:'<p style="white-space: pre-wrap;">'.concat(e.message,"</p>"),tracking_settings:{click_tracking:{enable:!1},open_tracking:{enable:!1}}});case 5:e.$log.debug("📫 Successfully sent message"),e.loading=!1,e.showConfirmation=!0,t.next=15;break;case 10:t.prev=10,t.t0=t.catch(1),e.loading=!1,e.$toast.show({type:"danger",title:"🤯 There was an error sending your message. Please try again.",message:"",timeout:4}),e.$log.error("Error Sending Message",t.t0);case 15:case"end":return t.stop()}}),t,null,[[1,10]])})))()},resetForm:function(){this.name="",this.email="",this.subject="",this.message="",this.showConfirmation=!1,this.$refs.contactSearch&&this.$refs.contactSearch.clearSearchInput()},handleSubjectInput:function(e){this.subject=e}}},d=r(2),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:e.$store.state.widgetMode?"px-2":"w-full mx-auto md:mt-[34px]"},[r("div",{class:"docsite"!==e.$store.state.project.data.website.layout||e.$store.state.widgetMode?"":"w-10/12 mx-auto"},[r("WidgetBackButton",{directives:[{name:"show",rawName:"v-show",value:"docsite"===e.$store.state.project.data.website.layout&&e.$store.state.widgetMode,expression:"\n        $store.state.project.data.website.layout === 'docsite' &&\n        $store.state.widgetMode\n      "}],staticClass:"-ml-2"}),e._v(" "),r("h1",{staticClass:"inline-flex items-center justify-center -mt-3 text-xl font-semibold ",class:"docsite"===e.$store.state.project.data.website.layout?"text-gray-800 dark:text-white":"text-white"},[r("svg",{staticClass:"w-5.5 h-5 mr-1.5",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"}})]),e._v("\n      "+e._s(e.$store.getters["project/getLOCALE"]("CONTACT_US"))+"\n    ")]),e._v(" "),r("form",{directives:[{name:"show",rawName:"v-show",value:!e.showConfirmation,expression:"!showConfirmation"}],staticClass:"mt-5 space-y-2.5",on:{submit:function(t){return t.stopPropagation(),t.preventDefault(),e.sendMessage.apply(null,arguments)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"block w-full border-gray-300 rounded-md shadow-sm  dark:border-gray-900 dark:bg-gray-800 dark:text-white focus:ring-gray-300 focus:border-gray-300 sm:text-sm",attrs:{type:"text",name:"name",id:"name",placeholder:e.$store.getters["project/getLOCALE"]("NAME")},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"block w-full border-gray-300 rounded-md shadow-sm  dark:border-gray-900 dark:bg-gray-800 dark:text-white focus:ring-gray-300 focus:border-gray-300 sm:text-sm",attrs:{type:"email",name:"email",id:"email",placeholder:e.$store.getters["project/getLOCALE"]("EMAIL")},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),e._v(" "),e.$store.getters["project/allowAutoSuggestContactForm"]?r("ContactSearch",{ref:"contactSearch",on:{subjectInput:e.handleSubjectInput}}):r("input",{directives:[{name:"model",rawName:"v-model",value:e.subject,expression:"subject"}],staticClass:"block w-full border-gray-300 rounded-md shadow-sm  dark:border-gray-900 dark:bg-gray-800 dark:text-white focus:ring-gray-300 focus:border-gray-300 sm:text-sm",attrs:{type:"text",name:"subject",id:"subject",placeholder:e.$store.getters["project/getLOCALE"]("SUBJECT")},domProps:{value:e.subject},on:{input:function(t){t.target.composing||(e.subject=t.target.value)}}}),e._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],staticClass:"block w-full border border-gray-300 rounded-md shadow-sm  dark:border-gray-900 dark:bg-gray-800 dark:text-white focus:ring-gray-300 focus:border-gray-300 sm:text-sm",attrs:{id:"message",name:"message",placeholder:e.$store.getters["project/getLOCALE"]("CONTACT_MESSAGE"),rows:"4"},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}}),e._v(" "),r("button",{staticClass:"\n          w-full\n          flex\n          justify-center\n          transition\n          px-5\n          items-start\n          bg-gray-700\n          text-white\n          items-center\n          rounded-md\n          transform\n          mt-5\n          py-2.5\n        ",class:e.formIsValid?"opacity-100  hover:scale-[1.01]":"opacity-60",attrs:{type:"submit",disabled:!e.formIsValid}},[e.loading?r("svg",{attrs:{width:"26",height:"26",viewBox:"0 0 44 44",xmlns:"http://www.w3.org/2000/svg",stroke:"#ffffff"}},[r("g",{attrs:{fill:"none","fill-rule":"evenodd","stroke-width":"2"}},[r("circle",{attrs:{cx:"22",cy:"22",r:"1"}},[r("animate",{attrs:{attributeName:"r",begin:"0s",dur:"1.8s",values:"1; 20",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.165, 0.84, 0.44, 1",repeatCount:"indefinite"}}),e._v(" "),r("animate",{attrs:{attributeName:"stroke-opacity",begin:"0s",dur:"1.8s",values:"1; 0",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.3, 0.61, 0.355, 1",repeatCount:"indefinite"}})]),e._v(" "),r("circle",{attrs:{cx:"22",cy:"22",r:"1"}},[r("animate",{attrs:{attributeName:"r",begin:"-0.9s",dur:"1.8s",values:"1; 20",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.165, 0.84, 0.44, 1",repeatCount:"indefinite"}}),e._v(" "),r("animate",{attrs:{attributeName:"stroke-opacity",begin:"-0.9s",dur:"1.8s",values:"1; 0",calcMode:"spline",keyTimes:"0; 1",keySplines:"0.3, 0.61, 0.355, 1",repeatCount:"indefinite"}})])])]):r("span",[e._v("\n          "+e._s(e.$store.getters["project/getLOCALE"]("SEND_MESSAGE")))])])],1),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.showConfirmation,expression:"showConfirmation"}],staticClass:"flex flex-col items-center justify-center w-full px-4 mt-20"},[r("span",{staticClass:"text-2xl font-semibold text-center dark:text-white"},[e._v(e._s(e.$store.getters["project/getLOCALE"]("MESSAGE_SENT_TITLE")))]),e._v(" "),r("p",{staticClass:"mt-2 text-sm text-center text-gray-700"},[e._v("\n        "+e._s(e.$store.getters["project/getLOCALE"]("MESSAGE_SENT_DESCRIPTION"))+"\n      ")]),e._v(" "),r("button",{staticClass:"\n          w-full\n          hover:scale-[1.01]\n          flex\n          justify-center\n          px-5\n          items-start\n          bg-green-700\n          text-white\n          items-center\n          rounded-md\n          transition\n          transform\n          mt-5\n          py-2.5\n        ",on:{click:e.resetForm}},[e._v("\n        "+e._s(e.$store.getters["project/getLOCALE"]("DONE"))+"\n      ")])])],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{WidgetBackButton:r(409).default,ContactSearch:r(421).default})},408:function(e,t,r){"use strict";t.a={asyncData:function(e){var t=e.query,r=e.store,n=e.$log;n.debug("mixin checkWidgetMode query",t),"true"===t.widget&&(n.debug("setting widget mode"),r.commit("ENABLE_WIDGET_MODE")),"true"===t.preview&&(n.debug("setting preview mode"),r.commit("ENABLE_PREVIEW_MODE"))}}},409:function(e,t,r){"use strict";r.r(t);var n={},o=r(2),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("button",{staticClass:"flex items-center justify-start w-full mb-5 dark:text-gray-50",on:{click:function(t){return e.$router.back()}}},[r("span",{staticClass:"flex items-center justify-center w-8 h-8 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800"},[e._v("\n    ←")])])}),[],!1,null,null,null);t.default=component.exports},410:function(e,t,r){var content=r(414);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(13).default)("34287064",content,!0,{sourceMap:!1})},413:function(e,t,r){"use strict";r(410)},414:function(e,t,r){var n=r(12)((function(i){return i[1]}));n.push([e.i,".slide-enter-active{transition-duration:.3s;transition-timing-function:ease-in}.slide-leave-active{transition-duration:.3s;transition-timing-function:cubic-bezier(0,1,.5,1)}.slide-enter-to,.slide-leave{max-height:100px;overflow:hidden}.slide-enter,.slide-leave-to{overflow:hidden;max-height:0}",""]),n.locals={},e.exports=n},421:function(e,t,r){"use strict";r.r(t);r(26),r(17);var n={mixins:[r(156).a],methods:{handleSearchResults:function(e){var t=e.filter((function(e){if(e.score<=.75)return e.item}));this.$log.debug("search results with score",e),this.$log.debug("filtered search results",t),this.searchResults=t.map((function(e){return e.item})),this.$log.debug("this.searchResults ",this.searchResults)},clearSearchInput:function(){this.searchInput=""},openAIChatSlideOver:function(){this.$store.commit("SET_SHOW_AI_CHAT_QUESTION",this.searchInput),this.$store.commit("SET_SHOW_AI_CHAT_SLIDE_OVER",!0)}},watch:{searchInput:function(e){this.$log.debug("searchInput",e),this.$emit("subjectInput",e)}},computed:{hasEnabledAI:function(){return this.$store.state.project.data.hasAIAccess&&this.$store.state.project.data.website.enableAI}}},o=(r(413),r(2)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("client-only",[r("div",{staticClass:"mb-4"},[r("div",[r("VueFuse",{staticClass:"hidden",attrs:{list:e.allArticles,"fuse-opts":e.fuseOptions,defaultAll:!1,placeholder:"placeholder",search:e.searchInput},on:{"fuse-results":e.handleSearchResults,"fuse-input":e.handleSearchInputChange}}),e._v(" "),r("input",{directives:[{name:"debounce",rawName:"v-debounce:500ms",value:e.fetchFullCollectionTree,expression:"fetchFullCollectionTree",arg:"500ms"},{name:"model",rawName:"v-model",value:e.searchInput,expression:"searchInput"}],staticClass:"block w-full border-gray-300 rounded-md shadow-sm dark:border-gray-900 dark:bg-gray-800 dark:text-white focus:ring-gray-300 focus:border-gray-300 sm:text-sm",attrs:{type:"text",id:"helpkit-fullarticle-subject-search",placeholder:e.$store.getters["project/getLOCALE"]("SUBJECT")},domProps:{value:e.searchInput},on:{input:function(t){t.target.composing||(e.searchInput=t.target.value)}}})],1),e._v(" "),r("transition",{attrs:{name:"slide"}},[e.hasEnabledAI&&e.searchInput.length>5||""!==e.searchInput&&e.showResultBox&&!e.loadingResults&&e.searchResults.length>0?r("div",{staticClass:"mt-2 ml-1"},[r("p",{staticClass:"text-sm font-medium text-gray-600"},[e._v("\n          "+e._s(e.$store.getters["project/getLOCALE"]("SUGGESTED_ARTICLES"))+"\n        ")]),e._v(" "),r("ul",{staticClass:"mt-3"},[e._l(e.searchResults.slice(0,3),(function(article,t){return r("li",{key:t,staticClass:"mb-4"},[r("nuxt-link",{staticClass:"\n                border-l-[1.5px]\n                px-3\n                py-2\n                text-sm\n                font-medium\n                text-gray-500\n                truncate\n                rounded-[4px]\n                cursor-pointer\n                bg-gray-50\n                hover:text-gray-700\n                dark:bg-gray-800 dark:hover:text-gray-200\n              ",style:{borderLeftColor:e.$store.state.project.data.website.header.accentColor},attrs:{to:"/"+e.$notionHelpers.slugify(article.rootCollection)+"/"+e.$helpers.shortUUID(article.rootCollectionId)+"/"+e.$notionHelpers.slugify(article.title)+"/"+e.$helpers.shortUUID(article.id)}},[e._v("\n              "+e._s(article.title)+" ↗\n            ")])],1)})),e._v(" "),e.hasEnabledAI?r("AIChatButton",{staticClass:"transform scale-95 -ml-0.5 hover:scale-[0.99] dark:text-white",style:{borderLeftColor:e.$store.state.project.data.website.header.accentColor,width:"fit-content",borderLeftWidth:"1.5px",marginLeft:"-3px"},attrs:{searchInput:e.searchInput},nativeOn:{click:function(t){return e.openAIChatSlideOver.apply(null,arguments)}}}):e._e()],2)]):e._e()])],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{AIChatButton:r(246).default})}}]);