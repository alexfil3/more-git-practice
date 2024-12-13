const orderTotal = require('./order-total');

it('Works', () => {
    expect(1).toBe(1);
})

it('Quantity', () =>
    expect(orderTotal({
    items: [
        { name: 'Dragon food', price: 8 , quantity: 2},
    ]
})).toBe(16))

it('No quantity specified', () => 
    expect(orderTotal({
    items: [
        { name: 'Dragon food', price: 8},
    ]
    })).toBe(8))

it('More than one item on the list', () => 
expect(orderTotal({
    items: [
        { name: 'Dragon food', price: 8, quantity: 1 },
        {name: 'Dragon cage (small)', price: 800, quantity: 1},
    ]
})).toBe(808))