import { Locator, Page } from "@playwright/test";
import { AbstractComponent } from "./abstract-component";

export class NavigationBar extends AbstractComponent {
    readonly logo: Locator;
    readonly sweetsBtn: Locator;
    readonly aboutBtn: Locator;
    readonly loginBtn: Locator;
    readonly basketBtn: Locator;

    constructor(page: Page, barWrapper: Locator) {
        super(page, barWrapper);
        this.sweetsBtn = this.wrapperElement.locator('a', { hasText: 'Sweets' });
        this.aboutBtn = this.wrapperElement.locator('a', { hasText: 'About' });
        this.loginBtn = this.wrapperElement.locator('a', { hasText: 'Login' });
        this.basketBtn = this.wrapperElement.locator('a', { hasText: 'Basket' });
    }

    public async goToSweets() {
        await this.sweetsBtn.click();
    }

    public async goToAbout() {
        await this.aboutBtn.click();
    }

    public async goToLogin() {
        await this.loginBtn.click();
    }

    public async goToBasket() {
        await this.basketBtn.click();
    }
}