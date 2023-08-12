## Nuxt3 + vite-plugin-svg-icons + TS

使用中央氣象局天氣代號表, 使用隨機代號模擬不同天氣下的Svg圖片切換

#### 安裝

`yarn add -vite-plugin-svg-icons -D`

#### 配置

- nuxt.config.ts
 (1) iconsDirs: 建立設定需要緩存的圖標資料夾
 (2) symbolId: 指定 svg的 symbolId格式

```Javascript
    import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
    import path from 'path'
    export default defineNuxtConfig({
     vite: {
        plugins: [
            createSvgIconsPlugin({
                iconDirs: [path.resolve(process.cwd(), "assets/svg")],
                symbolId: "icon-[dir]-[name]",
            }),
        ],
      },
    })
```

- plugins/svgicon.client.ts
(1) 引入SvgIcon組件 
(2) 引入註冊腳本, 生成svg
(3) 導出 defineNuxtPlugin

```Javascript
    import svgIcon from "@/components/SvgIcon.vue";
    import "virtual:svg-icons-register";
    export default defineNuxtPlugin((nuxtApp) => {
        nuxtApp.vueApp.component("svg-icon", svgIcon);
    });
```

- components/SvgIcon.vue

建立預設css、`<svg>` tag, 之後由此呼叫

```Javascript
    <svg aria-hidden="true">
      <use :xlink:href="symbolId" :fill="color" />
    </svg>
```

- tsconfig.json

```Javascript
    "compilerOptions": {
        "types": ["vite-plugin-svg-icons/client"]
    }
```

#### 引入

```html
   <svg-icon name="svg檔案名稱"></svg>
```

#### 參考Data

1. 中央氣象局[預報XML產品預報因子欄位中文說明表](https://opendata.cwb.gov.tw/opendatadoc/MFC/D0047.pdf)
2. iTome鐵人賽- [[Day 21 - 即時天氣] 處理天氣圖示以及 useMemo 的使用](https://ithelp.ithome.com.tw/articles/10225927)
3. vite-plugin-svg-icons[官網](https://github.com/vbenjs/vite-plugin-svg-icons)