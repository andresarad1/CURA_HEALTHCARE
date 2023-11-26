import { loginPage, confirmationPage, formPage } from "../support/healthcareLocators";

const helthCare = Cypress.env("healthcare");

export class FillFormHealth {

    goToHealthCare() {
        cy.visit(helthCare.url)
    }

    goLoginPage() {
        cy.get(loginPage.makeAppointment).click();
    }

    fillLogin() {
        cy.get(loginPage.demoUserName).invoke('val').then((texto) => {
            if (texto !== undefined) {
                cy.get(loginPage.username).type(texto.toString());
            }
        })
        cy.get(loginPage.demoPassword).invoke('val').then((texto) => {
            if (texto !== undefined) {
                cy.get(loginPage.password).type(texto.toString());
            }
        })
        cy.get(loginPage.btnLogin).click();
    }

    fillMakeAppointment() {
        const aleatorio = Math.floor(Math.random() * 3)
        cy.get(formPage.facility).select(aleatorio);
        cy.get(formPage.checkboxReadmision).check();
        cy.get(formPage.checkRadio).then((radios) => {
            cy.wrap(radios[aleatorio]).click();
        })
        cy.fixture("healthForm.json").then((userdata) => {
            cy.get(formPage.visitDate).type(userdata.fecha);
            cy.get(formPage.commentPlace).type(userdata.comment, { force: true });
        })
        cy.get(formPage.btnBook).click();
    }

    validateAppointment() {
        cy.get(confirmationPage.msgConfirmation).should('contain', 'Please be informed that your appointment has been booked as following:');
        cy.get(confirmationPage.h2).should('contain', 'Appointment Confirmation');
    }
}