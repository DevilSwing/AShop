$(document).ready(function () { 



let figuries = [
	{
		img:'assets/imgs/anime.jpg',
		name:'Eva',
		size:'100X500Cm',
		cost: 700,
		type:'Жулик несчастный'

	},
	{
		img:'assets/imgs/anime.jpg',
		name:'FT',
		size:'50X70Cm',
		cost: 100,
		type:'Жулик несчастный'

	},
	{
		img:'assets/imgs/anime.jpg',
		name:'Ov',
		size:'1000X700Cm',
		cost: 1400,
		type:'Жулик несчастный'

	},
	{
		img:'assets/imgs/anime.jpg',
		name:'MHA',
		size:'1000X700Cm',
		cost: 1400,
		type:'Жулик несчастный'

	}

];	

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
	
















































// figuries.ex = {
// '<div class="figure">\
// 			<img class="test" src="assets/imgs/anime.jpg">\
// 			<div class="nice">Аниме:<span>-------</span></div>\
// 			<div class="nice">Размер:<span>1000Х700Cm</span></div>\
// 			<div class="nice">Цена:<span>1400</span></div>\
// 			<div class="nice">Описание:<span>Бублики были вкусные, ириски не люблю, Религией не увлекаюсь</span></div>\
// 			<div class="nice">Вид:<span>прекрасный</span></div>\
// 		</div>'		
