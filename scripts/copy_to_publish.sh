#!/bin/bash

DEST_DIR=${1:-"published-contents"}

rm -rf "${DEST_DIR}"/_next
rsync -arhv --update out/ "${DEST_DIR}"/
