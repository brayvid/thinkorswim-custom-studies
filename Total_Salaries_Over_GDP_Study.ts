# https://github.com/brayvid

# Use quarterly chart

declare lower;

def aggper = AggregationPeriod.QUARTER;

plot TotalSalaries_Over_GDP = close("WASCUR:FRED", period=aggper) * close("PAYEMS:FRED", period=aggper) / close("GDP:FRED", period=aggper) / 1000;
