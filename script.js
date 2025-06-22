    let tabLinks = document.querySelectorAll(".tab-links");
      let tabContents = document.querySelectorAll(".tab-contents");

      function opentab(tabname) {
        tabLinks.forEach(link => link.classList.remove("active-link"));
        tabContents.forEach(content => content.classList.remove("active-content"));

        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-content");
      }


      var sidemenu = document.getElementById("side-menu");
      function openmenu() {
        sidemenu.style.right = "0";
      }

      function closemenu() {
        sidemenu.style.right = "-200px";
      }
