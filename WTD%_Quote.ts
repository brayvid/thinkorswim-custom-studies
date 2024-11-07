# https://github.com/brayvid

# Use weekly candles (W)

def pctchg = Round(100*(close / close[1] - 1),2);
plot label = pctchg;

label.AssignValueColor(if pctchg > 0 then CreateColor(0, 197, 49) else CreateColor(255, 95, 95));