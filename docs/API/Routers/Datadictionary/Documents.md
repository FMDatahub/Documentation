# Dokumenter

## Beskrivelse

Typisk til en fil eller et sæt af oplysninger, der beskriver et produkt, en bygningsdel, en proces eller et aspekt af et byggeprojekt. Dokumenter kan omfatte tekniske specifikationer, produktdata, CAD-tegninger, BIM-modeller (Building Information Modeling), arbejdsinstruktioner, sikkerhedsdokumentation, kvalitetsrapporter og kontrakter, blandt andre.

## Endpoint

?

## JSON

```json
{
  "Id": "",
  "GlobalId": "", // Globalt unikt id
  "NameDK": "", // Dansk navn
  "DefDK": "", // Defination på dansk
  "ValCode": "", // Kort form af navnet
  "IFDGuid": "", // GUID i BSDD
  "IFCName": "", // Navn ifølge IFC
  "IFCDef": "", // Defination ifølge IFC
  "IFCDataType": "", // Datatype ifølge IFC
  "ParentClassification": "", // ParentClassification ifølge IFC
  "Domain": "", // Domæne
  "DomainVersion": "", // Domæne version
  "Owner": "", // Udgiver
  "FileExtension": "", // Data type
  "URI": "", // Link til dette json objekt
  "LOI": "", // I hvilke LOI er dette objekt relevant?
  "Attributes": "", // Tilknyttet attributesets
  "Propertysets": [], // Tilknyttet propertysets
  "PredefinedValues": [{"key:value"}], // Værdier som indsættes ved oprettelse
}
```
