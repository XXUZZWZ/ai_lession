const foods =  [
    {"名称": "北京烤鸭", "类型": "中式"},
    {"名称": "小笼包", "类型": "中式"},
    {"名称": "火锅", "类型": "中式"},
    {"名称": "麻婆豆腐", "类型": "中式"},
    {"名称": "宫保鸡丁", "类型": "中式"},
    {"名称": "担担面", "类型": "中式"},
    {"名称": "兰州拉面", "类型": "中式"},
    {"名称": "白切鸡", "类型": "中式"},
    {"名称": "糖醋排骨", "类型": "中式"},
    {"名称": "扬州炒饭", "类型": "中式"},
    {"名称": "寿司", "类型": "日式"},
    {"名称": "天妇罗", "类型": "日式"},
    {"名称": "拉面", "类型": "日式"},
    {"名称": "乌冬面", "类型": "日式"},
    {"名称": "咖喱饭", "类型": "日式"},
    {"名称": "韩式烧烤", "类型": "韩式"},
    {"名称": "泡菜", "类型": "韩式"},
    {"名称": "石锅拌饭", "类型": "韩式"},
    {"名称": "冷面", "类型": "韩式"},
    {"名称": "意大利面", "类型": "西式"},
    {"名称": "比萨", "类型": "西式"},
    {"名称": "汉堡", "类型": "西式"},
    {"名称": "牛排", "类型": "西式"},
    {"名称": "法式焗蜗牛", "类型": "西式"},
    {"名称": "土耳其烤肉", "类型": "中东式"},
    {"名称": "沙威玛", "类型": "中东式"},
    {"名称": "印度飞饼", "类型": "印式"},
    {"名称": "咖喱角", "类型": "印式"},
    {"名称": "泰式绿咖喱", "类型": "东南亚式"},
    {"名称": "越南春卷", "类型": "东南亚式"},
    {"名称": "麻辣烫", "类型": "中式快餐"},
    {"名称": "黄焖鸡米饭", "类型": "中式快餐"},
    {"名称": "蛋炒饭", "类型": "中式快餐"},
    {"名称": "煎饼果子", "类型": "中式快餐"},
    {"名称": "肉夹馍", "类型": "中式快餐"},
    {"名称": "酸辣粉", "类型": "中式快餐"},
    {"名称": "螺蛳粉", "类型": "中式快餐"},
    {"名称": "凉皮", "类型": "中式快餐"},
    {"名称": "热干面", "类型": "中式快餐"},
    {"名称": "炸酱面", "类型": "中式快餐"},
    {"名称": "盖浇饭", "类型": "中式快餐"},
    {"名称": "关东煮", "类型": "日式快餐"},
    {"名称": "照烧鸡排", "类型": "日式快餐"},
    {"名称": "塔斯汀汉堡", "类型": "西式快餐"},
    {"名称": "肯德基吮指原味鸡", "类型": "西式快餐"},
    {"名称": "麦当劳巨无霸", "类型": "西式快餐"},
    {"名称": "必胜客披萨", "类型": "西式快餐"},
    {"名称": "全家便利店便当", "类型": "便利店快餐"},
    {"名称": "7-11三明治", "类型": "便利店快餐"},
    {"名称": "星巴克拿铁", "类型": "饮品"},
    {"名称": "喜茶多肉葡萄", "类型": "奶茶"},
    {"名称": "奈雪の茶霸气橙子", "类型": "奶茶"},
    {"名称": "蜜雪冰城柠檬水", "类型": "饮品"},
    {"名称": "瑞幸生椰拿铁", "类型": "饮品"},
    {"名称": "康师傅红烧牛肉面", "类型": "方便面"},
    {"名称": "统一老坛酸菜牛肉面", "类型": "方便面"},
    {"名称": "辛拉面", "类型": "方便面"},
    {"名称": "火鸡面", "类型": "方便面"},
    {"名称": "自热火锅", "类型": "速食"},
    {"名称": "开小灶米饭", "类型": "速食"},
    {"名称": "海底捞自热火锅", "类型": "速食"},
    {"名称": "老坛酸菜鱼", "类型": "川菜"},
    {"名称": "去京东闪购看看吧", "类型": "虚拟美食"},
    {"名称": "回锅肉", "类型": "川菜"},
    {"名称": "夫妻肺片", "类型": "川菜"},
    {"名称": "去点拼好饭吧，别的也不舍得吃", "类型": "虚拟美食"},
    {"名称": "口水鸡", "类型": "川菜"},
    {"名称": "东坡肉", "类型": "江浙菜"},
    {"名称": "西湖醋鱼", "类型": "江浙菜"},
    {"名称": "龙井虾仁", "类型": "江浙菜"},
    {"名称": "打工崽吗？还吃呢，老板大饼没吃饱啊", "类型": "虚拟美食"},
    {"名称": "松鼠桂鱼", "类型": "江浙菜"},
    {"名称": "叉烧包", "类型": "粤式点心"},
    {"名称": "肠粉", "类型": "粤式点心"},
    {"名称": "虾饺", "类型": "粤式点心"},
    {"名称": "单身狗吃点狗粮就行了", "类型": "反正你们对国家贡献不了生育率"},
    {"名称": "烧鹅", "类型": "粤式点心"},
    {"名称": "云吞面", "类型": "粤式点心"},
    {"名称": "西北风", "类型": "虚拟美食"},
    {"名称": "后悔药", "类型": "虚拟美食"},
    {"名称": "恐龙肉", "类型": "虚拟美食"},
    {"名称": "不是哥们，你不会真不知道自己想吃啥吧", "类型": "这辈子有了"},
    {"名称": "外星人烧烤", "类型": "虚拟美食"},
    {"名称": "时间胶囊汤", "类型": "虚拟美食"},
    {"名称": "黑洞冰淇淋", "类型": "虚拟美食"},
    {"名称": "宇宙能量粥", "类型": "虚拟美食"},
    {"名称": "买新手机啦，旧手机怎么办？", "类型": "撇了"},
    {"名称": "魔法学院吐司", "类型": "虚拟美食"},
    {"名称": "穿越时空拉面", "类型": "虚拟美食"},
    {"名称": "量子力学煎饼", "类型": "虚拟美食"},
    {"名称": "赛博朋克汉堡", "类型": "虚拟美食"},
    {"名称": "火星土豆泥", "类型": "虚拟美食"},
    {"名称": "月球奶昔", "类型": "虚拟美食"},
    {"名称": "知道为啥怎么多虚拟美食吗？", "类型": "骗你点击量"},
    {"名称": "银河咖啡", "类型": "虚拟美食"},
    {"名称": "平行世界薯条", "类型": "虚拟美食"},
    {"名称": "元宇宙披萨", "类型": "虚拟美食"},
    {"名称": "AI智能果汁", "类型": "虚拟美食"},
    {"名称": "机器人早餐", "类型": "虚拟美食"},
    {"名称": "没有随机到想要的，不会是因为预算不够吧", "类型": "虚拟美食"},
    {"名称": "星际战舰烧烤", "类型": "虚拟美食"},
    {"名称": "未来主义沙拉", "类型": "虚拟美食"},
    {"名称": "肯德基50元套餐", "类型": "西式快餐"},
    {"名称": "麦当劳20元超值套餐", "类型": "西式快餐"},
    {"名称": "华莱士鸡肉卷", "类型": "西式快餐"},
    {"名称": "达美乐比萨", "类型": "西式快餐"},
    {"名称": "一点点波霸奶茶", "类型": "奶茶"},
    {"名称": "书亦烧仙草", "类型": "奶茶"},
    {"名称": "CoCo都可珍珠奶茶", "类型": "奶茶"},
    {"名称": "还吃，收你的来了", "类型": "哪吒"},
    {"名称": "快乐柠檬芝士奶盖", "类型": "奶茶"}
  ]
