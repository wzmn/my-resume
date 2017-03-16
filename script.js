$(function(){
main = $("div.roundedOne");
for (i = 0; i <= main.length - 1; i++) {
	if (i == 0) {
		$('canvas').drawLine({
		  strokeStyle: '#000',
		  strokeWidth: 5,
		  x1: 15, y1: 0,
		  x2: 15, y2: main.eq(6).offset().top + 90
		});
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
for (i = $("div.skills div p").length - 1; i >= 0; i--) {
	$("div.skills div p").eq(i).width($("div.skills div").eq(i).attr("precent") + "%");
}
})
