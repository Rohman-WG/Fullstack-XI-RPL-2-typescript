/**
 * A school library records book borrowing transactions.
 * Tasks:
 * 1. Find all borrowing transactions for "Andi".
 * 2. Find the book information for every borrowing transaction.
 * 3. Find students who borrowed a programming book.
 * 4. Calculate the total number of borrowing transactions.
 * 5. Calculate the average borrowing duration.
 * 6. Find students who borrowed books for more than 7 days.
 */

const books = [
    { id: 1, title: "Clean Code", category: "Programming", stock: 3 },
    { id: 2, title: "Atomic Habits", category: "Self Development", stock: 5 },
    { id: 3, title: "The Pragmatic Programmer", category: "Programming", stock: 2 },
    { id: 4, title: "Design Patterns", category: "Programming", stock: 1 },
];

const borrowings = [
    { student: "Andi", bookId: 1, days: 7 },
    { student: "Budi", bookId: 2, days: 3 },
    { student: "Citra", bookId: 1, days: 10 },
    { student: "Deni", bookId: 3, days: 5 },
    { student: "Eka", bookId: 1, days: 4 },
    { student: "Andi", bookId: 3, days: 8 },
];

const findAndi = borrowings.filter(b => b.student === "Andi")
console.log("ANDI BORROW")
console.log(findAndi)

const showingBooksInfo = borrowings.map(b => ({...b , book: books.find(book => book.id === b.bookId)}))
console.log("SHOW BOOKS INFO")
console.log(showingBooksInfo)

const programmingBooksInfo = books.filter(book => book.category === "Programming").map(book => book.id)
const programmingstudents = (borrowings.filter(b => programmingBooksInfo.includes(b.bookId)).map(b => b.student))
console.log("SHOW WHO BORROW THE PROGRAMMING BOOKS")
console.log(programmingstudents)

const totalBorrowingTransaction = borrowings.length
console.log("TOTAL BORROWING TRANSACTION")
console.log(totalBorrowingTransaction)

const totalDays = borrowings.reduce((acc, curr) => acc + curr.days, 0)
const averageDays = totalDays / borrowings.length
console.log("AVERAGE BORROWING DURATION")
console.log(averageDays.toFixed(2), "days")

const longBorrows = borrowings.filter(borrow => borrow.days > 7)
console.log("BORROW BOOKS MORE THAN 7 days")
console.log(longBorrows)