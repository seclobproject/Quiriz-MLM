function handleScrollAnimation() {
    const section = document.querySelector('.animate-slide-in');
    if (section) {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      if (rect.top <= windowHeight * 0.75) {
        section.classList.add('slide-in-active');
        window.removeEventListener('scroll', handleScrollAnimation); // Remove the event listener once animation triggered
      }
    }
  }

  // Event listener for scroll
  window.addEventListener('scroll', handleScrollAnimation);

  
  document.addEventListener('DOMContentLoaded', (event) => {
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];

    if (!localStorage.getItem('modalShown')) {
   
      setTimeout(function() {
        modal.style.display = "block";
        localStorage.setItem('modalShown', 'true');
      }, 5000); 
    }

    span.onclick = function() {
      modal.style.display = "none";
      localStorage.removeItem('modalShown', 'true')
    }

  });


  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.getElementById('loader').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    }, 500);
});
