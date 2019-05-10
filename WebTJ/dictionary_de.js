// Translation file for WebTigerJython
// https://webtigerjython.ethz.ch
//
// (c) 2018-2019, Nicole Trachsler
//
// Language: German

let dictionary = {
    // Translations for WebTJ's GUI
    "start-button-hover": "Ausführen | Ctrl+Enter",
    "start-modal-button-hover": "Ausführen im Vollbild",
    "stop-button-hover": "Stoppen",

    "modal-close-button": "Schliessen",

    "options-current-language": "Deutsch",
    "options-fullscreen": "Vollbild",
    "options-close-fullscreen": "Vollbild verlassen",
    "options-program-save": "Programm speichern",
    "options-program-load": "Programm öffnen",
    "options-information": "Informationen",

    "choose-program-name": "Bitte wähle einen Programm Namen:",
    "program-save-prefix": "Programm_",

    "file-api-error": "Dein Browser kann leider keine Programme öffnen. Versuche es nochmal mit einem anderen Browser.",

    "maketurtle-error": "Rufe makeTurtle() auf, um die Zeichenfläche zu erstellen!",
    "multiple-maketurtle-error": "Rufe makeTurtle() nur einmal auf! Entferne alle weiteren makeTurtle() Aufrufe.",
    "line": "[Zeile: ",
    "correct-syntax": "Der Syntax ist korrekt.",
    "file-not-found": "Die Datei konnte nicht gefunden werden: '",
    "abort-message": "Du hast das Programm abgebrochen.",

    // Translations for info.html
    "info-title": "Informationen über WebTigerJython",
    "info-intro-1": "WebTigerJython ist eine schülerfreundliche Programmierumgebung für die Programmiersprache Python." +
        " Die Lernumgebung ist speziell für den Schulunterricht mit dem Lehrmittel \"",
    "info-intro-2": "\" (Klett und Balmer Verlag) von Juraj Hromkovič und Tobias Kohn konzipiert.",
    "info-features": "Features",
    "info-release-1.0.0": "1.0.0 Basisversion",
    "info-release-1.1.0": "1.1.0 Erweiterter Sprachsupport (Französisch)",
    "info-turtle-functions-title": "Unterstützte Turtle Funktionen",
    "info-turtle-functions-intro": "Die folgenden Turtle spezifischen Befehle werden in WebTigerJython zusätzlich zum normalen Python Syntax unterstützt:",
    "info-function-title": "Befehl",
    "info-abbreviation-title": "Abkürzung",
    "info-description-title": "Beschreibung",

    // Translation of the Turtle functions in WebTJ
    "info-number-of-steps": "Anzahl Schritte",
    "info-angle": "Winkel",
    "info-color": "Farbe",
    "info-number": "Zahl",
    "info-function": "Funktion",
    "info-text": "\"Text\"",
    "info-penwidth": "Stiftbreite",
    "info-arithmetic-expression": "arithm. Audruck",
    "info-time": "Zeit",
    "info-number-of": "Anzahl",
    "info-body": "    Körper",
    "info-question": "\"Frage\"",
    "info-key": "\"Taste\"",
    "info-example": "Beispiel:",
    "info-license": "Lizenz",
    "info-description-import": "Die Schildkrötenbefehle laden. Erst danach versteht der Computer die Befehle für die Turtle.",
    "info-description-makeTurtle": "Die Turtle auf der Zeichenfläche erstellen.",
    "info-description-forward": "Anzahl Schritte vorwärts gehen.",
    "info-description-backward": "Anzahl Schritte rückwärts gehen.",
    "info-description-left": "Auf der Stelle um den Winkel nach links drehen.",
    "info-description-right": "Auf der Stelle um den Winkel nach rechts drehen.",
    "info-description-setpencolor": "Die Farbe des Stiftes setzen. Die Farbe wird in Englisch angegeben. Die Turtle" +
        "erhält eine Umrandung in der gewählten Stiftfarbe.",
    "info-description-setpenwidth": "Die Breite des Stiftes setzen. Die Breite wird in Pixeln angegeben.",
    "info-description-print": "Den Text zwischen Anführungszeichen oder das Resultat des arithmetischen " +
        "Ausdrucks ins Ausgabe-Fenster schreiben.",
    "info-description-delay": "Eine Anzahl Millisekunden warten, bevor das Programm weiterläuft.",
    "info-description-ht": "Die Turtle unsichtbar machen, damit die Bilder schnell gezeichnet werden.",
    "info-description-st": "Die Turtle wieder sichtbar machen, damit du siehst, wie sie zeichnet.",
    "info-description-repeat": "Einen Programmteil eine Anzahl Male ausführen. Der Körper mit den Befehlen, die " +
        "wiederholt werden, muss eingerückt sein.",
    "info-description-pu": "Den Stift hochheben und nicht mehr zeichnen.",
    "info-description-pd": "Den Stift senken und wieder zeichnen.",
    "info-description-dot": "Zeichnet einen ausgefüllten Punkt mit Durchmesser d an der aktuellen Position der Turtle.",
    "info-description-setheading": "Setzt den Winkel nicht relativ zur Turtle sondern absolut, d.h. relativ zum " +
        "Fenster. Ein Winkel von 0 bewirkt, dass die Turtle direkt nach oben zeigt, ein Winkel von 90 zeigt nach rechts usw.",
    "info-description-heading": "Gibt den Winkel der Turtle absolut zur Zeichenfläche zurück.",
    "info-description-speed": "Ändert die Geschwindigkeit der Turtle. Wird als Geschwindigkeit -1 angegeben, so " +
        "läuft die Turtle, so schnell sie nur kann. Die Turtle läuft am langsamsten mit Geschwindigkeit 1.",
    "info-description-msgDlg": "Gibt den Text in einem eigenen kleinen Fenster aus. Das Fenster muss mit \"OK\" " +
        "zuerst weggeklickt werden, bevor das Programm fortfährt.",
    "info-description-label": "Gibt den Text in der Turtle Zeichenfläche an der aktuellen Position der Turtle aus.",
    "info-description-input": "Der Computer zeigt in einem Fenster die Frage an und speichert den vom Benutzer " +
        "eingegebenen Wert anschliessend in der Variable ab. Es gibt diese Funktion in drei weiteren Varianten, bei " +
        "welchen jeweils ein bestimmter Datentyp verlangt wird: inputInt(\"Frage\"), inputFloat(\"Frage\") und " +
        "inputString(\"Frage\").",
    "info-description-setfillcolor": "Setzt die Füllfarbe. Die Farbe wird in Englisch angegeben. Der Körper " +
        "der Turtle wird in der gewählten Füllfarbe angezeigt.",
    "info-description-startpath": "Startet die Aufzeichnung der Turtlebewegung zum nachträglichen Füllen",
    "info-description-fillpath": "Verbindet die aktuelle Turtleposition mit dem Startpunkt und füllt die geschlossene Figur mit der Füllfarbe.",
    "info-description-sqrt": "Berechnet die Wurzel der Zahl.",
    "info-description-isinteger": "Gibt einen Wahrheitswert zurück (true oder false) welcher angibt, ob die " +
        "Zahl ein Integer ist oder nicht.",
    "info-description-makecolor-intro": "Gibt eine Farbe in der Hexadezimal Schreibweise zurück und speichert sie " +
        "in der Variable c. Die Farbe kann zum Beispiel folgendermassen definiert werden:",
    "info-description-makecolor-rgb": ": makeColor(R, G, B), makeColor(\"rgb(R,G,B)\") wobei R, G und B entweder alles Integer Werte " +
        "zwischen 0 und 255 sind Float Werte zwischen 0 und 1.",
    "info-description-makecolor-rgba": ": makeColor(R,G,B,A), makeColor(\"rgba(R,G,B,A\")) die Werte für R, G und B sind gleich " +
        "wie oben. A ist ein Float zwischen 0 und 1 und gibt die Transparenz an.",
    "info-description-makecolor-rainbow": "Regenbogen",
    "info-description-makecolor-rainbow-descr": ": makeColor(\"rainbow\", 0.5) gibt eine Farbe des Regenbogenspektrums zurück. Der " +
        "zweite Werte ist ein Float zwischen 0 und 1.",
    "info-description-makecolor-hexadecimal": "Hexadezimal",
    "info-description-makecolor-hexadecimal-descr": ": makeColor(\"#7FFFD4\") als Farbe wird ein Hexadezimal String angegeben.",
    "info-description-makecolor-colorstring": ": makeColor(\"Aqua-Marine\") als Farbe wird ein Farbname angegeben.",
    "info-description-getpixelcolorstr": "Gibt die Farbe des Pixels unter der Turtle zurück.",
    "info-description-getpos": "Gibt die aktuelle Koordinaten Position der Turtle als Liste zurück. Die x-Koordinate kann mit getPos()[0] abgefragt werden und die y-Koordinate mit getPos()[1].",
    "info-description-getx": "Gibt die x-Koordinaten der aktuellen Turtle Position zurück.",
    "info-description-gety": "Gibt die y-Koordinaten der aktuellen Turtle Position zurück.",
    "info-description-moveto": "Verschiebt die Turtle an den Punkt (x, y). Beim Verschieben zeichnet die Turtle.",
    "info-description-setpos": "Verschiebt die Turtle an den Punkt (x, y), ohne dabei zu zeichnen.",
    "info-description-setx": "Verschiebt die Turtle an die x-Koordinate, ohne dabei zu zeichnen.",
    "info-description-sety": "Verschiebt die Turtle an die y-Koordinate, ohne dabei zu zeichnen.",
    "info-description-clean": "Löscht die Turtlespuren. Die Turtle bleibt am Ort sichtbar.",
    "info-description-cs": "Löscht die Turtlespuren und setzt die Turtle zurück an die Anfangsposition in der Mitte der Zeichenfläche.",
    "info-description-clear": "Löscht die Turtlespuren. Die Turtle bleibt am Ort und macht sich unsichtbar.",
    "info-description-onkey": "Ruft die angegeben Funktion beim Drücken der angegeben Taste auf. Schreibe den " +
        "Funktionsnamen ohne Klammern. Damit die Tastendrucke von deiner externen Tastatur abgefangen werden können, " +
        "musst du in die Zeichenfläche klicken nachdem du das Progamm gestartet hast. Rufe anschliessend die Funktion " +
        "Screen().listen() auf, damit die Zeichenfläche auf deine Tasteneingabe hört.",
    "info-description-onclick": "Ruft die angegebene Funktion beim Klicken auf die Zeichenfläche auf. Schreibe den " +
        "Funktionsnamen ohne Klammern. Es werden automatisch die x- und y-Koordinaten des Klicks der Funktion übergeben. " +
        "Rufe anschliessend die Funktion Screen().listen() auf, damit die Zeichenfläche auf deine Eingabe hört.",
    "info-description-listen": "Fängt Klicks und Tasteneingaben in der Zeichenfläche ab. Diese Funktion " +
        "wird zusammen mit Screen().onclick(..) und Screen().onkey(..) verwendet. Es genügt, wenn du diese Funktion nur einmal pro Programm aufrufst.",

    "info-contact": "Kontakt",
    "info-contact-descr": "Rückmeldungen und Wünsche zur Programmierumgebung bitte direkt per Mail an Nicole Trachsler senden: nicole.trachsler (at) inf.ethz.ch",
    "info-authors": "Autoren:",
    "info-copyright-descr": "Die Applikation wird aktiv vom ABZ der ETH Zürich entwickelt. Die Benutzung der " +
        "Applikation ist kostenlos, sie darf jedoch nicht für kommerzielle Zwecke genutzt werden. Jede Anpassung " +
        "oder Kopie der Applikation muss schriftlich bewilligt werden."
};