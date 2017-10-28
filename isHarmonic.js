function isHarmonic(value)
{
	if(value > 2) {
		return isHarmonic(value/2);
	}
	if(value < 1) {
		return isHarmonic(value*2);
	}
	// within 0.95%
	var arr = [1,2,3,4,5,6,8,9];
	var arr2 = [1,2,3,4,5,6,8,9,10,12,16];
	for(var q=0; q<arr.length; q++){
		var i = arr[q];
		for(var r=0; r<arr2.length; r++) {
			var j=arr2[r];
			var k = value/(j/i);
			if(1 - 0.0095 <= k && k <= 1 + 0.0095) {
				return [true,j,i];
			}
		}
	}
	return false;
}
