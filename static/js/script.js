"use strict";window.onload=function(){document.getElementById("currentYear").innerText=(new Date).getFullYear();var t=document.querySelectorAll("a"),e=!0,n=!1,a=void 0;try{for(var r,o=t[Symbol.iterator]();!(e=(r=o.next()).done);e=!0)r.value.addEventListener("click",function(){var t=this.href,e=t.match(/^https?:\/\/www.amazon.co.jp/),n=t.match("/otaman0517-22/");e&&n&&ga("send","event","amazon","click",t)})}catch(t){n=!0,a=t}finally{try{!e&&o.return&&o.return()}finally{if(n)throw a}}};