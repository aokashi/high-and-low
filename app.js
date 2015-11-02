window.onload = function(){
	
	var hide = getRandom(1,100);
	var show = getRandom(1,100);
	changeValue("description", "現在の値は" + show + "です<br>この値よりも大きいか小さいか特定してみよう！<br>ただし、同じ数字を特定する場合はハイかロウどちらかを押してください");
	
	document.getElementById('high').onclick = function(){
		changeValue("style", "#form{display: none;}");
		if (hide >= show){
			changeValue("result", "隠れた値は" + hide + "で、当たりです！<br>✌('ω'✌)三✌('ω')✌三(✌'ω')✌");
		}else{
			changeValue("result", "隠れた値は" + hide + "で、ハズレです<br>(◞‸◟)");
		}
	};
	
	document.getElementById('low').onclick = function(){
		changeValue("style", "#form{display: none;}");
		if (hide <= show){
			changeValue("result", "隠れた値は" + hide + "で、当たりです！<br>✌('ω'✌)三✌('ω')✌三(✌'ω')✌");
		}else{
			changeValue("result", "隠れた値は" + hide + "で、ハズレです<br>(◞‸◟)");
		}
	};
	
	document.getElementById('retry').onclick = function(){
		location.reload();
	};
};