/*
 * imgLoader
 */
;(function (factory){
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define(factory);
	} else {

		// Browser globals
		imgLoader = factory();
	}

})(function(){
	var imgLoaderObj = function(imgs, cb){
		setTimeout(function(){
			var imgsLen = imgs.length;
			var count = 0;
			var i_img = 0;
			for(i_img; i_img < imgsLen; i_img++){
				(function (i_img){
					var imgItem = document.createElement("img");
					imgItem.setAttribute("style", "display:none;");
					imgItem.setAttribute("src", imgs[i_img]);
					var imgD = document.body.appendChild(imgItem);
					imgD.onload = function(){
						count += 1;
						cb && cb({
							"count": count,
							"length": imgsLen,
							"img": imgs[i_img]
						});
						imgD.parentNode.removeChild(imgD); 
					};
				})(i_img);
			}
		},1);
	};

	return imgLoaderObj;
});