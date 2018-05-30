var leftColumn = $("#left-column");
var fixedLeftColumn = $("#fixed-left-column");
var gap = $("#gap-between-columns");
var resumeNav = $("#sections-nav");

function mouseOver(){
    leftColumn.addClass("active");
    gap.addClass("active");
}

function mouseOut(){
    leftColumn.removeClass("active");
    gap.removeClass("active");
}

function onScroll(){
    if(window.scrollY > 10 && !resumeNav.hasClass("show-shadow")){
        resumeNav.addClass("show-shadow");
    }else if(window.scrollY < 10){
        resumeNav.removeClass("show-shadow");
    }
}

onScroll = debounce(onScroll, 100);

$(window).on("scroll", onScroll);

fixedLeftColumn.on("mouseover", mouseOver);
fixedLeftColumn.on("mouseout", mouseOut);

//

var resumeButton = $("li[data-slide='#resume']");
var workButton = $("li[data-slide='#work']");

var resumeSlide = $("#resume-slide");
var workSlide = $("#work-slide");

function changeSlide(toBeShown, toBeHidden, buttonToBeActive, buttonToBeUnactive){
    if(!toBeShown.hasClass("active-slide")){
        buttonToBeActive.addClass("active");
        buttonToBeUnactive.removeClass("active");
        toBeHidden.animate({opacity: 0}, 250,()=>{
            window.scrollTo(0,0);
            toBeShown.addClass("active-slide");
            toBeHidden.removeClass("active-slide");
            toBeShown.animate({opacity: 1}, 250);
        });
    }
}

resumeButton.on("click", ()=>{
    changeSlide(resumeSlide, workSlide, resumeButton, workButton);
});

workButton.on("click", ()=>{
    changeSlide(workSlide, resumeSlide, workButton, resumeButton);
});