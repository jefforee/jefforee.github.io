function unhideFoodBox() {
	var randomRestaurant = sacLoc[Math.floor(Math.random()*sacLoc.length)];
	document.getElementById('restaurantName').innerHTML = randomRestaurant[0];
	document.getElementById('stars').innerHTML = randomRestaurant[1];
	document.getElementById('cuisine').innerHTML = randomRestaurant[2];
	document.getElementById('address').innerHTML = randomRestaurant[3];
	document.getElementById('item1').src = randomRestaurant[4];
	document.getElementById('item1_name').innerHTML = randomRestaurant[5];
	document.getElementById('item2').src = randomRestaurant[6];
	document.getElementById('item2_name').innerHTML = randomRestaurant[7];
	document.getElementById('item3').src = randomRestaurant[8];
	document.getElementById('item3_name').innerHTML = randomRestaurant[9];
	document.getElementById('pic').src = randomRestaurant[10];

	document.getElementById('overlay').style.animation = "fadeIn 0.8s";
	document.getElementById(foodID).style.animation = "fadeIn 0.8s";
    document.getElementById('overlay').classList.remove('hidden');
    document.getElementById(foodID).classList.remove('hidden');
	document.getElementById('name').classList.add('hidden');
	document.getElementById('button').classList.add('hidden');
}

function unideFoodBox(foodItem) {
	unhideFoodBox(foodItem);
}

/*Order: 
0.restaurantname
1.rating
2.cuisine type
3.address
4.item1 pic
5.item1
6.item2 pic
7.item2
8.item3 pic
9.item3
10.restaurant pic
*/


