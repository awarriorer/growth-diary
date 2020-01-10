# 过滤器模式(Filter)

过滤器模式（Filter Pattern）或标准模式（Criteria Pattern）是一种设计模式，这种模式允许开发人员使用不同的标准来过滤一组对象，通过逻辑运算以解耦的方式把它们连接起来

## 例子

``` js
class Filter {
    constructor(numbers) {
        this.numbers = numbers;
        this.filters = [];
    }

    // 获取数据
    getData(){
        let arr = [];

        for(let i = 0; i < this.numbers.length; i++){
            let num = this.numbers[i];

            if(this.doFilter(num)){
                arr.push(num);
            }
        }

        return arr;
    }

    // 过滤器执行
    doFilter(num){
        for(let i = 0; i < this.filters.length; i++){
            let item = this.filters[i];
            let handle = item.handle;

            if(handle(num) === false){
                return false;
            }
        }

        return true;
    }

    // 注册过滤器
    regiesterFilter(name, handle){
        this.filters.push({
            name: name,
            handle: handle
        })
    }

    // 删除过滤器
    removeFilter(name){
        let index = this.filters.findIndex((item) => {
            return item.name === name
        })

        if(index !== -1){
            this.filters.splice(index, 1)
        }
    }
}

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let filterNum = new Filter(arr);

// 添加过滤器，输出大于2的数字
filterNum.regiesterFilter('大于2', function(n){
    return n > 2;
})

// 添加过滤器，输出能被2整除的数字
filterNum.regiesterFilter('整除2', function(n){
    return n % 2 === 0;
})

console.log(filterNum.getData()) // [4, 6, 8]
```
