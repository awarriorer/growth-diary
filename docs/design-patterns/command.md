# 命令模式

命令模式（Command Pattern）是一种数据驱动的设计模式。请求以命令的形式包裹在对象中，并传给调用对象。调用对象寻找可以处理该命令的合适的对象，并把该命令传给相应的对象，该对象执行命令

## 优点

* 降低了系统耦合度
* 新的命令可以很容易添加到系统中去
* 可以比较容易地设计一个命令队列和宏命令


## 缺点

* 使用命令模式可能会导致某些系统有过多的具体命令类。因为针对每一个命令都需要设计一个具体命令类，因此某些系统可能需要大量具体命令类，这将影响命令模式的使用。

## 使用场景

* 系统需要将请求调用者和请求接收者解耦，使得调用者和接收者不直接交互
* 系统需要在不同的时间指定请求、将请求排队和执行请求
* 系统需要支持命令的撤销(Undo)操作和恢复(Redo)操作

## 命令模式包含的角色

* Receiver: 命令接收者模式，命令传递到这里执行对应的操作
* Command: 需要执行的命令都在这里声明
* Invoker: 接收到命令，并执行命令，也就是命令的发动者和调用者

## 例子

``` js
class Command{
    constructor(){
        this.counter = 0;
        this.commandCfg = {};
        this.runnerArr = [];
        this.isRunning = false;

        this.regiesterCommand();
    }

    invoker(command, ...opt){
        if(!this.commandCfg.hasOwnProperty(command)){
            return new Error(`没有该命令: ${command}`)
        }

        this.runnerArr.push({
            command: command,
            opt: opt
        });

        if(!this.isRunning){
            this.runCommand()
        }
    }

    add(x = 1){
        console.log('执行+', x);
        return this.counter += x;
    }

    reduce(x = 1){
        return this.counter -= x;
    }

    regiesterCommand(){
        this.commandCfg[`add`] = this.add
        this.commandCfg[`reduce`] = this.reduce
    }

    getCounter(){
        return this.counter;
    }

    runCommand(){
        let arr = this.runnerArr;

        this.isRunning = true;

        for(let i = 0; i < arr.length; i++){
            let item = arr[i];

            this.commandCfg[item.command].apply(this, item.opt);

            arr.splice(i, 1);
            i--;
        }

        this.isRunning = false;
    }
}

// test
let com = new Command();

com.invoker('add'); // +1
com.invoker('add', 2); // +2

console.log(com.getCounter()) // 3

com.invoker('multiplication'); // Error: 没有该命令: multiplication

com.invoker('reduce', 1); // 1

console.log(com.getCounter()) // 2
```
