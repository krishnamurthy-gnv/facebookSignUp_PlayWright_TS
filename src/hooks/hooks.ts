import { AfterAll, After, BeforeAll, Before} from "@cucumber/cucumber";
import { Browser, BrowserContext, Page, chromium } from "@playwright/test";
import { pageFixture } from "./pageFixture";

let browser : Browser;
let page: Page;
let context: BrowserContext

BeforeAll(async function(){
    browser = await chromium.launch({headless:false});
    context = await browser.newContext();    
    page = await context.newPage();
    pageFixture.page = page;
})

After(async function({pickle}){
    //screenshot
    const img = await pageFixture.page.screenshot({path:`./test-result/screenshots/${pickle.name}.png`,type:"png"});
    await this.attach(img,"image/png");  
})

AfterAll(async function () {
    await pageFixture.page.close();
    await context.close();
    await browser.close();
})