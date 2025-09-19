CREATE TABLE Products (
    product_id INT,
    product_name VARCHAR(255),
    category VARCHAR(255),
    price INT,
    in_stock VARCHAR(3)
);

INSERT INTO Products (product_id, product_name, category, price, in_stock)
VALUES
(1, 'Smartphone', 'Electronics', 50000, 'Yes'),
(2, 'Microwave Oven', 'Appliances', 15000, 'No'),
(3, 'Laptop', 'Electronics', 70000, 'Yes'),
(4, 'Vacuum Cleaner', 'Appliances', 12000, 'Yes'),
(5, 'Wireless Earbuds', 'Electronics', 3000, 'Yes');


SELECT * FROM Products WHERE category = "Appliances" AND in_stock = "Yes" OR category = "Electronics" AND price > 10000;