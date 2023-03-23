import { Locator, Page } from "@playwright/test";
import { AbstractComponent } from "./abstract-component";
import { SweetCard } from "./sweet-card";

export class SweetCardsContainer extends AbstractComponent {
    readonly cards: Locator;

    constructor(page: Page) {
        super(page);
        this.cards = this.wrapperElement.locator('.card');
    }

    public async getCardByIndex(index: number): Promise<SweetCard> {
        return new SweetCard(this.page, this.cards.nth(index));
    }

    /**
    * This method returns a promise of SweetCard if its title matches with the provided title.
    * It throws an error if no SweetCard is found with the provided title.
    * @param  {string} title - The title of the sweet card to find
    */
    public async getCardByTitle(title: string): Promise<SweetCard> {
        const cardLocators: Locator[] = await this.cards.all();
        const sweetCards: SweetCard[] = await Promise.all(cardLocators.map(async (card) => new SweetCard(this.page, card)));
        const foundCard = sweetCards.find(async (card) => await card.title.innerText() === title);

        if (!foundCard) {
            throw new Error(`Could not find a sweet card with '${title}' title!`);
        }

        return foundCard;
    }
}