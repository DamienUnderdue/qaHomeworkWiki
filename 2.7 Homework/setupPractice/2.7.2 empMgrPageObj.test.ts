import {Builder,By, Capabilities, Locator, until, WebDriver, } from "selenium-webdriver";
  const chromedriver = require("chromedriver");

  const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

  class employeePage{
      
      driver: WebDriver;
      url: string = "https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html";
      addEmployee: By = By.name ('addEmployee');
      newEmployee: By = By.name('[name = "employee11"]');
      nameInput: By = By.name ('[name = "nameInput"]');
      phoneInput: By = By.name('[name = "phoneInput")');
      titleInput: By = By.name('[name = "titleInput")');
      constructor(driver: WebDriver){
          this.driver = driver
          this.url= this.url

      }
      async navigate () {
          await this.driver.get (this.url)
          await this.driver.wait(until.elementLocated (this.addEmployee))
          //await this.driver.wait(until.elementLocated (this.header?))
          await this.driver.wait (until.elementIsVisible(await driver.findElement(this.addEmployee)))
      }
      }
      const empPage = new employeePage (driver);

      describe("Employee Manager Test", () => {
          beforeEach(async () => {
              await empPage.navigate
          })
          
          afterAll(async () => {
              await driver.quit ()

          })

          
        test("adding an employee", async () => {

          await driver.wait(until.elementLocated(empPage.addEmployee))
          // await driver.wait (unitl.elementLocate(empPage.header?))
          await driver.findElement(empPage.addEmployee).click ()
          //await driver.findElement(empPage.newEmployee).click ()
        

          await driver.findElement(empPage.nameInput).click ()
          await driver.findElement(empPage.nameInput).clear ()
          await driver.findElement(empPage.nameInput).sendKeys ("Mr Fantastic")
          
          await driver.findElement(empPage.phoneInput).click ()
          await driver.findElement(empPage.phoneInput).clear ()
          await driver.findElement(empPage.phoneInput).sendKeys ("1234567899")

          await driver.findElement(empPage.titleInput).click ()
          await driver.findElement(empPage.titleInput).clear()
          await driver.findElement(empPage.titleInput).sendKeys("Leader")
        })

    })