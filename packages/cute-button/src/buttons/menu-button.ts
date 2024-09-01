import characters, { CharacterType } from "../characters";
import NiwiHelperButton from "./helper-button";

export class NiwiCuteMenuButton extends NiwiHelperButton {
  private element: HTMLElement;
  private characterType: CharacterType;

  constructor(element: HTMLElement, characterType: CharacterType) {
    super();
    this.element = element;
    this.characterType = characterType;

    this.addContainerClass();
    this.setContent();
    this.setMenuButton();
    this.setListener();
  }

  private addContainerClass() {
    const container = this.element;
    container.classList.add("niwi-cute-button", "niwi-cb-menu-animation");
  }

  private setContent() {
    const container = this.element;
    container.innerHTML = "";
  }

  private setMenuButton() {
    const characterType = this.characterType;
    const container = this.element;
    container.innerHTML = characters[characterType].menu;
  }

  private setListener() {
    const container = this.element;
    container.addEventListener("click", async () => {
      this.handAnimation();
    });
  }

  private handAnimation() {
    this.element.classList.toggle("animated");
  }
}
