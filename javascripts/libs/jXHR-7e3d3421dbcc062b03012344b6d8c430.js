(function(c){var b=c.setTimeout,d=c.document,a=0;c.jXHR=function(){var e,g,n,h,m=null;function l(){try{h.parentNode.removeChild(h)}catch(o){}}function k(){g=false;e="";l();h=null;i(0)}function f(p){try{m.onerror.call(m,p,e)}catch(o){throw new Error(p)}}function j(){if((this.readyState&&this.readyState!=="complete"&&this.readyState!=="loaded")||g){return}this.onload=this.onreadystatechange=null;g=true;if(m.readyState!==4){f("Script failed to load ["+e+"].")}l()}function i(o,p){p=p||[];m.readyState=o;if(typeof m.onreadystatechange==="function"){m.onreadystatechange.apply(m,p)}}m={onerror:null,onreadystatechange:null,readyState:0,open:function(p,o){k();internal_callback="cb"+(a++);(function(q){c.jXHR[q]=function(){try{i.call(m,4,arguments)}catch(r){m.readyState=-1;f("Script failed to run ["+e+"].")}c.jXHR[q]=null}})(internal_callback);e=o.replace(/=\?/,"=jXHR."+internal_callback);i(1)},send:function(){b(function(){h=d.createElement("script");h.setAttribute("type","text/javascript");h.onload=h.onreadystatechange=function(){j.call(h)};h.setAttribute("src",e);d.getElementsByTagName("head")[0].appendChild(h)},0);i(2)},setRequestHeader:function(){},getResponseHeader:function(){return""},getAllResponseHeaders:function(){return[]}};k();return m}})(window);