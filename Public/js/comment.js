var commentApp = new Vue({
  el: '#commentPage',
  data: {
    commentList: [{
      'commentId':'',
      'clientId':'',
      'commentSection':''
      }]
  },
  methods: {
    getEmptyForm() {
      document.getElementById('comment').value = '';
      document.getElementById('clientId').value = '';
    }, //end of get empty form
    fetchComments () {
      fetch('api/comment.php')
      .then( response => response.json() )
      .then( json => {commentApp.commentList = json} )
      .catch( err => {
        console.log('COMMENT FETCH ERROR:');
        console.log(err);
      })
    }, //end of fetch comments

    insertNewComment(e) {
      const com = (document.getElementById('comment').value);
      const cliId = (document.getElementById('clientId').value);
      console.log(com);
      console.log(cliId);
      // POST to remote server
      fetch('api/comment.php', {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({'commentSection':com, 'clientId':cliId})
      })
      .then( response => response.json() )
      .then( json => {console.log(json)}) //broken here
      .then(json => {commentApp.commentList = json})
      .catch( err => {
        console.error('COMMENT POST ERROR:');
        console.error(err);
      })
      this.fetchComments();
      this.getEmptyForm();
    } //end of insert new comment
  }, //end of methods
  created () {
    this.fetchComments();
  }
})
