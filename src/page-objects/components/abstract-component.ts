import { Page } from '@playwright/test'

export abstract class AbstractComponent {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public abstract isVisible(): Promise<boolean>;
}