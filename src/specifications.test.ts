import { SpecPage } from "./specPage";
const chromedriver = require("chromedriver");
import { Builder, By, until, Capabilities, WebDriver } from "selenium-webdriver";
const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();
const page = new SpecPage(driver);

test("it works", async () => {
  await page.navigate();
  await page.doSearch("purple");
  expect(await page.getResults()).toContain("purple");
  await (await driver.findElement(page.purpleMattress)).click();
});
afterAll(async () => {
  await page.driver.quit();
})