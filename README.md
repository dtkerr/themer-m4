# themer-m4

m4 [themer](https://github.com/mjswensen/themer) package to create an m4 file suitable for performing macro replacements on any arbitrary other file.

## usage

Write whatever file needs some color-based replacements using `ACCENT0`, `ACCENT1`, etc which can later be macro-replaced by running

```
m4 themer.m4 input-file > output-file
```
