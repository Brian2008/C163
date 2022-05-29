AFRAME.registerComponent("player-movement", {
    init: function () {
      this.walk();
    },
    walk: function () {
      window.addEventListener("keydown", (e) => {
        // Add the condition to play sound
        if(e.key==="ArrowUp"||e.key==="ArrowDown"||e.key==="ArrowLeft"||e.key==="ArrowRight"||e.key==="w"||e.key==="a"||e.key==="s"||e.key==="d"){
          var entity = document.querySelector("#sound2")
          entity.components.sound.playSound()
        }


      });
    },
  });


  