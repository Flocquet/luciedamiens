(function(){
  var toggle=document.querySelector('.site-nav-toggle'), menu=document.getElementById('site-nav-menu');
  if(toggle&&menu){
    toggle.addEventListener('click',function(){
      var o=menu.classList.toggle('open'); toggle.setAttribute('aria-expanded',o?'true':'false');
    });
  }
  var sub=document.querySelector('.sub-toggle'), list=document.getElementById('sub-approches');
  if(sub&&list){
    sub.addEventListener('click',function(){
      var o=list.classList.toggle('open'); sub.setAttribute('aria-expanded',o?'true':'false');
    });
    document.addEventListener('keydown',function(e){
      if(e.key==='Escape'){list.classList.remove('open');sub.setAttribute('aria-expanded','false');
        if(menu&&menu.classList.contains('open')&&toggle){menu.classList.remove('open');toggle.setAttribute('aria-expanded','false');}}
    });
    document.addEventListener('click',function(e){
      if(!e.target.closest('.has-sub')){list.classList.remove('open');sub.setAttribute('aria-expanded','false');}
    });
  }
  var path=location.pathname.replace(/\.html$/,'').replace(/\/$/,'')||'/';
  document.querySelectorAll('.site-nav-menu a[href^="/"]').forEach(function(a){
    var h=a.getAttribute('href').split('#')[0].replace(/\/$/,'')||'/';
    if(h===path&&a.getAttribute('href').indexOf('#')===-1){a.setAttribute('aria-current','page');}
  });
  var btn=document.querySelector('.map-consent-btn');
  if(btn){
    btn.addEventListener('click',function(){
      var f=document.createElement('iframe');
      f.src=btn.getAttribute('data-map-src'); f.title='Carte Google Maps : cabinet de Lucie Damiens, 22 rue Sainte-Marie, Le Tallud';
      f.setAttribute('allowfullscreen',''); f.setAttribute('referrerpolicy','no-referrer-when-downgrade');
      var slot=btn.closest('.cabinet-map'); slot.innerHTML=''; slot.appendChild(f);
    });
  }
})();
