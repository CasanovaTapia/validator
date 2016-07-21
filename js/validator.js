var arr = ["advertainment", "big data", "clickbait", "disruptor", "freemium",
"gamification", "growth hack", "hyperlocal", "ideation", "innovator", "millenial",
"netiquette", "omnichannel", "real-time", "snackable", "storyscaping", "solomo", "synergy",
"transparency", "viral", "wantrapreneur", "wearable"];

function validate() {
    var input = document.getElementById('myform').elements.item(0).value;
    if (arr.indexOf(input) == -1 ) {
        window.alert("Sorry, that wasn't a buzzword. Try again.");
    } else {
        window.alert("Yay, that was a buzzword. You rock.")
    }
}
