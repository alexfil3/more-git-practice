function orderTotal(order) {
    return order.items.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);
}

module.exports = orderTotal;