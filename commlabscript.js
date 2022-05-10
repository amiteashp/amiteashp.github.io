// Header Menu Dropdown
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

// Playing previews on hover
// 30MFF
// Play 30MFF video on Mouse Hover
$("#30mffvid").mouseenter(function(){
    $("#30mffvid").get(0).play()
});

// Pause 30MFF video on Mouse Leave and bring to start 
$("#30mffvid").mouseleave(function(){
    $('#30mffvid').get(0).pause();
    $('#30mffvid').get(0).currentTime = 0;
});

//COMIX
// Play COMIX video on Mouse Hover
$("#comixvid").mouseenter(function(){
    $("#comixvid").get(0).play()
});

// Pause COMIX video on Mouse Leave and bring to start 
$("#comixvid").mouseleave(function(){
    $('#comixvid').get(0).pause();
    $('#comixvid').get(0).currentTime = 0;
});

//SOUNDS LIKE
// Play Sound Project video on Mouse Hover
$("#soundvid").mouseenter(function(){
    $("#soundvid").get(0).play()
});

// Pause Sound Project video on Mouse Leave and bring to start 
$("#soundvid").mouseleave(function(){
    $('#soundvid').get(0).pause();
    $('#soundvid').get(0).currentTime = 0;
});

//VID-E-OH!!!
// Play Video Project video on Mouse Hover
$("#videoprojvid").mouseenter(function(){
    $("#videoprojvid").get(0).play()
});

// Pause 30MFF video on Mouse Leave and bring to start 
$("#videoprojvid").mouseleave(function(){
    $('#videoprojvid').get(0).pause();
    $('#videoprojvid').get(0).currentTime = 0;
});
