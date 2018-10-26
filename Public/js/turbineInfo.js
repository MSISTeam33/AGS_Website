var turbineApp = new Vue({
  el: '#turbinePage',
  data: {
      turbineList: [{
        turbineDeployedId :'',
        turbineId :'',
        siteId :'',
        serialNumber :'',
        deployedDate :'',
        totalFiredHours :'',
        totalStarts :'',
        lastPlannedOutageDate :'',
        lastUnplannedOutageDate :''
      }]
  },
  methods: {
    //works with HTML page to get data from API
    fetchTurbines () {
      fetch('api/turbine.php')
      .then( response => response.json() )
      .then( json => {turbineApp.turbineList = json} )
      .catch( err => {
        console.log('TURBINE FETCH ERROR:');
        console.log(err);
      })
    }, //end of fetch Turbine
  }, //end of methods

  created () {
    //works with HTML page to get data from API
    this.fetchTurbines();
  }
})
