### String
-------
在js中，字符串(string)是基础数据类型中的一种，其中基础数据类型包括(String, Boolean, String, undefined, Null)

#### 变量声明
``` js
// 直接赋值
var hello = 'hello uncle-yang!';
// 对象声明式
var hi = new String('hello this is uncle-yang');
```
#### 类型检查

``` js
var hello = 'hello uncle-yang!';
var hi = new String('hello this is uncle-yang');

console.log(typeof hello); // string
console.log(typeof hi); // object
```

#### 字符串和其他数据类型的转换
``` js
// 转数字n nm,n mn 
parseInt('123'); // 123
parseInt('123.4'); // 123
parseFloat('123.4'); // 123.4
parseInt('a123bc'); // NaN
parseInt('a123'); // NaN
parseInt('abc'); // NaN
Number('123'); // 123
Number('123aa'); // NaN

//转Boolean
Boolean('abc'); // true
Boolean(''); // false

Boolean('0'); // false, Boolean(Number('0'))
Boolean('1'); // true, Boolean(Number('1'))

// 转数组
'abc'.split(''); // ["a", "b", "c"]
JSON.parse('["a", "b", "c"]'); // ["a", "b", "c"]

// 转对象
JSON.parse('["a", "b", "c"]'); // ["a", "b", "c"]
```
#### 字符串比较
``` js
'a' > 'b'; // false, 转换成ASCII码在进行比较
'1' > '2'; // false, 隐士转换成数字后，再进行比较
'ac' > 'ab'; // true, 第一位(a)ASCII相同后，继续比较下一位(b,c)的ASCII，
'我' > '的'; // false, '我'.charCodeAt() > '的'.charCodeAt(), 25105 > 20340, false
'123' > '我'; // false,  123 > NaN, 

//很怪异比较，虽然没有意义，但是值得捋清楚是为什么
'abc' > null; // false
'abc' < null; // false
'abc' > undefined; // false
'abc' < undefined; // false
'abc' > true; // false
'abc' < true; // false
'abc' > false; // false
'abc' < false; // false
'abc' > function(){}; // false
'abc' < function(){}; // true
```

#### 访问方法&字符方法
``` js
var str = 'abc';
// 字符串长度
str.length; // 3

// 访问第几个字符
str.charAt(1); // b
str[1]; // b

// 访问字符的Unicode编码,返回0到65535之间的整数
str.charCodeAt(0); // 97
```

#### 位置方法

``` js
var str = 'abcabc';

// indexOf
str.indexOf('a'); // 0
str.indexOf('a', 1); // 3

// lastIndexOf
str.lastIndexOf('a'); // 3
```

#### 去除空格
``` js
// 兼容写法
if (!String.prototype.trim) {
    String.prototype.trim = function () {
        return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    };
}

// trim
var str = '  ab ';

str.trimLeft(); // 'ab '
str.trimRight(); // '  ab'
str.trim(); // 'ab'

```

#### 大小写转换
``` js
var str = 'aBc';

// toLowerCase 转小写
console.log(str.toLowerCase()); // 'abc'
// toUpperCase 转大写
console.log(str.toUpperCase()); // 'ABC'
```

#### 操作方法
``` js
var str = 'abcdefg';

// 字符串截取之 substr(indexStrar, [strLength])
//提取一个字符串的一部分，并返回一新的字符串

//截取从b开始的3个字符
console.log(str.substr(1, 3)); // 'bcd'
//截取从b开始的所有字符
console.log(str.substr(1)); // 'bcdefg'

// 字符串截取之 substring(indexStart, [indexEnd])
//提取一个字符串的一部分，并返回一新的字符串

//截取从b开始的3个字符
console.log(str.substring(1, 1 + 3)); // 'bcd'
//截取从b开始的所有字符
console.log(str.substring(1)); // 'bcdefg'

//字符串截取之 slice(indexStart, [indexEnd]),
//提取一个字符串的一部分，并返回一新的字符串

//截取从b开始的3个字符
console.log(str.slice(1, 1 + 3)); // 'bcd'
console.log(str.slice(1)); // 'bcdefg'

```

#### 匹配&替换
``` js
var str = 'abcabc';

// 替换到的第一个
console.log(str.replace('a', '饿了')); // '饿了bcabc'
//替换全部
console.log(str.replace(/a/g, '饿了')); // 饿了bc饿了bc

// 匹配字符串，返回匹配到的数组结果
console.log(str.match('a')); // ['a']
console.log(str.match(/a/g)); // ['a', 'a']
```

#### locleCompare()方法
比较两个字符串的顺序
`str1.localCompare(str2)`,如果`str1 > str2`,那么返回`1`。如果`str1 == str2`，那么返回`0`。如果`str1 < str2`，那么返回`-1`。

::: tip
`localCompare()`和直接比较字符串(str1 > str2)的差别在于
    * localCompare()考虑了本地排序规则
    * 而直接比较，只是按照`charCode`的返回值进行比较。而这种比较可能会和本地文化产生差异。
:::

适用的场景，字典排序，名称排序。例子：
``` js
var array = ['白鸽', '麻雀', '大象', '狗', '猫', "鸡"];

array = array.sort(function(item1, item2) {
    return item1.localeCompare(item2);
});
```

#### 全局方法 encodeURI() & encodeURIComponent()
两个方法都是对字符串进行编码，并且返回一个新的字符串。区别在于
* encodeURI 
    * 会替换所有字符，但是不包括 `; , / ? : @ & = + $ - _ . ! ~ * ' ( ) #`
    * 通常，get或者post请求中的URL中有`& + =`，但是这些不会被编码，建议使用`encodeURIComponent`
* encodeURIComponent
    * 转译除了字母，数字，`( ) . ! ~ * ' - _`之外所有的字符

#### eval()方法
计算传入的字符串，并且执行其中的js代码。
