$(document).ready(function() {
    console.log("kurwi sbogom");
    $("#submit").click(function() {
        var url = window.location.href.split("/")[3];
<<<<<<< HEAD
 		console.log(url);
=======
>>>>>>> 9f3be4911e3b174947e8e7935b99841549a85b0f
        var pin = $("input[name=pin]").val();
        console.log(url + pin);
        window.location.replace(url + pin);
    });
});
