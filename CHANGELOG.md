<!-- deno-fmt-ignore-file -->

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/) and this
project adheres to [Semantic Versioning](http://semver.org/).

## [0.3.2] - Unreleased
### Changed
- Configuration for `deno fmt` & `deno lint`
- Upgraded to Lume `v1.13.0`.
- Reduced Blog post header `margin-bottom`

### Fixed
- Typos in markdown titles
- Fixed archive back link `margin-bottom`
- Fixed pagination `text-align`
- Fixed pagination overlap on small devices
- Fixed dark mode `color-scheme`
- Fixed dark mode `scrollbar-color`
- Fixed dark mode `PWA-color`

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
- Pagination in `archive.njk` by @angelside [#1].

## [0.1.0] - 2022-06-16
First version

[#1]: https://github.com/lumeland/theme-simple-blog/issues/1
[#5]: https://github.com/lumeland/theme-simple-blog/issues/5

[0.3.1]: https://github.com/lumeland/theme-simple-blog/compare/v0.3.0...v0.3.1
[0.3.0]: https://github.com/lumeland/theme-simple-blog/compare/v0.2.1...v0.3.0
[0.2.1]: https://github.com/lumeland/theme-simple-blog/compare/v0.2.0...v0.2.1
[0.2.0]: https://github.com/lumeland/theme-simple-blog/compare/v0.1.1...v0.2.0
[0.1.1]: https://github.com/lumeland/theme-simple-blog/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/lumeland/theme-simple-blog/releases/tag/v0.1.0
