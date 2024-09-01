export default class NiwiHelperButton {
  constructor() {}

  public animateWithDelay(fun: () => void, delay: number) {
    return new Promise((resolve) => {
      fun();
      setTimeout(() => {
        resolve(true);
      }, delay);
    });
  }

  public delay(delay: number) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, delay);
    });
  }
}
