#!/bin/bash

# Eliminar todos los archivos que terminen con ":Zone.Idenntifier"
find . -type f -name "*:Zone.Identifier" -exec rm -f {} \;
