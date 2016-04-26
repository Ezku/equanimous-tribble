sources = *.md
target = compiled/content.tex
autocommitted = content notes sources sources.bib

all: commit-changes build watch

install:
	brew install entr pandoc

build:
	find content -name ${sources} \
	| xargs cat \
	| pandoc \
		--from markdown \
		--to latex \
		--smart \
	| iconv \
		-f utf-8 \
		-t iso-8859-1 \
	> ${target}

	node scripts/guess-table-headers.js ${target}

commit-changes:
	git add $(autocommitted) \
	&& git commit -qm "[automated build]" \
	|| echo "No changes to commit"

watch:
	find content -name ${sources} | entr make build
