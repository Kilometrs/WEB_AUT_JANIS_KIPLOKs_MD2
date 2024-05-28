import { BasePage } from './basePage';

export class LoginPage extends BasePage {
    static get url() {
        return "/profile.php#login";
    }

    static get usernameField() {
        return cy.get('[id="txt-username"]');
    }

    static get passwordField() {
        return cy.get('[id="txt-password"]');
    }

    static get placeholderUsername() {
        return cy.get('[aria-describedby="demo_username_label"]').invoke('val');
    }

    static get placeholderPassword() {
        return cy.get('[aria-describedby="demo_password_label"]').invoke('val');
    }

    static get loginBtn() {
        return cy.get('[id="btn-login"]');
    }
}