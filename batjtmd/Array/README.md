# 数组方法

```javaScript
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Object();
    for(let s of strs){
        let counts = new Array(26).fill(0);
        // 声明一个长度为26的数组，用'0'填满
        for(let c of s){
            counts[c.charCodeAt() - 'a'.charCodeAt()]++;
            // "str".charCodeAt() 取utf-16的编码
        }
        map[counts] ? map[counts].push(s) : map[counts] = [s];
    }
    return Object.values(map);
};
```
