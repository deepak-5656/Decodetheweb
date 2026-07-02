

const products = [
    
  // Electronics
  { id: 1, name: "Laptop", category: "Electronics", brand: "Dell", price: 1200, rating: 4.7, inStock: true, quantity: 15 },
  { id: 2, name: "Smartphone", category: "Electronics", brand: "Samsung", price: 900, rating: 4.8, inStock: true, quantity: 20 },
  { id: 3, name: "Tablet", category: "Electronics", brand: "Apple", price: 700, rating: 4.6, inStock: false, quantity: 0 },
  { id: 4, name: "Headphones", category: "Electronics", brand: "Sony", price: 180, rating: 4.5, inStock: true, quantity: 30 },
  { id: 5, name: "Keyboard", category: "Electronics", brand: "Logitech", price: 75, rating: 4.4, inStock: true, quantity: 50 },
  { id: 6, name: "Mouse", category: "Electronics", brand: "Logitech", price: 40, rating: 4.3, inStock: true, quantity: 45 },

  // Books
  { id: 7, name: "The Hobbit", category: "Books", brand: "Penguin", price: 25, rating: 4.9, inStock: true, quantity: 80 },
  { id: 8, name: "Atomic Habits", category: "Books", brand: "Penguin", price: 20, rating: 4.8, inStock: true, quantity: 100 },
  { id: 9, name: "Clean Code", category: "Books", brand: "Prentice Hall", price: 35, rating: 4.9, inStock: true, quantity: 40 },
  { id: 10, name: "Harry Potter", category: "Books", brand: "Bloomsbury", price: 30, rating: 4.9, inStock: false, quantity: 0 },

  // Clothing
  { id: 11, name: "T-Shirt", category: "Clothing", brand: "Nike", price: 25, rating: 4.2, inStock: true, quantity: 120 },
  { id: 12, name: "Jeans", category: "Clothing", brand: "Levi's", price: 60, rating: 4.6, inStock: true, quantity: 70 },
  { id: 13, name: "Jacket", category: "Clothing", brand: "Puma", price: 120, rating: 4.5, inStock: false, quantity: 0 },
  { id: 14, name: "Shoes", category: "Clothing", brand: "Adidas", price: 95, rating: 4.7, inStock: true, quantity: 60 },

  // Appliances
  { id: 15, name: "Microwave", category: "Appliances", brand: "LG", price: 150, rating: 4.4, inStock: true, quantity: 18 },
  { id: 16, name: "Refrigerator", category: "Appliances", brand: "Whirlpool", price: 900, rating: 4.7, inStock: true, quantity: 10 },
  { id: 17, name: "Washing Machine", category: "Appliances", brand: "Samsung", price: 650, rating: 4.5, inStock: false, quantity: 0 },
  { id: 18, name: "Air Conditioner", category: "Appliances", brand: "Daikin", price: 1200, rating: 4.8, inStock: true, quantity: 12 },

  // Grocery
  { id: 19, name: "Rice", category: "Grocery", brand: "India Gate", price: 40, rating: 4.6, inStock: true, quantity: 200 },
  { id: 20, name: "Milk", category: "Grocery", brand: "Amul", price: 3, rating: 4.8, inStock: true, quantity: 500 },
  { id: 21, name: "Eggs", category: "Grocery", brand: "Farm Fresh", price: 6, rating: 4.7, inStock: true, quantity: 300 },
  { id: 22, name: "Bread", category: "Grocery", brand: "Britannia", price: 2, rating: 4.5, inStock: true, quantity: 150 },

  // Sports
  { id: 23, name: "Football", category: "Sports", brand: "Nike", price: 35, rating: 4.5, inStock: true, quantity: 25 },
  { id: 24, name: "Cricket Bat", category: "Sports", brand: "MRF", price: 120, rating: 4.8, inStock: true, quantity: 15 },
  { id: 25, name: "Tennis Racket", category: "Sports", brand: "Yonex", price: 140, rating: 4.6, inStock: false, quantity: 0 },
  { id: 26, name: "Badminton Shuttle", category: "Sports", brand: "Yonex", price: 15, rating: 4.4, inStock: true, quantity: 90 },

  // Furniture
  { id: 27, name: "Office Chair", category: "Furniture", brand: "IKEA", price: 180, rating: 4.6, inStock: true, quantity: 20 },
  { id: 28, name: "Study Table", category: "Furniture", brand: "IKEA", price: 250, rating: 4.7, inStock: true, quantity: 10 },
  { id: 29, name: "Sofa", category: "Furniture", brand: "Home Centre", price: 850, rating: 4.5, inStock: false, quantity: 0 },
  { id: 30, name: "Bookshelf", category: "Furniture", brand: "Godrej", price: 220, rating: 4.3, inStock: true, quantity: 12 }
];


// console.log(products);


// const filter = products.filter((product) => product.category === "Electronics" && product.inStock);
// console.log(filter);

// if want ot print if price of product is greater than 100 

// const filterPrice = products.filter((product) => product.price > 1000);
// console.log(filterPrice);


// if i want to display importaant columns not all to the frontend to show to users all the data  rather then printing instock value sshould not dsiplay in frontend so for that what should i do 

const pro = products.filter((product) => product.inStock);

const answer = pro.map((product) => ({
    name: product.name,
    category: product.category,
    price: product.price
}));

console.log(answer);



