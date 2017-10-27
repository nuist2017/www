## 对象
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

　　关于原型，每一个ＪＳ对象都和另一个对象相关联，另一个对象就是我们说的原型，每一个对象都从原型继承属性。所有通过对象直接量创建的对象都具有一个相同的原型对象，并可以通过object.prototype获得对原型对象的引用。通过_关键字new和构造函数调用_创建的对象的原型就是构造函数的prototype属性。隐藏同样使用{}和new Object()创建的对象也继承自object.prototype。同样，通过new　Array()创建的对象的原型就是Array.prototype()，new Date()也是。
　　Date.prototype的属性继承自Object.prototype，因此由new Date()创建的对象同时继承自两个原型，这一系列链接的原型对象就是所谓的“原型链”（prototype chain）。
　　Object.create()

* 属性的查询和设置

　　可以通过`.`或方括号`[]`运算符来获取属性的值。运算符左侧应该是一个表达式，它返回一个对象。对于`.`来说，右侧必须是一个以属性名称命名的简单标识符。方括号内必须是一个计算结果为字符串的表达是，字符串就是属性的名字：
<pre>var author=book.author; //得到book的“author”属性
var name=author.surname
var title=book["main title"]</pre>
　　和查询的方法一样，通过点和方括号可以创建属性或给属性赋值，需要将它放在左侧：
    book.edition=6;
    book["main title"]="ECMAScript";
　　如果对象是保留字，则需用方括号的形式访问，ECMAScript５对此放宽了限制。
