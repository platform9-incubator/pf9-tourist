export const short_wait = 350;
export const long_wait = 1000;

export function get_spot_position() {
  var pos = $('.tourist-popover').position();
  var arrow = $('.arrow').position();
  return { 'left': pos.left + arrow.left, 'top': pos.top + arrow.top };
}

export function add_spotlight_overlay() {
  var spot = get_spot_position()
  $(".tourist-overlay").css("background","radial-gradient(circle 400px at " + spot.left + "px " +  " " + spot.top + "px , rgba(0, 0, 0, 0.0), rgba(0, 0, 0, 0.0) 25%, rgba(0, 0, 0, 0.4))");
}
