var commentApp = new Vue({
  el: '#clientPage',
  data: {
    commentForm: { },   // populated by this.getEmptyWorkForm()
    commentList: [] // All the teams
},
methods: {
  handleCommentForm(e) {

    const s = JSON.stringify(this.commentForm);
    console.log(s);

    // POST to remote server
    fetch('api/comment.php', {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
          "Content-Type": "application/json; charset=utf-8"
      },
      body: s
      }) // body data type must match "Content-Type" header
    .then( response => response.json() )
    .then( json => {this.commentList.push(json)})
    .catch( err => {
      console.error('COMMENT POST ERROR:');
      console.error(err);
    })

    // Reset workForm
    this.commentForm = this.getEmptyCommentForm();
  },
  getEmptyCommentForm() {
    return {
      clientId:0,
      commentSection: null
    }
  }

},
  created () {
    this.commentForm=this.getEmptyCommentForm();


    fetch('api/comment.php')
    .then( response => response.json() )
    .then( json => {commentsApp.commentList = json})
    .catch( err => {
      console.log('COMMENTS FETCH ERROR:');
      console.log(err);
    })
}
})
