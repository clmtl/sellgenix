What is Sellgenix ?
===================

Sellgenix is a saas application for categorizing, summarizing and automatically replying to customer service emails using ia

![Sellgenix](https://cdn.discordapp.com/attachments/644573097361670154/1262379247905804358/Sellgenix.png?ex=669661ca&is=6695104a&hm=a0a04e4f0caf4094d6102bf8668192d0ec102568da90512f0217cff17f68ecc0&)

# Docs

> **Note**
> Install pnpm with `corepack enable pnpm` or if this command fails `npm i -g pnpm`

## Installation steps

- install deps: `pnpm i`
- find and replace all `@sellgenix` by `@your_org_name`
- copy `.env.example` to `.env` and fill in the required values
- run `pnpm db:push` to push the db schema to the db
- run `pnpm dev` to start the server

## Other

- generate a lib `pnpx turbo gen`
- project generation is manual
- to use a lib in another lib/project, add `"@your_org_name/libname": "workspace:*"` to `package.json`
