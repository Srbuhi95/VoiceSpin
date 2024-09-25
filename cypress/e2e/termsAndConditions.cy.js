import {
    checkboxAndNext, clickAgreeButton, ClickLogin,
    clickProceed, clickSuggestions, clicktermsAndConditions,
    inputCustomerID, inputOnlinerToken, inputusername, inputPassword, scrollBottom,
} from "../fixtures/termsAndConditions";

describe('Agreement Signing Process', () => {
    before(() => {
        cy.visit('https://stage-portal-app153-v2.voicespin.info/#/login', { timeout: 20000 });
    });


    it('should log in with valid credentials', () => {
            inputCustomerID();
            inputOnlinerToken();
            clickProceed();
            cy.wait(2000);
            inputusername();
            inputPassword();
            ClickLogin();
            cy.wait(20000)
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
