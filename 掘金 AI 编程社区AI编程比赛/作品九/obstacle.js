/**
 * 障碍物基类
 */
class Obstacle {
    /**
     * @param {Number} x - 障碍物x坐标
     * @param {Number} y - 障碍物y坐标
     * @param {Number} width - 障碍物宽度
     * @param {Number} height - 障碍物高度
     */
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.isDestroyed = false;
    }

    /**
     * 绘制障碍物
     * @param {CanvasRenderingContext2D} ctx - Canvas上下文
     */
    draw(ctx) {
        // 由子类实现
    }

    /**
     * 检查是否可被摧毁
     * @returns {Boolean} - 是否可被摧毁
     */
    isDestructible() {
        // 由子类实现
        return false;
    }

    /**
     * 处理被子弹击中
     * @returns {Boolean} - 是否被摧毁
     */
    hit() {
        if (this.isDestructible()) {
            this.isDestroyed = true;
            return true;
        }
        return false;
    }
}

/**
 * 砖墙类 - 可被摧毁
 */
class BrickWall extends Obstacle {
    /**
     * @param {Number} x - 砖墙x坐标
     * @param {Number} y - 砖墙y坐标
     * @param {Number} width - 砖墙宽度
     * @param {Number} height - 砖墙高度
     */
    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.color = '#c75e54'; // 砖红色
    }

    /**
     * 绘制砖墙
     * @param {CanvasRenderingContext2D} ctx - Canvas上下文
     */
    draw(ctx) {
        if (this.isDestroyed) return;

        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);

        // 绘制砖块纹理
        ctx.strokeStyle = '#8a3c35';
        ctx.lineWidth = 1;
        
        // 水平线
        for (let y = 0; y <= this.height; y += this.height / 4) {
            ctx.beginPath();
            ctx.moveTo(this.x, this.y + y);
            ctx.lineTo(this.x + this.width, this.y + y);
            ctx.stroke();
        }
        
        // 垂直线 - 交错排列的砖块效果
        for (let row = 0; row < 4; row++) {
            const offset = (row % 2) * (this.width / 4);
            for (let x = offset; x <= this.width; x += this.width / 2) {
                ctx.beginPath();
                ctx.moveTo(this.x + x, this.y + row * (this.height / 4));
                ctx.lineTo(this.x + x, this.y + (row + 1) * (this.height / 4));
                ctx.stroke();
            }
        }
    }

    /**
     * 检查是否可被摧毁
     * @returns {Boolean} - 是否可被摧毁
     */
    isDestructible() {
        return true;
    }
}

/**
 * 钢铁墙类 - 不可被摧毁
 */
class SteelWall extends Obstacle {
    /**
     * @param {Number} x - 钢铁墙x坐标
     * @param {Number} y - 钢铁墙y坐标
     * @param {Number} width - 钢铁墙宽度
     * @param {Number} height - 钢铁墙高度
     */
    constructor(x, y, width, height) {
        super(x, y, width, height);
        this.color = '#777';
    }

    /**
     * 绘制钢铁墙
     * @param {CanvasRenderingContext2D} ctx - Canvas上下文
     */
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);

        // 绘制金属纹理
        ctx.strokeStyle = '#555';
        ctx.lineWidth = 1;
        
        // 格子纹理
        const gridSize = 8;
        for (let x = 0; x <= this.width; x += gridSize) {
            ctx.beginPath();
            ctx.moveTo(this.x + x, this.y);
            ctx.lineTo(this.x + x, this.y + this.height);
            ctx.stroke();
        }
        
        for (let y = 0; y <= this.height; y += gridSize) {
            ctx.beginPath();
            ctx.moveTo(this.x, this.y + y);
            ctx.lineTo(this.x + this.width, this.y + y);
            ctx.stroke();
        }
        
        // 添加高光效果
        ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.fillRect(this.x, this.y, this.width, this.height / 4);
    }

    /**
     * 检查是否可被摧毁
     * @returns {Boolean} - 是否可被摧毁
     */
    isDestructible() {
        return false;
    }
} 