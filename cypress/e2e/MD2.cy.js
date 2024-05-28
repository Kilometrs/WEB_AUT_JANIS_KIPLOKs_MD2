import { HomePage } from "../pageObjects/HomePage";
import { LoginPage } from "../pageObjects/LoginPage";
import { AppointmentPage } from "../pageObjects/AppointmentPage";
import { AppointmentSummaryPage } from "../pageObjects/AppointmentSummaryPage";

describe("Demoqa scenarios", () => {
    context("MD2", () => {
        it("Scenario 1", () => {
            HomePage.visit();
            HomePage.makeAppointmentBtn.click();

            LoginPage.placeholderUsername.then((username) => {
                LoginPage.usernameField.type(username);
            });
            LoginPage.placeholderPassword.then((pw) => {
                LoginPage.passwordField.type(pw);
            });
            LoginPage.loginBtn.click();

            AppointmentPage.facilityList.select("Seoul CURA Healthcare Center");
            AppointmentPage.readmissionCheck.click();
            AppointmentPage.heathcareRadioList.contains('Medicaid').click();
            AppointmentPage.calendarBtn.click();
            AppointmentPage.datePickerByDates.find('.day').contains('30').click();
            AppointmentPage.bodyTop.click();
            AppointmentPage.commentField.click().type("CURA Healthcare Service");
            AppointmentPage.bookAppointmentBtn.click();

            AppointmentSummaryPage.facilityValue.contains('Seoul CURA Healthcare Center');
            AppointmentSummaryPage.readmissionValue.contains('Yes');
            AppointmentSummaryPage.programValue.contains('Medicaid');
            AppointmentSummaryPage.visitDateValue.contains('30');
            AppointmentSummaryPage.commentValue.contains('CURA Healthcare Service');
        });
    });
});