import { defaultOptions, NiwiCuteButtonOptions } from "..";
import characters from "../characters";
import NiwiHelperButton from "./helper-button";

export class NiwiCuteHoverButton extends NiwiHelperButton {
  private element: HTMLElement;
  private options: NiwiCuteButtonOptions;

  constructor(element: HTMLElement, options?: NiwiCuteButtonOptions) {
    super();
    this.element = element;
    this.options = { ...defaultOptions, ...options };

    this.addContainerClass();
    this.setContent();
    this.setHands();
    this.setBody();
    this.setListener();
  }

  private addContainerClass() {
    const container = this.element;
    container.classList.add("niwi-cute-button", "niwi-cb-animation");
  }

  private setListener() {
    const container = this.element;
    container.addEventListener("mousemove", async (event) => {
      const side = this.getButtonSection(event);
      this.handAnimation({ side });
      this.bodyAnimation({ side });
    });
  }

  private getButtonSection(event: MouseEvent): "left" | "middle" | "right" {
    const button = event.currentTarget as HTMLElement;
    const rect = button.getBoundingClientRect();
    const width = rect.width;
    const mouseX = event.clientX - rect.left;

    if (mouseX < width / 3) {
      return "left";
    } else if (mouseX < (2 * width) / 3) {
      return "middle";
    } else {
      return "right";
    }
  }

  private setHands() {
    const { characterType } = this.options;
    const container = this.element;
    container.classList.add("niwi-cute-button");

    const rect = container.getBoundingClientRect();
    const height = rect.height * 0.8;

    const leftBox = document.createElement("span");
    leftBox.classList.add("left-hand");
    leftBox.style.width = `${height}px`;
    leftBox.style.height = `${height}px`;
    leftBox.style.top = `${rect.height * 0.1}px`;
    leftBox.innerHTML = `${characters[characterType].backHand} ${characters[characterType].frontHand}`;

    const rightBox = document.createElement("span");
    rightBox.classList.add("right-hand");
    rightBox.style.width = `${height}px`;
    rightBox.style.height = `${height}px`;
    rightBox.style.top = `${rect.height * 0.1}px`;
    rightBox.innerHTML = `${characters[characterType].backHand} ${characters[characterType].frontHand}`;

    container.prepend(leftBox);
    container.prepend(rightBox);
  }

  private setBody() {
    const { characterType } = this.options;
    const container = this.element;
    const rect = container.getBoundingClientRect();
    const width = rect.width * 0.4;

    const centerBox = document.createElement("span");
    centerBox.classList.add("center");
    centerBox.style.width = `${width}px`;
    centerBox.style.height = `${width}px`;
    centerBox.innerHTML = `${characters[characterType].body}`;

    container.prepend(centerBox);
  }

  private setContent() {
    const container = this.element;
    const value = container.innerHTML;
    container.innerHTML = "";
    const contentElemnt = document.createElement("span");
    contentElemnt.classList.add("content");
    contentElemnt.innerHTML = value;
    container.prepend(contentElemnt);
  }

  private checkIsAnimating(element: HTMLElement): boolean {
    return (
      element.classList.contains("frontHandActive") ||
      element.classList.contains("backHandActive") ||
      element.classList.contains("bodyActive") ||
      element.classList.contains("finishedAnimation")
    );
  }

  private async handAnimation({ side }: { side: "left" | "right" | "middle" }) {
    const handAnimateDuration = this.options.handAnimateDuration ?? 500;
    const handShakeAnimationDuration =
      this.options.handShakeAnimationDuration ?? 300;

    const element = this.element.querySelector(
      side === "left" ? ".left-hand" : ".right-hand"
    ) as HTMLSpanElement;
    if (
      (side === "left" || side === "right") &&
      element &&
      !this.checkIsAnimating(element)
    ) {
      // Hand Container Animation Start
      element.style.transition = `all ${handAnimateDuration}ms ease-in-out`;
      const activeFrontHand = () => element.classList.add("frontHandActive");
      await this.animateWithDelay(activeFrontHand, handAnimateDuration);

      const activeBackHand = () => element.classList.add("backHandActive");
      await this.animateWithDelay(activeBackHand, handAnimateDuration);

      // Handshake Animation Start
      element.style.transition = `all ${handShakeAnimationDuration}ms ease-in-out`;
      const rotateUp = () => (element.style.rotate = "-15deg");
      const rotateDown = () => (element.style.rotate = "15deg");
      const resetRotate = () => (element.style.rotate = "0deg");

      await this.animateWithDelay(rotateUp, handShakeAnimationDuration);
      await this.animateWithDelay(rotateDown, handShakeAnimationDuration);
      await this.animateWithDelay(rotateUp, handShakeAnimationDuration);
      await this.animateWithDelay(rotateDown, handShakeAnimationDuration);
      await this.animateWithDelay(resetRotate, handShakeAnimationDuration);

      const resetProperty = () => element.style.removeProperty("transition");
      await this.animateWithDelay(resetProperty, handShakeAnimationDuration);

      // Finished Animation
      const lastAnimation = () => element.classList.add("finishedAnimation");
      await this.animateWithDelay(lastAnimation, 300);
      element.classList.remove(
        "frontHandActive",
        "backHandActive",
        "finishedAnimation"
      );
    }
  }

  private async bodyAnimation({ side }: { side: "left" | "right" | "middle" }) {
    const bodyAnimationDuration = this.options.bodyAnimationDuration ?? 800;
    const element = this.element.querySelector(".center") as HTMLSpanElement;

    if (side === "middle" && element && !this.checkIsAnimating(element)) {
      // Body Container Animation Start
      element.style.transition = `all ${bodyAnimationDuration}ms ease-in-out`;
      const activeBody = () => element.classList.add("bodyActive");
      await this.animateWithDelay(activeBody, bodyAnimationDuration);

      await this.delay(1800);

      // Finished Animation
      const inactiveBody = () => element.classList.add("finishedAnimation");
      await this.animateWithDelay(inactiveBody, 2000);
      element.classList.remove("bodyActive", "finishedAnimation");
    }
  }
}
