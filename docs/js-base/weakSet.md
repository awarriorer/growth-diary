### WeakSet
-------

和[Set](./set.md)的功能一样基本一样，但是必须存储弱保持对象。

#### 基本用法
``` js
var ws = new WeakSet();
var obj = {};
var foo = {};

ws.add(window);
ws.add(obj);

ws.has(window); // true
ws.has(foo);    // false, 对象 foo 并没有被添加进 ws 中 

ws.delete(window); // 从集合中删除 window 对象
ws.has(window);    // false, window 对象已经被删除了

ws.clear(); // 清空整个 WeakSet 对象

```