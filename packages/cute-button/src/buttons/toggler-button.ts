import characters, { CharacterType } from "../characters";

export class NiwiCuteTogglerButton {
  private element: HTMLElement;
  private characterType: CharacterType;

  constructor(element: HTMLElement, characterType: CharacterType) {
    this.element = element;
    this.characterType = characterType;

    this.addContainerClass();
    this.setContent();
    this.setTogglerButton();
  }

  private addContainerClass() {
    const container = this.element;
    container.classList.add("niwi-cute-button");
  }

  private setContent() {
    const container = this.element;
    container.innerHTML = "";
  }

  private setTogglerButton() {
    const characterType = this.characterType;
    const container = this.element;
    container.innerHTML = characters[characterType].toggler;
  }
}
