$(document).ready(function() {
    console.log("kurwi sbogom");
    $("#submit").click(function() {
        var url = window.location.href.split("/")[1];
        var pin = $("input[name=pin]").val();
        var state = $("select").val();
        //var res = url + " " + pin + " " state;
        window.location.replace(url + pin + "/" + state);

        //$("body").append(res);
    });
});
