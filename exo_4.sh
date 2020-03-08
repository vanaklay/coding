#!/bin/bash

a=(3 5 8 10 6)
b=(6 5 4 12)
c=(14 7 5 7)

for elt in ${a[@]}
do
	for item in ${b[@]}
	do
		if (( $item == $elt ))
		then
			num=$elt
			for e in ${c[@]}
			do
				if (( $e == $num ))
				then
					echo $num
				fi
			done
		fi
	done
done
