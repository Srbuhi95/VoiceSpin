import {
    checkboxAndNext, clickAgreeButton, ClickLogin,
    clickProceed, clickSuggestions, clicktermsAndConditions,
    inputCustomerID, inputOnlinerToken, inputusername, inputPassword, scrollBottom,
} from "../fixtures/termsAndConditions";

describe('Agreement Signing Process', () => {
    before(() => {
        cy.visit('https://stage-portal-app153-v2.voicespin.info/v2/agreement', { timeout: 10000 });
        cy.wait(2000);
    });

    it('should log in with valid credentials', () => {
        inputCustomerID();
        inputOnlinerToken();
        clickProceed();
        cy.wait(2000);
        inputusername();
        inputPassword();
        ClickLogin();
    });

    it('should open Terms and Conditions link and enable Agree button', () => {
        clicktermsAndConditions();
        scrollBottom();
        clickAgreeButton();
        clickSuggestions();
    });

    it('should enable Next button after opening both documents', () => {
        checkboxAndNext();
    });
});
