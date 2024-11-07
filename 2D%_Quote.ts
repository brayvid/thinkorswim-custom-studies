# https://github.com/brayvid

# Use daily candles (D)

def PctChg = PercentChg(0,2,0,close);

plot PctChgPlot = Round(PctChg,2);
PctChgPlot.AssignValueColor(if PctChg > 0 then CreateColor(0, 197, 49) else CreateColor(255, 95, 95));