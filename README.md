<p align="center">
  <img src="images/icon@72px.png" alt="Liliane Canvas Control icon" width="72" height="72">
</p>

# Liliane Canvas Control

Liliane Canvas Control is an Adobe XD panel plugin created in 2020 to reduce the friction of panning and zooming for designers who cannot rely on keyboard modifiers or two-hand shortcuts. It brings canvas navigation controls into a persistent panel so Adobe XD can be used more effectively with mouse-only and adapted pointing-device workflows.

This repository is being published as the original codebase behind the plugin featured by Adobe in [Removing barriers: How Liliane Canvas Control is empowering designers in the face of disability](https://blog.adobe.com/en/publish/2020/08/31/liliane-canvas-control-plugin-designers-with-disabilities) and listed on [Adobe Exchange](https://exchange.adobe.com/apps/cc/217decfe/liliane-canvas-control).

Official website: [liliane-canvas-control.webflow.io](https://liliane-canvas-control.webflow.io/)

> Historical note  
> Adobe's current distribution docs state that new Adobe XD plugins stopped being accepted in the Marketplace on November 15, 2024. Existing published plugins can still be managed and updated. This repository should be understood as a legacy Adobe XD project and an accessibility-driven case study.

## Overview

| Item | Details |
| --- | --- |
| Host app | Adobe XD |
| Minimum host version | XD 30.0 |
| Adobe Exchange version | 1.0.12 |
| Plugin type | Panel |
| Stack | React 16, Webpack 4, Babel 6 |

## Why this project exists

The plugin was created after understanding the accessibility barriers faced by Liliane Claudia, a designer who works with an adapted trackball controlled by her chin. According to Adobe's August 31, 2020 story, the project was built collaboratively with Liliane, Vitor Guerra, Adobe contributors, and developer Fabricio Farias to make canvas navigation substantially faster and less dependent on modifier keys.

That origin matters: this is not just a convenience plugin. It is a concrete example of accessibility requirements shaping a product feature and a development workflow.

## Features

- Zoom in and zoom out from a panel instead of relying on keyboard modifiers.
- Move the canvas in all directions using press-and-hold controls.
- Adjust the pan amount as a percentage of the current viewport.
- Jump to the current selection.
- Jump to the focused artboard.

The Adobe Exchange listing currently describes the public feature set as zoom in, zoom out, move the canvas in all directions, and set pan amount. The selection/artboard focus actions are visible in the source code as well.

## Repository contents

```text
src/
  controllers/      Panel bootstrap/controller
  containers/       Main UI and styles
  util/             React shim
manifest.json       Adobe XD plugin manifest
images/             Plugin icons and control assets
webpack.config.js   Build configuration
```

## Development

### Prerequisites

- Adobe XD 30.0 or newer
- Node.js and npm

Because this is a 2020 codebase with React 16, Webpack 4, and Babel 6-era dependencies, an older Node.js LTS release may be more reliable than a current release if you run into install issues.

### Install dependencies

```bash
npm install
```

### Build

```bash
npm run build
```

This generates the runtime plugin bundle (`main.js`) and any hashed asset files required by Adobe XD.

### Watch mode

```bash
npm run watch
```

## Verification

This repository includes a minimal GitHub Actions workflow that installs dependencies with legacy-compatible npm settings and runs `npm run build` on pushes and pull requests targeting `main`.

That workflow is meant to keep this historical snapshot reproducible. It should not be read as a statement of active feature development or modern platform support.

## Loading the plugin in Adobe XD

Run `npm install` and `npm run build` first, then use Adobe's XD plugin development workflow to load the plugin folder that contains `manifest.json`. In practice, that means adding this project to the Adobe UXP Developer Tool or the equivalent XD development flow, then launching the panel named `Liliane Canvas Control`.

Useful references:

- [Adobe XD plugin quick start](https://adobexdplatform.com/plugin-docs/tutorials/quick-start-panel/)
- [Creative Cloud distribution and UXP Developer Tool docs](https://developer.adobe.com/developer-distribution/creative-cloud/docs/guides/uxp/tutorials/getting-started/using-uxp-developer-tool/)

## Project status

This repository reflects the original Adobe XD plugin implementation and should be treated as a legacy codebase. It is useful as:

- a public record of the project,
- a case study in accessibility-oriented plugin design,
- a reference for older Adobe XD panel plugin development.

This public snapshot intentionally excludes a later local-control experiment so the repository stays focused on the regular plugin behavior shipped to end users.

## Credits

- [Liliane Claudia](https://www.linkedin.com/in/lilianeclaudia/), whose workflow and accessibility requirements motivated the project
- [Fabricio Farias](https://www.linkedin.com/in/fabriciofarias/), plugin development
- [Vitor Guerra](https://www.linkedin.com/in/vitorguerra/), website design and project collaboration
- [Demian Borba](https://www.linkedin.com/in/demianborba/), Adobe lead responsible for the project
- [Larz Hsu](https://www.linkedin.com/in/larzhsu/), UI design

## References

- [Official website](https://liliane-canvas-control.webflow.io/)
- [Adobe blog post about the project](https://blog.adobe.com/en/publish/2020/08/31/liliane-canvas-control-plugin-designers-with-disabilities)
- [Adobe Exchange listing](https://exchange.adobe.com/apps/cc/217decfe/liliane-canvas-control)
- [Official plugin demo video](https://www.youtube.com/watch?v=l0YStNRli9I)
- [Liliane Claudia talk about the plugin](https://www.youtube.com/watch?v=0p1NPNrQ2Sc)
- [Vitor Guerra's post about the project](https://www.linkedin.com/pulse/bem-mais-que-um-plugin-liliane-canvas-control-vitor-guerra/)
- [Adobe XD / Creative Cloud plugin distribution docs](https://developer.adobe.com/developer-distribution/creative-cloud/)

## License

This repository is not open source. Usage is permitted under the custom terms in [LICENSE.md](LICENSE.md).

In short, the code is available for viewing and use, but redistribution, sublicensing, and commercial reuse for third parties are not permitted without prior written permission. Third-party materials, Adobe marks, and Adobe brand assets are excluded from that license.

For asset provenance and third-party notices, see [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
