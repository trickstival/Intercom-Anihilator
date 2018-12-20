window.onload = _ => {
    rm = selector => document.querySelector(selector).remove()

    rm('#intercom-frame')
    rm('#intercom-container')
}
