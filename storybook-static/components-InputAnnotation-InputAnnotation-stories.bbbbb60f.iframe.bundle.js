/*! For license information please see components-InputAnnotation-InputAnnotation-stories.bbbbb60f.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunktt_ui_input=self.webpackChunktt_ui_input||[]).push([[535],{"./src/components/InputAnnotation/InputAnnotation.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Annotation",component:__webpack_require__("./src/components/InputAnnotation/InputAnnotation.tsx").A,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{state:{control:{type:"select",options:["default","hover","focus","error","disabled","error-focus"]}},darkmode:{control:"boolean"}}},Default={args:{annotationText:"This is an annotation",darkmode:!1,state:"default"}},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    annotationText: "This is an annotation",\n    darkmode: false,\n    state: "default"\n  }\n}',...Default.parameters?.docs?.source}}}},"./src/components/InputAnnotation/InputAnnotation.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>InputAnnotation_InputAnnotation});__webpack_require__("./node_modules/react/index.js");const InputAnnotation_module={annotation:"InputAnnotation_annotation__48bS1",darkmode:"InputAnnotation_darkmode__L1-0h",error:"InputAnnotation_error__ROfAf"};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const InputAnnotation=_ref=>{let{annotationText,darkmode=!1,state="default"}=_ref;return annotationText?(0,jsx_runtime.jsx)("div",{className:`${InputAnnotation_module.annotation} ${InputAnnotation_module.groupContainer}   ${"error"===state||"error-focus"===state?InputAnnotation_module.error:""} ${darkmode?InputAnnotation_module.darkmode:""}`,children:annotationText}):null},InputAnnotation_InputAnnotation=InputAnnotation;InputAnnotation.__docgenInfo={description:"",methods:[],displayName:"InputAnnotation",props:{annotationText:{required:!1,tsType:{name:"string"},description:""},darkmode:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},state:{required:!1,tsType:{name:"union",raw:'"default" | "hover" | "focus" | "error" | "disabled" | "error-focus"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"hover"'},{name:"literal",value:'"focus"'},{name:"literal",value:'"error"'},{name:"literal",value:'"disabled"'},{name:"literal",value:'"error-focus"'}]},description:"",defaultValue:{value:'"default"',computed:!1}}}}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);