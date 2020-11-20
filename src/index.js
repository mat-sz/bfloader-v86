import { V86Starter } from "v86";

import "./App.scss";

import seabios from "./bios/seabios.bin";
import vgabios from "./bios/vgabios.bin";
import bfloader from "./img/bfloader.img";

const loading = document.getElementById("loading");
const helloWorld = document.getElementById("hello_world");

const emulator = new V86Starter({
  screen_container: document.getElementById("screen_container"),
  bios: {
    url: seabios,
  },
  vga_bios: {
    url: vgabios,
  },
  fda: {
    url: bfloader,
  },
  autostart: true,
});

emulator.add_listener("screen-set-mode", (graphic) => {
  loading.style.display = "none";
});

helloWorld.addEventListener("click", () => {
  const text =
    "++++++++[>++++[>++>+++>+++>+<<<<-]>+>+>->>+[<]<-]>>.>---.+++++++..+++.>>.<-.<.+++.------.--------.>>+.>++.";
  for (let i = 0; i < text.length; i++) {
    setTimeout(() => emulator.keyboard_send_text(text.charAt(i)), 10 * i);
  }
});
