0. Spis treści
==============

0. Spis treści
1. Wymagania
2. Struktura projektu
3. Workflow


1. Wymagania
============

a. Node JS
   http://nodejs.org/download/

b. Grunt CLI (wymaga Node JS)
   > npm install grunt-cli

c. Ruby
   https://www.ruby-lang.org/en/installation/

d. Compass (wymaga Ruby)
   > gem install compass

e. Dodatkowo:
   - Editor Config dla Sublime Text
     (Preferences -> Package Control -> Browse Packages -> 'EditorConfig')


2. Struktura projektu
=====================

TEST1234/
  source/
    css/
    img/
    js/
  cms/
  resources/
    flat/
    lib/
    PSD/
  html/
  .tmp/
  .sass-cache/
  bower_components/
  node_modules/
  Gruntfile.js
  .csslintrc
  .editorconfig
  .gitignore
  .jshintignore
  .jshintrc
  bower.json
  package.json
  validation-report.json
  validation-status.json
  README.txt

source/
Tu znajdują się wszystkie pliki źródłowe projektu. Pliki .sass, .scss (.styl, .less), .coffee, (.jade, .haml) są kompilowane, pozostałe pliki (m. in. .html, .jpg, .png, .css, .js, .json, .php) są przenoszone z zachowaniem struktury drzewa katalogów.

cms/
Tu znajdują się pliki CMSów. Podczas kompilacji są kopiowane do html/ po czym nadpisywane przez stosowne pliki z source/.

resources/

flat/
Wyeksportowane jako PNG pliki projektu. Stanowią szybki podgląd, są wykorzystywane przez Flayupa, a w przyszłości zautomatyzowane testy wizualne.

lib/
Skrypty pomocnicze projektu. Domyślnie tylko Flayup.

PSD/
Pliki projektu. Tu powinny znaleźć się wszystkie pliki PSD (lub inne) do pocięcia. Powinny one także zostać wyeksportowane do PNG i zapisane w katalogu resources/flat/. Katalog znajduje się w .gitignore.

html/
Skompilowany projekt. Stanowi odzwierciedlenie struktury plików skompilowanego projektu na serwerze. Katalog znajduje się w .gitignore.

.tmp/
Katalog tymczasowy, używany przez Grunta do wyświetlania podglądu projektu w przeglądarce. Katalog znajduje się w .gitignore.

.sass-cache/
Cache SASSa. Katalog znajduje się w .gitignore.

bower_components/
Pliki pobrane przez Bowera. Nie należy edytować w żaden sposób zawartości katalogu - zarządza się nim poprzez plik bower.json. Katalog znajduje się w .gitignore.

node_modules/
Moduły NodeJS wykorzystywane przez NodeJS do obsługi projektu. Nie należy edytować w żaden sposób zawartości katalogu - zarządza się nim poprzez plik package.json. Katalog znajduje się w .gitignore.

Gruntfile.js
Plik konfiguracyjny Grunta. Tu opisane są wszystkie taski używane do obsługi projektu.

.csslintrc
Plik konfiguracyjny CSSLint. Można tu włączyć/wyłączyć poszczególne reguły sprawdzania arkuszy styli.

.editorconfig
Plik Editor Config służy do zachowania spójności struktury kodu (szerokość wcięć, pusta linia na końcu pliku itd.)

.gitignore
Plik konfiguracyjny GITa. Określa, które pliki i katalogi nie mają wejść w skład repozytorium.

.jshintignore
Plik konfiguracyjny JSHint. Określa, które skrypty nie mają być sprawdzane.

.jshintrc
Plik konfiguracyjny JSHint. Można tu włączyć/wyłączyć poszczególne reguły sprawdzania skryptów JavaScript.

bower.json
Plik konfiguracyjny Bowera. Określa, które pakiety i w których wersjach są wymagane przez projekt (np. jQuery, Bootstrap)

package.json
Plik konfiguracyjny NodeJS. Określa, które pakiety i w których wersjach wymagane się przez NodeJS do obsługi projektu.

validation-report.json
Raport walidacji markupu. Podaje błędy dla poszczególnych plików.

validation-status.json
Raport walidacji markupu. Podeje status walidacji poszczególnych plików.

README.txt
Ten plik.


3. Workflow
===========
