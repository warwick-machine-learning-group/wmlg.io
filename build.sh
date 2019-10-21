#!/bin/bash
pandoc-citeproc -j _data/wmlg.bib > _data/publications.json
cp _data/publications.json assets/publications.json