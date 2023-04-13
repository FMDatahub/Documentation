# Branches

En fælles strategi for at bruge disse grene i et softwareudviklingsprojekt er som følger:

1. **Prod**: Dette er grenen, der repræsenterer produktionsmiljøet. Kun kode, der er blevet grundigt testet og godkendt, bør merges ind i prod. Ændringer bør implementeres i prod ved hjælp af en kontrolleret proces, såsom continuous integration/delivery (CI/CD).

2. **Test**: Denne gren bruges til at teste ændringer, der er foretaget i dev. Når en funktion eller fejlrettelse er færdig i dev, skal den merges ind i test til grundig test. Testgrenen skal ligne produktionsmiljøet så tæt som muligt for at opdage eventuelle problemer, før de går live.

3. **Dev**: Dette er grenen, hvor udviklere laver ændringer i kodebasen. Det er den primære udviklingsgren, og udviklere bør lave små, hyppige ændringer i den. Ideelt set bør ændringer foretages i feature-grene og merges ind i dev, når de er blevet gennemgået og testet.

4. **Lokal**: Dette er en gren, som udviklere kan bruge til lokal test og eksperimentering. Den bør ikke bruges til langvarig udvikling, og ændringer foretaget i lokal bør merges ind i dev eller feature-grene så hurtigt som muligt.

Overordnet set hjælper denne grenstrategi med at sikre, at ændringer er grundigt testet og godkendt, inden de implementeres i produktionsmiljøet, hvilket reducerer risikoen for fejl og nedetid. Det opfordrer også til små, hyppige ændringer og samarbejde mellem udviklere.
