import { Button } from "@niwl/cute-button";
import "@niwl/cute-button-css/dist/main.css";
import "./style.css";

const appConainer = document.querySelector<HTMLDivElement>("#app")!;

appConainer.innerHTML = `
  <div class="my-10 bg-[#dfdfdf] rounded-lg max-w-[500px] mx-auto p-[20px]">
    <button class="niwi-cute-button">Hello</button>
  </div>
`;

const buttons = new Button(document.querySelector(".niwi-cute-button")!);

console.log(buttons);
