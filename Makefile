sources = *.md
target = compiled/content.tex

all: commit-changes build watch

install:
	brew install entr pandoc

build:
	find content -name ${sources} \
	| xargs cat \
	|	pandoc --from markdown --to latex \
	|	iconv -f utf-8 -t iso-8859-1 \
	> ${target}

commit-changes:
	git add --all && git commit -a -q -m "[automated build]"

watch:
	find content -name ${sources} | entr make commit-changes build
