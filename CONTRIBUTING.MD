# Contributing to VS Code Elixir Linter

Contributions are welcome. If you would like to contribute to this extension here are some suggestions. :-)

## Report issues

When reporting issues please provide an example, including file snippet if applicable, and an explanation of the expected versus the actual result.

## Feature requests

If you would like a feature added please explain who would benefit from the feature and why.

## Code

To contribute code please use pull requests by following this guide:

- **Fork this repository**
- **Create a new branch** from master except if you're addressing an issue in a release branch in which case use that instead.
- **Name the branch using** the pattern `bug/issue-number` for bugs and `feature/issue-number` for new features. You may optionally add a short description to the branch: for example, `feature/6` or `feature/6-strict-linting`. I use [git-extras](https://github.com/tj/git-extras) to make this easier for me, perhaps you may find it useful.
- In **your commit message** please [mention](https://github.com/blog/957-introducing-issue-mentions) the issue number using `#issue-number`: for example, `add setting to enable strict linting. fixes #6`.
- **Push the new branch** to Github and open a pull request (PR) for the next release. If a unreleased branch is not open, one will be created for you. All PRs must pass all current tests and it would be preferred if new PRs included new tests or updates.

## Test environment

[Extension integration tests](https://code.visualstudio.com/docs/extensions/testing-extensions#_running-tests-automatically-on-travis-ci-build-machines) depend on XVFB. Please see [xvfb.sh](./bin/xvfb.sh) for  installation notes.

