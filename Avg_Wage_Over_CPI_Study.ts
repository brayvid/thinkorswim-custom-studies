# https://github.com/brayvid

# Use quarterly chart

declare lower;

def aggper = AggregationPeriod.QUARTER;

plot TotalSalaries_Over_GDP = close("WASCUR:FRED", period=aggper) / close("CPIAUCSL:FRED", period=aggper);
