// LOGIN

var loginLink = document.querySelector('.user-block .login');
var loginPopup = document.querySelector('div.modal-login');
var closeLogin = document.querySelector('.modal-login .modal-close');
var form = loginPopup.querySelector('form');
var login = loginPopup.querySelector('input[type=text]');
var password = loginPopup.querySelector('input[type=password]');
var savedLogin = window.localStorage.getItem("login");

loginLink.addEventListener('click', function(e) {
  e.preventDefault();
  loginPopup.classList.add("modal-content-show");
  if (savedLogin) {
    login.value = savedLogin;
    password.focus();
  } else {
    login.focus();
  }
});

closeLogin.addEventListener('click', function(e) {
  e.preventDefault();
  loginPopup.classList.remove("modal-content-show");
  loginPopup.classList.remove("modal-error");
});

form.addEventListener('submit', function(e) {
  if (!login.value || !password.value) {
    e.preventDefault();
    loginPopup.classList.add("modal-error");
  } else {
    localStorage.setItem("login", login.value);
  }
});

window.addEventListener('keydown', function(e) {
  if (e.keyCode === 27) {
    if ( loginPopup.classList.contains("modal-content-show") ){
      loginPopup.classList.remove("modal-content-show");
      loginPopup.classList.remove("modal-error");
    }
    if ( mapPopup.classList.contains("modal-map-show") ) {
      mapPopup.classList.remove("modal-map-show");
    }
  }
});

// MAP

var mapLink = document.querySelector('.roadmap');
var mapPopup = document.querySelector('div.modal-map');
var closeMap = document.querySelector('.modal-map .modal-close');

mapLink.addEventListener('click', function(e) {
  e.preventDefault();
  mapPopup.classList.add("modal-map-show");
});
