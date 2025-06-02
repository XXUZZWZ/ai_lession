// orderStatus.js
const ORDER_STATUS = {
  PENDING: Symbol("pending"), // 待支付
  PAID: Symbol("paid"), // 已支付
  SHIPPED: Symbol("shipped"), // 已发货
  COMPLETED: Symbol("completed"), // 已完成
  CANCELLED: Symbol("cancelled"), // 已取消
};

module.exports = ORDER_STATUS;

// orderService.js
const STATUS = require("./orderStatus");

function updateOrderStatus(currentStatus, newStatus) {
  // 安全校验：确保新状态是有效的 Symbol 值
  if (!Object.values(STATUS).includes(newStatus)) {
    throw new Error("Invalid order status 无效的订单状态");
  }

  // 仅允许合法的状态转换（示例逻辑）
  if (currentStatus === STATUS.PAID && newStatus !== STATUS.SHIPPED) {
    throw new Error(
      "Paid order must transition to shipped  已付订单必须过渡到已付订单"
    );
  }

  // 更新状态...
  console.log(
    `Order status updated to:订单状态更新为： ${newStatus.description}`
  );
}

// 调用示例
updateOrderStatus(STATUS.PENDING, STATUS.PAID); // 合法操作
updateOrderStatus(STATUS.PAID, "invalid_status"); // 抛出异常（字符串无法通过校验）
