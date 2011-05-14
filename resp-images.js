(function( win ){
    
    var doc = win.document,
        date = new Date(),
        winWidth = win.screen.availWidth,
        breakPoint = ( 'resp_breakPoint' in win ) ? win.resp_breakPoint : 480;
        
    date.setTime(date.getTime()+(1/*1 day*/*24*60*60*1000));
    doc.cookie = "rwd-resolution=" + winWidth + "; expires=" + date.toGMTString() +"; path=/";
    doc.cookie = "rwd-breakpoint=" + breakPoint + "; expires=" + date.toGMTString() +"; path=/";
    
})( this );
