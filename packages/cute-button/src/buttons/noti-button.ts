import characters, { CharacterType } from "../characters";

export class NiwiCuteNotiButton {
  private element: HTMLElement;
  private characterType: CharacterType;

  constructor(element: HTMLElement, characterType: CharacterType) {
    this.element = element;
    this.characterType = characterType;

    this.addContainerClass();
    this.setContent();
    this.setNotiButton();
  }

  private addContainerClass() {
    const container = this.element;
    container.classList.add("niwi-cute-button");
  }

  private setContent() {
    const container = this.element;
    container.innerHTML = "";
  }

  private setNotiButton() {
    const characterType = this.characterType;
    const container = this.element;
    container.innerHTML = characters[characterType].noti;
  }
}
