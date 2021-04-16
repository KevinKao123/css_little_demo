const h1 = document.querySelector('h1')
// \S代表寻找每一个非空白字符 反斜杠\是option + ¥
// ￥&代表正则匹配到出来的模式pattern
h1.innerHTML = h1.textContent.replace(/\S/g, "<span>$&</span>")

// 加入index计数器
document.querySelectorAll('span').forEach((span, index) => {
	// <span style="--delay:0.1s;">T</span>
	span.style.setProperty('--delay', `${index * 0.1}s`)
})


document.querySelectorAll('button').forEach(button => {
	button.addEventListener('click', e => {
		h1.style.setProperty('--animation', e.target.getAttribute('data-animation'))
		
		// 先移除h1的animate这个class
		h1.classList.remove('animate')
		// 查询一下offsetWidth或者offsetHeight之类,这时浏览器就会被迫计算，称为reflow的操作。强制回流引发重绘
		void h1.offsetWidth
		// 再添加animate这个class,不这么操作浏览器为了提高渲染效率就只执行一次，下次点击就不触发函数
		h1.classList.add('animate')
	})
})
