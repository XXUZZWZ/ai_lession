/**
 * 子弹类
 */
class Bullet {
    /**
     * @param {Number} x - 子弹x坐标
     * @param {Number} y - 子弹y坐标
     * @param {String} direction - 子弹方向 ('up', 'down', 'left', 'right')
     * @param {Boolean} isPlayerBullet - 是否是玩家的子弹
     */
    constructor(x, y, direction, isPlayerBullet) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.isPlayerBullet = isPlayerBullet;
        this.width = 6;
        this.height = 6;
        this.speed = 5;
        this.isActive = true;
    }

    /**
     * 更新子弹位置
     */
    update() {
        switch (this.direction) {
            case 'up':
                this.y -= this.speed;
                break;
            case 'down':
                this.y += this.speed;
                break;
            case 'left':
                this.x -= this.speed;
                break;
            case 'right':
                this.x += this.speed;
                break;
        }
    }

    /**
     * 绘制子弹
     * @param {CanvasRenderingContext2D} ctx - Canvas上下文
     */
    draw(ctx) {
        if (!this.isActive) return;

        // 保存当前状态
        ctx.save();
        
        // 设置子弹颜色
        ctx.fillStyle = this.isPlayerBullet ? '#fff' : '#ff0';
        
        // 绘制子弹主体
        ctx.beginPath();
        ctx.arc(this.x + this.width / 2, this.y + this.height / 2, this.width / 2, 0, Math.PI * 2);
        ctx.fill();
        
        // 添加发光效果
        ctx.shadowColor = this.isPlayerBullet ? 'rgba(255, 255, 255, 0.8)' : 'rgba(255, 255, 0, 0.8)';
        ctx.shadowBlur = 5;
        ctx.beginPath();
        ctx.arc(this.x + this.width / 2, this.y + this.height / 2, this.width / 2 - 1, 0, Math.PI * 2);
        ctx.fill();
        
        // 恢复状态
        ctx.restore();
    }

    /**
     * 检查子弹是否超出边界
     * @param {Number} canvasWidth - 画布宽度
     * @param {Number} canvasHeight - 画布高度
     * @returns {Boolean} - 是否超出边界
     */
    isOutOfBounds(canvasWidth, canvasHeight) {
        return this.x < 0 || this.x > canvasWidth || 
               this.y < 0 || this.y > canvasHeight;
    }

    /**
     * 处理子弹碰撞
     */
    deactivate() {
        this.isActive = false;
    }
    
    /**
     * 获取子弹的碰撞区域
     * @returns {Object} - 包含x, y, width, height的对象
     */
    getCollisionRect() {
        return {
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height
        };
    }
} 