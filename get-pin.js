$(document).ready(function() {
    console.log("kurwi sbogom");
    $("#submit").click(function() {
        var url = window.location.href.split("/")[1];
 		console.log(url);
        var pin = $("input[name=pin]").val();
        console.log(url + pin);
        window.location.replace(url + pin);
    });
});
