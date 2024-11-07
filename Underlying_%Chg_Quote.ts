# https://github.com/brayvid

# Use daily candles (D)

plot val = Round("number" = 100 * (close(GetUnderlyingSymbol()) / close(GetUnderlyingSymbol())[1] - 1));

val.AssignValueColor(if val > 0 then CreateColor(0, 197, 49) else CreateColor(255, 95, 95));