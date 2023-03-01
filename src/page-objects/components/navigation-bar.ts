import { Locator, Page } from "@playwright/test";
import { AbstractComponent } from "./abstract-component";

export class NavigationBar extends AbstractComponent {

    private barWrapper: Locator;
    private imagesBtn: Locator;
    private newsBtn: Locator;

    constructor(page: Page) {
        super(page);
        this.barWrapper = super.page.locator('#hdtb');
        this.imagesBtn = this.barWrapper.locator('a', { hasText: 'Images' });
        this.newsBtn = this.barWrapper.locator('a', { hasText: 'News' });
    }

    public async goToImages() {
        await this.imagesBtn.click();
    }

    public async goToNews() {
        await this.newsBtn.click();
    }

    public async isVisible(): Promise<boolean> {
        return await this.barWrapper.isVisible();
    }
}