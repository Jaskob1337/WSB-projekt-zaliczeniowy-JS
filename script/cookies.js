
import Cookies from 'https://cdn.jsdelivr.net/npm/js-cookie@3.0.1/dist/js.cookie.min.mjs';




const loadModal = function () {
  $('#CarModal').modal('show')
  Cookies.set('isMyModalActive', true)

}
const exitModal = function () {
  $('#CarModal').modal('hide')
  Cookies.remove('isMyModalActive')
}
const buttons = document.querySelectorAll('[data-bs-toggle="modal"]')


for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        loadModal()
        
    };

    let activeCar = localStorage.getItem('loadData');
    $('.' + activeCar).trigger('click');
   
}
const button2 = document.getElementById('buttonexit')
button2.onclick = function () {
  exitModal()
};
const button3 = document.getElementById('closeModalCross')
button3.onclick = function () {
  exitModal()
};
const button4 = document.getElementById('closeModalLogo')
button4.onclick = function () {
  exitModal()
};
const button5 = document.getElementById('closeModalNavMainpage')
button5.onclick = function () {
  exitModal()
};



window.addEventListener('load', function () {
 console.log(Cookies.get('isMyModalActive'));
  if (Cookies.get('isMyModalActive')) {
   console.log('ddhddd'); loadModal();
  }
})

