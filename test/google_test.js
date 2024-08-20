const { Builder, Browser, By, Key, until } = require("selenium-webdriver");

(async function example() {
  const driver = await new Builder().forBrowser(Browser.FIREFOX).build();
  try {
    await driver.get("https://www.google.com/ncr");

    // cookie question popup click on accept
    await driver.findElement(By.id("L2AGLb")).click();

    await driver.findElement(By.name("q")).sendKeys("webdriver", Key.RETURN);
    await driver.wait(until.titleIs("webdriver - Google Search"), 1000);
  } finally {
    await driver.sleep(10000); // Delay long enough to see search page!
    await driver.quit();
  }
})();

