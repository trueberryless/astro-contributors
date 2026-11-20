# astro-contributors

## 0.10.1

### Patch Changes

- [#134](https://github.com/trueberryless/astro-contributors/pull/134) [`040c35a`](https://github.com/trueberryless/astro-contributors/commit/040c35a153bc8d27b8557bf14f15d4ad372209f9) Thanks [@trueberryless-bot](https://github.com/trueberryless-bot)! - Updates the repository links after the move from the `trueberryless-org` GitHub organization to the `trueberryless` account.

## 0.10.0

### Minor Changes

- [#125](https://github.com/trueberryless-org/astro-contributors/pull/125) [`2d416dd`](https://github.com/trueberryless-org/astro-contributors/commit/2d416dd74e5c50c5b3149d98b0807d53affa416f) Thanks [@trueberryless-bot](https://github.com/trueberryless-bot)! - Adds a `formatLink` prop to the `ContributorList` and `AllContributors` components to customize the link of each contributor, e.g. to link to their commits in your repository instead of their GitHub profile.
  
  See the [`ContributorList` documentation](https://astro-contributors.netlify.app/components/contributor-list/#formatlink) for more details.

### Patch Changes

- [#125](https://github.com/trueberryless-org/astro-contributors/pull/125) [`2d416dd`](https://github.com/trueberryless-org/astro-contributors/commit/2d416dd74e5c50c5b3149d98b0807d53affa416f) Thanks [@trueberryless-bot](https://github.com/trueberryless-bot)! - Fixes the `PUBLIC_GITHUB_TOKEN` environment variable being ignored by GitHub when it contains a plain personal access token. Tokens in the `username:token` format are still sent using Basic authentication.

- [#125](https://github.com/trueberryless-org/astro-contributors/pull/125) [`2d416dd`](https://github.com/trueberryless-org/astro-contributors/commit/2d416dd74e5c50c5b3149d98b0807d53affa416f) Thanks [@trueberryless-bot](https://github.com/trueberryless-bot)! - Refactors the component internals and improves the warning logged when the contributors of a GitHub repository cannot be fetched.

## 0.9.0

### Minor Changes

- [#92](https://github.com/trueberryless-org/astro-contributors/pull/92) [`b1f977b`](https://github.com/trueberryless-org/astro-contributors/commit/b1f977b04156b7e4717de30ad48818ec8911ccbd) Thanks [@JimMadge](https://github.com/JimMadge)! - Add support for Astro 7

## 0.8.0

### Minor Changes

- [`64612b7`](https://github.com/trueberryless-org/astro-contributors/commit/64612b7348c6df8c29ed914c8afb20308b4c6389) Thanks [@trueberryless](https://github.com/trueberryless)! - Add support for All Contributors standard. Check out the [new component documentation](https://astro-contributors.netlify.app/all-contributors/) for details.

## 0.7.0

### Minor Changes

- [#76](https://github.com/trueberryless-org/astro-contributors/pull/76) [`1b3a885`](https://github.com/trueberryless-org/astro-contributors/commit/1b3a885d7427c8be85e1ae53f161d92f04e44154) Thanks [@trueberryless](https://github.com/trueberryless)! - Adds support for Astro v6, drops support for Astro v5.

  ⚠️ **BREAKING CHANGE:** The minimum supported version of Starlight is now `0.38.0`.

  Please follow the [upgrade guide](https://github.com/withastro/starlight/releases/tag/%40astrojs%2Fstarlight%400.38.0) to update your project.

## 0.6.0

### Minor Changes

- [#72](https://github.com/trueberryless-org/astro-contributors/pull/72) [`a914cce`](https://github.com/trueberryless-org/astro-contributors/commit/a914ccee5dee7c0e3efaa360e7ac304d9e445163) Thanks [@trueberryless](https://github.com/trueberryless)! - Introduce flexible focus color to allow better control in raw Astro sites.

## 0.5.0

### Minor Changes

- [#70](https://github.com/trueberryless-org/astro-contributors/pull/70) [`3788107`](https://github.com/trueberryless-org/astro-contributors/commit/37881073106047c17d1a17a87776244f322e7f40) Thanks [@trueberryless](https://github.com/trueberryless)! - Rename package from starlight-contributor-list to astro-contributors

## 0.4.0

### Minor Changes

- [`0d1841f`](https://github.com/trueberryless-org/astro-contributors/commit/0d1841f3df224c12523384487a4f88fdc7950f45) Thanks [@trueberryless](https://github.com/trueberryless)! - Remove unnecessary dependencies, peer dependencies and dev dependencies

### Patch Changes

- [#66](https://github.com/trueberryless-org/astro-contributors/pull/66) [`5014fc1`](https://github.com/trueberryless-org/astro-contributors/commit/5014fc1506028ebbc6f6ea129c7d0a9965cb90ee) Thanks [@trueberryless](https://github.com/trueberryless)! - Fine tune package metadata

## 0.3.2

### Patch Changes

- [#60](https://github.com/trueberryless-org/astro-contributors/pull/60) [`ad2c493`](https://github.com/trueberryless-org/astro-contributors/commit/ad2c4933a3a049916d17d5fabba5f204fa8ac376) Thanks [@trueberryless](https://github.com/trueberryless)! - Fix keyboard focus accessibility issues.

## 0.3.1

### Patch Changes

- [#51](https://github.com/trueberryless-org/astro-contributors/pull/51) [`57dc151`](https://github.com/trueberryless-org/astro-contributors/commit/57dc15123e9f0132b29ce9e47e0fb8dc91f2be49) Thanks [@trueberryless-org](https://github.com/apps/trueberryless-org)! - Setups trusted publishing using OpenID Connect (OIDC) authentication — no code changes.

## 0.3.0

### Minor Changes

- [#24](https://github.com/trueberryless-org/astro-contributors/pull/24) [`368e54d`](https://github.com/trueberryless-org/astro-contributors/commit/368e54d14c5277bbfce227f835715532bd5067c8) Thanks [@trueberryless](https://github.com/trueberryless)! - Add `ignore` parameter option

## 0.2.1

### Patch Changes

- [#19](https://github.com/trueberryless-org/astro-contributors/pull/19) [`4f439a3`](https://github.com/trueberryless-org/astro-contributors/commit/4f439a38bed4c3bbdde1891c65c37066fa033363) Thanks [@trueberryless](https://github.com/trueberryless)! - Update to Starlight 0.32

## 0.2.0

### Minor Changes

- [#9](https://github.com/trueberryless-org/astro-contributors/pull/9) [`128f46c`](https://github.com/trueberryless-org/astro-contributors/commit/128f46cca2b8c98abade03e5a3dee64970b367ae) Thanks [@trueberryless](https://github.com/trueberryless)! - Adds support for Astro v5, drops support for Astro v4.

  ⚠️ **BREAKING CHANGE:** The minimum supported version of Starlight is now `0.30.0`.

  Please follow the [upgrade guide](https://github.com/withastro/starlight/releases/tag/%40astrojs/starlight%400.30.0) to update your project.

  Note that the [`legacy.collections` flag](https://docs.astro.build/en/reference/legacy-flags/#collections) is not supported by this plugin and you should update your collections to use Astro's new Content Layer API.
