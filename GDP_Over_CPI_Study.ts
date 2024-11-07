# https://github.com/brayvid

# Use quarterly chart

declare lower;

def aggper = AggregationPeriod.QUARTER;

plot GDP_Over_CPI = ExpAverage(close("GDP:FRED", period=aggper) /  close("CPIAUCSL:FRED", period=aggper) ,12);