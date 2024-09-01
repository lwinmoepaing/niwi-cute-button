import { NiwiCuteHoverButton } from "./buttons/hover-button";
import { NiwiCuteMenuButton } from "./buttons/menu-button";
import { NiwiCuteNotiButton } from "./buttons/noti-button";
import { NiwiCuteSettingButton } from "./buttons/setting-button";
import { NiwiCuteTogglerButton } from "./buttons/toggler-button";
import { CharacterType } from "./characters";
import { NiwiButttonType } from "./types/button-type";

export type NiwiCuteButtonOptions = Partial<{
  handAnimateDuration: number;
  handShakeAnimationDuration: number;
  bodyAnimationDuration: number;
  type: NiwiButttonType;
}> & {
  characterType: CharacterType;
};

export const defaultOptions = {
  handAnimateDuration: 500,
  handShakeAnimationDuration: 300,
  bodyAnimationDuration: 800,
  characterType: "dog" as CharacterType,
} as const;

export class NiwiCuteButton {
  private element: HTMLElement;
  private options: NiwiCuteButtonOptions;

  constructor(element: HTMLElement, options?: NiwiCuteButtonOptions) {
    this.element = element;
    this.options = { ...defaultOptions, ...options };

    switch (this.options.type) {
      case "menu":
        new NiwiCuteMenuButton(this.element, this.options.characterType);
        break;
      case "setting":
        new NiwiCuteSettingButton(this.element, this.options.characterType);
        break;
      case "noti":
        new NiwiCuteNotiButton(this.element, this.options.characterType);
        break;
      case "toggler":
        new NiwiCuteTogglerButton(this.element, this.options.characterType);
        break;
      default: {
        new NiwiCuteHoverButton(this.element, this.options);
      }
    }
  }
}
