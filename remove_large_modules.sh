#!/bin/bash

# ---------------------- Main () --------------------
large_modules=$(du -sh ./node_modules/* | sort -nr | grep 'M.*' | awk '{print $2}')
echo deleting $large_modules
for module in ${large_modules[@]}
do 
    rm -rf $module
    sleep 5s
done