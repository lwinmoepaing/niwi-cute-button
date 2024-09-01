import characters, { CharacterType } from "../characters";

export class NiwiCuteSettingButton {
  private element: HTMLElement;
  private characterType: CharacterType;

  constructor(element: HTMLElement, characterType: CharacterType) {
    this.element = element;
    this.characterType = characterType;

    this.addContainerClass();
    this.setContent();
    this.setSettingButton();
  }

  private addContainerClass() {
    const container = this.element;
    container.classList.add("niwi-cute-button", "niwi-cb-setting-animation");
  }

  private setContent() {
    const container = this.element;
    container.innerHTML = "";
  }

  private setSettingButton() {
    const characterType = this.characterType;
    const container = this.element;
    container.innerHTML = characters[characterType].setting;
  }
}
