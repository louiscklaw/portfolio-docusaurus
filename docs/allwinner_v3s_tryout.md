---
title: Allwinner v3s tryout
slug: /allwinner_v3s_tryout

hide_title: false
hide_table_of_contents: false
sidebar_label: Markdown
sidebar_position: 3
pagination_label: Markdown features
custom_edit_url: https://github.com/facebook/docusaurus/edit/master/docs/api-doc-markdown.md
description: How do I find you when I cannot solve this problem
keywords:
  - embedded linux
  - allwinner
  - v3s
image: https://i.imgur.com/mErPwqL.png
---

![](./assets/allwinner_v3s_tryout/photo.jpg)

## PURPOSE:

This is a tryout of homemake embedded linux project using allwinner v3s chips inspired by https://www.reddit.com/r/electronics/comments/83141t/i_made_an_allwinner_v3s_evaluation_board_based/

## PROGRESS:

Currently in progress with the second try.

## THE SECOND TRY CHANGE LOG:

- fix SVREF wire
- 4k7 on SDIO CLK wire
- fix power facilities
- add GL827L sdcard reading facilities
- add ATMega328p for power and reset control
- add USB to serial

## BUILDROOT:

to setup ubuntu/docker for buildroot(tested under 18.04)

```bash
$ sudo apt-get install iputils-ping \
vim git wget xz-utils bzip2 \
gcc device-tree-compiler \
python python-dev time make pkg-config
```

## REFERENCES / REPOSITORIES:

- https://github.com/louiscklaw/allwinner-v3s-tryout
- https://www.reddit.com/r/electronics/comments/83141t/i_made_an_allwinner_v3s_evaluation_board_based/

## BOM/PART LIST:

To be updated
