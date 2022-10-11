const API_EMPLEADO_REGION = "http://localhost:9393/apis/parcial1/empregi"

var ctx = document.getElementById('myChartEmpleadoRegion')
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        datasets: [{
            label: 'Cantidad de Empleados por Región',
            backgroundColor: ['#477A6E', '#A49E2E', '#70C2C5', '#4C7AB6', '#EB8149', '#7930C8', '#90CAF9', '#21A80C'],
            // borderColor: ['White'],
            // borderColor: 'rgb(255, 99, 132)',
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

axios.get(API_EMPLEADO_REGION).then( response => loadData(response.data))
.catch (error => console.log(error))

console.log(myChart);
const loadData = (response_data_year) => {
    
    response_data_year.forEach(element => {
        myChart.data['labels'].push(element.RegionDescription)
        myChart.data['datasets'][0].data.push(element.Cantidad_de_Empleados)
        myChart.update()
    });

}