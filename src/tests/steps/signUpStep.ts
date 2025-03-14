import {Given, When, Then} from '@cucumber/cucumber'
import {Page, expect, Browser, chromium} from "@playwright/test"; 
import { pageFixture } from '../../hooks/pageFixture';

let page: Page;
let browser: Browser;

Given('User navigates to the application', async function () {    
    await pageFixture.page.goto("https://www.facebook.com/");
    await pageFixture.page.waitForLoadState();
  });

When('User clicks the button create new account in the facebook page', async function () {
   //click the button create account pageFixture.page by using get by role
   await pageFixture.page.getByRole("button",{name:"Create new account"}).click();   
  });

Then('User is navigated to create an account', async function () {
    //check whether we navigated to same pageFixture.page
    await pageFixture.page.waitForLoadState();
    await expect(pageFixture.page).toHaveTitle("Sign Up for Facebook");
    //get the heading text by using RegEx
    const heading = await pageFixture.page.getByText(/ new account/).textContent();
    console.log(heading);
  });  

Given('User enters the firstName as {string}', async function (firstName) {  
    //enter the firstname details    
    await pageFixture.page.locator('//input[@name="firstname"]').fill(firstName);
});

Given('User enters the lastName as {string}', async function (lastName) {
    //enter the lastname details  
    await pageFixture.page.locator('//input[@name="lastname"]').fill(lastName);
    //await pageFixture.page.getByPlaceholder('Last name').fill(lastName);
});

Given('User selects the month as {string}', async function (month) {
    //select the month May from the dropdown
    await pageFixture.page.getByLabel('Month').selectOption({label: 'May'});
});

Given('User selects the date as {string}', async function (date) {
    //select the date as 23 from the dropdown
    await pageFixture.page.getByLabel('Day').selectOption({label: date});
});

Given('User select the yeas as {string}', async function (year) {
    //select the year as 2000 from the dropdown
    await pageFixture.page.getByLabel('Year').selectOption({label: year});
});

Given('User selects the gender as {string}', async function (string) {
    await pageFixture.page.locator('//input[@value="2"]').check();
});

Given('User enters the email as {string}', async function (email) {
    //enter the email address
    await pageFixture.page.getByRole('textbox', { name: 'Mobile number or email' }).pressSequentially(email);
});

Given('User enters the password as {string}', async function (password) {
    //enter the password
    await pageFixture.page.getByRole('textbox',{name:'New password'}).pressSequentially(password);
});

When('User clicks the button {string}', async function (string) {
    //click the Signup button to signup
    await pageFixture.page.getByRole('button',{name: 'Sign Up'}).click();
});

Then('User account should be registered successfully', async function () {
    //with this given dummy data i'm aborting the process here, but all the steps are commpleted
    await pageFixture.page.waitForLoadState();
    console.log('Signup process Completed');
});