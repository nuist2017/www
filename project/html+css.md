* 当在对象内盒子使用float后，导致对象本省不能被撑开自适应高度，这是由于浮动造成的。有三种方法

* width:100%好像是多余
如果你对CSS继承关系比较了解的话，你可能就知道上面的“width:100%”可能就是不句多余的话，并且不使用时，效果可能更好。比如最上面的那张图片上“只设置padding”时，要不使用width:100%就不会出现难看的溢出。那么width:100%合适在什么时候使用呢？
width:100%在什么情况下使用不多余
我们要弄清楚什么时候合适使用，那我们就要弄清楚它在什么时候多余。说白了就是width什么时候会自动继承。以下是我的总结：

　　内层子元素必须为块级元素，才有可能出现宽度继承
  
　　当父元素宽度确定，子元素不存在浮动，绝对定位，固定定位时，其宽度也能够很好的继承；相反，宽度会零（只有通过里面的内容把其撑开）。
  
　　当父元素宽度不确定时（宽度是继承而来，或是用的相对单位），不会对继承造成什么影响。其仍然满足上面的1、2两条。
* 通常，为了让DIV子元素超出部分隐藏，都是在父元素设置overflow:hidden，这样即可防止子元素撑开父元素，使子元素能够溢出隐藏！
但是，对于position:absolute定位的子元素，仅仅使用overflow:hidden没办法将其溢出部分隐藏，需要在父元素上也加上一个定位position:relative;才能将含有 position:absolute属性的子元素进行溢出隐藏！
  
