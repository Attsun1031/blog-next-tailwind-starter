#!/bin/bash
rm -rf published-contents/_next
rsync -arhv --update out/ published-contents/

