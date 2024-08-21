const { Builder, Browser, By } = require("selenium-webdriver");

const driver_fx = new Builder().forBrowser(Browser.FIREFOX).build();
//const driver_chr = new Builder().forBrowser(Browser.CHROME).build();

async function searchTest(driver) {
    try {
        driver.get("http://localhost:8080");
        const elements = await driver.findElements(By.css(".navbar-nav a"));
        
        //test if the navbar has the correct number of links
        if (elements.length !== 3) {
            console.log("Test failed, expected number menu items should be 3");
        } else {
            //Test if I have a h1 tag with text "Start pagina"
            const h1 = await driver.findElement(By.css("h1"));
            const text = await h1.getText();
            if (text === "Start pagina") {
                console.log("Test passed: 3 menu items and h1 tag with text 'Start pagina'");
            } else {
                console.log("Test failed, expected text should be 'Start pagina'");
            }

        }
        
    } finally {
        await driver.sleep(3000); // Delay long enough to see search
        driver.quit();
    }
}


searchTest(driver_fx);
//searchTest(driver_chr);
