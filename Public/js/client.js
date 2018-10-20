var clientApp = new Vue({
  el: '#clientPage',
  data: {
    client: [],
},
  
  created () {
    fetch('api/client.php')
    .then(response => response.json())
    .then(json => {this.client = json; console.log(json);})
    .catch(err=> {
      console.log('CLIENT FETCH ERROR:');
      console.log(err);
    }
  )}
})
