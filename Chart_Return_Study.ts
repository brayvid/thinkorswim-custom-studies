# https://github.com/brayvid

def startprice = if BarNumber() == 1 then close else startprice[1];

def pctchg = close / startprice - 1;

AddLabel(yes,GetSymbol()+" return: " + Round(100*pctchg,2)+"%  ", if pctchg >= 0 then Color.UPTICK else Color.DOWNTICK);