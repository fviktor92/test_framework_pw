import { Locator, Page } from "@playwright/test";
import { AbstractComponent } from "./abstract-component";

export class SweetCard extends AbstractComponent {
    readonly image: Locator;
    readonly title: Locator;
    readonly description: Locator;
    readonly price: Locator;
    readonly addItemBtn: Locator;

    constructor(page: Page, cardWrapper: Locator) {
        super(page, cardWrapper);
        this.image = this.wrapperElement.locator('img');
        this.title = this.wrapperElement.locator('.card-title');
        this.description = this.wrapperElement.locator('.card-text');
        this.price = this.wrapperElement.locator('.text-muted');
        this.addItemBtn = this.wrapperElement.locator('.addItem');
    }

    public async addToBasket() {
        this.addItemBtn.click();
    }
}