/**
 * 坦克基类
 */
class Tank {
    /**
     * @param {Number} x - 坦克x坐标
     * @param {Number} y - 坦克y坐标
     * @param {String} direction - 坦克方向 ('up', 'down', 'left', 'right')
     * @param {String} color - 坦克颜色
     */
    constructor(x, y, direction, color) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.color = color;
        this.width = 40;
        this.height = 40;
        this.speed = 2;
        this.cooldown = 0;
        this.maxCooldown = 30; // 射击冷却时间（帧数）
        this.isDestroyed = false;
    }

    /**
     * 更新坦克状态
     */
    update() {
        if (this.cooldown > 0) {
            this.cooldown--;
        }
    }

    /**
     * 移动坦克
     * @param {String} direction - 移动方向
     * @param {Array} obstacles - 障碍物数组
     * @param {Array} tanks - 其他坦克数组
     * @param {Number} canvasWidth - 画布宽度
     * @param {Number} canvasHeight - 画布高度
     */
    move(direction, obstacles, tanks, canvasWidth, canvasHeight) {
        this.direction = direction;
        
        let nextX = this.x;
        let nextY = this.y;
        
        switch (direction) {
            case 'up':
                nextY -= this.speed;
                break;
            case 'down':
                nextY += this.speed;
                break;
            case 'left':
                nextX -= this.speed;
                break;
            case 'right':
                nextX += this.speed;
                break;
        }
        
        // 检查边界碰撞
        if (nextX < 0 || nextX + this.width > canvasWidth || 
            nextY < 0 || nextY + this.height > canvasHeight) {
            return false;
        }
        
        // 检查障碍物碰撞
        const nextPos = { x: nextX, y: nextY, width: this.width, height: this.height };
        for (const obstacle of obstacles) {
            if (!obstacle.isDestroyed && checkCollision(nextPos, obstacle)) {
                return false;
            }
        }
        
        // 检查坦克碰撞
        for (const tank of tanks) {
            if (tank !== this && !tank.isDestroyed && checkCollision(nextPos, tank)) {
                return false;
            }
        }
        
        // 更新位置
        this.x = nextX;
        this.y = nextY;
        return true;
    }

    /**
     * 射击
     * @returns {Bullet|null} - 创建的子弹，如果冷却中则返回null
     */
    shoot() {
        if (this.cooldown > 0 || this.isDestroyed) {
            return null;
        }
        
        this.cooldown = this.maxCooldown;
        
        let bulletX = this.x + this.width / 2 - 3;
        let bulletY = this.y + this.height / 2 - 3;
        
        // 根据方向调整子弹初始位置
        switch (this.direction) {
            case 'up':
                bulletY = this.y - 6;
                break;
            case 'down':
                bulletY = this.y + this.height;
                break;
            case 'left':
                bulletX = this.x - 6;
                break;
            case 'right':
                bulletX = this.x + this.width;
                break;
        }
        
        return new Bullet(bulletX, bulletY, this.direction, this instanceof PlayerTank);
    }

    /**
     * 绘制坦克
     * @param {CanvasRenderingContext2D} ctx - Canvas上下文
     */
    draw(ctx) {
        if (this.isDestroyed) return;
        
        ctx.save();
        
        // 移动到坦克中心点
        ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
        
        // 根据方向旋转
        switch (this.direction) {
            case 'up':
                ctx.rotate(0);
                break;
            case 'right':
                ctx.rotate(Math.PI / 2);
                break;
            case 'down':
                ctx.rotate(Math.PI);
                break;
            case 'left':
                ctx.rotate(Math.PI * 3 / 2);
                break;
        }
        
        // 绘制坦克主体
        ctx.fillStyle = this.color;
        ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);
        
        // 绘制坦克炮塔
        ctx.fillStyle = '#333';
        ctx.fillRect(-this.width / 6, -this.height / 2 - 5, this.width / 3, this.height / 2);
        
        // 绘制坦克履带
        ctx.fillStyle = '#222';
        ctx.fillRect(-this.width / 2 - 3, -this.height / 2, 3, this.height);
        ctx.fillRect(this.width / 2, -this.height / 2, 3, this.height);
        
        // 绘制坦克细节
        ctx.strokeStyle = '#000';
        ctx.lineWidth = 1;
        ctx.strokeRect(-this.width / 2, -this.height / 2, this.width, this.height);
        
        ctx.restore();
    }

    /**
     * 处理坦克被击中
     */
    hit() {
        this.isDestroyed = true;
    }
}

