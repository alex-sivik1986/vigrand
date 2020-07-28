/*! jQuery Migrate v1.4.1 | (c) jQuery Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(a,b,c){function d(c){var d=b.console;f[c]||(f[c]=!0,a.migrateWarnings.push(c),d&&d.warn&&!a.migrateMute&&(d.warn("JQMIGRATE: "+c),a.migrateTrace&&d.trace&&d.trace()))}function e(b,c,e,f){if(Object.defineProperty)try{return void Object.defineProperty(b,c,{configurable:!0,enumerable:!0,get:function(){return d(f),e},set:function(a){d(f),e=a}})}catch(g){}a._definePropertyBroken=!0,b[c]=e}a.migrateVersion="1.4.1";var f={};a.migrateWarnings=[],b.console&&b.console.log&&b.console.log("JQMIGRATE: Migrate is installed"+(a.migrateMute?"":" with logging active")+", version "+a.migrateVersion),a.migrateTrace===c&&(a.migrateTrace=!0),a.migrateReset=function(){f={},a.migrateWarnings.length=0},"BackCompat"===document.compatMode&&d("jQuery is not compatible with Quirks Mode");var g=a("<input/>",{size:1}).attr("size")&&a.attrFn,h=a.attr,i=a.attrHooks.value&&a.attrHooks.value.get||function(){return null},j=a.attrHooks.value&&a.attrHooks.value.set||function(){return c},k=/^(?:input|button)$/i,l=/^[238]$/,m=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,n=/^(?:checked|selected)$/i;e(a,"attrFn",g||{},"jQuery.attrFn is deprecated"),a.attr=function(b,e,f,i){var j=e.toLowerCase(),o=b&&b.nodeType;return i&&(h.length<4&&d("jQuery.fn.attr( props, pass ) is deprecated"),b&&!l.test(o)&&(g?e in g:a.isFunction(a.fn[e])))?a(b)[e](f):("type"===e&&f!==c&&k.test(b.nodeName)&&b.parentNode&&d("Can't change the 'type' of an input or button in IE 6/7/8"),!a.attrHooks[j]&&m.test(j)&&(a.attrHooks[j]={get:function(b,d){var e,f=a.prop(b,d);return f===!0||"boolean"!=typeof f&&(e=b.getAttributeNode(d))&&e.nodeValue!==!1?d.toLowerCase():c},set:function(b,c,d){var e;return c===!1?a.removeAttr(b,d):(e=a.propFix[d]||d,e in b&&(b[e]=!0),b.setAttribute(d,d.toLowerCase())),d}},n.test(j)&&d("jQuery.fn.attr('"+j+"') might use property instead of attribute")),h.call(a,b,e,f))},a.attrHooks.value={get:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?i.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value') no longer gets properties"),b in a?a.value:null)},set:function(a,b){var c=(a.nodeName||"").toLowerCase();return"button"===c?j.apply(this,arguments):("input"!==c&&"option"!==c&&d("jQuery.fn.attr('value', val) no longer sets properties"),void(a.value=b))}};var o,p,q=a.fn.init,r=a.find,s=a.parseJSON,t=/^\s*</,u=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,v=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,w=/^([^<]*)(<[\w\W]+>)([^>]*)$/;a.fn.init=function(b,e,f){var g,h;return b&&"string"==typeof b&&!a.isPlainObject(e)&&(g=w.exec(a.trim(b)))&&g[0]&&(t.test(b)||d("$(html) HTML strings must start with '<' character"),g[3]&&d("$(html) HTML text after last tag is ignored"),"#"===g[0].charAt(0)&&(d("HTML string cannot start with a '#' character"),a.error("JQMIGRATE: Invalid selector string (XSS)")),e&&e.context&&e.context.nodeType&&(e=e.context),a.parseHTML)?q.call(this,a.parseHTML(g[2],e&&e.ownerDocument||e||document,!0),e,f):(h=q.apply(this,arguments),b&&b.selector!==c?(h.selector=b.selector,h.context=b.context):(h.selector="string"==typeof b?b:"",b&&(h.context=b.nodeType?b:e||document)),h)},a.fn.init.prototype=a.fn,a.find=function(a){var b=Array.prototype.slice.call(arguments);if("string"==typeof a&&u.test(a))try{document.querySelector(a)}catch(c){a=a.replace(v,function(a,b,c,d){return"["+b+c+'"'+d+'"]'});try{document.querySelector(a),d("Attribute selector with '#' must be quoted: "+b[0]),b[0]=a}catch(e){d("Attribute selector with '#' was not fixed: "+b[0])}}return r.apply(this,b)};var x;for(x in r)Object.prototype.hasOwnProperty.call(r,x)&&(a.find[x]=r[x]);a.parseJSON=function(a){return a?s.apply(this,arguments):(d("jQuery.parseJSON requires a valid JSON string"),null)},a.uaMatch=function(a){a=a.toLowerCase();var b=/(chrome)[ \/]([\w.]+)/.exec(a)||/(webkit)[ \/]([\w.]+)/.exec(a)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a)||/(msie) ([\w.]+)/.exec(a)||a.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},a.browser||(o=a.uaMatch(navigator.userAgent),p={},o.browser&&(p[o.browser]=!0,p.version=o.version),p.chrome?p.webkit=!0:p.webkit&&(p.safari=!0),a.browser=p),e(a,"browser",a.browser,"jQuery.browser is deprecated"),a.boxModel=a.support.boxModel="CSS1Compat"===document.compatMode,e(a,"boxModel",a.boxModel,"jQuery.boxModel is deprecated"),e(a.support,"boxModel",a.support.boxModel,"jQuery.support.boxModel is deprecated"),a.sub=function(){function b(a,c){return new b.fn.init(a,c)}a.extend(!0,b,this),b.superclass=this,b.fn=b.prototype=this(),b.fn.constructor=b,b.sub=this.sub,b.fn.init=function(d,e){var f=a.fn.init.call(this,d,e,c);return f instanceof b?f:b(f)},b.fn.init.prototype=b.fn;var c=b(document);return d("jQuery.sub() is deprecated"),b},a.fn.size=function(){return d("jQuery.fn.size() is deprecated; use the .length property"),this.length};var y=!1;a.swap&&a.each(["height","width","reliableMarginRight"],function(b,c){var d=a.cssHooks[c]&&a.cssHooks[c].get;d&&(a.cssHooks[c].get=function(){var a;return y=!0,a=d.apply(this,arguments),y=!1,a})}),a.swap=function(a,b,c,e){var f,g,h={};y||d("jQuery.swap() is undocumented and deprecated");for(g in b)h[g]=a.style[g],a.style[g]=b[g];f=c.apply(a,e||[]);for(g in b)a.style[g]=h[g];return f},a.ajaxSetup({converters:{"text json":a.parseJSON}});var z=a.fn.data;a.fn.data=function(b){var e,f,g=this[0];return!g||"events"!==b||1!==arguments.length||(e=a.data(g,b),f=a._data(g,b),e!==c&&e!==f||f===c)?z.apply(this,arguments):(d("Use of jQuery.fn.data('events') is deprecated"),f)};var A=/\/(java|ecma)script/i;a.clean||(a.clean=function(b,c,e,f){c=c||document,c=!c.nodeType&&c[0]||c,c=c.ownerDocument||c,d("jQuery.clean() is deprecated");var g,h,i,j,k=[];if(a.merge(k,a.buildFragment(b,c).childNodes),e)for(i=function(a){return!a.type||A.test(a.type)?f?f.push(a.parentNode?a.parentNode.removeChild(a):a):e.appendChild(a):void 0},g=0;null!=(h=k[g]);g++)a.nodeName(h,"script")&&i(h)||(e.appendChild(h),"undefined"!=typeof h.getElementsByTagName&&(j=a.grep(a.merge([],h.getElementsByTagName("script")),i),k.splice.apply(k,[g+1,0].concat(j)),g+=j.length));return k});var B=a.event.add,C=a.event.remove,D=a.event.trigger,E=a.fn.toggle,F=a.fn.live,G=a.fn.die,H=a.fn.load,I="ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess",J=new RegExp("\\b(?:"+I+")\\b"),K=/(?:^|\s)hover(\.\S+|)\b/,L=function(b){return"string"!=typeof b||a.event.special.hover?b:(K.test(b)&&d("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"),b&&b.replace(K,"mouseenter$1 mouseleave$1"))};a.event.props&&"attrChange"!==a.event.props[0]&&a.event.props.unshift("attrChange","attrName","relatedNode","srcElement"),a.event.dispatch&&e(a.event,"handle",a.event.dispatch,"jQuery.event.handle is undocumented and deprecated"),a.event.add=function(a,b,c,e,f){a!==document&&J.test(b)&&d("AJAX events should be attached to document: "+b),B.call(this,a,L(b||""),c,e,f)},a.event.remove=function(a,b,c,d,e){C.call(this,a,L(b)||"",c,d,e)},a.each(["load","unload","error"],function(b,c){a.fn[c]=function(){var a=Array.prototype.slice.call(arguments,0);return"load"===c&&"string"==typeof a[0]?H.apply(this,a):(d("jQuery.fn."+c+"() is deprecated"),a.splice(0,0,c),arguments.length?this.bind.apply(this,a):(this.triggerHandler.apply(this,a),this))}}),a.fn.toggle=function(b,c){if(!a.isFunction(b)||!a.isFunction(c))return E.apply(this,arguments);d("jQuery.fn.toggle(handler, handler...) is deprecated");var e=arguments,f=b.guid||a.guid++,g=0,h=function(c){var d=(a._data(this,"lastToggle"+b.guid)||0)%g;return a._data(this,"lastToggle"+b.guid,d+1),c.preventDefault(),e[d].apply(this,arguments)||!1};for(h.guid=f;g<e.length;)e[g++].guid=f;return this.click(h)},a.fn.live=function(b,c,e){return d("jQuery.fn.live() is deprecated"),F?F.apply(this,arguments):(a(this.context).on(b,this.selector,c,e),this)},a.fn.die=function(b,c){return d("jQuery.fn.die() is deprecated"),G?G.apply(this,arguments):(a(this.context).off(b,this.selector||"**",c),this)},a.event.trigger=function(a,b,c,e){return c||J.test(a)||d("Global events are undocumented and deprecated"),D.call(this,a,b,c||document,e)},a.each(I.split("|"),function(b,c){a.event.special[c]={setup:function(){var b=this;return b!==document&&(a.event.add(document,c+"."+a.guid,function(){a.event.trigger(c,Array.prototype.slice.call(arguments,1),b,!0)}),a._data(this,c,a.guid++)),!1},teardown:function(){return this!==document&&a.event.remove(document,c+"."+a._data(this,c)),!1}}}),a.event.special.ready={setup:function(){this===document&&d("'ready' event is deprecated")}};var M=a.fn.andSelf||a.fn.addBack,N=a.fn.find;if(a.fn.andSelf=function(){return d("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"),M.apply(this,arguments)},a.fn.find=function(a){var b=N.apply(this,arguments);return b.context=this.context,b.selector=this.selector?this.selector+" "+a:a,b},a.Callbacks){var O=a.Deferred,P=[["resolve","done",a.Callbacks("once memory"),a.Callbacks("once memory"),"resolved"],["reject","fail",a.Callbacks("once memory"),a.Callbacks("once memory"),"rejected"],["notify","progress",a.Callbacks("memory"),a.Callbacks("memory")]];a.Deferred=function(b){var c=O(),e=c.promise();return c.pipe=e.pipe=function(){var b=arguments;return d("deferred.pipe() is deprecated"),a.Deferred(function(d){a.each(P,function(f,g){var h=a.isFunction(b[f])&&b[f];c[g[1]](function(){var b=h&&h.apply(this,arguments);b&&a.isFunction(b.promise)?b.promise().done(d.resolve).fail(d.reject).progress(d.notify):d[g[0]+"With"](this===e?d.promise():this,h?[b]:arguments)})}),b=null}).promise()},c.isResolved=function(){return d("deferred.isResolved is deprecated"),"resolved"===c.state()},c.isRejected=function(){return d("deferred.isRejected is deprecated"),"rejected"===c.state()},b&&b.call(c,c),c}}}(jQuery,window);/********************************************
	-	THEMEPUNCH TOOLS Ver. 1.0     -
	 Last Update of Tools 08.03.2018
*********************************************/


/*
* @fileOverview TouchSwipe - jQuery Plugin
* @version 1.6.9
*
* @author Matt Bryson http://www.github.com/mattbryson
* @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
* @see http://labs.skinkers.com/touchSwipe/
* @see http://plugins.jquery.com/project/touchSwipe
*
* Copyright (c) 2010 Matt Bryson
* Dual licensed under the MIT or GPL Version 2 licenses.
*
*/



(function(a){if(typeof define==="function"&&define.amd&&define.amd.jQuery){define(["jquery"],a)}else{a(jQuery)}}(function(f){var y="1.6.9",p="left",o="right",e="up",x="down",c="in",A="out",m="none",s="auto",l="swipe",t="pinch",B="tap",j="doubletap",b="longtap",z="hold",E="horizontal",u="vertical",i="all",r=10,g="start",k="move",h="end",q="cancel",a="ontouchstart" in window,v=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled,d=window.navigator.pointerEnabled||window.navigator.msPointerEnabled,C="TouchSwipe";var n={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:true,triggerOnTouchLeave:false,allowPageScroll:"auto",fallbackToMouseEvents:true,excludedElements:"label, button, input, select, textarea, a, .noSwipe",preventDefaultEvents:true};f.fn.swipetp=function(H){var G=f(this),F=G.data(C);if(F&&typeof H==="string"){if(F[H]){return F[H].apply(this,Array.prototype.slice.call(arguments,1))}else{f.error("Method "+H+" does not exist on jQuery.swipetp")}}else{if(!F&&(typeof H==="object"||!H)){return w.apply(this,arguments)}}return G};f.fn.swipetp.version=y;f.fn.swipetp.defaults=n;f.fn.swipetp.phases={PHASE_START:g,PHASE_MOVE:k,PHASE_END:h,PHASE_CANCEL:q};f.fn.swipetp.directions={LEFT:p,RIGHT:o,UP:e,DOWN:x,IN:c,OUT:A};f.fn.swipetp.pageScroll={NONE:m,HORIZONTAL:E,VERTICAL:u,AUTO:s};f.fn.swipetp.fingers={ONE:1,TWO:2,THREE:3,ALL:i};function w(F){if(F&&(F.allowPageScroll===undefined&&(F.swipe!==undefined||F.swipeStatus!==undefined))){F.allowPageScroll=m}if(F.click!==undefined&&F.tap===undefined){F.tap=F.click}if(!F){F={}}F=f.extend({},f.fn.swipetp.defaults,F);return this.each(function(){var H=f(this);var G=H.data(C);if(!G){G=new D(this,F);H.data(C,G)}})}function D(a5,aw){var aA=(a||d||!aw.fallbackToMouseEvents),K=aA?(d?(v?"MSPointerDown":"pointerdown"):"touchstart"):"mousedown",az=aA?(d?(v?"MSPointerMove":"pointermove"):"touchmove"):"mousemove",V=aA?(d?(v?"MSPointerUp":"pointerup"):"touchend"):"mouseup",T=aA?null:"mouseleave",aE=(d?(v?"MSPointerCancel":"pointercancel"):"touchcancel");var ah=0,aQ=null,ac=0,a2=0,a0=0,H=1,ar=0,aK=0,N=null;var aS=f(a5);var aa="start";var X=0;var aR=null;var U=0,a3=0,a6=0,ae=0,O=0;var aX=null,ag=null;try{aS.bind(K,aO);aS.bind(aE,ba)}catch(al){f.error("events not supported "+K+","+aE+" on jQuery.swipetp")}this.enable=function(){aS.bind(K,aO);aS.bind(aE,ba);return aS};this.disable=function(){aL();return aS};this.destroy=function(){aL();aS.data(C,null);aS=null};this.option=function(bd,bc){if(aw[bd]!==undefined){if(bc===undefined){return aw[bd]}else{aw[bd]=bc}}else{f.error("Option "+bd+" does not exist on jQuery.swipetp.options")}return null};function aO(be){if(aC()){return}if(f(be.target).closest(aw.excludedElements,aS).length>0){return}var bf=be.originalEvent?be.originalEvent:be;var bd,bg=bf.touches,bc=bg?bg[0]:bf;aa=g;if(bg){X=bg.length}else{be.preventDefault()}ah=0;aQ=null;aK=null;ac=0;a2=0;a0=0;H=1;ar=0;aR=ak();N=ab();S();if(!bg||(X===aw.fingers||aw.fingers===i)||aY()){aj(0,bc);U=au();if(X==2){aj(1,bg[1]);a2=a0=av(aR[0].start,aR[1].start)}if(aw.swipeStatus||aw.pinchStatus){bd=P(bf,aa)}}else{bd=false}if(bd===false){aa=q;P(bf,aa);return bd}else{if(aw.hold){ag=setTimeout(f.proxy(function(){aS.trigger("hold",[bf.target]);if(aw.hold){bd=aw.hold.call(aS,bf,bf.target)}},this),aw.longTapThreshold)}ap(true)}return null}function a4(bf){var bi=bf.originalEvent?bf.originalEvent:bf;if(aa===h||aa===q||an()){return}var be,bj=bi.touches,bd=bj?bj[0]:bi;var bg=aI(bd);a3=au();if(bj){X=bj.length}if(aw.hold){clearTimeout(ag)}aa=k;if(X==2){if(a2==0){aj(1,bj[1]);a2=a0=av(aR[0].start,aR[1].start)}else{aI(bj[1]);a0=av(aR[0].end,aR[1].end);aK=at(aR[0].end,aR[1].end)}H=a8(a2,a0);ar=Math.abs(a2-a0)}if((X===aw.fingers||aw.fingers===i)||!bj||aY()){aQ=aM(bg.start,bg.end);am(bf,aQ);ah=aT(bg.start,bg.end);ac=aN();aJ(aQ,ah);if(aw.swipeStatus||aw.pinchStatus){be=P(bi,aa)}if(!aw.triggerOnTouchEnd||aw.triggerOnTouchLeave){var bc=true;if(aw.triggerOnTouchLeave){var bh=aZ(this);bc=F(bg.end,bh)}if(!aw.triggerOnTouchEnd&&bc){aa=aD(k)}else{if(aw.triggerOnTouchLeave&&!bc){aa=aD(h)}}if(aa==q||aa==h){P(bi,aa)}}}else{aa=q;P(bi,aa)}if(be===false){aa=q;P(bi,aa)}}function M(bc){var bd=bc.originalEvent?bc.originalEvent:bc,be=bd.touches;if(be){if(be.length){G();return true}}if(an()){X=ae}a3=au();ac=aN();if(bb()||!ao()){aa=q;P(bd,aa)}else{if(aw.triggerOnTouchEnd||(aw.triggerOnTouchEnd==false&&aa===k)){bc.preventDefault();aa=h;P(bd,aa)}else{if(!aw.triggerOnTouchEnd&&a7()){aa=h;aG(bd,aa,B)}else{if(aa===k){aa=q;P(bd,aa)}}}}ap(false);return null}function ba(){X=0;a3=0;U=0;a2=0;a0=0;H=1;S();ap(false)}function L(bc){var bd=bc.originalEvent?bc.originalEvent:bc;if(aw.triggerOnTouchLeave){aa=aD(h);P(bd,aa)}}function aL(){aS.unbind(K,aO);aS.unbind(aE,ba);aS.unbind(az,a4);aS.unbind(V,M);if(T){aS.unbind(T,L)}ap(false)}function aD(bg){var bf=bg;var be=aB();var bd=ao();var bc=bb();if(!be||bc){bf=q}else{if(bd&&bg==k&&(!aw.triggerOnTouchEnd||aw.triggerOnTouchLeave)){bf=h}else{if(!bd&&bg==h&&aw.triggerOnTouchLeave){bf=q}}}return bf}function P(be,bc){var bd,bf=be.touches;if((J()||W())||(Q()||aY())){if(J()||W()){bd=aG(be,bc,l)}if((Q()||aY())&&bd!==false){bd=aG(be,bc,t)}}else{if(aH()&&bd!==false){bd=aG(be,bc,j)}else{if(aq()&&bd!==false){bd=aG(be,bc,b)}else{if(ai()&&bd!==false){bd=aG(be,bc,B)}}}}if(bc===q){ba(be)}if(bc===h){if(bf){if(!bf.length){ba(be)}}else{ba(be)}}return bd}function aG(bf,bc,be){var bd;if(be==l){aS.trigger("swipeStatus",[bc,aQ||null,ah||0,ac||0,X,aR]);if(aw.swipeStatus){bd=aw.swipeStatus.call(aS,bf,bc,aQ||null,ah||0,ac||0,X,aR);if(bd===false){return false}}if(bc==h&&aW()){aS.trigger("swipe",[aQ,ah,ac,X,aR]);if(aw.swipe){bd=aw.swipe.call(aS,bf,aQ,ah,ac,X,aR);if(bd===false){return false}}switch(aQ){case p:aS.trigger("swipeLeft",[aQ,ah,ac,X,aR]);if(aw.swipeLeft){bd=aw.swipeLeft.call(aS,bf,aQ,ah,ac,X,aR)}break;case o:aS.trigger("swipeRight",[aQ,ah,ac,X,aR]);if(aw.swipeRight){bd=aw.swipeRight.call(aS,bf,aQ,ah,ac,X,aR)}break;case e:aS.trigger("swipeUp",[aQ,ah,ac,X,aR]);if(aw.swipeUp){bd=aw.swipeUp.call(aS,bf,aQ,ah,ac,X,aR)}break;case x:aS.trigger("swipeDown",[aQ,ah,ac,X,aR]);if(aw.swipeDown){bd=aw.swipeDown.call(aS,bf,aQ,ah,ac,X,aR)}break}}}if(be==t){aS.trigger("pinchStatus",[bc,aK||null,ar||0,ac||0,X,H,aR]);if(aw.pinchStatus){bd=aw.pinchStatus.call(aS,bf,bc,aK||null,ar||0,ac||0,X,H,aR);if(bd===false){return false}}if(bc==h&&a9()){switch(aK){case c:aS.trigger("pinchIn",[aK||null,ar||0,ac||0,X,H,aR]);if(aw.pinchIn){bd=aw.pinchIn.call(aS,bf,aK||null,ar||0,ac||0,X,H,aR)}break;case A:aS.trigger("pinchOut",[aK||null,ar||0,ac||0,X,H,aR]);if(aw.pinchOut){bd=aw.pinchOut.call(aS,bf,aK||null,ar||0,ac||0,X,H,aR)}break}}}if(be==B){if(bc===q||bc===h){clearTimeout(aX);clearTimeout(ag);if(Z()&&!I()){O=au();aX=setTimeout(f.proxy(function(){O=null;aS.trigger("tap",[bf.target]);if(aw.tap){bd=aw.tap.call(aS,bf,bf.target)}},this),aw.doubleTapThreshold)}else{O=null;aS.trigger("tap",[bf.target]);if(aw.tap){bd=aw.tap.call(aS,bf,bf.target)}}}}else{if(be==j){if(bc===q||bc===h){clearTimeout(aX);O=null;aS.trigger("doubletap",[bf.target]);if(aw.doubleTap){bd=aw.doubleTap.call(aS,bf,bf.target)}}}else{if(be==b){if(bc===q||bc===h){clearTimeout(aX);O=null;aS.trigger("longtap",[bf.target]);if(aw.longTap){bd=aw.longTap.call(aS,bf,bf.target)}}}}}return bd}function ao(){var bc=true;if(aw.threshold!==null){bc=ah>=aw.threshold}return bc}function bb(){var bc=false;if(aw.cancelThreshold!==null&&aQ!==null){bc=(aU(aQ)-ah)>=aw.cancelThreshold}return bc}function af(){if(aw.pinchThreshold!==null){return ar>=aw.pinchThreshold}return true}function aB(){var bc;if(aw.maxTimeThreshold){if(ac>=aw.maxTimeThreshold){bc=false}else{bc=true}}else{bc=true}return bc}function am(bc,bd){if(aw.preventDefaultEvents===false){return}if(aw.allowPageScroll===m){bc.preventDefault()}else{var be=aw.allowPageScroll===s;switch(bd){case p:if((aw.swipeLeft&&be)||(!be&&aw.allowPageScroll!=E)){bc.preventDefault()}break;case o:if((aw.swipeRight&&be)||(!be&&aw.allowPageScroll!=E)){bc.preventDefault()}break;case e:if((aw.swipeUp&&be)||(!be&&aw.allowPageScroll!=u)){bc.preventDefault()}break;case x:if((aw.swipeDown&&be)||(!be&&aw.allowPageScroll!=u)){bc.preventDefault()}break}}}function a9(){var bd=aP();var bc=Y();var be=af();return bd&&bc&&be}function aY(){return !!(aw.pinchStatus||aw.pinchIn||aw.pinchOut)}function Q(){return !!(a9()&&aY())}function aW(){var bf=aB();var bh=ao();var be=aP();var bc=Y();var bd=bb();var bg=!bd&&bc&&be&&bh&&bf;return bg}function W(){return !!(aw.swipe||aw.swipeStatus||aw.swipeLeft||aw.swipeRight||aw.swipeUp||aw.swipeDown)}function J(){return !!(aW()&&W())}function aP(){return((X===aw.fingers||aw.fingers===i)||!a)}function Y(){return aR[0].end.x!==0}function a7(){return !!(aw.tap)}function Z(){return !!(aw.doubleTap)}function aV(){return !!(aw.longTap)}function R(){if(O==null){return false}var bc=au();return(Z()&&((bc-O)<=aw.doubleTapThreshold))}function I(){return R()}function ay(){return((X===1||!a)&&(isNaN(ah)||ah<aw.threshold))}function a1(){return((ac>aw.longTapThreshold)&&(ah<r))}function ai(){return !!(ay()&&a7())}function aH(){return !!(R()&&Z())}function aq(){return !!(a1()&&aV())}function G(){a6=au();ae=event.touches.length+1}function S(){a6=0;ae=0}function an(){var bc=false;if(a6){var bd=au()-a6;if(bd<=aw.fingerReleaseThreshold){bc=true}}return bc}function aC(){return !!(aS.data(C+"_intouch")===true)}function ap(bc){if(bc===true){aS.bind(az,a4);aS.bind(V,M);if(T){aS.bind(T,L)}}else{aS.unbind(az,a4,false);aS.unbind(V,M,false);if(T){aS.unbind(T,L,false)}}aS.data(C+"_intouch",bc===true)}function aj(bd,bc){var be=bc.identifier!==undefined?bc.identifier:0;aR[bd].identifier=be;aR[bd].start.x=aR[bd].end.x=bc.pageX||bc.clientX;aR[bd].start.y=aR[bd].end.y=bc.pageY||bc.clientY;return aR[bd]}function aI(bc){var be=bc.identifier!==undefined?bc.identifier:0;var bd=ad(be);bd.end.x=bc.pageX||bc.clientX;bd.end.y=bc.pageY||bc.clientY;return bd}function ad(bd){for(var bc=0;bc<aR.length;bc++){if(aR[bc].identifier==bd){return aR[bc]}}}function ak(){var bc=[];for(var bd=0;bd<=5;bd++){bc.push({start:{x:0,y:0},end:{x:0,y:0},identifier:0})}return bc}function aJ(bc,bd){bd=Math.max(bd,aU(bc));N[bc].distance=bd}function aU(bc){if(N[bc]){return N[bc].distance}return undefined}function ab(){var bc={};bc[p]=ax(p);bc[o]=ax(o);bc[e]=ax(e);bc[x]=ax(x);return bc}function ax(bc){return{direction:bc,distance:0}}function aN(){return a3-U}function av(bf,be){var bd=Math.abs(bf.x-be.x);var bc=Math.abs(bf.y-be.y);return Math.round(Math.sqrt(bd*bd+bc*bc))}function a8(bc,bd){var be=(bd/bc)*1;return be.toFixed(2)}function at(){if(H<1){return A}else{return c}}function aT(bd,bc){return Math.round(Math.sqrt(Math.pow(bc.x-bd.x,2)+Math.pow(bc.y-bd.y,2)))}function aF(bf,bd){var bc=bf.x-bd.x;var bh=bd.y-bf.y;var be=Math.atan2(bh,bc);var bg=Math.round(be*180/Math.PI);if(bg<0){bg=360-Math.abs(bg)}return bg}function aM(bd,bc){var be=aF(bd,bc);if((be<=45)&&(be>=0)){return p}else{if((be<=360)&&(be>=315)){return p}else{if((be>=135)&&(be<=225)){return o}else{if((be>45)&&(be<135)){return x}else{return e}}}}}function au(){var bc=new Date();return bc.getTime()}function aZ(bc){bc=f(bc);var be=bc.offset();var bd={left:be.left,right:be.left+bc.outerWidth(),top:be.top,bottom:be.top+bc.outerHeight()};return bd}function F(bc,bd){return(bc.x>bd.left&&bc.x<bd.right&&bc.y>bd.top&&bc.y<bd.bottom)}}}));

if(typeof(console) === 'undefined') {
    var console = {};
    console.log = console.error = console.info = console.debug = console.warn = console.trace = console.dir = console.dirxml = console.group = console.groupEnd = console.time = console.timeEnd = console.assert = console.profile = console.groupCollapsed = function() {};
}

if (window.tplogs==true)
	try {
		console.groupCollapsed("ThemePunch GreenSocks Logs");
	} catch(e) { }


var oldgs = window.GreenSockGlobals;
	oldgs_queue = window._gsQueue;
	
var punchgs = window.GreenSockGlobals = {};

if (window.tplogs==true)
	try {
		console.info("Build GreenSock SandBox for ThemePunch Plugins");
		console.info("GreenSock TweenLite Engine Initalised by ThemePunch Plugin");
	} catch(e) {}


/* TWEEN LITE */
/*!
 * VERSION: 1.19.1
 * DATE: 2017-01-17
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
!function(a,b){"use strict";var c={},d=a.document,e=a.GreenSockGlobals=a.GreenSockGlobals||a;if(!e.TweenLite){var f,g,h,i,j,k=function(a){var b,c=a.split("."),d=e;for(b=0;b<c.length;b++)d[c[b]]=d=d[c[b]]||{};return d},l=k("com.greensock"),m=1e-10,n=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},o=function(){},p=function(){var a=Object.prototype.toString,b=a.call([]);return function(c){return null!=c&&(c instanceof Array||"object"==typeof c&&!!c.push&&a.call(c)===b)}}(),q={},r=function(d,f,g,h){this.sc=q[d]?q[d].sc:[],q[d]=this,this.gsClass=null,this.func=g;var i=[];this.check=function(j){for(var l,m,n,o,p,s=f.length,t=s;--s>-1;)(l=q[f[s]]||new r(f[s],[])).gsClass?(i[s]=l.gsClass,t--):j&&l.sc.push(this);if(0===t&&g){if(m=("com.greensock."+d).split("."),n=m.pop(),o=k(m.join("."))[n]=this.gsClass=g.apply(g,i),h)if(e[n]=c[n]=o,p="undefined"!=typeof module&&module.exports,!p&&"function"==typeof define&&define.amd)define((a.GreenSockAMDPath?a.GreenSockAMDPath+"/":"")+d.split(".").pop(),[],function(){return o});else if(p)if(d===b){module.exports=c[b]=o;for(s in c)o[s]=c[s]}else c[b]&&(c[b][n]=o);for(s=0;s<this.sc.length;s++)this.sc[s].check()}},this.check(!0)},s=a._gsDefine=function(a,b,c,d){return new r(a,b,c,d)},t=l._class=function(a,b,c){return b=b||function(){},s(a,[],function(){return b},c),b};s.globals=e;var u=[0,0,1,1],v=t("easing.Ease",function(a,b,c,d){this._func=a,this._type=c||0,this._power=d||0,this._params=b?u.concat(b):u},!0),w=v.map={},x=v.register=function(a,b,c,d){for(var e,f,g,h,i=b.split(","),j=i.length,k=(c||"easeIn,easeOut,easeInOut").split(",");--j>-1;)for(f=i[j],e=d?t("easing."+f,null,!0):l.easing[f]||{},g=k.length;--g>-1;)h=k[g],w[f+"."+h]=w[h+f]=e[h]=a.getRatio?a:a[h]||new a};for(h=v.prototype,h._calcEnd=!1,h.getRatio=function(a){if(this._func)return this._params[0]=a,this._func.apply(null,this._params);var b=this._type,c=this._power,d=1===b?1-a:2===b?a:.5>a?2*a:2*(1-a);return 1===c?d*=d:2===c?d*=d*d:3===c?d*=d*d*d:4===c&&(d*=d*d*d*d),1===b?1-d:2===b?d:.5>a?d/2:1-d/2},f=["Linear","Quad","Cubic","Quart","Quint,Strong"],g=f.length;--g>-1;)h=f[g]+",Power"+g,x(new v(null,null,1,g),h,"easeOut",!0),x(new v(null,null,2,g),h,"easeIn"+(0===g?",easeNone":"")),x(new v(null,null,3,g),h,"easeInOut");w.linear=l.easing.Linear.easeIn,w.swing=l.easing.Quad.easeInOut;var y=t("events.EventDispatcher",function(a){this._listeners={},this._eventTarget=a||this});h=y.prototype,h.addEventListener=function(a,b,c,d,e){e=e||0;var f,g,h=this._listeners[a],k=0;for(this!==i||j||i.wake(),null==h&&(this._listeners[a]=h=[]),g=h.length;--g>-1;)f=h[g],f.c===b&&f.s===c?h.splice(g,1):0===k&&f.pr<e&&(k=g+1);h.splice(k,0,{c:b,s:c,up:d,pr:e})},h.removeEventListener=function(a,b){var c,d=this._listeners[a];if(d)for(c=d.length;--c>-1;)if(d[c].c===b)return void d.splice(c,1)},h.dispatchEvent=function(a){var b,c,d,e=this._listeners[a];if(e)for(b=e.length,b>1&&(e=e.slice(0)),c=this._eventTarget;--b>-1;)d=e[b],d&&(d.up?d.c.call(d.s||c,{type:a,target:c}):d.c.call(d.s||c))};var z=a.requestAnimationFrame,A=a.cancelAnimationFrame,B=Date.now||function(){return(new Date).getTime()},C=B();for(f=["ms","moz","webkit","o"],g=f.length;--g>-1&&!z;)z=a[f[g]+"RequestAnimationFrame"],A=a[f[g]+"CancelAnimationFrame"]||a[f[g]+"CancelRequestAnimationFrame"];t("Ticker",function(a,b){var c,e,f,g,h,k=this,l=B(),n=b!==!1&&z?"auto":!1,p=500,q=33,r="tick",s=function(a){var b,d,i=B()-C;i>p&&(l+=i-q),C+=i,k.time=(C-l)/1e3,b=k.time-h,(!c||b>0||a===!0)&&(k.frame++,h+=b+(b>=g?.004:g-b),d=!0),a!==!0&&(f=e(s)),d&&k.dispatchEvent(r)};y.call(k),k.time=k.frame=0,k.tick=function(){s(!0)},k.lagSmoothing=function(a,b){p=a||1/m,q=Math.min(b,p,0)},k.sleep=function(){null!=f&&(n&&A?A(f):clearTimeout(f),e=o,f=null,k===i&&(j=!1))},k.wake=function(a){null!==f?k.sleep():a?l+=-C+(C=B()):k.frame>10&&(C=B()-p+5),e=0===c?o:n&&z?z:function(a){return setTimeout(a,1e3*(h-k.time)+1|0)},k===i&&(j=!0),s(2)},k.fps=function(a){return arguments.length?(c=a,g=1/(c||60),h=this.time+g,void k.wake()):c},k.useRAF=function(a){return arguments.length?(k.sleep(),n=a,void k.fps(c)):n},k.fps(a),setTimeout(function(){"auto"===n&&k.frame<5&&"hidden"!==d.visibilityState&&k.useRAF(!1)},1500)}),h=l.Ticker.prototype=new l.events.EventDispatcher,h.constructor=l.Ticker;var D=t("core.Animation",function(a,b){if(this.vars=b=b||{},this._duration=this._totalDuration=a||0,this._delay=Number(b.delay)||0,this._timeScale=1,this._active=b.immediateRender===!0,this.data=b.data,this._reversed=b.reversed===!0,W){j||i.wake();var c=this.vars.useFrames?V:W;c.add(this,c._time),this.vars.paused&&this.paused(!0)}});i=D.ticker=new l.Ticker,h=D.prototype,h._dirty=h._gc=h._initted=h._paused=!1,h._totalTime=h._time=0,h._rawPrevTime=-1,h._next=h._last=h._onUpdate=h._timeline=h.timeline=null,h._paused=!1;var E=function(){j&&B()-C>2e3&&i.wake(),setTimeout(E,2e3)};E(),h.play=function(a,b){return null!=a&&this.seek(a,b),this.reversed(!1).paused(!1)},h.pause=function(a,b){return null!=a&&this.seek(a,b),this.paused(!0)},h.resume=function(a,b){return null!=a&&this.seek(a,b),this.paused(!1)},h.seek=function(a,b){return this.totalTime(Number(a),b!==!1)},h.restart=function(a,b){return this.reversed(!1).paused(!1).totalTime(a?-this._delay:0,b!==!1,!0)},h.reverse=function(a,b){return null!=a&&this.seek(a||this.totalDuration(),b),this.reversed(!0).paused(!1)},h.render=function(a,b,c){},h.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},h.isActive=function(){var a,b=this._timeline,c=this._startTime;return!b||!this._gc&&!this._paused&&b.isActive()&&(a=b.rawTime(!0))>=c&&a<c+this.totalDuration()/this._timeScale},h._enabled=function(a,b){return j||i.wake(),this._gc=!a,this._active=this.isActive(),b!==!0&&(a&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!a&&this.timeline&&this._timeline._remove(this,!0)),!1},h._kill=function(a,b){return this._enabled(!1,!1)},h.kill=function(a,b){return this._kill(a,b),this},h._uncache=function(a){for(var b=a?this:this.timeline;b;)b._dirty=!0,b=b.timeline;return this},h._swapSelfInParams=function(a){for(var b=a.length,c=a.concat();--b>-1;)"{self}"===a[b]&&(c[b]=this);return c},h._callback=function(a){var b=this.vars,c=b[a],d=b[a+"Params"],e=b[a+"Scope"]||b.callbackScope||this,f=d?d.length:0;switch(f){case 0:c.call(e);break;case 1:c.call(e,d[0]);break;case 2:c.call(e,d[0],d[1]);break;default:c.apply(e,d)}},h.eventCallback=function(a,b,c,d){if("on"===(a||"").substr(0,2)){var e=this.vars;if(1===arguments.length)return e[a];null==b?delete e[a]:(e[a]=b,e[a+"Params"]=p(c)&&-1!==c.join("").indexOf("{self}")?this._swapSelfInParams(c):c,e[a+"Scope"]=d),"onUpdate"===a&&(this._onUpdate=b)}return this},h.delay=function(a){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+a-this._delay),this._delay=a,this):this._delay},h.duration=function(a){return arguments.length?(this._duration=this._totalDuration=a,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==a&&this.totalTime(this._totalTime*(a/this._duration),!0),this):(this._dirty=!1,this._duration)},h.totalDuration=function(a){return this._dirty=!1,arguments.length?this.duration(a):this._totalDuration},h.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(a>this._duration?this._duration:a,b)):this._time},h.totalTime=function(a,b,c){if(j||i.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>a&&!c&&(a+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var d=this._totalDuration,e=this._timeline;if(a>d&&!c&&(a=d),this._startTime=(this._paused?this._pauseTime:e._time)-(this._reversed?d-a:a)/this._timeScale,e._dirty||this._uncache(!1),e._timeline)for(;e._timeline;)e._timeline._time!==(e._startTime+e._totalTime)/e._timeScale&&e.totalTime(e._totalTime,!0),e=e._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==a||0===this._duration)&&(J.length&&Y(),this.render(a,b,!1),J.length&&Y())}return this},h.progress=h.totalProgress=function(a,b){var c=this.duration();return arguments.length?this.totalTime(c*a,b):c?this._time/c:this.ratio},h.startTime=function(a){return arguments.length?(a!==this._startTime&&(this._startTime=a,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,a-this._delay)),this):this._startTime},h.endTime=function(a){return this._startTime+(0!=a?this.totalDuration():this.duration())/this._timeScale},h.timeScale=function(a){if(!arguments.length)return this._timeScale;if(a=a||m,this._timeline&&this._timeline.smoothChildTiming){var b=this._pauseTime,c=b||0===b?b:this._timeline.totalTime();this._startTime=c-(c-this._startTime)*this._timeScale/a}return this._timeScale=a,this._uncache(!1)},h.reversed=function(a){return arguments.length?(a!=this._reversed&&(this._reversed=a,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},h.paused=function(a){if(!arguments.length)return this._paused;var b,c,d=this._timeline;return a!=this._paused&&d&&(j||a||i.wake(),b=d.rawTime(),c=b-this._pauseTime,!a&&d.smoothChildTiming&&(this._startTime+=c,this._uncache(!1)),this._pauseTime=a?b:null,this._paused=a,this._active=this.isActive(),!a&&0!==c&&this._initted&&this.duration()&&(b=d.smoothChildTiming?this._totalTime:(b-this._startTime)/this._timeScale,this.render(b,b===this._totalTime,!0))),this._gc&&!a&&this._enabled(!0,!1),this};var F=t("core.SimpleTimeline",function(a){D.call(this,0,a),this.autoRemoveChildren=this.smoothChildTiming=!0});h=F.prototype=new D,h.constructor=F,h.kill()._gc=!1,h._first=h._last=h._recent=null,h._sortChildren=!1,h.add=h.insert=function(a,b,c,d){var e,f;if(a._startTime=Number(b||0)+a._delay,a._paused&&this!==a._timeline&&(a._pauseTime=a._startTime+(this.rawTime()-a._startTime)/a._timeScale),a.timeline&&a.timeline._remove(a,!0),a.timeline=a._timeline=this,a._gc&&a._enabled(!0,!0),e=this._last,this._sortChildren)for(f=a._startTime;e&&e._startTime>f;)e=e._prev;return e?(a._next=e._next,e._next=a):(a._next=this._first,this._first=a),a._next?a._next._prev=a:this._last=a,a._prev=e,this._recent=a,this._timeline&&this._uncache(!0),this},h._remove=function(a,b){return a.timeline===this&&(b||a._enabled(!1,!0),a._prev?a._prev._next=a._next:this._first===a&&(this._first=a._next),a._next?a._next._prev=a._prev:this._last===a&&(this._last=a._prev),a._next=a._prev=a.timeline=null,a===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},h.render=function(a,b,c){var d,e=this._first;for(this._totalTime=this._time=this._rawPrevTime=a;e;)d=e._next,(e._active||a>=e._startTime&&!e._paused)&&(e._reversed?e.render((e._dirty?e.totalDuration():e._totalDuration)-(a-e._startTime)*e._timeScale,b,c):e.render((a-e._startTime)*e._timeScale,b,c)),e=d},h.rawTime=function(){return j||i.wake(),this._totalTime};var G=t("TweenLite",function(b,c,d){if(D.call(this,c,d),this.render=G.prototype.render,null==b)throw"Cannot tween a null target.";this.target=b="string"!=typeof b?b:G.selector(b)||b;var e,f,g,h=b.jquery||b.length&&b!==a&&b[0]&&(b[0]===a||b[0].nodeType&&b[0].style&&!b.nodeType),i=this.vars.overwrite;if(this._overwrite=i=null==i?U[G.defaultOverwrite]:"number"==typeof i?i>>0:U[i],(h||b instanceof Array||b.push&&p(b))&&"number"!=typeof b[0])for(this._targets=g=n(b),this._propLookup=[],this._siblings=[],e=0;e<g.length;e++)f=g[e],f?"string"!=typeof f?f.length&&f!==a&&f[0]&&(f[0]===a||f[0].nodeType&&f[0].style&&!f.nodeType)?(g.splice(e--,1),this._targets=g=g.concat(n(f))):(this._siblings[e]=Z(f,this,!1),1===i&&this._siblings[e].length>1&&_(f,this,null,1,this._siblings[e])):(f=g[e--]=G.selector(f),"string"==typeof f&&g.splice(e+1,1)):g.splice(e--,1);else this._propLookup={},this._siblings=Z(b,this,!1),1===i&&this._siblings.length>1&&_(b,this,null,1,this._siblings);(this.vars.immediateRender||0===c&&0===this._delay&&this.vars.immediateRender!==!1)&&(this._time=-m,this.render(Math.min(0,-this._delay)))},!0),H=function(b){return b&&b.length&&b!==a&&b[0]&&(b[0]===a||b[0].nodeType&&b[0].style&&!b.nodeType)},I=function(a,b){var c,d={};for(c in a)T[c]||c in b&&"transform"!==c&&"x"!==c&&"y"!==c&&"width"!==c&&"height"!==c&&"className"!==c&&"border"!==c||!(!Q[c]||Q[c]&&Q[c]._autoCSS)||(d[c]=a[c],delete a[c]);a.css=d};h=G.prototype=new D,h.constructor=G,h.kill()._gc=!1,h.ratio=0,h._firstPT=h._targets=h._overwrittenProps=h._startAt=null,h._notifyPluginsOfEnabled=h._lazy=!1,G.version="1.19.1",G.defaultEase=h._ease=new v(null,null,1,1),G.defaultOverwrite="auto",G.ticker=i,G.autoSleep=120,G.lagSmoothing=function(a,b){i.lagSmoothing(a,b)},G.selector=a.$||a.jQuery||function(b){var c=a.$||a.jQuery;return c?(G.selector=c,c(b)):"undefined"==typeof d?b:d.querySelectorAll?d.querySelectorAll(b):d.getElementById("#"===b.charAt(0)?b.substr(1):b)};var J=[],K={},L=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,M=function(a){for(var b,c=this._firstPT,d=1e-6;c;)b=c.blob?1===a?this.end:a?this.join(""):this.start:c.c*a+c.s,c.m?b=c.m(b,this._target||c.t):d>b&&b>-d&&!c.blob&&(b=0),c.f?c.fp?c.t[c.p](c.fp,b):c.t[c.p](b):c.t[c.p]=b,c=c._next},N=function(a,b,c,d){var e,f,g,h,i,j,k,l=[],m=0,n="",o=0;for(l.start=a,l.end=b,a=l[0]=a+"",b=l[1]=b+"",c&&(c(l),a=l[0],b=l[1]),l.length=0,e=a.match(L)||[],f=b.match(L)||[],d&&(d._next=null,d.blob=1,l._firstPT=l._applyPT=d),i=f.length,h=0;i>h;h++)k=f[h],j=b.substr(m,b.indexOf(k,m)-m),n+=j||!h?j:",",m+=j.length,o?o=(o+1)%5:"rgba("===j.substr(-5)&&(o=1),k===e[h]||e.length<=h?n+=k:(n&&(l.push(n),n=""),g=parseFloat(e[h]),l.push(g),l._firstPT={_next:l._firstPT,t:l,p:l.length-1,s:g,c:("="===k.charAt(1)?parseInt(k.charAt(0)+"1",10)*parseFloat(k.substr(2)):parseFloat(k)-g)||0,f:0,m:o&&4>o?Math.round:0}),m+=k.length;return n+=b.substr(m),n&&l.push(n),l.setRatio=M,l},O=function(a,b,c,d,e,f,g,h,i){"function"==typeof d&&(d=d(i||0,a));var j,k=typeof a[b],l="function"!==k?"":b.indexOf("set")||"function"!=typeof a["get"+b.substr(3)]?b:"get"+b.substr(3),m="get"!==c?c:l?g?a[l](g):a[l]():a[b],n="string"==typeof d&&"="===d.charAt(1),o={t:a,p:b,s:m,f:"function"===k,pg:0,n:e||b,m:f?"function"==typeof f?f:Math.round:0,pr:0,c:n?parseInt(d.charAt(0)+"1",10)*parseFloat(d.substr(2)):parseFloat(d)-m||0};return("number"!=typeof m||"number"!=typeof d&&!n)&&(g||isNaN(m)||!n&&isNaN(d)||"boolean"==typeof m||"boolean"==typeof d?(o.fp=g,j=N(m,n?o.s+o.c:d,h||G.defaultStringFilter,o),o={t:j,p:"setRatio",s:0,c:1,f:2,pg:0,n:e||b,pr:0,m:0}):(o.s=parseFloat(m),n||(o.c=parseFloat(d)-o.s||0))),o.c?((o._next=this._firstPT)&&(o._next._prev=o),this._firstPT=o,o):void 0},P=G._internals={isArray:p,isSelector:H,lazyTweens:J,blobDif:N},Q=G._plugins={},R=P.tweenLookup={},S=0,T=P.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1,stringFilter:1,id:1},U={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},V=D._rootFramesTimeline=new F,W=D._rootTimeline=new F,X=30,Y=P.lazyRender=function(){var a,b=J.length;for(K={};--b>-1;)a=J[b],a&&a._lazy!==!1&&(a.render(a._lazy[0],a._lazy[1],!0),a._lazy=!1);J.length=0};W._startTime=i.time,V._startTime=i.frame,W._active=V._active=!0,setTimeout(Y,1),D._updateRoot=G.render=function(){var a,b,c;if(J.length&&Y(),W.render((i.time-W._startTime)*W._timeScale,!1,!1),V.render((i.frame-V._startTime)*V._timeScale,!1,!1),J.length&&Y(),i.frame>=X){X=i.frame+(parseInt(G.autoSleep,10)||120);for(c in R){for(b=R[c].tweens,a=b.length;--a>-1;)b[a]._gc&&b.splice(a,1);0===b.length&&delete R[c]}if(c=W._first,(!c||c._paused)&&G.autoSleep&&!V._first&&1===i._listeners.tick.length){for(;c&&c._paused;)c=c._next;c||i.sleep()}}},i.addEventListener("tick",D._updateRoot);var Z=function(a,b,c){var d,e,f=a._gsTweenID;if(R[f||(a._gsTweenID=f="t"+S++)]||(R[f]={target:a,tweens:[]}),b&&(d=R[f].tweens,d[e=d.length]=b,c))for(;--e>-1;)d[e]===b&&d.splice(e,1);return R[f].tweens},$=function(a,b,c,d){var e,f,g=a.vars.onOverwrite;return g&&(e=g(a,b,c,d)),g=G.onOverwrite,g&&(f=g(a,b,c,d)),e!==!1&&f!==!1},_=function(a,b,c,d,e){var f,g,h,i;if(1===d||d>=4){for(i=e.length,f=0;i>f;f++)if((h=e[f])!==b)h._gc||h._kill(null,a,b)&&(g=!0);else if(5===d)break;return g}var j,k=b._startTime+m,l=[],n=0,o=0===b._duration;for(f=e.length;--f>-1;)(h=e[f])===b||h._gc||h._paused||(h._timeline!==b._timeline?(j=j||aa(b,0,o),0===aa(h,j,o)&&(l[n++]=h)):h._startTime<=k&&h._startTime+h.totalDuration()/h._timeScale>k&&((o||!h._initted)&&k-h._startTime<=2e-10||(l[n++]=h)));for(f=n;--f>-1;)if(h=l[f],2===d&&h._kill(c,a,b)&&(g=!0),2!==d||!h._firstPT&&h._initted){if(2!==d&&!$(h,b))continue;h._enabled(!1,!1)&&(g=!0)}return g},aa=function(a,b,c){for(var d=a._timeline,e=d._timeScale,f=a._startTime;d._timeline;){if(f+=d._startTime,e*=d._timeScale,d._paused)return-100;d=d._timeline}return f/=e,f>b?f-b:c&&f===b||!a._initted&&2*m>f-b?m:(f+=a.totalDuration()/a._timeScale/e)>b+m?0:f-b-m};h._init=function(){var a,b,c,d,e,f,g=this.vars,h=this._overwrittenProps,i=this._duration,j=!!g.immediateRender,k=g.ease;if(g.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),e={};for(d in g.startAt)e[d]=g.startAt[d];if(e.overwrite=!1,e.immediateRender=!0,e.lazy=j&&g.lazy!==!1,e.startAt=e.delay=null,this._startAt=G.to(this.target,0,e),j)if(this._time>0)this._startAt=null;else if(0!==i)return}else if(g.runBackwards&&0!==i)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{0!==this._time&&(j=!1),c={};for(d in g)T[d]&&"autoCSS"!==d||(c[d]=g[d]);if(c.overwrite=0,c.data="isFromStart",c.lazy=j&&g.lazy!==!1,c.immediateRender=j,this._startAt=G.to(this.target,0,c),j){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=k=k?k instanceof v?k:"function"==typeof k?new v(k,g.easeParams):w[k]||G.defaultEase:G.defaultEase,g.easeParams instanceof Array&&k.config&&(this._ease=k.config.apply(k,g.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(f=this._targets.length,a=0;f>a;a++)this._initProps(this._targets[a],this._propLookup[a]={},this._siblings[a],h?h[a]:null,a)&&(b=!0);else b=this._initProps(this.target,this._propLookup,this._siblings,h,0);if(b&&G._onPluginEvent("_onInitAllProps",this),h&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),g.runBackwards)for(c=this._firstPT;c;)c.s+=c.c,c.c=-c.c,c=c._next;this._onUpdate=g.onUpdate,this._initted=!0},h._initProps=function(b,c,d,e,f){var g,h,i,j,k,l;if(null==b)return!1;K[b._gsTweenID]&&Y(),this.vars.css||b.style&&b!==a&&b.nodeType&&Q.css&&this.vars.autoCSS!==!1&&I(this.vars,b);for(g in this.vars)if(l=this.vars[g],T[g])l&&(l instanceof Array||l.push&&p(l))&&-1!==l.join("").indexOf("{self}")&&(this.vars[g]=l=this._swapSelfInParams(l,this));else if(Q[g]&&(j=new Q[g])._onInitTween(b,this.vars[g],this,f)){for(this._firstPT=k={_next:this._firstPT,t:j,p:"setRatio",s:0,c:1,f:1,n:g,pg:1,pr:j._priority,m:0},h=j._overwriteProps.length;--h>-1;)c[j._overwriteProps[h]]=this._firstPT;(j._priority||j._onInitAllProps)&&(i=!0),(j._onDisable||j._onEnable)&&(this._notifyPluginsOfEnabled=!0),k._next&&(k._next._prev=k)}else c[g]=O.call(this,b,g,"get",l,g,0,null,this.vars.stringFilter,f);return e&&this._kill(e,b)?this._initProps(b,c,d,e,f):this._overwrite>1&&this._firstPT&&d.length>1&&_(b,this,c,this._overwrite,d)?(this._kill(c,b),this._initProps(b,c,d,e,f)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(K[b._gsTweenID]=!0),i)},h.render=function(a,b,c){var d,e,f,g,h=this._time,i=this._duration,j=this._rawPrevTime;if(a>=i-1e-7&&a>=0)this._totalTime=this._time=i,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(d=!0,e="onComplete",c=c||this._timeline.autoRemoveChildren),0===i&&(this._initted||!this.vars.lazy||c)&&(this._startTime===this._timeline._duration&&(a=0),(0>j||0>=a&&a>=-1e-7||j===m&&"isPause"!==this.data)&&j!==a&&(c=!0,j>m&&(e="onReverseComplete")),this._rawPrevTime=g=!b||a||j===a?a:m);else if(1e-7>a)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==h||0===i&&j>0)&&(e="onReverseComplete",d=this._reversed),0>a&&(this._active=!1,0===i&&(this._initted||!this.vars.lazy||c)&&(j>=0&&(j!==m||"isPause"!==this.data)&&(c=!0),this._rawPrevTime=g=!b||a||j===a?a:m)),this._initted||(c=!0);else if(this._totalTime=this._time=a,this._easeType){var k=a/i,l=this._easeType,n=this._easePower;(1===l||3===l&&k>=.5)&&(k=1-k),3===l&&(k*=2),1===n?k*=k:2===n?k*=k*k:3===n?k*=k*k*k:4===n&&(k*=k*k*k*k),1===l?this.ratio=1-k:2===l?this.ratio=k:.5>a/i?this.ratio=k/2:this.ratio=1-k/2}else this.ratio=this._ease.getRatio(a/i);if(this._time!==h||c){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!c&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=h,this._rawPrevTime=j,J.push(this),void(this._lazy=[a,b]);this._time&&!d?this.ratio=this._ease.getRatio(this._time/i):d&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==h&&a>=0&&(this._active=!0),0===h&&(this._startAt&&(a>=0?this._startAt.render(a,b,c):e||(e="_dummyGS")),this.vars.onStart&&(0!==this._time||0===i)&&(b||this._callback("onStart"))),f=this._firstPT;f;)f.f?f.t[f.p](f.c*this.ratio+f.s):f.t[f.p]=f.c*this.ratio+f.s,f=f._next;this._onUpdate&&(0>a&&this._startAt&&a!==-1e-4&&this._startAt.render(a,b,c),b||(this._time!==h||d||c)&&this._callback("onUpdate")),e&&(!this._gc||c)&&(0>a&&this._startAt&&!this._onUpdate&&a!==-1e-4&&this._startAt.render(a,b,c),d&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[e]&&this._callback(e),0===i&&this._rawPrevTime===m&&g!==m&&(this._rawPrevTime=0))}},h._kill=function(a,b,c){if("all"===a&&(a=null),null==a&&(null==b||b===this.target))return this._lazy=!1,this._enabled(!1,!1);b="string"!=typeof b?b||this._targets||this.target:G.selector(b)||b;var d,e,f,g,h,i,j,k,l,m=c&&this._time&&c._startTime===this._startTime&&this._timeline===c._timeline;if((p(b)||H(b))&&"number"!=typeof b[0])for(d=b.length;--d>-1;)this._kill(a,b[d],c)&&(i=!0);else{if(this._targets){for(d=this._targets.length;--d>-1;)if(b===this._targets[d]){h=this._propLookup[d]||{},this._overwrittenProps=this._overwrittenProps||[],e=this._overwrittenProps[d]=a?this._overwrittenProps[d]||{}:"all";break}}else{if(b!==this.target)return!1;h=this._propLookup,e=this._overwrittenProps=a?this._overwrittenProps||{}:"all"}if(h){if(j=a||h,k=a!==e&&"all"!==e&&a!==h&&("object"!=typeof a||!a._tempKill),c&&(G.onOverwrite||this.vars.onOverwrite)){for(f in j)h[f]&&(l||(l=[]),l.push(f));if((l||!a)&&!$(this,c,b,l))return!1}for(f in j)(g=h[f])&&(m&&(g.f?g.t[g.p](g.s):g.t[g.p]=g.s,i=!0),g.pg&&g.t._kill(j)&&(i=!0),g.pg&&0!==g.t._overwriteProps.length||(g._prev?g._prev._next=g._next:g===this._firstPT&&(this._firstPT=g._next),g._next&&(g._next._prev=g._prev),g._next=g._prev=null),delete h[f]),k&&(e[f]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return i},h.invalidate=function(){return this._notifyPluginsOfEnabled&&G._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],D.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-m,this.render(Math.min(0,-this._delay))),this},h._enabled=function(a,b){if(j||i.wake(),a&&this._gc){var c,d=this._targets;if(d)for(c=d.length;--c>-1;)this._siblings[c]=Z(d[c],this,!0);else this._siblings=Z(this.target,this,!0)}return D.prototype._enabled.call(this,a,b),this._notifyPluginsOfEnabled&&this._firstPT?G._onPluginEvent(a?"_onEnable":"_onDisable",this):!1},G.to=function(a,b,c){return new G(a,b,c)},G.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,new G(a,b,c)},G.fromTo=function(a,b,c,d){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,new G(a,b,d)},G.delayedCall=function(a,b,c,d,e){return new G(b,0,{delay:a,onComplete:b,onCompleteParams:c,callbackScope:d,onReverseComplete:b,onReverseCompleteParams:c,immediateRender:!1,lazy:!1,useFrames:e,overwrite:0})},G.set=function(a,b){return new G(a,0,b)},G.getTweensOf=function(a,b){if(null==a)return[];a="string"!=typeof a?a:G.selector(a)||a;var c,d,e,f;if((p(a)||H(a))&&"number"!=typeof a[0]){for(c=a.length,d=[];--c>-1;)d=d.concat(G.getTweensOf(a[c],b));for(c=d.length;--c>-1;)for(f=d[c],e=c;--e>-1;)f===d[e]&&d.splice(c,1)}else for(d=Z(a).concat(),c=d.length;--c>-1;)(d[c]._gc||b&&!d[c].isActive())&&d.splice(c,1);return d},G.killTweensOf=G.killDelayedCallsTo=function(a,b,c){"object"==typeof b&&(c=b,b=!1);for(var d=G.getTweensOf(a,b),e=d.length;--e>-1;)d[e]._kill(c,a)};var ba=t("plugins.TweenPlugin",function(a,b){this._overwriteProps=(a||"").split(","),this._propName=this._overwriteProps[0],this._priority=b||0,this._super=ba.prototype},!0);if(h=ba.prototype,ba.version="1.19.0",ba.API=2,h._firstPT=null,h._addTween=O,h.setRatio=M,h._kill=function(a){var b,c=this._overwriteProps,d=this._firstPT;if(null!=a[this._propName])this._overwriteProps=[];else for(b=c.length;--b>-1;)null!=a[c[b]]&&c.splice(b,1);for(;d;)null!=a[d.n]&&(d._next&&(d._next._prev=d._prev),d._prev?(d._prev._next=d._next,d._prev=null):this._firstPT===d&&(this._firstPT=d._next)),d=d._next;return!1},h._mod=h._roundProps=function(a){for(var b,c=this._firstPT;c;)b=a[this._propName]||null!=c.n&&a[c.n.split(this._propName+"_").join("")],b&&"function"==typeof b&&(2===c.f?c.t._applyPT.m=b:c.m=b),c=c._next},G._onPluginEvent=function(a,b){var c,d,e,f,g,h=b._firstPT;if("_onInitAllProps"===a){for(;h;){for(g=h._next,d=e;d&&d.pr>h.pr;)d=d._next;(h._prev=d?d._prev:f)?h._prev._next=h:e=h,(h._next=d)?d._prev=h:f=h,h=g}h=b._firstPT=e}for(;h;)h.pg&&"function"==typeof h.t[a]&&h.t[a]()&&(c=!0),h=h._next;return c},ba.activate=function(a){for(var b=a.length;--b>-1;)a[b].API===ba.API&&(Q[(new a[b])._propName]=a[b]);return!0},s.plugin=function(a){if(!(a&&a.propName&&a.init&&a.API))throw"illegal plugin definition.";var b,c=a.propName,d=a.priority||0,e=a.overwriteProps,f={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_mod",mod:"_mod",initAll:"_onInitAllProps"},g=t("plugins."+c.charAt(0).toUpperCase()+c.substr(1)+"Plugin",function(){ba.call(this,c,d),this._overwriteProps=e||[]},a.global===!0),h=g.prototype=new ba(c);h.constructor=g,g.API=a.API;for(b in f)"function"==typeof a[b]&&(h[f[b]]=a[b]);return g.version=a.version,ba.activate([g]),g},f=a._gsQueue){for(g=0;g<f.length;g++)f[g]();for(h in q)q[h].func||a.console.log("GSAP encountered missing dependency: "+h)}j=!1}}("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenLite");
/* TIME LINE LITE */
/*!
 * VERSION: 1.17.0
 * DATE: 2015-05-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var s=function(t){e.call(this,t),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var i,s,r=this.vars;for(s in r)i=r[s],h(i)&&-1!==i.join("").indexOf("{self}")&&(r[s]=this._swapSelfInParams(i));h(r.tweens)&&this.add(r.tweens,0,r.align,r.stagger)},r=1e-10,n=i._internals,a=s._internals={},o=n.isSelector,h=n.isArray,l=n.lazyTweens,_=n.lazyRender,u=[],f=_gsScope._gsDefine.globals,c=function(t){var e,i={};for(e in t)i[e]=t[e];return i},p=a.pauseCallback=function(t,e,i,s){var n,a=t._timeline,o=a._totalTime,h=t._startTime,l=0>t._rawPrevTime||0===t._rawPrevTime&&a._reversed,_=l?0:r,f=l?r:0;if(e||!this._forcingPlayhead){for(a.pause(h),n=t._prev;n&&n._startTime===h;)n._rawPrevTime=f,n=n._prev;for(n=t._next;n&&n._startTime===h;)n._rawPrevTime=_,n=n._next;e&&e.apply(s||a.vars.callbackScope||a,i||u),(this._forcingPlayhead||!a._paused)&&a.seek(o)}},m=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},d=s.prototype=new e;return s.version="1.17.0",d.constructor=s,d.kill()._gc=d._forcingPlayhead=!1,d.to=function(t,e,s,r){var n=s.repeat&&f.TweenMax||i;return e?this.add(new n(t,e,s),r):this.set(t,s,r)},d.from=function(t,e,s,r){return this.add((s.repeat&&f.TweenMax||i).from(t,e,s),r)},d.fromTo=function(t,e,s,r,n){var a=r.repeat&&f.TweenMax||i;return e?this.add(a.fromTo(t,e,s,r),n):this.set(t,r,n)},d.staggerTo=function(t,e,r,n,a,h,l,_){var u,f=new s({onComplete:h,onCompleteParams:l,callbackScope:_,smoothChildTiming:this.smoothChildTiming});for("string"==typeof t&&(t=i.selector(t)||t),t=t||[],o(t)&&(t=m(t)),n=n||0,0>n&&(t=m(t),t.reverse(),n*=-1),u=0;t.length>u;u++)r.startAt&&(r.startAt=c(r.startAt)),f.to(t[u],e,c(r),u*n);return this.add(f,a)},d.staggerFrom=function(t,e,i,s,r,n,a,o){return i.immediateRender=0!=i.immediateRender,i.runBackwards=!0,this.staggerTo(t,e,i,s,r,n,a,o)},d.staggerFromTo=function(t,e,i,s,r,n,a,o,h){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,this.staggerTo(t,e,s,r,n,a,o,h)},d.call=function(t,e,s,r){return this.add(i.delayedCall(0,t,e,s),r)},d.set=function(t,e,s){return s=this._parseTimeOrLabel(s,0,!0),null==e.immediateRender&&(e.immediateRender=s===this._time&&!this._paused),this.add(new i(t,0,e),s)},s.exportRoot=function(t,e){t=t||{},null==t.smoothChildTiming&&(t.smoothChildTiming=!0);var r,n,a=new s(t),o=a._timeline;for(null==e&&(e=!0),o._remove(a,!0),a._startTime=0,a._rawPrevTime=a._time=a._totalTime=o._time,r=o._first;r;)n=r._next,e&&r instanceof i&&r.target===r.vars.onComplete||a.add(r,r._startTime-r._delay),r=n;return o.add(a,0),a},d.add=function(r,n,a,o){var l,_,u,f,c,p;if("number"!=typeof n&&(n=this._parseTimeOrLabel(n,0,!0,r)),!(r instanceof t)){if(r instanceof Array||r&&r.push&&h(r)){for(a=a||"normal",o=o||0,l=n,_=r.length,u=0;_>u;u++)h(f=r[u])&&(f=new s({tweens:f})),this.add(f,l),"string"!=typeof f&&"function"!=typeof f&&("sequence"===a?l=f._startTime+f.totalDuration()/f._timeScale:"start"===a&&(f._startTime-=f.delay())),l+=o;return this._uncache(!0)}if("string"==typeof r)return this.addLabel(r,n);if("function"!=typeof r)throw"Cannot add "+r+" into the timeline; it is not a tween, timeline, function, or string.";r=i.delayedCall(0,r)}if(e.prototype.add.call(this,r,n),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(c=this,p=c.rawTime()>r._startTime;c._timeline;)p&&c._timeline.smoothChildTiming?c.totalTime(c._totalTime,!0):c._gc&&c._enabled(!0,!1),c=c._timeline;return this},d.remove=function(e){if(e instanceof t)return this._remove(e,!1);if(e instanceof Array||e&&e.push&&h(e)){for(var i=e.length;--i>-1;)this.remove(e[i]);return this}return"string"==typeof e?this.removeLabel(e):this.kill(null,e)},d._remove=function(t,i){e.prototype._remove.call(this,t,i);var s=this._last;return s?this._time>s._startTime+s._totalDuration/s._timeScale&&(this._time=this.duration(),this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},d.append=function(t,e){return this.add(t,this._parseTimeOrLabel(null,e,!0,t))},d.insert=d.insertMultiple=function(t,e,i,s){return this.add(t,e||0,i,s)},d.appendMultiple=function(t,e,i,s){return this.add(t,this._parseTimeOrLabel(null,e,!0,t),i,s)},d.addLabel=function(t,e){return this._labels[t]=this._parseTimeOrLabel(e),this},d.addPause=function(t,e,s,r){var n=i.delayedCall(0,p,["{self}",e,s,r],this);return n.data="isPause",this.add(n,t)},d.removeLabel=function(t){return delete this._labels[t],this},d.getLabelTime=function(t){return null!=this._labels[t]?this._labels[t]:-1},d._parseTimeOrLabel=function(e,i,s,r){var n;if(r instanceof t&&r.timeline===this)this.remove(r);else if(r&&(r instanceof Array||r.push&&h(r)))for(n=r.length;--n>-1;)r[n]instanceof t&&r[n].timeline===this&&this.remove(r[n]);if("string"==typeof i)return this._parseTimeOrLabel(i,s&&"number"==typeof e&&null==this._labels[i]?e-this.duration():0,s);if(i=i||0,"string"!=typeof e||!isNaN(e)&&null==this._labels[e])null==e&&(e=this.duration());else{if(n=e.indexOf("="),-1===n)return null==this._labels[e]?s?this._labels[e]=this.duration()+i:i:this._labels[e]+i;i=parseInt(e.charAt(n-1)+"1",10)*Number(e.substr(n+1)),e=n>1?this._parseTimeOrLabel(e.substr(0,n-1),0,s):this.duration()}return Number(e)+i},d.seek=function(t,e){return this.totalTime("number"==typeof t?t:this._parseTimeOrLabel(t),e!==!1)},d.stop=function(){return this.paused(!0)},d.gotoAndPlay=function(t,e){return this.play(t,e)},d.gotoAndStop=function(t,e){return this.pause(t,e)},d.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var s,n,a,o,h,u=this._dirty?this.totalDuration():this._totalDuration,f=this._time,c=this._startTime,p=this._timeScale,m=this._paused;if(t>=u)this._totalTime=this._time=u,this._reversed||this._hasPausedChild()||(n=!0,o="onComplete",h=!!this._timeline.autoRemoveChildren,0===this._duration&&(0===t||0>this._rawPrevTime||this._rawPrevTime===r)&&this._rawPrevTime!==t&&this._first&&(h=!0,this._rawPrevTime>r&&(o="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,t=u+1e-4;else if(1e-7>t)if(this._totalTime=this._time=0,(0!==f||0===this._duration&&this._rawPrevTime!==r&&(this._rawPrevTime>0||0>t&&this._rawPrevTime>=0))&&(o="onReverseComplete",n=this._reversed),0>t)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(h=n=!0,o="onReverseComplete"):this._rawPrevTime>=0&&this._first&&(h=!0),this._rawPrevTime=t;else{if(this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,0===t&&n)for(s=this._first;s&&0===s._startTime;)s._duration||(n=!1),s=s._next;t=0,this._initted||(h=!0)}else this._totalTime=this._time=this._rawPrevTime=t;if(this._time!==f&&this._first||i||h){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==f&&t>0&&(this._active=!0),0===f&&this.vars.onStart&&0!==this._time&&(e||this._callback("onStart")),this._time>=f)for(s=this._first;s&&(a=s._next,!this._paused||m);)(s._active||s._startTime<=this._time&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;else for(s=this._last;s&&(a=s._prev,!this._paused||m);)(s._active||f>=s._startTime&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=a;this._onUpdate&&(e||(l.length&&_(),this._callback("onUpdate"))),o&&(this._gc||(c===this._startTime||p!==this._timeScale)&&(0===this._time||u>=this.totalDuration())&&(n&&(l.length&&_(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[o]&&this._callback(o)))}},d._hasPausedChild=function(){for(var t=this._first;t;){if(t._paused||t instanceof s&&t._hasPausedChild())return!0;t=t._next}return!1},d.getChildren=function(t,e,s,r){r=r||-9999999999;for(var n=[],a=this._first,o=0;a;)r>a._startTime||(a instanceof i?e!==!1&&(n[o++]=a):(s!==!1&&(n[o++]=a),t!==!1&&(n=n.concat(a.getChildren(!0,e,s)),o=n.length))),a=a._next;return n},d.getTweensOf=function(t,e){var s,r,n=this._gc,a=[],o=0;for(n&&this._enabled(!0,!0),s=i.getTweensOf(t),r=s.length;--r>-1;)(s[r].timeline===this||e&&this._contains(s[r]))&&(a[o++]=s[r]);return n&&this._enabled(!1,!0),a},d.recent=function(){return this._recent},d._contains=function(t){for(var e=t.timeline;e;){if(e===this)return!0;e=e.timeline}return!1},d.shiftChildren=function(t,e,i){i=i||0;for(var s,r=this._first,n=this._labels;r;)r._startTime>=i&&(r._startTime+=t),r=r._next;if(e)for(s in n)n[s]>=i&&(n[s]+=t);return this._uncache(!0)},d._kill=function(t,e){if(!t&&!e)return this._enabled(!1,!1);for(var i=e?this.getTweensOf(e):this.getChildren(!0,!0,!1),s=i.length,r=!1;--s>-1;)i[s]._kill(t,e)&&(r=!0);return r},d.clear=function(t){var e=this.getChildren(!1,!0,!0),i=e.length;for(this._time=this._totalTime=0;--i>-1;)e[i]._enabled(!1,!1);return t!==!1&&(this._labels={}),this._uncache(!0)},d.invalidate=function(){for(var e=this._first;e;)e.invalidate(),e=e._next;return t.prototype.invalidate.call(this)},d._enabled=function(t,i){if(t===this._gc)for(var s=this._first;s;)s._enabled(t,!0),s=s._next;return e.prototype._enabled.call(this,t,i)},d.totalTime=function(){this._forcingPlayhead=!0;var e=t.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,e},d.duration=function(t){return arguments.length?(0!==this.duration()&&0!==t&&this.timeScale(this._duration/t),this):(this._dirty&&this.totalDuration(),this._duration)},d.totalDuration=function(t){if(!arguments.length){if(this._dirty){for(var e,i,s=0,r=this._last,n=999999999999;r;)e=r._prev,r._dirty&&r.totalDuration(),r._startTime>n&&this._sortChildren&&!r._paused?this.add(r,r._startTime-r._delay):n=r._startTime,0>r._startTime&&!r._paused&&(s-=r._startTime,this._timeline.smoothChildTiming&&(this._startTime+=r._startTime/this._timeScale),this.shiftChildren(-r._startTime,!1,-9999999999),n=0),i=r._startTime+r._totalDuration/r._timeScale,i>s&&(s=i),r=e;this._duration=this._totalDuration=s,this._dirty=!1}return this._totalDuration}return 0!==this.totalDuration()&&0!==t&&this.timeScale(this._totalDuration/t),this},d.paused=function(e){if(!e)for(var i=this._first,s=this._time;i;)i._startTime===s&&"isPause"===i.data&&(i._rawPrevTime=0),i=i._next;return t.prototype.paused.apply(this,arguments)},d.usesFrames=function(){for(var e=this._timeline;e._timeline;)e=e._timeline;return e===t._rootFramesTimeline},d.rawTime=function(){return this._paused?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale},s},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(t){"use strict";var e=function(){return(_gsScope.GreenSockGlobals||_gsScope)[t]};"function"==typeof define&&define.amd?define(["TweenLite"],e):"undefined"!=typeof module&&module.exports&&(require("./TweenLite.js"),module.exports=e())}("TimelineLite");
/* EASING PLUGIN*/
/*!
 * VERSION: 1.15.5
 * DATE: 2016-07-08
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("easing.Back",["easing.Ease"],function(a){var b,c,d,e=_gsScope.GreenSockGlobals||_gsScope,f=e.com.greensock,g=2*Math.PI,h=Math.PI/2,i=f._class,j=function(b,c){var d=i("easing."+b,function(){},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,d},k=a.register||function(){},l=function(a,b,c,d,e){var f=i("easing."+a,{easeOut:new b,easeIn:new c,easeInOut:new d},!0);return k(f,a),f},m=function(a,b,c){this.t=a,this.v=b,c&&(this.next=c,c.prev=this,this.c=c.v-b,this.gap=c.t-a)},n=function(b,c){var d=i("easing."+b,function(a){this._p1=a||0===a?a:1.70158,this._p2=1.525*this._p1},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,e.config=function(a){return new d(a)},d},o=l("Back",n("BackOut",function(a){return(a-=1)*a*((this._p1+1)*a+this._p1)+1}),n("BackIn",function(a){return a*a*((this._p1+1)*a-this._p1)}),n("BackInOut",function(a){return(a*=2)<1?.5*a*a*((this._p2+1)*a-this._p2):.5*((a-=2)*a*((this._p2+1)*a+this._p2)+2)})),p=i("easing.SlowMo",function(a,b,c){b=b||0===b?b:.7,null==a?a=.7:a>1&&(a=1),this._p=1!==a?b:0,this._p1=(1-a)/2,this._p2=a,this._p3=this._p1+this._p2,this._calcEnd=c===!0},!0),q=p.prototype=new a;return q.constructor=p,q.getRatio=function(a){var b=a+(.5-a)*this._p;return a<this._p1?this._calcEnd?1-(a=1-a/this._p1)*a:b-(a=1-a/this._p1)*a*a*a*b:a>this._p3?this._calcEnd?1-(a=(a-this._p3)/this._p1)*a:b+(a-b)*(a=(a-this._p3)/this._p1)*a*a*a:this._calcEnd?1:b},p.ease=new p(.7,.7),q.config=p.config=function(a,b,c){return new p(a,b,c)},b=i("easing.SteppedEase",function(a){a=a||1,this._p1=1/a,this._p2=a+1},!0),q=b.prototype=new a,q.constructor=b,q.getRatio=function(a){return 0>a?a=0:a>=1&&(a=.999999999),(this._p2*a>>0)*this._p1},q.config=b.config=function(a){return new b(a)},c=i("easing.RoughEase",function(b){b=b||{};for(var c,d,e,f,g,h,i=b.taper||"none",j=[],k=0,l=0|(b.points||20),n=l,o=b.randomize!==!1,p=b.clamp===!0,q=b.template instanceof a?b.template:null,r="number"==typeof b.strength?.4*b.strength:.4;--n>-1;)c=o?Math.random():1/l*n,d=q?q.getRatio(c):c,"none"===i?e=r:"out"===i?(f=1-c,e=f*f*r):"in"===i?e=c*c*r:.5>c?(f=2*c,e=f*f*.5*r):(f=2*(1-c),e=f*f*.5*r),o?d+=Math.random()*e-.5*e:n%2?d+=.5*e:d-=.5*e,p&&(d>1?d=1:0>d&&(d=0)),j[k++]={x:c,y:d};for(j.sort(function(a,b){return a.x-b.x}),h=new m(1,1,null),n=l;--n>-1;)g=j[n],h=new m(g.x,g.y,h);this._prev=new m(0,0,0!==h.t?h:h.next)},!0),q=c.prototype=new a,q.constructor=c,q.getRatio=function(a){var b=this._prev;if(a>b.t){for(;b.next&&a>=b.t;)b=b.next;b=b.prev}else for(;b.prev&&a<=b.t;)b=b.prev;return this._prev=b,b.v+(a-b.t)/b.gap*b.c},q.config=function(a){return new c(a)},c.ease=new c,l("Bounce",j("BounceOut",function(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375}),j("BounceIn",function(a){return(a=1-a)<1/2.75?1-7.5625*a*a:2/2.75>a?1-(7.5625*(a-=1.5/2.75)*a+.75):2.5/2.75>a?1-(7.5625*(a-=2.25/2.75)*a+.9375):1-(7.5625*(a-=2.625/2.75)*a+.984375)}),j("BounceInOut",function(a){var b=.5>a;return a=b?1-2*a:2*a-1,a=1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375,b?.5*(1-a):.5*a+.5})),l("Circ",j("CircOut",function(a){return Math.sqrt(1-(a-=1)*a)}),j("CircIn",function(a){return-(Math.sqrt(1-a*a)-1)}),j("CircInOut",function(a){return(a*=2)<1?-.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1)})),d=function(b,c,d){var e=i("easing."+b,function(a,b){this._p1=a>=1?a:1,this._p2=(b||d)/(1>a?a:1),this._p3=this._p2/g*(Math.asin(1/this._p1)||0),this._p2=g/this._p2},!0),f=e.prototype=new a;return f.constructor=e,f.getRatio=c,f.config=function(a,b){return new e(a,b)},e},l("Elastic",d("ElasticOut",function(a){return this._p1*Math.pow(2,-10*a)*Math.sin((a-this._p3)*this._p2)+1},.3),d("ElasticIn",function(a){return-(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*this._p2))},.3),d("ElasticInOut",function(a){return(a*=2)<1?-.5*(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*this._p2)):this._p1*Math.pow(2,-10*(a-=1))*Math.sin((a-this._p3)*this._p2)*.5+1},.45)),l("Expo",j("ExpoOut",function(a){return 1-Math.pow(2,-10*a)}),j("ExpoIn",function(a){return Math.pow(2,10*(a-1))-.001}),j("ExpoInOut",function(a){return(a*=2)<1?.5*Math.pow(2,10*(a-1)):.5*(2-Math.pow(2,-10*(a-1)))})),l("Sine",j("SineOut",function(a){return Math.sin(a*h)}),j("SineIn",function(a){return-Math.cos(a*h)+1}),j("SineInOut",function(a){return-.5*(Math.cos(Math.PI*a)-1)})),i("easing.EaseLookup",{find:function(b){return a.map[b]}},!0),k(e.SlowMo,"SlowMo","ease,"),k(c,"RoughEase","ease,"),k(b,"SteppedEase","ease,"),o},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(){"use strict";var a=function(){return _gsScope.GreenSockGlobals||_gsScope};"function"==typeof define&&define.amd?define(["TweenLite"],a):"undefined"!=typeof module&&module.exports&&(require("../TweenLite.js"),module.exports=a())}();
/* CSS PLUGIN */
/*!
 * VERSION: 1.19.1
 * DATE: 2017-01-17
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(a,b){var c,d,e,f,g=function(){a.call(this,"css"),this._overwriteProps.length=0,this.setRatio=g.prototype.setRatio},h=_gsScope._gsDefine.globals,i={},j=g.prototype=new a("css");j.constructor=g,g.version="1.19.1",g.API=2,g.defaultTransformPerspective=0,g.defaultSkewType="compensated",g.defaultSmoothOrigin=!0,j="px",g.suffixMap={top:j,right:j,bottom:j,left:j,width:j,height:j,fontSize:j,padding:j,margin:j,perspective:j,lineHeight:""};var k,l,m,n,o,p,q,r,s=/(?:\-|\.|\b)(\d|\.|e\-)+/g,t=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,u=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,v=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,w=/(?:\d|\-|\+|=|#|\.)*/g,x=/opacity *= *([^)]*)/i,y=/opacity:([^;]*)/i,z=/alpha\(opacity *=.+?\)/i,A=/^(rgb|hsl)/,B=/([A-Z])/g,C=/-([a-z])/gi,D=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,E=function(a,b){return b.toUpperCase()},F=/(?:Left|Right|Width)/i,G=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,H=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,I=/,(?=[^\)]*(?:\(|$))/gi,J=/[\s,\(]/i,K=Math.PI/180,L=180/Math.PI,M={},N={style:{}},O=_gsScope.document||{createElement:function(){return N}},P=function(a,b){return O.createElementNS?O.createElementNS(b||"http://www.w3.org/1999/xhtml",a):O.createElement(a)},Q=P("div"),R=P("img"),S=g._internals={_specialProps:i},T=(_gsScope.navigator||{}).userAgent||"",U=function(){var a=T.indexOf("Android"),b=P("a");return m=-1!==T.indexOf("Safari")&&-1===T.indexOf("Chrome")&&(-1===a||parseFloat(T.substr(a+8,2))>3),o=m&&parseFloat(T.substr(T.indexOf("Version/")+8,2))<6,n=-1!==T.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(T)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(T))&&(p=parseFloat(RegExp.$1)),b?(b.style.cssText="top:1px;opacity:.55;",/^0.55/.test(b.style.opacity)):!1}(),V=function(a){return x.test("string"==typeof a?a:(a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100:1},W=function(a){_gsScope.console&&console.log(a)},X="",Y="",Z=function(a,b){b=b||Q;var c,d,e=b.style;if(void 0!==e[a])return a;for(a=a.charAt(0).toUpperCase()+a.substr(1),c=["O","Moz","ms","Ms","Webkit"],d=5;--d>-1&&void 0===e[c[d]+a];);return d>=0?(Y=3===d?"ms":c[d],X="-"+Y.toLowerCase()+"-",Y+a):null},$=O.defaultView?O.defaultView.getComputedStyle:function(){},_=g.getStyle=function(a,b,c,d,e){var f;return U||"opacity"!==b?(!d&&a.style[b]?f=a.style[b]:(c=c||$(a))?f=c[b]||c.getPropertyValue(b)||c.getPropertyValue(b.replace(B,"-$1").toLowerCase()):a.currentStyle&&(f=a.currentStyle[b]),null==e||f&&"none"!==f&&"auto"!==f&&"auto auto"!==f?f:e):V(a)},aa=S.convertToPixels=function(a,c,d,e,f){if("px"===e||!e)return d;if("auto"===e||!d)return 0;var h,i,j,k=F.test(c),l=a,m=Q.style,n=0>d,o=1===d;if(n&&(d=-d),o&&(d*=100),"%"===e&&-1!==c.indexOf("border"))h=d/100*(k?a.clientWidth:a.clientHeight);else{if(m.cssText="border:0 solid red;position:"+_(a,"position")+";line-height:0;","%"!==e&&l.appendChild&&"v"!==e.charAt(0)&&"rem"!==e)m[k?"borderLeftWidth":"borderTopWidth"]=d+e;else{if(l=a.parentNode||O.body,i=l._gsCache,j=b.ticker.frame,i&&k&&i.time===j)return i.width*d/100;m[k?"width":"height"]=d+e}l.appendChild(Q),h=parseFloat(Q[k?"offsetWidth":"offsetHeight"]),l.removeChild(Q),k&&"%"===e&&g.cacheWidths!==!1&&(i=l._gsCache=l._gsCache||{},i.time=j,i.width=h/d*100),0!==h||f||(h=aa(a,c,d,e,!0))}return o&&(h/=100),n?-h:h},ba=S.calculateOffset=function(a,b,c){if("absolute"!==_(a,"position",c))return 0;var d="left"===b?"Left":"Top",e=_(a,"margin"+d,c);return a["offset"+d]-(aa(a,b,parseFloat(e),e.replace(w,""))||0)},ca=function(a,b){var c,d,e,f={};if(b=b||$(a,null))if(c=b.length)for(;--c>-1;)e=b[c],(-1===e.indexOf("-transform")||Da===e)&&(f[e.replace(C,E)]=b.getPropertyValue(e));else for(c in b)(-1===c.indexOf("Transform")||Ca===c)&&(f[c]=b[c]);else if(b=a.currentStyle||a.style)for(c in b)"string"==typeof c&&void 0===f[c]&&(f[c.replace(C,E)]=b[c]);return U||(f.opacity=V(a)),d=Ra(a,b,!1),f.rotation=d.rotation,f.skewX=d.skewX,f.scaleX=d.scaleX,f.scaleY=d.scaleY,f.x=d.x,f.y=d.y,Fa&&(f.z=d.z,f.rotationX=d.rotationX,f.rotationY=d.rotationY,f.scaleZ=d.scaleZ),f.filters&&delete f.filters,f},da=function(a,b,c,d,e){var f,g,h,i={},j=a.style;for(g in c)"cssText"!==g&&"length"!==g&&isNaN(g)&&(b[g]!==(f=c[g])||e&&e[g])&&-1===g.indexOf("Origin")&&("number"==typeof f||"string"==typeof f)&&(i[g]="auto"!==f||"left"!==g&&"top"!==g?""!==f&&"auto"!==f&&"none"!==f||"string"!=typeof b[g]||""===b[g].replace(v,"")?f:0:ba(a,g),void 0!==j[g]&&(h=new sa(j,g,j[g],h)));if(d)for(g in d)"className"!==g&&(i[g]=d[g]);return{difs:i,firstMPT:h}},ea={width:["Left","Right"],height:["Top","Bottom"]},fa=["marginLeft","marginRight","marginTop","marginBottom"],ga=function(a,b,c){if("svg"===(a.nodeName+"").toLowerCase())return(c||$(a))[b]||0;if(a.getCTM&&Oa(a))return a.getBBox()[b]||0;var d=parseFloat("width"===b?a.offsetWidth:a.offsetHeight),e=ea[b],f=e.length;for(c=c||$(a,null);--f>-1;)d-=parseFloat(_(a,"padding"+e[f],c,!0))||0,d-=parseFloat(_(a,"border"+e[f]+"Width",c,!0))||0;return d},ha=function(a,b){if("contain"===a||"auto"===a||"auto auto"===a)return a+" ";(null==a||""===a)&&(a="0 0");var c,d=a.split(" "),e=-1!==a.indexOf("left")?"0%":-1!==a.indexOf("right")?"100%":d[0],f=-1!==a.indexOf("top")?"0%":-1!==a.indexOf("bottom")?"100%":d[1];if(d.length>3&&!b){for(d=a.split(", ").join(",").split(","),a=[],c=0;c<d.length;c++)a.push(ha(d[c]));return a.join(",")}return null==f?f="center"===e?"50%":"0":"center"===f&&(f="50%"),("center"===e||isNaN(parseFloat(e))&&-1===(e+"").indexOf("="))&&(e="50%"),a=e+" "+f+(d.length>2?" "+d[2]:""),b&&(b.oxp=-1!==e.indexOf("%"),b.oyp=-1!==f.indexOf("%"),b.oxr="="===e.charAt(1),b.oyr="="===f.charAt(1),b.ox=parseFloat(e.replace(v,"")),b.oy=parseFloat(f.replace(v,"")),b.v=a),b||a},ia=function(a,b){return"function"==typeof a&&(a=a(r,q)),"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2)):parseFloat(a)-parseFloat(b)||0},ja=function(a,b){return"function"==typeof a&&(a=a(r,q)),null==a?b:"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2))+b:parseFloat(a)||0},ka=function(a,b,c,d){var e,f,g,h,i,j=1e-6;return"function"==typeof a&&(a=a(r,q)),null==a?h=b:"number"==typeof a?h=a:(e=360,f=a.split("_"),i="="===a.charAt(1),g=(i?parseInt(a.charAt(0)+"1",10)*parseFloat(f[0].substr(2)):parseFloat(f[0]))*(-1===a.indexOf("rad")?1:L)-(i?0:b),f.length&&(d&&(d[c]=b+g),-1!==a.indexOf("short")&&(g%=e,g!==g%(e/2)&&(g=0>g?g+e:g-e)),-1!==a.indexOf("_cw")&&0>g?g=(g+9999999999*e)%e-(g/e|0)*e:-1!==a.indexOf("ccw")&&g>0&&(g=(g-9999999999*e)%e-(g/e|0)*e)),h=b+g),j>h&&h>-j&&(h=0),h},la={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},ma=function(a,b,c){return a=0>a?a+1:a>1?a-1:a,255*(1>6*a?b+(c-b)*a*6:.5>a?c:2>3*a?b+(c-b)*(2/3-a)*6:b)+.5|0},na=g.parseColor=function(a,b){var c,d,e,f,g,h,i,j,k,l,m;if(a)if("number"==typeof a)c=[a>>16,a>>8&255,255&a];else{if(","===a.charAt(a.length-1)&&(a=a.substr(0,a.length-1)),la[a])c=la[a];else if("#"===a.charAt(0))4===a.length&&(d=a.charAt(1),e=a.charAt(2),f=a.charAt(3),a="#"+d+d+e+e+f+f),a=parseInt(a.substr(1),16),c=[a>>16,a>>8&255,255&a];else if("hsl"===a.substr(0,3))if(c=m=a.match(s),b){if(-1!==a.indexOf("="))return a.match(t)}else g=Number(c[0])%360/360,h=Number(c[1])/100,i=Number(c[2])/100,e=.5>=i?i*(h+1):i+h-i*h,d=2*i-e,c.length>3&&(c[3]=Number(a[3])),c[0]=ma(g+1/3,d,e),c[1]=ma(g,d,e),c[2]=ma(g-1/3,d,e);else c=a.match(s)||la.transparent;c[0]=Number(c[0]),c[1]=Number(c[1]),c[2]=Number(c[2]),c.length>3&&(c[3]=Number(c[3]))}else c=la.black;return b&&!m&&(d=c[0]/255,e=c[1]/255,f=c[2]/255,j=Math.max(d,e,f),k=Math.min(d,e,f),i=(j+k)/2,j===k?g=h=0:(l=j-k,h=i>.5?l/(2-j-k):l/(j+k),g=j===d?(e-f)/l+(f>e?6:0):j===e?(f-d)/l+2:(d-e)/l+4,g*=60),c[0]=g+.5|0,c[1]=100*h+.5|0,c[2]=100*i+.5|0),c},oa=function(a,b){var c,d,e,f=a.match(pa)||[],g=0,h=f.length?"":a;for(c=0;c<f.length;c++)d=f[c],e=a.substr(g,a.indexOf(d,g)-g),g+=e.length+d.length,d=na(d,b),3===d.length&&d.push(1),h+=e+(b?"hsla("+d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:"rgba("+d.join(","))+")";return h+a.substr(g)},pa="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";for(j in la)pa+="|"+j+"\\b";pa=new RegExp(pa+")","gi"),g.colorStringFilter=function(a){var b,c=a[0]+a[1];pa.test(c)&&(b=-1!==c.indexOf("hsl(")||-1!==c.indexOf("hsla("),a[0]=oa(a[0],b),a[1]=oa(a[1],b)),pa.lastIndex=0},b.defaultStringFilter||(b.defaultStringFilter=g.colorStringFilter);var qa=function(a,b,c,d){if(null==a)return function(a){return a};var e,f=b?(a.match(pa)||[""])[0]:"",g=a.split(f).join("").match(u)||[],h=a.substr(0,a.indexOf(g[0])),i=")"===a.charAt(a.length-1)?")":"",j=-1!==a.indexOf(" ")?" ":",",k=g.length,l=k>0?g[0].replace(s,""):"";return k?e=b?function(a){var b,m,n,o;if("number"==typeof a)a+=l;else if(d&&I.test(a)){for(o=a.replace(I,"|").split("|"),n=0;n<o.length;n++)o[n]=e(o[n]);return o.join(",")}if(b=(a.match(pa)||[f])[0],m=a.split(b).join("").match(u)||[],n=m.length,k>n--)for(;++n<k;)m[n]=c?m[(n-1)/2|0]:g[n];return h+m.join(j)+j+b+i+(-1!==a.indexOf("inset")?" inset":"")}:function(a){var b,f,m;if("number"==typeof a)a+=l;else if(d&&I.test(a)){for(f=a.replace(I,"|").split("|"),m=0;m<f.length;m++)f[m]=e(f[m]);return f.join(",")}if(b=a.match(u)||[],m=b.length,k>m--)for(;++m<k;)b[m]=c?b[(m-1)/2|0]:g[m];return h+b.join(j)+i}:function(a){return a}},ra=function(a){return a=a.split(","),function(b,c,d,e,f,g,h){var i,j=(c+"").split(" ");for(h={},i=0;4>i;i++)h[a[i]]=j[i]=j[i]||j[(i-1)/2>>0];return e.parse(b,h,f,g)}},sa=(S._setPluginRatio=function(a){this.plugin.setRatio(a);for(var b,c,d,e,f,g=this.data,h=g.proxy,i=g.firstMPT,j=1e-6;i;)b=h[i.v],i.r?b=Math.round(b):j>b&&b>-j&&(b=0),i.t[i.p]=b,i=i._next;if(g.autoRotate&&(g.autoRotate.rotation=g.mod?g.mod(h.rotation,this.t):h.rotation),1===a||0===a)for(i=g.firstMPT,f=1===a?"e":"b";i;){if(c=i.t,c.type){if(1===c.type){for(e=c.xs0+c.s+c.xs1,d=1;d<c.l;d++)e+=c["xn"+d]+c["xs"+(d+1)];c[f]=e}}else c[f]=c.s+c.xs0;i=i._next}},function(a,b,c,d,e){this.t=a,this.p=b,this.v=c,this.r=e,d&&(d._prev=this,this._next=d)}),ta=(S._parseToProxy=function(a,b,c,d,e,f){var g,h,i,j,k,l=d,m={},n={},o=c._transform,p=M;for(c._transform=null,M=b,d=k=c.parse(a,b,d,e),M=p,f&&(c._transform=o,l&&(l._prev=null,l._prev&&(l._prev._next=null)));d&&d!==l;){if(d.type<=1&&(h=d.p,n[h]=d.s+d.c,m[h]=d.s,f||(j=new sa(d,"s",h,j,d.r),d.c=0),1===d.type))for(g=d.l;--g>0;)i="xn"+g,h=d.p+"_"+i,n[h]=d.data[i],m[h]=d[i],f||(j=new sa(d,i,h,j,d.rxp[i]));d=d._next}return{proxy:m,end:n,firstMPT:j,pt:k}},S.CSSPropTween=function(a,b,d,e,g,h,i,j,k,l,m){this.t=a,this.p=b,this.s=d,this.c=e,this.n=i||b,a instanceof ta||f.push(this.n),this.r=j,this.type=h||0,k&&(this.pr=k,c=!0),this.b=void 0===l?d:l,this.e=void 0===m?d+e:m,g&&(this._next=g,g._prev=this)}),ua=function(a,b,c,d,e,f){var g=new ta(a,b,c,d-c,e,-1,f);return g.b=c,g.e=g.xs0=d,g},va=g.parseComplex=function(a,b,c,d,e,f,h,i,j,l){c=c||f||"","function"==typeof d&&(d=d(r,q)),h=new ta(a,b,0,0,h,l?2:1,null,!1,i,c,d),d+="",e&&pa.test(d+c)&&(d=[c,d],g.colorStringFilter(d),c=d[0],d=d[1]);var m,n,o,p,u,v,w,x,y,z,A,B,C,D=c.split(", ").join(",").split(" "),E=d.split(", ").join(",").split(" "),F=D.length,G=k!==!1;for((-1!==d.indexOf(",")||-1!==c.indexOf(","))&&(D=D.join(" ").replace(I,", ").split(" "),E=E.join(" ").replace(I,", ").split(" "),F=D.length),F!==E.length&&(D=(f||"").split(" "),F=D.length),h.plugin=j,h.setRatio=l,pa.lastIndex=0,m=0;F>m;m++)if(p=D[m],u=E[m],x=parseFloat(p),x||0===x)h.appendXtra("",x,ia(u,x),u.replace(t,""),G&&-1!==u.indexOf("px"),!0);else if(e&&pa.test(p))B=u.indexOf(")")+1,B=")"+(B?u.substr(B):""),C=-1!==u.indexOf("hsl")&&U,p=na(p,C),u=na(u,C),y=p.length+u.length>6,y&&!U&&0===u[3]?(h["xs"+h.l]+=h.l?" transparent":"transparent",h.e=h.e.split(E[m]).join("transparent")):(U||(y=!1),C?h.appendXtra(y?"hsla(":"hsl(",p[0],ia(u[0],p[0]),",",!1,!0).appendXtra("",p[1],ia(u[1],p[1]),"%,",!1).appendXtra("",p[2],ia(u[2],p[2]),y?"%,":"%"+B,!1):h.appendXtra(y?"rgba(":"rgb(",p[0],u[0]-p[0],",",!0,!0).appendXtra("",p[1],u[1]-p[1],",",!0).appendXtra("",p[2],u[2]-p[2],y?",":B,!0),y&&(p=p.length<4?1:p[3],h.appendXtra("",p,(u.length<4?1:u[3])-p,B,!1))),pa.lastIndex=0;else if(v=p.match(s)){if(w=u.match(t),!w||w.length!==v.length)return h;for(o=0,n=0;n<v.length;n++)A=v[n],z=p.indexOf(A,o),h.appendXtra(p.substr(o,z-o),Number(A),ia(w[n],A),"",G&&"px"===p.substr(z+A.length,2),0===n),o=z+A.length;h["xs"+h.l]+=p.substr(o)}else h["xs"+h.l]+=h.l||h["xs"+h.l]?" "+u:u;if(-1!==d.indexOf("=")&&h.data){for(B=h.xs0+h.data.s,m=1;m<h.l;m++)B+=h["xs"+m]+h.data["xn"+m];h.e=B+h["xs"+m]}return h.l||(h.type=-1,h.xs0=h.e),h.xfirst||h},wa=9;for(j=ta.prototype,j.l=j.pr=0;--wa>0;)j["xn"+wa]=0,j["xs"+wa]="";j.xs0="",j._next=j._prev=j.xfirst=j.data=j.plugin=j.setRatio=j.rxp=null,j.appendXtra=function(a,b,c,d,e,f){var g=this,h=g.l;return g["xs"+h]+=f&&(h||g["xs"+h])?" "+a:a||"",c||0===h||g.plugin?(g.l++,g.type=g.setRatio?2:1,g["xs"+g.l]=d||"",h>0?(g.data["xn"+h]=b+c,g.rxp["xn"+h]=e,g["xn"+h]=b,g.plugin||(g.xfirst=new ta(g,"xn"+h,b,c,g.xfirst||g,0,g.n,e,g.pr),g.xfirst.xs0=0),g):(g.data={s:b+c},g.rxp={},g.s=b,g.c=c,g.r=e,g)):(g["xs"+h]+=b+(d||""),g)};var xa=function(a,b){b=b||{},this.p=b.prefix?Z(a)||a:a,i[a]=i[this.p]=this,this.format=b.formatter||qa(b.defaultValue,b.color,b.collapsible,b.multi),b.parser&&(this.parse=b.parser),this.clrs=b.color,this.multi=b.multi,this.keyword=b.keyword,this.dflt=b.defaultValue,this.pr=b.priority||0},ya=S._registerComplexSpecialProp=function(a,b,c){"object"!=typeof b&&(b={parser:c});var d,e,f=a.split(","),g=b.defaultValue;for(c=c||[g],d=0;d<f.length;d++)b.prefix=0===d&&b.prefix,b.defaultValue=c[d]||g,e=new xa(f[d],b)},za=S._registerPluginProp=function(a){if(!i[a]){var b=a.charAt(0).toUpperCase()+a.substr(1)+"Plugin";ya(a,{parser:function(a,c,d,e,f,g,j){var k=h.com.greensock.plugins[b];return k?(k._cssRegister(),i[d].parse(a,c,d,e,f,g,j)):(W("Error: "+b+" js file not loaded."),f)}})}};j=xa.prototype,j.parseComplex=function(a,b,c,d,e,f){var g,h,i,j,k,l,m=this.keyword;if(this.multi&&(I.test(c)||I.test(b)?(h=b.replace(I,"|").split("|"),i=c.replace(I,"|").split("|")):m&&(h=[b],i=[c])),i){for(j=i.length>h.length?i.length:h.length,g=0;j>g;g++)b=h[g]=h[g]||this.dflt,c=i[g]=i[g]||this.dflt,m&&(k=b.indexOf(m),l=c.indexOf(m),k!==l&&(-1===l?h[g]=h[g].split(m).join(""):-1===k&&(h[g]+=" "+m)));b=h.join(", "),c=i.join(", ")}return va(a,this.p,b,c,this.clrs,this.dflt,d,this.pr,e,f)},j.parse=function(a,b,c,d,f,g,h){return this.parseComplex(a.style,this.format(_(a,this.p,e,!1,this.dflt)),this.format(b),f,g)},g.registerSpecialProp=function(a,b,c){ya(a,{parser:function(a,d,e,f,g,h,i){var j=new ta(a,e,0,0,g,2,e,!1,c);return j.plugin=h,j.setRatio=b(a,d,f._tween,e),j},priority:c})},g.useSVGTransformAttr=!0;var Aa,Ba="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),Ca=Z("transform"),Da=X+"transform",Ea=Z("transformOrigin"),Fa=null!==Z("perspective"),Ga=S.Transform=function(){this.perspective=parseFloat(g.defaultTransformPerspective)||0,this.force3D=g.defaultForce3D!==!1&&Fa?g.defaultForce3D||"auto":!1},Ha=_gsScope.SVGElement,Ia=function(a,b,c){var d,e=O.createElementNS("http://www.w3.org/2000/svg",a),f=/([a-z])([A-Z])/g;for(d in c)e.setAttributeNS(null,d.replace(f,"$1-$2").toLowerCase(),c[d]);return b.appendChild(e),e},Ja=O.documentElement||{},Ka=function(){var a,b,c,d=p||/Android/i.test(T)&&!_gsScope.chrome;return O.createElementNS&&!d&&(a=Ia("svg",Ja),b=Ia("rect",a,{width:100,height:50,x:100}),c=b.getBoundingClientRect().width,b.style[Ea]="50% 50%",b.style[Ca]="scaleX(0.5)",d=c===b.getBoundingClientRect().width&&!(n&&Fa),Ja.removeChild(a)),d}(),La=function(a,b,c,d,e,f){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v=a._gsTransform,w=Qa(a,!0);v&&(t=v.xOrigin,u=v.yOrigin),(!d||(h=d.split(" ")).length<2)&&(n=a.getBBox(),0===n.x&&0===n.y&&n.width+n.height===0&&(n={x:parseFloat(a.hasAttribute("x")?a.getAttribute("x"):a.hasAttribute("cx")?a.getAttribute("cx"):0)||0,y:parseFloat(a.hasAttribute("y")?a.getAttribute("y"):a.hasAttribute("cy")?a.getAttribute("cy"):0)||0,width:0,height:0}),b=ha(b).split(" "),h=[(-1!==b[0].indexOf("%")?parseFloat(b[0])/100*n.width:parseFloat(b[0]))+n.x,(-1!==b[1].indexOf("%")?parseFloat(b[1])/100*n.height:parseFloat(b[1]))+n.y]),c.xOrigin=k=parseFloat(h[0]),c.yOrigin=l=parseFloat(h[1]),d&&w!==Pa&&(m=w[0],n=w[1],o=w[2],p=w[3],q=w[4],r=w[5],s=m*p-n*o,s&&(i=k*(p/s)+l*(-o/s)+(o*r-p*q)/s,j=k*(-n/s)+l*(m/s)-(m*r-n*q)/s,k=c.xOrigin=h[0]=i,l=c.yOrigin=h[1]=j)),v&&(f&&(c.xOffset=v.xOffset,c.yOffset=v.yOffset,v=c),e||e!==!1&&g.defaultSmoothOrigin!==!1?(i=k-t,j=l-u,v.xOffset+=i*w[0]+j*w[2]-i,v.yOffset+=i*w[1]+j*w[3]-j):v.xOffset=v.yOffset=0),f||a.setAttribute("data-svg-origin",h.join(" "))},Ma=function(a){var b,c=P("svg",this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),d=this.parentNode,e=this.nextSibling,f=this.style.cssText;if(Ja.appendChild(c),c.appendChild(this),this.style.display="block",a)try{b=this.getBBox(),this._originalGetBBox=this.getBBox,this.getBBox=Ma}catch(g){}else this._originalGetBBox&&(b=this._originalGetBBox());return e?d.insertBefore(this,e):d.appendChild(this),Ja.removeChild(c),this.style.cssText=f,b},Na=function(a){try{return a.getBBox()}catch(b){return Ma.call(a,!0)}},Oa=function(a){return!(!(Ha&&a.getCTM&&Na(a))||a.parentNode&&!a.ownerSVGElement)},Pa=[1,0,0,1,0,0],Qa=function(a,b){var c,d,e,f,g,h,i=a._gsTransform||new Ga,j=1e5,k=a.style;if(Ca?d=_(a,Da,null,!0):a.currentStyle&&(d=a.currentStyle.filter.match(G),d=d&&4===d.length?[d[0].substr(4),Number(d[2].substr(4)),Number(d[1].substr(4)),d[3].substr(4),i.x||0,i.y||0].join(","):""),c=!d||"none"===d||"matrix(1, 0, 0, 1, 0, 0)"===d,c&&Ca&&((h="none"===$(a).display)||!a.parentNode)&&(h&&(f=k.display,k.display="block"),a.parentNode||(g=1,Ja.appendChild(a)),d=_(a,Da,null,!0),c=!d||"none"===d||"matrix(1, 0, 0, 1, 0, 0)"===d,f?k.display=f:h&&Va(k,"display"),g&&Ja.removeChild(a)),(i.svg||a.getCTM&&Oa(a))&&(c&&-1!==(k[Ca]+"").indexOf("matrix")&&(d=k[Ca],c=0),e=a.getAttribute("transform"),c&&e&&(-1!==e.indexOf("matrix")?(d=e,c=0):-1!==e.indexOf("translate")&&(d="matrix(1,0,0,1,"+e.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",")+")",c=0))),c)return Pa;for(e=(d||"").match(s)||[],wa=e.length;--wa>-1;)f=Number(e[wa]),e[wa]=(g=f-(f|=0))?(g*j+(0>g?-.5:.5)|0)/j+f:f;return b&&e.length>6?[e[0],e[1],e[4],e[5],e[12],e[13]]:e},Ra=S.getTransform=function(a,c,d,e){if(a._gsTransform&&d&&!e)return a._gsTransform;var f,h,i,j,k,l,m=d?a._gsTransform||new Ga:new Ga,n=m.scaleX<0,o=2e-5,p=1e5,q=Fa?parseFloat(_(a,Ea,c,!1,"0 0 0").split(" ")[2])||m.zOrigin||0:0,r=parseFloat(g.defaultTransformPerspective)||0;if(m.svg=!(!a.getCTM||!Oa(a)),m.svg&&(La(a,_(a,Ea,c,!1,"50% 50%")+"",m,a.getAttribute("data-svg-origin")),Aa=g.useSVGTransformAttr||Ka),f=Qa(a),f!==Pa){if(16===f.length){var s,t,u,v,w,x=f[0],y=f[1],z=f[2],A=f[3],B=f[4],C=f[5],D=f[6],E=f[7],F=f[8],G=f[9],H=f[10],I=f[12],J=f[13],K=f[14],M=f[11],N=Math.atan2(D,H);m.zOrigin&&(K=-m.zOrigin,I=F*K-f[12],J=G*K-f[13],K=H*K+m.zOrigin-f[14]),m.rotationX=N*L,N&&(v=Math.cos(-N),w=Math.sin(-N),s=B*v+F*w,t=C*v+G*w,u=D*v+H*w,F=B*-w+F*v,G=C*-w+G*v,H=D*-w+H*v,M=E*-w+M*v,B=s,C=t,D=u),N=Math.atan2(-z,H),m.rotationY=N*L,N&&(v=Math.cos(-N),w=Math.sin(-N),s=x*v-F*w,t=y*v-G*w,u=z*v-H*w,G=y*w+G*v,H=z*w+H*v,M=A*w+M*v,x=s,y=t,z=u),N=Math.atan2(y,x),m.rotation=N*L,N&&(v=Math.cos(-N),w=Math.sin(-N),x=x*v+B*w,t=y*v+C*w,C=y*-w+C*v,D=z*-w+D*v,y=t),m.rotationX&&Math.abs(m.rotationX)+Math.abs(m.rotation)>359.9&&(m.rotationX=m.rotation=0,m.rotationY=180-m.rotationY),m.scaleX=(Math.sqrt(x*x+y*y)*p+.5|0)/p,m.scaleY=(Math.sqrt(C*C+G*G)*p+.5|0)/p,m.scaleZ=(Math.sqrt(D*D+H*H)*p+.5|0)/p,m.rotationX||m.rotationY?m.skewX=0:(m.skewX=B||C?Math.atan2(B,C)*L+m.rotation:m.skewX||0,Math.abs(m.skewX)>90&&Math.abs(m.skewX)<270&&(n?(m.scaleX*=-1,m.skewX+=m.rotation<=0?180:-180,m.rotation+=m.rotation<=0?180:-180):(m.scaleY*=-1,m.skewX+=m.skewX<=0?180:-180))),m.perspective=M?1/(0>M?-M:M):0,m.x=I,m.y=J,m.z=K,m.svg&&(m.x-=m.xOrigin-(m.xOrigin*x-m.yOrigin*B),m.y-=m.yOrigin-(m.yOrigin*y-m.xOrigin*C))}else if(!Fa||e||!f.length||m.x!==f[4]||m.y!==f[5]||!m.rotationX&&!m.rotationY){var O=f.length>=6,P=O?f[0]:1,Q=f[1]||0,R=f[2]||0,S=O?f[3]:1;m.x=f[4]||0,m.y=f[5]||0,i=Math.sqrt(P*P+Q*Q),j=Math.sqrt(S*S+R*R),k=P||Q?Math.atan2(Q,P)*L:m.rotation||0,l=R||S?Math.atan2(R,S)*L+k:m.skewX||0,Math.abs(l)>90&&Math.abs(l)<270&&(n?(i*=-1,l+=0>=k?180:-180,k+=0>=k?180:-180):(j*=-1,l+=0>=l?180:-180)),m.scaleX=i,m.scaleY=j,m.rotation=k,m.skewX=l,Fa&&(m.rotationX=m.rotationY=m.z=0,m.perspective=r,m.scaleZ=1),m.svg&&(m.x-=m.xOrigin-(m.xOrigin*P+m.yOrigin*R),m.y-=m.yOrigin-(m.xOrigin*Q+m.yOrigin*S))}m.zOrigin=q;for(h in m)m[h]<o&&m[h]>-o&&(m[h]=0)}return d&&(a._gsTransform=m,m.svg&&(Aa&&a.style[Ca]?b.delayedCall(.001,function(){Va(a.style,Ca)}):!Aa&&a.getAttribute("transform")&&b.delayedCall(.001,function(){a.removeAttribute("transform")}))),m},Sa=function(a){var b,c,d=this.data,e=-d.rotation*K,f=e+d.skewX*K,g=1e5,h=(Math.cos(e)*d.scaleX*g|0)/g,i=(Math.sin(e)*d.scaleX*g|0)/g,j=(Math.sin(f)*-d.scaleY*g|0)/g,k=(Math.cos(f)*d.scaleY*g|0)/g,l=this.t.style,m=this.t.currentStyle;if(m){c=i,i=-j,j=-c,b=m.filter,l.filter="";var n,o,q=this.t.offsetWidth,r=this.t.offsetHeight,s="absolute"!==m.position,t="progid:DXImageTransform.Microsoft.Matrix(M11="+h+", M12="+i+", M21="+j+", M22="+k,u=d.x+q*d.xPercent/100,v=d.y+r*d.yPercent/100;if(null!=d.ox&&(n=(d.oxp?q*d.ox*.01:d.ox)-q/2,o=(d.oyp?r*d.oy*.01:d.oy)-r/2,u+=n-(n*h+o*i),v+=o-(n*j+o*k)),s?(n=q/2,o=r/2,t+=", Dx="+(n-(n*h+o*i)+u)+", Dy="+(o-(n*j+o*k)+v)+")"):t+=", sizingMethod='auto expand')",-1!==b.indexOf("DXImageTransform.Microsoft.Matrix(")?l.filter=b.replace(H,t):l.filter=t+" "+b,(0===a||1===a)&&1===h&&0===i&&0===j&&1===k&&(s&&-1===t.indexOf("Dx=0, Dy=0")||x.test(b)&&100!==parseFloat(RegExp.$1)||-1===b.indexOf(b.indexOf("Alpha"))&&l.removeAttribute("filter")),!s){var y,z,A,B=8>p?1:-1;for(n=d.ieOffsetX||0,o=d.ieOffsetY||0,d.ieOffsetX=Math.round((q-((0>h?-h:h)*q+(0>i?-i:i)*r))/2+u),d.ieOffsetY=Math.round((r-((0>k?-k:k)*r+(0>j?-j:j)*q))/2+v),wa=0;4>wa;wa++)z=fa[wa],y=m[z],c=-1!==y.indexOf("px")?parseFloat(y):aa(this.t,z,parseFloat(y),y.replace(w,""))||0,A=c!==d[z]?2>wa?-d.ieOffsetX:-d.ieOffsetY:2>wa?n-d.ieOffsetX:o-d.ieOffsetY,l[z]=(d[z]=Math.round(c-A*(0===wa||2===wa?1:B)))+"px"}}},Ta=S.set3DTransformRatio=S.setTransformRatio=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,o,p,q,r,s,t,u,v,w,x,y,z=this.data,A=this.t.style,B=z.rotation,C=z.rotationX,D=z.rotationY,E=z.scaleX,F=z.scaleY,G=z.scaleZ,H=z.x,I=z.y,J=z.z,L=z.svg,M=z.perspective,N=z.force3D,O=z.skewY,P=z.skewX;if(O&&(P+=O,B+=O),((1===a||0===a)&&"auto"===N&&(this.tween._totalTime===this.tween._totalDuration||!this.tween._totalTime)||!N)&&!J&&!M&&!D&&!C&&1===G||Aa&&L||!Fa)return void(B||P||L?(B*=K,x=P*K,y=1e5,c=Math.cos(B)*E,f=Math.sin(B)*E,d=Math.sin(B-x)*-F,g=Math.cos(B-x)*F,x&&"simple"===z.skewType&&(b=Math.tan(x-O*K),b=Math.sqrt(1+b*b),d*=b,g*=b,O&&(b=Math.tan(O*K),b=Math.sqrt(1+b*b),c*=b,f*=b)),L&&(H+=z.xOrigin-(z.xOrigin*c+z.yOrigin*d)+z.xOffset,I+=z.yOrigin-(z.xOrigin*f+z.yOrigin*g)+z.yOffset,Aa&&(z.xPercent||z.yPercent)&&(q=this.t.getBBox(),H+=.01*z.xPercent*q.width,I+=.01*z.yPercent*q.height),q=1e-6,q>H&&H>-q&&(H=0),q>I&&I>-q&&(I=0)),u=(c*y|0)/y+","+(f*y|0)/y+","+(d*y|0)/y+","+(g*y|0)/y+","+H+","+I+")",L&&Aa?this.t.setAttribute("transform","matrix("+u):A[Ca]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix(":"matrix(")+u):A[Ca]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix(":"matrix(")+E+",0,0,"+F+","+H+","+I+")");if(n&&(q=1e-4,q>E&&E>-q&&(E=G=2e-5),q>F&&F>-q&&(F=G=2e-5),!M||z.z||z.rotationX||z.rotationY||(M=0)),B||P)B*=K,r=c=Math.cos(B),s=f=Math.sin(B),P&&(B-=P*K,r=Math.cos(B),s=Math.sin(B),"simple"===z.skewType&&(b=Math.tan((P-O)*K),b=Math.sqrt(1+b*b),r*=b,s*=b,z.skewY&&(b=Math.tan(O*K),b=Math.sqrt(1+b*b),c*=b,f*=b))),d=-s,g=r;else{if(!(D||C||1!==G||M||L))return void(A[Ca]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) translate3d(":"translate3d(")+H+"px,"+I+"px,"+J+"px)"+(1!==E||1!==F?" scale("+E+","+F+")":""));c=g=1,d=f=0}k=1,e=h=i=j=l=m=0,o=M?-1/M:0,p=z.zOrigin,q=1e-6,v=",",w="0",B=D*K,B&&(r=Math.cos(B),s=Math.sin(B),i=-s,l=o*-s,e=c*s,h=f*s,k=r,o*=r,c*=r,f*=r),B=C*K,B&&(r=Math.cos(B),s=Math.sin(B),b=d*r+e*s,t=g*r+h*s,j=k*s,m=o*s,e=d*-s+e*r,h=g*-s+h*r,k*=r,o*=r,d=b,g=t),1!==G&&(e*=G,h*=G,k*=G,o*=G),1!==F&&(d*=F,g*=F,j*=F,m*=F),1!==E&&(c*=E,f*=E,i*=E,l*=E),(p||L)&&(p&&(H+=e*-p,I+=h*-p,J+=k*-p+p),L&&(H+=z.xOrigin-(z.xOrigin*c+z.yOrigin*d)+z.xOffset,I+=z.yOrigin-(z.xOrigin*f+z.yOrigin*g)+z.yOffset),q>H&&H>-q&&(H=w),q>I&&I>-q&&(I=w),q>J&&J>-q&&(J=0)),u=z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix3d(":"matrix3d(",u+=(q>c&&c>-q?w:c)+v+(q>f&&f>-q?w:f)+v+(q>i&&i>-q?w:i),u+=v+(q>l&&l>-q?w:l)+v+(q>d&&d>-q?w:d)+v+(q>g&&g>-q?w:g),C||D||1!==G?(u+=v+(q>j&&j>-q?w:j)+v+(q>m&&m>-q?w:m)+v+(q>e&&e>-q?w:e),u+=v+(q>h&&h>-q?w:h)+v+(q>k&&k>-q?w:k)+v+(q>o&&o>-q?w:o)+v):u+=",0,0,0,0,1,0,",u+=H+v+I+v+J+v+(M?1+-J/M:1)+")",A[Ca]=u};j=Ga.prototype,j.x=j.y=j.z=j.skewX=j.skewY=j.rotation=j.rotationX=j.rotationY=j.zOrigin=j.xPercent=j.yPercent=j.xOffset=j.yOffset=0,j.scaleX=j.scaleY=j.scaleZ=1,ya("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{parser:function(a,b,c,d,f,h,i){if(d._lastParsedTransform===i)return f;d._lastParsedTransform=i;var j,k=i.scale&&"function"==typeof i.scale?i.scale:0;"function"==typeof i[c]&&(j=i[c],i[c]=b),k&&(i.scale=k(r,a));var l,m,n,o,p,s,t,u,v,w=a._gsTransform,x=a.style,y=1e-6,z=Ba.length,A=i,B={},C="transformOrigin",D=Ra(a,e,!0,A.parseTransform),E=A.transform&&("function"==typeof A.transform?A.transform(r,q):A.transform);if(d._transform=D,E&&"string"==typeof E&&Ca)m=Q.style,m[Ca]=E,m.display="block",m.position="absolute",O.body.appendChild(Q),l=Ra(Q,null,!1),D.svg&&(s=D.xOrigin,t=D.yOrigin,l.x-=D.xOffset,l.y-=D.yOffset,(A.transformOrigin||A.svgOrigin)&&(E={},La(a,ha(A.transformOrigin),E,A.svgOrigin,A.smoothOrigin,!0),s=E.xOrigin,t=E.yOrigin,l.x-=E.xOffset-D.xOffset,l.y-=E.yOffset-D.yOffset),(s||t)&&(u=Qa(Q,!0),l.x-=s-(s*u[0]+t*u[2]),l.y-=t-(s*u[1]+t*u[3]))),O.body.removeChild(Q),l.perspective||(l.perspective=D.perspective),null!=A.xPercent&&(l.xPercent=ja(A.xPercent,D.xPercent)),null!=A.yPercent&&(l.yPercent=ja(A.yPercent,D.yPercent));else if("object"==typeof A){if(l={scaleX:ja(null!=A.scaleX?A.scaleX:A.scale,D.scaleX),scaleY:ja(null!=A.scaleY?A.scaleY:A.scale,D.scaleY),scaleZ:ja(A.scaleZ,D.scaleZ),x:ja(A.x,D.x),y:ja(A.y,D.y),z:ja(A.z,D.z),xPercent:ja(A.xPercent,D.xPercent),yPercent:ja(A.yPercent,D.yPercent),perspective:ja(A.transformPerspective,D.perspective)},p=A.directionalRotation,null!=p)if("object"==typeof p)for(m in p)A[m]=p[m];else A.rotation=p;"string"==typeof A.x&&-1!==A.x.indexOf("%")&&(l.x=0,l.xPercent=ja(A.x,D.xPercent)),"string"==typeof A.y&&-1!==A.y.indexOf("%")&&(l.y=0,l.yPercent=ja(A.y,D.yPercent)),l.rotation=ka("rotation"in A?A.rotation:"shortRotation"in A?A.shortRotation+"_short":"rotationZ"in A?A.rotationZ:D.rotation,D.rotation,"rotation",B),Fa&&(l.rotationX=ka("rotationX"in A?A.rotationX:"shortRotationX"in A?A.shortRotationX+"_short":D.rotationX||0,D.rotationX,"rotationX",B),l.rotationY=ka("rotationY"in A?A.rotationY:"shortRotationY"in A?A.shortRotationY+"_short":D.rotationY||0,D.rotationY,"rotationY",B)),l.skewX=ka(A.skewX,D.skewX),l.skewY=ka(A.skewY,D.skewY)}for(Fa&&null!=A.force3D&&(D.force3D=A.force3D,o=!0),D.skewType=A.skewType||D.skewType||g.defaultSkewType,n=D.force3D||D.z||D.rotationX||D.rotationY||l.z||l.rotationX||l.rotationY||l.perspective,n||null==A.scale||(l.scaleZ=1);--z>-1;)v=Ba[z],E=l[v]-D[v],(E>y||-y>E||null!=A[v]||null!=M[v])&&(o=!0,f=new ta(D,v,D[v],E,f),v in B&&(f.e=B[v]),f.xs0=0,f.plugin=h,d._overwriteProps.push(f.n));return E=A.transformOrigin,D.svg&&(E||A.svgOrigin)&&(s=D.xOffset,t=D.yOffset,La(a,ha(E),l,A.svgOrigin,A.smoothOrigin),f=ua(D,"xOrigin",(w?D:l).xOrigin,l.xOrigin,f,C),f=ua(D,"yOrigin",(w?D:l).yOrigin,l.yOrigin,f,C),(s!==D.xOffset||t!==D.yOffset)&&(f=ua(D,"xOffset",w?s:D.xOffset,D.xOffset,f,C),f=ua(D,"yOffset",w?t:D.yOffset,D.yOffset,f,C)),E="0px 0px"),(E||Fa&&n&&D.zOrigin)&&(Ca?(o=!0,v=Ea,E=(E||_(a,v,e,!1,"50% 50%"))+"",f=new ta(x,v,0,0,f,-1,C),f.b=x[v],f.plugin=h,Fa?(m=D.zOrigin,E=E.split(" "),D.zOrigin=(E.length>2&&(0===m||"0px"!==E[2])?parseFloat(E[2]):m)||0,f.xs0=f.e=E[0]+" "+(E[1]||"50%")+" 0px",f=new ta(D,"zOrigin",0,0,f,-1,f.n),f.b=m,f.xs0=f.e=D.zOrigin):f.xs0=f.e=E):ha(E+"",D)),o&&(d._transformType=D.svg&&Aa||!n&&3!==this._transformType?2:3),j&&(i[c]=j),k&&(i.scale=k),f},prefix:!0}),ya("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),ya("borderRadius",{defaultValue:"0px",parser:function(a,b,c,f,g,h){b=this.format(b);var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],z=a.style;for(q=parseFloat(a.offsetWidth),r=parseFloat(a.offsetHeight),i=b.split(" "),j=0;j<y.length;j++)this.p.indexOf("border")&&(y[j]=Z(y[j])),m=l=_(a,y[j],e,!1,"0px"),-1!==m.indexOf(" ")&&(l=m.split(" "),m=l[0],l=l[1]),n=k=i[j],o=parseFloat(m),t=m.substr((o+"").length),u="="===n.charAt(1),u?(p=parseInt(n.charAt(0)+"1",10),n=n.substr(2),p*=parseFloat(n),s=n.substr((p+"").length-(0>p?1:0))||""):(p=parseFloat(n),s=n.substr((p+"").length)),""===s&&(s=d[c]||t),s!==t&&(v=aa(a,"borderLeft",o,t),w=aa(a,"borderTop",o,t),"%"===s?(m=v/q*100+"%",l=w/r*100+"%"):"em"===s?(x=aa(a,"borderLeft",1,"em"),m=v/x+"em",l=w/x+"em"):(m=v+"px",l=w+"px"),u&&(n=parseFloat(m)+p+s,k=parseFloat(l)+p+s)),g=va(z,y[j],m+" "+l,n+" "+k,!1,"0px",g);return g},prefix:!0,formatter:qa("0px 0px 0px 0px",!1,!0)}),ya("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",{defaultValue:"0px",parser:function(a,b,c,d,f,g){return va(a.style,c,this.format(_(a,c,e,!1,"0px 0px")),this.format(b),!1,"0px",f)},prefix:!0,formatter:qa("0px 0px",!1,!0)}),ya("backgroundPosition",{defaultValue:"0 0",parser:function(a,b,c,d,f,g){var h,i,j,k,l,m,n="background-position",o=e||$(a,null),q=this.format((o?p?o.getPropertyValue(n+"-x")+" "+o.getPropertyValue(n+"-y"):o.getPropertyValue(n):a.currentStyle.backgroundPositionX+" "+a.currentStyle.backgroundPositionY)||"0 0"),r=this.format(b);if(-1!==q.indexOf("%")!=(-1!==r.indexOf("%"))&&r.split(",").length<2&&(m=_(a,"backgroundImage").replace(D,""),m&&"none"!==m)){for(h=q.split(" "),i=r.split(" "),R.setAttribute("src",m),j=2;--j>-1;)q=h[j],k=-1!==q.indexOf("%"),k!==(-1!==i[j].indexOf("%"))&&(l=0===j?a.offsetWidth-R.width:a.offsetHeight-R.height,h[j]=k?parseFloat(q)/100*l+"px":parseFloat(q)/l*100+"%");q=h.join(" ")}return this.parseComplex(a.style,q,r,f,g)},formatter:ha}),ya("backgroundSize",{defaultValue:"0 0",formatter:function(a){return a+="",ha(-1===a.indexOf(" ")?a+" "+a:a)}}),ya("perspective",{defaultValue:"0px",prefix:!0}),ya("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),ya("transformStyle",{prefix:!0}),ya("backfaceVisibility",{prefix:!0}),ya("userSelect",{prefix:!0}),ya("margin",{parser:ra("marginTop,marginRight,marginBottom,marginLeft")}),ya("padding",{parser:ra("paddingTop,paddingRight,paddingBottom,paddingLeft")}),ya("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(a,b,c,d,f,g){var h,i,j;return 9>p?(i=a.currentStyle,j=8>p?" ":",",h="rect("+i.clipTop+j+i.clipRight+j+i.clipBottom+j+i.clipLeft+")",b=this.format(b).split(",").join(j)):(h=this.format(_(a,this.p,e,!1,this.dflt)),b=this.format(b)),this.parseComplex(a.style,h,b,f,g)}}),ya("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),ya("autoRound,strictUnits",{parser:function(a,b,c,d,e){return e}}),ya("border",{defaultValue:"0px solid #000",parser:function(a,b,c,d,f,g){var h=_(a,"borderTopWidth",e,!1,"0px"),i=this.format(b).split(" "),j=i[0].replace(w,"");return"px"!==j&&(h=parseFloat(h)/aa(a,"borderTopWidth",1,j)+j),this.parseComplex(a.style,this.format(h+" "+_(a,"borderTopStyle",e,!1,"solid")+" "+_(a,"borderTopColor",e,!1,"#000")),i.join(" "),f,g)},color:!0,formatter:function(a){var b=a.split(" ");return b[0]+" "+(b[1]||"solid")+" "+(a.match(pa)||["#000"])[0]}}),ya("borderWidth",{parser:ra("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),ya("float,cssFloat,styleFloat",{parser:function(a,b,c,d,e,f){var g=a.style,h="cssFloat"in g?"cssFloat":"styleFloat";return new ta(g,h,0,0,e,-1,c,!1,0,g[h],b)}});var Ua=function(a){var b,c=this.t,d=c.filter||_(this.data,"filter")||"",e=this.s+this.c*a|0;100===e&&(-1===d.indexOf("atrix(")&&-1===d.indexOf("radient(")&&-1===d.indexOf("oader(")?(c.removeAttribute("filter"),b=!_(this.data,"filter")):(c.filter=d.replace(z,""),b=!0)),b||(this.xn1&&(c.filter=d=d||"alpha(opacity="+e+")"),-1===d.indexOf("pacity")?0===e&&this.xn1||(c.filter=d+" alpha(opacity="+e+")"):c.filter=d.replace(x,"opacity="+e))};ya("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(a,b,c,d,f,g){var h=parseFloat(_(a,"opacity",e,!1,"1")),i=a.style,j="autoAlpha"===c;return"string"==typeof b&&"="===b.charAt(1)&&(b=("-"===b.charAt(0)?-1:1)*parseFloat(b.substr(2))+h),j&&1===h&&"hidden"===_(a,"visibility",e)&&0!==b&&(h=0),U?f=new ta(i,"opacity",h,b-h,f):(f=new ta(i,"opacity",100*h,100*(b-h),f),f.xn1=j?1:0,i.zoom=1,f.type=2,f.b="alpha(opacity="+f.s+")",f.e="alpha(opacity="+(f.s+f.c)+")",f.data=a,f.plugin=g,f.setRatio=Ua),j&&(f=new ta(i,"visibility",0,0,f,-1,null,!1,0,0!==h?"inherit":"hidden",0===b?"hidden":"inherit"),f.xs0="inherit",d._overwriteProps.push(f.n),d._overwriteProps.push(c)),f}});var Va=function(a,b){b&&(a.removeProperty?(("ms"===b.substr(0,2)||"webkit"===b.substr(0,6))&&(b="-"+b),a.removeProperty(b.replace(B,"-$1").toLowerCase())):a.removeAttribute(b))},Wa=function(a){if(this.t._gsClassPT=this,1===a||0===a){this.t.setAttribute("class",0===a?this.b:this.e);for(var b=this.data,c=this.t.style;b;)b.v?c[b.p]=b.v:Va(c,b.p),b=b._next;1===a&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};ya("className",{parser:function(a,b,d,f,g,h,i){var j,k,l,m,n,o=a.getAttribute("class")||"",p=a.style.cssText;if(g=f._classNamePT=new ta(a,d,0,0,g,2),g.setRatio=Wa,g.pr=-11,c=!0,g.b=o,k=ca(a,e),l=a._gsClassPT){for(m={},n=l.data;n;)m[n.p]=1,n=n._next;l.setRatio(1)}return a._gsClassPT=g,g.e="="!==b.charAt(1)?b:o.replace(new RegExp("(?:\\s|^)"+b.substr(2)+"(?![\\w-])"),"")+("+"===b.charAt(0)?" "+b.substr(2):""),a.setAttribute("class",g.e),j=da(a,k,ca(a),i,m),a.setAttribute("class",o),g.data=j.firstMPT,a.style.cssText=p,g=g.xfirst=f.parse(a,j.difs,g,h)}});var Xa=function(a){if((1===a||0===a)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var b,c,d,e,f,g=this.t.style,h=i.transform.parse;if("all"===this.e)g.cssText="",e=!0;else for(b=this.e.split(" ").join("").split(","),d=b.length;--d>-1;)c=b[d],i[c]&&(i[c].parse===h?e=!0:c="transformOrigin"===c?Ea:i[c].p),Va(g,c);e&&(Va(g,Ca),f=this.t._gsTransform,f&&(f.svg&&(this.t.removeAttribute("data-svg-origin"),this.t.removeAttribute("transform")),delete this.t._gsTransform))}};for(ya("clearProps",{parser:function(a,b,d,e,f){return f=new ta(a,d,0,0,f,2),f.setRatio=Xa,f.e=b,f.pr=-10,f.data=e._tween,c=!0,f}}),j="bezier,throwProps,physicsProps,physics2D".split(","),wa=j.length;wa--;)za(j[wa]);j=g.prototype,j._firstPT=j._lastParsedTransform=j._transform=null,j._onInitTween=function(a,b,h,j){if(!a.nodeType)return!1;this._target=q=a,this._tween=h,this._vars=b,r=j,k=b.autoRound,c=!1,d=b.suffixMap||g.suffixMap,e=$(a,""),f=this._overwriteProps;var n,p,s,t,u,v,w,x,z,A=a.style;if(l&&""===A.zIndex&&(n=_(a,"zIndex",e),("auto"===n||""===n)&&this._addLazySet(A,"zIndex",0)),"string"==typeof b&&(t=A.cssText,n=ca(a,e),A.cssText=t+";"+b,n=da(a,n,ca(a)).difs,!U&&y.test(b)&&(n.opacity=parseFloat(RegExp.$1)),b=n,A.cssText=t),b.className?this._firstPT=p=i.className.parse(a,b.className,"className",this,null,null,b):this._firstPT=p=this.parse(a,b,null),this._transformType){for(z=3===this._transformType,Ca?m&&(l=!0,""===A.zIndex&&(w=_(a,"zIndex",e),("auto"===w||""===w)&&this._addLazySet(A,"zIndex",0)),o&&this._addLazySet(A,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(z?"visible":"hidden"))):A.zoom=1,s=p;s&&s._next;)s=s._next;x=new ta(a,"transform",0,0,null,2),this._linkCSSP(x,null,s),x.setRatio=Ca?Ta:Sa,x.data=this._transform||Ra(a,e,!0),x.tween=h,x.pr=-1,f.pop()}if(c){for(;p;){for(v=p._next,s=t;s&&s.pr>p.pr;)s=s._next;(p._prev=s?s._prev:u)?p._prev._next=p:t=p,(p._next=s)?s._prev=p:u=p,p=v}this._firstPT=t}return!0},j.parse=function(a,b,c,f){var g,h,j,l,m,n,o,p,s,t,u=a.style;for(g in b)n=b[g],"function"==typeof n&&(n=n(r,q)),h=i[g],h?c=h.parse(a,n,g,this,c,f,b):(m=_(a,g,e)+"",s="string"==typeof n,"color"===g||"fill"===g||"stroke"===g||-1!==g.indexOf("Color")||s&&A.test(n)?(s||(n=na(n),n=(n.length>3?"rgba(":"rgb(")+n.join(",")+")"),c=va(u,g,m,n,!0,"transparent",c,0,f)):s&&J.test(n)?c=va(u,g,m,n,!0,null,c,0,f):(j=parseFloat(m),o=j||0===j?m.substr((j+"").length):"",(""===m||"auto"===m)&&("width"===g||"height"===g?(j=ga(a,g,e),o="px"):"left"===g||"top"===g?(j=ba(a,g,e),o="px"):(j="opacity"!==g?0:1,o="")),t=s&&"="===n.charAt(1),t?(l=parseInt(n.charAt(0)+"1",10),n=n.substr(2),l*=parseFloat(n),p=n.replace(w,"")):(l=parseFloat(n),p=s?n.replace(w,""):""),""===p&&(p=g in d?d[g]:o),n=l||0===l?(t?l+j:l)+p:b[g],o!==p&&""!==p&&(l||0===l)&&j&&(j=aa(a,g,j,o),"%"===p?(j/=aa(a,g,100,"%")/100,b.strictUnits!==!0&&(m=j+"%")):"em"===p||"rem"===p||"vw"===p||"vh"===p?j/=aa(a,g,1,p):"px"!==p&&(l=aa(a,g,l,p),p="px"),t&&(l||0===l)&&(n=l+j+p)),t&&(l+=j),!j&&0!==j||!l&&0!==l?void 0!==u[g]&&(n||n+""!="NaN"&&null!=n)?(c=new ta(u,g,l||j||0,0,c,-1,g,!1,0,m,n),c.xs0="none"!==n||"display"!==g&&-1===g.indexOf("Style")?n:m):W("invalid "+g+" tween value: "+b[g]):(c=new ta(u,g,j,l-j,c,0,g,k!==!1&&("px"===p||"zIndex"===g),0,m,n),c.xs0=p))),f&&c&&!c.plugin&&(c.plugin=f);return c},j.setRatio=function(a){var b,c,d,e=this._firstPT,f=1e-6;if(1!==a||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(a||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;e;){if(b=e.c*a+e.s,e.r?b=Math.round(b):f>b&&b>-f&&(b=0),e.type)if(1===e.type)if(d=e.l,2===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2;else if(3===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3;else if(4===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3+e.xn3+e.xs4;else if(5===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3+e.xn3+e.xs4+e.xn4+e.xs5;else{for(c=e.xs0+b+e.xs1,d=1;d<e.l;d++)c+=e["xn"+d]+e["xs"+(d+1)];e.t[e.p]=c}else-1===e.type?e.t[e.p]=e.xs0:e.setRatio&&e.setRatio(a);else e.t[e.p]=b+e.xs0;e=e._next}else for(;e;)2!==e.type?e.t[e.p]=e.b:e.setRatio(a),e=e._next;else for(;e;){if(2!==e.type)if(e.r&&-1!==e.type)if(b=Math.round(e.s+e.c),e.type){if(1===e.type){for(d=e.l,c=e.xs0+b+e.xs1,d=1;d<e.l;d++)c+=e["xn"+d]+e["xs"+(d+1)];e.t[e.p]=c}}else e.t[e.p]=b+e.xs0;else e.t[e.p]=e.e;else e.setRatio(a);e=e._next}},j._enableTransforms=function(a){this._transform=this._transform||Ra(this._target,e,!0),this._transformType=this._transform.svg&&Aa||!a&&3!==this._transformType?2:3};var Ya=function(a){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};j._addLazySet=function(a,b,c){var d=this._firstPT=new ta(a,b,0,0,this._firstPT,2);d.e=c,d.setRatio=Ya,d.data=this},j._linkCSSP=function(a,b,c,d){return a&&(b&&(b._prev=a),a._next&&(a._next._prev=a._prev),a._prev?a._prev._next=a._next:this._firstPT===a&&(this._firstPT=a._next,d=!0),c?c._next=a:d||null!==this._firstPT||(this._firstPT=a),a._next=b,a._prev=c),a},j._mod=function(a){for(var b=this._firstPT;b;)"function"==typeof a[b.p]&&a[b.p]===Math.round&&(b.r=1),b=b._next},j._kill=function(b){var c,d,e,f=b;if(b.autoAlpha||b.alpha){f={};for(d in b)f[d]=b[d];f.opacity=1,f.autoAlpha&&(f.visibility=1)}for(b.className&&(c=this._classNamePT)&&(e=c.xfirst,e&&e._prev?this._linkCSSP(e._prev,c._next,e._prev._prev):e===this._firstPT&&(this._firstPT=c._next),c._next&&this._linkCSSP(c._next,c._next._next,e._prev),this._classNamePT=null),c=this._firstPT;c;)c.plugin&&c.plugin!==d&&c.plugin._kill&&(c.plugin._kill(b),d=c.plugin),c=c._next;return a.prototype._kill.call(this,f)};var Za=function(a,b,c){var d,e,f,g;if(a.slice)for(e=a.length;--e>-1;)Za(a[e],b,c);else for(d=a.childNodes,e=d.length;--e>-1;)f=d[e],g=f.type,f.style&&(b.push(ca(f)),c&&c.push(f)),1!==g&&9!==g&&11!==g||!f.childNodes.length||Za(f,b,c)};return g.cascadeTo=function(a,c,d){var e,f,g,h,i=b.to(a,c,d),j=[i],k=[],l=[],m=[],n=b._internals.reservedProps;for(a=i._targets||i.target,Za(a,k,m),i.render(c,!0,!0),Za(a,l),i.render(0,!0,!0),i._enabled(!0),e=m.length;--e>-1;)if(f=da(m[e],k[e],l[e]),f.firstMPT){f=f.difs;for(g in d)n[g]&&(f[g]=d[g]);h={};for(g in f)h[g]=k[e][g];j.push(b.fromTo(m[e],c,h,f))}return j},a.activate([g]),g},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a){"use strict";var b=function(){return(_gsScope.GreenSockGlobals||_gsScope)[a]};"function"==typeof define&&define.amd?define(["TweenLite"],b):"undefined"!=typeof module&&module.exports&&(require("../TweenLite.js"),module.exports=b())}("CSSPlugin");
/* SPLIT TEXT UTIL */
/*!
 * VERSION: 0.5.6
 * DATE: 2017-01-17
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * SplitText is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;!function(a){"use strict";var b=a.GreenSockGlobals||a,c=function(a){var c,d=a.split("."),e=b;for(c=0;c<d.length;c++)e[d[c]]=e=e[d[c]]||{};return e},d=c("com.greensock.utils"),e=function(a){var b=a.nodeType,c="";if(1===b||9===b||11===b){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===b||4===b)return a.nodeValue;return c},f=document,g=f.defaultView?f.defaultView.getComputedStyle:function(){},h=/([A-Z])/g,i=function(a,b,c,d){var e;return(c=c||g(a,null))?(a=c.getPropertyValue(b.replace(h,"-$1").toLowerCase()),e=a||c.length?a:c[b]):a.currentStyle&&(c=a.currentStyle,e=c[b]),d?e:parseInt(e,10)||0},j=function(a){return a.length&&a[0]&&(a[0].nodeType&&a[0].style&&!a.nodeType||a[0].length&&a[0][0])?!0:!1},k=function(a){var b,c,d,e=[],f=a.length;for(b=0;f>b;b++)if(c=a[b],j(c))for(d=c.length,d=0;d<c.length;d++)e.push(c[d]);else e.push(c);return e},l=/(?:\r|\n|\t\t)/g,m=/(?:\s\s+)/g,n=55296,o=56319,p=56320,q=127462,r=127487,s=127995,t=127999,u=function(a){return(a.charCodeAt(0)-n<<10)+(a.charCodeAt(1)-p)+65536},v=f.all&&!f.addEventListener,w=" style='position:relative;display:inline-block;"+(v?"*display:inline;*zoom:1;'":"'"),x=function(a,b){a=a||"";var c=-1!==a.indexOf("++"),d=1;return c&&(a=a.split("++").join("")),function(){return"<"+b+w+(a?" class='"+a+(c?d++:"")+"'>":">")}},y=d.SplitText=b.SplitText=function(a,b){if("string"==typeof a&&(a=y.selector(a)),!a)throw"cannot split a null element.";this.elements=j(a)?k(a):[a],this.chars=[],this.words=[],this.lines=[],this._originals=[],this.vars=b||{},this.split(b)},z=function(a,b,c){var d=a.nodeType;if(1===d||9===d||11===d)for(a=a.firstChild;a;a=a.nextSibling)z(a,b,c);else(3===d||4===d)&&(a.nodeValue=a.nodeValue.split(b).join(c))},A=function(a,b){for(var c=b.length;--c>-1;)a.push(b[c])},B=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},C=function(a,b,c){for(var d;a&&a!==b;){if(d=a._next||a.nextSibling)return d.textContent.charAt(0)===c;a=a.parentNode||a._parent}return!1},D=function(a){var b,c,d=B(a.childNodes),e=d.length;for(b=0;e>b;b++)c=d[b],c._isSplit?D(c):(b&&3===c.previousSibling.nodeType?c.previousSibling.nodeValue+=3===c.nodeType?c.nodeValue:c.firstChild.nodeValue:3!==c.nodeType&&a.insertBefore(c.firstChild,c),a.removeChild(c))},E=function(a,b,c,d,e,h,j){var k,l,m,n,o,p,q,r,s,t,u,v,w=g(a),x=i(a,"paddingLeft",w),y=-999,B=i(a,"borderBottomWidth",w)+i(a,"borderTopWidth",w),E=i(a,"borderLeftWidth",w)+i(a,"borderRightWidth",w),F=i(a,"paddingTop",w)+i(a,"paddingBottom",w),G=i(a,"paddingLeft",w)+i(a,"paddingRight",w),H=.2*i(a,"fontSize"),I=i(a,"textAlign",w,!0),J=[],K=[],L=[],M=b.wordDelimiter||" ",N=b.span?"span":"div",O=b.type||b.split||"chars,words,lines",P=e&&-1!==O.indexOf("lines")?[]:null,Q=-1!==O.indexOf("words"),R=-1!==O.indexOf("chars"),S="absolute"===b.position||b.absolute===!0,T=b.linesClass,U=-1!==(T||"").indexOf("++"),V=[];for(P&&1===a.children.length&&a.children[0]._isSplit&&(a=a.children[0]),U&&(T=T.split("++").join("")),l=a.getElementsByTagName("*"),m=l.length,o=[],k=0;m>k;k++)o[k]=l[k];if(P||S)for(k=0;m>k;k++)n=o[k],p=n.parentNode===a,(p||S||R&&!Q)&&(v=n.offsetTop,P&&p&&Math.abs(v-y)>H&&"BR"!==n.nodeName&&(q=[],P.push(q),y=v),S&&(n._x=n.offsetLeft,n._y=v,n._w=n.offsetWidth,n._h=n.offsetHeight),P&&((n._isSplit&&p||!R&&p||Q&&p||!Q&&n.parentNode.parentNode===a&&!n.parentNode._isSplit)&&(q.push(n),n._x-=x,C(n,a,M)&&(n._wordEnd=!0)),"BR"===n.nodeName&&n.nextSibling&&"BR"===n.nextSibling.nodeName&&P.push([])));for(k=0;m>k;k++)n=o[k],p=n.parentNode===a,"BR"!==n.nodeName?(S&&(s=n.style,Q||p||(n._x+=n.parentNode._x,n._y+=n.parentNode._y),s.left=n._x+"px",s.top=n._y+"px",s.position="absolute",s.display="block",s.width=n._w+1+"px",s.height=n._h+"px"),!Q&&R?n._isSplit?(n._next=n.nextSibling,n.parentNode.appendChild(n)):n.parentNode._isSplit?(n._parent=n.parentNode,!n.previousSibling&&n.firstChild&&(n.firstChild._isFirst=!0),n.nextSibling&&" "===n.nextSibling.textContent&&!n.nextSibling.nextSibling&&V.push(n.nextSibling),n._next=n.nextSibling&&n.nextSibling._isFirst?null:n.nextSibling,n.parentNode.removeChild(n),o.splice(k--,1),m--):p||(v=!n.nextSibling&&C(n.parentNode,a,M),n.parentNode._parent&&n.parentNode._parent.appendChild(n),v&&n.parentNode.appendChild(f.createTextNode(" ")),b.span&&(n.style.display="inline"),J.push(n)):n.parentNode._isSplit&&!n._isSplit&&""!==n.innerHTML?K.push(n):R&&!n._isSplit&&(b.span&&(n.style.display="inline"),J.push(n))):P||S?(n.parentNode&&n.parentNode.removeChild(n),o.splice(k--,1),m--):Q||a.appendChild(n);for(k=V.length;--k>-1;)V[k].parentNode.removeChild(V[k]);if(P){for(S&&(t=f.createElement(N),a.appendChild(t),u=t.offsetWidth+"px",v=t.offsetParent===a?0:a.offsetLeft,a.removeChild(t)),s=a.style.cssText,a.style.cssText="display:none;";a.firstChild;)a.removeChild(a.firstChild);for(r=" "===M&&(!S||!Q&&!R),k=0;k<P.length;k++){for(q=P[k],t=f.createElement(N),t.style.cssText="display:block;text-align:"+I+";position:"+(S?"absolute;":"relative;"),T&&(t.className=T+(U?k+1:"")),L.push(t),m=q.length,l=0;m>l;l++)"BR"!==q[l].nodeName&&(n=q[l],t.appendChild(n),r&&n._wordEnd&&t.appendChild(f.createTextNode(" ")),S&&(0===l&&(t.style.top=n._y+"px",t.style.left=x+v+"px"),n.style.top="0px",v&&(n.style.left=n._x-v+"px")));0===m?t.innerHTML="&nbsp;":Q||R||(D(t),z(t,String.fromCharCode(160)," ")),S&&(t.style.width=u,t.style.height=n._h+"px"),a.appendChild(t)}a.style.cssText=s}S&&(j>a.clientHeight&&(a.style.height=j-F+"px",a.clientHeight<j&&(a.style.height=j+B+"px")),h>a.clientWidth&&(a.style.width=h-G+"px",a.clientWidth<h&&(a.style.width=h+E+"px"))),A(c,J),A(d,K),A(e,L)},F=function(a,b,c,d){var g,h,i,j,k,p,v,w,x,y=b.span?"span":"div",A=b.type||b.split||"chars,words,lines",B=(-1!==A.indexOf("words"),-1!==A.indexOf("chars")),C="absolute"===b.position||b.absolute===!0,D=b.wordDelimiter||" ",E=" "!==D?"":C?"&#173; ":" ",F=b.span?"</span>":"</div>",G=!0,H=f.createElement("div"),I=a.parentNode;for(I.insertBefore(H,a),H.textContent=a.nodeValue,I.removeChild(a),a=H,g=e(a),v=-1!==g.indexOf("<"),b.reduceWhiteSpace!==!1&&(g=g.replace(m," ").replace(l,"")),v&&(g=g.split("<").join("{{LT}}")),k=g.length,h=(" "===g.charAt(0)?E:"")+c(),i=0;k>i;i++)if(p=g.charAt(i),p===D&&g.charAt(i-1)!==D&&i){for(h+=G?F:"",G=!1;g.charAt(i+1)===D;)h+=E,i++;i===k-1?h+=E:")"!==g.charAt(i+1)&&(h+=E+c(),G=!0)}else"{"===p&&"{{LT}}"===g.substr(i,6)?(h+=B?d()+"{{LT}}</"+y+">":"{{LT}}",i+=5):p.charCodeAt(0)>=n&&p.charCodeAt(0)<=o||g.charCodeAt(i+1)>=65024&&g.charCodeAt(i+1)<=65039?(w=u(g.substr(i,2)),x=u(g.substr(i+2,2)),j=w>=q&&r>=w&&x>=q&&r>=x||x>=s&&t>=x?4:2,h+=B&&" "!==p?d()+g.substr(i,j)+"</"+y+">":g.substr(i,j),i+=j-1):h+=B&&" "!==p?d()+p+"</"+y+">":p;a.outerHTML=h+(G?F:""),v&&z(I,"{{LT}}","<")},G=function(a,b,c,d){var e,f,g=B(a.childNodes),h=g.length,j="absolute"===b.position||b.absolute===!0;if(3!==a.nodeType||h>1){for(b.absolute=!1,e=0;h>e;e++)f=g[e],(3!==f.nodeType||/\S+/.test(f.nodeValue))&&(j&&3!==f.nodeType&&"inline"===i(f,"display",null,!0)&&(f.style.display="inline-block",f.style.position="relative"),f._isSplit=!0,G(f,b,c,d));return b.absolute=j,void(a._isSplit=!0)}F(a,b,c,d)},H=y.prototype;H.split=function(a){this.isSplit&&this.revert(),this.vars=a=a||this.vars,this._originals.length=this.chars.length=this.words.length=this.lines.length=0;for(var b,c,d,e=this.elements.length,f=a.span?"span":"div",g=("absolute"===a.position||a.absolute===!0,x(a.wordsClass,f)),h=x(a.charsClass,f);--e>-1;)d=this.elements[e],this._originals[e]=d.innerHTML,b=d.clientHeight,c=d.clientWidth,G(d,a,g,h),E(d,a,this.chars,this.words,this.lines,c,b);return this.chars.reverse(),this.words.reverse(),this.lines.reverse(),this.isSplit=!0,this},H.revert=function(){if(!this._originals)throw"revert() call wasn't scoped properly.";for(var a=this._originals.length;--a>-1;)this.elements[a].innerHTML=this._originals[a];return this.chars=[],this.words=[],this.lines=[],this.isSplit=!1,this},y.selector=a.$||a.jQuery||function(b){var c=a.$||a.jQuery;return c?(y.selector=c,c(b)):"undefined"==typeof document?b:document.querySelectorAll?document.querySelectorAll(b):document.getElementById("#"===b.charAt(0)?b.substr(1):b)},y.version="0.5.6"}(_gsScope),function(a){"use strict";var b=function(){return(_gsScope.GreenSockGlobals||_gsScope)[a]};"function"==typeof define&&define.amd?define([],b):"undefined"!=typeof module&&module.exports&&(module.exports=b())}("SplitText");try{window.GreenSockGlobals=null;window._gsQueue=null;window._gsDefine=null;delete(window.GreenSockGlobals);delete(window._gsQueue);delete(window._gsDefine)}catch(e){}
try{window.GreenSockGlobals=oldgs;window._gsQueue=oldgs_queue}catch(e){}
if(window.tplogs==!0)
try{console.groupEnd()}catch(e){}(function(e,t){e.waitForImages={hasImageProperties:["backgroundImage","listStyleImage","borderImage","borderCornerImage"]};e.expr[":"].uncached=function(t){var n=document.createElement("img");n.src=t.src;return e(t).is('img[src!=""]')&&!n.complete};e.fn.waitForImages=function(t,n,r){if(e.isPlainObject(arguments[0])){n=t.each;r=t.waitForAll;t=t.finished}t=t||e.noop;n=n||e.noop;r=!!r;if(!e.isFunction(t)||!e.isFunction(n)){throw new TypeError("An invalid callback was supplied.")}return this.each(function(){var i=e(this),s=[];if(r){var o=e.waitForImages.hasImageProperties||[],u=/url\((['"]?)(.*?)\1\)/g;i.find("*").each(function(){var t=e(this);if(t.is("img:uncached")){s.push({src:t.attr("src"),element:t[0]})}e.each(o,function(e,n){var r=t.css(n);if(!r){return!0}var i;while(i=u.exec(r)){s.push({src:i[2],element:t[0]})}})})}else{i.find("img:uncached").each(function(){s.push({src:this.src,element:this})})}var f=s.length,l=0;if(f==0){t.call(i[0])}e.each(s,function(r,s){var o=new Image;e(o).bind("load error",function(e){l++;n.call(s.element,l,f,e.type=="load");if(l==f){t.call(i[0]);return!1}});o.src=s.src})})}})(jQuery);!function(jQuery,undefined){"use strict";var version={core:"5.4.8","revolution.extensions.actions.min.js":"2.1.0","revolution.extensions.carousel.min.js":"1.2.1","revolution.extensions.kenburn.min.js":"1.3.1","revolution.extensions.layeranimation.min.js":"3.6.5","revolution.extensions.navigation.min.js":"1.3.5","revolution.extensions.parallax.min.js":"2.2.3","revolution.extensions.slideanims.min.js":"1.8","revolution.extensions.video.min.js":"2.2.2"};jQuery.fn.extend({revolution:function(i){var e={delay:9e3,responsiveLevels:4064,visibilityLevels:[2048,1024,778,480],gridwidth:960,gridheight:500,minHeight:0,autoHeight:"off",sliderType:"standard",sliderLayout:"auto",fullScreenAutoWidth:"off",fullScreenAlignForce:"off",fullScreenOffsetContainer:"",fullScreenOffset:"0",hideCaptionAtLimit:0,hideAllCaptionAtLimit:0,hideSliderAtLimit:0,disableProgressBar:"off",stopAtSlide:-1,stopAfterLoops:-1,shadow:0,dottedOverlay:"none",startDelay:0,lazyType:"smart",spinner:"spinner0",shuffle:"off",viewPort:{enable:!1,outof:"wait",visible_area:"60%",presize:!1},fallbacks:{isJoomla:!1,panZoomDisableOnMobile:"off",simplifyAll:"on",nextSlideOnWindowFocus:"off",disableFocusListener:!0,ignoreHeightChanges:"off",ignoreHeightChangesSize:0,allowHTML5AutoPlayOnAndroid:!0},parallax:{type:"off",levels:[10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85],origo:"enterpoint",speed:400,bgparallax:"off",opacity:"on",disable_onmobile:"off",ddd_shadow:"on",ddd_bgfreeze:"off",ddd_overflow:"visible",ddd_layer_overflow:"visible",ddd_z_correction:65,ddd_path:"mouse"},scrolleffect:{fade:"off",blur:"off",scale:"off",grayscale:"off",maxblur:10,on_layers:"off",on_slidebg:"off",on_static_layers:"off",on_parallax_layers:"off",on_parallax_static_layers:"off",direction:"both",multiplicator:1.35,multiplicator_layers:.5,tilt:30,disable_on_mobile:"on"},carousel:{easing:punchgs.Power3.easeInOut,speed:800,showLayersAllTime:"off",horizontal_align:"center",vertical_align:"center",infinity:"on",space:0,maxVisibleItems:3,stretch:"off",fadeout:"on",maxRotation:0,minScale:0,vary_fade:"off",vary_rotation:"on",vary_scale:"off",border_radius:"0px",padding_top:0,padding_bottom:0},navigation:{keyboardNavigation:"off",keyboard_direction:"horizontal",mouseScrollNavigation:"off",onHoverStop:"on",touch:{touchenabled:"off",touchOnDesktop:"off",swipe_treshold:75,swipe_min_touches:1,drag_block_vertical:!1,swipe_direction:"horizontal"},arrows:{style:"",enable:!1,hide_onmobile:!1,hide_onleave:!0,hide_delay:200,hide_delay_mobile:1200,hide_under:0,hide_over:9999,tmp:"",rtl:!1,left:{h_align:"left",v_align:"center",h_offset:20,v_offset:0,container:"slider"},right:{h_align:"right",v_align:"center",h_offset:20,v_offset:0,container:"slider"}},bullets:{container:"slider",rtl:!1,style:"",enable:!1,hide_onmobile:!1,hide_onleave:!0,hide_delay:200,hide_delay_mobile:1200,hide_under:0,hide_over:9999,direction:"horizontal",h_align:"left",v_align:"center",space:0,h_offset:20,v_offset:0,tmp:'<span class="tp-bullet-image"></span><span class="tp-bullet-title"></span>'},thumbnails:{container:"slider",rtl:!1,style:"",enable:!1,width:100,height:50,min_width:100,wrapper_padding:2,wrapper_color:"#f5f5f5",wrapper_opacity:1,tmp:'<span class="tp-thumb-image"></span><span class="tp-thumb-title"></span>',visibleAmount:5,hide_onmobile:!1,hide_onleave:!0,hide_delay:200,hide_delay_mobile:1200,hide_under:0,hide_over:9999,direction:"horizontal",span:!1,position:"inner",space:2,h_align:"left",v_align:"center",h_offset:20,v_offset:0},tabs:{container:"slider",rtl:!1,style:"",enable:!1,width:100,min_width:100,height:50,wrapper_padding:10,wrapper_color:"#f5f5f5",wrapper_opacity:1,tmp:'<span class="tp-tab-image"></span>',visibleAmount:5,hide_onmobile:!1,hide_onleave:!0,hide_delay:200,hide_delay_mobile:1200,hide_under:0,hide_over:9999,direction:"horizontal",span:!1,space:0,position:"inner",h_align:"left",v_align:"center",h_offset:20,v_offset:0}},extensions:"extensions/",extensions_suffix:".min.js",debugMode:!1};return i=jQuery.extend(!0,{},e,i),this.each(function(){var e=jQuery(this);i.minHeight=i.minHeight!=undefined?parseInt(i.minHeight,0):i.minHeight,i.scrolleffect.on="on"===i.scrolleffect.fade||"on"===i.scrolleffect.scale||"on"===i.scrolleffect.blur||"on"===i.scrolleffect.grayscale,"hero"==i.sliderType&&e.find(">ul>li").each(function(e){0<e&&jQuery(this).remove()}),i.jsFileLocation=i.jsFileLocation||getScriptLocation("themepunch.revolution.min.js"),i.jsFileLocation=i.jsFileLocation+i.extensions,i.scriptsneeded=getNeededScripts(i,e),i.curWinRange=0,i.rtl=!0,i.navigation!=undefined&&i.navigation.touch!=undefined&&(i.navigation.touch.swipe_min_touches=5<i.navigation.touch.swipe_min_touches?1:i.navigation.touch.swipe_min_touches),jQuery(this).on("scriptsloaded",function(){if(i.modulesfailing)return e.html('<div style="margin:auto;line-height:40px;font-size:14px;color:#fff;padding:15px;background:#e74c3c;margin:20px 0px;">!! Error at loading Slider Revolution 5.0 Extrensions.'+i.errorm+"</div>").show(),!1;_R.migration!=undefined&&(i=_R.migration(e,i)),punchgs.force3D=!0,"on"!==i.simplifyAll&&punchgs.TweenLite.lagSmoothing(1e3,16),prepareOptions(e,i),initSlider(e,i)}),e[0].opt=i,waitForScripts(e,i)})},getRSVersion:function(e){if(!0===e)return jQuery("body").data("tp_rs_version");var i=jQuery("body").data("tp_rs_version"),t="";for(var a in t+="---------------------------------------------------------\n",t+="    Currently Loaded Slider Revolution & SR Modules :\n",t+="---------------------------------------------------------\n",i)t+=i[a].alias+": "+i[a].ver+"\n";return t+="---------------------------------------------------------\n"},revremoveslide:function(r){return this.each(function(){var e=jQuery(this),i=e[0].opt;if(!(r<0||r>i.slideamount)&&e!=undefined&&0<e.length&&0<jQuery("body").find("#"+e.attr("id")).length&&i&&0<i.li.length&&(0<r||r<=i.li.length)){var t=jQuery(i.li[r]),a=t.data("index"),n=!1;i.slideamount=i.slideamount-1,i.realslideamount=i.realslideamount-1,removeNavWithLiref(".tp-bullet",a,i),removeNavWithLiref(".tp-tab",a,i),removeNavWithLiref(".tp-thumb",a,i),t.hasClass("active-revslide")&&(n=!0),t.remove(),i.li=removeArray(i.li,r),i.carousel&&i.carousel.slides&&(i.carousel.slides=removeArray(i.carousel.slides,r)),i.thumbs=removeArray(i.thumbs,r),_R.updateNavIndexes&&_R.updateNavIndexes(i),n&&e.revnext(),punchgs.TweenLite.set(i.li,{minWidth:"99%"}),punchgs.TweenLite.set(i.li,{minWidth:"100%"})}})},revaddcallback:function(e){return this.each(function(){this.opt&&(this.opt.callBackArray===undefined&&(this.opt.callBackArray=new Array),this.opt.callBackArray.push(e))})},revgetparallaxproc:function(){return jQuery(this)[0].opt.scrollproc},revdebugmode:function(){return this.each(function(){var e=jQuery(this);e[0].opt.debugMode=!0,containerResized(e,e[0].opt)})},revscroll:function(i){return this.each(function(){var e=jQuery(this);jQuery("body,html").animate({scrollTop:e.offset().top+e.height()-i+"px"},{duration:400})})},revredraw:function(e){return this.each(function(){var e=jQuery(this);containerResized(e,e[0].opt)})},revkill:function(e){var i=this,t=jQuery(this);if(punchgs.TweenLite.killDelayedCallsTo(_R.showHideNavElements),t!=undefined&&0<t.length&&0<jQuery("body").find("#"+t.attr("id")).length){t.data("conthover",1),t.data("conthover-changed",1),t.trigger("revolution.slide.onpause");var a=t.parent().find(".tp-bannertimer"),n=t[0].opt;n.tonpause=!0,t.trigger("stoptimer");var r="resize.revslider-"+t.attr("id");jQuery(window).unbind(r),punchgs.TweenLite.killTweensOf(t.find("*"),!1),punchgs.TweenLite.killTweensOf(t,!1),t.unbind("hover, mouseover, mouseenter,mouseleave, resize");r="resize.revslider-"+t.attr("id");jQuery(window).off(r),t.find("*").each(function(){var e=jQuery(this);e.unbind("on, hover, mouseenter,mouseleave,mouseover, resize,restarttimer, stoptimer"),e.off("on, hover, mouseenter,mouseleave,mouseover, resize"),e.data("mySplitText",null),e.data("ctl",null),e.data("tween")!=undefined&&e.data("tween").kill(),e.data("kenburn")!=undefined&&e.data("kenburn").kill(),e.data("timeline_out")!=undefined&&e.data("timeline_out").kill(),e.data("timeline")!=undefined&&e.data("timeline").kill(),e.remove(),e.empty(),e=null}),punchgs.TweenLite.killTweensOf(t.find("*"),!1),punchgs.TweenLite.killTweensOf(t,!1),a.remove();try{t.closest(".forcefullwidth_wrapper_tp_banner").remove()}catch(e){}try{t.closest(".rev_slider_wrapper").remove()}catch(e){}try{t.remove()}catch(e){}return t.empty(),t.html(),n=t=null,delete i.c,delete i.opt,delete i.container,!0}return!1},revpause:function(){return this.each(function(){var e=jQuery(this);e!=undefined&&0<e.length&&0<jQuery("body").find("#"+e.attr("id")).length&&(e.data("conthover",1),e.data("conthover-changed",1),e.trigger("revolution.slide.onpause"),e[0].opt.tonpause=!0,e.trigger("stoptimer"))})},revresume:function(){return this.each(function(){var e=jQuery(this);e!=undefined&&0<e.length&&0<jQuery("body").find("#"+e.attr("id")).length&&(e.data("conthover",0),e.data("conthover-changed",1),e.trigger("revolution.slide.onresume"),e[0].opt.tonpause=!1,e.trigger("starttimer"))})},revstart:function(){var e=jQuery(this);if(e!=undefined&&0<e.length&&0<jQuery("body").find("#"+e.attr("id")).length&&e[0].opt!==undefined)return e[0].opt.sliderisrunning?(console.log("Slider Is Running Already"),!1):((e[0].opt.c=e)[0].opt.ul=e.find(">ul"),runSlider(e,e[0].opt),!0)},revnext:function(){return this.each(function(){var e=jQuery(this);e!=undefined&&0<e.length&&0<jQuery("body").find("#"+e.attr("id")).length&&_R.callingNewSlide(e,1)})},revprev:function(){return this.each(function(){var e=jQuery(this);e!=undefined&&0<e.length&&0<jQuery("body").find("#"+e.attr("id")).length&&_R.callingNewSlide(e,-1)})},revmaxslide:function(){return jQuery(this).find(".tp-revslider-mainul >li").length},revcurrentslide:function(){var e=jQuery(this);if(e!=undefined&&0<e.length&&0<jQuery("body").find("#"+e.attr("id")).length)return parseInt(e[0].opt.act,0)+1},revlastslide:function(){return jQuery(this).find(".tp-revslider-mainul >li").length},revshowslide:function(i){return this.each(function(){var e=jQuery(this);e!=undefined&&0<e.length&&0<jQuery("body").find("#"+e.attr("id")).length&&_R.callingNewSlide(e,"to"+(i-1))})},revcallslidewithid:function(i){return this.each(function(){var e=jQuery(this);e!=undefined&&0<e.length&&0<jQuery("body").find("#"+e.attr("id")).length&&_R.callingNewSlide(e,i)})}});var _R=jQuery.fn.revolution;jQuery.extend(!0,_R,{getversion:function(){return version},compare_version:function(e){var i=jQuery("body").data("tp_rs_version");return(i=i===undefined?new Object:i).Core===undefined&&(i.Core=new Object,i.Core.alias="Slider Revolution Core",i.Core.name="jquery.themepunch.revolution.min.js",i.Core.ver=_R.getversion().core),"stop"!=e.check&&(_R.getversion().core<e.min_core?(e.check===undefined&&(console.log("%cSlider Revolution Warning (Core:"+_R.getversion().core+")","color:#c0392b;font-weight:bold;"),console.log("%c     Core is older than expected ("+e.min_core+") from "+e.alias,"color:#333"),console.log("%c     Please update Slider Revolution to the latest version.","color:#333"),console.log("%c     It might be required to purge and clear Server/Client side Caches.","color:#333")),e.check="stop"):_R.getversion()[e.name]!=undefined&&e.version<_R.getversion()[e.name]&&(e.check===undefined&&(console.log("%cSlider Revolution Warning (Core:"+_R.getversion().core+")","color:#c0392b;font-weight:bold;"),console.log("%c     "+e.alias+" ("+e.version+") is older than requiered ("+_R.getversion()[e.name]+")","color:#333"),console.log("%c     Please update Slider Revolution to the latest version.","color:#333"),console.log("%c     It might be required to purge and clear Server/Client side Caches.","color:#333")),e.check="stop")),i[e.alias]===undefined&&(i[e.alias]=new Object,i[e.alias].alias=e.alias,i[e.alias].ver=e.version,i[e.alias].name=e.name),jQuery("body").data("tp_rs_version",i),e},currentSlideIndex:function(e){var i=e.c.find(".active-revslide").index();return i=-1==i?0:i},simp:function(e,i,t){var a=Math.abs(e)-Math.floor(Math.abs(e/i))*i;return t?a:e<0?-1*a:a},iOSVersion:function(){var e=!1;return navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/iPad/i)?navigator.userAgent.match(/OS 4_\d like Mac OS X/i)&&(e=!0):e=!1,e},isIE:function(e,i){var t=jQuery('<div style="display:none;"/>').appendTo(jQuery("body"));t.html("\x3c!--[if "+(i||"")+" IE "+(e||"")+"]><a>&nbsp;</a><![endif]--\x3e");var a=t.find("a").length;return t.remove(),a},is_mobile:function(){var e=["android","webos","iphone","ipad","blackberry","Android","webos",,"iPod","iPhone","iPad","Blackberry","BlackBerry"],i=!1;for(var t in e)1<navigator.userAgent.split(e[t]).length&&(i=!0);return i},is_android:function(){var e=["android","Android"],i=!1;for(var t in e)1<navigator.userAgent.split(e[t]).length&&(i=!0);return i},callBackHandling:function(e,t,a){try{e.callBackArray&&jQuery.each(e.callBackArray,function(e,i){i&&i.inmodule&&i.inmodule===t&&i.atposition&&i.atposition===a&&i.callback&&i.callback.call()})}catch(e){console.log("Call Back Failed")}},get_browser:function(){var e,i=navigator.appName,t=navigator.userAgent,a=t.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);return a&&null!=(e=t.match(/version\/([\.\d]+)/i))&&(a[2]=e[1]),(a=a?[a[1],a[2]]:[i,navigator.appVersion,"-?"])[0]},get_browser_version:function(){var e,i=navigator.appName,t=navigator.userAgent,a=t.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);return a&&null!=(e=t.match(/version\/([\.\d]+)/i))&&(a[2]=e[1]),(a=a?[a[1],a[2]]:[i,navigator.appVersion,"-?"])[1]},isSafari11:function(){var e=jQuery.trim(_R.get_browser().toLowerCase());return-1===jQuery.trim(navigator.userAgent.toLowerCase()).search("edge")&&"msie"!==e&&e.match(/safari|chrome/)},getHorizontalOffset:function(e,i){var t=gWiderOut(e,".outer-left"),a=gWiderOut(e,".outer-right");switch(i){case"left":return t;case"right":return a;case"both":return t+a}},callingNewSlide:function(e,i){var t=0<e.find(".next-revslide").length?e.find(".next-revslide").index():0<e.find(".processing-revslide").length?e.find(".processing-revslide").index():e.find(".active-revslide").index(),a=0,n=e[0].opt;e.find(".next-revslide").removeClass("next-revslide"),e.find(".active-revslide").hasClass("tp-invisible-slide")&&(t=n.last_shown_slide),i&&jQuery.isNumeric(i)||i.match(/to/g)?(a=1===i||-1===i?(a=t+i)<0?n.slideamount-1:a>=n.slideamount?0:a:(i=jQuery.isNumeric(i)?i:parseInt(i.split("to")[1],0))<0?0:i>n.slideamount-1?n.slideamount-1:i,e.find(".tp-revslider-slidesli:eq("+a+")").addClass("next-revslide")):i&&e.find(".tp-revslider-slidesli").each(function(){var e=jQuery(this);e.data("index")===i&&e.addClass("next-revslide")}),a=e.find(".next-revslide").index(),e.trigger("revolution.nextslide.waiting"),t===a&&t===n.last_shown_slide||a!==t&&-1!=a?swapSlide(e):e.find(".next-revslide").removeClass("next-revslide")},slotSize:function(e,i){i.slotw=Math.ceil(i.width/i.slots),"fullscreen"==i.sliderLayout?i.sloth=Math.ceil(jQuery(window).height()/i.slots):i.sloth=Math.ceil(i.height/i.slots),"on"==i.autoHeight&&e!==undefined&&""!==e&&(i.sloth=Math.ceil(e.height()/i.slots))},setSize:function(e){var i=(e.top_outer||0)+(e.bottom_outer||0),t=parseInt(e.carousel.padding_top||0,0),a=parseInt(e.carousel.padding_bottom||0,0),n=e.gridheight[e.curWinRange],r=0,o=-1===e.nextSlide||e.nextSlide===undefined?0:e.nextSlide;if(e.paddings=e.paddings===undefined?{top:parseInt(e.c.parent().css("paddingTop"),0)||0,bottom:parseInt(e.c.parent().css("paddingBottom"),0)||0}:e.paddings,e.rowzones&&0<e.rowzones.length)for(var s=0;s<e.rowzones[o].length;s++)r+=e.rowzones[o][s][0].offsetHeight;if(n=(n=n<e.minHeight?e.minHeight:n)<r?r:n,"fullwidth"==e.sliderLayout&&"off"==e.autoHeight&&punchgs.TweenLite.set(e.c,{maxHeight:n+"px"}),e.c.css({marginTop:t,marginBottom:a}),e.width=e.ul.width(),e.height=e.ul.height(),setScale(e),e.height=Math.round(e.gridheight[e.curWinRange]*(e.width/e.gridwidth[e.curWinRange])),e.height>e.gridheight[e.curWinRange]&&"on"!=e.autoHeight&&(e.height=e.gridheight[e.curWinRange]),"fullscreen"==e.sliderLayout||e.infullscreenmode){e.height=e.bw*e.gridheight[e.curWinRange];e.c.parent().width();var l=jQuery(window).height();if(e.fullScreenOffsetContainer!=undefined){try{var d=e.fullScreenOffsetContainer.split(",");d&&jQuery.each(d,function(e,i){l=0<jQuery(i).length?l-jQuery(i).outerHeight(!0):l})}catch(e){}try{1<e.fullScreenOffset.split("%").length&&e.fullScreenOffset!=undefined&&0<e.fullScreenOffset.length?l-=jQuery(window).height()*parseInt(e.fullScreenOffset,0)/100:e.fullScreenOffset!=undefined&&0<e.fullScreenOffset.length&&(l-=parseInt(e.fullScreenOffset,0))}catch(e){}}l=l<e.minHeight?e.minHeight:l,l-=i,e.c.parent().height(l),e.c.closest(".rev_slider_wrapper").height(l),e.c.css({height:"100%"}),e.height=l,e.minHeight!=undefined&&e.height<e.minHeight&&(e.height=e.minHeight),e.height=parseInt(r,0)>parseInt(e.height,0)?r:e.height}else e.minHeight!=undefined&&e.height<e.minHeight&&(e.height=e.minHeight),e.height=parseInt(r,0)>parseInt(e.height,0)?r:e.height,e.c.height(e.height);var c={height:t+a+i+e.height+e.paddings.top+e.paddings.bottom};e.c.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").css(c),e.c.closest(".rev_slider_wrapper").css(c),setScale(e)},enterInViewPort:function(t){t.waitForCountDown&&(countDown(t.c,t),t.waitForCountDown=!1),t.waitForFirstSlide&&(swapSlide(t.c),t.waitForFirstSlide=!1,setTimeout(function(){t.c.removeClass("tp-waitforfirststart")},500)),"playing"!=t.sliderlaststatus&&t.sliderlaststatus!=undefined||t.c.trigger("starttimer"),t.lastplayedvideos!=undefined&&0<t.lastplayedvideos.length&&jQuery.each(t.lastplayedvideos,function(e,i){_R.playVideo(i,t)})},leaveViewPort:function(t){t.sliderlaststatus=t.sliderstatus,t.c.trigger("stoptimer"),t.playingvideos!=undefined&&0<t.playingvideos.length&&(t.lastplayedvideos=jQuery.extend(!0,[],t.playingvideos),t.playingvideos&&jQuery.each(t.playingvideos,function(e,i){t.leaveViewPortBasedStop=!0,_R.stopVideo&&_R.stopVideo(i,t)}))},unToggleState:function(e){e!=undefined&&0<e.length&&jQuery.each(e,function(e,i){i.removeClass("rs-toggle-content-active")})},toggleState:function(e){e!=undefined&&0<e.length&&jQuery.each(e,function(e,i){i.addClass("rs-toggle-content-active")})},swaptoggleState:function(e){e!=undefined&&0<e.length&&jQuery.each(e,function(e,i){jQuery(i).hasClass("rs-toggle-content-active")?jQuery(i).removeClass("rs-toggle-content-active"):jQuery(i).addClass("rs-toggle-content-active")})},lastToggleState:function(e){var t=0;return e!=undefined&&0<e.length&&jQuery.each(e,function(e,i){t=i.hasClass("rs-toggle-content-active")}),t}});var _ISM=_R.is_mobile(),_ANDROID=_R.is_android(),checkIDS=function(e,i){if(e.anyid=e.anyid===undefined?[]:e.anyid,-1!=jQuery.inArray(i.attr("id"),e.anyid)){var t=i.attr("id")+"_"+Math.round(9999*Math.random());i.attr("id",t)}e.anyid.push(i.attr("id"))},removeArray=function(e,t){var a=[];return jQuery.each(e,function(e,i){e!=t&&a.push(i)}),a},removeNavWithLiref=function(e,i,t){t.c.find(e).each(function(){var e=jQuery(this);e.data("liref")===i&&e.remove()})},lAjax=function(i,t){return!jQuery("body").data(i)&&(t.filesystem?(t.errorm===undefined&&(t.errorm="<br>Local Filesystem Detected !<br>Put this to your header:"),console.warn("Local Filesystem detected !"),t.errorm=t.errorm+'<br>&lt;script type="text/javascript" src="'+t.jsFileLocation+i+t.extensions_suffix+'"&gt;&lt;/script&gt;',console.warn(t.jsFileLocation+i+t.extensions_suffix+" could not be loaded !"),console.warn("Please use a local Server or work online or make sure that you load all needed Libraries manually in your Document."),console.log(" "),!(t.modulesfailing=!0)):(jQuery.ajax({url:t.jsFileLocation+i+t.extensions_suffix+"?version="+version.core,dataType:"script",cache:!0,error:function(e){console.warn("Slider Revolution 5.0 Error !"),console.error("Failure at Loading:"+i+t.extensions_suffix+" on Path:"+t.jsFileLocation),console.info(e)}}),void jQuery("body").data(i,!0)))},getNeededScripts=function(t,e){var i=new Object,a=t.navigation;return i.kenburns=!1,i.parallax=!1,i.carousel=!1,i.navigation=!1,i.videos=!1,i.actions=!1,i.layeranim=!1,i.migration=!1,e.data("version")&&e.data("version").toString().match(/5./gi)?(e.find("img").each(function(){"on"==jQuery(this).data("kenburns")&&(i.kenburns=!0)}),("carousel"==t.sliderType||"on"==a.keyboardNavigation||"on"==a.mouseScrollNavigation||"on"==a.touch.touchenabled||a.arrows.enable||a.bullets.enable||a.thumbnails.enable||a.tabs.enable)&&(i.navigation=!0),e.find(".tp-caption, .tp-static-layer, .rs-background-video-layer").each(function(){var e=jQuery(this);(e.data("ytid")!=undefined||0<e.find("iframe").length&&0<e.find("iframe").attr("src").toLowerCase().indexOf("youtube"))&&(i.videos=!0),(e.data("vimeoid")!=undefined||0<e.find("iframe").length&&0<e.find("iframe").attr("src").toLowerCase().indexOf("vimeo"))&&(i.videos=!0),e.data("actions")!==undefined&&(i.actions=!0),i.layeranim=!0}),e.find("li").each(function(){jQuery(this).data("link")&&jQuery(this).data("link")!=undefined&&(i.layeranim=!0,i.actions=!0)}),!i.videos&&(0<e.find(".rs-background-video-layer").length||0<e.find(".tp-videolayer").length||0<e.find(".tp-audiolayer").length||0<e.find("iframe").length||0<e.find("video").length)&&(i.videos=!0),"carousel"==t.sliderType&&(i.carousel=!0),("off"!==t.parallax.type||t.viewPort.enable||"true"==t.viewPort.enable||"true"===t.scrolleffect.on||t.scrolleffect.on)&&(i.parallax=!0)):(i.kenburns=!0,i.parallax=!0,i.carousel=!1,i.navigation=!0,i.videos=!0,i.actions=!0,i.layeranim=!0,i.migration=!0),"hero"==t.sliderType&&(i.carousel=!1,i.navigation=!1),window.location.href.match(/file:/gi)&&(i.filesystem=!0,t.filesystem=!0),i.videos&&void 0===_R.isVideoPlaying&&lAjax("revolution.extension.video",t),i.carousel&&void 0===_R.prepareCarousel&&lAjax("revolution.extension.carousel",t),i.carousel||void 0!==_R.animateSlide||lAjax("revolution.extension.slideanims",t),i.actions&&void 0===_R.checkActions&&lAjax("revolution.extension.actions",t),i.layeranim&&void 0===_R.handleStaticLayers&&lAjax("revolution.extension.layeranimation",t),i.kenburns&&void 0===_R.stopKenBurn&&lAjax("revolution.extension.kenburn",t),i.navigation&&void 0===_R.createNavigation&&lAjax("revolution.extension.navigation",t),i.migration&&void 0===_R.migration&&lAjax("revolution.extension.migration",t),i.parallax&&void 0===_R.checkForParallax&&lAjax("revolution.extension.parallax",t),t.addons!=undefined&&0<t.addons.length&&jQuery.each(t.addons,function(e,i){"object"==typeof i&&i.fileprefix!=undefined&&lAjax(i.fileprefix,t)}),i},waitForScripts=function(e,i){var t=!0,a=i.scriptsneeded;i.addons!=undefined&&0<i.addons.length&&jQuery.each(i.addons,function(e,i){"object"==typeof i&&i.init!=undefined&&_R[i.init]===undefined&&(t=!1)}),a.filesystem||"undefined"!=typeof punchgs&&t&&(!a.kenburns||a.kenburns&&void 0!==_R.stopKenBurn)&&(!a.navigation||a.navigation&&void 0!==_R.createNavigation)&&(!a.carousel||a.carousel&&void 0!==_R.prepareCarousel)&&(!a.videos||a.videos&&void 0!==_R.resetVideo)&&(!a.actions||a.actions&&void 0!==_R.checkActions)&&(!a.layeranim||a.layeranim&&void 0!==_R.handleStaticLayers)&&(!a.migration||a.migration&&void 0!==_R.migration)&&(!a.parallax||a.parallax&&void 0!==_R.checkForParallax)&&(a.carousel||!a.carousel&&void 0!==_R.animateSlide)?e.trigger("scriptsloaded"):setTimeout(function(){waitForScripts(e,i)},50)},getScriptLocation=function(e){var i=new RegExp("themepunch.revolution.min.js","gi"),t="";return jQuery("script").each(function(){var e=jQuery(this).attr("src");e&&e.match(i)&&(t=e)}),t=(t=(t=t.replace("jquery.themepunch.revolution.min.js","")).replace("jquery.themepunch.revolution.js","")).split("?")[0]},setCurWinRange=function(e,i){var t=9999,a=0,n=0,r=0,o=jQuery(window).width(),s=i&&9999==e.responsiveLevels?e.visibilityLevels:e.responsiveLevels;s&&s.length&&jQuery.each(s,function(e,i){o<i&&(0==a||i<a)&&(r=e,a=t=i),i<o&&a<i&&(a=i,n=e)}),a<t&&(r=n),i?e.forcedWinRange=r:e.curWinRange=r},prepareOptions=function(e,i){i.carousel.maxVisibleItems=i.carousel.maxVisibleItems<1?999:i.carousel.maxVisibleItems,i.carousel.vertical_align="top"===i.carousel.vertical_align?"0%":"bottom"===i.carousel.vertical_align?"100%":"50%"},gWiderOut=function(e,i){var t=0;return e.find(i).each(function(){var e=jQuery(this);!e.hasClass("tp-forcenotvisible")&&t<e.outerWidth()&&(t=e.outerWidth())}),t},initSlider=function(container,opt){if(container==undefined)return!1;container.data("aimg")!=undefined&&("enabled"==container.data("aie8")&&_R.isIE(8)||"enabled"==container.data("amobile")&&_ISM)&&container.html('<img class="tp-slider-alternative-image" src="'+container.data("aimg")+'">'),container.find(">ul").addClass("tp-revslider-mainul"),opt.c=container,opt.ul=container.find(".tp-revslider-mainul"),opt.ul.find(">li").each(function(e){var i=jQuery(this);"on"==i.data("hideslideonmobile")&&_ISM&&i.remove(),(i.data("invisible")||!0===i.data("invisible"))&&(i.addClass("tp-invisible-slide"),i.appendTo(opt.ul))}),opt.addons!=undefined&&0<opt.addons.length&&jQuery.each(opt.addons,function(i,obj){"object"==typeof obj&&obj.init!=undefined&&_R[obj.init](eval(obj.params))}),opt.cid=container.attr("id"),opt.ul.css({visibility:"visible"}),opt.slideamount=opt.ul.find(">li").not(".tp-invisible-slide").length,opt.realslideamount=opt.ul.find(">li").length,opt.slayers=container.find(".tp-static-layers"),opt.slayers.data("index","staticlayers"),1!=opt.waitForInit&&(container[0].opt=opt,runSlider(container,opt))},onFullScreenChange=function(){jQuery("body").data("rs-fullScreenMode",!jQuery("body").data("rs-fullScreenMode")),jQuery("body").data("rs-fullScreenMode")&&setTimeout(function(){jQuery(window).trigger("resize")},200)},runSlider=function(t,x){if(x.sliderisrunning=!0,x.ul.find(">li").each(function(e){jQuery(this).data("originalindex",e)}),x.allli=x.ul.find(">li"),jQuery.each(x.allli,function(e,i){(i=jQuery(i)).data("origindex",i.index())}),x.li=x.ul.find(">li").not(".tp-invisible-slide"),"on"==x.shuffle){var e=new Object,i=x.ul.find(">li:first-child");e.fstransition=i.data("fstransition"),e.fsmasterspeed=i.data("fsmasterspeed"),e.fsslotamount=i.data("fsslotamount");for(var a=0;a<x.slideamount;a++){var n=Math.round(Math.random()*x.slideamount);x.ul.find(">li:eq("+n+")").prependTo(x.ul)}var r=x.ul.find(">li:first-child");r.data("fstransition",e.fstransition),r.data("fsmasterspeed",e.fsmasterspeed),r.data("fsslotamount",e.fsslotamount),x.allli=x.ul.find(">li"),x.li=x.ul.find(">li").not(".tp-invisible-slide")}if(x.inli=x.ul.find(">li.tp-invisible-slide"),x.thumbs=new Array,x.slots=4,x.act=-1,x.firststart=1,x.loadqueue=new Array,x.syncload=0,x.conw=t.width(),x.conh=t.height(),1<x.responsiveLevels.length?x.responsiveLevels[0]=9999:x.responsiveLevels=9999,jQuery.each(x.allli,function(e,i){var t=(i=jQuery(i)).find(".rev-slidebg")||i.find("img").first(),a=0;i.addClass("tp-revslider-slidesli"),i.data("index")===undefined&&i.data("index","rs-"+Math.round(999999*Math.random()));var n=new Object;n.params=new Array,n.id=i.data("index"),n.src=i.data("thumb")!==undefined?i.data("thumb"):t.data("lazyload")!==undefined?t.data("lazyload"):t.attr("src"),i.data("title")!==undefined&&n.params.push({from:RegExp("\\{\\{title\\}\\}","g"),to:i.data("title")}),i.data("description")!==undefined&&n.params.push({from:RegExp("\\{\\{description\\}\\}","g"),to:i.data("description")});for(a=1;a<=10;a++)i.data("param"+a)!==undefined&&n.params.push({from:RegExp("\\{\\{param"+a+"\\}\\}","g"),to:i.data("param"+a)});if(x.thumbs.push(n),i.data("link")!=undefined){var r=i.data("link"),o=i.data("target")||"_self",s="back"===i.data("slideindex")?0:60,l=i.data("linktoslide"),d=l;l!=undefined&&"next"!=l&&"prev"!=l&&x.allli.each(function(){var e=jQuery(this);e.data("origindex")+1==d&&(l=e.data("index"))}),"slide"!=r&&(l="no");var c='<div class="tp-caption slidelink" style="cursor:pointer;width:100%;height:100%;z-index:'+s+';" data-x="center" data-y="center" data-basealign="slide" ',u=' data-frames=\'[{"delay":0,"speed":100,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]\'';c="no"==l?c+u+" >":c+"data-actions='"+("scroll_under"===l?'[{"event":"click","action":"scrollbelow","offset":"100px","delay":"0"}]':"prev"===l?'[{"event":"click","action":"jumptoslide","slide":"prev","delay":"0.2"}]':"next"===l?'[{"event":"click","action":"jumptoslide","slide":"next","delay":"0.2"}]':'[{"event":"click","action":"jumptoslide","slide":"'+l+'","delay":"0.2"}]')+"'"+u+" >",c+='<a style="width:100%;height:100%;display:block"',c="slide"!=r?c+' target="'+o+'" href="'+r+'"':c,c+='><span style="width:100%;height:100%;display:block"></span></a></div>',i.append(c)}}),x.rle=x.responsiveLevels.length||1,x.gridwidth=cArray(x.gridwidth,x.rle),x.gridheight=cArray(x.gridheight,x.rle),"on"==x.simplifyAll&&(_R.isIE(8)||_R.iOSVersion())&&(t.find(".tp-caption").each(function(){var e=jQuery(this);e.removeClass("customin customout").addClass("fadein fadeout"),e.data("splitin",""),e.data("speed",400)}),x.allli.each(function(){var e=jQuery(this);e.data("transition","fade"),e.data("masterspeed",500),e.data("slotamount",1),(e.find(".rev-slidebg")||e.find(">img").first()).data("kenburns","off")})),x.desktop=!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i),x.autoHeight="fullscreen"==x.sliderLayout?"on":x.autoHeight,"fullwidth"==x.sliderLayout&&"off"==x.autoHeight&&t.css({maxHeight:x.gridheight[x.curWinRange]+"px"}),"auto"!=x.sliderLayout&&0==t.closest(".forcefullwidth_wrapper_tp_banner").length&&("fullscreen"!==x.sliderLayout||"on"!=x.fullScreenAutoWidth)){var o=t.parent(),s=o.css("marginBottom"),l=o.css("marginTop"),d=t.attr("id")+"_forcefullwidth";s=s===undefined?0:s,l=l===undefined?0:l,o.wrap('<div class="forcefullwidth_wrapper_tp_banner" id="'+d+'" style="position:relative;width:100%;height:auto;margin-top:'+l+";margin-bottom:"+s+'"></div>'),t.closest(".forcefullwidth_wrapper_tp_banner").append('<div class="tp-fullwidth-forcer" style="width:100%;height:'+t.height()+'px"></div>'),t.parent().css({marginTop:"0px",marginBottom:"0px"}),t.parent().css({position:"absolute"})}if(x.shadow!==undefined&&0<x.shadow&&(t.parent().addClass("tp-shadow"+x.shadow),t.parent().append('<div class="tp-shadowcover"></div>'),t.parent().find(".tp-shadowcover").css({backgroundColor:t.parent().css("backgroundColor"),backgroundImage:t.parent().css("backgroundImage")})),setCurWinRange(x),setCurWinRange(x,!0),!t.hasClass("revslider-initialised")){t.addClass("revslider-initialised"),t.addClass("tp-simpleresponsive"),t.attr("id")==undefined&&t.attr("id","revslider-"+Math.round(1e3*Math.random()+5)),checkIDS(x,t),x.firefox13=!1,x.ie=!jQuery.support.opacity,x.ie9=9==document.documentMode,x.origcd=x.delay;var c=jQuery.fn.jquery.split("."),u=parseFloat(c[0]),p=parseFloat(c[1]);parseFloat(c[2]||"0");1==u&&p<7&&t.html('<div style="text-align:center; padding:40px 0px; font-size:20px; color:#992222;"> The Current Version of jQuery:'+c+" <br>Please update your jQuery Version to min. 1.7 in Case you wish to use the Revolution Slider Plugin</div>"),1<u&&(x.ie=!1);var j=new Object;j.addedyt=0,j.addedvim=0,j.addedvid=0,x.scrolleffect.on&&(x.scrolleffect.layers=new Array),t.find(".tp-caption, .rs-background-video-layer").each(function(e){var n=jQuery(this),i=n.data(),t=i.autoplayonlyfirsttime,a=i.autoplay,r=(i.videomp4!==undefined||i.videowebm!==undefined||i.videoogv,n.hasClass("tp-audiolayer")),o=i.videoloop,s=!0,l=!1;i.startclasses=n.attr("class"),i.isparallaxlayer=0<=i.startclasses.indexOf("rs-parallax"),n.hasClass("tp-static-layer")&&_R.handleStaticLayers&&(_R.handleStaticLayers(n,x),x.scrolleffect.on&&("on"===x.scrolleffect.on_parallax_static_layers&&i.isparallaxlayer||"on"===x.scrolleffect.on_static_layers&&!i.isparallaxlayer)&&(l=!0),s=!1);var d=n.data("noposteronmobile")||n.data("noPosterOnMobile")||n.data("posteronmobile")||n.data("posterOnMobile")||n.data("posterOnMObile");n.data("noposteronmobile",d);var c=0;if(n.find("iframe").each(function(){punchgs.TweenLite.set(jQuery(this),{autoAlpha:0}),c++}),0<c&&n.data("iframes",!0),n.hasClass("tp-caption")){var u=n.hasClass("slidelink")?"width:100% !important;height:100% !important;":"",p=n.data(),f="",h=p.type,g="row"===h||"column"===h?"relative":"absolute",v="";"row"===h?(n.addClass("rev_row").removeClass("tp-resizeme"),v="rev_row_wrap"):"column"===h?(f=p.verticalalign===undefined?" vertical-align:bottom;":" vertical-align:"+p.verticalalign+";",v="rev_column",n.addClass("rev_column_inner").removeClass("tp-resizeme"),n.data("width","auto"),punchgs.TweenLite.set(n,{width:"auto"})):"group"===h&&n.removeClass("tp-resizeme");var m="",y="";"row"!==h&&"group"!==h&&"column"!==h?(m="display:"+n.css("display")+";",0<n.closest(".rev_column").length?(n.addClass("rev_layer_in_column"),s=!1):0<n.closest(".rev_group").length&&(n.addClass("rev_layer_in_group"),s=!1)):"column"===h&&(s=!1),p.wrapper_class!==undefined&&(v=v+" "+p.wrapper_class),p.wrapper_id!==undefined&&(y='id="'+p.wrapper_id+'"');var w="";n.hasClass("tp-no-events")&&(w=";pointer-events:none"),n.wrap("<div "+y+' class="tp-parallax-wrap '+v+'" style="'+f+" "+u+"position:"+g+";"+m+";visibility:hidden"+w+'"><div class="tp-loop-wrap" style="'+u+"position:"+g+";"+m+';"><div class="tp-mask-wrap" style="'+u+"position:"+g+";"+m+';" ></div></div></div>'),s&&x.scrolleffect.on&&("on"===x.scrolleffect.on_parallax_layers&&i.isparallaxlayer||"on"===x.scrolleffect.on_layers&&!i.isparallaxlayer)&&x.scrolleffect.layers.push(n.parent()),l&&x.scrolleffect.layers.push(n.parent()),"column"===h&&(n.append('<div class="rev_column_bg rev_column_bg_man_sized" style="visibility:hidden"></div>'),n.closest(".tp-parallax-wrap").append('<div class="rev_column_bg rev_column_bg_auto_sized"></div>'));var b=n.closest(".tp-loop-wrap");jQuery.each(["pendulum","rotate","slideloop","pulse","wave"],function(e,i){var t=n.find(".rs-"+i),a=t.data()||"";""!=a&&(b.data(a),b.addClass("rs-"+i),t.children(0).unwrap(),n.data("loopanimation","on"))}),n.attr("id")===undefined&&n.attr("id","layer-"+Math.round(999999999*Math.random())),checkIDS(x,n),punchgs.TweenLite.set(n,{visibility:"hidden"})}var _=n.data("actions");_!==undefined&&_R.checkActions(n,x,_),checkHoverDependencies(n,x),_R.checkVideoApis&&(j=_R.checkVideoApis(n,x,j)),r||1!=t&&"true"!=t&&"1sttime"!=a||"loopandnoslidestop"==o||n.closest("li.tp-revslider-slidesli").addClass("rs-pause-timer-once"),r||1!=a&&"true"!=a&&"on"!=a&&"no1sttime"!=a||"loopandnoslidestop"==o||n.closest("li.tp-revslider-slidesli").addClass("rs-pause-timer-always")}),t[0].addEventListener("mouseenter",function(){t.trigger("tp-mouseenter"),x.overcontainer=!0},{passive:!0}),t[0].addEventListener("mouseover",function(){t.trigger("tp-mouseover"),x.overcontainer=!0},{passive:!0}),t[0].addEventListener("mouseleave",function(){t.trigger("tp-mouseleft"),x.overcontainer=!1},{passive:!0}),t.find(".tp-caption video").each(function(e){var i=jQuery(this);i.removeClass("video-js vjs-default-skin"),i.attr("preload",""),i.css({display:"none"})}),"standard"!==x.sliderType&&(x.lazyType="all"),loadImages(t.find(".tp-static-layers"),x,0,!0),waitForCurrentImages(t.find(".tp-static-layers"),x,function(){t.find(".tp-static-layers img").each(function(){var e=jQuery(this),i=e.data("lazyload")!=undefined?e.data("lazyload"):e.attr("src"),t=getLoadObj(x,i);e.attr("src",t.src)})}),x.rowzones=[],x.allli.each(function(e){var i=jQuery(this);x.rowzones[e]=[],i.find(".rev_row_zone").each(function(){x.rowzones[e].push(jQuery(this))}),"all"!=x.lazyType&&("smart"!=x.lazyType||0!=e&&1!=e&&e!=x.slideamount&&e!=x.slideamount-1)||(loadImages(i,x,e),waitForCurrentImages(i,x,function(){}))});var f=getUrlVars("#")[0];if(f.length<9&&1<f.split("slide").length){var h=parseInt(f.split("slide")[1],0);h<1&&(h=1),h>x.slideamount&&(h=x.slideamount),x.startWithSlide=h-1}t.append('<div class="tp-loader '+x.spinner+'"><div class="dot1"></div><div class="dot2"></div><div class="bounce1"></div><div class="bounce2"></div><div class="bounce3"></div></div>'),x.loader=t.find(".tp-loader"),0===t.find(".tp-bannertimer").length&&t.append('<div class="tp-bannertimer" style="visibility:hidden"></div>'),t.find(".tp-bannertimer").css({width:"0%"}),x.ul.css({display:"block"}),prepareSlides(t,x),("off"!==x.parallax.type||x.scrolleffect.on)&&_R.checkForParallax&&_R.checkForParallax(t,x),_R.setSize(x),"hero"!==x.sliderType&&_R.createNavigation&&_R.createNavigation(t,x),_R.resizeThumbsTabs&&_R.resizeThumbsTabs&&_R.resizeThumbsTabs(x),contWidthManager(x);var g=x.viewPort;x.inviewport=!1,g!=undefined&&g.enable&&(jQuery.isNumeric(g.visible_area)||-1!==g.visible_area.indexOf("%")&&(g.visible_area=parseInt(g.visible_area)/100),_R.scrollTicker&&_R.scrollTicker(x,t)),"carousel"===x.sliderType&&_R.prepareCarousel&&(punchgs.TweenLite.set(x.ul,{opacity:0}),_R.prepareCarousel(x,new punchgs.TimelineLite,undefined,0),x.onlyPreparedSlide=!0),setTimeout(function(){if(!g.enable||g.enable&&x.inviewport||g.enable&&!x.inviewport&&"wait"==!g.outof)swapSlide(t);else if(x.c.addClass("tp-waitforfirststart"),x.waitForFirstSlide=!0,g.presize){var e=jQuery(x.li[0]);loadImages(e,x,0,!0),waitForCurrentImages(e.find(".tp-layers"),x,function(){_R.animateTheCaptions({slide:e,opt:x,preset:!0})})}_R.manageNavigation&&_R.manageNavigation(x),1<x.slideamount&&(!g.enable||g.enable&&x.inviewport?countDown(t,x):x.waitForCountDown=!0),setTimeout(function(){t.trigger("revolution.slide.onloaded")},100)},x.startDelay),x.startDelay=0,jQuery("body").data("rs-fullScreenMode",!1),window.addEventListener("fullscreenchange",onFullScreenChange,{passive:!0}),window.addEventListener("mozfullscreenchange",onFullScreenChange,{passive:!0}),window.addEventListener("webkitfullscreenchange",onFullScreenChange,{passive:!0});var v="resize.revslider-"+t.attr("id");jQuery(window).on(v,function(){if(t==undefined)return!1;0!=jQuery("body").find(t)&&contWidthManager(x);var e=!1;if("fullscreen"==x.sliderLayout){var i=jQuery(window).height();"mobile"==x.fallbacks.ignoreHeightChanges&&_ISM||"always"==x.fallbacks.ignoreHeightChanges?(x.fallbacks.ignoreHeightChangesSize=x.fallbacks.ignoreHeightChangesSize==undefined?0:x.fallbacks.ignoreHeightChangesSize,e=i!=x.lastwindowheight&&Math.abs(i-x.lastwindowheight)>x.fallbacks.ignoreHeightChangesSize):e=i!=x.lastwindowheight}(t.outerWidth(!0)!=x.width||t.is(":hidden")||e)&&(x.lastwindowheight=jQuery(window).height(),containerResized(t,x))}),hideSliderUnder(t,x),contWidthManager(x),x.fallbacks.disableFocusListener||"true"==x.fallbacks.disableFocusListener||!0===x.fallbacks.disableFocusListener||(t.addClass("rev_redraw_on_blurfocus"),tabBlurringCheck())}},cArray=function(e,i){if(!jQuery.isArray(e)){var t=e;(e=new Array).push(t)}if(e.length<i){t=e[e.length-1];for(var a=0;a<i-e.length+2;a++)e.push(t)}return e},checkHoverDependencies=function(e,n){var i=e.data();("sliderenter"===i.start||i.frames!==undefined&&i.frames[0]!=undefined&&"sliderenter"===i.frames[0].delay)&&(n.layersonhover===undefined&&(n.c.on("tp-mouseenter",function(){n.layersonhover&&jQuery.each(n.layersonhover,function(e,i){var t=i.data("closestli")||i.closest(".tp-revslider-slidesli"),a=i.data("staticli")||i.closest(".tp-static-layers");i.data("closestli")===undefined&&(i.data("closestli",t),i.data("staticli",a)),(0<t.length&&t.hasClass("active-revslide")||t.hasClass("processing-revslide")||0<a.length)&&(i.data("animdirection","in"),_R.playAnimationFrame&&_R.playAnimationFrame({caption:i,opt:n,frame:"frame_0",triggerdirection:"in",triggerframein:"frame_0",triggerframeout:"frame_999"}),i.data("triggerstate","on"))})}),n.c.on("tp-mouseleft",function(){n.layersonhover&&jQuery.each(n.layersonhover,function(e,i){i.data("animdirection","out"),i.data("triggered",!0),i.data("triggerstate","off"),_R.stopVideo&&_R.stopVideo(i,n),_R.playAnimationFrame&&_R.playAnimationFrame({caption:i,opt:n,frame:"frame_999",triggerdirection:"out",triggerframein:"frame_0",triggerframeout:"frame_999"})})}),n.layersonhover=new Array),n.layersonhover.push(e))},contWidthManager=function(e){var i=_R.getHorizontalOffset(e.c,"left");if("auto"==e.sliderLayout||"fullscreen"===e.sliderLayout&&"on"==e.fullScreenAutoWidth)"fullscreen"==e.sliderLayout&&"on"==e.fullScreenAutoWidth?punchgs.TweenLite.set(e.ul,{left:0,width:e.c.width()}):punchgs.TweenLite.set(e.ul,{left:i,width:e.c.width()-_R.getHorizontalOffset(e.c,"both")});else{var t=Math.ceil(e.c.closest(".forcefullwidth_wrapper_tp_banner").offset().left-i);punchgs.TweenLite.set(e.c.parent(),{left:0-t+"px",width:jQuery(window).width()-_R.getHorizontalOffset(e.c,"both")})}e.slayers&&"fullwidth"!=e.sliderLayout&&"fullscreen"!=e.sliderLayout&&punchgs.TweenLite.set(e.slayers,{left:i})},cv=function(e,i){return e===undefined?i:e},hideSliderUnder=function(e,i,t){var a=e.parent();jQuery(window).width()<i.hideSliderAtLimit?(e.trigger("stoptimer"),"none"!=a.css("display")&&a.data("olddisplay",a.css("display")),a.css({display:"none"})):e.is(":hidden")&&t&&(a.data("olddisplay")!=undefined&&"undefined"!=a.data("olddisplay")&&"none"!=a.data("olddisplay")?a.css({display:a.data("olddisplay")}):a.css({display:"block"}),e.trigger("restarttimer"),setTimeout(function(){containerResized(e,i)},150)),_R.hideUnHideNav&&_R.hideUnHideNav(i)},containerResized=function(e,i){if(e.trigger("revolution.slide.beforeredraw"),1==i.infullscreenmode&&(i.minHeight=jQuery(window).height()),setCurWinRange(i),setCurWinRange(i,!0),!_R.resizeThumbsTabs||!0===_R.resizeThumbsTabs(i)){if(hideSliderUnder(e,i,!0),contWidthManager(i),"carousel"==i.sliderType&&_R.prepareCarousel(i,!0),e===undefined)return!1;_R.setSize(i),i.conw=i.c.width(),i.conh=i.infullscreenmode?i.minHeight:i.c.height();var t=e.find(".active-revslide .slotholder"),a=e.find(".processing-revslide .slotholder");removeSlots(e,i,e,2),"standard"===i.sliderType&&(punchgs.TweenLite.set(a.find(".defaultimg"),{opacity:0}),t.find(".defaultimg").css({opacity:1})),"carousel"===i.sliderType&&i.lastconw!=i.conw&&(clearTimeout(i.pcartimer),i.pcartimer=setTimeout(function(){_R.prepareCarousel(i,!0),"carousel"==i.sliderType&&"on"===i.carousel.showLayersAllTime&&jQuery.each(i.li,function(e){_R.animateTheCaptions({slide:jQuery(i.li[e]),opt:i,recall:!0})})},100),i.lastconw=i.conw),_R.manageNavigation&&_R.manageNavigation(i),_R.animateTheCaptions&&0<e.find(".active-revslide").length&&_R.animateTheCaptions({slide:e.find(".active-revslide"),opt:i,recall:!0}),"on"==a.data("kenburns")&&_R.startKenBurn(a,i,a.data("kbtl")!==undefined?a.data("kbtl").progress():0),"on"==t.data("kenburns")&&_R.startKenBurn(t,i,t.data("kbtl")!==undefined?t.data("kbtl").progress():0),_R.animateTheCaptions&&0<e.find(".processing-revslide").length&&_R.animateTheCaptions({slide:e.find(".processing-revslide"),opt:i,recall:!0}),_R.manageNavigation&&_R.manageNavigation(i)}e.trigger("revolution.slide.afterdraw")},setScale=function(e){e.bw=e.width/e.gridwidth[e.curWinRange],e.bh=e.height/e.gridheight[e.curWinRange],e.bh>e.bw?e.bh=e.bw:e.bw=e.bh,(1<e.bh||1<e.bw)&&(e.bw=1,e.bh=1)},prepareSlides=function(e,u){if(e.find(".tp-caption").each(function(){var e=jQuery(this);e.data("transition")!==undefined&&e.addClass(e.data("transition"))}),u.ul.css({overflow:"hidden",width:"100%",height:"100%",maxHeight:e.parent().css("maxHeight")}),"on"==u.autoHeight&&(u.ul.css({overflow:"hidden",width:"100%",height:"100%",maxHeight:"none"}),e.css({maxHeight:"none"}),e.parent().css({maxHeight:"none"})),u.allli.each(function(e){var i=jQuery(this),t=i.data("originalindex");(u.startWithSlide!=undefined&&t==u.startWithSlide||u.startWithSlide===undefined&&0==e)&&i.addClass("next-revslide"),i.css({width:"100%",height:"100%",overflow:"hidden"})}),"carousel"===u.sliderType){u.ul.css({overflow:"visible"}).wrap('<div class="tp-carousel-wrapper" style="width:100%;height:100%;position:absolute;top:0px;left:0px;overflow:hidden;"></div>');var i='<div style="clear:both;display:block;width:100%;height:1px;position:relative;margin-bottom:-1px"></div>';u.c.parent().prepend(i),u.c.parent().append(i),_R.prepareCarousel(u)}e.parent().css({overflow:"visible"}),u.allli.find(">img").each(function(e){var i=jQuery(this),t=i.closest("li"),a=t.find(".rs-background-video-layer");a.addClass("defaultvid").css({zIndex:30}),i.addClass("defaultimg"),"on"==u.fallbacks.panZoomDisableOnMobile&&_ISM&&(i.data("kenburns","off"),i.data("bgfit","cover"));var n=t.data("mediafilter");n="none"===n||n===undefined?"":n,i.wrap('<div class="slotholder" style="position:absolute; top:0px; left:0px; z-index:0;width:100%;height:100%;"></div>'),a.appendTo(t.find(".slotholder"));var r=i.data();i.closest(".slotholder").data(r),0<a.length&&r.bgparallax!=undefined&&(a.data("bgparallax",r.bgparallax),a.data("showcoveronpause","on")),"none"!=u.dottedOverlay&&u.dottedOverlay!=undefined&&i.closest(".slotholder").append('<div class="tp-dottedoverlay '+u.dottedOverlay+'"></div>');var o=i.attr("src");r.src=o,r.bgfit=r.bgfit||"cover",r.bgrepeat=r.bgrepeat||"no-repeat",r.bgposition=r.bgposition||"center center";i.closest(".slotholder");var s=i.data("bgcolor"),l="";l=s!==undefined&&0<=s.indexOf("gradient")?'"background:'+s+';width:100%;height:100%;"':'"background-color:'+s+";background-repeat:"+r.bgrepeat+";background-image:url("+o+");background-size:"+r.bgfit+";background-position:"+r.bgposition+';width:100%;height:100%;"',i.data("mediafilter",n),n="on"===i.data("kenburns")?"":n;var d=jQuery('<div class="tp-bgimg defaultimg '+n+'" data-bgcolor="'+s+'" style='+l+"></div>");i.parent().append(d);var c=document.createComment("Runtime Modification - Img tag is Still Available for SEO Goals in Source - "+i.get(0).outerHTML);i.replaceWith(c),d.data(r),d.attr("src",o),"standard"!==u.sliderType&&"undefined"!==u.sliderType||d.css({opacity:0})}),u.scrolleffect.on&&"on"===u.scrolleffect.on_slidebg&&(u.allslotholder=new Array,u.allli.find(".slotholder").each(function(){jQuery(this).wrap('<div style="display:block;position:absolute;top:0px;left:0px;width:100%;height:100%" class="slotholder_fadeoutwrap"></div>')}),u.allslotholder=u.c.find(".slotholder_fadeoutwrap"))},removeSlots=function(e,i,t,a){i.removePrepare=i.removePrepare+a,t.find(".slot, .slot-circle-wrapper").each(function(){jQuery(this).remove()}),i.transition=0,i.removePrepare=0},cutParams=function(e){var i=e;return e!=undefined&&0<e.length&&(i=e.split("?")[0]),i},relativeRedir=function(e){return location.pathname.replace(/(.*)\/[^/]*/,"$1/"+e)},abstorel=function(e,i){var t=e.split("/"),a=i.split("/");t.pop();for(var n=0;n<a.length;n++)"."!=a[n]&&(".."==a[n]?t.pop():t.push(a[n]));return t.join("/")},imgLoaded=function(l,e,d){e.syncload--,e.loadqueue&&jQuery.each(e.loadqueue,function(e,i){var t=i.src.replace(/\.\.\/\.\.\//gi,""),a=self.location.href,n=document.location.origin,r=a.substring(0,a.length-1)+"/"+t,o=n+"/"+t,s=abstorel(self.location.href,i.src);a=a.substring(0,a.length-1)+t,(cutParams(n+=t)===cutParams(decodeURIComponent(l.src))||cutParams(a)===cutParams(decodeURIComponent(l.src))||cutParams(s)===cutParams(decodeURIComponent(l.src))||cutParams(o)===cutParams(decodeURIComponent(l.src))||cutParams(r)===cutParams(decodeURIComponent(l.src))||cutParams(i.src)===cutParams(decodeURIComponent(l.src))||cutParams(i.src).replace(/^.*\/\/[^\/]+/,"")===cutParams(decodeURIComponent(l.src)).replace(/^.*\/\/[^\/]+/,"")||"file://"===window.location.origin&&cutParams(l.src).match(new RegExp(t)))&&(i.progress=d,i.width=l.width,i.height=l.height)}),progressImageLoad(e)},progressImageLoad=function(a){3!=a.syncload&&a.loadqueue&&jQuery.each(a.loadqueue,function(e,i){if(i.progress.match(/prepared/g)&&a.syncload<=3){if(a.syncload++,"img"==i.type){var t=new Image;t.onload=function(){imgLoaded(this,a,"loaded"),i.error=!1},t.onerror=function(){imgLoaded(this,a,"failed"),i.error=!0},t.src=i.src}else jQuery.get(i.src,function(e){i.innerHTML=(new XMLSerializer).serializeToString(e.documentElement),i.progress="loaded",a.syncload--,progressImageLoad(a)}).fail(function(){i.progress="failed",a.syncload--,progressImageLoad(a)});i.progress="inload"}})},addToLoadQueue=function(t,e,i,a,n){var r=!1;if(e.loadqueue&&jQuery.each(e.loadqueue,function(e,i){i.src===t&&(r=!0)}),!r){var o=new Object;o.src=t,o.starttoload=jQuery.now(),o.type=a||"img",o.prio=i,o.progress="prepared",o.static=n,e.loadqueue.push(o)}},loadImages=function(e,a,n,r){e.find("img,.defaultimg, .tp-svg-layer").each(function(){var e=jQuery(this),i=e.data("lazyload")!==undefined&&"undefined"!==e.data("lazyload")?e.data("lazyload"):e.data("svg_src")!=undefined?e.data("svg_src"):e.attr("src"),t=e.data("svg_src")!=undefined?"svg":"img";e.data("start-to-load",jQuery.now()),addToLoadQueue(i,a,n,t,r)}),progressImageLoad(a)},getLoadObj=function(e,t){var a=new Object;return e.loadqueue&&jQuery.each(e.loadqueue,function(e,i){i.src==t&&(a=i)}),a},waitForCurrentImages=function(o,s,e){var l=!1;o.find("img,.defaultimg, .tp-svg-layer").each(function(){var e=jQuery(this),i=e.data("lazyload")!=undefined?e.data("lazyload"):e.data("svg_src")!=undefined?e.data("svg_src"):e.attr("src"),t=getLoadObj(s,i);if(e.data("loaded")===undefined&&t!==undefined&&t.progress&&t.progress.match(/loaded/g)){if(e.attr("src",t.src),"img"==t.type)if(e.hasClass("defaultimg"))_R.isIE(8)?defimg.attr("src",t.src):-1==t.src.indexOf("images/transparent.png")&&-1==t.src.indexOf("assets/transparent.png")||e.data("bgcolor")===undefined?e.css({backgroundImage:'url("'+t.src+'")'}):e.data("bgcolor")!==undefined&&e.css({background:e.data("bgcolor")}),o.data("owidth",t.width),o.data("oheight",t.height),o.find(".slotholder").data("owidth",t.width),o.find(".slotholder").data("oheight",t.height);else{var a=e.data("ww"),n=e.data("hh");e.data("owidth",t.width),e.data("oheight",t.height),a=a==undefined||"auto"==a||""==a?t.width:a,n=n==undefined||"auto"==n||""==n?t.height:n,!jQuery.isNumeric(a)&&0<a.indexOf("%")&&(n=a),e.data("ww",a),e.data("hh",n)}else"svg"==t.type&&"loaded"==t.progress&&(e.append('<div class="tp-svg-innercontainer"></div>'),e.find(".tp-svg-innercontainer").append(t.innerHTML));e.data("loaded",!0)}if(t&&t.progress&&t.progress.match(/inprogress|inload|prepared/g)&&(!t.error&&jQuery.now()-e.data("start-to-load")<5e3?l=!0:(t.progress="failed",t.reported_img||(t.reported_img=!0,console.warn(i+"  Could not be loaded !")))),1==s.youtubeapineeded&&(!window.YT||YT.Player==undefined)&&(l=!0,5e3<jQuery.now()-s.youtubestarttime&&1!=s.youtubewarning)){s.youtubewarning=!0;var r="YouTube Api Could not be loaded !";"https:"===location.protocol&&(r+=" Please Check and Renew SSL Certificate !"),console.error(r),s.c.append('<div style="position:absolute;top:50%;width:100%;color:#e74c3c;  font-size:16px; text-align:center; padding:15px;background:#000; display:block;"><strong>'+r+"</strong></div>")}if(1==s.vimeoapineeded&&!window.Vimeo&&(l=!0,5e3<jQuery.now()-s.vimeostarttime&&1!=s.vimeowarning)){s.vimeowarning=!0;r="Vimeo Api Could not be loaded !";"https:"===location.protocol&&(r+=" Please Check and Renew SSL Certificate !"),console.error(r),s.c.append('<div style="position:absolute;top:50%;width:100%;color:#e74c3c;  font-size:16px; text-align:center; padding:15px;background:#000; display:block;"><strong>'+r+"</strong></div>")}}),!_ISM&&s.audioqueue&&0<s.audioqueue.length&&jQuery.each(s.audioqueue,function(e,i){i.status&&"prepared"===i.status&&jQuery.now()-i.start<i.waittime&&(l=!0)}),jQuery.each(s.loadqueue,function(e,i){!0!==i.static||"loaded"==i.progress&&"failed"!==i.progress||("failed"==i.progress?i.reported||(i.reported=!0,console.warn("Static Image "+i.src+"  Could not be loaded in time. Error Exists:"+i.error)):!i.error&&jQuery.now()-i.starttoload<5e3?l=!0:i.reported||(i.reported=!0,console.warn("Static Image "+i.src+"  Could not be loaded within 5s! Error Exists:"+i.error)))}),l?punchgs.TweenLite.delayedCall(.18,waitForCurrentImages,[o,s,e]):punchgs.TweenLite.delayedCall(.18,e)},swapSlide=function(e){var i=e[0].opt;if(clearTimeout(i.waitWithSwapSlide),0<e.find(".processing-revslide").length)return i.waitWithSwapSlide=setTimeout(function(){swapSlide(e)},150),!1;var t=e.find(".active-revslide"),a=e.find(".next-revslide"),n=a.find(".defaultimg");if("carousel"!==i.sliderType||i.carousel.fadein||(punchgs.TweenLite.to(i.ul,1,{opacity:1}),i.carousel.fadein=!0),a.index()===t.index()&&!0!==i.onlyPreparedSlide)return a.removeClass("next-revslide"),!1;!0===i.onlyPreparedSlide&&(i.onlyPreparedSlide=!1,jQuery(i.li[0]).addClass("processing-revslide")),a.removeClass("next-revslide").addClass("processing-revslide"),-1===a.index()&&"carousel"===i.sliderType&&(a=jQuery(i.li[0])),a.data("slide_on_focus_amount",a.data("slide_on_focus_amount")+1||1),"on"==i.stopLoop&&a.index()==i.lastslidetoshow-1&&(e.find(".tp-bannertimer").css({visibility:"hidden"}),e.trigger("revolution.slide.onstop"),i.noloopanymore=1),a.index()===i.slideamount-1&&(i.looptogo=i.looptogo-1,i.looptogo<=0&&(i.stopLoop="on")),i.tonpause=!0,e.trigger("stoptimer"),i.cd=0,"off"===i.spinner&&(i.loader!==undefined?i.loader.css({display:"none"}):i.loadertimer=setTimeout(function(){i.loader!==undefined&&i.loader.css({display:"block"})},50)),loadImages(a,i,1),_R.preLoadAudio&&_R.preLoadAudio(a,i,1),waitForCurrentImages(a,i,function(){a.find(".rs-background-video-layer").each(function(){var e=jQuery(this);e.hasClass("HasListener")||(e.data("bgvideo",1),_R.manageVideoLayer&&_R.manageVideoLayer(e,i)),0==e.find(".rs-fullvideo-cover").length&&e.append('<div class="rs-fullvideo-cover"></div>')}),swapSlideProgress(n,e)})},swapSlideProgress=function(e,i){var t=i.find(".active-revslide"),a=i.find(".processing-revslide"),n=t.find(".slotholder"),r=a.find(".slotholder"),o=i[0].opt;o.tonpause=!1,o.cd=0,clearTimeout(o.loadertimer),o.loader!==undefined&&o.loader.css({display:"none"}),_R.setSize(o),_R.slotSize(e,o),_R.manageNavigation&&_R.manageNavigation(o);var s={};s.nextslide=a,s.currentslide=t,i.trigger("revolution.slide.onbeforeswap",s),o.transition=1,o.videoplaying=!1,a.data("delay")!=undefined?(o.cd=0,o.delay=a.data("delay")):o.delay=o.origcd,"true"==a.data("ssop")||!0===a.data("ssop")?o.ssop=!0:o.ssop=!1,i.trigger("nulltimer");var l=t.index(),d=a.index();o.sdir=d<l?1:0,"arrow"==o.sc_indicator&&(0==l&&d==o.slideamount-1&&(o.sdir=1),l==o.slideamount-1&&0==d&&(o.sdir=0)),o.lsdir=o.lsdir===undefined?o.sdir:o.lsdir,o.dirc=o.lsdir!=o.sdir,o.lsdir=o.sdir,t.index()!=a.index()&&1!=o.firststart&&_R.removeTheCaptions&&_R.removeTheCaptions(t,o),a.hasClass("rs-pause-timer-once")||a.hasClass("rs-pause-timer-always")?o.videoplaying=!0:i.trigger("restarttimer"),a.removeClass("rs-pause-timer-once");var c;if(o.currentSlide=t.index(),o.nextSlide=a.index(),"carousel"==o.sliderType)c=new punchgs.TimelineLite,_R.prepareCarousel(o,c),letItFree(i,r,n,a,t,c),o.transition=0,o.firststart=0;else{(c=new punchgs.TimelineLite({onComplete:function(){letItFree(i,r,n,a,t,c)}})).add(punchgs.TweenLite.set(r.find(".defaultimg"),{opacity:0})),c.pause(),_R.animateTheCaptions&&_R.animateTheCaptions({slide:a,opt:o,preset:!0}),1==o.firststart&&(punchgs.TweenLite.set(t,{autoAlpha:0}),o.firststart=0),punchgs.TweenLite.set(t,{zIndex:18}),punchgs.TweenLite.set(a,{autoAlpha:0,zIndex:20}),"prepared"==a.data("differentissplayed")&&(a.data("differentissplayed","done"),a.data("transition",a.data("savedtransition")),a.data("slotamount",a.data("savedslotamount")),a.data("masterspeed",a.data("savedmasterspeed"))),a.data("fstransition")!=undefined&&"done"!=a.data("differentissplayed")&&(a.data("savedtransition",a.data("transition")),a.data("savedslotamount",a.data("slotamount")),a.data("savedmasterspeed",a.data("masterspeed")),a.data("transition",a.data("fstransition")),a.data("slotamount",a.data("fsslotamount")),a.data("masterspeed",a.data("fsmasterspeed")),a.data("differentissplayed","prepared")),a.data("transition")==undefined&&a.data("transition","random"),0;var u=a.data("transition")!==undefined?a.data("transition").split(","):"fade",p=a.data("nexttransid")==undefined?-1:a.data("nexttransid");"on"==a.data("randomtransition")?p=Math.round(Math.random()*u.length):p+=1,p==u.length&&(p=0),a.data("nexttransid",p);var f=u[p];o.ie&&("boxfade"==f&&(f="boxslide"),"slotfade-vertical"==f&&(f="slotzoom-vertical"),"slotfade-horizontal"==f&&(f="slotzoom-horizontal")),_R.isIE(8)&&(f=11),c=_R.animateSlide(0,f,i,a,t,r,n,c),"on"==r.data("kenburns")&&(_R.startKenBurn(r,o),c.add(punchgs.TweenLite.set(r,{autoAlpha:0}))),c.pause()}_R.scrollHandling&&(_R.scrollHandling(o,!0,0),c.eventCallback("onUpdate",function(){_R.scrollHandling(o,!0,0)})),"off"!=o.parallax.type&&o.parallax.firstgo==undefined&&_R.scrollHandling&&(o.parallax.firstgo=!0,o.lastscrolltop=-999,_R.scrollHandling(o,!0,0),setTimeout(function(){o.lastscrolltop=-999,_R.scrollHandling(o,!0,0)},210),setTimeout(function(){o.lastscrolltop=-999,_R.scrollHandling(o,!0,0)},420)),_R.animateTheCaptions?"carousel"===o.sliderType&&"on"===o.carousel.showLayersAllTime?(jQuery.each(o.li,function(e){o.carousel.allLayersStarted?_R.animateTheCaptions({slide:jQuery(o.li[e]),opt:o,recall:!0}):o.li[e]===a?_R.animateTheCaptions({slide:jQuery(o.li[e]),maintimeline:c,opt:o,startslideanimat:0}):_R.animateTheCaptions({slide:jQuery(o.li[e]),opt:o,startslideanimat:0})}),o.carousel.allLayersStarted=!0):_R.animateTheCaptions({slide:a,opt:o,maintimeline:c,startslideanimat:0}):c!=undefined&&setTimeout(function(){c.resume()},30),punchgs.TweenLite.to(a,.001,{autoAlpha:1})},letItFree=function(e,i,t,a,n,r){var o=e[0].opt;"carousel"===o.sliderType||(o.removePrepare=0,punchgs.TweenLite.to(i.find(".defaultimg"),.001,{zIndex:20,autoAlpha:1,onComplete:function(){removeSlots(e,o,a,1)}}),a.index()!=n.index()&&punchgs.TweenLite.to(n,.2,{zIndex:18,autoAlpha:0,onComplete:function(){removeSlots(e,o,n,1)}})),e.find(".active-revslide").removeClass("active-revslide"),e.find(".processing-revslide").removeClass("processing-revslide").addClass("active-revslide"),o.act=a.index(),o.c.attr("data-slideactive",e.find(".active-revslide").data("index")),"scroll"!=o.parallax.type&&"scroll+mouse"!=o.parallax.type&&"mouse+scroll"!=o.parallax.type||(o.lastscrolltop=-999,_R.scrollHandling(o)),r.clear(),t.data("kbtl")!=undefined&&(t.data("kbtl").reverse(),t.data("kbtl").timeScale(25)),"on"==i.data("kenburns")&&(i.data("kbtl")!=undefined?(i.data("kbtl").timeScale(1),i.data("kbtl").play()):_R.startKenBurn(i,o)),a.find(".rs-background-video-layer").each(function(e){if(_ISM&&!o.fallbacks.allowHTML5AutoPlayOnAndroid)return!1;var i=jQuery(this);_R.resetVideo(i,o,!1,!0),punchgs.TweenLite.fromTo(i,1,{autoAlpha:0},{autoAlpha:1,ease:punchgs.Power3.easeInOut,delay:.2,onComplete:function(){_R.animcompleted&&_R.animcompleted(i,o)}})}),n.find(".rs-background-video-layer").each(function(e){if(_ISM)return!1;var i=jQuery(this);_R.stopVideo&&(_R.resetVideo(i,o),_R.stopVideo(i,o)),punchgs.TweenLite.to(i,1,{autoAlpha:0,ease:punchgs.Power3.easeInOut,delay:.2})});var s={};if(s.slideIndex=a.index()+1,s.slideLIIndex=a.index(),s.slide=a,s.currentslide=a,s.prevslide=n,o.last_shown_slide=n.index(),e.trigger("revolution.slide.onchange",s),e.trigger("revolution.slide.onafterswap",s),o.startWithSlide!==undefined&&"done"!==o.startWithSlide&&"carousel"===o.sliderType){for(var l=o.startWithSlide,d=0;d<=o.li.length-1;d++){jQuery(o.li[d]).data("originalindex")===o.startWithSlide&&(l=d)}0!==l&&_R.callingNewSlide(o.c,l),o.startWithSlide="done"}o.duringslidechange=!1;var c=n.data("slide_on_focus_amount"),u=n.data("hideafterloop");0!=u&&u<=c&&o.c.revremoveslide(n.index());var p=-1===o.nextSlide||o.nextSlide===undefined?0:o.nextSlide;o.rowzones!=undefined&&(p=p>o.rowzones.length?o.rowzones.length:p),o.rowzones!=undefined&&0<o.rowzones.length&&o.rowzones[p]!=undefined&&0<=p&&p<=o.rowzones.length&&0<o.rowzones[p].length&&_R.setSize(o)},removeAllListeners=function(e,i){e.children().each(function(){try{jQuery(this).die("click")}catch(e){}try{jQuery(this).die("mouseenter")}catch(e){}try{jQuery(this).die("mouseleave")}catch(e){}try{jQuery(this).unbind("hover")}catch(e){}});try{e.die("click","mouseenter","mouseleave")}catch(e){}clearInterval(i.cdint),e=null},countDown=function(e,i){i.cd=0,i.loop=0,i.stopAfterLoops!=undefined&&-1<i.stopAfterLoops?i.looptogo=i.stopAfterLoops:i.looptogo=9999999,i.stopAtSlide!=undefined&&-1<i.stopAtSlide?i.lastslidetoshow=i.stopAtSlide:i.lastslidetoshow=999,i.stopLoop="off",0==i.looptogo&&(i.stopLoop="on");var t=e.find(".tp-bannertimer");e.on("stoptimer",function(){var e=jQuery(this).find(".tp-bannertimer");e[0].tween.pause(),"on"==i.disableProgressBar&&e.css({visibility:"hidden"}),i.sliderstatus="paused",_R.unToggleState(i.slidertoggledby)}),e.on("starttimer",function(){i.forcepause_viatoggle||(1!=i.conthover&&1!=i.videoplaying&&i.width>i.hideSliderAtLimit&&1!=i.tonpause&&1!=i.overnav&&1!=i.ssop&&(1===i.noloopanymore||i.viewPort.enable&&!i.inviewport||(t.css({visibility:"visible"}),t[0].tween.resume(),i.sliderstatus="playing")),"on"==i.disableProgressBar&&t.css({visibility:"hidden"}),_R.toggleState(i.slidertoggledby))}),e.on("restarttimer",function(){if(!i.forcepause_viatoggle){var e=jQuery(this).find(".tp-bannertimer");if(i.mouseoncontainer&&"on"==i.navigation.onHoverStop&&!_ISM)return!1;1===i.noloopanymore||i.viewPort.enable&&!i.inviewport||1==i.ssop||(e.css({visibility:"visible"}),e[0].tween.kill(),e[0].tween=punchgs.TweenLite.fromTo(e,i.delay/1e3,{width:"0%"},{force3D:"auto",width:"100%",ease:punchgs.Linear.easeNone,onComplete:a,delay:1}),i.sliderstatus="playing"),"on"==i.disableProgressBar&&e.css({visibility:"hidden"}),_R.toggleState(i.slidertoggledby)}}),e.on("nulltimer",function(){t[0].tween.kill(),t[0].tween=punchgs.TweenLite.fromTo(t,i.delay/1e3,{width:"0%"},{force3D:"auto",width:"100%",ease:punchgs.Linear.easeNone,onComplete:a,delay:1}),t[0].tween.pause(0),"on"==i.disableProgressBar&&t.css({visibility:"hidden"}),i.sliderstatus="paused"});var a=function(){0==jQuery("body").find(e).length&&(removeAllListeners(e,i),clearInterval(i.cdint)),e.trigger("revolution.slide.slideatend"),1==e.data("conthover-changed")&&(i.conthover=e.data("conthover"),e.data("conthover-changed",0)),_R.callingNewSlide(e,1)};t[0].tween=punchgs.TweenLite.fromTo(t,i.delay/1e3,{width:"0%"},{force3D:"auto",width:"100%",ease:punchgs.Linear.easeNone,onComplete:a,delay:1}),1<i.slideamount&&(0!=i.stopAfterLoops||1!=i.stopAtSlide)?e.trigger("starttimer"):(i.noloopanymore=1,e.trigger("nulltimer")),e.on("tp-mouseenter",function(){i.mouseoncontainer=!0,"on"!=i.navigation.onHoverStop||_ISM||(e.trigger("stoptimer"),e.trigger("revolution.slide.onpause"))}),e.on("tp-mouseleft",function(){i.mouseoncontainer=!1,1!=e.data("conthover")&&"on"==i.navigation.onHoverStop&&(1==i.viewPort.enable&&i.inviewport||0==i.viewPort.enable)&&(e.trigger("revolution.slide.onresume"),e.trigger("starttimer"))})},vis=function(){var i,t,e={hidden:"visibilitychange",webkitHidden:"webkitvisibilitychange",mozHidden:"mozvisibilitychange",msHidden:"msvisibilitychange"};for(i in e)if(i in document){t=e[i];break}return function(e){return e&&document.addEventListener(t,e,{pasive:!0}),!document[i]}}(),restartOnFocus=function(){jQuery(".rev_redraw_on_blurfocus").each(function(){var e=jQuery(this)[0].opt;if(e==undefined||e.c==undefined||0===e.c.length)return!1;1!=e.windowfocused&&(e.windowfocused=!0,punchgs.TweenLite.delayedCall(.3,function(){"on"==e.fallbacks.nextSlideOnWindowFocus&&e.c.revnext(),e.c.revredraw(),"playing"==e.lastsliderstatus&&e.c.revresume()}))})},lastStatBlur=function(){jQuery(".rev_redraw_on_blurfocus").each(function(){var e=jQuery(this)[0].opt;e.windowfocused=!1,e.lastsliderstatus=e.sliderstatus,e.c.revpause();var i=e.c.find(".active-revslide .slotholder"),t=e.c.find(".processing-revslide .slotholder");"on"==t.data("kenburns")&&_R.stopKenBurn(t,e),"on"==i.data("kenburns")&&_R.stopKenBurn(i,e)})},tabBlurringCheck=function(){var e=document.documentMode===undefined,i=window.chrome;1!==jQuery("body").data("revslider_focus_blur_listener")&&(jQuery("body").data("revslider_focus_blur_listener",1),e&&!i?jQuery(window).on("focusin",function(){restartOnFocus()}).on("focusout",function(){lastStatBlur()}):window.addEventListener?(window.addEventListener("focus",function(e){restartOnFocus()},{capture:!1,passive:!0}),window.addEventListener("blur",function(e){lastStatBlur()},{capture:!1,passive:!0})):(window.attachEvent("focus",function(e){restartOnFocus()}),window.attachEvent("blur",function(e){lastStatBlur()})))},getUrlVars=function(e){for(var i,t=[],a=window.location.href.slice(window.location.href.indexOf(e)+1).split("_"),n=0;n<a.length;n++)a[n]=a[n].replace("%3D","="),i=a[n].split("="),t.push(i[0]),t[i[0]]=i[1];return t}}(jQuery);var WPMLLanguageSwitcherDropdown=(function(){"use strict";var toggleSelector='.js-wpml-ls-legacy-dropdown a.js-wpml-ls-item-toggle';var preventDefault=function(e){var evt=e?e:window.event;if(evt.preventDefault){evt.preventDefault()}
evt.returnValue=!1};var init=function(){var links=document.querySelectorAll(toggleSelector);for(var i=0;i<links.length;i++){links[i].addEventListener('click',preventDefault)}};return{'init':init}})();document.addEventListener('DOMContentLoaded',function(){"use strict";WPMLLanguageSwitcherDropdown.init()});/*
 * Foundation Responsive Library
 * http://foundation.zurb.com
 * Copyright 2013, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */
/*jslint unparam: true, browser: true, indent: 2 */
// Accommodate running jQuery or Zepto in noConflict() mode by
// using an anonymous function to redefine the $ shorthand name.
// See http://docs.jquery.com/Using_jQuery_with_Other_Libraries
// and http://zeptojs.com/
! function(a, b, c, d) {
    "use strict";

    function e(a) {
        return ("string" == typeof a || a instanceof String) && (a = a.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g, "")), a
    }
    var f = function(b) {
        for (var c = b.length, d = a("head"); c--;) 0 === d.has("." + b[c]).length && d.append('<meta class="' + b[c] + '" />')
    };
    f(["foundation-mq-small", "foundation-mq-small-only", "foundation-mq-medium", "foundation-mq-medium-only", "foundation-mq-large", "foundation-mq-large-only", "foundation-mq-xlarge", "foundation-mq-xlarge-only", "foundation-mq-xxlarge", "foundation-data-attribute-namespace"]), a(function() {
        "undefined" != typeof FastClick && "undefined" != typeof c.body && FastClick.attach(c.body)
    });
    var g = function(b, d) {
            if ("string" == typeof b) {
                if (d) {
                    var e;
                    if (d.jquery) {
                        if (e = d[0], !e) return d
                    } else e = d;
                    return a(e.querySelectorAll(b))
                }
                return a(c.querySelectorAll(b))
            }
            return a(b, d)
        },
        h = function(a) {
            var b = [];
            return a || b.push("data"), this.namespace.length > 0 && b.push(this.namespace), b.push(this.name), b.join("-")
        },
        i = function(a) {
            for (var b = a.split("-"), c = b.length, d = []; c--;) 0 !== c ? d.push(b[c]) : this.namespace.length > 0 ? d.push(this.namespace, b[c]) : d.push(b[c]);
            return d.reverse().join("-")
        },
        j = function(b, c) {
            var d = this,
                e = function() {
                    var e = g(this),
                        f = !e.data(d.attr_name(!0) + "-init");
                    e.data(d.attr_name(!0) + "-init", a.extend({}, d.settings, c || b, d.data_options(e))), f && d.events(this)
                };
            return g(this.scope).is("[" + this.attr_name() + "]") ? e.call(this.scope) : g("[" + this.attr_name() + "]", this.scope).each(e), "string" == typeof b ? this[b].call(this, c) : void 0
        },
        k = function(a, b) {
            function c() {
                b(a[0])
            }

            function d() {
                if (this.one("load", c), /MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
                    var a = this.attr("src"),
                        b = a.match(/\?/) ? "&" : "?";
                    b += "random=" + (new Date).getTime(), this.attr("src", a + b)
                }
            }
            return a.attr("src") ? void(a[0].complete || 4 === a[0].readyState ? c() : d.call(a)) : void c()
        };
    b.matchMedia = b.matchMedia || function(a) {
            var b, c = a.documentElement,
                d = c.firstElementChild || c.firstChild,
                e = a.createElement("body"),
                f = a.createElement("div");
            return f.id = "mq-test-1", f.style.cssText = "position:absolute;top:-100em", e.style.background = "none", e.appendChild(f),
                function(a) {
                    return f.innerHTML = '&shy;<style media="' + a + '"> #mq-test-1 { width: 42px; }</style>', c.insertBefore(e, d), b = 42 === f.offsetWidth, c.removeChild(e), {
                        matches: b,
                        media: a
                    }
                }
        }(c),
        function(a) {
            function c() {
                d && (g(c), i && a.fx.tick())
            }
            for (var d, e = 0, f = ["webkit", "moz"], g = b.requestAnimationFrame, h = b.cancelAnimationFrame, i = "undefined" != typeof a.fx; e < f.length && !g; e++) g = b[f[e] + "RequestAnimationFrame"], h = h || b[f[e] + "CancelAnimationFrame"] || b[f[e] + "CancelRequestAnimationFrame"];
            g ? (b.requestAnimationFrame = g, b.cancelAnimationFrame = h, i && (a.fx.timer = function(b) {
                b() && a.timers.push(b) && !d && (d = !0, c())
            }, a.fx.stop = function() {
                d = !1
            })) : (b.requestAnimationFrame = function(a) {
                var c = (new Date).getTime(),
                    d = Math.max(0, 16 - (c - e)),
                    f = b.setTimeout(function() {
                        a(c + d)
                    }, d);
                return e = c + d, f
            }, b.cancelAnimationFrame = function(a) {
                clearTimeout(a)
            })
        }(a), b.Foundation = {
            name: "Foundation",
            version: "5.5.1",
            media_queries: {
                small: g(".foundation-mq-small").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                "small-only": g(".foundation-mq-small-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                medium: g(".foundation-mq-medium").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                "medium-only": g(".foundation-mq-medium-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                large: g(".foundation-mq-large").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                "large-only": g(".foundation-mq-large-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                xlarge: g(".foundation-mq-xlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                "xlarge-only": g(".foundation-mq-xlarge-only").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ""),
                xxlarge: g(".foundation-mq-xxlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, "")
            },
            stylesheet: a("<style></style>").appendTo("head")[0].sheet,
            global: {
                namespace: d
            },
            init: function(a, c, d, e, f) {
                var h = [a, d, e, f],
                    i = [];
                if (this.rtl = /rtl/i.test(g("html").attr("dir")), this.scope = a || this.scope, this.set_namespace(), c && "string" == typeof c && !/reflow/i.test(c)) this.libs.hasOwnProperty(c) && i.push(this.init_lib(c, h));
                else
                    for (var j in this.libs) i.push(this.init_lib(j, c));
                return g(b).load(function() {
                    g(b).trigger("resize.fndtn.clearing").trigger("resize.fndtn.dropdown").trigger("resize.fndtn.equalizer").trigger("resize.fndtn.interchange").trigger("resize.fndtn.joyride").trigger("resize.fndtn.magellan").trigger("resize.fndtn.topbar").trigger("resize.fndtn.slider")
                }), a
            },
            init_lib: function(b, c) {
                return this.libs.hasOwnProperty(b) ? (this.patch(this.libs[b]), c && c.hasOwnProperty(b) ? ("undefined" != typeof this.libs[b].settings ? a.extend(!0, this.libs[b].settings, c[b]) : "undefined" != typeof this.libs[b].defaults && a.extend(!0, this.libs[b].defaults, c[b]), this.libs[b].init.apply(this.libs[b], [this.scope, c[b]])) : (c = c instanceof Array ? c : new Array(c), this.libs[b].init.apply(this.libs[b], c))) : function() {}
            },
            patch: function(a) {
                a.scope = this.scope, a.namespace = this.global.namespace, a.rtl = this.rtl, a.data_options = this.utils.data_options, a.attr_name = h, a.add_namespace = i, a.bindings = j, a.S = this.utils.S
            },
            inherit: function(a, b) {
                for (var c = b.split(" "), d = c.length; d--;) this.utils.hasOwnProperty(c[d]) && (a[c[d]] = this.utils[c[d]])
            },
            set_namespace: function() {
                var b = this.global.namespace === d ? a(".foundation-data-attribute-namespace").css("font-family") : this.global.namespace;
                this.global.namespace = b === d || /false/i.test(b) ? "" : b
            },
            libs: {},
            utils: {
                S: g,
                throttle: function(a, b) {
                    var c = null;
                    return function() {
                        var d = this,
                            e = arguments;
                        null == c && (c = setTimeout(function() {
                            a.apply(d, e), c = null
                        }, b))
                    }
                },
                debounce: function(a, b, c) {
                    var d, e;
                    return function() {
                        var f = this,
                            g = arguments,
                            h = function() {
                                d = null, c || (e = a.apply(f, g))
                            },
                            i = c && !d;
                        return clearTimeout(d), d = setTimeout(h, b), i && (e = a.apply(f, g)), e
                    }
                },
                data_options: function(b, c) {
                    function d(a) {
                        return !isNaN(a - 0) && null !== a && "" !== a && a !== !1 && a !== !0
                    }

                    function e(b) {
                        return "string" == typeof b ? a.trim(b) : b
                    }
                    c = c || "options";
                    var f, g, h, i = {},
                        j = function(a) {
                            var b = Foundation.global.namespace;
                            return a.data(b.length > 0 ? b + "-" + c : c)
                        },
                        k = j(b);
                    if ("object" == typeof k) return k;
                    for (h = (k || ":").split(";"), f = h.length; f--;) g = h[f].split(":"), g = [g[0], g.slice(1).join(":")], /true/i.test(g[1]) && (g[1] = !0), /false/i.test(g[1]) && (g[1] = !1), d(g[1]) && (g[1] = -1 === g[1].indexOf(".") ? parseInt(g[1], 10) : parseFloat(g[1])), 2 === g.length && g[0].length > 0 && (i[e(g[0])] = e(g[1]));
                    return i
                },
                register_media: function(b, c) {
                    Foundation.media_queries[b] === d && (a("head").append('<meta class="' + c + '"/>'), Foundation.media_queries[b] = e(a("." + c).css("font-family")))
                },
                add_custom_rule: function(a, b) {
                    if (b === d && Foundation.stylesheet) Foundation.stylesheet.insertRule(a, Foundation.stylesheet.cssRules.length);
                    else {
                        var c = Foundation.media_queries[b];
                        c !== d && Foundation.stylesheet.insertRule("@media " + Foundation.media_queries[b] + "{ " + a + " }")
                    }
                },
                image_loaded: function(a, b) {
                    var c = this,
                        d = a.length;
                    0 === d && b(a), a.each(function() {
                        k(c.S(this), function() {
                            d -= 1, 0 === d && b(a)
                        })
                    })
                },
                random_str: function() {
                    return this.fidx || (this.fidx = 0), this.prefix = this.prefix || [this.name || "F", (+new Date).toString(36)].join("-"), this.prefix + (this.fidx++).toString(36)
                },
                match: function(a) {
                    return b.matchMedia(a).matches
                },
                is_small_up: function() {
                    return this.match(Foundation.media_queries.small)
                },
                is_medium_up: function() {
                    return this.match(Foundation.media_queries.medium)
                },
                is_large_up: function() {
                    return this.match(Foundation.media_queries.large)
                },
                is_xlarge_up: function() {
                    return this.match(Foundation.media_queries.xlarge)
                },
                is_xxlarge_up: function() {
                    return this.match(Foundation.media_queries.xxlarge)
                },
                is_small_only: function() {
                    return !(this.is_medium_up() || this.is_large_up() || this.is_xlarge_up() || this.is_xxlarge_up())
                },
                is_medium_only: function() {
                    return this.is_medium_up() && !this.is_large_up() && !this.is_xlarge_up() && !this.is_xxlarge_up()
                },
                is_large_only: function() {
                    return this.is_medium_up() && this.is_large_up() && !this.is_xlarge_up() && !this.is_xxlarge_up()
                },
                is_xlarge_only: function() {
                    return this.is_medium_up() && this.is_large_up() && this.is_xlarge_up() && !this.is_xxlarge_up()
                },
                is_xxlarge_only: function() {
                    return this.is_medium_up() && this.is_large_up() && this.is_xlarge_up() && this.is_xxlarge_up()
                }
            }
        }, a.fn.foundation = function() {
            var a = Array.prototype.slice.call(arguments, 0);
            return this.each(function() {
                return Foundation.init.apply(Foundation, [this].concat(a)), this
            })
        }
}(jQuery, window, window.document),
function(a, b, c) {
    "use strict";
    Foundation.libs.abide = {
        name: "abide",
        version: "5.5.1",
        settings: {
            live_validate: !0,
            validate_on_blur: !0,
            focus_on_invalid: !0,
            error_labels: !0,
            error_class: "error",
            timeout: 1e3,
            patterns: {
                alpha: /^[a-zA-Z]+$/,
                alpha_numeric: /^[a-zA-Z0-9]+$/,
                integer: /^[-+]?\d+$/,
                number: /^[-+]?\d*(?:[\.\,]\d+)?$/,
                card: /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,
                cvv: /^([0-9]){3,4}$/,
                email: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,
                url: /^(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,
                domain: /^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,8}$/,
                datetime: /^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,
                date: /(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,
                time: /^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,
                dateISO: /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,
                month_day_year: /^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,
                day_month_year: /^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,
                color: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/
            },
            validators: {
                equalTo: function(a) {
                    var b = c.getElementById(a.getAttribute(this.add_namespace("data-equalto"))).value,
                        d = a.value,
                        e = b === d;
                    return e
                }
            }
        },
        timer: null,
        init: function(a, b, c) {
            this.bindings(b, c)
        },
        events: function(b) {
            var c = this,
                d = c.S(b).attr("novalidate", "novalidate"),
                e = d.data(this.attr_name(!0) + "-init") || {};
            this.invalid_attr = this.add_namespace("data-invalid"), d.off(".abide").on("submit.fndtn.abide validate.fndtn.abide", function(a) {
                var b = /ajax/i.test(c.S(this).attr(c.attr_name()));
                return c.validate(c.S(this).find("input, textarea, select").get(), a, b)
            }).on("reset", function() {
                return c.reset(a(this))
            }).find("input, textarea, select").off(".abide").on("blur.fndtn.abide change.fndtn.abide", function(a) {
                e.validate_on_blur === !0 && c.validate([this], a)
            }).on("keydown.fndtn.abide", function(a) {
                e.live_validate === !0 && 9 != a.which && (clearTimeout(c.timer), c.timer = setTimeout(function() {
                    c.validate([this], a)
                }.bind(this), e.timeout))
            })
        },
        reset: function(b) {
            b.removeAttr(this.invalid_attr), a(this.invalid_attr, b).removeAttr(this.invalid_attr), a("." + this.settings.error_class, b).not("small").removeClass(this.settings.error_class)
        },
        validate: function(a, b, c) {
            for (var d = this.parse_patterns(a), e = d.length, f = this.S(a[0]).closest("form"), g = /submit/.test(b.type), h = 0; e > h; h++)
                if (!d[h] && (g || c)) return this.settings.focus_on_invalid && a[h].focus(), f.trigger("invalid").trigger("invalid.fndtn.abide"), this.S(a[h]).closest("form").attr(this.invalid_attr, ""), !1;
            return (g || c) && f.trigger("valid").trigger("valid.fndtn.abide"), f.removeAttr(this.invalid_attr), c ? !1 : !0
        },
        parse_patterns: function(a) {
            for (var b = a.length, c = []; b--;) c.push(this.pattern(a[b]));
            return this.check_validation_and_apply_styles(c)
        },
        pattern: function(a) {
            var b = a.getAttribute("type"),
                c = "string" == typeof a.getAttribute("required"),
                d = a.getAttribute("pattern") || "";
            return this.settings.patterns.hasOwnProperty(d) && d.length > 0 ? [a, this.settings.patterns[d], c] : d.length > 0 ? [a, new RegExp(d), c] : this.settings.patterns.hasOwnProperty(b) ? [a, this.settings.patterns[b], c] : (d = /.*/, [a, d, c])
        },
        check_validation_and_apply_styles: function(b) {
            var c = b.length,
                d = [],
                e = this.S(b[0][0]).closest("[data-" + this.attr_name(!0) + "]");
            for (e.data(this.attr_name(!0) + "-init") || {}; c--;) {
                var f, g, h = b[c][0],
                    i = b[c][2],
                    j = h.value.trim(),
                    k = this.S(h).parent(),
                    l = h.getAttribute(this.add_namespace("data-abide-validator")),
                    m = "radio" === h.type,
                    n = "checkbox" === h.type,
                    o = this.S('label[for="' + h.getAttribute("id") + '"]'),
                    p = i ? h.value.length > 0 : !0,
                    q = [];
                if (h.getAttribute(this.add_namespace("data-equalto")) && (l = "equalTo"), f = k.is("label") ? k.parent() : k, l && (g = this.settings.validators[l].apply(this, [h, i, f]), q.push(g)), m && i) q.push(this.valid_radio(h, i));
                else if (n && i) q.push(this.valid_checkbox(h, i));
                else if (q.push(b[c][1].test(j) && p || !i && h.value.length < 1 || a(h).attr("disabled") ? !0 : !1), q = [q.every(function(a) {
                        return a
                    })], q[0]) this.S(h).removeAttr(this.invalid_attr), h.setAttribute("aria-invalid", "false"), h.removeAttribute("aria-describedby"), f.removeClass(this.settings.error_class), o.length > 0 && this.settings.error_labels && o.removeClass(this.settings.error_class).removeAttr("role"), a(h).triggerHandler("valid");
                else {
                    this.S(h).attr(this.invalid_attr, ""), h.setAttribute("aria-invalid", "true");
                    var r = f.find("small." + this.settings.error_class, "span." + this.settings.error_class),
                        s = r.length > 0 ? r[0].id : "";
                    s.length > 0 && h.setAttribute("aria-describedby", s), f.addClass(this.settings.error_class), o.length > 0 && this.settings.error_labels && o.addClass(this.settings.error_class).attr("role", "alert"), a(h).triggerHandler("invalid")
                }
                d.push(q[0])
            }
            return d = [d.every(function(a) {
                return a
            })]
        },
        valid_checkbox: function(a, b) {
            var a = this.S(a),
                c = a.is(":checked") || !b || a.get(0).getAttribute("disabled");
            return c ? a.removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class) : a.attr(this.invalid_attr, "").parent().addClass(this.settings.error_class), c
        },
        valid_radio: function(a) {
            for (var b = a.getAttribute("name"), c = this.S(a).closest("[data-" + this.attr_name(!0) + "]").find("[name='" + b + "']"), d = c.length, e = !1, f = !1, g = 0; d > g; g++) c[g].getAttribute("disabled") ? (f = !0, e = !0) : c[g].checked ? e = !0 : f && (e = !1);
            for (var g = 0; d > g; g++) e ? this.S(c[g]).removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class) : this.S(c[g]).attr(this.invalid_attr, "").parent().addClass(this.settings.error_class);
            return e
        },
        valid_equal: function(a, b, d) {
            var e = c.getElementById(a.getAttribute(this.add_namespace("data-equalto"))).value,
                f = a.value,
                g = e === f;
            return g ? (this.S(a).removeAttr(this.invalid_attr), d.removeClass(this.settings.error_class), label.length > 0 && settings.error_labels && label.removeClass(this.settings.error_class)) : (this.S(a).attr(this.invalid_attr, ""), d.addClass(this.settings.error_class), label.length > 0 && settings.error_labels && label.addClass(this.settings.error_class)), g
        },
        valid_oneof: function(a, b, c, d) {
            var a = this.S(a),
                e = this.S("[" + this.add_namespace("data-oneof") + "]"),
                f = e.filter(":checked").length > 0;
            if (f ? a.removeAttr(this.invalid_attr).parent().removeClass(this.settings.error_class) : a.attr(this.invalid_attr, "").parent().addClass(this.settings.error_class), !d) {
                var g = this;
                e.each(function() {
                    g.valid_oneof.call(g, this, null, null, !0)
                })
            }
            return f
        }
    }
}(jQuery, window, window.document),
function(a) {
    "use strict";
    Foundation.libs.accordion = {
        name: "accordion",
        version: "5.5.1",
        settings: {
            content_class: "content",
            active_class: "active",
            multi_expand: !1,
            toggleable: !0,
            callback: function() {}
        },
        init: function(a, b, c) {
            this.bindings(b, c)
        },
        events: function() {
            var b = this,
                c = this.S;
            c(this.scope).off(".fndtn.accordion").on("click.fndtn.accordion", "[" + this.attr_name() + "] > .accordion-navigation > a", function(d) {
                var e = c(this).closest("[" + b.attr_name() + "]"),
                    f = b.attr_name() + "=" + e.attr(b.attr_name()),
                    g = e.data(b.attr_name(!0) + "-init") || b.settings,
                    h = c("#" + this.href.split("#")[1]),
                    i = a("> .accordion-navigation", e),
                    j = i.children("." + g.content_class),
                    k = j.filter("." + g.active_class);
                return d.preventDefault(), e.attr(b.attr_name()) && (j = j.add("[" + f + "] dd > ." + g.content_class), i = i.add("[" + f + "] .accordion-navigation")), g.toggleable && h.is(k) ? (h.parent(".accordion-navigation").toggleClass(g.active_class, !1), h.toggleClass(g.active_class, !1), g.callback(h), h.triggerHandler("toggled", [e]), void e.triggerHandler("toggled", [h])) : (g.multi_expand || (j.removeClass(g.active_class), i.removeClass(g.active_class)), h.addClass(g.active_class).parent().addClass(g.active_class), g.callback(h), h.triggerHandler("toggled", [e]), void e.triggerHandler("toggled", [h]))
            })
        },
        off: function() {},
        reflow: function() {}
    }
}(jQuery, window, window.document),
function(a) {
    "use strict";
    Foundation.libs.alert = {
        name: "alert",
        version: "5.5.1",
        settings: {
            callback: function() {}
        },
        init: function(a, b, c) {
            this.bindings(b, c)
        },
        events: function() {
            var b = this,
                c = this.S;
            a(this.scope).off(".alert").on("click.fndtn.alert", "[" + this.attr_name() + "] .close", function(a) {
                var d = c(this).closest("[" + b.attr_name() + "]"),
                    e = d.data(b.attr_name(!0) + "-init") || b.settings;
                a.preventDefault(), Modernizr.csstransitions ? (d.addClass("alert-close"), d.on("transitionend webkitTransitionEnd oTransitionEnd", function() {
                    c(this).trigger("close").trigger("close.fndtn.alert").remove(), e.callback()
                })) : d.fadeOut(300, function() {
                    c(this).trigger("close").trigger("close.fndtn.alert").remove(), e.callback()
                })
            })
        },
        reflow: function() {}
    }
}(jQuery, window, window.document),
function(a, b, c, d) {
    "use strict";
    Foundation.libs.clearing = {
        name: "clearing",
        version: "5.5.1",
        settings: {
            templates: {
                viewing: '<a href="#" class="clearing-close">&times;</a><div class="visible-img" style="display: none"><div class="clearing-touch-label"></div><img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" /><p class="clearing-caption"></p><a href="#" class="clearing-main-prev"><span></span></a><a href="#" class="clearing-main-next"><span></span></a></div>'
            },
            close_selectors: ".clearing-close, div.clearing-blackout",
            open_selectors: "",
            skip_selector: "",
            touch_label: "",
            init: !1,
            locked: !1
        },
        init: function(a, b, c) {
            var d = this;
            Foundation.inherit(this, "throttle image_loaded"), this.bindings(b, c), d.S(this.scope).is("[" + this.attr_name() + "]") ? this.assemble(d.S("li", this.scope)) : d.S("[" + this.attr_name() + "]", this.scope).each(function() {
                d.assemble(d.S("li", this))
            })
        },
        events: function(d) {
            var e = this,
                f = e.S,
                g = a(".scroll-container");
            g.length > 0 && (this.scope = g), f(this.scope).off(".clearing").on("click.fndtn.clearing", "ul[" + this.attr_name() + "] li " + this.settings.open_selectors, function(a, b, c) {
                var b = b || f(this),
                    c = c || b,
                    d = b.next("li"),
                    g = b.closest("[" + e.attr_name() + "]").data(e.attr_name(!0) + "-init"),
                    h = f(a.target);
                a.preventDefault(), g || (e.init(), g = b.closest("[" + e.attr_name() + "]").data(e.attr_name(!0) + "-init")), c.hasClass("visible") && b[0] === c[0] && d.length > 0 && e.is_open(b) && (c = d, h = f("img", c)), e.open(h, b, c), e.update_paddles(c)
            }).on("click.fndtn.clearing", ".clearing-main-next", function(a) {
                e.nav(a, "next")
            }).on("click.fndtn.clearing", ".clearing-main-prev", function(a) {
                e.nav(a, "prev")
            }).on("click.fndtn.clearing", this.settings.close_selectors, function(a) {
                Foundation.libs.clearing.close(a, this)
            }), a(c).on("keydown.fndtn.clearing", function(a) {
                e.keydown(a)
            }), f(b).off(".clearing").on("resize.fndtn.clearing", function() {
                e.resize()
            }), this.swipe_events(d)
        },
        swipe_events: function() {
            var a = this,
                b = a.S;
            b(this.scope).on("touchstart.fndtn.clearing", ".visible-img", function(a) {
                a.touches || (a = a.originalEvent);
                var c = {
                    start_page_x: a.touches[0].pageX,
                    start_page_y: a.touches[0].pageY,
                    start_time: (new Date).getTime(),
                    delta_x: 0,
                    is_scrolling: d
                };
                b(this).data("swipe-transition", c), a.stopPropagation()
            }).on("touchmove.fndtn.clearing", ".visible-img", function(c) {
                if (c.touches || (c = c.originalEvent), !(c.touches.length > 1 || c.scale && 1 !== c.scale)) {
                    var d = b(this).data("swipe-transition");
                    if ("undefined" == typeof d && (d = {}), d.delta_x = c.touches[0].pageX - d.start_page_x, Foundation.rtl && (d.delta_x = -d.delta_x), "undefined" == typeof d.is_scrolling && (d.is_scrolling = !!(d.is_scrolling || Math.abs(d.delta_x) < Math.abs(c.touches[0].pageY - d.start_page_y))), !d.is_scrolling && !d.active) {
                        c.preventDefault();
                        var e = d.delta_x < 0 ? "next" : "prev";
                        d.active = !0, a.nav(c, e)
                    }
                }
            }).on("touchend.fndtn.clearing", ".visible-img", function(a) {
                b(this).data("swipe-transition", {}), a.stopPropagation()
            })
        },
        assemble: function(b) {
            var c = b.parent();
            if (!c.parent().hasClass("carousel")) {
                c.after('<div id="foundationClearingHolder"></div>');
                var d = c.detach(),
                    e = "";
                if (null != d[0]) {
                    e = d[0].outerHTML;
                    var f = this.S("#foundationClearingHolder"),
                        g = c.data(this.attr_name(!0) + "-init"),
                        h = {
                            grid: '<div class="carousel">' + e + "</div>",
                            viewing: g.templates.viewing
                        },
                        i = '<div class="clearing-assembled"><div>' + h.viewing + h.grid + "</div></div>",
                        j = this.settings.touch_label;
                    Modernizr.touch && (i = a(i).find(".clearing-touch-label").html(j).end()), f.after(i).remove()
                }
            }
        },
        open: function(b, d, e) {
            function f() {
                setTimeout(function() {
                    this.image_loaded(m, function() {
                        1 !== m.outerWidth() || o ? g.call(this, m) : f.call(this)
                    }.bind(this))
                }.bind(this), 100)
            }

            function g(b) {
                var c = a(b);
                c.css("visibility", "visible"), i.css("overflow", "hidden"), j.addClass("clearing-blackout"), k.addClass("clearing-container"), l.show(), this.fix_height(e).caption(h.S(".clearing-caption", l), h.S("img", e)).center_and_label(b, n).shift(d, e, function() {
                    e.closest("li").siblings().removeClass("visible"), e.closest("li").addClass("visible")
                }), l.trigger("opened.fndtn.clearing")
            }
            var h = this,
                i = a(c.body),
                j = e.closest(".clearing-assembled"),
                k = h.S("div", j).first(),
                l = h.S(".visible-img", k),
                m = h.S("img", l).not(b),
                n = h.S(".clearing-touch-label", k),
                o = !1;
            a("body").on("touchmove", function(a) {
                a.preventDefault()
            }), m.error(function() {
                o = !0
            }), this.locked() || (l.trigger("open.fndtn.clearing"), m.attr("src", this.load(b)).css("visibility", "hidden"), f.call(this))
        },
        close: function(b, d) {
            b.preventDefault();
            var e, f, g = function(a) {
                    return /blackout/.test(a.selector) ? a : a.closest(".clearing-blackout")
                }(a(d)),
                h = a(c.body);
            return d === b.target && g && (h.css("overflow", ""), e = a("div", g).first(), f = a(".visible-img", e), f.trigger("close.fndtn.clearing"), this.settings.prev_index = 0, a("ul[" + this.attr_name() + "]", g).attr("style", "").closest(".clearing-blackout").removeClass("clearing-blackout"), e.removeClass("clearing-container"), f.hide(), f.trigger("closed.fndtn.clearing")), a("body").off("touchmove"), !1
        },
        is_open: function(a) {
            return a.parent().prop("style").length > 0
        },
        keydown: function(b) {
            var c = a(".clearing-blackout ul[" + this.attr_name() + "]"),
                d = this.rtl ? 37 : 39,
                e = this.rtl ? 39 : 37,
                f = 27;
            b.which === d && this.go(c, "next"), b.which === e && this.go(c, "prev"), b.which === f && this.S("a.clearing-close").trigger("click").trigger("click.fndtn.clearing")
        },
        nav: function(b, c) {
            var d = a("ul[" + this.attr_name() + "]", ".clearing-blackout");
            b.preventDefault(), this.go(d, c)
        },
        resize: function() {
            var b = a("img", ".clearing-blackout .visible-img"),
                c = a(".clearing-touch-label", ".clearing-blackout");
            b.length && (this.center_and_label(b, c), b.trigger("resized.fndtn.clearing"))
        },
        fix_height: function(a) {
            var b = a.parent().children(),
                c = this;
            return b.each(function() {
                var a = c.S(this),
                    b = a.find("img");
                a.height() > b.outerHeight() && a.addClass("fix-height")
            }).closest("ul").width(100 * b.length + "%"), this
        },
        update_paddles: function(a) {
            a = a.closest("li");
            var b = a.closest(".carousel").siblings(".visible-img");
            a.next().length > 0 ? this.S(".clearing-main-next", b).removeClass("disabled") : this.S(".clearing-main-next", b).addClass("disabled"), a.prev().length > 0 ? this.S(".clearing-main-prev", b).removeClass("disabled") : this.S(".clearing-main-prev", b).addClass("disabled")
        },
        center_and_label: function(a, b) {
            return b.css(!this.rtl && b.length > 0 ? {
                marginLeft: -(b.outerWidth() / 2),
                marginTop: -(a.outerHeight() / 2) - b.outerHeight() - 10
            } : {
                marginRight: -(b.outerWidth() / 2),
                marginTop: -(a.outerHeight() / 2) - b.outerHeight() - 10,
                left: "auto",
                right: "50%"
            }), this
        },
        load: function(a) {
            var b;
            return b = "A" === a[0].nodeName ? a.attr("href") : a.closest("a").attr("href"), this.preload(a), b ? b : a.attr("src")
        },
        preload: function(a) {
            this.img(a.closest("li").next()).img(a.closest("li").prev())
        },
        img: function(a) {
            if (a.length) {
                var b = new Image,
                    c = this.S("a", a);
                b.src = c.length ? c.attr("href") : this.S("img", a).attr("src")
            }
            return this
        },
        caption: function(a, b) {
            var c = b.attr("data-caption");
            return c ? a.html(c).show() : a.text("").hide(), this
        },
        go: function(a, b) {
            var c = this.S(".visible", a),
                d = c[b]();
            this.settings.skip_selector && 0 != d.find(this.settings.skip_selector).length && (d = d[b]()), d.length && this.S("img", d).trigger("click", [c, d]).trigger("click.fndtn.clearing", [c, d]).trigger("change.fndtn.clearing")
        },
        shift: function(a, b, c) {
            var d, e = b.parent(),
                f = this.settings.prev_index || b.index(),
                g = this.direction(e, a, b),
                h = this.rtl ? "right" : "left",
                i = parseInt(e.css("left"), 10),
                j = b.outerWidth(),
                k = {};
            b.index() === f || /skip/.test(g) ? /skip/.test(g) && (d = b.index() - this.settings.up_count, this.lock(), d > 0 ? (k[h] = -(d * j), e.animate(k, 300, this.unlock())) : (k[h] = 0, e.animate(k, 300, this.unlock()))) : /left/.test(g) ? (this.lock(), k[h] = i + j, e.animate(k, 300, this.unlock())) : /right/.test(g) && (this.lock(), k[h] = i - j, e.animate(k, 300, this.unlock())), c()
        },
        direction: function(a, b, c) {
            var d, e = this.S("li", a),
                f = e.outerWidth() + e.outerWidth() / 4,
                g = Math.floor(this.S(".clearing-container").outerWidth() / f) - 1,
                h = e.index(c);
            return this.settings.up_count = g, d = this.adjacent(this.settings.prev_index, h) ? h > g && h > this.settings.prev_index ? "right" : h > g - 1 && h <= this.settings.prev_index ? "left" : !1 : "skip", this.settings.prev_index = h, d
        },
        adjacent: function(a, b) {
            for (var c = b + 1; c >= b - 1; c--)
                if (c === a) return !0;
            return !1
        },
        lock: function() {
            this.settings.locked = !0
        },
        unlock: function() {
            this.settings.locked = !1
        },
        locked: function() {
            return this.settings.locked
        },
        off: function() {
            this.S(this.scope).off(".fndtn.clearing"), this.S(b).off(".fndtn.clearing")
        },
        reflow: function() {
            this.init()
        }
    }
}(jQuery, window, window.document),
function(a, b, c) {
    "use strict";
    Foundation.libs.dropdown = {
        name: "dropdown",
        version: "5.5.1",
        settings: {
            active_class: "open",
            disabled_class: "disabled",
            mega_class: "mega",
            align: "bottom",
            is_hover: !1,
            hover_timeout: 150,
            opened: function() {},
            closed: function() {}
        },
        init: function(b, c, d) {
            Foundation.inherit(this, "throttle"), a.extend(!0, this.settings, c, d), this.bindings(c, d)
        },
        events: function() {
            var d = this,
                e = d.S;
            e(this.scope).off(".dropdown").on("click.fndtn.dropdown", "[" + this.attr_name() + "]", function(b) {
                var c = e(this).data(d.attr_name(!0) + "-init") || d.settings;
                (!c.is_hover || Modernizr.touch) && (b.preventDefault(), e(this).parent("[data-reveal-id]") && b.stopPropagation(), d.toggle(a(this)))
            }).on("mouseenter.fndtn.dropdown", "[" + this.attr_name() + "], [" + this.attr_name() + "-content]", function(a) {
                var b, c, f = e(this);
                clearTimeout(d.timeout), f.data(d.data_attr()) ? (b = e("#" + f.data(d.data_attr())), c = f) : (b = f, c = e("[" + d.attr_name() + '="' + b.attr("id") + '"]'));
                var g = c.data(d.attr_name(!0) + "-init") || d.settings;
                e(a.currentTarget).data(d.data_attr()) && g.is_hover && d.closeall.call(d), g.is_hover && d.open.apply(d, [b, c])
            }).on("mouseleave.fndtn.dropdown", "[" + this.attr_name() + "], [" + this.attr_name() + "-content]", function() {
                var a, b = e(this);
                if (b.data(d.data_attr())) a = b.data(d.data_attr(!0) + "-init") || d.settings;
                else var c = e("[" + d.attr_name() + '="' + e(this).attr("id") + '"]'),
                    a = c.data(d.attr_name(!0) + "-init") || d.settings;
                d.timeout = setTimeout(function() {
                    b.data(d.data_attr()) ? a.is_hover && d.close.call(d, e("#" + b.data(d.data_attr()))) : a.is_hover && d.close.call(d, b)
                }.bind(this), a.hover_timeout)
            }).on("click.fndtn.dropdown", function(b) {
                var f = e(b.target).closest("[" + d.attr_name() + "-content]"),
                    g = f.find("a");
                return g.length > 0 && "false" !== f.attr("aria-autoclose") && d.close.call(d, e("[" + d.attr_name() + "-content]")), b.target !== c && !a.contains(c.documentElement, b.target) || e(b.target).closest("[" + d.attr_name() + "]").length > 0 ? void 0 : !e(b.target).data("revealId") && f.length > 0 && (e(b.target).is("[" + d.attr_name() + "-content]") || a.contains(f.first()[0], b.target)) ? void b.stopPropagation() : void d.close.call(d, e("[" + d.attr_name() + "-content]"))
            }).on("opened.fndtn.dropdown", "[" + d.attr_name() + "-content]", function() {
                d.settings.opened.call(this)
            }).on("closed.fndtn.dropdown", "[" + d.attr_name() + "-content]", function() {
                d.settings.closed.call(this)
            }), e(b).off(".dropdown").on("resize.fndtn.dropdown", d.throttle(function() {
                d.resize.call(d)
            }, 50)), this.resize()
        },
        close: function(b) {
            var c = this;
            b.each(function() {
                var d = a("[" + c.attr_name() + "=" + b[0].id + "]") || a("aria-controls=" + b[0].id + "]");
                d.attr("aria-expanded", "false"), c.S(this).hasClass(c.settings.active_class) && (c.S(this).css(Foundation.rtl ? "right" : "left", "-99999px").attr("aria-hidden", "true").removeClass(c.settings.active_class).prev("[" + c.attr_name() + "]").removeClass(c.settings.active_class).removeData("target"), c.S(this).trigger("closed").trigger("closed.fndtn.dropdown", [b]))
            }), b.removeClass("f-open-" + this.attr_name(!0))
        },
        closeall: function() {
            var b = this;
            a.each(b.S(".f-open-" + this.attr_name(!0)), function() {
                b.close.call(b, b.S(this))
            })
        },
        open: function(a, b) {
            this.css(a.addClass(this.settings.active_class), b), a.prev("[" + this.attr_name() + "]").addClass(this.settings.active_class), a.data("target", b.get(0)).trigger("opened").trigger("opened.fndtn.dropdown", [a, b]), a.attr("aria-hidden", "false"), b.attr("aria-expanded", "true"), a.focus(), a.addClass("f-open-" + this.attr_name(!0))
        },
        data_attr: function() {
            return this.namespace.length > 0 ? this.namespace + "-" + this.name : this.name
        },
        toggle: function(a) {
            if (!a.hasClass(this.settings.disabled_class)) {
                var b = this.S("#" + a.data(this.data_attr()));
                0 !== b.length && (this.close.call(this, this.S("[" + this.attr_name() + "-content]").not(b)), b.hasClass(this.settings.active_class) ? (this.close.call(this, b), b.data("target") !== a.get(0) && this.open.call(this, b, a)) : this.open.call(this, b, a))
            }
        },
        resize: function() {
            var b = this.S("[" + this.attr_name() + "-content].open"),
                c = a(b.data("target"));
            b.length && c.length && this.css(b, c)
        },
        css: function(a, b) {
            var c = Math.max((b.width() - a.width()) / 2, 8),
                d = b.data(this.attr_name(!0) + "-init") || this.settings;
            if (this.clear_idx(), this.small()) {
                var e = this.dirs.bottom.call(a, b, d);
                a.attr("style", "").removeClass("drop-left drop-right drop-top").css({
                    position: "absolute",
                    width: "95%",
                    "max-width": "none",
                    top: e.top
                }), a.css(Foundation.rtl ? "right" : "left", c)
            } else this.style(a, b, d);
            return a
        },
        style: function(b, c, d) {
            var e = a.extend({
                position: "absolute"
            }, this.dirs[d.align].call(b, c, d));
            b.attr("style", "").css(e)
        },
        dirs: {
            _base: function(a) {
                var d = this.offsetParent(),
                    e = d.offset(),
                    f = a.offset();
                f.top -= e.top, f.left -= e.left, f.missRight = !1, f.missTop = !1, f.missLeft = !1, f.leftRightFlag = !1;
                var g;
                g = c.getElementsByClassName("row")[0] ? c.getElementsByClassName("row")[0].clientWidth : b.outerWidth;
                var h = (b.outerWidth - g) / 2,
                    i = g;
                return this.hasClass("mega") || (a.offset().top <= this.outerHeight() && (f.missTop = !0, i = b.outerWidth - h, f.leftRightFlag = !0), a.offset().left + this.outerWidth() > a.offset().left + h && a.offset().left - h > this.outerWidth() && (f.missRight = !0, f.missLeft = !1), a.offset().left - this.outerWidth() <= 0 && (f.missLeft = !0, f.missRight = !1)), f
            },
            top: function(a, b) {
                var c = Foundation.libs.dropdown,
                    d = c.dirs._base.call(this, a);
                return this.addClass("drop-top"), 1 == d.missTop && (d.top = d.top + a.outerHeight() + this.outerHeight(), this.removeClass("drop-top")), 1 == d.missRight && (d.left = d.left - this.outerWidth() + a.outerWidth()), (a.outerWidth() < this.outerWidth() || c.small() || this.hasClass(b.mega_menu)) && c.adjust_pip(this, a, b, d), Foundation.rtl ? {
                    left: d.left - this.outerWidth() + a.outerWidth(),
                    top: d.top - this.outerHeight()
                } : {
                    left: d.left,
                    top: d.top - this.outerHeight()
                }
            },
            bottom: function(a, b) {
                var c = Foundation.libs.dropdown,
                    d = c.dirs._base.call(this, a);
                return 1 == d.missRight && (d.left = d.left - this.outerWidth() + a.outerWidth()), (a.outerWidth() < this.outerWidth() || c.small() || this.hasClass(b.mega_menu)) && c.adjust_pip(this, a, b, d), c.rtl ? {
                    left: d.left - this.outerWidth() + a.outerWidth(),
                    top: d.top + a.outerHeight()
                } : {
                    left: d.left,
                    top: d.top + a.outerHeight()
                }
            },
            left: function(a) {
                var b = Foundation.libs.dropdown.dirs._base.call(this, a);
                return this.addClass("drop-left"), 1 == b.missLeft && (b.left = b.left + this.outerWidth(), b.top = b.top + a.outerHeight(), this.removeClass("drop-left")), {
                    left: b.left - this.outerWidth(),
                    top: b.top
                }
            },
            right: function(a, b) {
                var c = Foundation.libs.dropdown.dirs._base.call(this, a);
                this.addClass("drop-right"), 1 == c.missRight ? (c.left = c.left - this.outerWidth(), c.top = c.top + a.outerHeight(), this.removeClass("drop-right")) : c.triggeredRight = !0;
                var d = Foundation.libs.dropdown;
                return (a.outerWidth() < this.outerWidth() || d.small() || this.hasClass(b.mega_menu)) && d.adjust_pip(this, a, b, c), {
                    left: c.left + a.outerWidth(),
                    top: c.top
                }
            }
        },
        adjust_pip: function(a, b, c, d) {
            var e = Foundation.stylesheet,
                f = 8;
            a.hasClass(c.mega_class) ? f = d.left + b.outerWidth() / 2 - 8 : this.small() && (f += d.left - 8), this.rule_idx = e.cssRules.length;
            var g = ".f-dropdown.open:before",
                h = ".f-dropdown.open:after",
                i = "left: " + f + "px;",
                j = "left: " + (f - 1) + "px;";
            1 == d.missRight && (f = a.outerWidth() - 23, g = ".f-dropdown.open:before", h = ".f-dropdown.open:after", i = "left: " + f + "px;", j = "left: " + (f - 1) + "px;"), 1 == d.triggeredRight && (g = ".f-dropdown.open:before", h = ".f-dropdown.open:after", i = "left:-12px;", j = "left:-14px;"), e.insertRule ? (e.insertRule([g, "{", i, "}"].join(" "), this.rule_idx), e.insertRule([h, "{", j, "}"].join(" "), this.rule_idx + 1)) : (e.addRule(g, i, this.rule_idx), e.addRule(h, j, this.rule_idx + 1))
        },
        clear_idx: function() {
            var a = Foundation.stylesheet;
            "undefined" != typeof this.rule_idx && (a.deleteRule(this.rule_idx), a.deleteRule(this.rule_idx), delete this.rule_idx)
        },
        small: function() {
            return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches
        },
        off: function() {
            this.S(this.scope).off(".fndtn.dropdown"), this.S("html, body").off(".fndtn.dropdown"), this.S(b).off(".fndtn.dropdown"), this.S("[data-dropdown-content]").off(".fndtn.dropdown")
        },
        reflow: function() {}
    }
}(jQuery, window, window.document),
function(a, b) {
    "use strict";
    Foundation.libs.equalizer = {
        name: "equalizer",
        version: "5.5.1",
        settings: {
            use_tallest: !0,
            before_height_change: a.noop,
            after_height_change: a.noop,
            equalize_on_stack: !1
        },
        init: function(a, b, c) {
            Foundation.inherit(this, "image_loaded"), this.bindings(b, c), this.reflow()
        },
        events: function() {
            this.S(b).off(".equalizer").on("resize.fndtn.equalizer", function() {
                this.reflow()
            }.bind(this))
        },
        equalize: function(b) {
            var c = !1,
                d = b.find("[" + this.attr_name() + "-watch]:visible"),
                e = b.data(this.attr_name(!0) + "-init");
            if (0 !== d.length) {
                var f = d.first().offset().top;
                if (e.before_height_change(), b.trigger("before-height-change").trigger("before-height-change.fndth.equalizer"), d.height("inherit"), d.each(function() {
                        var b = a(this);
                        b.offset().top !== f && (c = !0)
                    }), e.equalize_on_stack !== !1 || !c) {
                    var g = d.map(function() {
                        return a(this).outerHeight(!1)
                    }).get();
                    if (e.use_tallest) {
                        var h = Math.max.apply(null, g);
                        d.css("height", h)
                    } else {
                        var i = Math.min.apply(null, g);
                        d.css("height", i)
                    }
                    e.after_height_change(), b.trigger("after-height-change").trigger("after-height-change.fndtn.equalizer")
                }
            }
        },
        reflow: function() {
            var b = this;
            this.S("[" + this.attr_name() + "]", this.scope).each(function() {
                var c = a(this);
                b.image_loaded(b.S("img", this), function() {
                    b.equalize(c)
                })
            })
        }
    }
}(jQuery, window, window.document),
function(a, b) {
    "use strict";
    Foundation.libs.interchange = {
        name: "interchange",
        version: "5.5.1",
        cache: {},
        images_loaded: !1,
        nodes_loaded: !1,
        settings: {
            load_attr: "interchange",
            named_queries: {
                "default": "only screen",
                small: Foundation.media_queries.small,
                "small-only": Foundation.media_queries["small-only"],
                medium: Foundation.media_queries.medium,
                "medium-only": Foundation.media_queries["medium-only"],
                large: Foundation.media_queries.large,
                "large-only": Foundation.media_queries["large-only"],
                xlarge: Foundation.media_queries.xlarge,
                "xlarge-only": Foundation.media_queries["xlarge-only"],
                xxlarge: Foundation.media_queries.xxlarge,
                landscape: "only screen and (orientation: landscape)",
                portrait: "only screen and (orientation: portrait)",
                retina: "only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min--moz-device-pixel-ratio: 2),only screen and (-o-min-device-pixel-ratio: 2/1),only screen and (min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx)"
            },
            directives: {
                replace: function(b, c, d) {
                    if (/IMG/.test(b[0].nodeName)) {
                        var e = b[0].src;
                        if (new RegExp(c, "i").test(e)) return;
                        return b[0].src = c, d(b[0].src)
                    }
                    var f = b.data(this.data_attr + "-last-path"),
                        g = this;
                    if (f != c) return /\.(gif|jpg|jpeg|tiff|png)([?#].*)?/i.test(c) ? (a(b).css("background-image", "url(" + c + ")"), b.data("interchange-last-path", c), d(c)) : a.get(c, function(a) {
                        b.html(a), b.data(g.data_attr + "-last-path", c), d()
                    })
                }
            }
        },
        init: function(b, c, d) {
            Foundation.inherit(this, "throttle random_str"), this.data_attr = this.set_data_attr(), a.extend(!0, this.settings, c, d), this.bindings(c, d), this.load("images"), this.load("nodes")
        },
        get_media_hash: function() {
            var a = "";
            for (var b in this.settings.named_queries) a += matchMedia(this.settings.named_queries[b]).matches.toString();
            return a
        },
        events: function() {
            var c, d = this;
            return a(b).off(".interchange").on("resize.fndtn.interchange", d.throttle(function() {
                var a = d.get_media_hash();
                a !== c && d.resize(), c = a
            }, 50)), this
        },
        resize: function() {
            var b = this.cache;
            if (!this.images_loaded || !this.nodes_loaded) return void setTimeout(a.proxy(this.resize, this), 50);
            for (var c in b)
                if (b.hasOwnProperty(c)) {
                    var d = this.results(c, b[c]);
                    d && this.settings.directives[d.scenario[1]].call(this, d.el, d.scenario[0], function(a) {
                        if (arguments[0] instanceof Array) var b = arguments[0];
                        else var b = Array.prototype.slice.call(arguments, 0);
                        return function() {
                            a.el.trigger(a.scenario[1], b)
                        }
                    }(d))
                }
        },
        results: function(a, b) {
            var c = b.length;
            if (c > 0)
                for (var d = this.S("[" + this.add_namespace("data-uuid") + '="' + a + '"]'); c--;) {
                    var e, f = b[c][2];
                    if (e = matchMedia(this.settings.named_queries.hasOwnProperty(f) ? this.settings.named_queries[f] : f), e.matches) return {
                        el: d,
                        scenario: b[c]
                    }
                }
            return !1
        },
        load: function(a, b) {
            return ("undefined" == typeof this["cached_" + a] || b) && this["update_" + a](), this["cached_" + a]
        },
        update_images: function() {
            var a = this.S("img[" + this.data_attr + "]"),
                b = a.length,
                c = b,
                d = 0,
                e = this.data_attr;
            for (this.cache = {}, this.cached_images = [], this.images_loaded = 0 === b; c--;) {
                if (d++, a[c]) {
                    var f = a[c].getAttribute(e) || "";
                    f.length > 0 && this.cached_images.push(a[c])
                }
                d === b && (this.images_loaded = !0, this.enhance("images"))
            }
            return this
        },
        update_nodes: function() {
            var a = this.S("[" + this.data_attr + "]").not("img"),
                b = a.length,
                c = b,
                d = 0,
                e = this.data_attr;
            for (this.cached_nodes = [], this.nodes_loaded = 0 === b; c--;) {
                d++;
                var f = a[c].getAttribute(e) || "";
                f.length > 0 && this.cached_nodes.push(a[c]), d === b && (this.nodes_loaded = !0, this.enhance("nodes"))
            }
            return this
        },
        enhance: function(c) {
            for (var d = this["cached_" + c].length; d--;) this.object(a(this["cached_" + c][d]));
            return a(b).trigger("resize").trigger("resize.fndtn.interchange")
        },
        convert_directive: function(a) {
            var b = this.trim(a);
            return b.length > 0 ? b : "replace"
        },
        parse_scenario: function(a) {
            var b = a[0].match(/(.+),\s*(\w+)\s*$/),
                c = a[1];
            if (b) var d = b[1],
                e = b[2];
            else var f = a[0].split(/,\s*$/),
                d = f[0],
                e = "";
            return [this.trim(d), this.convert_directive(e), this.trim(c)]
        },
        object: function(a) {
            var b = this.parse_data_attr(a),
                c = [],
                d = b.length;
            if (d > 0)
                for (; d--;) {
                    var e = b[d].split(/\(([^\)]*?)(\))$/);
                    if (e.length > 1) {
                        var f = this.parse_scenario(e);
                        c.push(f)
                    }
                }
            return this.store(a, c)
        },
        store: function(a, b) {
            var c = this.random_str(),
                d = a.data(this.add_namespace("uuid", !0));
            return this.cache[d] ? this.cache[d] : (a.attr(this.add_namespace("data-uuid"), c), this.cache[c] = b)
        },
        trim: function(b) {
            return "string" == typeof b ? a.trim(b) : b
        },
        set_data_attr: function(a) {
            return a ? this.namespace.length > 0 ? this.namespace + "-" + this.settings.load_attr : this.settings.load_attr : this.namespace.length > 0 ? "data-" + this.namespace + "-" + this.settings.load_attr : "data-" + this.settings.load_attr
        },
        parse_data_attr: function(a) {
            for (var b = a.attr(this.attr_name()).split(/\[(.*?)\]/), c = b.length, d = []; c--;) b[c].replace(/[\W\d]+/, "").length > 4 && d.push(b[c]);
            return d
        },
        reflow: function() {
            this.load("images", !0), this.load("nodes", !0)
        }
    }
}(jQuery, window, window.document),
function(a, b, c, d) {
    "use strict";
    Foundation.libs.joyride = {
        name: "joyride",
        version: "5.5.1",
        defaults: {
            expose: !1,
            modal: !0,
            keyboard: !0,
            tip_location: "bottom",
            nub_position: "auto",
            scroll_speed: 1500,
            scroll_animation: "linear",
            timer: 0,
            start_timer_on_click: !0,
            start_offset: 0,
            next_button: !0,
            prev_button: !0,
            tip_animation: "fade",
            pause_after: [],
            exposed: [],
            tip_animation_fade_speed: 300,
            cookie_monster: !1,
            cookie_name: "joyride",
            cookie_domain: !1,
            cookie_expires: 365,
            tip_container: "body",
            abort_on_close: !0,
            tip_location_patterns: {
                top: ["bottom"],
                bottom: [],
                left: ["right", "top", "bottom"],
                right: ["left", "top", "bottom"]
            },
            post_ride_callback: function() {},
            post_step_callback: function() {},
            pre_step_callback: function() {},
            pre_ride_callback: function() {},
            post_expose_callback: function() {},
            template: {
                link: '<a href="#close" class="joyride-close-tip">&times;</a>',
                timer: '<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',
                tip: '<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',
                wrapper: '<div class="joyride-content-wrapper"></div>',
                button: '<a href="#" class="small button joyride-next-tip"></a>',
                prev_button: '<a href="#" class="small button joyride-prev-tip"></a>',
                modal: '<div class="joyride-modal-bg"></div>',
                expose: '<div class="joyride-expose-wrapper"></div>',
                expose_cover: '<div class="joyride-expose-cover"></div>'
            },
            expose_add_class: ""
        },
        init: function(b, c, d) {
            Foundation.inherit(this, "throttle random_str"), this.settings = this.settings || a.extend({}, this.defaults, d || c), this.bindings(c, d)
        },
        go_next: function() {
            this.settings.$li.next().length < 1 ? this.end() : this.settings.timer > 0 ? (clearTimeout(this.settings.automate), this.hide(), this.show(), this.startTimer()) : (this.hide(), this.show())
        },
        go_prev: function() {
            this.settings.$li.prev().length < 1 || (this.settings.timer > 0 ? (clearTimeout(this.settings.automate), this.hide(), this.show(null, !0), this.startTimer()) : (this.hide(), this.show(null, !0)))
        },
        events: function() {
            var c = this;
            a(this.scope).off(".joyride").on("click.fndtn.joyride", ".joyride-next-tip, .joyride-modal-bg", function(a) {
                a.preventDefault(), this.go_next()
            }.bind(this)).on("click.fndtn.joyride", ".joyride-prev-tip", function(a) {
                a.preventDefault(), this.go_prev()
            }.bind(this)).on("click.fndtn.joyride", ".joyride-close-tip", function(a) {
                a.preventDefault(), this.end(this.settings.abort_on_close)
            }.bind(this)).on("keyup.fndtn.joyride", function(a) {
                if (this.settings.keyboard && this.settings.riding) switch (a.which) {
                    case 39:
                        a.preventDefault(), this.go_next();
                        break;
                    case 37:
                        a.preventDefault(), this.go_prev();
                        break;
                    case 27:
                        a.preventDefault(), this.end(this.settings.abort_on_close)
                }
            }.bind(this)), a(b).off(".joyride").on("resize.fndtn.joyride", c.throttle(function() {
                if (a("[" + c.attr_name() + "]").length > 0 && c.settings.$next_tip && c.settings.riding) {
                    if (c.settings.exposed.length > 0) {
                        var b = a(c.settings.exposed);
                        b.each(function() {
                            var b = a(this);
                            c.un_expose(b), c.expose(b)
                        })
                    }
                    c.is_phone() ? c.pos_phone() : c.pos_default(!1)
                }
            }, 100))
        },
        start: function() {
            var b = this,
                c = a("[" + this.attr_name() + "]", this.scope),
                d = ["timer", "scrollSpeed", "startOffset", "tipAnimationFadeSpeed", "cookieExpires"],
                e = d.length;
            !c.length > 0 || (this.settings.init || this.events(), this.settings = c.data(this.attr_name(!0) + "-init"), this.settings.$content_el = c, this.settings.$body = a(this.settings.tip_container), this.settings.body_offset = a(this.settings.tip_container).position(), this.settings.$tip_content = this.settings.$content_el.find("> li"), this.settings.paused = !1, this.settings.attempts = 0, this.settings.riding = !0, "function" != typeof a.cookie && (this.settings.cookie_monster = !1), (!this.settings.cookie_monster || this.settings.cookie_monster && !a.cookie(this.settings.cookie_name)) && (this.settings.$tip_content.each(function(c) {
                var f = a(this);
                this.settings = a.extend({}, b.defaults, b.data_options(f));
                for (var g = e; g--;) b.settings[d[g]] = parseInt(b.settings[d[g]], 10);
                b.create({
                    $li: f,
                    index: c
                })
            }), !this.settings.start_timer_on_click && this.settings.timer > 0 ? (this.show("init"), this.startTimer()) : this.show("init")))
        },
        resume: function() {
            this.set_li(), this.show()
        },
        tip_template: function(b) {
            var c, d;
            return b.tip_class = b.tip_class || "", c = a(this.settings.template.tip).addClass(b.tip_class), d = a.trim(a(b.li).html()) + this.prev_button_text(b.prev_button_text, b.index) + this.button_text(b.button_text) + this.settings.template.link + this.timer_instance(b.index), c.append(a(this.settings.template.wrapper)), c.first().attr(this.add_namespace("data-index"), b.index), a(".joyride-content-wrapper", c).append(d), c[0]
        },
        timer_instance: function(b) {
            var c;
            return c = 0 === b && this.settings.start_timer_on_click && this.settings.timer > 0 || 0 === this.settings.timer ? "" : a(this.settings.template.timer)[0].outerHTML
        },
        button_text: function(b) {
            return this.settings.tip_settings.next_button ? (b = a.trim(b) || "Next", b = a(this.settings.template.button).append(b)[0].outerHTML) : b = "", b
        },
        prev_button_text: function(b, c) {
            return this.settings.tip_settings.prev_button ? (b = a.trim(b) || "Previous", b = 0 == c ? a(this.settings.template.prev_button).append(b).addClass("disabled")[0].outerHTML : a(this.settings.template.prev_button).append(b)[0].outerHTML) : b = "", b
        },
        create: function(b) {
            this.settings.tip_settings = a.extend({}, this.settings, this.data_options(b.$li));
            var c = b.$li.attr(this.add_namespace("data-button")) || b.$li.attr(this.add_namespace("data-text")),
                d = b.$li.attr(this.add_namespace("data-button-prev")) || b.$li.attr(this.add_namespace("data-prev-text")),
                e = b.$li.attr("class"),
                f = a(this.tip_template({
                    tip_class: e,
                    index: b.index,
                    button_text: c,
                    prev_button_text: d,
                    li: b.$li
                }));
            a(this.settings.tip_container).append(f)
        },
        show: function(b, c) {
            var e = null;
            if (this.settings.$li === d || -1 === a.inArray(this.settings.$li.index(), this.settings.pause_after))
                if (this.settings.paused ? this.settings.paused = !1 : this.set_li(b, c), this.settings.attempts = 0, this.settings.$li.length && this.settings.$target.length > 0) {
                    if (b && (this.settings.pre_ride_callback(this.settings.$li.index(), this.settings.$next_tip), this.settings.modal && this.show_modal()), this.settings.pre_step_callback(this.settings.$li.index(), this.settings.$next_tip), this.settings.modal && this.settings.expose && this.expose(), this.settings.tip_settings = a.extend({}, this.settings, this.data_options(this.settings.$li)), this.settings.timer = parseInt(this.settings.timer, 10), this.settings.tip_settings.tip_location_pattern = this.settings.tip_location_patterns[this.settings.tip_settings.tip_location], !/body/i.test(this.settings.$target.selector)) {
                        var f = a(".joyride-modal-bg");
                        /pop/i.test(this.settings.tipAnimation) ? f.hide() : f.fadeOut(this.settings.tipAnimationFadeSpeed), this.scroll_to()
                    }
                    this.is_phone() ? this.pos_phone(!0) : this.pos_default(!0), e = this.settings.$next_tip.find(".joyride-timer-indicator"), /pop/i.test(this.settings.tip_animation) ? (e.width(0), this.settings.timer > 0 ? (this.settings.$next_tip.show(), setTimeout(function() {
                        e.animate({
                            width: e.parent().width()
                        }, this.settings.timer, "linear")
                    }.bind(this), this.settings.tip_animation_fade_speed)) : this.settings.$next_tip.show()) : /fade/i.test(this.settings.tip_animation) && (e.width(0), this.settings.timer > 0 ? (this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed).show(), setTimeout(function() {
                        e.animate({
                            width: e.parent().width()
                        }, this.settings.timer, "linear")
                    }.bind(this), this.settings.tip_animation_fade_speed)) : this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed)), this.settings.$current_tip = this.settings.$next_tip
                } else this.settings.$li && this.settings.$target.length < 1 ? this.show(b, c) : this.end();
            else this.settings.paused = !0
        },
        is_phone: function() {
            return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches
        },
        hide: function() {
            this.settings.modal && this.settings.expose && this.un_expose(), this.settings.modal || a(".joyride-modal-bg").hide(), this.settings.$current_tip.css("visibility", "hidden"), setTimeout(a.proxy(function() {
                this.hide(), this.css("visibility", "visible")
            }, this.settings.$current_tip), 0), this.settings.post_step_callback(this.settings.$li.index(), this.settings.$current_tip)
        },
        set_li: function(a, b) {
            a ? (this.settings.$li = this.settings.$tip_content.eq(this.settings.start_offset), this.set_next_tip(), this.settings.$current_tip = this.settings.$next_tip) : (this.settings.$li = b ? this.settings.$li.prev() : this.settings.$li.next(), this.set_next_tip()), this.set_target()
        },
        set_next_tip: function() {
            this.settings.$next_tip = a(".joyride-tip-guide").eq(this.settings.$li.index()), this.settings.$next_tip.data("closed", "")
        },
        set_target: function() {
            var b = this.settings.$li.attr(this.add_namespace("data-class")),
                d = this.settings.$li.attr(this.add_namespace("data-id")),
                e = function() {
                    return d ? a(c.getElementById(d)) : b ? a("." + b).first() : a("body")
                };
            this.settings.$target = e()
        },
        scroll_to: function() {
            var c, d;
            c = a(b).height() / 2, d = Math.ceil(this.settings.$target.offset().top - c + this.settings.$next_tip.outerHeight()), 0 != d && a("html, body").stop().animate({
                scrollTop: d
            }, this.settings.scroll_speed, "swing")
        },
        paused: function() {
            return -1 === a.inArray(this.settings.$li.index() + 1, this.settings.pause_after)
        },
        restart: function() {
            this.hide(), this.settings.$li = d, this.show("init")
        },
        pos_default: function(a) {
            var b = this.settings.$next_tip.find(".joyride-nub"),
                c = Math.ceil(b.outerWidth() / 2),
                d = Math.ceil(b.outerHeight() / 2),
                e = a || !1;
            if (e && (this.settings.$next_tip.css("visibility", "hidden"), this.settings.$next_tip.show()), /body/i.test(this.settings.$target.selector)) this.settings.$li.length && this.pos_modal(b);
            else {
                var f = this.settings.tip_settings.tipAdjustmentY ? parseInt(this.settings.tip_settings.tipAdjustmentY) : 0,
                    g = this.settings.tip_settings.tipAdjustmentX ? parseInt(this.settings.tip_settings.tipAdjustmentX) : 0;
                this.bottom() ? (this.settings.$next_tip.css(this.rtl ? {
                    top: this.settings.$target.offset().top + d + this.settings.$target.outerHeight() + f,
                    left: this.settings.$target.offset().left + this.settings.$target.outerWidth() - this.settings.$next_tip.outerWidth() + g
                } : {
                    top: this.settings.$target.offset().top + d + this.settings.$target.outerHeight() + f,
                    left: this.settings.$target.offset().left + g
                }), this.nub_position(b, this.settings.tip_settings.nub_position, "top")) : this.top() ? (this.settings.$next_tip.css(this.rtl ? {
                    top: this.settings.$target.offset().top - this.settings.$next_tip.outerHeight() - d + f,
                    left: this.settings.$target.offset().left + this.settings.$target.outerWidth() - this.settings.$next_tip.outerWidth()
                } : {
                    top: this.settings.$target.offset().top - this.settings.$next_tip.outerHeight() - d + f,
                    left: this.settings.$target.offset().left + g
                }), this.nub_position(b, this.settings.tip_settings.nub_position, "bottom")) : this.right() ? (this.settings.$next_tip.css({
                    top: this.settings.$target.offset().top + f,
                    left: this.settings.$target.outerWidth() + this.settings.$target.offset().left + c + g
                }), this.nub_position(b, this.settings.tip_settings.nub_position, "left")) : this.left() && (this.settings.$next_tip.css({
                    top: this.settings.$target.offset().top + f,
                    left: this.settings.$target.offset().left - this.settings.$next_tip.outerWidth() - c + g
                }), this.nub_position(b, this.settings.tip_settings.nub_position, "right")), !this.visible(this.corners(this.settings.$next_tip)) && this.settings.attempts < this.settings.tip_settings.tip_location_pattern.length && (b.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"), this.settings.tip_settings.tip_location = this.settings.tip_settings.tip_location_pattern[this.settings.attempts], this.settings.attempts++, this.pos_default())
            }
            e && (this.settings.$next_tip.hide(), this.settings.$next_tip.css("visibility", "visible"))
        },
        pos_phone: function(b) {
            var c = this.settings.$next_tip.outerHeight(),
                d = (this.settings.$next_tip.offset(), this.settings.$target.outerHeight()),
                e = a(".joyride-nub", this.settings.$next_tip),
                f = Math.ceil(e.outerHeight() / 2),
                g = b || !1;
            e.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"), g && (this.settings.$next_tip.css("visibility", "hidden"), this.settings.$next_tip.show()), /body/i.test(this.settings.$target.selector) ? this.settings.$li.length && this.pos_modal(e) : this.top() ? (this.settings.$next_tip.offset({
                top: this.settings.$target.offset().top - c - f
            }), e.addClass("bottom")) : (this.settings.$next_tip.offset({
                top: this.settings.$target.offset().top + d + f
            }), e.addClass("top")), g && (this.settings.$next_tip.hide(), this.settings.$next_tip.css("visibility", "visible"))
        },
        pos_modal: function(a) {
            this.center(), a.hide(), this.show_modal()
        },
        show_modal: function() {
            if (!this.settings.$next_tip.data("closed")) {
                var b = a(".joyride-modal-bg");
                if (b.length < 1) {
                    var b = a(this.settings.template.modal);
                    b.appendTo("body")
                }
                /pop/i.test(this.settings.tip_animation) ? b.show() : b.fadeIn(this.settings.tip_animation_fade_speed)
            }
        },
        expose: function() {
            var c, d, e, f, g, h = "expose-" + this.random_str(6);
            if (arguments.length > 0 && arguments[0] instanceof a) e = arguments[0];
            else {
                if (!this.settings.$target || /body/i.test(this.settings.$target.selector)) return !1;
                e = this.settings.$target
            }
            return e.length < 1 ? (b.console && console.error("element not valid", e), !1) : (c = a(this.settings.template.expose), this.settings.$body.append(c), c.css({
                top: e.offset().top,
                left: e.offset().left,
                width: e.outerWidth(!0),
                height: e.outerHeight(!0)
            }), d = a(this.settings.template.expose_cover), f = {
                zIndex: e.css("z-index"),
                position: e.css("position")
            }, g = null == e.attr("class") ? "" : e.attr("class"), e.css("z-index", parseInt(c.css("z-index")) + 1), "static" == f.position && e.css("position", "relative"), e.data("expose-css", f), e.data("orig-class", g), e.attr("class", g + " " + this.settings.expose_add_class), d.css({
                top: e.offset().top,
                left: e.offset().left,
                width: e.outerWidth(!0),
                height: e.outerHeight(!0)
            }), this.settings.modal && this.show_modal(), this.settings.$body.append(d), c.addClass(h), d.addClass(h), e.data("expose", h), this.settings.post_expose_callback(this.settings.$li.index(), this.settings.$next_tip, e), void this.add_exposed(e))
        },
        un_expose: function() {
            var c, d, e, f, g, h = !1;
            if (arguments.length > 0 && arguments[0] instanceof a) d = arguments[0];
            else {
                if (!this.settings.$target || /body/i.test(this.settings.$target.selector)) return !1;
                d = this.settings.$target
            }
            return d.length < 1 ? (b.console && console.error("element not valid", d), !1) : (c = d.data("expose"), e = a("." + c), arguments.length > 1 && (h = arguments[1]), h === !0 ? a(".joyride-expose-wrapper,.joyride-expose-cover").remove() : e.remove(), f = d.data("expose-css"), "auto" == f.zIndex ? d.css("z-index", "") : d.css("z-index", f.zIndex), f.position != d.css("position") && ("static" == f.position ? d.css("position", "") : d.css("position", f.position)), g = d.data("orig-class"), d.attr("class", g), d.removeData("orig-classes"), d.removeData("expose"), d.removeData("expose-z-index"), void this.remove_exposed(d))
        },
        add_exposed: function(b) {
            this.settings.exposed = this.settings.exposed || [], b instanceof a || "object" == typeof b ? this.settings.exposed.push(b[0]) : "string" == typeof b && this.settings.exposed.push(b)
        },
        remove_exposed: function(b) {
            var c, d;
            for (b instanceof a ? c = b[0] : "string" == typeof b && (c = b), this.settings.exposed = this.settings.exposed || [], d = this.settings.exposed.length; d--;)
                if (this.settings.exposed[d] == c) return void this.settings.exposed.splice(d, 1)
        },
        center: function() {
            var c = a(b);
            return this.settings.$next_tip.css({
                top: (c.height() - this.settings.$next_tip.outerHeight()) / 2 + c.scrollTop(),
                left: (c.width() - this.settings.$next_tip.outerWidth()) / 2 + c.scrollLeft()
            }), !0
        },
        bottom: function() {
            return /bottom/i.test(this.settings.tip_settings.tip_location)
        },
        top: function() {
            return /top/i.test(this.settings.tip_settings.tip_location)
        },
        right: function() {
            return /right/i.test(this.settings.tip_settings.tip_location)
        },
        left: function() {
            return /left/i.test(this.settings.tip_settings.tip_location)
        },
        corners: function(c) {
            var d = a(b),
                e = d.height() / 2,
                f = Math.ceil(this.settings.$target.offset().top - e + this.settings.$next_tip.outerHeight()),
                g = d.width() + d.scrollLeft(),
                h = d.height() + f,
                i = d.height() + d.scrollTop(),
                j = d.scrollTop();
            return j > f && (j = 0 > f ? 0 : f), h > i && (i = h), [c.offset().top < j, g < c.offset().left + c.outerWidth(), i < c.offset().top + c.outerHeight(), d.scrollLeft() > c.offset().left]
        },
        visible: function(a) {
            for (var b = a.length; b--;)
                if (a[b]) return !1;
            return !0
        },
        nub_position: function(a, b, c) {
            a.addClass("auto" === b ? c : b)
        },
        startTimer: function() {
            this.settings.$li.length ? this.settings.automate = setTimeout(function() {
                this.hide(), this.show(), this.startTimer()
            }.bind(this), this.settings.timer) : clearTimeout(this.settings.automate)
        },
        end: function(b) {
            this.settings.cookie_monster && a.cookie(this.settings.cookie_name, "ridden", {
                expires: this.settings.cookie_expires,
                domain: this.settings.cookie_domain
            }), this.settings.timer > 0 && clearTimeout(this.settings.automate), this.settings.modal && this.settings.expose && this.un_expose(), a(this.scope).off("keyup.joyride"), this.settings.$next_tip.data("closed", !0), this.settings.riding = !1, a(".joyride-modal-bg").hide(), this.settings.$current_tip.hide(), ("undefined" == typeof b || b === !1) && (this.settings.post_step_callback(this.settings.$li.index(), this.settings.$current_tip), this.settings.post_ride_callback(this.settings.$li.index(), this.settings.$current_tip)), a(".joyride-tip-guide").remove()
        },
        off: function() {
            a(this.scope).off(".joyride"), a(b).off(".joyride"), a(".joyride-close-tip, .joyride-next-tip, .joyride-modal-bg").off(".joyride"), a(".joyride-tip-guide, .joyride-modal-bg").remove(), clearTimeout(this.settings.automate), this.settings = {}
        },
        reflow: function() {}
    }
}(jQuery, window, window.document),
function(a, b) {
    "use strict";
    Foundation.libs["magellan-expedition"] = {
        name: "magellan-expedition",
        version: "5.5.1",
        settings: {
            active_class: "active",
            threshold: 0,
            destination_threshold: 20,
            throttle_delay: 30,
            fixed_top: 0,
            offset_by_height: !0,
            duration: 700,
            easing: "swing"
        },
        init: function(a, b, c) {
            Foundation.inherit(this, "throttle"), this.bindings(b, c)
        },
        events: function() {
            var c = this,
                d = c.S,
                e = c.settings;
            c.set_expedition_position(), d(c.scope).off(".magellan").on("click.fndtn.magellan", "[" + c.add_namespace("data-magellan-arrival") + '] a[href^="#"]', function(b) {
                b.preventDefault();
                var d = a(this).closest("[" + c.attr_name() + "]"),
                    e = d.data("magellan-expedition-init"),
                    f = this.hash.split("#").join(""),
                    g = a('a[name="' + f + '"]');
                0 === g.length && (g = a("#" + f));
                var h = g.offset().top - e.destination_threshold + 1;
                e.offset_by_height && (h -= d.outerHeight()), a("html, body").stop().animate({
                    scrollTop: h
                }, e.duration, e.easing, function() {
                    history.pushState ? history.pushState(null, null, "#" + f) : location.hash = "#" + f
                })
            }).on("scroll.fndtn.magellan", c.throttle(this.check_for_arrivals.bind(this), e.throttle_delay)), a(b).on("resize.fndtn.magellan", c.throttle(this.set_expedition_position.bind(this), e.throttle_delay))
        },
        check_for_arrivals: function() {
            var a = this;
            a.update_arrivals(), a.update_expedition_positions()
        },
        set_expedition_position: function() {
            var b = this;
            a("[" + this.attr_name() + "=fixed]", b.scope).each(function() {
                var c, d, e = a(this),
                    f = e.data("magellan-expedition-init"),
                    g = e.attr("styles");
                e.attr("style", ""), c = e.offset().top + f.threshold, d = parseInt(e.data("magellan-fixed-top")), isNaN(d) || (b.settings.fixed_top = d), e.data(b.data_attr("magellan-top-offset"), c), e.attr("style", g)
            })
        },
        update_expedition_positions: function() {
            var c = this,
                d = a(b).scrollTop();
            a("[" + this.attr_name() + "=fixed]", c.scope).each(function() {
                var b = a(this),
                    e = b.data("magellan-expedition-init"),
                    f = b.attr("style"),
                    g = b.data("magellan-top-offset");
                if (d + c.settings.fixed_top >= g) {
                    var h = b.prev("[" + c.add_namespace("data-magellan-expedition-clone") + "]");
                    0 === h.length && (h = b.clone(), h.removeAttr(c.attr_name()), h.attr(c.add_namespace("data-magellan-expedition-clone"), ""), b.before(h)), b.css({
                        position: "fixed",
                        top: e.fixed_top
                    }).addClass("fixed")
                } else b.prev("[" + c.add_namespace("data-magellan-expedition-clone") + "]").remove(), b.attr("style", f).css("position", "").css("top", "").removeClass("fixed")
            })
        },
        update_arrivals: function() {
            var c = this,
                d = a(b).scrollTop();
            a("[" + this.attr_name() + "]", c.scope).each(function() {
                var b = a(this),
                    e = b.data(c.attr_name(!0) + "-init"),
                    f = c.offsets(b, d),
                    g = b.find("[" + c.add_namespace("data-magellan-arrival") + "]"),
                    h = !1;
                f.each(function(a, d) {
                    if (d.viewport_offset >= d.top_offset) {
                        var f = b.find("[" + c.add_namespace("data-magellan-arrival") + "]");
                        return f.not(d.arrival).removeClass(e.active_class), d.arrival.addClass(e.active_class), h = !0, !0
                    }
                }), h || g.removeClass(e.active_class)
            })
        },
        offsets: function(b, c) {
            var d = this,
                e = b.data(d.attr_name(!0) + "-init"),
                f = c;
            return b.find("[" + d.add_namespace("data-magellan-arrival") + "]").map(function() {
                var c = a(this).data(d.data_attr("magellan-arrival")),
                    g = a("[" + d.add_namespace("data-magellan-destination") + "=" + c + "]");
                if (g.length > 0) {
                    var h = g.offset().top - e.destination_threshold;
                    return e.offset_by_height && (h -= b.outerHeight()), h = Math.floor(h), {
                        destination: g,
                        arrival: a(this),
                        top_offset: h,
                        viewport_offset: f
                    }
                }
            }).sort(function(a, b) {
                return a.top_offset < b.top_offset ? -1 : a.top_offset > b.top_offset ? 1 : 0
            })
        },
        data_attr: function(a) {
            return this.namespace.length > 0 ? this.namespace + "-" + a : a
        },
        off: function() {
            this.S(this.scope).off(".magellan"), this.S(b).off(".magellan")
        },
        reflow: function() {
            var b = this;
            a("[" + b.add_namespace("data-magellan-expedition-clone") + "]", b.scope).remove()
        }
    }
}(jQuery, window, window.document),
function(a) {
    "use strict";
    Foundation.libs.offcanvas = {
        name: "offcanvas",
        version: "5.5.1",
        settings: {
            open_method: "move",
            close_on_click: !1
        },
        init: function(a, b, c) {
            this.bindings(b, c)
        },
        events: function() {
            var b = this,
                c = b.S,
                d = "",
                e = "",
                f = "";
            "move" === this.settings.open_method ? (d = "move-", e = "right", f = "left") : "overlap_single" === this.settings.open_method ? (d = "offcanvas-overlap-", e = "right", f = "left") : "overlap" === this.settings.open_method && (d = "offcanvas-overlap"), c(this.scope).off(".offcanvas").on("click.fndtn.offcanvas", ".left-off-canvas-toggle", function(f) {
                b.click_toggle_class(f, d + e), "overlap" !== b.settings.open_method && c(".left-submenu").removeClass(d + e), a(".left-off-canvas-toggle").attr("aria-expanded", "true")
            }).on("click.fndtn.offcanvas", ".left-off-canvas-menu a", function(f) {
                var g = b.get_settings(f),
                    h = c(this).parent();
                !g.close_on_click || h.hasClass("has-submenu") || h.hasClass("back") ? c(this).parent().hasClass("has-submenu") ? (f.preventDefault(), c(this).siblings(".left-submenu").toggleClass(d + e)) : h.hasClass("back") && (f.preventDefault(), h.parent().removeClass(d + e)) : (b.hide.call(b, d + e, b.get_wrapper(f)), h.parent().removeClass(d + e)), a(".left-off-canvas-toggle").attr("aria-expanded", "true")
            }).on("click.fndtn.offcanvas", ".right-off-canvas-toggle", function(e) {
                b.click_toggle_class(e, d + f), "overlap" !== b.settings.open_method && c(".right-submenu").removeClass(d + f), a(".right-off-canvas-toggle").attr("aria-expanded", "true")
            }).on("click.fndtn.offcanvas", ".right-off-canvas-menu a", function(e) {
                var g = b.get_settings(e),
                    h = c(this).parent();
                !g.close_on_click || h.hasClass("has-submenu") || h.hasClass("back") ? c(this).parent().hasClass("has-submenu") ? (e.preventDefault(), c(this).siblings(".right-submenu").toggleClass(d + f)) : h.hasClass("back") && (e.preventDefault(), h.parent().removeClass(d + f)) : (b.hide.call(b, d + f, b.get_wrapper(e)), h.parent().removeClass(d + f)), a(".right-off-canvas-toggle").attr("aria-expanded", "true")
            }).on("click.fndtn.offcanvas", ".exit-off-canvas", function(g) {
                b.click_remove_class(g, d + f), c(".right-submenu").removeClass(d + f), e && (b.click_remove_class(g, d + e), c(".left-submenu").removeClass(d + f)), a(".right-off-canvas-toggle").attr("aria-expanded", "true")
            }).on("click.fndtn.offcanvas", ".exit-off-canvas", function(c) {
                b.click_remove_class(c, d + f), a(".left-off-canvas-toggle").attr("aria-expanded", "false"), e && (b.click_remove_class(c, d + e), a(".right-off-canvas-toggle").attr("aria-expanded", "false"))
            })
        },
        toggle: function(a, b) {
            b = b || this.get_wrapper(), b.is("." + a) ? this.hide(a, b) : this.show(a, b)
        },
        show: function(a, b) {
            b = b || this.get_wrapper(), b.trigger("open").trigger("open.fndtn.offcanvas"), b.addClass(a)
        },
        hide: function(a, b) {
            b = b || this.get_wrapper(), b.trigger("close").trigger("close.fndtn.offcanvas"), b.removeClass(a)
        },
        click_toggle_class: function(a, b) {
            a.preventDefault();
            var c = this.get_wrapper(a);
            this.toggle(b, c)
        },
        click_remove_class: function(a, b) {
            a.preventDefault();
            var c = this.get_wrapper(a);
            this.hide(b, c)
        },
        get_settings: function(a) {
            var b = this.S(a.target).closest("[" + this.attr_name() + "]");
            return b.data(this.attr_name(!0) + "-init") || this.settings
        },
        get_wrapper: function(a) {
            var b = this.S(a ? a.target : this.scope).closest(".off-canvas-wrap");
            return 0 === b.length && (b = this.S(".off-canvas-wrap")), b
        },
        reflow: function() {}
    }
}(jQuery, window, window.document),
function(a, b, c, d) {
    "use strict";
    var e = function() {},
        f = function(e, f) {
            if (e.hasClass(f.slides_container_class)) return this;
            var j, k, l, m, n, o, p = this,
                q = e,
                r = 0,
                s = !1;
            p.slides = function() {
                return q.children(f.slide_selector)
            }, p.slides().first().addClass(f.active_slide_class), p.update_slide_number = function(b) {
                f.slide_number && (k.find("span:first").text(parseInt(b) + 1), k.find("span:last").text(p.slides().length)), f.bullets && (l.children().removeClass(f.bullets_active_class), a(l.children().get(b)).addClass(f.bullets_active_class))
            }, p.update_active_link = function(b) {
                var c = a('[data-orbit-link="' + p.slides().eq(b).attr("data-orbit-slide") + '"]');
                c.siblings().removeClass(f.bullets_active_class), c.addClass(f.bullets_active_class)
            }, p.build_markup = function() {
                q.wrap('<div class="' + f.container_class + '"></div>'), j = q.parent(), q.addClass(f.slides_container_class), f.stack_on_small && j.addClass(f.stack_on_small_class), f.navigation_arrows && (j.append(a('<a href="#"><span></span></a>').addClass(f.prev_class)), j.append(a('<a href="#"><span></span></a>').addClass(f.next_class))), f.timer && (m = a("<div>").addClass(f.timer_container_class), m.append("<span>"), m.append(a("<div>").addClass(f.timer_progress_class)), m.addClass(f.timer_paused_class), j.append(m)), f.slide_number && (k = a("<div>").addClass(f.slide_number_class), k.append("<span></span> " + f.slide_number_text + " <span></span>"), j.append(k)), f.bullets && (l = a("<ol>").addClass(f.bullets_container_class), j.append(l), l.wrap('<div class="orbit-bullets-container"></div>'), p.slides().each(function(b) {
                    var c = a("<li>").attr("data-orbit-slide", b).on("click", p.link_bullet);
                    l.append(c)
                }))
            }, p._goto = function(b, c) {
                if (b === r) return !1;
                "object" == typeof o && o.restart();
                var d = p.slides(),
                    e = "next";
                if (s = !0, r > b && (e = "prev"), b >= d.length) {
                    if (!f.circular) return !1;
                    b = 0
                } else if (0 > b) {
                    if (!f.circular) return !1;
                    b = d.length - 1
                }
                var g = a(d.get(r)),
                    h = a(d.get(b));
                g.css("zIndex", 2), g.removeClass(f.active_slide_class), h.css("zIndex", 4).addClass(f.active_slide_class), q.trigger("before-slide-change.fndtn.orbit"), f.before_slide_change(), p.update_active_link(b);
                var i = function() {
                    var a = function() {
                        r = b, s = !1, c === !0 && (o = p.create_timer(), o.start()), p.update_slide_number(r), q.trigger("after-slide-change.fndtn.orbit", [{
                            slide_number: r,
                            total_slides: d.length
                        }]), f.after_slide_change(r, d.length)
                    };
                    q.outerHeight() != h.outerHeight() && f.variable_height ? q.animate({
                        height: h.outerHeight()
                    }, 250, "linear", a) : a()
                };
                if (1 === d.length) return i(), !1;
                var j = function() {
                    "next" === e && n.next(g, h, i), "prev" === e && n.prev(g, h, i)
                };
                h.outerHeight() > q.outerHeight() && f.variable_height ? q.animate({
                    height: h.outerHeight()
                }, 250, "linear", j) : j()
            }, p.next = function(a) {
                a.stopImmediatePropagation(), a.preventDefault(), p._goto(r + 1)
            }, p.prev = function(a) {
                a.stopImmediatePropagation(), a.preventDefault(), p._goto(r - 1)
            }, p.link_custom = function(b) {
                b.preventDefault();
                var c = a(this).attr("data-orbit-link");
                if ("string" == typeof c && "" != (c = a.trim(c))) {
                    var d = j.find("[data-orbit-slide=" + c + "]"); - 1 != d.index() && p._goto(d.index())
                }
            }, p.link_bullet = function() {
                var b = a(this).attr("data-orbit-slide");
                if ("string" == typeof b && "" != (b = a.trim(b)))
                    if (isNaN(parseInt(b))) {
                        var c = j.find("[data-orbit-slide=" + b + "]"); - 1 != c.index() && p._goto(c.index() + 1)
                    } else p._goto(parseInt(b))
            }, p.timer_callback = function() {
                p._goto(r + 1, !0)
            }, p.compute_dimensions = function() {
                var b = a(p.slides().get(r)),
                    c = b.outerHeight();
                f.variable_height || p.slides().each(function() {
                    a(this).outerHeight() > c && (c = a(this).outerHeight())
                }), q.height(c)
            }, p.create_timer = function() {
                var a = new g(j.find("." + f.timer_container_class), f, p.timer_callback);
                return a
            }, p.stop_timer = function() {
                "object" == typeof o && o.stop()
            }, p.toggle_timer = function() {
                var a = j.find("." + f.timer_container_class);
                a.hasClass(f.timer_paused_class) ? ("undefined" == typeof o && (o = p.create_timer()), o.start()) : "object" == typeof o && o.stop()
            }, p.init = function() {
                p.build_markup(), f.timer && (o = p.create_timer(), Foundation.utils.image_loaded(this.slides().children("img"), o.start)), n = new i(f, q), "slide" === f.animation && (n = new h(f, q)), j.on("click", "." + f.next_class, p.next), j.on("click", "." + f.prev_class, p.prev), f.next_on_click && j.on("click", "." + f.slides_container_class + " [data-orbit-slide]", p.link_bullet), j.on("click", p.toggle_timer), f.swipe && j.on("touchstart.fndtn.orbit", function(a) {
                    a.touches || (a = a.originalEvent);
                    var b = {
                        start_page_x: a.touches[0].pageX,
                        start_page_y: a.touches[0].pageY,
                        start_time: (new Date).getTime(),
                        delta_x: 0,
                        is_scrolling: d
                    };
                    j.data("swipe-transition", b), a.stopPropagation()
                }).on("touchmove.fndtn.orbit", function(a) {
                    if (a.touches || (a = a.originalEvent), !(a.touches.length > 1 || a.scale && 1 !== a.scale)) {
                        var b = j.data("swipe-transition");
                        if ("undefined" == typeof b && (b = {}), b.delta_x = a.touches[0].pageX - b.start_page_x, "undefined" == typeof b.is_scrolling && (b.is_scrolling = !!(b.is_scrolling || Math.abs(b.delta_x) < Math.abs(a.touches[0].pageY - b.start_page_y))), !b.is_scrolling && !b.active) {
                            a.preventDefault();
                            var c = b.delta_x < 0 ? r + 1 : r - 1;
                            b.active = !0, p._goto(c)
                        }
                    }
                }).on("touchend.fndtn.orbit", function(a) {
                    j.data("swipe-transition", {}), a.stopPropagation()
                }), j.on("mouseenter.fndtn.orbit", function() {
                    f.timer && f.pause_on_hover && p.stop_timer()
                }).on("mouseleave.fndtn.orbit", function() {
                    f.timer && f.resume_on_mouseout && o.start()
                }), a(c).on("click", "[data-orbit-link]", p.link_custom), a(b).on("load resize", p.compute_dimensions), Foundation.utils.image_loaded(this.slides().children("img"), p.compute_dimensions), Foundation.utils.image_loaded(this.slides().children("img"), function() {
                    j.prev("." + f.preloader_class).css("display", "none"), p.update_slide_number(0), p.update_active_link(0), q.trigger("ready.fndtn.orbit")
                })
            }, p.init()
        },
        g = function(a, b, c) {
            var d, e, f = this,
                g = b.timer_speed,
                h = a.find("." + b.timer_progress_class),
                i = -1;
            this.update_progress = function(a) {
                var b = h.clone();
                b.attr("style", ""), b.css("width", a + "%"), h.replaceWith(b), h = b
            }, this.restart = function() {
                clearTimeout(e), a.addClass(b.timer_paused_class), i = -1, f.update_progress(0)
            }, this.start = function() {
                return a.hasClass(b.timer_paused_class) ? (i = -1 === i ? g : i, a.removeClass(b.timer_paused_class), d = (new Date).getTime(), h.animate({
                    width: "100%"
                }, i, "linear"), e = setTimeout(function() {
                    f.restart(), c()
                }, i), void a.trigger("timer-started.fndtn.orbit")) : !0
            }, this.stop = function() {
                if (a.hasClass(b.timer_paused_class)) return !0;
                clearTimeout(e), a.addClass(b.timer_paused_class);
                var c = (new Date).getTime();
                i -= c - d;
                var h = 100 - i / g * 100;
                f.update_progress(h), a.trigger("timer-stopped.fndtn.orbit")
            }
        },
        h = function(b) {
            var c = b.animation_speed,
                d = 1 === a("html[dir=rtl]").length,
                e = d ? "marginRight" : "marginLeft",
                f = {};
            f[e] = "0%", this.next = function(a, b, d) {
                a.animate({
                    marginLeft: "-100%"
                }, c), b.animate(f, c, function() {
                    a.css(e, "100%"), d()
                })
            }, this.prev = function(a, b, d) {
                a.animate({
                    marginLeft: "100%"
                }, c), b.css(e, "-100%"), b.animate(f, c, function() {
                    a.css(e, "100%"), d()
                })
            }
        },
        i = function(b) {
            {
                var c = b.animation_speed;
                1 === a("html[dir=rtl]").length
            }
            this.next = function(a, b, d) {
                b.css({
                    margin: "0%",
                    opacity: "0.01"
                }), b.animate({
                    opacity: "1"
                }, c, "linear", function() {
                    a.css("margin", "100%"), d()
                })
            }, this.prev = function(a, b, d) {
                b.css({
                    margin: "0%",
                    opacity: "0.01"
                }), b.animate({
                    opacity: "1"
                }, c, "linear", function() {
                    a.css("margin", "100%"), d()
                })
            }
        };
    Foundation.libs = Foundation.libs || {}, Foundation.libs.orbit = {
        name: "orbit",
        version: "5.5.1",
        settings: {
            animation: "slide",
            timer_speed: 1e4,
            pause_on_hover: !0,
            resume_on_mouseout: !1,
            next_on_click: !0,
            animation_speed: 500,
            stack_on_small: !1,
            navigation_arrows: !0,
            slide_number: !0,
            slide_number_text: "of",
            container_class: "orbit-container",
            stack_on_small_class: "orbit-stack-on-small",
            next_class: "orbit-next",
            prev_class: "orbit-prev",
            timer_container_class: "orbit-timer",
            timer_paused_class: "paused",
            timer_progress_class: "orbit-progress",
            slides_container_class: "orbit-slides-container",
            preloader_class: "preloader",
            slide_selector: "*",
            bullets_container_class: "orbit-bullets",
            bullets_active_class: "active",
            slide_number_class: "orbit-slide-number",
            caption_class: "orbit-caption",
            active_slide_class: "active",
            orbit_transition_class: "orbit-transitioning",
            bullets: !0,
            circular: !0,
            timer: !0,
            variable_height: !1,
            swipe: !0,
            before_slide_change: e,
            after_slide_change: e
        },
        init: function(a, b, c) {
            this.bindings(b, c)
        },
        events: function(a) {
            var b = new f(this.S(a), this.S(a).data("orbit-init"));
            this.S(a).data(this.name + "-instance", b)
        },
        reflow: function() {
            var a = this;
            if (a.S(a.scope).is("[data-orbit]")) {
                var b = a.S(a.scope),
                    c = b.data(a.name + "-instance");
                c.compute_dimensions()
            } else a.S("[data-orbit]", a.scope).each(function(b, c) {
                var d = a.S(c),
                    e = (a.data_options(d), d.data(a.name + "-instance"));
                e.compute_dimensions()
            })
        }
    }
}(jQuery, window, window.document),
function(a, b, c, d) {
    "use strict";

    function e(a) {
        var b = /fade/i.test(a),
            c = /pop/i.test(a);
        return {
            animate: b || c,
            pop: c,
            fade: b
        }
    }
    Foundation.libs.reveal = {
        name: "reveal",
        version: "5.5.1",
        locked: !1,
        settings: {
            animation: "fadeAndPop",
            animation_speed: 250,
            close_on_background_click: !0,
            close_on_esc: !0,
            dismiss_modal_class: "close-reveal-modal",
            multiple_opened: !1,
            bg_class: "reveal-modal-bg",
            root_element: "body",
            open: function() {},
            opened: function() {},
            close: function() {},
            closed: function() {},
            bg: a(".reveal-modal-bg"),
            css: {
                open: {
                    opacity: 0,
                    visibility: "visible",
                    display: "block"
                },
                close: {
                    opacity: 1,
                    visibility: "hidden",
                    display: "none"
                }
            }
        },
        init: function(b, c, d) {
            a.extend(!0, this.settings, c, d), this.bindings(c, d)
        },
        events: function() {
            var a = this,
                b = a.S;
            return b(this.scope).off(".reveal").on("click.fndtn.reveal", "[" + this.add_namespace("data-reveal-id") + "]:not([disabled])", function(c) {
                if (c.preventDefault(), !a.locked) {
                    var d = b(this),
                        e = d.data(a.data_attr("reveal-ajax"));
                    if (a.locked = !0, "undefined" == typeof e) a.open.call(a, d);
                    else {
                        var f = e === !0 ? d.attr("href") : e;
                        a.open.call(a, d, {
                            url: f
                        })
                    }
                }
            }), b(c).on("click.fndtn.reveal", this.close_targets(), function(c) {
                if (c.preventDefault(), !a.locked) {
                    var d = b("[" + a.attr_name() + "].open").data(a.attr_name(!0) + "-init") || a.settings,
                        e = b(c.target)[0] === b("." + d.bg_class)[0];
                    if (e) {
                        if (!d.close_on_background_click) return;
                        c.stopPropagation()
                    }
                    a.locked = !0, a.close.call(a, e ? b("[" + a.attr_name() + "].open") : b(this).closest("[" + a.attr_name() + "]"))
                }
            }), b("[" + a.attr_name() + "]", this.scope).length > 0 ? b(this.scope).on("open.fndtn.reveal", this.settings.open).on("opened.fndtn.reveal", this.settings.opened).on("opened.fndtn.reveal", this.open_video).on("close.fndtn.reveal", this.settings.close).on("closed.fndtn.reveal", this.settings.closed).on("closed.fndtn.reveal", this.close_video) : b(this.scope).on("open.fndtn.reveal", "[" + a.attr_name() + "]", this.settings.open).on("opened.fndtn.reveal", "[" + a.attr_name() + "]", this.settings.opened).on("opened.fndtn.reveal", "[" + a.attr_name() + "]", this.open_video).on("close.fndtn.reveal", "[" + a.attr_name() + "]", this.settings.close).on("closed.fndtn.reveal", "[" + a.attr_name() + "]", this.settings.closed).on("closed.fndtn.reveal", "[" + a.attr_name() + "]", this.close_video), !0
        },
        key_up_on: function() {
            var a = this;
            return a.S("body").off("keyup.fndtn.reveal").on("keyup.fndtn.reveal", function(b) {
                var c = a.S("[" + a.attr_name() + "].open"),
                    d = c.data(a.attr_name(!0) + "-init") || a.settings;
                d && 27 === b.which && d.close_on_esc && !a.locked && a.close.call(a, c)
            }), !0
        },
        key_up_off: function() {
            return this.S("body").off("keyup.fndtn.reveal"), !0
        },
        open: function(c, d) {
            var e, f = this;
            c ? "undefined" != typeof c.selector ? e = f.S("#" + c.data(f.data_attr("reveal-id"))).first() : (e = f.S(this.scope), d = c) : e = f.S(this.scope);
            var g = e.data(f.attr_name(!0) + "-init");
            if (g = g || this.settings, e.hasClass("open") && c.attr("data-reveal-id") == e.attr("id")) return f.close(e);
            if (!e.hasClass("open")) {
                var h = f.S("[" + f.attr_name() + "].open");
                if ("undefined" == typeof e.data("css-top") && e.data("css-top", parseInt(e.css("top"), 10)).data("offset", this.cache_offset(e)), this.key_up_on(e), e.on("open.fndtn.reveal").trigger("open.fndtn.reveal"), h.length < 1 && this.toggle_bg(e, !0), "string" == typeof d && (d = {
                        url: d
                    }), "undefined" != typeof d && d.url) {
                    var i = "undefined" != typeof d.success ? d.success : null;
                    a.extend(d, {
                        success: function(b, c, d) {
                            if (a.isFunction(i)) {
                                var j = i(b, c, d);
                                "string" == typeof j && (b = j)
                            }
                            e.html(b), f.S(e).foundation("section", "reflow"), f.S(e).children().foundation(), h.length > 0 && (g.multiple_opened ? this.to_back(h) : this.hide(h, g.css.close)), f.show(e, g.css.open)
                        }
                    }), a.ajax(d)
                } else h.length > 0 && (g.multiple_opened ? this.to_back(h) : this.hide(h, g.css.close)), this.show(e, g.css.open)
            }
            f.S(b).trigger("resize")
        },
        close: function(b) {
            var b = b && b.length ? b : this.S(this.scope),
                c = this.S("[" + this.attr_name() + "].open"),
                d = b.data(this.attr_name(!0) + "-init") || this.settings;
            c.length > 0 && (this.locked = !0, this.key_up_off(b), b.trigger("close").trigger("close.fndtn.reveal"), (d.multiple_opened && 1 === c.length || !d.multiple_opened || b.length > 1) && (this.toggle_bg(b, !1), this.to_front(b)), d.multiple_opened ? (this.hide(b, d.css.close, d), this.to_front(a(a.makeArray(c).reverse()[1]))) : this.hide(c, d.css.close, d))
        },
        close_targets: function() {
            var a = "." + this.settings.dismiss_modal_class;
            return this.settings.close_on_background_click ? a + ", ." + this.settings.bg_class : a
        },
        toggle_bg: function(b, c) {
            0 === this.S("." + this.settings.bg_class).length && (this.settings.bg = a("<div />", {
                "class": this.settings.bg_class
            }).appendTo("body").hide());
            var e = this.settings.bg.filter(":visible").length > 0;
            c != e && ((c == d ? e : !c) ? this.hide(this.settings.bg) : this.show(this.settings.bg))
        },
        show: function(c, d) {
            if (d) {
                var f = c.data(this.attr_name(!0) + "-init") || this.settings,
                    g = f.root_element;
                if (0 === c.parent(g).length) {
                    var h = c.wrap('<div style="display: none;" />').parent();
                    c.on("closed.fndtn.reveal.wrapped", function() {
                        c.detach().appendTo(h), c.unwrap().unbind("closed.fndtn.reveal.wrapped")
                    }), c.detach().appendTo(g)
                }
                var i = e(f.animation);
                if (i.animate || (this.locked = !1), i.pop) {
                    d.top = a(b).scrollTop() - c.data("offset") + "px";
                    var j = {
                        top: a(b).scrollTop() + c.data("css-top") + "px",
                        opacity: 1
                    };
                    return setTimeout(function() {
                        return c.css(d).animate(j, f.animation_speed, "linear", function() {
                            this.locked = !1, c.trigger("opened").trigger("opened.fndtn.reveal")
                        }.bind(this)).addClass("open")
                    }.bind(this), f.animation_speed / 2)
                }
                if (i.fade) {
                    d.top = a(b).scrollTop() + c.data("css-top") + "px";
                    var j = {
                        opacity: 1
                    };
                    return setTimeout(function() {
                        return c.css(d).animate(j, f.animation_speed, "linear", function() {
                            this.locked = !1, c.trigger("opened").trigger("opened.fndtn.reveal")
                        }.bind(this)).addClass("open")
                    }.bind(this), f.animation_speed / 2)
                }
                return c.css(d).show().css({
                    opacity: 1
                }).addClass("open").trigger("opened").trigger("opened.fndtn.reveal")
            }
            var f = this.settings;
            return e(f.animation).fade ? c.fadeIn(f.animation_speed / 2) : (this.locked = !1, c.show())
        },
        to_back: function(a) {
            a.addClass("toback")
        },
        to_front: function(a) {
            a.removeClass("toback")
        },
        hide: function(c, d) {
            if (d) {
                var f = c.data(this.attr_name(!0) + "-init");
                f = f || this.settings;
                var g = e(f.animation);
                if (g.animate || (this.locked = !1), g.pop) {
                    var h = {
                        top: -a(b).scrollTop() - c.data("offset") + "px",
                        opacity: 0
                    };
                    return setTimeout(function() {
                        return c.animate(h, f.animation_speed, "linear", function() {
                            this.locked = !1, c.css(d).trigger("closed").trigger("closed.fndtn.reveal")
                        }.bind(this)).removeClass("open")
                    }.bind(this), f.animation_speed / 2)
                }
                if (g.fade) {
                    var h = {
                        opacity: 0
                    };
                    return setTimeout(function() {
                        return c.animate(h, f.animation_speed, "linear", function() {
                            this.locked = !1, c.css(d).trigger("closed").trigger("closed.fndtn.reveal")
                        }.bind(this)).removeClass("open")
                    }.bind(this), f.animation_speed / 2)
                }
                return c.hide().css(d).removeClass("open").trigger("closed").trigger("closed.fndtn.reveal")
            }
            var f = this.settings;
            return e(f.animation).fade ? c.fadeOut(f.animation_speed / 2) : c.hide()
        },
        close_video: function(b) {
            var c = a(".flex-video", b.target),
                d = a("iframe", c);
            d.length > 0 && (d.attr("data-src", d[0].src), d.attr("src", d.attr("src")), c.hide())
        },
        open_video: function(b) {
            var c = a(".flex-video", b.target),
                e = c.find("iframe");
            if (e.length > 0) {
                var f = e.attr("data-src");
                if ("string" == typeof f) e[0].src = e.attr("data-src");
                else {
                    var g = e[0].src;
                    e[0].src = d, e[0].src = g
                }
                c.show()
            }
        },
        data_attr: function(a) {
            return this.namespace.length > 0 ? this.namespace + "-" + a : a
        },
        cache_offset: function(a) {
            var b = a.show().height() + parseInt(a.css("top"), 10);
            return a.hide(), b
        },
        off: function() {
            a(this.scope).off(".fndtn.reveal")
        },
        reflow: function() {}
    }
}(jQuery, window, window.document),
function(a, b) {
    "use strict";
    Foundation.libs.slider = {
        name: "slider",
        version: "5.5.1",
        settings: {
            start: 0,
            end: 100,
            step: 1,
            precision: null,
            initial: null,
            display_selector: "",
            vertical: !1,
            trigger_input_change: !1,
            on_change: function() {}
        },
        cache: {},
        init: function(a, b, c) {
            Foundation.inherit(this, "throttle"), this.bindings(b, c), this.reflow()
        },
        events: function() {
            var c = this;
            a(this.scope).off(".slider").on("mousedown.fndtn.slider touchstart.fndtn.slider pointerdown.fndtn.slider", "[" + c.attr_name() + "]:not(.disabled, [disabled]) .range-slider-handle", function(b) {
                c.cache.active || (b.preventDefault(), c.set_active_slider(a(b.target)))
            }).on("mousemove.fndtn.slider touchmove.fndtn.slider pointermove.fndtn.slider", function(d) {
                if (c.cache.active)
                    if (d.preventDefault(), a.data(c.cache.active[0], "settings").vertical) {
                        var e = 0;
                        d.pageY || (e = b.scrollY), c.calculate_position(c.cache.active, c.get_cursor_position(d, "y") + e)
                    } else c.calculate_position(c.cache.active, c.get_cursor_position(d, "x"))
            }).on("mouseup.fndtn.slider touchend.fndtn.slider pointerup.fndtn.slider", function() {
                c.remove_active_slider()
            }).on("change.fndtn.slider", function() {
                c.settings.on_change()
            }), c.S(b).on("resize.fndtn.slider", c.throttle(function() {
                c.reflow()
            }, 300))
        },
        get_cursor_position: function(a, b) {
            var c, d = "page" + b.toUpperCase(),
                e = "client" + b.toUpperCase();
            return "undefined" != typeof a[d] ? c = a[d] : "undefined" != typeof a.originalEvent[e] ? c = a.originalEvent[e] : a.originalEvent.touches && a.originalEvent.touches[0] && "undefined" != typeof a.originalEvent.touches[0][e] ? c = a.originalEvent.touches[0][e] : a.currentPoint && "undefined" != typeof a.currentPoint[b] && (c = a.currentPoint[b]), c
        },
        set_active_slider: function(a) {
            this.cache.active = a
        },
        remove_active_slider: function() {
            this.cache.active = null
        },
        calculate_position: function(b, c) {
            var d = this,
                e = a.data(b[0], "settings"),
                f = (a.data(b[0], "handle_l"), a.data(b[0], "handle_o"), a.data(b[0], "bar_l")),
                g = a.data(b[0], "bar_o");
            requestAnimationFrame(function() {
                var a;
                a = Foundation.rtl && !e.vertical ? d.limit_to((g + f - c) / f, 0, 1) : d.limit_to((c - g) / f, 0, 1), a = e.vertical ? 1 - a : a;
                var h = d.normalized_value(a, e.start, e.end, e.step, e.precision);
                d.set_ui(b, h)
            })
        },
        set_ui: function(b, c) {
            var d = a.data(b[0], "settings"),
                e = a.data(b[0], "handle_l"),
                f = a.data(b[0], "bar_l"),
                g = this.normalized_percentage(c, d.start, d.end),
                h = g * (f - e) - 1,
                i = 100 * g,
                j = b.parent(),
                k = b.parent().children("input[type=hidden]");
            Foundation.rtl && !d.vertical && (h = -h), h = d.vertical ? -h + f - e + 1 : h, this.set_translate(b, h, d.vertical), d.vertical ? b.siblings(".range-slider-active-segment").css("height", i + "%") : b.siblings(".range-slider-active-segment").css("width", i + "%"), j.attr(this.attr_name(), c).trigger("change").trigger("change.fndtn.slider"), k.val(c), d.trigger_input_change && k.trigger("change"), b[0].hasAttribute("aria-valuemin") || b.attr({
                "aria-valuemin": d.start,
                "aria-valuemax": d.end
            }), b.attr("aria-valuenow", c), "" != d.display_selector && a(d.display_selector).each(function() {
                this.hasOwnProperty("value") ? a(this).val(c) : a(this).text(c)
            })
        },
        normalized_percentage: function(a, b, c) {
            return Math.min(1, (a - b) / (c - b))
        },
        normalized_value: function(a, b, c, d, e) {
            var f = c - b,
                g = a * f,
                h = (g - g % d) / d,
                i = g % d,
                j = i >= .5 * d ? d : 0;
            return (h * d + j + b).toFixed(e)
        },
        set_translate: function(b, c, d) {
            d ? a(b).css("-webkit-transform", "translateY(" + c + "px)").css("-moz-transform", "translateY(" + c + "px)").css("-ms-transform", "translateY(" + c + "px)").css("-o-transform", "translateY(" + c + "px)").css("transform", "translateY(" + c + "px)") : a(b).css("-webkit-transform", "translateX(" + c + "px)").css("-moz-transform", "translateX(" + c + "px)").css("-ms-transform", "translateX(" + c + "px)").css("-o-transform", "translateX(" + c + "px)").css("transform", "translateX(" + c + "px)")
        },
        limit_to: function(a, b, c) {
            return Math.min(Math.max(a, b), c)
        },
        initialize_settings: function(b) {
            var c, d = a.extend({}, this.settings, this.data_options(a(b).parent()));
            null === d.precision && (c = ("" + d.step).match(/\.([\d]*)/), d.precision = c && c[1] ? c[1].length : 0), d.vertical ? (a.data(b, "bar_o", a(b).parent().offset().top), a.data(b, "bar_l", a(b).parent().outerHeight()), a.data(b, "handle_o", a(b).offset().top), a.data(b, "handle_l", a(b).outerHeight())) : (a.data(b, "bar_o", a(b).parent().offset().left), a.data(b, "bar_l", a(b).parent().outerWidth()), a.data(b, "handle_o", a(b).offset().left), a.data(b, "handle_l", a(b).outerWidth())), a.data(b, "bar", a(b).parent()), a.data(b, "settings", d)
        },
        set_initial_position: function(b) {
            var c = a.data(b.children(".range-slider-handle")[0], "settings"),
                d = "number" != typeof c.initial || isNaN(c.initial) ? Math.floor(.5 * (c.end - c.start) / c.step) * c.step + c.start : c.initial,
                e = b.children(".range-slider-handle");
            this.set_ui(e, d)
        },
        set_value: function(b) {
            var c = this;
            a("[" + c.attr_name() + "]", this.scope).each(function() {
                a(this).attr(c.attr_name(), b)
            }), a(this.scope).attr(c.attr_name()) && a(this.scope).attr(c.attr_name(), b), c.reflow()
        },
        reflow: function() {
            var b = this;
            b.S("[" + this.attr_name() + "]").each(function() {
                var c = a(this).children(".range-slider-handle")[0],
                    d = a(this).attr(b.attr_name());
                b.initialize_settings(c), d ? b.set_ui(a(c), parseFloat(d)) : b.set_initial_position(a(this))
            })
        }
    }
}(jQuery, window, window.document),
function(a, b, c, d) {
    "use strict";
    Foundation.libs.tab = {
        name: "tab",
        version: "5.5.1",
        settings: {
            active_class: "active",
            callback: function() {},
            deep_linking: !1,
            scroll_to_content: !0,
            is_hover: !1
        },
        default_tab_hashes: [],
        init: function(a, c, d) {
            var e = this,
                f = this.S;
            this.bindings(c, d), e.entry_location = b.location.href, this.handle_location_hash_change(), f("[" + this.attr_name() + "] > .active > a", this.scope).each(function() {
                e.default_tab_hashes.push(this.hash)
            })
        },
        events: function() {
            var a = this,
                c = this.S,
                d = function(b) {
                    var d = c(this).closest("[" + a.attr_name() + "]").data(a.attr_name(!0) + "-init");
                    (!d.is_hover || Modernizr.touch) && (b.preventDefault(), b.stopPropagation(), a.toggle_active_tab(c(this).parent()))
                };
            c(this.scope).off(".tab").on("focus.fndtn.tab", "[" + this.attr_name() + "] > * > a", d).on("click.fndtn.tab", "[" + this.attr_name() + "] > * > a", d).on("mouseenter.fndtn.tab", "[" + this.attr_name() + "] > * > a", function() {
                var b = c(this).closest("[" + a.attr_name() + "]").data(a.attr_name(!0) + "-init");
                b.is_hover && a.toggle_active_tab(c(this).parent())
            }), c(b).on("hashchange.fndtn.tab", function(b) {
                b.preventDefault(), a.handle_location_hash_change()
            })
        },
        handle_location_hash_change: function() {
            var b = this,
                c = this.S;
            c("[" + this.attr_name() + "]", this.scope).each(function() {
                var e = c(this).data(b.attr_name(!0) + "-init");
                if (e.deep_linking) {
                    var f;
                    if (f = e.scroll_to_content ? b.scope.location.hash : b.scope.location.hash.replace("fndtn-", ""), "" != f) {
                        var g = c(f);
                        if (g.hasClass("content") && g.parent().hasClass("tabs-content")) b.toggle_active_tab(a("[" + b.attr_name() + "] > * > a[href=" + f + "]").parent());
                        else {
                            var h = g.closest(".content").attr("id");
                            h != d && b.toggle_active_tab(a("[" + b.attr_name() + "] > * > a[href=#" + h + "]").parent(), f)
                        }
                    } else
                        for (var i = 0; i < b.default_tab_hashes.length; i++) b.toggle_active_tab(a("[" + b.attr_name() + "] > * > a[href=" + b.default_tab_hashes[i] + "]").parent())
                }
            })
        },
        toggle_active_tab: function(e, f) {
            var g = this,
                h = g.S,
                i = e.closest("[" + this.attr_name() + "]"),
                j = e.find("a"),
                k = e.children("a").first(),
                l = "#" + k.attr("href").split("#")[1],
                m = h(l),
                n = e.siblings(),
                o = i.data(this.attr_name(!0) + "-init"),
                p = function(b) {
                    var d, e = a(this),
                        f = a(this).parents("li").prev().children('[role="tab"]'),
                        g = a(this).parents("li").next().children('[role="tab"]');
                    switch (b.keyCode) {
                        case 37:
                            d = f;
                            break;
                        case 39:
                            d = g;
                            break;
                        default:
                            d = !1
                    }
                    d.length && (e.attr({
                        tabindex: "-1",
                        "aria-selected": null
                    }), d.attr({
                        tabindex: "0",
                        "aria-selected": !0
                    }).focus()), a('[role="tabpanel"]').attr("aria-hidden", "true"), a("#" + a(c.activeElement).attr("href").substring(1)).attr("aria-hidden", null)
                },
                q = function(a) {
                    var c = b.location.href === g.entry_location,
                        d = o.scroll_to_content ? g.default_tab_hashes[0] : c ? b.location.hash : "fndtn-" + g.default_tab_hashes[0].replace("#", "");
                    c && a === d || (b.location.hash = a)
                };
            h(this).data(this.data_attr("tab-content")) && (l = "#" + h(this).data(this.data_attr("tab-content")).split("#")[1], m = h(l)), o.deep_linking && (o.scroll_to_content ? (q(f || l), f == d || f == l ? e.parent()[0].scrollIntoView() : h(l)[0].scrollIntoView()) : q(f != d ? "fndtn-" + f.replace("#", "") : "fndtn-" + l.replace("#", ""))), e.addClass(o.active_class).triggerHandler("opened"), j.attr({
                "aria-selected": "true",
                tabindex: 0
            }), n.removeClass(o.active_class), n.find("a").attr({
                "aria-selected": "false",
                tabindex: -1
            }), m.siblings().removeClass(o.active_class).attr({
                "aria-hidden": "true",
                tabindex: -1
            }), m.addClass(o.active_class).attr("aria-hidden", "false").removeAttr("tabindex"), o.callback(e), m.triggerHandler("toggled", [e]), i.triggerHandler("toggled", [m]), j.off("keydown").on("keydown", p)
        },
        data_attr: function(a) {
            return this.namespace.length > 0 ? this.namespace + "-" + a : a
        },
        off: function() {},
        reflow: function() {}
    }
}(jQuery, window, window.document),
function(a, b) {
    "use strict";
    Foundation.libs.tooltip = {
        name: "tooltip",
        version: "5.5.1",
        settings: {
            additional_inheritable_classes: [],
            tooltip_class: ".tooltip",
            append_to: "body",
            touch_close_text: "Tap To Close",
            disable_for_touch: !1,
            hover_delay: 200,
            show_on: "all",
            tip_template: function(a, b) {
                return '<span data-selector="' + a + '" id="' + a + '" class="' + Foundation.libs.tooltip.settings.tooltip_class.substring(1) + '" role="tooltip">' + b + '<span class="nub"></span></span>'
            }
        },
        cache: {},
        init: function(a, b, c) {
            Foundation.inherit(this, "random_str"), this.bindings(b, c)
        },
        should_show: function(b) {
            var c = a.extend({}, this.settings, this.data_options(b));
            return "all" === c.show_on ? !0 : this.small() && "small" === c.show_on ? !0 : this.medium() && "medium" === c.show_on ? !0 : this.large() && "large" === c.show_on ? !0 : !1
        },
        medium: function() {
            return matchMedia(Foundation.media_queries.medium).matches
        },
        large: function() {
            return matchMedia(Foundation.media_queries.large).matches
        },
        events: function(b) {
            var c = this,
                d = c.S;
            c.create(this.S(b)), a(this.scope).off(".tooltip").on("mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", "[" + this.attr_name() + "]", function(b) {
                var e = d(this),
                    f = a.extend({}, c.settings, c.data_options(e)),
                    g = !1;
                if (Modernizr.touch && /touchstart|MSPointerDown/i.test(b.type) && d(b.target).is("a")) return !1;
                if (/mouse/i.test(b.type) && c.ie_touch(b)) return !1;
                if (e.hasClass("open")) Modernizr.touch && /touchstart|MSPointerDown/i.test(b.type) && b.preventDefault(), c.hide(e);
                else {
                    if (f.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(b.type)) return;
                    !f.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(b.type) && (b.preventDefault(), d(f.tooltip_class + ".open").hide(), g = !0), /enter|over/i.test(b.type) ? this.timer = setTimeout(function() {
                        c.showTip(e)
                    }.bind(this), c.settings.hover_delay) : "mouseout" === b.type || "mouseleave" === b.type ? (clearTimeout(this.timer), c.hide(e)) : c.showTip(e)
                }
            }).on("mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", "[" + this.attr_name() + "].open", function(b) {
                return /mouse/i.test(b.type) && c.ie_touch(b) ? !1 : void(("touch" != a(this).data("tooltip-open-event-type") || "mouseleave" != b.type) && ("mouse" == a(this).data("tooltip-open-event-type") && /MSPointerDown|touchstart/i.test(b.type) ? c.convert_to_touch(a(this)) : c.hide(a(this))))
            }).on("DOMNodeRemoved DOMAttrModified", "[" + this.attr_name() + "]:not(a)", function() {
                c.hide(d(this))
            })
        },
        ie_touch: function() {
            return !1
        },
        showTip: function(a) {
            var b = this.getTip(a);
            return this.should_show(a, b) ? this.show(a) : void 0
        },
        getTip: function(b) {
            var c = this.selector(b),
                d = a.extend({}, this.settings, this.data_options(b)),
                e = null;
            return c && (e = this.S('span[data-selector="' + c + '"]' + d.tooltip_class)), "object" == typeof e ? e : !1
        },
        selector: function(a) {
            var b = a.attr("id"),
                c = a.attr(this.attr_name()) || a.attr("data-selector");
            return (b && b.length < 1 || !b) && "string" != typeof c && (c = this.random_str(6), a.attr("data-selector", c).attr("aria-describedby", c)), b && b.length > 0 ? b : c
        },
        create: function(c) {
            var d = this,
                e = a.extend({}, this.settings, this.data_options(c)),
                f = this.settings.tip_template;
            "string" == typeof e.tip_template && b.hasOwnProperty(e.tip_template) && (f = b[e.tip_template]);
            var g = a(f(this.selector(c), a("<div></div>").html(c.attr("title")).html())),
                h = this.inheritable_classes(c);
            g.addClass(h).appendTo(e.append_to), Modernizr.touch && (g.append('<span class="tap-to-close">' + e.touch_close_text + "</span>"), g.on("touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip", function() {
                d.hide(c)
            })), c.removeAttr("title").attr("title", "")
        },
        reposition: function(b, c, d) {
            var e, f, g, h, i;
            if (c.css("visibility", "hidden").show(), e = b.data("width"), f = c.children(".nub"), g = f.outerHeight(), h = f.outerHeight(), c.css(this.small() ? {
                    width: "100%"
                } : {
                    width: e ? e : "auto"
                }), i = function(a, b, c, d, e) {
                    return a.css({
                        top: b ? b : "auto",
                        bottom: d ? d : "auto",
                        left: e ? e : "auto",
                        right: c ? c : "auto"
                    }).end()
                }, i(c, b.offset().top + b.outerHeight() + 10, "auto", "auto", b.offset().left), this.small()) i(c, b.offset().top + b.outerHeight() + 10, "auto", "auto", 12.5, a(this.scope).width()), c.addClass("tip-override"), i(f, -g, "auto", "auto", b.offset().left);
            else {
                var j = b.offset().left;
                Foundation.rtl && (f.addClass("rtl"), j = b.offset().left + b.outerWidth() - c.outerWidth()), i(c, b.offset().top + b.outerHeight() + 10, "auto", "auto", j), c.removeClass("tip-override"), d && d.indexOf("tip-top") > -1 ? (Foundation.rtl && f.addClass("rtl"), i(c, b.offset().top - c.outerHeight(), "auto", "auto", j).removeClass("tip-override")) : d && d.indexOf("tip-left") > -1 ? (i(c, b.offset().top + b.outerHeight() / 2 - c.outerHeight() / 2, "auto", "auto", b.offset().left - c.outerWidth() - g).removeClass("tip-override"), f.removeClass("rtl")) : d && d.indexOf("tip-right") > -1 && (i(c, b.offset().top + b.outerHeight() / 2 - c.outerHeight() / 2, "auto", "auto", b.offset().left + b.outerWidth() + g).removeClass("tip-override"), f.removeClass("rtl"))
            }
            c.css("visibility", "visible").hide()
        },
        small: function() {
            return matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches
        },
        inheritable_classes: function(b) {
            var c = a.extend({}, this.settings, this.data_options(b)),
                d = ["tip-top", "tip-left", "tip-bottom", "tip-right", "radius", "round"].concat(c.additional_inheritable_classes),
                e = b.attr("class"),
                f = e ? a.map(e.split(" "), function(b) {
                    return -1 !== a.inArray(b, d) ? b : void 0
                }).join(" ") : "";
            return a.trim(f)
        },
        convert_to_touch: function(b) {
            var c = this,
                d = c.getTip(b),
                e = a.extend({}, c.settings, c.data_options(b));
            0 === d.find(".tap-to-close").length && (d.append('<span class="tap-to-close">' + e.touch_close_text + "</span>"), d.on("click.fndtn.tooltip.tapclose touchstart.fndtn.tooltip.tapclose MSPointerDown.fndtn.tooltip.tapclose", function() {
                c.hide(b)
            })), b.data("tooltip-open-event-type", "touch")
        },
        show: function(a) {
            var b = this.getTip(a);
            "touch" == a.data("tooltip-open-event-type") && this.convert_to_touch(a), this.reposition(a, b, a.attr("class")), a.addClass("open"), b.fadeIn(150)
        },
        hide: function(a) {
            var b = this.getTip(a);
            b.fadeOut(150, function() {
                b.find(".tap-to-close").remove(), b.off("click.fndtn.tooltip.tapclose MSPointerDown.fndtn.tapclose"), a.removeClass("open")
            })
        },
        off: function() {
            var b = this;
            this.S(this.scope).off(".fndtn.tooltip"), this.S(this.settings.tooltip_class).each(function(c) {
                a("[" + b.attr_name() + "]").eq(c).attr("title", a(this).text())
            }).remove()
        },
        reflow: function() {}
    }
}(jQuery, window, window.document),
function(a, b, c) {
    "use strict";
    Foundation.libs.topbar = {
        name: "topbar",
        version: "5.5.1",
        settings: {
            index: 0,
            sticky_class: "sticky",
            custom_back_text: !0,
            back_text: "Назад",
            mobile_show_parent_link: !0,
            is_hover: !0,
            scrolltop: !0,
            sticky_on: "all"
        },
        init: function(b, c, d) {
            Foundation.inherit(this, "add_custom_rule register_media throttle");
            var e = this;
            e.register_media("topbar", "foundation-mq-topbar"), this.bindings(c, d), e.S("[" + this.attr_name() + "]", this.scope).each(function() {
                {
                    var b = a(this),
                        c = b.data(e.attr_name(!0) + "-init");
                    e.S("section, .top-bar-section", this)
                }
                b.data("index", 0);
                var d = b.parent();
                d.hasClass("fixed") || e.is_sticky(b, d, c) ? (e.settings.sticky_class = c.sticky_class, e.settings.sticky_topbar = b, b.data("height", d.outerHeight()), b.data("stickyoffset", d.offset().top)) : b.data("height", b.outerHeight()), c.assembled || e.assemble(b), c.is_hover ? e.S(".has-dropdown", b).addClass("not-click") : e.S(".has-dropdown", b).removeClass("not-click"), e.add_custom_rule(".f-topbar-fixed { padding-top: " + b.data("height") + "px }"), d.hasClass("fixed") && e.S("body").addClass("f-topbar-fixed")
            })
        },
        is_sticky: function(a, b, c) {
            var d = b.hasClass(c.sticky_class),
                e = matchMedia(Foundation.media_queries.small).matches,
                f = matchMedia(Foundation.media_queries.medium).matches,
                g = matchMedia(Foundation.media_queries.large).matches;
            return d && "all" === c.sticky_on ? !0 : d && this.small() && -1 !== c.sticky_on.indexOf("small") && e && !f && !g ? !0 : d && this.medium() && -1 !== c.sticky_on.indexOf("medium") && e && f && !g ? !0 : d && this.large() && -1 !== c.sticky_on.indexOf("large") && e && f && g ? !0 : d && navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? !0 : !1
        },
        toggle: function(c) {
            var d, e = this;
            d = c ? e.S(c).closest("[" + this.attr_name() + "]") : e.S("[" + this.attr_name() + "]");
            var f = d.data(this.attr_name(!0) + "-init"),
                g = e.S("section, .top-bar-section", d);
            e.breakpoint() && (e.rtl ? (g.css({
                right: "0%"
            }), a(">.name", g).css({
                right: "100%"
            })) : (g.css({
                left: "0%"
            }), a(">.name", g).css({
                left: "100%"
            })), e.S("li.moved", g).removeClass("moved"), d.data("index", 0), d.toggleClass("expanded").css("height", "")), f.scrolltop ? d.hasClass("expanded") ? d.parent().hasClass("fixed") && (f.scrolltop ? (d.parent().removeClass("fixed"), d.addClass("fixed"), e.S("body").removeClass("f-topbar-fixed"), b.scrollTo(0, 0)) : d.parent().removeClass("expanded")) : d.hasClass("fixed") && (d.parent().addClass("fixed"), d.removeClass("fixed"), e.S("body").addClass("f-topbar-fixed")) : (e.is_sticky(d, d.parent(), f) && d.parent().addClass("fixed"), d.parent().hasClass("fixed") && (d.hasClass("expanded") ? (d.addClass("fixed"), d.parent().addClass("expanded"), e.S("body").addClass("f-topbar-fixed")) : (d.removeClass("fixed"), d.parent().removeClass("expanded"), e.update_sticky_positioning())))
        },
        timer: null,
        events: function() {
            var c = this,
                d = this.S;
            d(this.scope).off(".topbar").on("click.fndtn.topbar", "[" + this.attr_name() + "] .toggle-topbar", function(a) {
                a.preventDefault(), c.toggle(this)
            }).on("click.fndtn.topbar", '.top-bar .top-bar-section li a[href^="#"],[' + this.attr_name() + '] .top-bar-section li a[href^="#"]', function() {
                var b = a(this).closest("li");
                !c.breakpoint() || b.hasClass("back") || b.hasClass("has-dropdown") || c.toggle()
            }).on("click.fndtn.topbar", "[" + this.attr_name() + "] li.has-dropdown", function(b) {
                var e = d(this),
                    f = d(b.target),
                    g = e.closest("[" + c.attr_name() + "]"),
                    h = g.data(c.attr_name(!0) + "-init");
                return f.data("revealId") ? void c.toggle() : void(c.breakpoint() || (!h.is_hover || Modernizr.touch) && (b.stopImmediatePropagation(), e.hasClass("hover") ? (e.removeClass("hover").find("li").removeClass("hover"), e.parents("li.hover").removeClass("hover")) : (e.addClass("hover"), a(e).siblings().removeClass("hover"), "A" === f[0].nodeName && f.parent().hasClass("has-dropdown") && b.preventDefault())))
            }).on("click.fndtn.topbar", "[" + this.attr_name() + "] .has-dropdown>a", function(a) {
                if (c.breakpoint()) {
                    a.preventDefault();
					//alert(jQuery("#menu-menu").outerWidth(false));
						if (jQuery("#menu-menu").outerWidth(false) >= 722) {
							 var  mac = 0;
						} else {
							 var  mac = 1;
						}
						//console.log(jQuery("#menu-menu").outerWidth(false));
                    var b = d(this),
					
                        e = b.closest("[" + c.attr_name() + "]"),
                        f = e.find("section, .top-bar-section"),
                        g = (b.next(".dropdown").outerHeight(), b.closest("li"));
                    e.data("index", e.data("index") + 1), g.addClass("moved"), c.rtl ? (f.css({
                        right: -(100 * e.data("index")) + "%"
                    }), f.find(">.name").css({
                        right: 100 * e.data("index") + "%"
                    })) : (f.css({
                        left: -(100 * e.data("index") * mac) + "%"
                    }), f.find(">.name").css({
                        left: 100 * e.data("index") + "%"
                    })), e.css("height", b.siblings("ul").outerHeight(!0) + e.data("height"))
                }
            }), d(b).off(".topbar").on("resize.fndtn.topbar", c.throttle(function() {
                c.resize.call(c)
            }, 50)).trigger("resize").trigger("resize.fndtn.topbar").load(function() {
                d(this).trigger("resize.fndtn.topbar")
            }), d("body").off(".topbar").on("click.fndtn.topbar", function(a) {
                var b = d(a.target).closest("li").closest("li.hover");
                b.length > 0 || d("[" + c.attr_name() + "] li.hover").removeClass("hover")
            }), d(this.scope).on("click.fndtn.topbar", "[" + this.attr_name() + "] .has-dropdown .back", function(a) {
                a.preventDefault();
				if (jQuery("#menu-menu").outerWidth(false) >= 722) {
							 var  mac = 0;
						} else {
							 var  mac = 1;
						}
						jQuery("li#menu-item-wpml-ls-23-ru").on('click',function() {
  var  mac = 1;
}); 
                var b = d(this),
                    e = b.closest("[" + c.attr_name() + "]"),
                    f = e.find("section, .top-bar-section"),
                    g = (e.data(c.attr_name(!0) + "-init"), b.closest("li.moved")),
                    h = g.parent();
                e.data("index", e.data("index") - 1), c.rtl ? (f.css({
                    right: -(100 * e.data("index")) + "%"
                }), f.find(">.name").css({
                    right: 100 * e.data("index") + "%"
                })) : (f.css({
                    left: -(100 * e.data("index") * mac) + "%"
                }), f.find(">.name").css({
                    left: 100 * e.data("index") + "%"
                })), 0 === e.data("index") ? e.css("height", "") : e.css("height", h.outerHeight(!0) + e.data("height")), setTimeout(function() {
                    g.removeClass("moved")
                }, 300)
            }), d(this.scope).find(".dropdown a").focus(function() {
                a(this).parents(".has-dropdown").addClass("hover")
            }).blur(function() {
                a(this).parents(".has-dropdown").removeClass("hover")
            })
        },
        resize: function() {
            var a = this;
            a.S("[" + this.attr_name() + "]").each(function() {
                var b, d = a.S(this),
                    e = d.data(a.attr_name(!0) + "-init"),
                    f = d.parent("." + a.settings.sticky_class);
                if (!a.breakpoint()) {
                    var g = d.hasClass("expanded");
                    d.css("height", "").removeClass("expanded").find("li").removeClass("hover"), g && a.toggle(d)
                }
                a.is_sticky(d, f, e) && (f.hasClass("fixed") ? (f.removeClass("fixed"), b = f.offset().top, a.S(c.body).hasClass("f-topbar-fixed") && (b -= d.data("height")), d.data("stickyoffset", b), f.addClass("fixed")) : (b = f.offset().top, d.data("stickyoffset", b)))
            })
        },
        breakpoint: function() {
            return !matchMedia(Foundation.media_queries.topbar).matches
        },
        small: function() {
            return matchMedia(Foundation.media_queries.small).matches
        },
        medium: function() {
            return matchMedia(Foundation.media_queries.medium).matches
        },
        large: function() {
            return matchMedia(Foundation.media_queries.large).matches
        },
        assemble: function(b) {
            var c = this,
                d = b.data(this.attr_name(!0) + "-init"),
                e = c.S("section, .top-bar-section", b);
            e.detach(), c.S(".has-dropdown>a", e).each(function() {
                var b, e = c.S(this),
                    f = e.siblings(".dropdown"),
                    g = e.attr("href");
                f.find(".title.back").length || (b = a(1 == d.mobile_show_parent_link && g ? '<li class="title back js-generated"><p><a href="javascript:void(0)"></a></p></li><li class="parent-link hide-for-large-up"><a class="parent-link js-generated" href="' + g + '">' + e.html() + "</a></li>" : '<li class="title back js-generated"><p><a href="javascript:void(0)"></a></p>'), a("p>a", b).html(1 == d.custom_back_text ? d.back_text : "&laquo; " + e.html()), f.prepend(b))
            }), e.appendTo(b), this.sticky(), this.assembled(b)
        },
        assembled: function(b) {
            b.data(this.attr_name(!0), a.extend({}, b.data(this.attr_name(!0)), {
                assembled: !0
            }))
        },
        height: function(b) {
            var c = 0,
                d = this;
            return a("> li", b).each(function() {
                c += d.S(this).outerHeight(!0)
            }), c
        },
        sticky: function() {
            var a = this;
            this.S(b).on("scroll", function() {
                a.update_sticky_positioning()
            })
        },
        update_sticky_positioning: function() {
            var a = "." + this.settings.sticky_class,
                c = this.S(b),
                d = this;
            if (d.settings.sticky_topbar && d.is_sticky(this.settings.sticky_topbar, this.settings.sticky_topbar.parent(), this.settings)) {
                var e = this.settings.sticky_topbar.data("stickyoffset");
                d.S(a).hasClass("expanded") || (c.scrollTop() > e ? d.S(a).hasClass("fixed") || (d.S(a).addClass("fixed"), d.S("body").addClass("f-topbar-fixed")) : c.scrollTop() <= e && d.S(a).hasClass("fixed") && (d.S(a).removeClass("fixed"), d.S("body").removeClass("f-topbar-fixed")))
            }
        },
        off: function() {
            this.S(this.scope).off(".fndtn.topbar"), this.S(b).off(".fndtn.topbar")
        },
        reflow: function() {}
    }
}(jQuery, window, window.document);

/*
 * jQuery appear plugin
 *
 * Copyright (c) 2012 Andrey Sidorov
 * licensed under MIT license.
 *
 * https://github.com/morr/jquery.appear/
 *
 * Version: 0.3.3
 */
(function(e) {
    function u() {
        r = false;
        for (var n = 0; n < t.length; n++) {
            var i = e(t[n]).filter(function() {
                return e(this).is(":appeared")
            });
            i.trigger("appear", [i]);
            if (o) {
                var s = o.not(i);
                s.trigger("disappear", [s])
            }
            o = i
        }
    }
    var t = [];
    var n = false;
    var r = false;
    var i = {
        interval: 250,
        force_process: false
    };
    var s = e(window);
    var o;
    e.expr[":"]["appeared"] = function(t) {
        var n = e(t);
        if (!n.is(":visible")) {
            return false
        }
        var r = s.scrollLeft();
        var i = s.scrollTop();
        var o = n.offset();
        var u = o.left;
        var a = o.top;
        if (a + n.height() >= i && a + (n.data("appear-bottom-offset") || 0) <= i + s.height() && u + n.width() >= r && u - (n.data("appear-left-offset") || 0) <= r + s.width()) {
            return true
        } else {
            return false
        }
    };
    e.fn.extend({
        appear: function(s) {
            var o = e.extend({}, i, s || {});
            var a = this.selector || this;
            if (!n) {
                var f = function() {
                    if (r) {
                        return
                    }
                    r = true;
                    setTimeout(u, o.interval)
                };
                e(window).scroll(f).resize(f);
                n = true
            }
            if (o.force_process) {
                setTimeout(u, o.interval)
            }
            t.push(a);
            return e(a)
        }
    });
    e.extend({
        force_appear: function() {
            if (n) {
                u();
                return true
            }
            return false
        }
    })
})(jQuery)

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 */
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(x, t, b, c, d) {
        return jQuery.easing[jQuery.easing.def](x, t, b, c, d)
    },
    easeInQuad: function(x, t, b, c, d) {
        return c * (t /= d) * t + b
    },
    easeOutQuad: function(x, t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b
    },
    easeInOutQuad: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t + b
        }
        return -c / 2 * ((--t) * (t - 2) - 1) + b
    },
    easeInCubic: function(x, t, b, c, d) {
        return c * (t /= d) * t * t + b
    },
    easeOutCubic: function(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b
    },
    easeInOutCubic: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t * t + b
        }
        return c / 2 * ((t -= 2) * t * t + 2) + b
    },
    easeInQuart: function(x, t, b, c, d) {
        return c * (t /= d) * t * t * t + b
    },
    easeOutQuart: function(x, t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b
    },
    easeInOutQuart: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t * t * t + b
        }
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b
    },
    easeInQuint: function(x, t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b
    },
    easeOutQuint: function(x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b
    },
    easeInOutQuint: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return c / 2 * t * t * t * t * t + b
        }
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b
    },
    easeInSine: function(x, t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b
    },
    easeOutSine: function(x, t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b
    },
    easeInOutSine: function(x, t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b
    },
    easeInExpo: function(x, t, b, c, d) {
        return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b
    },
    easeOutExpo: function(x, t, b, c, d) {
        return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b
    },
    easeInOutExpo: function(x, t, b, c, d) {
        if (t == 0) {
            return b
        }
        if (t == d) {
            return b + c
        }
        if ((t /= d / 2) < 1) {
            return c / 2 * Math.pow(2, 10 * (t - 1)) + b
        }
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b
    },
    easeInCirc: function(x, t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b
    },
    easeOutCirc: function(x, t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b
    },
    easeInOutCirc: function(x, t, b, c, d) {
        if ((t /= d / 2) < 1) {
            return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b
        }
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b
    },
    easeInElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) {
            return b
        }
        if ((t /= d) == 1) {
            return b + c
        }
        if (!p) {
            p = d * 0.3
        }
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4
        } else {
            var s = p / (2 * Math.PI) * Math.asin(c / a)
        }
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b
    },
    easeOutElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) {
            return b
        }
        if ((t /= d) == 1) {
            return b + c
        }
        if (!p) {
            p = d * 0.3
        }
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4
        } else {
            var s = p / (2 * Math.PI) * Math.asin(c / a)
        }
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b
    },
    easeInOutElastic: function(x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0) {
            return b
        }
        if ((t /= d / 2) == 2) {
            return b + c
        }
        if (!p) {
            p = d * (0.3 * 1.5)
        }
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4
        } else {
            var s = p / (2 * Math.PI) * Math.asin(c / a)
        }
        if (t < 1) {
            return -0.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b
        }
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * 0.5 + c + b
    },
    easeInBack: function(x, t, b, c, d, s) {
        if (s == undefined) {
            s = 1.70158
        }
        return c * (t /= d) * t * ((s + 1) * t - s) + b
    },
    easeOutBack: function(x, t, b, c, d, s) {
        if (s == undefined) {
            s = 1.70158
        }
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b
    },
    easeInOutBack: function(x, t, b, c, d, s) {
        if (s == undefined) {
            s = 1.70158
        }
        if ((t /= d / 2) < 1) {
            return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b
        }
        return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b
    },
    easeInBounce: function(x, t, b, c, d) {
        return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b
    },
    easeOutBounce: function(x, t, b, c, d) {
        if ((t /= d) < (1 / 2.75)) {
            return c * (7.5625 * t * t) + b
        } else {
            if (t < (2 / 2.75)) {
                return c * (7.5625 * (t -= (1.5 / 2.75)) * t + 0.75) + b
            } else {
                if (t < (2.5 / 2.75)) {
                    return c * (7.5625 * (t -= (2.25 / 2.75)) * t + 0.9375) + b
                } else {
                    return c * (7.5625 * (t -= (2.625 / 2.75)) * t + 0.984375) + b
                }
            }
        }
    },
    easeInOutBounce: function(x, t, b, c, d) {
        if (t < d / 2) {
            return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * 0.5 + b
        }
        return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b
    }
});

/*!
 * MediaElement.js
 * HTML5 <video> and <audio> shim and player
 * http://mediaelementjs.com/
 *
 * Creates a JavaScript object that mimics HTML5 MediaElement API
 * for browsers that don't understand HTML5 or can't play the provided codec
 * Can play MP4 (H.264), Ogg, WebM, FLV, WMV, WMA, ACC, and MP3
 *
 * Copyright 2010-2013, John Dyer (http://j.hn)
 * License: MIT
 *
 */
var mejs = mejs || {};
mejs.version = "2.13.0";
mejs.meIndex = 0;
mejs.plugins = {
    silverlight: [{
        version: [3, 0],
        types: ["video/mp4", "video/m4v", "video/mov", "video/wmv", "audio/wma", "audio/m4a", "audio/mp3", "audio/wav", "audio/mpeg"]
    }],
    flash: [{
        version: [9, 0, 124],
        types: ["video/mp4", "video/m4v", "video/mov", "video/flv", "video/rtmp", "video/x-flv", "audio/flv", "audio/x-flv", "audio/mp3", "audio/m4a", "audio/mpeg", "video/youtube", "video/x-youtube"]
    }],
    youtube: [{
        version: null,
        types: ["video/youtube", "video/x-youtube", "audio/youtube", "audio/x-youtube"]
    }],
    vimeo: [{
        version: null,
        types: ["video/vimeo",
            "video/x-vimeo"
        ]
    }]
};
mejs.Utility = {
    encodeUrl: function(a) {
        return encodeURIComponent(a)
    },
    escapeHTML: function(a) {
        return a.toString().split("&").join("&amp;").split("<").join("&lt;").split('"').join("&quot;")
    },
    absolutizeUrl: function(a) {
        var b = document.createElement("div");
        b.innerHTML = '<a href="' + this.escapeHTML(a) + '">x</a>';
        return b.firstChild.href
    },
    getScriptPath: function(a) {
        for (var b = 0, c, d = "", e = "", f, g, h = document.getElementsByTagName("script"), l = h.length, j = a.length; b < l; b++) {
            f = h[b].src;
            c = f.lastIndexOf("/");
            if (c > -1) {
                g = f.substring(c +
                    1);
                f = f.substring(0, c + 1)
            } else {
                g = f;
                f = ""
            }
            for (c = 0; c < j; c++) {
                e = a[c];
                e = g.indexOf(e);
                if (e > -1) {
                    d = f;
                    break
                }
            }
            if (d !== "") break
        }
        return d
    },
    secondsToTimeCode: function(a, b, c, d) {
        if (typeof c == "undefined") c = false;
        else if (typeof d == "undefined") d = 25;
        var e = Math.floor(a / 3600) % 24,
            f = Math.floor(a / 60) % 60,
            g = Math.floor(a % 60);
        a = Math.floor((a % 1 * d).toFixed(3));
        return (b || e > 0 ? (e < 10 ? "0" + e : e) + ":" : "") + (f < 10 ? "0" + f : f) + ":" + (g < 10 ? "0" + g : g) + (c ? ":" + (a < 10 ? "0" + a : a) : "")
    },
    timeCodeToSeconds: function(a, b, c, d) {
        if (typeof c == "undefined") c = false;
        else if (typeof d ==
            "undefined") d = 25;
        a = a.split(":");
        b = parseInt(a[0], 10);
        var e = parseInt(a[1], 10),
            f = parseInt(a[2], 10),
            g = 0,
            h = 0;
        if (c) g = parseInt(a[3]) / d;
        return h = b * 3600 + e * 60 + f + g
    },
    convertSMPTEtoSeconds: function(a) {
        if (typeof a != "string") return false;
        a = a.replace(",", ".");
        var b = 0,
            c = a.indexOf(".") != -1 ? a.split(".")[1].length : 0,
            d = 1;
        a = a.split(":").reverse();
        for (var e = 0; e < a.length; e++) {
            d = 1;
            if (e > 0) d = Math.pow(60, e);
            b += Number(a[e]) * d
        }
        return Number(b.toFixed(c))
    },
    removeSwf: function(a) {
        var b = document.getElementById(a);
        if (b && /object|embed/i.test(b.nodeName))
            if (mejs.MediaFeatures.isIE) {
                b.style.display =
                    "none";
                (function() {
                    b.readyState == 4 ? mejs.Utility.removeObjectInIE(a) : setTimeout(arguments.callee, 10)
                })()
            } else b.parentNode.removeChild(b)
    },
    removeObjectInIE: function(a) {
        if (a = document.getElementById(a)) {
            for (var b in a)
                if (typeof a[b] == "function") a[b] = null;
            a.parentNode.removeChild(a)
        }
    }
};
mejs.PluginDetector = {
    hasPluginVersion: function(a, b) {
        var c = this.plugins[a];
        b[1] = b[1] || 0;
        b[2] = b[2] || 0;
        return c[0] > b[0] || c[0] == b[0] && c[1] > b[1] || c[0] == b[0] && c[1] == b[1] && c[2] >= b[2] ? true : false
    },
    nav: window.navigator,
    ua: window.navigator.userAgent.toLowerCase(),
    plugins: [],
    addPlugin: function(a, b, c, d, e) {
        this.plugins[a] = this.detectPlugin(b, c, d, e)
    },
    detectPlugin: function(a, b, c, d) {
        var e = [0, 0, 0],
            f;
        if (typeof this.nav.plugins != "undefined" && typeof this.nav.plugins[a] == "object") {
            if ((c = this.nav.plugins[a].description) &&
                !(typeof this.nav.mimeTypes != "undefined" && this.nav.mimeTypes[b] && !this.nav.mimeTypes[b].enabledPlugin)) {
                e = c.replace(a, "").replace(/^\s+/, "").replace(/\sr/gi, ".").split(".");
                for (a = 0; a < e.length; a++) e[a] = parseInt(e[a].match(/\d+/), 10)
            }
        } else if (typeof window.ActiveXObject != "undefined") try {
            if (f = new ActiveXObject(c)) e = d(f)
        } catch (g) {}
        return e
    }
};
mejs.PluginDetector.addPlugin("flash", "Shockwave Flash", "application/x-shockwave-flash", "ShockwaveFlash.ShockwaveFlash", function(a) {
    var b = [];
    if (a = a.GetVariable("$version")) {
        a = a.split(" ")[1].split(",");
        b = [parseInt(a[0], 10), parseInt(a[1], 10), parseInt(a[2], 10)]
    }
    return b
});
mejs.PluginDetector.addPlugin("silverlight", "Silverlight Plug-In", "application/x-silverlight-2", "AgControl.AgControl", function(a) {
    var b = [0, 0, 0, 0],
        c = function(d, e, f, g) {
            for (; d.isVersionSupported(e[0] + "." + e[1] + "." + e[2] + "." + e[3]);) e[f] += g;
            e[f] -= g
        };
    c(a, b, 0, 1);
    c(a, b, 1, 1);
    c(a, b, 2, 1E4);
    c(a, b, 2, 1E3);
    c(a, b, 2, 100);
    c(a, b, 2, 10);
    c(a, b, 2, 1);
    c(a, b, 3, 1);
    return b
});
mejs.MediaFeatures = {
    init: function() {
        var a = this,
            b = document,
            c = mejs.PluginDetector.nav,
            d = mejs.PluginDetector.ua.toLowerCase(),
            e, f = ["source", "track", "audio", "video"];
        a.isiPad = d.match(/ipad/i) !== null;
        a.isiPhone = d.match(/iphone/i) !== null;
        a.isiOS = a.isiPhone || a.isiPad;
        a.isAndroid = d.match(/android/i) !== null;
        a.isBustedAndroid = d.match(/android 2\.[12]/) !== null;
        a.isBustedNativeHTTPS = location.protocol === "https:" && (d.match(/android [12]\./) !== null || d.match(/macintosh.* version.* safari/) !== null);
        a.isIE = c.appName.toLowerCase().indexOf("microsoft") !=
            -1;
        a.isChrome = d.match(/chrome/gi) !== null;
        a.isFirefox = d.match(/firefox/gi) !== null;
        a.isWebkit = d.match(/webkit/gi) !== null;
        a.isGecko = d.match(/gecko/gi) !== null && !a.isWebkit;
        a.isOpera = d.match(/opera/gi) !== null;
        a.hasTouch = "ontouchstart" in window && window.ontouchstart != null;
        a.svg = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect;
        for (c = 0; c < f.length; c++) e = document.createElement(f[c]);
        a.supportsMediaTag = typeof e.canPlayType !== "undefined" || a.isBustedAndroid;
        try {
            e.canPlayType("video/mp4")
        } catch (g) {
            a.supportsMediaTag = false
        }
        a.hasSemiNativeFullScreen = typeof e.webkitEnterFullscreen !== "undefined";
        a.hasWebkitNativeFullScreen = typeof e.webkitRequestFullScreen !== "undefined";
        a.hasMozNativeFullScreen = typeof e.mozRequestFullScreen !== "undefined";
        a.hasTrueNativeFullScreen = a.hasWebkitNativeFullScreen || a.hasMozNativeFullScreen;
        a.nativeFullScreenEnabled = a.hasTrueNativeFullScreen;
        if (a.hasMozNativeFullScreen) a.nativeFullScreenEnabled = e.mozFullScreenEnabled;
        if (this.isChrome) a.hasSemiNativeFullScreen =
            false;
        if (a.hasTrueNativeFullScreen) {
            a.fullScreenEventName = a.hasWebkitNativeFullScreen ? "webkitfullscreenchange" : "mozfullscreenchange";
            a.isFullScreen = function() {
                if (e.mozRequestFullScreen) return b.mozFullScreen;
                else if (e.webkitRequestFullScreen) return b.webkitIsFullScreen
            };
            a.requestFullScreen = function(h) {
                if (a.hasWebkitNativeFullScreen) h.webkitRequestFullScreen();
                else a.hasMozNativeFullScreen && h.mozRequestFullScreen()
            };
            a.cancelFullScreen = function() {
                if (a.hasWebkitNativeFullScreen) document.webkitCancelFullScreen();
                else a.hasMozNativeFullScreen && document.mozCancelFullScreen()
            }
        }
        if (a.hasSemiNativeFullScreen && d.match(/mac os x 10_5/i)) {
            a.hasNativeFullScreen = false;
            a.hasSemiNativeFullScreen = false
        }
    }
};
mejs.MediaFeatures.init();
mejs.HtmlMediaElement = {
    pluginType: "native",
    isFullScreen: false,
    setCurrentTime: function(a) {
        this.currentTime = a
    },
    setMuted: function(a) {
        this.muted = a
    },
    setVolume: function(a) {
        this.volume = a
    },
    stop: function() {
        this.pause()
    },
    setSrc: function(a) {
        for (var b = this.getElementsByTagName("source"); b.length > 0;) this.removeChild(b[0]);
        if (typeof a == "string") this.src = a;
        else {
            var c;
            for (b = 0; b < a.length; b++) {
                c = a[b];
                if (this.canPlayType(c.type)) {
                    this.src = c.src;
                    break
                }
            }
        }
    },
    setVideoSize: function(a, b) {
        this.width = a;
        this.height = b
    }
};
mejs.PluginMediaElement = function(a, b, c) {
    this.id = a;
    this.pluginType = b;
    this.src = c;
    this.events = {};
    this.attributes = {}
};
mejs.PluginMediaElement.prototype = {
    pluginElement: null,
    pluginType: "",
    isFullScreen: false,
    playbackRate: -1,
    defaultPlaybackRate: -1,
    seekable: [],
    played: [],
    paused: true,
    ended: false,
    seeking: false,
    duration: 0,
    error: null,
    tagName: "",
    muted: false,
    volume: 1,
    currentTime: 0,
    play: function() {
        if (this.pluginApi != null) {
            this.pluginType == "youtube" ? this.pluginApi.playVideo() : this.pluginApi.playMedia();
            this.paused = false
        }
    },
    load: function() {
        if (this.pluginApi != null) {
            this.pluginType != "youtube" && this.pluginApi.loadMedia();
            this.paused =
                false
        }
    },
    pause: function() {
        if (this.pluginApi != null) {
            this.pluginType == "youtube" ? this.pluginApi.pauseVideo() : this.pluginApi.pauseMedia();
            this.paused = true
        }
    },
    stop: function() {
        if (this.pluginApi != null) {
            this.pluginType == "youtube" ? this.pluginApi.stopVideo() : this.pluginApi.stopMedia();
            this.paused = true
        }
    },
    canPlayType: function(a) {
        var b, c, d, e = mejs.plugins[this.pluginType];
        for (b = 0; b < e.length; b++) {
            d = e[b];
            if (mejs.PluginDetector.hasPluginVersion(this.pluginType, d.version))
                for (c = 0; c < d.types.length; c++)
                    if (a == d.types[c]) return "probably"
        }
        return ""
    },
    positionFullscreenButton: function(a, b, c) {
        this.pluginApi != null && this.pluginApi.positionFullscreenButton && this.pluginApi.positionFullscreenButton(Math.floor(a), Math.floor(b), c)
    },
    hideFullscreenButton: function() {
        this.pluginApi != null && this.pluginApi.hideFullscreenButton && this.pluginApi.hideFullscreenButton()
    },
    setSrc: function(a) {
        if (typeof a == "string") {
            this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(a));
            this.src = mejs.Utility.absolutizeUrl(a)
        } else {
            var b, c;
            for (b = 0; b < a.length; b++) {
                c = a[b];
                if (this.canPlayType(c.type)) {
                    this.pluginApi.setSrc(mejs.Utility.absolutizeUrl(c.src));
                    this.src = mejs.Utility.absolutizeUrl(a);
                    break
                }
            }
        }
    },
    setCurrentTime: function(a) {
        if (this.pluginApi != null) {
            this.pluginType == "youtube" ? this.pluginApi.seekTo(a) : this.pluginApi.setCurrentTime(a);
            this.currentTime = a
        }
    },
    setVolume: function(a) {
        if (this.pluginApi != null) {
            this.pluginType == "youtube" ? this.pluginApi.setVolume(a * 100) : this.pluginApi.setVolume(a);
            this.volume = a
        }
    },
    setMuted: function(a) {
        if (this.pluginApi != null) {
            if (this.pluginType == "youtube") {
                a ? this.pluginApi.mute() : this.pluginApi.unMute();
                this.muted = a;
                this.dispatchEvent("volumechange")
            } else this.pluginApi.setMuted(a);
            this.muted = a
        }
    },
    setVideoSize: function(a, b) {
        if (this.pluginElement.style) {
            this.pluginElement.style.width = a + "px";
            this.pluginElement.style.height = b + "px"
        }
        this.pluginApi != null && this.pluginApi.setVideoSize && this.pluginApi.setVideoSize(a, b)
    },
    setFullscreen: function(a) {
        this.pluginApi != null && this.pluginApi.setFullscreen && this.pluginApi.setFullscreen(a)
    },
    enterFullScreen: function() {
        this.pluginApi != null && this.pluginApi.setFullscreen && this.setFullscreen(true)
    },
    exitFullScreen: function() {
        this.pluginApi != null && this.pluginApi.setFullscreen &&
            this.setFullscreen(false)
    },
    addEventListener: function(a, b) {
        this.events[a] = this.events[a] || [];
        this.events[a].push(b)
    },
    removeEventListener: function(a, b) {
        if (!a) {
            this.events = {};
            return true
        }
        var c = this.events[a];
        if (!c) return true;
        if (!b) {
            this.events[a] = [];
            return true
        }
        for (i = 0; i < c.length; i++)
            if (c[i] === b) {
                this.events[a].splice(i, 1);
                return true
            }
        return false
    },
    dispatchEvent: function(a) {
        var b, c, d = this.events[a];
        if (d) {
            c = Array.prototype.slice.call(arguments, 1);
            for (b = 0; b < d.length; b++) d[b].apply(null, c)
        }
    },
    hasAttribute: function(a) {
        return a in
            this.attributes
    },
    removeAttribute: function(a) {
        delete this.attributes[a]
    },
    getAttribute: function(a) {
        if (this.hasAttribute(a)) return this.attributes[a];
        return ""
    },
    setAttribute: function(a, b) {
        this.attributes[a] = b
    },
    remove: function() {
        mejs.Utility.removeSwf(this.pluginElement.id);
        mejs.MediaPluginBridge.unregisterPluginElement(this.pluginElement.id)
    }
};
mejs.MediaPluginBridge = {
    pluginMediaElements: {},
    htmlMediaElements: {},
    registerPluginElement: function(a, b, c) {
        this.pluginMediaElements[a] = b;
        this.htmlMediaElements[a] = c
    },
    unregisterPluginElement: function(a) {
        delete this.pluginMediaElements[a];
        delete this.htmlMediaElements[a]
    },
    initPlugin: function(a) {
        var b = this.pluginMediaElements[a],
            c = this.htmlMediaElements[a];
        if (b) {
            switch (b.pluginType) {
                case "flash":
                    b.pluginElement = b.pluginApi = document.getElementById(a);
                    break;
                case "silverlight":
                    b.pluginElement = document.getElementById(b.id);
                    b.pluginApi = b.pluginElement.Content.MediaElementJS
            }
            b.pluginApi != null && b.success && b.success(b, c)
        }
    },
    fireEvent: function(a, b, c) {
        var d, e;
        if (a = this.pluginMediaElements[a]) {
            b = {
                type: b,
                target: a
            };
            for (d in c) {
                a[d] = c[d];
                b[d] = c[d]
            }
            e = c.bufferedTime || 0;
            b.target.buffered = b.buffered = {
                start: function() {
                    return 0
                },
                end: function() {
                    return e
                },
                length: 1
            };
            a.dispatchEvent(b.type, b)
        }
    }
};
mejs.MediaElementDefaults = {
    mode: "auto",
    plugins: ["flash", "silverlight", "youtube", "vimeo"],
    enablePluginDebug: false,
    httpsBasicAuthSite: false,
    type: "",
    pluginPath: mejs.Utility.getScriptPath(["mediaelement.js", "mediaelement.min.js", "mediaelement-and-player.js", "mediaelement-and-player.min.js"]),
    flashName: "flashmediaelement.swf",
    flashStreamer: "",
    enablePluginSmoothing: false,
    enablePseudoStreaming: false,
    pseudoStreamingStartQueryParam: "start",
    silverlightName: "silverlightmediaelement.xap",
    defaultVideoWidth: 480,
    defaultVideoHeight: 270,
    pluginWidth: -1,
    pluginHeight: -1,
    pluginVars: [],
    timerRate: 250,
    startVolume: 0.8,
    success: function() {},
    error: function() {}
};
mejs.MediaElement = function(a, b) {
    return mejs.HtmlMediaElementShim.create(a, b)
};
mejs.HtmlMediaElementShim = {
    create: function(a, b) {
        var c = mejs.MediaElementDefaults,
            d = typeof a == "string" ? document.getElementById(a) : a,
            e = d.tagName.toLowerCase(),
            f = e === "audio" || e === "video",
            g = f ? d.getAttribute("src") : d.getAttribute("href");
        e = d.getAttribute("poster");
        var h = d.getAttribute("autoplay"),
            l = d.getAttribute("preload"),
            j = d.getAttribute("controls"),
            k;
        for (k in b) c[k] = b[k];
        g = typeof g == "undefined" || g === null || g == "" ? null : g;
        e = typeof e == "undefined" || e === null ? "" : e;
        l = typeof l == "undefined" || l === null || l === "false" ?
            "none" : l;
        h = !(typeof h == "undefined" || h === null || h === "false");
        j = !(typeof j == "undefined" || j === null || j === "false");
        k = this.determinePlayback(d, c, mejs.MediaFeatures.supportsMediaTag, f, g);
        k.url = k.url !== null ? mejs.Utility.absolutizeUrl(k.url) : "";
        if (k.method == "native") {
            if (mejs.MediaFeatures.isBustedAndroid) {
                d.src = k.url;
                d.addEventListener("click", function() {
                    d.play()
                }, false)
            }
            return this.updateNative(k, c, h, l)
        } else if (k.method !== "") return this.createPlugin(k, c, e, h, l, j);
        else {
            this.createErrorMessage(k, c, e);
            return this
        }
    },
    determinePlayback: function(a, b, c, d, e) {
        var f = [],
            g, h, l, j = {
                method: "",
                url: "",
                htmlMediaElement: a,
                isVideo: a.tagName.toLowerCase() != "audio"
            },
            k;
        if (typeof b.type != "undefined" && b.type !== "")
            if (typeof b.type == "string") f.push({
                type: b.type,
                url: e
            });
            else
                for (g = 0; g < b.type.length; g++) f.push({
                    type: b.type[g],
                    url: e
                });
        else if (e !== null) {
            l = this.formatType(e, a.getAttribute("type"));
            f.push({
                type: l,
                url: e
            })
        } else
            for (g = 0; g < a.childNodes.length; g++) {
                h = a.childNodes[g];
                if (h.nodeType == 1 && h.tagName.toLowerCase() == "source") {
                    e = h.getAttribute("src");
                    l = this.formatType(e, h.getAttribute("type"));
                    h = h.getAttribute("media");
                    if (!h || !window.matchMedia || window.matchMedia && window.matchMedia(h).matches) f.push({
                        type: l,
                        url: e
                    })
                }
            }
        if (!d && f.length > 0 && f[0].url !== null && this.getTypeFromFile(f[0].url).indexOf("audio") > -1) j.isVideo = false;
        if (mejs.MediaFeatures.isBustedAndroid) a.canPlayType = function(m) {
            return m.match(/video\/(mp4|m4v)/gi) !== null ? "maybe" : ""
        };
        if (c && (b.mode === "auto" || b.mode === "auto_plugin" || b.mode === "native") && !(mejs.MediaFeatures.isBustedNativeHTTPS &&
                b.httpsBasicAuthSite === true)) {
            if (!d) {
                g = document.createElement(j.isVideo ? "video" : "audio");
                a.parentNode.insertBefore(g, a);
                a.style.display = "none";
                j.htmlMediaElement = a = g
            }
            for (g = 0; g < f.length; g++)
                if (a.canPlayType(f[g].type).replace(/no/, "") !== "" || a.canPlayType(f[g].type.replace(/mp3/, "mpeg")).replace(/no/, "") !== "") {
                    j.method = "native";
                    j.url = f[g].url;
                    break
                }
            if (j.method === "native") {
                if (j.url !== null) a.src = j.url;
                if (b.mode !== "auto_plugin") return j
            }
        }
        if (b.mode === "auto" || b.mode === "auto_plugin" || b.mode === "shim")
            for (g =
                0; g < f.length; g++) {
                l = f[g].type;
                for (a = 0; a < b.plugins.length; a++) {
                    e = b.plugins[a];
                    h = mejs.plugins[e];
                    for (c = 0; c < h.length; c++) {
                        k = h[c];
                        if (k.version == null || mejs.PluginDetector.hasPluginVersion(e, k.version))
                            for (d = 0; d < k.types.length; d++)
                                if (l == k.types[d]) {
                                    j.method = e;
                                    j.url = f[g].url;
                                    return j
                                }
                    }
                }
            }
        if (b.mode === "auto_plugin" && j.method === "native") return j;
        if (j.method === "" && f.length > 0) j.url = f[0].url;
        return j
    },
    formatType: function(a, b) {
        return a && !b ? this.getTypeFromFile(a) : b && ~b.indexOf(";") ? b.substr(0, b.indexOf(";")) : b
    },
    getTypeFromFile: function(a) {
        a = a.split("?")[0];
        a = a.substring(a.lastIndexOf(".") + 1).toLowerCase();
        return (/(mp4|m4v|ogg|ogv|webm|webmv|flv|wmv|mpeg|mov)/gi.test(a) ? "video" : "audio") + "/" + this.getTypeFromExtension(a)
    },
    getTypeFromExtension: function(a) {
        switch (a) {
            case "mp4":
            case "m4v":
                return "mp4";
            case "webm":
            case "webma":
            case "webmv":
                return "webm";
            case "ogg":
            case "oga":
            case "ogv":
                return "ogg";
            default:
                return a
        }
    },
    createErrorMessage: function(a, b, c) {
        var d = a.htmlMediaElement,
            e = document.createElement("div");
        e.className =
            "me-cannotplay";
        try {
            e.style.width = d.width + "px";
            e.style.height = d.height + "px"
        } catch (f) {}
        e.innerHTML = b.customError ? b.customError : c !== "" ? '<a href="' + a.url + '"><img src="' + c + '" width="100%" height="100%" /></a>' : '<a href="' + a.url + '"><span>' + mejs.i18n.t("Download File") + "</span></a>";
        d.parentNode.insertBefore(e, d);
        d.style.display = "none";
        b.error(d)
    },
    createPlugin: function(a, b, c, d, e, f) {
        c = a.htmlMediaElement;
        var g = 1,
            h = 1,
            l = "me_" + a.method + "_" + mejs.meIndex++,
            j = new mejs.PluginMediaElement(l, a.method, a.url),
            k = document.createElement("div"),
            m;
        j.tagName = c.tagName;
        for (m = 0; m < c.attributes.length; m++) {
            var n = c.attributes[m];
            n.specified == true && j.setAttribute(n.name, n.value)
        }
        for (m = c.parentNode; m !== null && m.tagName.toLowerCase() != "body";) {
            if (m.parentNode.tagName.toLowerCase() == "p") {
                m.parentNode.parentNode.insertBefore(m, m.parentNode);
                break
            }
            m = m.parentNode
        }
        if (a.isVideo) {
            g = b.pluginWidth > 0 ? b.pluginWidth : b.videoWidth > 0 ? b.videoWidth : c.getAttribute("width") !== null ? c.getAttribute("width") : b.defaultVideoWidth;
            h = b.pluginHeight > 0 ? b.pluginHeight : b.videoHeight >
                0 ? b.videoHeight : c.getAttribute("height") !== null ? c.getAttribute("height") : b.defaultVideoHeight;
            g = mejs.Utility.encodeUrl(g);
            h = mejs.Utility.encodeUrl(h)
        } else if (b.enablePluginDebug) {
            g = 320;
            h = 240
        }
        j.success = b.success;
        mejs.MediaPluginBridge.registerPluginElement(l, j, c);
        k.className = "me-plugin";
        k.id = l + "_container";
        a.isVideo ? c.parentNode.insertBefore(k, c) : document.body.insertBefore(k, document.body.childNodes[0]);
        d = ["id=" + l, "isvideo=" + (a.isVideo ? "true" : "false"), "autoplay=" + (d ? "true" : "false"), "preload=" + e, "width=" +
            g, "startvolume=" + b.startVolume, "timerrate=" + b.timerRate, "flashstreamer=" + b.flashStreamer, "height=" + h, "pseudostreamstart=" + b.pseudoStreamingStartQueryParam
        ];
        if (a.url !== null) a.method == "flash" ? d.push("file=" + mejs.Utility.encodeUrl(a.url)) : d.push("file=" + a.url);
        b.enablePluginDebug && d.push("debug=true");
        b.enablePluginSmoothing && d.push("smoothing=true");
        b.enablePseudoStreaming && d.push("pseudostreaming=true");
        f && d.push("controls=true");
        if (b.pluginVars) d = d.concat(b.pluginVars);
        switch (a.method) {
            case "silverlight":
                k.innerHTML =
                    '<object data="data:application/x-silverlight-2," type="application/x-silverlight-2" id="' + l + '" name="' + l + '" width="' + g + '" height="' + h + '" class="mejs-shim"><param name="initParams" value="' + d.join(",") + '" /><param name="windowless" value="true" /><param name="background" value="black" /><param name="minRuntimeVersion" value="3.0.0.0" /><param name="autoUpgrade" value="true" /><param name="source" value="' + b.pluginPath + b.silverlightName + '" /></object>';
                break;
            case "flash":
                if (mejs.MediaFeatures.isIE) {
                    a =
                        document.createElement("div");
                    k.appendChild(a);
                    a.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + l + '" width="' + g + '" height="' + h + '" class="mejs-shim"><param name="movie" value="' + b.pluginPath + b.flashName + "?x=" + new Date + '" /><param name="flashvars" value="' + d.join("&amp;") + '" /><param name="quality" value="high" /><param name="bgcolor" value="#000000" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /></object>'
                } else k.innerHTML =
                    '<embed id="' + l + '" name="' + l + '" play="true" loop="false" quality="high" bgcolor="#000000" wmode="transparent" allowScriptAccess="always" allowFullScreen="true" type="application/x-shockwave-flash" pluginspage="//www.macromedia.com/go/getflashplayer" src="' + b.pluginPath + b.flashName + '" flashvars="' + d.join("&") + '" width="' + g + '" height="' + h + '" class="mejs-shim"></embed>';
                break;
            case "youtube":
                b = a.url.substr(a.url.lastIndexOf("=") + 1);
                youtubeSettings = {
                    container: k,
                    containerId: k.id,
                    pluginMediaElement: j,
                    pluginId: l,
                    videoId: b,
                    height: h,
                    width: g
                };
                mejs.PluginDetector.hasPluginVersion("flash", [10, 0, 0]) ? mejs.YouTubeApi.createFlash(youtubeSettings) : mejs.YouTubeApi.enqueueIframe(youtubeSettings);
                break;
            case "vimeo":
                j.vimeoid = a.url.substr(a.url.lastIndexOf("/") + 1);
                k.innerHTML = '<iframe src="http://player.vimeo.com/video/' + j.vimeoid + '?portrait=0&byline=0&title=0" width="' + g + '" height="' + h + '" frameborder="0" class="mejs-shim"></iframe>'
        }
        c.style.display = "none";
        c.removeAttribute("autoplay");
        return j
    },
    updateNative: function(a,
        b) {
        var c = a.htmlMediaElement,
            d;
        for (d in mejs.HtmlMediaElement) c[d] = mejs.HtmlMediaElement[d];
        b.success(c, c);
        return c
    }
};
mejs.YouTubeApi = {
    isIframeStarted: false,
    isIframeLoaded: false,
    loadIframeApi: function() {
        if (!this.isIframeStarted) {
            var a = document.createElement("script");
            a.src = "//www.youtube.com/player_api";
            var b = document.getElementsByTagName("script")[0];
            b.parentNode.insertBefore(a, b);
            this.isIframeStarted = true
        }
    },
    iframeQueue: [],
    enqueueIframe: function(a) {
        if (this.isLoaded) this.createIframe(a);
        else {
            this.loadIframeApi();
            this.iframeQueue.push(a)
        }
    },
    createIframe: function(a) {
        var b = a.pluginMediaElement,
            c = new YT.Player(a.containerId, {
                height: a.height,
                width: a.width,
                videoId: a.videoId,
                playerVars: {
                    controls: 0
                },
                events: {
                    onReady: function() {
                        a.pluginMediaElement.pluginApi = c;
                        mejs.MediaPluginBridge.initPlugin(a.pluginId);
                        setInterval(function() {
                            mejs.YouTubeApi.createEvent(c, b, "timeupdate")
                        }, 250)
                    },
                    onStateChange: function(d) {
                        mejs.YouTubeApi.handleStateChange(d.data, c, b)
                    }
                }
            })
    },
    createEvent: function(a, b, c) {
        c = {
            type: c,
            target: b
        };
        if (a && a.getDuration) {
            b.currentTime = c.currentTime = a.getCurrentTime();
            b.duration = c.duration = a.getDuration();
            c.paused = b.paused;
            c.ended = b.ended;
            c.muted = a.isMuted();
            c.volume = a.getVolume() / 100;
            c.bytesTotal = a.getVideoBytesTotal();
            c.bufferedBytes = a.getVideoBytesLoaded();
            var d = c.bufferedBytes / c.bytesTotal * c.duration;
            c.target.buffered = c.buffered = {
                start: function() {
                    return 0
                },
                end: function() {
                    return d
                },
                length: 1
            }
        }
        b.dispatchEvent(c.type, c)
    },
    iFrameReady: function() {
        for (this.isIframeLoaded = this.isLoaded = true; this.iframeQueue.length > 0;) this.createIframe(this.iframeQueue.pop())
    },
    flashPlayers: {},
    createFlash: function(a) {
        this.flashPlayers[a.pluginId] =
            a;
        var b, c = "//www.youtube.com/apiplayer?enablejsapi=1&amp;playerapiid=" + a.pluginId + "&amp;version=3&amp;autoplay=0&amp;controls=0&amp;modestbranding=1&loop=0";
        if (mejs.MediaFeatures.isIE) {
            b = document.createElement("div");
            a.container.appendChild(b);
            b.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + a.pluginId + '" width="' + a.width + '" height="' + a.height + '" class="mejs-shim"><param name="movie" value="' +
                c + '" /><param name="wmode" value="transparent" /><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="true" /></object>'
        } else a.container.innerHTML = '<object type="application/x-shockwave-flash" id="' + a.pluginId + '" data="' + c + '" width="' + a.width + '" height="' + a.height + '" style="visibility: visible; " class="mejs-shim"><param name="allowScriptAccess" value="always"><param name="wmode" value="transparent"></object>'
    },
    flashReady: function(a) {
        var b = this.flashPlayers[a],
            c =
            document.getElementById(a),
            d = b.pluginMediaElement;
        d.pluginApi = d.pluginElement = c;
        mejs.MediaPluginBridge.initPlugin(a);
        c.cueVideoById(b.videoId);
        a = b.containerId + "_callback";
        window[a] = function(e) {
            mejs.YouTubeApi.handleStateChange(e, c, d)
        };
        c.addEventListener("onStateChange", a);
        setInterval(function() {
            mejs.YouTubeApi.createEvent(c, d, "timeupdate")
        }, 250)
    },
    handleStateChange: function(a, b, c) {
        switch (a) {
            case -1:
                c.paused = true;
                c.ended = true;
                mejs.YouTubeApi.createEvent(b, c, "loadedmetadata");
                break;
            case 0:
                c.paused = false;
                c.ended = true;
                mejs.YouTubeApi.createEvent(b, c, "ended");
                break;
            case 1:
                c.paused = false;
                c.ended = false;
                mejs.YouTubeApi.createEvent(b, c, "play");
                mejs.YouTubeApi.createEvent(b, c, "playing");
                break;
            case 2:
                c.paused = true;
                c.ended = false;
                mejs.YouTubeApi.createEvent(b, c, "pause");
                break;
            case 3:
                mejs.YouTubeApi.createEvent(b, c, "progress")
        }
    }
};

function onYouTubePlayerAPIReady() {
    mejs.YouTubeApi.iFrameReady()
}

function onYouTubePlayerReady(a) {
    mejs.YouTubeApi.flashReady(a)
}
window.mejs = mejs;
window.MediaElement = mejs.MediaElement;
(function(a, b) {
    var c = {
        locale: {
            language: "",
            strings: {}
        },
        methods: {}
    };
    c.locale.getLanguage = function() {
        return c.locale.language || navigator.language
    };
    if (typeof mejsL10n != "undefined") c.locale.language = mejsL10n.language;
    c.locale.INIT_LANGUAGE = c.locale.getLanguage();
    c.methods.checkPlain = function(d) {
        var e, f, g = {
            "&": "&amp;",
            '"': "&quot;",
            "<": "&lt;",
            ">": "&gt;"
        };
        d = String(d);
        for (e in g)
            if (g.hasOwnProperty(e)) {
                f = RegExp(e, "g");
                d = d.replace(f, g[e])
            }
        return d
    };
    c.methods.formatString = function(d, e) {
        for (var f in e) {
            switch (f.charAt(0)) {
                case "@":
                    e[f] =
                        c.methods.checkPlain(e[f]);
                    break;
                case "!":
                    break;
                default:
                    e[f] = '<em class="placeholder">' + c.methods.checkPlain(e[f]) + "</em>"
            }
            d = d.replace(f, e[f])
        }
        return d
    };
    c.methods.t = function(d, e, f) {
        if (c.locale.strings && c.locale.strings[f.context] && c.locale.strings[f.context][d]) d = c.locale.strings[f.context][d];
        if (e) d = c.methods.formatString(d, e);
        return d
    };
    c.t = function(d, e, f) {
        if (typeof d === "string" && d.length > 0) {
            var g = c.locale.getLanguage();
            f = f || {
                context: g
            };
            return c.methods.t(d, e, f)
        } else throw {
            name: "InvalidArgumentException",
            message: "First argument is either not a string or empty."
        };
    };
    b.i18n = c
})(document, mejs);
(function(a) {
    if (typeof mejsL10n != "undefined") a[mejsL10n.language] = mejsL10n.strings
})(mejs.i18n.locale.strings);
(function(a) {
    a.de = {
        Fullscreen: "Vollbild",
        "Go Fullscreen": "Vollbild an",
        "Turn off Fullscreen": "Vollbild aus",
        Close: "Schlie\u00dfen"
    }
})(mejs.i18n.locale.strings);
(function(a) {
    a.zh = {
        Fullscreen: "\u5168\u87a2\u5e55",
        "Go Fullscreen": "\u5168\u5c4f\u6a21\u5f0f",
        "Turn off Fullscreen": "\u9000\u51fa\u5168\u5c4f\u6a21\u5f0f",
        Close: "\u95dc\u9589"
    }
})(mejs.i18n.locale.strings);

/*!
 * MediaElementPlayer
 * http://mediaelementjs.com/
 *
 * Creates a controller bar for HTML5 <video> add <audio> tags
 * using jQuery and MediaElement.js (HTML5 Flash/Silverlight wrapper)
 *
 * Copyright 2010-2013, John Dyer (http://j.hn/)
 * License: MIT
 *
 */
if (typeof jQuery != "undefined") mejs.$ = jQuery;
else if (typeof ender != "undefined") mejs.$ = ender;
(function(f) {
    mejs.MepDefaults = {
        poster: "",
        showPosterWhenEnded: false,
        defaultVideoWidth: 480,
        defaultVideoHeight: 270,
        videoWidth: -1,
        videoHeight: -1,
        defaultAudioWidth: 400,
        defaultAudioHeight: 30,
        defaultSeekBackwardInterval: function(a) {
            return a.duration * 0.05
        },
        defaultSeekForwardInterval: function(a) {
            return a.duration * 0.05
        },
        audioWidth: -1,
        audioHeight: -1,
        startVolume: 0.8,
        loop: false,
        autoRewind: true,
        enableAutosize: true,
        alwaysShowHours: false,
        showTimecodeFrameCount: false,
        framesPerSecond: 25,
        autosizeProgress: true,
        alwaysShowControls: false,
        hideVideoControlsOnLoad: false,
        clickToPlayPause: true,
        iPadUseNativeControls: false,
        iPhoneUseNativeControls: false,
        AndroidUseNativeControls: false,
        features: ["playpause", "current", "progress", "duration", "tracks", "volume", "fullscreen"],
        isVideo: true,
        enableKeyboard: true,
        pauseOtherPlayers: true,
        keyActions: [{
            keys: [32, 179],
            action: function(a, b) {
                b.paused || b.ended ? b.play() : b.pause()
            }
        }, {
            keys: [38],
            action: function(a, b) {
                b.setVolume(Math.min(b.volume + 0.1, 1))
            }
        }, {
            keys: [40],
            action: function(a, b) {
                b.setVolume(Math.max(b.volume -
                    0.1, 0))
            }
        }, {
            keys: [37, 227],
            action: function(a, b) {
                if (!isNaN(b.duration) && b.duration > 0) {
                    if (a.isVideo) {
                        a.showControls();
                        a.startControlsTimer()
                    }
                    var c = Math.max(b.currentTime - a.options.defaultSeekBackwardInterval(b), 0);
                    b.setCurrentTime(c)
                }
            }
        }, {
            keys: [39, 228],
            action: function(a, b) {
                if (!isNaN(b.duration) && b.duration > 0) {
                    if (a.isVideo) {
                        a.showControls();
                        a.startControlsTimer()
                    }
                    var c = Math.min(b.currentTime + a.options.defaultSeekForwardInterval(b), b.duration);
                    b.setCurrentTime(c)
                }
            }
        }, {
            keys: [70],
            action: function(a) {
                if (typeof a.enterFullScreen !=
                    "undefined") a.isFullScreen ? a.exitFullScreen() : a.enterFullScreen()
            }
        }]
    };
    mejs.mepIndex = 0;
    mejs.players = {};
    mejs.MediaElementPlayer = function(a, b) {
        if (!(this instanceof mejs.MediaElementPlayer)) return new mejs.MediaElementPlayer(a, b);
        this.$media = this.$node = f(a);
        this.node = this.media = this.$media[0];
        if (typeof this.node.player != "undefined") return this.node.player;
        else this.node.player = this;
        if (typeof b == "undefined") b = this.$node.data("mejsoptions");
        this.options = f.extend({}, mejs.MepDefaults, b);
        this.id = "mep_" + mejs.mepIndex++;
        mejs.players[this.id] = this;
        this.init();
        return this
    };
    mejs.MediaElementPlayer.prototype = {
        hasFocus: false,
        controlsAreVisible: true,
        init: function() {
            var a = this,
                b = mejs.MediaFeatures,
                c = f.extend(true, {}, a.options, {
                    success: function(d, g) {
                        a.meReady(d, g)
                    },
                    error: function(d) {
                        a.handleError(d)
                    }
                }),
                e = a.media.tagName.toLowerCase();
            a.isDynamic = e !== "audio" && e !== "video";
            a.isVideo = a.isDynamic ? a.options.isVideo : e !== "audio" && a.options.isVideo;
            if (b.isiPad && a.options.iPadUseNativeControls || b.isiPhone && a.options.iPhoneUseNativeControls) {
                a.$media.attr("controls",
                    "controls");
                if (b.isiPad && a.media.getAttribute("autoplay") !== null) {
                    a.media.load();
                    a.media.play()
                }
            } else if (!(b.isAndroid && a.options.AndroidUseNativeControls)) {
                a.$media.removeAttr("controls");
                a.container = f('<div id="' + a.id + '" class="mejs-container ' + (mejs.MediaFeatures.svg ? "svg" : "no-svg") + '"><div class="mejs-inner"><div class="mejs-mediaelement"></div><div class="mejs-layers"></div><div class="mejs-controls"></div><div class="mejs-clear"></div></div></div>').addClass(a.$media[0].className).insertBefore(a.$media);
                a.container.addClass((b.isAndroid ? "mejs-android " : "") + (b.isiOS ? "mejs-ios " : "") + (b.isiPad ? "mejs-ipad " : "") + (b.isiPhone ? "mejs-iphone " : "") + (a.isVideo ? "mejs-video " : "mejs-audio "));
                if (b.isiOS) {
                    b = a.$media.clone();
                    a.container.find(".mejs-mediaelement").append(b);
                    a.$media.remove();
                    a.$node = a.$media = b;
                    a.node = a.media = b[0]
                } else a.container.find(".mejs-mediaelement").append(a.$media);
                a.controls = a.container.find(".mejs-controls");
                a.layers = a.container.find(".mejs-layers");
                b = a.isVideo ? "video" : "audio";
                e = b.substring(0,
                    1).toUpperCase() + b.substring(1);
                a.width = a.options[b + "Width"] > 0 || a.options[b + "Width"].toString().indexOf("%") > -1 ? a.options[b + "Width"] : a.media.style.width !== "" && a.media.style.width !== null ? a.media.style.width : a.media.getAttribute("width") !== null ? a.$media.attr("width") : a.options["default" + e + "Width"];
                a.height = a.options[b + "Height"] > 0 || a.options[b + "Height"].toString().indexOf("%") > -1 ? a.options[b + "Height"] : a.media.style.height !== "" && a.media.style.height !== null ? a.media.style.height : a.$media[0].getAttribute("height") !==
                    null ? a.$media.attr("height") : a.options["default" + e + "Height"];
                a.setPlayerSize(a.width, a.height);
                c.pluginWidth = a.width;
                c.pluginHeight = a.height
            }
            mejs.MediaElement(a.$media[0], c);
            typeof a.container != "undefined" && a.controlsAreVisible && a.container.trigger("controlsshown")
        },
        showControls: function(a) {
            var b = this;
            a = typeof a == "undefined" || a;
            if (!b.controlsAreVisible) {
                if (a) {
                    b.controls.css("visibility", "visible").stop(true, true).fadeIn(200, function() {
                        b.controlsAreVisible = true;
                        b.container.trigger("controlsshown")
                    });
                    b.container.find(".mejs-control").css("visibility", "visible").stop(true, true).fadeIn(200, function() {
                        b.controlsAreVisible = true
                    })
                } else {
                    b.controls.css("visibility", "visible").css("display", "block");
                    b.container.find(".mejs-control").css("visibility", "visible").css("display", "block");
                    b.controlsAreVisible = true;
                    b.container.trigger("controlsshown")
                }
                b.setControlsSize()
            }
        },
        hideControls: function(a) {
            var b = this;
            a = typeof a == "undefined" || a;
            if (!(!b.controlsAreVisible || b.options.alwaysShowControls))
                if (a) {
                    b.controls.stop(true,
                        true).fadeOut(200, function() {
                        f(this).css("visibility", "hidden").css("display", "block");
                        b.controlsAreVisible = false;
                        b.container.trigger("controlshidden")
                    });
                    b.container.find(".mejs-control").stop(true, true).fadeOut(200, function() {
                        f(this).css("visibility", "hidden").css("display", "block")
                    })
                } else {
                    b.controls.css("visibility", "hidden").css("display", "block");
                    b.container.find(".mejs-control").css("visibility", "hidden").css("display", "block");
                    b.controlsAreVisible = false;
                    b.container.trigger("controlshidden")
                }
        },
        controlsTimer: null,
        startControlsTimer: function(a) {
            var b = this;
            a = typeof a != "undefined" ? a : 1500;
            b.killControlsTimer("start");
            b.controlsTimer = setTimeout(function() {
                b.hideControls();
                b.killControlsTimer("hide")
            }, a)
        },
        killControlsTimer: function() {
            if (this.controlsTimer !== null) {
                clearTimeout(this.controlsTimer);
                delete this.controlsTimer;
                this.controlsTimer = null
            }
        },
        controlsEnabled: true,
        disableControls: function() {
            this.killControlsTimer();
            this.hideControls(false);
            this.controlsEnabled = false
        },
        enableControls: function() {
            this.showControls(false);
            this.controlsEnabled = true
        },
        meReady: function(a, b) {
            var c = this,
                e = mejs.MediaFeatures,
                d = b.getAttribute("autoplay");
            d = !(typeof d == "undefined" || d === null || d === "false");
            var g;
            if (!c.created) {
                c.created = true;
                c.media = a;
                c.domNode = b;
                if (!(e.isAndroid && c.options.AndroidUseNativeControls) && !(e.isiPad && c.options.iPadUseNativeControls) && !(e.isiPhone && c.options.iPhoneUseNativeControls)) {
                    c.buildposter(c, c.controls, c.layers, c.media);
                    c.buildkeyboard(c, c.controls, c.layers, c.media);
                    c.buildoverlays(c, c.controls, c.layers, c.media);
                    c.findTracks();
                    for (g in c.options.features) {
                        e = c.options.features[g];
                        if (c["build" + e]) try {
                            c["build" + e](c, c.controls, c.layers, c.media)
                        } catch (k) {}
                    }
                    c.container.trigger("controlsready");
                    c.setPlayerSize(c.width, c.height);
                    c.setControlsSize();
                    if (c.isVideo) {
                        if (mejs.MediaFeatures.hasTouch) c.$media.bind("touchstart", function() {
                            if (c.controlsAreVisible) c.hideControls(false);
                            else c.controlsEnabled && c.showControls(false)
                        });
                        else {
                            mejs.MediaElementPlayer.prototype.clickToPlayPauseCallback = function() {
                                if (c.options.clickToPlayPause) c.media.paused ?
                                    c.media.play() : c.media.pause()
                            };
                            c.media.addEventListener("click", c.clickToPlayPauseCallback, false);
                            c.container.bind("mouseenter mouseover", function() {
                                if (c.controlsEnabled)
                                    if (!c.options.alwaysShowControls) {
                                        c.killControlsTimer("enter");
                                        c.showControls();
                                        c.startControlsTimer(2500)
                                    }
                            }).bind("mousemove", function() {
                                if (c.controlsEnabled) {
                                    c.controlsAreVisible || c.showControls();
                                    c.options.alwaysShowControls || c.startControlsTimer(2500)
                                }
                            }).bind("mouseleave", function() {
                                c.controlsEnabled && !c.media.paused && !c.options.alwaysShowControls &&
                                    c.startControlsTimer(1E3)
                            })
                        }
                        c.options.hideVideoControlsOnLoad && c.hideControls(false);
                        d && !c.options.alwaysShowControls && c.hideControls();
                        c.options.enableAutosize && c.media.addEventListener("loadedmetadata", function(j) {
                            if (c.options.videoHeight <= 0 && c.domNode.getAttribute("height") === null && !isNaN(j.target.videoHeight)) {
                                c.setPlayerSize(j.target.videoWidth, j.target.videoHeight);
                                c.setControlsSize();
                                c.media.setVideoSize(j.target.videoWidth, j.target.videoHeight)
                            }
                        }, false)
                    }
                    a.addEventListener("play", function() {
                        for (var j in mejs.players) {
                            var m =
                                mejs.players[j];
                            m.id != c.id && c.options.pauseOtherPlayers && !m.paused && !m.ended && m.pause();
                            m.hasFocus = false
                        }
                        c.hasFocus = true
                    }, false);
                    c.media.addEventListener("ended", function() {
                        if (c.options.autoRewind) try {
                            c.media.setCurrentTime(0)
                        } catch (j) {}
                        c.media.pause();
                        c.setProgressRail && c.setProgressRail();
                        c.setCurrentRail && c.setCurrentRail();
                        if (c.options.loop) c.media.play();
                        else !c.options.alwaysShowControls && c.controlsEnabled && c.showControls()
                    }, false);
                    c.media.addEventListener("loadedmetadata", function() {
                        c.updateDuration &&
                            c.updateDuration();
                        c.updateCurrent && c.updateCurrent();
                        if (!c.isFullScreen) {
                            c.setPlayerSize(c.width, c.height);
                            c.setControlsSize()
                        }
                    }, false);
                    setTimeout(function() {
                        c.setPlayerSize(c.width, c.height);
                        c.setControlsSize()
                    }, 50);
                    c.globalBind("resize", function() {
                        c.isFullScreen || mejs.MediaFeatures.hasTrueNativeFullScreen && document.webkitIsFullScreen || c.setPlayerSize(c.width, c.height);
                        c.setControlsSize()
                    });
                    c.media.pluginType == "youtube" && c.container.find(".mejs-overlay-play").hide()
                }
                if (d && a.pluginType == "native") {
                    a.load();
                    a.play()
                }
                if (c.options.success) typeof c.options.success == "string" ? window[c.options.success](c.media, c.domNode, c) : c.options.success(c.media, c.domNode, c)
            }
        },
        handleError: function(a) {
            this.controls.hide();
            this.options.error && this.options.error(a)
        },
        setPlayerSize: function(a, b) {
            if (typeof a != "undefined") this.width = a;
            if (typeof b != "undefined") this.height = b;
            if (this.height.toString().indexOf("%") > 0 || this.$node.css("max-width") === "100%" || parseInt(this.$node.css("max-width").replace(/px/, ""), 10) / this.$node.offsetParent().width() ===
                1 || this.$node[0].currentStyle && this.$node[0].currentStyle.maxWidth === "100%") {
                var c = this.isVideo ? this.media.videoWidth && this.media.videoWidth > 0 ? this.media.videoWidth : this.options.defaultVideoWidth : this.options.defaultAudioWidth,
                    e = this.isVideo ? this.media.videoHeight && this.media.videoHeight > 0 ? this.media.videoHeight : this.options.defaultVideoHeight : this.options.defaultAudioHeight,
                    d = this.container.parent().closest(":visible").width();
                c = this.isVideo || !this.options.autosizeProgress ? parseInt(d * e / c, 10) : e;
                if (this.container.parent()[0].tagName.toLowerCase() ===
                    "body") {
                    d = f(window).width();
                    c = f(window).height()
                }
                if (c != 0 && d != 0) {
                    this.container.width(d).height(c);
                    this.$media.add(this.container.find(".mejs-shim")).width("100%").height("100%");
                    this.isVideo && this.media.setVideoSize && this.media.setVideoSize(d, c);
                    this.layers.children(".mejs-layer").width("100%").height("100%")
                }
            } else {
                this.container.width(this.width).height(this.height);
                this.layers.children(".mejs-layer").width(this.width).height(this.height)
            }
            d = this.layers.find(".mejs-overlay-play");
            c = d.find(".mejs-overlay-button");
            d.height(this.container.height() - this.controls.height());
            c.css("margin-top", "-" + (c.height() / 2 - this.controls.height() / 2).toString() + "px")
        },
        setControlsSize: function() {
            var a = 0,
                b = 0,
                c = this.controls.find(".mejs-time-rail"),
                e = this.controls.find(".mejs-time-total");
            this.controls.find(".mejs-time-current");
            this.controls.find(".mejs-time-loaded");
            var d = c.siblings();
            if (this.options && !this.options.autosizeProgress) b = parseInt(c.css("width"));
            if (b === 0 || !b) {
                d.each(function() {
                    var g = f(this);
                    if (g.css("position") !=
                        "absolute" && g.is(":visible")) a += f(this).outerWidth(true)
                });
                b = this.controls.width() - a - (c.outerWidth(true) - c.width()) - 1
            }
            c.width(b);
            e.width(b - (e.outerWidth(true) - e.width()));
            this.setProgressRail && this.setProgressRail();
            this.setCurrentRail && this.setCurrentRail()
        },
        buildposter: function(a, b, c, e) {
            var d = f('<div class="mejs-poster mejs-layer"></div>').appendTo(c);
            b = a.$media.attr("poster");
            if (a.options.poster !== "") b = a.options.poster;
            b !== "" && b != null ? this.setPoster(b) : d.hide();
            e.addEventListener("play", function() {
                    d.hide()
                },
                false);
            a.options.showPosterWhenEnded && a.options.autoRewind && e.addEventListener("ended", function() {
                d.show()
            }, false)
        },
        setPoster: function(a) {
            var b = this.container.find(".mejs-poster"),
                c = b.find("img");
            if (c.length == 0) c = f('<img width="100%" height="100%" />').appendTo(b);
            c.attr("src", a);
            b.css({
                "background-image": "url(" + a + ")"
            })
        },
        buildoverlays: function(a, b, c, e) {
            var d = this;
            if (a.isVideo) {
                var g = f('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-loading"><span></span></div></div>').hide().appendTo(c),
                    k = f('<div class="mejs-overlay mejs-layer"><div class="mejs-overlay-error"></div></div>').hide().appendTo(c),
                    j = f('<div class="mejs-overlay mejs-layer mejs-overlay-play"><div class="mejs-overlay-button"></div></div>').appendTo(c).click(function() {
                        if (d.options.clickToPlayPause) e.paused ? e.play() : e.pause()
                    });
                e.addEventListener("play", function() {
                    j.hide();
                    g.hide();
                    b.find(".mejs-time-buffering").hide();
                    k.hide()
                }, false);
                e.addEventListener("playing", function() {
                    j.hide();
                    g.hide();
                    b.find(".mejs-time-buffering").hide();
                    k.hide()
                }, false);
                e.addEventListener("seeking", function() {
                    g.show();
                    b.find(".mejs-time-buffering").show()
                }, false);
                e.addEventListener("seeked", function() {
                    g.hide();
                    b.find(".mejs-time-buffering").hide()
                }, false);
                e.addEventListener("pause", function() {
                    mejs.MediaFeatures.isiPhone || j.show()
                }, false);
                e.addEventListener("waiting", function() {
                    g.show();
                    b.find(".mejs-time-buffering").show()
                }, false);
                e.addEventListener("loadeddata", function() {
                    g.show();
                    b.find(".mejs-time-buffering").show()
                }, false);
                e.addEventListener("canplay",
                    function() {
                        g.hide();
                        b.find(".mejs-time-buffering").hide()
                    }, false);
                e.addEventListener("error", function() {
                    g.hide();
                    b.find(".mejs-time-buffering").hide();
                    k.show();
                    k.find("mejs-overlay-error").html("Error loading this resource")
                }, false)
            }
        },
        buildkeyboard: function(a, b, c, e) {
            this.globalBind("keydown", function(d) {
                if (a.hasFocus && a.options.enableKeyboard)
                    for (var g = 0, k = a.options.keyActions.length; g < k; g++)
                        for (var j = a.options.keyActions[g], m = 0, q = j.keys.length; m < q; m++)
                            if (d.keyCode == j.keys[m]) {
                                d.preventDefault();
                                j.action(a, e, d.keyCode);
                                return false
                            }
                return true
            });
            this.globalBind("click", function(d) {
                if (f(d.target).closest(".mejs-container").length == 0) a.hasFocus = false
            })
        },
        findTracks: function() {
            var a = this,
                b = a.$media.find("track");
            a.tracks = [];
            b.each(function(c, e) {
                e = f(e);
                a.tracks.push({
                    srclang: e.attr("srclang") ? e.attr("srclang").toLowerCase() : "",
                    src: e.attr("src"),
                    kind: e.attr("kind"),
                    label: e.attr("label") || "",
                    entries: [],
                    isLoaded: false
                })
            })
        },
        changeSkin: function(a) {
            this.container[0].className = "mejs-container " + a;
            this.setPlayerSize(this.width,
                this.height);
            this.setControlsSize()
        },
        play: function() {
            this.media.play()
        },
        pause: function() {
            try {
                this.media.pause()
            } catch (a) {}
        },
        load: function() {
            this.media.load()
        },
        setMuted: function(a) {
            this.media.setMuted(a)
        },
        setCurrentTime: function(a) {
            this.media.setCurrentTime(a)
        },
        getCurrentTime: function() {
            return this.media.currentTime
        },
        setVolume: function(a) {
            this.media.setVolume(a)
        },
        getVolume: function() {
            return this.media.volume
        },
        setSrc: function(a) {
            this.media.setSrc(a)
        },
        remove: function() {
            var a, b;
            for (a in this.options.features) {
                b =
                    this.options.features[a];
                if (this["clean" + b]) try {
                    this["clean" + b](this)
                } catch (c) {}
            }
            if (this.isDynamic) this.$node.insertBefore(this.container);
            else {
                this.$media.prop("controls", true);
                this.$node.clone().show().insertBefore(this.container);
                this.$node.remove()
            }
            this.media.pluginType !== "native" && this.media.remove();
            delete mejs.players[this.id];
            this.container.remove();
            this.globalUnbind();
            delete this.node.player
        }
    };
    (function() {
        function a(c, e) {
            var d = {
                d: [],
                w: []
            };
            f.each((c || "").split(" "), function(g, k) {
                var j = k + "." +
                    e;
                if (j.indexOf(".") === 0) {
                    d.d.push(j);
                    d.w.push(j)
                } else d[b.test(k) ? "w" : "d"].push(j)
            });
            d.d = d.d.join(" ");
            d.w = d.w.join(" ");
            return d
        }
        var b = /^((after|before)print|(before)?unload|hashchange|message|o(ff|n)line|page(hide|show)|popstate|resize|storage)\b/;
        mejs.MediaElementPlayer.prototype.globalBind = function(c, e, d) {
            c = a(c, this.id);
            c.d && f(document).bind(c.d, e, d);
            c.w && f(window).bind(c.w, e, d)
        };
        mejs.MediaElementPlayer.prototype.globalUnbind = function(c, e) {
            c = a(c, this.id);
            c.d && f(document).unbind(c.d, e);
            c.w && f(window).unbind(c.w,
                e)
        }
    })();
    if (typeof jQuery != "undefined") jQuery.fn.mediaelementplayer = function(a) {
        a === false ? this.each(function() {
            var b = jQuery(this).data("mediaelementplayer");
            b && b.remove();
            jQuery(this).removeData("mediaelementplayer")
        }) : this.each(function() {
            jQuery(this).data("mediaelementplayer", new mejs.MediaElementPlayer(this, a))
        });
        return this
    };
    f(document).ready(function() {
        f(".mejs-player").mediaelementplayer()
    });
    window.MediaElementPlayer = mejs.MediaElementPlayer
})(mejs.$);
(function(f) {
    f.extend(mejs.MepDefaults, {
        playpauseText: mejs.i18n.t("Play/Pause")
    });
    f.extend(MediaElementPlayer.prototype, {
        buildplaypause: function(a, b, c, e) {
            var d = f('<div class="mejs-button mejs-playpause-button mejs-play" ><button type="button" aria-controls="' + this.id + '" title="' + this.options.playpauseText + '" aria-label="' + this.options.playpauseText + '"></button></div>').appendTo(b).click(function(g) {
                g.preventDefault();
                e.paused ? e.play() : e.pause();
                return false
            });
            e.addEventListener("play", function() {
                    d.removeClass("mejs-play").addClass("mejs-pause")
                },
                false);
            e.addEventListener("playing", function() {
                d.removeClass("mejs-play").addClass("mejs-pause")
            }, false);
            e.addEventListener("pause", function() {
                d.removeClass("mejs-pause").addClass("mejs-play")
            }, false);
            e.addEventListener("paused", function() {
                d.removeClass("mejs-pause").addClass("mejs-play")
            }, false)
        }
    })
})(mejs.$);
(function(f) {
    f.extend(mejs.MepDefaults, {
        stopText: "Stop"
    });
    f.extend(MediaElementPlayer.prototype, {
        buildstop: function(a, b, c, e) {
            f('<div class="mejs-button mejs-stop-button mejs-stop"><button type="button" aria-controls="' + this.id + '" title="' + this.options.stopText + '" aria-label="' + this.options.stopText + '"></button></div>').appendTo(b).click(function() {
                e.paused || e.pause();
                if (e.currentTime > 0) {
                    e.setCurrentTime(0);
                    e.pause();
                    b.find(".mejs-time-current").width("0px");
                    b.find(".mejs-time-handle").css("left",
                        "0px");
                    b.find(".mejs-time-float-current").html(mejs.Utility.secondsToTimeCode(0));
                    b.find(".mejs-currenttime").html(mejs.Utility.secondsToTimeCode(0));
                    c.find(".mejs-poster").show()
                }
            })
        }
    })
})(mejs.$);
(function(f) {
    f.extend(MediaElementPlayer.prototype, {
        buildprogress: function(a, b, c, e) {
            f('<div class="mejs-time-rail"><span class="mejs-time-total"><span class="mejs-time-buffering"></span><span class="mejs-time-loaded"></span><span class="mejs-time-current"></span><span class="mejs-time-handle"></span><span class="mejs-time-float"><span class="mejs-time-float-current">00:00</span><span class="mejs-time-float-corner"></span></span></span></div>').appendTo(b);
            b.find(".mejs-time-buffering").hide();
            var d =
                this,
                g = b.find(".mejs-time-total");
            c = b.find(".mejs-time-loaded");
            var k = b.find(".mejs-time-current"),
                j = b.find(".mejs-time-handle"),
                m = b.find(".mejs-time-float"),
                q = b.find(".mejs-time-float-current"),
                p = function(h) {
                    h = h.pageX;
                    var l = g.offset(),
                        r = g.outerWidth(true),
                        n = 0,
                        o = n = 0;
                    if (e.duration) {
                        if (h < l.left) h = l.left;
                        else if (h > r + l.left) h = r + l.left;
                        o = h - l.left;
                        n = o / r;
                        n = n <= 0.02 ? 0 : n * e.duration;
                        t && n !== e.currentTime && e.setCurrentTime(n);
                        if (!mejs.MediaFeatures.hasTouch) {
                            m.css("left", o);
                            q.html(mejs.Utility.secondsToTimeCode(n));
                            m.show()
                        }
                    }
                },
                t = false;
            g.bind("mousedown", function(h) {
                if (h.which === 1) {
                    t = true;
                    p(h);
                    d.globalBind("mousemove.dur", function(l) {
                        p(l)
                    });
                    d.globalBind("mouseup.dur", function() {
                        t = false;
                        m.hide();
                        d.globalUnbind(".dur")
                    });
                    return false
                }
            }).bind("mouseenter", function() {
                d.globalBind("mousemove.dur", function(h) {
                    p(h)
                });
                mejs.MediaFeatures.hasTouch || m.show()
            }).bind("mouseleave", function() {
                if (!t) {
                    d.globalUnbind(".dur");
                    m.hide()
                }
            });
            e.addEventListener("progress", function(h) {
                a.setProgressRail(h);
                a.setCurrentRail(h)
            }, false);
            e.addEventListener("timeupdate", function(h) {
                a.setProgressRail(h);
                a.setCurrentRail(h)
            }, false);
            d.loaded = c;
            d.total = g;
            d.current = k;
            d.handle = j
        },
        setProgressRail: function(a) {
            var b = a != undefined ? a.target : this.media,
                c = null;
            if (b && b.buffered && b.buffered.length > 0 && b.buffered.end && b.duration) c = b.buffered.end(0) / b.duration;
            else if (b && b.bytesTotal != undefined && b.bytesTotal > 0 && b.bufferedBytes != undefined) c = b.bufferedBytes / b.bytesTotal;
            else if (a && a.lengthComputable && a.total != 0) c = a.loaded / a.total;
            if (c !== null) {
                c = Math.min(1,
                    Math.max(0, c));
                this.loaded && this.total && this.loaded.width(this.total.width() * c)
            }
        },
        setCurrentRail: function() {
            if (this.media.currentTime != undefined && this.media.duration)
                if (this.total && this.handle) {
                    var a = Math.round(this.total.width() * this.media.currentTime / this.media.duration),
                        b = a - Math.round(this.handle.outerWidth(true) / 2);
                    this.current.width(a);
                    this.handle.css("left", b)
                }
        }
    })
})(mejs.$);
(function(f) {
    f.extend(mejs.MepDefaults, {
        duration: -1,
        timeAndDurationSeparator: "<span> | </span>"
    });
    f.extend(MediaElementPlayer.prototype, {
        buildcurrent: function(a, b, c, e) {
            f('<div class="mejs-time"><span class="mejs-currenttime">' + (a.options.alwaysShowHours ? "00:" : "") + (a.options.showTimecodeFrameCount ? "00:00:00" : "00:00") + "</span></div>").appendTo(b);
            this.currenttime = this.controls.find(".mejs-currenttime");
            e.addEventListener("timeupdate", function() {
                a.updateCurrent()
            }, false)
        },
        buildduration: function(a, b,
            c, e) {
            if (b.children().last().find(".mejs-currenttime").length > 0) f(this.options.timeAndDurationSeparator + '<span class="mejs-duration">' + (this.options.duration > 0 ? mejs.Utility.secondsToTimeCode(this.options.duration, this.options.alwaysShowHours || this.media.duration > 3600, this.options.showTimecodeFrameCount, this.options.framesPerSecond || 25) : (a.options.alwaysShowHours ? "00:" : "") + (a.options.showTimecodeFrameCount ? "00:00:00" : "00:00")) + "</span>").appendTo(b.find(".mejs-time"));
            else {
                b.find(".mejs-currenttime").parent().addClass("mejs-currenttime-container");
                f('<div class="mejs-time mejs-duration-container"><span class="mejs-duration">' + (this.options.duration > 0 ? mejs.Utility.secondsToTimeCode(this.options.duration, this.options.alwaysShowHours || this.media.duration > 3600, this.options.showTimecodeFrameCount, this.options.framesPerSecond || 25) : (a.options.alwaysShowHours ? "00:" : "") + (a.options.showTimecodeFrameCount ? "00:00:00" : "00:00")) + "</span></div>").appendTo(b)
            }
            this.durationD = this.controls.find(".mejs-duration");
            e.addEventListener("timeupdate", function() {
                    a.updateDuration()
                },
                false)
        },
        updateCurrent: function() {
            if (this.currenttime) this.currenttime.html(mejs.Utility.secondsToTimeCode(this.media.currentTime, this.options.alwaysShowHours || this.media.duration > 3600, this.options.showTimecodeFrameCount, this.options.framesPerSecond || 25))
        },
        updateDuration: function() {
            this.container.toggleClass("mejs-long-video", this.media.duration > 3600);
            if (this.durationD && (this.options.duration > 0 || this.media.duration)) this.durationD.html(mejs.Utility.secondsToTimeCode(this.options.duration > 0 ? this.options.duration :
                this.media.duration, this.options.alwaysShowHours, this.options.showTimecodeFrameCount, this.options.framesPerSecond || 25))
        }
    })
})(mejs.$);
(function(f) {
    f.extend(mejs.MepDefaults, {
        muteText: mejs.i18n.t("Mute Toggle"),
        hideVolumeOnTouchDevices: true,
        audioVolume: "horizontal",
        videoVolume: "vertical"
    });
    f.extend(MediaElementPlayer.prototype, {
        buildvolume: function(a, b, c, e) {
            if (!(mejs.MediaFeatures.hasTouch && this.options.hideVolumeOnTouchDevices)) {
                var d = this,
                    g = d.isVideo ? d.options.videoVolume : d.options.audioVolume,
                    k = g == "horizontal" ? f('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="' + d.id + '" title="' + d.options.muteText +
                        '" aria-label="' + d.options.muteText + '"></button></div><div class="mejs-horizontal-volume-slider"><div class="mejs-horizontal-volume-total"></div><div class="mejs-horizontal-volume-current"></div><div class="mejs-horizontal-volume-handle"></div></div>').appendTo(b) : f('<div class="mejs-button mejs-volume-button mejs-mute"><button type="button" aria-controls="' + d.id + '" title="' + d.options.muteText + '" aria-label="' + d.options.muteText + '"></button><div class="mejs-volume-slider"><div class="mejs-volume-total"></div><div class="mejs-volume-current"></div><div class="mejs-volume-handle"></div></div></div>').appendTo(b),
                    j = d.container.find(".mejs-volume-slider, .mejs-horizontal-volume-slider"),
                    m = d.container.find(".mejs-volume-total, .mejs-horizontal-volume-total"),
                    q = d.container.find(".mejs-volume-current, .mejs-horizontal-volume-current"),
                    p = d.container.find(".mejs-volume-handle, .mejs-horizontal-volume-handle"),
                    t = function(n, o) {
                        if (!j.is(":visible") && typeof o == "undefined") {
                            j.show();
                            t(n, true);
                            j.hide()
                        } else {
                            n = Math.max(0, n);
                            n = Math.min(n, 1);
                            n == 0 ? k.removeClass("mejs-mute").addClass("mejs-unmute") : k.removeClass("mejs-unmute").addClass("mejs-mute");
                            if (g == "vertical") {
                                var s = m.height(),
                                    u = m.position(),
                                    v = s - s * n;
                                p.css("top", Math.round(u.top + v - p.height() / 2));
                                q.height(s - v);
                                q.css("top", u.top + v)
                            } else {
                                s = m.width();
                                u = m.position();
                                s = s * n;
                                p.css("left", Math.round(u.left + s - p.width() / 2));
                                q.width(Math.round(s))
                            }
                        }
                    },
                    h = function(n) {
                        var o = null,
                            s = m.offset();
                        if (g == "vertical") {
                            o = m.height();
                            parseInt(m.css("top").replace(/px/, ""), 10);
                            o = (o - (n.pageY - s.top)) / o;
                            if (s.top == 0 || s.left == 0) return
                        } else {
                            o = m.width();
                            o = (n.pageX - s.left) / o
                        }
                        o = Math.max(0, o);
                        o = Math.min(o, 1);
                        t(o);
                        o == 0 ? e.setMuted(true) :
                            e.setMuted(false);
                        e.setVolume(o)
                    },
                    l = false,
                    r = false;
                k.hover(function() {
                    j.show();
                    r = true
                }, function() {
                    r = false;
                    !l && g == "vertical" && j.hide()
                });
                j.bind("mouseover", function() {
                    r = true
                }).bind("mousedown", function(n) {
                    h(n);
                    d.globalBind("mousemove.vol", function(o) {
                        h(o)
                    });
                    d.globalBind("mouseup.vol", function() {
                        l = false;
                        d.globalUnbind(".vol");
                        !r && g == "vertical" && j.hide()
                    });
                    l = true;
                    return false
                });
                k.find("button").click(function() {
                    e.setMuted(!e.muted)
                });
                e.addEventListener("volumechange", function() {
                    if (!l)
                        if (e.muted) {
                            t(0);
                            k.removeClass("mejs-mute").addClass("mejs-unmute")
                        } else {
                            t(e.volume);
                            k.removeClass("mejs-unmute").addClass("mejs-mute")
                        }
                }, false);
                if (d.container.is(":visible")) {
                    t(a.options.startVolume);
                    a.options.startVolume === 0 && e.setMuted(true);
                    e.pluginType === "native" && e.setVolume(a.options.startVolume)
                }
            }
        }
    })
})(mejs.$);
(function(f) {
    f.extend(mejs.MepDefaults, {
        usePluginFullScreen: true,
        newWindowCallback: function() {
            return ""
        },
        fullscreenText: mejs.i18n.t("Fullscreen")
    });
    f.extend(MediaElementPlayer.prototype, {
        isFullScreen: false,
        isNativeFullScreen: false,
        isInIframe: false,
        buildfullscreen: function(a, b, c, e) {
            if (a.isVideo) {
                a.isInIframe = window.location != window.parent.location;
                if (mejs.MediaFeatures.hasTrueNativeFullScreen) {
                    c = function() {
                        if (a.isFullScreen)
                            if (mejs.MediaFeatures.isFullScreen()) {
                                a.isNativeFullScreen = true;
                                a.setControlsSize()
                            } else {
                                a.isNativeFullScreen =
                                    false;
                                a.exitFullScreen()
                            }
                    };
                    mejs.MediaFeatures.hasMozNativeFullScreen ? a.globalBind(mejs.MediaFeatures.fullScreenEventName, c) : a.container.bind(mejs.MediaFeatures.fullScreenEventName, c)
                }
                var d = this,
                    g = f('<div class="mejs-button mejs-fullscreen-button"><button type="button" aria-controls="' + d.id + '" title="' + d.options.fullscreenText + '" aria-label="' + d.options.fullscreenText + '"></button></div>').appendTo(b);
                if (d.media.pluginType === "native" || !d.options.usePluginFullScreen && !mejs.MediaFeatures.isFirefox) g.click(function() {
                    mejs.MediaFeatures.hasTrueNativeFullScreen &&
                        mejs.MediaFeatures.isFullScreen() || a.isFullScreen ? a.exitFullScreen() : a.enterFullScreen()
                });
                else {
                    var k = null;
                    if (function() {
                            var h = document.createElement("x"),
                                l = document.documentElement,
                                r = window.getComputedStyle;
                            if (!("pointerEvents" in h.style)) return false;
                            h.style.pointerEvents = "auto";
                            h.style.pointerEvents = "x";
                            l.appendChild(h);
                            r = r && r(h, "").pointerEvents === "auto";
                            l.removeChild(h);
                            return !!r
                        }() && !mejs.MediaFeatures.isOpera) {
                        var j = false,
                            m = function() {
                                if (j) {
                                    for (var h in q) q[h].hide();
                                    g.css("pointer-events",
                                        "");
                                    d.controls.css("pointer-events", "");
                                    d.media.removeEventListener("click", d.clickToPlayPauseCallback);
                                    j = false
                                }
                            },
                            q = {};
                        b = ["top", "left", "right", "bottom"];
                        var p, t = function() {
                            var h = g.offset().left - d.container.offset().left,
                                l = g.offset().top - d.container.offset().top,
                                r = g.outerWidth(true),
                                n = g.outerHeight(true),
                                o = d.container.width(),
                                s = d.container.height();
                            for (p in q) q[p].css({
                                position: "absolute",
                                top: 0,
                                left: 0
                            });
                            q.top.width(o).height(l);
                            q.left.width(h).height(n).css({
                                top: l
                            });
                            q.right.width(o - h - r).height(n).css({
                                top: l,
                                left: h + r
                            });
                            q.bottom.width(o).height(s - n - l).css({
                                top: l + n
                            })
                        };
                        d.globalBind("resize", function() {
                            t()
                        });
                        p = 0;
                        for (c = b.length; p < c; p++) q[b[p]] = f('<div class="mejs-fullscreen-hover" />').appendTo(d.container).mouseover(m).hide();
                        g.on("mouseover", function() {
                            if (!d.isFullScreen) {
                                var h = g.offset(),
                                    l = a.container.offset();
                                e.positionFullscreenButton(h.left - l.left, h.top - l.top, false);
                                g.css("pointer-events", "none");
                                d.controls.css("pointer-events", "none");
                                d.media.addEventListener("click", d.clickToPlayPauseCallback);
                                for (p in q) q[p].show();
                                t();
                                j = true
                            }
                        });
                        e.addEventListener("fullscreenchange", function() {
                            d.isFullScreen = !d.isFullScreen;
                            d.isFullScreen ? d.media.removeEventListener("click", d.clickToPlayPauseCallback) : d.media.addEventListener("click", d.clickToPlayPauseCallback);
                            m()
                        });
                        d.globalBind("mousemove", function(h) {
                            if (j) {
                                var l = g.offset();
                                if (h.pageY < l.top || h.pageY > l.top + g.outerHeight(true) || h.pageX < l.left || h.pageX > l.left + g.outerWidth(true)) {
                                    g.css("pointer-events", "");
                                    d.controls.css("pointer-events", "");
                                    j = false
                                }
                            }
                        })
                    } else g.on("mouseover",
                        function() {
                            if (k !== null) {
                                clearTimeout(k);
                                delete k
                            }
                            var h = g.offset(),
                                l = a.container.offset();
                            e.positionFullscreenButton(h.left - l.left, h.top - l.top, true)
                        }).on("mouseout", function() {
                        if (k !== null) {
                            clearTimeout(k);
                            delete k
                        }
                        k = setTimeout(function() {
                            e.hideFullscreenButton()
                        }, 1500)
                    })
                }
                a.fullscreenBtn = g;
                d.globalBind("keydown", function(h) {
                    if ((mejs.MediaFeatures.hasTrueNativeFullScreen && mejs.MediaFeatures.isFullScreen() || d.isFullScreen) && h.keyCode == 27) a.exitFullScreen()
                })
            }
        },
        cleanfullscreen: function(a) {
            a.exitFullScreen()
        },
        containerSizeTimeout: null,
        enterFullScreen: function() {
            var a = this;
            if (!(a.media.pluginType !== "native" && (mejs.MediaFeatures.isFirefox || a.options.usePluginFullScreen))) {
                f(document.documentElement).addClass("mejs-fullscreen");
                normalHeight = a.container.height();
                normalWidth = a.container.width();
                if (a.media.pluginType === "native")
                    if (mejs.MediaFeatures.hasTrueNativeFullScreen) {
                        mejs.MediaFeatures.requestFullScreen(a.container[0]);
                        a.isInIframe && setTimeout(function c() {
                            if (a.isNativeFullScreen) f(window).width() !==
                                screen.width ? a.exitFullScreen() : setTimeout(c, 500)
                        }, 500)
                    } else if (mejs.MediaFeatures.hasSemiNativeFullScreen) {
                    a.media.webkitEnterFullscreen();
                    return
                }
                if (a.isInIframe) {
                    var b = a.options.newWindowCallback(this);
                    if (b !== "")
                        if (mejs.MediaFeatures.hasTrueNativeFullScreen) setTimeout(function() {
                            if (!a.isNativeFullScreen) {
                                a.pause();
                                window.open(b, a.id, "top=0,left=0,width=" + screen.availWidth + ",height=" + screen.availHeight + ",resizable=yes,scrollbars=no,status=no,toolbar=no")
                            }
                        }, 250);
                        else {
                            a.pause();
                            window.open(b, a.id,
                                "top=0,left=0,width=" + screen.availWidth + ",height=" + screen.availHeight + ",resizable=yes,scrollbars=no,status=no,toolbar=no");
                            return
                        }
                }
                a.container.addClass("mejs-container-fullscreen").width("100%").height("100%");
                a.containerSizeTimeout = setTimeout(function() {
                    a.container.css({
                        width: "100%",
                        height: "100%"
                    });
                    a.setControlsSize()
                }, 500);
                if (a.media.pluginType === "native") a.$media.width("100%").height("100%");
                else {
                    a.container.find(".mejs-shim").width("100%").height("100%");
                    a.media.setVideoSize(f(window).width(),
                        f(window).height())
                }
                a.layers.children("div").width("100%").height("100%");
                a.fullscreenBtn && a.fullscreenBtn.removeClass("mejs-fullscreen").addClass("mejs-unfullscreen");
                a.setControlsSize();
                a.isFullScreen = true
            }
        },
        exitFullScreen: function() {
            clearTimeout(this.containerSizeTimeout);
            if (this.media.pluginType !== "native" && mejs.MediaFeatures.isFirefox) this.media.setFullscreen(false);
            else {
                if (mejs.MediaFeatures.hasTrueNativeFullScreen && (mejs.MediaFeatures.isFullScreen() || this.isFullScreen)) mejs.MediaFeatures.cancelFullScreen();
                f(document.documentElement).removeClass("mejs-fullscreen");
                this.container.removeClass("mejs-container-fullscreen").width(normalWidth).height(normalHeight);
                if (this.media.pluginType === "native") this.$media.width(normalWidth).height(normalHeight);
                else {
                    this.container.find(".mejs-shim").width(normalWidth).height(normalHeight);
                    this.media.setVideoSize(normalWidth, normalHeight)
                }
                this.layers.children("div").width(normalWidth).height(normalHeight);
                this.fullscreenBtn.removeClass("mejs-unfullscreen").addClass("mejs-fullscreen");
                this.setControlsSize();
                this.isFullScreen = false
            }
        }
    })
})(mejs.$);
(function(f) {
    f.extend(mejs.MepDefaults, {
        startLanguage: "",
        tracksText: mejs.i18n.t("Captions/Subtitles"),
        hideCaptionsButtonWhenEmpty: true,
        toggleCaptionsButtonWhenOnlyOne: false,
        slidesSelector: ""
    });
    f.extend(MediaElementPlayer.prototype, {
        hasChapters: false,
        buildtracks: function(a, b, c, e) {
            if (a.tracks.length != 0) {
                var d;
                if (this.domNode.textTracks)
                    for (d = this.domNode.textTracks.length - 1; d >= 0; d--) this.domNode.textTracks[d].mode = "hidden";
                a.chapters = f('<div class="mejs-chapters mejs-layer"></div>').prependTo(c).hide();
                a.captions =
                    f('<div class="mejs-captions-layer mejs-layer"><div class="mejs-captions-position mejs-captions-position-hover"><span class="mejs-captions-text"></span></div></div>').prependTo(c).hide();
                a.captionsText = a.captions.find(".mejs-captions-text");
                a.captionsButton = f('<div class="mejs-button mejs-captions-button"><button type="button" aria-controls="' + this.id + '" title="' + this.options.tracksText + '" aria-label="' + this.options.tracksText + '"></button><div class="mejs-captions-selector"><ul><li><input type="radio" name="' +
                    a.id + '_captions" id="' + a.id + '_captions_none" value="none" checked="checked" /><label for="' + a.id + '_captions_none">' + mejs.i18n.t("None") + "</label></li></ul></div></div>").appendTo(b);
                for (d = b = 0; d < a.tracks.length; d++) a.tracks[d].kind == "subtitles" && b++;
                this.options.toggleCaptionsButtonWhenOnlyOne && b == 1 ? a.captionsButton.on("click", function() {
                    a.setTrack(a.selectedTrack == null ? a.tracks[0].srclang : "none")
                }) : a.captionsButton.hover(function() {
                        f(this).find(".mejs-captions-selector").css("visibility", "visible")
                    },
                    function() {
                        f(this).find(".mejs-captions-selector").css("visibility", "hidden")
                    }).on("click", "input[type=radio]", function() {
                    lang = this.value;
                    a.setTrack(lang)
                });
                a.options.alwaysShowControls ? a.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover") : a.container.bind("controlsshown", function() {
                    a.container.find(".mejs-captions-position").addClass("mejs-captions-position-hover")
                }).bind("controlshidden", function() {
                    e.paused || a.container.find(".mejs-captions-position").removeClass("mejs-captions-position-hover")
                });
                a.trackToLoad = -1;
                a.selectedTrack = null;
                a.isLoadingTrack = false;
                for (d = 0; d < a.tracks.length; d++) a.tracks[d].kind == "subtitles" && a.addTrackButton(a.tracks[d].srclang, a.tracks[d].label);
                a.loadNextTrack();
                e.addEventListener("timeupdate", function() {
                    a.displayCaptions()
                }, false);
                if (a.options.slidesSelector != "") {
                    a.slidesContainer = f(a.options.slidesSelector);
                    e.addEventListener("timeupdate", function() {
                        a.displaySlides()
                    }, false)
                }
                e.addEventListener("loadedmetadata", function() {
                    a.displayChapters()
                }, false);
                a.container.hover(function() {
                    if (a.hasChapters) {
                        a.chapters.css("visibility",
                            "visible");
                        a.chapters.fadeIn(200).height(a.chapters.find(".mejs-chapter").outerHeight())
                    }
                }, function() {
                    a.hasChapters && !e.paused && a.chapters.fadeOut(200, function() {
                        f(this).css("visibility", "hidden");
                        f(this).css("display", "block")
                    })
                });
                a.node.getAttribute("autoplay") !== null && a.chapters.css("visibility", "hidden")
            }
        },
        setTrack: function(a) {
            var b;
            if (a == "none") {
                this.selectedTrack = null;
                this.captionsButton.removeClass("mejs-captions-enabled")
            } else
                for (b = 0; b < this.tracks.length; b++)
                    if (this.tracks[b].srclang == a) {
                        this.selectedTrack ==
                            null && this.captionsButton.addClass("mejs-captions-enabled");
                        this.selectedTrack = this.tracks[b];
                        this.captions.attr("lang", this.selectedTrack.srclang);
                        this.displayCaptions();
                        break
                    }
        },
        loadNextTrack: function() {
            this.trackToLoad++;
            if (this.trackToLoad < this.tracks.length) {
                this.isLoadingTrack = true;
                this.loadTrack(this.trackToLoad)
            } else {
                this.isLoadingTrack = false;
                this.checkForTracks()
            }
        },
        loadTrack: function(a) {
            var b = this,
                c = b.tracks[a];
            f.ajax({
                url: c.src,
                dataType: "text",
                success: function(e) {
                    c.entries = typeof e == "string" &&
                        /<tt\s+xml/ig.exec(e) ? mejs.TrackFormatParser.dfxp.parse(e) : mejs.TrackFormatParser.webvvt.parse(e);
                    c.isLoaded = true;
                    b.enableTrackButton(c.srclang, c.label);
                    b.loadNextTrack();
                    c.kind == "chapters" && b.media.addEventListener("play", function() {
                        b.media.duration > 0 && b.displayChapters(c)
                    }, false);
                    c.kind == "slides" && b.setupSlides(c)
                },
                error: function() {
                    b.loadNextTrack()
                }
            })
        },
        enableTrackButton: function(a, b) {
            if (b === "") b = mejs.language.codes[a] || a;
            this.captionsButton.find("input[value=" + a + "]").prop("disabled", false).siblings("label").html(b);
            this.options.startLanguage == a && f("#" + this.id + "_captions_" + a).click();
            this.adjustLanguageBox()
        },
        addTrackButton: function(a, b) {
            if (b === "") b = mejs.language.codes[a] || a;
            this.captionsButton.find("ul").append(f('<li><input type="radio" name="' + this.id + '_captions" id="' + this.id + "_captions_" + a + '" value="' + a + '" disabled="disabled" /><label for="' + this.id + "_captions_" + a + '">' + b + " (loading)</label></li>"));
            this.adjustLanguageBox();
            this.container.find(".mejs-captions-translations option[value=" + a + "]").remove()
        },
        adjustLanguageBox: function() {
            this.captionsButton.find(".mejs-captions-selector").height(this.captionsButton.find(".mejs-captions-selector ul").outerHeight(true) + this.captionsButton.find(".mejs-captions-translations").outerHeight(true))
        },
        checkForTracks: function() {
            var a = false;
            if (this.options.hideCaptionsButtonWhenEmpty) {
                for (i = 0; i < this.tracks.length; i++)
                    if (this.tracks[i].kind == "subtitles") {
                        a = true;
                        break
                    }
                if (!a) {
                    this.captionsButton.hide();
                    this.setControlsSize()
                }
            }
        },
        displayCaptions: function() {
            if (typeof this.tracks !=
                "undefined") {
                var a, b = this.selectedTrack;
                if (b != null && b.isLoaded)
                    for (a = 0; a < b.entries.times.length; a++)
                        if (this.media.currentTime >= b.entries.times[a].start && this.media.currentTime <= b.entries.times[a].stop) {
                            this.captionsText.html(b.entries.text[a]);
                            this.captions.show().height(0);
                            return
                        }
                this.captions.hide()
            }
        },
        setupSlides: function(a) {
            this.slides = a;
            this.slides.entries.imgs = [this.slides.entries.text.length];
            this.showSlide(0)
        },
        showSlide: function(a) {
            if (!(typeof this.tracks == "undefined" || typeof this.slidesContainer ==
                    "undefined")) {
                var b = this,
                    c = b.slides.entries.text[a],
                    e = b.slides.entries.imgs[a];
                if (typeof e == "undefined" || typeof e.fadeIn == "undefined") b.slides.entries.imgs[a] = e = f('<img src="' + c + '">').on("load", function() {
                    e.appendTo(b.slidesContainer).hide().fadeIn().siblings(":visible").fadeOut()
                });
                else !e.is(":visible") && !e.is(":animated") && e.fadeIn().siblings(":visible").fadeOut()
            }
        },
        displaySlides: function() {
            if (typeof this.slides != "undefined") {
                var a = this.slides,
                    b;
                for (b = 0; b < a.entries.times.length; b++)
                    if (this.media.currentTime >=
                        a.entries.times[b].start && this.media.currentTime <= a.entries.times[b].stop) {
                        this.showSlide(b);
                        break
                    }
            }
        },
        displayChapters: function() {
            var a;
            for (a = 0; a < this.tracks.length; a++)
                if (this.tracks[a].kind == "chapters" && this.tracks[a].isLoaded) {
                    this.drawChapters(this.tracks[a]);
                    this.hasChapters = true;
                    break
                }
        },
        drawChapters: function(a) {
            var b = this,
                c, e, d = e = 0;
            b.chapters.empty();
            for (c = 0; c < a.entries.times.length; c++) {
                e = a.entries.times[c].stop - a.entries.times[c].start;
                e = Math.floor(e / b.media.duration * 100);
                if (e + d > 100 || c == a.entries.times.length -
                    1 && e + d < 100) e = 100 - d;
                b.chapters.append(f('<div class="mejs-chapter" rel="' + a.entries.times[c].start + '" style="left: ' + d.toString() + "%;width: " + e.toString() + '%;"><div class="mejs-chapter-block' + (c == a.entries.times.length - 1 ? " mejs-chapter-block-last" : "") + '"><span class="ch-title">' + a.entries.text[c] + '</span><span class="ch-time">' + mejs.Utility.secondsToTimeCode(a.entries.times[c].start) + "&ndash;" + mejs.Utility.secondsToTimeCode(a.entries.times[c].stop) + "</span></div></div>"));
                d += e
            }
            b.chapters.find("div.mejs-chapter").click(function() {
                b.media.setCurrentTime(parseFloat(f(this).attr("rel")));
                b.media.paused && b.media.play()
            });
            b.chapters.show()
        }
    });
    mejs.language = {
        codes: {
            af: "Afrikaans",
            sq: "Albanian",
            ar: "Arabic",
            be: "Belarusian",
            bg: "Bulgarian",
            ca: "Catalan",
            zh: "Chinese",
            "zh-cn": "Chinese Simplified",
            "zh-tw": "Chinese Traditional",
            hr: "Croatian",
            cs: "Czech",
            da: "Danish",
            nl: "Dutch",
            en: "English",
            et: "Estonian",
            tl: "Filipino",
            fi: "Finnish",
            fr: "French",
            gl: "Galician",
            de: "German",
            el: "Greek",
            ht: "Haitian Creole",
            iw: "Hebrew",
            hi: "Hindi",
            hu: "Hungarian",
            is: "Icelandic",
            id: "Indonesian",
            ga: "Irish",
            it: "Italian",
            ja: "Japanese",
            ko: "Korean",
            lv: "Latvian",
            lt: "Lithuanian",
            mk: "Macedonian",
            ms: "Malay",
            mt: "Maltese",
            no: "Norwegian",
            fa: "Persian",
            pl: "Polish",
            pt: "Portuguese",
            ro: "Romanian",
            ru: "Russian",
            sr: "Serbian",
            sk: "Slovak",
            sl: "Slovenian",
            es: "Spanish",
            sw: "Swahili",
            sv: "Swedish",
            tl: "Tagalog",
            th: "Thai",
            tr: "Turkish",
            uk: "Ukrainian",
            vi: "Vietnamese",
            cy: "Welsh",
            yi: "Yiddish"
        }
    };
    mejs.TrackFormatParser = {
        webvvt: {
            pattern_identifier: /^([a-zA-z]+-)?[0-9]+$/,
            pattern_timecode: /^([0-9]{2}:[0-9]{2}:[0-9]{2}([,.][0-9]{1,3})?) --\> ([0-9]{2}:[0-9]{2}:[0-9]{2}([,.][0-9]{3})?)(.*)$/,
            parse: function(a) {
                var b = 0;
                a = mejs.TrackFormatParser.split2(a, /\r?\n/);
                for (var c = {
                        text: [],
                        times: []
                    }, e, d; b < a.length; b++)
                    if (this.pattern_identifier.exec(a[b])) {
                        b++;
                        if ((e = this.pattern_timecode.exec(a[b])) && b < a.length) {
                            b++;
                            d = a[b];
                            for (b++; a[b] !== "" && b < a.length;) {
                                d = d + "\n" + a[b];
                                b++
                            }
                            d = f.trim(d).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig, "<a href='$1' target='_blank'>$1</a>");
                            c.text.push(d);
                            c.times.push({
                                start: mejs.Utility.convertSMPTEtoSeconds(e[1]) == 0 ? 0.2 : mejs.Utility.convertSMPTEtoSeconds(e[1]),
                                stop: mejs.Utility.convertSMPTEtoSeconds(e[3]),
                                settings: e[5]
                            })
                        }
                    }
                return c
            }
        },
        dfxp: {
            parse: function(a) {
                a = f(a).filter("tt");
                var b = 0;
                b = a.children("div").eq(0);
                var c = b.find("p");
                b = a.find("#" + b.attr("style"));
                var e, d;
                a = {
                    text: [],
                    times: []
                };
                if (b.length) {
                    d = b.removeAttr("id").get(0).attributes;
                    if (d.length) {
                        e = {};
                        for (b = 0; b < d.length; b++) e[d[b].name.split(":")[1]] = d[b].value
                    }
                }
                for (b = 0; b < c.length; b++) {
                    var g;
                    d = {
                        start: null,
                        stop: null,
                        style: null
                    };
                    if (c.eq(b).attr("begin")) d.start = mejs.Utility.convertSMPTEtoSeconds(c.eq(b).attr("begin"));
                    if (!d.start && c.eq(b - 1).attr("end")) d.start = mejs.Utility.convertSMPTEtoSeconds(c.eq(b - 1).attr("end"));
                    if (c.eq(b).attr("end")) d.stop = mejs.Utility.convertSMPTEtoSeconds(c.eq(b).attr("end"));
                    if (!d.stop && c.eq(b + 1).attr("begin")) d.stop = mejs.Utility.convertSMPTEtoSeconds(c.eq(b + 1).attr("begin"));
                    if (e) {
                        g = "";
                        for (var k in e) g += k + ":" + e[k] + ";"
                    }
                    if (g) d.style = g;
                    if (d.start == 0) d.start = 0.2;
                    a.times.push(d);
                    d = f.trim(c.eq(b).html()).replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig,
                        "<a href='$1' target='_blank'>$1</a>");
                    a.text.push(d);
                    if (a.times.start == 0) a.times.start = 2
                }
                return a
            }
        },
        split2: function(a, b) {
            return a.split(b)
        }
    };
    if ("x\n\ny".split(/\n/gi).length != 3) mejs.TrackFormatParser.split2 = function(a, b) {
        var c = [],
            e = "",
            d;
        for (d = 0; d < a.length; d++) {
            e += a.substring(d, d + 1);
            if (b.test(e)) {
                c.push(e.replace(b, ""));
                e = ""
            }
        }
        c.push(e);
        return c
    }
})(mejs.$);
(function(f) {
    f.extend(mejs.MepDefaults, {
        contextMenuItems: [{
            render: function(a) {
                if (typeof a.enterFullScreen == "undefined") return null;
                return a.isFullScreen ? mejs.i18n.t("Turn off Fullscreen") : mejs.i18n.t("Go Fullscreen")
            },
            click: function(a) {
                a.isFullScreen ? a.exitFullScreen() : a.enterFullScreen()
            }
        }, {
            render: function(a) {
                return a.media.muted ? mejs.i18n.t("Unmute") : mejs.i18n.t("Mute")
            },
            click: function(a) {
                a.media.muted ? a.setMuted(false) : a.setMuted(true)
            }
        }, {
            isSeparator: true
        }, {
            render: function() {
                return mejs.i18n.t("Download Video")
            },
            click: function(a) {
                window.location.href = a.media.currentSrc
            }
        }]
    });
    f.extend(MediaElementPlayer.prototype, {
        buildcontextmenu: function(a) {
            a.contextMenu = f('<div class="mejs-contextmenu"></div>').appendTo(f("body")).hide();
            a.container.bind("contextmenu", function(b) {
                if (a.isContextMenuEnabled) {
                    b.preventDefault();
                    a.renderContextMenu(b.clientX - 1, b.clientY - 1);
                    return false
                }
            });
            a.container.bind("click", function() {
                a.contextMenu.hide()
            });
            a.contextMenu.bind("mouseleave", function() {
                a.startContextMenuTimer()
            })
        },
        cleancontextmenu: function(a) {
            a.contextMenu.remove()
        },
        isContextMenuEnabled: true,
        enableContextMenu: function() {
            this.isContextMenuEnabled = true
        },
        disableContextMenu: function() {
            this.isContextMenuEnabled = false
        },
        contextMenuTimeout: null,
        startContextMenuTimer: function() {
            var a = this;
            a.killContextMenuTimer();
            a.contextMenuTimer = setTimeout(function() {
                a.hideContextMenu();
                a.killContextMenuTimer()
            }, 750)
        },
        killContextMenuTimer: function() {
            var a = this.contextMenuTimer;
            if (a != null) {
                clearTimeout(a);
                delete a
            }
        },
        hideContextMenu: function() {
            this.contextMenu.hide()
        },
        renderContextMenu: function(a,
            b) {
            for (var c = this, e = "", d = c.options.contextMenuItems, g = 0, k = d.length; g < k; g++)
                if (d[g].isSeparator) e += '<div class="mejs-contextmenu-separator"></div>';
                else {
                    var j = d[g].render(c);
                    if (j != null) e += '<div class="mejs-contextmenu-item" data-itemindex="' + g + '" id="element-' + Math.random() * 1E6 + '">' + j + "</div>"
                }
            c.contextMenu.empty().append(f(e)).css({
                top: b,
                left: a
            }).show();
            c.contextMenu.find(".mejs-contextmenu-item").each(function() {
                var m = f(this),
                    q = parseInt(m.data("itemindex"), 10),
                    p = c.options.contextMenuItems[q];
                typeof p.show !=
                    "undefined" && p.show(m, c);
                m.click(function() {
                    typeof p.click != "undefined" && p.click(c);
                    c.contextMenu.hide()
                })
            });
            setTimeout(function() {
                c.killControlsTimer("rev3")
            }, 100)
        }
    })
})(mejs.$);
(function(f) {
    f.extend(mejs.MepDefaults, {
        postrollCloseText: mejs.i18n.t("Close")
    });
    f.extend(MediaElementPlayer.prototype, {
        buildpostroll: function(a, b, c) {
            var e = this.container.find('link[rel="postroll"]').attr("href");
            if (typeof e !== "undefined") {
                a.postroll = f('<div class="mejs-postroll-layer mejs-layer"><a class="mejs-postroll-close" onclick="$(this).parent().hide();return false;">' + this.options.postrollCloseText + '</a><div class="mejs-postroll-layer-content"></div></div>').prependTo(c).hide();
                this.media.addEventListener("ended",
                    function() {
                        f.ajax({
                            dataType: "html",
                            url: e,
                            success: function(d) {
                                c.find(".mejs-postroll-layer-content").html(d)
                            }
                        });
                        a.postroll.show()
                    }, false)
            }
        }
    })
})(mejs.$);

/*! modernizr 3.2.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-csstransitions-matchmedia-mediaqueries-domprefixes-prefixed-prefixes-setclasses-shiv-testallprops-testprop-teststyles !*/
! function(e, t, n) {
    function r(e, t) {
        return typeof e === t
    }

    function o() {
        var e, t, n, o, a, i, s;
        for (var l in C)
            if (C.hasOwnProperty(l)) {
                if (e = [], t = C[l], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
                    for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
                for (o = r(t.fn, "function") ? t.fn() : t.fn, a = 0; a < e.length; a++) i = e[a], s = i.split("."), 1 === s.length ? Modernizr[s[0]] = o : (!Modernizr[s[0]] || Modernizr[s[0]] instanceof Boolean || (Modernizr[s[0]] = new Boolean(Modernizr[s[0]])), Modernizr[s[0]][s[1]] = o), y.push((o ? "" : "no-") + s.join("-"))
            }
    }

    function a(e) {
        var t = b.className,
            n = Modernizr._config.classPrefix || "";
        if (x && (t = t.baseVal), Modernizr._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
            t = t.replace(r, "$1" + n + "js$2")
        }
        Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), x ? b.className.baseVal = t : b.className = t)
    }

    function i(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, t, n) {
            return t + n.toUpperCase()
        }).replace(/^-/, "")
    }

    function s(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function l() {
        return "function" != typeof t.createElement ? t.createElement(arguments[0]) : x ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
    }

    function u() {
        var e = t.body;
        return e || (e = l(x ? "svg" : "body"), e.fake = !0), e
    }

    function c(e, n, r, o) {
        var a, i, s, c, f = "modernizr",
            d = l("div"),
            p = u();
        if (parseInt(r, 10))
            for (; r--;) s = l("div"), s.id = o ? o[r] : f + (r + 1), d.appendChild(s);
        return a = l("style"), a.type = "text/css", a.id = "s" + f, (p.fake ? p : d).appendChild(a), p.appendChild(d), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(t.createTextNode(e)), d.id = f, p.fake && (p.style.background = "", p.style.overflow = "hidden", c = b.style.overflow, b.style.overflow = "hidden", b.appendChild(p)), i = n(d, e), p.fake ? (p.parentNode.removeChild(p), b.style.overflow = c, b.offsetHeight) : d.parentNode.removeChild(d), !!i
    }

    function f(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }

    function d(e, t, n) {
        var o;
        for (var a in e)
            if (e[a] in t) return n === !1 ? e[a] : (o = t[e[a]], r(o, "function") ? f(o, n || t) : o);
        return !1
    }

    function p(e) {
        return e.replace(/([A-Z])/g, function(e, t) {
            return "-" + t.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function m(t, r) {
        var o = t.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; o--;)
                if (e.CSS.supports(p(t[o]), r)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in e) {
            for (var a = []; o--;) a.push("(" + p(t[o]) + ":" + r + ")");
            return a = a.join(" or "), c("@supports (" + a + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == getComputedStyle(e, null).position
            })
        }
        return n
    }

    function h(e, t, o, a) {
        function u() {
            f && (delete k.style, delete k.modElem)
        }
        if (a = r(a, "undefined") ? !1 : a, !r(o, "undefined")) {
            var c = m(e, o);
            if (!r(c, "undefined")) return c
        }
        for (var f, d, p, h, v, g = ["modernizr", "tspan"]; !k.style;) f = !0, k.modElem = l(g.shift()), k.style = k.modElem.style;
        for (p = e.length, d = 0; p > d; d++)
            if (h = e[d], v = k.style[h], s(h, "-") && (h = i(h)), k.style[h] !== n) {
                if (a || r(o, "undefined")) return u(), "pfx" == t ? h : !0;
                try {
                    k.style[h] = o
                } catch (y) {}
                if (k.style[h] != v) return u(), "pfx" == t ? h : !0
            }
        return u(), !1
    }

    function v(e, t, n, o, a) {
        var i = e.charAt(0).toUpperCase() + e.slice(1),
            s = (e + " " + N.join(i + " ") + i).split(" ");
        return r(t, "string") || r(t, "undefined") ? h(s, t, o, a) : (s = (e + " " + w.join(i + " ") + i).split(" "), d(s, t, n))
    }

    function g(e, t, r) {
        return v(e, n, n, t, r)
    }
    var y = [],
        C = [],
        S = {
            _version: "3.2.0",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(e, t) {
                var n = this;
                setTimeout(function() {
                    t(n[e])
                }, 0)
            },
            addTest: function(e, t, n) {
                C.push({
                    name: e,
                    fn: t,
                    options: n
                })
            },
            addAsyncTest: function(e) {
                C.push({
                    name: null,
                    fn: e
                })
            }
        },
        Modernizr = function() {};
    Modernizr.prototype = S, Modernizr = new Modernizr;
    var E = S._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : [];
    S._prefixes = E;
    var b = t.documentElement,
        x = "svg" === b.nodeName.toLowerCase();
    x || ! function(e, t) {
        function n(e, t) {
            var n = e.createElement("p"),
                r = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>", r.insertBefore(n.lastChild, r.firstChild)
        }

        function r() {
            var e = C.elements;
            return "string" == typeof e ? e.split(" ") : e
        }

        function o(e, t) {
            var n = C.elements;
            "string" != typeof n && (n = n.join(" ")), "string" != typeof e && (e = e.join(" ")), C.elements = n + " " + e, u(t)
        }

        function a(e) {
            var t = y[e[v]];
            return t || (t = {}, g++, e[v] = g, y[g] = t), t
        }

        function i(e, n, r) {
            if (n || (n = t), f) return n.createElement(e);
            r || (r = a(n));
            var o;
            return o = r.cache[e] ? r.cache[e].cloneNode() : h.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e), !o.canHaveChildren || m.test(e) || o.tagUrn ? o : r.frag.appendChild(o)
        }

        function s(e, n) {
            if (e || (e = t), f) return e.createDocumentFragment();
            n = n || a(e);
            for (var o = n.frag.cloneNode(), i = 0, s = r(), l = s.length; l > i; i++) o.createElement(s[i]);
            return o
        }

        function l(e, t) {
            t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(n) {
                return C.shivMethods ? i(n, e, t) : t.createElem(n)
            }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + r().join().replace(/[\w\-:]+/g, function(e) {
                return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
            }) + ");return n}")(C, t.frag)
        }

        function u(e) {
            e || (e = t);
            var r = a(e);
            return !C.shivCSS || c || r.hasCSS || (r.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), f || l(e, r), e
        }
        var c, f, d = "3.7.3",
            p = e.html5 || {},
            m = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
            h = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
            v = "_html5shiv",
            g = 0,
            y = {};
        ! function() {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>", c = "hidden" in e, f = 1 == e.childNodes.length || function() {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                }()
            } catch (n) {
                c = !0, f = !0
            }
        }();
        var C = {
            elements: p.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",
            version: d,
            shivCSS: p.shivCSS !== !1,
            supportsUnknownElements: f,
            shivMethods: p.shivMethods !== !1,
            type: "default",
            shivDocument: u,
            createElement: i,
            createDocumentFragment: s,
            addElements: o
        };
        e.html5 = C, u(t), "object" == typeof module && module.exports && (module.exports = C)
    }("undefined" != typeof e ? e : this, t);
    var _ = "Moz O ms Webkit",
        w = S._config.usePrefixes ? _.toLowerCase().split(" ") : [];
    S._domPrefixes = w;
    var N = S._config.usePrefixes ? _.split(" ") : [];
    S._cssomPrefixes = N;
    var z = function(t) {
        var r, o = E.length,
            a = e.CSSRule;
        if ("undefined" == typeof a) return n;
        if (!t) return !1;
        if (t = t.replace(/^@/, ""), r = t.replace(/-/g, "_").toUpperCase() + "_RULE", r in a) return "@" + t;
        for (var i = 0; o > i; i++) {
            var s = E[i],
                l = s.toUpperCase() + "_" + r;
            if (l in a) return "@-" + s.toLowerCase() + "-" + t
        }
        return !1
    };
    S.atRule = z;
    var T = (S.testStyles = c, function() {
        var t = e.matchMedia || e.msMatchMedia;
        return t ? function(e) {
            var n = t(e);
            return n && n.matches || !1
        } : function(t) {
            var n = !1;
            return c("@media " + t + " { #modernizr { position: absolute; } }", function(t) {
                n = "absolute" == (e.getComputedStyle ? e.getComputedStyle(t, null) : t.currentStyle).position
            }), n
        }
    }());
    S.mq = T, Modernizr.addTest("mediaqueries", T("only all"));
    var j = {
        elem: l("modernizr")
    };
    Modernizr._q.push(function() {
        delete j.elem
    });
    var k = {
        style: j.elem.style
    };
    Modernizr._q.unshift(function() {
        delete k.style
    });
    S.testProp = function(e, t, r) {
        return h([e], n, t, r)
    };
    S.testAllProps = v;
    var M = S.prefixed = function(e, t, n) {
        return 0 === e.indexOf("@") ? z(e) : (-1 != e.indexOf("-") && (e = i(e)), t ? v(e, t, n) : v(e, "pfx"))
    };
    Modernizr.addTest("matchmedia", !!M("matchMedia", e)), S.testAllProps = g, Modernizr.addTest("csstransitions", g("transition", "all", !0)), o(), a(y), delete S.addTest, delete S.addAsyncTest;
    for (var P = 0; P < Modernizr._q.length; P++) Modernizr._q[P]();
    e.Modernizr = Modernizr
}(window, document);

/* Owl carousel.min
 */
! function(a, b, c, d) {
    function e(b, c) {
        this.settings = null, this.options = a.extend({}, e.Defaults, c), this.$element = a(b), this.drag = a.extend({}, m), this.state = a.extend({}, n), this.e = a.extend({}, o), this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._invalidated = {}, this._pipe = [], a.each(e.Plugins, a.proxy(function(a, b) {
            this._plugins[a[0].toLowerCase() + a.slice(1)] = new b(this)
        }, this)), a.each(e.Pipe, a.proxy(function(b, c) {
            this._pipe.push({
                filter: c.filter,
                run: a.proxy(c.run, this)
            })
        }, this)), this.setup(), this.initialize()
    }

    function f(a) {
        if (a.touches !== d) return {
            x: a.touches[0].pageX,
            y: a.touches[0].pageY
        };
        if (a.touches === d) {
            if (a.pageX !== d) return {
                x: a.pageX,
                y: a.pageY
            };
            if (a.pageX === d) return {
                x: a.clientX,
                y: a.clientY
            }
        }
    }

    function g(a) {
        var b, d, e = c.createElement("div"),
            f = a;
        for (b in f)
            if (d = f[b], "undefined" != typeof e.style[d]) return e = null, [d, b];
        return [!1]
    }

    function h() {
        return g(["transition", "WebkitTransition", "MozTransition", "OTransition"])[1]
    }

    function i() {
        return g(["transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform"])[0]
    }

    function j() {
        return g(["perspective", "webkitPerspective", "MozPerspective", "OPerspective", "MsPerspective"])[0]
    }

    function k() {
        return "ontouchstart" in b || !!navigator.msMaxTouchPoints
    }

    function l() {
        return b.navigator.msPointerEnabled
    }
    var m, n, o;
    m = {
        start: 0,
        startX: 0,
        startY: 0,
        current: 0,
        currentX: 0,
        currentY: 0,
        offsetX: 0,
        offsetY: 0,
        distance: null,
        startTime: 0,
        endTime: 0,
        updatedX: 0,
        targetEl: null
    }, n = {
        isTouch: !1,
        isScrolling: !1,
        isSwiping: !1,
        direction: !1,
        inMotion: !1
    }, o = {
        _onDragStart: null,
        _onDragMove: null,
        _onDragEnd: null,
        _transitionEnd: null,
        _resizer: null,
        _responsiveCall: null,
        _goToLoop: null,
        _checkVisibile: null
    }, e.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: b,
        responsiveClass: !1,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        themeClass: "owl-theme",
        baseClass: "owl-carousel",
        itemClass: "owl-item",
        centerClass: "center",
        activeClass: "active"
    }, e.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    }, e.Plugins = {}, e.Pipe = [{
        filter: ["width", "items", "settings"],
        run: function(a) {
            a.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var a = this._clones,
                b = this.$stage.children(".cloned");
            (b.length !== a.length || !this.settings.loop && a.length > 0) && (this.$stage.children(".cloned").remove(), this._clones = [])
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var a, b, c = this._clones,
                d = this._items,
                e = this.settings.loop ? c.length - Math.max(2 * this.settings.items, 4) : 0;
            for (a = 0, b = Math.abs(e / 2); b > a; a++) e > 0 ? (this.$stage.children().eq(d.length + c.length - 1).remove(), c.pop(), this.$stage.children().eq(0).remove(), c.pop()) : (c.push(c.length / 2), this.$stage.append(d[c[c.length - 1]].clone().addClass("cloned")), c.push(d.length - 1 - (c.length - 1) / 2), this.$stage.prepend(d[c[c.length - 1]].clone().addClass("cloned")))
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var a, b, c, d = this.settings.rtl ? 1 : -1,
                e = (this.width() / this.settings.items).toFixed(3),
                f = 0;
            for (this._coordinates = [], b = 0, c = this._clones.length + this._items.length; c > b; b++) a = this._mergers[this.relative(b)], a = this.settings.mergeFit && Math.min(a, this.settings.items) || a, f += (this.settings.autoWidth ? this._items[this.relative(b)].width() + this.settings.margin : e * a) * d, this._coordinates.push(f)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var b, c, d = (this.width() / this.settings.items).toFixed(3),
                e = {
                    width: Math.abs(this._coordinates[this._coordinates.length - 1]) + 2 * this.settings.stagePadding,
                    "padding-left": this.settings.stagePadding || "",
                    "padding-right": this.settings.stagePadding || ""
                };
            if (this.$stage.css(e), e = {
                    width: this.settings.autoWidth ? "auto" : d - this.settings.margin
                }, e[this.settings.rtl ? "margin-left" : "margin-right"] = this.settings.margin, !this.settings.autoWidth && a.grep(this._mergers, function(a) {
                    return a > 1
                }).length > 0)
                for (b = 0, c = this._coordinates.length; c > b; b++) e.width = Math.abs(this._coordinates[b]) - Math.abs(this._coordinates[b - 1] || 0) - this.settings.margin, this.$stage.children().eq(b).css(e);
            else this.$stage.children().css(e)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(a) {
            a.current && this.reset(this.$stage.children().index(a.current))
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            var a, b, c, d, e = this.settings.rtl ? 1 : -1,
                f = 2 * this.settings.stagePadding,
                g = this.coordinates(this.current()) + f,
                h = g + this.width() * e,
                i = [];
            for (c = 0, d = this._coordinates.length; d > c; c++) a = this._coordinates[c - 1] || 0, b = Math.abs(this._coordinates[c]) + f * e, (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
            this.$stage.children("." + this.settings.activeClass).removeClass(this.settings.activeClass), this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass(this.settings.activeClass), this.settings.center && (this.$stage.children("." + this.settings.centerClass).removeClass(this.settings.centerClass), this.$stage.children().eq(this.current()).addClass(this.settings.centerClass))
        }
    }], e.prototype.initialize = function() {
        if (this.trigger("initialize"), this.$element.addClass(this.settings.baseClass).addClass(this.settings.themeClass).toggleClass("owl-rtl", this.settings.rtl), this.browserSupport(), this.settings.autoWidth && this.state.imagesLoaded !== !0) {
            var b, c, e;
            if (b = this.$element.find("img"), c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d, e = this.$element.children(c).width(), b.length && 0 >= e) return this.preloadAutoWidthImages(b), !1
        }
        this.$element.addClass("owl-loading"), this.$stage = a("<" + this.settings.stageElement + ' class="owl-stage"/>').wrap('<div class="owl-stage-outer">'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this._width = this.$element.width(), this.refresh(), this.$element.removeClass("owl-loading").addClass("owl-loaded"), this.eventsCall(), this.internalEvents(), this.addTriggerableEvents(), this.trigger("initialized")
    }, e.prototype.setup = function() {
        var b = this.viewport(),
            c = this.options.responsive,
            d = -1,
            e = null;
        c ? (a.each(c, function(a) {
            b >= a && a > d && (d = Number(a))
        }), e = a.extend({}, this.options, c[d]), delete e.responsive, e.responsiveClass && this.$element.attr("class", function(a, b) {
            return b.replace(/\b owl-responsive-\S+/g, "")
        }).addClass("owl-responsive-" + d)) : e = a.extend({}, this.options), (null === this.settings || this._breakpoint !== d) && (this.trigger("change", {
            property: {
                name: "settings",
                value: e
            }
        }), this._breakpoint = d, this.settings = e, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        }))
    }, e.prototype.optionsLogic = function() {
        this.$element.toggleClass("owl-center", this.settings.center), this.settings.loop && this._items.length < this.settings.items && (this.settings.loop = !1), this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, e.prototype.prepare = function(b) {
        var c = this.trigger("prepare", {
            content: b
        });
        return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.settings.itemClass).append(b)), this.trigger("prepared", {
            content: c.data
        }), c.data
    }, e.prototype.update = function() {
        for (var b = 0, c = this._pipe.length, d = a.proxy(function(a) {
                return this[a]
            }, this._invalidated), e = {}; c > b;)(this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
        this._invalidated = {}
    }, e.prototype.width = function(a) {
        switch (a = a || e.Width.Default) {
            case e.Width.Inner:
            case e.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, e.prototype.refresh = function() {
        if (0 === this._items.length) return !1;
        (new Date).getTime();
        this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$stage.addClass("owl-refresh"), this.update(), this.$stage.removeClass("owl-refresh"), this.state.orientation = b.orientation, this.watchVisibility(), this.trigger("refreshed")
    }, e.prototype.eventsCall = function() {
        this.e._onDragStart = a.proxy(function(a) {
            this.onDragStart(a)
        }, this), this.e._onDragMove = a.proxy(function(a) {
            this.onDragMove(a)
        }, this), this.e._onDragEnd = a.proxy(function(a) {
            this.onDragEnd(a)
        }, this), this.e._onResize = a.proxy(function(a) {
            this.onResize(a)
        }, this), this.e._transitionEnd = a.proxy(function(a) {
            this.transitionEnd(a)
        }, this), this.e._preventClick = a.proxy(function(a) {
            this.preventClick(a)
        }, this)
    }, e.prototype.onThrottledResize = function() {
        b.clearTimeout(this.resizeTimer), this.resizeTimer = b.setTimeout(this.e._onResize, this.settings.responsiveRefreshRate)
    }, e.prototype.onResize = function() {
        return this._items.length ? this._width === this.$element.width() ? !1 : this.trigger("resize").isDefaultPrevented() ? !1 : (this._width = this.$element.width(), this.invalidate("width"), this.refresh(), void this.trigger("resized")) : !1
    }, e.prototype.eventsRouter = function(a) {
        var b = a.type;
        "mousedown" === b || "touchstart" === b ? this.onDragStart(a) : "mousemove" === b || "touchmove" === b ? this.onDragMove(a) : "mouseup" === b || "touchend" === b ? this.onDragEnd(a) : "touchcancel" === b && this.onDragEnd(a)
    }, e.prototype.internalEvents = function() {
        var c = (k(), l());
        this.settings.mouseDrag ? (this.$stage.on("mousedown", a.proxy(function(a) {
            this.eventsRouter(a)
        }, this)), this.$stage.on("dragstart", function() {
            return !1
        }), this.$stage.get(0).onselectstart = function() {
            return !1
        }) : this.$element.addClass("owl-text-select-on"), this.settings.touchDrag && !c && this.$stage.on("touchstart touchcancel", a.proxy(function(a) {
            this.eventsRouter(a)
        }, this)), this.transitionEndVendor && this.on(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd, !1), this.settings.responsive !== !1 && this.on(b, "resize", a.proxy(this.onThrottledResize, this))
    }, e.prototype.onDragStart = function(d) {
        var e, g, h, i;
        if (e = d.originalEvent || d || b.event, 3 === e.which || this.state.isTouch) return !1;
        if ("mousedown" === e.type && this.$stage.addClass("owl-grab"), this.trigger("drag"), this.drag.startTime = (new Date).getTime(), this.speed(0), this.state.isTouch = !0, this.state.isScrolling = !1, this.state.isSwiping = !1, this.drag.distance = 0, g = f(e).x, h = f(e).y, this.drag.offsetX = this.$stage.position().left, this.drag.offsetY = this.$stage.position().top, this.settings.rtl && (this.drag.offsetX = this.$stage.position().left + this.$stage.width() - this.width() + this.settings.margin), this.state.inMotion && this.support3d) i = this.getTransformProperty(), this.drag.offsetX = i, this.animate(i), this.state.inMotion = !0;
        else if (this.state.inMotion && !this.support3d) return this.state.inMotion = !1, !1;
        this.drag.startX = g - this.drag.offsetX, this.drag.startY = h - this.drag.offsetY, this.drag.start = g - this.drag.startX, this.drag.targetEl = e.target || e.srcElement, this.drag.updatedX = this.drag.start, ("IMG" === this.drag.targetEl.tagName || "A" === this.drag.targetEl.tagName) && (this.drag.targetEl.draggable = !1), a(c).on("mousemove.owl.dragEvents mouseup.owl.dragEvents touchmove.owl.dragEvents touchend.owl.dragEvents", a.proxy(function(a) {
            this.eventsRouter(a)
        }, this))
    }, e.prototype.onDragMove = function(a) {
        var c, e, g, h, i, j;
        this.state.isTouch && (this.state.isScrolling || (c = a.originalEvent || a || b.event, e = f(c).x, g = f(c).y, this.drag.currentX = e - this.drag.startX, this.drag.currentY = g - this.drag.startY, this.drag.distance = this.drag.currentX - this.drag.offsetX, this.drag.distance < 0 ? this.state.direction = this.settings.rtl ? "right" : "left" : this.drag.distance > 0 && (this.state.direction = this.settings.rtl ? "left" : "right"), this.settings.loop ? this.op(this.drag.currentX, ">", this.coordinates(this.minimum())) && "right" === this.state.direction ? this.drag.currentX -= (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length) : this.op(this.drag.currentX, "<", this.coordinates(this.maximum())) && "left" === this.state.direction && (this.drag.currentX += (this.settings.center && this.coordinates(0)) - this.coordinates(this._items.length)) : (h = this.coordinates(this.settings.rtl ? this.maximum() : this.minimum()), i = this.coordinates(this.settings.rtl ? this.minimum() : this.maximum()), j = this.settings.pullDrag ? this.drag.distance / 5 : 0, this.drag.currentX = Math.max(Math.min(this.drag.currentX, h + j), i + j)), (this.drag.distance > 8 || this.drag.distance < -8) && (c.preventDefault !== d ? c.preventDefault() : c.returnValue = !1, this.state.isSwiping = !0), this.drag.updatedX = this.drag.currentX, (this.drag.currentY > 16 || this.drag.currentY < -16) && this.state.isSwiping === !1 && (this.state.isScrolling = !0, this.drag.updatedX = this.drag.start), this.animate(this.drag.updatedX)))
    }, e.prototype.onDragEnd = function(b) {
        var d, e, f;
        if (this.state.isTouch) {
            if ("mouseup" === b.type && this.$stage.removeClass("owl-grab"), this.trigger("dragged"), this.drag.targetEl.removeAttribute("draggable"), this.state.isTouch = !1, this.state.isScrolling = !1, this.state.isSwiping = !1, 0 === this.drag.distance && this.state.inMotion !== !0) return this.state.inMotion = !1, !1;
            this.drag.endTime = (new Date).getTime(), d = this.drag.endTime - this.drag.startTime, e = Math.abs(this.drag.distance), (e > 3 || d > 300) && this.removeClick(this.drag.targetEl), f = this.closest(this.drag.updatedX), this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(f), this.invalidate("position"), this.update(), this.settings.pullDrag || this.drag.updatedX !== this.coordinates(f) || this.transitionEnd(), this.drag.distance = 0, a(c).off(".owl.dragEvents")
        }
    }, e.prototype.removeClick = function(c) {
        this.drag.targetEl = c, a(c).on("click.preventClick", this.e._preventClick), b.setTimeout(function() {
            a(c).off("click.preventClick")
        }, 300)
    }, e.prototype.preventClick = function(b) {
        b.preventDefault ? b.preventDefault() : b.returnValue = !1, b.stopPropagation && b.stopPropagation(), a(b.target).off("click.preventClick")
    }, e.prototype.getTransformProperty = function() {
        var a, c;
        return a = b.getComputedStyle(this.$stage.get(0), null).getPropertyValue(this.vendorName + "transform"), a = a.replace(/matrix(3d)?\(|\)/g, "").split(","), c = 16 === a.length, c !== !0 ? a[4] : a[12]
    }, e.prototype.closest = function(b) {
        var c = -1,
            d = 30,
            e = this.width(),
            f = this.coordinates();
        return this.settings.freeDrag || a.each(f, a.proxy(function(a, g) {
            return b > g - d && g + d > b ? c = a : this.op(b, "<", g) && this.op(b, ">", f[a + 1] || g - e) && (c = "left" === this.state.direction ? a + 1 : a), -1 === c
        }, this)), this.settings.loop || (this.op(b, ">", f[this.minimum()]) ? c = b = this.minimum() : this.op(b, "<", f[this.maximum()]) && (c = b = this.maximum())), c
    }, e.prototype.animate = function(b) {
        this.trigger("translate"), this.state.inMotion = this.speed() > 0, this.support3d ? this.$stage.css({
            transform: "translate3d(" + b + "px,0px, 0px)",
            transition: this.speed() / 1e3 + "s"
        }) : this.state.isTouch ? this.$stage.css({
            left: b + "px"
        }) : this.$stage.animate({
            left: b
        }, this.speed() / 1e3, this.settings.fallbackEasing, a.proxy(function() {
            this.state.inMotion && this.transitionEnd()
        }, this))
    }, e.prototype.current = function(a) {
        if (a === d) return this._current;
        if (0 === this._items.length) return d;
        if (a = this.normalize(a), this._current !== a) {
            var b = this.trigger("change", {
                property: {
                    name: "position",
                    value: a
                }
            });
            b.data !== d && (a = this.normalize(b.data)), this._current = a, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, e.prototype.invalidate = function(a) {
        this._invalidated[a] = !0
    }, e.prototype.reset = function(a) {
        a = this.normalize(a), a !== d && (this._speed = 0, this._current = a, this.suppress(["translate", "translated"]), this.animate(this.coordinates(a)), this.release(["translate", "translated"]))
    }, e.prototype.normalize = function(b, c) {
        var e = c ? this._items.length : this._items.length + this._clones.length;
        return !a.isNumeric(b) || 1 > e ? d : b = this._clones.length ? (b % e + e) % e : Math.max(this.minimum(c), Math.min(this.maximum(c), b))
    }, e.prototype.relative = function(a) {
        return a = this.normalize(a), a -= this._clones.length / 2, this.normalize(a, !0)
    }, e.prototype.maximum = function(a) {
        var b, c, d, e = 0,
            f = this.settings;
        if (a) return this._items.length - 1;
        if (!f.loop && f.center) b = this._items.length - 1;
        else if (f.loop || f.center)
            if (f.loop || f.center) b = this._items.length + f.items;
            else {
                if (!f.autoWidth && !f.merge) throw "Can not detect maximum absolute position.";
                for (revert = f.rtl ? 1 : -1, c = this.$stage.width() - this.$element.width();
                    (d = this.coordinates(e)) && !(d * revert >= c);) b = ++e
            } else b = this._items.length - f.items;
        return b
    }, e.prototype.minimum = function(a) {
        return a ? 0 : this._clones.length / 2
    }, e.prototype.items = function(a) {
        return a === d ? this._items.slice() : (a = this.normalize(a, !0), this._items[a])
    }, e.prototype.mergers = function(a) {
        return a === d ? this._mergers.slice() : (a = this.normalize(a, !0), this._mergers[a])
    }, e.prototype.clones = function(b) {
        var c = this._clones.length / 2,
            e = c + this._items.length,
            f = function(a) {
                return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2
            };
        return b === d ? a.map(this._clones, function(a, b) {
            return f(b)
        }) : a.map(this._clones, function(a, c) {
            return a === b ? f(c) : null
        })
    }, e.prototype.speed = function(a) {
        return a !== d && (this._speed = a), this._speed
    }, e.prototype.coordinates = function(b) {
        var c = null;
        return b === d ? a.map(this._coordinates, a.proxy(function(a, b) {
            return this.coordinates(b)
        }, this)) : (this.settings.center ? (c = this._coordinates[b], c += (this.width() - c + (this._coordinates[b - 1] || 0)) / 2 * (this.settings.rtl ? -1 : 1)) : c = this._coordinates[b - 1] || 0, c)
    }, e.prototype.duration = function(a, b, c) {
        return Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
    }, e.prototype.to = function(c, d) {
        if (this.settings.loop) {
            var e = c - this.relative(this.current()),
                f = this.current(),
                g = this.current(),
                h = this.current() + e,
                i = 0 > g - h ? !0 : !1,
                j = this._clones.length + this._items.length;
            h < this.settings.items && i === !1 ? (f = g + this._items.length, this.reset(f)) : h >= j - this.settings.items && i === !0 && (f = g - this._items.length, this.reset(f)), b.clearTimeout(this.e._goToLoop), this.e._goToLoop = b.setTimeout(a.proxy(function() {
                this.speed(this.duration(this.current(), f + e, d)), this.current(f + e), this.update()
            }, this), 30)
        } else this.speed(this.duration(this.current(), c, d)), this.current(c), this.update()
    }, e.prototype.next = function(a) {
        a = a || !1, this.to(this.relative(this.current()) + 1, a)
    }, e.prototype.prev = function(a) {
        a = a || !1, this.to(this.relative(this.current()) - 1, a)
    }, e.prototype.transitionEnd = function(a) {
        return a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0)) ? !1 : (this.state.inMotion = !1, void this.trigger("translated"))
    }, e.prototype.viewport = function() {
        var d;
        if (this.options.responsiveBaseElement !== b) d = a(this.options.responsiveBaseElement).width();
        else if (b.innerWidth) d = b.innerWidth;
        else {
            if (!c.documentElement || !c.documentElement.clientWidth) throw "Can not detect viewport width.";
            d = c.documentElement.clientWidth
        }
        return d
    }, e.prototype.replace = function(b) {
        this.$stage.empty(), this._items = [], b && (b = b instanceof jQuery ? b : a(b)), this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)), b.filter(function() {
            return 1 === this.nodeType
        }).each(a.proxy(function(a, b) {
            b = this.prepare(b), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(a.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, e.prototype.add = function(a, b) {
        b = b === d ? this._items.length : this.normalize(b, !0), this.trigger("add", {
            content: a,
            position: b
        }), 0 === this._items.length || b === this._items.length ? (this.$stage.append(a), this._items.push(a), this._mergers.push(1 * a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)) : (this._items[b].before(a), this._items.splice(b, 0, a), this._mergers.splice(b, 0, 1 * a.find("[data-merge]").andSelf("[data-merge]").attr("data-merge") || 1)), this.invalidate("items"), this.trigger("added", {
            content: a,
            position: b
        })
    }, e.prototype.remove = function(a) {
        a = this.normalize(a, !0), a !== d && (this.trigger("remove", {
            content: this._items[a],
            position: a
        }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: a
        }))
    }, e.prototype.addTriggerableEvents = function() {
        var b = a.proxy(function(b, c) {
            return a.proxy(function(a) {
                a.relatedTarget !== this && (this.suppress([c]), b.apply(this, [].slice.call(arguments, 1)), this.release([c]))
            }, this)
        }, this);
        a.each({
            next: this.next,
            prev: this.prev,
            to: this.to,
            destroy: this.destroy,
            refresh: this.refresh,
            replace: this.replace,
            add: this.add,
            remove: this.remove
        }, a.proxy(function(a, c) {
            this.$element.on(a + ".owl.carousel", b(c, a + ".owl.carousel"))
        }, this))
    }, e.prototype.watchVisibility = function() {
        function c(a) {
            return a.offsetWidth > 0 && a.offsetHeight > 0
        }

        function d() {
            c(this.$element.get(0)) && (this.$element.removeClass("owl-hidden"), this.refresh(), b.clearInterval(this.e._checkVisibile))
        }
        c(this.$element.get(0)) || (this.$element.addClass("owl-hidden"), b.clearInterval(this.e._checkVisibile), this.e._checkVisibile = b.setInterval(a.proxy(d, this), 500))
    }, e.prototype.preloadAutoWidthImages = function(b) {
        var c, d, e, f;
        c = 0, d = this, b.each(function(g, h) {
            e = a(h), f = new Image, f.onload = function() {
                c++, e.attr("src", f.src), e.css("opacity", 1), c >= b.length && (d.state.imagesLoaded = !0, d.initialize())
            }, f.src = e.attr("src") || e.attr("data-src") || e.attr("data-src-retina")
        })
    }, e.prototype.destroy = function() {
        this.$element.hasClass(this.settings.themeClass) && this.$element.removeClass(this.settings.themeClass), this.settings.responsive !== !1 && a(b).off("resize.owl.carousel"), this.transitionEndVendor && this.off(this.$stage.get(0), this.transitionEndVendor, this.e._transitionEnd);
        for (var d in this._plugins) this._plugins[d].destroy();
        (this.settings.mouseDrag || this.settings.touchDrag) && (this.$stage.off("mousedown touchstart touchcancel"), a(c).off(".owl.dragEvents"), this.$stage.get(0).onselectstart = function() {}, this.$stage.off("dragstart", function() {
            return !1
        })), this.$element.off(".owl"), this.$stage.children(".cloned").remove(), this.e = null, this.$element.removeData("owlCarousel"), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.unwrap()
    }, e.prototype.op = function(a, b, c) {
        var d = this.settings.rtl;
        switch (b) {
            case "<":
                return d ? a > c : c > a;
            case ">":
                return d ? c > a : a > c;
            case ">=":
                return d ? c >= a : a >= c;
            case "<=":
                return d ? a >= c : c >= a
        }
    }, e.prototype.on = function(a, b, c, d) {
        a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
    }, e.prototype.off = function(a, b, c, d) {
        a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
    }, e.prototype.trigger = function(b, c, d) {
        var e = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            },
            f = a.camelCase(a.grep(["on", b, d], function(a) {
                return a
            }).join("-").toLowerCase()),
            g = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
                relatedTarget: this
            }, e, c));
        return this._supress[b] || (a.each(this._plugins, function(a, b) {
            b.onTrigger && b.onTrigger(g)
        }), this.$element.trigger(g), this.settings && "function" == typeof this.settings[f] && this.settings[f].apply(this, g)), g
    }, e.prototype.suppress = function(b) {
        a.each(b, a.proxy(function(a, b) {
            this._supress[b] = !0
        }, this))
    }, e.prototype.release = function(b) {
        a.each(b, a.proxy(function(a, b) {
            delete this._supress[b]
        }, this))
    }, e.prototype.browserSupport = function() {
        if (this.support3d = j(), this.support3d) {
            this.transformVendor = i();
            var a = ["transitionend", "webkitTransitionEnd", "transitionend", "oTransitionEnd"];
            this.transitionEndVendor = a[h()], this.vendorName = this.transformVendor.replace(/Transform/i, ""), this.vendorName = "" !== this.vendorName ? "-" + this.vendorName.toLowerCase() + "-" : ""
        }
        this.state.orientation = b.orientation
    }, a.fn.owlCarousel = function(b) {
        return this.each(function() {
            a(this).data("owlCarousel") || a(this).data("owlCarousel", new e(this, b))
        })
    }, a.fn.owlCarousel.Constructor = e
}(window.Zepto || window.jQuery, window, document),
function(a, b) {
    var c = function(b) {
        this._core = b, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel": a.proxy(function(b) {
                if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type))
                    for (var c = this._core.settings, d = c.center && Math.ceil(c.items / 2) || c.items, e = c.center && -1 * d || 0, f = (b.property && b.property.value || this._core.current()) + e, g = this._core.clones().length, h = a.proxy(function(a, b) {
                            this.load(b)
                        }, this); e++ < d;) this.load(g / 2 + this._core.relative(f)), g && a.each(this._core.clones(this._core.relative(f++)), h)
            }, this)
        }, this._core.options = a.extend({}, c.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    c.Defaults = {
        lazyLoad: !1
    }, c.prototype.load = function(c) {
        var d = this._core.$stage.children().eq(c),
            e = d && d.find(".owl-lazy");
        !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function(c, d) {
            var e, f = a(d),
                g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
            this._core.trigger("load", {
                element: f,
                url: g
            }, "lazy"), f.is("img") ? f.one("load.owl.lazy", a.proxy(function() {
                f.css("opacity", 1), this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this)).attr("src", g) : (e = new Image, e.onload = a.proxy(function() {
                f.css({
                    "background-image": "url(" + g + ")",
                    opacity: "1"
                }), this._core.trigger("loaded", {
                    element: f,
                    url: g
                }, "lazy")
            }, this), e.src = g)
        }, this)), this._loaded.push(d.get(0)))
    }, c.prototype.destroy = function() {
        var a, b;
        for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Lazy = c
}(window.Zepto || window.jQuery, window, document),
function(a) {
    var b = function(c) {
        this._core = c, this._handlers = {
            "initialized.owl.carousel": a.proxy(function() {
                this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                this._core.settings.autoHeight && "position" == a.property.name && this.update()
            }, this),
            "loaded.owl.lazy": a.proxy(function(a) {
                this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass) === this._core.$stage.children().eq(this._core.current()) && this.update()
            }, this)
        }, this._core.options = a.extend({}, b.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    b.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    }, b.prototype.update = function() {
        this._core.$stage.parent().height(this._core.$stage.children().eq(this._core.current()).height()).addClass(this._core.settings.autoHeightClass)
    }, b.prototype.destroy = function() {
        var a, b;
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.AutoHeight = b
}(window.Zepto || window.jQuery, window, document),
function(a, b, c) {
    var d = function(b) {
        this._core = b, this._videos = {}, this._playing = null, this._fullscreen = !1, this._handlers = {
            "resize.owl.carousel": a.proxy(function(a) {
                this._core.settings.video && !this.isInFullScreen() && a.preventDefault()
            }, this),
            "refresh.owl.carousel changed.owl.carousel": a.proxy(function() {
                this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": a.proxy(function(b) {
                var c = a(b.content).find(".owl-video");
                c.length && (c.css("display", "none"), this.fetch(c, a(b.content)))
            }, this)
        }, this._core.options = a.extend({}, d.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a) {
            this.play(a)
        }, this))
    };
    d.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    }, d.prototype.fetch = function(a, b) {
        var c = a.attr("data-vimeo-id") ? "vimeo" : "youtube",
            d = a.attr("data-vimeo-id") || a.attr("data-youtube-id"),
            e = a.attr("data-width") || this._core.settings.videoWidth,
            f = a.attr("data-height") || this._core.settings.videoHeight,
            g = a.attr("href");
        if (!g) throw new Error("Missing video URL.");
        if (d = g.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), d[3].indexOf("youtu") > -1) c = "youtube";
        else {
            if (!(d[3].indexOf("vimeo") > -1)) throw new Error("Video URL not supported.");
            c = "vimeo"
        }
        d = d[6], this._videos[g] = {
            type: c,
            id: d,
            width: e,
            height: f
        }, b.attr("data-video", g), this.thumbnail(a, this._videos[g])
    }, d.prototype.thumbnail = function(b, c) {
        var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "",
            h = b.find("img"),
            i = "src",
            j = "",
            k = this._core.settings,
            l = function(a) {
                e = '<div class="owl-video-play-icon"></div>', d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>', b.after(d), b.after(e)
            };
        return b.wrap('<div class="owl-video-wrapper"' + g + "></div>"), this._core.settings.lazyLoad && (i = "data-src", j = "owl-lazy"), h.length ? (l(h.attr(i)), h.remove(), !1) : void("youtube" === c.type ? (f = "http://img.youtube.com/vi/" + c.id + "/hqdefault.jpg", l(f)) : "vimeo" === c.type && a.ajax({
            type: "GET",
            url: "http://vimeo.com/api/v2/video/" + c.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(a) {
                f = a[0].thumbnail_large, l(f)
            }
        }))
    }, d.prototype.stop = function() {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null
    }, d.prototype.play = function(b) {
        this._core.trigger("play", null, "video"), this._playing && this.stop();
        var c, d, e = a(b.target || b.srcElement),
            f = e.closest("." + this._core.settings.itemClass),
            g = this._videos[f.attr("data-video")],
            h = g.width || "100%",
            i = g.height || this._core.$stage.height();
        "youtube" === g.type ? c = '<iframe width="' + h + '" height="' + i + '" src="http://www.youtube.com/embed/' + g.id + "?autoplay=1&v=" + g.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === g.type && (c = '<iframe src="http://player.vimeo.com/video/' + g.id + '?autoplay=1" width="' + h + '" height="' + i + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'), f.addClass("owl-video-playing"), this._playing = f, d = a('<div style="height:' + i + "px; width:" + h + 'px" class="owl-video-frame">' + c + "</div>"), e.after(d)
    }, d.prototype.isInFullScreen = function() {
        var d = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
        return d && a(d).parent().hasClass("owl-video-frame") && (this._core.speed(0), this._fullscreen = !0), d && this._fullscreen && this._playing ? !1 : this._fullscreen ? (this._fullscreen = !1, !1) : this._playing && this._core.state.orientation !== b.orientation ? (this._core.state.orientation = b.orientation, !1) : !0
    }, d.prototype.destroy = function() {
        var a, b;
        this._core.$element.off("click.owl.video");
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Video = d
}(window.Zepto || window.jQuery, window, document),
function(a, b, c, d) {
    var e = function(b) {
        this.core = b, this.core.options = a.extend({}, e.Defaults, this.core.options), this.swapping = !0, this.previous = d, this.next = d, this.handlers = {
            "change.owl.carousel": a.proxy(function(a) {
                "position" == a.property.name && (this.previous = this.core.current(), this.next = a.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a) {
                this.swapping = "translated" == a.type
            }, this),
            "translate.owl.carousel": a.proxy(function() {
                this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    e.Defaults = {
        animateOut: !1,
        animateIn: !1
    }, e.prototype.swap = function() {
        if (1 === this.core.settings.items && this.core.support3d) {
            this.core.speed(0);
            var b, c = a.proxy(this.clear, this),
                d = this.core.$stage.children().eq(this.previous),
                e = this.core.$stage.children().eq(this.next),
                f = this.core.settings.animateIn,
                g = this.core.settings.animateOut;
            this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next), d.css({
                left: b + "px"
            }).addClass("animated owl-animated-out").addClass(g).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c)), f && e.addClass("animated owl-animated-in").addClass(f).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", c))
        }
    }, e.prototype.clear = function(b) {
        a(b.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.transitionEnd()
    }, e.prototype.destroy = function() {
        var a, b;
        for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Animate = e
}(window.Zepto || window.jQuery, window, document),
function(a, b, c) {
    var d = function(b) {
        this.core = b, this.core.options = a.extend({}, d.Defaults, this.core.options), this.handlers = {
            "translated.owl.carousel refreshed.owl.carousel": a.proxy(function() {
                this.autoplay()
            }, this),
            "play.owl.autoplay": a.proxy(function(a, b, c) {
                this.play(b, c)
            }, this),
            "stop.owl.autoplay": a.proxy(function() {
                this.stop()
            }, this),
            "mouseover.owl.autoplay": a.proxy(function() {
                this.core.settings.autoplayHoverPause && this.pause()
            }, this),
            "mouseleave.owl.autoplay": a.proxy(function() {
                this.core.settings.autoplayHoverPause && this.autoplay()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    d.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, d.prototype.autoplay = function() {
        this.core.settings.autoplay && !this.core.state.videoPlay ? (b.clearInterval(this.interval), this.interval = b.setInterval(a.proxy(function() {
            this.play()
        }, this), this.core.settings.autoplayTimeout)) : b.clearInterval(this.interval)
    }, d.prototype.play = function() {
        return c.hidden === !0 || this.core.state.isTouch || this.core.state.isScrolling || this.core.state.isSwiping || this.core.state.inMotion ? void 0 : this.core.settings.autoplay === !1 ? void b.clearInterval(this.interval) : void this.core.next(this.core.settings.autoplaySpeed)
    }, d.prototype.stop = function() {
        b.clearInterval(this.interval)
    }, d.prototype.pause = function() {
        b.clearInterval(this.interval)
    }, d.prototype.destroy = function() {
        var a, c;
        b.clearInterval(this.interval);
        for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
        for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.autoplay = d
}(window.Zepto || window.jQuery, window, document),
function(a) {
    "use strict";
    var b = function(c) {
        this._core = c, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": a.proxy(function(b) {
                this._core.settings.dotsData && this._templates.push(a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
            }, this),
            "add.owl.carousel": a.proxy(function(b) {
                this._core.settings.dotsData && this._templates.splice(b.position, 0, a(b.content).find("[data-dot]").andSelf("[data-dot]").attr("data-dot"))
            }, this),
            "remove.owl.carousel prepared.owl.carousel": a.proxy(function(a) {
                this._core.settings.dotsData && this._templates.splice(a.position, 1)
            }, this),
            "change.owl.carousel": a.proxy(function(a) {
                if ("position" == a.property.name && !this._core.state.revert && !this._core.settings.loop && this._core.settings.navRewind) {
                    var b = this._core.current(),
                        c = this._core.maximum(),
                        d = this._core.minimum();
                    a.data = a.property.value > c ? b >= c ? d : c : a.property.value < d ? c : a.property.value
                }
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                "position" == a.property.name && this.draw()
            }, this),
            "refreshed.owl.carousel": a.proxy(function() {
                this._initialized || (this.initialize(), this._initialized = !0), this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")
            }, this)
        }, this._core.options = a.extend({}, b.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    b.Defaults = {
        nav: !1,
        navRewind: !0,
        navText: ["prev", "next"],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotData: !1,
        dotsSpeed: !1,
        dotsContainer: !1,
        controlsClass: "owl-controls"
    }, b.prototype.initialize = function() {
        var b, c, d = this._core.settings;
        d.dotsData || (this._templates = [a("<div>").addClass(d.dotClass).append(a("<span>")).prop("outerHTML")]), d.navContainer && d.dotsContainer || (this._controls.$container = a("<div>").addClass(d.controlsClass).appendTo(this.$element)), this._controls.$indicators = d.dotsContainer ? a(d.dotsContainer) : a("<div>").hide().addClass(d.dotsClass).appendTo(this._controls.$container), this._controls.$indicators.on("click", "div", a.proxy(function(b) {
            var c = a(b.target).parent().is(this._controls.$indicators) ? a(b.target).index() : a(b.target).parent().index();
            b.preventDefault(), this.to(c, d.dotsSpeed)
        }, this)), b = d.navContainer ? a(d.navContainer) : a("<div>").addClass(d.navContainerClass).prependTo(this._controls.$container), this._controls.$next = a("<" + d.navElement + ">"), this._controls.$previous = this._controls.$next.clone(), this._controls.$previous.addClass(d.navClass[0]).html(d.navText[0]).hide().prependTo(b).on("click", a.proxy(function() {
            this.prev(d.navSpeed)
        }, this)), this._controls.$next.addClass(d.navClass[1]).html(d.navText[1]).hide().appendTo(b).on("click", a.proxy(function() {
            this.next(d.navSpeed)
        }, this));
        for (c in this._overrides) this._core[c] = a.proxy(this[c], this)
    }, b.prototype.destroy = function() {
        var a, b, c, d;
        for (a in this._handlers) this.$element.off(a, this._handlers[a]);
        for (b in this._controls) this._controls[b].remove();
        for (d in this.overides) this._core[d] = this._overrides[d];
        for (c in Object.getOwnPropertyNames(this)) "function" != typeof this[c] && (this[c] = null)
    }, b.prototype.update = function() {
        var a, b, c, d = this._core.settings,
            e = this._core.clones().length / 2,
            f = e + this._core.items().length,
            g = d.center || d.autoWidth || d.dotData ? 1 : d.dotsEach || d.items;
        if ("page" !== d.slideBy && (d.slideBy = Math.min(d.slideBy, d.items)), d.dots || "page" == d.slideBy)
            for (this._pages = [], a = e, b = 0, c = 0; f > a; a++)(b >= g || 0 === b) && (this._pages.push({
                start: a - e,
                end: a - e + g - 1
            }), b = 0, ++c), b += this._core.mergers(this._core.relative(a))
    }, b.prototype.draw = function() {
        var b, c, d = "",
            e = this._core.settings,
            f = (this._core.$stage.children(), this._core.relative(this._core.current()));
        if (!e.nav || e.loop || e.navRewind || (this._controls.$previous.toggleClass("disabled", 0 >= f), this._controls.$next.toggleClass("disabled", f >= this._core.maximum())), this._controls.$previous.toggle(e.nav), this._controls.$next.toggle(e.nav), e.dots) {
            if (b = this._pages.length - this._controls.$indicators.children().length, e.dotData && 0 !== b) {
                for (c = 0; c < this._controls.$indicators.children().length; c++) d += this._templates[this._core.relative(c)];
                this._controls.$indicators.html(d)
            } else b > 0 ? (d = new Array(b + 1).join(this._templates[0]), this._controls.$indicators.append(d)) : 0 > b && this._controls.$indicators.children().slice(b).remove();
            this._controls.$indicators.find(".active").removeClass("active"), this._controls.$indicators.children().eq(a.inArray(this.current(), this._pages)).addClass("active")
        }
        this._controls.$indicators.toggle(e.dots)
    }, b.prototype.onTrigger = function(b) {
        var c = this._core.settings;
        b.page = {
            index: a.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: c && (c.center || c.autoWidth || c.dotData ? 1 : c.dotsEach || c.items)
        }
    }, b.prototype.current = function() {
        var b = this._core.relative(this._core.current());
        return a.grep(this._pages, function(a) {
            return a.start <= b && a.end >= b
        }).pop()
    }, b.prototype.getPosition = function(b) {
        var c, d, e = this._core.settings;
        return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages), d = this._pages.length, b ? ++c : --c, c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()), d = this._core.items().length, b ? c += e.slideBy : c -= e.slideBy), c
    }, b.prototype.next = function(b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
    }, b.prototype.prev = function(b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
    }, b.prototype.to = function(b, c, d) {
        var e;
        d ? a.proxy(this._overrides.to, this._core)(b, c) : (e = this._pages.length, a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c))
    }, a.fn.owlCarousel.Constructor.Plugins.Navigation = b
}(window.Zepto || window.jQuery, window, document),
function(a, b) {
    "use strict";
    var c = function(d) {
        this._core = d, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": a.proxy(function() {
                "URLHash" == this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": a.proxy(function(b) {
                var c = a(b.content).find("[data-hash]").andSelf("[data-hash]").attr("data-hash");
                this._hashes[c] = b.content
            }, this)
        }, this._core.options = a.extend({}, c.Defaults, this._core.options), this.$element.on(this._handlers), a(b).on("hashchange.owl.navigation", a.proxy(function() {
            var a = b.location.hash.substring(1),
                c = this._core.$stage.children(),
                d = this._hashes[a] && c.index(this._hashes[a]) || 0;
            return a ? void this._core.to(d, !1, !0) : !1
        }, this))
    };
    c.Defaults = {
        URLhashListener: !1
    }, c.prototype.destroy = function() {
        var c, d;
        a(b).off("hashchange.owl.navigation");
        for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
        for (d in Object.getOwnPropertyNames(this)) "function" != typeof this[d] && (this[d] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Hash = c
}(window.Zepto || window.jQuery, window, document);

/*! owl.carousel2.thumbs - v0.1.5 | (c) 2015 @gijsroge | MIT license | https://github.com/gijsroge/OwlCarousel2-Thumbs */
! function(a, b, c, d) {
    "use strict";
    var e = function(b) {
        this.owl = b, this._thumbcontent = [], this._identifier = 0, this.owl_currentitem = this.owl.options.startPosition, this.$element = this.owl.$element, this._handlers = {
            "prepared.owl.carousel": a.proxy(function(b) {
                if (!b.namespace || !this.owl.options.thumbs || this.owl.options.thumbImage || this.owl.options.thumbsPrerendered || this.owl.options.thumbImage) {
                    if (b.namespace && this.owl.options.thumbs && this.owl.options.thumbImage) {
                        var c = a(b.content).find("img");
                        this._thumbcontent.push(c)
                    }
                } else a(b.content).find("[data-thumb]").attr("data-thumb") !== d && this._thumbcontent.push(a(b.content).find("[data-thumb]").attr("data-thumb"))
            }, this),
            "initialized.owl.carousel": a.proxy(function(a) {
                a.namespace && this.owl.options.thumbs && (this.render(), this.listen(), this._identifier = this.owl.$element.data("slider-id"), this.setActive())
            }, this),
            "changed.owl.carousel": a.proxy(function(a) {
                a.namespace && "position" === a.property.name && this.owl.options.thumbs && (this._identifier = this.owl.$element.data("slider-id"), this.setActive())
            }, this)
        }, this.owl.options = a.extend(e.Defaults, this.owl.options), this.owl.$element.on(this._handlers)
    };
    e.Defaults = {
        thumbs: !0,
        thumbImage: !1,
        thumbContainerClass: "owl-thumbs",
        thumbItemClass: "owl-thumb-item",
        moveThumbsInside: !1
    }, e.prototype.listen = function() {
        var b = this.owl.options;
        b.thumbsPrerendered && (this._thumbcontent._thumbcontainer = a("." + b.thumbContainerClass)), a(this._thumbcontent._thumbcontainer).on("click", this._thumbcontent._thumbcontainer.children(), a.proxy(function(c) {
            this._identifier = a(c.target).closest("." + b.thumbContainerClass).data("slider-id");
            var d = a(c.target).parent().is(this._thumbcontent._thumbcontainer) ? a(c.target).index() : a(c.target).parent().index();
            b.thumbsPrerendered ? a("[data-slider-id=" + this._identifier + "]").trigger("to.owl.carousel", [d, b.dotsSpeed, !0]) : this.owl.to(d, b.dotsSpeed), c.preventDefault()
        }, this))
    }, e.prototype.render = function() {
        var b = this.owl.options;
        b.thumbsPrerendered ? (this._thumbcontent._thumbcontainer = a("." + b.thumbContainerClass), b.moveThumbsInside && this._thumbcontent._thumbcontainer.appendTo(this.$element)) : this._thumbcontent._thumbcontainer = a("<div>").addClass(b.thumbContainerClass).appendTo(this.$element);
        var c;
        if (b.thumbImage)
            for (c = 0; c < this._thumbcontent.length; ++c) this._thumbcontent._thumbcontainer.append("<button class=" + b.thumbItemClass + '><img src="' + this._thumbcontent[c].attr("src") + '" alt="' + this._thumbcontent[c].attr("alt") + '" /></button>');
        else
            for (c = 0; c < this._thumbcontent.length; ++c) this._thumbcontent._thumbcontainer.append("<button class=" + b.thumbItemClass + ">" + this._thumbcontent[c] + "</button>")
    }, e.prototype.setActive = function() {
        this.owl_currentitem = this.owl._current - this.owl._clones.length / 2, this.owl_currentitem === this.owl._items.length && (this.owl_currentitem = 0);
        var b = this.owl.options,
            c = b.thumbsPrerendered ? a("." + b.thumbContainerClass + '[data-slider-id="' + this._identifier + '"]') : this._thumbcontent._thumbcontainer;
        c.children().filter(".active").removeClass("active"), c.children().eq(this.owl_currentitem).addClass("active")
    }, e.prototype.destroy = function() {
        var a, b;
        for (a in this._handlers) this.owl.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) "function" != typeof this[b] && (this[b] = null)
    }, a.fn.owlCarousel.Constructor.Plugins.Thumbs = e
}(window.Zepto || window.jQuery, window, document);

/*!
 * Packery PACKAGED v1.3.2
 * bin-packing layout library
 * http://packery.metafizzy.co
 *
 * Commercial use requires one-time purchase of a commercial license
 * http://packery.metafizzy.co/license.html
 *
 * Non-commercial use is licensed under the GPL v3 License
 *
 * Copyright 2015 Metafizzy
 */

(function(t) {
    function e() {}

    function i(t) {
        function i(e) {
            e.prototype.option || (e.prototype.option = function(e) {
                t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
            })
        }

        function o(e, i) {
            t.fn[e] = function(o) {
                if ("string" == typeof o) {
                    for (var s = n.call(arguments, 1), a = 0, h = this.length; h > a; a++) {
                        var p = this[a],
                            u = t.data(p, e);
                        if (u)
                            if (t.isFunction(u[o]) && "_" !== o.charAt(0)) {
                                var c = u[o].apply(u, s);
                                if (void 0 !== c) return c
                            } else r("no such method '" + o + "' for " + e + " instance");
                        else r("cannot call methods on " + e + " prior to initialization; " + "attempted to call '" + o + "'")
                    }
                    return this
                }
                return this.each(function() {
                    var n = t.data(this, e);
                    n ? (n.option(o), n._init()) : (n = new i(this, o), t.data(this, e, n))
                })
            }
        }
        if (t) {
            var r = "undefined" == typeof console ? e : function(t) {
                console.error(t)
            };
            return t.bridget = function(t, e) {
                i(e), o(t, e)
            }, t.bridget
        }
    }
    var n = Array.prototype.slice;
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery.bridget", ["jquery"], i) : "object" == typeof exports ? i(require("jquery")) : i(t.jQuery)
})(window),
function(t) {
    function e(t) {
        return RegExp("(^|\\s+)" + t + "(\\s+|$)")
    }

    function i(t, e) {
        var i = n(t, e) ? r : o;
        i(t, e)
    }
    var n, o, r;
    "classList" in document.documentElement ? (n = function(t, e) {
        return t.classList.contains(e)
    }, o = function(t, e) {
        t.classList.add(e)
    }, r = function(t, e) {
        t.classList.remove(e)
    }) : (n = function(t, i) {
        return e(i).test(t.className)
    }, o = function(t, e) {
        n(t, e) || (t.className = t.className + " " + e)
    }, r = function(t, i) {
        t.className = t.className.replace(e(i), " ")
    });
    var s = {
        hasClass: n,
        addClass: o,
        removeClass: r,
        toggleClass: i,
        has: n,
        add: o,
        remove: r,
        toggle: i
    };
    "function" == typeof define && define.amd ? define("classie/classie", s) : "object" == typeof exports ? module.exports = s : t.classie = s
}(window),
function(t) {
    function e(t) {
        if (t) {
            if ("string" == typeof n[t]) return t;
            t = t.charAt(0).toUpperCase() + t.slice(1);
            for (var e, o = 0, r = i.length; r > o; o++)
                if (e = i[o] + t, "string" == typeof n[e]) return e
        }
    }
    var i = "Webkit Moz ms Ms O".split(" "),
        n = document.documentElement.style;
    "function" == typeof define && define.amd ? define("get-style-property/get-style-property", [], function() {
        return e
    }) : "object" == typeof exports ? module.exports = e : t.getStyleProperty = e
}(window),
function(t) {
    function e(t) {
        var e = parseFloat(t),
            i = -1 === t.indexOf("%") && !isNaN(e);
        return i && e
    }

    function i() {}

    function n() {
        for (var t = {
                width: 0,
                height: 0,
                innerWidth: 0,
                innerHeight: 0,
                outerWidth: 0,
                outerHeight: 0
            }, e = 0, i = s.length; i > e; e++) {
            var n = s[e];
            t[n] = 0
        }
        return t
    }

    function o(i) {
        function o() {
            if (!d) {
                d = !0;
                var n = t.getComputedStyle;
                if (p = function() {
                        var t = n ? function(t) {
                            return n(t, null)
                        } : function(t) {
                            return t.currentStyle
                        };
                        return function(e) {
                            var i = t(e);
                            return i || r("Style returned " + i + ". Are you running this code in a hidden iframe on Firefox? " + "See http://bit.ly/getsizebug1"), i
                        }
                    }(), u = i("boxSizing")) {
                    var o = document.createElement("div");
                    o.style.width = "200px", o.style.padding = "1px 2px 3px 4px", o.style.borderStyle = "solid", o.style.borderWidth = "1px 2px 3px 4px", o.style[u] = "border-box";
                    var s = document.body || document.documentElement;
                    s.appendChild(o);
                    var a = p(o);
                    c = 200 === e(a.width), s.removeChild(o)
                }
            }
        }

        function a(t) {
            if (o(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
                var i = p(t);
                if ("none" === i.display) return n();
                var r = {};
                r.width = t.offsetWidth, r.height = t.offsetHeight;
                for (var a = r.isBorderBox = !(!u || !i[u] || "border-box" !== i[u]), d = 0, f = s.length; f > d; d++) {
                    var l = s[d],
                        y = i[l];
                    y = h(t, y);
                    var m = parseFloat(y);
                    r[l] = isNaN(m) ? 0 : m
                }
                var g = r.paddingLeft + r.paddingRight,
                    v = r.paddingTop + r.paddingBottom,
                    x = r.marginLeft + r.marginRight,
                    b = r.marginTop + r.marginBottom,
                    w = r.borderLeftWidth + r.borderRightWidth,
                    _ = r.borderTopWidth + r.borderBottomWidth,
                    E = a && c,
                    L = e(i.width);
                L !== !1 && (r.width = L + (E ? 0 : g + w));
                var R = e(i.height);
                return R !== !1 && (r.height = R + (E ? 0 : v + _)), r.innerWidth = r.width - (g + w), r.innerHeight = r.height - (v + _), r.outerWidth = r.width + x, r.outerHeight = r.height + b, r
            }
        }

        function h(e, i) {
            if (t.getComputedStyle || -1 === i.indexOf("%")) return i;
            var n = e.style,
                o = n.left,
                r = e.runtimeStyle,
                s = r && r.left;
            return s && (r.left = e.currentStyle.left), n.left = i, i = n.pixelLeft, n.left = o, s && (r.left = s), i
        }
        var p, u, c, d = !1;
        return a
    }
    var r = "undefined" == typeof console ? i : function(t) {
            console.error(t)
        },
        s = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"];
    "function" == typeof define && define.amd ? define("get-size/get-size", ["get-style-property/get-style-property"], o) : "object" == typeof exports ? module.exports = o(require("desandro-get-style-property")) : t.getSize = o(t.getStyleProperty)
}(window),
function(t) {
    function e(e) {
        var i = t.event;
        return i.target = i.target || i.srcElement || e, i
    }
    var i = document.documentElement,
        n = function() {};
    i.addEventListener ? n = function(t, e, i) {
        t.addEventListener(e, i, !1)
    } : i.attachEvent && (n = function(t, i, n) {
        t[i + n] = n.handleEvent ? function() {
            var i = e(t);
            n.handleEvent.call(n, i)
        } : function() {
            var i = e(t);
            n.call(t, i)
        }, t.attachEvent("on" + i, t[i + n])
    });
    var o = function() {};
    i.removeEventListener ? o = function(t, e, i) {
        t.removeEventListener(e, i, !1)
    } : i.detachEvent && (o = function(t, e, i) {
        t.detachEvent("on" + e, t[e + i]);
        try {
            delete t[e + i]
        } catch (n) {
            t[e + i] = void 0
        }
    });
    var r = {
        bind: n,
        unbind: o
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", r) : "object" == typeof exports ? module.exports = r : t.eventie = r
}(window),
function(t) {
    function e(t) {
        "function" == typeof t && (e.isReady ? t() : s.push(t))
    }

    function i(t) {
        var i = "readystatechange" === t.type && "complete" !== r.readyState;
        e.isReady || i || n()
    }

    function n() {
        e.isReady = !0;
        for (var t = 0, i = s.length; i > t; t++) {
            var n = s[t];
            n()
        }
    }

    function o(o) {
        return "complete" === r.readyState ? n() : (o.bind(r, "DOMContentLoaded", i), o.bind(r, "readystatechange", i), o.bind(t, "load", i)), e
    }
    var r = t.document,
        s = [];
    e.isReady = !1, "function" == typeof define && define.amd ? define("doc-ready/doc-ready", ["eventie/eventie"], o) : "object" == typeof exports ? module.exports = o(require("eventie")) : t.docReady = o(t.eventie)
}(window),
function() {
    function t() {}

    function e(t, e) {
        for (var i = t.length; i--;)
            if (t[i].listener === e) return i;
        return -1
    }

    function i(t) {
        return function() {
            return this[t].apply(this, arguments)
        }
    }
    var n = t.prototype,
        o = this,
        r = o.EventEmitter;
    n.getListeners = function(t) {
        var e, i, n = this._getEvents();
        if (t instanceof RegExp) {
            e = {};
            for (i in n) n.hasOwnProperty(i) && t.test(i) && (e[i] = n[i])
        } else e = n[t] || (n[t] = []);
        return e
    }, n.flattenListeners = function(t) {
        var e, i = [];
        for (e = 0; t.length > e; e += 1) i.push(t[e].listener);
        return i
    }, n.getListenersAsObject = function(t) {
        var e, i = this.getListeners(t);
        return i instanceof Array && (e = {}, e[t] = i), e || i
    }, n.addListener = function(t, i) {
        var n, o = this.getListenersAsObject(t),
            r = "object" == typeof i;
        for (n in o) o.hasOwnProperty(n) && -1 === e(o[n], i) && o[n].push(r ? i : {
            listener: i,
            once: !1
        });
        return this
    }, n.on = i("addListener"), n.addOnceListener = function(t, e) {
        return this.addListener(t, {
            listener: e,
            once: !0
        })
    }, n.once = i("addOnceListener"), n.defineEvent = function(t) {
        return this.getListeners(t), this
    }, n.defineEvents = function(t) {
        for (var e = 0; t.length > e; e += 1) this.defineEvent(t[e]);
        return this
    }, n.removeListener = function(t, i) {
        var n, o, r = this.getListenersAsObject(t);
        for (o in r) r.hasOwnProperty(o) && (n = e(r[o], i), -1 !== n && r[o].splice(n, 1));
        return this
    }, n.off = i("removeListener"), n.addListeners = function(t, e) {
        return this.manipulateListeners(!1, t, e)
    }, n.removeListeners = function(t, e) {
        return this.manipulateListeners(!0, t, e)
    }, n.manipulateListeners = function(t, e, i) {
        var n, o, r = t ? this.removeListener : this.addListener,
            s = t ? this.removeListeners : this.addListeners;
        if ("object" != typeof e || e instanceof RegExp)
            for (n = i.length; n--;) r.call(this, e, i[n]);
        else
            for (n in e) e.hasOwnProperty(n) && (o = e[n]) && ("function" == typeof o ? r.call(this, n, o) : s.call(this, n, o));
        return this
    }, n.removeEvent = function(t) {
        var e, i = typeof t,
            n = this._getEvents();
        if ("string" === i) delete n[t];
        else if (t instanceof RegExp)
            for (e in n) n.hasOwnProperty(e) && t.test(e) && delete n[e];
        else delete this._events;
        return this
    }, n.removeAllListeners = i("removeEvent"), n.emitEvent = function(t, e) {
        var i, n, o, r, s = this.getListenersAsObject(t);
        for (o in s)
            if (s.hasOwnProperty(o))
                for (n = s[o].length; n--;) i = s[o][n], i.once === !0 && this.removeListener(t, i.listener), r = i.listener.apply(this, e || []), r === this._getOnceReturnValue() && this.removeListener(t, i.listener);
        return this
    }, n.trigger = i("emitEvent"), n.emit = function(t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(t, e)
    }, n.setOnceReturnValue = function(t) {
        return this._onceReturnValue = t, this
    }, n._getOnceReturnValue = function() {
        return this.hasOwnProperty("_onceReturnValue") ? this._onceReturnValue : !0
    }, n._getEvents = function() {
        return this._events || (this._events = {})
    }, t.noConflict = function() {
        return o.EventEmitter = r, t
    }, "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], function() {
        return t
    }) : "object" == typeof module && module.exports ? module.exports = t : o.EventEmitter = t
}.call(this),
    function(t) {
        function e(t, e) {
            return t[s](e)
        }

        function i(t) {
            if (!t.parentNode) {
                var e = document.createDocumentFragment();
                e.appendChild(t)
            }
        }

        function n(t, e) {
            i(t);
            for (var n = t.parentNode.querySelectorAll(e), o = 0, r = n.length; r > o; o++)
                if (n[o] === t) return !0;
            return !1
        }

        function o(t, n) {
            return i(t), e(t, n)
        }
        var r, s = function() {
            if (t.matchesSelector) return "matchesSelector";
            for (var e = ["webkit", "moz", "ms", "o"], i = 0, n = e.length; n > i; i++) {
                var o = e[i],
                    r = o + "MatchesSelector";
                if (t[r]) return r
            }
        }();
        if (s) {
            var a = document.createElement("div"),
                h = e(a, "div");
            r = h ? e : o
        } else r = n;
        "function" == typeof define && define.amd ? define("matches-selector/matches-selector", [], function() {
            return r
        }) : "object" == typeof exports ? module.exports = r : window.matchesSelector = r
    }(Element.prototype),
    function(t) {
        function e(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function i(t) {
            for (var e in t) return !1;
            return e = null, !0
        }

        function n(t) {
            return t.replace(/([A-Z])/g, function(t) {
                return "-" + t.toLowerCase()
            })
        }

        function o(t, o, r) {
            function a(t, e) {
                t && (this.element = t, this.layout = e, this.position = {
                    x: 0,
                    y: 0
                }, this._create())
            }
            var h = r("transition"),
                p = r("transform"),
                u = h && p,
                c = !!r("perspective"),
                d = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "otransitionend",
                    transition: "transitionend"
                }[h],
                f = ["transform", "transition", "transitionDuration", "transitionProperty"],
                l = function() {
                    for (var t = {}, e = 0, i = f.length; i > e; e++) {
                        var n = f[e],
                            o = r(n);
                        o && o !== n && (t[n] = o)
                    }
                    return t
                }();
            e(a.prototype, t.prototype), a.prototype._create = function() {
                this._transn = {
                    ingProperties: {},
                    clean: {},
                    onEnd: {}
                }, this.css({
                    position: "absolute"
                })
            }, a.prototype.handleEvent = function(t) {
                var e = "on" + t.type;
                this[e] && this[e](t)
            }, a.prototype.getSize = function() {
                this.size = o(this.element)
            }, a.prototype.css = function(t) {
                var e = this.element.style;
                for (var i in t) {
                    var n = l[i] || i;
                    e[n] = t[i]
                }
            }, a.prototype.getPosition = function() {
                var t = s(this.element),
                    e = this.layout.options,
                    i = e.isOriginLeft,
                    n = e.isOriginTop,
                    o = parseInt(t[i ? "left" : "right"], 10),
                    r = parseInt(t[n ? "top" : "bottom"], 10);
                o = isNaN(o) ? 0 : o, r = isNaN(r) ? 0 : r;
                var a = this.layout.size;
                o -= i ? a.paddingLeft : a.paddingRight, r -= n ? a.paddingTop : a.paddingBottom, this.position.x = o, this.position.y = r
            }, a.prototype.layoutPosition = function() {
                var t = this.layout.size,
                    e = this.layout.options,
                    i = {};
                e.isOriginLeft ? (i.left = this.position.x + t.paddingLeft + "px", i.right = "") : (i.right = this.position.x + t.paddingRight + "px", i.left = ""), e.isOriginTop ? (i.top = this.position.y + t.paddingTop + "px", i.bottom = "") : (i.bottom = this.position.y + t.paddingBottom + "px", i.top = ""), this.css(i), this.emitEvent("layout", [this])
            };
            var y = c ? function(t, e) {
                return "translate3d(" + t + "px, " + e + "px, 0)"
            } : function(t, e) {
                return "translate(" + t + "px, " + e + "px)"
            };
            a.prototype._transitionTo = function(t, e) {
                this.getPosition();
                var i = this.position.x,
                    n = this.position.y,
                    o = parseInt(t, 10),
                    r = parseInt(e, 10),
                    s = o === this.position.x && r === this.position.y;
                if (this.setPosition(t, e), s && !this.isTransitioning) return this.layoutPosition(), void 0;
                var a = t - i,
                    h = e - n,
                    p = {},
                    u = this.layout.options;
                a = u.isOriginLeft ? a : -a, h = u.isOriginTop ? h : -h, p.transform = y(a, h), this.transition({
                    to: p,
                    onTransitionEnd: {
                        transform: this.layoutPosition
                    },
                    isCleaning: !0
                })
            }, a.prototype.goTo = function(t, e) {
                this.setPosition(t, e), this.layoutPosition()
            }, a.prototype.moveTo = u ? a.prototype._transitionTo : a.prototype.goTo, a.prototype.setPosition = function(t, e) {
                this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10)
            }, a.prototype._nonTransition = function(t) {
                this.css(t.to), t.isCleaning && this._removeStyles(t.to);
                for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
            }, a.prototype._transition = function(t) {
                if (!parseFloat(this.layout.options.transitionDuration)) return this._nonTransition(t), void 0;
                var e = this._transn;
                for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
                for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
                if (t.from) {
                    this.css(t.from);
                    var n = this.element.offsetHeight;
                    n = null
                }
                this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
            };
            var m = p && n(p) + ",opacity";
            a.prototype.enableTransition = function() {
                this.isTransitioning || (this.css({
                    transitionProperty: m,
                    transitionDuration: this.layout.options.transitionDuration
                }), this.element.addEventListener(d, this, !1))
            }, a.prototype.transition = a.prototype[h ? "_transition" : "_nonTransition"], a.prototype.onwebkitTransitionEnd = function(t) {
                this.ontransitionend(t)
            }, a.prototype.onotransitionend = function(t) {
                this.ontransitionend(t)
            };
            var g = {
                "-webkit-transform": "transform",
                "-moz-transform": "transform",
                "-o-transform": "transform"
            };
            a.prototype.ontransitionend = function(t) {
                if (t.target === this.element) {
                    var e = this._transn,
                        n = g[t.propertyName] || t.propertyName;
                    if (delete e.ingProperties[n], i(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd) {
                        var o = e.onEnd[n];
                        o.call(this), delete e.onEnd[n]
                    }
                    this.emitEvent("transitionEnd", [this])
                }
            }, a.prototype.disableTransition = function() {
                this.removeTransitionStyles(), this.element.removeEventListener(d, this, !1), this.isTransitioning = !1
            }, a.prototype._removeStyles = function(t) {
                var e = {};
                for (var i in t) e[i] = "";
                this.css(e)
            };
            var v = {
                transitionProperty: "",
                transitionDuration: ""
            };
            return a.prototype.removeTransitionStyles = function() {
                this.css(v)
            }, a.prototype.removeElem = function() {
                this.element.parentNode.removeChild(this.element), this.emitEvent("remove", [this])
            }, a.prototype.remove = function() {
                if (!h || !parseFloat(this.layout.options.transitionDuration)) return this.removeElem(), void 0;
                var t = this;
                this.on("transitionEnd", function() {
                    return t.removeElem(), !0
                }), this.hide()
            }, a.prototype.reveal = function() {
                delete this.isHidden, this.css({
                    display: ""
                });
                var t = this.layout.options;
                this.transition({
                    from: t.hiddenStyle,
                    to: t.visibleStyle,
                    isCleaning: !0
                })
            }, a.prototype.hide = function() {
                this.isHidden = !0, this.css({
                    display: ""
                });
                var t = this.layout.options;
                this.transition({
                    from: t.visibleStyle,
                    to: t.hiddenStyle,
                    isCleaning: !0,
                    onTransitionEnd: {
                        opacity: function() {
                            this.isHidden && this.css({
                                display: "none"
                            })
                        }
                    }
                })
            }, a.prototype.destroy = function() {
                this.css({
                    position: "",
                    left: "",
                    right: "",
                    top: "",
                    bottom: "",
                    transition: "",
                    transform: ""
                })
            }, a
        }
        var r = t.getComputedStyle,
            s = r ? function(t) {
                return r(t, null)
            } : function(t) {
                return t.currentStyle
            };
        "function" == typeof define && define.amd ? define("outlayer/item", ["eventEmitter/EventEmitter", "get-size/get-size", "get-style-property/get-style-property"], o) : "object" == typeof exports ? module.exports = o(require("wolfy87-eventemitter"), require("get-size"), require("desandro-get-style-property")) : (t.Outlayer = {}, t.Outlayer.Item = o(t.EventEmitter, t.getSize, t.getStyleProperty))
    }(window),
    function(t) {
        function e(t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }

        function i(t) {
            return "[object Array]" === c.call(t)
        }

        function n(t) {
            var e = [];
            if (i(t)) e = t;
            else if (t && "number" == typeof t.length)
                for (var n = 0, o = t.length; o > n; n++) e.push(t[n]);
            else e.push(t);
            return e
        }

        function o(t, e) {
            var i = f(e, t); - 1 !== i && e.splice(i, 1)
        }

        function r(t) {
            return t.replace(/(.)([A-Z])/g, function(t, e, i) {
                return e + "-" + i
            }).toLowerCase()
        }

        function s(i, s, c, f, l, y) {
            function m(t, i) {
                if ("string" == typeof t && (t = a.querySelector(t)), !t || !d(t)) return h && h.error("Bad " + this.constructor.namespace + " element: " + t), void 0;
                this.element = t, this.options = e({}, this.constructor.defaults), this.option(i);
                var n = ++g;
                this.element.outlayerGUID = n, v[n] = this, this._create(), this.options.isInitLayout && this.layout()
            }
            var g = 0,
                v = {};
            return m.namespace = "outlayer", m.Item = y, m.defaults = {
                containerStyle: {
                    position: "relative"
                },
                isInitLayout: !0,
                isOriginLeft: !0,
                isOriginTop: !0,
                isResizeBound: !0,
                isResizingContainer: !0,
                transitionDuration: "0.4s",
                hiddenStyle: {
                    opacity: 0,
                    transform: "scale(0.001)"
                },
                visibleStyle: {
                    opacity: 1,
                    transform: "scale(1)"
                }
            }, e(m.prototype, c.prototype), m.prototype.option = function(t) {
                e(this.options, t)
            }, m.prototype._create = function() {
                this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), e(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize()
            }, m.prototype.reloadItems = function() {
                this.items = this._itemize(this.element.children)
            }, m.prototype._itemize = function(t) {
                for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0, r = e.length; r > o; o++) {
                    var s = e[o],
                        a = new i(s, this);
                    n.push(a)
                }
                return n
            }, m.prototype._filterFindItemElements = function(t) {
                t = n(t);
                for (var e = this.options.itemSelector, i = [], o = 0, r = t.length; r > o; o++) {
                    var s = t[o];
                    if (d(s))
                        if (e) {
                            l(s, e) && i.push(s);
                            for (var a = s.querySelectorAll(e), h = 0, p = a.length; p > h; h++) i.push(a[h])
                        } else i.push(s)
                }
                return i
            }, m.prototype.getItemElements = function() {
                for (var t = [], e = 0, i = this.items.length; i > e; e++) t.push(this.items[e].element);
                return t
            }, m.prototype.layout = function() {
                this._resetLayout(), this._manageStamps();
                var t = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
                this.layoutItems(this.items, t), this._isLayoutInited = !0
            }, m.prototype._init = m.prototype.layout, m.prototype._resetLayout = function() {
                this.getSize()
            }, m.prototype.getSize = function() {
                this.size = f(this.element)
            }, m.prototype._getMeasurement = function(t, e) {
                var i, n = this.options[t];
                n ? ("string" == typeof n ? i = this.element.querySelector(n) : d(n) && (i = n), this[t] = i ? f(i)[e] : n) : this[t] = 0
            }, m.prototype.layoutItems = function(t, e) {
                t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
            }, m.prototype._getItemsForLayout = function(t) {
                for (var e = [], i = 0, n = t.length; n > i; i++) {
                    var o = t[i];
                    o.isIgnored || e.push(o)
                }
                return e
            }, m.prototype._layoutItems = function(t, e) {
                function i() {
                    n.emitEvent("layoutComplete", [n, t])
                }
                var n = this;
                if (!t || !t.length) return i(), void 0;
                this._itemsOn(t, "layout", i);
                for (var o = [], r = 0, s = t.length; s > r; r++) {
                    var a = t[r],
                        h = this._getItemLayoutPosition(a);
                    h.item = a, h.isInstant = e || a.isLayoutInstant, o.push(h)
                }
                this._processLayoutQueue(o)
            }, m.prototype._getItemLayoutPosition = function() {
                return {
                    x: 0,
                    y: 0
                }
            }, m.prototype._processLayoutQueue = function(t) {
                for (var e = 0, i = t.length; i > e; e++) {
                    var n = t[e];
                    this._positionItem(n.item, n.x, n.y, n.isInstant)
                }
            }, m.prototype._positionItem = function(t, e, i, n) {
                n ? t.goTo(e, i) : t.moveTo(e, i)
            }, m.prototype._postLayout = function() {
                this.resizeContainer()
            }, m.prototype.resizeContainer = function() {
                if (this.options.isResizingContainer) {
                    var t = this._getContainerSize();
                    t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
                }
            }, m.prototype._getContainerSize = u, m.prototype._setContainerMeasure = function(t, e) {
                if (void 0 !== t) {
                    var i = this.size;
                    i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
                }
            }, m.prototype._itemsOn = function(t, e, i) {
                function n() {
                    return o++, o === r && i.call(s), !0
                }
                for (var o = 0, r = t.length, s = this, a = 0, h = t.length; h > a; a++) {
                    var p = t[a];
                    p.on(e, n)
                }
            }, m.prototype.ignore = function(t) {
                var e = this.getItem(t);
                e && (e.isIgnored = !0)
            }, m.prototype.unignore = function(t) {
                var e = this.getItem(t);
                e && delete e.isIgnored
            }, m.prototype.stamp = function(t) {
                if (t = this._find(t)) {
                    this.stamps = this.stamps.concat(t);
                    for (var e = 0, i = t.length; i > e; e++) {
                        var n = t[e];
                        this.ignore(n)
                    }
                }
            }, m.prototype.unstamp = function(t) {
                if (t = this._find(t))
                    for (var e = 0, i = t.length; i > e; e++) {
                        var n = t[e];
                        o(n, this.stamps), this.unignore(n)
                    }
            }, m.prototype._find = function(t) {
                return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = n(t)) : void 0
            }, m.prototype._manageStamps = function() {
                if (this.stamps && this.stamps.length) {
                    this._getBoundingRect();
                    for (var t = 0, e = this.stamps.length; e > t; t++) {
                        var i = this.stamps[t];
                        this._manageStamp(i)
                    }
                }
            }, m.prototype._getBoundingRect = function() {
                var t = this.element.getBoundingClientRect(),
                    e = this.size;
                this._boundingRect = {
                    left: t.left + e.paddingLeft + e.borderLeftWidth,
                    top: t.top + e.paddingTop + e.borderTopWidth,
                    right: t.right - (e.paddingRight + e.borderRightWidth),
                    bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
                }
            }, m.prototype._manageStamp = u, m.prototype._getElementOffset = function(t) {
                var e = t.getBoundingClientRect(),
                    i = this._boundingRect,
                    n = f(t),
                    o = {
                        left: e.left - i.left - n.marginLeft,
                        top: e.top - i.top - n.marginTop,
                        right: i.right - e.right - n.marginRight,
                        bottom: i.bottom - e.bottom - n.marginBottom
                    };
                return o
            }, m.prototype.handleEvent = function(t) {
                var e = "on" + t.type;
                this[e] && this[e](t)
            }, m.prototype.bindResize = function() {
                this.isResizeBound || (i.bind(t, "resize", this), this.isResizeBound = !0)
            }, m.prototype.unbindResize = function() {
                this.isResizeBound && i.unbind(t, "resize", this), this.isResizeBound = !1
            }, m.prototype.onresize = function() {
                function t() {
                    e.resize(), delete e.resizeTimeout
                }
                this.resizeTimeout && clearTimeout(this.resizeTimeout);
                var e = this;
                this.resizeTimeout = setTimeout(t, 100)
            }, m.prototype.resize = function() {
                this.isResizeBound && this.needsResizeLayout() && this.layout()
            }, m.prototype.needsResizeLayout = function() {
                var t = f(this.element),
                    e = this.size && t;
                return e && t.innerWidth !== this.size.innerWidth
            }, m.prototype.addItems = function(t) {
                var e = this._itemize(t);
                return e.length && (this.items = this.items.concat(e)), e
            }, m.prototype.appended = function(t) {
                var e = this.addItems(t);
                e.length && (this.layoutItems(e, !0), this.reveal(e))
            }, m.prototype.prepended = function(t) {
                var e = this._itemize(t);
                if (e.length) {
                    var i = this.items.slice(0);
                    this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
                }
            }, m.prototype.reveal = function(t) {
                var e = t && t.length;
                if (e)
                    for (var i = 0; e > i; i++) {
                        var n = t[i];
                        n.reveal()
                    }
            }, m.prototype.hide = function(t) {
                var e = t && t.length;
                if (e)
                    for (var i = 0; e > i; i++) {
                        var n = t[i];
                        n.hide()
                    }
            }, m.prototype.getItem = function(t) {
                for (var e = 0, i = this.items.length; i > e; e++) {
                    var n = this.items[e];
                    if (n.element === t) return n
                }
            }, m.prototype.getItems = function(t) {
                if (t && t.length) {
                    for (var e = [], i = 0, n = t.length; n > i; i++) {
                        var o = t[i],
                            r = this.getItem(o);
                        r && e.push(r)
                    }
                    return e
                }
            }, m.prototype.remove = function(t) {
                t = n(t);
                var e = this.getItems(t);
                if (e && e.length) {
                    this._itemsOn(e, "remove", function() {
                        this.emitEvent("removeComplete", [this, e])
                    });
                    for (var i = 0, r = e.length; r > i; i++) {
                        var s = e[i];
                        s.remove(), o(s, this.items)
                    }
                }
            }, m.prototype.destroy = function() {
                var t = this.element.style;
                t.height = "", t.position = "", t.width = "";
                for (var e = 0, i = this.items.length; i > e; e++) {
                    var n = this.items[e];
                    n.destroy()
                }
                this.unbindResize();
                var o = this.element.outlayerGUID;
                delete v[o], delete this.element.outlayerGUID, p && p.removeData(this.element, this.constructor.namespace)
            }, m.data = function(t) {
                var e = t && t.outlayerGUID;
                return e && v[e]
            }, m.create = function(t, i) {
                function n() {
                    m.apply(this, arguments)
                }
                return Object.create ? n.prototype = Object.create(m.prototype) : e(n.prototype, m.prototype), n.prototype.constructor = n, n.defaults = e({}, m.defaults), e(n.defaults, i), n.prototype.settings = {}, n.namespace = t, n.data = m.data, n.Item = function() {
                    y.apply(this, arguments)
                }, n.Item.prototype = new y, s(function() {
                    for (var e = r(t), i = a.querySelectorAll(".js-" + e), o = "data-" + e + "-options", s = 0, u = i.length; u > s; s++) {
                        var c, d = i[s],
                            f = d.getAttribute(o);
                        try {
                            c = f && JSON.parse(f)
                        } catch (l) {
                            h && h.error("Error parsing " + o + " on " + d.nodeName.toLowerCase() + (d.id ? "#" + d.id : "") + ": " + l);
                            continue
                        }
                        var y = new n(d, c);
                        p && p.data(d, t, y)
                    }
                }), p && p.bridget && p.bridget(t, n), n
            }, m.Item = y, m
        }
        var a = t.document,
            h = t.console,
            p = t.jQuery,
            u = function() {},
            c = Object.prototype.toString,
            d = "function" == typeof HTMLElement || "object" == typeof HTMLElement ? function(t) {
                return t instanceof HTMLElement
            } : function(t) {
                return t && "object" == typeof t && 1 === t.nodeType && "string" == typeof t.nodeName
            },
            f = Array.prototype.indexOf ? function(t, e) {
                return t.indexOf(e)
            } : function(t, e) {
                for (var i = 0, n = t.length; n > i; i++)
                    if (t[i] === e) return i;
                return -1
            };
        "function" == typeof define && define.amd ? define("outlayer/outlayer", ["eventie/eventie", "doc-ready/doc-ready", "eventEmitter/EventEmitter", "get-size/get-size", "matches-selector/matches-selector", "./item"], s) : "object" == typeof exports ? module.exports = s(require("eventie"), require("doc-ready"), require("wolfy87-eventemitter"), require("get-size"), require("desandro-matches-selector"), require("./item")) : t.Outlayer = s(t.eventie, t.docReady, t.EventEmitter, t.getSize, t.matchesSelector, t.Outlayer.Item)
    }(window),
    function(t) {
        function e() {
            function t(e) {
                for (var i in t.defaults) this[i] = t.defaults[i];
                for (i in e) this[i] = e[i]
            }
            return i.Rect = t, t.defaults = {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            }, t.prototype.contains = function(t) {
                var e = t.width || 0,
                    i = t.height || 0;
                return this.x <= t.x && this.y <= t.y && this.x + this.width >= t.x + e && this.y + this.height >= t.y + i
            }, t.prototype.overlaps = function(t) {
                var e = this.x + this.width,
                    i = this.y + this.height,
                    n = t.x + t.width,
                    o = t.y + t.height;
                return n > this.x && e > t.x && o > this.y && i > t.y
            }, t.prototype.getMaximalFreeRects = function(e) {
                if (!this.overlaps(e)) return !1;
                var i, n = [],
                    o = this.x + this.width,
                    r = this.y + this.height,
                    s = e.x + e.width,
                    a = e.y + e.height;
                return this.y < e.y && (i = new t({
                    x: this.x,
                    y: this.y,
                    width: this.width,
                    height: e.y - this.y
                }), n.push(i)), o > s && (i = new t({
                    x: s,
                    y: this.y,
                    width: o - s,
                    height: this.height
                }), n.push(i)), r > a && (i = new t({
                    x: this.x,
                    y: a,
                    width: this.width,
                    height: r - a
                }), n.push(i)), this.x < e.x && (i = new t({
                    x: this.x,
                    y: this.y,
                    width: e.x - this.x,
                    height: this.height
                }), n.push(i)), n
            }, t.prototype.canFit = function(t) {
                return this.width >= t.width && this.height >= t.height
            }, t
        }
        var i = t.Packery = function() {};
        "function" == typeof define && define.amd ? define("packery/js/rect", e) : "object" == typeof exports ? module.exports = e() : (t.Packery = t.Packery || {}, t.Packery.Rect = e())
    }(window),
    function(t) {
        function e(t) {
            function e(t, e, i) {
                this.width = t || 0, this.height = e || 0, this.sortDirection = i || "downwardLeftToRight", this.reset()
            }
            e.prototype.reset = function() {
                this.spaces = [], this.newSpaces = [];
                var e = new t({
                    x: 0,
                    y: 0,
                    width: this.width,
                    height: this.height
                });
                this.spaces.push(e), this.sorter = i[this.sortDirection] || i.downwardLeftToRight
            }, e.prototype.pack = function(t) {
                for (var e = 0, i = this.spaces.length; i > e; e++) {
                    var n = this.spaces[e];
                    if (n.canFit(t)) {
                        this.placeInSpace(t, n);
                        break
                    }
                }
            }, e.prototype.placeInSpace = function(t, e) {
                t.x = e.x, t.y = e.y, this.placed(t)
            }, e.prototype.placed = function(t) {
                for (var e = [], i = 0, n = this.spaces.length; n > i; i++) {
                    var o = this.spaces[i],
                        r = o.getMaximalFreeRects(t);
                    r ? e.push.apply(e, r) : e.push(o)
                }
                this.spaces = e, this.mergeSortSpaces()
            }, e.prototype.mergeSortSpaces = function() {
                e.mergeRects(this.spaces), this.spaces.sort(this.sorter)
            }, e.prototype.addSpace = function(t) {
                this.spaces.push(t), this.mergeSortSpaces()
            }, e.mergeRects = function(t) {
                for (var e = 0, i = t.length; i > e; e++) {
                    var n = t[e];
                    if (n) {
                        var o = t.slice(0);
                        o.splice(e, 1);
                        for (var r = 0, s = 0, a = o.length; a > s; s++) {
                            var h = o[s],
                                p = e > s ? 0 : 1;
                            n.contains(h) && (t.splice(s + p - r, 1), r++)
                        }
                    }
                }
                return t
            };
            var i = {
                downwardLeftToRight: function(t, e) {
                    return t.y - e.y || t.x - e.x
                },
                rightwardTopToBottom: function(t, e) {
                    return t.x - e.x || t.y - e.y
                }
            };
            return e
        }
        if ("function" == typeof define && define.amd) define("packery/js/packer", ["./rect"], e);
        else if ("object" == typeof exports) module.exports = e(require("./rect"));
        else {
            var i = t.Packery = t.Packery || {};
            i.Packer = e(i.Rect)
        }
    }(window),
    function(t) {
        function e(t, e, i) {
            var n = t("transform"),
                o = function() {
                    e.Item.apply(this, arguments)
                };
            o.prototype = new e.Item;
            var r = o.prototype._create;
            return o.prototype._create = function() {
                r.call(this), this.rect = new i, this.placeRect = new i
            }, o.prototype.dragStart = function() {
                this.getPosition(), this.removeTransitionStyles(), this.isTransitioning && n && (this.element.style[n] = "none"), this.getSize(), this.isPlacing = !0, this.needsPositioning = !1, this.positionPlaceRect(this.position.x, this.position.y), this.isTransitioning = !1, this.didDrag = !1
            }, o.prototype.dragMove = function(t, e) {
                this.didDrag = !0;
                var i = this.layout.size;
                t -= i.paddingLeft, e -= i.paddingTop, this.positionPlaceRect(t, e)
            }, o.prototype.dragStop = function() {
                this.getPosition();
                var t = this.position.x !== this.placeRect.x,
                    e = this.position.y !== this.placeRect.y;
                this.needsPositioning = t || e, this.didDrag = !1
            }, o.prototype.positionPlaceRect = function(t, e, i) {
                this.placeRect.x = this.getPlaceRectCoord(t, !0), this.placeRect.y = this.getPlaceRectCoord(e, !1, i)
            }, o.prototype.getPlaceRectCoord = function(t, e, i) {
                var n = e ? "Width" : "Height",
                    o = this.size["outer" + n],
                    r = this.layout[e ? "columnWidth" : "rowHeight"],
                    s = this.layout.size["inner" + n];
                e || (s = Math.max(s, this.layout.maxY), this.layout.rowHeight || (s -= this.layout.gutter));
                var a;
                if (r) {
                    r += this.layout.gutter, s += e ? this.layout.gutter : 0, t = Math.round(t / r);
                    var h;
                    h = this.layout.options.isHorizontal ? e ? "ceil" : "floor" : e ? "floor" : "ceil";
                    var p = Math[h](s / r);
                    p -= Math.ceil(o / r), a = p
                } else a = s - o;
                return t = i ? t : Math.min(t, a), t *= r || 1, Math.max(0, t)
            }, o.prototype.copyPlaceRectPosition = function() {
                this.rect.x = this.placeRect.x, this.rect.y = this.placeRect.y
            }, o.prototype.removeElem = function() {
                this.element.parentNode.removeChild(this.element), this.layout.packer.addSpace(this.rect), this.emitEvent("remove", [this])
            }, o
        }
        "function" == typeof define && define.amd ? define("packery/js/item", ["get-style-property/get-style-property", "outlayer/outlayer", "./rect"], e) : "object" == typeof exports ? module.exports = e(require("desandro-get-style-property"), require("outlayer"), require("./rect")) : t.Packery.Item = e(t.getStyleProperty, t.Outlayer, t.Packery.Rect)
    }(window),
    function(t) {
        function e(t, e, i, n, o, r) {
            function s(t, e) {
                return t.position.y - e.position.y || t.position.x - e.position.x
            }

            function a(t, e) {
                return t.position.x - e.position.x || t.position.y - e.position.y
            }
            n.prototype.canFit = function(t) {
                return this.width >= t.width - 1 && this.height >= t.height - 1
            };
            var h = i.create("packery");
            return h.Item = r, h.prototype._create = function() {
                i.prototype._create.call(this), this.packer = new o, this.stamp(this.options.stamped);
                var t = this;
                this.handleDraggabilly = {
                    dragStart: function(e) {
                        t.itemDragStart(e.element)
                    },
                    dragMove: function(e) {
                        t.itemDragMove(e.element, e.position.x, e.position.y)
                    },
                    dragEnd: function(e) {
                        t.itemDragEnd(e.element)
                    }
                }, this.handleUIDraggable = {
                    start: function(e) {
                        t.itemDragStart(e.currentTarget)
                    },
                    drag: function(e, i) {
                        t.itemDragMove(e.currentTarget, i.position.left, i.position.top)
                    },
                    stop: function(e) {
                        t.itemDragEnd(e.currentTarget)
                    }
                }
            }, h.prototype._resetLayout = function() {
                this.getSize(), this._getMeasurements();
                var t = this.packer;
                this.options.isHorizontal ? (t.width = Number.POSITIVE_INFINITY, t.height = this.size.innerHeight + this.gutter, t.sortDirection = "rightwardTopToBottom") : (t.width = this.size.innerWidth + this.gutter, t.height = Number.POSITIVE_INFINITY, t.sortDirection = "downwardLeftToRight"), t.reset(), this.maxY = 0, this.maxX = 0
            }, h.prototype._getMeasurements = function() {
                this._getMeasurement("columnWidth", "width"), this._getMeasurement("rowHeight", "height"), this._getMeasurement("gutter", "width")
            }, h.prototype._getItemLayoutPosition = function(t) {
                return this._packItem(t), t.rect
            }, h.prototype._packItem = function(t) {
                this._setRectSize(t.element, t.rect), this.packer.pack(t.rect), this._setMaxXY(t.rect)
            }, h.prototype._setMaxXY = function(t) {
                this.maxX = Math.max(t.x + t.width, this.maxX), this.maxY = Math.max(t.y + t.height, this.maxY)
            }, h.prototype._setRectSize = function(t, i) {
                var n = e(t),
                    o = n.outerWidth,
                    r = n.outerHeight;
                (o || r) && (o = this._applyGridGutter(o, this.columnWidth), r = this._applyGridGutter(r, this.rowHeight)), i.width = Math.min(o, this.packer.width), i.height = Math.min(r, this.packer.height)
            }, h.prototype._applyGridGutter = function(t, e) {
                if (!e) return t + this.gutter;
                e += this.gutter;
                var i = t % e,
                    n = i && 1 > i ? "round" : "ceil";
                return t = Math[n](t / e) * e
            }, h.prototype._getContainerSize = function() {
                return this.options.isHorizontal ? {
                    width: this.maxX - this.gutter
                } : {
                    height: this.maxY - this.gutter
                }
            }, h.prototype._manageStamp = function(t) {
                var e, i = this.getItem(t);
                if (i && i.isPlacing) e = i.placeRect;
                else {
                    var o = this._getElementOffset(t);
                    e = new n({
                        x: this.options.isOriginLeft ? o.left : o.right,
                        y: this.options.isOriginTop ? o.top : o.bottom
                    })
                }
                this._setRectSize(t, e), this.packer.placed(e), this._setMaxXY(e)
            }, h.prototype.sortItemsByPosition = function() {
                var t = this.options.isHorizontal ? a : s;
                this.items.sort(t)
            }, h.prototype.fit = function(t, e, i) {
                var n = this.getItem(t);
                n && (this._getMeasurements(), this.stamp(n.element), n.getSize(), n.isPlacing = !0, e = void 0 === e ? n.rect.x : e, i = void 0 === i ? n.rect.y : i, n.positionPlaceRect(e, i, !0), this._bindFitEvents(n), n.moveTo(n.placeRect.x, n.placeRect.y), this.layout(), this.unstamp(n.element), this.sortItemsByPosition(), n.isPlacing = !1, n.copyPlaceRectPosition())
            }, h.prototype._bindFitEvents = function(t) {
                function e() {
                    n++, 2 === n && i.emitEvent("fitComplete", [i, t])
                }
                var i = this,
                    n = 0;
                t.on("layout", function() {
                    return e(), !0
                }), this.on("layoutComplete", function() {
                    return e(), !0
                })
            }, h.prototype.resize = function() {
                var t = e(this.element),
                    i = this.size && t,
                    n = this.options.isHorizontal ? "innerHeight" : "innerWidth";
                i && t[n] === this.size[n] || this.layout()
            }, h.prototype.itemDragStart = function(t) {
                this.stamp(t);
                var e = this.getItem(t);
                e && e.dragStart()
            }, h.prototype.itemDragMove = function(t, e, i) {
                function n() {
                    r.layout(), delete r.dragTimeout
                }
                var o = this.getItem(t);
                o && o.dragMove(e, i);
                var r = this;
                this.clearDragTimeout(), this.dragTimeout = setTimeout(n, 40)
            }, h.prototype.clearDragTimeout = function() {
                this.dragTimeout && clearTimeout(this.dragTimeout)
            }, h.prototype.itemDragEnd = function(e) {
                var i, n = this.getItem(e);
                if (n && (i = n.didDrag, n.dragStop()), !n || !i && !n.needsPositioning) return this.unstamp(e), void 0;
                t.add(n.element, "is-positioning-post-drag");
                var o = this._getDragEndLayoutComplete(e, n);
                n.needsPositioning ? (n.on("layout", o), n.moveTo(n.placeRect.x, n.placeRect.y)) : n && n.copyPlaceRectPosition(), this.clearDragTimeout(), this.on("layoutComplete", o), this.layout()
            }, h.prototype._getDragEndLayoutComplete = function(e, i) {
                var n = i && i.needsPositioning,
                    o = 0,
                    r = n ? 2 : 1,
                    s = this;
                return function() {
                    return o++, o !== r ? !0 : (i && (t.remove(i.element, "is-positioning-post-drag"), i.isPlacing = !1, i.copyPlaceRectPosition()), s.unstamp(e), s.sortItemsByPosition(), n && s.emitEvent("dragItemPositioned", [s, i]), !0)
                }
            }, h.prototype.bindDraggabillyEvents = function(t) {
                t.on("dragStart", this.handleDraggabilly.dragStart), t.on("dragMove", this.handleDraggabilly.dragMove), t.on("dragEnd", this.handleDraggabilly.dragEnd)
            }, h.prototype.bindUIDraggableEvents = function(t) {
                t.on("dragstart", this.handleUIDraggable.start).on("drag", this.handleUIDraggable.drag).on("dragstop", this.handleUIDraggable.stop)
            }, h.Rect = n, h.Packer = o, h
        }
        "function" == typeof define && define.amd ? define(["classie/classie", "get-size/get-size", "outlayer/outlayer", "packery/js/rect", "packery/js/packer", "packery/js/item"], e) : "object" == typeof exports ? module.exports = e(require("desandro-classie"), require("get-size"), require("outlayer"), require("./rect"), require("./packer"), require("./item")) : t.Packery = e(t.classie, t.getSize, t.Outlayer, t.Packery.Rect, t.Packery.Packer, t.Packery.Item)
    }(window);

/*!
 * jquery.counterup.js 1.0
 *
 * Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
 * Released under the GPL v2 License
 *
 * Date: Nov 26, 2013
 */
(function(e) {
    "use strict";
    e.fn.counterUp = function(t) {
        var n = e.extend({
            time: 400,
            delay: 10
        }, t);
        return this.each(function() {
            var t = e(this),
                r = n,
                i = function() {
                    var e = [],
                        n = r.time / r.delay,
                        i = t.text(),
                        s = /[0-9]+,[0-9]+/.test(i);
                    i = i.replace(/,/g, "");
                    var o = /^[0-9]+$/.test(i),
                        u = /^[0-9]+\.[0-9]+$/.test(i),
                        a = u ? (i.split(".")[1] || []).length : 0;
                    for (var f = n; f >= 1; f--) {
                        var l = parseInt(i / n * f);
                        u && (l = parseFloat(i / n * f).toFixed(a));
                        if (s)
                            while (/(\d+)(\d{3})/.test(l.toString())) l = l.toString().replace(/(\d+)(\d{3})/, "$1,$2");
                        e.unshift(l)
                    }
                    t.data("counterup-nums", e);
                    t.text("0");
                    var c = function() {
                        t.text(t.data("counterup-nums").shift());
                        if (t.data("counterup-nums").length) setTimeout(t.data("counterup-func"), r.delay);
                        else {
                            delete t.data("counterup-nums");
                            t.data("counterup-nums", null);
                            t.data("counterup-func", null)
                        }
                    };
                    t.data("counterup-func", c);
                    setTimeout(t.data("counterup-func"), r.delay)
                };
            t.waypoint(i, {
                offset: "100%",
                triggerOnce: !0
            })
        })
    }
})(jQuery);

/**!
 * easyPieChart
 * Lightweight plugin to render simple, animated and retina optimized pie charts
 *
 * @license 
 * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
 * @version 2.1.5
 **/
(function(root,factory){if(typeof exports==='object'){module.exports=factory(require('jquery'))}else if(typeof define==='function'&&define.amd){define(['jquery'],factory)}else{factory(root.jQuery)}}(this,function($){var CanvasRenderer=function(el,options){var cachedBackground;var canvas=document.createElement('canvas');el.appendChild(canvas);if(typeof(G_vmlCanvasManager)!=='undefined'){G_vmlCanvasManager.initElement(canvas)}
var ctx=canvas.getContext('2d');canvas.width=canvas.height=options.size;var scaleBy=1;if(window.devicePixelRatio>1){scaleBy=window.devicePixelRatio;canvas.style.width=canvas.style.height=[options.size,'%'].join('');canvas.width=canvas.height=options.size*scaleBy;ctx.scale(scaleBy,scaleBy)}
ctx.translate(options.size/2,options.size/2);ctx.rotate((-1/2+options.rotate/180)*Math.PI);var radius=(options.size-options.lineWidth)/2;if(options.scaleColor&&options.scaleLength){radius-=options.scaleLength+2}
Date.now=Date.now||function(){return+(new Date())};var drawCircle=function(color,lineWidth,percent){percent=Math.min(Math.max(-1,percent||0),1);var isNegative=percent<=0?!0:!1;ctx.beginPath();ctx.arc(0,0,radius,0,Math.PI*2*percent,isNegative);ctx.strokeStyle=color;ctx.lineWidth=lineWidth;ctx.stroke()};var drawScale=function(){var offset;var length;ctx.lineWidth=1;ctx.fillStyle=options.scaleColor;ctx.save();for(var i=24;i>0;--i){if(i%6===0){length=options.scaleLength;offset=0}else{length=options.scaleLength*0.6;offset=options.scaleLength-length}
ctx.fillRect(-options.size/2+offset,0,length,1);ctx.rotate(Math.PI/12)}
ctx.restore()};var reqAnimationFrame=(function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(callback){window.setTimeout(callback,1000/60)}}());var drawBackground=function(){if(options.scaleColor)drawScale();if(options.trackColor)drawCircle(options.trackColor,options.lineWidth,1)};this.getCanvas=function(){return canvas};this.getCtx=function(){return ctx};this.clear=function(){ctx.clearRect(options.size/-2,options.size/-2,options.size,options.size)};this.draw=function(percent){if(!!options.scaleColor||!!options.trackColor){if(ctx.getImageData&&ctx.putImageData){if(!cachedBackground){drawBackground();cachedBackground=ctx.getImageData(0,0,options.size*scaleBy,options.size*scaleBy)}else{ctx.putImageData(cachedBackground,0,0)}}else{this.clear();drawBackground()}}else{this.clear()}
ctx.lineCap=options.lineCap;var color;if(typeof(options.barColor)==='function'){color=options.barColor(percent)}else{color=options.barColor}
drawCircle(color,options.lineWidth,percent/100)}.bind(this);this.animate=function(from,to){var startTime=Date.now();options.onStart(from,to);var animation=function(){var process=Math.min(Date.now()-startTime,options.animate.duration);var currentValue=options.easing(this,process,from,to-from,options.animate.duration);this.draw(currentValue);options.onStep(from,to,currentValue);if(process>=options.animate.duration){options.onStop(from,to)}else{reqAnimationFrame(animation)}}.bind(this);reqAnimationFrame(animation)}.bind(this)};var EasyPieChart=function(el,opts){var defaultOptions={barColor:'#ef1e25',trackColor:'#f9f9f9',scaleColor:'#dfe0e0',scaleLength:5,lineCap:'round',lineWidth:3,size:110,rotate:0,animate:{duration:1000,enabled:!0},easing:function(x,t,b,c,d){t=t/(d/2);if(t<1){return c/2*t*t+b}
return-c/2*((--t)*(t-2)-1)+b},onStart:function(from,to){return},onStep:function(from,to,currentValue){return},onStop:function(from,to){return}};if(typeof(CanvasRenderer)!=='undefined'){defaultOptions.renderer=CanvasRenderer}else if(typeof(SVGRenderer)!=='undefined'){defaultOptions.renderer=SVGRenderer}else{throw new Error('Please load either the SVG- or the CanvasRenderer')}
var options={};var currentValue=0;var init=function(){this.el=el;this.options=options;for(var i in defaultOptions){if(defaultOptions.hasOwnProperty(i)){options[i]=opts&&typeof(opts[i])!=='undefined'?opts[i]:defaultOptions[i];if(typeof(options[i])==='function'){options[i]=options[i].bind(this)}}}
if(typeof(options.easing)==='string'&&typeof(jQuery)!=='undefined'&&jQuery.isFunction(jQuery.easing[options.easing])){options.easing=jQuery.easing[options.easing]}else{options.easing=defaultOptions.easing}
if(typeof(options.animate)==='number'){options.animate={duration:options.animate,enabled:!0}}
if(typeof(options.animate)==='boolean'&&!options.animate){options.animate={duration:1000,enabled:options.animate}}
this.renderer=new options.renderer(el,options);this.renderer.draw(currentValue);if(el.dataset&&el.dataset.percent){this.update(parseFloat(el.dataset.percent))}else if(el.getAttribute&&el.getAttribute('data-percent')){this.update(parseFloat(el.getAttribute('data-percent')))}}.bind(this);this.update=function(newValue){newValue=parseFloat(newValue);if(options.animate.enabled){this.renderer.animate(currentValue,newValue)}else{this.renderer.draw(newValue)}
currentValue=newValue;return this}.bind(this);this.disableAnimation=function(){options.animate.enabled=!1;return this};this.enableAnimation=function(){options.animate.enabled=!0;return this};init()};$.fn.easyPieChart=function(options){return this.each(function(){var instanceOptions;if(!$.data(this,'easyPieChart')){instanceOptions=$.extend({},options,$(this).data());$.data(this,'easyPieChart',new EasyPieChart(this,instanceOptions))}})}}));
/*!
jQuery Waypoints - v2.0.5
Copyright (c) 2011-2014 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function(){var t=[].indexOf||function(t){for(var e=0,n=this.length;e<n;e++){if(e in this&&this[e]===t)return e}
return-1},e=[].slice;(function(t,e){if(typeof define==="function"&&define.amd){return define("waypoints",["jquery"],function(n){return e(n,t)})}else{return e(t.jQuery,t)}})(window,function(n,r){var i,o,l,s,f,u,c,a,h,d,p,y,v,w,g,m;i=n(r);a=t.call(r,"ontouchstart")>=0;s={horizontal:{},vertical:{}};f=1;c={};u="waypoints-context-id";p="resize.waypoints";y="scroll.waypoints";v=1;w="waypoints-waypoint-ids";g="waypoint";m="waypoints";o=function(){function t(t){var e=this;this.$element=t;this.element=t[0];this.didResize=!1;this.didScroll=!1;this.id="context"+f++;this.oldScroll={x:t.scrollLeft(),y:t.scrollTop()};this.waypoints={horizontal:{},vertical:{}};this.element[u]=this.id;c[this.id]=this;t.bind(y,function(){var t;if(!(e.didScroll||a)){e.didScroll=!0;t=function(){e.doScroll();return e.didScroll=!1};return r.setTimeout(t,n[m].settings.scrollThrottle)}});t.bind(p,function(){var t;if(!e.didResize){e.didResize=!0;t=function(){n[m]("refresh");return e.didResize=!1};return r.setTimeout(t,n[m].settings.resizeThrottle)}})}
t.prototype.doScroll=function(){var t,e=this;t={horizontal:{newScroll:this.$element.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.$element.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};if(a&&(!t.vertical.oldScroll||!t.vertical.newScroll)){n[m]("refresh")}
n.each(t,function(t,r){var i,o,l;l=[];o=r.newScroll>r.oldScroll;i=o?r.forward:r.backward;n.each(e.waypoints[t],function(t,e){var n,i;if(r.oldScroll<(n=e.offset)&&n<=r.newScroll){return l.push(e)}else if(r.newScroll<(i=e.offset)&&i<=r.oldScroll){return l.push(e)}});l.sort(function(t,e){return t.offset-e.offset});if(!o){l.reverse()}
return n.each(l,function(t,e){if(e.options.continuous||t===l.length-1){return e.trigger([i])}})});return this.oldScroll={x:t.horizontal.newScroll,y:t.vertical.newScroll}};t.prototype.refresh=function(){var t,e,r,i=this;r=n.isWindow(this.element);e=this.$element.offset();this.doScroll();t={horizontal:{contextOffset:r?0:e.left,contextScroll:r?0:this.oldScroll.x,contextDimension:this.$element.width(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:r?0:e.top,contextScroll:r?0:this.oldScroll.y,contextDimension:r?n[m]("viewportHeight"):this.$element.height(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};return n.each(t,function(t,e){return n.each(i.waypoints[t],function(t,r){var i,o,l,s,f;i=r.options.offset;l=r.offset;o=n.isWindow(r.element)?0:r.$element.offset()[e.offsetProp];if(n.isFunction(i)){i=i.apply(r.element)}else if(typeof i==="string"){i=parseFloat(i);if(r.options.offset.indexOf("%")>-1){i=Math.ceil(e.contextDimension*i/100)}}
r.offset=o-e.contextOffset+e.contextScroll-i;if(r.options.onlyOnScroll&&l!=null||!r.enabled){return}
if(l!==null&&l<(s=e.oldScroll)&&s<=r.offset){return r.trigger([e.backward])}else if(l!==null&&l>(f=e.oldScroll)&&f>=r.offset){return r.trigger([e.forward])}else if(l===null&&e.oldScroll>=r.offset){return r.trigger([e.forward])}})})};t.prototype.checkEmpty=function(){if(n.isEmptyObject(this.waypoints.horizontal)&&n.isEmptyObject(this.waypoints.vertical)){this.$element.unbind([p,y].join(" "));return delete c[this.id]}};return t}();l=function(){function t(t,e,r){var i,o;if(r.offset==="bottom-in-view"){r.offset=function(){var t;t=n[m]("viewportHeight");if(!n.isWindow(e.element)){t=e.$element.height()}
return t-n(this).outerHeight()}}
this.$element=t;this.element=t[0];this.axis=r.horizontal?"horizontal":"vertical";this.callback=r.handler;this.context=e;this.enabled=r.enabled;this.id="waypoints"+v++;this.offset=null;this.options=r;e.waypoints[this.axis][this.id]=this;s[this.axis][this.id]=this;i=(o=this.element[w])!=null?o:[];i.push(this.id);this.element[w]=i}
t.prototype.trigger=function(t){if(!this.enabled){return}
if(this.callback!=null){this.callback.apply(this.element,t)}
if(this.options.triggerOnce){return this.destroy()}};t.prototype.disable=function(){return this.enabled=!1};t.prototype.enable=function(){this.context.refresh();return this.enabled=!0};t.prototype.destroy=function(){delete s[this.axis][this.id];delete this.context.waypoints[this.axis][this.id];return this.context.checkEmpty()};t.getWaypointsByElement=function(t){var e,r;r=t[w];if(!r){return[]}
e=n.extend({},s.horizontal,s.vertical);return n.map(r,function(t){return e[t]})};return t}();d={init:function(t,e){var r;e=n.extend({},n.fn[g].defaults,e);if((r=e.handler)==null){e.handler=t}
this.each(function(){var t,r,i,s;t=n(this);i=(s=e.context)!=null?s:n.fn[g].defaults.context;if(!n.isWindow(i)){i=t.closest(i)}
i=n(i);r=c[i[0][u]];if(!r){r=new o(i)}
return new l(t,r,e)});n[m]("refresh");return this},disable:function(){return d._invoke.call(this,"disable")},enable:function(){return d._invoke.call(this,"enable")},destroy:function(){return d._invoke.call(this,"destroy")},prev:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e>0){return t.push(n[e-1])}})},next:function(t,e){return d._traverse.call(this,t,e,function(t,e,n){if(e<n.length-1){return t.push(n[e+1])}})},_traverse:function(t,e,i){var o,l;if(t==null){t="vertical"}
if(e==null){e=r}
l=h.aggregate(e);o=[];this.each(function(){var e;e=n.inArray(this,l[t]);return i(o,e,l[t])});return this.pushStack(o)},_invoke:function(t){this.each(function(){var e;e=l.getWaypointsByElement(this);return n.each(e,function(e,n){n[t]();return!0})});return this}};n.fn[g]=function(){var t,r;r=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(d[r]){return d[r].apply(this,t)}else if(n.isFunction(r)){return d.init.apply(this,arguments)}else if(n.isPlainObject(r)){return d.init.apply(this,[null,r])}else if(!r){return n.error("jQuery Waypoints needs a callback function or handler option.")}else{return n.error("The "+r+" method does not exist in jQuery Waypoints.")}};n.fn[g].defaults={context:r,continuous:!0,enabled:!0,horizontal:!1,offset:0,triggerOnce:!1};h={refresh:function(){return n.each(c,function(t,e){return e.refresh()})},viewportHeight:function(){var t;return(t=r.innerHeight)!=null?t:i.height()},aggregate:function(t){var e,r,i;e=s;if(t){e=(i=c[n(t)[0][u]])!=null?i.waypoints:void 0}
if(!e){return[]}
r={horizontal:[],vertical:[]};n.each(r,function(t,i){n.each(e[t],function(t,e){return i.push(e)});i.sort(function(t,e){return t.offset-e.offset});r[t]=n.map(i,function(t){return t.element});return r[t]=n.unique(r[t])});return r},above:function(t){if(t==null){t=r}
return h._filter(t,"vertical",function(t,e){return e.offset<=t.oldScroll.y})},below:function(t){if(t==null){t=r}
return h._filter(t,"vertical",function(t,e){return e.offset>t.oldScroll.y})},left:function(t){if(t==null){t=r}
return h._filter(t,"horizontal",function(t,e){return e.offset<=t.oldScroll.x})},right:function(t){if(t==null){t=r}
return h._filter(t,"horizontal",function(t,e){return e.offset>t.oldScroll.x})},enable:function(){return h._invoke("enable")},disable:function(){return h._invoke("disable")},destroy:function(){return h._invoke("destroy")},extendFn:function(t,e){return d[t]=e},_invoke:function(t){var e;e=n.extend({},s.vertical,s.horizontal);return n.each(e,function(e,n){n[t]();return!0})},_filter:function(t,e,r){var i,o;i=c[n(t)[0][u]];if(!i){return[]}
o=[];n.each(i.waypoints[e],function(t,e){if(r(i,e)){return o.push(e)}});o.sort(function(t,e){return t.offset-e.offset});return n.map(o,function(t){return t.element})}};n[m]=function(){var t,n;n=arguments[0],t=2<=arguments.length?e.call(arguments,1):[];if(h[n]){return h[n].apply(null,t)}else{return h.aggregate.call(null,n)}};n[m].settings={resizeThrottle:100,scrollThrottle:30};return i.on("load.waypoints",function(){return n[m]("refresh")})})}).call(this);(function($,window,document,undefined){'use strict';Foundation.libs.reveal={name:'reveal',version:'5.5.1',locked:!1,settings:{animation:'fadeAndPop',animation_speed:250,close_on_background_click:!0,close_on_esc:!0,dismiss_modal_class:'close-reveal-modal',multiple_opened:!1,bg_class:'reveal-modal-bg',root_element:'body',open:function(){},opened:function(){},close:function(){},closed:function(){},bg:$('.reveal-modal-bg'),css:{open:{'opacity':0,'visibility':'visible','display':'block'},close:{'opacity':1,'visibility':'hidden','display':'none'}}},init:function(scope,method,options){$.extend(!0,this.settings,method,options);this.bindings(method,options)},events:function(scope){var self=this,S=self.S;S(this.scope).off('.reveal').on('click.fndtn.reveal','['+this.add_namespace('data-reveal-id')+']:not([disabled])',function(e){e.preventDefault();if(!self.locked){var element=S(this),ajax=element.data(self.data_attr('reveal-ajax'));self.locked=!0;if(typeof ajax==='undefined'){self.open.call(self,element)}else{var url=ajax===!0?element.attr('href'):ajax;self.open.call(self,element,{url:url})}}});S(document).on('click.fndtn.reveal',this.close_targets(),function(e){e.preventDefault();if(!self.locked){var settings=S('['+self.attr_name()+'].open').data(self.attr_name(!0)+'-init')||self.settings,bg_clicked=S(e.target)[0]===S('.'+settings.bg_class)[0];if(bg_clicked){if(settings.close_on_background_click){e.stopPropagation()}else{return}}
self.locked=!0;self.close.call(self,bg_clicked?S('['+self.attr_name()+'].open'):S(this).closest('['+self.attr_name()+']'))}});if(S('['+self.attr_name()+']',this.scope).length>0){S(this.scope).on('open.fndtn.reveal',this.settings.open).on('opened.fndtn.reveal',this.settings.opened).on('opened.fndtn.reveal',this.open_video).on('close.fndtn.reveal',this.settings.close).on('closed.fndtn.reveal',this.settings.closed).on('closed.fndtn.reveal',this.close_video)}else{S(this.scope).on('open.fndtn.reveal','['+self.attr_name()+']',this.settings.open).on('opened.fndtn.reveal','['+self.attr_name()+']',this.settings.opened).on('opened.fndtn.reveal','['+self.attr_name()+']',this.open_video).on('close.fndtn.reveal','['+self.attr_name()+']',this.settings.close).on('closed.fndtn.reveal','['+self.attr_name()+']',this.settings.closed).on('closed.fndtn.reveal','['+self.attr_name()+']',this.close_video)}
return!0},key_up_on:function(scope){var self=this;self.S('body').off('keyup.fndtn.reveal').on('keyup.fndtn.reveal',function(event){var open_modal=self.S('['+self.attr_name()+'].open'),settings=open_modal.data(self.attr_name(!0)+'-init')||self.settings;if(settings&&event.which===27&&settings.close_on_esc&&!self.locked){self.close.call(self,open_modal)}});return!0},key_up_off:function(scope){this.S('body').off('keyup.fndtn.reveal');return!0},open:function(target,ajax_settings){var self=this,modal;if(target){if(typeof target.selector!=='undefined'){modal=self.S('#'+target.data(self.data_attr('reveal-id'))).first()}else{modal=self.S(this.scope);ajax_settings=target}}else{modal=self.S(this.scope)}
var settings=modal.data(self.attr_name(!0)+'-init');settings=settings||this.settings;if(modal.hasClass('open')&&target.attr('data-reveal-id')==modal.attr('id')){return self.close(modal)}
if(!modal.hasClass('open')){var open_modal=self.S('['+self.attr_name()+'].open');if(typeof modal.data('css-top')==='undefined'){modal.data('css-top',parseInt(modal.css('top'),10)).data('offset',this.cache_offset(modal))}
this.key_up_on(modal);modal.on('open.fndtn.reveal').trigger('open.fndtn.reveal');if(open_modal.length<1){this.toggle_bg(modal,!0)}
if(typeof ajax_settings==='string'){ajax_settings={url:ajax_settings}}
if(typeof ajax_settings==='undefined'||!ajax_settings.url){if(open_modal.length>0){if(settings.multiple_opened){this.to_back(open_modal)}else{this.hide(open_modal,settings.css.close)}}
this.show(modal,settings.css.open)}else{var old_success=typeof ajax_settings.success!=='undefined'?ajax_settings.success:null;$.extend(ajax_settings,{success:function(data,textStatus,jqXHR){if($.isFunction(old_success)){var result=old_success(data,textStatus,jqXHR);if(typeof result=='string'){data=result}}
modal.html(data);self.S(modal).foundation('section','reflow');self.S(modal).children().foundation();if(open_modal.length>0){if(settings.multiple_opened){this.to_back(open_modal)}else{this.hide(open_modal,settings.css.close)}}
self.show(modal,settings.css.open)}});$.ajax(ajax_settings)}}
self.S(window).trigger('resize')},close:function(modal){var modal=modal&&modal.length?modal:this.S(this.scope),open_modals=this.S('['+this.attr_name()+'].open'),settings=modal.data(this.attr_name(!0)+'-init')||this.settings;if(open_modals.length>0){this.locked=!0;this.key_up_off(modal);modal.trigger('close').trigger('close.fndtn.reveal');if((settings.multiple_opened&&open_modals.length===1)||!settings.multiple_opened||modal.length>1){this.toggle_bg(modal,!1);this.to_front(modal)}
if(settings.multiple_opened){this.hide(modal,settings.css.close,settings);this.to_front($($.makeArray(open_modals).reverse()[1]))}else{this.hide(open_modals,settings.css.close,settings)}}},close_targets:function(){var base='.'+this.settings.dismiss_modal_class;if(this.settings.close_on_background_click){return base+', .'+this.settings.bg_class}
return base},toggle_bg:function(modal,state){if(this.S('.'+this.settings.bg_class).length===0){this.settings.bg=$('<div />',{'class':this.settings.bg_class}).appendTo('body').hide()}
var visible=this.settings.bg.filter(':visible').length>0;if(state!=visible){if(state==undefined?visible:!state){this.hide(this.settings.bg)}else{this.show(this.settings.bg)}}},show:function(el,css){if(css){var settings=el.data(this.attr_name(!0)+'-init')||this.settings,root_element=settings.root_element;if(el.parent(root_element).length===0){var placeholder=el.wrap('<div style="display: none;" />').parent();el.on('closed.fndtn.reveal.wrapped',function(){el.detach().appendTo(placeholder);el.unwrap().unbind('closed.fndtn.reveal.wrapped')});el.detach().appendTo(root_element)}
var animData=getAnimationData(settings.animation);if(!animData.animate){this.locked=!1}
if(animData.pop){css.top=$(window).scrollTop()-el.data('offset')+'px';var end_css={top:$(window).scrollTop()+el.data('css-top')+'px',opacity:1};return setTimeout(function(){return el.css(css).animate(end_css,settings.animation_speed,'linear',function(){this.locked=!1;el.trigger('opened').trigger('opened.fndtn.reveal')}.bind(this)).addClass('open')}.bind(this),settings.animation_speed/2)}
if(animData.fade){css.top=$(window).scrollTop()+el.data('css-top')+'px';var end_css={opacity:1};return setTimeout(function(){return el.css(css).animate(end_css,settings.animation_speed,'linear',function(){this.locked=!1;el.trigger('opened').trigger('opened.fndtn.reveal')}.bind(this)).addClass('open')}.bind(this),settings.animation_speed/2)}
return el.css(css).show().css({opacity:1}).addClass('open').trigger('opened').trigger('opened.fndtn.reveal')}
var settings=this.settings;if(getAnimationData(settings.animation).fade){return el.fadeIn(settings.animation_speed/2)}
this.locked=!1;return el.show()},to_back:function(el){el.addClass('toback')},to_front:function(el){el.removeClass('toback')},hide:function(el,css){if(css){var settings=el.data(this.attr_name(!0)+'-init');settings=settings||this.settings;var animData=getAnimationData(settings.animation);if(!animData.animate){this.locked=!1}
if(animData.pop){var end_css={top:-$(window).scrollTop()-el.data('offset')+'px',opacity:0};return setTimeout(function(){return el.animate(end_css,settings.animation_speed,'linear',function(){this.locked=!1;el.css(css).trigger('closed').trigger('closed.fndtn.reveal')}.bind(this)).removeClass('open')}.bind(this),settings.animation_speed/2)}
if(animData.fade){var end_css={opacity:0};return setTimeout(function(){return el.animate(end_css,settings.animation_speed,'linear',function(){this.locked=!1;el.css(css).trigger('closed').trigger('closed.fndtn.reveal')}.bind(this)).removeClass('open')}.bind(this),settings.animation_speed/2)}
return el.hide().css(css).removeClass('open').trigger('closed').trigger('closed.fndtn.reveal')}
var settings=this.settings;if(getAnimationData(settings.animation).fade){return el.fadeOut(settings.animation_speed/2)}
return el.hide()},close_video:function(e){var video=$('.flex-video',e.target),iframe=$('iframe',video);if(iframe.length>0){iframe.attr('data-src',iframe[0].src);iframe.attr('src',iframe.attr('src'));video.hide()}},open_video:function(e){var video=$('.flex-video',e.target),iframe=video.find('iframe');if(iframe.length>0){var data_src=iframe.attr('data-src');if(typeof data_src==='string'){iframe[0].src=iframe.attr('data-src')}else{var src=iframe[0].src;iframe[0].src=undefined;iframe[0].src=src}
video.show()}},data_attr:function(str){if(this.namespace.length>0){return this.namespace+'-'+str}
return str},cache_offset:function(modal){var offset=modal.show().height()+parseInt(modal.css('top'),10);modal.hide();return offset},off:function(){$(this.scope).off('.fndtn.reveal')},reflow:function(){}};function getAnimationData(str){var fade=/fade/i.test(str);var pop=/pop/i.test(str);return{animate:fade||pop,pop:pop,fade:fade}}}(jQuery,window,window.document));(function($,window,document,undefined){'use strict';Foundation.libs.equalizer={name:'equalizer',version:'5.5.1',settings:{use_tallest:!0,before_height_change:$.noop,after_height_change:$.noop,equalize_on_stack:!1},init:function(scope,method,options){Foundation.inherit(this,'image_loaded');this.bindings(method,options);this.reflow()},events:function(){this.S(window).off('.equalizer').on('resize.fndtn.equalizer',function(e){this.reflow()}.bind(this))},equalize:function(equalizer){var isStacked=!1,vals=equalizer.find('['+this.attr_name()+'-watch]:visible'),settings=equalizer.data(this.attr_name(!0)+'-init');if(vals.length===0){return}
var firstTopOffset=vals.first().offset().top;settings.before_height_change();equalizer.trigger('before-height-change').trigger('before-height-change.fndth.equalizer');vals.height('inherit');vals.each(function(){var el=$(this);if(el.offset().top!==firstTopOffset){isStacked=!0}});if(settings.equalize_on_stack===!1){if(isStacked){return}};var heights=vals.map(function(){return $(this).outerHeight(!1)}).get();if(settings.use_tallest){var max=Math.max.apply(null,heights);vals.css('height',max)}else{var min=Math.min.apply(null,heights);vals.css('height',min)}
settings.after_height_change();equalizer.trigger('after-height-change').trigger('after-height-change.fndtn.equalizer')},reflow:function(){var self=this;this.S('['+this.attr_name()+']',this.scope).each(function(){var $eq_target=$(this);self.image_loaded(self.S('img',this),function(){self.equalize($eq_target)})})}}})(jQuery,window,window.document);jQuery(document).ready(function($){datafile=$('.counter').data('file');$('.counter').counterUp({delay:10,time:datafile})});jQuery(document).ready(function($){$('.circular-item-style-1').appear();$(document.body).on('appear','.circular-item-style-1',function(){var easy_pie_chart={};$('.circular-item-style-1').removeClass("hidden");$('.circular-pie-style-1').each(function(){$(this).easyPieChart($.extend(!0,{},easy_pie_chart,{size:100,animate:2000,lineWidth:2,lineCap:'square',barColor:$(this).data('color'),lineWidth:4,scaleColor:!1,barColor:'#2980b9',trackColor:'#DAD9DB',onStep:function(from,to,percent){this.el.children[0].innerHTML=Math.round(percent)+'%'}}))})})});jQuery(document).ready(function($){$('.circular-item-style-team').appear();$(document.body).on('appear','.circular-item-style-team',function(){var easy_pie_chart={};$('.circular-item-style-team').removeClass("hidden");$('.circular-pie-style-team').each(function(){$(this).easyPieChart($.extend(!0,{},easy_pie_chart,{animate:2000,lineWidth:2,lineCap:'square',barColor:$(this).data('color'),lineWidth:4,scaleColor:!1,barColor:'#CC9900',trackColor:'#F3F3F3',onStep:function(from,to,percent){this.el.children[0].innerHTML=Math.round(percent)+'%'}}))})})});jQuery(document).ready(function($){$('.circular-item-style-2').appear();$(document.body).on('appear','.circular-item-style-2',function(){var easy_pie_chart={};$('.circular-item-style-2').removeClass("hidden");$('.circular-pie-style-2').each(function(){$(this).easyPieChart($.extend(!0,{},easy_pie_chart,{size:220,animate:2000,lineWidth:42,lineCap:'square',barColor:$(this).data('color'),lineWidth:24,scaleColor:!1,barColor:'#2980b9',trackColor:'transparent',onStep:function(from,to,percent){this.el.children[0].innerHTML=Math.round(percent)+'%'}}))})})});jQuery(document).ready(function($){$('.circular-item-style-3').appear();$(document.body).on('appear','.circular-item-style-3',function(){var easy_pie_chart={};$('.circular-item-style-3').removeClass("hidden");$('.circular-pie-style-3').each(function(){$(this).easyPieChart($.extend(!0,{},easy_pie_chart,{size:220,animate:2000,lineWidth:42,lineCap:'square',barColor:$(this).data('color'),lineWidth:24,scaleColor:!1,barColor:'#2980b9',trackColor:'#DAD9DB',onStep:function(from,to,percent){this.el.children[0].innerHTML=Math.round(percent)+'%'}}))})})});jQuery(document).ready(function(){$window=jQuery(window);jQuery('.parallax').each(function(){var $scroll=$(this);jQuery(window).scroll(function(){var yPos=-($window.scrollTop()/$scroll.data('speed'));var coords='50% '+yPos+'px';$scroll.css({backgroundPosition:coords})})})});jQuery(document).ready(function($){function initializeMap(){var styles=[{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-100},{"lightness":20}]},{"featureType":"road","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-100},{"lightness":40}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-10},{"lightness":30}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"simplified"},{"saturation":-60},{"lightness":10}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"visibility":"simplified"},{"saturation":-60},{"lightness":60}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"},{"saturation":-100},{"lightness":60}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"},{"saturation":-100},{"lightness":60}]}];var styledMap=new google.maps.StyledMapType(styles,{name:"Styled Map"});var mapOptions={scaleControl:!0,scrollwheel:!1,center:new google.maps.LatLng(latitude,longitude),zoom:doors_zoom,mapTypeControlOptions:{mapTypeIds:[google.maps.MapTypeId.ROADMAP,'map_style']}};var map=new google.maps.Map(document.getElementById('map-canvas'),mapOptions);map.mapTypes.set('map_style',styledMap);map.setMapTypeId('map_style');var image=window.location.origin+window.location.pathname+'wp-content/themes/doors/images/marker_icon.png';var marker=new google.maps.Marker({map:map,icon:image,position:map.getCenter()});var infowindow=new google.maps.InfoWindow();if(companyname!=""){companyname="<h4>"+companyname+"</h4>"}
infowindow.setContent("<div class='map-description'>"+companyname+" "+description+"</div>");infowindow.open(map,marker);google.maps.event.addListener(marker,'click',function(){infowindow.open(map,marker)})}
if($('#map-canvas').length>0){var latitude=$('#map-canvas').data('latitude'),longitude=$('#map-canvas').data('longitude'),doors_zoom=$('#map-canvas').data('zoom'),companyname=$('#map-canvas').data('companyname'),imagepath=$('#map-canvas').data('imagepath'),description=$('#map-canvas').data('decription');if(imagepath==""){var image_markup=''}else{var image_markup='<div class="map-img"><img src="'+imagepath+'" alt="" width="320px"></div>'}
google.maps.event.addDomListener(window,'load',initializeMap)}
var $direction;if($('html').attr('dir')=='rtl'){$direction=!0}else{$direction=!1}
$('.carousel').owlCarousel({items:1,rtl:$direction,margin:10,autoplay:!0,autoplayTimeout:5000,});$Bitmnumber=$(".carousel_blog").data("numberitem");$Bmargin=$(".carousel_blog").data("margin");$('.carousel_blog').owlCarousel({items:$Bitmnumber,margin:$Bmargin,rtl:$direction,navText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],autoplay:!0,autoplayTimeout:5000,responsiveClass:!0,responsive:{0:{items:1,nav:!0,rtl:$direction,},600:{items:2,rtl:$direction,nav:!1},1000:{items:$Bitmnumber,nav:!0,rtl:$direction,loop:!1,}}});$Pitmnumber=$(".carousel_portfolio").data("numberitem");$Pmargin=$(".carousel_portfolio").data("margin");$('.carousel_portfolio').owlCarousel({items:$Pitmnumber,margin:$Pmargin,rtl:$direction,navText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],autoplay:!0,autoplayTimeout:5000,responsiveClass:!0,responsive:{0:{items:1,nav:!0,rtl:$direction,},600:{items:2,rtl:$direction,nav:!0},1000:{items:$Pitmnumber,rtl:$direction,nav:!0,loop:!0,}}});var show=$(".testimonials-box").data("show");$('.testimonials').owlCarousel({items:show,rtl:$direction,pagination:!0,});$('.carousel_client').owlCarousel({items:5,nav:!0,rtl:$direction,margin:10,navText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],autoplay:!0,autoplayTimeout:5000,responsiveClass:!0,responsive:{0:{items:1,rtl:$direction,nav:!0,},600:{items:2,rtl:$direction,nav:!1},1000:{items:5,rtl:$direction,nav:!0,loop:!0,}}});$('.wd-gallery-images-holder').owlCarousel({items:1,nav:!0,rtl:$direction,margin:10,navText:["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],autoplay:!0,autoplayTimeout:5000,});$('.shop-carousel').owlCarousel({items:1,nav:!0,rtl:$direction,margin:10,dots:!0,navText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],autoplay:!0,autoplayTimeout:5000,});var navigation_style_slider=$('.team-member-slider').data('navigation');var navigation_style_carousel=$('.team-member-carousel').data('navigation');var elements_to_show_mobile=$('.team-member-carousel').data('showmobile');var elements_to_show_tablet=$('.team-member-carousel').data('showtablet');var elements_to_show_desktop=$('.team-member-carousel').data('showdesktop');var elements_to_swipe=$('.team-member-carousel').data('swipe');if(navigation_style_slider=="dotts"){$(window).load(function(){$('.team-member-slider').owlCarousel({loop:!0,margin:0,nav:!1,dots:!0,items:1,onInitialize:function(event){if($('.owl-carousel .item').length<=1){this.settings.loop=!1}}})})}
if(navigation_style_slider=="arrows"){$(window).load(function(){$('.team-member-slider').owlCarousel({loop:!0,margin:0,nav:!0,dots:!1,items:1,onInitialize:function(event){if($('.owl-carousel .item').length<=1){this.settings.loop=!1}}})})}
if(navigation_style_carousel=="arrows"){$(window).load(function(){$('.team-member-carousel').owlCarousel({loop:!0,margin:0,nav:!0,dots:!1,responsive:{0:{items:elements_to_show_mobile},600:{items:elements_to_show_tablet},1000:{items:elements_to_show_desktop}},slideBy:elements_to_swipe,onInitialize:function(event){if($('.owl-carousel .item').length<=1){this.settings.loop=!1}}})})}
if(navigation_style_carousel=="dotts"){$(window).load(function(){$('.team-member-carousel').owlCarousel({loop:!0,margin:0,nav:!1,dots:!0,slideBy:elements_to_swipe,esponsive:{0:{items:elements_to_show_mobile},600:{items:elements_to_show_tablet},1000:{items:elements_to_show_desktop}},onInitialize:function(event){if($('.owl-carousel .item').length<=1){this.settings.loop=!1}}})})}
if($('.owl-testimonail').length){$('.owl-testimonail').each(function(i,obj){testimonial_slider_setting(this)})}
function testimonial_slider_setting(el){var $data=$(el).data('infinity');var owl_testimonial=$(el).owlCarousel({items:1,nav:!1,rtl:$direction,margin:10,autoplay:!0,loop:$data,navText:[""],autoplayTimeout:5000,thumbs:!0,thumbsPrerendered:!0,responsiveClass:!0,onInitialize:function(event){if($(el).find('.wd-testimonail-item').length<=1){this.settings.loop=!1}}});$(".testimonial-next").click(function(){owl_testimonial.trigger('next.owl.carousel')});$(".testimonial-prev").click(function(){owl_testimonial.trigger('prev.owl.carousel')})}});!function(a){a.fn.hoverIntent=function(b,c,d){var e={interval:100,sensitivity:6,timeout:0};e="object"==typeof b?a.extend(e,b):a.isFunction(c)?a.extend(e,{over:b,out:c,selector:d}):a.extend(e,{over:b,out:b,selector:c});var f,g,h,i,j=function(a){f=a.pageX,g=a.pageY},k=function(b,c){return c.hoverIntent_t=clearTimeout(c.hoverIntent_t),Math.sqrt((h-f)*(h-f)+(i-g)*(i-g))<e.sensitivity?(a(c).off("mousemove.hoverIntent",j),c.hoverIntent_s=!0,e.over.apply(c,[b])):(h=f,i=g,c.hoverIntent_t=setTimeout(function(){k(b,c)},e.interval),void 0)},l=function(a,b){return b.hoverIntent_t=clearTimeout(b.hoverIntent_t),b.hoverIntent_s=!1,e.out.apply(b,[a])},m=function(b){var c=a.extend({},b),d=this;d.hoverIntent_t&&(d.hoverIntent_t=clearTimeout(d.hoverIntent_t)),"mouseenter"===b.type?(h=c.pageX,i=c.pageY,a(d).on("mousemove.hoverIntent",j),d.hoverIntent_s||(d.hoverIntent_t=setTimeout(function(){k(c,d)},e.interval))):(a(d).off("mousemove.hoverIntent",j),d.hoverIntent_s&&(d.hoverIntent_t=setTimeout(function(){l(c,d)},e.timeout)))};return this.on({"mouseenter.hoverIntent":m,"mouseleave.hoverIntent":m},e.selector)}}(jQuery);jQuery(document).ready(function($){"use strict";var isMobile={Android:function(){return navigator.userAgent.match(/Android/i)},BlackBerry:function(){return navigator.userAgent.match(/BlackBerry/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},Opera:function(){return navigator.userAgent.match(/Opera Mini/i)},Windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return(isMobile.Android()||isMobile.BlackBerry()||isMobile.iOS()||isMobile.Opera()||isMobile.Windows())}};if(!isMobile.any()){var waypoints=$('.main').waypoint({handler:function(direction){$('.wd-section-blog-services.style-3').addClass('anim-on');$('.wd-section-blog-services.style-3 .wd-blog-post').addClass('nohover')},offset:'45%'});$('.animated').css('opacity',0);var thisParent=$(this).closest('.animation-parent'),animationDelay=thisParent.data('animation-delay');$('.animation-parent').each(function(index,element){$('.animated',$(this)).each(function(index,element){thisParent=$(this).closest('.animation-parent');animationDelay=thisParent.data('animation-delay');animationDelay=animationDelay*index;$(this).css('animation-delay',animationDelay+'ms')})});$('.animated').waypoint(function(){$(this).css('opacity',1);$(this).addClass($(this).data('animated'))},{offset:'bottom-in-view'})}else{$("div").removeClass('wpb_animate_when_almost_visible');$('.animated').css('opacity',1)}
$(document).foundation({equalizer:{equalize_on_stack:!0}});$('video,audio').mediaelementplayer();$(".image").on('click',function(e){var url_image='.'+$(this).data('url');$('.wd-all-image > div').addClass('wd-hide');$(url_image).removeClass('wd-hide');$(".image").removeClass('active');$(this).addClass('active')});var movementsize=-160;$(".styleswitcher-contener .selector").on("click",function(){$('.styleswitcher').animate({left:'+='+movementsize},500,function(){movementsize=movementsize*-1})});$('.styleswitcher').animate({left:'+='+movementsize},1500,function(){movementsize=movementsize*-1});$('input[type=radio][name=switch-color]').change(function(){if(this.value=='white'){$('body').removeClass('black')}else if(this.value=='black'){$('body').addClass('black')}});$('input[type=radio][name=switch-layout]').change(function(){if(this.value=='full'){$('body').removeClass('l-boxed')}else if(this.value=='boxed'){$('body').addClass('l-boxed')}});function blog_info_height(){$(".blog-info").each(function(){$(this).css('height',$(this).parent().height())})}
blog_info_height();$('.animated-content').appear(function(){$(this).addClass('animated')},{accX:50,accY:100});var classList;var sectionclass;$(".list-icon li").each(function(index){classList=$(this).parent().attr('class').split(/\s+/);var iconclass=classList[1].replace('list-','');$(this).prepend('<i class="fa '+iconclass+'"></i>')});$(".show-cart-btn").hoverIntent({over:cartover,out:cartout,timeout:500});function cartover(){$('.hidden-cart').stop(!0,!0).fadeIn({duration:500,queue:!1}).css('display','none').slideDown(500)}
function cartout(){$('.hidden-cart').stop(!0,!0).fadeOut({duration:100,queue:!1}).slideUp(100)}
$("hidden-cart").mouseover(function(){$(this).css("display","block")});$("hidden-cart").mouseout(function(){$(this).css("display","none")});function navout(){jQuery(this).children('ul').stop(!0,!0).fadeOut({duration:50,queue:!1}).slideUp(50)}
$(".menu-item-has-children > a").on("click",function(event){event.preventDefault()});$('.doors_full_screen').css({'height':($(window).height())+'px'});$(window).resize(function(){blog_info_height();var section_containers=$('.section-container.auto.center');$.each(section_containers,function(key,section_container){section_container=$(section_container);var section_containerWidth=section_container.width(),titles=section_container.find('p.title'),titleWidth=titles.first().width(),titleLen=titles.length,titleWidth=titles.first().width();$.each(titles,function(key2,value2){$(value2).animate({'left':((section_containerWidth/2)-((titleWidth*titleLen)/2)+key2*titleWidth),},100,'swing')})});if($(".doors_full_screen").length){$('.doors_full_screen').css({'height':($(window).height())+'px'})}});$("#trigger-overlay").on("click",function(){$('html').css('overflow','hidden');$('.overlay').addClass('open')});$(".overlay-close").on("click",function(){$('html').css('overflow','scroll');$('.overlay').removeClass('open')});var offices_location=jQuery('.offices-locations'),offices_list=jQuery('.offices-list'),office_location_point=offices_location.children('.office-location-point'),offices_list_name=offices_list.find('.location-name'),clicked;office_location_point.each(function(index,el){var $el=jQuery(el);$el.css({top:parseInt($el.attr('data-positiontop')),left:parseInt($el.attr('data-positionleft'))}).on('mouseover',function(){offices_list.find("[data-location='"+$el.attr('data-location')+"']").addClass('selected')}).on('mouseout',function(){offices_list_name.removeClass('selected')})});offices_list_name.on('mouseover',function(){offices_location.find("[data-location='"+jQuery(this).attr('data-location')+"']").addClass('selected')}).on('mouseout',function(){office_location_point.removeClass('selected')});if($('.doors_empty_space').length){$('.doors_empty_space').each(function(i,obj){doors_empty_space_padding(this)});window.addEventListener('resize',function(){$('.doors_empty_space').each(function(i,obj){doors_empty_space_padding(this)})},!0)}
function doors_empty_space_padding(el){var $mobile_height=$(el).data("heightmobile"),$tablet_height=$(el).data("heighttablet"),$desktop_height=$(el).data("heightdesktop");if(Modernizr.mq("(max-width: 40em)")){$(el).css("height",$mobile_height)}else if(Modernizr.mq("(min-width: 40.063em) and (max-width: 64em)")){$(el).css("height",$tablet_height)}else if(Modernizr.mq("(min-width: 64.063em)")){$(el).css("height",$desktop_height)}
$(document).foundation('equalizer','reflow')}
if($('.row-delimiter').length){$('.row-delimiter').each(function(i,obj){doors_delimiter_transform(this)});window.addEventListener('resize',function(){$('.row-delimiter').each(function(i,obj){doors_delimiter_transform(this)})},!0)}
function doors_delimiter_transform(el){var left='920';if($(el).hasClass('vertical_line_bottom_left')){left=parseInt($(el).parent().css('width'))/2}else if($(el).hasClass('vertical_line_bottom_right')){left=parseInt($(el).parent().css('width'))+parseInt($(el).parent().css('left'))}else{left=parseInt($(el).parent().css('left'))*-1}
$(el).css('transform','translateY(100%) translateX('+left+'px)')}
var $testimonial_quote_color=$(".testimonial-text").data('quotecolor');var $testimonial_quote_opacity=$(".testimonial-text").data('quoteopacity');var $testimonial_quote_size=$(".testimonial-text").data('quotesize');$('head').append('<style> .wd-testimonail .testimonial-text:before, .wd-testimonail .testimonial-text:after {color:'+$testimonial_quote_color+';opacity:.'+$testimonial_quote_opacity+';font-size:'+$testimonial_quote_size+'px;}</style>');$('.grid_hover figure h2').each(function(index,element){var heading=$(element);var word_array,last_word,first_part;word_array=heading.html().split(/\s+/);last_word=word_array.pop();first_part=word_array.join(' ');heading.html([first_part,' <span>',last_word,'</span>'].join(''))});$('input.multicheck').change(function(event){event.preventDefault();var csv='';$(this).parents('li:eq(0)').find('input[type=checkbox]').each(function(){if($(this).is(':checked')){csv+=$(this).attr('value')+','}});csv=csv.replace(/,+$/,"");$(this).parents('li:eq(0)').find('input[type=hidden]').val(csv).trigger('change');return!0});function _rtl(){if($('html').attr('dir')=='rtl'){$('[data-vc-full-width="true"]').each(function(i,v){$(this).css('right',$(this).css('left')).css('left','auto')})}}
$(document).on('vc-full-width-row',function(){_rtl()});_rtl();setTimeout(function(){$(".non_popup a.prettyphoto").removeClass('prettyphoto vc-prettyphoto-link vc_gitem-link vc-zone-link')},2000)});fbq('init','293534457987843',[],{"agent":"wordpress-4.9.6-1.7.25"});function setREVStartSize(e){try{e.c=jQuery(e.c);var i=jQuery(window).width(),t=9999,r=0,n=0,l=0,f=0,s=0,h=0;if(e.responsiveLevels&&(jQuery.each(e.responsiveLevels,function(e,f){f>i&&(t=r=f,l=e),i>f&&f>r&&(r=f,n=e)}),t>r&&(l=n)),f=e.gridheight[l]||e.gridheight[0]||e.gridheight,s=e.gridwidth[l]||e.gridwidth[0]||e.gridwidth,h=i/s,h=h>1?1:h,f=Math.round(h*f),"fullscreen"==e.sliderLayout){var u=(e.c.width(),jQuery(window).height());if(void 0!=e.fullScreenOffsetContainer){var c=e.fullScreenOffsetContainer.split(",");if(c)jQuery.each(c,function(e,i){u=jQuery(i).length>0?u-jQuery(i).outerHeight(!0):u}),e.fullScreenOffset.split("%").length>1&&void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0?u-=jQuery(window).height()*parseInt(e.fullScreenOffset,0)/100:void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0&&(u-=parseInt(e.fullScreenOffset,0))}f=u}else void 0!=e.minHeight&&f<e.minHeight&&(f=e.minHeight);e.c.closest(".rev_slider_wrapper").css({height:f})}catch(d){console.log("Failure at Presize of Slider:"+d)}};var widgetIds=[];var cf7srLoadCallback=function(){var cf7srWidgets=document.querySelectorAll('.cf7sr-g-recaptcha');for(var i=0;i<cf7srWidgets.length;++i){var cf7srWidget=cf7srWidgets[i];var widgetId=grecaptcha.render(cf7srWidget.id,{'sitekey':'6LfYOHYUAAAAAKXXMS6rSMlV4bM0GwNejBZNnDqH'});widgetIds.push(widgetId)}};(function($){$('.wpcf7').on('invalid.wpcf7 mailsent.wpcf7',function(){for(var i=0;i<widgetIds.length;i++){grecaptcha.reset(widgetIds[i])}})})(jQuery);jQuery(document).on('ready',function(){jQuery('.placeholder-for-hentry').addClass('hentry');jQuery('.placeholder-for-hentry').removeClass('placeholder-for-hentry')});jQuery(document).foundation();var wpcf7={"apiSettings":{"root":"https:\/\/vigrand.mk.ua\/wp-json\/contact-form-7\/v1","namespace":"contact-form-7\/v1"},"recaptcha":{"messages":{"empty":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435, \u0447\u0442\u043e \u0432\u044b \u043d\u0435 \u0440\u043e\u0431\u043e\u0442."}},"cached":"1"};var wpcf7={"apiSettings":{"root":"https:\/\/vigrand.mk.ua\/wp-json\/contact-form-7\/v1","namespace":"contact-form-7\/v1"},"recaptcha":{"messages":{"empty":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435, \u0447\u0442\u043e \u0432\u044b \u043d\u0435 \u0440\u043e\u0431\u043e\u0442."}},"cached":"1"};var wpcf7={"apiSettings":{"root":"https:\/\/vigrand.mk.ua\/wp-json\/contact-form-7\/v1","namespace":"contact-form-7\/v1"},"recaptcha":{"messages":{"empty":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435, \u0447\u0442\u043e \u0432\u044b \u043d\u0435 \u0440\u043e\u0431\u043e\u0442."}},"cached":"1"};(function($){'use strict';if(typeof wpcf7==='undefined'||wpcf7===null){return}
wpcf7=$.extend({cached:0,inputs:[]},wpcf7);$(function(){wpcf7.supportHtml5=(function(){var features={};var input=document.createElement('input');features.placeholder='placeholder' in input;var inputTypes=['email','url','tel','number','range','date'];$.each(inputTypes,function(index,value){input.setAttribute('type',value);features[value]=input.type!=='text'});return features})();$('div.wpcf7 > form').each(function(){var $form=$(this);wpcf7.initForm($form);if(wpcf7.cached){wpcf7.refill($form)}})});wpcf7.getId=function(form){return parseInt($('input[name="_wpcf7"]',form).val(),10)};wpcf7.initForm=function(form){var $form=$(form);$form.submit(function(event){if(!wpcf7.supportHtml5.placeholder){$('[placeholder].placeheld',$form).each(function(i,n){$(n).val('').removeClass('placeheld')})}
if(typeof window.FormData==='function'){wpcf7.submit($form);event.preventDefault()}});$('.wpcf7-submit',$form).after('<span class="ajax-loader"></span>');wpcf7.toggleSubmit($form);$form.on('click','.wpcf7-acceptance',function(){wpcf7.toggleSubmit($form)});$('.wpcf7-exclusive-checkbox',$form).on('click','input:checkbox',function(){var name=$(this).attr('name');$form.find('input:checkbox[name="'+name+'"]').not(this).prop('checked',!1)});$('.wpcf7-list-item.has-free-text',$form).each(function(){var $freetext=$(':input.wpcf7-free-text',this);var $wrap=$(this).closest('.wpcf7-form-control');if($(':checkbox, :radio',this).is(':checked')){$freetext.prop('disabled',!1)}else{$freetext.prop('disabled',!0)}
$wrap.on('change',':checkbox, :radio',function(){var $cb=$('.has-free-text',$wrap).find(':checkbox, :radio');if($cb.is(':checked')){$freetext.prop('disabled',!1).focus()}else{$freetext.prop('disabled',!0)}})});if(!wpcf7.supportHtml5.placeholder){$('[placeholder]',$form).each(function(){$(this).val($(this).attr('placeholder'));$(this).addClass('placeheld');$(this).focus(function(){if($(this).hasClass('placeheld')){$(this).val('').removeClass('placeheld')}});$(this).blur(function(){if(''===$(this).val()){$(this).val($(this).attr('placeholder'));$(this).addClass('placeheld')}})})}
if(wpcf7.jqueryUi&&!wpcf7.supportHtml5.date){$form.find('input.wpcf7-date[type="date"]').each(function(){$(this).datepicker({dateFormat:'yy-mm-dd',minDate:new Date($(this).attr('min')),maxDate:new Date($(this).attr('max'))})})}
if(wpcf7.jqueryUi&&!wpcf7.supportHtml5.number){$form.find('input.wpcf7-number[type="number"]').each(function(){$(this).spinner({min:$(this).attr('min'),max:$(this).attr('max'),step:$(this).attr('step')})})}
$('.wpcf7-character-count',$form).each(function(){var $count=$(this);var name=$count.attr('data-target-name');var down=$count.hasClass('down');var starting=parseInt($count.attr('data-starting-value'),10);var maximum=parseInt($count.attr('data-maximum-value'),10);var minimum=parseInt($count.attr('data-minimum-value'),10);var updateCount=function(target){var $target=$(target);var length=$target.val().length;var count=down?starting-length:length;$count.attr('data-current-value',count);$count.text(count);if(maximum&&maximum<length){$count.addClass('too-long')}else{$count.removeClass('too-long')}
if(minimum&&length<minimum){$count.addClass('too-short')}else{$count.removeClass('too-short')}};$(':input[name="'+name+'"]',$form).each(function(){updateCount(this);$(this).keyup(function(){updateCount(this)})})});$form.on('change','.wpcf7-validates-as-url',function(){var val=$.trim($(this).val());if(val&&!val.match(/^[a-z][a-z0-9.+-]*:/i)&&-1!==val.indexOf('.')){val=val.replace(/^\/+/,'');val='http://'+val}
$(this).val(val)})};wpcf7.submit=function(form){if(typeof window.FormData!=='function'){return}
var $form=$(form);$('.ajax-loader',$form).addClass('is-active');wpcf7.clearResponse($form);var formData=new FormData($form.get(0));var detail={id:$form.closest('div.wpcf7').attr('id'),status:'init',inputs:[],formData:formData};$.each($form.serializeArray(),function(i,field){if('_wpcf7'==field.name){detail.contactFormId=field.value}else if('_wpcf7_version'==field.name){detail.pluginVersion=field.value}else if('_wpcf7_locale'==field.name){detail.contactFormLocale=field.value}else if('_wpcf7_unit_tag'==field.name){detail.unitTag=field.value}else if('_wpcf7_container_post'==field.name){detail.containerPostId=field.value}else if(field.name.match(/^_wpcf7_\w+_free_text_/)){var owner=field.name.replace(/^_wpcf7_\w+_free_text_/,'');detail.inputs.push({name:owner+'-free-text',value:field.value})}else if(field.name.match(/^_/)){}else{detail.inputs.push(field)}});wpcf7.triggerEvent($form.closest('div.wpcf7'),'beforesubmit',detail);var ajaxSuccess=function(data,status,xhr,$form){detail.id=$(data.into).attr('id');detail.status=data.status;detail.apiResponse=data;var $message=$('.wpcf7-response-output',$form);switch(data.status){case 'validation_failed':$.each(data.invalidFields,function(i,n){$(n.into,$form).each(function(){wpcf7.notValidTip(this,n.message);$('.wpcf7-form-control',this).addClass('wpcf7-not-valid');$('[aria-invalid]',this).attr('aria-invalid','true')})});$message.addClass('wpcf7-validation-errors');$form.addClass('invalid');wpcf7.triggerEvent(data.into,'invalid',detail);break;case 'acceptance_missing':$message.addClass('wpcf7-acceptance-missing');$form.addClass('unaccepted');wpcf7.triggerEvent(data.into,'unaccepted',detail);break;case 'spam':$message.addClass('wpcf7-spam-blocked');$form.addClass('spam');$('[name="g-recaptcha-response"]',$form).each(function(){if(''===$(this).val()){var $recaptcha=$(this).closest('.wpcf7-form-control-wrap');wpcf7.notValidTip($recaptcha,wpcf7.recaptcha.messages.empty)}});wpcf7.triggerEvent(data.into,'spam',detail);break;case 'aborted':$message.addClass('wpcf7-aborted');$form.addClass('aborted');wpcf7.triggerEvent(data.into,'aborted',detail);break;case 'mail_sent':$message.addClass('wpcf7-mail-sent-ok');$form.addClass('sent');wpcf7.triggerEvent(data.into,'mailsent',detail);break;case 'mail_failed':$message.addClass('wpcf7-mail-sent-ng');$form.addClass('failed');wpcf7.triggerEvent(data.into,'mailfailed',detail);break;default:var customStatusClass='custom-'+data.status.replace(/[^0-9a-z]+/i,'-');$message.addClass('wpcf7-'+customStatusClass);$form.addClass(customStatusClass)}
wpcf7.refill($form,data);wpcf7.triggerEvent(data.into,'submit',detail);if('mail_sent'==data.status){$form.each(function(){this.reset()});wpcf7.toggleSubmit($form)}
if(!wpcf7.supportHtml5.placeholder){$form.find('[placeholder].placeheld').each(function(i,n){$(n).val($(n).attr('placeholder'))})}
$message.html('').append(data.message).slideDown('fast');$message.attr('role','alert');$('.screen-reader-response',$form.closest('.wpcf7')).each(function(){var $response=$(this);$response.html('').attr('role','').append(data.message);if(data.invalidFields){var $invalids=$('<ul></ul>');$.each(data.invalidFields,function(i,n){if(n.idref){var $li=$('<li></li>').append($('<a></a>').attr('href','#'+n.idref).append(n.message))}else{var $li=$('<li></li>').append(n.message)}
$invalids.append($li)});$response.append($invalids)}
$response.attr('role','alert').focus()})};$.ajax({type:'POST',url:wpcf7.apiSettings.getRoute('/contact-forms/'+wpcf7.getId($form)+'/feedback'),data:formData,dataType:'json',processData:!1,contentType:!1}).done(function(data,status,xhr){ajaxSuccess(data,status,xhr,$form);$('.ajax-loader',$form).removeClass('is-active')}).fail(function(xhr,status,error){var $e=$('<div class="ajax-error"></div>').text(error.message);$form.after($e)})};wpcf7.triggerEvent=function(target,name,detail){var $target=$(target);var event=new CustomEvent('wpcf7'+name,{bubbles:!0,detail:detail});$target.get(0).dispatchEvent(event);$target.trigger('wpcf7:'+name,detail);$target.trigger(name+'.wpcf7',detail)};wpcf7.toggleSubmit=function(form,state){var $form=$(form);var $submit=$('input:submit',$form);if(typeof state!=='undefined'){$submit.prop('disabled',!state);return}
if($form.hasClass('wpcf7-acceptance-as-validation')){return}
$submit.prop('disabled',!1);$('.wpcf7-acceptance',$form).each(function(){var $span=$(this);var $input=$('input:checkbox',$span);if(!$span.hasClass('optional')){if($span.hasClass('invert')&&$input.is(':checked')||!$span.hasClass('invert')&&!$input.is(':checked')){$submit.prop('disabled',!0);return!1}}})};wpcf7.notValidTip=function(target,message){var $target=$(target);$('.wpcf7-not-valid-tip',$target).remove();$('<span role="alert" class="wpcf7-not-valid-tip"></span>').text(message).appendTo($target);if($target.is('.use-floating-validation-tip *')){var fadeOut=function(target){$(target).not(':hidden').animate({opacity:0},'fast',function(){$(this).css({'z-index':-100})})};$target.on('mouseover','.wpcf7-not-valid-tip',function(){fadeOut(this)});$target.on('focus',':input',function(){fadeOut($('.wpcf7-not-valid-tip',$target))})}};wpcf7.refill=function(form,data){var $form=$(form);var refillCaptcha=function($form,items){$.each(items,function(i,n){$form.find(':input[name="'+i+'"]').val('');$form.find('img.wpcf7-captcha-'+i).attr('src',n);var match=/([0-9]+)\.(png|gif|jpeg)$/.exec(n);$form.find('input:hidden[name="_wpcf7_captcha_challenge_'+i+'"]').attr('value',match[1])})};var refillQuiz=function($form,items){$.each(items,function(i,n){$form.find(':input[name="'+i+'"]').val('');$form.find(':input[name="'+i+'"]').siblings('span.wpcf7-quiz-label').text(n[0]);$form.find('input:hidden[name="_wpcf7_quiz_answer_'+i+'"]').attr('value',n[1])})};if(typeof data==='undefined'){$.ajax({type:'GET',url:wpcf7.apiSettings.getRoute('/contact-forms/'+wpcf7.getId($form)+'/refill'),beforeSend:function(xhr){var nonce=$form.find(':input[name="_wpnonce"]').val();if(nonce){xhr.setRequestHeader('X-WP-Nonce',nonce)}},dataType:'json'}).done(function(data,status,xhr){if(data.captcha){refillCaptcha($form,data.captcha)}
if(data.quiz){refillQuiz($form,data.quiz)}})}else{if(data.captcha){refillCaptcha($form,data.captcha)}
if(data.quiz){refillQuiz($form,data.quiz)}}};wpcf7.clearResponse=function(form){var $form=$(form);$form.removeClass('invalid spam sent failed');$form.siblings('.screen-reader-response').html('').attr('role','');$('.wpcf7-not-valid-tip',$form).remove();$('[aria-invalid]',$form).attr('aria-invalid','false');$('.wpcf7-form-control',$form).removeClass('wpcf7-not-valid');$('.wpcf7-response-output',$form).hide().empty().removeAttr('role').removeClass('wpcf7-mail-sent-ok wpcf7-mail-sent-ng wpcf7-validation-errors wpcf7-spam-blocked')};wpcf7.apiSettings.getRoute=function(path){var url=wpcf7.apiSettings.root;url=url.replace(wpcf7.apiSettings.namespace,wpcf7.apiSettings.namespace+path);return url}})(jQuery);(function(){if(typeof window.CustomEvent==="function")return!1;function CustomEvent(event,params){params=params||{bubbles:!1,cancelable:!1,detail:undefined};var evt=document.createEvent('CustomEvent');evt.initCustomEvent(event,params.bubbles,params.cancelable,params.detail);return evt}
CustomEvent.prototype=window.Event.prototype;window.CustomEvent=CustomEvent})();var addComment={moveForm:function(a,b,c,d){var e,f,g,h,i=this,j=i.I(a),k=i.I(c),l=i.I("cancel-comment-reply-link"),m=i.I("comment_parent"),n=i.I("comment_post_ID"),o=k.getElementsByTagName("form")[0];if(j&&k&&l&&m&&o){i.respondId=c,d=d||!1,i.I("wp-temp-form-div")||(e=document.createElement("div"),e.id="wp-temp-form-div",e.style.display="none",k.parentNode.insertBefore(e,k)),j.parentNode.insertBefore(k,j.nextSibling),n&&d&&(n.value=d),m.value=b,l.style.display="",l.onclick=function(){var a=addComment,b=a.I("wp-temp-form-div"),c=a.I(a.respondId);if(b&&c)return a.I("comment_parent").value="0",b.parentNode.insertBefore(c,b),b.parentNode.removeChild(b),this.style.display="none",this.onclick=null,!1};try{for(var p=0;p<o.elements.length;p++)if(f=o.elements[p],h=!1,"getComputedStyle"in window?g=window.getComputedStyle(f):document.documentElement.currentStyle&&(g=f.currentStyle),(f.offsetWidth<=0&&f.offsetHeight<=0||"hidden"===g.visibility)&&(h=!0),"hidden"!==f.type&&!f.disabled&&!h){f.focus();break}}catch(q){}return!1}},I:function(a){return document.getElementById(a)}};/*!
 * jQuery UI Core 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){function b(b,d){var e,f,g,h=b.nodeName.toLowerCase();return"area"===h?(e=b.parentNode,f=e.name,!(!b.href||!f||"map"!==e.nodeName.toLowerCase())&&(g=a("img[usemap='#"+f+"']")[0],!!g&&c(g))):(/^(input|select|textarea|button|object)$/.test(h)?!b.disabled:"a"===h?b.href||d:d)&&c(b)}function c(b){return a.expr.filters.visible(b)&&!a(b).parents().addBack().filter(function(){return"hidden"===a.css(this,"visibility")}).length}a.ui=a.ui||{},a.extend(a.ui,{version:"1.11.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),a.fn.extend({scrollParent:function(b){var c=this.css("position"),d="absolute"===c,e=b?/(auto|scroll|hidden)/:/(auto|scroll)/,f=this.parents().filter(function(){var b=a(this);return(!d||"static"!==b.css("position"))&&e.test(b.css("overflow")+b.css("overflow-y")+b.css("overflow-x"))}).eq(0);return"fixed"!==c&&f.length?f:a(this[0].ownerDocument||document)},uniqueId:function(){var a=0;return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++a)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&a(this).removeAttr("id")})}}),a.extend(a.expr[":"],{data:a.expr.createPseudo?a.expr.createPseudo(function(b){return function(c){return!!a.data(c,b)}}):function(b,c,d){return!!a.data(b,d[3])},focusable:function(c){return b(c,!isNaN(a.attr(c,"tabindex")))},tabbable:function(c){var d=a.attr(c,"tabindex"),e=isNaN(d);return(e||d>=0)&&b(c,!e)}}),a("<a>").outerWidth(1).jquery||a.each(["Width","Height"],function(b,c){function d(b,c,d,f){return a.each(e,function(){c-=parseFloat(a.css(b,"padding"+this))||0,d&&(c-=parseFloat(a.css(b,"border"+this+"Width"))||0),f&&(c-=parseFloat(a.css(b,"margin"+this))||0)}),c}var e="Width"===c?["Left","Right"]:["Top","Bottom"],f=c.toLowerCase(),g={innerWidth:a.fn.innerWidth,innerHeight:a.fn.innerHeight,outerWidth:a.fn.outerWidth,outerHeight:a.fn.outerHeight};a.fn["inner"+c]=function(b){return void 0===b?g["inner"+c].call(this):this.each(function(){a(this).css(f,d(this,b)+"px")})},a.fn["outer"+c]=function(b,e){return"number"!=typeof b?g["outer"+c].call(this,b):this.each(function(){a(this).css(f,d(this,b,!0,e)+"px")})}}),a.fn.addBack||(a.fn.addBack=function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}),a("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(a.fn.removeData=function(b){return function(c){return arguments.length?b.call(this,a.camelCase(c)):b.call(this)}}(a.fn.removeData)),a.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),a.fn.extend({focus:function(b){return function(c,d){return"number"==typeof c?this.each(function(){var b=this;setTimeout(function(){a(b).focus(),d&&d.call(b)},c)}):b.apply(this,arguments)}}(a.fn.focus),disableSelection:function(){var a="onselectstart"in document.createElement("div")?"selectstart":"mousedown";return function(){return this.bind(a+".ui-disableSelection",function(a){a.preventDefault()})}}(),enableSelection:function(){return this.unbind(".ui-disableSelection")},zIndex:function(b){if(void 0!==b)return this.css("zIndex",b);if(this.length)for(var c,d,e=a(this[0]);e.length&&e[0]!==document;){if(c=e.css("position"),("absolute"===c||"relative"===c||"fixed"===c)&&(d=parseInt(e.css("zIndex"),10),!isNaN(d)&&0!==d))return d;e=e.parent()}return 0}}),a.ui.plugin={add:function(b,c,d){var e,f=a.ui[b].prototype;for(e in d)f.plugins[e]=f.plugins[e]||[],f.plugins[e].push([c,d[e]])},call:function(a,b,c,d){var e,f=a.plugins[b];if(f&&(d||a.element[0].parentNode&&11!==a.element[0].parentNode.nodeType))for(e=0;e<f.length;e++)a.options[f[e][0]]&&f[e][1].apply(a.element,c)}}});;/*!
 * jQuery UI Position 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){return function(){function b(a,b,c){return[parseFloat(a[0])*(n.test(a[0])?b/100:1),parseFloat(a[1])*(n.test(a[1])?c/100:1)]}function c(b,c){return parseInt(a.css(b,c),10)||0}function d(b){var c=b[0];return 9===c.nodeType?{width:b.width(),height:b.height(),offset:{top:0,left:0}}:a.isWindow(c)?{width:b.width(),height:b.height(),offset:{top:b.scrollTop(),left:b.scrollLeft()}}:c.preventDefault?{width:0,height:0,offset:{top:c.pageY,left:c.pageX}}:{width:b.outerWidth(),height:b.outerHeight(),offset:b.offset()}}a.ui=a.ui||{};var e,f,g=Math.max,h=Math.abs,i=Math.round,j=/left|center|right/,k=/top|center|bottom/,l=/[\+\-]\d+(\.[\d]+)?%?/,m=/^\w+/,n=/%$/,o=a.fn.position;a.position={scrollbarWidth:function(){if(void 0!==e)return e;var b,c,d=a("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),f=d.children()[0];return a("body").append(d),b=f.offsetWidth,d.css("overflow","scroll"),c=f.offsetWidth,b===c&&(c=d[0].clientWidth),d.remove(),e=b-c},getScrollInfo:function(b){var c=b.isWindow||b.isDocument?"":b.element.css("overflow-x"),d=b.isWindow||b.isDocument?"":b.element.css("overflow-y"),e="scroll"===c||"auto"===c&&b.width<b.element[0].scrollWidth,f="scroll"===d||"auto"===d&&b.height<b.element[0].scrollHeight;return{width:f?a.position.scrollbarWidth():0,height:e?a.position.scrollbarWidth():0}},getWithinInfo:function(b){var c=a(b||window),d=a.isWindow(c[0]),e=!!c[0]&&9===c[0].nodeType;return{element:c,isWindow:d,isDocument:e,offset:c.offset()||{left:0,top:0},scrollLeft:c.scrollLeft(),scrollTop:c.scrollTop(),width:d||e?c.width():c.outerWidth(),height:d||e?c.height():c.outerHeight()}}},a.fn.position=function(e){if(!e||!e.of)return o.apply(this,arguments);e=a.extend({},e);var n,p,q,r,s,t,u=a(e.of),v=a.position.getWithinInfo(e.within),w=a.position.getScrollInfo(v),x=(e.collision||"flip").split(" "),y={};return t=d(u),u[0].preventDefault&&(e.at="left top"),p=t.width,q=t.height,r=t.offset,s=a.extend({},r),a.each(["my","at"],function(){var a,b,c=(e[this]||"").split(" ");1===c.length&&(c=j.test(c[0])?c.concat(["center"]):k.test(c[0])?["center"].concat(c):["center","center"]),c[0]=j.test(c[0])?c[0]:"center",c[1]=k.test(c[1])?c[1]:"center",a=l.exec(c[0]),b=l.exec(c[1]),y[this]=[a?a[0]:0,b?b[0]:0],e[this]=[m.exec(c[0])[0],m.exec(c[1])[0]]}),1===x.length&&(x[1]=x[0]),"right"===e.at[0]?s.left+=p:"center"===e.at[0]&&(s.left+=p/2),"bottom"===e.at[1]?s.top+=q:"center"===e.at[1]&&(s.top+=q/2),n=b(y.at,p,q),s.left+=n[0],s.top+=n[1],this.each(function(){var d,j,k=a(this),l=k.outerWidth(),m=k.outerHeight(),o=c(this,"marginLeft"),t=c(this,"marginTop"),z=l+o+c(this,"marginRight")+w.width,A=m+t+c(this,"marginBottom")+w.height,B=a.extend({},s),C=b(y.my,k.outerWidth(),k.outerHeight());"right"===e.my[0]?B.left-=l:"center"===e.my[0]&&(B.left-=l/2),"bottom"===e.my[1]?B.top-=m:"center"===e.my[1]&&(B.top-=m/2),B.left+=C[0],B.top+=C[1],f||(B.left=i(B.left),B.top=i(B.top)),d={marginLeft:o,marginTop:t},a.each(["left","top"],function(b,c){a.ui.position[x[b]]&&a.ui.position[x[b]][c](B,{targetWidth:p,targetHeight:q,elemWidth:l,elemHeight:m,collisionPosition:d,collisionWidth:z,collisionHeight:A,offset:[n[0]+C[0],n[1]+C[1]],my:e.my,at:e.at,within:v,elem:k})}),e.using&&(j=function(a){var b=r.left-B.left,c=b+p-l,d=r.top-B.top,f=d+q-m,i={target:{element:u,left:r.left,top:r.top,width:p,height:q},element:{element:k,left:B.left,top:B.top,width:l,height:m},horizontal:c<0?"left":b>0?"right":"center",vertical:f<0?"top":d>0?"bottom":"middle"};p<l&&h(b+c)<p&&(i.horizontal="center"),q<m&&h(d+f)<q&&(i.vertical="middle"),g(h(b),h(c))>g(h(d),h(f))?i.important="horizontal":i.important="vertical",e.using.call(this,a,i)}),k.offset(a.extend(B,{using:j}))})},a.ui.position={fit:{left:function(a,b){var c,d=b.within,e=d.isWindow?d.scrollLeft:d.offset.left,f=d.width,h=a.left-b.collisionPosition.marginLeft,i=e-h,j=h+b.collisionWidth-f-e;b.collisionWidth>f?i>0&&j<=0?(c=a.left+i+b.collisionWidth-f-e,a.left+=i-c):j>0&&i<=0?a.left=e:i>j?a.left=e+f-b.collisionWidth:a.left=e:i>0?a.left+=i:j>0?a.left-=j:a.left=g(a.left-h,a.left)},top:function(a,b){var c,d=b.within,e=d.isWindow?d.scrollTop:d.offset.top,f=b.within.height,h=a.top-b.collisionPosition.marginTop,i=e-h,j=h+b.collisionHeight-f-e;b.collisionHeight>f?i>0&&j<=0?(c=a.top+i+b.collisionHeight-f-e,a.top+=i-c):j>0&&i<=0?a.top=e:i>j?a.top=e+f-b.collisionHeight:a.top=e:i>0?a.top+=i:j>0?a.top-=j:a.top=g(a.top-h,a.top)}},flip:{left:function(a,b){var c,d,e=b.within,f=e.offset.left+e.scrollLeft,g=e.width,i=e.isWindow?e.scrollLeft:e.offset.left,j=a.left-b.collisionPosition.marginLeft,k=j-i,l=j+b.collisionWidth-g-i,m="left"===b.my[0]?-b.elemWidth:"right"===b.my[0]?b.elemWidth:0,n="left"===b.at[0]?b.targetWidth:"right"===b.at[0]?-b.targetWidth:0,o=-2*b.offset[0];k<0?(c=a.left+m+n+o+b.collisionWidth-g-f,(c<0||c<h(k))&&(a.left+=m+n+o)):l>0&&(d=a.left-b.collisionPosition.marginLeft+m+n+o-i,(d>0||h(d)<l)&&(a.left+=m+n+o))},top:function(a,b){var c,d,e=b.within,f=e.offset.top+e.scrollTop,g=e.height,i=e.isWindow?e.scrollTop:e.offset.top,j=a.top-b.collisionPosition.marginTop,k=j-i,l=j+b.collisionHeight-g-i,m="top"===b.my[1],n=m?-b.elemHeight:"bottom"===b.my[1]?b.elemHeight:0,o="top"===b.at[1]?b.targetHeight:"bottom"===b.at[1]?-b.targetHeight:0,p=-2*b.offset[1];k<0?(d=a.top+n+o+p+b.collisionHeight-g-f,(d<0||d<h(k))&&(a.top+=n+o+p)):l>0&&(c=a.top-b.collisionPosition.marginTop+n+o+p-i,(c>0||h(c)<l)&&(a.top+=n+o+p))}},flipfit:{left:function(){a.ui.position.flip.left.apply(this,arguments),a.ui.position.fit.left.apply(this,arguments)},top:function(){a.ui.position.flip.top.apply(this,arguments),a.ui.position.fit.top.apply(this,arguments)}}},function(){var b,c,d,e,g,h=document.getElementsByTagName("body")[0],i=document.createElement("div");b=document.createElement(h?"div":"body"),d={visibility:"hidden",width:0,height:0,border:0,margin:0,background:"none"},h&&a.extend(d,{position:"absolute",left:"-1000px",top:"-1000px"});for(g in d)b.style[g]=d[g];b.appendChild(i),c=h||document.documentElement,c.insertBefore(b,c.firstChild),i.style.cssText="position: absolute; left: 10.7432222px;",e=a(i).offset().left,f=e>10&&e<11,b.innerHTML="",c.removeChild(b)}()}(),a.ui.position});var PUM,PUM_Accessibility,PUM_Analytics,pm_cookie,pm_cookie_json,pm_remove_cookie;!function(s){"use strict";void 0===s.fn.on&&(s.fn.on=function(e,o,t){return this.delegate(o,e,t)}),void 0===s.fn.off&&(s.fn.off=function(e,o,t){return this.undelegate(o,e,t)}),void 0===s.fn.bindFirst&&(s.fn.bindFirst=function(e,o){var t,n,i=s(this);i.unbind(e,o),i.bind(e,o),(n=(t=s._data(i[0]).events)[e]).unshift(n.pop()),t[e]=n}),void 0===s.fn.outerHtml&&(s.fn.outerHtml=function(){var e=s(this).clone();return s("<div/>").append(e).html()}),void 0===Date.now&&(Date.now=function(){return(new Date).getTime()})}(jQuery),function(p,s,r){"use strict";window.pum_vars=window.pum_vars||{default_theme:"0",home_url:"/",version:1.7,ajaxurl:"",restapi:!1,rest_nonce:null,debug_mode:!1,disable_tracking:!0,message_position:"top",core_sub_forms_enabled:!0,popups:{}},window.pum_popups=window.pum_popups||{},window.pum_vars.popups=window.pum_popups,PUM={get:new function(){var i={},e=function(e,o,t){"boolean"==typeof o&&(t=o,o=!1);var n=o?o.selector+" "+e:e;return(r===i[n]||t)&&(i[n]=o?o.find(e):jQuery(e)),i[n]};return e.elementCache=i,e},getPopup:function(e){var o,t;return t=e,(o=isNaN(t)||parseInt(Number(t))!==parseInt(t)||isNaN(parseInt(t,10))?"current"===e?PUM.get(".pum-overlay.pum-active:eq(0)",!0):"open"===e?PUM.get(".pum-overlay.pum-active",!0):"closed"===e?PUM.get(".pum-overlay:not(.pum-active)",!0):e instanceof jQuery?e:p(e):PUM.get("#pum-"+e)).hasClass("pum-overlay")?o:o.hasClass("popmake")?o.parents(".pum-overlay"):o.parents(".pum-overlay").length?o.parents(".pum-overlay"):p()},open:function(e,o){PUM.getPopup(e).popmake("open",o)},close:function(e,o){PUM.getPopup(e).popmake("close",o)},preventOpen:function(e){PUM.getPopup(e).addClass("preventOpen")},getSettings:function(e){return PUM.getPopup(e).popmake("getSettings")},getSetting:function(e,o,t){var n=function(e,o){function t(e,o,t){return o?e[o.slice(0,t?-1:o.length)]:e}return o.split(".").reduce(function(e,o){return o?o.split("[").reduce(t,e):e},e)}(PUM.getSettings(e),o);return void 0!==n?n:t!==r?t:null},checkConditions:function(e){return PUM.getPopup(e).popmake("checkConditions")},getCookie:function(e){return p.pm_cookie(e)},getJSONCookie:function(e){return p.pm_cookie_json(e)},setCookie:function(e,o){PUM.getPopup(e).popmake("setCookie",jQuery.extend({name:"pum-"+PUM.getSetting(e,"id"),expires:"+30 days"},o))},clearCookie:function(e,o){p.pm_remove_cookie(e),"function"==typeof o&&o()},clearCookies:function(e,o){var t,n=PUM.getPopup(e).popmake("getSettings").cookies;if(n!==r&&n.length)for(t=0;n.length>t;t+=1)p.pm_remove_cookie(n[t].settings.name);"function"==typeof o&&o()},getClickTriggerSelector:function(e,o){var t=PUM.getPopup(e),n=PUM.getSettings(e),i=[".popmake-"+n.id,".popmake-"+decodeURIComponent(n.slug),'a[href$="#popmake-'+n.id+'"]'];return o.extra_selectors&&""!==o.extra_selectors&&i.push(o.extra_selectors),(i=pum.hooks.applyFilters("pum.trigger.click_open.selectors",i,o,t)).join(", ")},disableClickTriggers:function(e,o){if(e!==r)if(o!==r){var t=PUM.getClickTriggerSelector(e,o);p(t).removeClass("pum-trigger"),p(s).off("click.pumTrigger click.popmakeOpen",t)}else{var n=PUM.getSetting(e,"triggers",[]);if(n.length)for(var i=0;n.length>i;i++)if(-1!==pum.hooks.applyFilters("pum.disableClickTriggers.clickTriggerTypes",["click_open"]).indexOf(n[i].type)){t=PUM.getClickTriggerSelector(e,n[i].settings);p(t).removeClass("pum-trigger"),p(s).off("click.pumTrigger click.popmakeOpen",t)}}}},p.fn.popmake=function(e){return p.fn.popmake.methods[e]?(p(s).trigger("pumMethodCall",arguments),p.fn.popmake.methods[e].apply(this,Array.prototype.slice.call(arguments,1))):"object"!=typeof e&&e?void(window.console&&console.warn("Method "+e+" does not exist on $.fn.popmake")):p.fn.popmake.methods.init.apply(this,arguments)},p.fn.popmake.methods={init:function(){return this.each(function(){var e=PUM.getPopup(this),o=e.popmake("getSettings");return o.theme_id<=0&&(o.theme_id=pum_vars.default_theme),o.disable_reposition!==r&&o.disable_reposition||p(window).on("resize",function(){(e.hasClass("pum-active")||e.find(".popmake.active").length)&&p.fn.popmake.utilities.throttle(setTimeout(function(){e.popmake("reposition")},25),500,!1)}),e.find(".pum-container").data("popmake",o),e.data("popmake",o).trigger("pumInit"),this})},getOverlay:function(){return PUM.getPopup(this)},getContainer:function(){return PUM.getPopup(this).find(".pum-container")},getTitle:function(){return PUM.getPopup(this).find(".pum-title")||null},getContent:function(){return PUM.getPopup(this).find(".pum-content")||null},getClose:function(){return PUM.getPopup(this).find(".pum-content + .pum-close")||null},getSettings:function(){var e=PUM.getPopup(this);return p.extend(!0,{},p.fn.popmake.defaults,e.data("popmake")||{},"object"==typeof pum_popups&&void 0!==pum_popups[e.attr("id")]?pum_popups[e.attr("id")]:{})},state:function(e){var o=PUM.getPopup(this);if(r!==e)switch(e){case"isOpen":return o.hasClass("pum-open")||o.popmake("getContainer").hasClass("active");case"isClosed":return!o.hasClass("pum-open")&&!o.popmake("getContainer").hasClass("active")}},open:function(e){var o=PUM.getPopup(this),t=o.popmake("getContainer"),n=o.popmake("getClose"),i=o.popmake("getSettings"),s=p("html");return o.trigger("pumBeforeOpen"),o.hasClass("preventOpen")||t.hasClass("preventOpen")?(console.log("prevented"),o.removeClass("preventOpen").removeClass("pum-active").trigger("pumOpenPrevented")):(i.stackable||o.popmake("close_all"),o.addClass("pum-active"),0<i.close_button_delay&&n.fadeOut(0),s.addClass("pum-open"),i.overlay_disabled?s.addClass("pum-open-overlay-disabled"):s.addClass("pum-open-overlay"),i.position_fixed?s.addClass("pum-open-fixed"):s.addClass("pum-open-scrollable"),o.popmake("setup_close").popmake("reposition").popmake("animate",i.animation_type,function(){0<i.close_button_delay&&setTimeout(function(){n.fadeIn()},i.close_button_delay),o.trigger("pumAfterOpen"),p.fn.popmake.last_open_popup=o,e!==r&&e()})),this},setup_close:function(){var t=PUM.getPopup(this),e=t.popmake("getClose"),o=t.popmake("getSettings");return(e=e.add(p(".popmake-close, .pum-close",t).not(e))).off("click.pum").on("click.pum",function(e){var o=p(this);o.hasClass("pum-do-default")||o.data("do-default")!==r&&o.data("do-default")||e.preventDefault(),p.fn.popmake.last_close_trigger="Close Button",t.popmake("close")}),(o.close_on_esc_press||o.close_on_f4_press)&&p(window).off("keyup.popmake").on("keyup.popmake",function(e){27===e.keyCode&&o.close_on_esc_press&&(p.fn.popmake.last_close_trigger="ESC Key",t.popmake("close")),115===e.keyCode&&o.close_on_f4_press&&(p.fn.popmake.last_close_trigger="F4 Key",t.popmake("close"))}),o.close_on_overlay_click&&(t.on("pumAfterOpen",function(){p(s).on("click.pumCloseOverlay",function(e){p(e.target).closest(".pum-container").length||(p.fn.popmake.last_close_trigger="Overlay Click",t.popmake("close"))})}),t.on("pumAfterClose",function(){p(s).off("click.pumCloseOverlay")})),t.trigger("pumSetupClose"),this},close:function(n){return this.each(function(){var e=PUM.getPopup(this),o=e.popmake("getContainer"),t=e.popmake("getClose");return t=t.add(p(".popmake-close, .pum-close",e).not(t)),e.trigger("pumBeforeClose"),e.hasClass("preventClose")||o.hasClass("preventClose")?e.removeClass("preventClose").trigger("pumClosePrevented"):o.fadeOut("fast",function(){e.is(":visible")&&e.fadeOut("fast"),p(window).off("keyup.popmake"),e.off("click.popmake"),t.off("click.popmake"),1===p(".pum-active").length&&p("html").removeClass("pum-open").removeClass("pum-open-scrollable").removeClass("pum-open-overlay").removeClass("pum-open-overlay-disabled").removeClass("pum-open-fixed"),e.removeClass("pum-active").trigger("pumAfterClose"),o.find("iframe").filter('[src*="youtube"],[src*="vimeo"]').each(function(){var e=p(this),o=e.attr("src"),t=o.replace("autoplay=1","1=1");t!==o&&(o=t),e.prop("src",o)}),o.find("video").each(function(){this.pause()}),n!==r&&n()}),this})},close_all:function(){return p(".pum-active").popmake("close"),this},reposition:function(e){var o=PUM.getPopup(this).trigger("pumBeforeReposition"),t=o.popmake("getContainer"),n=o.popmake("getSettings"),i=n.location,s={my:"",at:"",of:window,collision:"none",using:"function"==typeof e?e:p.fn.popmake.callbacks.reposition_using},r={overlay:null,container:null},a=null;try{a=p(p.fn.popmake.last_open_trigger)}catch(e){a=p()}return n.position_from_trigger&&a.length?(s.of=a,0<=i.indexOf("left")&&(s.my+=" right",s.at+=" left"+(0!==n.position_left?"-"+n.position_left:"")),0<=i.indexOf("right")&&(s.my+=" left",s.at+=" right"+(0!==n.position_right?"+"+n.position_right:"")),0<=i.indexOf("center")&&(s.my="center"===i?"center":s.my+" center",s.at="center"===i?"center":s.at+" center"),0<=i.indexOf("top")&&(s.my+=" bottom",s.at+=" top"+(0!==n.position_top?"-"+n.position_top:"")),0<=i.indexOf("bottom")&&(s.my+=" top",s.at+=" bottom"+(0!==n.position_bottom?"+"+n.position_bottom:""))):(0<=i.indexOf("left")&&(s.my+=" left"+(0!==n.position_left?"+"+n.position_left:""),s.at+=" left"),0<=i.indexOf("right")&&(s.my+=" right"+(0!==n.position_right?"-"+n.position_right:""),s.at+=" right"),0<=i.indexOf("center")&&(s.my="center"===i?"center":s.my+" center",s.at="center"===i?"center":s.at+" center"),0<=i.indexOf("top")&&(s.my+=" top"+(0!==n.position_top?"+"+(p("body").hasClass("admin-bar")?parseInt(n.position_top,10)+32:n.position_top):""),s.at+=" top"),0<=i.indexOf("bottom")&&(s.my+=" bottom"+(0!==n.position_bottom?"-"+n.position_bottom:""),s.at+=" bottom")),s.my=p.trim(s.my),s.at=p.trim(s.at),o.is(":hidden")&&(r.overlay=o.css("opacity"),o.css({opacity:0}).show(0)),t.is(":hidden")&&(r.container=t.css("opacity"),t.css({opacity:0}).show(0)),n.position_fixed&&t.addClass("fixed"),"custom"===n.size?t.css({width:n.custom_width,height:n.custom_height_auto?"auto":n.custom_height}):"auto"!==n.size&&t.addClass("responsive").css({minWidth:""!==n.responsive_min_width?n.responsive_min_width:"auto",maxWidth:""!==n.responsive_max_width?n.responsive_max_width:"auto"}),o.trigger("pumAfterReposition"),t.addClass("custom-position").position(s).trigger("popmakeAfterReposition"),r.overlay&&o.css({opacity:r.overlay}).hide(0),r.container&&t.css({opacity:r.container}).hide(0),this},animation_origin:function(e){var o=PUM.getPopup(this).popmake("getContainer"),t={my:"",at:""};switch(e){case"top":t={my:"left+"+o.offset().left+" bottom-100",at:"left top"};break;case"bottom":t={my:"left+"+o.offset().left+" top+100",at:"left bottom"};break;case"left":t={my:"right top+"+o.offset().top,at:"left top"};break;case"right":t={my:"left top+"+o.offset().top,at:"right top"};break;default:0<=e.indexOf("left")&&(t={my:t.my+" right",at:t.at+" left"}),0<=e.indexOf("right")&&(t={my:t.my+" left",at:t.at+" right"}),0<=e.indexOf("center")&&(t={my:t.my+" center",at:t.at+" center"}),0<=e.indexOf("top")&&(t={my:t.my+" bottom-100",at:t.at+" top"}),0<=e.indexOf("bottom")&&(t={my:t.my+" top+100",at:t.at+" bottom"}),t.my=p.trim(t.my),t.at=p.trim(t.at)}return t.of=window,t.collision="none",t}}}(jQuery,document),function(s,t,e){"use strict";var n,i,r,a="a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]",o=".pum:not(.pum-accessibility-disabled)";PUM_Accessibility={forceFocus:function(e){r&&r.length&&!r[0].contains(e.target)&&(e.stopPropagation(),PUM_Accessibility.setFocusToFirstItem())},trapTabKey:function(e){if(9===e.keyCode){var o=r.find(".pum-container *").filter(a).filter(":visible"),t=s(":focus"),n=o.length,i=o.index(t);e.shiftKey?0===i&&(o.get(n-1).focus(),e.preventDefault()):i===n-1&&(o.get(0).focus(),e.preventDefault())}},setFocusToFirstItem:function(){r.find(".pum-container *").filter(a).filter(":visible").filter(":not(.pum-close)").first().focus()}},s(t).on("pumInit",o,function(){PUM.getPopup(this).find("[tabindex]").each(function(){var e=s(this);e.data("tabindex",e.attr("tabindex")).prop("tabindex","0")})}).on("pumBeforeOpen",o,function(){var e=PUM.getPopup(this),o=s(":focus");e.has(o).length||(i=o),r=e.on("keydown.pum_accessibility",PUM_Accessibility.trapTabKey).attr("aria-hidden","false"),(n=s("body > *").filter(":visible").not(r)).attr("aria-hidden","true"),s(t).one("focusin.pum_accessibility",PUM_Accessibility.forceFocus),PUM_Accessibility.setFocusToFirstItem()}).on("pumAfterOpen",o,function(){}).on("pumBeforeClose",o,function(){}).on("pumAfterClose",o,function(){PUM.getPopup(this).off("keydown.pum_accessibility").attr("aria-hidden","true"),n&&(n.attr("aria-hidden","false"),n=null),void 0!==i&&i.length&&i.focus(),r=null,s(t).off("focusin.pum_accessibility")}).on("pumSetupClose",o,function(){}).on("pumOpenPrevented",o,function(){}).on("pumClosePrevented",o,function(){}).on("pumBeforeReposition",o,function(){})}(jQuery,document),function(s){"use strict";s.fn.popmake.last_open_trigger=null,s.fn.popmake.last_close_trigger=null,s.fn.popmake.conversion_trigger=null;var r=!(void 0===pum_vars.restapi||!pum_vars.restapi);PUM_Analytics={beacon:function(e,o){var t=new Image,n=r?pum_vars.restapi:pum_vars.ajaxurl,i={route:"/analytics/",data:s.extend({event:"open",pid:null,_cache:+new Date},e),callback:"function"==typeof o?o:function(){}};r?n+=i.route:i.data.action="pum_analytics",n&&(s(t).on("error success load done",i.callback),t.src=n+"?"+s.param(i.data))}},void 0!==pum_vars.disable_tracking&&pum_vars.disable_tracking||s(document).on("pumAfterOpen.core_analytics",".pum",function(){var e=PUM.getPopup(this),o={pid:parseInt(e.popmake("getSettings").id,10)||null};0<o.pid&&!s("body").hasClass("single-popup")&&PUM_Analytics.beacon(o)})}(jQuery),function(n,e,r){"use strict";n.fn.popmake.methods.animate_overlay=function(e,o,t){return PUM.getPopup(this).popmake("getSettings").overlay_disabled?n.fn.popmake.overlay_animations.none.apply(this,[o,t]):n.fn.popmake.overlay_animations[e]?n.fn.popmake.overlay_animations[e].apply(this,[o,t]):(window.console&&console.warn("Animation style "+e+" does not exist."),this)},n.fn.popmake.methods.animate=function(e){return n.fn.popmake.animations[e]?n.fn.popmake.animations[e].apply(this,Array.prototype.slice.call(arguments,1)):(window.console&&console.warn("Animation style "+e+" does not exist."),this)},n.fn.popmake.animations={none:function(e){var o=PUM.getPopup(this);return o.popmake("getContainer").css({opacity:1,display:"block"}),o.popmake("animate_overlay","none",0,function(){e!==r&&e()}),this},slide:function(o){var e=PUM.getPopup(this),t=e.popmake("getContainer"),n=e.popmake("getSettings"),i=n.animation_speed/2,s=e.popmake("animation_origin",n.animation_origin);return e.css({display:"block"}),t.css({display:"block"}).position(s).css({opacity:1}),e.popmake("animate_overlay","fade",i,function(){t.popmake("reposition",function(e){t.animate(e,i,"swing",function(){o!==r&&o()})})}),this},fade:function(e){var o=PUM.getPopup(this),t=o.popmake("getContainer").css({opacity:0,display:"block"}),n=o.popmake("getSettings").animation_speed/2;return o.popmake("animate_overlay","fade",n,function(){t.animate({opacity:1},n,"swing",function(){e!==r&&e()})}),this},fadeAndSlide:function(o){var e=PUM.getPopup(this),t=e.popmake("getContainer"),n=e.popmake("getSettings"),i=n.animation_speed/2,s=e.popmake("animation_origin",n.animation_origin);return e.css({display:"block"}),t.css({display:"block"}).position(s),e.popmake("animate_overlay","fade",i,function(){t.popmake("reposition",function(e){t.css({opacity:0}),e.opacity=1,t.animate(e,i,"swing",function(){o!==r&&o()})})}),this},grow:function(e){return n.fn.popmake.animations.fade.apply(this,arguments)},growAndSlide:function(e){return n.fn.popmake.animations.fadeAndSlide.apply(this,arguments)}},n.fn.popmake.overlay_animations={none:function(e,o){PUM.getPopup(this).css({opacity:1,display:"block"}),"function"==typeof o&&o()},fade:function(e,o){PUM.getPopup(this).css({opacity:0,display:"block"}).animate({opacity:1},e,"swing",o)},slide:function(e,o){PUM.getPopup(this).slideDown(e,o)}}}(jQuery,document),function(e,o,t){"use strict";e(o).on("pumInit",".pum",function(){e(this).popmake("getContainer").trigger("popmakeInit")}).on("pumBeforeOpen",".pum",function(){e(this).popmake("getContainer").addClass("active").trigger("popmakeBeforeOpen")}).on("pumAfterOpen",".pum",function(){e(this).popmake("getContainer").trigger("popmakeAfterOpen")}).on("pumBeforeClose",".pum",function(){e(this).popmake("getContainer").trigger("popmakeBeforeClose")}).on("pumAfterClose",".pum",function(){e(this).popmake("getContainer").removeClass("active").trigger("popmakeAfterClose")}).on("pumSetupClose",".pum",function(){e(this).popmake("getContainer").trigger("popmakeSetupClose")}).on("pumOpenPrevented",".pum",function(){e(this).popmake("getContainer").removeClass("preventOpen").removeClass("active")}).on("pumClosePrevented",".pum",function(){e(this).popmake("getContainer").removeClass("preventClose")}).on("pumBeforeReposition",".pum",function(){e(this).popmake("getContainer").trigger("popmakeBeforeReposition")})}(jQuery,document),function(o,e,t){"use strict";o.fn.popmake.callbacks={reposition_using:function(e){o(this).css(e)}}}(jQuery,document),function(p,e,o){"use strict";var t,u=function(){return void 0===t&&(t="undefined"!=typeof MobileDetect?new MobileDetect(window.navigator.userAgent):{phone:function(){return!1},tablet:function(){return!1}}),t};p.extend(p.fn.popmake.methods,{checkConditions:function(){var e,o,t,n,i,s=PUM.getPopup(this),r=s.popmake("getSettings"),a=!0;if(r.disable_on_mobile&&u().phone())return!1;if(r.disable_on_tablet&&u().tablet())return!1;if(r.conditions.length)for(o=0;r.conditions.length>o;o++){for(n=r.conditions[o],e=!1,t=0;n.length>t&&(!(i=p.extend({},{not_operand:!1},n[t])).not_operand&&s.popmake("checkCondition",i)?e=!0:i.not_operand&&!s.popmake("checkCondition",i)&&(e=!0),p(this).trigger("pumCheckingCondition",[e,i]),!e);t++);e||(a=!1)}return a},checkCondition:function(e){var o=e.target||null;e.settings;return o?p.fn.popmake.conditions[o]?p.fn.popmake.conditions[o].apply(this,[e]):window.console?(console.warn("Condition "+o+" does not exist."),!0):void 0:(console.warn("Condition type not set."),!1)}}),p.fn.popmake.conditions={}}(jQuery,document),function(d){"use strict";d.extend(d.fn.popmake,{cookie:function(c){function m(e,o,t){var n,i=new Date;if("undefined"!=typeof document){if(1<arguments.length){switch(typeof(t=d.extend({path:pum_vars.home_url},m.defaults,t)).expires){case"number":i.setMilliseconds(i.getMilliseconds()+864e5*t.expires),t.expires=i;break;case"string":i.setTime(1e3*d.fn.popmake.utilities.strtotime("+"+t.expires)),t.expires=i}try{n=JSON.stringify(o),/^[\{\[]/.test(n)&&(o=n)}catch(e){}return o=c.write?c.write(o,e):encodeURIComponent(String(o)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),e=(e=(e=encodeURIComponent(String(e))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape),document.cookie=[e,"=",o,t.expires?"; expires="+t.expires.toUTCString():"",t.path?"; path="+t.path:"",t.domain?"; domain="+t.domain:"",t.secure?"; secure":""].join("")}e||(n={});for(var s=document.cookie?document.cookie.split("; "):[],r=/(%[0-9A-Z]{2})+/g,a=0;a<s.length;a++){var p=s[a].split("="),u=p.slice(1).join("=");'"'===u.charAt(0)&&(u=u.slice(1,-1));try{var l=p[0].replace(r,decodeURIComponent);if(u=c.read?c.read(u,l):c(u,l)||u.replace(r,decodeURIComponent),this.json)try{u=JSON.parse(u)}catch(e){}if(e===l){n=u;break}e||(n[l]=u)}catch(e){}}return n}}return void 0===c&&(c=function(){}),(m.set=m).get=function(e){return m.call(m,e)},m.getJSON=function(){return m.apply({json:!0},[].slice.call(arguments))},m.defaults={},m.remove=function(e,o){m(e,"",d.extend({},o,{expires:-1,path:""})),m(e,"",d.extend({},o,{expires:-1}))},m.process=function(e,o,t,n){return 3<arguments.length&&"object"!=typeof t&&void 0!==o?m.apply(m,[e,o,{expires:t,path:n}]):m.apply(m,[].slice.call(arguments,[0,2]))},m.withConverter=d.fn.popmake.cookie,m}()}),pm_cookie=d.pm_cookie=d.fn.popmake.cookie.process,pm_cookie_json=d.pm_cookie_json=d.fn.popmake.cookie.getJSON,pm_remove_cookie=d.pm_remove_cookie=d.fn.popmake.cookie.remove}(jQuery),function(n,e,i){"use strict";n.extend(n.fn.popmake.methods,{addCookie:function(e){return pum.hooks.doAction("popmake.addCookie",arguments),n.fn.popmake.cookies[e]?n.fn.popmake.cookies[e].apply(this,Array.prototype.slice.call(arguments,1)):(window.console&&console.warn("Cookie type "+e+" does not exist."),this)},setCookie:function(e){n.pm_cookie(e.name,!0,e.session?null:e.time,e.path?pum_vars.home_url||"/":null),pum.hooks.doAction("popmake.setCookie",e)},checkCookies:function(e){var o,t=!1;if(e.cookie_name===i||null===e.cookie_name||""===e.cookie_name)return!1;switch(typeof e.cookie_name){case"object":case"array":for(o=0;e.cookie_name.length>o;o+=1)n.pm_cookie(e.cookie_name[o])!==i&&(t=!0);break;case"string":n.pm_cookie(e.cookie_name)!==i&&(t=!0)}return pum.hooks.doAction("popmake.checkCookies",e,t),t}}),n.fn.popmake.cookies=n.fn.popmake.cookies||{},n.extend(n.fn.popmake.cookies,{on_popup_open:function(e){var o=PUM.getPopup(this);o.on("pumAfterOpen",function(){o.popmake("setCookie",e)})},on_popup_close:function(e){var o=PUM.getPopup(this);o.on("pumBeforeClose",function(){o.popmake("setCookie",e)})},manual:function(e){var o=PUM.getPopup(this);o.on("pumSetCookie",function(){o.popmake("setCookie",e)})},form_success:function(e){var o=PUM.getPopup(this);o.on("pumFormSuccess",function(){o.popmake("setCookie",e)})},pum_sub_form_success:function(e){var o=PUM.getPopup(this);o.find("form.pum-sub-form").on("success",function(){o.popmake("setCookie",e)})},pum_sub_form_already_subscribed:function(e){var o=PUM.getPopup(this);o.find("form.pum-sub-form").on("success",function(){o.popmake("setCookie",e)})},ninja_form_success:function(e){return n.fn.popmake.cookies.form_success.apply(this,arguments)},cf7_form_success:function(e){return n.fn.popmake.cookies.form_success.apply(this,arguments)},gforms_form_success:function(e){return n.fn.popmake.cookies.form_success.apply(this,arguments)}}),n(e).on("pumInit",".pum",function(){var e,o=PUM.getPopup(this),t=o.popmake("getSettings").cookies||[],n=null;if(t.length)for(e=0;t.length>e;e+=1)n=t[e],o.popmake("addCookie",n.event,n.settings)})}(jQuery,document);var pum_debug,pum_debug_mode=!1;!function(r,e){if(e=window.pum_vars||{debug_mode:!1},(pum_debug_mode=void 0!==e.debug_mode&&e.debug_mode)||-1===window.location.href.indexOf("pum_debug")||(pum_debug_mode=!0),pum_debug_mode){var a=!1,t=!1,p=window.pum_debug_vars||{debug_mode_enabled:"Popup Maker: Debug Mode Enabled",debug_started_at:"Debug started at:",debug_more_info:"For more information on how to use this information visit https://docs.wppopupmaker.com/?utm_medium=js-debug-info&utm_campaign=ContextualHelp&utm_source=browser-console&utm_content=more-info",global_info:"Global Information",localized_vars:"Localized variables",popups_initializing:"Popups Initializing",popups_initialized:"Popups Initialized",single_popup_label:"Popup: #",theme_id:"Theme ID: ",label_method_call:"Method Call:",label_method_args:"Method Arguments:",label_popup_settings:"Settings",label_triggers:"Triggers",label_cookies:"Cookies",label_delay:"Delay:",label_conditions:"Conditions",label_cookie:"Cookie:",label_settings:"Settings:",label_selector:"Selector:",label_mobile_disabled:"Mobile Disabled:",label_tablet_disabled:"Tablet Disabled:",label_event:"Event: %s",triggers:[],cookies:[]};pum_debug={odump:function(e){return r.extend({},e)},logo:function(){console.log(" -------------------------------------------------------------\n|  ____                           __  __       _              |\n| |  _ \\ ___  _ __  _   _ _ __   |  \\/  | __ _| | _____ _ __  |\n| | |_) / _ \\| '_ \\| | | | '_ \\  | |\\/| |/ _` | |/ / _ \\ '__| |\n| |  __/ (_) | |_) | |_| | |_) | | |  | | (_| |   <  __/ |    |\n| |_|   \\___/| .__/ \\__,_| .__/  |_|  |_|\\__,_|_|\\_\\___|_|    |\n|            |_|         |_|                                  |\n -------------------------------------------------------------")},initialize:function(){a=!0,pum_debug.logo(),console.debug(p.debug_mode_enabled),console.log(p.debug_started_at,new Date),console.info(p.debug_more_info),pum_debug.divider(p.global_info),console.groupCollapsed(p.localized_vars),console.log("pum_vars:",pum_debug.odump(e)),r(document).trigger("pum_debug_initialize_localized_vars"),console.groupEnd(),r(document).trigger("pum_debug_initialize")},popup_event_header:function(e){var o=e.popmake("getSettings");t!==o.id&&(t=o.id,pum_debug.divider(p.single_popup_label+o.id+" - "+o.slug))},divider:function(e){var o=62,t=0,n=" "+new Array(63).join("-")+" ";"string"==typeof e?(o=62-e.length,(t={left:Math.floor(o/2),right:Math.floor(o/2)}).left+t.right===o-1&&t.right++,t.left=new Array(t.left+1).join(" "),t.right=new Array(t.right+1).join(" "),console.log(n+"\n|"+t.left+e+t.right+"|\n"+n)):console.log(n)},click_trigger:function(e,o){var t,n=e.popmake("getSettings"),i=[".popmake-"+n.id,".popmake-"+decodeURIComponent(n.slug),'a[href$="#popmake-'+n.id+'"]'];o.extra_selectors&&""!==o.extra_selectors&&i.push(o.extra_selectors),t=(i=pum.hooks.applyFilters("pum.trigger.click_open.selectors",i,o,e)).join(", "),console.log(p.label_selector,t)},trigger:function(e,o){if("string"==typeof p.triggers[o.type]){switch(console.groupCollapsed(p.triggers[o.type]),o.type){case"auto_open":console.log(p.label_delay,o.settings.delay),console.log(p.label_cookie,o.settings.cookie_name);break;case"click_open":pum_debug.click_trigger(e,o.settings),console.log(p.label_cookie,o.settings.cookie_name)}r(document).trigger("pum_debug_render_trigger",e,o),console.groupEnd()}},cookie:function(e,o){if("string"==typeof p.cookies[o.event]){switch(console.groupCollapsed(p.cookies[o.event]),o.event){case"on_popup_open":case"on_popup_close":case"manual":case"ninja_form_success":console.log(p.label_cookie,pum_debug.odump(o.settings))}r(document).trigger("pum_debug_render_trigger",e,o),console.groupEnd()}}},r(document).on("pumInit",".pum",function(){var e=PUM.getPopup(r(this)),o=e.popmake("getSettings"),t=o.triggers||[],n=o.cookies||[],i=o.conditions||[],s=0;if(a||(pum_debug.initialize(),pum_debug.divider(p.popups_initializing)),console.groupCollapsed(p.single_popup_label+o.id+" - "+o.slug),console.log(p.theme_id,o.theme_id),t.length){for(console.groupCollapsed(p.label_triggers),s=0;t.length>s;s++)pum_debug.trigger(e,t[s]);console.groupEnd()}if(n.length){for(console.groupCollapsed(p.label_cookies),s=0;n.length>s;s+=1)pum_debug.cookie(e,n[s]);console.groupEnd()}i.length&&(console.groupCollapsed(p.label_conditions),console.log(i),console.groupEnd()),console.groupCollapsed(p.label_popup_settings),console.log(p.label_mobile_disabled,!1!==o.disable_on_mobile),console.log(p.label_tablet_disabled,!1!==o.disable_on_tablet),console.log(p.label_display_settings,pum_debug.odump(o)),e.trigger("pum_debug_popup_settings"),console.groupEnd(),console.groupEnd()}).on("pumBeforeOpen",".pum",function(){var e=PUM.getPopup(r(this)),o=r.fn.popmake.last_open_trigger;pum_debug.popup_event_header(e),console.groupCollapsed(p.label_event.replace("%s","pumBeforeOpen"));try{o=(o=r(r.fn.popmake.last_open_trigger)).length?o:r.fn.popmake.last_open_trigger.toString()}catch(e){o=""}finally{console.log(p.label_triggers,[o])}console.groupEnd()}).on("pumOpenPrevented",".pum",function(){var e=PUM.getPopup(r(this));pum_debug.popup_event_header(e),console.groupCollapsed(p.label_event.replace("%s","pumOpenPrevented")),console.groupEnd()}).on("pumAfterOpen",".pum",function(){var e=PUM.getPopup(r(this));pum_debug.popup_event_header(e),console.groupCollapsed(p.label_event.replace("%s","pumAfterOpen")),console.groupEnd()}).on("pumSetupClose",".pum",function(){var e=PUM.getPopup(r(this));pum_debug.popup_event_header(e),console.groupCollapsed(p.label_event.replace("%s","pumSetupClose")),console.groupEnd()}).on("pumClosePrevented",".pum",function(){var e=PUM.getPopup(r(this));pum_debug.popup_event_header(e),console.groupCollapsed(p.label_event.replace("%s","pumClosePrevented")),console.groupEnd()}).on("pumBeforeClose",".pum",function(){var e=PUM.getPopup(r(this));pum_debug.popup_event_header(e),console.groupCollapsed(p.label_event.replace("%s","pumBeforeClose")),console.groupEnd()}).on("pumAfterClose",".pum",function(){var e=PUM.getPopup(r(this));pum_debug.popup_event_header(e),console.groupCollapsed(p.label_event.replace("%s","pumAfterClose")),console.groupEnd()}).on("pumBeforeReposition",".pum",function(){var e=PUM.getPopup(r(this));pum_debug.popup_event_header(e),console.groupCollapsed(p.label_event.replace("%s","pumBeforeReposition")),console.groupEnd()}).on("pumAfterReposition",".pum",function(){var e=PUM.getPopup(r(this));pum_debug.popup_event_header(e),console.groupCollapsed(p.label_event.replace("%s","pumAfterReposition")),console.groupEnd()}).on("pumCheckingCondition",".pum",function(e,o,t){var n=PUM.getPopup(r(this));pum_debug.popup_event_header(n),console.groupCollapsed(p.label_event.replace("%s","pumCheckingCondition")),console.log((t.not_operand?"(!) ":"")+t.target+": "+o,t),console.groupEnd()})}}(jQuery),function(e,o,t){"use strict";e.fn.popmake.defaults={id:null,slug:"",theme_id:null,cookies:[],triggers:[],conditions:[],mobile_disabled:null,tablet_disabled:null,custom_height_auto:!1,scrollable_content:!1,position_from_trigger:!1,position_fixed:!1,overlay_disabled:!1,stackable:!1,disable_reposition:!1,close_on_overlay_click:!1,close_on_esc_press:!1,close_on_f4_press:!1,disable_on_mobile:!1,disable_on_tablet:!1,size:"medium",responsive_min_width:"0%",responsive_max_width:"100%",custom_width:"640px",custom_height:"380px",animation_type:"fade",animation_speed:"350",animation_origin:"center top",location:"center top",position_top:"100",position_bottom:"0",position_left:"0",position_right:"0",zindex:"1999999999",close_button_delay:"0",meta:{display:{stackable:!1,overlay_disabled:!1,size:"medium",responsive_max_width:"100",responsive_max_width_unit:"%",responsive_min_width:"0",responsive_min_width_unit:"%",custom_width:"640",custom_width_unit:"px",custom_height:"380",custom_height_unit:"px",custom_height_auto:!1,location:"center top",position_top:100,position_left:0,position_bottom:0,position_right:0,position_fixed:!1,animation_type:"fade",animation_speed:350,animation_origin:"center top",scrollable_content:!1,disable_reposition:!1,position_from_trigger:!1,overlay_zindex:!1,zindex:"1999999999"},close:{overlay_click:!1,esc_press:!1,f4_press:!1,text:"",button_delay:0},click_open:[]},container:{active_class:"active",attr:{class:"popmake"}},title:{attr:{class:"popmake-title"}},content:{attr:{class:"popmake-content"}},close:{close_speed:0,attr:{class:"popmake-close"}},overlay:{attr:{id:"popmake-overlay",class:"popmake-overlay"}}}}(jQuery,document),function(s){"use strict";var r={openpopup:!1,openpopup_id:0,closepopup:!1,closedelay:0,redirect_enabled:!1,redirect:"",cookie:!1};window.PUM=window.PUM||{},window.PUM.forms=window.PUM.forms||{},s.extend(window.PUM.forms,{form:{validation:{errors:[]},responseHandler:function(e,o){var t=o.data;o.success?window.PUM.forms.form.success(e,t):window.PUM.forms.form.errors(e,t)},display_errors:function(e,o){window.PUM.forms.messages.add(e,o||this.validation.errors,"error")},beforeAjax:function(e){var o=e.find('[type="submit"]'),t=o.find(".pum-form__loader");window.PUM.forms.messages.clear_all(e),t.length||(t=s('<span class="pum-form__loader"></span>'),""!==o.attr("value")?t.insertAfter(o):o.append(t)),o.prop("disabled",!0),t.show(),e.addClass("pum-form--loading").removeClass("pum-form--errors")},afterAjax:function(e){var o=e.find('[type="submit"]'),t=o.find(".pum-form__loader");o.prop("disabled",!1),t.hide(),e.removeClass("pum-form--loading")},success:function(e,o){void 0!==o.message&&""!==o.message&&window.PUM.forms.messages.add(e,[{message:o.message}]),e.trigger("success",[o]),!e.data("noredirect")&&void 0!==e.data("redirect_enabled")&&o.redirect&&(""!==o.redirect?window.location=o.redirect:window.location.reload(!0))},errors:function(e,o){void 0!==o.errors&&o.errors.length&&(console.log(o.errors),window.PUM.forms.form.display_errors(e,o.errors),window.PUM.forms.messages.scroll_to_first(e),e.addClass("pum-form--errors").trigger("errors",[o]))},submit:function(e){var o=s(this),t=o.pumSerializeObject();e.preventDefault(),e.stopPropagation(),window.PUM.forms.form.beforeAjax(o),s.ajax({type:"POST",dataType:"json",url:pum_vars.ajaxurl,data:{action:"pum_form",values:t}}).always(function(){window.PUM.forms.form.afterAjax(o)}).done(function(e){window.PUM.forms.form.responseHandler(o,e)}).error(function(e,o,t){console.log("Error: type of "+o+" with message of "+t)})}},messages:{add:function(e,o,t){var n=e.find(".pum-form__messages"),i=0;if(t=t||"success",o=o||[],!n.length)switch(n=s('<div class="pum-form__messages">').hide(),pum_vars.message_position){case"bottom":e.append(n.addClass("pum-form__messages--bottom"));break;case"top":e.prepend(n.addClass("pum-form__messages--top"))}if(0<=["bottom","top"].indexOf(pum_vars.message_position))for(;o.length>i;i++)this.add_message(n,o[i].message,t);else for(;o.length>i;i++)void 0!==o[i].field?this.add_field_error(e,o[i]):this.add_message(n,o[i].message,t);n.is(":hidden")&&s(".pum-form__message",n).length&&n.slideDown()},add_message:function(e,o,t){var n=s('<p class="pum-form__message">').html(o);t=t||"success",n.addClass("pum-form__message--"+t),e.append(n),e.is(":visible")&&n.hide().slideDown()},add_field_error:function(e,o){var t=s('[name="'+o.field+'"]',e).parents(".pum-form__field").addClass("pum-form__field--error");this.add_message(t,o.message,"error")},clear_all:function(e,o){var t=e.find(".pum-form__messages"),n=t.find(".pum-form__message"),i=e.find(".pum-form__field.pum-form__field--error");o=o||!1,t.length&&n.slideUp("fast",function(){s(this).remove(),o&&t.hide()}),i.length&&i.removeClass("pum-form__field--error").find("p.pum-form__message").remove()},scroll_to_first:function(e){window.PUM.utilities.scrollTo(s(".pum-form__field.pum-form__field--error",e).eq(0))}},success:function(e,o){if(o=s.extend({},r,o)){var t=PUM.getPopup(e),n={},i=function(){o.openpopup&&PUM.getPopup(o.openpopup_id).length?PUM.open(o.openpopup_id):o.redirect_enabled&&(""!==o.redirect?window.location=o.redirect:window.location.reload(!0))};t.length&&(t.trigger("pumFormSuccess"),o.cookie&&(n=s.extend({name:"pum-"+PUM.getSetting(t,"id"),expires:"+1 year"},"object"==typeof o.cookie?o.cookie:{}),PUM.setCookie(t,n))),t.length&&o.closepopup?setTimeout(function(){t.popmake("close",i)},1e3*parseInt(o.closedelay)):i()}}})}(jQuery),function(e,o){"use strict";e.pum=e.pum||{},e.pum.hooks=e.pum.hooks||new function(){var t=Array.prototype.slice,i={removeFilter:function(e,o){return"string"==typeof e&&n("filters",e,o),i},applyFilters:function(){var e=t.call(arguments),o=e.shift();return"string"!=typeof o?i:r("filters",o,e)},addFilter:function(e,o,t,n){return"string"==typeof e&&"function"==typeof o&&(t=parseInt(t||10,10),s("filters",e,o,t,n)),i},removeAction:function(e,o){return"string"==typeof e&&n("actions",e,o),i},doAction:function(){var e=t.call(arguments),o=e.shift();return"string"==typeof o&&r("actions",o,e),i},addAction:function(e,o,t,n){return"string"==typeof e&&"function"==typeof o&&(t=parseInt(t||10,10),s("actions",e,o,t,n)),i}},a={actions:{},filters:{}};function n(e,o,t,n){var i,s,r;if(a[e][o])if(t)if(i=a[e][o],n)for(r=i.length;r--;)(s=i[r]).callback===t&&s.context===n&&i.splice(r,1);else for(r=i.length;r--;)i[r].callback===t&&i.splice(r,1);else a[e][o]=[]}function s(e,o,t,n,i){var s={callback:t,priority:n,context:i},r=a[e][o];r=r?(r.push(s),function(e){for(var o,t,n,i=1,s=e.length;i<s;i++){for(o=e[i],t=i;(n=e[t-1])&&n.priority>o.priority;)e[t]=e[t-1],--t;e[t]=o}return e}(r)):[s],a[e][o]=r}function r(e,o,t){var n,i,s=a[e][o];if(!s)return"filters"===e&&t[0];if(i=s.length,"filters"===e)for(n=0;n<i;n++)t[0]=s[n].callback.apply(s[n].context,t);else for(n=0;n<i;n++)s[n].callback.apply(s[n].context,t);return"filters"!==e||t[0]}return i}}(window),function(r){"use strict";var i={},e=!1;r(document).ready(function(){!1===e&&"undefined"!=typeof Marionette&&"undefined"!=typeof nfRadio&&(e=Marionette.Object.extend({initialize:function(){this.listenTo(nfRadio.channel("forms"),"submit:response",this.popupMaker)},popupMaker:function(e,o,t,n){var i=r("#nf-form-"+n+"-cont"),s={};e.errors.length||(void 0!==e.data.actions&&(s.openpopup=void 0!==e.data.actions.openpopup,s.openpopup_id=s.openpopup?parseInt(e.data.actions.openpopup):0,s.closepopup=void 0!==e.data.actions.closepopup,s.closedelay=s.closepopup?parseInt(e.data.actions.closepopup):0,s.closepopup&&e.data.actions.closedelay&&(s.closedelay=parseInt(e.data.actions.closedelay))),window.PUM.forms.success(i,s))}})),!1!==e&&new e,r(".gform_wrapper > form").each(function(){var e=r(this),o=e.attr("id").replace("gform_",""),t=e.find("input.gforms-pum"),n=!!t.length&&JSON.parse(t.val());n&&"object"==typeof n&&("object"==typeof n&&void 0!==n.closedelay&&3<=n.closedelay.toString().length&&(n.closedelay=n.closedelay/1e3),i[o]=n)})}).on("gform_confirmation_loaded",function(e,o){var t=r("#gform_confirmation_wrapper_"+o+",#gforms_confirmation_message_"+o),n=i[o]||!1;window.PUM.forms.success(t,n)}).on("wpcf7:mailsent",".wpcf7",function(e){var o=r(e.target),t=o.find("input.wpcf7-pum"),n=!!t.length&&JSON.parse(t.val());"object"==typeof n&&void 0!==n.closedelay&&3<=n.closedelay.toString().length&&(n.closedelay=n.closedelay/1e3),window.PUM.forms.success(o,n)})}(jQuery),function(i){"use strict";pum_vars&&void 0!==pum_vars.core_sub_forms_enabled&&!pum_vars.core_sub_forms_enabled||(window.PUM=window.PUM||{},window.PUM.newsletter=window.PUM.newsletter||{},i.extend(window.PUM.newsletter,{form:i.extend({},window.PUM.forms.form,{submit:function(e){var o=i(this),t=o.pumSerializeObject();e.preventDefault(),e.stopPropagation(),window.PUM.newsletter.form.beforeAjax(o),i.ajax({type:"POST",dataType:"json",url:pum_vars.ajaxurl,data:{action:"pum_sub_form",values:t}}).always(function(){window.PUM.newsletter.form.afterAjax(o)}).done(function(e){window.PUM.newsletter.form.responseHandler(o,e)}).error(function(e,o,t){console.log("Error: type of "+o+" with message of "+t)})}})}),i(document).on("submit","form.pum-sub-form",window.PUM.newsletter.form.submit).on("success","form.pum-sub-form",function(e,o){var t=i(e.target),n=t.data("settings")||{};t.trigger("pumNewsletterSuccess",[o]).addClass("pum-newsletter-success"),t[0].reset(),window.pum.hooks.doAction("pum-sub-form.success",o,t),"string"==typeof n.redirect&&""!==n.redirect&&(n.redirect=atob(n.redirect)),window.PUM.forms.success(t,n)}).on("error","form.pum-sub-form",function(e,o){var t=i(e.target);t.trigger("pumNewsletterError",[o]),window.pum.hooks.doAction("pum-sub-form.errors",o,t)}))}(jQuery),function(s,r,e){"use strict";s.extend(s.fn.popmake.methods,{addTrigger:function(e){return s.fn.popmake.triggers[e]?s.fn.popmake.triggers[e].apply(this,Array.prototype.slice.call(arguments,1)):(window.console&&console.warn("Trigger type "+e+" does not exist."),this)}}),s.fn.popmake.triggers={auto_open:function(e){var o=PUM.getPopup(this);setTimeout(function(){o.popmake("state","isOpen")||!o.popmake("checkCookies",e)&&o.popmake("checkConditions")&&(s.fn.popmake.last_open_trigger="Auto Open - Delay: "+e.delay,o.popmake("open"))},e.delay)},click_open:function(n){var e,i=PUM.getPopup(this),o=i.popmake("getSettings"),t=[".popmake-"+o.id,".popmake-"+decodeURIComponent(o.slug),'a[href$="#popmake-'+o.id+'"]'];n.extra_selectors&&""!==n.extra_selectors&&t.push(n.extra_selectors),e=(t=pum.hooks.applyFilters("pum.trigger.click_open.selectors",t,n,i)).join(", "),s(e).addClass("pum-trigger").css({cursor:"pointer"}),s(r).on("click.pumTrigger",e,function(e){var o=s(this),t=n.do_default||!1;0<i.has(o).length||i.popmake("state","isOpen")||!i.popmake("checkCookies",n)&&i.popmake("checkConditions")&&(o.data("do-default")?t=o.data("do-default"):(o.hasClass("do-default")||o.hasClass("popmake-do-default")||o.hasClass("pum-do-default"))&&(t=!0),e.ctrlKey||pum.hooks.applyFilters("pum.trigger.click_open.do_default",t,i,o)||(e.preventDefault(),e.stopPropagation()),s.fn.popmake.last_open_trigger=o,i.popmake("open"))})},admin_debug:function(){PUM.getPopup(this).popmake("open")}},s(r).on("pumInit",".pum",function(){var e,o=PUM.getPopup(this),t=o.popmake("getSettings").triggers||[],n=null;if(t.length)for(e=0;t.length>e;e+=1)n=t[e],o.popmake("addTrigger",n.type,n.settings)})}(jQuery,document),function(p,e,o){"use strict";var n="color,date,datetime,datetime-local,email,hidden,month,number,password,range,search,tel,text,time,url,week".split(","),i="select,textarea".split(","),s=/\[([^\]]*)\]/g;Array.prototype.indexOf||(Array.prototype.indexOf=function(e){if(null==this)throw new TypeError;var o=Object(this),t=o.length>>>0;if(0===t)return-1;var n=0;if(0<arguments.length&&((n=Number(arguments[1]))!=n?n=0:0!==n&&n!==1/0&&n!==-1/0&&(n=(0<n||-1)*Math.floor(Math.abs(n)))),t<=n)return-1;for(var i=0<=n?n:Math.max(t-Math.abs(n),0);i<t;i++)if(i in o&&o[i]===e)return i;return-1}),p.fn.popmake.utilities={scrollTo:function(e,o){var t=p(e)||p();t.length&&p("html, body").animate({scrollTop:t.offset().top-100},1e3,"swing",function(){var e=t.find(':input:not([type="button"]):not([type="hidden"]):not(button)').eq(0);e.hasClass("wp-editor-area")?tinyMCE.execCommand("mceFocus",!1,e.attr("id")):e.focus(),"function"==typeof o&&o()})},inArray:function(e,o){return!!~o.indexOf(e)},convert_hex:function(e,o){return e=e.replace("#",""),"rgba("+parseInt(e.substring(0,2),16)+","+parseInt(e.substring(2,4),16)+","+parseInt(e.substring(4,6),16)+","+o/100+")"},debounce:function(t,n){var i;return function(){var e=this,o=arguments;window.clearTimeout(i),i=window.setTimeout(function(){t.apply(e,o)},n)}},throttle:function(e,o){var t=!1,n=function(){t=!1};return function(){t||(e.apply(this,arguments),window.setTimeout(n,o),t=!0)}},getXPath:function(e){var t,n,i,s,r,a=[];return p.each(p(e).parents(),function(e,o){if(t=p(o),n=t.attr("id")||"",i=t.attr("class")||"",s=t.get(0).tagName.toLowerCase(),r=t.parent().children(s).index(t),"body"===s)return!1;0<i.length&&(i=(i=i.split(" "))[0]),a.push(s+(0<n.length?"#"+n:0<i.length?"."+i.split(" ").join("."):":eq("+r+")"))}),a.reverse().join(" > ")},strtotime:function(e,o){var t,n,i,s,l,c,m,r,a,p;if(!e)return!1;if((n=(e=e.replace(/^\s+|\s+$/g,"").replace(/\s{2,}/g," ").replace(/[\t\r\n]/g,"").toLowerCase()).match(/^(\d{1,4})([\-\.\/\:])(\d{1,2})([\-\.\/\:])(\d{1,4})(?:\s(\d{1,2}):(\d{2})?:?(\d{2})?)?(?:\s([A-Z]+)?)?$/))&&n[2]===n[4])if(1901<n[1])switch(n[2]){case"-":return!(12<n[3]||31<n[5])&&new Date(n[1],parseInt(n[3],10)-1,n[5],n[6]||0,n[7]||0,n[8]||0,n[9]||0)/1e3;case".":return!1;case"/":return!(12<n[3]||31<n[5])&&new Date(n[1],parseInt(n[3],10)-1,n[5],n[6]||0,n[7]||0,n[8]||0,n[9]||0)/1e3}else if(1901<n[5])switch(n[2]){case"-":case".":return!(12<n[3]||31<n[1])&&new Date(n[5],parseInt(n[3],10)-1,n[1],n[6]||0,n[7]||0,n[8]||0,n[9]||0)/1e3;case"/":return!(12<n[1]||31<n[3])&&new Date(n[5],parseInt(n[1],10)-1,n[3],n[6]||0,n[7]||0,n[8]||0,n[9]||0)/1e3}else switch(n[2]){case"-":return!(12<n[3]||31<n[5]||n[1]<70&&38<n[1])&&(s=0<=n[1]&&n[1]<=38?+n[1]+2e3:n[1],new Date(s,parseInt(n[3],10)-1,n[5],n[6]||0,n[7]||0,n[8]||0,n[9]||0)/1e3);case".":return 70<=n[5]?!(12<n[3]||31<n[1])&&new Date(n[5],parseInt(n[3],10)-1,n[1],n[6]||0,n[7]||0,n[8]||0,n[9]||0)/1e3:n[5]<60&&!n[6]&&(!(23<n[1]||59<n[3])&&(i=new Date,new Date(i.getFullYear(),i.getMonth(),i.getDate(),n[1]||0,n[3]||0,n[5]||0,n[9]||0)/1e3));case"/":return!(12<n[1]||31<n[3]||n[5]<70&&38<n[5])&&(s=0<=n[5]&&n[5]<=38?+n[5]+2e3:n[5],new Date(s,parseInt(n[1],10)-1,n[3],n[6]||0,n[7]||0,n[8]||0,n[9]||0)/1e3);case":":return!(23<n[1]||59<n[3]||59<n[5])&&(i=new Date,new Date(i.getFullYear(),i.getMonth(),i.getDate(),n[1]||0,n[3]||0,n[5]||0)/1e3)}if("now"===e)return null===o||isNaN(o)?(new Date).getTime()/1e3||0:o||0;if(t=Date.parse(e),!isNaN(t))return t/1e3||0;function u(e){var o,t,n,i,s=e.split(" "),r=s[0],a=s[1].substring(0,3),p=/\d+/.test(r),u=("last"===r?-1:1)*("ago"===s[2]?-1:1);if(p&&(u*=parseInt(r,10)),m.hasOwnProperty(a)&&!s[1].match(/^mon(day|\.)?$/i))return l["set"+m[a]](l["get"+m[a]]()+u);if("wee"===a)return l.setDate(l.getDate()+7*u);if("next"===r||"last"===r)o=r,t=u,void 0!==(i=c[a])&&(0==(n=i-l.getDay())?n=7*t:0<n&&"last"===o?n-=7:n<0&&"next"===o&&(n+=7),l.setDate(l.getDate()+n));else if(!p)return!1;return!0}if(l=o?new Date(1e3*o):new Date,c={sun:0,mon:1,tue:2,wed:3,thu:4,fri:5,sat:6},m={yea:"FullYear",mon:"Month",day:"Date",hou:"Hours",min:"Minutes",sec:"Seconds"},"([+-]?\\d+\\s"+(a="(years?|months?|weeks?|days?|hours?|minutes?|min|seconds?|sec|sunday|sun\\.?|monday|mon\\.?|tuesday|tue\\.?|wednesday|wed\\.?|thursday|thu\\.?|friday|fri\\.?|saturday|sat\\.?)")+"|(last|next)\\s"+a+")(\\sago)?",!(n=e.match(new RegExp("([+-]?\\d+\\s(years?|months?|weeks?|days?|hours?|minutes?|min|seconds?|sec|sunday|sun\\.?|monday|mon\\.?|tuesday|tue\\.?|wednesday|wed\\.?|thursday|thu\\.?|friday|fri\\.?|saturday|sat\\.?)|(last|next)\\s(years?|months?|weeks?|days?|hours?|minutes?|min|seconds?|sec|sunday|sun\\.?|monday|mon\\.?|tuesday|tue\\.?|wednesday|wed\\.?|thursday|thu\\.?|friday|fri\\.?|saturday|sat\\.?))(\\sago)?","gi"))))return!1;for(p=0,r=n.length;p<r;p+=1)if(!u(n[p]))return!1;return l.getTime()/1e3},serializeObject:function(e){p.extend({},e);var o={},t=p.extend(!0,{include:[],exclude:[],includeByClass:""},e);return this.find(":input").each(function(){var e;!this.name||this.disabled||window.PUM.utilities.inArray(this.name,t.exclude)||t.include.length&&!window.PUM.utilities.inArray(this.name,t.include)||-1===this.className.indexOf(t.includeByClass)||(e=this.name.replace(s,"[$1").split("["))[0]&&(this.checked||window.PUM.utilities.inArray(this.type,n)||window.PUM.utilities.inArray(this.nodeName.toLowerCase(),i))&&("checkbox"===this.type&&e.push(""),function e(o,t,n){var i=t[0];1<t.length?(o[i]||(o[i]=t[1]?{}:[]),e(o[i],t.slice(1),n)):(i||(i=o.length),o[i]=n)}(o,e,p(this).val()))}),o}},p.fn.popmake.utilies=p.fn.popmake.utilities,window.PUM=window.PUM||{},window.PUM.utilities=window.PUM.utilities||{},window.PUM.utilities=p.extend(window.PUM.utilities,p.fn.popmake.utilities)}(jQuery,document),function(e,t){if("function"==typeof define&&define.amd)define(["exports","jquery"],function(e,o){return t(e,o)});else if("undefined"!=typeof exports){var o=require("jquery");t(exports,o)}else t(e,e.jQuery||e.Zepto||e.ender||e.$)}(this,function(e,a){var p={validate:/^[a-z_][a-z0-9_]*(?:\[(?:\d*|[a-z0-9_]+)\])*$/i,key:/[a-z0-9_]+|(?=\[\])/gi,push:/^$/,fixed:/^\d+$/,named:/^[a-z0-9_]+$/i};function o(n,t){var i={},s={};function r(e,o,t){return e[o]=t,e}function e(){return i}this.addPair=function(e){if(!p.validate.test(e.name))return this;var o=function(e,o){var t,n,i=e.match(p.key);try{o=JSON.parse(o)}catch(e){}for(;void 0!==(t=i.pop());)p.push.test(t)?o=r([],(n=e.replace(/\[\]$/,""),void 0===s[n]&&(s[n]=0),s[n]++),o):p.fixed.test(t)?o=r([],t,o):p.named.test(t)&&(o=r({},t,o));return o}(e.name,function(e){switch(a('[name="'+e.name+'"]',t).attr("type")){case"checkbox":return"1"===e.value||e.value;default:return e.value}}(e));return i=n.extend(!0,i,o),this},this.addPairs=function(e){if(!n.isArray(e))throw new Error("formSerializer.addPairs expects an Array");for(var o=0,t=e.length;o<t;o++)this.addPair(e[o]);return this},this.serialize=e,this.serializeJSON=function(){return JSON.stringify(e())}}return o.patterns=p,o.serializeObject=function(){var e;return e=this.is("form")?this.serializeArray():this.find(":input").serializeArray(),new o(a,this).addPairs(e).serialize()},o.serializeJSON=function(){var e;return e=this.is("form")?this.serializeArray():this.find(":input").serializeArray(),new o(a,this).addPairs(e).serializeJSON()},void 0!==a.fn&&(a.fn.pumSerializeObject=o.serializeObject,a.fn.pumSerializeJSON=o.serializeJSON),e.FormSerializer=o}),function(e,o,t){"use strict";e.fn.popmake.version=1.7,e.fn.popmake.last_open_popup=null,e(void 0).ready(function(){e(".pum").popmake(),e(void 0).trigger("pumInitialized"),"object"==typeof pum_vars.form_success&&(pum_vars.form_success=e.extend({popup_id:null,settings:{}}),PUM.forms.success(pum_vars.form_success.popup_id,pum_vars.form_success.settings))}),e(".pum").on("pumInit",function(){var e=PUM.getPopup(this),o=PUM.getSetting(e,"id"),t=e.find("form");t.length&&t.prepend('<input type="hidden" name="pum_form_popup_id" value="'+o+'" />')})}(jQuery);!function(a,b){"use strict";function c(){if(!e){e=!0;var a,c,d,f,g=-1!==navigator.appVersion.indexOf("MSIE 10"),h=!!navigator.userAgent.match(/Trident.*rv:11\./),i=b.querySelectorAll("iframe.wp-embedded-content");for(c=0;c<i.length;c++){if(d=i[c],!d.getAttribute("data-secret"))f=Math.random().toString(36).substr(2,10),d.src+="#?secret="+f,d.setAttribute("data-secret",f);if(g||h)a=d.cloneNode(!0),a.removeAttribute("security"),d.parentNode.replaceChild(a,d)}}}var d=!1,e=!1;if(b.querySelector)if(a.addEventListener)d=!0;if(a.wp=a.wp||{},!a.wp.receiveEmbedMessage)if(a.wp.receiveEmbedMessage=function(c){var d=c.data;if(d.secret||d.message||d.value)if(!/[^a-zA-Z0-9]/.test(d.secret)){var e,f,g,h,i,j=b.querySelectorAll('iframe[data-secret="'+d.secret+'"]'),k=b.querySelectorAll('blockquote[data-secret="'+d.secret+'"]');for(e=0;e<k.length;e++)k[e].style.display="none";for(e=0;e<j.length;e++)if(f=j[e],c.source===f.contentWindow){if(f.removeAttribute("style"),"height"===d.message){if(g=parseInt(d.value,10),g>1e3)g=1e3;else if(~~g<200)g=200;f.height=g}if("link"===d.message)if(h=b.createElement("a"),i=b.createElement("a"),h.href=f.getAttribute("src"),i.href=d.value,i.host===h.host)if(b.activeElement===f)a.top.location.href=d.value}}},d)a.addEventListener("message",a.wp.receiveEmbedMessage,!1),b.addEventListener("DOMContentLoaded",c,!1),a.addEventListener("load",c,!1)}(window,document);function vc_js(){vc_toggleBehaviour(),vc_tabsBehaviour(),vc_accordionBehaviour(),vc_teaserGrid(),vc_carouselBehaviour(),vc_slidersBehaviour(),vc_prettyPhoto(),vc_googleplus(),vc_pinterest(),vc_progress_bar(),vc_plugin_flexslider(),vc_google_fonts(),vc_gridBehaviour(),vc_rowBehaviour(),vc_prepareHoverBox(),vc_googleMapsPointer(),vc_ttaActivation(),jQuery(document).trigger("vc_js"),window.setTimeout(vc_waypoints,500)}document.documentElement.className+=" js_active ",document.documentElement.className+="ontouchstart"in document.documentElement?" vc_mobile ":" vc_desktop ",function(){for(var prefix=["-webkit-","-moz-","-ms-","-o-",""],i=0;i<prefix.length;i++)prefix[i]+"transform"in document.documentElement.style&&(document.documentElement.className+=" vc_transform ")}(),"function"!=typeof window.vc_plugin_flexslider&&(window.vc_plugin_flexslider=function($parent){($parent?$parent.find(".wpb_flexslider"):jQuery(".wpb_flexslider")).each(function(){var this_element=jQuery(this),sliderTimeout=1e3*parseInt(this_element.attr("data-interval")),sliderFx=this_element.attr("data-flex_fx"),slideshow=!0;0===sliderTimeout&&(slideshow=!1),this_element.is(":visible")&&this_element.flexslider({animation:sliderFx,slideshow:slideshow,slideshowSpeed:sliderTimeout,sliderSpeed:800,smoothHeight:!0})})}),"function"!=typeof window.vc_googleplus&&(window.vc_googleplus=function(){0<jQuery(".wpb_googleplus").length&&function(){var po=document.createElement("script");po.type="text/javascript",po.async=!0,po.src="https://apis.google.com/js/plusone.js";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(po,s)}()}),"function"!=typeof window.vc_pinterest&&(window.vc_pinterest=function(){0<jQuery(".wpb_pinterest").length&&function(){var po=document.createElement("script");po.type="text/javascript",po.async=!0,po.src="https://assets.pinterest.com/js/pinit.js";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(po,s)}()}),"function"!=typeof window.vc_progress_bar&&(window.vc_progress_bar=function(){void 0!==jQuery.fn.waypoint&&jQuery(".vc_progress_bar").waypoint(function(){jQuery(this).find(".vc_single_bar").each(function(index){var bar=jQuery(this).find(".vc_bar"),val=bar.data("percentage-value");setTimeout(function(){bar.css({width:val+"%"})},200*index)})},{offset:"85%"})}),"function"!=typeof window.vc_waypoints&&(window.vc_waypoints=function(){void 0!==jQuery.fn.waypoint&&jQuery(".wpb_animate_when_almost_visible:not(.wpb_start_animation)").waypoint(function(){jQuery(this).addClass("wpb_start_animation animated")},{offset:"85%"})}),"function"!=typeof window.vc_toggleBehaviour&&(window.vc_toggleBehaviour=function($el){function event(e){e&&e.preventDefault&&e.preventDefault();var element=jQuery(this).closest(".vc_toggle"),content=element.find(".vc_toggle_content");element.hasClass("vc_toggle_active")?content.slideUp({duration:300,complete:function(){element.removeClass("vc_toggle_active")}}):content.slideDown({duration:300,complete:function(){element.addClass("vc_toggle_active")}})}$el?$el.hasClass("vc_toggle_title")?$el.unbind("click").click(event):$el.find(".vc_toggle_title").unbind("click").click(event):jQuery(".vc_toggle_title").unbind("click").on("click",event)}),"function"!=typeof window.vc_tabsBehaviour&&(window.vc_tabsBehaviour=function($tab){if(jQuery.ui){var $call=$tab||jQuery(".wpb_tabs, .wpb_tour"),ver=jQuery.ui&&jQuery.ui.version?jQuery.ui.version.split("."):"1.10",old_version=1===parseInt(ver[0])&&parseInt(ver[1])<9;$call.each(function(index){var $tabs,interval=jQuery(this).attr("data-interval"),tabs_array=[];if($tabs=jQuery(this).find(".wpb_tour_tabs_wrapper").tabs({show:function(event,ui){wpb_prepare_tab_content(event,ui)},beforeActivate:function(event,ui){1!==ui.newPanel.index()&&ui.newPanel.find(".vc_pie_chart:not(.vc_ready)")},activate:function(event,ui){wpb_prepare_tab_content(event,ui)}}),interval&&0<interval)try{$tabs.tabs("rotate",1e3*interval)}catch(e){window.console&&window.console.warn&&console.warn(e)}jQuery(this).find(".wpb_tab").each(function(){tabs_array.push(this.id)}),jQuery(this).find(".wpb_tabs_nav li").click(function(e){return e.preventDefault(),old_version?$tabs.tabs("select",jQuery("a",this).attr("href")):$tabs.tabs("option","active",jQuery(this).index()),!1}),jQuery(this).find(".wpb_prev_slide a, .wpb_next_slide a").click(function(e){if(e.preventDefault(),old_version){var index=$tabs.tabs("option","selected");jQuery(this).parent().hasClass("wpb_next_slide")?index++:index--,index<0?index=$tabs.tabs("length")-1:index>=$tabs.tabs("length")&&(index=0),$tabs.tabs("select",index)}else{index=$tabs.tabs("option","active");var length=$tabs.find(".wpb_tab").length;index=jQuery(this).parent().hasClass("wpb_next_slide")?length<=index+1?0:index+1:index-1<0?length-1:index-1,$tabs.tabs("option","active",index)}})})}}),"function"!=typeof window.vc_accordionBehaviour&&(window.vc_accordionBehaviour=function(){jQuery(".wpb_accordion").each(function(index){var $tabs,$this=jQuery(this),active_tab=($this.attr("data-interval"),!isNaN(jQuery(this).data("active-tab"))&&0<parseInt($this.data("active-tab"))&&parseInt($this.data("active-tab"))-1),collapsible=!1===active_tab||"yes"===$this.data("collapsible");$tabs=$this.find(".wpb_accordion_wrapper").accordion({header:"> div > h3",autoHeight:!1,heightStyle:"content",active:active_tab,collapsible:collapsible,navigation:!0,activate:vc_accordionActivate,change:function(event,ui){void 0!==jQuery.fn.isotope&&ui.newContent.find(".isotope").isotope("layout"),vc_carouselBehaviour(ui.newPanel)}}),!0===$this.data("vcDisableKeydown")&&($tabs.data("uiAccordion")._keydown=function(){})})}),"function"!=typeof window.vc_teaserGrid&&(window.vc_teaserGrid=function(){var layout_modes={fitrows:"fitRows",masonry:"masonry"};jQuery(".wpb_grid .teaser_grid_container:not(.wpb_carousel), .wpb_filtered_grid .teaser_grid_container:not(.wpb_carousel)").each(function(){var $container=jQuery(this),$thumbs=$container.find(".wpb_thumbnails"),layout_mode=$thumbs.attr("data-layout-mode");$thumbs.isotope({itemSelector:".isotope-item",layoutMode:void 0===layout_modes[layout_mode]?"fitRows":layout_modes[layout_mode]}),$container.find(".categories_filter a").data("isotope",$thumbs).click(function(e){e.preventDefault();var $thumbs=jQuery(this).data("isotope");jQuery(this).parent().parent().find(".active").removeClass("active"),jQuery(this).parent().addClass("active"),$thumbs.isotope({filter:jQuery(this).attr("data-filter")})}),jQuery(window).bind("load resize",function(){$thumbs.isotope("layout")})})}),"function"!=typeof window.vc_carouselBehaviour&&(window.vc_carouselBehaviour=function($parent){($parent?$parent.find(".wpb_carousel"):jQuery(".wpb_carousel")).each(function(){var $this=jQuery(this);if(!0!==$this.data("carousel_enabled")&&$this.is(":visible")){$this.data("carousel_enabled",!0);getColumnsCount(jQuery(this));jQuery(this).hasClass("columns_count_1")&&900;var carousele_li=jQuery(this).find(".wpb_thumbnails-fluid li");carousele_li.css({"margin-right":carousele_li.css("margin-left"),"margin-left":0});var fluid_ul=jQuery(this).find("ul.wpb_thumbnails-fluid");fluid_ul.width(fluid_ul.width()+300),jQuery(window).resize(function(){screen_size!=(screen_size=getSizeName())&&window.setTimeout("location.reload()",20)})}})}),"function"!=typeof window.vc_slidersBehaviour&&(window.vc_slidersBehaviour=function(){jQuery(".wpb_gallery_slides").each(function(index){var $imagesGrid,this_element=jQuery(this);if(this_element.hasClass("wpb_slider_nivo")){var sliderTimeout=1e3*this_element.attr("data-interval");0===sliderTimeout&&(sliderTimeout=9999999999),this_element.find(".nivoSlider").nivoSlider({effect:"boxRainGrow,boxRain,boxRainReverse,boxRainGrowReverse",slices:15,boxCols:8,boxRows:4,animSpeed:800,pauseTime:sliderTimeout,startSlide:0,directionNav:!0,directionNavHide:!0,controlNav:!0,keyboardNav:!1,pauseOnHover:!0,manualAdvance:!1,prevText:"Prev",nextText:"Next"})}else this_element.hasClass("wpb_image_grid")&&(jQuery.fn.imagesLoaded?$imagesGrid=this_element.find(".wpb_image_grid_ul").imagesLoaded(function(){$imagesGrid.isotope({itemSelector:".isotope-item",layoutMode:"fitRows"})}):this_element.find(".wpb_image_grid_ul").isotope({itemSelector:".isotope-item",layoutMode:"fitRows"}))})}),"function"!=typeof window.vc_prettyPhoto&&(window.vc_prettyPhoto=function(){try{jQuery&&jQuery.fn&&jQuery.fn.prettyPhoto&&jQuery('a.prettyphoto, .gallery-icon a[href*=".jpg"]').prettyPhoto({animationSpeed:"normal",hook:"data-rel",padding:15,opacity:.7,showTitle:!0,allowresize:!0,counter_separator_label:"/",hideflash:!1,deeplinking:!1,modal:!1,callback:function(){-1<location.href.indexOf("#!prettyPhoto")&&(location.hash="")},social_tools:""})}catch(err){window.console&&window.console.warn&&console.warn(err)}}),"function"!=typeof window.vc_google_fonts&&(window.vc_google_fonts=function(){return!1}),window.vcParallaxSkroll=!1,"function"!=typeof window.vc_rowBehaviour&&(window.vc_rowBehaviour=function(){var vcSkrollrOptions,callSkrollInit,$=window.jQuery;function fullWidthRow(){var $elements=$('[data-vc-full-width="true"]');$.each($elements,function(key,item){var $el=$(this);$el.addClass("vc_hidden");var $el_full=$el.next(".vc_row-full-width");if($el_full.length||($el_full=$el.parent().next(".vc_row-full-width")),$el_full.length){var padding,paddingRight,el_margin_left=parseInt($el.css("margin-left"),10),el_margin_right=parseInt($el.css("margin-right"),10),offset=0-$el_full.offset().left-el_margin_left,width=$(window).width();if("rtl"===$el.css("direction")&&(offset-=$el_full.width(),offset+=width,offset+=el_margin_left,offset+=el_margin_right),$el.css({position:"relative",left:offset,"box-sizing":"border-box",width:width}),!$el.data("vcStretchContent"))"rtl"===$el.css("direction")?((padding=offset)<0&&(padding=0),(paddingRight=offset)<0&&(paddingRight=0)):((padding=-1*offset)<0&&(padding=0),(paddingRight=width-padding-$el_full.width()+el_margin_left+el_margin_right)<0&&(paddingRight=0)),$el.css({"padding-left":padding+"px","padding-right":paddingRight+"px"});$el.attr("data-vc-full-width-init","true"),$el.removeClass("vc_hidden"),$(document).trigger("vc-full-width-row-single",{el:$el,offset:offset,marginLeft:el_margin_left,marginRight:el_margin_right,elFull:$el_full,width:width})}}),$(document).trigger("vc-full-width-row",$elements)}function fullHeightRow(){var windowHeight,offsetTop,fullHeight,$element=$(".vc_row-o-full-height:first");$element.length&&(windowHeight=$(window).height(),(offsetTop=$element.offset().top)<windowHeight&&(fullHeight=100-offsetTop/(windowHeight/100),$element.css("min-height",fullHeight+"vh")));$(document).trigger("vc-full-height-row",$element)}$(window).off("resize.vcRowBehaviour").on("resize.vcRowBehaviour",fullWidthRow).on("resize.vcRowBehaviour",fullHeightRow),fullWidthRow(),fullHeightRow(),(0<window.navigator.userAgent.indexOf("MSIE ")||navigator.userAgent.match(/Trident.*rv\:11\./))&&$(".vc_row-o-full-height").each(function(){"flex"===$(this).css("display")&&$(this).wrap('<div class="vc_ie-flexbox-fixer"></div>')}),vc_initVideoBackgrounds(),callSkrollInit=!1,window.vcParallaxSkroll&&window.vcParallaxSkroll.destroy(),$(".vc_parallax-inner").remove(),$("[data-5p-top-bottom]").removeAttr("data-5p-top-bottom data-30p-top-bottom"),$("[data-vc-parallax]").each(function(){var skrollrSize,skrollrStart,$parallaxElement,parallaxImage,youtubeId;callSkrollInit=!0,"on"===$(this).data("vcParallaxOFade")&&$(this).children().attr("data-5p-top-bottom","opacity:0;").attr("data-30p-top-bottom","opacity:1;"),skrollrSize=100*$(this).data("vcParallax"),($parallaxElement=$("<div />").addClass("vc_parallax-inner").appendTo($(this))).height(skrollrSize+"%"),(youtubeId=vcExtractYoutubeId(parallaxImage=$(this).data("vcParallaxImage")))?insertYoutubeVideoAsBackground($parallaxElement,youtubeId):void 0!==parallaxImage&&$parallaxElement.css("background-image","url("+parallaxImage+")"),skrollrStart=-(skrollrSize-100),$parallaxElement.attr("data-bottom-top","top: "+skrollrStart+"%;").attr("data-top-bottom","top: 0%;")}),callSkrollInit&&window.skrollr&&(vcSkrollrOptions={forceHeight:!1,smoothScrolling:!1,mobileCheck:function(){return!1}},window.vcParallaxSkroll=skrollr.init(vcSkrollrOptions),window.vcParallaxSkroll)}),"function"!=typeof window.vc_gridBehaviour&&(window.vc_gridBehaviour=function(){jQuery.fn.vcGrid&&jQuery("[data-vc-grid]").vcGrid()}),"function"!=typeof window.getColumnsCount&&(window.getColumnsCount=function(el){for(var find=!1,i=1;!1===find;){if(el.hasClass("columns_count_"+i))return find=!0,i;i++}});var screen_size=getSizeName();function getSizeName(){var screen_w=jQuery(window).width();return 1170<screen_w?"desktop_wide":960<screen_w&&screen_w<1169?"desktop":768<screen_w&&screen_w<959?"tablet":300<screen_w&&screen_w<767?"mobile":screen_w<300?"mobile_portrait":""}function loadScript(url,$obj,callback){var script=document.createElement("script");script.type="text/javascript",script.readyState&&(script.onreadystatechange=function(){"loaded"!==script.readyState&&"complete"!==script.readyState||(script.onreadystatechange=null,callback())}),script.src=url,$obj.get(0).appendChild(script)}function vc_ttaActivation(){jQuery("[data-vc-accordion]").on("show.vc.accordion",function(e){var $=window.jQuery,ui={};ui.newPanel=$(this).data("vc.accordion").getTarget(),window.wpb_prepare_tab_content(e,ui)})}function vc_accordionActivate(event,ui){if(ui.newPanel.length&&ui.newHeader.length){var $pie_charts=ui.newPanel.find(".vc_pie_chart:not(.vc_ready)"),$round_charts=ui.newPanel.find(".vc_round-chart"),$line_charts=ui.newPanel.find(".vc_line-chart"),$carousel=ui.newPanel.find('[data-ride="vc_carousel"]');void 0!==jQuery.fn.isotope&&ui.newPanel.find(".isotope, .wpb_image_grid_ul").isotope("layout"),ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length&&ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function(){var grid=jQuery(this).data("vcGrid");grid&&grid.gridBuilder&&grid.gridBuilder.setMasonry&&grid.gridBuilder.setMasonry()}),vc_carouselBehaviour(ui.newPanel),vc_plugin_flexslider(ui.newPanel),$pie_charts.length&&jQuery.fn.vcChat&&$pie_charts.vcChat(),$round_charts.length&&jQuery.fn.vcRoundChart&&$round_charts.vcRoundChart({reload:!1}),$line_charts.length&&jQuery.fn.vcLineChart&&$line_charts.vcLineChart({reload:!1}),$carousel.length&&jQuery.fn.carousel&&$carousel.carousel("resizeAction"),ui.newPanel.parents(".isotope").length&&ui.newPanel.parents(".isotope").each(function(){jQuery(this).isotope("layout")})}}function initVideoBackgrounds(){return window.console&&window.console.warn&&window.console.warn("this function is deprecated use vc_initVideoBackgrounds"),vc_initVideoBackgrounds()}function vc_initVideoBackgrounds(){jQuery("[data-vc-video-bg]").each(function(){var youtubeId,$element=jQuery(this);$element.data("vcVideoBg")?((youtubeId=vcExtractYoutubeId($element.data("vcVideoBg")))&&($element.find(".vc_video-bg").remove(),insertYoutubeVideoAsBackground($element,youtubeId)),jQuery(window).on("grid:items:added",function(event,$grid){$element.has($grid).length&&vcResizeVideoBackground($element)})):$element.find(".vc_video-bg").remove()})}function insertYoutubeVideoAsBackground($element,youtubeId,counter){if("undefined"==typeof YT||void 0===YT.Player)return 100<(counter=void 0===counter?0:counter)?void console.warn("Too many attempts to load YouTube api"):void setTimeout(function(){insertYoutubeVideoAsBackground($element,youtubeId,counter++)},100);var $container=$element.prepend('<div class="vc_video-bg vc_hidden-xs"><div class="inner"></div></div>').find(".inner");new YT.Player($container[0],{width:"100%",height:"100%",videoId:youtubeId,playerVars:{playlist:youtubeId,iv_load_policy:3,enablejsapi:1,disablekb:1,autoplay:1,controls:0,showinfo:0,rel:0,loop:1,wmode:"transparent"},events:{onReady:function(event){event.target.mute().setLoop(!0)}}}),vcResizeVideoBackground($element),jQuery(window).bind("resize",function(){vcResizeVideoBackground($element)})}function vcResizeVideoBackground($element){var iframeW,iframeH,marginLeft,marginTop,containerW=$element.innerWidth(),containerH=$element.innerHeight();containerW/containerH<16/9?(iframeW=containerH*(16/9),iframeH=containerH,marginLeft=-Math.round((iframeW-containerW)/2)+"px",marginTop=-Math.round((iframeH-containerH)/2)+"px"):(iframeH=(iframeW=containerW)*(9/16),marginTop=-Math.round((iframeH-containerH)/2)+"px",marginLeft=-Math.round((iframeW-containerW)/2)+"px"),iframeW+="px",iframeH+="px",$element.find(".vc_video-bg iframe").css({maxWidth:"1000%",marginLeft:marginLeft,marginTop:marginTop,width:iframeW,height:iframeH})}function vcExtractYoutubeId(url){if(void 0===url)return!1;var id=url.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/);return null!==id&&id[1]}if("function"!=typeof window.wpb_prepare_tab_content&&(window.wpb_prepare_tab_content=function(event,ui){var $ui_panel,$google_maps,panel=ui.panel||ui.newPanel,$pie_charts=panel.find(".vc_pie_chart:not(.vc_ready)"),$round_charts=panel.find(".vc_round-chart"),$line_charts=panel.find(".vc_line-chart"),$carousel=panel.find('[data-ride="vc_carousel"]');if(vc_carouselBehaviour(),vc_plugin_flexslider(panel),ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").length&&ui.newPanel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function(){var grid=jQuery(this).data("vcGrid");grid&&grid.gridBuilder&&grid.gridBuilder.setMasonry&&grid.gridBuilder.setMasonry()}),panel.find(".vc_masonry_media_grid, .vc_masonry_grid").length&&panel.find(".vc_masonry_media_grid, .vc_masonry_grid").each(function(){var grid=jQuery(this).data("vcGrid");grid&&grid.gridBuilder&&grid.gridBuilder.setMasonry&&grid.gridBuilder.setMasonry()}),$pie_charts.length&&jQuery.fn.vcChat&&$pie_charts.vcChat(),$round_charts.length&&jQuery.fn.vcRoundChart&&$round_charts.vcRoundChart({reload:!1}),$line_charts.length&&jQuery.fn.vcLineChart&&$line_charts.vcLineChart({reload:!1}),$carousel.length&&jQuery.fn.carousel&&$carousel.carousel("resizeAction"),$ui_panel=panel.find(".isotope, .wpb_image_grid_ul"),$google_maps=panel.find(".wpb_gmaps_widget"),0<$ui_panel.length&&$ui_panel.isotope("layout"),$google_maps.length&&!$google_maps.is(".map_ready")){var $frame=$google_maps.find("iframe");$frame.attr("src",$frame.attr("src")),$google_maps.addClass("map_ready")}panel.parents(".isotope").length&&panel.parents(".isotope").each(function(){jQuery(this).isotope("layout")})}),"function"!=typeof window.vc_googleMapsPointer)function vc_googleMapsPointer(){var $=window.jQuery,$wpbGmapsWidget=$(".wpb_gmaps_widget");$wpbGmapsWidget.click(function(){$("iframe",this).css("pointer-events","auto")}),$wpbGmapsWidget.mouseleave(function(){$("iframe",this).css("pointer-events","none")}),$(".wpb_gmaps_widget iframe").css("pointer-events","none")}function vc_setHoverBoxPerspective(hoverBox){hoverBox.each(function(){var $this=jQuery(this),perspective=4*$this.width()+"px";$this.css("perspective",perspective)})}function vc_setHoverBoxHeight(hoverBox){hoverBox.each(function(){var $this=jQuery(this),hoverBoxInner=$this.find(".vc-hoverbox-inner");hoverBoxInner.css("min-height",0);var frontHeight=$this.find(".vc-hoverbox-front-inner").outerHeight(),backHeight=$this.find(".vc-hoverbox-back-inner").outerHeight(),hoverBoxHeight=backHeight<frontHeight?frontHeight:backHeight;hoverBoxHeight<250&&(hoverBoxHeight=250),hoverBoxInner.css("min-height",hoverBoxHeight+"px")})}function vc_prepareHoverBox(){var hoverBox=jQuery(".vc-hoverbox");vc_setHoverBoxHeight(hoverBox),vc_setHoverBoxPerspective(hoverBox)}jQuery(document).ready(vc_prepareHoverBox),jQuery(window).resize(vc_prepareHoverBox),jQuery(document).ready(function($){window.vc_js()});jQuery.fn.nextInArray=function(element){var nextId=0;for(var i=0;i<this.length;i++){if(this[i]==element){nextId=i+1;break}}
if(nextId>this.length-1)
nextId=0;return this[nextId]}
jQuery.fn.clearForm=function(){return this.each(function(){var type=this.type,tag=this.tagName.toLowerCase();if(tag=='form')
return jQuery(':input',this).clearForm();if(type=='text'||type=='password'||tag=='textarea')
this.value='';else if(type=='checkbox'||type=='radio')
this.checked=!1;else if(tag=='select')
this.selectedIndex=-1})}
jQuery.fn.tagName=function(){return this.get(0).tagName}
jQuery.fn.exists=function(){return(jQuery(this).size()>0?!0:!1)}
function isNumber(val){return/^\d+/.test(val)}
function pushDataToParam(data,pref){pref=pref?pref:'';var res=[];for(var key in data){var name=pref&&pref!=''?pref+'['+key+']':key;if(typeof(data[key])==='array'||typeof(data[key])==='object'){res=jQuery.merge(res,pushDataToParam(data[key],name))}else{res.push(name+"="+data[key])}}
return res}
jQuery.fn.serializeAnythingGmp=function(addData){var toReturn=[];var els=jQuery(this).find(':input').get();jQuery.each(els,function(){if(this.name&&!this.disabled&&(this.checked||/select|textarea/i.test(this.nodeName)||/text|hidden|password/i.test(this.type))){var val=jQuery(this).val();toReturn.push(encodeURIComponent(this.name)+"="+encodeURIComponent(val))}});if(typeof(addData)!='undefined'){toReturn=jQuery.merge(toReturn,pushDataToParam(addData))}
return toReturn.join("&").replace(/%20/g,"+")};jQuery.fn.serializeAssoc=function(){var data=[];jQuery.each(this.serializeArray(),function(key,obj){var a=obj.name.match(/(.*?)\[(.*?)\]/);if(a!==null){var subName=a[1];var subKey=a[2];if(!data[subName])data[subName]=[];if(data[subName][subKey]){if(jQuery.isArray(data[subName][subKey])){data[subName][subKey].push(obj.value)}else{data[subName][subKey]=[];data[subName][subKey].push(obj.value)}}else{data[subName][subKey]=obj.value}}else{if(data[obj.name]){if(jQuery.isArray(data[obj.name])){data[obj.name].push(obj.value)}else{data[obj.name]=[];data[obj.name].push(obj.value)}}else{data[obj.name]=obj.value}}});return data};function str_replace(haystack,needle,replacement){var temp=haystack.split(needle);return temp.join(replacement)}
function nameToClassId(name){return str_replace(str_replace(name,']',''),'[','')}
function strpos(haystack,needle,offset){var i=haystack.indexOf(needle,offset);return i>=0?i:!1}
function extend(Child,Parent){var F=function(){};F.prototype=Parent.prototype;Child.prototype=new F();Child.prototype.constructor=Child;Child.superclass=Parent.prototype}
function toeRedirect(url){document.location.href=url}
function toeReload(url){if(url)
toeRedirect(url);document.location.reload()}
jQuery.fn.toeRebuildSelect=function(data,useIdAsValue,val){if(jQuery(this).tagName()=='SELECT'&&typeof(data)=='object'){if(jQuery(data).size()>0){if(typeof(val)=='undefined')
val=!1;if(jQuery(this).children('option').length){jQuery(this).children('option').remove()}
if(typeof(useIdAsValue)=='undefined')
useIdAsValue=!1;var selected='';for(var id in data){selected='';if(val&&((useIdAsValue&&id==val)||(data[id]==val)))
selected='selected';jQuery(this).append('<option value="'+(useIdAsValue?id:data[id])+'" '+selected+'>'+data[id]+'</option>')}}}}
function toeInArray(needle,haystack){if(typeof(haystack)=='object'){for(var k in haystack){if(haystack[k]==needle)
return k}}else if(typeof(haystack)=='array'){return jQuery.inArray(needle,haystack)}
return-1}
jQuery.fn.setReadonly=function(){jQuery(this).addClass('toeReadonly').attr('readonly','readonly')}
jQuery.fn.unsetReadonly=function(){jQuery(this).removeClass('toeReadonly').removeAttr('readonly','readonly')}
jQuery.fn.getClassId=function(pref,test){var classId=jQuery(this).attr('class');classId=classId.substr(strpos(classId,pref+'_'));if(strpos(classId,' '))
classId=classId.substr(0,strpos(classId,' '));classId=classId.split('_');classId=classId[1];return classId}
function toeTextIncDec(textFieldId,inc){var value=parseInt(jQuery('#'+textFieldId).val());if(isNaN(value))
value=0;if(!(inc<0&&value<1)){value+=inc}
jQuery('#'+textFieldId).val(value)}
function toeStrFirstUp(str){str+='';var f=str.charAt(0).toUpperCase();return f+str.substr(1)}
function URLToArray(url){var request={};var pairs=url.substring(url.indexOf('?')+1).split('&');for(var i=0;i<pairs.length;i++){if(!pairs[i])
continue;var pair=pairs[i].split('=');request[decodeURIComponent(pair[0])]=decodeURIComponent(pair[1])}
return request}
function ArrayToURL(array){var pairs=[];for(var key in array)
if(array.hasOwnProperty(key))
pairs.push(encodeURIComponent(key)+'='+encodeURIComponent(array[key]));return pairs.join('&')}
function parseStr(str,array){var strArr=String(str).replace(/^&/,'').replace(/&$/,'').split('&'),sal=strArr.length,i,j,ct,p,lastObj,obj,lastIter,undef,chr,tmp,key,value,postLeftBracketPos,keys,keysLen,fixStr=function(str){return decodeURIComponent(str.replace(/\+/g,'%20'))};if(!array){array={}}
for(i=0;i<sal;i++){tmp=strArr[i].split('=');key=fixStr(tmp[0]);value=(tmp.length<2)?'':fixStr(tmp[1]);while(key.charAt(0)===' '){key=key.slice(1)}
if(key.indexOf('\x00')>-1){key=key.slice(0,key.indexOf('\x00'))}
if(key&&key.charAt(0)!=='['){keys=[];postLeftBracketPos=0;for(j=0;j<key.length;j++){if(key.charAt(j)==='['&&!postLeftBracketPos){postLeftBracketPos=j+1}else if(key.charAt(j)===']'){if(postLeftBracketPos){if(!keys.length){keys.push(key.slice(0,postLeftBracketPos-1))}
keys.push(key.substr(postLeftBracketPos,j-postLeftBracketPos));postLeftBracketPos=0;if(key.charAt(j+1)!=='['){break}}}}
if(!keys.length){keys=[key]}
for(j=0;j<keys[0].length;j++){chr=keys[0].charAt(j);if(chr===' '||chr==='.'||chr==='['){keys[0]=keys[0].substr(0,j)+'_'+keys[0].substr(j+1)}
if(chr==='['){break}}
obj=array;for(j=0,keysLen=keys.length;j<keysLen;j++){key=keys[j].replace(/^['"]/,'').replace(/['"]$/,'');lastIter=j!==keys.length-1;lastObj=obj;if((key!==''&&key!==' ')||j===0){if(obj[key]===undef){obj[key]={}}
obj=obj[key]}else{ct=-1;for(p in obj){if(obj.hasOwnProperty(p)){if(+p>ct&&p.match(/^\d+$/g)){ct=+p}}}
key=ct+1}}
lastObj[key]=value}}
return array}
function toeListableGmp(params){this.params=jQuery.extend({},params);this.table=jQuery(this.params.table);this.paging=jQuery(this.params.paging);this.perPage=this.params.perPage;this.list=this.params.list;this.count=this.params.count;this.page=this.params.page;this.pagingCallback=this.params.pagingCallback;var self=this;this.draw=function(list,count){this.table.find('tr').not('.gmpExample, .gmpTblHeader').remove();var exampleRow=this.table.find('.gmpExample');for(var i in list){var newRow=exampleRow.clone();for(var key in list[i]){var element=newRow.find('.'+key);if(element.size()){var valueTo=element.attr('valueTo');if(valueTo){var newValue=list[i][key];var prevValue=element.attr(valueTo);if(prevValue)
newValue=prevValue+' '+newValue;element.attr(valueTo,newValue)}else element.html(list[i][key])}}
newRow.removeClass('gmpExample').show();this.table.append(newRow)}
if(this.paging){this.paging.html('');if(count&&count>list.length&&this.perPage){for(var i=1;i<=Math.ceil(count/this.perPage);i++){var newPageId=i-1,newElement=(newPageId==this.page)?jQuery('<b/>'):jQuery('<a/>');if(newPageId!=this.page){newElement.attr('href','#'+newPageId).click(function(){if(self.pagingCallback&&typeof(self.pagingCallback)=='function'){self.pagingCallback(parseInt(jQuery(this).attr('href').replace('#','')));return!1}})}
newElement.addClass('toePagingElement').html(i);this.paging.append(newElement);if(i%20==0&&i)
this.paging.append('<br />')}}}};if(this.list)
this.draw(this.list,this.count)}
function setCookieGmp(c_name,value,exdays){var exdate=new Date();exdate.setDate(exdate.getDate()+exdays);var value_prepared='';if(typeof(value)=='array'||typeof(value)=='object'){value_prepared='_JSON:'+JSON.stringify(value)}else{value_prepared=value}
var c_value=escape(value_prepared)+((exdays==null)?"":"; expires="+exdate.toUTCString())+'; path=/';document.cookie=c_name+"="+c_value}
function getCookieGmp(name){var parts=document.cookie.split(name+"=");if(parts.length==2){var value=unescape(parts.pop().split(";").shift());if(value.indexOf('_JSON:')===0){value=JSON.parse(value.split("_JSON:").pop())}
return value}
return null}
function delCookieGmp(name){document.cookie=name+'=; expires=Thu, 01 Jan 1970 00:00:01 GMT;'}
function callUserFuncArray(cb,parameters){var func;if(typeof cb==='string'){func=(typeof this[cb]==='function')?this[cb]:func=(new Function(null,'return '+cb))()}else if(Object.prototype.toString.call(cb)==='[object Array]'){func=(typeof cb[0]=='string')?eval(cb[0]+"['"+cb[1]+"']"):func=cb[0][cb[1]]}else if(typeof cb==='function'){func=cb}
if(typeof func!=='function'){throw new Error(func+' is not a valid function')}
return(typeof cb[0]==='string')?func.apply(eval(cb[0]),parameters):(typeof cb[0]!=='object')?func.apply(null,parameters):func.apply(cb[0],parameters)}
jQuery.fn.zoom=function(level){jQuery(this).data('zoom',level);return jQuery(this).css({'-moz-transform':'scale('+level+')','-moz-transform-origin':'center center','-o-transform':'scale('+level+')','-o-transform-origin':'center center','-webkit-transform':'scale('+level+')','-webkit-transform-origin':'center center','transform':'scale('+level+')','transform-origin':'center center'})};jQuery.fn.rotate=function(deg){return jQuery(this).css({'-moz-transform':'rotate('+deg+'deg)','-webkit-transform':'rotate('+deg+'deg)','-o-transform':'rotate('+deg+'deg)','-ms-transform':'rotate('+deg+'deg)','transform':'rotate('+deg+'deg)'})};jQuery.fn.scrollWidth=function(){var inner=document.createElement('p');inner.style.width="100%";inner.style.height="200px";var outer=document.createElement('div');outer.style.position="absolute";outer.style.top="0px";outer.style.left="0px";outer.style.visibility="hidden";outer.style.width="200px";outer.style.height="150px";outer.style.overflow="hidden";outer.appendChild(inner);document.body.appendChild(outer);var w1=inner.offsetWidth;outer.style.overflow='scroll';var w2=inner.offsetWidth;if(w1==w2)w2=outer.clientWidth;document.body.removeChild(outer);return(w1-w2)};function toeGetImgAttachId(img){var classesStr=jQuery(img).attr('class'),aid=0;if(classesStr&&classesStr!=''){var matches=classesStr.match(/wp-image-(\d+)/);if(matches&&matches[1]){aid=parseInt(matches[1])}}
return aid}
function toeGetHashParams(){var hashArr=window.location.hash.split('#'),res=[];for(var i in hashArr){if(hashArr[i]&&hashArr[i]!=''){res.push(hashArr[i])}}
return res}
function traverseElement(el,regex,textReplacerFunc,to){if(!/^(script|style)$/.test(el.tagName)){var child=el.lastChild;while(child){if(child.nodeType==1){traverseElement(child,regex,textReplacerFunc,to)}else if(child.nodeType==3){textReplacerFunc(child,regex,to)}
child=child.previousSibling}}}
function textReplacerFunc(textNode,regex,to){textNode.data=textNode.data.replace(regex,to)}
function replaceWords(html,words){var container=document.createElement("div");container.innerHTML=html;for(var replace in words){traverseElement(container,new RegExp(replace,"g"),textReplacerFunc,words[replace])}
return container.innerHTML}
function toeSelectText(element){var doc=document,text=jQuery(element).get(0),range,selection;if(doc.body.createTextRange){range=doc.body.createTextRange();range.moveToElementText(text);range.select()}else if(window.getSelection){selection=window.getSelection();range=doc.createRange();range.selectNodeContents(text);selection.removeAllRanges();selection.addRange(range)}}
jQuery.fn.animationDuration=function(seconds,isMili){if(isMili){seconds=parseFloat(seconds)/1000}
var secondsStr=seconds+'s';return jQuery(this).css({'webkit-animation-duration':secondsStr,'-moz-animation-duration':secondsStr,'-o-animation-duration':secondsStr,'animation-duration':secondsStr})};function gmpStrToMs(strDate){var dateHours=strDate.split(' ');if(dateHours.length==2){strDate=dateHours[0]+' ';var hms=dateHours[1].split(':');for(var i=0;i<3;i++){strDate+=hms[i]?hms[i]:'00';if(i<2)
strDate+=':'}}
var date=new Date(str_replace(strDate,'-','/')),res=0;if(date){res=date.getTime()}
return res}
function twoArraysContainSameValue(arr1,arr2){return arr2.some(function(v){return arr1.indexOf(v)>=0})}
Date.prototype.format=function(e){var t="";var n=Date.replaceChars;for(var r=0;r<e.length;r++){var i=e.charAt(r);if(r-1>=0&&e.charAt(r-1)=="\\"){t+=i}else if(n[i]){t+=n[i].call(this)}else if(i!="\\"){t+=i}}return t};Date.replaceChars={shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],longMonths:["January","February","March","April","May","June","July","August","September","October","November","December"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],longDays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],d:function(){return(this.getDate()<10?"0":"")+this.getDate()},D:function(){return Date.replaceChars.shortDays[this.getDay()]},j:function(){return this.getDate()},l:function(){return Date.replaceChars.longDays[this.getDay()]},N:function(){return this.getDay()+1},S:function(){return this.getDate()%10==1&&this.getDate()!=11?"st":this.getDate()%10==2&&this.getDate()!=12?"nd":this.getDate()%10==3&&this.getDate()!=13?"rd":"th"},w:function(){return this.getDay()},z:function(){var e=new Date(this.getFullYear(),0,1);return Math.ceil((this-e)/864e5)},W:function(){var e=new Date(this.getFullYear(),0,1);return Math.ceil(((this-e)/864e5+e.getDay()+1)/7)},F:function(){return Date.replaceChars.longMonths[this.getMonth()]},m:function(){return(this.getMonth()<9?"0":"")+(this.getMonth()+1)},M:function(){return Date.replaceChars.shortMonths[this.getMonth()]},n:function(){return this.getMonth()+1},t:function(){var e=new Date;return(new Date(e.getFullYear(),e.getMonth(),0)).getDate()},L:function(){var e=this.getFullYear();return e%400==0||e%100!=0&&e%4==0},o:function(){var e=new Date(this.valueOf());e.setDate(e.getDate()-(this.getDay()+6)%7+3);return e.getFullYear()},Y:function(){return this.getFullYear()},y:function(){return(""+this.getFullYear()).substr(2)},a:function(){return this.getHours()<12?"am":"pm"},A:function(){return this.getHours()<12?"AM":"PM"},B:function(){return Math.floor(((this.getUTCHours()+1)%24+this.getUTCMinutes()/60+this.getUTCSeconds()/3600)*1e3/24)},g:function(){return this.getHours()%12||12},G:function(){return this.getHours()},h:function(){return((this.getHours()%12||12)<10?"0":"")+(this.getHours()%12||12)},H:function(){return(this.getHours()<10?"0":"")+this.getHours()},i:function(){return(this.getMinutes()<10?"0":"")+this.getMinutes()},s:function(){return(this.getSeconds()<10?"0":"")+this.getSeconds()},u:function(){var e=this.getMilliseconds();return(e<10?"00":e<100?"0":"")+e},e:function(){return"Not Yet Supported"},I:function(){var e=null;for(var t=0;t<12;++t){var n=new Date(this.getFullYear(),t,1);var r=n.getTimezoneOffset();if(e===null)e=r;else if(r<e){e=r;break}else if(r>e)break}return this.getTimezoneOffset()==e|0},O:function(){return(-this.getTimezoneOffset()<0?"-":"+")+(Math.abs(this.getTimezoneOffset()/60)<10?"0":"")+Math.abs(this.getTimezoneOffset()/60)+"00"},P:function(){return(-this.getTimezoneOffset()<0?"-":"+")+(Math.abs(this.getTimezoneOffset()/60)<10?"0":"")+Math.abs(this.getTimezoneOffset()/60)+":00"},T:function(){var e=this.getMonth();this.setMonth(0);var t=this.toTimeString().replace(/^.+ \(?([^\)]+)\)?$/,"$1");this.setMonth(e);return t},Z:function(){return-this.getTimezoneOffset()*60},c:function(){return this.format("Y-m-d\\TH:i:sP")},r:function(){return this.toString()},U:function(){return this.getTime()/1e3}};var GMP_DATA={"siteUrl":"https:\/\/vigrand.mk.ua\/","imgPath":"https:\/\/vigrand.mk.ua\/wp-content\/plugins\/google-maps-easy\/img\/","cssPath":"https:\/\/vigrand.mk.ua\/wp-content\/plugins\/google-maps-easy\/css\/","modPath":"https:\/\/vigrand.mk.ua\/wp-content\/plugins\/google-maps-easy\/modules\/","loader":"https:\/\/vigrand.mk.ua\/wp-content\/plugins\/google-maps-easy\/img\/loading.gif","close":"https:\/\/vigrand.mk.ua\/wp-content\/plugins\/google-maps-easy\/img\/cross.gif","ajaxurl":"https:\/\/vigrand.mk.ua\/wp-admin\/admin-ajax.php","GMP_CODE":"gmp","isAdmin":"","gmapApiUrl":"https:\/\/maps.googleapis.com\/maps\/api\/js?key=AIzaSyC499-Rk0gQB_e0bt2DOFpbDm0A6QHD6v4"};if(typeof(GMP_DATA)=='undefined')
var GMP_DATA={};if(isNumber(GMP_DATA.animationSpeed))
GMP_DATA.animationSpeed=parseInt(GMP_DATA.animationSpeed);else if(jQuery.inArray(GMP_DATA.animationSpeed,['fast','slow'])==-1)
GMP_DATA.animationSpeed='fast';GMP_DATA.showSubscreenOnCenter=parseInt(GMP_DATA.showSubscreenOnCenter);var sdLoaderImgGmp='<img src="'+GMP_DATA.loader+'" />';var g_gmpAnimationSpeed=300;jQuery.fn.showLoaderGmp=function(){return jQuery(this).html(sdLoaderImgGmp)};jQuery.fn.appendLoaderGmp=function(){jQuery(this).append(sdLoaderImgGmp)};jQuery.sendFormGmp=function(params){return jQuery('<br />').sendFormGmp(params)};jQuery.fn.sendFormGmp=function(params){var form=null;if(!params)
params={fid:!1,msgElID:!1,onSuccess:!1};if(params.fid)
form=jQuery('#'+fid);else form=jQuery(this);var sentFromForm=(jQuery(form).tagName()=='FORM');var data=new Array();if(params.data)
data=params.data;else if(sentFromForm)
data=jQuery(form).serialize();if(params.appendData){var dataIsString=typeof(data)=='string';var addStrData=[];for(var i in params.appendData){if(dataIsString){if(toeInArray(typeof(params.appendData[i],['object','array']))){for(var j in params.appendData[i]){addStrData.push(i+'['+j+']'+'='+params.appendData[i][j])}}else{addStrData.push(i+'='+params.appendData[i])}}else data[i]=params.appendData[i]}
if(dataIsString)
data+='&'+addStrData.join('&')}
var msgEl=null;if(params.msgElID){if(params.msgElID=='noMessages')
msgEl=!1;else if(typeof(params.msgElID)=='object')
msgEl=params.msgElID;else msgEl=jQuery('#'+params.msgElID)}
if(typeof(params.inputsWraper)=='string'){form=jQuery('#'+params.inputsWraper);sentFromForm=!0}
if(sentFromForm&&form){jQuery(form).find('*').removeClass('gmpInputError')}
if(msgEl&&!params.btn){jQuery(msgEl).removeClass('gmpSuccessMsg').removeClass('gmpErrorMsg').showLoaderGmp()}
if(params.btn){jQuery(params.btn).attr('disabled','disabled');params.btnIconElement=jQuery(params.btn).find('.fa').size()?jQuery(params.btn).find('.fa'):jQuery(params.btn);if(jQuery(params.btn).find('.fa').size()){params.btnIconElement.data('prev-class',params.btnIconElement.attr('class')).attr('class','fa fa-spinner fa-spin')}}
var url='';if(typeof(params.url)!='undefined')
url=params.url;else if(typeof(ajaxurl)=='undefined')
url=GMP_DATA.ajaxurl;else url=ajaxurl;jQuery('.gmpErrorForField').hide(GMP_DATA.animationSpeed);var dataType=params.dataType?params.dataType:'json';if(typeof(data)=='string'){data+='&pl='+GMP_DATA.GMP_CODE;data+='&reqType=ajax'}else{data.pl=GMP_DATA.GMP_CODE;data.reqType='ajax'}
jQuery.ajax({url:url,data:data,type:'POST',dataType:dataType,success:function(res){toeProcessAjaxResponseGmp(res,msgEl,form,sentFromForm,params);if(params.clearMsg){setTimeout(function(){if(msgEl)
jQuery(msgEl).animateClear()},typeof(params.clearMsg)=='boolean'?5000:params.clearMsg)}}})};jQuery.fn.animateClear=function(){var newContent=jQuery('<span>'+jQuery(this).html()+'</span>');jQuery(this).html(newContent);jQuery(newContent).hide(GMP_DATA.animationSpeed,function(){jQuery(newContent).remove()})};jQuery.fn.animateRemoveGmp=function(animationSpeed,onSuccess){animationSpeed=animationSpeed==undefined?GMP_DATA.animationSpeed:animationSpeed;jQuery(this).hide(animationSpeed,function(){jQuery(this).remove();if(typeof(onSuccess)==='function')
onSuccess()})};function toeProcessAjaxResponseGmp(res,msgEl,form,sentFromForm,params){if(typeof(params)=='undefined')
params={};if(typeof(msgEl)=='string')
msgEl=jQuery('#'+msgEl);if(msgEl)
jQuery(msgEl).html('');if(params.btn){jQuery(params.btn).removeAttr('disabled');if(params.btnIconElement){params.btnIconElement.attr('class',params.btnIconElement.data('prev-class'))}}
if(typeof(res)=='object'){if(res.error){if(msgEl){jQuery(msgEl).removeClass('gmpSuccessMsg').addClass('gmpErrorMsg')}
var errorsArr=[];for(var name in res.errors){if(sentFromForm){var inputError=jQuery(form).find('[name*="'+name+'"]');inputError.addClass('gmpInputError');if(inputError.attr('placeholder')){}
if(!inputError.data('keyup-error-remove-binded')){inputError.keydown(function(){jQuery(this).removeClass('gmpInputError')}).data('keyup-error-remove-binded',1)}}
if(jQuery('.gmpErrorForField.toe_'+nameToClassId(name)+'').exists())
jQuery('.gmpErrorForField.toe_'+nameToClassId(name)+'').show().html(res.errors[name]);else if(msgEl)
jQuery(msgEl).append(res.errors[name]).append('<br />');else errorsArr.push(res.errors[name])}
if(errorsArr.length&&params.btn){jQuery('<div />').html(errorsArr.join('<br />')).appendTo('body').dialog({modal:!0,width:'500px'})}}else if(res.messages.length){if(msgEl){jQuery(msgEl).removeClass('gmpErrorMsg').addClass('gmpSuccessMsg');for(var i=0;i<res.messages.length;i++){jQuery(msgEl).append(res.messages[i]).append('<br />')}}}}
if(params.onSuccess&&typeof(params.onSuccess)=='function'){params.onSuccess(res)}}
function getDialogElementGmp(){return jQuery('<div/>').appendTo(jQuery('body'))}
function toeOptionGmp(key){if(GMP_DATA.options&&GMP_DATA.options[key]&&GMP_DATA.options[key].value)
return GMP_DATA.options[key].value;return!1}
function toeLangGmp(key){if(GMP_DATA.siteLang&&GMP_DATA.siteLang[key])
return GMP_DATA.siteLang[key];return key}
function toePagesGmp(key){if(typeof(GMP_DATA)!='undefined'&&GMP_DATA[key])
return GMP_DATA[key];return!1}
function toeOptTimeoutHideDescriptionGmp(){jQuery('#gmpOptDescription').removeAttr('toeFixTip');setTimeout(function(){if(!jQuery('#gmpOptDescription').attr('toeFixTip'))
toeOptHideDescriptionGmp()},500)}
function toeOptShowDescriptionGmp(description,x,y,moveToLeft){if(typeof(description)!='undefined'&&description!=''){if(!jQuery('#gmpOptDescription').size()){jQuery('body').append('<div id="gmpOptDescription"></div>')}
if(moveToLeft)
jQuery('#gmpOptDescription').css('right',jQuery(window).width()-(x-10));else jQuery('#gmpOptDescription').css('left',x+10);jQuery('#gmpOptDescription').css('top',y);jQuery('#gmpOptDescription').show(200);jQuery('#gmpOptDescription').html(description)}}
function toeOptHideDescriptionGmp(){jQuery('#gmpOptDescription').removeAttr('toeFixTip');jQuery('#gmpOptDescription').hide(200)}
function toeInArrayGmp(needle,haystack){if(haystack){for(var i in haystack){if(haystack[i]==needle)
return!0}}
return!1}
function toeShowDialogCustomized(element,options){options=jQuery.extend({resizable:!1,width:500,height:300,closeOnEscape:!0,open:function(event,ui){jQuery('.ui-dialog-titlebar').css({'background-color':'#222222','background-image':'none','border':'none','margin':'0','padding':'0','border-radius':'0','color':'#CFCFCF','height':'27px'});jQuery('.ui-dialog-titlebar-close').css({'background':'url("'+GMP_DATA.cssPath+'img/tb-close.png") no-repeat scroll 0 0 transparent','border':'0','width':'15px','height':'15px','padding':'0','border-radius':'0','margin':'7px 7px 0'}).html('');jQuery('.ui-dialog').css({'border-radius':'3px','background-color':'#FFFFFF','background-image':'none','padding':'1px','z-index':'300000','position':'fixed','top':'60px'});jQuery('.ui-dialog-buttonpane').css({'background-color':'#FFFFFF'});jQuery('.ui-dialog-title').css({'color':'#CFCFCF','font':'12px sans-serif','padding':'6px 10px 0'});if(options.openCallback&&typeof(options.openCallback)=='function'){options.openCallback(event,ui)}
jQuery('.ui-widget-overlay').css({'z-index':jQuery(event.target).parents('.ui-dialog:first').css('z-index')-1,'background-image':'none'});if(options.modal&&options.closeOnBg){jQuery('.ui-widget-overlay').unbind('click').bind('click',function(){jQuery(element).dialog('close')})}}},options);return jQuery(element).dialog(options)}
function toeSliderMove(event,ui){var id=jQuery(event.target).attr('id');if(ui.value==1){jQuery('#toeSliderDisplay_'+id).html(ui.value+" meter")}else{jQuery('#toeSliderDisplay_'+id).html(ui.value+" meters")}
jQuery('#toeSliderInput_'+id).val(ui.value).change()}
function setBrowserUrl(url){if(typeof(history.pushState)!='undefined'){var obj={Title:document.title,Url:url};history.pushState(obj,obj.Title,obj.Url)}}
function createAjaxLinkGmp(param){return GMP_DATA.ajaxurl+'?'+paramGmp(param)}
function paramGmp(param){var param=jQuery.extend({},param);param.pl=GMP_DATA.GMP_CODE;return jQuery.param(param)}
function gmpGetTxtEditorVal(id){var elem=jQuery('#'+id),content=typeof(tinyMCE)!=='undefined'&&tinyMCE.get(id)&&!elem.is(':visible')?tinyMCE.get(id).getContent():elem.val();return content}
function gmpSetTxtEditorVal(id,content){var elem=jQuery('#'+id);if(typeof(tinyMCE)!=='undefined'&&tinyMCE&&tinyMCE.get(id)&&!elem.is(':visible')){tinyMCE.get(id).setContent(content)}else{elem.val(content)}};var g_gmpLibJsLoaded=!1;function gmpLoadGoogleLib(){if(!g_gmpLibJsLoaded){jQuery('head').append('<script src="'+GMP_DATA.gmapApiUrl+'"></script>');g_gmpLibJsLoaded=!0}}
function gmpGoogleMap(elementId,params,additionalData){if(typeof(google)==='undefined'){gmpLoadGoogleLib()}
params=params?params:{};additionalData=additionalData?additionalData:{};var defaults={center:new google.maps.LatLng(40.69847032728747,-73.9514422416687),zoom:8};if(params.map_center&&params.map_center.coord_x&&params.map_center.coord_y){params.center=new google.maps.LatLng(params.map_center.coord_x,params.map_center.coord_y)}
if(params.zoom){params.zoom=parseInt(params.zoom)}
if(!GMP_DATA.isAdmin&&params.zoom_type=='zoom_level'&&params.zoom_mobile&&jQuery(document).width()<768){params.zoom=parseInt(params.zoom_mobile)}
if(typeof(elementId)==='string'){elementId=jQuery(elementId)[0]}
this._elementId=elementId;this._mapParams=jQuery.extend({},defaults,params);this._mapObj=null;this._markers=[];this._shapes=[];this._heatmap=[];this._clasterer=null;this._clastererEnabled=!1;this._clastererMarkersGroupsStyles=[];this._eventListeners={};this._layers={};this.mapMarkersGroups=additionalData.markerGroups?additionalData.markerGroups:[];this.init()}
gmpGoogleMap.prototype.init=function(){this._beforeInit();this._mapObj=new google.maps.Map(this._elementId,this._mapParams);this._afterInit()};gmpGoogleMap.prototype._beforeInit=function(){if(typeof(this._mapParams.type_control)!=='undefined'){if(typeof(google.maps.MapTypeControlStyle[this._mapParams.type_control])!=='undefined'){this._mapParams.mapTypeControlOptions={style:google.maps.MapTypeControlStyle[this._mapParams.type_control]};this._mapParams.mapTypeControl=!0}else{this._mapParams.mapTypeControl=!1}}
if(typeof(this._mapParams.zoom_control)!=='undefined'){if(typeof(google.maps.ZoomControlStyle[this._mapParams.zoom_control])!=='undefined'){this._mapParams.zoomControlOptions={style:google.maps.ZoomControlStyle[this._mapParams.zoom_control]};this._mapParams.zoomControl=!0}else{this._mapParams.zoomControl=!1}}
if(typeof(this._mapParams.street_view_control)!=='undefined'){this._mapParams.streetViewControl=parseInt(this._mapParams.street_view_control)?!0:!1}
if(typeof(this._mapParams.pan_control)!=='undefined'){this._mapParams.panControl=parseInt(this._mapParams.pan_control)?!0:!1}
if(typeof(this._mapParams.overview_control)!=='undefined'){if(this._mapParams.overview_control!=='none'){this._mapParams.overviewMapControlOptions={opened:this._mapParams.overview_control==='opened'?!0:!1};this._mapParams.overviewMapControl=!0}else{this._mapParams.overviewMapControl=!1}}
if(typeof(this._mapParams.dbl_click_zoom)!=='undefined'){this._mapParams.disableDoubleClickZoom=parseInt(this._mapParams.dbl_click_zoom)?!1:!0}
if(typeof(this._mapParams.mouse_wheel_zoom)!=='undefined'){this._mapParams.scrollwheel=parseInt(this._mapParams.mouse_wheel_zoom)?!0:!1}
if(typeof(this._mapParams.map_type)!=='undefined'&&typeof(google.maps.MapTypeId[this._mapParams.map_type])!=='undefined'){this._mapParams.mapTypeId=google.maps.MapTypeId[this._mapParams.map_type]}
if(typeof(this._mapParams.map_stylization_data)!=='undefined'&&this._mapParams.map_stylization_data){this._mapParams.styles=this._mapParams.map_stylization_data}
jQuery(document).trigger('gmapBeforeMapInit',this)};gmpGoogleMap.prototype.getParams=function(){return this._mapParams};gmpGoogleMap.prototype.getParam=function(key){return this._mapParams[key]};gmpGoogleMap.prototype.setParam=function(key,value){this._mapParams[key]=value;return this};gmpGoogleMap.prototype._afterInit=function(){if(typeof(this._mapParams.marker_clasterer)!=='undefined'&&this._mapParams.marker_clasterer){this.enableClasterization(this._mapParams.marker_clasterer)}
this.applyZoomType();if(typeof(this._mapParams.zoom_min)!=='undefined'&&typeof(this._mapParams.zoom_max)!=='undefined'){this._setMinZoomLevel();this._setMaxZoomLevel();this._fixZoomLevel()}
this.resizeMapByHeight();jQuery(window).bind('resize',jQuery.proxy(this.resizeMapByHeight,this));jQuery(window).bind('orientationchange',jQuery.proxy(this.resizeMapByHeight,this));jQuery(document).trigger('gmapAfterMapInit',this)};gmpGoogleMap.prototype._setMinZoomLevel=function(){var curZoom=this.getZoom();var minZoom=parseInt(this._mapParams.zoom_min)?parseInt(this._mapParams.zoom_min):null;this.getRawMapInstance().setOptions({minZoom:minZoom});if(curZoom<minZoom)
this.getRawMapInstance().setOptions({zoom:minZoom})};gmpGoogleMap.prototype._setMaxZoomLevel=function(){var maxZoom=parseInt(this._mapParams.zoom_max)?parseInt(this._mapParams.zoom_max):null;this.getRawMapInstance().setOptions({maxZoom:maxZoom});if(this.getRawMapInstance().zoom>maxZoom)
this.getRawMapInstance().setOptions({zoom:maxZoom})};gmpGoogleMap.prototype._fixZoomLevel=function(){var eventHandle=this._getEventListenerHandle('zoom_changed','zoomChanged');if(!eventHandle){eventHandle=google.maps.event.addListener(this.getRawMapInstance(),'zoom_changed',jQuery.proxy(function(){var minZoom=parseInt(this.getParam('zoom_min')),maxZoom=parseInt(this.getParam('zoom_max'));if(this.getZoom()<minZoom){this.setZoom(minZoom);if(GMP_DATA.isAdmin&&this._getEventListenerHandle('idle','enableClasterization'))
google.maps.event.trigger(this.getRawMapInstance(),'idle')}
if(this.getZoom()>maxZoom){this.setZoom(maxZoom);if(GMP_DATA.isAdmin&&this._getEventListenerHandle('idle','enableClasterization'))
google.maps.event.trigger(this.getRawMapInstance(),'idle')}},this));this._addEventListenerHandle('zoom_changed','zoomChanged',eventHandle)}};gmpGoogleMap.prototype.enableClasterization=function(clasterType,needTrigger){needTrigger=needTrigger?needTrigger:!1;switch(clasterType){case 'MarkerClusterer':var self=this;self.setClastererMarkersGroupsStyles();var eventHandle=google.maps.event.addListenerOnce(self.getRawMapInstance(),'idle',function(a,b,c){var clasterGridSize=self.getParam('marker_clasterer_grid_size'),markerGroupsStyles=self.getClastererMarkersGroupsStyles();var allMapMarkers=self.getAllRawMarkers(),allVisibleMapMarkers=[],clasterer=self.getClasterer();for(var i=0;i<allMapMarkers.length;i++){if(allMapMarkers[i].getVisible()&&!parseInt(allMapMarkers[i].params.clasterer_exclude)){allVisibleMapMarkers.push(allMapMarkers[i])}}
if(clasterer){clasterer.clearMarkers();clasterer.addMarkers(allVisibleMapMarkers);clasterer.setStyles(markerGroupsStyles);self.setClastererGridSize(clasterGridSize);clasterer.resetViewport();clasterer.redraw()}else{clasterer=new MarkerClusterer(self.getRawMapInstance(),allVisibleMapMarkers,{styles:markerGroupsStyles});clasterer.setCalculator(self.customClastererCalculatorFunction(markerGroupsStyles));self.setClasterer(clasterer);self.setClastererGridSize(clasterGridSize);clasterer=self.getClasterer()}});this._addEventListenerHandle('idle','enableClasterization',eventHandle);if(GMP_DATA.isAdmin||needTrigger){google.maps.event.trigger(self.getRawMapInstance(),'idle')}
this._clastererEnabled=!0;break}};gmpGoogleMap.prototype.disableClasterization=function(){var eventHandle=this._getEventListenerHandle('idle','enableClasterization');if(eventHandle){var clasterer=this.getClasterer();if(clasterer){clasterer.clearMarkers();var markers=this.getAllRawMarkers();for(var i=0;i<markers.length;i++){markers[i].setMap(this.getRawMapInstance())}}
google.maps.event.removeListener(eventHandle);google.maps.event.trigger(this.getRawMapInstance(),'idle');this._clastererEnabled=!1}};gmpGoogleMap.prototype.customClastererCalculatorFunction=function(markerGroupsStyles){return function(markers,numStyles){var styleIndex=1,markersGroupsStyles=markerGroupsStyles,markersGroupsIds={},maxCount=0,groupId=0,curStyle=[];for(var i=0;i<markers.length;i++){if(markers[i].marker_group_id){if(typeof(markersGroupsIds[markers[i].marker_group_id])=='undefined'){markersGroupsIds[markers[i].marker_group_id]=1}else{markersGroupsIds[markers[i].marker_group_id]++}}}
for(var currGroupId in markersGroupsIds){if(markersGroupsIds[currGroupId]>maxCount){maxCount=markersGroupsIds[currGroupId];groupId=currGroupId}}
curStyle=jQuery.grep(markersGroupsStyles,function(e,i){if(e.marker_group_id==groupId){return e}});if(curStyle&&curStyle[0])
styleIndex=markersGroupsStyles.indexOf(curStyle[0])+1;return{text:markers.length,index:styleIndex}}};gmpGoogleMap.prototype.getClasterer=function(){if(this._clasterer){return this._clasterer}
return!1};gmpGoogleMap.prototype.setClasterer=function(clasterer){this._clasterer=clasterer};gmpGoogleMap.prototype.setMapMarkersGroups=function(groups){this.mapMarkersGroups=groups};gmpGoogleMap.prototype.getMapMarkersGroups=function(){return this.mapMarkersGroups};gmpGoogleMap.prototype.setClastererMarkersGroupsStyles=function(){var mapMarkersGroups=this.getMapMarkersGroups(),markersGroupsStyles=this.getClastererMarkersGroupsStyles(),defClasterIcon=GMP_DATA.modPath+'gmap/img/m1.png',oldDefClasterIcon='https://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclusterer/images/m1.png',clasterIcon=this.getParam('marker_clasterer_icon'),iconWidth=this.getParam('marker_clasterer_icon_width'),iconHeight=this.getParam('marker_clasterer_icon_height');clasterIcon=clasterIcon&&clasterIcon!=oldDefClasterIcon?clasterIcon:defClasterIcon;iconWidth=iconWidth?iconWidth:53;iconHeight=iconHeight?iconHeight:52;markersGroupsStyles.push({marker_group_id:0,url:clasterIcon,width:iconWidth,height:iconHeight});if(mapMarkersGroups){for(var i=0;i<mapMarkersGroups.length;i++){var markerGroupId=mapMarkersGroups[i].id,markerGroupClasterIcon=mapMarkersGroups[i].params.claster_icon,markerGroupClasterIconWidth=mapMarkersGroups[i].params.claster_icon_width,markerGroupClasterIconHeight=mapMarkersGroups[i].params.claster_icon_height;if(markerGroupClasterIcon&&markerGroupClasterIcon!=clasterIcon){markersGroupsStyles.push({marker_group_id:markerGroupId,url:markerGroupClasterIcon?markerGroupClasterIcon:defClasterIcon,width:markerGroupClasterIconWidth?markerGroupClasterIconWidth:53,height:markerGroupClasterIconHeight?markerGroupClasterIconHeight:52})}}}};gmpGoogleMap.prototype.getClastererMarkersGroupsStyles=function(){return this._clastererMarkersGroupsStyles};gmpGoogleMap.prototype.setClastererGridSize=function(size){var clasterer=this.getClasterer();size=size&&parseInt(size)?parseInt(size):null;if(clasterer&&size){clasterer.setGridSize(size)}};gmpGoogleMap.prototype.getClastererGridSize=function(){var clasterer=this.getClasterer(),clusterGridSize=null;if(clasterer){clusterGridSize=clasterer.getGridSize()}
return clusterGridSize};gmpGoogleMap.prototype.markersRefresh=function(){var clasterer=this.getClasterer();if(this._clastererEnabled&&clasterer){clasterer.clearMarkers();clasterer.addMarkers(this.getAllRawMarkers())}
jQuery(document).trigger('gmapAfterMarkersRefresh',this)};gmpGoogleMap.prototype._addEventListenerHandle=function(event,code,handle){if(!this._eventListeners[event])
this._eventListeners[event]={};this._eventListeners[event][code]=handle};gmpGoogleMap.prototype._getEventListenerHandle=function(event,code){return this._eventListeners[event]&&this._eventListeners[event][code]?this._eventListeners[event][code]:!1};gmpGoogleMap.prototype.getRawMapInstance=function(){return this._mapObj};gmpGoogleMap.prototype.setCenter=function(lat,lng){if(typeof lng=='undefined'){this.getRawMapInstance().setCenter(lat)}else this.getRawMapInstance().setCenter(new google.maps.LatLng(lat,lng));return this};gmpGoogleMap.prototype.getCenter=function(){return this.getRawMapInstance().getCenter()};gmpGoogleMap.prototype.setZoom=function(zoomLevel){this.getRawMapInstance().setZoom(parseInt(zoomLevel))};gmpGoogleMap.prototype.getZoom=function(){return this.getRawMapInstance().getZoom()};gmpGoogleMap.prototype.getBounds=function(){return this.getRawMapInstance().getBounds()};gmpGoogleMap.prototype.fitBounds=function(bounds){this.getRawMapInstance().fitBounds(bounds)};gmpGoogleMap.prototype.addMarker=function(params){var newMarker=new gmpGoogleMarker(this,params);this._markers.push(newMarker);return newMarker};gmpGoogleMap.prototype.addShape=function(params){var newShape=new gmpGoogleShape(this,params);this._shapes.push(newShape);return newShape};gmpGoogleMap.prototype.addHeatmap=function(params){var heatmap=new gmpGoogleHeatmap(this,params);this._heatmap.push(heatmap);return heatmap};gmpGoogleMap.prototype.getMarkerById=function(id){if(this._markers&&this._markers.length){for(var i in this._markers){if(this._markers[i].getId&&this._markers[i].getId()==id)
return this._markers[i]}}
return!1};gmpGoogleMap.prototype.getShapeById=function(id){if(this._shapes&&this._shapes.length){for(var i in this._shapes){if(this._shapes[i].getId()==id)
return this._shapes[i]}}
return!1};gmpGoogleMap.prototype.getHeatmap=function(){if(this._heatmap&&this._heatmap.length){return this._heatmap[0]}
return!1};gmpGoogleMap.prototype.removeMarker=function(id){var marker=this.getMarkerById(id);if(marker){marker.removeFromMap()}};gmpGoogleMap.prototype.removeShape=function(id){var shape=this.getShapeById(id);if(shape){shape.removeFromMap()}};gmpGoogleMap.prototype.getAllMarkers=function(){return this._markers};gmpGoogleMap.prototype.getAllShapes=function(){return this._shapes};gmpGoogleMap.prototype.getAllRawMarkers=function(){var res=[];if(this._markers&&this._markers.length){for(var i=0;i<this._markers.length;i++){res.push(this._markers[i].getRawMarkerInstance())}}
return res};gmpGoogleMap.prototype.setMarkersParams=function(markers){if(this._markers&&this._markers.length){for(var i=0;i<this._markers.length;i++){for(var j=0;j<markers.length;j++){if(this._markers[i].getId()==markers[j].id){this._markers[i].setMarkerParams(markers[j]);break}}}}};gmpGoogleMap.prototype.get=function(key){return this.getRawMapInstance().get(key)};gmpGoogleMap.prototype.set=function(key,value){this.getRawMapInstance().set(key,value);return this};gmpGoogleMap.prototype.clearMarkers=function(){if(this._markers&&this._markers.length){for(var i=0;i<this._markers.length;i++){this._markers[i].setMap(null)}
this._markers=[]}};gmpGoogleMap.prototype.clearMarkersByParam=function(param){if(this._markers&&this._markers.length){for(var i=0;i<this._markers.length;i++){if(this._markers[i].getMarkerParam(param)){this._markers[i].setMap(null);this._markers.splice(i,1);this.clearMarkersByParam(param);break}}}};gmpGoogleMap.prototype.clearShapes=function(){if(this._shapes&&this._shapes.length){for(var i=0;i<this._shapes.length;i++){this._shapes[i].setMap(null)}
this._shapes=[]}};gmpGoogleMap.prototype.getViewId=function(){return this._mapParams.view_id};gmpGoogleMap.prototype.getViewHtmlId=function(){return this._mapParams.view_html_id};gmpGoogleMap.prototype.getId=function(){return this._mapParams.id};gmpGoogleMap.prototype.refresh=function(){return google.maps.event.trigger(this.getRawMapInstance(),'resize')};gmpGoogleMap.prototype.refreshWithCenter=(function(lat,lng,zoom){var res=google.maps.event.trigger(this.getRawMapInstance(),'resize');if(zoom){this.setZoom(zoom)}else{this.setZoom(this.getZoom())}
if(lat&&lng){this.setCenter(lat,lng)}else{this.setCenter(this.getCenter().lat(),this.getCenter().lng())}
return res});gmpGoogleMap.prototype.fullRefresh=function(){this.refresh();this.checkMarkersParams(this._markers,!1);this.setCenter(this._mapParams.center)};gmpGoogleMap.prototype.checkMarkersParams=function(markers,needToShow){if(markers&&markers.length){for(var i=0;i<markers.length;i++){var markerParams=markers[i].getMarkerParam('params'),showDescription=parseInt(markerParams.show_description);if(showDescription||needToShow){markers[i].showInfoWnd(!0,showDescription)}}}};gmpGoogleMap.prototype.resizeMapByHeight=function(e,elem){if(!GMP_DATA.isAdmin&&parseInt(this.getParam('adapt_map_to_screen_height'))&&this.getRawMapInstance().map_display_mode!='popup'){var viewId=this.getParam('view_id'),selectors=this.getParam('selectors'),windowObj=jQuery(window),windowHeight=windowObj.height(),mapContainer=jQuery('#gmpMapDetailsContainer_'+viewId),height;if(!selectors||(!selectors.content_before&&!selectors.content_after)){var mapContainerOffset=mapContainer.length?mapContainer.offset():!1;height=mapContainerOffset.top<windowHeight?windowHeight-mapContainerOffset.top:windowHeight}else{var contentBefore=jQuery('#wpadminbar, '+selectors.content_before),contentAfter=jQuery(selectors.content_after),contentBeforeHeight=0,contentAfterHeight=0,proControlsCon=jQuery('#gmpMapProControlsCon_'+viewId),i;if(contentBefore.length){for(i=0;i<contentBefore.length;i++){contentBeforeHeight+=jQuery(contentBefore[i]).outerHeight(!0)}}
if(contentAfter.length){for(i=0;i<contentAfter.length;i++){contentAfterHeight+=jQuery(contentAfter[i]).outerHeight(!0)}}
height=windowHeight-contentBeforeHeight-contentAfterHeight;mapContainer.parents('.gmp_map_opts:first').css({'position':'fixed','top':contentBeforeHeight,'left':'0','width':windowObj.width(),'height':height,'z-index':1});if(proControlsCon.find('.gmpMarkersListCollapseShell').length){mapContainer.parents('.gmp_map_opts:first').css({'overflow-x':'hidden','overflow-y':'auto'})}
jQuery(selectors.content_before).css({'z-index':2});jQuery(selectors.content_after).css({'position':'fixed','bottom':'0','left':'0','width':windowObj.width(),'z-index':1});if(elem&&elem.length){height-=elem.outerHeight(!0)}}
jQuery('#gmpMapDetailsContainer_'+viewId+', #'+this.getParam('view_html_id')).each(function(){jQuery(this).height(height)});this.refresh()}};gmpGoogleMap.prototype.applyZoomType=function(){if(!GMP_DATA.isAdmin&&this.getParam('zoom_type')=='fit_bounds'){var eventHandle=google.maps.event.addListenerOnce(this.getRawMapInstance(),'tilesloaded',jQuery.proxy(this._getBoundsHandler,this));this._addEventListenerHandle('tilesloaded','fitBounds',eventHandle)}};gmpGoogleMap.prototype.applyZoomTypeAdmin=function(){if(GMP_DATA.isAdmin&&this.getParam('zoom_type')=='fit_bounds'){this._getBoundsHandler()}};gmpGoogleMap.prototype._getBoundsHandler=function(){var bounds=new google.maps.LatLngBounds();bounds=this._getMapMarkersBounds(bounds);this._setMapBounds(bounds)};gmpGoogleMap.prototype._getMapMarkersBounds=function(bounds){var markers=this.getAllMarkers();for(var i=0;i<markers.length;i++){bounds.extend(markers[i].getPosition())}
return bounds};gmpGoogleMap.prototype._setMapBounds=function(bounds){if(!bounds.getNorthEast().equals(bounds.getSouthWest())){this.fitBounds(bounds)}};var g_gmpGeocoder=null;jQuery.fn.mapSearchAutocompleateGmp=function(params){params=params||{};jQuery(this).keyup(function(event){if(toeInArrayGmp(event.keyCode,[9,13,20,35,36,37,38,39,40]))return;var searchData=jQuery.trim(jQuery(this).val());if(searchData&&searchData!=''){if(typeof(params.msgEl)==='string'){params.msgEl=jQuery(params.msgEl)}
params.msgEl.showLoaderGmp();var self=this;jQuery(this).autocomplete(jQuery.extend({},params.autocompleteParams,{source:function(request,response){var autocomleateData=typeof(params.additionalData)!='undefined'?gmpAutocomleateData(params.additionalData,request.term):[],geocoder=gmpGetGeocoder(),geocoderData={'address':searchData};if(typeof(params.geocoderParams)!='undefined'&&params.geocoderParams){geocoderData=jQuery.extend({},geocoderData,params.geocoderParams)}
geocoder.geocode(geocoderData,function(results,status){params.msgEl.html('');if(status==google.maps.GeocoderStatus.OK&&results.length){for(var i=0;i<results.length;i++){autocomleateData.push({label:results[i].formatted_address,lat:results[i].geometry.location.lat(),lng:results[i].geometry.location.lng(),category:toeLangGmp('Plases')})}
response(autocomleateData)}else{if(autocomleateData){response(autocomleateData)}else{var notFoundMsg=toeLangGmp('Nothing was found');if(jQuery(self).parent().find('.ui-helper-hidden-accessible').size()){jQuery(self).parent().find('.ui-helper-hidden-accessible').html(notFoundMsg)}else{params.msgEl.html(notFoundMsg)}}}})},select:function(event,ui){if(params.onSelect){params.onSelect(ui.item,event,ui)}}}));jQuery(this).autocomplete('search')}})};function gmpAutocomleateData(data,needle){var autocomleateData=[];for(var i=0;i<data.length;i++){for(var j=0;j<data[i].length;j++){if(data[i][j]){var label=data[i][j].label.toString().toLowerCase(),desc=data[i][j].marker_desc!='undefined'?data[i][j].marker_desc:'',term=needle.toLowerCase();if(label.indexOf(term)!==-1||(desc&&desc.indexOf(term)!==-1)){autocomleateData.push(data[i][j])}}}}
return autocomleateData}
function gmpGetGeocoder(){if(!g_gmpGeocoder){g_gmpGeocoder=new google.maps.Geocoder()}
return g_gmpGeocoder}
function changeInfoWndType(map){var infowndContent=jQuery('#'+map._elementId.id).find('.gm-style-iw'),type=map.getParam('marker_infownd_type'),hideInfoWndBtn=parseInt(map.getParam('marker_infownd_hide_close_btn'));switch(type){case '':if(infowndContent&&infowndContent.length){infowndContent.each(function(){var $this=jQuery(this),wndBody=$this.prev().children().last(),wndBodyShadow=$this.prev().children(':nth-child(2)'),wndTail=$this.prev().children(':nth-child(3)'),wndTailShadow=$this.prev().children().first();$this.css({'border-radius':'0px'})})}
break;case 'rounded_edges':if(infowndContent&&infowndContent.length){infowndContent.each(function(){var $this=jQuery(this),wndBody=$this.prev().children().last(),wndBodyShadow=$this.prev().children(':nth-child(2)'),wndTail=$this.prev().children(':nth-child(3)'),wndTailShadow=$this.prev().children().first();if(hideInfoWndBtn!==0){$this.find(".gm-ui-hover-effect").hide()}
$this.find('.gmpInfoWindowtitle').css({'padding':'0','left':'0'});wndBody.css({'border-radius':'10px'});wndBodyShadow.css({'background-color':'transparent','-moz-box-shadow':'none','-webkit-box-shadow':'none','box-shadow':'none'});wndTail.children().each(function(index){var $this=jQuery(this),degrees=!index?'skewX(50.6deg)':'skewX(-50.6deg)',left=!index?'-2px':'0';$this.css({'height':'15px'});$this.children().css({'width':'20px','left':left,'transform':degrees,'-moz-box-shadow':'none','-webkit-box-shadow':'none','box-shadow':'none'})});wndTailShadow.css({'border-right':'none','border-left':'none','border-top':'none','left':'38px','top':'74px'})})}
break;default:break}}
function changeInfoWndBgColor(map){g_gmpMarkerBgColorTimeoutSet=!1;var color=map.getParam('marker_infownd_bg_color');var infowndContent=jQuery('#'+map._elementId.id).find('.gm-style-iw');if(infowndContent&&infowndContent.length){infowndContent.each(function(){var wndBody=jQuery(this).prev().children().last(),wndTail=jQuery(this).prev().children(':nth-child(3)').children().last();infowndContent.css('background-color',color);infowndContent.prev().children().last().css('background-color',color);infowndContent.children().css('background-color',color);jQuery("<style>.gm-style-iw-t::after { border-top: 11px solid "+color+" !important; }</style>").appendTo("head");jQuery("<style>.gm-style .gm-style-iw-d::-webkit-scrollbar-track, .gm-style .gm-style-iw-d::-webkit-scrollbar-track-piece { background: "+color+" !important; }</style>").appendTo("head")})}}
window.gmpGoogleMap=gmpGoogleMap;function gmpGoogleMarker(map,params){this._map=map;this._markerObj=null;var defaults={};if(!params.position&&params.coord_x&&params.coord_y){params.position=new google.maps.LatLng(params.coord_x,params.coord_y)}
this._markerParams=jQuery.extend({},defaults,params);this._markerParams.map=this._map.getRawMapInstance();this._infoWindow=null;this._infoWndOpened=!1;this._infoWndWasInited=!1;this._infoWndDirectionsBtn=!1;this._infoWndPrintBtn=!1;this._mapDragScroll={scrollwheel:null};this.init()}
gmpGoogleMarker.prototype.infoWndOpened=function(){return this._infoWndOpened};gmpGoogleMarker.prototype.init=function(){var markerParamsForCreate=this._markerParams,openInfoWndEvent='click',closeInfoWndEvent='',openLinkEvent='click';if(parseInt(this._map._mapParams.hide_marker_tooltip)){this._markerParams.marker_title=this._markerParams.title;delete markerParamsForCreate.title}
this._markerObj=new google.maps.Marker(markerParamsForCreate);if(this._markerParams.dragend){this._markerObj.addListener('dragend',jQuery.proxy(this._markerParams.dragend,this))}
if(this._markerParams.click){this._markerObj.addListener('click',jQuery.proxy(this._markerParams.click,this))}
this._markerObj.addListener('domready',jQuery.proxy(function(){changeInfoWndBgColor(this._map)},this));if(this._markerParams.params&&!(window.ontouchstart===null||navigator.msMaxTouchPoints)){if(parseInt(this._markerParams.params.description_mouse_hover)){openInfoWndEvent='mouseover';if(parseInt(this._markerParams.params.description_mouse_leave)){closeInfoWndEvent='mouseout'}}}
this._markerObj.addListener(openInfoWndEvent,jQuery.proxy(function(){if(this._markerParams.params&&!parseInt(this._markerParams.params.description_mouse_hover)&&parseInt(this._markerParams.params.marker_link)){return}else{this.showInfoWnd()}
jQuery(document).trigger('gmapAfterMarkerClick',this)},this));if(closeInfoWndEvent){this._markerObj.addListener(closeInfoWndEvent,jQuery.proxy(function(){var self=this,infoWndDiv=jQuery('.gm-style-iw').parent(),timeout=300;infoWndDiv.on('mouseover',function(){infoWndDiv.addClass('hovering')});infoWndDiv.on('mouseleave',function(){setTimeout(function(){self.hideInfoWnd()},timeout)});setTimeout(function(){if(!infoWndDiv.hasClass('hovering')){self.hideInfoWnd()}},timeout)},this))}
if(this._markerParams.params&&parseInt(this._markerParams.params.marker_link)){this._markerObj.addListener(openLinkEvent,jQuery.proxy(function(){var isLink=/http/gi,markerLink=!this._markerParams.params.marker_link_src.match(isLink)?'http://'+this._markerParams.params.marker_link_src:this._markerParams.params.marker_link_src;if(parseInt(this._markerParams.params.marker_link_new_wnd)){window.open(markerLink,'_blank')}else{location.href=markerLink}},this))}};gmpGoogleMarker.prototype.showInfoWnd=function(forceUpdateInfoWnd,forceShow){var allShapes=this._map.getAllShapes();if(allShapes&&allShapes.length){for(var i=0;i<allShapes.length;i++){if(allShapes[i]._infoWndOpened)allShapes[i].hideInfoWnd()}}
if(!this._infoWndWasInited||forceUpdateInfoWnd){this._updateInfoWndContent();this._infoWndWasInited=!0}
if(this._infoWindow&&!this._infoWndOpened){var allMapMArkers=this._map.getAllMarkers();if(allMapMArkers&&allMapMArkers.length>1&&!forceShow){for(var i=0;i<allMapMArkers.length;i++){allMapMArkers[i].hideInfoWnd()}}
if(parseInt(this.getMap().getParam('center_on_cur_marker_infownd'))&&!GMP_DATA.isAdmin){this.getMap().setCenter(this.getMarkerParam('position'))}
this._infoWindow.open(this._map.getRawMapInstance(),this._markerObj);this._infoWndOpened=!0}};gmpGoogleMarker.prototype.hideInfoWnd=function(){if(this._infoWindow&&this._infoWndOpened){this._infoWindow.close();this._infoWndOpened=!1;var googleMap=this._map.getRawMapInstance();googleMap.setOptions({scrollwheel:this._mapDragScroll.scrollwheel});jQuery(document).trigger('gmapAfterHideInfoWnd',this)}};gmpGoogleMarker.prototype.getRawMarkerInstance=function(){return this._markerObj};gmpGoogleMarker.prototype.getRawMarkerParams=function(){return this._markerParams};gmpGoogleMarker.prototype.getIcon=(function(){return this._markerObj.getIcon()});gmpGoogleMarker.prototype.setIcon=function(iconPath){this._markerObj.setIcon(iconPath)};gmpGoogleMarker.prototype.setTitle=function(title,noRefresh){if(!parseInt(this._map._mapParams.hide_marker_tooltip))
this._markerObj.setTitle(title);this._markerParams.title=title;if(!noRefresh)
this._updateInfoWndContent()};gmpGoogleMarker.prototype.getTitle=function(){return typeof this._markerParams.title!='undefined'?this._markerParams.title:this._markerParams.marker_title};gmpGoogleMarker.prototype.getPosition=function(){return this._markerObj.getPosition()};gmpGoogleMarker.prototype.setPosition=function(lat,lng){this._markerObj.setPosition(new google.maps.LatLng(lat,lng))};gmpGoogleMarker.prototype.lat=function(){return this.getPosition().lat()};gmpGoogleMarker.prototype.lng=function(lng){return this.getPosition().lng()};gmpGoogleMarker.prototype.setId=function(id){this._markerParams.id=id};gmpGoogleMarker.prototype.getId=function(){return this._markerParams.id};gmpGoogleMarker.prototype.setDescription=function(description,noRefresh){this._markerParams.description=description;if(!noRefresh)
this._updateInfoWndContent();if(this._markerParams.params&&parseInt(this._markerParams.params.show_description)){this.showInfoWnd(!1,!0)}};gmpGoogleMarker.prototype.getDescription=function(){return this._markerParams.description};gmpGoogleMarker.prototype._setTitleColor=function(titleDiv){var titleColor=this._map.getParam('marker_title_color');if(titleColor&&titleColor!=''){titleDiv.css({'color':titleColor})}
return titleDiv};gmpGoogleMarker.prototype._setTitleSize=function(titleDiv){var titleSize=this._map.getParam('marker_title_size'),titleSizeUnits=this._map.getParam('marker_title_size_units');if(titleSize&&titleSizeUnits&&titleSize!=''){titleDiv.css({'font-size':titleSize+titleSizeUnits,'line-height':(+titleSize+5)+titleSizeUnits})}
return titleDiv};gmpGoogleMarker.prototype._setDescSize=function(descDiv){var descSize=this._map.getParam('marker_desc_size'),descSizeUnits=this._map.getParam('marker_desc_size_units');if(descSize&&descSizeUnits&&descSize!=''){descDiv.css({'font-size':descSize+descSizeUnits,'line-height':parseInt(descSize)+5+descSizeUnits})}
return descDiv};gmpGoogleMarker.prototype._updateInfoWndContent=function(){var contentStr=jQuery('<div/>',{}),description=this._markerParams.description?this._markerParams.description.replace(/\n/g,'<br/>'):!1,title=this._markerParams.title?this._markerParams.title:!1;if(parseInt(this._map._mapParams.hide_marker_tooltip)&&!GMP_DATA.isAdmin){title=this._markerParams.marker_title?this._markerParams.marker_title:!1}
if(title){var titleDiv=jQuery('<div/>',{}).addClass('gmpInfoWindowtitle').html(title);titleDiv=this._setTitleColor(titleDiv);titleDiv=this._setTitleSize(titleDiv);contentStr.append(titleDiv);if(this._infoWndDirectionsBtn){this._infoWndDirectionsBtn.insertAfter(contentStr.find('.gmpInfoWindowtitle'))}
if(this._infoWndPrintBtn){this._infoWndPrintBtn.insertAfter(contentStr.find('.gmpInfoWindowtitle'))}}
if(description){var descDiv=jQuery('<div/>',{}).addClass('egm-marker-iw').html(description);descDiv=this._setDescSize(descDiv);contentStr.append(descDiv);var $scripts=contentStr.find('script');if($scripts&&$scripts.size()){$scripts.each(function(){var scriptSrc=jQuery(this).attr('src');if(scriptSrc&&scriptSrc!=''){jQuery.getScript(scriptSrc)}})}}
this._setInfoWndContent(contentStr)};gmpGoogleMarker.prototype._setInfoWndClosed=function(){this._infoWndOpened=!1;jQuery(document).trigger('gmapAfterHideInfoWnd',this)};gmpGoogleMarker.prototype._setInfoWndContent=function(newContentHtmlObj){var self=this,map=this.getMap();if(!this._infoWindow){var mapWidth=GMP_DATA.isAdmin?jQuery('#gmpMapPreview').width():jQuery('#'+map.getViewHtmlId()).width(),infoWndType=map.getParam('marker_infownd_type'),infoWndWidth=map.getParam('marker_infownd_width_units')=='px'?map.getParam('marker_infownd_width'):mapWidth-20,infoWndHeight=map.getParam('marker_infownd_height_units')=='px'?map.getParam('marker_infownd_height')+'px':!1,maxWndWidth=mapWidth*0.6,infoWndParams={maxWidth:infoWndWidth<maxWndWidth?infoWndWidth:maxWndWidth};switch(infoWndType){case 'rounded_edges':infoWndParams.pixelOffset=new google.maps.Size(0,10);break;default:break}
this._infoWindow=new google.maps.InfoWindow(infoWndParams);google.maps.event.addListener(this._infoWindow,'domready',function(){changeInfoWndType(map);changeInfoWndBgColor(map);if(this.content&&this.content.innerHTML&&this.content.innerHTML.indexOf&&this.content.innerHTML.indexOf('id="grid-gallery-')!=-1){jQuery(document).trigger('ggFirInitialize')}});google.maps.event.addListener(this._infoWindow,'closeclick',function(){self._setInfoWndClosed()})}
if(infoWndHeight){newContentHtmlObj.css('cssText','max-height: '+infoWndHeight+';')}
var scrollwheel=map.get('scrollwheel'),googleMap=map.getRawMapInstance();this._mapDragScroll.scrollwheel=scrollwheel;newContentHtmlObj.hover(function(){googleMap.setOptions({scrollwheel:!1})},function(){googleMap.setOptions({scrollwheel:scrollwheel})});this._infoWindow.setContent(newContentHtmlObj[0])};gmpGoogleMarker.prototype.removeFromMap=function(){this.getRawMarkerInstance().setMap(null)};gmpGoogleMarker.prototype.setMarkerParams=function(params){this._markerParams=params;return this};gmpGoogleMarker.prototype.setMarkerParam=function(key,value){this._markerParams[key]=value;return this};gmpGoogleMarker.prototype.getMarkerParam=function(key){return this._markerParams[key]};gmpGoogleMarker.prototype.setMap=function(map){this.getRawMarkerInstance().setMap(map)};gmpGoogleMarker.prototype.getMap=function(){return this._map};gmpGoogleMarker.prototype.setVisible=function(state){this.getRawMarkerInstance().setVisible(state)}
gmpGoogleMarker.prototype.getVisible=function(state){this.getRawMarkerInstance().getVisible(state)}
function _gmpPrepareMarkersList(markers,params){params=params||{};if(markers){for(var i=0;i<markers.length;i++){markers[i].coord_x=parseFloat(markers[i].coord_x);markers[i].coord_y=parseFloat(markers[i].coord_y);markers[i].icon=markers[i].icon_data.path;if(params.dragend){markers[i].draggable=!0;markers[i].dragend=params.dragend}}}
return markers}
window.gmpGoogleMarker=gmpGoogleMarker;var gmpAllMapsInfo=[{"id":"1","title":"\u041d\u0438\u043a\u043e\u043b\u0430\u0435\u0432","description":null,"params":{"width_units":"%","membershipEnable":"0","adapt_map_to_screen_height":"","type":null,"map_type":"ROADMAP","map_display_mode":"map","map_center":{"address":"\u043f\u0440\u043e\u0441\u043f\u0435\u043a\u0442 \u041c\u0438\u0440\u0430","coord_x":"46.922259996064525","coord_y":"32.00104407774893"},"language":null,"enable_zoom":null,"enable_mouse_zoom":null,"mouse_wheel_zoom":"1","zoom_type":"zoom_level","zoom":"11","zoom_mobile":"8","zoom_min":"1","zoom_max":"21","type_control":"HORIZONTAL_BAR","zoom_control":"DEFAULT","dbl_click_zoom":"1","street_view_control":"1","pan_control":null,"overview_control":null,"draggable":"1","map_stylization":"none","marker_title_color":"#A52A2A","marker_title_size":"19","marker_title_size_units":"px","marker_desc_size":"13","marker_desc_size_units":"px","hide_marker_tooltip":"","center_on_cur_marker_infownd":"","marker_infownd_type":"","marker_infownd_hide_close_btn":"1","marker_infownd_width":"200","marker_infownd_width_units":"auto","marker_infownd_height":"100","marker_infownd_height_units":"auto","marker_infownd_bg_color":"#FFFFFF","marker_clasterer":"none","marker_clasterer_icon":"http:\/\/vigrand-mk.upper-code.com\/wp-content\/plugins\/google-maps-easy\/modules\/\/gmap\/img\/m1.png","marker_clasterer_icon_width":"53","marker_clasterer_icon_height":"52","marker_clasterer_grid_size":"60","marker_filter_color":"#f1f1f1;","marker_filter_button_title":"Select all","markers_list_type":"","markers_list_color":"#55BA68","map_stylization_data":!1,"view_id":"1_81619","view_html_id":"google_map_easy_1_81619","id":"1","ss_html":"","html_options":{"width":"100","height":"400","width_units":"%","width_full":"100%","height_units":"px","height_full":"400px"}},"html_options":{"width":"100","height":"400"},"create_date":"2018-10-22 15:18:47","markers":[{"id":"1","title":"\u041c\u0430\u0433\u0430\u0437\u0438\u043d","description":"<p>\u043c. \u041c\u0438\u043a\u043e\u043b\u0430\u0457\u0432 \u0443\u043b.\u041e\u0437\u0435\u0440\u043d\u0430\u044f 13\u0432\/2 \r\n<a href=\"tel:+380512709997\">+38(0512) 709-997<\/a> \r\n<a href=\"tel:+380978447658\">+38(097) 844-76-58<\/a><\/p>","coord_x":"46.9509107","coord_y":"31.9403773","icon":"5","map_id":"1","marker_group_id":"0","address":"\u0443\u043b. \u041e\u0437\u0451\u0440\u043d\u0430\u044f, 13","animation":null,"create_date":"2018-10-22 15:15:43","params":{"marker_link_src":"","marker_list_def_img_url":"","title_is_link":!1},"sort_order":"1","user_id":null,"period_from":null,"period_to":null,"hash":null,"marker_group_ids":["0"],"icon_data":{"id":"5","title":"marker","description":"blue,pin","path":"https:\/\/vigrand.mk.ua\/wp-content\/plugins\/google-maps-easy\/modules\/icons\/icons_files\/def_icons\/blue.png"}},{"id":"2","title":"\u041c\u0430\u0433\u0430\u0437\u0438\u043d","description":"\u043c. \u041c\u0438\u043a\u043e\u043b\u0430\u0457\u0432\r\n<p>\u043f\u0440.\u0426\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u044b\u0439 112\r\n<a href=\"tel:+380931803236\">+38(093) 180-32-36<\/a>\r\n<a href=\"tel:+380512712759\">+38(0512) 712-759<\/a>\r\n<a href=\"tel:+380675170050\">+38(067) 517-00-50<\/a>","coord_x":"46.966117","coord_y":"32.0037566","icon":"5","map_id":"1","marker_group_id":"0","address":"\u043f\u0440.\u0426\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u044b\u0439 112","animation":null,"create_date":"2018-10-22 15:16:44","params":{"marker_link_src":"","marker_list_def_img_url":"","title_is_link":!1},"sort_order":"2","user_id":null,"period_from":null,"period_to":null,"hash":null,"marker_group_ids":["0"],"icon_data":{"id":"5","title":"marker","description":"blue,pin","path":"https:\/\/vigrand.mk.ua\/wp-content\/plugins\/google-maps-easy\/modules\/icons\/icons_files\/def_icons\/blue.png"}},{"id":"3","title":"\u041c\u0430\u0433\u0430\u0437\u0438\u043d","description":"\u043c. \u041c\u0438\u043a\u043e\u043b\u0430\u0457\u0432\r\n<p>\u043f\u0440.\u0411\u043e\u0433\u043e\u044f\u0432\u043b\u0435\u043d\u0441\u043a\u0438\u0439 299\r\n<a href=\"tel:+380512709997\">+38(0512) 709-997<\/a>\r\n<a href=\"tel:+380950516151\">+38(095) 051-61-51<\/a>\r\n<a href=\"tel:+380930059543\">+38(093) 005-95-43<\/a>","coord_x":"46.8640759","coord_y":"32.0136746","icon":"5","map_id":"1","marker_group_id":"0","address":"\u041d\u0438\u043a\u043e\u043b\u0430\u0435\u0432, \u043f\u0440.\u041e\u043a\u0442\u044f\u0431\u0440\u044c\u0441\u043a\u0438\u0439 299","animation":null,"create_date":"2018-10-22 15:18:27","params":{"marker_link_src":"","marker_list_def_img_url":"","title_is_link":!1},"sort_order":"3","user_id":null,"period_from":null,"period_to":null,"hash":null,"marker_group_ids":["0"],"icon_data":{"id":"5","title":"marker","description":"blue,pin","path":"https:\/\/vigrand.mk.ua\/wp-content\/plugins\/google-maps-easy\/modules\/icons\/icons_files\/def_icons\/blue.png"}},{"id":"7","title":"\u041c\u0430\u0433\u0430\u0437\u0438\u043d","description":"\u043c. \u041c\u0438\u043a\u043e\u043b\u0430\u0457\u0432\r\n<p>\u043f\u0440.\u0411\u043e\u0433\u043e\u044f\u0432\u043b\u0435\u043d\u0441\u043a\u0438\u0439 39\r\n<a href=\"tel:+380505154966\">+38(050) 515-49-66<\/a>\r\n<a href=\"tel:+380637850225\">+38(063) 785-02-25<\/a>\r\n","coord_x":"46.945132154453","coord_y":"32.035741133566","icon":"5","map_id":"1","marker_group_id":"0","address":"","animation":null,"create_date":"2018-12-07 16:18:43","params":{"marker_link_src":"","marker_list_def_img_url":"","title_is_link":!1},"sort_order":"4","user_id":null,"period_from":null,"period_to":null,"hash":null,"marker_group_ids":["0"],"icon_data":{"id":"5","title":"marker","description":"blue,pin","path":"https:\/\/vigrand.mk.ua\/wp-content\/plugins\/google-maps-easy\/modules\/icons\/icons_files\/def_icons\/blue.png"}}],"original_id":"1","view_id":"1_81619","view_html_id":"google_map_easy_1_81619","isDisplayed":!0}];var g_gmpAllMaps=[];function gmpGetMembershipGmeViewId(map,oldViewId){var newViewId=oldViewId;if(map&&map.getParam&&map.getParam('membershipEnable')=='1'){if(map._elementId&&map._elementId.id&&map._elementId.id.substr){var viewIdKey='google_map_easy_',newIdPos=map._elementId.id.substr(viewIdKey.length);if(newIdPos){newViewId=newIdPos}}}
return newViewId}
jQuery(document).ready(function(){var mapsInitClb=function(){if(typeof(gmpAllMapsInfo)!=='undefined'&&gmpAllMapsInfo&&gmpAllMapsInfo.length){for(var i=0;i<gmpAllMapsInfo.length;i++){if(jQuery('#'+gmpAllMapsInfo[i].view_html_id).length){gmpInitMapOnPage(gmpAllMapsInfo[i])}}
jQuery(document).trigger('gmpAmiVarInited')}};if(typeof(google)==='undefined'&&typeof(gmpLoadGoogleLib)!=='undefined'){gmpLoadGoogleLib();setTimeout(mapsInitClb,1000)}else{mapsInitClb()}});function gmpInitMapOnPage(mapData){if(mapData.params&&parseInt(mapData.params.is_static)&&typeof(gmpGoogleStaticMap)!=='undefined'){new gmpGoogleStaticMap(mapData);return}
var additionalData={markerGroups:typeof(mapData.marker_groups)!='undefined'?mapData.marker_groups:[]},newMap=null,mapMarkersIds=[],markerIdToShow=gmpIsMarkerToShow(),infoWndToShow=gmpIsInfoWndToShow();if(mapData&&mapData.view_html_mbs_id){newMap=new gmpGoogleMap(mapData.view_html_mbs_id,mapData.params,additionalData);newMap.setParam('view_html_mbs_id',mapData.view_html_mbs_id);newMap.refreshWithCenter(mapData.params.center.lat(),mapData.params.center.lng(),mapData.params.zoom)}else{newMap=new gmpGoogleMap('#'+mapData.view_html_id,mapData.params,additionalData)}
if(mapData.mbs_presets==1){newMap.setParam('mbs_presets',1)}
if(mapData.markers&&mapData.markers.length){mapData.markers=_gmpPrepareMarkersList(mapData.markers);for(var i in mapData.markers){mapMarkersIds.push(mapData.markers[i].id)}
if(toeInArray(markerIdToShow,mapMarkersIds)==-1){markerIdToShow=!1}
if(toeInArray(infoWndToShow,mapMarkersIds)==-1){infoWndToShow=!1}
for(var j=0;j<mapData.markers.length;j++){if(markerIdToShow&&mapData.markers[j].id!=markerIdToShow)continue;if(infoWndToShow){mapData.markers[j].params.show_description=mapData.markers[j].id==infoWndToShow?'1':'0'}
var newMarker=newMap.addMarker(mapData.markers[j])}
newMap.markersRefresh();newMap.checkMarkersParams(newMap.getAllMarkers(),markerIdToShow)}
if(mapData.shapes&&mapData.shapes.length){mapData.shapes=_gmpPrepareShapesList(mapData.shapes);for(var z=0;z<mapData.shapes.length;z++){var newShape=newMap.addShape(mapData.shapes[z])}}
if(mapData.heatmap){mapData.heatmap=_gmpPrepareHeatmapList(mapData.heatmap);newMap.addHeatmap(mapData.heatmap)}
g_gmpAllMaps.push(newMap)}
function gmpGetMapInfoById(id){if(typeof(gmpAllMapsInfo)!=='undefined'&&gmpAllMapsInfo&&gmpAllMapsInfo.length){id=parseInt(id);for(var i=0;i<gmpAllMapsInfo.length;i++){if(gmpAllMapsInfo[i].id==id){return gmpAllMapsInfo[i]}}}
return!1}
function gmpGetMapInfoByViewId(viewId){if(typeof(gmpAllMapsInfo)!=='undefined'&&gmpAllMapsInfo&&gmpAllMapsInfo.length){for(var i=0;i<gmpAllMapsInfo.length;i++){if(gmpAllMapsInfo[i].view_id==viewId){return gmpAllMapsInfo[i]}}}
return!1}
function gmpGetAllMaps(){return g_gmpAllMaps}
function gmpGetMapById(id){var allMaps=gmpGetAllMaps();for(var i=0;i<allMaps.length;i++){if(allMaps[i].getId()==id){return allMaps[i]}}
return!1}
function gmpGetMapByViewId(viewId){var allMaps=gmpGetAllMaps();for(var i=0;i<allMaps.length;i++){var currViewId=allMaps[i].getViewId();if(window.gmpGetMembershipGmeViewId){currViewId=gmpGetMembershipGmeViewId(allMaps[i],currViewId)}
if(currViewId==viewId){return allMaps[i]}}
return!1}
function gmpIsMarkerToShow(){var markerHash='gmpMarker',hashParams=toeGetHashParams();if(hashParams){for(var i in hashParams){if(!hashParams[i]||typeof(hashParams[i])!=='string')continue;var pair=hashParams[i].split('=');if(pair[0]==markerHash)
return parseInt(pair[1])}}
return!1}
function gmpIsInfoWndToShow(){var markerHash='gmpInfoWnd',hashParams=toeGetHashParams();if(hashParams){for(var i in hashParams){if(!hashParams[i]||typeof(hashParams[i])!=='string')continue;var pair=hashParams[i].split('=');if(pair[0]==markerHash)
return parseInt(pair[1])}}
return!1};(function($){$.each(["addClass","removeClass"],function(i,methodname){var oldmethod=$.fn[methodname];$.fn[methodname]=function(){oldmethod.apply(this,arguments);this.trigger(methodname+"change");return this}})})(jQuery);function vc_custominfiniteloop_init(vc_cil_element_id){var vc_element='#'+vc_cil_element_id;window.maxItens=jQuery(vc_element).data('per-view');window.addedItens=0;jQuery(vc_element).find('.vc_carousel-slideline-inner').find('.vc_item').each(function(){if(window.addedItens<window.maxItens){if(window.addedItens==0){jQuery(this).clone().addClass('vc_custominfiniteloop_restart').removeClass('vc_active').appendTo(jQuery(this).parent())}else{jQuery(this).clone().removeClass('vc_active').appendTo(jQuery(this).parent())}
window.addedItens++}});jQuery('.vc_custominfiniteloop_restart').bind('addClasschange',null,function(){var vc_carousel=jQuery(this).parent().parent().parent().parent();jQuery(vc_carousel).data('vc.carousel').transition_speed=0;jQuery(vc_carousel).data('vc.carousel').to(0);setTimeout("vc_cil_restore_transition_speed('"+jQuery(vc_carousel).prop('id')+"')",500)})}
function vc_cil_restore_transition_speed(element_id){jQuery('#'+element_id).data('vc.carousel').transition_speed=600}
jQuery(document).ready(function(){if(jQuery(window).width()>768){jQuery('.vc_custominfiniteloop').find('div[data-ride="vc_carousel"]').each(function(){var vc_cil_element=jQuery(this).prop("id");setTimeout("vc_custominfiniteloop_init('"+vc_cil_element+"')",2000)})}
jQuery(document).on('click','.vc_right, .vc_left',function(){jQuery("a[data-rel^='prettyPhoto']").prettyPhoto()})});jQuery(document).ready(function(){jQuery(document).on('click','#pvh-okna .vc_right, #pvh-okna .vc_left',function(e){e.preventDefault();var hide_arrow=jQuery("#pvh-okna .vc_item:nth-child(4)").hasClass('vc_active');if(hide_arrow){jQuery("#pvh-okna .vc_right").hide()}
if(jQuery(this).hasClass('vc_left')){jQuery("#pvh-okna .vc_right").show()}})})