import { NiwiCuteButton } from "@niwi-ui/cute-button";
import "@niwi-ui/cute-button-css/dist/main.css";
import "./style.css";

const appConainer = document.querySelector<HTMLDivElement>("#app")!;

appConainer.innerHTML = `
 <main class="h-screen flex flex-col gap-y-16 justify-center items-center">
  <div class=" bg-[#f3f3f3] rounded-lg max-w-[680px] mx-auto p-[20px] gap-y-5 flex-wrap flex flex-row gap-x-5 items-center">
    <button class="dog mr-4">Hover Me</button>
    <button class="dog-menu w-12 h-12">Hover Me</button>
    <button class="dog-setting w-12 h-12">Hover Me</button>
    <button class="dog-noti w-12 h-12">Hover Me</button>
    <button class="dog-toggler w-20 p-1">Hover Me</button>
  </div>
  <div class=" bg-[#f3f3f3] rounded-lg max-w-[680px] mx-auto p-[20px] gap-y-5 flex-wrap flex flex-row gap-x-5 items-center">
    <button class="frog mr-4">Hover Me</button>
    <button class="frog-menu w-12 h-12">Hover Me</button>
    <button class="frog-setting w-12 h-12">Hover Me</button>
    <button class="frog-noti w-12 h-12">Hover Me</button>
    <button class="frog-toggler w-20 p-1">Hover Me</button>
  </div>
 </main>
`;

new NiwiCuteButton(document.querySelector(".dog")!);
new NiwiCuteButton(document.querySelector(".dog-menu")!, {
  characterType: "dog",
  type: "menu",
});
new NiwiCuteButton(document.querySelector(".dog-setting")!, {
  characterType: "dog",
  type: "setting",
});
new NiwiCuteButton(document.querySelector(".dog-noti")!, {
  characterType: "dog",
  type: "noti",
});
new NiwiCuteButton(document.querySelector(".dog-toggler")!, {
  characterType: "dog",
  type: "toggler",
});

new NiwiCuteButton(document.querySelector(".frog")!, { characterType: "frog" });
new NiwiCuteButton(document.querySelector(".frog-menu")!, {
  characterType: "frog",
  type: "menu",
});
new NiwiCuteButton(document.querySelector(".frog-setting")!, {
  characterType: "frog",
  type: "setting",
});
new NiwiCuteButton(document.querySelector(".frog-noti")!, {
  characterType: "frog",
  type: "noti",
});
new NiwiCuteButton(document.querySelector(".frog-toggler")!, {
  characterType: "frog",
  type: "toggler",
});
