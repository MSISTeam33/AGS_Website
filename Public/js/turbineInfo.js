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

  }, //end of methods

  created () {
    // Do data fetch
   const url = new URL(window.location.href);
   const siteId = url.searchParams.get('siteId');
   console.log('Site: '+ siteId);

   // TODO: Fetch task-specific data
   fetch('api/turbineInfo.php?siteId='+siteId)
   .then( response => response.json() )
   .then( json => {turbineApp.turbineList = json} )
   .catch( err => {
     console.error('TURBINE FETCH ERROR:');
     console.error(err);
   })
  }
})
