### Math
-------

Math 是一个内置对象， 它具有数学常数和函数的属性和方法。不是一个函数对象。


#### 常用到的属性和方法
``` js
// 圆周率, 
console.log(Math.PI); // 3.141592653589793

//绝对值
console.log(Math.abs(-4)); // 4
console.log(Math.abs(4)); // 4

// 四舍五入
console.log(Math.round(3.1));//3
console.log(Math.round(3.5));//4
//向上取整数
console.log(Math.ceil(3.1)); // 4
//向下取整
console.log(Math.floor(3.1)); // 3
//只取整数部分
console.log(Math.trunc(3.1)); // 3


// 三角函数 -- 正弦, sin(x:弧度), 对比斜,返回-1到1的数值
console.log(Math.sin(1)); // 
// 三角函数 -- 余弦, cos(x:弧度), 对比斜, 返回-1到1的数值
console.log(Math.cos());
// 三角函数 -- 正切, tan(x:弧度)), 对比斜
console.log(Math.tan());


// 最大值
console.log(Math.max(1, 2, 3, 4, 5)); // 5
//最小值
console.log(Math.min(1, 2, 3, 4, 5)); // 1

//随机数
console.log(Math.random()); // 返回一个0-1的随机数
```