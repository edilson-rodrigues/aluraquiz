import { When, Then, BeforeAll, AfterAll, setDefaultTimeout } from '@cucumber/cucumber'
import { chromium, Browser, Page } from 'playwright'
import assert from 'assert'

setDefaultTimeout(60 * 1000)

let browser: Browser
let page: Page
let baseUrl = 'http://localhost:3000'

BeforeAll(async () => {
    browser = await chromium.launch()
})

AfterAll(async () => {
    await browser.close()
})

// 'Given the app is running at {string}' is defined in fill_quiz.steps.ts

When('I open the home page', async () => {
    page = await browser.newPage()
    await page.goto(baseUrl)
})

Then('I should see {string}', async (text: string) => {
    const content = await page.content()
    assert(content.includes(text))
    await page.close()
})
