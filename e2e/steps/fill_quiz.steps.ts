import { Given, When, Then, BeforeAll, AfterAll, setDefaultTimeout } from '@cucumber/cucumber'
import { chromium, Browser, Page } from 'playwright'
import assert from 'assert'
import fs from 'fs'
import path from 'path'

const dbPath = path.resolve(process.cwd(), 'db.json')
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'))

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

Given('the app is running at {string}', async (url: string) => {
    baseUrl = url
})

When('I play the quiz until the end', async () => {
    page = await browser.newPage()
    await page.goto(baseUrl)

    // Fill name input and submit
    await page.fill('input[placeholder="Diz ai seu nome para jogar :)"]', 'E2E Tester')
    // Click the play button (it renders as 'Jogar E2E Tester' once name is filled)
    await page.click('button:has-text("Jogar")')

    // Wait for quiz to load (there is a 1s loading state in the app)
    await page.waitForSelector('text=Pergunta 1 de')

    // Iterate through questions, pick the correct alternative and confirm
    const questions = db.questions || []
    for (let qi = 0; qi < questions.length; qi += 1) {
        const q = questions[qi]
        // Wait for question title to appear
        await page.waitForSelector(`text=${q.title}`)

        const correctIndex = q.answer
        // Click the label linked to the alternative input
        await page.click(`label[for="alternative__${correctIndex}"]`)

        // Click Confirmar
        await page.click('button:has-text("Confirmar")')

        // Wait for result handling delay (2s in the app)
        await page.waitForTimeout(2200)
    }
})

Then('I should see my result and my name', async () => {
    await page.waitForSelector('text=Mandou bem')
    const content = await page.content()
    assert(content.includes('Mandou bem'))
    assert(content.includes('E2E Tester'))
    await page.close()
})
