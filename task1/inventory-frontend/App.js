import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const [inventory, setInventory] = useState([]);
    const [lowStock, setLowStock] = useState([]);

    // Fetch inventory data
    useEffect(() => {
        axios.get('http://127.0.0.1:5000/api/inventory/status')
            .then(response => setInventory(response.data))
            .catch(error => console.error(error));
        
        axios.get('http://127.0.0.1:5000/api/inventory/low-stock')
            .then(response => setLowStock(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div className="container mt-5">
            <h1 className="text-center">Inventory Management</h1>

            <h2>Inventory Status</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Stock Level</th>
                        <th>Reorder Level</th>
                    </tr>
                </thead>
                <tbody>
                    {inventory.map(product => (
                        <tr key={product.ProductID}>
                            <td>{product.ProductID}</td>
                            <td>{product.ProductName}</td>
                            <td>{product.StockLevel}</td>
                            <td>{product.ReorderLevel}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <h2>Low Stock Products</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Stock Level</th>
                        <th>Reorder Level</th>
                    </tr>
                </thead>
                <tbody>
                    {lowStock.map(product => (
                        <tr key={product.ProductID}>
                            <td>{product.ProductID}</td>
                            <td>{product.ProductName}</td>
                            <td>{product.StockLevel}</td>
                            <td>{product.ReorderLevel}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default App;
