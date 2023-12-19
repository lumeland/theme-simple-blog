<!-- deno-fmt-ignore-file -->

# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) and this
project adheres to [Semantic Versioning](http://semver.org/).

## [0.13.3] - 2023-12-19
### Fixed
- Update markdown plugins for Lume 2.

## [0.13.2] - 2023-12-13
### Fixed
- Break long links [#19].

## [0.13.1] - 2023-12-10
### Fixed
- Archive pages [#17] on Lume 2.0.0.

## [0.13.0] - 2023-12-08
### Changed
- Upgrade to Lume 2.0.0

## [0.12.2] - 2023-11-15
### Fixed
- Style tweaks

## [0.12.1] - 2023-09-25
### Changed
- Upgrade to Lume 1.19.0
- Updated dependencies: `@lumeland/ds` and `@oom/mastodon-comments`.

## [0.12.0] - 2023-08-15
### Added
- Mastodon comments system [See @oom/mastodom-comments](https://github.com/oom-components/mastodon-comments)

### Fixed
- `lang` attribute value in the `html` element.

## [0.11.0] - 2023-08-01
### Added
- Optional `logo` variable [#16].
- Support for footnotes

### Changed
- Show the TOC if the post has at least 1 subtitle.

## [0.10.2] - 2023-07-20
### Fixed
- Error when post is plain text without titles [#15].

## [0.10.1] - 2023-07-19
### Fixed
- Updated styles from Lume DS.
- Updated markdown-it plugins.

## [0.10.0] - 2023-07-19
### Added
- Allow to configure `pagefind` plugin.

## [0.9.0] - 2023-07-17
### Added
- Allow to configure `date` plugin.
- New `_data/i18n.yml` file to customize or translate the static copies.

## [0.8.0] - 2023-07-07
### Changed
- Switch to Vento (from Nunjuks) as the template engine.
- Minimum Lume version supported is 1.18.1.
- Use the feed plugin to generate RSS.

## [0.7.2] - 2023-03-19
### Fixed
- Plugin for table of contents wasn't installed correctly.

## [0.7.1] - 2023-03-12
### Fixed
- Pagination styles in the archive page.

## [0.7.0] - 2023-02-23
### Added
- `extra_head` variable to insert additional code in the page `head` (like styles or scripts)
- Allow to insert HTML in the `home.welcome` variable.
- Added Opengraph image.

### Fixed
- Content width on wide sizes.

## [0.6.0] - 2023-02-11
### Changed
- Use the `@lumeland/ds` NPM package for the basic styles.

## [0.5.2] - 2023-01-06
### Fixed
- Hide *Tags* section in the Archive page when no tags are found.
- Margin issue in the pagefind widget.

## [0.5.1] - 2022-12-15
### Changed
- Use light and dark Prism themes for the code.

### Fixed
- Renamed `.tag` class to `.badge` to avoid conflicts with Prism themes.

## [0.5.0] - 2022-12-15
### Added
- Table of contents

### Changed
- Upgrade to Lume `1.14.2`.
- `metas` plugin default configuration.
- Some styles tweaks.

## [0.4.0] - 2022-11-24
### Added
- Reading Time Plugin (experimental).

### Changed
- Upgraded to Lume `v1.13.1`.
- Configuration for `deno fmt` & `deno lint`.
- Reduced Blog post header `margin-bottom`.
- Blog post tag style.

### Fixed
- Typos in markdown titles.
- Archive back link `margin-bottom`.
- Pagination `text-align` & overlap on small devices.
- Dark mode `color-scheme`, `scrollbar-color` & `PWA-color`.

## [0.3.1] - 2022-11-16
### Fixed
- Excerpt post extraction.

## [0.3.0] - 2022-11-11
### Added
- New `menu_links` option.

### Changed
- Font for the Display and Titles styles.
- Use `prism` plugin to highlight the code.

### Fixed
- Code and titles font styles.
- Excerpt post extraction.

## [0.2.1] - 2022-10-10
### Removed
- `author` key in the `_data.yml` file [#5].

### Fixed
- Sitemap & robots.txt generation [#5].

## [0.2.0] - 2022-10-03
### Added
- Site searcher.
- Default favicon.png file.
- Welcome text to the homepage.

### Changed
- Moved theme files to `src` folder.
- Upgraded to Lume `v1.12.0`.

### Fixed
- Homepage title

## [0.1.1] - 2022-09-20
### Fixed
- Pagination in `archive.vto` by @angelside [#1].

## [0.1.0] - 2022-06-16
First version

[#1]: https://github.com/lumeland/theme-simple-blog/issues/1
[#5]: https://github.com/lumeland/theme-simple-blog/issues/5
[#15]: https://github.com/lumeland/theme-simple-blog/issues/15
[#16]: https://github.com/lumeland/theme-simple-blog/issues/16
[#17]: https://github.com/lumeland/theme-simple-blog/issues/17
[#19]: https://github.com/lumeland/theme-simple-blog/issues/19

[0.13.3]: https://github.com/lumeland/theme-simple-blog/compare/v0.13.2...v0.13.3
[0.13.2]: https://github.com/lumeland/theme-simple-blog/compare/v0.13.1...v0.13.2
[0.13.1]: https://github.com/lumeland/theme-simple-blog/compare/v0.13.0...v0.13.1
[0.13.0]: https://github.com/lumeland/theme-simple-blog/compare/v0.12.2...v0.13.0
[0.12.2]: https://github.com/lumeland/theme-simple-blog/compare/v0.12.1...v0.12.2
[0.12.1]: https://github.com/lumeland/theme-simple-blog/compare/v0.12.0...v0.12.1
[0.12.0]: https://github.com/lumeland/theme-simple-blog/compare/v0.11.0...v0.12.0
[0.11.0]: https://github.com/lumeland/theme-simple-blog/compare/v0.10.2...v0.11.0
[0.10.2]: https://github.com/lumeland/theme-simple-blog/compare/v0.10.1...v0.10.2
[0.10.1]: https://github.com/lumeland/theme-simple-blog/compare/v0.10.0...v0.10.1
[0.10.0]: https://github.com/lumeland/theme-simple-blog/compare/v0.9.0...v0.10.0
[0.9.0]: https://github.com/lumeland/theme-simple-blog/compare/v0.8.0...v0.9.0
[0.8.0]: https://github.com/lumeland/theme-simple-blog/compare/v0.7.2...v0.8.0
[0.7.2]: https://github.com/lumeland/theme-simple-blog/compare/v0.7.1...v0.7.2
[0.7.1]: https://github.com/lumeland/theme-simple-blog/compare/v0.7.0...v0.7.1
[0.7.0]: https://github.com/lumeland/theme-simple-blog/compare/v0.6.0...v0.7.0
[0.6.0]: https://github.com/lumeland/theme-simple-blog/compare/v0.5.2...v0.6.0
[0.5.2]: https://github.com/lumeland/theme-simple-blog/compare/v0.5.1...v0.5.2
[0.5.1]: https://github.com/lumeland/theme-simple-blog/compare/v0.5.0...v0.5.1
[0.5.0]: https://github.com/lumeland/theme-simple-blog/compare/v0.4.0...v0.5.0
[0.4.0]: https://github.com/lumeland/theme-simple-blog/compare/v0.3.1...v0.4.0
[0.3.1]: https://github.com/lumeland/theme-simple-blog/compare/v0.3.0...v0.3.1
[0.3.0]: https://github.com/lumeland/theme-simple-blog/compare/v0.2.1...v0.3.0
[0.2.1]: https://github.com/lumeland/theme-simple-blog/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/lumeland/theme-simple-blog/compare/v0.1.1...v0.2.0
[0.1.1]: https://github.com/lumeland/theme-simple-blog/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/lumeland/theme-simple-blog/releases/tag/v0.1.0
