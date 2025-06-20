/**
 * 碰撞检测函数
 * @param {Object} obj1 - 第一个对象，包含x, y, width, height属性
 * @param {Object} obj2 - 第二个对象，包含x, y, width, height属性
 * @returns {Boolean} - 是否碰撞
 */
function checkCollision(obj1, obj2) {
    return obj1.x < obj2.x + obj2.width &&
           obj1.x + obj1.width > obj2.x &&
           obj1.y < obj2.y + obj2.height &&
           obj1.y + obj1.height > obj2.y;
}

/**
 * 随机整数生成函数
 * @param {Number} min - 最小值（包含）
 * @param {Number} max - 最大值（包含）
 * @returns {Number} - 随机整数
 */
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * 角度转弧度
 * @param {Number} degrees - 角度
 * @returns {Number} - 弧度
 */
function degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
}

/**
 * 绘制网格背景
 * @param {CanvasRenderingContext2D} ctx - Canvas上下文
 * @param {Number} width - 画布宽度
 * @param {Number} height - 画布高度
 * @param {Number} gridSize - 网格大小
 */
function drawGrid(ctx, width, height, gridSize) {
    ctx.strokeStyle = '#333';
    ctx.lineWidth = 1;
    
    // 绘制垂直线
    for (let x = 0; x <= width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
    }
    
    // 绘制水平线
    for (let y = 0; y <= height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
    }
}

/**
 * 检查点是否在矩形内
 * @param {Number} x - 点的x坐标
 * @param {Number} y - 点的y坐标
 * @param {Object} rect - 矩形，包含x, y, width, height属性
 * @returns {Boolean} - 点是否在矩形内
 */
function pointInRect(x, y, rect) {
    return x >= rect.x && x <= rect.x + rect.width &&
           y >= rect.y && y <= rect.y + rect.height;
}

/**
 * 检查两个方向是否相反
 * @param {String} dir1 - 第一个方向
 * @param {String} dir2 - 第二个方向
 * @returns {Boolean} - 是否相反
 */
function isOppositeDirection(dir1, dir2) {
    return (dir1 === 'up' && dir2 === 'down') ||
           (dir1 === 'down' && dir2 === 'up') ||
           (dir1 === 'left' && dir2 === 'right') ||
           (dir1 === 'right' && dir2 === 'left');
} 