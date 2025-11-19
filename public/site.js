// Global JS for Sydvolt multipage site
(function(){
  const toggle = document.querySelector('#menuToggle');
  const mobile = document.querySelector('#mobileNav');
  if(toggle && mobile){
    toggle.addEventListener('click',()=>{
      mobile.style.display = mobile.style.display === 'block' ? 'none' : 'block';
    });
  }

  // Handle forms success messages
  function bindForm(id, successId){
    const form = document.getElementById(id);
    const success = document.getElementById(successId);
    if(form && success){
      form.addEventListener('submit', function(e){
        e.preventDefault();
        success.style.display='block';
        form.reset();
        window.scrollTo({top: form.offsetTop - 80, behavior: 'smooth'});
      });
    }
  }
  bindForm('kontaktForm','kontaktSuccess');
  bindForm('bokaForm','bokaSuccess');
})();
