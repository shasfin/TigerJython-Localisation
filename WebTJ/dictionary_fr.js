// Translation file for WebTigerJython
// https://webtigerjython.ethz.ch
//
// (c) 2018-2019, Nicole Trachsler
//
// Language: French

let dictionary = {
    // Translations for WebTJ's GUI
    "start-button-hover": "Exécuter | Ctrl+Enter",
    "start-modal-button-hover": "Exécuter en plein écran",
    "stop-button-hover": "Arrêter",

    "modal-close-button": "Fermer",

    "options-current-language": "Français",
    "options-fullscreen": "Plein écran",
    "options-close-fullscreen": "Quitter le plein écran",
    "options-program-save": "Enregistrer le programme",
    "options-program-load": "Ouvrir un programme",
    "options-information": "Informations",

    "choose-program-name": "Veuillez choisir un nom de programme:",
    "program-save-prefix": "programme_",

    "file-api-error": "Votre navigateur ne peut malheureusement pas ouvrir de programmes. Réessayez avec un autre navigateur.",

    "maketurtle-error": "Utilisez makeTurtle() pour créer la zone de dessin!",
    "multiple-maketurtle-error": "Utilisez makeTurtle() seulement une fois! Supprimez tous les autres appels à makeTurtle().",
    "line": "[ligne: ",
    "correct-syntax": "La syntaxe est correcte.",
    "file-not-found": "Le fichier n'a pas pu être trouvé: '",
    "abort-message": "L'exécution du programme a été annulée.",

    "error-msg-ie": "WebTigerJython ne fonctionne pas avec Internet Explorer. Veuillez utiliser Chrome, FireFox ou Edge.",

    // Translations for info.html
    "info-title": "Informations à propos de WebTigerJython",
    "info-intro-1": "WebTigerJython est un environnement de programmation facile à utiliser pour le langage de " +
        "programmation Python. L'environnement d'apprentissage est spécialement conçu pour l'enseignement scolaire avec le matériel pédagogique \"",
    "info-intro-2": "\" (Klett & Balmer Verlag) conçu par Juraj Hromkovič et Tobias Kohn.",
    "info-features": "Notes de sortie",
    "info-release-1.0.0": "Version de base",
    "info-release-1.1.0": "Support linguistique étendu (français)",
    "info-turtle-functions-title": "Fonctions Turtle supportées",
    "info-turtle-functions-intro": "Les commandes suivantes spécifiques à Turtle sont prises en charge dans WebTigerJython en plus de la syntaxe Python normale:",
    "info-function-title": "Commande",
    "info-abbreviation-title": "Raccourci",
    "info-description-title": "Description",

    // Translation of the Turtle functions in WebTJ
    "info-number-of-steps": "nombre_de_pas",
    "info-angle": "angle",
    "info-color": "couleur",
    "info-number": "nombre",
    "info-function": "fonction",
    "info-text": "\"texte\"",
    "info-penwidth": "epaisseur_stylo",
    "info-arithmetic-expression": "expr. arithmétique",
    "info-time": "temps",
    "info-number-of": "nombre de",
    "info-body": "     corps",
    "info-question": "\"question\"",
    "info-key": "\"bouton\"",
    "info-example": "Exemple:",
    "info-license": "license",
    "info-description-import": "Charge les commandes de la tortue. Ce n'est qu'alors que l'ordinateur comprend les commandes de la tortue.",
    "info-description-makeTurtle": "Crée la tortue sur la zone de dessin.",
    "info-description-forward": "Avance la tortue du nombre de pas indiqué.",
    "info-description-backward": "Recule la tortue du nombre de pas indiqué.",
    "info-description-left": "Fait tourner la tortue sur elle-même vers la gauche de l'angle indiqué.",
    "info-description-right": "Fait tourner la tortue sur elle-même vers la droite de l'angle indiqué.",
    "info-description-setpencolor": "Définit la couleur du stylo. La couleur est donnée en anglais. La tortue reçoit une bordure de la couleur de stylo sélectionnée.",
    "info-description-setpenwidth": "Définit la largeur du stylo. La largeur est spécifiée en pixels.",
    "info-description-print": "Écrit le texte entre les guillemets ou le résultat de l'expression arithmétique dans la fenêtre de sortie.",
    "info-description-delay": "Attend quelques millisecondes avant de poursuivre l'exécution du programme.",
    "info-description-ht": "Rend la tortue invisible pour que les images soient dessinées rapidement.",
    "info-description-st": "Rend la tortue à nouveau visible pour voir comment elle dessine.",
    "info-description-repeat": "Exécute une partie du programme plusieurs fois. Le corps de la boucle avec les commandes à répéter doit être indenté (décalé).",
    "info-description-pu": "Soulève le stylo pour ne pas dessiner.",
    "info-description-pd": "Abaisse le stylo pour dessiner.",
    "info-description-dot": "Dessine un disque plein de diamètre d à la position actuelle de la tortue.",
    "info-description-setheading": "Ne pas définir les angles relativement à l'orientation de la tortue mais de manière absolue, i. par rapport à la " +
        "fenêtre. Un angle de 0° fait pointer la tortue vers le haut, un angle de 90° la pointe vers la droite, etc.",
    "info-description-heading": "Renvoie l'angle de la tortue de manière absolue, par rapport à la zone de dessin.",
    "info-description-speed": "Change la vitesse de la tortue. Si la vitesse est -1, la tortue se déplace aussi vite que possible. La tortue avance le plus lentement à la vitesse 1.",
    "info-description-msgDlg": "Affiche le texte dans sa propre fenêtre. La fenêtre doit d'abord être cliquée avec \"OK\" avant que le programme ne puisse se poursuivre.",
    "info-description-label": "Affiche le texte indiqué dans la zone de dessin à la position actuelle de la tortue.",
    "info-description-input": "L'ordinateur affiche la question dans une fenêtre, puis stocke la valeur saisie par " +
        "l'utilisateur dans la variable. Il existe trois variantes supplémentaires de cette fonction, chacune " +
        "exigeant un type de données spécifique:: inputInt(\"question\"), inputFloat(\"question\") et inputString(\"question\").",
    "info-description-setfillcolor": "Définit la couleur de remplissage. La couleur est indiquée en anglais. Le corps de la tortue est affiché dans la couleur sélectionnée.",
    "info-description-startpath": "Le mouvement de la tortue est enregistré afin que la figure dessinée puisse être remplie.",
    "info-description-fillpath": "Relie la position actuelle de la tortue au point de départ et remplit la figure ainsi formée avec la couleur de remplissage.",
    "info-description-sqrt": "Calcule la racine du nombre.",
    "info-description-isinteger": "Renvoie une valeur de vérité (True ou False) indiquant si le nombre est un entier ou non.",
    "info-description-makecolor-intro": "Renvoie une couleur en notation hexadécimale et la stocke dans la variable c. " +
        "La couleur peut par exemple être définie comme suit:",
    "info-description-makecolor-rgb": ": makeColor(R, G, B), makeColor(\"rgb(R,G,B)\") où R, G et B sont des " +
        "nombres entiers compris entre 0 et 255 ou des nombres à virgules compris entre 0 et 1.",
    "info-description-makecolor-rgba": ": makeColor(R,G,B,A), makeColor(\"rgba(R,G,B,A\")) les valeurs pour R, G et B " +
        "sont les mêmes que ci-dessus. A est un nombre à virgule compris entre 0 et 1 et spécifie la transparence.",
    "info-description-makecolor-rainbow": "Arc-en-ciel",
    "info-description-makecolor-rainbow-descr": ": makeColor(\"rainbow\", 0.5) renvoie une couleur du spectre de l'arc-en-ciel. La seconde valeur est un nombre à virgule compris entre 0 et 1.",
    "info-description-makecolor-hexadecimal": "hexadécimale",
    "info-description-makecolor-hexadecimal-descr": ": makeColor(\"#7FFFD4\") la couleur est une chaîne hexadécimale.",
    "info-description-makecolor-colorstring": ": makeColor(\"Aqua-Marine\") la couleur est un nom de couleur en anglais.",
    "info-description-getpixelcolorstr": "Renvoie la couleur du pixel situé sous la tortue.",
    "info-description-getpos": "Renvoie les coordonnées de la position actuelle de la tortue sous forme de liste. La " +
        "coordonnée x peut être interrogée avec getPos()[0] et la coordonnée y avec getPos()[1].",
    "info-description-getx": "Renvoie les coordonnées x de la position actuelle de la tortue.",
    "info-description-gety": "Renvoie les coordonnées y de la position actuelle de la tortue.",
    "info-description-moveto": "Déplace la tortue jusqu'au point (x, y) en dessinant.",
    "info-description-setpos": "Déplace la tortue jusqu'au point (x, y) sans dessiner.",
    "info-description-setx": "Déplace la tortue à la coordonnée x donnée sans dessiner.",
    "info-description-sety": "Déplacez la tortue à la coordonnée y donnée sans dessiner.",
    "info-description-clean": "Efface la trace de la tortue. La tortue reste visible sur le terrain.",
    "info-description-cs": "Efface la trace de la tortue et remet la tortue à sa position de départ au centre de la zone de dessin.",
    "info-description-clear": "Efface la trace de la tortue. La tortue reste en place et se fait invisible.",
    "info-description-onkey": "Appelle la fonction spécifiée lorsque la touche indiquée est enfoncée. Il faut écrire le " +
        "nom de la fonction sans les parenthèses. Pour pouvoir intercepter les frappes du clavier externe, " +
        "il faut cliquer dans la zone de dessin après le démarrage du programme et appeler ensuite la fonction " +
        "Screen().Listen() pour que la zone de dessin remarque la saisie.",
    "info-description-onclick": "Invoque la fonction spécifiée lors d'un clic dans la zone de dessin. Il faut écrire " +
        "le nom de la fonction sans les parenthèses. Les coordonnées x et y du clic sont automatiquement transmises à la " +
        "fonction. Il faut ensuite appeler la fonction Screen().Listen() afin que la zone de dessin remarque la saisie.",
    "info-description-listen": "Capture les clics de souris et les frappes de clavier dans la zone de dessin. Cette fonctionnalité est " +
        "utilisée avec Screen().onclick(..) et Screen().onkey(..). Il suffit d'appeler cette fonction une seule fois par programme.",

    "info-contact": "Contact",
    "info-contact-descr": "Veuillez envoyer vos demandes d'informations et suggestions concernant l'environnement de " +
        "programmation directement à Nicole Trachsler par e-mail: nicole.trachsler (at) inf.ethz.ch",
    "info-authors": "Auteurs:",
    "info-copyright-descr": "L'application est activement développée par l'ABZ de l'ETH Zurich. L'utilisation de " +
        "l'application est gratuite, mais elle ne peut être utilisée à des fins commerciales. Toute adaptation ou " +
        "copie de l'application doit faire l'objet d'une approbation par écrit."
};