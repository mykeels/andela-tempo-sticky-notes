"use strict";
(self["webpackChunk_mykeels_sticky_notes"] = self["webpackChunk_mykeels_sticky_notes"] || []).push([["src_bootstrap_js"],{

/***/ 5523:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

;// CONCATENATED MODULE: ./src/index.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const src = ({});
// EXTERNAL MODULE: consume shared module (default) react@^17.0.2 (singleton) (fallback: ./node_modules/react/index.js)
var index_js_ = __webpack_require__(2950);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: consume shared module (default) react-dom@^17.0.2 (singleton) (fallback: ./node_modules/react-dom/index.js)
var react_dom_index_js_ = __webpack_require__(2181);
var react_dom_index_js_default = /*#__PURE__*/__webpack_require__.n(react_dom_index_js_);
// EXTERNAL MODULE: consume shared module (default) react-query@^3.34.12 (singleton) (fallback: ./node_modules/react-query/es/index.js)
var es_index_js_ = __webpack_require__(8204);
// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/index.js
var dist = __webpack_require__(1087);
// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var react_router_dist = __webpack_require__(7689);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 3 modules
var slicedToArray = __webpack_require__(885);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(184);
;// CONCATENATED MODULE: ./src/common/contexts/delete.context.js
var DeleteContext=/*#__PURE__*/index_js_default().createContext({callback:function callback(){},// @ts-ignore
// eslint-disable-next-line no-unused-vars
setCallback:function setCallback(){var callback=arguments.length>0&&arguments[0]!==undefined?arguments[0]:function(){};}});var DeleteContextProvider=function DeleteContextProvider(_ref){var children=_ref.children;/** @type {[(() => {}), React.Dispatch<React.SetStateAction<(() => {})>>]} */ // @ts-ignore
var _useState=(0,index_js_.useState)(function(){}),_useState2=(0,slicedToArray/* default */.Z)(_useState,2),callback=_useState2[0],setCallback=_useState2[1];return/*#__PURE__*/(0,jsx_runtime.jsx)(DeleteContext.Provider,{value:{callback:callback,// @ts-ignore
setCallback:setCallback},children:children});};
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js
var regeneratorRuntime = __webpack_require__(4165);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(5861);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js + 1 modules
var objectSpread2 = __webpack_require__(8683);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 3 modules
var toConsumableArray = __webpack_require__(2982);
// EXTERNAL MODULE: ./node_modules/uuid/dist/esm-browser/v4.js + 3 modules
var v4 = __webpack_require__(4261);
;// CONCATENATED MODULE: ./src/hooks/use-cache-invalidation.hook.js
/**
 *
 * @param {number} ms
 * @returns {Promise<void>}
 */var sleep=function sleep(ms){return new Promise(function(resolve){setTimeout(resolve,ms);});};/**
 * will update a react-query cache entry using a transform/mapping function
 * @param {(string|string[])} queryKey
 * @param {number} timeout
 */var useCacheInvalidation=function useCacheInvalidation(queryKey){var timeout=arguments.length>1&&arguments[1]!==undefined?arguments[1]:5000;var queryClient=(0,es_index_js_.useQueryClient)();return{/**
     *
     * @param {(cachedValue: any) => any} transformCachedValue
     */updateCache:function updateCache(){var transformCachedValue=arguments.length>0&&arguments[0]!==undefined?arguments[0]:function(value){return value;};return queryClient.setQueryData(queryKey,function(cachedValue){sleep(timeout).then(function(){return queryClient.refetchQueries(queryKey,{active:true});});return transformCachedValue(cachedValue);});}};};
;// CONCATENATED MODULE: ./src/hooks/use-absolute-path.hook.js
/**
 * get the absolute path to a resource
 * @returns {(url: string) => string}
 *
 * @example
 * const getAbsolutePath = useAbsolutePath();
 * getAbsolutePath("/notifications") // returns "/1.0.1/notifications"
 */var useAbsolutePath=function useAbsolutePath(){var _useState=useState(""),_useState2=_slicedToArray(_useState,2),basedir=_useState2[0],setBaseDir=_useState2[1];useEffect(function(){var base=document.querySelector("base");if(base){setBaseDir(base.getAttribute("href"));}},[]);return function(url){return"".concat(basedir).concat(url).replace("//","/");};};
;// CONCATENATED MODULE: ./src/hooks/use-base-href.hook.js
var useBaseHref=function useBaseHref(){var _useState=(0,index_js_.useState)("/"),_useState2=(0,slicedToArray/* default */.Z)(_useState,2),baseHref=_useState2[0],setBaseHref=_useState2[1];(0,index_js_.useEffect)(function(){var base=document.querySelector("head base");var href=base===null||base===void 0?void 0:base.getAttribute("href");setBaseHref(href||baseHref);},[]);return baseHref;};
;// CONCATENATED MODULE: ./src/hooks/index.js

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js + 1 modules
var objectWithoutProperties = __webpack_require__(4925);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(1694);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/luxon/build/cjs-browser/luxon.js
var luxon = __webpack_require__(3700);
;// CONCATENATED MODULE: ./src/components/HomeScreen/components/StickyNote/components/StickyHeader/index.js
/**
 * @param {object} props
 * @param {boolean} [props.isExpanded]
 * @param {string|number|Date} [props.date]
 * @param {NoteColor} props.color
 * @param {number} props.zIndex
 * @param {(color: NoteColor) => any} props.onColorChange
 * @param {(color: number) => any} props.onZIndexChange
 * @param {{ focused: boolean }} [props.defaults]
 * @returns {JSX.Element}
 */var StickyHeader=function StickyHeader(_ref){var isExpanded=_ref.isExpanded,color=_ref.color,zIndex=_ref.zIndex,date=_ref.date,onColorChange=_ref.onColorChange,onZIndexChange=_ref.onZIndexChange,defaults=_ref.defaults;var controlRef=(0,index_js_.useRef)();var _useState=(0,index_js_.useState)(defaults===null||defaults===void 0?void 0:defaults.focused),_useState2=(0,slicedToArray/* default */.Z)(_useState,2),focused=_useState2[0],setFocused=_useState2[1];(0,index_js_.useEffect)(function(){var onWindowClick=function onWindowClick(e){if(// @ts-ignore
!e.target.closest(".sticky-header-control")&&// @ts-ignore
!e.target.closest(".sticky-header-button")){setFocused(false);}};window.addEventListener("click",onWindowClick);var onEscapePressed=function onEscapePressed(e){if(e.key==="Escape"){setFocused(false);}};window.addEventListener("keyup",onEscapePressed);return function(){window.removeEventListener("click",onWindowClick);window.removeEventListener("keyup",onEscapePressed);};},[]);var dateCreated=luxon/* DateTime.fromJSDate */.ou.fromJSDate(new Date(date));return isExpanded?/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:classnames_default()("bg-".concat(color)," px-2 py-2 block w-full relative overflow-visible sticky-header"),children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"inline-block w-1/2 text-xs",children:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:"relative bottom-1",children:date?dateCreated.toRelative():null})}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"inline-block w-1/2 text-right",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("button",{className:"text-2xl text-gray-200 inline-block focus:outline px-4 relative sticky-header-button",onClick:function onClick(){return setFocused(true);},children:/*#__PURE__*/(0,jsx_runtime.jsx)("span",{className:"relative bottom-2",children:"..."})}),focused?/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:classnames_default()("border-".concat(color),"absolute bg-gray-300 w-64 h-32 inline-block right-0 top-0 sticky-header-control border-2"),style:{top:"48px"},ref:controlRef,children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"block w-full py-2",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"inline-block w-1/4 p-2",children:/*#__PURE__*/(0,jsx_runtime.jsx)("button",{className:"bg-blue p-2 w-8 h-8 border-transparent hover:border-gray-200 border-2",onClick:function onClick(){return onColorChange("blue");},children:"\xA0"})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"inline-block w-1/4 p-2",children:/*#__PURE__*/(0,jsx_runtime.jsx)("button",{className:"bg-yellow p-2 w-8 h-8 border-transparent hover:border-gray-200 border-2",onClick:function onClick(){return onColorChange("yellow");},children:"\xA0"})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"inline-block w-1/4 p-2",children:/*#__PURE__*/(0,jsx_runtime.jsx)("button",{className:"bg-lime p-2 w-8 h-8 border-transparent hover:border-gray-200 border-2",onClick:function onClick(){return onColorChange("lime");},children:"\xA0"})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"inline-block w-1/4 p-2",children:/*#__PURE__*/(0,jsx_runtime.jsx)("button",{className:"bg-green p-2 w-8 h-8 border-transparent hover:border-gray-200 border-2",onClick:function onClick(){return onColorChange("green");},children:"\xA0"})})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"text-white py-2",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"block text-center text-xs",children:"z-position"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"block w-full",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"inline-block w-1/3 text-right",children:/*#__PURE__*/(0,jsx_runtime.jsx)("button",{onClick:function onClick(){return onZIndexChange(zIndex-1);},children:"\u2B05\uFE0F"})}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"inline-block w-1/3 text-center text-lg",children:zIndex}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"inline-block w-1/3 text-left",children:/*#__PURE__*/(0,jsx_runtime.jsx)("button",{onClick:function onClick(){return onZIndexChange(zIndex+1);},children:"\u27A1\uFE0F"})})]})]})]}):null]})]}):/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:classnames_default()("bg-".concat(color)," p-2 block w-full")});};StickyHeader.defaultProps={color:"blue",zIndex:1,defaults:{focused:false}};
;// CONCATENATED MODULE: ./src/components/HomeScreen/components/StickyNote/components/index.js

