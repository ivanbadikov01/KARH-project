$(document).ready(function() {
    console.log("kurwi sbogom");
    $("#submit").click(function() {

        var pin = $("input[name='pin']").val();
        console.log(typeof pin);
        pin = parseInt(pin, 10);
        console.log(typeof pin);
    })
});