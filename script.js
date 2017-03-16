$(function(){
	$(".top-gray i").offset({
		top: $(".top-gray-left h1").offset().top, 
		left: $(document).width() / 2
	}).removeClass("hide");
	main = $("div.roundedOne");
	for (i = 0; i <= main.length - 1; i++) {
		if (i == 0) {
			continue
		}
		if (i == 6) {
			main.eq(i).offset({
				top : main.eq(i - 1).offset().top + 220,
				left : main.eq(i - 1).offset().left
			});
			continue
		}
		main.eq(i).offset({
			top : main.eq(i - 1).offset().top + 130,
			left : main.eq(i - 1).offset().left
		});
	}
	$('canvas').drawLine({
	  strokeStyle: '#000',
	  strokeWidth: 5,
	  x1: 15, y1: 0,
	  x2: 15, y2: main.eq(6).position().top - 200 
	});
	for (i = $("div.skills div p").length - 1; i >= 0; i--) {
		$("div.skills div p").eq(i).width($("div.skills div").eq(i).attr("precent") + "%");
	}
})
