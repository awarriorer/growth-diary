### Cookie & storage
---------
关于本地存储数据

#### Cookie
``` js
// 判断当前页面是否启用了cookie,返回一个boolean
console.log(navigator.cookieEnabled); 

/*
* 查cookie
* 返回一个以字符串，其中每一条cookie通过';'分割
*/
var allCookie = document.cookie;

console.log(allCookie);

/*
* 添加,更改cookie
* document.cookie = 'key=value;path=path;domain=domain;max-age=max-age-in-seconds;expires=data-in-GMTString-format;secure=bollean'
* 其中：
    name: 存储到cookie的名字
    value: 存储到cookie的值，这个值不能有逗号、分号或者空格；建议使用encodeURIComponent()
    domain: 存储的域名，只能时当前域名或者主域名，默认当前域名,跨子域名可以通过这个特性来获取登陆信息
    path: 存储的位置，默认为当前位置，一般设置为'/'
    max-age: 相对过期时间，单位为秒，如一天就是：24 * 60 * 60;如果设置为0，那么关闭浏览器后就会消失
    expires: 绝对过期时间，如一天后过期 (new Date((new Date).getTime() + 24 * 60 * 60 * 1000)).toUTCString
    secure: 设置cookie只通过https传输，默认为fasle
*/
document.cookie = `name=uncle-yang;domain=uncle-yang.com;path=/;max-age=${24 * 60 * 60 * 1000};`

//删
document.cookie = `name=;domain=uncle-yang.com;path=/;max-age=0;expires=Thu, 01 Jan 1970 00:00:00 GMT`
```

#### LocalStorage
持久化存储数据。
``` js
//添加，更改
localStorage.setItem('name', 'uncle-yang');

//删除
localStorage.removeItem('name');

//清空所有
localStorage.clear();

//查
let name = localStorage.getItem('name');

/*
* 监听localStorage变化
* 当pageA改变localStorage中的值后，pageB可以监听到，但是pageA监听不到
**/
window.addEventListener('storage', function(e){
    console.log(e.key, e.oldValue, e.newValue);
}, true);

//当前浏览器的最大容量
function getLocalStorageMaxSize(error) {
    if (!localStorage) {
        return 0;
    }

    var max = 10 * 1024 * 1024, //预设置为10M
            i = 64,
            string1024 = '',
            string = '',
            testKey = 'size-test-' + Math.random().toString(),//generate a random key
            minimalFound = 0,
            error = error || 25e4;

    // fill a string with 1024 symbols / bytes    
    while (i--) {
        string1024 += 1e16
    };

    i = max / 1024;

    // fill a string with 'max' amount of symbols / bytes    
    while (i--) {
        string += string1024
    };

    i = max;

    // binary search implementation
    while (i > 1) {
        try {
            localStorage.setItem(testKey, string.substr(0, i));
            localStorage.removeItem(testKey);

            if (minimalFound < i - error) {
                minimalFound = i;
                i = i * 1.5;
            }
            else break;
        } catch (e) {
            localStorage.removeItem(testKey);
            i = minimalFound + (i - minimalFound) / 2;
        }
    }

    return minimalFound;
}

//获取剩余空间
function getLocalStorageAvailableSize(){
    if(!localStorage){
        return 0;
    }

    let maxSize = getLocalStorageMaxSize();
    let size = 0;
    
    for(let key in localStorage){
        if(localStorage.hasOwnProperty(key)){
            size += localStorage.getItem(key).length;
        }
    }

    return maxSize - size;
}
```

#### SessionStorage
sessionStorage 里面的数据在页面会话结束时会被清除。页面会话在浏览器打开期间一直保持，并且重新加载或恢复页面仍会保持原来的页面会话。在新标签或窗口打开一个页面时会在顶级浏览上下文中初始化一个新的会话。
``` js
//增
sessageStorage.setItem('name', 'uncle-yang');

//删
sessionStorage.remove('name');

//清空
sessionStorage.clear();

//查
sessionStorage.getItem('name');
```

#### Cookie & Storage 差异

|项目|cookie|localStorage|sessionStorage|备注|
|----|----|----|----|-----|
|最大空间|4096字节|5M|5M||
|最大数量|每个域名30个-50个|无限制|无限制||
|过期时间|可设置|永远有效|页面卸载后失效||
|跟随请求|是|否|否||
|同源策略|主、子域名、多标签页可共享|本域名、多标签页共享|本域名本页面共享||
|变化监听|不支持|支持|不支持|

#### 除了上述的存储方式，还有web SQL