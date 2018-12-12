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
              kpiAvailabilityApp.buildAvailabilityChart();
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
