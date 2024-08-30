import { NiwiCuteButton } from "@niwi-ui/cute-button";
import "@niwi-ui/cute-button-css/dist/main.css";
import "./style.css";

const appConainer = document.querySelector<HTMLDivElement>("#app")!;

appConainer.innerHTML = `
 <main class="h-screen flex justify-center items-center">
  <div class=" bg-[#f3f3f3] rounded-lg max-w-[600px] mx-auto p-[20px] flex flex-row gap-x-[70px]">
    <button class="dog">Hover Me</button>
    <button class="frog">Hover Me</button>
  </div>
 </main>
`;

new NiwiCuteButton(document.querySelector(".dog")!);
new NiwiCuteButton(document.querySelector(".frog")!, { characterType: "frog" });
