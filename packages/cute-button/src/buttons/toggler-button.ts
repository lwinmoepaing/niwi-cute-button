import { NiwiCuteButtonOptions } from "..";
import characters, { CharacterType } from "../characters";

export class NiwiCuteTogglerButton {
  private element: HTMLElement;
  private characterType: CharacterType;
  private isActive: boolean = false;

  constructor(element: HTMLElement, options: NiwiCuteButtonOptions) {
    this.element = element;
    this.characterType = options.characterType;

    this.setActive(options.isActive ?? false);
    this.addContainerClass();
    this.setContent();
    this.setTogglerButton();
    this.setListner(options?.onChangeActive);
  }

  private addContainerClass() {
    const container = this.element;
    container.classList.add("niwi-cute-button", "niwi-cb-toggler-animation");
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

  // eslint-disable-next-line no-unused-vars
  private setListner(onChange?: (val: boolean) => void) {
    this.element.addEventListener("click", () => {
      onChange?.(!this.isActive);
      this.setActive(!this.isActive);
    });
  }

  private setActive(val: boolean) {
    this.isActive = val;
    if (this.isActive) this.addActive();
    else this.removeActive();
  }

  private addActive() {
    const isAlreadyActive = this.element.classList.contains("active");
    if (isAlreadyActive) return;
    this.element.classList.add("active");
    this.isActive = true;
  }

  private removeActive() {
    const isAlreadyActive = this.element.classList.contains("active");
    if (!isAlreadyActive) return;
    this.element.classList.remove("active");
    this.isActive = false;
  }
}
