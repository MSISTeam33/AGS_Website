var sensorApp = new Vue({
  el: '#sensorPage',
  data: {
    sensorList: [{
      sensorDeployedId: '',
      sensorId: '',
      turbineDeployedId: '',
      serialNumber: '',
      deployedDate: '',
      sensorName: '',
      sensorDescription: '',
      manufacturer: '',
      totalLifeExpentancyHours: ''
    }]
  },
  methods: {
    expandRow(event) {
      var el = event.currentTarget;
      $(el).toggleClass('row-active');
      $(el).parents('.row').find('.expandable').toggleClass('row-open');
      $(el).parents('.row').find('.row-toggle').toggleClass('row-toggle-twist');
    }, //end of expand row

    gotoCharts(sid) {
      window.location = 'sensorTimeSeries.html?sensorDeployedId=' + sid;
    } //end of go to Site
  }, //end of methods

  created() {
    // Do data fetch
    const url = new URL(window.location.href);
    const turbineDeployedId = url.searchParams.get('turbineDeployedId');
    console.log('turbineDeployedId: ' + turbineDeployedId);

    // TODO: Fetch turbine-specific sensors
    fetch('api/sensorInfo.php?turbineDeployedId=' + turbineDeployedId)
      .then(response => response.json())
      .then(json => {
        sensorApp.sensorList = json
      })
      .catch(err => {
        console.error('SENSOR FETCH ERROR:');
        console.error(err);
      })
  }
})
