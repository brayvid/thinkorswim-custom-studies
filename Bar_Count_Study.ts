# https://github.com/brayvid

def barCount = IF !IsNaN(close) THEN IF IsNaN(barCount[1]) THEN 1 ELSE barCount[1] + 1 ELSE barCount[1];

addLabel(yes,"Bars: " + (barCount - 1),Color.LIGHT_GRAY);