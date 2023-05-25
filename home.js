const loginBtn = document.getElementById("login-link");
                    const loginBtn2 = document.getElementById("login-link2");
                    const modal = document.getElementById("login-modal");

                    const loginUser=document.getElementById("login-user");
                    const loginMed= document.getElementById("login-med");
                    const loginAdm=document.getElementById("login-adm");

                    const modalmed=document.getElementById("login-modalmed");
                    const modaluser=document.getElementById("login-modaluser");
                    const modaladm=document.getElementById("login-modaladm");

                    loginBtn.onclick = function() {
                    modal.style.display = "block";
                    }
                    loginBtn2.onclick = function() {
                    modal.style.display = "block";
                    }

                    loginMed.onclick=function(){
                    modalmed.style.display="block";
                    }

                    loginUser.onclick=function(){
                    modaluser.style.display="block";
                    }

                    loginAdm.onclick=function(){
                    modaladm.style.display="block";
                    }

                    const closeBtn = document.getElementsByClassName("close")[0];
                    closeBtn.onclick = function() {
                    modal.style.display = "none";
                    }

                    const closeBtn2= document.getElementsByClassName("close1")[0];
                    closeBtn2.onclick=function(){
                    modalmed.style.display = "none";
                    modaluser.style.display = "none";
                    // modaladm.style.display = "none";
                    }