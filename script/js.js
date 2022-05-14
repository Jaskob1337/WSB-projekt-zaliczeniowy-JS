document.getElementById('choose1')
document.getElementById('formprice')

function dataTransfer(value) {
  formprice2.innerHTML = value.innerHTML
}

document.addEventListener('DOMContentLoaded', function () {
  const nav = document.querySelector('.navbar')
  const allNavItems = document.querySelectorAll('.nav-link')
  const navList = document.querySelector('.navbar-collapse')

  function addShadow() {
    if (window.scrollY >= 1) {
      nav.classList.add('shadow-bg')
    } else {
      nav.classList.remove('shadow-bg')
    }
  }

  allNavItems.forEach((item) =>
    item.addEventListener('click', () => navList.classList.remove('show')),
  )

  // pętla usuwająca automatycznie dodającą się klasę show

  window.addEventListener('scroll', addShadow)
})

// footer auto year

const footerYear = document.querySelector('.footer__year')
const handleCurrentYear = () => {
  const year = new Date().getFullYear()
  footerYear.textContent = year
}
handleCurrentYear()

//

//  function save name in input

const inputfunction = document.getElementById('nameLocalSave')
inputfunction.value = sessionStorage.getItem('key')
inputfunction.onchange = function () {
  const key = inputfunction.value
  sessionStorage.setItem('key', key)
}

// date car choose

const dateChoose = document.getElementById('car-date-picker')

dateChoose.min = getDate()
dateChoose.max = getDate(14)

function getDate(days) {
  let date

  if (days !== undefined) {
    date = new Date(Date.now() + days * 24 * 60 * 60 * 1000)
  } else {
    date = new Date()
  }

  const offset = date.getTimezoneOffset()

  date = new Date(date.getTime() - offset * 60 * 1000)

  return date.toISOString().split('T')[0]
}

// function of selecting picked date to final validation button

function selectCarDate() {
  dateChoose.select();
}

// modal no close on refresh page

const loadModal = function() {
  $('#CarModal').modal('show');
  Cookies.set('isMyModalActive', true);
};

const exitModal = function() {
  $('#CarModal').modal('hide');
  Cookies.remove('isMyModalActive');
};

if(Cookies.get('isMyModalActive')) {
  loadModal();
}

