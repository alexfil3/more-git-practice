function orderTotal(order) {
    return order.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
}

if (orderTotal({
    items: [
        { name: 'Dragon food', price: 8 },
        {name: 'Dragon cage (small)', price: 800},
    ]
}) !== 808) {
    throw new Error('Check fail: example 1')
}

if (orderTotal({
    items: [
        { name: 'Dragon hat', price: 20 },
        {name: 'Dragon phone', price: 80},
    ]
}) !== 100) {
    throw new Error('Check fail: example 2')
}

if (orderTotal({
    items: [
        { name: 'Dragon food', price: 8, quantity: 3 },
    ]
}) !== 24) {
    throw new Error('Check fail: example 3')
}