// vite.config.ts
import vue
    from "file:///C:/Users/42060/neon_role_play_vue/neon_role_play_web/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueJsx
    from "file:///C:/Users/42060/neon_role_play_vue/neon_role_play_web/node_modules/@vitejs/plugin-vue-jsx/dist/index.mjs";
import vuetify, {
    transformAssetUrls
} from "file:///C:/Users/42060/neon_role_play_vue/neon_role_play_web/node_modules/vite-plugin-vuetify/dist/index.mjs";
import {fileURLToPath, URL} from "node:url";
import {
    defineConfig
} from "file:///C:/Users/42060/neon_role_play_vue/neon_role_play_web/node_modules/vite/dist/node/index.js";

var __vite_injected_original_import_meta_url = "file:///C:/Users/42060/neon_role_play_vue/neon_role_play_web/vite.config.ts";
var vite_config_default = defineConfig({
    plugins: [
        vue({
            template: {transformAssetUrls}
        }),
        vueJsx(),
        vuetify({
            autoImport: true
        })
    ],
    define: {"process.env": {}},
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
        },
        extensions: [
            ".js",
            ".json",
            ".jsx",
            ".mjs",
            ".ts",
            ".tsx",
            ".vue"
        ]
    }
});
export {
    vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFw0MjA2MFxcXFxuZW9uX3JvbGVfcGxheV92dWVcXFxcbmVvbl9yb2xlX3BsYXlfd2ViXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFw0MjA2MFxcXFxuZW9uX3JvbGVfcGxheV92dWVcXFxcbmVvbl9yb2xlX3BsYXlfd2ViXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy80MjA2MC9uZW9uX3JvbGVfcGxheV92dWUvbmVvbl9yb2xlX3BsYXlfd2ViL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgdnVlSnN4IGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZS1qc3gnXG5pbXBvcnQgdnVldGlmeSwgeyB0cmFuc2Zvcm1Bc3NldFVybHMgfSBmcm9tICd2aXRlLXBsdWdpbi12dWV0aWZ5JztcblxuXG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tICdub2RlOnVybCdcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgdnVlKHtcbiAgICAgIHRlbXBsYXRlOiB7IHRyYW5zZm9ybUFzc2V0VXJscyB9XG4gICAgfSksXG4gICAgdnVlSnN4KCksXG4gICAgdnVldGlmeSh7XG4gICAgICBhdXRvSW1wb3J0OiB0cnVlLFxuICAgIH0pLFxuICBdLFxuICBkZWZpbmU6IHsgJ3Byb2Nlc3MuZW52Jzoge30gfSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKVxuICAgIH0sXG4gICAgZXh0ZW5zaW9uczogW1xuICAgICAgJy5qcycsXG4gICAgICAnLmpzb24nLFxuICAgICAgJy5qc3gnLFxuICAgICAgJy5tanMnLFxuICAgICAgJy50cycsXG4gICAgICAnLnRzeCcsXG4gICAgICAnLnZ1ZScsXG4gICAgXSxcbiAgfVxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBd1YsT0FBTyxTQUFTO0FBQ3hXLE9BQU8sWUFBWTtBQUNuQixPQUFPLFdBQVcsMEJBQTBCO0FBRzVDLFNBQVMsZUFBZSxXQUFXO0FBQ25DLFNBQVMsb0JBQW9CO0FBTjRMLElBQU0sMkNBQTJDO0FBUzFRLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxNQUNGLFVBQVUsRUFBRSxtQkFBbUI7QUFBQSxJQUNqQyxDQUFDO0FBQUEsSUFDRCxPQUFPO0FBQUEsSUFDUCxRQUFRO0FBQUEsTUFDTixZQUFZO0FBQUEsSUFDZCxDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsUUFBUSxFQUFFLGVBQWUsQ0FBQyxFQUFFO0FBQUEsRUFDNUIsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxJQUN0RDtBQUFBLElBQ0EsWUFBWTtBQUFBLE1BQ1Y7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
