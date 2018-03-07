$( document ).ready(function() {
	$("#work-portal").hover(
		function() {
			$("#portal-description").append("A brief work history inculding film production, civil engineering site work and a software engineering internship.");
		},
		function() {
			$("#portal-description").empty();
		}
	);
	
	$("#education-portal").hover(
		function() {
			$("#portal-description").append("This area is coming soon, stay tuned!");
		},
		function(){
			$("#portal-description").empty();
		}
	);

	$("#music-portal").hover(
		function() {
			$("#portal-description").append("I love a lot of different kinds of music, and I try to listen to as much variety as I can! I've written a bit about some of my favourites.");
		},
		function(){
			$("#portal-description").empty();
		}
	);

	$("#simpsons-portal").hover(
		function() {
			$("#portal-description").append("From cheeky Mr. Burns to awfully devilish Miss Hoover, The Simpsons truly has it all!");
		},
		function(){
			$("#portal-description").empty();
		}
	);
})