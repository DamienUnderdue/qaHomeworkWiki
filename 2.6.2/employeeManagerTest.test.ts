import {Builder,By, Capabilities, until, WebDriver, } from "selenium-webdriver";
  const chromedriver = require("chromedriver");

  const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

  class employeePage {
      [x: string]: Locator;
      driver: WebDriver;
      url: string = "https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html";
        //FILL OUT LOCATORS CONSTRUCTOR AND METHODS IN ORDER TO PASS THE TEST
        addEmployee: By=By.css('[name="addEmployee"]')
        newEmployee: By=By.css('[name="employee11"]')
        nameInput: By=By.css ('[name=" nameInput"]')
        phoneInput: By =By.css('[name="phoneInput"]')
        titleInput: By = By.css('[name="titleInput"]')
constructor(driver: WebDriver){
    this.driver = driver

}
async navigate() {
    await this.driver. get (this.url)
    await this.driver.wait(until.elementLocated (this.header))
}
  }
const emPage = new employeePage (driver)

  describe("Employee Manager Test", () => {
      beforeEach(async () => {
          await emPage.navigate
      })
      afterAll(async () => {
          await driver.quit()
      })
      test("adding an employee", async () => {
          await driver.wait(until.elementLocated(emPage.header))
          await driver.findElement(emPage.addEmployee).click()
          await driver.findElement(emPage.newEmployee).click()
          await driver.findElement(emPage.nameInput).click()
          await driver.findElement(emPage.nameInput).clear()
          await driver.findElement(emPage.nameInput).sendKeys("Stephen Strange")
          await driver.findElement(emPage.phoneInput).click()
          await driver.findElement(emPage.phoneInput).clear()
          await driver.findElement(emPage.phoneInput).sendKeys("1112223344")
          await driver.findElement(emPage.titleInput).click()
          await driver.findElement(emPage.titleInput).clear()
          await driver.findElement(emPage.titleInput).sendKeys("Sorcerer Supreme")
  })
})