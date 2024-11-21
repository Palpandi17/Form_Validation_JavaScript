let wrapper = document.querySelector('.wrapper'),
    signUpLink = document.querySelector('.link .signup-link'),
    signInLink = document.querySelector('.link .signin-link');

signup-link.addEventListener('click', () => {
    wrapper.classList.add('amimated-signin');
    wrapper.classList.remove('animated-signup');
});

signin-link.addEventListener('click', () => {
    wrapper.classList.add('amimated-signup');
    wrapper.classList.remove('animated-signin');
});