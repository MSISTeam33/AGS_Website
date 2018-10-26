var sensorApp = new Vue({
  el: '#sensorPage',
  data: {
      sensorList: [{
        sensorDeployedId:'',
        sensorId :'',
        turbineDeployedId :'',
        serialNumber :'',
        deployedDate :''
      }]
  },
  methods: {
    //works with HTML page to get data from API
    fetchSensors () {
      fetch('api/sensor.php')
      .then( response => response.json() )
      .then( json => {sensorApp.sensorList = json} )
      .catch( err => {
        console.log('SENSOR FETCH ERROR:');
        console.log(err);
      })
    }, //end of fetch Sensor
  }, //end of methods

  created () {
    //works with HTML page to get data from API
    this.fetchSensors();
  }
})
