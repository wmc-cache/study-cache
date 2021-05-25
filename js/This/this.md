# 谁调的函数，this 就归谁。
当调用方法没有明确对象时，this 就指向全局对象。
在浏览器中，指向 window；
在 Node 中，指向 Global。
（严格模式下，指向 undefined）


*this的指向是在调用时决定的，而不是在书写时决定的。这点和闭包恰恰相反*


在三种特殊情境下，this 会 100% 指向 window：
*立即执行函数（IIFE）*
*setTimeout 中传入的函数*
*setInterval 中传入的函数*