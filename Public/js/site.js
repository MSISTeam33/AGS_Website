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
      }]
  },
  methods: {

  }, //end of methods

  created () {
    // Do data fetch
   const url = new URL(window.location.href);
   const clientId = url.searchParams.get('clientId');
   console.log('Client: '+ clientId);
   //this.siteList.ClientId = clientId;

   // TODO: Fetch task-specific data
   fetch('api/site.php?clientId='+clientId)
   .then( response => response.json() )
   .then( json => {siteApp.siteList = json} )
   .catch( err => {
     console.error('SITE FETCH ERROR:');
     console.error(err);
   })
  }
})
