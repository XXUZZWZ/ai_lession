// 游戏主类
class Game {
    constructor() {
        // 获取Canvas和上下文
        this.canvas = document.getElementById('gameCanvas');
        this.ctx = this.canvas.getContext('2d');
        
        // 游戏状态
        this.isGameOver = false;
        this.isPaused = false;
        this.isStarted = false; // 游戏是否已开始
        this.score = 0;
        this.level = 1;
        this.maxEnemies = 5;
        this.enemiesDefeated = 0;
        this.enemiesRequired = 10; // 每关需要击败的敌人数量
        
        // 游戏元素
        this.player = new PlayerTank(300, 500);
        this.enemies = [];
        this.bullets = [];
        this.obstacles = [];
        
        // 按键状态
        this.keys = {
            w: false,
            a: false,
            s: false,
            d: false,
            space: false
        };
        
        // 获取UI元素
        this.startScreen = document.getElementById('startScreen');
        this.pauseScreen = document.getElementById('pauseScreen');
        this.gameOverScreen = document.getElementById('gameOver');
        
        // 初始化
        this.init();
    }
    
    // 初始化游戏
    init() {
        // 设置事件监听
        this.setupEventListeners();
        
        // 创建初始障碍物
        this.createObstacles();
        
        // 生成敌人
        this.spawnEnemies();
        
        // 开始游戏循环
        this.gameLoop();
        
        // 更新UI
        this.updateUI();
        
        // 显示开始界面
        this.canvas.style.filter = 'blur(3px)';
    }
    
    // 设置事件监听
    setupEventListeners() {
        // 键盘按下事件
        document.addEventListener('keydown', (e) => {
            // 如果游戏未开始，不处理除了空格外的按键
            if (!this.isStarted && e.key.toLowerCase() !== ' ') return;
            
            switch (e.key.toLowerCase()) {
                case 'w':
                    this.keys.w = true;
                    break;
                case 'a':
                    this.keys.a = true;
                    break;
                case 's':
                    this.keys.s = true;
                    break;
                case 'd':
                    this.keys.d = true;
                    break;
                case ' ':
                    if (!this.isStarted) {
                        this.startGame();
                    } else {
                        this.keys.space = true;
                    }
                    break;
                case 'p':
                    if (this.isStarted && !this.isGameOver) {
                        this.togglePause();
                    }
                    break;
            }
        });
        
        // 键盘松开事件
        document.addEventListener('keyup', (e) => {
            switch (e.key.toLowerCase()) {
                case 'w':
                    this.keys.w = false;
                    break;
                case 'a':
                    this.keys.a = false;
                    break;
                case 's':
                    this.keys.s = false;
                    break;
                case 'd':
                    this.keys.d = false;
                    break;
                case ' ':
                    this.keys.space = false;
                    break;
            }
        });
        
        // 开始游戏按钮
        document.getElementById('startButton').addEventListener('click', () => {
            this.startGame();
        });
        
        // 重新开始按钮
        document.getElementById('restartButton').addEventListener('click', () => {
            this.restart();
        });
        
        // 继续游戏按钮
        document.getElementById('resumeButton').addEventListener('click', () => {
            this.togglePause();
        });
    }
    
    // 创建障碍物
    createObstacles() {
        this.obstacles = [];
        
        // 创建砖墙
        const brickPositions = [
            // 左上角区域
            {x: 100, y: 100}, {x: 140, y: 100}, {x: 180, y: 100},
            {x: 100, y: 140}, {x: 100, y: 180},
            
            // 右上角区域
            {x: 620, y: 100}, {x: 580, y: 100}, {x: 540, y: 100},
            {x: 620, y: 140}, {x: 620, y: 180},
            
            // 中央区域
            {x: 340, y: 280}, {x: 380, y: 280}, {x: 420, y: 280},
            {x: 340, y: 320}, {x: 420, y: 320},
            {x: 340, y: 360}, {x: 380, y: 360}, {x: 420, y: 360},
            
            // 左下角区域
            {x: 100, y: 420}, {x: 140, y: 420}, {x: 180, y: 420},
            {x: 100, y: 460}, {x: 100, y: 500},
            
            // 右下角区域
            {x: 620, y: 420}, {x: 580, y: 420}, {x: 540, y: 420},
            {x: 620, y: 460}, {x: 620, y: 500}
        ];
        
        for (const pos of brickPositions) {
            this.obstacles.push(new BrickWall(pos.x, pos.y, 40, 40));
        }
        
        // 创建钢铁墙
        const steelPositions = [
            {x: 260, y: 180}, {x: 500, y: 180},
            {x: 260, y: 420}, {x: 500, y: 420},
            {x: 380, y: 100}, {x: 380, y: 500}
        ];
        
        for (const pos of steelPositions) {
            this.obstacles.push(new SteelWall(pos.x, pos.y, 40, 40));
        }
    }
    
