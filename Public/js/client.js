var clientApp = new Vue({
  el: '#clientPage',
  data: {
    client: [],
},

  create () {
    fetch('api/client.php')
    .then(response => response.json())
    .then(json => {this.client = json})
    .catch(err=> {
      console.log('CLIENT FETCH ERROR:');
      console.log(err);
    }
  )}
})