const  advertisements = [
    {"名称": "买新手机啦，旧手机怎么办？", "类型": "撇了"},
    {"名称": "知道为啥怎么多虚拟美食吗？", "类型": "骗你点击量"},
    {"名称": "没有随机到想要的，不会是因为预算不够吧", "类型": "虚拟美食"},
    {"名称": "还吃，收你的来了", "类型": "哪吒"}
]
foods.push(...advertisements);

// 美食图片映射 - 为某些食物添加默认图片
const foodImages = {
  "中式": "https://img.freepik.com/free-photo/asian-food-with-fried-rice-with-sauce_23-2148236471.jpg",
  "西式": "https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg",
  "日式": "https://img.freepik.com/free-photo/fresh-sushi-with-soy-sauce_144627-1869.jpg",
  "韩式": "https://img.freepik.com/free-photo/bibimbap-korean-mixed-rice-dish-with-vegetable-meat_1150-42993.jpg",
  "东南亚式": "https://img.freepik.com/free-photo/thai-food-som-tum-papaya-salad_1150-35490.jpg",
  "中东式": "https://img.freepik.com/free-photo/arab-dish-kabsa-with-meat-vegetables_1150-36973.jpg",
  "印式": "https://img.freepik.com/free-photo/indian-butter-chicken-black-background_1150-43519.jpg",
  "虚拟美食": "https://img.freepik.com/free-vector/futuristic-food-floating-glowing-particles_23-2148964935.jpg"
};

