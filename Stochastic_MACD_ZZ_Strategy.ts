# https://github.com/brayvid

# Use a weekly chart

input fast_len = 21;
input slow_len = 50;
input reversalAmount = 10;

def macd = StochasticMACD(45, fast_len, slow_len, 9, 10, -10, "EXPONENTIAL").StochasticMACD + 100;
def macd_signal = StochasticMACD(45, fast_len, slow_len, 9, 10, -10, "EXPONENTIAL").Signal + 100;

Assert(reversalAmount > 0, "'reversal amount' should be positive: " + reversalAmount);

plot "ZZ%" = reference ZigZagHighLow(macd, macd, reversalAmount, 0, 1, 0);

def zzSave = if !IsNaN("ZZ%") then macd else GetValue(zzSave, 1);
def chg = (macd / GetValue(zzSave, 1) - 1) * 100;
def isUp = chg >= 0;
def isConf = AbsValue(chg) >= reversalAmount or (IsNaN(GetValue("ZZ%", 1)) and GetValue(isConf, 1));

"ZZ%".EnableApproximation();

def cond = if !isConf then 0 else if isUp then 1 else -1;

def buy_sig = if (cond[1] < 0 and cond == 0) then macd else Double.NaN;
def sell_sig = if (cond[1] > 0 and cond == 0) then macd else Double.NaN;


AddOrder(OrderType.BUY_TO_OPEN, buy_sig[-1], close[-1], name = "Buy", tickcolor = Color.WHITE, arrowcolor = Color.WHITE);
AddOrder(OrderType.SELL_TO_CLOSE, sell_sig[-1], close[-1], name = "Sell", tickcolor = Color.VIOLET, arrowcolor = Color.VIOLET);