$(document).ready(function () { 

	$('.js-example-basic-multiple').select2();



	$('.js-example-basic-multiple').change(function(event){
		console.log(event.target.classList[0]);	
		let filter = [];
		switch(event.target.classList[0]){
			case 'size':
			filter = figuries.filter(function(current){
				return current.size === event.target.options[event.target.selectedIndex].value;
			});console.log(filter);
			break;
			case 'anime':
			break;
			case 'cost':
			break;
			case 'type':
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
 		</div>';		
});

$('.shoplist').append(result);



});
