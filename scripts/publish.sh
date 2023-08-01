#!/bin/sh

set -e

pnpm changeset
pnpm changeset:version
pnpm changeset:publish

echo "✅ Publish completed"
