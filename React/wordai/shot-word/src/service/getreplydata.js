export async function getReplyData(imgData) {
  const picPrompt = `
  分析图片内容，找出最能描述图片的一个英文单词，尽量选择更简单的A1~A2的词汇。
  返回JSON数据：
  {
    "image_discription": "图片描述",
    "representative_word": "图片代表的英文单词",
    "example_sentence": "结合英文单词和图片描述，给出一个简单的例句",
    "explaination": "结合图片解释英文单词, 段落以Look at...开头，将段落分句，每一句单独一行，解释的最后给一个日常生活有关的问句？",
    "explaination_replys": ["根据explaination给出的回复1", "根据explaination给出的回复2"]
  }
  `;
  const endpoint = "https://api.moonshot.cn/v1/chat/completions";
  const headers = {
    Authorization: `Bearer ${import.meta.env.VITE_KIMI_API_KEY}`,
    "Content-Type": "application/json",
  };

  const response = await fetch(endpoint, {
    method: "POST",
    headers: headers,
    body: JSON.stringify({
      // vision 可视 图片
      model: "moonshot-v1-8k-vision-preview",
      messages: [
        {
          role: "user",
          content: [
            {
              type: "image_url", //  base64图片
              image_url: { url: imgData },
            },
            {
              type: "text",
              text: picPrompt,
            },
          ],
        },
      ],
    }),
  });
  const data = await response.json();
  const ReplyData = JSON.parse(data.choices[0].message.content);
  console.log(ReplyData);
  return ReplyData;
}
