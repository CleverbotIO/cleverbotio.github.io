function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

var c = getCookie('c_merge_notified');
if (c == "") {
  swal({
    title: "Upcoming Changes",
    text: "Cleverbot.io is becoming a part of the official Cleverbot API. Charges for high volumes will soon have to apply.\n\nWe intend Cleverbot.io to remain compatible with current calls and keys. The quality of replies will improve, and new options are on the way.",
    imageUrl: '//cdn.cleverbot.io/cb_api.jpg'
  });
  document.cookie = 'c_merge_notified=t';
}
