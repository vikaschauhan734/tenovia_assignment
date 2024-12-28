fetch('http://127.0.0.1:5000/api/traffic')
    .then(response => response.json())
    .then(data => {
        const labels = data.map(item => item.SourceName);
        const values = data.map(item => item.Visits);

        const ctx = document.getElementById('trafficChart').getContext('2d');
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Traffic Sources',
                    data: values,
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
                }]
            }
        });
    })
    .catch(error => console.error('Error fetching traffic data:', error));

fetch('http://127.0.0.1:5000/api/sales')
    .then(response => response.json())
    .then(data => {
        const tableBody = document.querySelector('#salesTable tbody');
        data.forEach(item => {
            const row = `<tr>
                <td>${item.TransactionID}</td>
                <td>${item.CustomerName}</td>
                <td>${item.ProductName}</td>
                <td>${new Date(item.TransactionDate).toLocaleDateString()}</td>
                <td>${item.Quantity}</td>
                <td>$${item.Price}</td>
            </tr>`;
            tableBody.innerHTML += row;
        });
    })
    .catch(error => console.error('Error fetching sales data:', error));

    fetch('http://127.0.0.1:5000/api/conversions')
    .then(response => response.json())
    .then(data => {
        const labels = data.map(item => item.SourceName);
        const values = data.map(item => item.ConversionRate);

        const ctx = document.getElementById('conversionChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Conversion Rate (%)',
                    data: values,
                    backgroundColor: '#42A5F5'
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    })
    .catch(error => console.error('Error fetching conversion data:', error));
