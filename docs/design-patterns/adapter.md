# 适配器模式(Adapter)

* 也称包装样式或者包装(wrapper)
* 是作为两个不兼容的接口之间的桥梁，比如，读卡器作为内存卡和电脑之间的适配器

## 优点

* 可以让任何两个没有关联的类一起运行
* 提高了类的复用
* 增加了类的透明度
* 灵活性好

## 缺点

* 过多地使用适配器，会让系统非常零乱，不易整体进行把握

## 例子

``` js
// 原始方法
function play(mp3Fle) {
    console.log(`正在播放${mp3Fle}`)
}

// 原始调用
let fileMp3 = '后来.mp3';
play(file);

// 现在系统多了一种格式
let fileWma = '后来.wam';

// 直接调用播放，格式无法识别,从而不能播放

// 定义适配器
function newPlay(file) {
    // 文件是转换
    file = `${file}.mp3`;

    play(file)
}

// 适配后调用
newPlay(fileWma);

```
