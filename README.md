# dr

Docker Runner - Docker made easier for development environments

**Project in development -- VERY UNSTABLE**

## Overview

The initial goal is to make it easier to use Docker as a development
environment. The plan is to allow configurable parameters through a `.drrc.json`
file.

## Configured args

The configured args are parsed from `.drrc.json` file. The `.drrc.json` file
uses the following priority list:

1. `./.drrc.json`
2. `~/.drrc.json`
3. `~/config/.drrc.json`
4. `/etc/.drrc.json`

Those files accept EJS template and the following variables are injected:

- `internalIpV4`
- `internalIpV6`

## Development TODO

- [x] Use EJS to parse configuration files
- [x] Read `.drrc.json` files
- [ ] `.drrc.json` files should be merged, not replaced
- [ ] How about intercepting ANY (not just docker's) cli command and concatenate it with params?
