const diagramDots = document.querySelectorAll('.diagram-dot');

diagramDots.forEach(dot => {
  const dotInner = dot.querySelector('.dot-inner');
  const dotOuter = dot.querySelector('.dot-outer');
  const popup = dot.querySelector('.popup');
  const popupClose = dot.querySelector('.popup-close');

  dotInner.addEventListener('click', event => {
    const dotRect = dotOuter.getBoundingClientRect();

    const dotPosition = {
      left: dotRect.left + window.scrollX,
      top: dotRect.top + window.scrollY
    };

    const popupTop = dotPosition.top + dotRect.height + 5;
    const popupLeft = dotPosition.left + dotRect.width + 5;

    popup.style.top = `${popupTop}px`;
    popup.style.left = `${popupLeft}px`;

    dotOuter.style.display = 'none';
    popup.style.display = 'flex';
  });

  popupClose.addEventListener('click', () => {
    dotOuter.style.display = 'flex';
    popup.style.display = 'none';
  });
});
