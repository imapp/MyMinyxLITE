(function(f){f.facebox=function(m,l){f.facebox.loading();if(m.ajax){g(m.ajax,l)}else{if(m.image){c(m.image,l)}else{if(m.div){j(m.div,l)}else{if(f.isFunction(m)){m.call(f)}else{f.facebox.reveal(m,l)}}}}};f.extend(f.facebox,{settings:{opacity:0.2,overlay:true,loadingImage:"/facebox/loading.gif",closeImage:"/facebox/closelabel.png",imageTypes:["png","jpg","jpeg","gif"],faceboxHtml:'    <div id="facebox" style="display:none;">       <div class="popup">         <div class="content">         </div>         <a href="#" class="close"></a>       </div>     </div>'},loading:function(){k();if(f("#facebox .loading").length==1){return true}e();f("#facebox .content").empty().append('<div class="loading"><img src="'+f.facebox.settings.loadingImage+'"/></div>');f("#facebox").show().css({top:h()[1]+(i()/10),left:f(window).width()/2-(f("#facebox .popup").outerWidth()/2)});f(document).bind("keydown.facebox",function(l){if(l.keyCode==27){f.facebox.close()}return true});f(document).trigger("loading.facebox")},reveal:function(m,l){f(document).trigger("beforeReveal.facebox");if(l){f("#facebox .content").addClass(l)}f("#facebox .content").empty().append(m);f("#facebox .popup").children().fadeIn("normal");f("#facebox").css("left",f(window).width()/2-(f("#facebox .popup").outerWidth()/2));f(document).trigger("reveal.facebox").trigger("afterReveal.facebox")},close:function(){f(document).trigger("close.facebox");return false}});f.fn.facebox=function(l){if(f(this).length==0){return}k(l);function m(){f.facebox.loading(true);var n=this.rel.match(/facebox\[?\.(\w+)\]?/);if(n){n=n[1]}j(this.href,n);return false}return this.bind("click.facebox",m)};function k(n){if(f.facebox.settings.inited){return true}else{f.facebox.settings.inited=true}f(document).trigger("init.facebox");d();var l=f.facebox.settings.imageTypes.join("|");f.facebox.settings.imageTypesRegexp=new RegExp("\\.("+l+")(\\?.*)?$","i");if(n){f.extend(f.facebox.settings,n)}f("body").append(f.facebox.settings.faceboxHtml);var m=[new Image(),new Image()];m[0].src=f.facebox.settings.closeImage;m[1].src=f.facebox.settings.loadingImage;f("#facebox").find(".b:first, .bl").each(function(){m.push(new Image());m.slice(-1).src=f(this).css("background-image").replace(/url\((.+)\)/,"$1")});f("#facebox .close").click(f.facebox.close).append('<img src="'+f.facebox.settings.closeImage+'" class="close_image" title="close">')}function h(){var m,l;if(self.pageYOffset){l=self.pageYOffset;m=self.pageXOffset}else{if(document.documentElement&&document.documentElement.scrollTop){l=document.documentElement.scrollTop;m=document.documentElement.scrollLeft}else{if(document.body){l=document.body.scrollTop;m=document.body.scrollLeft}}}return new Array(m,l)}function i(){var l;if(self.innerHeight){l=self.innerHeight}else{if(document.documentElement&&document.documentElement.clientHeight){l=document.documentElement.clientHeight}else{if(document.body){l=document.body.clientHeight}}}return l}function d(){var l=f.facebox.settings;l.loadingImage=l.loading_image||l.loadingImage;l.closeImage=l.close_image||l.closeImage;l.imageTypes=l.image_types||l.imageTypes;l.faceboxHtml=l.facebox_html||l.faceboxHtml}function j(m,l){if(m.match(/#/)){var n=window.location.href.split("#")[0];var o=m.replace(n,"");if(o=="#"){return}f.facebox.reveal(f(o).html(),l)}else{if(m.match(f.facebox.settings.imageTypesRegexp)){c(m,l)}else{g(m,l)}}}function c(m,l){var n=new Image();n.onload=function(){f.facebox.reveal('<div class="image"><img src="'+n.src+'" /></div>',l)};n.src=m}function g(m,l){f.get(m,function(n){f.facebox.reveal(n,l)})}function b(){return f.facebox.settings.overlay==false||f.facebox.settings.opacity===null}function e(){if(b()){return}if(f("#facebox_overlay").length==0){f("body").append('<div id="facebox_overlay" class="facebox_hide"></div>')}f("#facebox_overlay").hide().addClass("facebox_overlayBG").css("opacity",f.facebox.settings.opacity).click(function(){f(document).trigger("close.facebox")}).fadeIn(200);return false}function a(){if(b()){return}f("#facebox_overlay").fadeOut(200,function(){f("#facebox_overlay").removeClass("facebox_overlayBG");f("#facebox_overlay").addClass("facebox_hide");f("#facebox_overlay").remove()});return false}f(document).bind("close.facebox",function(){f(document).unbind("keydown.facebox");f("#facebox").fadeOut(function(){f("#facebox .content").removeClass().addClass("content");f("#facebox .loading").remove();f(document).trigger("afterClose.facebox")});a()})})(jQuery);