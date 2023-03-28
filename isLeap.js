/* Instructions */ 

/*

function isLeap(year)
{ 
	if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)
	{
		console.log(year + ' Leap year.');
	}
		else 
		{
			console.log(year + ' Not a leap year.'); 
		}
}

*/ 

function isLeap(year)
{
	if (year % 4 == 0){
		if (year % 100 == 0){
			if (year % 400 == 0){
				console.log(year + " is a leap year.");
			} else {
				console.log(year + " is not a leap year.");
			}
		} else {
			console.log(year + " is a leap year.");
		}
	} else {
		console.log(year + " is not a leap year.");
	}
}
