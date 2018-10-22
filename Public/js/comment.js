var commentApp = new Vue({
  el: '#clientPage',
  data: {
    commentList: [{
      commentId:'',
      clientId:'',
      commentSection:''
      }]
  },
  methods: {

    fetchComments () {
      fetch('api/comment.php')
      .then( response => response.json() )
      .then( json => {commentApp.commentList = json} )
      .catch( err => {
        console.log('COMMENT FETCH ERROR:');
        console.log(err);
      })
    }, //end of fetch comments
  }, //end of methods
  created () {
    this.fetchComments();
  }
})
