const L1 = [
{ wrong:`a=5
if a>3 print(a)`, correct:`a=5
if a>3: print(a)` },
{ wrong:`for i in range(3) print(i)`, correct:`for i in range(3): print(i)` },
{ wrong:`def add(x y): return x+y`, correct:`def add(x, y): return x+y` }
];

const L2 = [
{ wrong:`x=[1,2,3]
print x`, correct:`x=[1,2,3]
print(x)` },
{ wrong:`for i in 5: print(i)`, correct:`for i in range(5): print(i)` },
{ wrong:`def mul(a,b) return a*b`, correct:`def mul(a,b): return a*b` },
{ wrong:`name=input"Enter"`, correct:`name=input("Enter")` },
{ wrong:`if True print("ok")`, correct:`if True: print("ok")` }
];
