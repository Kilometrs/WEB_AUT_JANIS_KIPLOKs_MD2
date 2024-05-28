import { BasePage } from './basePage';

export class HistoryPage extends BasePage {
    static get url() {
        return "/history.php#history";
    }

    static get body() {
        return cy.get('body');
    }
}