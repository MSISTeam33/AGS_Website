var kpiAvailabilityApp = new Vue({
      el: '#kpiAvailability',
      data: {

      },

      methods: {
        fetchKPIBySensorDeployedId(sensorDeployedId) {
          fetch('/api/sensorTimeSeries.php?sensorDeployedId=' + sensorDeployedId)
            .then(response => response.json())
            .then(json => {
              kpiAvailabilityApp.sensorTimeSeries = json;
              kpiAvailabilityApp.formatData();
              //kpiAvailabilityApp.buildAvailabilityChart();
            })
            .catch(err => {
              console.log('Error getting data');
              console.log(err);
            })
        },

        formatData() {
          this.sensorTimeSeries.forEach(
            (entry, index, arr) => {
              entry.dataCollectedDate = Date.parse(entry.dataCollectedDate);
              entry.availability = Number(entry.availability);
            }
          )
        },

        buildAvailabilityChart() {

          var series = {};

          series.forEach( function(i) {

                if (!(i.sensorDeployedId in series)) {
                  series[i.sensorDeployedId] = { name: i.sensorSerialNumber + '('+i.sensorName+')', data:[]};
                }
              series[i.sensorDeployedId].data.push([i.dataCollectedDate, i.availability]);
          });



                Highcharts.chart('availabilityChart', {
                  xAxis: {
                    enabled: true,
                    type: 'datetime',
                    title: {
                      text: 'Date'
                    }
                  },
                  yAxis: {
                    enabled: true,
                    title: {
                      text: 'Availability Percentage'
                    }
                  },
                  title: {
                    text: 'Scatter Plot of Availability'
                  },
                  series: Object.values(series)
                });
              },
            },

            created() {

              const url = new URL(window.location.href);
              const sensorDeployedId = url.searchParams.get('sensorDeployedId');
              //  console.log('Turbine: ' + turbineDeployedId);
              this.sensorDeployedId = sensorDeployedId;

              this.fetchKPIBySensorDeployedId(sensorDeployedId);



            }
        })
