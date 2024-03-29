# Værdilister

## Beskrivelse

Prædefineret liste over mulige værdier for en bestemt egenskab. Værdilister bruges til at begrænse de tilladte værdier for en egenskab og sikre, at dataene forbliver konsistente og standardiserede på tværs af systemet.

Det er den primære liste der tilsvare et datafelt, ved at connect til denne værdiliste får man altid de seneste værdier.

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
  "DataType": "", // Data type
  "URI": "", // Link til dette json objekt
  "Options": "" // Tilknyttet valgmuligheder - Bliver skabt ved at løbe mappestrukturen igennem, og tilføje værdierne som objekter
}
```
