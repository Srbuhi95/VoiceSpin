const customerID = '[ng-model=\'authCtrl.authModel.customerid\']';
const onlinerToken =  '[ng-model=\'authCtrl.authModel.token\']';
const username = '#username';
const password = '#password';
const login = '#kc-login'
const proceed = '.primary-btn';
const termsAndConditions = '//a[contains(.,\'Terms and Conditions  To confirm reading of the document - scroll through the wh\')]';
const termsBody = '[data-page-number=\'1\'] > .textLayer';
const agreeButton = '//button[@class=\'float-right next mdc-button mat-mdc-button mat-unthemed mat-mdc-button-base\']';
const suggestions = '//a[.=\'suggestions\']';
const checkbox = '//div[@class=\'mdc-checkbox\']';
const next = '.mat-stepper-next[disabled=\'true\']';
const usernameC = '799470085392240';
const passwordC = 'Test_123';
const customerIDC = '9796615507';
const onlinerTokenC = 'Mq8BiwptUZyQrM8Gz8tAb35DBpS2xoAG';



export function inputCustomerID() {
    cy.get(customerID)
        .type(customerIDC);
}

export function inputOnlinerToken() {
    cy.get(onlinerToken)
        .type(onlinerTokenC);
}
export function clickProceed() {
    cy.get(proceed).click();
}

export function inputusername() {
    cy.get(username)
        .type(usernameC);
}

// Enter password
export function inputPassword() {
    cy.get(password)
        .type(passwordC);
}
// Click login button
export function ClickLogin() {
    cy.get(login).click();
}

// Validate successful login by checking the presence of the Portal section
export function urlValidation(){
cy.url().should('include', '/portal');
}

// // Click on the Terms and Conditions link
export function clicktermsAndConditions () {
    cy.get(termsAndConditions).click();
}

// Scroll to the bottom of the Terms and Conditions document
export function scrollBottom () {
    cy.get(termsBody).scrollTo('bottom');
}
export function clickAgreeButton () {
    cy.get(agreeButton).should('be.enabled').click();
}
export function clickSuggestions() {
    cy.get(suggestions).click();
    cy.contains(suggestions).should('be.visible');
}

export function checkboxAndNext() {
    cy.get(checkbox).check();
    cy.get(next).should('be.enabled');
}
