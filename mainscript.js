//Header Menu Dropdown
// Number of Clicks
let dropdnclick = 0

/* Click to show dropdown menu for projects (for mobile)*/
$(".dropdown").click(function(){
    dropdnclick +=1
    if(dropdnclick % 2 === 0) {
        $(".dropdown-item").addClass("visible");
    } else {
        $(".dropdown-item").removeClass("visible");
    }
});
