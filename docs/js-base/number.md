### Number
js中数字类型Number。

#### 常用到的方法
``` js
// 判断当前值不是一个数字
isNaN('6'); // false, 发生隐式转换
isNaN(6); // false
isNaN('6a'); // true
isNaN('a6'); // true
isNaN('abc'); // true
isNaN({});// true
isNaN(function(){}); // true
isNaN(undefined); // true
isNaN(null); // true

//把一个字符串解析成整数,
parseInt('3'); // 3
parseInt('3.14'); // 3
parseInt('3.14a'); // 3
parseInt('a3'); // NaN
parseInt('a'); // NaN
parseInt({}); // NaN
parseInt(function); // NaN
parseInt(undefined); // NaN
parseInt(null); // NaN

//parseInt默认是以10进制来解析传入的值，如果需要改成2进制或者n进制，可以传递第二个参数。
parseInt('101', 2); // 5
//如果传入的数值不合法，那么将返回NaN
parseInt('5', 2); // NaN


//把一个字符串解析成浮点数
parseFloat('3'); // 3
parseFloat('3.14'); // 3.14
parseFloat('3.14a'); // 3.14
parseFloat('a3'); // NaN
parseFloat('a'); // NaN
parseFloat({}); // NaN
parseFloat(function); // NaN
parseFloat(undefined); // NaN
parseFloat(null); // NaN


// toFixed(n > 0 && n < 20) 格式化数字,返回字符串
parseFloat(2).toFixed(2); // '2.00'
parseFloat('3.141592653').toFixed(2); // '3.14'
```