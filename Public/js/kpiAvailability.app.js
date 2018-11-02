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

                  series: [{
                    type: 'area',
                    name: 'Availability',
                    // Data needs [ [date, num], [date2, num2 ], ... ]
                    data: this.sensorTimeSeries.map( item => [item.dataCollectedDate, item.availability] )
                  }]
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
