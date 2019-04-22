// Translation file for WebTigerJython
// https://webtigerjython.ethz.ch
//
// (c) 2018-2019, Nicole Trachsler
//
// Language: French

let dictionary = {
    // Translations for WebTJ's GUI
    "start-button-hover": "Exécuter | Ctrl+Enter",
    "start-modal-button-hover": "Exécuter on plein écran",
    "stop-button-hover": "Arrêter",

    "modal-close-button": "Fermer",

    "options-language": "Langue",
    "options-language-de": "Allemande",
    "options-language-fr": "Français",
    "options-language-en": "Anglais",
    "options-language-nl": "Néerlandais",
    "options-fullscreen": "Plein écran",
    "options-close-fullscreen": "Quitter le plein écran",
    "options-program-save": "Enregistrer programme",
    "options-program-load": "Ouvrir programme",
    "options-information": "Information",

    "choose-program-name": "Veuillez choisir un nom de programme:",
    "program-save-prefix": "Programme_",

    "file-api-error": "Désolé, votre navigateur ne peut pas ouvrir de programmes. Réessaye avec un autre navigateur.",

    "maketurtle-error": "Appel makeTurtle() pour créer la zone de dessin!",
    "multiple-maketurtle-error": "Appel makeTurtle() seulement une fois! Supprime tous les autres makeTurtle().",
    "line": "[ligne: ",
    "correct-syntax": "La syntaxe est correcte.",
    "file-not-found": "Le fichier n'a pas pu être trouvé: '",
    "abort-message": "Tu as annulé le programme.",

    "assert-repeats-colons": "Le nombre de répétitions trouvées ne correspond pas au nombre de deux points trouvés! répétitions ",
    "assert-colons": ", deux points: ",
    "assertion-failed": "L'assertion a échoué",

    // Translations for info.html
    "info-title": "Informations sur WebTigerJython",
    "info-intro-1": "WebTigerJython est un environnement de programmation facile à utiliser pour le langage de " +
        "programmation Python. L'environnement d'apprentissage est spécialement conçu pour l'enseignement scolaire avec le matériel pédagogique \"",
    "info-intro-2": "\" (Klett & Balmer Verlag) conçu par Juraj Hromkovič et Tobias Kohn.",
    "info-features": "Notes de release",
    "info-release-1.0.0": "1.0.0 Version de bas",
    "info-release-1.1.0": "1.1.0 Support linguistique étendu (français)",
    "info-turtle-functions-title": "Functiones supportées par Turtle",
    "info-turtle-functions-intro": "Les commandes suivantes spécifiques à Turtle sont prises en charge dans WebTigerJython en plus de la syntaxe Python normale:",
    "info-function-title": "Commandement",
    "info-abbreviation-title": "Raccourci",
    "info-description-title": "Description",

    // Translation of the Turtle functions in WebTJ
    "info-number-of-steps": "nombre de pas",
    "info-angle": "angle",
    "info-color": "couleur",
    "info-number": "nombre",
    "info-function": "fonction",
    "info-text": "\"texte\"",
    "info-penwidth": "taillecrayon",
    "info-arithmetic-expression": "expr. arithmétique",
    "info-time": "temps",
    "info-number-of": "nombre",
    "info-body": "     corps",
    "info-question": "\"question\"",
    "info-key": "\"bouton\"",
    "info-example": "Example:",
    "info-license": "license",
    "info-description-import": "Chargez les commandes de tortue. Ce n'est qu'alors que l'ordinateur comprend les commandes de la tortue.",
    "info-description-makeTurtle": "Créez la tortue à la zone de dessin.",
    "info-description-forward": "Aller de l'avant le nombre de pas.",
    "info-description-backward": "Reculer le nombre de pas.",
    "info-description-left": "Tournez-le en place par l'angle à gauche.",
    "info-description-right": "Tournez-le en place par l'angle à droite.",
    "info-description-setpencolor": "Définissez la couleur du stylo. La couleur est donnée en anglais. La tortue reçoit une bordure dans la couleur de stylo sélectionnée.",
    "info-description-setpenwidth": "Définissez la largeur du stylo. La largeur est spécifiée en pixels.",
    "info-description-print": "Écrivez le texte entre les guillemets ou le résultat de l'expression arithmétique dans la fenêtre de output.",
    "info-description-delay": "Attendez quelques millisecondes avant que le programme continue.",
    "info-description-ht": "Rendre la tortue invisible pour que les images soient dessinées rapidement.",
    "info-description-st": "Rendez la tortue visible à nouveau afin que vous puissiez voir comment elle dessine.",
    "info-description-repeat": "Exécutez une partie du programme plusieurs fois. Le corps avec les commandes répétées doit être engagé.",
    "info-description-pu": "Soulevez le stylo et ne dessinez pas.",
    "info-description-pd": "Abaissez le stylo et dessinez à nouveau.",
    "info-description-dot": "Tracez un point en drapeau de diamètre d à la position actuelle de la tortue.",
    "info-description-setheading": "Ne définissez pas l'angle par rapport à la tortue mais absolu, i. par rapport à la " +
        "fenêtre. Un angle de 0 fait pointer la tortue vers le haut, un angle de 90 points vers la droite, etc.",
    "info-description-heading": "Renvoie l'angle de la tortue absolument à la zone de dessin.",
    "info-description-speed": "Change la vitesse de la tortue. Si la vitesse est -1, la tortue courra aussi vite que possible. La tortue court le plus lentement à la vitesse 1.",
    "info-description-msgDlg": "Renvoie le texte dans sa propre petite fenêtre. La fenêtre doit d'abord être cliquée avec \"OK\" avant de poursuivre le programme.",
    "info-description-label": "Renvoie le texte dans la zone de dessin de caractère de la tortue à la position actuelle de la tortue.",
    "info-description-input": "L'ordinateur affiche la question dans une fenêtre, puis stocke la valeur saisie par " +
        "l'utilisateur dans la variable. Il existe trois variantes supplémentaires de cette fonction, chacune " +
        "nécessitant un type de données spécifique:: inputInt(\"question\"), inputFloat(\"question\") et inputString(\"question\").",
    "info-description-setfillcolor": "Définit le stylo plume. La couleur sera donnée en anglais. Le corps de la tortue est affiché dans la couleur sélectionnée.",
    "info-description-startpath": "Le mouvement de la tortue est enregistré afin que la figure dessinée puisse être renseignée ultérieurement.",
    "info-description-fillpath": "Connecte la position actuelle de la tortue au point de départ et remplit la figure fermée avec la couleur de remplissage.",
    "info-description-sqrt": "Calcule la racine du nombre.",
    "info-description-isinteger": "Renvoie une valeur de vérité (true ou false) indiquant si le nombre est un entier ou non.",
    "info-description-makecolor-intro": "Renvoie une couleur en notation hexadécimale et la stocke dans la variable c. " +
        "Par exemple, la couleur peut être définie comme suit:",
    "info-description-makecolor-rgb": ": makeColor(R, G, B), makeColor(\"rgb(R,G,B)\") où R, G et B sont toutes les " +
        "valeurs entières comprises entre 0 et 255 ou les valeurs float comprises entre 0 et 1.",
    "info-description-makecolor-rgba": ": makeColor(R,G,B,A), makeColor(\"rgba(R,G,B,A\")) les valeurs pour R, G et B " +
        "sont les mêmes que ci-dessus. A est un float compris entre 0 et 1 et spécifie la transparence.",
    "info-description-makecolor-rainbow": "Arc-en-ciel",
    "info-description-makecolor-rainbow-descr": ": makeColor(\"rainbow\", 0.5) renvoie une couleur du spectre arc-en-ciel. La seconde valeur est un float compris entre 0 et 1.",
    "info-description-makecolor-hexadecimal": "hexadécimale",
    "info-description-makecolor-hexadecimal-descr": ": makeColor(\"#7FFFD4\") la couleur est une chaîne hexadécimale.",
    "info-description-makecolor-colorstring": ": makeColor(\"Aqua-Marine\") la couleur est un nom de couleur en anglais.",
    "info-description-getpixelcolorstr": "Renvoie la couleur du pixel sous la tortue.",
    "info-description-getpos": "Renvoie la position actuelle des coordonnées de la tortue sous forme de liste. La " +
        "coordonnée x peut être interrogée avec getPos()[0] et la coordonnée y avec getPos()[1].",
    "info-description-getx": "Renvoie les coordonnées x de la position actuelle de la tortue.",
    "info-description-gety": "Renvoie les coordonnées y de la position actuelle de la tortue.",
    "info-description-moveto": "Déplace la tortue jusqu'au point (x, y). Lorsque vous déplacez la tortue dessine.",
    "info-description-setpos": "Déplace la tortue jusqu'au point (x, y) sans dessiner.",
    "info-description-setx": "Déplacez la tortue à la coordonnée x donnée sans dessiner.",
    "info-description-sety": "Déplacez la tortue à la coordonnée y donnée sans dessiner.",
    "info-description-clean": "Efface la traînée de la tortue. La tortue reste visible sur le terrain.",
    "info-description-cs": "Efface la traînée de la tortue et remet la tortue à sa position de départ au centre de la zone de dessin.",
    "info-description-clear": "Efface la traînée de la tortue. La tortue reste en place et se fait invisible.",
    "info-description-onkey": "Appelle la fonction spécifiée lorsque la touche spécifiée est enfoncée. Écrivez le " +
        "nom de la fonction sans parenthèses. Pour pouvoir intercepter les frappes au clavier de votre clavier externe, " +
        "vous devez cliquer dans la zone de dessin après le démarrage du programme. Appelez ensuite la fonction " +
        "Screen().Listen() afin que la zone de dessin entende votre saisie.",
    "info-description-onclick": "Invoque la fonction spécifiée lorsque vous cliquez sur la zone de dessin. Écrivez " +
        "le nom de la fonction sans parenthèses. Les coordonnées x et y du clic sont automatiquement transmises à la " +
        "fonction. Appelez ensuite la fonction Screen().Listen() afin que la zone de dessin entende votre saisie.",
    "info-description-listen": "Capture les clics et les frappes dans la zone de dessin. Cette fonctionnalité est " +
        "utilisée avec Screen().onclick(..) et Screen().onkey(..). Il suffit que vous appeliez cette fonction une seule fois par programme.",

    "info-contact": "Contact",
    "info-contact-descr": "Veuillez envoyer vos demandes d'informations et suggestions concernant l'environnement de " +
        "programmation directement à Nicole Trachsler par e-mail: nicole.trachsler (at) inf.ethz.ch",
    "info-authors": "Auteurs:",
    "info-copyright-descr": "L'application est activement développée par l'ABZ de l'ETH Zurich. L'utilisation de " +
        "l'application est gratuite, mais elle ne peut être utilisée à des fins commerciales. Toute adaptation ou " +
        "copie de l'application en dehors du cadre de la demande doit être approuvée par écrit."
};