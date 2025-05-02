export const layout = "layouts/archive_result.vto";

export default function* ({ search, i18n, paginate }) {
  // Generate a page for each tag
  for (const tag of search.values("tags")) {
    const url = (n) => (n === 1) ? `/archive/${tag}/` : `/archive/${tag}/${n}/`;
    const pages = search.pages(`type=post '${tag}'`);

    for (const page of paginate(pages, { url, size: 10 })) {
      yield {
        ...page,
        title: `${i18n.search.by_tag}  “${tag}”`,
        type: "tag",
        tag,
      };
    }
  }

  // Generate a page for each author
  for (const author of search.values("author")) {
    const url = (n) =>
      (n === 1) ? `/author/${author}/` : `/archive/${author}/${n}/`;
    const pages = search.pages(`type=post author='${author}'`);

    for (const page of paginate(pages, { url, size: 10 })) {
      yield {
        ...page,
        title: `${i18n.search.by_author} ${author}`,
        type: "author",
        author,
      };
    }
  }
}
