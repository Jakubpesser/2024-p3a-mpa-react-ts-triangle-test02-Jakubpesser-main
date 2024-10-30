# SVG Triangle - example

Rychlá (neoptimalizovaná) implementace...

[Ukázka použití na GH Pages](https://tomaskazda.github.io/react-ts-svg-triangle/)

## Zadání

Vytvořte aplikaci počítající vnitřní úhly, obvod a obsah libovolného trojúhelníka zadaného trojicí délek stran (a, b, c). Zadaný trojúhelník vykreslete pomocí SVG. Vytvořte **autorský** design, efektivně využívající šířku viewportu od *360px do 2560px*.

### Obsah layoutu

Formulář s trojicí labelů a inputů pro jednotlivé strany trojúhelníka. 

Panel se zobrazením parametrů trojúhelníka (&alpha;, &beta;, &gamma;, Obvod, Obsah).

Tlačítko pro spuštění výpočtu.

Info text s informací o (ne)sestavitelnosti trojúhelníka (vhodná barva dle stavu).

Obrázek s proporcemi trojúhelníka.

Formulářový prvek s možností změnit barvu výplně trojúhelníka

### Požadavky

* App je "layout page" stránka - jako jediná obsahuje MediaQuery
* Změna barvy výplně reaguje na změnu okamžitě (onChange)
* Výpočet parametrů a vykreslení trojúhelníka je aktivováno stiskem tlačítka (onClick)
* **Důsledně** rozdělujte všechny části aplikace do komponent. (Formulář je kontejnerová komponenta, zatímco label+input je vstupní komponenta. Některé komponenty slouží jako výstupní/zobrazovací.)
* 
* Můžete se pokusit optimalizovat vykreslení trojúhelníka při všech možných hodnotách vstupů