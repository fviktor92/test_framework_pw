import { Locator, Page } from "@playwright/test";
import { NavigationBar } from "../components/navigation-bar";

export abstract class BasePage<T extends BasePage<T>> {
    protected readonly page: Page;
    private readonly _navigationBar: NavigationBar;
    private readonly navBarWrapper: Locator;

    constructor(page: Page) {
        this.page = page;
        this.navBarWrapper = this.page.locator('.navbar');
        this._navigationBar = new NavigationBar(this.page, this.navBarWrapper);
    }

    public abstract goTo(): Promise<T>;

    public get navigationBar(): NavigationBar {
        return this._navigationBar;
    }
}