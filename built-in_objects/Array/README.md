数组几个具有遍历性质的方法：  
`forEach`，`map`，`filter`  
都接收两个参数：
1. callbackFn  
调用方法的数组中的元素所要执行的回调函数，其接收三个参数：
* element 当前访问到的元素
* index 当前访问到的元素索引
* array 调用数组本身
2. thisArg  
用作执行回调函数时的this值。方法具有通用性，只期望this的值具有length属性和整数键属性