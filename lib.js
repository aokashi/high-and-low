/*範囲のランダムな数を返す*/
var getRandom = function(min, max){
	if(typeof min != "number" || typeof max != "number"){
		console.log("input 2 numbers:getRandom(number, number);");
		return undefined;
	}
	return Math.floor(Math.random() * (max - min) + min);
};

/*IDがfunc-str-changeのものの値を変更する*/
var changeValue = function(idname, str){
	if(typeof str != "string" && typeof str != "number"){
		console.log("input character string or number:changeValue(string or number);");
		return undefined;
	}
	document.getElementById(idname).innerHTML = str;
	document.getElementById(idname).value = str;
};

/*既に付いているIDの変更をする(idname→str)*/
var changeIdname = function(idname, str){
	if(typeof idname != "string" || typeof str != "string"){
		console.log("input 2 character strings:changeIdname(string, string);");
		return undefined;
	}
	document.getElementById(idname).id = str;
};

/*背景色を文字列で指定する（#xxxxxxの形も可）
参考
http://www.w3schools.com/cssref/css_colornames.asp
*/
var changeBgColor = function(str){
	if(typeof str != "string"){
		console.log("input character string:changeBgColor(string);");
		return undefined;
	}
	document.getElementsByTagName("html")[0].style.backgroundColor = str;
	console.load(str);
};

/*指定したIDの要素を下に動かす*/
/*詳しくはやってみろ*/
var scrollBottom = function(idname, num){
	if(typeof idname != "string" || typeof num != "number"){
		console.log("input character string and number:scrollBottom(string, number);");
		return undefined;
	}
	var getId = document.getElementById(idname);
	var idHeight = getId.offsetHeight;
	var top = idHeight;
	var ground = getId.offsetTop;
	getId.style.top = ground + "px";
	var y = idHeight;
	var kgv = 0;
	//インターバル用変数(2つ)
	var rg;
	var g;

	getId.style.top = y + "px";
	getId.style.position = "relative";
	function gravity() {
		y+= ++kgv;
		if(y >= screen.height - idHeight - kgv){
			y = -idHeight;
			rg = setInterval(regravity, 50 / num);
			clearInterval(g);
		}
		getId.style.top = y + "px";
	}
	g = setInterval(gravity, 50 / num);
	function regravity(){
		y+= ++kgv;
		if(y >= top - y){
			getId.style.top = 0 + "px";
			getId.style.position = "";
			clearInterval(rg);
		}
		getId.style.top = y + "px";
	}
}
