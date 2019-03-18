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

//pagination

var PAGINATION_NUMBER = 6,
		newContent = '',
		elProduct = document.getElementById('product'),
		AllProducts = products.length;
		for (var i = 0; i < PAGINATION_NUMBER; i++){
			newContent += '<div class="product__content">';
			newContent += '<img class="product__content__img" src="' + products[i].src + '" ';
			newContent += 'alt="' + products[i].name + '" />';
			newContent += '<span><b><a href=' + products[i].name + '>' + products[i].name + '</a></b></span>';
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
						newContent += '<span><b><a href=' + products[i].name + '>' + products[i].name + '</b></a></span>';
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
			plagin += '<li><span>' + roundNumber + '</span></li>';

		}
		document.querySelector('.list').innerHTML = plagin;
		var startItem = document.querySelector('ul > li');
		startItem.classList.add('active');
			window.onload = function(){
			    el = document.getElementById('list');
			    items = el.getElementsByTagName('li');
			    for(i=0; i<items.length; i++){
			        items[i].i = i;
			        items[i].onclick = eventPlagination;

			    }
			    function  eventPlagination(){
						var ept = document.getElementsByClassName('active');
						while(ept.length > 0){
					    ept[0].classList.remove('active');
					}
						this.classList.add('active');
						elProduct = document.getElementById('product');
						elProduct.innerHTML = '';
			    	var numPlagination = (Number(this.i) + 1) * PAGINATION_NUMBER;
								console.log(numPlagination);
								console.log(numPlagination + PAGINATION_NUMBER);
								var newContent = '';
								for (i = numPlagination; i > 0; i--){
										newContent += '<div class="product__content">';
										newContent += '<img class="product__content__img" src="' + products[numPlagination - i].src + '" ';
										newContent += 'alt="' + products[numPlagination - i].name + '" />';
										newContent += '<span><b><a href=' + products[i].name + '>' + products[numPlagination - i].name + '</a></b></span>';
										newContent += '<span><b>$ ' + products[numPlagination - i].price + '</b></span>';
										newContent += '</div>';
										elProduct.innerHTML = newContent;
							}
		    	}
			}
}
pagination();
