import { NiwiCuteButton } from "@niwi-ui/cute-button";
import "@niwi-ui/cute-button-css/dist/main.css";
import "./style.css";

const appConainer = document.querySelector<HTMLDivElement>("#app")!;

appConainer.innerHTML = `
  <div class="my-10 bg-[#dfdfdf] rounded-lg max-w-[500px] mx-auto p-[20px]">
    <button class="niwi-cute-button">Hover Me</button>
  </div>
`;

new NiwiCuteButton(document.querySelector(".niwi-cute-button")!);
