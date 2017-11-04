## 函数

* 函数声明语句“被提前”到外部脚本或外部函数作用域的顶部，所以这种方式声明的函数，可以被它定义之前出现的代码所调用。不过，仪表达式定义的函数就另当别论了，为调用一个函数，必须要能引用它，而要使用一个以表达式方式定义的函数之前，必须把它赋值给一个变量。变量的声明提前了，但给_变量的赋值不会提前_。

* return语句导致函数停止执行，并返回它的表达式的值给调用者。