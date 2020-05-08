# Contributing

## Table of Contents

- [Developing Vue Tour](#developing-vue-tour)
- [Generating a Changelog](#generating-a-changelog)
- [Git Commit Guidelines](#git-commit-guidelines)

## Developing Vue Tour

Vue Tour is a library which means that in order to be tested it has to be used in a project.
For this you have two options:
- Use `public/index.html` but then you're limited to a built version
- Use the `landing` branch as a git worktree:
```
git worktree add ../vue-tour-landing landing
```

### Pull Requests

All pull request must target `staging`.


### Merging PRs

If a PR has a lot of conflicts and you want to make sure it's working or you want to cherry-pick some commits, you can checkout the PR branch locally:
```
git fetch origin pull/:ID/head:pr/:ID
```
Where `:ID` is the ID of the PR. The previous command will create a new branch `pr/:ID` containing the changes and commits of the PR.

### New release

Go on `staging` branch.

```
git checkout staging
```

Check result of Standard Version.

```
standard-version --dry-run
```

For a better control of the version number, use `--release-as`. <level> corresponds to semver levels: major, minor or patch.

```
standard-version --release-as <level> --dry-run
```

If result is ok, run command without `--dry-run` flag.

```
standard-version --release-as <level>
```

Push version on `staging`.

```
git push --follow-tags origin staging
```

Do a Pull Request from `staging` to `master`.

Once merged, publish on NPM from `master`.

```
git checkout master
npm publish
```

## Generating a Changelog

By using "standard" guidelines we are able to automatically generate a changelog from our git commit messages.
The tool used to do that is [standard-version](https://github.com/conventional-changelog/standard-version).

Here is an excerpt from their documentation.

### First Release

To generate your changelog for your first release, simply do:

```sh
# npm run script
npm run release -- --first-release
# or global bin
standard-version --first-release
```

This will tag a release **without bumping the version in package.json (_et al._)**.

When ready, push the git tag and `npm publish` your first release. \o/

### Release as a pre-release

Use the flag `--prerelease` to generate pre-releases:

Suppose the last version of your code is `1.0.0`, and your code to be committed has patched changes. Run:

```bash
# npm run script
npm run release -- --prerelease
```
you will get version `1.0.1-0`.

If you want to name the pre-release, you specify the name via `--prerelease <name>`.

For example, suppose your pre-release should contain the `alpha` prefix:

```bash
# npm run script
npm run release -- --prerelease alpha
```

this will tag the version `1.0.1-alpha.0`

### Release as a target type imperatively like `npm version`

To forgo the automated version bump use `--release-as` with the argument `major`, `minor` or `patch`:

Suppose the last version of your code is `1.0.0`, you've only landed `fix:` commits, but
you would like your next release to be a `minor`. Simply do:

```bash
# npm run script
npm run release -- --release-as minor
# Or
npm run release -- --release-as 1.1.0
```

you will get version `1.1.0` rather than the auto generated version `1.0.1`.

> **NOTE:** you can combine `--release-as` and `--prerelease` to generate a release. This is useful when publishing experimental feature(s).

## Git Commit Guidelines

We use the Git Commit Guidelines that Google uses for AngularJS to format our git commit messages. Here is an excerpt of those guidelines.

We have very precise rules over how our git commit messages can be formatted.  This leads to **more readable messages** that are easy to follow when looking through the **project history**.

### Commit Message Format
Each commit message consists of a **header**, a **body** and a **footer**.  The header has a special
format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The **header** is mandatory and the **scope** of the header is optional.

Any line of the commit message cannot be longer 100 characters! This allows the message to be easier
to read on GitHub as well as in various git tools.

### Revert
If the commit reverts a previous commit, it should begin with `revert: `, followed by the header of the reverted commit.
In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

### Type
Must be one of the following:

* **feat**: A new feature
* **fix**: A bug fix
* **docs**: Documentation only changes
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing
  semi-colons, etc)
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **perf**: A code change that improves performance
* **test**: Adding missing or correcting existing tests
* **chore**: Changes to the build process or auxiliary tools and libraries such as documentation
  generation

### Scope
The scope could be anything specifying place of the commit change. For example `$location`,
`$browser`, `$compile`, `$rootScope`, `ngHref`, `ngClick`, `ngView`, etc...

You can use `*` when the change affects more than a single scope.

### Subject
The subject contains succinct description of the change:

* use the imperative, present tense: "change" not "changed" nor "changes"
* don't capitalize first letter
* no dot (.) at the end

### Body
Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

### Footer
The footer should contain any information about **Breaking Changes** and is also the place to
[reference GitHub issues that this commit closes][closing-issues].

**Breaking Changes** should start with the word `BREAKING CHANGE:` with a space or two newlines.
The rest of the commit message is then used for this.

A detailed explanation can be found in this [document][commit-message-format].

[angular-contributing]: https://raw.githubusercontent.com/angular/angular.js/master/CONTRIBUTING.md
[commit-message-format]: https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#
