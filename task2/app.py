from flask import Flask, jsonify, request
from db_config import get_db_connection

app = Flask(__name__)

@app.route('/api/traffic', methods=['GET'])
def get_traffic_sources():
    connection = get_db_connection()
    cursor = connection.cursor(dictionary=True)
    cursor.execute("SELECT * FROM TrafficSources")
    result = cursor.fetchall()
    connection.close()
    return jsonify(result)

@app.route('/api/sales', methods=['GET'])
def get_sales_data():
    connection = get_db_connection()
    cursor = connection.cursor(dictionary=True)
    query = """
        SELECT st.TransactionID, c.Name AS CustomerName, p.ProductName, st.TransactionDate, st.Quantity, p.Price
        FROM SalesTransactions st
        JOIN Customers c ON st.CustomerID = c.CustomerID
        JOIN Products p ON st.ProductID = p.ProductID
    """
    cursor.execute(query)
    result = cursor.fetchall()
    connection.close()
    return jsonify(result)

@app.route('/api/conversions', methods=['GET'])
def get_conversion_rate():
    connection = get_db_connection()
    cursor = connection.cursor(dictionary=True)
    query = """
        SELECT SourceName, SUM(Conversions) / SUM(Visits) * 100 AS ConversionRate
        FROM TrafficSources
        GROUP BY SourceName
    """
    cursor.execute(query)
    result = cursor.fetchall()
    connection.close()
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
