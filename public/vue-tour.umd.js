var __defProp=Object.defineProperty,__hasOwnProp=Object.prototype.hasOwnProperty,__getOwnPropSymbols=Object.getOwnPropertySymbols,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(t,e,n)=>e in t?__defProp(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,__assign=(t,e)=>{for(var n in e||(e={}))__hasOwnProp.call(e,n)&&__defNormalProp(t,n,e[n]);if(__getOwnPropSymbols)for(var n of __getOwnPropSymbols(e))__propIsEnum.call(e,n)&&__defNormalProp(t,n,e[n]);return t};!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("vue")):"function"==typeof define&&define.amd?define(["vue"],e):(t="undefined"!=typeof globalThis?globalThis:t||self).VueTour=e(t.Vue)}(this,(function(t){"use strict";const e={onStart:()=>{},onPreviousStep:t=>{},onNextStep:t=>{},onStop:()=>{},onSkip:()=>{},onFinish:()=>{}},n={highlight:!1,labels:{buttonSkip:"Skip tour",buttonPrevious:"Previous",buttonNext:"Next",buttonStop:"Finish"},enabledButtons:{buttonSkip:!0,buttonPrevious:!0,buttonNext:!0,buttonStop:!0},startTimeout:0,stopOnTargetNotFound:!0,useKeyboardNavigation:!0,enabledNavigationKeys:{escape:!0,arrowRight:!0,arrowLeft:!0},debug:!1},o={active:"v-tour--active",targetHighlighted:"v-tour__target--highlighted",targetRelative:"v-tour__target--relative"},i="box-shadow 0s ease-in-out 0s",r={enableScrolling:!0,highlight:n.highlight,enabledButtons:n.enabledButtons,modifiers:[{name:"arrow",options:{element:".v-step__arrow",padding:10}},{name:"preventOverflow",options:{rootBoundary:"window"}},{name:"offset",options:{offset:[0,10]}}],placement:"bottom"},s=39,a=37,c=27;const p={name:"v-tour",props:{steps:{type:Array,default:()=>[]},name:{type:String},options:{type:Object,default:()=>n},callbacks:{type:Object,default:()=>e}},data:()=>({currentStep:-1}),mounted(){this.$tours[this.name]=this},beforeUnmount(){this.customOptions.useKeyboardNavigation&&window.removeEventListener("keyup",this.handleKeyup)},computed:{customOptions(){return __assign(__assign({},n),this.options)},customCallbacks(){return __assign(__assign({},e),this.callbacks)},isRunning(){return this.currentStep>-1&&this.currentStep<this.numberOfSteps},isFirst(){return 0===this.currentStep},isLast(){return this.currentStep===this.steps.length-1},numberOfSteps(){return this.steps.length},step(){return this.steps[this.currentStep]}},methods:{async start(t){this.customOptions.useKeyboardNavigation&&window.addEventListener("keyup",this.handleKeyup),t=void 0!==t?parseInt(t,10):0;let e=this.steps[t];if(void 0!==e.before)try{await e.before("start")}catch(n){return Promise.reject(n)}return await(()=>new Promise(((e,n)=>{setTimeout((()=>{this.customCallbacks.onStart(),this.currentStep=t,e()}),this.customOptions.startTimeout)})))(),Promise.resolve()},async previousStep(){let t=this.currentStep-1,e=()=>new Promise(((e,n)=>{this.customCallbacks.onPreviousStep(this.currentStep),this.currentStep=t,e()}));if(t>-1){let o=this.steps[t];if(void 0!==o.before)try{await o.before("previous")}catch(n){return Promise.reject(n)}await e()}return Promise.resolve()},async nextStep(){let t=this.currentStep+1,e=()=>new Promise(((e,n)=>{this.customCallbacks.onNextStep(this.currentStep),this.currentStep=t,e()}));if(t<this.numberOfSteps&&-1!==this.currentStep){let o=this.steps[t];if(void 0!==o.before)try{await o.before("next")}catch(n){return Promise.reject(n)}await e()}return Promise.resolve()},stop(){this.customCallbacks.onStop(),document.body.classList.remove("v-tour--active"),this.currentStep=-1},skip(){this.customCallbacks.onSkip(),this.stop()},finish(){this.customCallbacks.onFinish(),this.stop()},handleKeyup(t){switch(this.customOptions.debug&&console.log("[Vue Tour] A keyup event occured:",t),t.keyCode){case s:this.isKeyEnabled("arrowRight")&&this.nextStep();break;case a:this.isKeyEnabled("arrowLeft")&&this.previousStep();break;case c:this.isKeyEnabled("escape")&&this.stop()}},isKeyEnabled(t){const{enabledNavigationKeys:e}=this.customOptions;return!e.hasOwnProperty(t)||e[t]}}},u={class:"v-tour"};p.render=function(e,n,o,i,r,s){const a=t.resolveComponent("v-step");return t.openBlock(),t.createBlock("div",u,[t.renderSlot(e.$slots,"default",{currentStep:r.currentStep,steps:o.steps,previousStep:s.previousStep,nextStep:s.nextStep,stop:s.stop,skip:s.skip,finish:s.finish,isFirst:s.isFirst,isLast:s.isLast,labels:s.customOptions.labels,enabledButtons:s.customOptions.enabledButtons,highlight:s.customOptions.highlight,debug:s.customOptions.debug},(()=>[o.steps[r.currentStep]?(t.openBlock(),t.createBlock(a,{step:o.steps[r.currentStep],key:r.currentStep,"previous-step":s.previousStep,"next-step":s.nextStep,stop:s.stop,skip:s.skip,finish:s.finish,"is-first":s.isFirst,"is-last":s.isLast,labels:s.customOptions.labels,"enabled-buttons":s.customOptions.enabledButtons,highlight:s.customOptions.highlight,"stop-on-fail":s.customOptions.stopOnTargetNotFound,debug:s.customOptions.debug,ionic:s.customOptions.ionic,onTargetNotFound:n[1]||(n[1]=t=>e.$emit("targetNotFound",t))},null,8,["step","previous-step","next-step","stop","skip","finish","is-first","is-last","labels","enabled-buttons","highlight","stop-on-fail","debug","ionic"])):t.createCommentVNode("",!0)]))])};var l="top",f="bottom",d="right",h="left",m="auto",g=[l,f,d,h],v="start",b="end",y="viewport",w="popper",O=g.reduce((function(t,e){return t.concat([e+"-"+v,e+"-"+b])}),[]),S=[].concat(g,[m]).reduce((function(t,e){return t.concat([e,e+"-"+v,e+"-"+b])}),[]),x=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function k(t){return t?(t.nodeName||"").toLowerCase():null}function _(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function E(t){return t instanceof _(t).Element||t instanceof Element}function B(t){return t instanceof _(t).HTMLElement||t instanceof HTMLElement}function P(t){return"undefined"!=typeof ShadowRoot&&(t instanceof _(t).ShadowRoot||t instanceof ShadowRoot)}var j={name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var e=t.state;Object.keys(e.elements).forEach((function(t){var n=e.styles[t]||{},o=e.attributes[t]||{},i=e.elements[t];B(i)&&k(i)&&(Object.assign(i.style,n),Object.keys(o).forEach((function(t){var e=o[t];!1===e?i.removeAttribute(t):i.setAttribute(t,!0===e?"":e)})))}))},effect:function(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach((function(t){var o=e.elements[t],i=e.attributes[t]||{},r=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:n[t]).reduce((function(t,e){return t[e]="",t}),{});B(o)&&k(o)&&(Object.assign(o.style,r),Object.keys(i).forEach((function(t){o.removeAttribute(t)})))}))}},requires:["computeStyles"]};function L(t){return t.split("-")[0]}function T(t){var e=t.getBoundingClientRect();return{width:e.width,height:e.height,top:e.top,right:e.right,bottom:e.bottom,left:e.left,x:e.left,y:e.top}}function N(t){var e=T(t),n=t.offsetWidth,o=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-o)<=1&&(o=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:o}}function C(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&P(n)){var o=e;do{if(o&&t.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function D(t){return _(t).getComputedStyle(t)}function H(t){return["table","td","th"].indexOf(k(t))>=0}function M(t){return((E(t)?t.ownerDocument:t.document)||window.document).documentElement}function F(t){return"html"===k(t)?t:t.assignedSlot||t.parentNode||(P(t)?t.host:null)||M(t)}function V(t){return B(t)&&"fixed"!==D(t).position?t.offsetParent:null}function A(t){for(var e=_(t),n=V(t);n&&H(n)&&"static"===D(n).position;)n=V(n);return n&&("html"===k(n)||"body"===k(n)&&"static"===D(n).position)?e:n||function(t){var e=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&B(t)&&"fixed"===D(t).position)return null;for(var n=F(t);B(n)&&["html","body"].indexOf(k(n))<0;){var o=D(n);if("none"!==o.transform||"none"!==o.perspective||"paint"===o.contain||-1!==["transform","perspective"].indexOf(o.willChange)||e&&"filter"===o.willChange||e&&o.filter&&"none"!==o.filter)return n;n=n.parentNode}return null}(t)||e}function R(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}var W=Math.max,q=Math.min,$=Math.round;function I(t,e,n){return W(t,q(e,n))}function K(t){return Object.assign({},{top:0,right:0,bottom:0,left:0},t)}function U(t,e){return e.reduce((function(e,n){return e[n]=t,e}),{})}var Y={top:"auto",right:"auto",bottom:"auto",left:"auto"};function z(t){var e,n=t.popper,o=t.popperRect,i=t.placement,r=t.offsets,s=t.position,a=t.gpuAcceleration,c=t.adaptive,p=t.roundOffsets,u=!0===p?function(t){var e=t.x,n=t.y,o=window.devicePixelRatio||1;return{x:$($(e*o)/o)||0,y:$($(n*o)/o)||0}}(r):"function"==typeof p?p(r):r,m=u.x,g=void 0===m?0:m,v=u.y,b=void 0===v?0:v,y=r.hasOwnProperty("x"),w=r.hasOwnProperty("y"),O=h,S=l,x=window;if(c){var k=A(n),E="clientHeight",B="clientWidth";k===_(n)&&"static"!==D(k=M(n)).position&&(E="scrollHeight",B="scrollWidth"),k=k,i===l&&(S=f,b-=k[E]-o.height,b*=a?1:-1),i===h&&(O=d,g-=k[B]-o.width,g*=a?1:-1)}var P,j=Object.assign({position:s},c&&Y);return a?Object.assign({},j,((P={})[S]=w?"0":"",P[O]=y?"0":"",P.transform=(x.devicePixelRatio||1)<2?"translate("+g+"px, "+b+"px)":"translate3d("+g+"px, "+b+"px, 0)",P)):Object.assign({},j,((e={})[S]=w?b+"px":"",e[O]=y?g+"px":"",e.transform="",e))}var X={passive:!0};var G={left:"right",right:"left",bottom:"top",top:"bottom"};function J(t){return t.replace(/left|right|bottom|top/g,(function(t){return G[t]}))}var Q={start:"end",end:"start"};function Z(t){return t.replace(/start|end/g,(function(t){return Q[t]}))}function tt(t){var e=_(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function et(t){return T(M(t)).left+tt(t).scrollLeft}function nt(t){var e=D(t),n=e.overflow,o=e.overflowX,i=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+o)}function ot(t){return["html","body","#document"].indexOf(k(t))>=0?t.ownerDocument.body:B(t)&&nt(t)?t:ot(F(t))}function it(t,e){var n;void 0===e&&(e=[]);var o=ot(t),i=o===(null==(n=t.ownerDocument)?void 0:n.body),r=_(o),s=i?[r].concat(r.visualViewport||[],nt(o)?o:[]):o,a=e.concat(s);return i?a:a.concat(it(F(s)))}function rt(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function st(t,e){return e===y?rt(function(t){var e=_(t),n=M(t),o=e.visualViewport,i=n.clientWidth,r=n.clientHeight,s=0,a=0;return o&&(i=o.width,r=o.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=o.offsetLeft,a=o.offsetTop)),{width:i,height:r,x:s+et(t),y:a}}(t)):B(e)?function(t){var e=T(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}(e):rt(function(t){var e,n=M(t),o=tt(t),i=null==(e=t.ownerDocument)?void 0:e.body,r=W(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),s=W(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-o.scrollLeft+et(t),c=-o.scrollTop;return"rtl"===D(i||n).direction&&(a+=W(n.clientWidth,i?i.clientWidth:0)-r),{width:r,height:s,x:a,y:c}}(M(t)))}function at(t,e,n){var o="clippingParents"===e?function(t){var e=it(F(t)),n=["absolute","fixed"].indexOf(D(t).position)>=0&&B(t)?A(t):t;return E(n)?e.filter((function(t){return E(t)&&C(t,n)&&"body"!==k(t)})):[]}(t):[].concat(e),i=[].concat(o,[n]),r=i[0],s=i.reduce((function(e,n){var o=st(t,n);return e.top=W(o.top,e.top),e.right=q(o.right,e.right),e.bottom=q(o.bottom,e.bottom),e.left=W(o.left,e.left),e}),st(t,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function ct(t){return t.split("-")[1]}function pt(t){var e,n=t.reference,o=t.element,i=t.placement,r=i?L(i):null,s=i?ct(i):null,a=n.x+n.width/2-o.width/2,c=n.y+n.height/2-o.height/2;switch(r){case l:e={x:a,y:n.y-o.height};break;case f:e={x:a,y:n.y+n.height};break;case d:e={x:n.x+n.width,y:c};break;case h:e={x:n.x-o.width,y:c};break;default:e={x:n.x,y:n.y}}var p=r?R(r):null;if(null!=p){var u="y"===p?"height":"width";switch(s){case v:e[p]=e[p]-(n[u]/2-o[u]/2);break;case b:e[p]=e[p]+(n[u]/2-o[u]/2)}}return e}function ut(t,e){void 0===e&&(e={});var n=e,o=n.placement,i=void 0===o?t.placement:o,r=n.boundary,s=void 0===r?"clippingParents":r,a=n.rootBoundary,c=void 0===a?y:a,p=n.elementContext,u=void 0===p?w:p,h=n.altBoundary,m=void 0!==h&&h,v=n.padding,b=void 0===v?0:v,O=K("number"!=typeof b?b:U(b,g)),S=u===w?"reference":w,x=t.elements.reference,k=t.rects.popper,_=t.elements[m?S:u],B=at(E(_)?_:_.contextElement||M(t.elements.popper),s,c),P=T(x),j=pt({reference:P,element:k,strategy:"absolute",placement:i}),L=rt(Object.assign({},k,j)),N=u===w?L:P,C={top:B.top-N.top+O.top,bottom:N.bottom-B.bottom+O.bottom,left:B.left-N.left+O.left,right:N.right-B.right+O.right},D=t.modifiersData.offset;if(u===w&&D){var H=D[i];Object.keys(C).forEach((function(t){var e=[d,f].indexOf(t)>=0?1:-1,n=[l,f].indexOf(t)>=0?"y":"x";C[t]+=H[n]*e}))}return C}function lt(t,e,n){return void 0===n&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function ft(t){return[l,d,f,h].some((function(e){return t[e]>=0}))}function dt(t,e,n){void 0===n&&(n=!1);var o,i,r=M(e),s=T(t),a=B(e),c={scrollLeft:0,scrollTop:0},p={x:0,y:0};return(a||!a&&!n)&&(("body"!==k(e)||nt(r))&&(c=(o=e)!==_(o)&&B(o)?{scrollLeft:(i=o).scrollLeft,scrollTop:i.scrollTop}:tt(o)),B(e)?((p=T(e)).x+=e.clientLeft,p.y+=e.clientTop):r&&(p.x=et(r))),{x:s.left+c.scrollLeft-p.x,y:s.top+c.scrollTop-p.y,width:s.width,height:s.height}}function ht(t){var e=new Map,n=new Set,o=[];function i(t){n.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach((function(t){if(!n.has(t)){var o=e.get(t);o&&i(o)}})),o.push(t)}return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){n.has(t.name)||i(t)})),o}var mt={placement:"bottom",modifiers:[],strategy:"absolute"};function gt(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some((function(t){return!(t&&"function"==typeof t.getBoundingClientRect)}))}function vt(t){void 0===t&&(t={});var e=t,n=e.defaultModifiers,o=void 0===n?[]:n,i=e.defaultOptions,r=void 0===i?mt:i;return function(t,e,n){void 0===n&&(n=r);var i,s,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},mt,r),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},c=[],p=!1,u={state:a,setOptions:function(n){l(),a.options=Object.assign({},r,a.options,n),a.scrollParents={reference:E(t)?it(t):t.contextElement?it(t.contextElement):[],popper:it(e)};var i,s,p=function(t){var e=ht(t);return x.reduce((function(t,n){return t.concat(e.filter((function(t){return t.phase===n})))}),[])}((i=[].concat(o,a.options.modifiers),s=i.reduce((function(t,e){var n=t[e.name];return t[e.name]=n?Object.assign({},n,e,{options:Object.assign({},n.options,e.options),data:Object.assign({},n.data,e.data)}):e,t}),{}),Object.keys(s).map((function(t){return s[t]}))));return a.orderedModifiers=p.filter((function(t){return t.enabled})),a.orderedModifiers.forEach((function(t){var e=t.name,n=t.options,o=void 0===n?{}:n,i=t.effect;if("function"==typeof i){var r=i({state:a,name:e,instance:u,options:o}),s=function(){};c.push(r||s)}})),u.update()},forceUpdate:function(){if(!p){var t=a.elements,e=t.reference,n=t.popper;if(gt(e,n)){a.rects={reference:dt(e,A(n),"fixed"===a.options.strategy),popper:N(n)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach((function(t){return a.modifiersData[t.name]=Object.assign({},t.data)}));for(var o=0;o<a.orderedModifiers.length;o++)if(!0!==a.reset){var i=a.orderedModifiers[o],r=i.fn,s=i.options,c=void 0===s?{}:s,l=i.name;"function"==typeof r&&(a=r({state:a,options:c,name:l,instance:u})||a)}else a.reset=!1,o=-1}}},update:(i=function(){return new Promise((function(t){u.forceUpdate(),t(a)}))},function(){return s||(s=new Promise((function(t){Promise.resolve().then((function(){s=void 0,t(i())}))}))),s}),destroy:function(){l(),p=!0}};if(!gt(t,e))return u;function l(){c.forEach((function(t){return t()})),c=[]}return u.setOptions(n).then((function(t){!p&&n.onFirstUpdate&&n.onFirstUpdate(t)})),u}}var bt=vt({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,n=t.instance,o=t.options,i=o.scroll,r=void 0===i||i,s=o.resize,a=void 0===s||s,c=_(e.elements.popper),p=[].concat(e.scrollParents.reference,e.scrollParents.popper);return r&&p.forEach((function(t){t.addEventListener("scroll",n.update,X)})),a&&c.addEventListener("resize",n.update,X),function(){r&&p.forEach((function(t){t.removeEventListener("scroll",n.update,X)})),a&&c.removeEventListener("resize",n.update,X)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state,n=t.name;e.modifiersData[n]=pt({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,n=t.options,o=n.gpuAcceleration,i=void 0===o||o,r=n.adaptive,s=void 0===r||r,a=n.roundOffsets,c=void 0===a||a,p={placement:L(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:i};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,z(Object.assign({},p,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:s,roundOffsets:c})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,z(Object.assign({},p,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})},data:{}},j,{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,n=t.options,o=t.name,i=n.offset,r=void 0===i?[0,0]:i,s=S.reduce((function(t,n){return t[n]=function(t,e,n){var o=L(t),i=[h,l].indexOf(o)>=0?-1:1,r="function"==typeof n?n(Object.assign({},e,{placement:t})):n,s=r[0],a=r[1];return s=s||0,a=(a||0)*i,[h,d].indexOf(o)>=0?{x:a,y:s}:{x:s,y:a}}(n,e.rects,r),t}),{}),a=s[e.placement],c=a.x,p=a.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=c,e.modifiersData.popperOffsets.y+=p),e.modifiersData[o]=s}},{name:"flip",enabled:!0,phase:"main",fn:function(t){var e=t.state,n=t.options,o=t.name;if(!e.modifiersData[o]._skip){for(var i=n.mainAxis,r=void 0===i||i,s=n.altAxis,a=void 0===s||s,c=n.fallbackPlacements,p=n.padding,u=n.boundary,b=n.rootBoundary,y=n.altBoundary,w=n.flipVariations,x=void 0===w||w,k=n.allowedAutoPlacements,_=e.options.placement,E=L(_),B=c||(E===_||!x?[J(_)]:function(t){if(L(t)===m)return[];var e=J(t);return[Z(t),e,Z(e)]}(_)),P=[_].concat(B).reduce((function(t,n){return t.concat(L(n)===m?function(t,e){void 0===e&&(e={});var n=e,o=n.placement,i=n.boundary,r=n.rootBoundary,s=n.padding,a=n.flipVariations,c=n.allowedAutoPlacements,p=void 0===c?S:c,u=ct(o),l=u?a?O:O.filter((function(t){return ct(t)===u})):g,f=l.filter((function(t){return p.indexOf(t)>=0}));0===f.length&&(f=l);var d=f.reduce((function(e,n){return e[n]=ut(t,{placement:n,boundary:i,rootBoundary:r,padding:s})[L(n)],e}),{});return Object.keys(d).sort((function(t,e){return d[t]-d[e]}))}(e,{placement:n,boundary:u,rootBoundary:b,padding:p,flipVariations:x,allowedAutoPlacements:k}):n)}),[]),j=e.rects.reference,T=e.rects.popper,N=new Map,C=!0,D=P[0],H=0;H<P.length;H++){var M=P[H],F=L(M),V=ct(M)===v,A=[l,f].indexOf(F)>=0,R=A?"width":"height",W=ut(e,{placement:M,boundary:u,rootBoundary:b,altBoundary:y,padding:p}),q=A?V?d:h:V?f:l;j[R]>T[R]&&(q=J(q));var $=J(q),I=[];if(r&&I.push(W[F]<=0),a&&I.push(W[q]<=0,W[$]<=0),I.every((function(t){return t}))){D=M,C=!1;break}N.set(M,I)}if(C)for(var K=function(t){var e=P.find((function(e){var n=N.get(e);if(n)return n.slice(0,t).every((function(t){return t}))}));if(e)return D=e,"break"},U=x?3:1;U>0;U--){if("break"===K(U))break}e.placement!==D&&(e.modifiersData[o]._skip=!0,e.placement=D,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e=t.state,n=t.options,o=t.name,i=n.mainAxis,r=void 0===i||i,s=n.altAxis,a=void 0!==s&&s,c=n.boundary,p=n.rootBoundary,u=n.altBoundary,m=n.padding,g=n.tether,b=void 0===g||g,y=n.tetherOffset,w=void 0===y?0:y,O=ut(e,{boundary:c,rootBoundary:p,padding:m,altBoundary:u}),S=L(e.placement),x=ct(e.placement),k=!x,_=R(S),E="x"===_?"y":"x",B=e.modifiersData.popperOffsets,P=e.rects.reference,j=e.rects.popper,T="function"==typeof w?w(Object.assign({},e.rects,{placement:e.placement})):w,C={x:0,y:0};if(B){if(r||a){var D="y"===_?l:h,H="y"===_?f:d,M="y"===_?"height":"width",F=B[_],V=B[_]+O[D],$=B[_]-O[H],K=b?-j[M]/2:0,U=x===v?P[M]:j[M],Y=x===v?-j[M]:-P[M],z=e.elements.arrow,X=b&&z?N(z):{width:0,height:0},G=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},J=G[D],Q=G[H],Z=I(0,P[M],X[M]),tt=k?P[M]/2-K-Z-J-T:U-Z-J-T,et=k?-P[M]/2+K+Z+Q+T:Y+Z+Q+T,nt=e.elements.arrow&&A(e.elements.arrow),ot=nt?"y"===_?nt.clientTop||0:nt.clientLeft||0:0,it=e.modifiersData.offset?e.modifiersData.offset[e.placement][_]:0,rt=B[_]+tt-it-ot,st=B[_]+et-it;if(r){var at=I(b?q(V,rt):V,F,b?W($,st):$);B[_]=at,C[_]=at-F}if(a){var pt="x"===_?l:h,lt="x"===_?f:d,ft=B[E],dt=ft+O[pt],ht=ft-O[lt],mt=I(b?q(dt,rt):dt,ft,b?W(ht,st):ht);B[E]=mt,C[E]=mt-ft}}e.modifiersData[o]=C}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(t){var e,n=t.state,o=t.name,i=t.options,r=n.elements.arrow,s=n.modifiersData.popperOffsets,a=L(n.placement),c=R(a),p=[h,d].indexOf(a)>=0?"height":"width";if(r&&s){var u=function(t,e){return K("number"!=typeof(t="function"==typeof t?t(Object.assign({},e.rects,{placement:e.placement})):t)?t:U(t,g))}(i.padding,n),m=N(r),v="y"===c?l:h,b="y"===c?f:d,y=n.rects.reference[p]+n.rects.reference[c]-s[c]-n.rects.popper[p],w=s[c]-n.rects.reference[c],O=A(r),S=O?"y"===c?O.clientHeight||0:O.clientWidth||0:0,x=y/2-w/2,k=u[v],_=S-m[p]-u[b],E=S/2-m[p]/2+x,B=I(k,E,_),P=c;n.modifiersData[o]=((e={})[P]=B,e.centerOffset=B-E,e)}},effect:function(t){var e=t.state,n=t.options.element,o=void 0===n?"[data-popper-arrow]":n;null!=o&&("string"!=typeof o||(o=e.elements.popper.querySelector(o)))&&C(e.elements.popper,o)&&(e.elements.arrow=o)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var e=t.state,n=t.name,o=e.rects.reference,i=e.rects.popper,r=e.modifiersData.preventOverflow,s=ut(e,{elementContext:"reference"}),a=ut(e,{altBoundary:!0}),c=lt(s,o),p=lt(a,i,r),u=ft(c),l=ft(p);e.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:p,isReferenceHidden:u,hasPopperEscaped:l},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":l})}}]}),yt=function(t,e,n,o){return(t/=o/2)<1?n/2*t*t+e:-n/2*(--t*(t-2)-1)+e},wt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ot=function(){var t=void 0,e=void 0,n=void 0,o=void 0,i=void 0,r=void 0,s=void 0,a=void 0,c=void 0,p=void 0,u=void 0,l=void 0;function f(){return window.scrollY||window.pageYOffset}function d(t){return t.getBoundingClientRect().top+e}function h(n){c||(c=n),u=i(p=n-c,e,s,a),window.scrollTo(0,u),p<a?window.requestAnimationFrame(h):function(){window.scrollTo(0,e+s),t&&r&&(t.setAttribute("tabindex","-1"),t.focus());"function"==typeof l&&l();c=!1}()}return function(c){var p=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(a=p.duration||1e3,o=p.offset||0,l=p.callback,i=p.easing||yt,r=p.a11y||!1,e=f(),void 0===c?"undefined":wt(c)){case"number":t=void 0,r=!1,n=e+c;break;case"object":n=d(t=c);break;case"string":t=document.querySelector(c),n=d(t)}switch(s=n-e+o,wt(p.duration)){case"number":a=p.duration;break;case"function":a=p.duration(s)}window.requestAnimationFrame(h)}}();function St(t,e){var n,o;if(0===e.length)return t;for(n=0,o=e.length;n<o;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return t<0?-2*t:t}function xt(t,e,n,o){var i,r=St(St(St(t,n),(i=e,Object.prototype.toString.call(i))),typeof e);if(null===e)return St(r,"null");if(void 0===e)return St(r,"undefined");if("object"==typeof e||"function"==typeof e){if(-1!==o.indexOf(e))return St(r,"[Circular]"+n);o.push(e);var s=function(t,e,n){return Object.keys(e).sort().reduce((function(t,o){return xt(t,e[o],o,n)}),t)}(r,e,o);if(!("valueOf"in e)||"function"!=typeof e.valueOf)return s;try{return St(s,String(e.valueOf()))}catch(a){return St(s,"[valueOf exception]"+(a.stack||a.message))}}return St(r,e.toString())}var kt=function(t){return function(t,e){for(;t.length<e;)t="0"+t;return t}(xt(0,t,"",[]).toString(16),8)};const _t={name:"v-step",props:{step:{type:Object},previousStep:{type:Function},nextStep:{type:Function},stop:{type:Function},skip:{type:Function,default:function(){this.stop()}},finish:{type:Function,default:function(){this.stop()}},isFirst:{type:Boolean},isLast:{type:Boolean},labels:{type:Object},enabledButtons:{type:Object},highlight:{type:Boolean},stopOnFail:{type:Boolean},debug:{type:Boolean},ionic:{type:Boolean}},data(){return{hash:kt(this.step.target),targetElement:document.querySelector(this.step.target)}},computed:{params(){return __assign(__assign(__assign(__assign({},r),{highlight:this.highlight}),{enabledButtons:Object.assign({},this.enabledButtons)}),this.step.params)},isSticky(){return!this.step.target}},methods:{createStep(){this.debug&&console.log("[Vue Tour] The target element "+this.step.target+' of .v-step[id="'+this.hash+'"] is:',this.targetElement),this.isSticky?document.body.appendChild(this.$refs["v-step-"+this.hash]):this.targetElement?(this.enableScrolling(),this.createHighlight(),bt(this.targetElement,this.$refs["v-step-"+this.hash],this.params)):(this.debug&&console.error("[Vue Tour] The target element "+this.step.target+' of .v-step[id="'+this.hash+'"] does not exist!'),this.$emit("targetNotFound",this.step),this.stopOnFail&&this.stop())},enableScrolling(){if(this.params.enableScrolling)if(this.step.duration||this.step.offset){let t={duration:this.step.duration||1e3,offset:this.step.offset||0,callback:void 0,a11y:!1};this.ionic?this.ionicScroll(t):Ot(this.targetElement,t)}else this.targetElement.scrollIntoView({behavior:"smooth"})},isHighlightEnabled(){return this.debug&&console.log(`[Vue Tour] Highlight is ${this.params.highlight?"enabled":"disabled"} for .v-step[id="${this.hash}"]`),this.params.highlight},createHighlight(){if(this.isHighlightEnabled()){document.body.classList.add(o.active);const t=window.getComputedStyle(this.targetElement).getPropertyValue("transition");"all 0s ease 0s"!==t&&(this.targetElement.style.transition=`${t}, ${i}`),this.targetElement.classList.add(o.targetHighlighted),this.targetElement.style.position||this.targetElement.classList.add(o.targetRelative)}else document.body.classList.remove(o.active)},removeHighlight(){if(this.isHighlightEnabled()){const t=this.targetElement,e=this.targetElement.style.transition;this.targetElement.classList.remove(o.targetHighlighted),this.targetElement.classList.remove(o.targetRelative),e.includes(i)&&setTimeout((()=>{t.style.transition=e.replace(`, ${i}`,"")}),0)}},isButtonEnabled(t){return!this.params.enabledButtons.hasOwnProperty(t)||this.params.enabledButtons[t]},getOffset(t){let e=this.targetElement.getBoundingClientRect().top;return t.offset&&(e+=t.offset),e},ionicScroll(t){const e=this.getOffset(t);document.querySelector("ion-content").scrollByPoint(0,e,this.step.duration||1e3)}},mounted(){this.createStep()},unmounted(){this.removeHighlight()}},Et=t.withScopeId("data-v-1af5f998");t.pushScopeId("data-v-1af5f998");const Bt={key:0,class:"v-step__header"},Pt={class:"v-step__content"},jt={key:1},Lt={class:"v-step__buttons"};t.popScopeId();const Tt=Et(((e,n,o,i,r,s)=>(t.openBlock(),t.createBlock("div",{class:[{"v-step--sticky":s.isSticky},"v-step"],id:"v-step-"+r.hash,ref:"v-step-"+r.hash},[t.renderSlot(e.$slots,"header",{},(()=>[o.step.header?(t.openBlock(),t.createBlock("div",Bt,[o.step.header.title?(t.openBlock(),t.createBlock("div",{key:0,innerHTML:o.step.header.title},null,8,["innerHTML"])):t.createCommentVNode("",!0)])):t.createCommentVNode("",!0)]),{},!0),t.renderSlot(e.$slots,"content",{},(()=>[t.createVNode("div",Pt,[o.step.content?(t.openBlock(),t.createBlock("div",{key:0,innerHTML:o.step.content},null,8,["innerHTML"])):(t.openBlock(),t.createBlock("div",jt,"This is a demo step! The id of this step is "+t.toDisplayString(r.hash)+" and it targets "+t.toDisplayString(o.step.target)+".",1))])]),{},!0),t.renderSlot(e.$slots,"actions",{},(()=>[t.createVNode("div",Lt,[!o.isLast&&s.isButtonEnabled("buttonSkip")?(t.openBlock(),t.createBlock("button",{key:0,onClick:n[1]||(n[1]=t.withModifiers(((...t)=>o.skip&&o.skip(...t)),["prevent"])),class:"v-step__button v-step__button-skip"},t.toDisplayString(o.labels.buttonSkip),1)):t.createCommentVNode("",!0),!o.isFirst&&s.isButtonEnabled("buttonPrevious")?(t.openBlock(),t.createBlock("button",{key:1,onClick:n[2]||(n[2]=t.withModifiers(((...t)=>o.previousStep&&o.previousStep(...t)),["prevent"])),class:"v-step__button v-step__button-previous"},t.toDisplayString(o.labels.buttonPrevious),1)):t.createCommentVNode("",!0),!o.isLast&&s.isButtonEnabled("buttonNext")?(t.openBlock(),t.createBlock("button",{key:2,onClick:n[3]||(n[3]=t.withModifiers(((...t)=>o.nextStep&&o.nextStep(...t)),["prevent"])),class:"v-step__button v-step__button-next"},t.toDisplayString(o.labels.buttonNext),1)):t.createCommentVNode("",!0),o.isLast&&s.isButtonEnabled("buttonStop")?(t.openBlock(),t.createBlock("button",{key:3,onClick:n[4]||(n[4]=t.withModifiers(((...t)=>o.finish&&o.finish(...t)),["prevent"])),class:"v-step__button v-step__button-stop"},t.toDisplayString(o.labels.buttonStop),1)):t.createCommentVNode("",!0)])]),{},!0),t.createVNode("div",{class:["v-step__arrow",{"v-step__arrow--dark":o.step.header&&o.step.header.title}],"data-popper-arrow":""},null,2)],10,["id"]))));_t.render=Tt,_t.__scopeId="data-v-1af5f998";return{install(t,e){t.component(p.name,p),t.component(_t.name,_t),t.config.globalProperties.$tours={}}}}));