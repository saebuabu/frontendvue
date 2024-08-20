const { Builder, Browser, By, Key } = require("selenium-webdriver");

const driver_fx = new Builder().forBrowser(Browser.FIREFOX).build();

const driver_chr = new Builder().forBrowser(Browser.CHROME).build();

async function searchTest(driver) {
  try {
    await driver.get("http://www.google.com");


    await driver.findElement(By.name("q")).sendKeys("webdriver", Key.RETURN);
    await driver.sleep(5000).then(async () => {
      await driver.getTitle().then(async (title) => {
        if (title === "webdriver - Google Search") {
          console.log("Test passed");
        } else {
          console.log("Test failed");
        }
      });
    });
  } finally {
    
    await driver.sleep(10000); // Delay long enough to see search
    driver.quit();
  }
}

//searchTest(driver_fx);
searchTest(driver_chr);
