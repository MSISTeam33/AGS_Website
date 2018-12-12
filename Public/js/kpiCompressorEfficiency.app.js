var kpiCompressorEfficiencyApp = new Vue({
  el: '#kpiCompressorEfficiency',
  data: {
    sensorTimeSeries: [],
  },

  methods: {
    fetchSensorTimeSeries(sensorDeployedId) {
      fetch('api/sensorTimeSeries.php?sensorDeployedId=' + sensorDeployedId)
        .then(response => response.json())
        .then(json => {
          kpiCompressorEfficiencyApp.sensorTimeSeries = json;
          kpiCompressorEfficiencyApp.formatData();
          kpiCompressorEfficiencyApp.buildCompressorChart();
        })
        .catch(err => {
          console.log('Error getting data');
          console.log(err);
        })
    },

    formatData() {
      this.sensorTimeSeries.forEach(
        (entry, index, arr) => {
          entry.dateCollected = Date.parse(entry.dataCollectedDate);
          entry.compressorEfficiency = Number(entry.compressorEfficiency);
        }
      )
    },

    buildCompressorChart() {

       Highcharts.chart('compressorEfficiencyChart', {
           chart: {
               zoomType: 'x'
           },
           title: {
               text: 'Compressor Efficiency over Time'
           },
           xAxis: {
               type: 'datetime',
               title: {
                   text: 'Date'
               }
           },
           yAxis: {
               title: {
                   text: 'Compressor Efficiency in sensor'
               }
           },
           legend: {
               enabled: false
           },
           plotOptions: {
               area: {
                   fillColor: {
                       linearGradient: {
                           x1: 0,
                           y1: 0,
                           x2: 0,
                           y2: 1
                       },
                       stops: [
                           [0, Highcharts.getOptions().colors[0]],
                           [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                       ]
                   },
                   marker: {
                       radius: 2
                   },
                   lineWidth: 1,
                   states: {
                       hover: {
                           lineWidth: 1
                       }
                   },
                   threshold: null
               }
           },

           series: [{
               type: 'area',
               name: 'Efficiency',
               data: kpiCompressorEfficiencyApp.sensorTimeSeries.map( entry=>
                 [entry.dateCollected, entry.compressorEfficiency]
               )
           }
         ]
       });
     },
  },

  created() {

    const url = new URL(window.location.href);
    const sensorDeployedId = url.searchParams.get('sensorDeployedId');
    this.sensorDeployedId = sensorDeployedId;

    this.fetchSensorTimeSeries(sensorDeployedId);



  }
})
