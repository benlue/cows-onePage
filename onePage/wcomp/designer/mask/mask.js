ctrl.startup = function()  {
    var  thisBlk = ctrl.getJqTarget(),
         w = thisBlk.outerWidth(),
         h = thisBlk.outerHeight(),
         pos = thisBlk.position(),
         mask = genMask( w, h, pos );
     
    thisBlk.append(mask);
                    
    thisBlk.hover(function() {
        // hover in
        ctrl.sel('.mask').toggle();
    });
    //console.log('blkID: %s, w: %d, h: %d', ctrl.getBlockID(), w, h);
}


function  genMask(w, h, pos)  {
    var  h = '<div class="mask" style="display:none; width:' + w + 'px; height:' + h + 'px;">' + 
             '<button class="btn btn-primary">Edit</button>' +
             '</div>';
             
    return  $(h).css({top: pos.top, left: pos.left, position:'absolute'});
}