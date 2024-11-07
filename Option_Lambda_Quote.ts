# https://github.com/brayvid

# Use daily candles (D)

def lambda = Delta() * close(GetUnderlyingSymbol()) / close;

plot label = lambda;

