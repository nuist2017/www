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
	"for":"all audiences",			//属性名有空格，连字符，保留字的要用引号
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

　　可以通过`.`或方括号`[]`运算符来获取属性的值。运算符左侧应该是一个表达式，它返回一个对象。对于`.`来说，**右侧必须是一个以属性名称命名的简单标识符**。方括号内必须是一个**计算结果为字符串的表达式**，字符串就是属性的名字：
<pre>var author=book.author; //得到book的“author”属性
var name=author.surname
var title=book["main title"]</pre>
　　和查询的方法一样，通过点和方括号可以创建属性或给属性赋值，需要将它放在左侧：
<pre>book.edition=6;
    book["main title"]="ECMAScript";
</pre>
　　如果对象是保留字，则需用方括号的形式访问，ECMAScript５对此放宽了限制。

* 作为关联数组的对象
　　`object.property object["property"]`第一种点运算符和一个标识符，和C，Java中访问一个结构体或对象的静态字段非常类似。第二种语法使用方括号和一个字符串，看起来更像数组，只是这个数组元素通过字符串索引而不是数字。这种数组就是我们所说的关联数组(associative array)，也称做散列、映射或字典。**JavaScript对象都是关联数组**。

　<pre>var addr="";
for(i=0;i<4;i++){
    addr+=customer["address"+i]+'\n';}
   </pre>这段代码读取customer对象的address0-3属性，并将它们连接起来。例子主要说明使用数组写法来访问对象属性的灵活性。很多场景只能使用数组写法来完成，例如：
<pre>
function addstock(protfolio,stockname,shares){
    protfolio[stockname]=shares;
}
</pre>由于用户在程序运行时输入股票名称，因此在之前无法得知股票的名称是什么，所以无法用点运算符来访问portfolio的属性，但可以用**[]因为它使用字符串值（可以是动态的）**而不是标识符（静态的，写死在程序中）作为索引对属性访问。

* 继承
　　JS对象具有自由属性（own property），也有一些属性是从原型对象中继承而来。
…………………………………………………………
<br>

* 属性访问错误
　　属性不存在`book.subtitle`；属性的值为null和undefined，查询这些值的属性`book.subtitle.length`；一下场景给对象o设置属性p会失败：
　　- o中的属性p是只读的
　　- o中的属性ｐ是继承属性，且它是只读的，不能通过同名自有属性覆盖只读的继承属性
　　- o中不存在自有属性p，且o不可扩展

* 删除属性
　　delete运算符可以删除对象的属性，_delete只是断开属性和宿主对象的联系，而不会去操作属性中的属性_
<pre>
delete book.author;
delete book["main title"];
</pre>

* 检测属性
　　JS对象可以看作属性的集合，我们经常会去检测集合中成员的所属关系，判断某个属性是否存在与某个对象中。可以通过in运算符，hasOwnProperty()和propertyISEnamerable()方法来完成这个工作。
<pre>
var o={x:1};
"x" in o;		//true
"y" in o;		//false
"toString" in o;	//true:o继承了toString属性

o.hasOwnProperty("x");	//true
o.hasOwnProperty("y");	//false
o.hasOwnProperty("toString");	//false:toString是不是自有属性是继承的

propertyIsEnumberable()是hasOwnProperty()的增强版，
只有检测到是自有属性且这个属性可枚举才返回true

var o=inherit({y:2});
o.x=1;
o.propertyIsEnumberable("x");	//true
o.propertyIsEnumberable("y");	//false
Object.prototype.propertyIsEnumberable("toString") //false:不可枚举
</pre>
##函数function才有prototype