    // 生成敌人
    spawnEnemies() {
        // 如果敌人数量已达上限，不再生成
        if (this.enemies.length >= this.maxEnemies) {
            return;
        }
        
        // 敌人生成位置
        const spawnPoints = [
            {x: 100, y: 60}, {x: 380, y: 60}, {x: 660, y: 60}
        ];
        
        // 随机选择一个生成点
        const spawnPoint = spawnPoints[randomInt(0, spawnPoints.length - 1)];
        
        // 检查生成点是否已有坦克
        for (const enemy of this.enemies) {
            if (checkCollision({x: spawnPoint.x, y: spawnPoint.y, width: 40, height: 40}, enemy)) {
                return;
            }
        }
        
        // 生成敌人
        this.enemies.push(new EnemyTank(spawnPoint.x, spawnPoint.y));
    }
    
    // 游戏主循环
    gameLoop() {
        // 如果游戏未开始、结束或暂停，不执行更新
        if (!this.isStarted || this.isGameOver || this.isPaused) {
            requestAnimationFrame(() => this.gameLoop());
            return;
        }
        
        // 清空画布
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // 绘制网格背景
        drawGrid(this.ctx, this.canvas.width, this.canvas.height, 20);
        
        // 更新玩家
        this.updatePlayer();
        
        // 更新敌人
        this.updateEnemies();
        
        // 更新子弹
        this.updateBullets();
        
        // 检查游戏状态
        this.checkGameStatus();
        
        // 绘制所有元素
        this.render();
        
        // 继续下一帧
        requestAnimationFrame(() => this.gameLoop());
    }
    
    // 更新玩家状态
    updatePlayer() {
        // 更新玩家坦克状态
        this.player.update();
        
        // 处理玩家移动
        if (this.keys.w) {
            this.player.move('up', this.obstacles, this.enemies, this.canvas.width, this.canvas.height);
        } else if (this.keys.s) {
            this.player.move('down', this.obstacles, this.enemies, this.canvas.width, this.canvas.height);
        } else if (this.keys.a) {
            this.player.move('left', this.obstacles, this.enemies, this.canvas.width, this.canvas.height);
        } else if (this.keys.d) {
            this.player.move('right', this.obstacles, this.enemies, this.canvas.width, this.canvas.height);
        }
        
        // 处理玩家射击
        if (this.keys.space) {
            const bullet = this.player.shoot();
            if (bullet) {
                this.bullets.push(bullet);
            }
        }
    }
    
    // 更新敌人状态
    updateEnemies() {
        // 尝试生成新敌人
        if (Math.random() < 0.01 && this.enemies.length < this.maxEnemies) {
            this.spawnEnemies();
        }
        
        // 更新每个敌人
        for (const enemy of this.enemies) {
            const bullet = enemy.updateAI(this.obstacles, [this.player, ...this.enemies], this.canvas.width, this.canvas.height);
            if (bullet) {
                this.bullets.push(bullet);
            }
        }
        
        // 移除被摧毁的敌人
        this.enemies = this.enemies.filter(enemy => !enemy.isDestroyed);
    }
    
