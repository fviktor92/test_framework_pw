import { Locator, Page } from "@playwright/test";
import { AbstractComponent } from "./abstract-component";

export class SearchSuggestion extends AbstractComponent {

    private suggestionItems: Locator;

    constructor(page: Page) {
        super(page);
        this.suggestionItems = super.page.locator('li.sbct');
    }

    public async setSearchInput(text: string) {
        await this.suggestionItems.clear();
        await this.suggestionItems.type(text);
    }

    public async isVisible(): Promise<boolean> {
        let isVisible = false;
        const lis: Locator[] = await this.suggestionItems.all();
        for (const li of lis) {
            isVisible = await li.isVisible();
            if (!isVisible) return isVisible;
        }
        return isVisible && lis.length > 5;
    }
}