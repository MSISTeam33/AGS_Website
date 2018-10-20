var commentsApp = new Vue({
  el: '#commentMain',
  data: {
    comments: [{
      id: 0,
      comment: ''
    }],
    commentForm: { },   // populated by this.getEmptyWorkForm()
    commentList: [{
      id: 0,
      comment: ''
    }] // All the teams
  },
  computed: {
  },
  methods: {
    handleCommentForm(e) {

      const s = document.getElementById('comment').value;
      console.log(s);

      // POST to remote server
      fetch('api/comment.php', {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify({
          comment:s
        }) // body data type must match "Content-Type" header
      })
      .then( response => response.json() )
      .then(response => {console.log(response)})
      .then( json => {this.commentList = json})
      .catch( err => {
      })

      // Reset workForm
      this.commentForm = this.getEmptyCommentForm();
    },
    getEmptyCommentForm() {
      return {
        id: 0,
        comment: null
      }
    }

  },
  created () {
    const url = new URL(window.location.href);

    fetch('api/comment.php')
    .then( response => response.json() )
    .then( json => {commentsApp.commentList = json})
    .catch( err => {
      console.log('COMMENTS FETCH ERROR:');
      console.log(err);
    })
  }
})
