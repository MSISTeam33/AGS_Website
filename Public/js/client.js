var clientApp = new Vue({
  el: '#clientPage',
  data: {
    clientList: [{
      'clientId' : '',
      'clientName' :'',
      'clientDescription':'',
      'gicsSector':'',
      'gicsSubIndustry':'',
      'headquarters':''
      }]
  },
  methods: {
    //works with HTML page to get data from API
    fetchClients () {
      fetch('api/client.php')
      .then( response => response.json() )
      .then( json => {clientApp.clientList = json} )
      .catch( err => {
        console.log('CLIENT FETCH ERROR:');
        console.log(err);
      })
    }, //end of fetch clients
    gotoSite(cid) {
      window.location = 'site.html?clientId=' + cid;
    } //end of go to Site
  }, //end of methods

  created () {
    //works with HTML page to get data from API
    this.fetchClients();
  }
})
