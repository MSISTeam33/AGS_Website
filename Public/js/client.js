var clientApp = new Vue({
  el: '#clientPage',
  data: {
    clientList: [{
      'clientId' : '',
      'clientName' :'',
      'clientDescription':'',
      'gicsSector':'',
      'headquarters':''
    }],
    commentList: [{
        'commentId': null,
        'clientId': '',
        'commentSection': ''
    }]
  },
  methods: {
    //works with HTML page to get data from API
    getEmptyForm() {
        document.getElementById('commentSection').value = '';
    }, //end of get empty form

    fetchClients () {
      fetch('api/client.php')
      // .then(json => {
      //     console.log(json)
      // })
      .then( response => response.json())
      .then( json => {clientApp.clientList = json} )
      .catch( err => {
        console.log('CLIENT FETCH ERROR:');
        console.log(err);
      })
    }, //end of fetch clients

    gotoEngines(cid) {
      window.location = 'engineList.html';
    }, //end of go to Site

    gotoGenerators(cid) {
      window.location = 'generatorList.html';
    }, //end of go to Site

    fetchCommentsByClientId(event, cl_id)
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
    }, //end of load comments

    insertNewComment(cliId) {
        const com = (document.getElementById('commentSection').value);

        console.log(com);
        console.log(cliId);

        // POST to remote server
        fetch('api/comment.php', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=utf-8"
                },
                body: JSON.stringify({
                    'commentSection': com,
                    'clientId': cliId
                })
            })
            .then(response => response.json())
            .then(json => {
                clientApp.commentList[0] = json
            })
            .then(json => {
                console.log(clientApp.commentList[0]);
                console.log("BC");
            }) //working till here
            .catch(err => {
                console.error('COMMENT POST ERROR:');
                console.error(err);
            })
        this.getEmptyForm();
        location.reload();
    } //end of insert new comment
  }, //end of methods

  created () {
    //works with HTML page to get data from API
    this.fetchClients();
  }
})
