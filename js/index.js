$(document).ready(function() {
    $(".design-hidden").click(function() {
        $(".design-showing").toggle();
        $(".design-hidden").toggle();    
    });
    $(".design-showing").click(function() {
        $(".design-showing").toggle();
        $(".design-hidden").toggle();    
    })
})