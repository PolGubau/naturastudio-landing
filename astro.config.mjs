import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import compress from "@playform/compress";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import AutoImport from "astro-auto-import";
import icon from "astro-icon";
 
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    site: "https://naturastudio.com",
    integrations: [AutoImport({
        imports: [ 
            // https://github.com/delucis/astro-auto-import
            "@components/Admonition/Admonition.astro",
        ],
		}), mdx(), icon({

        // https://www.astroicon.dev/reference/configuration#include
        include: {
            tabler: [
                "bulb",
                "alert-triangle",
                "flame",
                "info-circle",
                "arrow-narrow-left",
                "arrow-narrow-right",
                "menu-2",
                "x",
                "chevron-down",
                "category",
                "calendar-event",
            ],
        },
		}), sitemap(), compress({
        HTML: true,
        JavaScript: true,
        CSS: false,
        Image: false, // astro:assets handles this. Enabling this can dramatically increase build times
        SVG: false, // astro-icon handles this
		}), react()],
    vite: {
        plugins: [tailwindcss()],
        // stop inlining short scripts to fix issues with ClientRouter: https://github.com/withastro/astro/issues/12804
        build: {
            assetsInlineLimit: 0,
        },
    },
});