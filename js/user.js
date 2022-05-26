        let userlink = document.getElementById('userlink');
        // let signoutlink = document.getElementById('signoutLink');
        let header = document.getElementById('hh');
        var currentUser = null;

        function getusername(){
            let keeploggedin = localStorage.getItem('keeploggedin');

            if(keeploggedin == 'yes'){
                currentUser = JSON.parse(localStorage.getItem('user'));
            }
            else{
                currentUser = JSON.parse(sessionStorage.getItem('user'));
            }
        }

        // function signout(){
        //     sessionStorage.removeItem('user');
        //     localStorage.removeItem('user');
        //     localStorage.removeItem('keeploggedin');
        //     window.location = "home.html";
        // }

        window.onload = function(){
            getusername();
            if(currentUser == null){
              userlink.innerText = "Create new Account";
              userlink.classList.replace("nav-link", "btn");
              userlink.classList.add("btn-primary");
              userlink.href = "register.html";
            }

            else{
                userlink.innerText = currentUser.username;
                header.innerText = "We Welcome you "+ currentUser.fullname +" to BusyBeans";
                userlink.classList.replace("btn","nav-link");
                userlink.classList.remove("btn-primary");
                userlink.href = "#";

            }
        }