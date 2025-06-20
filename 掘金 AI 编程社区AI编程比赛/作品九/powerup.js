/**
 * 道具基类
 */
class PowerUp {
    /**
     * @param {Number} x - 道具x坐标
     * @param {Number} y - 道具y坐标
     * @param {String} type - 道具类型
     */
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type;
        this.width = 30;
        this.height = 30;
        this.isCollected = false;
        this.animationFrame = 0;
        this.animationSpeed = 0.1;
        this.lifeTime = 600; // 道具存在时间（帧数）
        this.blinkStart = 400; // 开始闪烁的时间（帧数）
        this.isVisible = true; // 用于闪烁效果
    }

    /**
     * 更新道具状态
     */
    update() {
        // 更新动画帧
        this.animationFrame += this.animationSpeed;
        
        // 减少生命时间
        this.lifeTime--;
        
        // 如果接近消失，开始闪烁
        if (this.lifeTime < this.blinkStart) {
            if (this.lifeTime % 10 < 5) {
                this.isVisible = true;
            } else {
                this.isVisible = false;
            }
        }
    }

    /**
     * 绘制道具
     * @param {CanvasRenderingContext2D} ctx - Canvas上下文
     */
    draw(ctx) {
        if (this.isCollected || !this.isVisible) return;
        
        ctx.save();
        
        // 绘制基本形状
        ctx.fillStyle = this.getColor();
        ctx.beginPath();
        ctx.arc(this.x + this.width / 2, this.y + this.height / 2, 
                this.width / 2, 0, Math.PI * 2);
        ctx.fill();
        
        // 绘制图标
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 18px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(this.getIcon(), this.x + this.width / 2, this.y + this.height / 2);
        
        // 添加发光效果
        ctx.shadowColor = this.getColor();
        ctx.shadowBlur = 10 + Math.sin(this.animationFrame) * 5;
        ctx.beginPath();
        ctx.arc(this.x + this.width / 2, this.y + this.height / 2, 
                this.width / 2 - 2, 0, Math.PI * 2);
        ctx.stroke();
        
        ctx.restore();
    }

    /**
     * 获取道具颜色
     * @returns {String} - 颜色代码
     */
    getColor() {
        switch (this.type) {
            case 'health':
                return '#ff5555';
            case 'speed':
                return '#55aaff';
            case 'shield':
                return '#55ff55';
            case 'rapidFire':
                return '#ffaa55';
            default:
                return '#ffffff';
        }
    }

    /**
     * 获取道具图标
     * @returns {String} - 图标字符
     */
    getIcon() {
        switch (this.type) {
            case 'health':
                return '♥';
            case 'speed':
                return '⚡';
            case 'shield':
                return '⛨';
            case 'rapidFire':
                return '☄';
            default:
                return '?';
        }
    }

    /**
     * 应用道具效果
     * @param {PlayerTank} player - 玩家坦克
     */
    applyEffect(player) {
        switch (this.type) {
            case 'health':
                player.lives = Math.min(player.lives + 1, 5);
                break;
            case 'speed':
                player.applySpeedBoost();
                break;
            case 'shield':
                player.applyShield();
                break;
            case 'rapidFire':
                player.applyRapidFire();
                break;
        }
        
        this.isCollected = true;
    }
    
    /**
     * 获取碰撞区域
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
    
    /**
     * 检查道具是否应该消失
     * @returns {Boolean} - 是否应该消失
     */
    shouldRemove() {
        return this.isCollected || this.lifeTime <= 0;
    }
} 