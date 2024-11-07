# https://github.com/brayvid

input ref = "NDX";

def ref_start = if BarNumber() == 1 then close(ref) else ref_start[1];

def current_start = if BarNumber() == 1 then close else current_start[1];

def scaling_factor = current_start / ref_start;

plot ref_price = close(ref) * scaling_factor;

def pct_chg = close(ref) / ref_start - 1;

AddLabel(yes,ref + " return: " + Round(100*pct_chg,2)+"%", if pct_chg >= 0 then Color.UPTICK else Color.DOWNTICK);