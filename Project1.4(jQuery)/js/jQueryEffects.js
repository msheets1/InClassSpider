	
	$(function() {
	
		// ============= JQUERY USAGE =============
	
		// Note to Seth: I've starred things to try to facilitate grading.
		// It's funny how after using Angular, I'm starting to see *some* (note, **some**)
		// of it's beauty in returning to jQuery from it.
	
		// Selection call by *element* (section) and class (.mainsection)
		// Also, *manipulation* (changing the CSS of an element: 
		// I asked Dr. Anderson what this meant and he said that this kind of a change would fit)
		$('.mainSection h2:first-child:not(.alwaysExpanded)').siblings().css({'display':'none'});
		
		// Selection call by element (h2) and *class* (.mainSection)
		$('.mainSection h2:first-child:not(.alwaysExpanded)').on('click',function(){ 
			$(this).siblings().slideToggle('600');
		});
		
		// Selection call by *ID* (#emailSubmitButton; even though I don't like doing this... :)
		// *Event call* with ".on('click'..."
		$('#emailSubmitButton').on('click',function() {
			alert("Thanks for signing up!");
		});	
		
	});