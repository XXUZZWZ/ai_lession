//入口证明
//console.log("羡慕");
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "sk-rlibvonzlwyvtvtfnbbhqvppsydllocfjampgxpdrljmnvay",
  baseURL: "https://api.siliconflow.cn/v1",
});

const response = await openai.completions.create({
  model: "Qwen/Qwen2.5-7B-Instruct",
  prompt: `
  帮我给高三生写一份祝福语
  `,
  max_tokens: 256,
  temperature: 0.1,
});

console.log(response);