;// CONCATENATED MODULE: ./src/components/HomeScreen/components/StickyNote/index.js
var _excluded=["note","className","onPositionChange","onResize","onChange","Header"];var HEIGHT_OFFSET=32;var DEFAULT_NOTE_WIDTH=192;var DEFAULT_NOTE_HEIGHT=160;/**
 *
 * @param {object} props
 * @param {Note} props.note
 * @param {(position: NotePosition) => any} [props.onPositionChange]
 * @param {any} [props.className]
 * @param {(size: NoteSize) => any} props.onResize
 * @param {(text: string) => any} props.onChange
 * @param {() => JSX.Element} [props.Header]
 * @returns {JSX.Element}
 */var StickyNote=function StickyNote(_ref){var _note$size,_note$size2;var note=_ref.note,className=_ref.className,onPositionChange=_ref.onPositionChange,onResize=_ref.onResize,onChange=_ref.onChange,Header=_ref.Header,props=(0,objectWithoutProperties/* default */.Z)(_ref,_excluded);var _useState=(0,index_js_.useState)(note.position||{top:0,left:0}),_useState2=(0,slicedToArray/* default */.Z)(_useState,2),pos=_useState2[0],setPos=_useState2[1];(0,index_js_.useEffect)(function(){onPositionChange(pos);},[pos]);var $width=((_note$size=note.size)===null||_note$size===void 0?void 0:_note$size.width)||DEFAULT_NOTE_WIDTH;var $height=((_note$size2=note.size)===null||_note$size2===void 0?void 0:_note$size2.height)||DEFAULT_NOTE_HEIGHT;/** @type {React.MutableRefObject<HTMLTextAreaElement>} */var textareaRef=(0,index_js_.useRef)();(0,index_js_.useEffect)(function(){var _textareaRef$current;(_textareaRef$current=textareaRef.current)===null||_textareaRef$current===void 0?void 0:_textareaRef$current.focus();},[]);return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",(0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({},props),{},{className:classnames_default()(className,"bg-gray-100 inline-block p-0"),style:{top:pos.top,left:pos.left,zIndex:note.zIndex},onDragStart:/** @param {React.DragEvent<HTMLDivElement> & { target: HTMLDivElement }} e */function onDragStart(e){var rect=e.target.getBoundingClientRect();e.target["dataTransfer"]={x:e.clientX-rect.x,y:e.clientY-rect.y};},onDragEnd:function onDragEnd(e){setPos({top:e.clientY-e.target["dataTransfer"]["y"],left:e.clientX-e.target["dataTransfer"]["x"]});},draggable:true,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(Header,{}),/*#__PURE__*/(0,jsx_runtime.jsx)("textarea",{ref:textareaRef,className:"bg-gray-100 text-white text-lg p-4",style:{resize:"both",width:$width,height:$height-HEIGHT_OFFSET},defaultValue:note.text,onBlur:function onBlur(e){return onChange(e.target.value);},onMouseUp:function onMouseUp(e){/** @type {HTMLTextAreaElement & { offsetWidth: number, offsetHeight: number }} */ // @ts-ignore
var element=e.target;onResize({width:element.offsetWidth,height:element.offsetHeight+HEIGHT_OFFSET});}})]}));};StickyNote.defaultProps={note:{text:"",width:DEFAULT_NOTE_WIDTH,height:DEFAULT_NOTE_HEIGHT,zIndex:1,position:{top:0,left:0}},Header:StickyHeader,onPositionChange:function onPositionChange(){}};
;// CONCATENATED MODULE: ./src/components/HomeScreen/components/StickyRegion/StickyRegion.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const StickyRegion = ({});
// EXTERNAL MODULE: ./node_modules/classnames/dedupe.js
var dedupe = __webpack_require__(1616);
var dedupe_default = /*#__PURE__*/__webpack_require__.n(dedupe);
;// CONCATENATED MODULE: ./src/components/HomeScreen/components/StickyRegion/index.js
var StickyRegion_excluded=["children","className","onDoubleClick"];/**
 * @param {object} props
 * @param {any} [props.children]
 * @param {any} [props.className]
 * @param {(pos: { x: number, y: number }) => any} [props.onDoubleClick]
 * @returns {JSX.Element}
 */var StickyRegion_StickyRegion=function StickyRegion(_ref){var children=_ref.children,className=_ref.className,_onDoubleClick=_ref.onDoubleClick,props=(0,objectWithoutProperties/* default */.Z)(_ref,StickyRegion_excluded);var _useContext=(0,index_js_.useContext)(DeleteContext),callback=_useContext.callback;return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:dedupe_default()("delete-region h-16 bg-red block w-full text-center text-2xl py-4 text-white fixed top-0 left-0 z-10"),onDrop:function onDrop(){if(typeof callback==="function"){callback();}},children:"Drop Note to Delete"}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",(0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({},props),{},{className:dedupe_default()(className,"bg-gray-200 block sticky-region cursor-pointer"),onDoubleClick:function onDoubleClick(e){_onDoubleClick({x:e.clientX,y:e.clientY});},children:children}))]});};
