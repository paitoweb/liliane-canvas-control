# Security and Public Exposure Review

## Executive summary

I did not find committed secrets, local environment files, credentials, private keys, oversized binaries, or obvious accidental artifacts in the repository contents.

From a code exposure standpoint, this repository is close to safe for public visibility on GitHub as a historical/source-available project. The earlier localhost WebSocket experiment has been removed from the public snapshot, which eliminates the main trust-boundary issue identified in the first review pass.

The remaining gaps are now mostly public-repository polish and legal clarity: there is no CI or verification path, and bundled image assets should have clearer provenance if the repository is meant to stay public long term.

## Low severity

### SBP-003

- Rule ID: REPO-VERIFY-001
- Severity: Low
- Location: `package.json:5-8`
- Evidence:

```json
"scripts": {
  "watch": "nodemon -w src -e js,jsx,json,css -w webpack.config.js -x npm run build",
  "build": "webpack --mode development"
}
```

- Impact: there is no lint, test, or CI entry point visible in the repository, which weakens public confidence and makes it harder for outside readers to know whether the snapshot is still reproducible.
- Fix: add a minimal `lint` script and a GitHub Actions workflow that at least installs dependencies and runs the build, or explicitly state that the repository is published as an archival snapshot without active CI.
- Mitigation: the README already frames the project as legacy, which reduces the chance of readers interpreting it as actively maintained software.
- False positive notes: this is a repository-quality issue more than a vulnerability.

## Notes requiring explicit verification

### VERIFY-001

- Topic: bundled asset and trademark provenance
- Evidence: `LICENSE.md:11-13`, `README.md:132-134`, bundled files under `images/` such as `images/Smock_ZoomOut_18_N.png`
- Why verify: the repository is public-facing and already distributes image assets. The license says Adobe marks and third-party materials are excluded, but the repository does not currently separate first-party and third-party assets with a dedicated notice file.
- Recommended action: add a `NOTICE` or `THIRD_PARTY_NOTICES.md` file explaining which assets are original, which are third-party, and what redistribution basis applies to each category.

## Additional operational observations

- This working tree is on branch `main`, but it does not have an initial commit yet.
- No `remote.origin.url` is configured in the local Git metadata.
- Repository size is small (`~1.1M` total, `~736K` in `images/`), and I did not find files larger than 5 MB.
- I did not run a live dependency advisory audit or build verification because dependencies are not installed in this workspace and no network-based package audit was performed during this review.

## Overall conclusion

The repository content is broadly suitable for a public GitHub repository if the intended framing is "legacy/source-available case study" rather than "actively maintained open-source package".

Before making it public, I recommend:

1. Add asset provenance notes so the public licensing story is unambiguous.
2. Create the initial commit and push from a clean Git history rather than publishing an uncommitted working tree.
