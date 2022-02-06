(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[198],{3198:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return O}});var r=e(2791),u=e(4942),o=e(1413),a=e(885),i=e(6429),c=e.n(i),s=e(6030),l=e(5036),f=(e(2524),"NOT_FOUND");var p=function(t,n){return t===n};function h(t,n){var e="object"===typeof n?n:{equalityCheck:n},r=e.equalityCheck,u=void 0===r?p:r,o=e.maxSize,a=void 0===o?1:o,i=e.resultEqualityCheck,c=function(t){return function(n,e){if(null===n||null===e||n.length!==e.length)return!1;for(var r=n.length,u=0;u<r;u++)if(!t(n[u],e[u]))return!1;return!0}}(u),s=1===a?function(t){var n;return{get:function(e){return n&&t(n.key,e)?n.value:f},put:function(t,e){n={key:t,value:e}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(c):function(t,n){var e=[];function r(t){var r=e.findIndex((function(e){return n(t,e.key)}));if(r>-1){var u=e[r];return r>0&&(e.splice(r,1),e.unshift(u)),u.value}return f}return{get:r,put:function(n,u){r(n)===f&&(e.unshift({key:n,value:u}),e.length>t&&e.pop())},getEntries:function(){return e},clear:function(){e=[]}}}(a,c);function l(){var n=s.get(arguments);if(n===f){if(n=t.apply(null,arguments),i){var e=s.getEntries(),r=e.find((function(t){return i(t.value,n)}));r&&(n=r.value)}s.put(arguments,n)}return n}return l.clearCache=function(){return s.clear()},l}function d(t){var n=Array.isArray(t[0])?t[0]:t;if(!n.every((function(t){return"function"===typeof t}))){var e=n.map((function(t){return"function"===typeof t?"function "+(t.name||"unnamed")+"()":typeof t})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+e+"]")}return n}function m(t){for(var n=arguments.length,e=new Array(n>1?n-1:0),r=1;r<n;r++)e[r-1]=arguments[r];var u=function(){for(var n=arguments.length,r=new Array(n),u=0;u<n;u++)r[u]=arguments[u];var o,a=0,i={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(i=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var s=i,l=s.memoizeOptions,f=void 0===l?e:l,p=Array.isArray(f)?f:[f],h=d(r),m=t.apply(void 0,[function(){return a++,c.apply(null,arguments)}].concat(p)),v=t((function(){for(var t=[],n=h.length,e=0;e<n;e++)t.push(h[e].apply(null,arguments));return o=m.apply(null,t)}));return Object.assign(v,{resultFunc:c,memoizedResultFunc:m,dependencies:h,lastResult:function(){return o},recomputations:function(){return a},resetRecomputations:function(){return a=0}}),v};return u}var v=m(h),g=function(t){return t.contacts.items},x=function(t){return t.contacts.filter},y=v(g,x,(function(t,n){var e=n.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(e)}))})),b=function(t){return t.contacts.loading},_=e(4443),w="Form_form__Vbh4n",j="Form_label__FMNS+",C="Form_input__DE5Im",N="Form_button__xaHiA",k=e(3329),F=function(){var t=(0,r.useState)({name:"",number:""}),n=(0,a.Z)(t,2),e=n[0],i=n[1],f=(0,s.v9)(g),p=(0,s.I0)(),h=c().generate(),d=c().generate(),m=function(t){var n=t.currentTarget,e=n.name,r=n.value;i((function(t){return(0,o.Z)((0,o.Z)({},t),{},(0,u.Z)({},e,r))}))},v=function(){i({name:"",number:""})};return(0,k.jsxs)("form",{className:w,onSubmit:function(t){t.preventDefault(),f.find((function(t){return t.name===e.name}))?alert("".concat(e.name," is already in contacts")):(p(l.addContact(e)),v())},children:[(0,k.jsxs)("label",{className:j,htmlFor:h,children:["Name",(0,k.jsx)("input",{className:C,type:"text",name:"name",value:e.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:m,id:h})]}),(0,k.jsxs)("label",{className:j,htmlFor:d,children:["Number",(0,k.jsx)("input",{className:C,type:"tel",name:"number",value:e.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:m,id:d})]}),(0,k.jsx)("button",{className:N,type:"submit",children:"Add contact"})]})},A=(0,r.memo)(F),E="Filter_input__gygtO",M="Filter_label__0hMpV",L=function(){var t=(0,s.v9)(x),n=(0,s.I0)();return(0,k.jsxs)("label",{className:M,children:["Find contacts by name",(0,k.jsx)("input",{className:E,type:"text",value:t,onChange:function(t){return n(_.changeFilter(t.target.value))}})]})};L.defaultProps={value:""};var q=L,z="ContactList_contactList__lj9cx",V="ContactList_item__GSZIu",Z="ContactList_button__4mYLP";function I(){var t=(0,s.v9)(y),n=(0,s.v9)(b),e=(0,s.I0)();(0,r.useEffect)((function(){e(l.fetchContacts())}),[e]);return(0,k.jsxs)(k.Fragment,{children:[n&&(0,k.jsx)("h1",{children:"Loading..."}),0===t.length&&(0,k.jsx)("div",{children:" No contacts "}),t.length>0&&(0,k.jsx)("ul",{className:z,children:t.map((function(t){var n=t.id,r=t.name,u=t.number;return(0,k.jsxs)("li",{className:V,children:[r,": ",u,(0,k.jsx)("button",{className:Z,type:"button",onClick:function(){return function(t){e(l.deleteContact(t))}(n)},children:"Delete"})]},n)}))})]})}function O(){return(0,k.jsxs)("div",{children:[(0,k.jsx)(A,{}),(0,k.jsx)(q,{}),(0,k.jsx)(I,{})]})}I.defaultProps={contacts:[]}},6429:function(t,n,e){"use strict";t.exports=e(5274)},8857:function(t,n,e){"use strict";var r,u,o,a=e(5408),i="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";function c(){o=!1}function s(t){if(t){if(t!==r){if(t.length!==i.length)throw new Error("Custom alphabet for shortid must be "+i.length+" unique characters. You submitted "+t.length+" characters: "+t);var n=t.split("").filter((function(t,n,e){return n!==e.lastIndexOf(t)}));if(n.length)throw new Error("Custom alphabet for shortid must be "+i.length+" unique characters. These characters were not unique: "+n.join(", "));r=t,c()}}else r!==i&&(r=i,c())}function l(){return o||(o=function(){r||s(i);for(var t,n=r.split(""),e=[],u=a.nextValue();n.length>0;)u=a.nextValue(),t=Math.floor(u*n.length),e.push(n.splice(t,1)[0]);return e.join("")}())}t.exports={get:function(){return r||i},characters:function(t){return s(t),r},seed:function(t){a.seed(t),u!==t&&(c(),u=t)},lookup:function(t){return l()[t]},shuffled:l}},7098:function(t,n,e){"use strict";var r,u,o=e(2226);e(8857);t.exports=function(t){var n="",e=Math.floor(.001*(Date.now()-1567752802062));return e===u?r++:(r=0,u=e),n+=o(7),n+=o(t),r>0&&(n+=o(r)),n+=o(e)}},2226:function(t,n,e){"use strict";var r=e(8857),u=e(9139),o=e(2483);t.exports=function(t){for(var n,e=0,a="";!n;)a+=o(u,r.get(),1),n=t<Math.pow(16,e+1),e++;return a}},5274:function(t,n,e){"use strict";var r=e(8857),u=e(7098),o=e(6046),a=e(5347)||0;function i(){return u(a)}t.exports=i,t.exports.generate=i,t.exports.seed=function(n){return r.seed(n),t.exports},t.exports.worker=function(n){return a=n,t.exports},t.exports.characters=function(t){return void 0!==t&&r.characters(t),r.shuffled()},t.exports.isValid=o},6046:function(t,n,e){"use strict";var r=e(8857);t.exports=function(t){return!(!t||"string"!==typeof t||t.length<6)&&!new RegExp("[^"+r.get().replace(/[|\\{}()[\]^$+*?.-]/g,"\\$&")+"]").test(t)}},9139:function(t){"use strict";var n,e="object"===typeof window&&(window.crypto||window.msCrypto);n=e&&e.getRandomValues?function(t){return e.getRandomValues(new Uint8Array(t))}:function(t){for(var n=[],e=0;e<t;e++)n.push(Math.floor(256*Math.random()));return n},t.exports=n},5408:function(t){"use strict";var n=1;t.exports={nextValue:function(){return(n=(9301*n+49297)%233280)/233280},seed:function(t){n=t}}},5347:function(t){"use strict";t.exports=0},2483:function(t){t.exports=function(t,n,e){for(var r=(2<<Math.log(n.length-1)/Math.LN2)-1,u=-~(1.6*r*e/n.length),o="";;)for(var a=t(u),i=u;i--;)if((o+=n[a[i]&r]||"").length===+e)return o}}}]);
//# sourceMappingURL=198.cbd86287.chunk.js.map