;// CONCATENATED MODULE: ./src/components/HomeScreen/index.js
/**
 *
 * @param {object} props
 * @param {() => Promise<Note[]>} props.getNotes
 * @param {(notes: Note[]) => Promise<any>} props.saveNotes
 * @returns {JSX.Element}
 */var HomeScreen=function HomeScreen(_ref){var _preview$position,_preview$position2;var getNotes=_ref.getNotes,saveNotes=_ref.saveNotes;/** @type {[Note, React.Dispatch<React.SetStateAction<Partial<Note>>>]} */var _useState=(0,index_js_.useState)(null),_useState2=(0,slicedToArray/* default */.Z)(_useState,2),preview=_useState2[0],setPreview=_useState2[1];var _useQuery=(0,es_index_js_.useQuery)(["notes"],getNotes),_useQuery$data=_useQuery.data,notes=_useQuery$data===void 0?[]:_useQuery$data;var _useCacheInvalidation=useCacheInvalidation(["notes"],100),updateCache=_useCacheInvalidation.updateCache;var _useContext=(0,index_js_.useContext)(DeleteContext),setCallback=_useContext.setCallback;/** @param {string} text */var addNote=function addNote(text){if(!text){return;}var newNotes=[].concat((0,toConsumableArray/* default */.Z)(notes),[{id:(0,v4/* default */.Z)(),text:text,date:new Date(),color:preview.color,position:preview.position,size:preview.size,zIndex:1}]);saveNotes(newNotes);setPreview(null);updateCache(function(){return newNotes;});};/** @param {Partial<Note>} note */var editNote=function editNote(note){var newNotes=notes.map(function(n){return n.id===note.id?(0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({},n),note):n;});saveNotes(newNotes);updateCache(function(){return newNotes;});};/** @param {Partial<Note>} note */var deleteNote=function deleteNote(note){var newNotes=notes.filter(function(n){return n.id!==note.id;});saveNotes(newNotes);updateCache(function(){return newNotes;});};var maxZIndex=Math.max.apply(Math,(0,toConsumableArray/* default */.Z)(notes.map(function(n){return n.zIndex;})))||0;return/*#__PURE__*/(0,jsx_runtime.jsxs)(StickyRegion_StickyRegion,{className:"relative",onDoubleClick:function onDoubleClick(e){setPreview((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({},preview||{}),{},{text:"",color:"blue",zIndex:1,position:{top:e.y-Math.floor(DEFAULT_NOTE_HEIGHT/4),left:e.x-Math.floor(DEFAULT_NOTE_WIDTH/2)}}));},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:preview?/*#__PURE__*/(0,jsx_runtime.jsx)(StickyNote,{note:preview,onChange:function onChange(text){return addNote(text);},Header:function Header(){return/*#__PURE__*/(0,jsx_runtime.jsx)(StickyHeader,{color:preview.color,zIndex:preview.zIndex,onColorChange:function onColorChange(color){return setPreview((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({},preview||{}),{},{color:color}));},onZIndexChange:function onZIndexChange(zIndex){return setPreview((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({},preview||{}),{},{zIndex:zIndex}));},isExpanded:true});},onPositionChange:function onPositionChange(position){return setPreview((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({},preview||{}),{},{position:position,zIndex:maxZIndex+1}));},onResize:function onResize(size){return setPreview((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({},preview||{}),{},{size:size}));},className:"absolute",onDragStart:function onDragStart(){setCallback(function(){return function(){setPreview(null);};});}},"preview-".concat(preview===null||preview===void 0?void 0:(_preview$position=preview.position)===null||_preview$position===void 0?void 0:_preview$position.left,"-").concat(preview===null||preview===void 0?void 0:(_preview$position2=preview.position)===null||_preview$position2===void 0?void 0:_preview$position2.top)):null}),notes.map(function(note){return/*#__PURE__*/(0,jsx_runtime.jsx)(StickyNote,{className:"absolute",note:note,Header:function Header(){return/*#__PURE__*/(0,jsx_runtime.jsx)(StickyHeader,{color:note.color,zIndex:note.zIndex,date:note.date,onColorChange:function onColorChange(color){return editNote((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({},note),{},{color:color}));},onZIndexChange:function onZIndexChange(zIndex){return editNote((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({},note),{},{zIndex:zIndex}));},isExpanded:true});},onPositionChange:function onPositionChange(position){return editNote((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({},note),{},{position:position,zIndex:maxZIndex+1}));},onResize:function onResize(size){return editNote((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({},note),{},{size:size}));},onChange:function onChange(text){return editNote((0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({},note),{},{text:text}));},onDragStart:function onDragStart(){setCallback(function(){return function(){if(confirm("Are you sure you want to delete this note?")){deleteNote(note);}};});}},note.id);})]});};HomeScreen.defaultProps={getNotes:function(){var _getNotes=(0,asyncToGenerator/* default */.Z)(/*#__PURE__*/(0,regeneratorRuntime/* default */.Z)().mark(function _callee(){return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee$(_context){while(1){switch(_context.prev=_context.next){case 0:return _context.abrupt("return",JSON.parse(localStorage.getItem("notes")||"[]"));case 1:case"end":return _context.stop();}}},_callee);}));function getNotes(){return _getNotes.apply(this,arguments);}return getNotes;}(),saveNotes:function(){var _saveNotes=(0,asyncToGenerator/* default */.Z)(/*#__PURE__*/(0,regeneratorRuntime/* default */.Z)().mark(function _callee2(notes){return (0,regeneratorRuntime/* default */.Z)().wrap(function _callee2$(_context2){while(1){switch(_context2.prev=_context2.next){case 0:return _context2.abrupt("return",localStorage.setItem("notes",JSON.stringify(notes)));case 1:case"end":return _context2.stop();}}},_callee2);}));function saveNotes(_x){return _saveNotes.apply(this,arguments);}return saveNotes;}()};
