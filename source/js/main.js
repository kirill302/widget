// скрытие иконок в нижней панели
let size = document.body.offsetWidth;

let panel = document.querySelector('.panel');
let iconsWrapper = document.querySelector('.panel__icons');
let hiddenIconsWrapper = document.querySelector('.panel__icons_hidden');
let panelIcons = document.querySelectorAll('.panel__icon');

if (panelIcons.length > 4 ) {
  iconsWrapper.classList.add('visible')
  panelIcons = Array.from(panelIcons);

  const iconsHidden = panelIcons.slice(3);

  iconsHidden.forEach(icon => {
    hiddenIconsWrapper.append(icon)
    icon.classList.add('hidden');
  });

  const iconAdd = document.createElement('div');
  iconAdd.setAttribute('title', 'другое')
  iconAdd.classList.add('panel__icon', 'icon-visible-btn');

  hiddenIconsWrapper.appendChild(iconAdd);

  iconAdd.addEventListener('click', () => {
    panel.classList.toggle('icons-visivle');

    iconsHidden.forEach(icon => {
      icon.classList.toggle('hidden');
    });
  });

}

let widget = document.querySelector('.widget');

let widgetClose = document.querySelector('.close');
let widgetToggle = document.querySelector('.widget-btn')

widgetToggle.addEventListener('click', () => {
  widget.classList.toggle('_active')
})
widgetClose.addEventListener('click', () => {
  widget.classList.remove('_active')
})

// высота страницы


// if (size < 768) {
//   let height = window.innerHeight;
//   const video = document.querySelector('.video');
//   video.style.height = `${height}px`
// }


// window.addEventListener('resize', () => {
//   height = window.innerHeight ;
//   wrapper.style.height = `${height}px`;
// });


