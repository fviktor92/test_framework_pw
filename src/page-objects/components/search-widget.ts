import { Locator, Page } from "@playwright/test";
import { AbstractComponent } from "./abstract-component";

export class SearchWidget extends AbstractComponent {

    private searchInput: Locator;

    constructor(page: Page) {
        super(page);
        this.searchInput = page.locator('[name="q"]');
    }

    public async setSearchInput(text: string) {
        await this.searchInput.clear();
        await this.searchInput.type(text);
    }

    public async isVisible(): Promise<boolean> {
        return await this.searchInput.isVisible();
    }
}