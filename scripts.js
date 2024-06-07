import * as popups from './popups/popups.js'

const showAlert = document.querySelector('#showAlert')
const showConfirm = document.querySelector('#showConfirm')
const showPrompt = document.querySelector('#showPrompt')

showAlert.addEventListener('click', () => {
    popups.alert({
        title: 'Success',
        message: 'Your imaginary data has been saved!',
        icon: 'check',
        okButtonText: 'Great',
        onOkButtonClick: function() {
            console.log('Ok Button Clicked!')
        }
    })
})

showConfirm.addEventListener('click', () => {
    popups.confirm({
        title: 'Are you sure?',
        message: 'You will not be able to recover this data!',
        icon: 'question',
        okButtonText: 'Yes',
        cancelButtonText: 'No',
        onOkButtonClick: function() {
            popups.alert({
                title: 'Deleted!',
                message: 'Your imaginary data has been deleted!',
                icon: 'check',
                okButtonText: 'Great',
                onOkButtonClick: function() {
                    console.log('Alert Ok Button Clicked!')
                }
            })
        },
        onCancelButtonClick: function() {
            console.log('Cancel Button Clicked!')
        }
    })
})

showPrompt.addEventListener('click', () => {
    popups.prompt({ 
        title: 'Add New User', 
        message: 'Please type the name of the user:', 
        icon: 'plus', 
        okButtonText: 'Add',
        onOkButtonClick: function(inputValue) {
            console.log(inputValue)
        },
        onCancelButtonClick: function() {
            console.log('Cancel Button Clicked!')
        } 
    })
})