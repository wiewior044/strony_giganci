#imie = "Szymon"
#nazwisko = "Sikora"
#wiek = 13
#wzrost = 1.71
import math
#print(f'{imie} {nazwisko}, {wiek} lat, {wzrost} m wzrostu')

#print(f"{imie}: {type(imie)}")
#print(f"{nazwisko}: {type(nazwisko)}")
#print(f"{wiek}: {type(wiek)}")
#print(f"{wzrost}: {type(wzrost)}")

matematyka = 5
polski = 5
przyroda = 5

print((matematyka + polski + przyroda)/3)

srednia = ((matematyka + polski + przyroda)/3) 
print(srednia)

dlugosc_kabla = 670
dlugosc_pudelka = 15

liczba_pudelek = dlugosc_kabla / dlugosc_pudelka

print(f"Ilość kabla: {dlugosc_pudelka} m")
print(f"Liczba pełnych paczek: {int(liczba_pudelek)}")
print(f"Potrzebna liczba paczek: {math.ceil(liczba_pudelek)}")
print(f"Pozostalo {dlugosc_kabla % dlugosc_pudelka}")