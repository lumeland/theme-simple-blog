import lume from "lume/mod.ts";
import blog from "../mod.ts";
import gl from "npm:date-fns/locale/gl/index.js";

const site = lume();

site.use(blog({
  date: {
    locales: { gl },
  },
}));

export default site;
