var siteApp = new Vue({
  el: '#sitePage',
  data: {
      siteTurbineList: [{
        'siteId' : '',
        'clientId' : '',
        'siteName' : '',
        'siteDescription': '',
        'primaryContact':'',
        'capacity':'',
        'commercialDate':'',
        'addrLine1':'',
        'addrCity':'',
        'addrState':'',
        'addrZip':'',
        'addrCountry':'',
        'turbineDeployedId' :'',
        'turbineId' :'',
        'serialNumber' :'',
        'deployedDate' :'',
        'totalFiredHours' :'',
        'totalStarts' :'',
        'lastPlannedOutageDate' :'',
        'lastUnplannedOutageDate' :''
      }]
  },
  methods: {
    loadTurbine(event)
    {
      var el = event.currentTarget;

      // get the clicked element
      $(el).toggleClass('row-active');

  		$(el).parents('.row').find('.expandable').toggleClass('row-open');
  		$(el).parents('.row').find('.row-toggle').toggleClass('row-toggle-twist');
    }, //end of load turbine

    gotoSensors(tid) {
      window.location = 'turbineSensors.html?turbineDeployedId=' + tid;
    }, //end of go to Site
  }, //end of methods

  created () {
    // Do data fetch
   const url = new URL(window.location.href);
   const clientId = url.searchParams.get('clientId');
   console.log('Client: '+ clientId);

   // TODO: Fetch client-specific site
   fetch('api/siteTurbine.php?clientId='+clientId)
   .then( response => response.json() )
   .then( json => {siteApp.siteTurbineList = json} )
   .catch( err => {
     console.error('SITE FETCH ERROR:');
     console.error(err);
   })
  }
});
