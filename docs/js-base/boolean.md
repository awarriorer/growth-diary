### Boolean

和其他语言一样，布尔类型只有`true,false`两个值。用于比较真假。和其他语言不同的是，在js比较的比较中，如果两个值不是Boolean类型，那么js会将值隐式转换成boolean类型后，再进行对比或运算。

转化的规则如下：
``` js
// 字符串：只要字符串不为空，那么将转成true,否则为false
Boolean(''); // false，空字符串
Boolean(' '); // true， 空格也是字符
Boolean('false'); // true
Boolean('0'); // true

// 数字:只要数字不是0，那么讲转化成true,否则为false
Boolean(0); // false
Boolean(-0); // false
Boolean(+0); // false
Boolean(1); // true
Boolean(-1); // true

// boolean值
Boolean(true); // true
Boolean(false); // false

// undefined
Boolean(undefined); // false

// null
Boolean(null); // false

//对象
Boolean({}); // true
Boolean({a: 0}); //true

// 数组
Boolean([]); // true
Boolean([0]); // true

//方法
Boolean(function(){}); // true
```
当执行下面代码的时候，就会用到上面的规则
``` js
if('0'){
    console.log("'0' is true");
}else{
    console.log("'0' is false");
}
```