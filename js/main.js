jQuery(document).ready(function($) {
    var shell = $(".shell").resizable({
        minHeight: 250,
        minWidth: 500 }).
    draggable({
        handle: "> .status-bar .title" });

    var term = $(".content").terminal(App, {
        prompt: '[[b;#D13F00;]guest][[b;#FFFFFF;]@][[b;#0066C8;]gaston.sh] [[b;#EEEEEE;]$] ',
        scrollOnEcho: true,
        completion: true, 
        greetings: function(cb){
            cb(App.motd());
        },
        enabled: $("body").attr("onload") === undefined });

    if (!term.enabled()) {
        term.find(".cursor").addClass("blink");
    }
});
