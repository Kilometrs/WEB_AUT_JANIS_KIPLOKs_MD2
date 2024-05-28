import { BasePage } from './basePage';

export class AppointmentSummaryPage extends BasePage {
    static get url() {
        return "/appointment.php#summary";
    }

    static get facilityValue() {
        return cy.get('[id="facility"]');
    }

    static get readmissionValue() {
        return cy.get('[id="hospital_readmission"]');
    }

    static get programValue() {
        return cy.get('[id="program"]');
    }

    static get visitDateValue() {
        return cy.get('[id="visit_date"]');
    }

    static get commentValue() {
        return cy.get('[id="comment"]');
    }
}