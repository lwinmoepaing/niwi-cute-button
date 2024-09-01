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
  isActive: boolean;
  // eslint-disable-next-line no-unused-vars
  onChangeActive: (value: boolean) => void;
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
  private currentButton:
    | NiwiCuteMenuButton
    | NiwiCuteSettingButton
    | NiwiCuteNotiButton
    | NiwiCuteTogglerButton
    | NiwiCuteHoverButton;

  constructor(element: HTMLElement, options?: NiwiCuteButtonOptions) {
    this.element = element;
    this.options = { ...defaultOptions, ...options };

    switch (this.options.type) {
      case "menu":
        this.currentButton = new NiwiCuteMenuButton(
          this.element,
          this.options.characterType
        );
        break;
      case "setting":
        this.currentButton = new NiwiCuteSettingButton(
          this.element,
          this.options.characterType
        );
        break;
      case "noti":
        this.currentButton = new NiwiCuteNotiButton(
          this.element,
          this.options.characterType
        );
        break;
      case "toggler":
        this.currentButton = new NiwiCuteTogglerButton(
          this.element,
          this.options
        );
        break;
      default: {
        this.currentButton = new NiwiCuteHoverButton(
          this.element,
          this.options
        );
      }
    }
  }

  getCurrent() {
    return this.currentButton;
  }
}
