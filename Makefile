HUGO ?= hugo

.PHONY: help dev server build clean

.DEFAULT_GOAL := dev

help:
	@printf '%s\n' 'Targets:'
	@printf '%s\n' '  dev      Run the Hugo development server with drafts'
	@printf '%s\n' '  server   Alias for dev'
	@printf '%s\n' '  build    Build the production site into public/'
	@printf '%s\n' '  clean    Remove generated Hugo output'

dev:
	$(HUGO) server --buildDrafts

server: dev

build:
	HUGO_ENVIRONMENT=production $(HUGO) --gc --minify

clean:
	rm -rf public resources/_gen .hugo_build.lock hugo_stats.json
