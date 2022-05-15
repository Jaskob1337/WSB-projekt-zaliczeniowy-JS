// import Cookies from 'https://cdn.jsdelivr.net/npm/js-cookie@3.0.1/dist/js.cookie.min.mjs'
// const loadModal = function () {
//   $('#CarModal').modal('show')
//   Cookies.set('isMyModalActive', true)
//   console.log('check111')
// }
// const exitModal = function () {
//   $('#CarModal').modal('hide')
//   Cookies.remove('isMyModalActive')
// }
// if (Cookies.get('isMyModalActive')) {
//   loadModal()
// }
// console.log(Cookies)


import Cookies from 'https://cdn.jsdelivr.net/npm/js-cookie@3.0.1/dist/js.cookie.min.mjs'
const loadModal = function () {
    $('#CarModal').modal('show');
    Cookies.set('isMyModalActive', true);
};
const exitModal = function () {
    $('#CarModal').modal('hide');
    Cookies.remove('isMyModalActive');
};
const button = document.querySelector('[data-bs-toggle="modal"]')
button.onclick = function () {
    console.log('here')
    loadModal()
};
window.addEventListener('load', function() {
    if (Cookies.get('isMyModalActive')) {
        loadModal();
    }
})