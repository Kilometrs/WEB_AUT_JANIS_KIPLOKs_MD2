import { BasePage } from './basePage';

export class AppointmentPage extends BasePage {
    static get url() {
        return "/#appointment";
    }

    static get facilityList() {
        return cy.get('[id="combo_facility"]');
    }

    static get readmissionCheck() {
        return cy.get('[for="chk_hospotal_readmission"]');
    }

    static get heathcareRadioList() {
        return cy.get('[class="radio-inline"]');
    }

    static get calendarBtn() {
        return cy.get('[class="glyphicon glyphicon-calendar"]');
    }

    static get datePickerByDates() {
        return cy.get('[class="datepicker-days"]');
    }

    static get commentField() {
        return cy.get('[id="txt_comment"]');
    }

    static get bookAppointmentBtn() {
        return cy.get('[id="btn-book-appointment"]');
    }

    static get bodyTop() {
        return cy.get('[id="top"]');
    }

    static get menuBtn() {
        return cy.get('[id="menu-toggle"]');
    }

    static get sidebarBtnList() {
        return cy.get('[class="sidebar-nav"] a');
    }
}