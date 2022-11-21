import lume from "lume/mod.ts";
import plugins from "./plugins.ts";
import toc from "https://deno.land/x/lume_markdown_plugins@v0.1.0/toc/mod.ts";

const markdown = {
  plugins: [toc],
  keepDefaultPlugins: true,
};

const site = lume({
  src: "./src",
}, {
  markdown,
});

site.use(plugins());

export default site;
