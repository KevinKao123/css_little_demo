document.querySelector('#parallax_wrapper').addEventListener('mousemove', function(e) {
	// 监听鼠标动作 e.clientX和e.clientY获取位置
	// 鼠标位置除以图片的宽度或者高度
	let horizontal = e.clientX / parseInt(getComputedStyle(document.querySelector('#parallax_wrapper')).width,
		10)
	let vertical = e.clientY / parseInt(getComputedStyle(document.querySelector('#parallax_wrapper')).height,
		10)
	console.log(`horizontal:${horizontal},vertical:${vertical}`);

	document.querySelector('#parallax_bg').style.transform = calculateTransform(horizontal, vertical, 5)
	document.querySelector('#parallax_error_text').style.transform = calculateTransform(horizontal, vertical,
		20)
	document.querySelector('#parallax_octocat').style.transform = calculateTransform(horizontal, vertical, 10)
	document.querySelector('#parallax_sign').style.transform = calculateTransform(horizontal, vertical, -10)

})

function calculateTransform(horizontal, vertical, offset) {
	// 除以0.5是让鼠标在正中间时不会发生偏移，offset偏移量不同元素不同偏移量
	return `translate(${horizontal * offset / 0.5}px, ${vertical * offset / 0.5}px)`
}
