const { Builder, Browser, By, until } = require('selenium-webdriver');

(async function testInvalidEmail() {
    // Start een nieuwe WebDriver (gebruik bijvoorbeeld Chrome)
    const driver = new Builder().forBrowser(Browser.FIREFOX).build();

    try {
        // Ga naar de pagina met het formulier
        await driver.get('http://localhost:8080/contact');

        // Zoek het invoerveld voor de naam en voer een willekeurige naam in
        await driver.findElement(By.id('name')).sendKeys('Abu Saebu');

        // Zoek het invoerveld voor het e-mailadres en voer een foutief e-mailadres in
        await driver.findElement(By.id('email')).sendKeys('invalidemail.com');
        
        await driver.findElement(By.id('bericht')).sendKeys('Ik wil contact opnemen.');

        // Zoek de knop om het formulier te verzenden en klik erop
        await driver.findElement(By.id('submit')).click();

        // Wacht tot de foutmelding zichtbaar is
        let errorMessage = await driver.wait(
            until.elementLocated(By.xpath("//*[contains(text(), 'Vul een geldig email adres in')]")),
            3000
        );

        // Controleer of de foutmelding correct is
        let messageText = await errorMessage.getText();
        if (messageText === 'Vul een geldig email adres in') {
            console.log('Test geslaagd: de foutmelding is correct.');
        } else {
            console.log('Test mislukt: foutmelding niet gevonden of incorrect.');
        }
    } catch (error) {
        console.error('Er is een fout opgetreden tijdens de test:', error);
    } finally {
        // Sluit de WebDriver
        await driver.quit();
    }
})();
