// 方法一

function eventHandler() {
	alert("hello")
	alert("world")
}

// 方法二
document.querySelector('#btn-click').onclick = eventHandler

function sayHello() {
	alert("hello")
}

function sayWorld() {
	alert("world")
}

// 只会触发sayWorld
document.querySelector('#btn-click1').onclick = sayHello
document.querySelector('#btn-click1').onclick = sayWorld

// 方法三
// 可以都触发
document.querySelector('#btn-click2').addEventListener('click', sayHello)
document.querySelector('#btn-click2').addEventListener('click', sayWorld)

// 匿名函数
document.querySelector('#btn-click3').addEventListener('click', function() {
	alert("hello")
	alert("world")
})
