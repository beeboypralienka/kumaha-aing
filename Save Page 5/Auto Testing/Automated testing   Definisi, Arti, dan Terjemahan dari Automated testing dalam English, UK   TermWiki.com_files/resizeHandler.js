/* Floatbox v3.54.csoft */
Floatbox.prototype.cj=function(g){var f=fb;if(!(f&&f.fbBox&&f.G)){return}var c=f.getDisplaySize(),a=f.getScroll();function b(i){if(!i.G||i.aY!==i.G){return}var k=i.fbBox.offsetLeft-i.cornerRadius-a.left,l=f.T.width-i.fbBox.offsetWidth-2*i.cornerRadius-k,e=i.fbBox.offsetTop-i.cornerRadius-a.top,h=f.T.height-i.fbBox.offsetHeight-2*i.cornerRadius-e;if(i.bf===false){var j=i.fbBox.offsetWidth+2*i.cornerRadius,m=i.fbBox.offsetHeight+2*i.cornerRadius;i.bf=i.cR=0.5;if(k>=0&&l>=0&&j<=c.width&&j<=f.T.width&&!(k===i.f&&l===(i.shadowSize||i.f))){i.bf=k/(k+l)}if(e>=0&&h>=0&&m<=c.height&&m<=f.T.height&&!(e===i.f&&h===(i.shadowSize||i.f))){i.cR=e/(e+h)}}var o=c.width-f.T.width,n=c.height-f.T.height;if(k>=0&&l<0&&o>0){o=0}if(e>=0&&h<0&&n>0){n=0}if(o){i.fbBox.style.left=(i.bW.fbBox.left=Math.round(i.fbBox.offsetLeft+o*i.bf))+"px"}if(n){i.fbBox.style.top=(i.bW.fbBox.top=Math.round(i.fbBox.offsetTop+n*i.cR))+"px"}}b(fb);for(var d=0;d<f.children.length;d++){b(f.children[d])}f.T.width=c.width;f.T.height=c.height};if(fb.centerOnResize&&fb.fbBox&&!fb.ck){fb.addEvent(window,"resize",fb.cj);fb.ck=true};