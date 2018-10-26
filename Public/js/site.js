var siteApp = new Vue({
  el: '#sitePage',
  data: {
    siteList: [{
      siteId : '',
      clientId : '',
      siteName :'',
      siteDescription:'',
      primaryContact:'',
      capacity:'',
      commercialDate:'',
      addrLine1:'',
      addrCity:'',
      addrState:'',
      addrZip:'',
      addrCountry:''
      }]
  },
  methods: {
    //works with HTML page to get data from API
    fetchSites () {
      fetch('api/site.php')
      .then( response => response.json() )
      .then( json => {sitetApp.siteList = json} )
      .catch( err => {
        console.log('SITE FETCH ERROR:');
        console.log(err);
      })
    }, //end of fetch site
  }, //end of methods

  created () {
    //works with HTML page to get data from API
    this.fetchSites();
  }
})
