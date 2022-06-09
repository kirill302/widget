// скрытие иконок в нижней панели
let size = document.body.offsetWidth;

let panel = document.querySelector('.panel');
let iconsWrapper = document.querySelector('.panel__icons');
let hiddenIconsWrapper = document.querySelector('.panel__icons_hidden');
let panelIcons = document.querySelectorAll('.panel__icon');

if (panelIcons.length > 4) {
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

// let widget = document.querySelector('.widget');

// let widgetClose = document.querySelector('.close');
// let widgetToggle = document.querySelector('.widget-btn')

// widgetToggle.addEventListener('click', () => {
//   widget.classList.toggle('_active')
// })
// widgetClose.addEventListener('click', () => {
//   widget.classList.remove('_active')
// })

// высота страницы





const videoWidget = document.querySelector('.video-widget')
const video = document.querySelector('.video-widget video')
const videoWidgetClose = document.querySelector('.video-widget .video-widget__hide')



let counter = 0;

function videoWidgetOpen() {
  if (counter === 0) {
    console.log(3);
    console.log(videoWidgetClose);
    videoWidgetClose.classList.remove('hide')

  }
  videoWidgetClose.classList.add('type1')
  counter++
  if (!videoWidget.classList.contains('open')) {
    video.currentTime = 0;
  }
  videoWidget.classList.add('open')
  video.muted = false
}

function videoWidgetHide() {
  counter++
  videoWidgetClose.classList.remove('type1')
  videoWidget.classList.remove('open')
  video.muted = true
}

function toggleVideo() {
  if (videoWidget.classList.contains('open')) {
    if (video.paused) {
      video.play()
    } else {
      video.pause()
    }
  }
}

videoWidget.addEventListener('click', videoWidgetOpen)
video.addEventListener('click', toggleVideo)
videoWidgetClose.addEventListener('click', () => {
  console.log('click');
  if (videoWidgetClose.classList.contains('type1')) {
    setTimeout(() => {
      videoWidgetHide()
      video.muted = true
    }, 100)
  } else {
    videoWidget.classList.add('hide')
    setTimeout(() => {
      video.pause()
      video.muted = true
    }, 100)
  }
})
window.addEventListener('keyup', e => e.code === 'Escape' ? videoWidgetHide() : '')