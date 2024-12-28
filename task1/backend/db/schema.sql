CREATE SCHEMA `inventory` ;

USE `inventory`;

/*product_id: Unique identifier for the product
product_name: Name of the product
stock_level: Current stock level
reorder_level: Threshold to trigger restocking alerts
*/

CREATE TABLE products (
product_id INT PRIMARY KEY AUTO_INCREMENT,
product_name VARCHAR(100) NOT NULL,
stock_level INT NOT NULL,
reorder_level INT NOT NULL
);