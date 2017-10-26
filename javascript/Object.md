##对象
* 对象是JavaScript的基本数据类型，是一种复合值。除了字符串、数字、布尔值、null和undefined之外，JS中的值都是对象。它们的行为和不可变对象非常类似。

* 对象是可变的，我们通过引用而非值来操作对象。如果x指向一个对象，那么执行var y=x；变量y也是指向同一个对象的引用，而非这个对象的副本，修改变量y也会对x造成影响。

* 属性包括名字和值，还有一些与属性相关的特性，称为属性特性property attribute：可写，可枚举，可配置。

* 除了属性，每个对象还有三个对象特性object attribute：prototype继承原型对象属性，对象的类class是一个标识对象类型的字符串。extensible flag

* 区分三类JS对象和两类属性：内置对象array、date、RegEx、function；宿主对象hos。t object，浏览器等；自定义对象user-defined object；继承属性inherted property。

* 创建对象：对象直接量、关键字new和Object.creat()

<pre>var empty={};
var point={x:0,y:0}
var book={
	"main title":"javascript",
	'sub-title':"the definitive guide",
	"for":"all audiences"，			//属性名有空格，连字符，保留字的要用引号
	author:{
		firstname:"david",
		surname:"flanagan"		//这里的属性名没有引号
	}
};

var o=new Object();
var a=new Array();
var d=new Date();
var r=new RegExp();
</pre>
　　除了这些内置的构造函数，用自定义构造函数来初始化对象也是非常常见的。


