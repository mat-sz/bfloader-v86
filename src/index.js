import { V86Starter } from "v86";

import "./App.scss";

import seabios from "./bios/seabios.bin";
import vgabios from "./bios/vgabios.bin";
import bfloader from "./img/bfloader.img";

let loading = document.getElementById("loading");

let emulator = new V86Starter({
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
