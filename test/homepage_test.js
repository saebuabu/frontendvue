const { Builder, Browser, By } = require("selenium-webdriver");

//const driver_fx = new Builder().forBrowser(Browser.FIREFOX).build();
const driver_chr = new Builder().forBrowser(Browser.CHROME).build();

async function searchTest(driver) {
    try {
        driver.get("http://localhost:8080");
        const elements = await driver.findElements(By.css("a"));
        
        for(let e of elements) {
            console.log(await e.getText());
        }

        console.log("Test passed");

    } finally {
        await driver.sleep(3000); // Delay long enough to see search
        driver.quit();
    }
}


//searchTest(driver_fx);
searchTest(driver_chr);
