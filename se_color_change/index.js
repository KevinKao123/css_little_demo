window.addEventListener('scroll', (e) => {
	// 滚动距离/(页面总高度-视窗高度)，在这就是200vh
	// let scrolled = document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
	let noStickyOffset = document.documentElement.clientHeight * 2
	let scrolled = document.documentElement.scrollTop / noStickyOffset

	let $white = document.querySelector('.white')
	let $red = document.querySelector('.red')

	// 从下到上显示白色iphone,将clipPath的值变化
	$white.style.clipPath = `inset(${((0.5 - scrolled) / 0.5) * 100}% 0px 0px 0px)`
	// 从下到上显示红色iphone
	$red.style.clipPath = `inset(${((1 - scrolled) / 0.5) * 100}% 0px 0px 0px)`

	if (scrolled >= 1) {
		document.querySelector('.sticky-container').classList.add('no-sticky')
	} else {
		document.querySelector('.sticky-container').classList.remove('no-sticky')
	}
})
// 公式是 document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight)
// 首先 document.documentElement.scrollTop 代表页面垂直卷动的距离，
// document.documentElement.scrollHeight 代表页面的总高度（例如 3000px），
// document.documentElement.clientHeight 代表浏览器视窗的高度。
// 假设你的浏览器视窗高度是 1200*800，如果你将 body 的高度设定为 3000px，
// 在卷动到最底的时候，你会发现 document.documentElement.scrollTop 是 2200 而不是 3000，
// 因为页面虽然卷动到最底了，但最底的 800px 仍在你的视线范围内。
// 所以分母的 (document.documentElement.scrollHeight - document.documentElement.clientHeight) 
// 页面总高度减去浏览器视窗高度，在此例中就是 (3000 - 800) = 2200。
// 当页面卷动到最底时，2200 / 2200 就等于 1 了。