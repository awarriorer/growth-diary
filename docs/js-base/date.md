### Date
-------

日期对象，来获取日期信息。Date对象基于1970年1月1日（世界标准时间）起的毫秒数。

#### 常用方法
``` js
// 创建date实例
var date = new Date();

//获取：年
date.getFullYear(); // 
//获取：月,从0开始计算，即0表示1月
date.getMonth(); // 
//获取：日
date.getDate(); //
//获取：时
date.getHours();
//获取：分
date.getMinutes();
//获取：秒
date.getSeconds();
//获取：星期几,0表示星期天，
date.getDay();

//获取一个时间的格林威治时间数值
date.getTime();


// 指定时间实例化对象
//根据格林威治时间数值，
var data_a = new Date(date.getTime());

// 根据具体时间，实例话时间对象
var data_b = new Date('2017-06-03 12:24:50');

// 也可以创建实例后，调用方法改变实例时间
var data_c = new Date();

//设置：年
data_c.setFullYear(); // 
//设置：月,从0开始计算，即0表示1月
data_c.setMonth(); // 
//设置：日
data_c.setDate(); //
//设置：时
data_c.setHours();
//设置：分
data_c.setMinutes();
//设置：秒
data_c.setSeconds();

// 或者
data_c.setTime(date.getTime());

```