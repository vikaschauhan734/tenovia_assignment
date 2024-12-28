CREATE SCHEMA `ecommerce` ;

USE `ecommerce`;

CREATE TABLE Customers (
    CustomerID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255),
    Email VARCHAR(255),
    Region VARCHAR(100)
);

CREATE TABLE Products (
    ProductID INT AUTO_INCREMENT PRIMARY KEY,
    ProductName VARCHAR(255),
    Category VARCHAR(100),
    Price DECIMAL(10, 2)
);

CREATE TABLE SalesTransactions (
    TransactionID INT AUTO_INCREMENT PRIMARY KEY,
    CustomerID INT,
    ProductID INT,
    TransactionDate DATETIME,
    Quantity INT,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID),
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);

CREATE TABLE TrafficSources (
    SourceID INT AUTO_INCREMENT PRIMARY KEY,
    SourceName VARCHAR(100),
    Visits INT,
    Conversions INT
);
