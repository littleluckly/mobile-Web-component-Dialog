!function(t){var i=function(i){this.config={width:"auto",height:"auto",message:null,type:"waiting",buttons:null,delay:null,delayCallback:null,maskOpacity:null,maskClose:null,effect:!1},i&&t.isPlainObject(i)?t.extend(this.config,i):this.isConfig=!0,this.body=t("body"),this.mask=t('<div class="g-dialog-container">'),this.win=t('<div class="dialog-window">'),this.winHeader=t('<div class="dialog-header iconfont"></div>'),this.winContent=t('<div class="dialog-content">'),this.winFooter=t('<div class="dialog-footer">'),this.create()};i.zIndex=1e4,i.prototype={animate:function(){var t=this;this.win.css("-webkit-transform","scale(0,0"),window.setTimeout(function(){t.win.css("-webkit-transform","scale(1,1")},100)},create:function(){var t=this,n=this.config,a=this.mask,s=this.win,e=this.winHeader,o=this.winContent,c=this.winFooter,l=this.body;i.zIndex++,this.mask.css("zIndex",i.zIndex),this.isConfig?(s.append(e.addClass("icon-iconloading-copy")),n.effect&&this.animate(),a.append(s),l.append(a)):(e.addClass(n.type),s.append(e),n.message&&s.append(o.html(n.message)),n.buttons&&(this.createButtons(c,n.buttons),s.append(c)),a.append(s),l.append(a),"auto"!=n.width&&s.width(n.width),"auto"!=n.height&&s.height(n.height),n.maskOpacity&&a.css("backgroundColor","rgba(0,0,0,"+n.maskOpacity+")"),n.delay&&0!=n.delay&&window.setTimeout(function(){t.close(),n.delayCallback&&n.delayCallback()},n.delay),n.effect&&this.animate(),n.maskClose&&a.click(function(){t.close()}))},createButtons:function(i,n){var a=this;t(n).each(function(n){var s=this.type?" class='"+this.type+"'":"",e=this.text?this.text:"按钮"+ ++n,o=this.callback?this.callback:null,c=t("<button"+s+">"+e+"</button>");o?c.click(function(t){var i=o();t.stopPropagation(),0!=i&&a.close()}):c.click(function(t){t.stopPropagation(),a.close()}),i.append(c)})},close:function(){this.mask.remove()}},window.Dialog=i,t.dialog=function(t){return new i(t)}}(Zepto);