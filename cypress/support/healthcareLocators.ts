const loginPage = {
    makeAppointment : '#btn-make-appointment',
    demoUserName    : 'input[aria-describedby="demo_username_label"]',
    demoPassword    : 'input[aria-describedby="demo_password_label"]',
    username        : '#txt-username',
    password        : '#txt-password',
    btnLogin        : '#btn-login'
}

const formPage = {
    facility            : '#combo_facility',
    checkboxReadmision  : '#chk_hospotal_readmission',
    checkRadio          : '.radio-inline',
    visitDate           : '#txt_visit_date',
    commentPlace        : '#txt_comment',
    btnBook             : '#btn-book-appointment'            
}

const confirmationPage = {
    msgConfirmation     : '.lead',
    h2                  : 'h2',
    btnGoMainPage       : 'a'
}

export {loginPage, formPage, confirmationPage}