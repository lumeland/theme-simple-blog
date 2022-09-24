export const url = "/feed.json";

export default function (
  { metas, author, search },
  { md, url, date, htmlUrl },
) {
  const feed = {
    version: "https://jsonfeed.org/version/1",
    title: metas.site,
    home_page_url: url("", true),
    feed_url: url("feed.json", true),
    description: metas.description,
    author: {
      name: author.name,
      url: author.url,
    },
    items: [],
  };

  for (const post of search.pages("type=post", "date=desc", 10)) {
    feed.items.push({
      id: url(post.data.url, true),
      url: url(post.data.url, true),
      title: post.data.title,
      content_html: htmlUrl(md(post.data.excerpt || post.data.content), true),
      date_published: date(post.data.date, "ATOM"),
    });
  }

  return JSON.stringify(feed, null, 2);
}
