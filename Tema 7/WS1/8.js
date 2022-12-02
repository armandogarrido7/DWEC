$(document).ready(function() {
    $('div h2').each(function(i, elem) {
        size = i + 1 + "rem";
        $(elem).css({ "font-size": size });
        $(elem).click(function() {
            // if ($(elem).siblings().closest('p').hasClass('show')) {
            //     $(elem).siblings().closest('p').removeAttr('class');
            //     $(elem).siblings().closest('p').css({ "visibility": "hidden" });
            // } else {
            //     $(elem).siblings().closest('p').addClass('show');
            //     console.log('AAAAAAAAAA');
            //     $(elem).siblings().closest('p').css({ "visibility": "visible" });
            // }
            $(this).siblings().toggle('slow');
        })
    });
    $('div p').each(function(i, elem) {
        $(elem).hover(function() {
            $(elem).css({ "background-color": "blue" });
        });
        $(elem).mouseout(function() {
            $(elem).css({ "background-color": "lime" });
        });
    });

});