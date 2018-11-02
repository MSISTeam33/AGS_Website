var kpiHeatApp = new Vue({
  el: '#kpiHeat',
  data: {
    sensorTimeSeries: [],
  },

  methods: {
    fetchSensorTimeSeries(sensorDeployedId) {
      fetch('/api/sensorTimeSeries.php?sensorDeployedId=' + sensorDeployedId)
        .then(response => response.json())
        .then(json => {
          kpiHeatApp.sensorTimeSeries = json;
          kpiHeatApp.formatData();
          kpiHeatApp.buildHeatChart();
        })
        .catch(err => {
          console.log('Error getting data');
          console.log(err);
        })
    },

    formatData() {
      this.sensorTimeSeries.forEach(
        (entry, index, arr) => {
          entry.heatRate = Number(entry.heatRate);
          entry.dataCollectedDate = Date.parse(entry.dataCollectedDate);
        }
      )
    },

    buildHeatChart() {

      Highcharts.chart('heatChart', {
        xAxis: {
            enabled:true,
            type: 'datetime',
            title: {
              text: 'Date'
            }
        },
        yAxis: {
            enabled:true,
            title: {
              text: 'Heat Rate'
            }
        },
        title: {
            text: 'Heat Rate - Time'
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
        series: [
        {
            type: 'area',
            name: 'Heat Rate/Time',
            data: kpiHeatApp.sensorTimeSeries.map( entry=>
              [entry.dataCollectedDate, entry.heatRate]
            )
        }]
    });
    }
  },

  created() {

    const url = new URL(window.location.href);
    const sensorDeployedId = url.searchParams.get('sensorDeployedId');
    this.sensorDeployedId = sensorDeployedId;
    this.fetchSensorTimeSeries(sensorDeployedId);
  }
})
