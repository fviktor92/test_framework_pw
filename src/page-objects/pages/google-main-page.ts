import { Page } from "@playwright/test";
import { SearchSuggestion } from "../components/search-suggestion";
import { SearchWidget } from "../components/search-widget";

export class GoogleMainPage {
    private page: Page;
    private _searchWidget: SearchWidget;
    private _searchSuggestion: SearchSuggestion;

    constructor(page: Page) {
        this.page = page;
        this._searchWidget = new SearchWidget(this.page);
        this._searchSuggestion = new SearchSuggestion(this.page);
    }

    public async goTo(): Promise<GoogleMainPage> {
        await this.page.goto('https://google.com');
        return this;
    }

    public get searchWidget(): SearchWidget {
        return this._searchWidget;
    }

    public get searchSuggestion(): SearchSuggestion {
        return this._searchSuggestion;
    }
}