;// CONCATENATED MODULE: ./src/components/index.js

;// CONCATENATED MODULE: ./src/App.js
/**
 *
 * @returns {JSX.Element}
 */function App(){var queryClient=new es_index_js_.QueryClient();var baseHref=useBaseHref();var useHashRouter=""==="true";var Router=useHashRouter?dist/* HashRouter */.UT:dist/* BrowserRouter */.VK;return/*#__PURE__*/(0,jsx_runtime.jsx)(es_index_js_.QueryClientProvider,{client:queryClient,children:/*#__PURE__*/(0,jsx_runtime.jsx)(DeleteContextProvider,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(Router,{basename:baseHref,children:/*#__PURE__*/(0,jsx_runtime.jsx)(react_router_dist/* Routes */.Z5,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(react_router_dist/* Route */.AW,{path:"/",element:/*#__PURE__*/(0,jsx_runtime.jsx)(HomeScreen,{})})})})})});}App.defaultProps={manifests:[],navigate:function navigate(){}};/* harmony default export */ const src_App = (App);
;// CONCATENATED MODULE: ./src/reportWebVitals.js
var reportWebVitals=function reportWebVitals(onPerfEntry){if(onPerfEntry&&onPerfEntry instanceof Function){__webpack_require__.e(/* import() */ "node_modules_web-vitals_dist_web-vitals_js").then(__webpack_require__.bind(__webpack_require__, 787)).then(function(_ref){var getCLS=_ref.getCLS,getFID=_ref.getFID,getFCP=_ref.getFCP,getLCP=_ref.getLCP,getTTFB=_ref.getTTFB;getCLS(onPerfEntry);getFID(onPerfEntry);getFCP(onPerfEntry);getLCP(onPerfEntry);getTTFB(onPerfEntry);});}};/* harmony default export */ const src_reportWebVitals = (reportWebVitals);
;// CONCATENATED MODULE: ./src/serviceWorker.js
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
var isLocalhost=Boolean(window.location.hostname==="localhost"||// [::1] is the IPv6 localhost address.
window.location.hostname==="[::1]"||// 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function register(config){if( true&&"serviceWorker"in navigator){// The URL constructor is available in all browsers that support SW.
var publicUrl=new URL("/andela-tempo-sticky-notes",window.location.href);if(publicUrl.origin!==window.location.origin){// Our service worker won't work if PUBLIC_URL is on a different origin
// from what our page is served on. This might happen if a CDN is used to
// serve assets; see https://github.com/facebook/create-react-app/issues/2374
return;}window.addEventListener("load",function(){var swUrl="".concat("/andela-tempo-sticky-notes","/service-worker.js");if(isLocalhost){// This is running on localhost. Let's check if a service worker still exists or not.
checkValidServiceWorker(swUrl,config);// Add some additional logging to localhost, pointing developers to the
// service worker/PWA documentation.
navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service "+"worker. To learn more, visit https://bit.ly/CRA-PWA");});}else{// Is not localhost. Just register service worker
registerValidSW(swUrl,config);}});}}function registerValidSW(swUrl,config){navigator.serviceWorker.register(swUrl).then(function(registration){registration.onupdatefound=function(){var installingWorker=registration.installing;if(installingWorker==null){return;}installingWorker.onstatechange=function(){if(installingWorker.state==="installed"){if(navigator.serviceWorker.controller){// At this point, the updated precached content has been fetched,
// but the previous service worker will still serve the older
// content until all client tabs are closed.
console.log("New content is available and will be used when all "+"tabs for this page are closed. See https://bit.ly/CRA-PWA.");// Execute callback
if(config&&config.onUpdate){config.onUpdate(registration);}}else{// At this point, everything has been precached.
// It's the perfect time to display a
// "Content is cached for offline use." message.
console.log("Content is cached for offline use.");// Execute callback
if(config&&config.onSuccess){config.onSuccess(registration);}}}};};}).catch(function(error){console.error("Error during service worker registration:",error);});}function checkValidServiceWorker(swUrl,config){// Check if the service worker can be found. If it can't reload the page.
fetch(swUrl,{headers:{"Service-Worker":"script"}}).then(function(response){// Ensure service worker exists, and that we really are getting a JS file.
var contentType=response.headers.get("content-type");if(response.status===404||contentType!=null&&contentType.indexOf("javascript")===-1){// No service worker found. Probably a different app. Reload the page.
navigator.serviceWorker.ready.then(function(registration){registration.unregister().then(function(){window.location.reload();});});}else{// Service worker found. Proceed as normal.
registerValidSW(swUrl,config);}}).catch(function(){console.log("No internet connection found. App is running in offline mode.");});}function unregister(){if("serviceWorker"in navigator){navigator.serviceWorker.ready.then(function(registration){registration.unregister();}).catch(function(error){console.error(error.message);});}}
;// CONCATENATED MODULE: ./src/bootstrap.js
react_dom_index_js_default().render(/*#__PURE__*/(0,jsx_runtime.jsx)((index_js_default()).StrictMode,{children:/*#__PURE__*/(0,jsx_runtime.jsx)(src_App,{})}),document.getElementById("root"));// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
src_reportWebVitals();// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
unregister();

/***/ })

}]);
//# sourceMappingURL=src_bootstrap_js.e450e27d.chunk.js.map