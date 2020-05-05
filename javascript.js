			// Hover function
			$(".button").hover(function() {
				$(this).addClass("highlighted");
			}, function() {
				$(this).removeClass("highlighted");
			});
			
			// Click function
			$(".button").click(function() {
				$(this).toggleClass("active");
				$(this).removeClass("highlighted");
				
				var containerId = $(this).attr("id") + "Container";
				$("#" + containerId).toggleClass("hidden");
				
				// Dividing the page into four based upon the containers
				var numberActive = 4 - $(".hidden").length;
				$(".division").width(($(window).width() / numberActive) - 20);
			});
			
			// Update output
			function updateOutput() {
				$("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssContainer").val() 
				+ "</style></head><body>" + $("#htmlContainer").val() + "</body></html>");
			};
				
			
			// width - need to re-visit
			//$(".division").height($(window).height() - $("#header").height() - 20);
			//$(".division").width(($(window).width() / 2) - 20);
			
			
			//$("iframe").contents().find("html").html($("#htmlContainer").val());
			
			updateOutput();
			
			$("textarea"). on('change keyup paste', function() {
				updateOutput();
			});
