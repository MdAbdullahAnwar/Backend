CREATE TABLE products (
    id INT,
    name VARCHAR(50),
    price DECIMAL(10,2)
);

SELECT id, name, price FROM products LIMIT 5 OFFSET 5;