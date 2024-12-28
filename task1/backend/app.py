from flask import Flask, request, jsonify
import mysql.connector

app = Flask(__name__)

# Database connection
def db_connection():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password="localhost",
        database="inventory"
    )

# Add Stock API
@app.route('/api/stock/add', methods=['POST'])
def add_stock():
    data = request.json
    product_id = data.get('ProductID')
    quantity = data.get('Quantity')

    if not product_id or not quantity:
        return jsonify({'error': 'Invalid input'}), 400

    conn = db_connection()
    cursor = conn.cursor()

    # Update Stock Level
    query = "UPDATE products SET stock_level = stock_level + %s WHERE product_id = %s"
    cursor.execute(query, (quantity, product_id))
    conn.commit()

    if cursor.rowcount == 0:
        return jsonify({'error': 'Product not found'}), 404

    return jsonify({'message': 'Stock updated successfully'}), 200


# Update Stock Level API
@app.route('/api/stock/update', methods=['PUT'])
def update_stock():
    data = request.json
    product_id = data.get('ProductID')
    stock_level = data.get('StockLevel')

    if not product_id or stock_level is None:
        return jsonify({'error': 'Invalid input'}), 400

    conn = db_connection()
    cursor = conn.cursor()

    # Update Stock Level
    query = "UPDATE products SET stock_level = %s WHERE product_id = %s"
    cursor.execute(query, (stock_level, product_id))
    conn.commit()

    if cursor.rowcount == 0:
        return jsonify({'error': 'Product not found'}), 404

    return jsonify({'message': 'Stock level updated successfully'}), 200

# Fetch Inventory Status API
@app.route('/api/inventory/status', methods=['GET'])
def fetch_inventory_status():
    conn = db_connection()
    cursor = conn.cursor(dictionary=True)

    query = "SELECT * FROM products"
    cursor.execute(query)
    products = cursor.fetchall()

    return jsonify(products), 200

# Get Low Stock Products API
@app.route('/api/inventory/low-stock', methods=['GET'])
def low_stock_products():
    conn = db_connection()
    cursor = conn.cursor(dictionary=True)

    query = "SELECT * FROM products WHERE stock_level < reorder_level"
    cursor.execute(query)
    products = cursor.fetchall()

    return jsonify(products), 200

if __name__ == '__main__':
    app.run(debug=True)