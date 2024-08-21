const { Builder, Browser, By } = require("selenium-webdriver");

const driver_fx = new Builder().forBrowser(Browser.FIREFOX).build();
//const driver_chr = new Builder().forBrowser(Browser.CHROME).build();

async function searchTest(driver) {
    try {
        driver.get("http://localhost:8080");
        const elements = await driver.findElements(By.css(".navbar-nav a"));

        //when the text = "Over ons" then click on the link
        for (let element of elements) {
            const text = await element.getText();
            if (text === "Over ons") {
                await element.click();
                // in the new page, check if the h1 tag has the text "Over ons"
                const h1 = await driver.findElement(By.css("h1"));
                const text = await h1.getText();
                if (text === "Over ons") {
                    console.log("Test passed: h1 tag with text 'Over ons'");
                } else {
                    console.log("Test failed, expected text should be 'Over ons'");
                }
                break;
            }
        }
    
    
    } finally {
        await driver.sleep(3000); // Delay long enough to see search
        driver.quit();
    }
}


searchTest(driver_fx);
//searchTest(driver_chr);
