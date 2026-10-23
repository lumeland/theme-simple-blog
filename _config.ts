import lume from "@lumeland/lume";
import theme from "./mod.ts";

const site = lume({
  src: "src",
});

site.use(theme());

export default site;
