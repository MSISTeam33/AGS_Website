var loginApp = new Vue({
  el: '#loginPage',
  data : {},
  methods: {
    //works with HTML page to get data from API
    login(){
      var user = document.getElementById('usernameTB').value;
      console.log(user);
      var pass = document.getElementById('passwordTB').value;
      console.log(pass);
      if (user == 'customer1@cummins.com' && pass == 'customer1')
      {
        window.location = 'clientHome.html';
      }
      else if (user == 'technician1@cummins.com' && pass == 'technician1')
      {
        window.location = 't_tasks.html';
      }
      else if (user == 'hr1@cummins.com' && pass == 'manager1')
      {
        window.location = 'index.html';
      }
      else {
        alert("Incorrect username or password!")
      }
    }
  }, //end of methods

  created () {
    //works with HTML page to get data from API
  }
})
