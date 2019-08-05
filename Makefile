.PHONY: help install-dev test dev ci build publish

.DEFAULT_GOAL := help
SHELL = bash
ENV_FILE ?= .env.example

help::
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

install-dev::
	npm i

test::
		npm test

dev::
	gatsby develop

ci::
	npm ci --only=production

build::
	npx gatsby build --prefix-paths

publish::
	npx gh-pages --git git --dist public --message "[skip ci] release" --dotfiles
