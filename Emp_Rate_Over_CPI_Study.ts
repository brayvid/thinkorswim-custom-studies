# https://github.com/brayvid

# Use quarterly chart

declare lower;

def aggper = AggregationPeriod.QUARTER;

plot EmpRate_Over_CPI = (100-close("UNRATE:FRED", period=aggper)) / close("CPIAUCSL:FRED", period=aggper) ;