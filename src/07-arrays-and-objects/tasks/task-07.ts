/**
 * An online store has customer orders.
 * Tasks:
 * 1. Get only completed orders.
 * 2. Calculate the total value of each order.
 * 3. Find the customer who spent the most.
 * 4. Calculate the total revenue from completed orders.
 * 5. Find all products that have been purchased.
 */
const orders = [
    {
        id: 101,
        customer: "Andi",
        status: "completed",
        items: [
            { product: "Keyboard", price: 350000, quantity: 1 },
            { product: "Mouse", price: 150000, quantity: 2 },
        ],
    },
    {
        id: 102,
        customer: "Budi",
        status: "cancelled",
        items: [
            { product: "Monitor", price: 2500000, quantity: 1 },
        ],
    },
    {
        id: 103,
        customer: "Citra",
        status: "completed",
        items: [
            { product: "Monitor", price: 2500000, quantity: 2 },
            { product: "Keyboard", price: 350000, quantity: 1 },
        ],
    },
];

const completedOrders = orders.filter(order => order.status === "completed")
console.log("COMPLETED ORDERS")
console.log(completedOrders)

const totalValueOrders = orders.map(order => {const total = order.items.reduce
    ((sum, item) => sum + item.price * item.quantity, 0)
    return {customer : order.customer,
            total : total,
    }})
console.log("TOTAL VALUE EACH ORDERS")
console.log(totalValueOrders)

const highSpender = totalValueOrders.reduce((highest, order) => 
    order.total > highest.total ? order: highest)
console.log("HIGHEST SPENDER")
console.log(highSpender)

const totalRevenue = completedOrders.reduce((sum, order) => 
    {const orderTotal = order.items.reduce((sum, item) => sum + item.price * item.price, 0)
    return sum + orderTotal},0)
console.log("TOTAL REVENUE")
console.log(totalRevenue)

const purchasedItem = orders.flatMap(order => order.items.map(item => item.product))
console.log("PURCHASED ITEM")
console.log(purchasedItem)