    // 更新子弹状态
    updateBullets() {
        for (let i = 0; i < this.bullets.length; i++) {
            const bullet = this.bullets[i];
            
            // 更新子弹位置
            bullet.update();
            
            // 检查子弹是否超出边界
            if (bullet.isOutOfBounds(this.canvas.width, this.canvas.height)) {
                bullet.deactivate();
                continue;
            }
            
            // 检查子弹与障碍物碰撞
            for (const obstacle of this.obstacles) {
                if (!obstacle.isDestroyed && checkCollision(bullet.getCollisionRect(), obstacle)) {
                    bullet.deactivate();
                    obstacle.hit();
                    break;
                }
            }
            
            // 检查子弹与坦克碰撞
            if (bullet.isActive) {
                if (bullet.isPlayerBullet) {
                    // 玩家子弹与敌人碰撞
                    for (const enemy of this.enemies) {
                        if (!enemy.isDestroyed && checkCollision(bullet.getCollisionRect(), enemy)) {
                            bullet.deactivate();
                            enemy.hit();
                            this.score += 100;
                            this.enemiesDefeated++;
                            this.updateUI();
                            break;
                        }
                    }
                } else {
                    // 敌人子弹与玩家碰撞
                    if (!this.player.isDestroyed && checkCollision(bullet.getCollisionRect(), this.player)) {
                        bullet.deactivate();
                        this.player.hit();
                        this.updateUI();
                    }
                }
            }
        }
        
        // 移除失活的子弹
        this.bullets = this.bullets.filter(bullet => bullet.isActive);
    }
    
    // 检查游戏状态
    checkGameStatus() {
        // 检查玩家是否被摧毁
        if (this.player.isDestroyed) {
            this.gameOver();
        }
        
        // 检查是否需要进入下一关
        if (this.enemiesDefeated >= this.enemiesRequired) {
            this.nextLevel();
        }
    }
    
    // 进入下一关
    nextLevel() {
        this.level++;
        this.enemiesDefeated = 0;
        this.maxEnemies = Math.min(10, this.maxEnemies + 1);
        this.enemiesRequired = 10 + (this.level - 1) * 5;
        
        // 清空敌人和子弹
        this.enemies = [];
        this.bullets = [];
        
        // 重新创建障碍物
        this.createObstacles();
        
        // 更新UI
        this.updateUI();
    }
    
    // 游戏结束
    gameOver() {
        this.isGameOver = true;
        this.gameOverScreen.style.display = 'block';
        document.getElementById('finalScore').textContent = this.score;
        this.canvas.style.filter = 'blur(3px)';
    }
    
    // 重新开始游戏
    restart() {
        // 重置游戏状态
        this.isGameOver = false;
        this.isPaused = false;
        this.isStarted = true;
        this.score = 0;
        this.level = 1;
        this.maxEnemies = 5;
        this.enemiesDefeated = 0;
        this.enemiesRequired = 10;
        
        // 重置游戏元素
        this.player = new PlayerTank(300, 500);
        this.enemies = [];
        this.bullets = [];
        
        // 重新创建障碍物
        this.createObstacles();
        
        // 隐藏所有界面
        this.gameOverScreen.style.display = 'none';
        this.pauseScreen.style.display = 'none';
        this.canvas.style.filter = 'none';
        
        // 更新UI
        this.updateUI();
    }
    
    // 开始游戏
    startGame() {
        this.isStarted = true;
        this.startScreen.style.display = 'none';
        this.canvas.style.filter = 'none';
    }
    
    // 切换暂停状态
    togglePause() {
        this.isPaused = !this.isPaused;
        
        if (this.isPaused) {
            this.pauseScreen.style.display = 'block';
            this.canvas.style.filter = 'blur(3px)';
        } else {
            this.pauseScreen.style.display = 'none';
            this.canvas.style.filter = 'none';
        }
    }
    
    // 更新UI
    updateUI() {
        document.getElementById('score').textContent = this.score;
        document.getElementById('level').textContent = this.level;
        document.getElementById('lives').textContent = this.player.lives;
    }
    
    // 渲染所有游戏元素
    render() {
        // 绘制障碍物
        for (const obstacle of this.obstacles) {
            obstacle.draw(this.ctx);
        }
        
        // 绘制子弹
        for (const bullet of this.bullets) {
            bullet.draw(this.ctx);
        }
        
        // 绘制玩家
        this.player.draw(this.ctx);
        
        // 绘制敌人
        for (const enemy of this.enemies) {
            enemy.draw(this.ctx);
        }
    }
}

// 当页面加载完成后，创建游戏实例
window.addEventListener('load', () => {
    new Game();
}); 