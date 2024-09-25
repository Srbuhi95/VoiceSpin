import {
    checkboxAndNext, clickAgreeButton, ClickLogin,
    clickProceed, clickSuggestions, clicktermsAndConditions,
    inputCustomerID, inputOnlinerToken, inputusername, inputPassword, scrollBottom,
} from "../fixtures/termsAndConditions";

describe('Agreement Signing Process', () => {
    before(() => {
        // Adjust the timeout setting for visiting the URL
        cy.visit('https://stage-portal-app153-v2.voicespin.info/v2/agreement', { timeout: 10000 });
        cy.wait(2000); // You can adjust this wait time if needed
    });

    it('should log in with valid credentials', () => {
        inputCustomerID();
        inputOnlinerToken();
        clickProceed();
        cy.wait(3000);
        inputusername();
        inputPassword();
        ClickLogin();
    });

    it('should wait for the iframe message', () => {
        // Wait for the iframe to load and be visible
        cy.get('iframe').should('be.visible').then(($iframe) => {
            // Access the iframe body
            const body = $iframe.contents().find('body');

            // Custom function to check for a specific message in the iframe
            const checkIframeMessage = () => {
                return new Promise((resolve) => {
                    // Replace with the actual message check
                    const messageExists = body.find('your-message-selector').length > 0; // Adjust the selector
                    if (messageExists) {
                        resolve(true);
                    } else {
                        setTimeout(() => {
                            resolve(checkIframeMessage()); // Retry
                        }, 1000); // Retry every 1 second
                    }
                });
            };

            // Wait for the message from the iframe
            return checkIframeMessage().then(() => {
                // Proceed with the rest of the test after confirming the message
                cy.wrap(body).find('your-element-selector').click(); // Adjust as needed
            });
        });
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
