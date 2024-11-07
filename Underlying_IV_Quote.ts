# https://github.com/brayvid

# Use daily candles (D)

plot val = imp_volatility("symbol" = GetUnderlyingSymbol(), "period" = AggregationPeriod.DAY, "priceType" = PriceType.LAST);