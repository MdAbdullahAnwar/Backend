Create the products table
CREATE TABLE products (
  id INTEGER PRIMARY KEY,
  product_name TEXT NOT NULL,
  price INTEGER NOT NULL,
  quantity INTEGER NOT NULL
);

SELECT * FROM products WHERE price > 500;