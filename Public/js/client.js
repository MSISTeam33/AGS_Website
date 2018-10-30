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
    }],
    commentList: [{
        'commentId': '',
        'clientId': '',
        'commentSection': ''
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
      window.location = 'siteTurbine.html?clientId=' + cid;
    }, //end of go to Site

    loadComments(event, cl_id)
    {
      var el = event.currentTarget;
      var clientId = cl_id;
      console.log(el, clientId);

      // TODO: Fetch client-specific comments
      fetch('api/comment.php?clientId='+clientId)
      .then( response => response.json() )
      .then( json => {clientApp.commentList = json} )
      .catch( err => {
        console.error('COMMENT FETCH ERROR:');
        console.error(err);
      })

      // get the clicked element
      $(el).toggleClass('row-active');

  		$(el).parents('.row').find('.expandable').toggleClass('row-open');
  		$(el).parents('.row').find('.row-toggle').toggleClass('row-toggle-twist');
    } //end of load comments
  }, //end of methods

  created () {
    //works with HTML page to get data from API
    this.fetchClients();
  }
})
