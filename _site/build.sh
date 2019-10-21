#!/bin/bash

pandoc --atx-headers readinggroups/turing-reading.md -t html -o content/turing-reading-content.html
pandoc --atx-headers md/kangrui_content.md -t html -o content/kangrui_content.html
pandoc-citeproc -j research/wmlg.bib > research/publications.json