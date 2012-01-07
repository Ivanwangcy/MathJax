/*
 *  /MathJax/extensions/MathMenu.js
 *  
 *  Copyright (c) 2010 Design Science, Inc.
 *
 *  Part of the MathJax library.
 *  See http://www.mathjax.org for details.
 * 
 *  Licensed under the Apache License, Version 2.0;
 *  you may not use this file except in compliance with the License.
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 */

(function(c,f,j,e,b){var o="1.1.9";var i=MathJax.Callback.Signal("menu");MathJax.Extension.MathMenu={version:o,signal:i};var m=c.Browser.isPC,k=c.Browser.isMSIE;var h=(m?null:"5px");var n=c.CombineConfig("MathMenu",{delay:150,helpURL:"http://www.mathjax.org/help/user/",closeImg:j.fileURL(b.imageDir+"/CloseX-31.png"),showRenderer:true,showFontMenu:false,showContext:false,windowSettings:{status:"no",toolbar:"no",locationbar:"no",menubar:"no",directories:"no",personalbar:"no",resizable:"yes",scrollbars:"yes",width:100,height:50},styles:{"#MathJax_About":{position:"fixed",left:"50%",width:"auto","text-align":"center",border:"3px outset",padding:"1em 2em","background-color":"#DDDDDD",color:"black",cursor:"default","font-family":"message-box","font-size":"120%","font-style":"normal","text-indent":0,"text-transform":"none","line-height":"normal","letter-spacing":"normal","word-spacing":"normal","word-wrap":"normal","white-space":"nowrap","float":"none","z-index":201,"border-radius":"15px","-webkit-border-radius":"15px","-moz-border-radius":"15px","-khtml-border-radius":"15px","box-shadow":"0px 10px 20px #808080","-webkit-box-shadow":"0px 10px 20px #808080","-moz-box-shadow":"0px 10px 20px #808080","-khtml-box-shadow":"0px 10px 20px #808080",filter:"progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true')"},".MathJax_Menu":{position:"absolute","background-color":"white",color:"black",width:"auto",padding:(m?"2px":"5px 0px"),border:"1px solid #CCCCCC",margin:0,cursor:"default",font:"menu","text-align":"left","text-indent":0,"text-transform":"none","line-height":"normal","letter-spacing":"normal","word-spacing":"normal","word-wrap":"normal","white-space":"nowrap","float":"none","z-index":201,"border-radius":h,"-webkit-border-radius":h,"-moz-border-radius":h,"-khtml-border-radius":h,"box-shadow":"0px 10px 20px #808080","-webkit-box-shadow":"0px 10px 20px #808080","-moz-box-shadow":"0px 10px 20px #808080","-khtml-box-shadow":"0px 10px 20px #808080",filter:"progid:DXImageTransform.Microsoft.dropshadow(OffX=2, OffY=2, Color='gray', Positive='true')"},".MathJax_MenuItem":{padding:(m?"2px 2em":"1px 2em"),background:"transparent"},".MathJax_MenuTitle":{"background-color":"#CCCCCC",margin:(m?"-1px -1px 1px -1px":"-5px 0 0 0"),"text-align":"center","font-style":"italic","font-size":"80%",color:"#444444",padding:"2px 0",overflow:"hidden"},".MathJax_MenuArrow":{position:"absolute",right:".5em",color:"#666666","font-family":(k?"'Arial unicode MS'":null)},".MathJax_MenuActive .MathJax_MenuArrow":{color:"white"},".MathJax_MenuCheck":{position:"absolute",left:".7em","font-family":(k?"'Arial unicode MS'":null)},".MathJax_MenuRadioCheck":{position:"absolute",left:(m?"1em":".7em")},".MathJax_MenuLabel":{padding:(m?"2px 2em 4px 1.33em":"1px 2em 3px 1.33em"),"font-style":"italic"},".MathJax_MenuRule":{"border-top":(m?"1px solid #CCCCCC":"1px solid #DDDDDD"),margin:(m?"4px 1px 0px":"4px 3px")},".MathJax_MenuDisabled":{color:"GrayText"},".MathJax_MenuActive":{"background-color":(m?"Highlight":"#606872"),color:(m?"HighlightText":"white")},".MathJax_Menu_Close":{position:"absolute",width:"31px",height:"31px",top:"-15px",left:"-15px"}}});var g,d;c.Register.StartupHook("MathEvents Ready",function(){g=MathJax.Extension.MathEvents.Event.False;d=MathJax.Extension.MathEvents.Hover});var a=MathJax.Menu=MathJax.Object.Subclass({version:o,items:[],posted:false,title:null,margin:5,Init:function(p){this.items=[].slice.call(arguments,0)},With:function(p){if(p){c.Insert(this,p)}return this},Post:function(q,A){if(!q){q=window.event}var w=(!this.title?null:[["div",{className:"MathJax_MenuTitle"},[this.title]]]);var p=document.getElementById("MathJax_MenuFrame");if(!p){p=a.Background(this);delete l.lastItem;delete l.lastMenu;delete a.skipUp;i.Post(["post",a.jax])}var r=f.addElement(p,"div",{onmouseup:a.Mouseup,ondblclick:g,ondragstart:g,onselectstart:g,oncontextmenu:g,menuItem:this,className:"MathJax_Menu"},w);for(var t=0,s=this.items.length;t<s;t++){this.items[t].Create(r)}if(a.isMobile){f.addElement(r,"span",{className:"MathJax_Menu_Close",menu:A,ontouchstart:a.Close,ontouchend:g,onmousedown:a.Close,onmouseup:g},[["img",{src:n.closeImg,style:{width:"100%",height:"100%"}}]])}this.posted=true;r.style.width=(r.offsetWidth+2)+"px";var z=q.pageX,v=q.pageY;if(!z&&!v){z=q.clientX+document.body.scrollLeft+document.documentElement.scrollLeft;v=q.clientY+document.body.scrollTop+document.documentElement.scrollTop}if(!A){if(z+r.offsetWidth>document.body.offsetWidth-this.margin){z=document.body.offsetWidth-r.offsetWidth-this.margin}if(a.isMobile){z=Math.max(5,z-Math.floor(r.offsetWidth/2));v-=20}a.skipUp=q.isContextMenu}else{var u="left",B=A.offsetWidth;z=(a.isMobile?30:B-2);v=0;while(A&&A!==p){z+=A.offsetLeft;v+=A.offsetTop;A=A.parentNode}if(z+r.offsetWidth>document.body.offsetWidth-this.margin&&!a.isMobile){u="right";z=Math.max(this.margin,z-B-r.offsetWidth+6)}if(!m){r.style["borderRadiusTop"+u]=0;r.style["WebkitBorderRadiusTop"+u]=0;r.style["MozBorderRadiusTop"+u]=0;r.style["KhtmlBorderRadiusTop"+u]=0}}r.style.left=z+"px";r.style.top=v+"px";if(document.selection&&document.selection.empty){document.selection.empty()}return g(q)},Remove:function(p,q){i.Post(["unpost",a.jax]);var r=document.getElementById("MathJax_MenuFrame");if(r){r.parentNode.removeChild(r);if(this.msieFixedPositionBug){detachEvent("onresize",a.Resize)}}if(a.jax.hover){delete a.jax.hover.nofade;d.UnHover(a.jax)}return g(p)},Find:function(q){var s=[].slice.call(arguments,1);for(var r=0,p=this.items.length;r<p;r++){if(this.items[r].name===q){if(s.length){if(!this.items[r].menu){return null}return this.items[r].menu.Find.apply(this.items[r].menu,s)}return this.items[r]}}return null},IndexOf:function(q){for(var r=0,p=this.items.length;r<p;r++){if(this.items[r].name===q){return r}}return null}},{config:n,div:null,Close:function(p){return a.Event(p,this.menu||this.parentNode,(this.menu?"Touchend":"Remove"))},Remove:function(p){return a.Event(p,this,"Remove")},Mouseover:function(p){return a.Event(p,this,"Mouseover")},Mouseout:function(p){return a.Event(p,this,"Mouseout")},Mousedown:function(p){return a.Event(p,this,"Mousedown")},Mouseup:function(p){return a.Event(p,this,"Mouseup")},Touchstart:function(p){return a.Event(p,this,"Touchstart")},Touchend:function(p){return a.Event(p,this,"Touchend")},Event:function(r,t,p,s){if(a.skipMouseover&&p==="Mouseover"&&!s){return g(r)}if(a.skipUp){if(p.match(/Mouseup|Touchend/)){delete a.skipUp;return g(r)}if(p==="Touchstart"||(p==="Mousedown"&&!a.skipMousedown)){delete a.skipUp}}if(!r){r=window.event}var q=t.menuItem;if(q&&q[p]){return q[p](r,t)}return null},BGSTYLE:{position:"absolute",left:0,top:0,"z-index":200,width:"100%",height:"100%",border:0,padding:0,margin:0},Background:function(q){var r=f.addElement(document.body,"div",{style:this.BGSTYLE,id:"MathJax_MenuFrame"},[["div",{style:this.BGSTYLE,menuItem:q,onmousedown:this.Remove}]]);var p=r.firstChild;if(q.msieBackgroundBug){p.style.backgroundColor="white";p.style.filter="alpha(opacity=0)"}if(q.msieFixedPositionBug){r.width=r.height=0;this.Resize();attachEvent("onresize",this.Resize)}else{p.style.position="fixed"}return r},Resize:function(){setTimeout(a.SetWH,0)},SetWH:function(){var p=document.getElementById("MathJax_MenuFrame");if(p){p=p.firstChild;p.style.width=p.style.height="1px";p.style.width=document.body.scrollWidth+"px";p.style.height=document.body.scrollHeight+"px"}},saveCookie:function(){f.Cookie.Set("menu",this.cookie)},getCookie:function(){this.cookie=f.Cookie.Get("menu")},getImages:function(){if(a.isMobile){var p=new Image();p.src=n.closeImg}}});var l=a.ITEM=MathJax.Object.Subclass({name:"",Create:function(q){if(!this.hidden){var p={onmouseover:a.Mouseover,onmouseout:a.Mouseout,onmouseup:a.Mouseup,onmousedown:a.Mousedown,ondragstart:g,onselectstart:g,onselectend:g,ontouchstart:a.Touchstart,ontouchend:a.Touchend,className:"MathJax_MenuItem",menuItem:this};if(this.disabled){p.className+=" MathJax_MenuDisabled"}f.addElement(q,"div",p,this.Label(p,q))}},Mouseover:function(t,v){if(!this.disabled){this.Activate(v)}if(!this.menu||!this.menu.posted){var u=document.getElementById("MathJax_MenuFrame").childNodes,q=v.parentNode.childNodes;for(var r=0,p=q.length;r<p;r++){var s=q[r].menuItem;if(s&&s.menu&&s.menu.posted){s.Deactivate(q[r])}}p=u.length-1;while(p>=0&&v.parentNode.menuItem!==u[p].menuItem){u[p].menuItem.posted=false;u[p].parentNode.removeChild(u[p]);p--}if(this.Timer&&!a.isMobile){this.Timer(t,v)}}},Mouseout:function(p,q){if(!this.menu||!this.menu.posted){this.Deactivate(q)}if(this.timer){clearTimeout(this.timer);delete this.timer}},Mouseup:function(p,q){return this.Remove(p,q)},Touchstart:function(p,q){return this.TouchEvent(p,q,"Mousedown")},Touchend:function(p,q){return this.TouchEvent(p,q,"Mouseup")},TouchEvent:function(q,r,p){if(this!==l.lastItem){if(l.lastMenu){a.Event(q,l.lastMenu,"Mouseout")}a.Event(q,r,"Mouseover",true);l.lastItem=this;l.lastMenu=r}if(this.nativeTouch){return null}a.Event(q,r,p);return false},Remove:function(p,q){q=q.parentNode.menuItem;return q.Remove(p,q)},Activate:function(p){this.Deactivate(p);p.className+=" MathJax_MenuActive"},Deactivate:function(p){p.className=p.className.replace(/ MathJax_MenuActive/,"")},With:function(p){if(p){c.Insert(this,p)}return this}});a.ITEM.COMMAND=a.ITEM.Subclass({action:function(){},Init:function(p,r,q){this.name=p;this.action=r;this.With(q)},Label:function(p,q){return[this.name]},Mouseup:function(p,q){if(!this.disabled){this.Remove(p,q);i.Post(["command",this]);this.action.call(this,p)}return g(p)}});a.ITEM.SUBMENU=a.ITEM.Subclass({menu:null,marker:(m&&!c.Browser.isSafari?"\u25B6":"\u25B8"),Init:function(p,r){this.name=p;var q=1;if(!(r instanceof a.ITEM)){this.With(r),q++}this.menu=a.apply(a,[].slice.call(arguments,q))},Label:function(p,q){this.menu.posted=false;return[this.name+" ",["span",{className:"MathJax_MenuArrow"},[this.marker]]]},Timer:function(p,q){if(this.timer){clearTimeout(this.timer)}p={clientX:p.clientX,clientY:p.clientY};this.timer=setTimeout(e(["Mouseup",this,p,q]),n.delay)},Touchend:function(q,s){var r=this.menu.posted;var p=this.SUPER(arguments).Touchend.apply(this,arguments);if(r){this.Deactivate(s);delete l.lastItem;delete l.lastMenu}return p},Mouseup:function(q,s){if(!this.disabled){if(!this.menu.posted){if(this.timer){clearTimeout(this.timer);delete this.timer}this.menu.Post(q,s)}else{var r=document.getElementById("MathJax_MenuFrame").childNodes,p=r.length-1;while(p>=0){var t=r[p];t.menuItem.posted=false;t.parentNode.removeChild(t);if(t.menuItem===this.menu){break}p--}}}return g(q)}});a.ITEM.RADIO=a.ITEM.Subclass({variable:null,marker:(m?"\u25CF":"\u2713"),Init:function(q,p,r){this.name=q;this.variable=p;this.With(r);if(this.value==null){this.value=this.name}},Label:function(q,r){var p={className:"MathJax_MenuRadioCheck"};if(n.settings[this.variable]!==this.value){p={style:{display:"none"}}}return[["span",p,[this.marker]]," "+this.name]},Mouseup:function(s,t){if(!this.disabled){var u=t.parentNode.childNodes;for(var q=0,p=u.length;q<p;q++){var r=u[q].menuItem;if(r&&r.variable===this.variable){u[q].firstChild.style.display="none"}}t.firstChild.display="";n.settings[this.variable]=this.value;a.cookie[this.variable]=n.settings[this.variable];a.saveCookie();i.Post(["radio button",this]);if(this.action){this.action.call(a)}}this.Remove(s,t);return g(s)}});a.ITEM.CHECKBOX=a.ITEM.Subclass({variable:null,marker:"\u2713",Init:function(q,p,r){this.name=q;this.variable=p;this.With(r)},Label:function(q,r){var p={className:"MathJax_MenuCheck"};if(!n.settings[this.variable]){p={style:{display:"none"}}}return[["span",p,[this.marker]]," "+this.name]},Mouseup:function(p,q){if(!this.disabled){q.firstChild.display=(n.settings[this.variable]?"none":"");n.settings[this.variable]=!n.settings[this.variable];a.cookie[this.variable]=n.settings[this.variable];a.saveCookie();i.Post(["checkbox",this]);if(this.action){this.action.call(a)}}this.Remove(p,q);return g(p)}});a.ITEM.LABEL=a.ITEM.Subclass({Init:function(p,q){this.name=p;this.With(q)},Label:function(p,q){delete p.onmouseover,delete p.onmouseout;delete p.onmousedown;p.className+=" MathJax_MenuLabel";return[this.name]}});a.ITEM.RULE=a.ITEM.Subclass({Label:function(p,q){delete p.onmouseover,delete p.onmouseout;delete p.onmousedown;p.className+=" MathJax_MenuRule";return null}});a.About=function(){var s=b["HTML-CSS"]||{fontInUse:""};var u=(s.webFonts?"":"local "),q=(s.webFonts?" web":"");var r=(s.imgFonts?"Image":u+s.fontInUse+q)+" fonts";var p=["MathJax.js v"+MathJax.fileversion,["br"]];p.push(["div",{style:{"border-top":"groove 2px",margin:".25em 0"}}]);a.About.GetJax(p,MathJax.InputJax,"Input Jax");a.About.GetJax(p,MathJax.OutputJax,"Output Jax");a.About.GetJax(p,MathJax.ElementJax,"Element Jax");p.push(["div",{style:{"border-top":"groove 2px",margin:".25em 0"}}]);a.About.GetJax(p,MathJax.Extension,"Extension",true);p.push(["div",{style:{"border-top":"groove 2px",margin:".25em 0"}}],["center",{},[c.Browser+" v"+c.Browser.version+(s.webFonts?" \u2014 "+s.allowWebFonts+" fonts":"")]]);a.About.div=a.Background(a.About);var v=f.addElement(a.About.div,"div",{id:"MathJax_About",onclick:a.About.Remove},[["b",{style:{fontSize:"120%"}},["MathJax"]]," v"+MathJax.version,["br"],"using "+r,["br"],["br"],["span",{style:{display:"inline-block","text-align":"left","font-size":"80%","max-height":"20em",overflow:"auto","background-color":"#E4E4E4",padding:".4em .6em",border:"1px inset"}},p],["br"],["br"],["a",{href:"http://www.mathjax.org/"},["www.mathjax.org"]]]);var w=(document.documentElement||{});var t=window.innerHeight||w.clientHeight||w.scrollHeight||0;if(a.prototype.msieAboutBug){v.style.width="20em";v.style.position="absolute";v.style.left=Math.floor((document.documentElement.scrollWidth-v.offsetWidth)/2)+"px";v.style.top=(Math.floor((t-v.offsetHeight)/3)+document.body.scrollTop)+"px"}else{v.style.marginLeft=Math.floor(-v.offsetWidth/2)+"px";v.style.top=Math.floor((t-v.offsetHeight)/3)+"px"}};a.About.Remove=function(p){if(a.About.div){document.body.removeChild(a.About.div);delete a.About.div}};a.About.GetJax=function(q,v,t,s){var u=[];for(var w in v){if(v.hasOwnProperty(w)&&v[w]){if((s&&v[w].version)||(v[w].isa&&v[w].isa(v))){u.push((v[w].id||w)+" "+t+" v"+v[w].version)}}}u.sort();for(var r=0,p=u.length;r<p;r++){q.push(u[r],["br"])}return q};a.Help=function(){window.open(n.helpURL,"MathJaxHelp")};a.ShowSource=function(s){if(!s){s=window.event}var r={screenX:s.screenX,screenY:s.screenY};if(!a.jax){return}if(this.format==="MathML"){var p=MathJax.ElementJax.mml;if(p&&typeof(p.mbase.prototype.toMathML)!=="undefined"){try{a.ShowSource.Text(a.jax.root.toMathML(),s)}catch(q){if(!q.restart){throw q}e.After([this,a.ShowSource,r])}}else{if(!j.loadingToMathML){j.loadingToMathML=true;a.ShowSource.Window(s);e.Queue(j.Require("[MathJax]/extensions/toMathML.js"),function(){delete j.loadingToMathML;if(!p.mbase.prototype.toMathML){p.mbase.prototype.toMathML=function(){}}},[this,a.ShowSource,r]);return}}}else{if(a.jax.originalText==null){alert("No TeX form available");return}a.ShowSource.Text(a.jax.originalText,s)}};a.ShowSource.Window=function(q){if(!a.ShowSource.w){var r=[],p=n.windowSettings;for(var s in p){if(p.hasOwnProperty(s)){r.push(s+"="+p[s])}}a.ShowSource.w=window.open("","_blank",r.join(","))}return a.ShowSource.w};a.ShowSource.Text=function(v,u){var r=a.ShowSource.Window(u);v=v.replace(/^\s*/,"").replace(/\s*$/,"");v=v.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");if(a.isMobile){r.document.open();r.document.write("<html><head><meta name='viewport' content='width=device-width, initial-scale=1.0' /><title>MathJax Equation Source</title></head><body style='font-size:85%'>");r.document.write("<pre>"+v+"</pre>");r.document.write("<hr><input type='button' value='Close' onclick='window.close()' />");r.document.write("</body></html>");r.document.close()}else{r.document.open();r.document.write("<html><head><title>MathJax Equation Source</title></head><body style='font-size:85%'>");r.document.write("<table><tr><td><pre>"+v+"</pre></td></tr></table>");r.document.write("</body></html>");r.document.close();var t=r.document.body.firstChild;var s=(r.outerHeight-r.innerHeight)||30,q=(r.outerWidth-r.innerWidth)||30;q=Math.min(Math.floor(0.5*screen.width),t.offsetWidth+q+25);s=Math.min(Math.floor(0.5*screen.height),t.offsetHeight+s+25);r.resizeTo(q,s);if(u&&u.screenX!=null){var p=Math.max(0,Math.min(u.screenX-Math.floor(q/2),screen.width-q-20)),z=Math.max(0,Math.min(u.screenY-Math.floor(s/2),screen.height-s-20));r.moveTo(p,z)}}delete a.ShowSource.w};a.Scale=function(){var q=b["HTML-CSS"],p=b.NativeMML;var s=(q?q.config.scale:p.config.scale);var r=prompt("Scale all mathematics (compared to surrounding text) by",s+"%");if(r){if(r.match(/^\s*\d+\s*%?\s*$/)){r=parseInt(r);if(r){if(r!==s){if(q){q.config.scale=r}if(p){p.config.scale=r}a.cookie.scale=r;a.saveCookie();c.Reprocess()}}else{alert("The scale should not be zero")}}else{alert("The scale should be a perentage (e.g., 120%)")}}};a.Zoom=function(){if(!MathJax.Extension.MathZoom){j.Require("[MathJax]/extensions/MathZoom.js")}};a.Renderer=function(){var p=c.outputJax["jax/mml"];if(p[0]!==n.settings.renderer){c.Queue(["setRenderer",c,n.settings.renderer,"jax/mml"],["Rerender",c])}};a.Font=function(){var p=b["HTML-CSS"];if(!p){return}document.location.reload()};c.Browser.Select({MSIE:function(p){var q=(document.compatMode==="BackCompat");var r=p.versionAtLeast("8.0")&&document.documentMode>7;a.Augment({margin:20,msieBackgroundBug:true,msieFixedPositionBug:(q||!r),msieAboutBug:q});if(document.documentMode>=9){delete n.styles["#MathJax_About"].filter;delete n.styles[".MathJax_Menu"].filter}},Firefox:function(p){a.skipMouseover=p.isMobile&&p.versionAtLeast("6.0");a.skipMousedown=p.isMobile}});a.isMobile=c.Browser.isMobile;a.noContextMenu=c.Browser.noContextMenu;c.Register.StartupHook("End Config",function(){n.settings=c.config.menuSettings;if(typeof(n.settings.showRenderer)!=="undefined"){n.showRenderer=n.settings.showRenderer}if(typeof(n.settings.showFontMenu)!=="undefined"){n.showFontMenu=n.settings.showFontMenu}if(typeof(n.settings.showContext)!=="undefined"){n.showContext=n.settings.showContext}a.getCookie();a.menu=a(l.SUBMENU("Show Math As",l.COMMAND("MathML Code",a.ShowSource,{nativeTouch:true,format:"MathML"}),l.COMMAND("Original Form",a.ShowSource,{nativeTouch:true})),l.RULE(),l.SUBMENU("Math Settings",l.SUBMENU("Zoom Trigger",l.RADIO("Hover","zoom",{action:a.Zoom}),l.RADIO("Click","zoom",{action:a.Zoom}),l.RADIO("Double-Click","zoom",{action:a.Zoom}),l.RADIO("No Zoom","zoom",{value:"None"}),l.RULE(),l.LABEL("Trigger Requires:"),l.CHECKBOX((c.Browser.isMac?"Option":"Alt"),"ALT"),l.CHECKBOX("Command","CMD",{hidden:!c.Browser.isMac}),l.CHECKBOX("Control","CTRL",{hidden:c.Browser.isMac}),l.CHECKBOX("Shift","Shift")),l.SUBMENU("Zoom Factor",l.RADIO("125%","zscale"),l.RADIO("133%","zscale"),l.RADIO("150%","zscale"),l.RADIO("175%","zscale"),l.RADIO("200%","zscale"),l.RADIO("250%","zscale"),l.RADIO("300%","zscale"),l.RADIO("400%","zscale")),l.RULE(),l.SUBMENU("Math Renderer",{hidden:!n.showRenderer},l.RADIO("HTML-CSS","renderer",{action:a.Renderer}),l.RADIO("MathML","renderer",{action:a.Renderer,value:"NativeMML"})),l.SUBMENU("Font Preference",{hidden:!n.showFontMenu},l.LABEL("For HTML-CSS:"),l.RADIO("Auto","font",{action:a.Font}),l.RULE(),l.RADIO("TeX (local)","font",{action:a.Font}),l.RADIO("TeX (web)","font",{action:a.Font}),l.RADIO("TeX (image)","font",{action:a.Font}),l.RULE(),l.RADIO("STIX (local)","font",{action:a.Font})),l.SUBMENU("Contextual Menu",{hidden:!n.showContext},l.RADIO("MathJax","context"),l.RADIO("Browser","context")),l.COMMAND("Scale All Math ...",a.Scale),l.RULE().With({hidden:true}),l.CHECKBOX("Highlight on Hover","discoverable",{hidden:true})),l.RULE(),l.COMMAND("About MathJax",a.About),l.COMMAND("MathJax Help",a.Help))});a.showRenderer=function(p){a.cookie.showRenderer=n.showRenderer=p;a.saveCookie();a.menu.Find("Math Settings","Math Renderer").hidden=!p};a.showFontMenu=function(p){a.cookie.showFontMenu=n.showFontMenu=p;a.saveCookie();a.menu.Find("Math Settings","Font Preference").hidden=!p};a.showContext=function(p){a.cookie.showContext=n.showContext=p;a.saveCookie();a.menu.Find("Math Settings","Contextual Menu").hidden=!p};if(a.isMobile){(function(){var q=n.settings;var p=a.menu.Find("Math Settings","Zoom Trigger").menu;p.items[0].disabled=p.items[1].disabled=true;if(q.zoom==="Hover"||q.zoom=="Click"){q.zoom="None"}p.items=p.items.slice(0,4);if(navigator.appVersion.match(/[ (]Android[) ]/)){a.ITEM.SUBMENU.Augment({marker:"\u00BB"})}})()}e.Queue(c.Register.StartupHook("End Config",{}),["getImages",a],["Styles",j,n.styles],["Post",c.Startup.signal,"MathMenu Ready"],["loadComplete",j,"[MathJax]/extensions/MathMenu.js"])})(MathJax.Hub,MathJax.HTML,MathJax.Ajax,MathJax.CallBack,MathJax.OutputJax);

