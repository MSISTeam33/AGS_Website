var kpiReliabilityApp = new Vue({
  el: '#kpiReliability',
  data: {
    sensorTimeSeries: [],
  },

  methods:{
    fetchSensorTimeSeries (sensorDeployedId){
      fetch('/api/sensorTimeSeries.php?sensorDeployedId='+sensorDeployedId)
      .then( response => response.json() )
      .then( json => {
        kpiReliabilityApp.sensorTimeSeries = json;
        kpiReliabilityApp.formatData();
        kpiReliabilityApp.buildReliabilityChart();
      } )
      .catch( err => {
        console.log('Error getting data');
        console.log(err);
      })
    },

    formatData(){
      this.sensorTimeSeries.forEach(
        (entry, index, arr) => {
          entry.dateCollected = Date.parse(entry.dataCollectedDate);
          entry.reliability = Number(entry.reliability);
        }
      )
    },

    buildReliabilityChart(){
        Highcharts.chart('reliabilityChart', {
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
              text: 'Reliability'
            }
        },
        title: {
            text: 'Scatter plot of Reliability'
        },
        series: [
        {
            type: 'scatter',
            name: 'Reliability/Time',
            data: kpiReliabilityApp.sensorTimeSeries.map( entry=>
              [entry.dateCollected, entry.reliability]
            ),
            marker: {
                radius: 4
            }
        }]
    });
    }
    },

  created () {

    const url = new URL(window.location.href);
    const sensorDeployedId = url.searchParams.get('sensorDeployedId');
    this.sensorDeployedId = sensorDeployedId;

    this.fetchSensorTimeSeries(sensorDeployedId);

  }
})