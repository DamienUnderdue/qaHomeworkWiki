import {Builder, By, Capabilities, WebDriver} from "selenium-webdriver"

const chromedriver = require("chromedriver")

const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

describe("enterWanted 1.4", () => {
    beforeEach(async () => {
        await driver.get('https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html')
    });
    afterAll(async () => {
        await driver.quit();
    })

    const hdrInput: By = By.name("hdrInput");
    const mkeInput: By = By.name("mkeInput");
    const oriInput: By = By.name("oriInput"); 
    const nameInput: By = By.name("nameInput"); 
    //in the dom I noticed that the spelling is dif then Const"namInput=naminput)
    const clrBtn: By = By.id("clrBtn");
    const submitBtn: By = By.name("submitBtn"); 
    const errorMsg: By = By.name("errorMsg");

    test("enterWanted 1.4 selectors",async () => {
        await driver.findElement(hdrInput).sendKeys("Multiversal Crime")
        await driver.findElement(mkeInput).sendKeys("Witch")
        await driver.findElement(oriInput).sendKeys("FBI")
        await driver.findElement(nameInput).sendKeys("Wanda Maximoff")
        await driver.findElement(submitBtn).click()
        expect(errorMsg).toContain("Errors Received:")
        await driver.findElement(clrBtn).click()
        
    })
})