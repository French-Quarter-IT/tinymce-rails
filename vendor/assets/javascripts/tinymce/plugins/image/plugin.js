/**
 * TinyMCE version 7.3.0 (2024-08-07)
 */
!function(){"use strict";var e=tinymce.util.Tools.resolve("tinymce.PluginManager");const t=Object.getPrototypeOf,a=(e,t,a)=>{var i;return!!a(e,t.prototype)||(null===(i=e.constructor)||void 0===i?void 0:i.name)===t.name},i=e=>t=>(e=>{const t=typeof e;return null===e?"null":"object"===t&&Array.isArray(e)?"array":"object"===t&&a(e,String,((e,t)=>t.isPrototypeOf(e)))?"string":t})(t)===e,s=e=>t=>typeof t===e,r=i("string"),o=i("object"),n=e=>((e,i)=>o(e)&&a(e,i,((e,a)=>t(e)===a)))(e,Object),l=i("array"),c=(null,e=>null===e);const m=s("boolean"),d=e=>!(e=>null==e)(e),g=s("function"),u=s("number"),p=()=>{};class h{constructor(e,t){this.tag=e,this.value=t}static some(e){return new h(!0,e)}static none(){return h.singletonNone}fold(e,t){return this.tag?t(this.value):e()}isSome(){return this.tag}isNone(){return!this.tag}map(e){return this.tag?h.some(e(this.value)):h.none()}bind(e){return this.tag?e(this.value):h.none()}exists(e){return this.tag&&e(this.value)}forall(e){return!this.tag||e(this.value)}filter(e){return!this.tag||e(this.value)?this:h.none()}getOr(e){return this.tag?this.value:e}or(e){return this.tag?this:e}getOrThunk(e){return this.tag?this.value:e()}orThunk(e){return this.tag?this:e()}getOrDie(e){if(this.tag)return this.value;throw new Error(null!=e?e:"Called getOrDie on None")}static from(e){return d(e)?h.some(e):h.none()}getOrNull(){return this.tag?this.value:null}getOrUndefined(){return this.value}each(e){this.tag&&e(this.value)}toArray(){return this.tag?[this.value]:[]}toString(){return this.tag?`some(${this.value})`:"none()"}}h.singletonNone=new h(!1);const b=Object.keys,v=Object.hasOwnProperty,y=(e,t)=>v.call(e,t),f=Array.prototype.push,w=e=>{const t=[];for(let a=0,i=e.length;a<i;++a){if(!l(e[a]))throw new Error("Arr.flatten item "+a+" was not an array, input: "+e);f.apply(t,e[a])}return t};"undefined"!=typeof window?window:Function("return this;")();const A=(e,t,a)=>{((e,t,a)=>{if(!(r(a)||m(a)||u(a)))throw console.error("Invalid call to Attribute.set. Key ",t,":: Value ",a,":: Element ",e),new Error("Attribute value was not simple");e.setAttribute(t,a+"")})(e.dom,t,a)},D=e=>{if(null==e)throw new Error("Node cannot be null or undefined");return{dom:e}},_=D;var C=tinymce.util.Tools.resolve("tinymce.dom.DOMUtils"),I=tinymce.util.Tools.resolve("tinymce.util.URI");const U=e=>e.length>0,x=e=>t=>t.options.get(e),S=x("image_dimensions"),N=x("image_advtab"),T=x("image_uploadtab"),O=x("image_prepend_url"),E=x("image_class_list"),L=x("image_description"),j=x("image_title"),M=x("image_caption"),R=x("image_list"),k=x("a11y_advanced_options"),z=x("automatic_uploads"),B=(e,t)=>Math.max(parseInt(e,10),parseInt(t,10)),P=e=>(e&&(e=e.replace(/px$/,"")),e),F=e=>(e.length>0&&/^[0-9]+$/.test(e)&&(e+="px"),e),H=e=>"IMG"===e.nodeName&&(e.hasAttribute("data-mce-object")||e.hasAttribute("data-mce-placeholder")),G=(e,t)=>{const a=e.options.get;return I.isDomSafe(t,"img",{allow_html_data_urls:a("allow_html_data_urls"),allow_script_urls:a("allow_script_urls"),allow_svg_data_urls:a("allow_svg_data_urls")})},W=C.DOM,$=e=>e.style.marginLeft&&e.style.marginRight&&e.style.marginLeft===e.style.marginRight?P(e.style.marginLeft):"",V=e=>e.style.marginTop&&e.style.marginBottom&&e.style.marginTop===e.style.marginBottom?P(e.style.marginTop):"",K=e=>e.style.borderWidth?P(e.style.borderWidth):"",Z=(e,t)=>{var a;return e.hasAttribute(t)&&null!==(a=e.getAttribute(t))&&void 0!==a?a:""},q=e=>null!==e.parentNode&&"FIGURE"===e.parentNode.nodeName,J=(e,t,a)=>{""===a||null===a?e.removeAttribute(t):e.setAttribute(t,a)},Q=(e,t)=>{const a=e.getAttribute("style"),i=t(null!==a?a:"");i.length>0?(e.setAttribute("style",i),e.setAttribute("data-mce-style",i)):e.removeAttribute("style")},X=(e,t)=>(e,a,i)=>{const s=e.style;s[a]?(s[a]=F(i),Q(e,t)):J(e,a,i)},Y=(e,t)=>e.style[t]?P(e.style[t]):Z(e,t),ee=(e,t)=>{const a=F(t);e.style.marginLeft=a,e.style.marginRight=a},te=(e,t)=>{const a=F(t);e.style.marginTop=a,e.style.marginBottom=a},ae=(e,t)=>{const a=F(t);e.style.borderWidth=a},ie=(e,t)=>{e.style.borderStyle=t},se=e=>{var t;return null!==(t=e.style.borderStyle)&&void 0!==t?t:""},re=e=>d(e)&&"FIGURE"===e.nodeName,oe=e=>0===W.getAttrib(e,"alt").length&&"presentation"===W.getAttrib(e,"role"),ne=e=>oe(e)?"":Z(e,"alt"),le=(e,t)=>{var a;const i=document.createElement("img");return J(i,"style",t.style),($(i)||""!==t.hspace)&&ee(i,t.hspace),(V(i)||""!==t.vspace)&&te(i,t.vspace),(K(i)||""!==t.border)&&ae(i,t.border),(se(i)||""!==t.borderStyle)&&ie(i,t.borderStyle),e(null!==(a=i.getAttribute("style"))&&void 0!==a?a:"")},ce=(e,t)=>({src:Z(t,"src"),alt:ne(t),title:Z(t,"title"),width:Y(t,"width"),height:Y(t,"height"),class:Z(t,"class"),style:e(Z(t,"style")),caption:q(t),hspace:$(t),vspace:V(t),border:K(t),borderStyle:se(t),isDecorative:oe(t)}),me=(e,t,a,i,s)=>{a[i]!==t[i]&&s(e,i,String(a[i]))},de=(e,t,a)=>{if(a){W.setAttrib(e,"role","presentation");const t=_(e);A(t,"alt","")}else{if(c(t)){"alt",_(e).dom.removeAttribute("alt")}else{const a=_(e);A(a,"alt",t)}"presentation"===W.getAttrib(e,"role")&&W.setAttrib(e,"role","")}},ge=(e,t)=>(a,i,s)=>{e(a,s),Q(a,t)},ue=(e,t,a)=>{const i=ce(e,a);me(a,i,t,"caption",((e,t,a)=>(e=>{q(e)?(e=>{const t=e.parentNode;d(t)&&(W.insertAfter(e,t),W.remove(t))})(e):(e=>{const t=W.create("figure",{class:"image"});W.insertAfter(t,e),t.appendChild(e),t.appendChild(W.create("figcaption",{contentEditable:"true"},"Caption")),t.contentEditable="false"})(e)})(e))),me(a,i,t,"src",J),me(a,i,t,"title",J),me(a,i,t,"width",X(0,e)),me(a,i,t,"height",X(0,e)),me(a,i,t,"class",J),me(a,i,t,"style",ge(((e,t)=>J(e,"style",t)),e)),me(a,i,t,"hspace",ge(ee,e)),me(a,i,t,"vspace",ge(te,e)),me(a,i,t,"border",ge(ae,e)),me(a,i,t,"borderStyle",ge(ie,e)),((e,t,a)=>{a.alt===t.alt&&a.isDecorative===t.isDecorative||de(e,a.alt,a.isDecorative)})(a,i,t)},pe=(e,t)=>{const a=(e=>{if(e.margin){const t=String(e.margin).split(" ");switch(t.length){case 1:e["margin-top"]=e["margin-top"]||t[0],e["margin-right"]=e["margin-right"]||t[0],e["margin-bottom"]=e["margin-bottom"]||t[0],e["margin-left"]=e["margin-left"]||t[0];break;case 2:e["margin-top"]=e["margin-top"]||t[0],e["margin-right"]=e["margin-right"]||t[1],e["margin-bottom"]=e["margin-bottom"]||t[0],e["margin-left"]=e["margin-left"]||t[1];break;case 3:e["margin-top"]=e["margin-top"]||t[0],e["margin-right"]=e["margin-right"]||t[1],e["margin-bottom"]=e["margin-bottom"]||t[2],e["margin-left"]=e["margin-left"]||t[1];break;case 4:e["margin-top"]=e["margin-top"]||t[0],e["margin-right"]=e["margin-right"]||t[1],e["margin-bottom"]=e["margin-bottom"]||t[2],e["margin-left"]=e["margin-left"]||t[3]}delete e.margin}return e})(e.dom.styles.parse(t)),i=e.dom.styles.parse(e.dom.styles.serialize(a));return e.dom.styles.serialize(i)},he=e=>{const t=e.selection.getNode(),a=e.dom.getParent(t,"figure.image");return a?e.dom.select("img",a)[0]:t&&("IMG"!==t.nodeName||H(t))?null:t},be=(e,t)=>{var a;const i=e.dom,s=((t,a)=>{const i={};var s;return((e,t,a,i)=>{((e,t)=>{const a=b(e);for(let i=0,s=a.length;i<s;i++){const s=a[i];t(e[s],s)}})(e,((e,s)=>{(t(e,s)?a:i)(e,s)}))})(t,((t,a)=>!e.schema.isValidChild(a,"figure")),(s=i,(e,t)=>{s[t]=e}),p),i})(e.schema.getTextBlockElements()),r=i.getParent(t.parentNode,(e=>{return t=s,a=e.nodeName,y(t,a)&&void 0!==t[a]&&null!==t[a];var t,a}),e.getBody());return r&&null!==(a=i.split(r,t))&&void 0!==a?a:t},ve=(e,t)=>{const a=((t,a)=>{const i=document.createElement("img");if(ue((t=>pe(e,t)),{...a,caption:!1},i),de(i,a.alt,a.isDecorative),a.caption){const e=W.create("figure",{class:"image"});return e.appendChild(i),e.appendChild(W.create("figcaption",{contentEditable:"true"},"Caption")),e.contentEditable="false",e}return i})(0,t);e.dom.setAttrib(a,"data-mce-id","__mcenew"),e.focus(),e.selection.setContent(a.outerHTML);const i=e.dom.select('*[data-mce-id="__mcenew"]')[0];if(e.dom.setAttrib(i,"data-mce-id",null),re(i)){const t=be(e,i);e.selection.select(t)}else e.selection.select(i)},ye=(e,t)=>{const a=he(e);if(a){const i={...ce((t=>pe(e,t)),a),...t},s=((e,t)=>{const a=t.src;return{...t,src:G(e,a)?a:""}})(e,i);i.src?((e,t)=>{const a=he(e);if(a)if(ue((t=>pe(e,t)),t,a),((e,t)=>{e.dom.setAttrib(t,"src",t.getAttribute("src"))})(e,a),re(a.parentNode)){const t=a.parentNode;be(e,t),e.selection.select(a.parentNode)}else e.selection.select(a),((e,t,a)=>{const i=()=>{a.onload=a.onerror=null,e.selection&&(e.selection.select(a),e.nodeChanged())};a.onload=()=>{t.width||t.height||!S(e)||e.dom.setAttribs(a,{width:String(a.clientWidth),height:String(a.clientHeight)}),i()},a.onerror=i})(e,t,a)})(e,s):((e,t)=>{if(t){const a=e.dom.is(t.parentNode,"figure.image")?t.parentNode:t;e.dom.remove(a),e.focus(),e.nodeChanged(),e.dom.isEmpty(e.getBody())&&(e.setContent(""),e.selection.setCursorLocation())}})(e,a)}else t.src&&ve(e,{src:"",alt:"",title:"",width:"",height:"",class:"",style:"",caption:!1,hspace:"",vspace:"",border:"",borderStyle:"",isDecorative:!1,...t})},fe=(we=(e,t)=>n(e)&&n(t)?fe(e,t):t,(...e)=>{if(0===e.length)throw new Error("Can't merge zero objects");const t={};for(let a=0;a<e.length;a++){const i=e[a];for(const e in i)y(i,e)&&(t[e]=we(t[e],i[e]))}return t});var we,Ae=tinymce.util.Tools.resolve("tinymce.util.ImageUploader"),De=tinymce.util.Tools.resolve("tinymce.util.Tools");const _e=e=>r(e.value)?e.value:"",Ce=(e,t)=>{const a=[];return De.each(e,(e=>{const i=(e=>r(e.text)?e.text:r(e.title)?e.title:"")(e);if(void 0!==e.menu){const s=Ce(e.menu,t);a.push({text:i,items:s})}else{const s=t(e);a.push({text:i,value:s})}})),a},Ie=(e=_e)=>t=>t?h.from(t).map((t=>Ce(t,e))):h.none(),Ue=(e,t)=>((e,a)=>{for(let a=0;a<e.length;a++){const s=(e=>y(e,"items"))(i=e[a])?Ue(i.items,t):i.value===t?h.some(i):h.none();if(s.isSome())return s}var i;return h.none()})(e),xe=Ie,Se=(e,t)=>e.bind((e=>Ue(e,t))),Ne=e=>{const t=xe((t=>e.convertURL(t.value||t.url||"","src"))),a=new Promise((a=>{((e,t)=>{const a=R(e);r(a)?fetch(a).then((e=>{e.ok&&e.json().then(t)})):g(a)?a(t):t(a)})(e,(e=>{a(t(e).map((e=>w([[{text:"None",value:""}],e]))))}))})),i=(A=E(e),Ie(_e)(A)),s=N(e),o=T(e),n=(e=>U(e.options.get("images_upload_url")))(e),l=(e=>d(e.options.get("images_upload_handler")))(e),c=(e=>{const t=he(e);return t?ce((t=>pe(e,t)),t):{src:"",alt:"",title:"",width:"",height:"",class:"",style:"",caption:!1,hspace:"",vspace:"",border:"",borderStyle:"",isDecorative:!1}})(e),m=L(e),u=j(e),p=S(e),b=M(e),v=k(e),y=z(e),f=h.some(O(e)).filter((e=>r(e)&&e.length>0));var A;return a.then((e=>({image:c,imageList:e,classList:i,hasAdvTab:s,hasUploadTab:o,hasUploadUrl:n,hasUploadHandler:l,hasDescription:m,hasImageTitle:u,hasDimensions:p,hasImageCaption:b,prependURL:f,hasAccessibilityOptions:v,automaticUploads:y})))},Te=e=>{const t=e.imageList.map((e=>({name:"images",type:"listbox",label:"Image list",items:e}))),a={name:"alt",type:"input",label:"Alternative description",enabled:!(e.hasAccessibilityOptions&&e.image.isDecorative)},i=e.classList.map((e=>({name:"classes",type:"listbox",label:"Class",items:e})));return w([[{name:"src",type:"urlinput",filetype:"image",label:"Source",picker_text:"Browse files"}],t.toArray(),e.hasAccessibilityOptions&&e.hasDescription?[{type:"label",label:"Accessibility",items:[{name:"isDecorative",type:"checkbox",label:"Image is decorative"}]}]:[],e.hasDescription?[a]:[],e.hasImageTitle?[{name:"title",type:"input",label:"Image title"}]:[],e.hasDimensions?[{name:"dimensions",type:"sizeinput"}]:[],[{...(s=e.classList.isSome()&&e.hasImageCaption,s?{type:"grid",columns:2}:{type:"panel"}),items:w([i.toArray(),e.hasImageCaption?[{type:"label",label:"Caption",items:[{type:"checkbox",name:"caption",label:"Show caption"}]}]:[]])}]]);var s},Oe=e=>({title:"General",name:"general",items:Te(e)}),Ee=Te,Le=e=>({src:{value:e.src,meta:{}},images:e.src,alt:e.alt,title:e.title,dimensions:{width:e.width,height:e.height},classes:e.class,caption:e.caption,style:e.style,vspace:e.vspace,border:e.border,hspace:e.hspace,borderstyle:e.borderStyle,fileinput:[],isDecorative:e.isDecorative}),je=(e,t)=>({src:e.src.value,alt:null!==e.alt&&0!==e.alt.length||!t?e.alt:null,title:e.title,width:e.dimensions.width,height:e.dimensions.height,class:e.classes,style:e.style,caption:e.caption,hspace:e.hspace,vspace:e.vspace,border:e.border,borderStyle:e.borderstyle,isDecorative:e.isDecorative}),Me=(e,t,a,i)=>{((e,t)=>{const a=t.getData();((e,t)=>/^(?:[a-zA-Z]+:)?\/\//.test(t)?h.none():e.prependURL.bind((e=>t.substring(0,e.length)!==e?h.some(e+t):h.none())))(e,a.src.value).each((e=>{t.setData({src:{value:e,meta:a.src.meta}})}))})(t,i),((e,t)=>{const a=t.getData(),i=a.src.meta;if(void 0!==i){const s=fe({},a);((e,t,a)=>{e.hasDescription&&r(a.alt)&&(t.alt=a.alt),e.hasAccessibilityOptions&&(t.isDecorative=a.isDecorative||t.isDecorative||!1),e.hasImageTitle&&r(a.title)&&(t.title=a.title),e.hasDimensions&&(r(a.width)&&(t.dimensions.width=a.width),r(a.height)&&(t.dimensions.height=a.height)),r(a.class)&&Se(e.classList,a.class).each((e=>{t.classes=e.value})),e.hasImageCaption&&m(a.caption)&&(t.caption=a.caption),e.hasAdvTab&&(r(a.style)&&(t.style=a.style),r(a.vspace)&&(t.vspace=a.vspace),r(a.border)&&(t.border=a.border),r(a.hspace)&&(t.hspace=a.hspace),r(a.borderstyle)&&(t.borderstyle=a.borderstyle))})(e,s,i),t.setData(s)}})(t,i),((e,t,a,i)=>{const s=i.getData(),r=s.src.value,o=s.src.meta||{};o.width||o.height||!t.hasDimensions||(U(r)?e.imageSize(r).then((e=>{a.open&&i.setData({dimensions:e})})).catch((e=>console.error(e))):i.setData({dimensions:{width:"",height:""}}))})(e,t,a,i),((e,t,a)=>{const i=a.getData(),s=Se(e.imageList,i.src.value);t.prevImage=s,a.setData({images:s.map((e=>e.value)).getOr("")})})(t,a,i)},Re=(e,t,a,i)=>{const s=i.getData();var r;i.block("Uploading image"),(r=s.fileinput,((e,t)=>0<e.length?h.some(e[0]):h.none())(r)).fold((()=>{i.unblock()}),(s=>{const r=URL.createObjectURL(s),o=()=>{i.unblock(),URL.revokeObjectURL(r)},n=s=>{i.setData({src:{value:s,meta:{}}}),i.showTab("general"),Me(e,t,a,i),i.focus("src")};var l;(l=s,new Promise(((e,t)=>{const a=new FileReader;a.onload=()=>{e(a.result)},a.onerror=()=>{var e;t(null===(e=a.error)||void 0===e?void 0:e.message)},a.readAsDataURL(l)}))).then((a=>{const l=e.createBlobCache(s,r,a);t.automaticUploads?e.uploadImage(l).then((e=>{n(e.url),o()})).catch((t=>{o(),e.alertErr(t)})):(e.addToBlobCache(l),n(l.blobUri()),i.unblock())}))}))},ke=(e,t,a)=>(i,s)=>{"src"===s.name?Me(e,t,a,i):"images"===s.name?((e,t,a,i)=>{const s=i.getData(),r=Se(t.imageList,s.images);r.each((e=>{const t=""===s.alt||a.prevImage.map((e=>e.text===s.alt)).getOr(!1);t?""===e.value?i.setData({src:e,alt:a.prevAlt}):i.setData({src:e,alt:e.text}):i.setData({src:e})})),a.prevImage=r,Me(e,t,a,i)})(e,t,a,i):"alt"===s.name?a.prevAlt=i.getData().alt:"fileinput"===s.name?Re(e,t,a,i):"isDecorative"===s.name&&i.setEnabled("alt",!i.getData().isDecorative)},ze=e=>()=>{e.open=!1},Be=e=>e.hasAdvTab||e.hasUploadUrl||e.hasUploadHandler?{type:"tabpanel",tabs:w([[Oe(e)],e.hasAdvTab?[{title:"Advanced",name:"advanced",items:[{type:"grid",columns:2,items:[{type:"input",label:"Vertical space",name:"vspace",inputMode:"numeric"},{type:"input",label:"Horizontal space",name:"hspace",inputMode:"numeric"},{type:"input",label:"Border width",name:"border",inputMode:"numeric"},{type:"listbox",name:"borderstyle",label:"Border style",items:[{text:"Select...",value:""},{text:"Solid",value:"solid"},{text:"Dotted",value:"dotted"},{text:"Dashed",value:"dashed"},{text:"Double",value:"double"},{text:"Groove",value:"groove"},{text:"Ridge",value:"ridge"},{text:"Inset",value:"inset"},{text:"Outset",value:"outset"},{text:"None",value:"none"},{text:"Hidden",value:"hidden"}]}]}]}]:[],e.hasUploadTab&&(e.hasUploadUrl||e.hasUploadHandler)?[{title:"Upload",name:"upload",items:[{type:"dropzone",name:"fileinput"}]}]:[]])}:{type:"panel",items:Ee(e)},Pe=(e,t,a)=>i=>{const s=fe(Le(t.image),i.getData()),r={...s,style:le(a.normalizeCss,je(s,!1))};e.execCommand("mceUpdateImage",!1,je(r,t.hasAccessibilityOptions)),e.editorUpload.uploadImagesAuto(),i.close()},Fe=e=>t=>G(e,t)?(e=>new Promise((t=>{const a=document.createElement("img"),i=e=>{a.onload=a.onerror=null,a.parentNode&&a.parentNode.removeChild(a),t(e)};a.onload=()=>{const e={width:B(a.width,a.clientWidth),height:B(a.height,a.clientHeight)};i(Promise.resolve(e))},a.onerror=()=>{i(Promise.reject(`Failed to get image dimensions for: ${e}`))};const s=a.style;s.visibility="hidden",s.position="fixed",s.bottom=s.left="0px",s.width=s.height="auto",document.body.appendChild(a),a.src=e})))(e.documentBaseURI.toAbsolute(t)).then((e=>({width:String(e.width),height:String(e.height)}))):Promise.resolve({width:"",height:""}),He=e=>(t,a,i)=>{var s;return e.editorUpload.blobCache.create({blob:t,blobUri:a,name:null===(s=t.name)||void 0===s?void 0:s.replace(/\.[^\.]+$/,""),filename:t.name,base64:i.split(",")[1]})},Ge=e=>t=>{e.editorUpload.blobCache.add(t)},We=e=>t=>{e.windowManager.alert(t)},$e=e=>t=>pe(e,t),Ve=e=>t=>e.dom.parseStyle(t),Ke=e=>(t,a)=>e.dom.serializeStyle(t,a),Ze=e=>t=>Ae(e).upload([t],!1).then((e=>{var t;return 0===e.length?Promise.reject("Failed to upload image"):!1===e[0].status?Promise.reject(null===(t=e[0].error)||void 0===t?void 0:t.message):e[0]})),qe=e=>{const t={imageSize:Fe(e),addToBlobCache:Ge(e),createBlobCache:He(e),alertErr:We(e),normalizeCss:$e(e),parseStyle:Ve(e),serializeStyle:Ke(e),uploadImage:Ze(e)};return{open:()=>{Ne(e).then((a=>{const i=(e=>({prevImage:Se(e.imageList,e.image.src),prevAlt:e.image.alt,open:!0}))(a);return{title:"Insert/Edit Image",size:"normal",body:Be(a),buttons:[{type:"cancel",name:"cancel",text:"Cancel"},{type:"submit",name:"save",text:"Save",primary:!0}],initialData:Le(a.image),onSubmit:Pe(e,a,t),onChange:ke(t,a,i),onClose:ze(i)}})).then(e.windowManager.open)}}},Je=e=>{const t=e.attr("class");return d(t)&&/\bimage\b/.test(t)},Qe=e=>t=>{let a=t.length;const i=t=>{t.attr("contenteditable",e?"true":null)};for(;a--;){const s=t[a];Je(s)&&(s.attr("contenteditable",e?"false":null),De.each(s.getAll("figcaption"),i))}},Xe=e=>t=>{const a=()=>{t.setEnabled(e.selection.isEditable())};return e.on("NodeChange",a),a(),()=>{e.off("NodeChange",a)}};e.add("image",(e=>{(e=>{const t=e.options.register;t("image_dimensions",{processor:"boolean",default:!0}),t("image_advtab",{processor:"boolean",default:!1}),t("image_uploadtab",{processor:"boolean",default:!0}),t("image_prepend_url",{processor:"string",default:""}),t("image_class_list",{processor:"object[]"}),t("image_description",{processor:"boolean",default:!0}),t("image_title",{processor:"boolean",default:!1}),t("image_caption",{processor:"boolean",default:!1}),t("image_list",{processor:e=>{const t=!1===e||r(e)||((e,t)=>{if(l(e)){for(let a=0,i=e.length;a<i;++a)if(!t(e[a]))return!1;return!0}return!1})(e,o)||g(e);return t?{value:e,valid:t}:{valid:!1,message:"Must be false, a string, an array or a function."}},default:!1})})(e),(e=>{e.on("PreInit",(()=>{e.parser.addNodeFilter("figure",Qe(!0)),e.serializer.addNodeFilter("figure",Qe(!1))}))})(e),(e=>{e.ui.registry.addToggleButton("image",{icon:"image",tooltip:"Insert/edit image",onAction:qe(e).open,onSetup:t=>{t.setActive(d(he(e)));const a=e.selection.selectorChangedWithUnbind("img:not([data-mce-object]):not([data-mce-placeholder]),figure.image",t.setActive).unbind,i=Xe(e)(t);return()=>{a(),i()}}}),e.ui.registry.addMenuItem("image",{icon:"image",text:"Image...",onAction:qe(e).open,onSetup:Xe(e)}),e.ui.registry.addContextMenu("image",{update:t=>e.selection.isEditable()&&(re(t)||"IMG"===t.nodeName&&!H(t))?["image"]:[]})})(e),(e=>{e.addCommand("mceImage",qe(e).open),e.addCommand("mceUpdateImage",((t,a)=>{e.undoManager.transact((()=>ye(e,a)))}))})(e)}))}();