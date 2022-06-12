export const layout = "layouts/archive_result.njk";

export default function* ({ search }) {
  // Generate a page for each tag
  for (const tag of search.values("tags")) {
    yield {
      url: `/archive/${tag}/`,
      title: `Tagged “${tag}”`,
      type: "tag",
      search_query: `type=post '${tag}'`,
      tag,
    };
  }

  // Generate a page for each author
  for (const author of search.values("author")) {
    yield {
      url: `/author/${author}/`,
      title: `Posts by ${author}`,
      type: "author",
      search_query: `type=post author='${author}'`,
      author,
    };
  }
}
