window.addEventListener('scroll', (e) => {
	// 滚动的距离 / (页面总高度 - 视窗高度)
	let scrolled = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document
		.documentElement.clientHeight)

	// 取值范围0~1
	console.log(scrolled);

	let $h1 = document.querySelector('h1')
	// svg的父容器
	let $theChip = document.querySelector('#the-chip')
	// a13的svg
	let $A13 = document.querySelector('#A13')
	// a13的背景颜色
	let $A13TextBg = document.querySelector('#the-chip .text-bg')

	// scrolld的三次方制造加速度效果
	// https://easings.net/ja
	// 放大到最大svg大小等于页面宽度的20倍
	$theChip.style.width = $theChip.style.height = document.documentElement.clientWidth * 20 * (scrolled *
		scrolled * scrolled) + 'px'

	if (scrolled <= 0.1) {
		$h1.style.opacity = (0.1 - scrolled) / 0.1
		$h1.style.marginTop = scrolled * 1000 * -1 + 'px'
	} else {
		$h1.style.opacity = 0
	}

	if (scrolled <= 0.2) {
		$A13.style.opacity = (scrolled - 0.1) / 0.1
	} else {
		$A13.style.opacity = 1
	}

	if (scrolled >= 0.5) {
		$A13TextBg.style.opacity = (1 - scrolled) / 0.5
		$theChip.classList.add('transparent')
	} else {
		$A13TextBg.style.opacity = 1
		$theChip.classList.remove('transparent')
	}

	if (scrolled >= 0.95) {
		// 将多余部分渐渐淡出透明
		$theChip.style.opacity = (1 - scrolled) / 0.05
	} else {
		$theChip.style.opacity = 1
	}

})
