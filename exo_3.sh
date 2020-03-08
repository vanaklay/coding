#!/bin/bash

NAMES=( John Eric Jessica )
NUMBERS=( 1 2 3)
STRING=( "hello" "world" )
NumbersOfNames=${#NAMES[@]}
second_name=${NAMES[1]}
echo ${NUMBERS[@]}
echo ${STRING[@]}
echo "The number of names listed in the NAMES array: $NumbersOfNames"
echo "The second name on the NAMES list is: $second_name"
