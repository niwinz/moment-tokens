.PHONY: all
all: moment-tokens

min/:
	mkdir min/

.PHONY: moment-tokens
moment-tokens: min/ min/moment-tokens.min.js

min/moment-tokens.min.js: moment-tokens.js
	node_modules/.bin/uglifyjs -o $@ $<

.PHONY: test hint
test: hint
	node_modules/.bin/nodeunit ./tests/

hint:
	node_modules/.bin/jshint moment-tokens.js

.PHONY: clean
clean:
	rm -rf min/
