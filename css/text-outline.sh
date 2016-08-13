#!/bin/bash
#
# h1 { text-outline: 3px white; }
#
# ..333..
# .22222.
# 3211123
# 321.123
# 3211123
# .22222.
# ..333..
# 7*7 - 1 - 4*3 = 36 rules

COLOR="#fff"

abs() {
    echo "sqrt(${1}^2)/1" | bc
}

for x in $(seq -3 3); do for y in $(seq -3 3); do
    if [ $x = 0 ] && [ $y = 0 ]; then
        continue
    fi
    if [ $(abs $x) = 2 ] && [ $(abs $y) = 3 ]; then
        continue
    fi
    if [ $(abs $x) = 3 ] && [ $(abs $y) = 2 ]; then
        continue
    fi
    if [ $(abs $x) = 3 ] && [ $(abs $y) = 3 ]; then
        continue
    fi
    echo -n "${x}px ${y}px 0 ${COLOR}, "
done; done | sed 's/, $//'
echo
