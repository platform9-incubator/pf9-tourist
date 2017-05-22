export const short_wait = 350;
export const long_wait = 1000;

export function get_spot_position() {
    var pos = $('.tourist-popover').position();
    var arrow = $('.arrow').position();
    return { 'left': pos.left + arrow.left, 'top': pos.top + arrow.top };
}

export function add_spotlight_overlay() {
    var spot = get_spot_position()
    fix_height();
    $(".tourist-overlay").css("background","radial-gradient(circle 400px at " + spot.left + "px " +  " " + spot.top + "px , rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0) 25%, rgba(0, 0, 0, 0.4))");
}

export function waitForSelector(theSelector, theTour, theSelf){
    var myInterval = setInterval(function() {
        if($(theSelector)[0].getBoundingClientRect().width === 0){
            console.log("Bounding rectangle for " + theSelector + " is non-existent, retrying...");
        } else {
            clearInterval(myInterval);
            theTour.view.setTarget($(theSelector), theSelf);
            theTour.view.show();
            add_spotlight_overlay();
        }
    }, 350);
}

export function fix_height() {
    $(".tourist-overlay").css("height", $(document).height());
}

export function scroll_to(theSelector) {
    $('html, body').animate({
            scrollTop: $(theSelector).offset().top - 200
        }, 500);
    }
