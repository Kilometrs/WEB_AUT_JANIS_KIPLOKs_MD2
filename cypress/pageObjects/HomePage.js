import { BasePage } from './basePage';

export class HomePage extends BasePage {
    static get url() {
        return "/";
    }

    static get makeAppointmentBtn() {
        return cy.get('[id="btn-make-appointment"]');
    }

}