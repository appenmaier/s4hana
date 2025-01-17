---
title: abapGit auf dem SAP NetWeaver verwenden
description: ""
sidebar_position: 50
tags: []
---

## GitHub-Repository erstellen

- Bei [GitHub](https://github.com/) anmelden
- Option `Repositories - New` auswählen
- Folgende Informationen eingeben, Option `Add a README file` auswählen und Drucktaste `Create repository` betätigen
  - Repository Name: `Der Repository-Name` (z.B. abap)

## abapGit installieren

- [Quellcode](https://raw.githubusercontent.com/abapGit/build/main/zabapgit_standalone.prog.abap) herunterladen
- [ABAP Development Tools](../adt.md) starten
- ABAP-Programm `ZABAPGIT_STANDALONE` erstellen
- Quellcode einfügen und ABAP-Programm aktivieren

## Remote-Repository und lokales Repository verbinden

- [ABAP Development Tools](../adt.md) starten
- ABAP-Programm `ZABAPGIT_STANDALONE` ausführen
- Drucktaste `New Online` betätigen
- Folgende Informationen eingeben und Drucktaste `Create Online Repo` betätigen
  - Git Repository URL: `Die Repository-URL` (z.B. https://github.com/appenmmaier/abap)
  - Folder Logic: `FULL`
  - Package: `Das ABAP-Paket` (z.B. ZABAP)

## Änderungen vom lokalen Repository hochladen

- [ABAP Development Tools](../adt.md) starten
- ABAP-Programm `ZABAPGIT_STANDALONE` ausführen
- Drucktaste `Stage` betätigen
- Drucktaste `Add All and Commit` betätigen
- Folgende Informationen eingeben und Drucktaste `Commit` betätigen
  - Comment: `Ein beliebiger Kommentar` (z.B. update demos)
  - Committer Name: `Dein Name` (z.B. Daniel Appenmaier)
  - Committer Email: `Deine Email-Adresse` (z.B. daniel.appenmaier@gmail.com)

## Änderungen vom Remote-Repository herunterladen

- [ABAP Development Tools](../adt.md) starten
- ABAP-Programm `ZABAPGIT_STANDALONE` ausführen
- Repository auswählen
- Drucktaste `Pull` betätigen
- Folgende Informationen eingeben und Drucktaste `OK` betätigen
  - Username: `Dein GitHub User` (z.B. appenmaier)
  - Password/Token: `Dein Token (Classic)` (z.B. ghp_5OEkQAXGp9xXPkqLbYvRbq19mYsfyi1yHbnT)

:::tip Hinweis

abapGit untersützt aktuell nur den Token (Classic).

:::
