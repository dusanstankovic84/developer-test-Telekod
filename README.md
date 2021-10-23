Telekod Developer Test #6

1. Modul za prijavu (Login modul)

1.1. Kreirati Login komponentu. Pod Login komponentom se podrazumeva modul koji sadrži stilizovanu Login formu.

1.2. Login forma treba da sadrži sledeća tri polja: Email, Password, PIN i dugme Log in.

1.3. Za svako polje je potrebno napraviti klijentske ili serverske validacije, pri čemu su sva tri polja obavezna.

1.4. Dodatna validaciona pravila:
1.4.1. Email – treba da bude validna (ispravna) email adresa.
1.4.2. Password – mora da ima najmanje 8, a najviše 32 karaktera.
1.4.3. PIN – treba da ima najmanje 4, a najviše 8 karaktera.

1.5. Opciono dodati mogućnost da se vrednosti u poljima Password i PIN prikažu dodavanjem neke posebne kontrole (checkbox-a i/ili dugmića).

1.6. Kilikom na dugme Log in napraviti zahtev (request) POST metodom na url https://reqres.in/api/login i proslediti podatke iz forme u sledećem obliku:
{
"email": "eve.holt@reqres.in"
"password": "cityslicka"
"pin": 18678
}

1.7. Nakon uspešne prijave (logovanja na sistem) sačuvati dobijeni TOKEN u Local Storage-u browser-a i/ili sesiji/bazi na serverskoj strani. Prikazati poruku da je korisnik uspešno prijavljen (ulogovan). Takođe bi nakon uspešne prijave korisniku trebalo prikazati početnu stranicu čiji su sadržaj i funkcionalnosti opisane u nastavku ovog zadatka, ali koje mogu biti realizovane potpuno nezavisno od prvog dela zadatka (Login sistema).

2. Početna stranica (Home page modul)

2.1. Kreirati praznu početnu stranicu.

2.2. Na početnoj stranici implementirati tabelu shodno opisu i instrukcijama u nastavku i popuniti je podacima. Tabelu stilizovati prema instrukcijama u primeru.

2.3. Podaci za tabelu se nalaze u JSON fajlu koji je prilog ovog testa. Za samo učitavanje podataka u aplikaciju je potrebno napraviti REQUEST (preko GET metoda).

2.3.1 Poželjno je da se ovakvi fajlovi čuvaju unutar assets foldera, odnosno da se unutar assets foldera kreira poseban pod-folder data i u njega da se ubaci JSON fajl iz priloga (MOCK_DATA.json).

2.4. U polju Search implementirati filter koji će da vrši pretragu podataka u tabeli na osnovu unetog teksta.

2.5. Implementirati sortiranje za polja Date of birth i Payment. Napraviti funkcionalnost tako da se podaci sortiraju kada se klikne na polje Date of birth i Payment u headeru tabele.

2.5.1 Sortiranje predstaviti strelicama:
✓ strelica okrenuta na dole – kada su podaci sortirani opadajućim redosledom,
✓ strelica okrenuta na gore – kada su podaci sortirani rastućim redosledom.

2.6. Nakon implementacije učitavanja podataka u tabelu implementirati polje Total koje će da sadrži zbir podataka iz kolone Payment.

2.7. Ćelije u kolonama Address i Payment bi trebalo da imaju mogućnost da se menjaju. Npr. kada se dva puta klikne na neku ćeliju u tabeli da se dobije mogućnost promene njene vrednosti. Umesto klasične ćelije tabele pojavi se elemenat forme, čiji je sadržaj trenutna vrednost upisana u ćeliju. Korisnik dobija mogućnost da menja trenutni podatak, a izmenu potvrđuje klikom van ćelije / polja u kojoj je inicirao EDIT režim.

2.8. Primer Tabele:
Napomena: Podaci u tabeli nisu konačni, navedeni su kao primer.

3. Reference, saveti
3.1. Za rešavanje layout-a je potrebno koristiti HTML5 i CSS3.
3.2. Za rešavanje funkcionalnog dela testa je poželjno koristiti Angular8+ framework.
3.3. Test može da se reši i primenom jQuery JavaScript framework-a.
3.4. Test može da se reši i primenom server-side tehnologije (PHP + PHP framework). Npr. PHP 7.3+ i Laravel.
3.5. REQUEST (zahtev) ka određenom resursu (Login, MOCK_DATA.json i td.) se može napraviti korišćenjem jedne od prethodne tri tehnologije – framework-a:
✓ jQuery AJAX request,
✓ HttpClient servis za Angular 8+,
✓ HTTP Requests za Laravel.
3.6. Za dizajn, stilizovanje i web responsive koncept se preporučuje Bootstrap ili Foundation.