var inNOut = ["In-N-Out Burger", "&nbsp★★★★☆", "&nbspAmerican", "&nbsp Multiple Locations", "https://img.icons8.com/plasticine/100/000000/hamburger.png", "Double-Double", "https://img.icons8.com/plasticine/100/000000/french-fries.png", "Animal Style Fries", "https://img.icons8.com/plasticine/100/000000/milk-bottle.png", "Nepolitian Milk Shake", "assets/img/in_n_out.jpg"];
var texasRoadhouse = ["Texas Roadhouse", "&nbsp★★★★★ (Personal Favorite)", "&nbspAmerican", "&nbsp 8094 Orchard Loop Ln, <br>Elk Grove, CA 95624", "https://img.icons8.com/plasticine/100/000000/steak.png", "Rib-eye Steak", "https://img.icons8.com/plasticine/100/000000/bread.png", "House Rolls (free)", "https://img.icons8.com/plasticine/100/000000/citrus.png", "Strawberry Lemonade", "assets/img/TexasRoadhouse.jpg"];
var chipotle = ["Chipotle", "&nbsp★★★☆☆", "&nbspMexican", "&nbsp Multiple Locations", "https://img.icons8.com/plasticine/100/000000/wrap.png", "Chicken Burrito/Bowl", "https://img.icons8.com/plasticine/100/000000/nachos.png", "Chips & Guacamole", "https://img.icons8.com/plasticine/100/000000/cola.png", "Coca-Cola", "assets/img/chipotle.jpeg"];
var bj = ["BJ's Restaurants", "&nbsp★★★☆☆", "&nbspAmerican", "&nbsp 9237 Laguna Springs Dr,<br> Elk Grove, CA 95758", "https://img.icons8.com/plasticine/100/000000/pizza.png", "California Club FlatBread", "https://img.icons8.com/plasticine/100/000000/steak-rare.png", "Prime Rib", "https://img.icons8.com/plasticine/100/000000/ice-cream-bowl.png", "Pizookie", "assets/img/bj.jpg"];
var leatherbys = ["Leatherby's", "&nbsp★★★★★", "&nbspAmerican", "&nbsp 8238 Laguna Blvd, <br>Elk Grove, CA 95758", "https://img.icons8.com/plasticine/100/000000/sandwich.png", "Grilled Triple Cheddar", "https://img.icons8.com/plasticine/100/000000/french-fries.png", "Leatherby's House Fries", "https://img.icons8.com/plasticine/100/000000/banana-split.png", "Rich's Banana Split", "assets/img/leatherby.jpg"];
var gypsys = ["Gypsy's", "&nbsp★★★★★", "&nbspItalian", "&nbsp2519 Durant Ave, <br> Berkeley, CA 94704", "https://img.icons8.com/plasticine/100/000000/spaghetti.png", "Pollo Con Pesto", "https://img.icons8.com/plasticine/100/000000/spaghetti.png", "Fettuccine Al Salmon", "https://img.icons8.com/plasticine/100/000000/spaghetti.png", "Crazy Alfredo", "assets/img/gypsys.jpg"];
var osaka = ["Osaka Sushi", "&nbsp★★★★★", "&nbspJapanese", "&nbsp8785 Center Pkwy B140,<br> Sacramento, CA 95823", "https://img.icons8.com/plasticine/100/000000/sushi.png", "Y2K Roll", "https://img.icons8.com/plasticine/100/000000/sushi.png", "Tiger Roll", "https://img.icons8.com/plasticine/100/000000/bento.png", "Beef Teriyaki Bento Box", "assets/img/osaka.jpg"];
var phoLe = ["Pho Le", "&nbsp★★★★★", "&nbspVietnamese", "&nbsp 8785 Center Pkwy B180,<br>Sacramento, CA 95823", "https://img.icons8.com/plasticine/100/000000/cinnamon-sticks.png", "Fried Egg Roll", "https://img.icons8.com/plasticine/100/000000/noodles.png", "C1. Combination Pho", "https://img.icons8.com/plasticine/100/000000/rice-bowl.png", "Hungry Man Combo", "assets/img/phoLe.jpg"];
var IB = ["IB's", "&nbsp★★★★☆", "&nbspAmerican", "&nbsp  2513 Durant Ave, <br> Berkeley, CA 94704", "https://img.icons8.com/plasticine/100/000000/bread.png", "BBQ Cheesesteak", "https://img.icons8.com/plasticine/100/000000/bread.png", "IB’s Original Cheesesteak", "https://img.icons8.com/plasticine/100/000000/cola.png", "Coca-cola", "assets/img/IB.jpeg"];
var socialClub = ["Berkeley Social Club", "&nbsp★★★★☆", "&nbspKorean-American", "&nbsp 2050 University Ave, <br> Berkeley, CA 94704", "https://img.icons8.com/plasticine/100/000000/noodles.png", "Pimped Up Ramyun", "https://img.icons8.com/plasticine/100/000000/sunny-side-up-eggs.png", "Salmon Benedict", "https://img.icons8.com/plasticine/100/000000/hamburger.png", "K.F.C. Burger", "assets/img/socialClub.jpg"];
var immThai = ["Imm Thai", "&nbsp★★★★★", "&nbsp Thai", "&nbsp 2068 University Ave, <br> Berkeley, CA 94704", "https://img.icons8.com/plasticine/100/000000/noodles.png", "Pad Se Ew", "https://img.icons8.com/plasticine/100/000000/noodles.png", "Pad Kee Mao", "https://img.icons8.com/plasticine/100/000000/rice-bowl.png", "Yellow Curry", "assets/img/immThai.jpg"];
var mezzo = ["Mezzo", "&nbsp★★★★★", "&nbsp Italian", "&nbsp 2442 Telegraph Ave, <br> Berkeley, CA 94704", "https://img.icons8.com/plasticine/100/000000/sandwich.png", "B.L.T.A", "https://img.icons8.com/plasticine/100/000000/sandwich.png", "Black Forest Ham", "https://img.icons8.com/plasticine/100/000000/salad.png", "Chef Salad", "assets/img/mezzo.jpg"];
var pokeBar = ["Poke Bar", "&nbsp★★★★☆", "&nbsp Hawaiian", "&nbsp 2433 Durant Ave E, <br> Berkeley, CA 94704", "https://img.icons8.com/plasticine/100/000000/sushi.png", "Salmon, Spicy Tuna, Ahi Bowl", "https://img.icons8.com/plasticine/100/000000/sushi.png", "3x Salmon Bowl", "https://img.icons8.com/plasticine/100/000000/mulled-wine.png", "Hawaiian Sun", "assets/img/pokeBar.jpg"];
var pokeParlor = ["Poke Parlor", "&nbsp★★★★☆", "&nbsp Hawaiian", "&nbsp 2485 Telegraph Ave, <br> Berkeley, CA 94704", "https://img.icons8.com/plasticine/100/000000/taco.png", "Sushi Burrito", "https://img.icons8.com/plasticine/100/000000/sushi.png", "3x Salmon Bowl", "https://img.icons8.com/plasticine/100/000000/mulled-wine.png", "Hawaiian Sun", "assets/img/pokeParlor.jpg"];
var littleGem = ["Little Gem", "&nbsp★★★★☆", "&nbsp Belgian", "&nbsp 2468 Telegraph Ave Suite A, <br> Berkeley, CA 94704", "https://img.icons8.com/plasticine/100/000000/belgian-waffle.png", "Crown Jewel", "https://img.icons8.com/plasticine/100/000000/belgian-waffle.png", "Smorefflicious", "https://img.icons8.com/plasticine/100/000000/fried-chicken.png", "Chicken Tenders", "assets/img/belgianWaffles.jpg"];
var slivers = ["Sliver Pizzeria", "&nbsp★★★★★", "&nbsp American", "&nbsp 2468 Telegraph Ave, <br> Berkeley, CA 94704", "https://img.icons8.com/plasticine/100/000000/pizza.png", "???", "https://img.icons8.com/plasticine/100/000000/pizza.png", "???", "https://img.icons8.com/plasticine/100/000000/vegan-food.png", "Green Sauce", "assets/img/slivers.jpg"];
var landl = ["L&L", "&nbsp★★★★☆", "&nbsp Hawaiian", "&nbsp 7419 Laguna Blvd #120, <br> Elk Grove, CA 95758", "https://img.icons8.com/plasticine/100/000000/fried-chicken.png", "Chicken Katsu", "https://img.icons8.com/plasticine/100/000000/tempeh.png", "Spam Musubi", "https://img.icons8.com/plasticine/100/000000/mulled-wine.png", "Hawaiian Sun", "assets/img/landl.png"];
var chickFilA = ["Chick-fil-A", "&nbsp★★★★★", "&nbsp American", "&nbsp 8430 Bond Rd, <br> Elk Grove, CA 95624", "https://img.icons8.com/plasticine/100/000000/hamburger.png", "Deluxe Sandwich", "https://img.icons8.com/plasticine/100/000000/french-fries.png", "Waffle Potato Fries", "https://img.icons8.com/plasticine/100/000000/milk-bottle.png", "Oreo Milkshake", "assets/img/chickFilA.png"];
var sojoRamen = ["Sojo Ramen", "&nbsp★★★★★", "&nbsp Japanese", "&nbsp 2475 Telegraph Ave, <br> Berkeley, CA 94704", "https://img.icons8.com/plasticine/100/000000/noodles.png", "Black Garlic Tonkotsu Ramen", "https://img.icons8.com/plasticine/100/000000/french-fries.png", "Furikake Fries", "https://img.icons8.com/plasticine/100/000000/octopus.png", "Chili Garlic Calamari", "assets/img/sojoRamen.jpg"];
var jacks = ["Jack's Urban Eats", "&nbsp★★★★☆", "&nbsp American", "&nbsp 7701 Laguna Blvd #420, <br>Elk Grove, CA 95758", "https://img.icons8.com/plasticine/100/000000/hamburger.png", "BBQ Tri-Tip", "https://img.icons8.com/plasticine/100/000000/french-fries.png", "Urban Fries", "https://img.icons8.com/plasticine/100/000000/cola.png", "Coca-cola", "assets/img/jacks.jpg"];

/* */ 
var sacLoc = [inNOut, texasRoadhouse, chipotle, bj, leatherbys, osaka, phoLe, landl, chickFilA, jacks];
var foodID = "foods";


document.getElementById('button').onclick = unhideFoodBox;

function closeFoodBox() {
	document.getElementById('overlay').style.animation = "fadeOut 0.8s";
	document.getElementById(foodID).style.animation = "fadeOut 0.8s";
	setTimeout(() => { 
		document.getElementById('overlay').classList.add('hidden');
		document.getElementById(foodID).classList.add('hidden'); 
	}, 800);
	setTimeout(() => { 
		document.getElementById('name').classList.remove('hidden');
		document.getElementById('button').classList.remove('hidden');
	}, 200);
}

document.getElementById('overlay').onclick = closeFoodBox;

if (navigator.appVersion.indexOf("Mac") != -1) {
    document.getElementsByTagName("body")[0].classList.add("mac");
    waveList = document.getElementsByClassName('wave');
    for (let i = 0; i < waveList.length; i++) {
        waveList[i].classList.add("hidden");
    }
    document.getElementsByTagName("information").classList.add("mac");
}
