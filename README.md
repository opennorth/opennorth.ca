#Basic Instructions

## Install the latest version of staticjinja
```
pip install git+git://github.com/Ceasar/staticjinja#egg=staticjinja
```

## Commands for building
```
mkdir -p site
staticjinja build --outpath ./site --static static
staticjinja watch --outpath ./site --static static
(cd site; python -m SimpleHTTPServer &)
```
