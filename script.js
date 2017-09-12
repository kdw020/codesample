         document.querySelector("#nav-toggle").addEventListener("click", function () {
             this.classList.toggle("active");
         });

         // Get the modal

         var modalparent = document.getElementsByClassName("modal_multi");

         // Get the button that opens the modal

         var modal_btn_multi = document.getElementsByClassName("myBtn_multi");

         // Get the <span> element that closes the modal
         var span_close_multi = document.getElementsByClassName("close_multi");

         // When the user clicks the button, open the modal
         function setDataIndex() {

             for (i = 0; i < modal_btn_multi.length; i++) {
                 modal_btn_multi[i].setAttribute('data-index', i);
                 modalparent[i].setAttribute('data-index', i);
                 span_close_multi[i].setAttribute('data-index', i);
             }
         }



         for (i = 0; i < modal_btn_multi.length; i++) {
             modal_btn_multi[i].onclick = function () {
                 var ElementIndex = this.getAttribute('data-index');
                 modalparent[ElementIndex].style.display = "block";
             };

             // When the user clicks on <span> (x), close the modal
             span_close_multi[i].onclick = function () {
                 var ElementIndex = this.getAttribute('data-index');
                 modalparent[ElementIndex].style.display = "none";
             };

         }

         window.onload = function () {

             setDataIndex();
         };

         window.onclick = function (event) {
             if (event.target === modalparent[event.target.getAttribute('data-index')]) {
                 modalparent[event.target.getAttribute('data-index')].style.display = "none";
             }
         };


         //pause
         var vid = document.getElementById("bgvid");
         var pauseButton = document.querySelector("#pause");

         if (window.matchMedia('(prefers-reduced-motion)').matches) {
             vid.removeAttribute("autoplay");
             vid.pause();
             pauseButton.innerHTML = "Play";
         }

         function vidFade() {
             vid.classList.add("stopfade");
         }

         vid.addEventListener('ended', function () {
             // only functional if "loop" is removed 
             vid.pause();
             pauseButton.innerHTML = "Play";
             // to capture IE10
             vidFade();
         });


         pauseButton.addEventListener("click", function () {
             vid.classList.toggle("stopfade");
             if (vid.paused) {
                 vid.play();
                 pauseButton.innerHTML = "Pause";
             } else {
                 vid.pause();
                 pauseButton.innerHTML = "Play";
             }
         });
         //nav
         function toggleNav() {
             var element = document.getElementById("nav");
             if (element.style.width == "100%") {
                 element.style.width = "0%";
             } else {
                 element.style.width = "100%";
             }
         }
