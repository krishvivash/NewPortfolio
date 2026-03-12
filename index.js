function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"

    emailjs
    .sendForm(
        'service_jdbct1c',
        'template_1d8hbpa',
        event.target,
        'Z-Gw2XWEl5DQim18D'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible")
        success.classList += " modal__overlay--visible"
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible")
        alert(
            "The email service is tremporarily unavailable. Please contact me directly on krishvivash23@gmail.com"
        )
    })
}

