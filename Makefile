help = "\
Usage: make [target] \n\n\
Available targets:\n\
install			安装依赖\n\
dev  				开发环境打包\n\
build				生产环境打包\n"

help:
	@echo $(help)

install:
	yarn  && git submodule update && git submodule foreach "git checkout master && git pull"

dev:
	yarn docs:dev

build:
	yarn docs:build

commit:
	yarn commit