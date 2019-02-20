### Array
-------

Array,数组集合

#### 查
``` js
var arr = [2, 3, 4, 2, 3, 4];

// 获取数组得长度
console.log(arr.length); // 6
//访问某一个值, 下标从0开始
console.log(arr[1]); // 3


// 获取第一个元素的下标, indexOf(searchElement, fromIndex)
console.log(arr.indexOf(3)); // 1
// 获取第一个元素的下标，从第三个角标开始查找
console.log(arr.indexOf(3, 3)); // 4

//从最后一个位置开始搜索,lastIndexOf(searchElement, fromIndex)
console.log(arr.lastIndexOf(3)); // 4
//最倒数第三个位置开始查找
console.log(arr.lastIndexOf(3, arr.length - 3)); // 1

// 搜索大于2的值,如果有那么返回对应的值，如果没有返回undefined
console.log(arr.find(function(item, index, array){
    return item > 2;
})); // 这里返回只会返回3，只会返回满足条件的第一个值

// 搜索大于2的值,如果有那么返回对应值的下标，如果没有返回-1
console.log(arr.findIndex(function(item, index, array){
    return item > 2;
})); // 这里返回只会返回1，只会返回满足条件的第一个值


// 判断数组中是否存在某个值, includes(searchElement, fromIndex)
console.log(arr.includes(2)); // true
console.log(arr.includes(2, 2)); // true
console.log(arr.includes(2, 4)); // false


//遍历数组，forEach
arr.forEach(function(item, index, thisArr){
    console.log(item); // 依次输出：2, 3, 4, 2, 3, 4
    console.log(index); // 依次输出：0, 1, 2, 3, 4, 5, 6
});

//遍历数组，for
for(var i = 0; i < arr.length; i++){
    var item = arr[i];

    console.log(item); // 依次输出：2, 3, 4, 2, 3, 4
    console.log(i); // 依次输出：0, 1, 2, 3, 4, 5, 6
}

/*
 * reduce(callback(accumulator, current, currentIndex, array), initialValue)
 * accumulator: 累计器,可以理解成一个callback内的一个全局遍历
 * currentValue: 当前值
 * currentIndex: 当前值的索引
 * array: 当前数组
 * initialValue: 可以给最终结果一个初始值
*/
var sum = arr.reduce(function(accumulator, current, currentIndex, array){
    // 返回的这个值，将赋值到accumulator，等于accumulator == accumulator + current
    return accumulator + current;
}, 0);

console.log(sum); // 9

/*
 * slice(beginIndex, endIndex)，
 * beginIndex:开始截取的下标
 * endIndex:结束截取的下标，注意，这里不包括endIndex下标对应的值
 * 截取数组部分或者全部，并且返回新数组，可以实现对原数组的浅拷贝
*/
console.log(arr.slice(3)); // [2, 3, 4]
console.log(arr.slice(3, 5)); // [2, 3]
console.log(arr.slice()); // [2, 3, 4, 2, 3, 4]，完全浅拷贝
```

#### 改
``` js
var arr = [2, 3, 4];

// 改变某一个值
arr[1] = 1;

console.log(arr); // [2, 1, 4];

//通过filter过滤一些值，并且返回新的数组
var arr_a = arr.filter(function(item, index, array){
    // 若返回值为true，那么这个item将添加到新的数组中，
    return item >= 3;
});

console.log(arr_a); // [4]

//通过map处理一些值，并且返回到新数组
var arr_b = arr.map(function(item, index, array){
    // 这里返回的值，将作为新数组的元素，若没有返回，则为undefined
    return item * 10;
});

console.log(arr_b); // [20, 10, 4]

/**
 * 排序 -- reversed，将数组中元素的位置颠倒
 * 第一个数组元素成为最后一个数组元素，最后一个数组元素成为第一个。
 */
console.log(arr.reverse()); // [4, 3, 2]
console.log(['1', 2, 'wo', '饿了', 3, 1].reverse()); // [1, 3, "饿了", "wo", 2, "1"]

/**
 * sort(compare(firstElement, secondElement)) 原地排序，将直接改变原数组
 * firstElement: 要比较的第一个值
 * secondElement: 要比较的第二个值
 * compare: 比较的函数，且返回一个数字
 *      1.若返回的值小于0: 那么firstElement会排列到secondElement之前
 *      2.若返回的值等于0: 那么firstElement和secondElement位置不变
 *      3.若返回的值大于0: 那么secondElement会排列到firstElement之前
 */

// 正序
console.log([1,3,2,7,5,6].sort((firstEl, secondEl) => {
    if(firstEl > secondEl){
        return 1;
    }else{
        return -1;
    }
    // 等同于
    //return firstEl - secondEl;
})); // [1, 2, 3, 5, 6, 7]

//倒序
console.log([1,3,2,7,5,6].sort((firstEl, secondEl) => {
    if(firstEl > secondEl){
        return -1;
    }else{
        return 1;
    }
    //等同于
    //return secondEl - firstEl;
})); // [7, 6, 5, 3, 2, 1]
```
#### 增
``` js
var arr = [2, 3];

//可以直接根据脚标加入一个值, 
arr[2] = 4;

console.log(arr); //[2, 3, 4];

//添加元素到数组末尾
arr.push(5); // [2, 3, 4, 5];

// 添加元素到数组头部
arr.unshift(a); // [1, 2, 3, 4, 5]

// concat,该函数返回的是新数组，并不会改变原数组
console.log(arr.concat(['you', 'me', 'he'])); // [2, 3, 4, "you", "me", "he"]
```
::: tip
若加入一个值的脚标 > length, 如 arr[6] = 6; 那么arr.length = 6; 且没有赋值的元素为undefined，arr[4] = undefined

