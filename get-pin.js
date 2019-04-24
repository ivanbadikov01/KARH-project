$(document).ready(function () {
	console.log("kurwi sbogom");
	$("#submit").click(function () {
		preventFormSubmit();

		var pin = $("input[name='pin']").val();
		console.log(typeof pin);
	});
});
