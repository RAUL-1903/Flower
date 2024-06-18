const flower = document.querySelector('.flower');
const hearts = document.querySelector('.hearts');
const title = document.querySelector('.title');

flower.addEventListener('animationend', () => {
  hearts.style.opacity = 1;
  title.style.opacity = 1;
});

onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};
