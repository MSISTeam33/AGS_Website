var client = new Vue({
  el: '#clientPage',
  data: {
    client: [],
},

methods: {
  handleCommentForm(e){
    const s = JSON.stringify(this.commentForm);
    console.log(s);

    fetch('api/client.php', {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: s
    })
    .then( response => response.json())
    .then( json => {this.comment.push(json)})
    .catch( err => {
      console.error('CLIENT POST ERROR:');
      console.error(err);
    })
    this.commentForm = this.getEmptyCommentForm();
  },
  getEmptyCommentForm(){
    return{
      comment: ''
    };
  }
},
  created () {
    fetch('api/client.php')
    .then(response => response.json())
    .then(json => {this.comment = json; console.log(json);})
    .catch(err=> {
      console.log('CLIENT FETCH ERROR:');
      console.log(err);
    }
  )}
})
