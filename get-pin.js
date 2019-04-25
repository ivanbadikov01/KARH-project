$(document).ready(function() {
    console.log("kurwi sbogom");
    $("#submit").click(function() {
        var url = window.location.href.split("/").toArray()[0];
        var pin = $("input[name=pin]").val();
        window.location.replace(url + "/" + pin);
    });
});
