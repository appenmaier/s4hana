---
title: abapGit auf der ABAP Environment verwenden
description: ""
sidebar_position: 60
tags: []
---

## Remote-Repository erstellen

- Bei [GitHub](https://github.com/) anmelden
- Option `Repositories - New` auswählen
- Folgende Informationen eingeben, Option `Add a README file` auswählen und Drucktaste `Create repository` betätigen
  - Repository Name: `Der Repository-Name` (z.B. abap)

## Remote-Repository und lokales Repository verbinden

- View `Window - Show View - Other... - ABAP - abapGit Repositories` öffnen
- Drucktaste `Link New abapGit Repository...` betätigen
- Folgende Informationen eingeben und Drucktaste `Next >` betätigen
  - URL: `Die Repository-URL` (z.B. https://github.com/appenmmaier/abap)
- Folgende Informationen eingeben und Drucktaste `Next >` betätigen
  - Package: `Das ABAP-Paket` (z.B. ZABAP)
- Folgende Informationen eingeben und Drucktaste `Finish` betätigen
  - Folder Logic: `FULL`

## Änderungen vom lokalen Repository hochladen

- View `Window - Show View - Other... - ABAP - abapGit Repositories` öffnen
- Drucktaste `My Repositories` betätigen
- Rechtsklick auf das Repository und Option `Stage and Push` auswählen
- Objekte markieren und Drucktaste `Stage selected Objects` betätigen
- Folgende Informationen eingeben und Drucktaste `Commit and Push...` betätigen
  - Commit Message: `Ein beliebiger Kommentar` (z.B. update demos)
  - Author: `Dein Name` (z.B. Daniel Appenmaier)
  - Committer: `Deine Email-Adresse` (z.B. daniel.appenmaier@gmail.com)

## Änderungen vom Remote-Repository herunterladen

- View `Window - Show View - Other... - ABAP - abapGit Repositories` öffnen
- Drucktaste `My Repositories` betätigen
- Rechtsklick auf das Repository und Option `Pull...` auswählen
- Drucktaste `Next >` betätigen
- Objekte markieren und Drucktaste `Next >` betätigen
- Drucktaste `Finish` betätigen
