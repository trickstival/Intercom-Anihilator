window.onload = _ => {
    let rm = selector => document.querySelector(selector).remove()

    rm('#intercom-frame')
    rm('#intercom-container')
}
