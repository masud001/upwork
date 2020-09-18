$(document).ready(function(){

    var menu_item = $(".aside-menu-item");
    var single_page = $(".single-page");

    menu_item.click(function(){
        menu_item.removeClass("active");
        $(this).addClass("active");

        var link = $(this).attr('terget');

        single_page.removeClass("d-block");
        single_page.addClass("d-none");

        $("." + link).removeClass("d-none");
        $("." + link).addClass("d-block");
    })
    
})