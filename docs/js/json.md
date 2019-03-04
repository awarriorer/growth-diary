### JSON
-------

window下的内置对象，JSON只有两个方法，把对象转化成json字符串，把json字符串转化成js对象。
``` js
var obj = {
    name: 'uncle-yang',
    sex: 'man'
};

var ObjJson = JSON.stringify(obj);

console.log(ObjJson); // {"name":"uncle-yang","sex":"man"}

console.log(JSON.parse(ObjJson)); // 输出和obj一样的结构对象，但是和obj是两个不同的对象。

```