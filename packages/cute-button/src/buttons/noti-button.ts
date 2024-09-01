import characters, { CharacterType } from "../characters";
import NiwiHelperButton from "./helper-button";

export class NiwiCuteNotiButton extends NiwiHelperButton {
  private element: HTMLElement;
  private characterType: CharacterType;
  private handElement: HTMLElement;
  private animateDuration: number = 300;

  constructor(element: HTMLElement, characterType: CharacterType) {
    super();
    this.element = element;
    this.characterType = characterType;

    this.addContainerClass();
    this.setContent();
    this.setNotiButton();

    this.handElement = this.setHandIcon();
    this.setListener();
  }

  private addContainerClass() {
    const container = this.element;
    container.classList.add("niwi-cute-button", "niwi-cb-noti-animation");
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

  private setHandIcon() {
    const container = this.element;
    const characterType = this.characterType;
    const { height } = this.getCurrentButtonSize();
    const handIconBox = document.createElement("span");
    handIconBox.classList.add("hand");
    handIconBox.style.width = `${height * 0.75}px`;
    handIconBox.style.height = `${height * 0.75}px`;
    handIconBox.innerHTML = `${characters[characterType].hand}`;
    container.prepend(handIconBox);
    return handIconBox;
  }

  private setListener() {
    const element = this.element;
    element.addEventListener("mouseenter", () => {
      this.handleAnimation();
    });
  }

  private async handleAnimation() {
    if (this.checkIsAnimating()) return;
    this.element.classList.add("animated");
    this.element.classList.add("noti-animated");

    this.handElement.style.zIndex = "1";

    const handEnter = () => {
      this.handElement.style.transition = `all ${this.animateDuration}ms ease-in-out`;
      this.handElement.style.opacity = "1";
      this.handElement.style.left = "50%";
    };
    await this.animateWithDelay(handEnter, this.animateDuration);

    const handLeave = () => {
      this.handElement.style.transition = `all ${this.animateDuration}ms ease-in-out`;
      this.handElement.style.left = "0";
      this.handElement.style.opacity = "0";
      this.handElement.style.zIndex = "0";
    };
    await this.animateWithDelay(handLeave, this.animateDuration);

    this.element.classList.remove("animated");
  }

  private checkIsAnimating(): boolean {
    return this.element.classList.contains("animated");
  }

  private getCurrentButtonSize() {
    const button = this.element;
    const rect = button.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    return { width, height };
  }
}
