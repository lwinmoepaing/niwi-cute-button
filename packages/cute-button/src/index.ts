export class Button {
  private element: HTMLElement;

  constructor(element: HTMLElement) {
    this.element = element;
    this.setupButton();
  }

  private setupButton() {
    this.element.classList.add("my-button-style");

    // Add any necessary inner elements or styles here
    const span = document.createElement("span");
    span.classList.add("my-button-label");
    span.textContent = "Click Me";

    this.element.appendChild(span);
  }
}
