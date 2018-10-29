var siteApp = new Vue({
  el: '#sitePage',
  data: {
      siteList: [{
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
        'addrCountry':''
      }],
      turbineList: [{
        'turbineDeployedId' :'',
        'turbineId' :'',
        'siteId' :'',
        'serialNumber' :'',
        'deployedDate' :'',
        'totalFiredHours' :'',
        'totalStarts' :'',
        'lastPlannedOutageDate' :'',
        'lastUnplannedOutageDate' :''
      }]
  },
  methods: {
    loadTurbine(event, sid) //siteId)
    {
      var el = event.currentTarget;
      var siteId = sid;
      console.log(el, siteId);
      //log

      // TODO: Fetch task-specific data
      fetch('api/turbineInfo.php?siteId='+siteId)
      .then( response => response.json() )
      .then( json => {siteApp.turbineList = json} )
      .catch( err => {
        console.error('TURBINE FETCH ERROR:');
        console.error(err);
      })

      // get the clicked element
      $(el).toggleClass('row-active');

  		$(el).parent().find('.expandable').toggleClass('row-open');
  		$(el).parent().find('.row-toggle').toggleClass('row-toggle-twist');
    }
  }, //end of methods

  created () {
    // Do data fetch
   const url = new URL(window.location.href);
   const clientId = url.searchParams.get('clientId');
   console.log('Client: '+ clientId);

   // TODO: Fetch client-specific site
   fetch('api/site.php?clientId='+clientId)
   .then( response => response.json() )
   .then( json => {siteApp.siteList = json} )
   .catch( err => {
     console.error('SITE FETCH ERROR:');
     console.error(err);
   })
  }
});
