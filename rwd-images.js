(function( win ){
    
    var doc = win.document,
        winWidth = win.screen.availWidth,
        breakPoint = ( 'rwd_breakPoint' in win ) ? win.rwd_breakPoint : 480,
        date = new Date();
        
	    date.setTime(date.getTime()+(1/*1 day*/*24*60*60*1000));
	    doc.cookie = "rwdimgsize="+ ( winWidth > breakPoint ? "large" : "small" ) +"; expires=" + date.toGMTString() +"; path=/";

})( this );
