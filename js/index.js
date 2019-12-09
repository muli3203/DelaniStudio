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
    })
})