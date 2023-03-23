import { Locator, Page } from '@playwright/test'

export abstract class AbstractComponent {
    protected page: Page;
    protected wrapperElement: Locator;

    constructor(page: Page, wrapperLocator?: Locator) {
        this.page = page;
        this.wrapperElement = wrapperLocator ?? this.page.locator(':root');
    }
}