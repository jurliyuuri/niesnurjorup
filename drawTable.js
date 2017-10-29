function drawTable(arr)
{
	var str='<table border="1">';
	for(var i=-1;i<arr.length;i++){
		str+='<tr>';
		for(var j=-1;j<arr.length;j++){

			if(i==-1){
				if(j!=-1){str+='<td>'+arr[j][0]+'</td>';}else{
					str+='<td>'+'</td>';
				}
			} else {
				if(j==-1){str+='<td>'+arr[i][0]+'</td>';} else{
					var val = arr[i][1]/arr[j][1];
					str+= '<td class="s' + (isHarmonic(val) ? 2:1) + '">';
					str+= val.toPrecision(4) +'</td>';
				}
			}

		}
		str+='</tr>';
	}
	str+="</table>"
	document.write(str);
}