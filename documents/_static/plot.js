getData();

async function getData() {
	const response = await fetch('data.json');
	console.log(response);
	const data = await response.json();
	console.log(data);
        const xdata = data.map(item => item.x);
        const ydata = data.map(item => item.y);
	
	console.log(xdata);
	console.log(ydata);
	const ctx = document.getElementById('myChart').getContext('2d');
                
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: xdata,
                datasets: [{
                    label: 'Area Data',
                    data: ydata,
                    borderColor: 'blue',
                    backgroundColor: 'rgba(0, 0, 255, 0.2)',
                    fill: true, // Enable area fill
                }]
            },
            options: {
                responsive: true,
                scales: {
                    x: {
                        type: 'linear',
                        position: 'bottom'
                    },
                    y: {
                        beginAtZero: true // Start y-axis from 0
                    }
                }
            }
        });


}


