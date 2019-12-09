$(document).ready(function() {
    $(".design-hidden").click(function() {
        $(".design-showing").toggle();
        $(".design-hidden").toggle();    
    });
    $(".design-showing").click(function() {
        $(".design-showing").toggle();
        $(".design-hidden").toggle();    
    })
    $(".dev-hidden").click(function() {
        $(".dev-showing").toggle();
        $(".dev-hidden").toggle();    
    });
    $(".dev-showing").click(function() {
        $(".dev-showing").toggle();
        $(".dev-hidden").toggle();    
    })
    $(".prod-hidden").click(function() {
        $(".prod-showing").toggle();
        $(".prod-hidden").toggle();    
    });
    $(".prod-showing").click(function() {
        $(".prod-showing").toggle();
        $(".prod-hidden").toggle();    
    });
// hover

    $('#folio1').hover(function() {
        $('.overlay0',this).slideToggle("down");
    });

    $('#folio2').hover(function() {
        $('.overlay1').slideToggle();
    });

    $('#folio3').hover(function() {
        $('.overlay2').slideToggle();
    });

    $('#folio4').hover(function() {
        $('.overlay3').slideToggle();
    });

    $('#folio5').hover(function() {
        $('.overlay4').slideToggle();
    });

    $('#folio6').hover(function() {
        $('.overlay5').slideToggle();
    });

    $('#folio7').hover(function() {
        $('.overlay6').slideToggle();
    });

    $('#folio8').hover(function() {
        $('.overlay7').slideToggle();
    });



});