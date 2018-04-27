
// window.onload加载函数
function addLoadEvent(func) {
	var oldonload = window.onload;

	if(typeof window.onload != 'function') {
		window.onload = func;
	}
	else {
		window.onload = function () {
			oldonload();
			func();
		}
	}
}

// 在元素后插入新元素
function insertAfter(newElement, targetElement) {
	var parent = targetElement.parentNode;

	if(parent = targetElement.parentNode) {
		parent.appendChild(newElement);
	}
	else {
		parent.insertBefore(newElement, targetElement.nextSibling);
	}


}