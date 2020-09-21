$(document).ready(function(){

    var menu_item = $(".aside-menu-item");
    var single_page = $(".single-page");

    var burger_menu = $(".burger-menu");
    var aside = $("aside");

    menu_item.click(function(){
        menu_item.removeClass("active");
        $(this).addClass("active");

        var link = $(this).attr('terget');

        aside.toggleClass("active");
        single_page.removeClass("d-block");
        single_page.addClass("d-none");

        $("." + link).removeClass("d-none");
        $("." + link).addClass("d-block");
    })

    // Burger menu
    burger_menu.click(function() {
        aside.toggleClass("active");
    })

    // Language change
    var langBtn = $(".aside-bottom_text h2");
    var htmlTag = $("html");
    var rtlStyle = $("#rtlStyle");
    var ltrStyle = $("#ltrStyle");
    // Language state
    var eng = false;
    langBtn.click(function(){
        eng = !eng;
        if(eng){
            $(this).text("English");
            htmlTag.attr("dir","rtl");

            ltrStyle.attr("media","none");
            rtlStyle.attr("media"," ");
        }else{
            $(this).text("اللغة العربية");
            htmlTag.attr("dir","ltr");

            ltrStyle.attr("media"," ");
            rtlStyle.attr("media","none");
        }
    })
    
})