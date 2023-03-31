function	bottlesofbeer(){

	var bottle = 100;
	while (bottle >= 0){
		console.log(bottle + " bottles of beer on the wall, " + bottle + " bottles of beer. Take one down and pass it around, " + --bottle + " bottles of beer on the wall");
	}
	console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
}

bottlesofbeer();