/**
 * 玩家坦克类
 */
class PlayerTank extends Tank {
    /**
     * @param {Number} x - 坦克x坐标
     * @param {Number} y - 坦克y坐标
     */
    constructor(x, y) {
        super(x, y, 'up', '#3498db');
        this.lives = 3;
        this.speed = 3; // 玩家坦克速度比敌方快
        this.maxCooldown = 20; // 玩家射击冷却更短
    }

    /**
     * 处理玩家坦克被击中
     */
    hit() {
        this.lives--;
        if (this.lives <= 0) {
            this.isDestroyed = true;
        } else {
            // 重置位置
            this.x = 300;
            this.y = 500;
            this.direction = 'up';
        }
    }

    /**
     * 绘制玩家坦克
     * @param {CanvasRenderingContext2D} ctx - Canvas上下文
     */
    draw(ctx) {
        super.draw(ctx);
        
        // 如果没有被摧毁，添加一些特殊效果
        if (!this.isDestroyed) {
            ctx.save();
            
            // 绘制玩家坦克特殊标记
            ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
            
            ctx.fillStyle = '#fff';
            ctx.beginPath();
            ctx.arc(0, 0, 5, 0, Math.PI * 2);
            ctx.fill();
            
            ctx.restore();
        }
    }
}

/**
 * 敌方坦克类
 */
class EnemyTank extends Tank {
    /**
     * @param {Number} x - 坦克x坐标
     * @param {Number} y - 坦克y坐标
     */
    constructor(x, y) {
        super(x, y, 'down', '#e74c3c');
        this.moveCounter = 0;
        this.moveInterval = randomInt(30, 90); // 随机移动间隔
        this.shootChance = 0.02; // 每帧有2%的几率射击
    }

    /**
     * 更新敌方坦克状态
     * @param {Array} obstacles - 障碍物数组
     * @param {Array} tanks - 其他坦克数组
     * @param {Number} canvasWidth - 画布宽度
     * @param {Number} canvasHeight - 画布高度
     * @returns {Bullet|null} - 如果射击则返回子弹，否则返回null
     */
    updateAI(obstacles, tanks, canvasWidth, canvasHeight) {
        super.update();
        
        if (this.isDestroyed) return null;
        
        // 移动逻辑
        this.moveCounter++;
        if (this.moveCounter >= this.moveInterval) {
            this.moveCounter = 0;
            this.moveInterval = randomInt(30, 90);
            
            // 随机选择方向
            const directions = ['up', 'down', 'left', 'right'];
            const randomDirection = directions[randomInt(0, 3)];
            
            this.move(randomDirection, obstacles, tanks, canvasWidth, canvasHeight);
        }
        
        // 射击逻辑
        if (Math.random() < this.shootChance) {
            return this.shoot();
        }
        
        return null;
    }

    /**
     * 绘制敌方坦克
     * @param {CanvasRenderingContext2D} ctx - Canvas上下文
     */
    draw(ctx) {
        super.draw(ctx);
        
        // 如果没有被摧毁，添加一些特殊效果
        if (!this.isDestroyed) {
            ctx.save();
            
            // 绘制敌方坦克特殊标记
            ctx.translate(this.x + this.width / 2, this.y + this.height / 2);
            
            ctx.strokeStyle = '#000';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(-5, -5);
            ctx.lineTo(5, 5);
            ctx.moveTo(5, -5);
            ctx.lineTo(-5, 5);
            ctx.stroke();
            
            ctx.restore();
        }
    }
} 