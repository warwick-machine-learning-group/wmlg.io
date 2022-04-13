#!/bin/bash
pandoc _data/wmlg.bib -t csljson -o _data/publications.json
cp _data/publications.json assets/publications.json