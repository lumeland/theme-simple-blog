import lume from "lume/mod.ts";
import plugins, { markdown } from "./plugins.ts";

const site = lume({
  src: "./src",
}, {
  markdown,
});

site.use(plugins());

export default site;
