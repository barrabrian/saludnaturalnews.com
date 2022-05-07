$(document).ready(function(){if(jQuery(window).width()>480){$('.hero').parallax({imageSrc:'img/bg1.jpg',naturalWidth:600,naturalHeight:400});}
var scrollEventHandler=function()
{window.scroll(0,window.pageYOffset)}
window.addEventListener("scroll",scrollEventHandler,false);
