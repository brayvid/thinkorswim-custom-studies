# https://github.com/brayvid

# Use a weekly chart

declare lower;

input fast_len = 21;
input slow_len = 50;
input reversalAmount = 10;

def macd = StochasticMACD(45, fast_len, slow_len, 9, 10, -10, "EXPONENTIAL").StochasticMACD + 100;
def macd_signal = StochasticMACD(45, fast_len, slow_len, 9, 10, -10, "EXPONENTIAL").Signal + 100;

plot macd_plot = macd;

Assert(reversalAmount > 0, "'reversal amount' should be positive: " + reversalAmount);

plot "ZZ%" = reference ZigZagHighLow(macd, macd, reversalAmount, 0, 1, 0);

def zzSave = if !IsNaN("ZZ%") then macd else GetValue(zzSave, 1);
def chg = (macd / GetValue(zzSave, 1) - 1) * 100;
def isUp = chg >= 0;
def isConf = AbsValue(chg) >= reversalAmount or (IsNaN(GetValue("ZZ%", 1)) and GetValue(isConf, 1));

"ZZ%".EnableApproximation();

def cond = if !isConf then 0 else if isUp then 1 else -1;

plot buy_sig = if (cond[1] < 0 and cond == 0) then macd else Double.NaN;
plot sell_sig = if (cond[1] > 0 and cond == 0) then macd else Double.NaN;

