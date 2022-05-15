    import Cookies from 'https://cdn.jsdelivr.net/npm/js-cookie@3.0.1/dist/js.cookie.min.mjs'

    
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
console.log(Cookies)
  