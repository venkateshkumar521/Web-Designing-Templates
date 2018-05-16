  function hexToRgb(h) {
    var i = parseInt(h, 16);
    return "rgb("+((i >> 16) & 255) + "," +
           ((i >> 8) & 255) + "," + 
           (i & 255) + ")";
  };

$(document).ready(function () {
    $('li').each(function () {
        $(this).html('<input type="text" style="background: #' + $(this).attr('swatch') + ';" />' );
    });
  
  $('ul').dblclick(function(e){
    var elem = e.target;
    if ($(elem).is('input')) {
      
       $(elem).val(hexToRgb($(elem).parent().attr('swatch')));
            elem.focus();
            elem.select();
            setTimeout(function () { resetElem(elem) }, 4000);     
      
    }
  });
  
    $('ul').click(function (e) {
        var elem = e.target;
        if ($(elem).is('input')) {
            $(elem).val($(elem).parent().attr('swatch'));
            elem.focus();
            elem.select();
            setTimeout(function () { resetElem(elem) }, 4000);            
        }
    });
});

//functions
function resetElem(elem) {
    $(elem).val('');
    elem.blur();
}

