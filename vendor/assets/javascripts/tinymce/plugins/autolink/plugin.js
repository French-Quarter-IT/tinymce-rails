/**
 * TinyMCE version 6.8.0 (2023-11-22)
 */
!function(){"use strict";var e=tinymce.util.Tools.resolve("tinymce.PluginManager");const t=e=>t=>t.options.get(e),n=t("autolink_pattern"),o=t("link_default_target"),r=t("link_default_protocol"),a=t("allow_unsafe_link_target"),s=("string",e=>"string"===(e=>{const t=typeof e;return null===e?"null":"object"===t&&Array.isArray(e)?"array":"object"===t&&(n=o=e,(r=String).prototype.isPrototypeOf(n)||(null===(a=o.constructor)||void 0===a?void 0:a.name)===r.name)?"string":t;var n,o,r,a})(e));const l=(void 0,e=>undefined===e);const i=e=>!(e=>null==e)(e),c=Object.hasOwnProperty,d=e=>"\ufeff"===e;var u=tinymce.util.Tools.resolve("tinymce.dom.TextSeeker");const f=e=>/^[(\[{ \u00a0]$/.test(e),g=(e,t,n)=>{for(let o=t-1;o>=0;o--){const t=e.charAt(o);if(!d(t)&&n(t))return o}return-1},m=(e,t)=>{var o;const a=e.schema.getVoidElements(),s=n(e),{dom:i,selection:d}=e;if(null!==i.getParent(d.getNode(),"a[href]"))return null;const m=d.getRng(),k=u(i,(e=>{return i.isBlock(e)||(t=a,n=e.nodeName.toLowerCase(),c.call(t,n))||"false"===i.getContentEditable(e);var t,n})),{container:p,offset:y}=((e,t)=>{let n=e,o=t;for(;1===n.nodeType&&n.childNodes[o];)n=n.childNodes[o],o=3===n.nodeType?n.data.length:n.childNodes.length;return{container:n,offset:o}})(m.endContainer,m.endOffset),w=null!==(o=i.getParent(p,i.isBlock))&&void 0!==o?o:i.getRoot(),h=k.backwards(p,y+t,((e,t)=>{const n=e.data,o=g(n,t,(r=f,e=>!r(e)));var r,a;return-1===o||(a=n[o],/[?!,.;:]/.test(a))?o:o+1}),w);if(!h)return null;let v=h.container;const _=k.backwards(h.container,h.offset,((e,t)=>{v=e;const n=g(e.data,t,f);return-1===n?n:n+1}),w),A=i.createRng();_?A.setStart(_.container,_.offset):A.setStart(v,0),A.setEnd(h.container,h.offset);const C=A.toString().replace(/\uFEFF/g,"").match(s);if(C){let t=C[0];return $="www.",(b=t).length>=4&&b.substr(0,4)===$?t=r(e)+"://"+t:((e,t,n=0,o)=>{const r=e.indexOf(t,n);return-1!==r&&(!!l(o)||r+t.length<=o)})(t,"@")&&!(e=>/^([A-Za-z][A-Za-z\d.+-]*:\/\/)|mailto:/.test(e))(t)&&(t="mailto:"+t),{rng:A,url:t}}var b,$;return null},k=(e,t)=>{const{dom:n,selection:r}=e,{rng:l,url:i}=t,c=r.getBookmark();r.setRng(l);const d="createlink",u={command:d,ui:!1,value:i};if(!e.dispatch("BeforeExecCommand",u).isDefaultPrevented()){e.getDoc().execCommand(d,!1,i),e.dispatch("ExecCommand",u);const t=o(e);if(s(t)){const o=r.getNode();n.setAttrib(o,"target",t),"_blank"!==t||a(e)||n.setAttrib(o,"rel","noopener")}}r.moveToBookmark(c),e.nodeChanged()},p=e=>{const t=m(e,-1);i(t)&&k(e,t)},y=p;e.add("autolink",(e=>{(e=>{const t=e.options.register;t("autolink_pattern",{processor:"regexp",default:new RegExp("^"+/(?:[A-Za-z][A-Za-z\d.+-]{0,14}:\/\/(?:[-.~*+=!&;:'%@?^${}(),\w]+@)?|www\.|[-;:&=+$,.\w]+@)[A-Za-z\d-]+(?:\.[A-Za-z\d-]+)*(?::\d+)?(?:\/(?:[-.~*+=!;:'%@$(),\/\w]*[-~*+=%@$()\/\w])?)?(?:\?(?:[-.~*+=!&;:'%@?^${}(),\/\w]+))?(?:#(?:[-.~*+=!&;:'%@?^${}(),\/\w]+))?/g.source+"$","i")}),t("link_default_target",{processor:"string"}),t("link_default_protocol",{processor:"string",default:"https"})})(e),(e=>{e.on("keydown",(t=>{13!==t.keyCode||t.isDefaultPrevented()||(e=>{const t=m(e,0);i(t)&&k(e,t)})(e)})),e.on("keyup",(t=>{32===t.keyCode?p(e):(48===t.keyCode&&t.shiftKey||221===t.keyCode)&&y(e)}))})(e)}))}();