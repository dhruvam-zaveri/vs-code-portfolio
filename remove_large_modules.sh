#!/bin/bash

# ---------------------- Main () --------------------
large_modules=$(du -sh ./node_modules/* | sort -nr | grep 'M.*' | awk '{print $2}')

for module in ${large_modules[@]}
do 
    rm -rvf $module
done