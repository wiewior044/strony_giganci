koszty = [196.23, 843, 76, 0.872, 53, 2]

suma = sum(koszty)

print("suma:", suma)
print(max(koszty))
print(min(koszty))

for i in koszty:
    suma = suma + i

print("suma:", suma)    

print(*range(67))
print(*range(0,10,3))

todo = ["sprzątanie", "odkurzanie", "mycie", "ścieranie", "nauka", "zmywarka", "gotowanie"]
status = []

for i in todo:
    odp = input(f"Czy {i} zrobione? ")
    status.append(odp)

for i in range(len(todo)):
    print(f"{todo[i]}: {status[i]}")
