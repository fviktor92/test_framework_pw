import { Page } from "@playwright/test";
import { SweetCardsContainer } from "../components/sweet-cards-container";
import { BasePage } from "./base-page"

export class SweetsPage extends BasePage<SweetsPage> {
    readonly sweetCards: SweetCardsContainer;

    constructor(page: Page) {
        super(page);
        this.sweetCards = new SweetCardsContainer(this.page);
    }

    public override async goTo(): Promise<SweetsPage> {
        await this.page.goto('https://sweetshop.netlify.app/sweets.html', { waitUntil: "networkidle" });
        return this;
    }
}