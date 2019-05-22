function scroll(distance) {
    window.scrollBy({
    top: distance,
    behavior: 'smooth'
  })};

  const analyze = document.querySelector("body > section > div > div.features-bar > div:nth-child(1)");
  const recommend = document.querySelector("body > section > div > div.features-bar > div:nth-child(2)");
  const projections = document.querySelector("body > section > div > div.features-bar > div:nth-child(3)");
  const protection = document.querySelector("body > section > div > div.features-bar > div:nth-child(4)");

  analyze.addEventListener('click', ()=> {
      scroll(300);
  });

  recommend.addEventListener('click', ()=> {
    scroll(700);
  })

  projections.addEventListener('click', ()=> {
    scroll(1450);
  })

  protection.addEventListener('click', ()=> {
    scroll(2000);
  })