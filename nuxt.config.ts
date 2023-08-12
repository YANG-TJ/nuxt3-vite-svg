// https://nuxt.com/docs/api/configuration/nuxt-config
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import path from "path";
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/styles/main.css"],
  vite: {
    plugins: [
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), "assets/svg")],
        symbolId: "icon-[dir]-[name]",
      }),
    ],
  },
  app: {
    baseURL: "/svg-test/", // baseURL: '/<repository>/'
    buildAssetsDir: "assets", // don't use "_" at the begining of the folder name to avoids nojkill conflict
  },
});
