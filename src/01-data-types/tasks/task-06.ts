/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */

type Marketplace = {
    productCode: number;
    productName: string;
    price: number;
    stockQ: number;
    weight: number;
    avgRating: number;
    isDiscounted: boolean;
};

const marketplaces: Marketplace[]=[
    {
        productCode: 71,
        productName: "keyboard RGB",
        price: 750000,
        stockQ: 7,
        weight: 500,
        avgRating: 3.5,
        isDiscounted: true,
    },
    {
        productCode: 61,
        productName: "mouse Razor",
        price: 450000,
        stockQ: 3,
        weight: 70,
        avgRating: 3.2,
        isDiscounted: false,
    },
    {
        productCode: 19,
        productName: "Monitor",
        price: 1250000,
        stockQ: 5,
        weight: 1000,
        avgRating: 5,
        isDiscounted: false,
    },
];

console.log(marketplaces);