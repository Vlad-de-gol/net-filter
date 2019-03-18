// All products
/*var newContent = [];
var xhr = new XMLHttpRequest();
		xhr.onload = function(){
			if(xhr.status === 200){
					responseObject = JSON.parse(xhr.responseText);
					for (var i = 0; i < responseObject.length; i++){
						//newContent.push(responseObject[i].src + responseObject[i].name + responseObject[i].price);
						newContent.push('{src: ' + responseObject[i].src + ', name: ' + responseObject[i].name + ', price: ' + responseObject[i].price + '}');
					}
			}
		};
xhr.open('GET', 'data/data.json', true);
xhr.send(null);

function func(){
  document.getElementById('content').innerHTML = newContent;
}
setTimeout(func, 200);*/

var products = [
		{
			"name"	: "Acer Aspire Black",
			"price"	: " 200 ",
			"src"	: "images/Acer Aspire E 15 E5-576G Obsidian Black.jpg"
		},
		{
			"name"	: "Acer Packard Bell",
			"price"	: " 180 ",
			"src"	: "images/Acer Packard Bell.jpg"
		},
		{
			"name"	: "Acer Swift 5 Charcoal Blue",
			"price"	: " 350 ",
			"src"	: "images/Acer Swift 5 Charcoal Blue.jpg"
		},
		{
			"name"	: "ASUS VivoBook Icicle Gold",
			"price"	: " 700 ",
			"src"	: "images/ASUS VivoBook Icicle Gold.jpg"
		},
		{
			"name"	: "Dell Latitude 14 3480 Black",
			"price"	: " 800 ",
			"src"	: "images/Dell Latitude 14 3480 Black.jpg"
		},
		{
			"name"	: "HP 250 G6",
			"price"	: " 758 ",
			"src"	: "images/HP 250 G6.jpg"
		},
		{
			"name"	: "Lenovo IdeaPad Platinum Gray",
			"price"	: " 150 ",
			"src"	: "images/Lenovo IdeaPad Platinum Gray.jpg"
		},
		{
			"name"	: "Lenovo Yoga Platinum",
			"price"	: " 170 ",
			"src"	: "images/Lenovo Yoga Platinum.jpg"
		},
		{
			"name"	: "Microsoft Surface Book Silver",
			"price"	: " 750 ",
			"src"	: "images/Microsoft Surface Book Silver.jpg"
		},
		{
			"name"	: "MSI GT75 Titan",
			"price"	: " 1000 ",
			"src"	: "images/MSI GT75 Titan.jpg"
		},
		{
			"name"	: "Panasonic ToughBook",
			"price"	: " 1050 ",
			"src"	: "images/Panasonic ToughBook Silver.jpg"
		},
		{
			"name"	: "Panasonic ToughBook",
			"price"	: " 100 ",
			"src"	: "images/Panasonic ToughBook.jpg"
		},
		{
			"name"	: "Xiaomi Mi Gaming Laptop",
			"price"	: " 1010 ",
			"src"	:"images/Xiaomi Mi Gaming Laptop.jpg"
		},
		{
			"name"	: "Xiaomi Mi Notebook Air",
			"price"	: " 1100 ",
			"src"	:"images/Xiaomi Mi Notebook Air.jpg"
		},
		{
			"name"	: "Xiaomi Mi Notebook",
			"price"	: " 900 ",
			"src"	:"images/Xiaomi Mi Notebook.jpg"
		}
]

// all products
/*
var elProduct = document.getElementById('product');
var newContent = '';
for (var i = 0; i < products.length; i++){
	newContent += '<div class="product__content">';
	newContent += '<img class="product__content__img" src="' + products[i].src + '" ';
	newContent += 'alt="' + products[i].name + '" />';
	newContent += '<span><b>' + products[i].name + '</b></span>';
	newContent += '<span><b>$ ' + products[i].price + '</b></span>';
	newContent += '</div>';
}
elProduct.innerHTML = newContent;
*/

//pagination

var PAGINATION_NUMBER = 6,
		newContent = '',
		elProduct = document.getElementById('product'),
		AllProducts = products.length;
		for (var i = 0; i < PAGINATION_NUMBER; i++){
			newContent += '<div class="product__content">';
			newContent += '<img class="product__content__img" src="' + products[i].src + '" ';
			newContent += 'alt="' + products[i].name + '" />';
			newContent += '<span><b>' + products[i].name + '</b></span>';
			newContent += '<span><b>$ ' + products[i].price + '</b></span>';
			newContent += '</div>';
		}
		elProduct.innerHTML = newContent;

// search input
var elSearch = document.getElementsByClassName('search');
search.onkeyup = searchInput;
function searchInput(){
		var newContent = '',
				filter = document.getElementById('search').value.toUpperCase();
		 		elProduct = document.getElementById('product');
    		elProduct.innerHTML = '';
				for (i = 0; i < products.length; i++){
					var txtValue = products[i].name;
	        if (txtValue.toUpperCase().indexOf(filter) > -1){
						newContent += '<div class="product__content">';
						newContent += '<img class="product__content__img" src="' + products[i].src + '" ';
						newContent += 'alt="' + products[i].name + '" />';
						newContent += '<span><b>' + products[i].name + '</b></span>';
						newContent += '<span><b>$ ' + products[i].price + '</b></span>';
						newContent += '</div>';
						elProduct.innerHTML = newContent;
	        }
	    }
}

function pagination() {
		var $sumData = products.length;
		var $page = Math.ceil($sumData/PAGINATION_NUMBER);
		var plagin = '';
		for (var i = 0; i < $page; i++){
			var roundNumber = (i + 1);
			plagin += '<li><a href="' + roundNumber + '">' + roundNumber + '</a></li>';

		}

		document.querySelector('.list').innerHTML = plagin;

		var startItem = document.querySelector('ul > li');
		startItem.classList.add('active');



		var clickOnPagination = document.querySelector('.list');
		clickOnPagination.onclick = function(e){
			e.preventDefault();
			var li = event.srcElement || e.target;
			while(li.tagName != "LI" && li ){
				//li = li.parentNode;
				li = document.querySelector('a').getAttribute('href');
			}
			alert(li);

	 	};



		/*$('.nav-products li a').click(function(e){
			e.preventDefault();
				$('.nav-products li').removeClass('active');
				$(this).parents('li').addClass('active');
				$('.products').html('');
				var $eventPlagination = Number($(this).attr('href'));
				var item = $eventPlagination * PAGINATION_NUMBER;
				for (var i = PAGINATION_NUMBER; i > 0; i--){
					$('.products').append('<div class="product"><div class="images"><button class="remove-botton remove">remove from list</button><img src="' + data[item - i].img +'"></div><h3 class="name">' + data[item - i].name +'</h3><span class="price">$' + data[item - i].price +'<del>' + data[item - i].old_price +'</del></span><ul class="buttons"><li><a href="#" class="remove"><i class="fa fa-trash" aria-hidden="true"></i></a></li><li><a href="#"><i class="fa fa-shopping-cart" aria-hidden="true"></i></a></li></ul></div>');
				} */
	 //var elSearch = document.getElementsByClassName('search');
}
pagination();
