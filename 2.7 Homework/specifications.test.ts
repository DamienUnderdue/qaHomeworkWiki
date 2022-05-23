import { SpecPage } from "./SpecPage";
const chromedriver = require("chromedriver");
import { WebDriver, Builder, Capabilities, By ,until} from "selenium-webdriver";

const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

const page = new SpecPage (driver);

export class SpecPage{
    driver: WebDriver;
    url: string = "http//wwww.google.com/"
    searchBar: By =By.name('q')
    results: By = By.id('rso')
constructor(driver: WebDriver) {
    this.driver = driver
  
    
}
async navigate() {
    await this. driver.get (this.url)
    await this. driver.wait(until.elementLocated(this.searchBar))
}
async doSearch () {
    return this.driver.wait ( until.elementLocated(this.searchBar))
}
async getResults() {
    return this.getText(this.results)

}
async getText(elementBy){
    await this.driver.wait(until.elementLocated(elementBy))
    return this. driver.findElement(elementBy).getText()



}

test("it works", async () => {
  await page.navigate();
  await page.doSearch("purple");
  expect(await page.getResults()).toContain("purple");
}

afterAll(async () => {
  await driver.quit();
});


