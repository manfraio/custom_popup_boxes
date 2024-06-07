export function alert({ title = '', message = '', icon = 'none', okButtonText = 'Ok', onOkButtonClick = function() {} }) {
    const html = `
        <dialog class="dialog">
            <div class="dialog_header">
                ${icon != 'none' ? `<span class="dialog_icon icon-${icon}"></span>` : '' } 
                <div class="dialog_title">${title}</div>
                <button class="dialog_close">&times;</button>
            </div>

            <div class="dialog_content">
                ${message}
            </div>

            <div class="dialog_footer">    
                <button class="dialog_button js-dialog_button_ok">${okButtonText}</button>
            </div>
        </dialog>    
    `

    const template = document.createElement('template')
    template.innerHTML = html

    const dialog = template.content.querySelector('.dialog')
    const btnClose = template.content.querySelector('.dialog_close')
    const btnOk = template.content.querySelector('.js-dialog_button_ok')

    btnClose.addEventListener('click', () => {
        onOkButtonClick()
        close(dialog)
    })

    btnOk.addEventListener('click', () => {
        onOkButtonClick()
        close(dialog)
    })

    document.body.appendChild(template.content)

    dialog.showModal()
}

export function confirm({ title = '', message = '', icon = 'none', okButtonText = 'Ok', cancelButtonText = 'Cancel', onOkButtonClick = function() {}, onCancelButtonClick = function() {} }) {
    const html = `
        <dialog class="dialog">
            <div class="dialog_header">
                ${icon != 'none' ? `<span class="dialog_icon icon-${icon}"></span>` : '' } 
                <div class="dialog_title">${title}</div>
                <button class="dialog_close">&times;</button>
            </div>

            <div class="dialog_content">
                ${message}
            </div>

            <div class="dialog_footer">
                <button class="dialog_button dialog_button--outline js-dialog_button_cancel">${cancelButtonText}</button>
                <button class="dialog_button js-dialog_button_ok">${okButtonText}</button>
            </div>
        </dialog>    
    `

    const template = document.createElement('template')
    template.innerHTML = html

    const dialog = template.content.querySelector('.dialog')
    const btnClose = template.content.querySelector('.dialog_close')
    const btnOk = template.content.querySelector('.js-dialog_button_ok')
    const btnCancel = template.content.querySelector('.js-dialog_button_cancel')

    btnClose.addEventListener('click', () => {
        onCancelButtonClick()
        close(dialog)
    })

    btnOk.addEventListener('click', () => {
        onOkButtonClick()
        close(dialog)
    })

    btnCancel.addEventListener('click', () => {
        onCancelButtonClick()
        close(dialog)
    })

    document.body.appendChild(template.content)

    dialog.showModal()
}

export function prompt({ title = '', message = '', icon = 'none', defaultText = '', okButtonText = 'Ok', cancelButtonText = 'Cancel', onOkButtonClick = function() {}, onCancelButtonClick = function() {} }) {
    const html = `
        <dialog class="dialog">
            <div class="dialog_header">
                ${icon != 'none' ? `<span class="dialog_icon icon-${icon}"></span>` : '' } 
                <div class="dialog_title">${title}</div>
                <button class="dialog_close">&times;</button>
            </div>

            <div class="dialog_content">
                ${message}
                <input class="dialog_input" type="text" />
            </div>

            <div class="dialog_footer">
                <button class="dialog_button dialog_button--outline js-dialog_button_cancel">${cancelButtonText}</button>
                <button class="dialog_button js-dialog_button_ok">${okButtonText}</button>
            </div>
        </dialog>    
    `

    const template = document.createElement('template')
    template.innerHTML = html

    const dialog = template.content.querySelector('.dialog')
    const btnClose = template.content.querySelector('.dialog_close')
    const btnOk = template.content.querySelector('.js-dialog_button_ok')
    const btnCancel = template.content.querySelector('.js-dialog_button_cancel')
    const input = template.content.querySelector('.dialog_input')

    input.value = defaultText

    btnClose.addEventListener('click', () => {
        onCancelButtonClick()
        close(dialog)
    })

    btnOk.addEventListener('click', () => {
        onOkButtonClick(input.value)
        close(dialog)
    })

    btnCancel.addEventListener('click', () => {
        onCancelButtonClick()
        close(dialog)
    })

    document.body.appendChild(template.content)

    dialog.showModal()

    if (defaultText) {
        input.select()
    } else {
        input.focus()
    }
}

function close(dialog) {
    dialog.classList.add('close')
    dialog.addEventListener('animationend', () => {
        document.body.removeChild(dialog)
    })
}