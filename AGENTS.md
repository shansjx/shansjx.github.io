## Public repo: no personal details

This repository is **public**. Everything committed here can be read, copied and indexed by anyone,
and stays in git history even after it is deleted. Before every commit, check what is staged
(`git diff --cached --stat` and the diff itself) against these rules.

**Fine to publish** (the site exists to show these):
- Name, the contact email used for "Say hello", LinkedIn, GitHub handle.
- Portfolio content: education, CGPA, roles, projects, skills, and the resume PDF.

**Never commit:**
- Phone numbers, home address or postal code, NRIC or passport numbers, date of birth.
- Any email other than the public contact email. Commits must use the GitHub noreply address
  (`git config user.email` should end in `@users.noreply.github.com`).
- Private notes: interview transcripts, briefs and planning docs. The scroll-craft build folder
  (`scrollcraft/builds/`) is gitignored for this reason.
- Secrets: `.env` files, API keys, tokens, local Claude settings.
- Local machine details, such as file paths that contain a username.
- Other people's personal details, beyond public credits like a teammate's public repo link.

**Check binaries before adding them:**
- Photos: strip EXIF/XMP, especially GPS location and capture dates.
- PDFs: check that the Author, Title and XMP metadata hold nothing private.
- A new resume version must not include a phone number or address.

If a commit would break any of these rules, stop and ask the user. Do not push anything that
might contain personal details.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
