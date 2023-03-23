import { Locator, Page } from "@playwright/test";
import { SweetCardsContainer } from "../components/sweet-cards-container";
import { BasePage } from "./base-page";
import { SweetsPage } from "./sweets-page";

export class HomePage extends BasePage<HomePage> {
    readonly headerWrapper: Locator;
    readonly advertisingImg: Locator;
    readonly headerTxt: Locator;
    readonly headerDescriptionTxt: Locator;
    readonly browseSweetsBtn: Locator;
    readonly sweetCards: SweetCardsContainer;

    constructor(page: Page) {
        super(page);
        this.headerWrapper = this.page.locator('header');
        this.advertisingImg = this.headerWrapper.locator('img');
        this.headerTxt = this.headerWrapper.locator('h1');
        this.headerDescriptionTxt = this.headerWrapper.locator('p.lead');
        this.browseSweetsBtn = this.headerWrapper.locator('.sweets');
        this.sweetCards = new SweetCardsContainer(this.page);
    }

    public override async goTo(): Promise<HomePage> {
        await this.page.goto('https://sweetshop.netlify.app/', { waitUntil: 'networkidle' });
        return this;
    }

    public async clickBrowseSweets(): Promise<SweetsPage> {
        await this.browseSweetsBtn.click();
        return new SweetsPage(this.page);
    }
}