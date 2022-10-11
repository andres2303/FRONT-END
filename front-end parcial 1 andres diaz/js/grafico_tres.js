const API_ORDERS_YEAR = "http://localhost:9393/apis/parcial1/orcity"

var ctx = document.getElementById('myChartProductsByCategory')
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        datasets: [{
            label: 'Cantidad de Ordenes por Ciudad',
            backgroundColor: ['#477A6E', '#A49E2E', '#70C2C5', '#4C7AB6', '#EB8149', '#7930C8', '#90CAF9', '#21A80C'],
            borderColor: ['White'],
            borderWidth: 1
        }]
    },
    options: {
        // indexAxis: 'y',
        scales: {
            y: {
                beginAtZero: true
            },
        }
    }
})

fetch(API_ORDERS_YEAR)
    .then(response => response.json())
    .then(datos => loadData(datos))
    .catch(error => console.log(error))


const loadData = (response_data_year) => {
    response_data_year.forEach(element => {
        myChart.data['labels'].push(element.CategoryName)
        myChart.data['datasets'][0].data.push(element.cantidad_productos)
        myChart.update()
    });

}