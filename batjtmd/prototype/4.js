const grandpa = { hobby: "钓鱼" };
const father = { job: "工程师" };
Object.setPrototypeOf(father, grandpa);

const me = {};
Object.setPrototypeOf(me, father);

console.log(me.hobby); // 试试输出什么？ 
// 答案是 钓鱼