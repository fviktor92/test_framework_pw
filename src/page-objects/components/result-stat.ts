import { Locator, Page } from "@playwright/test";
import { AbstractComponent } from "./abstract-component";

export class ResultStat extends AbstractComponent {

    private statsTxt: Locator;

    constructor(page: Page) {
        super(page);
        this.statsTxt = super.page.locator('#resultStats');
    }

    public async getStat(): Promise<string> {
        return await this.statsTxt.innerText();
    }

    public async isVisible(): Promise<boolean> {
        return await this.statsTxt.isVisible();
    }
}