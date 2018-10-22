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

    fetchClients () {
      fetch('api/client.php')
      .then( response => response.json() )
      .then( json => {clientApp.clientList = json} )
      .catch( err => {
        console.log('CLIENT FETCH ERROR:');
        console.log(err);
      })
    }, //end of fetch clients
  }, //end of methods
  created () {
    this.fetchClients();
  }
})
