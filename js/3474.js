(globalThis.webpackChunksakurairo_scripts=globalThis.webpackChunksakurairo_scripts||[]).push([[3474],{3474:()=>{!function(){if("undefined"!=typeof Prism&&"undefined"!=typeof document){var e=/(?:^|\s)command-line(?:\s|$)/,t="command-line-prompt",n="".startsWith?function(e,t){return e.startsWith(t)}:function(e,t){return 0===e.indexOf(t)},a="".endsWith?function(e,t){return e.endsWith(t)}:function(e,t){var n=e.length;return e.substring(n-t.length,n)===t};Prism.hooks.add("before-highlight",(function(s){var i=r(s);if(!i.complete&&s.code){var o=s.element.parentElement;if(o&&/pre/i.test(o.nodeName)&&(e.test(o.className)||e.test(s.element.className))){var l=s.element.querySelector("."+t);l&&l.remove();var u=s.code.split("\n"),c=i.continuationLineIndicies=new Set,m=o.getAttribute("data-continuation-str");if(m&&u.length>1)for(var p=1;p<u.length;p++)u.hasOwnProperty(p-1)&&a(u[p-1],m)&&c.add(p);i.numberOfLines=u.length;var d=i.outputLines=[],h=o.getAttribute("data-output"),f=o.getAttribute("data-filter-output");if(null!==h)h.split(",").forEach((function(e){var t=e.split("-"),n=parseInt(t[0],10),a=2===t.length?parseInt(t[1],10):n;if(!isNaN(n)&&!isNaN(a)){n<1&&(n=1),a>u.length&&(a=u.length),a--;for(var r=--n;r<=a;r++)d[r]=u[r],u[r]=""}}));else if(f)for(var v=0;v<u.length;v++)n(u[v],f)&&(d[v]=u[v].slice(f.length),u[v]="");s.code=u.join("\n")}else i.complete=!0}else i.complete=!0})),Prism.hooks.add("before-insert",(function(e){var t=r(e);if(!t.complete){for(var n=e.highlightedCode.split("\n"),a=t.outputLines||[],s=0,i=n.length;s<i;s++)a.hasOwnProperty(s)?n[s]='<span class="token output">'+Prism.util.encode(a[s])+"</span>":n[s]='<span class="token command">'+n[s]+"</span>";e.highlightedCode=n.join("\n")}})),Prism.hooks.add("complete",(function(n){if(function(e){return"command-line"in(e.vars=e.vars||{})}(n)){var a=r(n);if(!a.complete){var s=n.element.parentElement;e.test(n.element.className)&&(n.element.className=n.element.className.replace(e," ")),e.test(s.className)||(s.className+=" command-line");var i,o="",l=a.numberOfLines||0,u=b("data-prompt","");if(""!==u)i='<span data-prompt="'+u+'"></span>';else i='<span data-user="'+b("data-user","user")+'" data-host="'+b("data-host","localhost")+'"></span>';for(var c=a.continuationLineIndicies||new Set,m='<span data-continuation-prompt="'+b("data-continuation-prompt",">")+'"></span>',p=0;p<l;p++)c.has(p)?o+=m:o+=i;var d=document.createElement("span");d.className=t,d.innerHTML=o;for(var h=a.outputLines||[],f=0,v=h.length;f<v;f++)if(h.hasOwnProperty(f)){var g=d.children[f];g.removeAttribute("data-user"),g.removeAttribute("data-host"),g.removeAttribute("data-prompt")}n.element.insertBefore(d,n.element.firstChild),a.complete=!0}}function b(e,t){return(s.getAttribute(e)||t).replace(/"/g,"&quot")}}))}function r(e){var t=e.vars=e.vars||{};return t["command-line"]=t["command-line"]||{}}}()}}]);
//# sourceMappingURL=3474.js.map