/* =============================================
   main.js — Interactividad del sitio
   LUMINA Fotografía
   ============================================= */

document.addEventListener('DOMContentLoaded', function () {

  /* ------------------------------------------
     1. NAVBAR — Efecto al hacer scroll
  ------------------------------------------ */
  const header = document.getElementById('header');

  function handleScroll() {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  // Ejecutar al cargar por si ya está scrolleado
  handleScroll();

  /* ------------------------------------------
     2. MENÚ HAMBURGUESA — Toggle en mobile
  ------------------------------------------ */
  const toggleBtn = document.querySelector('.nav-toggle');
  const navLinks  = document.querySelector('.nav-links');

  if (toggleBtn && navLinks) {
    toggleBtn.addEventListener('click', function () {
      navLinks.classList.toggle('open');
      // Cambiar ícono
      const icon = toggleBtn.querySelector('i');
      if (navLinks.classList.contains('open')) {
        icon.classList.replace('bi-list', 'bi-x');
      } else {
        icon.classList.replace('bi-x', 'bi-list');
      }
    });

    // Cerrar menú al hacer click en un enlace
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        const icon = toggleBtn.querySelector('i');
        icon.classList.replace('bi-x', 'bi-list');
      });
    });
  }

  /* ------------------------------------------
     3. FORMULARIO — Prevenir envío y mostrar mensaje
  ------------------------------------------ */
  const form = document.getElementById('form-contacto');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Validación básica
      const nombre  = document.getElementById('nombre').value.trim();
      const email   = document.getElementById('email').value.trim();
      const mensaje = document.getElementById('mensaje').value.trim();

      if (!nombre || !email || !mensaje) {
        alert('Por favor completá los campos obligatorios (*).');
        return;
      }

      // Simular envío exitoso
      const actions = form.querySelector('.form-actions');
      const successMsg = document.createElement('p');
      successMsg.textContent = '¡Mensaje enviado con éxito! Te contactaremos pronto.';
      successMsg.style.cssText = 'color:#3b6d11; font-weight:500; margin-top:0.5rem;';
      actions.after(successMsg);

      form.reset();
    });
  }

});
