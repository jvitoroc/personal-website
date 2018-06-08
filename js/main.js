var rightColumn = $(".right-column");
var fixedLeftColumn = $("#fixed-left-column");
var gap = $("#gap-between-columns");
var resumeNav = $("#sections-nav");

var lastMobile = false;

function mouseOver(){
    if(window.innerWidth <= 800)
        return;
    rightColumn.addClass("slide-to-right");
    gap.addClass("slide-to-right");
    lastMobile = false;
}

function mouseOut(){
    if(window.innerWidth <= 800)
        return;
    rightColumn.removeClass("slide-to-right");
    gap.removeClass("slide-to-right");
    lastMobile = false;
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

fixedLeftColumn.on("click", function(){
    if(lastMobile){
        enableDrawer(false);
    }
});

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
    if(lastMobile)
        enableDrawer(false);
    changeSlide(resumeSlide, workSlide, resumeButton, workButton);
});

workButton.on("click", ()=>{
    if(lastMobile)
        enableDrawer(false);
    changeSlide(workSlide, resumeSlide, workButton, resumeButton);
});

//

var hamburger = $(".hamburger");

function enableDrawer(enable){
    if(enable){
        rightColumn.addClass("slide-to-right");
        gap.addClass("slide-to-right");
        hamburger.addClass("is-active");
    }else{
        rightColumn.removeClass("slide-to-right");
        gap.removeClass("slide-to-right");
        hamburger.removeClass("is-active");
    }
}

hamburger.on("click", ()=>{
    lastMobile = true;
    if(!hamburger.hasClass("is-active")){
        enableDrawer(true);
    }else{
        enableDrawer(false);
    }
});

//

function enableResumeNav(enable){
    if(enable){
        dropdownIndicator.removeClass("arrow-down");
        dropdownIndicator.addClass("arrow-up");
        resumeNav.addClass("active");
    }else{
        dropdownIndicator.removeClass("arrow-up");
        dropdownIndicator.addClass("arrow-down");
        resumeNav.removeClass("active");
    }
    
}

var dropdownIndicator = $(".dropdown-indicator");

dropdownIndicator.on("click", function(){
    if(!resumeNav.hasClass("active")){
        enableResumeNav(true);
    }else{
        enableResumeNav(false);
    }
});