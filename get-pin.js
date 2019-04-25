$(document).ready(function() {
    console.log(window.location.href.split("/")[2]);
    $("#submit").click(function() {
        var url = window.location.href.split("/")[2];
        var pin = $("input[name=pin]").val();
        var state = $("select").val();
        //var res = url + " " + pin + " " state;
        window.location.replace(url + pin + "/" + state);

        //$("body").append(res);
    });
});
