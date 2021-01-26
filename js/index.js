(function(){
   let socials = document.querySelectorAll(".social div");
   console.log(socials);
    socials.forEach(function(social ,index) {
        social.style.animation = `moveIn 1s ease-in-out ${index/7}s`;
    })
})();