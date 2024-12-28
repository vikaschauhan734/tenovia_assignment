# Project: Inventory Management System and ECommerce Dashboard

This project consists of two tasks:
1. **Inventory Management System**: A lightweight tool to track stock levels and optimize supply chain workflows.
2. **ECommerce Dashboard**: A data visualization dashboard to track and analyze eCommerce performance metrics.

## Directory Structure
```
project/
├── task1/
│   ├── backend/
│   │   ├── app.py
│   │   ├── db/
|   |   |   ├──config.py
|   |   |   ├──schema.sql
│   │   ├── requirements.txt
│   ├── inventory-frontend/
│   │   ├── static/
│   │   │   ├── css/
│   │   │   │   └── styles.css
│   │   │   └── js/
│   │   │       └── scripts.js
│   │   ├── index.html
│   ├── frontend/
│   │   ├── public/
│   │   │   ├── index.html
│   │   │   └── favicon.ico
│   │   ├── src/
│   │   │   ├── components/ 
│   │   │   │   ├── AddStock.js
│   │   │   │   ├── InventoryStatus.js
│   │   │   │   └── LowStock.js        
│   │   │   ├── App.js        
│   │   │   ├── index.js          
│   │   │   ├── App.css          
│   │   │   └── services/
│   │   │       └── api.js    
│   │   └── package.json     
│   └── README.md      
├── task2/
│   ├── backend/
│   │   ├── app.py
│   │   ├── db_config.py
│   │   ├── requirements.txt
│   ├── frontend/
│   │   ├── static/
│   │   │   ├── css/
│   │   │   │   └── styles.css
│   │   │   └── js/
│   │   │       └── scripts.js
│   │   ├── index.html
├── README.md
```

---

## Task 1: Inventory Management System

### Objective
To develop a tool to:
- Track stock levels
- Optimize supply chain workflows
- Minimize out-of-stock scenarios

### Features
- APIs for stock management: Add, update, and retrieve stock levels.
- Basic analytics to identify top products at risk of stock-out.
- A simple frontend to visualize inventory status.

### Steps to Run

#### Backend:
1. Navigate to the `task1/backend` directory.
2. Install the required dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Run the backend server:
   ```bash
   python app.py
   ```

#### Frontend:
1. Open the `task1/inventory-frontend` directory and host the static files using a lightweight server:
   ```bash
   python -m http.server
   ```
2. Access the frontend in your browser and test the functionality.

---

## Task 2: ECommerce Dashboard

### Objective
To create a dashboard that tracks and visualizes eCommerce performance metrics such as:
- Conversion rates
- Traffic sources
- Average order value

### Features
- Backend APIs to provide eCommerce metrics data.
- Frontend visualizations using Chart.js.
- Filtering options for date range, categories, or regions.

### Steps to Run

#### Backend:
1. Navigate to the `task2` directory.
2. Run the backend server:
   ```bash
   python app.py
   ```

#### Frontend:
1. Open the `task2/templates/index.html` in your browser or host it locally using a lightweight server:
   ```bash
   python -m http.server
   ```
2. Access the frontend in your browser and test the visualizations.

---

## Requirements
- **Backend**:
  - Python 
  - Flask
  - MySQL

- **Frontend**:
  - HTML/CSS
  - JavaScript
  - Chart.js

---

Feel free to explore and expand the functionality of both tasks!
