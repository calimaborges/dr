# dr

Docker Runner - Docker made easier for development environments

**Project in development -- VERY UNSTABLE**

## Overview

The initial goal is to make it easier to use Docker as a development
environment. The plan is to allow configurable parameters through a `.drrc`
file.

## Commands

- `dr build <image_name>` = `docker build <configured_args> -t <image_name> .`

## Configured args

The configured args are parsed from `.drrc` file. The `.drrc` file uses the following priority list:

1. `./.drrc`
2. `~/.drrc`
3. `~/config/.drrc`
4. `/etc/.drrc`
