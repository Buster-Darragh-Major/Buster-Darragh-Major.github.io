$( document ).ready(function() {

	var addCursor = true;

	function flash() {

		if (addCursor) {
			$("#subtitle").text("Software Engineer_");
			addCursor = false;
		} else {
			$("#subtitle").text("Software Engineer ");
			addCursor = true;
		}


	}

	var interval = setInterval(flash, 600);
})