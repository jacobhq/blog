// This file is copyright Jacob Marshall, and yes that includes everyone
// So don't take this code, as I worked my butt off to make it

if (localStorage.getItem('theme') === 'dark') {
    dark()
  }

  if(!localStorage.getItem('theme')) localStorage.setItem('theme', 'light');

  document.querySelector('[data-dark]').addEventListener('click', dark)
  document.querySelector('[data-light]').addEventListener('click', light)
  
  function light() {
    document.getElementById('body').classList.remove('dark')
    document.getElementById('body').classList.add('light')
    localStorage.setItem('theme', 'light');
  }
  
  function dark() {
    document.getElementById('body').classList.add('dark')
    document.getElementById('body').classList.remove('light')
    localStorage.setItem('theme', 'dark');
  }