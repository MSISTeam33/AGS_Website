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
          entry.dataCollectedDate = Number(entry.dataCollectedDate);
        }
      )
    },

    buildHeatChart() {

      Highcharts.chart('heatChart', {
        chart: {
          type: 'area'
        },
        title: {
          text: ''
        },
        xAxis: {
          enabled: true,
          title: {
            enabled: true,
            text: 'Heat Rate'
          },
          startOnTick: true,
          endOnTick: true,
          showLastLabel: true
        },
        yAxis: {
          title: {
            text: 'Date'
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
          data: kpiHeatApp.sensorTimeSeries.map(entry => [entry.heatRate, entry.dataCollectedDate])

        }]
      })
    }
  },

  created() {

    const url = new URL(window.location.href);
    const sensorDeployedId = url.searchParams.get('sensorDeployedId');
    this.sensorDeployedId = sensorDeployedId;

    this.fetchSensorTimeSeries(sensorDeployedId);
  }
})
