/**
 * TinyMCE version 6.8.0 (2023-11-22)
 */
!function(){"use strict";var t=tinymce.util.Tools.resolve("tinymce.PluginManager");const s=(t,s,o)=>{t.dom.toggleClass(t.getBody(),"mce-visualblocks"),o.set(!o.get()),((t,s)=>{t.dispatch("VisualBlocks",{state:s})})(t,o.get())},o=("visualblocks_default_state",t=>t.options.get("visualblocks_default_state"));const e=(t,s)=>o=>{o.setActive(s.get());const e=t=>o.setActive(t.state);return t.on("VisualBlocks",e),()=>t.off("VisualBlocks",e)};t.add("visualblocks",((t,l)=>{(t=>{(0,t.options.register)("visualblocks_default_state",{processor:"boolean",default:!1})})(t);const a=(t=>{let s=!1;return{get:()=>s,set:t=>{s=t}}})();((t,o,e)=>{t.addCommand("mceVisualBlocks",(()=>{s(t,0,e)}))})(t,0,a),((t,s)=>{const o=()=>t.execCommand("mceVisualBlocks");t.ui.registry.addToggleButton("visualblocks",{icon:"visualblocks",tooltip:"Show blocks",onAction:o,onSetup:e(t,s)}),t.ui.registry.addToggleMenuItem("visualblocks",{text:"Show blocks",icon:"visualblocks",onAction:o,onSetup:e(t,s)})})(t,a),((t,e,l)=>{t.on("PreviewFormats AfterPreviewFormats",(s=>{l.get()&&t.dom.toggleClass(t.getBody(),"mce-visualblocks","afterpreviewformats"===s.type)})),t.on("init",(()=>{o(t)&&s(t,0,l)}))})(t,0,a)}))}();