document.addEventListener('DOMContentLoaded', () => {
  // 获取DOM元素
  const recommendBtn = document.getElementById('recommendBtn');
  const resultDiv = document.getElementById('result');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const shareBtn = document.querySelector('.share-btn');
  const clearAllBtn = document.querySelector('.clear-all-btn');
  
  // AI助手相关元素
  const openAIChatBtn = document.getElementById('openAIChat');
  const closeAIChatBtn = document.getElementById('closeAIChat');
  const aiChatModal = document.getElementById('aiChatModal');
  const chatMessages = document.getElementById('chatMessages');
  const userInput = document.getElementById('userInput');
  const sendBtn = document.getElementById('sendBtn');
  const suggestionChips = document.querySelectorAll('.suggestion-chip');
  
  let currentSelected = null; // 当前选中状态变量
  let currentFilter = 'all'; // 默认筛选条件为全部
  let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
  let chatHistory = []; // 用于保存对话历史

  // DeepSeek API配置
  const DEEPSEEK_API_URL = "https://api.deepseek.com/chat/completions";
  const DEEPSEEK_API_KEY = "sk-dd6b5670daca4dd7a548341c7f85d673"; // 这里应添加实际的API密钥
  
  // 使用ChatGPT的REST API替代
  // 注意：这是一个示例，实际使用时需要替换为有效的API密钥
  const OPENAI_API_URL = "https://api.openai.com/v1/chat/completions";
  const OPENAI_API_KEY = ""; // 这里应添加实际的API密钥

  // 更新心愿单显示
  function updateWishlistDisplay() {
    const wishlistDiv = document.getElementById('wishlist');
    
    if (wishlist.length === 0) {
      wishlistDiv.innerHTML = '';
      return; // 让CSS的empty伪元素发挥作用
    }
    
    wishlistDiv.innerHTML = wishlist.map((item, index) => `
      <div class="wishlist-item">
        <span>${item.名称}（${item.类型}）</span>
        <button class="remove-btn" data-index="${index}">×</button>
      </div>
    `).join('');
  }

  // 获取适合食物的图片URL
  function getFoodImageUrl(food) {
    // 首先尝试查找特定食物的图片
    if (foodImages[food.名称]) {
      return foodImages[food.名称];
    }
    // 然后尝试使用食物类型的默认图片
    else if (foodImages[food.类型]) {
      return foodImages[food.类型];
    }
    // 最后使用通用默认图片
    return "https://img.freepik.com/free-photo/delicious-food-black-board_144627-34643.jpg";
  }

  // 筛选食物列表
  function getFilteredFoods() {
    if (currentFilter === 'all') {
      return foods;
    } else {
      return foods.filter(food => food.类型.includes(currentFilter));
    }
  }

  // 随机推荐食物
  function recommendFood() {
    const filteredFoods = getFilteredFoods();
    
    // 如果筛选后没有食物，显示提示
    if (filteredFoods.length === 0) {
      resultDiv.innerHTML = `
        <div class="no-results">
          <i class="fas fa-exclamation-circle"></i>
          <p>没有找到符合条件的美食</p>
        </div>
      `;
      currentSelected = null;
      return;
    }
    
    // 随机选择一个食物
    const randomIndex = Math.floor(Math.random() * filteredFoods.length);
    currentSelected = filteredFoods[randomIndex];
    
    // 获取食物图片
    const foodImage = getFoodImageUrl(currentSelected);
    
    // 更新显示
    resultDiv.innerHTML = `
      <div class="food-card">
        <h2>${currentSelected.名称}</h2>
        <img src="${foodImage}" alt="${currentSelected.名称}" class="food-image">
        <p data-type="${currentSelected.类型.split(' ')[0]}">${currentSelected.类型}</p>
      </div>
    `;
  }

  // 监听推荐按钮点击事件
  recommendBtn.addEventListener('click', () => {
    recommendBtn.classList.add('clicked');
    setTimeout(() => {
      recommendBtn.classList.remove('clicked');
    }, 200);
    
    recommendFood();
  });

  // 监听筛选按钮点击事件
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // 移除所有按钮的active类
      filterButtons.forEach(b => b.classList.remove('active'));
      // 为当前按钮添加active类
      btn.classList.add('active');
      // 更新当前筛选条件
      currentFilter = btn.dataset.type;
      // 重置结果区域
      resultDiv.innerHTML = `
        <div class="default-state">
          <i class="fas fa-hamburger food-icon"></i>
          <p>点击按钮，发现美食灵感</p>
        </div>
      `;
      currentSelected = null;
    });
  });

  // 监听添加按钮点击事件
  document.querySelector('.add-btn').addEventListener('click', () => {
    if (currentSelected) {
      // 检查是否已经在心愿单中
      if (!wishlist.some(item => item.名称 === currentSelected.名称)) {
        wishlist.push(currentSelected);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        updateWishlistDisplay();
        
        // 显示添加成功提示
        const addBtn = document.querySelector('.add-btn');
        const originalText = addBtn.innerHTML;
        addBtn.innerHTML = '<i class="fas fa-check"></i> 已添加';
        addBtn.classList.add('added');
        
        setTimeout(() => {
          addBtn.innerHTML = originalText;
          addBtn.classList.remove('added');
        }, 2000);
      } else {
        // 已在心愿单中，显示提示
        const addBtn = document.querySelector('.add-btn');
        const originalText = addBtn.innerHTML;
        addBtn.innerHTML = '<i class="fas fa-info-circle"></i> 已在清单中';
        
        setTimeout(() => {
          addBtn.innerHTML = originalText;
        }, 2000);
      }
    }
  });

  // 监听分享按钮点击事件
  shareBtn.addEventListener('click', () => {
    if (currentSelected) {
      // 创建分享文本
      const shareText = `今天我想吃：${currentSelected.名称}（${currentSelected.类型}）- 来自"今天吃点啥？"美食推荐`;
      
      // 尝试使用Web Share API分享
      if (navigator.share) {
        navigator.share({
          title: '今天吃点啥？',
          text: shareText,
        })
        .catch(console.error);
      } else {
        // 如果不支持Web Share API，则复制到剪贴板
        navigator.clipboard.writeText(shareText)
          .then(() => {
            const shareBtn = document.querySelector('.share-btn');
            const originalText = shareBtn.innerHTML;
            shareBtn.innerHTML = '<i class="fas fa-check"></i> 已复制到剪贴板';
            
            setTimeout(() => {
              shareBtn.innerHTML = originalText;
            }, 2000);
          })
          .catch(console.error);
      }
    }
  });

  // 监听清空心愿单按钮点击事件
  clearAllBtn.addEventListener('click', () => {
    if (wishlist.length > 0) {
      if (confirm('确定要清空想吃清单吗？')) {
        wishlist = [];
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        updateWishlistDisplay();
      }
    }
  });

  // 监听删除按钮点击事件
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-btn')) {
      const index = parseInt(e.target.dataset.index);
      wishlist.splice(index, 1);
      localStorage.setItem('wishlist', JSON.stringify(wishlist));
      updateWishlistDisplay();
    }
  });

  // 初始化显示
  updateWishlistDisplay();

  // ======= AI助手功能 =======
  
  // 打开AI对话框
  openAIChatBtn.addEventListener('click', () => {
    aiChatModal.classList.add('active');
  });
  
  // 关闭AI对话框
  closeAIChatBtn.addEventListener('click', () => {
    aiChatModal.classList.remove('active');
  });
  
  // 点击模态窗口外部关闭
  aiChatModal.addEventListener('click', (e) => {
    if (e.target === aiChatModal) {
      aiChatModal.classList.remove('active');
    }
  });
  
  // 发送用户消息
  sendBtn.addEventListener('click', sendUserMessage);
  
  // 按下回车键发送消息
  userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendUserMessage();
    }
  });
  
  // 快捷提问按钮
  suggestionChips.forEach(chip => {
    chip.addEventListener('click', () => {
      userInput.value = chip.textContent;
      sendUserMessage();
    });
  });
  
  // 发送用户消息并获取AI回复
  function sendUserMessage() {
    const message = userInput.value.trim();
    if (!message) return;
    
    // 添加用户消息到聊天界面
    addMessageToChat('user', message);
    userInput.value = '';
    
    // 显示AI正在输入的指示器
    showTypingIndicator();
    
    // 构建对话历史
    chatHistory.push({ role: 'user', content: message });
    
    // 调用AI API获取回复
    getAIResponse(message);
  }
  
  // 添加消息到聊天界面
  function addMessageToChat(role, content) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${role}-message`;
    
    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    
    const icon = document.createElement('i');
    icon.className = role === 'user' ? 'fas fa-user' : 'fas fa-robot';
    
    avatar.appendChild(icon);
    
    const messageContent = document.createElement('div');
    messageContent.className = 'message-content';
    
    const paragraph = document.createElement('p');
    paragraph.textContent = content;
    
    messageContent.appendChild(paragraph);
    messageDiv.appendChild(avatar);
    messageDiv.appendChild(messageContent);
    
    chatMessages.appendChild(messageDiv);
    
    // 滚动到最新消息
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
  
  // 显示AI正在输入的指示器
  function showTypingIndicator() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'typing-indicator';
    typingDiv.id = 'typingIndicator';
    
    for (let i = 0; i < 3; i++) {
      const dot = document.createElement('span');
      typingDiv.appendChild(dot);
    }
    
    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
  
  // 移除输入指示器
  function removeTypingIndicator() {
    const typingIndicator = document.getElementById('typingIndicator');
    if (typingIndicator) {
      typingIndicator.remove();
    }
  }

  // 获取来自AI的响应
  function getAIResponse(userMessage) {
    // 创建系统消息，为AI提供上下文
    const systemMessage = {
      role: 'system',
      content: `你是一个美食推荐AI助手，可以根据用户的口味偏好、食材限制、心情等因素推荐适合的美食。
      当用户询问美食推荐时，请考虑以下内容：
      1. 根据用户提到的口味偏好(如辣、甜、酸、咸等)
      2. 考虑用户可能的食材限制或饮食习惯(如素食、无麸质等)
      3. 考虑用户提到的场景或心情(如约会、心情不好等)
      4. 尽量提供具体的菜品名称和简短描述
      5. 如果合适，可以提供一到三个推荐选择
      6. 回复要简洁友好，像在和朋友聊天一样
      7. 回复使用中文(简体)`
    };
    
    // 准备消息历史
    const messages = [systemMessage, ...chatHistory];
    
    // 模拟API调用（由于没有提供实际的API密钥，这里使用模拟响应）
    simulateAIResponse(userMessage);
  }

  // 模拟AI响应（在无法访问实际API时使用）
  function simulateAIResponse(userMessage) {
    // 延迟1-2秒回复，模拟API调用延迟
    const delay = 1000 + Math.random() * 1000;
    
    // 准备一些基于关键词的回复
    const responses = {
      '辣': '如果你喜欢辣味食物，我推荐尝试川菜中的麻婆豆腐或水煮鱼。如果想要更温和的辣味，泰国的绿咖喱也是不错的选择。',
      '甜': '对于喜欢甜食的你，我推荐尝试港式蛋挞、芒果班戟或者日式抹茶甜点。如果喜欢中式甜品，杏仁豆腐和红豆沙也是不错的选择。',
      '清淡': '喜欢清淡口味的话，我推荐尝试日式茶泡饭、蒸鱼或者一些家常蔬菜汤。这类食物不仅口味清爽，还很健康。',
      '减肥': '如果你正在减肥，可以考虑低脂高蛋白的食物，比如水煮鸡胸肉沙拉、藜麦碗或者蒸蔬菜配豆腐。这些食物既能满足口腹之欲又不会摄入过多热量。',
      '快': '需要快速解决饥饿问题的话，我推荐简单的日式饭团、三明治或者一碗热腾腾的面条。这些食物制作方便，而且能迅速提供能量。',
      '健康': '追求健康饮食的话，可以尝试藜麦蔬菜沙拉、烤三文鱼配蔬菜或者自制蔬菜果汁。这些食物营养丰富，对身体很有益处。',
      '晚餐': '晚餐可以选择比较清淡的食物，如一碗温暖的蔬菜汤面、烤鱼配蔬菜或者一份不太油腻的炒饭。晚上吃得太重可能会影响睡眠质量。',
      '早餐': '早餐建议吃得丰盛一些，可以选择燕麦粥配水果、全麦吐司搭配鸡蛋或者一碗热腾腾的豆浆配油条。这样可以提供一天所需的能量。',
      '中餐': '午餐可以吃得相对丰盛，如一份炒饭、盖浇饭或者一碗热腾腾的面条，搭配一些蔬菜，既能填饱肚子又不会太沉重影响下午的工作效率。',
      '心情': '心情不好的时候，不妨尝试一些能提升情绪的食物，如巧克力、热可可或者一些酸甜可口的水果。有时候一份美食确实能改善心情。',
      '约会': '约会时可以选择一些精致但不太难吃的食物，如意大利面、烤牛排或者寿司。避免选择太辣或者容易弄脏衣服的食物，以免影响约会氛围。'
    };
    
    // 默认回复，如果没有匹配到关键词
    let aiReply = '根据你的需求，我推荐你尝试宫保鸡丁、干煸四季豆或者糖醋排骨。如果想尝试其他风味，日式拉面或韩式石锅拌饭也是不错的选择。请告诉我你的具体口味偏好，我可以给出更精准的推荐！';
    
    // 检查用户消息是否包含某些关键词
    for (const [keyword, response] of Object.entries(responses)) {
      if (userMessage.includes(keyword)) {
        aiReply = response;
        break;
      }
    }
    
    // 如果用户问候，回复问候语
    if (userMessage.includes('你好') || userMessage.includes('嗨') || userMessage.includes('嘿') || userMessage.includes('Hi') || userMessage.includes('Hello')) {
      aiReply = '你好！我是你的美食助手，很高兴能帮你推荐美食。请告诉我你的口味偏好或者今天的心情，我会为你推荐合适的美食。';
    }
    
    // 进行美食推荐的功能
    if (userMessage.includes('推荐') && !aiReply.includes('推荐')) {
      // 从美食列表中随机选择3个不重复的食物
      const filteredFoods = foods.filter(food => !food.名称.includes('买新手机') && !food.名称.includes('虚拟美食') && food.类型 !== '虚拟美食');
      const recommendedFoods = [];
      
      for (let i = 0; i < 3; i++) {
        if (filteredFoods.length > 0) {
          const randomIndex = Math.floor(Math.random() * filteredFoods.length);
          recommendedFoods.push(filteredFoods[randomIndex]);
          filteredFoods.splice(randomIndex, 1);
        }
      }
      
      if (recommendedFoods.length > 0) {
        aiReply = `根据你的需求，我为你推荐以下美食：\n`;
        recommendedFoods.forEach((food, index) => {
          aiReply += `${index + 1}. ${food.名称}（${food.类型}）\n`;
        });
        aiReply += `\n希望这些推荐能够满足你的口味！如果你有特定的口味偏好，可以告诉我，我会给你更精准的推荐。`;
      }
    }
    
    // 延时模拟AI思考时间，然后添加回复
    setTimeout(() => {
      removeTypingIndicator();
      addMessageToChat('ai', aiReply);
      
      // 将AI回复添加到对话历史
      chatHistory.push({ role: 'assistant', content: aiReply });
    }, delay);
  }
  
  // 实际调用AI API的函数（需要替换为实际的API密钥）
  async function callAIAPI(messages) {
    try {
      // DeepSeek API调用
      if (DEEPSEEK_API_KEY) {
        const response = await fetch(DEEPSEEK_API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${DEEPSEEK_API_KEY}`
          },
          body: JSON.stringify({
            model: 'deepseek-chat',
            messages: messages
          })
        });
        
        const data = await response.json();
        
        if (data.choices && data.choices[0] && data.choices[0].message) {
          return data.choices[0].message.content;
        } else {
          throw new Error('无法获取AI回复');
        }
      } 
      // OpenAI API调用
      else if (OPENAI_API_KEY) {
        const response = await fetch(OPENAI_API_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${OPENAI_API_KEY}`
          },
          body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: messages
          })
        });
        
        const data = await response.json();
        
        if (data.choices && data.choices[0] && data.choices[0].message) {
          return data.choices[0].message.content;
        } else {
          throw new Error('无法获取AI回复');
        }
      } else {
        throw new Error('未配置API密钥');
      }
    } catch (error) {
      console.error('AI API调用失败:', error);
      return '抱歉，我暂时无法连接到服务器。请稍后再试或者直接使用随机推荐功能。';
    }
  }
});
