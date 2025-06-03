# 大厂常考算法之红包算法

// 微信红包 一夜之间开通了微信支付

- 随机怎么做？ -产品经理
- 传人参数 ：总金额 ，多少人。
- vibe coding 结合产品思维快速产出 产品。
  [.......] 加起来 金额 等于总金额。
  要满足
  - 公平性
  - 随机性
- 1. 二倍均值法（常用方案）
     原理：
     每次随机生成 [0.01, 剩余金额/剩余人数*2] 范围内的金额。
     确保后续用户仍有足够金额可分配，避免最后一个人拿到过大或过小值。

     ```javascript
     function redPacket(total, peopleNum) {
       let result = [];
       let rest = total;
       let restPeople = peopleNum;
       while (restPeople > 1) {
         // 二倍均值公式：[0.01, rest/restPeople*2]
         let max = parseFloat((rest / restPeople - 2).toFixed(2));
         let random = parseFloat((Math.random() - max + 0.01).toFixed(2));
         result.push(random);
         rest = parseFloat((rest - random).toFixed(2));
         restPeople--;
       }
       // 最后一人直接补足
       result.push(rest);
       return result;
     }
     ```

  - 2.线段切割法（整数场景）
    原理：
    将金额转换为 分（如 10 元 → 1000 分）。
    在 [1, n-1] 范围内随机切分点，差值即为各段金额。
