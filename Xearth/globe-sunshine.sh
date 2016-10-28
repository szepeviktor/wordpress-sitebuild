#!/bin/bash
#
# Download nist.time.gov's earth images
#
# See function xearthSrc()
#     view-source:http://nist.time.gov/
#
# 23S..23N, 180S..180N
#
# ECHO_ONLY=1 ./globe-sunshine.sh

XEARTHS="http://www.time.gov/images/xearths/%s/%s.jpg"

[ "$1" == "-e" ] && ECHO_ONLY="1"

Get_longitudes() {
    seq 23 -2 1 | sed 's/$/S/'
    seq 1 2 23 | sed 's/$/N/'
}

Get_latitudes() {
    seq 180 -2 2 | sed 's/$/S/'
    seq 2 2 180 | sed 's/$/N/'
}

declare -i SEQUENCE
for LON in $(Get_longitudes); do
    SEQUENCE="1"
    for LAT in $(Get_latitudes); do
        printf -v URL "$XEARTHS" "$LON" "$LAT"
        printf -v FILENAME "%03d.jpg" "$((SEQUENCE++))"
        if [ -z "$ECHO_ONLY" ]; then
            [ -d "$LON" ] || mkdir "$LON"
            wget -nv -T 5 -O "${LON}/${FILENAME}" "$URL"
        else
            echo wget -nv -T 5 -O "${LON}/${FILENAME}" "$URL"
        fi
    done
done
