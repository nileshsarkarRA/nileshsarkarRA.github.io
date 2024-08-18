const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', smoothScroll);
});

function smoothScroll(event) {
  event.preventDefault();
  const targetId = this.getAttribute('href');
  const targetElement = document.querySelector(targetId);
  const offsetTop = targetElement.offsetTop;

  window.scrollTo({
    top: offsetTop,
    behavior: 'smooth'
  });
}

const headings = document.querySelectorAll('h1, h2, h3');

headings.forEach(heading => {
  const letters = heading.textContent.split('');
  heading.textContent = '';

  letters.forEach((letter, index) => {
    const span = document.createElement('span');
    span.textContent = letter;
    span.style.animationDelay = `${index * 50}ms`; // Adjust delay as needed
    heading.appendChild(span);
  });
});