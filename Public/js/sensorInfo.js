var sensorApp = new Vue({
  el: '#sensorPage',
  data: {
      sensorList: [{
        sensorDeployedId:'',
        sensorId :'',
        turbineDeployedId :'',
        serialNumber :'',
        deployedDate :'',
        sensorName :'',
        sensorDescription:'',
        manufacturer:'',
        totalLifeExpentancyHours:''
      }]
  },
  methods: {
    //works with HTML page to get data from API
    // fetchSensorInfo () {
    //   fetch('api/sensorInfo.php')
    //   .then( response => response.json() )
    //   .then( json => {sensorApp.sensorList = json} )
    //   .catch( err => {
    //     console.log('SENSOR INFO FETCH ERROR:');
    //     console.log(err);
    //   })
    // }, //end of fetch Sensor

    expandRow(event){
      var el = event.currentTarget;
      $(el).toggleClass('row-active');
  		$(el).parents('.row').find('.expandable').toggleClass('row-open');
  		$(el).parents('.row').find('.row-toggle').toggleClass('row-toggle-twist');
    } //end of expand row
  }, //end of methods

  created () {
    // Do data fetch
   const url = new URL(window.location.href);
   const turbineDeployedId = url.searchParams.get('turbineDeployedId');
   console.log('turbineDeployedId: '+ turbineDeployedId);

   // TODO: Fetch turbine-specific sensors
   fetch('api/sensorInfo.php?turbineDeployedId='+turbineDeployedId)
   .then( response => response.json() )
   .then(console.log(response))
   .then( json => {sensorApp.sensorList = json} )
   .catch( err => {
     console.error('SENSOR FETCH ERROR:');
     console.error(err);
   })
  }
})
