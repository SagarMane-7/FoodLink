let profile = document.querySelector("#dashboard");
profile.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = '/dashboard'
});

let logout = document.querySelector("#logout");
logout.addEventListener('click', function (event) {
    event.preventDefault();
    window.location.href = '/'
});