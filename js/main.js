(function(){
var C=window.SITE_CONTENT||{},$=function(s,r){return(r||document).querySelectorAll(s)};
function wa(){return (C.wa||'27730194559').replace(/\D/g,'')}
// content overrides from admin (js/content.js)
$('[data-k]').forEach(function(el){var k=el.dataset.k;
 if(k==='phonelink'&&C.phone)el.href='tel:'+C.phone.replace(/\s/g,'');
 else if(k==='emaillink'&&C.email)el.href='mailto:'+C.email;
 else if(C[k]&&k!=='phonelink'&&k!=='emaillink')el.textContent=C[k]});
$('[data-wa]').forEach(function(a){a.href='https://wa.me/'+wa()+'?text='+encodeURIComponent(a.dataset.msg||'Hello Tumza Bonny, I would like a quote.')});
var y=document.getElementById('yr');if(y)y.textContent=new Date().getFullYear();
var mb=document.getElementById('mb'),nv=document.getElementById('nv');
if(mb)mb.onclick=function(){nv.classList.toggle('o')};
$('nav a').forEach(function(a){a.onclick=function(){nv.classList.remove('o')}});
var qf=document.getElementById('qf');
if(qf)qf.onsubmit=function(e){e.preventDefault();var m='Hello Tumza Bonny. I am '+qn.value+' ('+qp.value+'). Service: '+qs.value+'. '+qm.value;window.open('https://wa.me/'+wa()+'?text='+encodeURIComponent(m),'_blank')};
function count(b){var m=b.dataset.n&&b.dataset.n.match(/^(\d+)(.*)$/);if(!m)return;var n=0,e=+m[1],s=m[2],i=setInterval(function(){n+=Math.ceil(e/30);if(n>=e){n=e;clearInterval(i)}b.textContent=n+s},40)}
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('on');var b=x.target.querySelector('b[data-n]');if(b)count(b);io.unobserve(x.target)}})},{threshold:.12});
 $('.rv').forEach(function(e){io.observe(e)})}else $('.rv').forEach(function(e){e.classList.add('on')});
})();
