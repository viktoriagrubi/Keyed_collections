// Licznik wystąpień słów - Napisz funkcję, która przyjmuje tekst i zwraca Map z liczbą wystąpień każdego słowa.

const text =
  "udomowiony gatunek lub podgatunek ssaka drapieżnego z rodziny psowatych , traktowany przez niektóre ujęcia systematyczne za podgatunek wilka, a przez inne za odrębny gatunek, opisywany pod synonimicznymi nazwami Canis lupus familiaris lub Canis familiaris. Od czasu jego udomowienia powstało wiele ras, znacznie różniących się morfologią i cechami użytkowymi. Rasy pierwotne powstawały głównie w wyniku presji środowiskowej. Rasy współczesne uzyskano w wyniku doboru sztucznego. ";

const words = text.toLowerCase().split(/\W+/).filter(Boolean);

const wordCounts = new Map();

for (const word of words) {
  if (wordCounts.has(word)) {
    wordCounts.set(word, wordCounts.get(word) + 1);
  } else {
    wordCounts.set(word, 1);
  }
}

console.log(wordCounts);