``` js
var arr = [1, 2];

arr[6] = 6;
console.log(arr[6]); // 6
console.log(arr.length); // 7
console.log(arr[3]); // undefined
```
:::

#### 删
``` js
var arr = [1, 2, 3, 4, 5];

//从数组末尾删除一个元素
arr.pop(); // [1, 2, 3, 4]

//从数组头部删除一个元素
arr.shift(); // [2, 3, 4]
```

#### 操作
``` js
/**
 * splice(startIndex, deleteCount, [item1], [item2], [item3], [……]])
 * 通过删除现有元素和/或添加新元素来修改数组,并以数组返回原数组中被修改的
 * startIndex: 开始的脚标
 * deleteCount: 要删除的个数，注意是个数，不是位置！
 * 
 * 可以通过该方法实现对数组的，增，删，改
 */

var arr = [1, 2, 3, 4];

//增加, 在角标为1的地方(原来2所在的位置)，插入7, 8, 9
arr.splice(1, 0, 7, 8, 9);
console.log(arr); //[1, 7, 8, 9, 2, 3, 4]

//删除
arr.splice(1, 3);
console.log(arr); //[1, 2, 3, 4]

//更改
arr.splice(1, 3, 8, 9, 10);
console.log(arr); // [1, 8, 9, 10]


// 如果不传参数，那么将不处理原数组
var arr_a = [1, 2, 3, 4]
arr_a.splice();
console.log(arr_a); // [1, 2, 3, 4]

// 如果值传入startIndex,那么将删除从startIndex以后的所有值
var arr_b = [1, 2, 3, 4]
arr_b.splice(2);
console.log(arr_b); // [1, 2]

//如果传入的startIndex大于数组长度，且没有传替换参数，那么不处理原数组，
var arr_c = [1, 2, 3, 4]
arr_c.splice(7);
console.log(arr_c); // [1, 2, 3, 4]

//如果传入的startIndex大于数组长度，但是传入了替换参数，那么将把新追加的元素追加到愿数组最后
var arr_d = [1, 2, 3, 4]
arr_d.splice(7, 4, 6, 7, 8);
console.log(arr_d); // [1, 2, 3, 4, 6, 7, 8]

//如果替换参数比deleteCount的个数多，那么将删除后再插入
var arr_e = [1, 2, 3, 4]
arr_e.splice(1, 1, 6, 7, 8);
console.log(arr_e); // [1, 6, 7, 8, 3, 4]
```

#### 判断
``` js
Array.isArray([1, 2, 3]);  
// true
Array.isArray({foo: 123}); 
// false
Array.isArray("foobar");   
// false
Array.isArray(undefined);  
// false
```

#### 转字符串
``` js
var elements = ['Fire', 'Wind', 'Rain'];

console.log(elements.join());
//"Fire,Wind,Rain"

console.log(elements.join(''));
//"FireWindRain"

console.log(elements.join('-'));
//"Fire-Wind-Rain"
```

#### 将类似数组转化成一个数组
``` js
console.log(Array.from('abc')); // ["a", "b", "c"]
```