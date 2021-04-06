const header = document.querySelector('.grid-container header')
const menuBars = document.querySelector('#menuBars')

// header.style.display = 'grid'
menuBars.addEventListener('click', getHeader);

function getHeader() {
  if(header.style.display == 'grid') {
    header.style.display = `none`
  } else {
    header.style.display = `grid`
  }
}
