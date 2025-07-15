    window.onload = function () {
      const savedName = localStorage.getItem("username");
      if (savedName) {
  
        document.getElementById("greeting").innerText = `გამარჯობა, ${savedName}! 👋`;
      }
    }


    function saveName() {
      const name = document.getElementById("nameInput").value.trim();

      if (name !== "") {

        localStorage.setItem("username", name);
 
        document.getElementById("greeting").innerText = `გამარჯობა, ${name}! 👋`;
      } else {
        alert("გთხოვ შეიყვანე სახელი");
      }
    }
   