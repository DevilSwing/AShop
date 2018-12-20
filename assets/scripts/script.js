$(document).ready(function () { 

	$('.js-example-basic-multiple').select2();



	$('.js-example-basic-multiple').change(function(event){
		let filter = [];
		switch(event.target.classList[0]){
			case 'size':
				filter = figuries.filter(function(current){
					return event.target.options[event.target.selectedIndex] === undefined ? true
					 : current.size === event.target.options[event.target.selectedIndex].value;
				});
				break;
			case 'anime':
				filter = figuries.filter(function(current){
					return event.target.options[event.target.selectedIndex] === undefined ? true
					 : current.name === event.target.options[event.target.selectedIndex].value;
				});
				break;
			case 'cost':
				filter = figuries.filter(function(current){
					return event.target.options[event.target.selectedIndex] === undefined ? true
					 : current.cost == event.target.options[event.target.selectedIndex].value;
				});
				break;
			case 'type':
				filter = figuries.filter(function(current){
					return event.target.options[event.target.selectedIndex] === undefined ? true
					 : current.type === event.target.options[event.target.selectedIndex].value;
				});
			break;
		};
		let result = '';
		filter.forEach((goods) => {
			 result += '<div class="figure">\
		 			<img class="test" src="' + goods.img + '">\
		 			<div class="nice">Аниме:<span>' + goods.name + '</span></div>\
		 			<div class="nice">Размер:<span>' + goods.size + '</span></div>\
		 			<div class="nice">Цена:<span>' + goods.cost + '</span></div>\
		 			<div class="nice">Вид:<span>' + goods.type + '</span></div>\
		 		</div>';		
		});
		$('.shoplist').empty();
		$('.shoplist').append(result);
	});


	
let result = '';
figuries.forEach((goods) => {
	 result += '<div class="figure">\
 			<img class="test" src="' + goods.img + '">\
 			<div class="nice">Аниме:<span>' + goods.name + '</span></div>\
 			<div class="nice">Размер:<span>' + goods.size + '</span></div>\
 			<div class="nice">Цена:<span>' + goods.cost + '</span></div>\
 			<div class="nice">Вид:<span>' + goods.type + '</span></div>\
 			<button class="podrobnee">Подробнее</button>\
			<button class="buy">Купить</button>\
 		</div>';		
});

$('.shoplist').append(result);



});
