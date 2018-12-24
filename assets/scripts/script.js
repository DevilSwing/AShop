$(document).ready(function () { 

	$('.js-example-basic-multiple').select2();

let currentarray = figuries.map(function(item){ return item; });

	

	$('.js-example-basic-multiple').change(function(event){

			console.log($(".size option:selected").text())


				currentarray = figuries.filter(function(current){
					return $(".size option:selected").text() === '' ? true
					 : current.size === $(".size option:selected").text() + 'Cm';
				});
				console.log(currentarray)
				currentarray = currentarray.filter(function(current){
					return $(".anime option:selected").text() === '' ? true
					 : current.name === $(".anime option:selected").text();
				});
				console.log(currentarray)
				currentarray = currentarray.filter(function(current){
						return $(".cost option:selected").text() === '' ? true
					 : current.cost == $(".cost option:selected").text();				
				});
				console.log(currentarray)
				currentarray = currentarray.filter(function(current){
					return $(".type option:selected").text() === '' ? true
					 : current.type === $(".type option:selected").text();
				});
				console.log(currentarray)
	

		let result = '';
		currentarray.forEach((goods) => {
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



 $('.figure').on('click', '.podrobnee', function(e){
 	let card = $(e.target).parent();
 	console.log();
 	card.append('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aut quisquam repudiandae, tenetur quos ullam. Suscipit nobis nostrum qui sit harum, ad quos quis provident, maiores, porro labore excepturi laborum?');
 	card.style..height(40);
 });

});
