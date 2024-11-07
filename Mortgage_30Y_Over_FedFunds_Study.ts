# https://github.com/brayvid

# Use quarterly chart

declare lower;

def aggper = AggregationPeriod.QUARTER;

plot Mortgage30Y_Over_FF = close("MORTGAGE30US:FRED", period=aggper) / close("FEDFUNDS:FRED", period=aggper);