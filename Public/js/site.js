var siteApp = new Vue({
  el: '#sitePage',
  data: {
    site: [{
      siteId:'',
      clientId:'',
      siteName:'',
      siteDescription:'',
      capacity:'',
      commericialDate:'',
      addrLine1:'',
      addrLine2:'',
      addrCity:'',
      addrState:'',
      addrZip:'',
      addrCountry:''
    }],
  },
  methods:{
    fetchSites() {
      fetch('api/site.php')
      .then( response => response.json() )
      .then( json => {siteApp.site = json} )
      .catch( err => {
        console.log('SITE FETCH ERROR:');
        console.log(err);
      })
    } //end of fetch comments
}, //end of methods

created () {
  this.fetchSites();
}//end of created
})
