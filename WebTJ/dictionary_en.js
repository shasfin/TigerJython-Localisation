// Translation file for WebTigerJython
// https://webtigerjython.ethz.ch
//
// (c) 2018-2019, Nicole Trachsler
//
// Language: English

let dictionary = {
    // Translations for WebTJ's GUI
    "start-button-hover": "Run | Ctrl+Enter",
    "start-modal-button-hover": "Run in full screen",
    "stop-button-hover": "Stop",

    "modal-close-button": "Close",

    "options-current-language": "English", // language of the current dictionary
    "options-fullscreen": "Full screen",
    "options-close-fullscreen": "Close full screen",
    "options-program-save": "Save program",
    "options-program-load": "Load program",
    "options-information": "Information",

    "choose-program-name": "Please choose a program name:",
    "program-save-prefix": "program_",

    "file-api-error": "Your browser is not able to open programs. Please try it again with another browser.",

    "maketurtle-error": "Call makeTurtle() to create the canvas!",
    "multiple-maketurtle-error": "Call makeTurtle() only once! Remove all other calls to makeTurtle().",
    "line": "[line: ",
    "correct-syntax": "Syntax is correct.",
    "file-not-found": "File not found: '",
    "abort-message": "You canceled the program.",

    "error-msg-ie": "WebTigerJython does not work with Internet Explorer. Please use Chrome, FireFox or Edge instead.",

    // Translations for info.html
    "info-title": "Information about WebTigerJython",
    "info-intro-1": "WebTigerJython is a student friendly programming environment for the Python programming language." +
        " The learning environment is designed especially for school lessons with the textbook \"",
    "info-intro-2": "\" from Juraj Hromkovič and Tobias Kohn published by Klett & Balmer.",
    "info-features": "Features",
    "info-release-1.0.0": "Basic version",
    "info-release-1.1.0": "Extended language support (french)",
    "info-turtle-functions-title": "Supported turtle functions",
    "info-turtle-functions-intro": "The following turtle specific commands are supported in WebTigerJython in addition to the standard Python syntax:",
    "info-function-title": "Function",
    "info-abbreviation-title": "Abbreviation",
    "info-description-title": "Description",

    // Translation of the Turtle functions in WebTJ
    "info-number-of-steps": "No. steps",
    "info-angle": "angle",
    "info-color": "color",
    "info-number": "number",
    "info-function": "function",
    "info-text": "\"text\"",
    "info-penwidth": "pen width",
    "info-arithmetic-expression": "arithm. expression",
    "info-time": "time",
    "info-number-of": "number",
    "info-body": "    body",
    "info-question": "\"question\"",
    "info-key": "\"key\"",
    "info-example": "Example:",
    "info-license": "license",
    "info-description-import": "Load the turtle commands. Only then the computer understands the commands for the turtle.",
    "info-description-makeTurtle": "Create the turtle on the canvas.",
    "info-description-forward": "Go forward the number of steps.",
    "info-description-backward": "Go backward the number of steps.",
    "info-description-left": "Turn on the spot by the angle to the left.",
    "info-description-right": "Turn on the spot by the angle to the right.",
    "info-description-setpencolor": "Set the color of the pen. The turtle receives a border in the selected pen color.",
    "info-description-setpenwidth": "Set the width of the pen. The width is specified in pixels.",
    "info-description-print": "Write the text between quotes or the result of the arithmetic expression into the output window.",
    "info-description-delay": "Wait a specified amount of milliseconds before the program continues.",
    "info-description-ht": "Make the turtle invisible so that the pictures are drawn faster.",
    "info-description-st": "Make the turtle visible again so that the drawing process of the turtle becomes visible.",
    "info-description-repeat": "Execute the body a number of times. The body with the instructions to be repeated " +
        "must be indented.",
    "info-description-pu": "Lift the pen and do not draw.",
    "info-description-pd": "Lower the pen and draw again.",
    "info-description-dot": "Draw a filled circle with diameter d at the current position of the turtle.",
    "info-description-setheading": "Set the angle absolutely to the turtle and not relative. An angle of 0 causes " +
        "the turtle to point straight up, an angle of 90 points to the right etc.",
    "info-description-heading": "Returns the angle of the turtle absolute to the canvas.",
    "info-description-speed": "Change the speed of the turtle. If the speed is set to -1, the turtle runs as fast " +
        "as it can. With speed set to 1, the turtle runs as slow as it can.",
    "info-description-msgDlg": "Return the text in its own small window. The window must first be clicked away with \"OK\" before the program continues.",
    "info-description-label": "Print the text in the canvas at the current position of the turtle.",
    "info-description-input": "The computer displays the question in a window and saves then the entered value by " +
        "the user in the variable x. There are three additional variants of this function, each of which requires " +
        "a specific data type: inputInt(\"question\"), inputFloat(\"question\") and inputString(\"question\").",
    "info-description-setfillcolor": "Set the fill color. The body of the turtle is displayed in the selected color.",
    "info-description-startpath": "Starts the recording of the turtle movement for a subsequent area filling.",
    "info-description-fillpath": "Connects the current turtle position to the starting point and fills the closed " +
        "figure with the fill color.",
    "info-description-sqrt": "Calculate the root of the number.",
    "info-description-isinteger": "Returns a truth value (true or false) which indicates whether the number is an integer or not.",
    "info-description-makecolor-intro": "Returns a colour in hexadecimal notation and stores it in the variable c. The colour can be defined as follows:",
    "info-description-makecolor-rgb": ": makeColor(R, G, B), makeColor(\"rgb(R,G,B)\") where R, G and B are all " +
        "integer values between 0 and 255 or float values between 0 and 1.",
    "info-description-makecolor-rgba": ": makeColor(R,G,B,A), makeColor(\"rgba(R,G,B,A\")) the values for R, G, B are " +
        "the same as above. A is a float value between 0 and 1 which indicates the transparency.",
    "info-description-makecolor-rainbow": "rainbow",
    "info-description-makecolor-rainbow-descr": ": makeColor(\"rainbow\", 0.5) return a color of the rainbow spectre. The parameter is a float between 0 and 1.",
    "info-description-makecolor-hexadecimal": "hexadecimal",
    "info-description-makecolor-hexadecimal-descr": ": makeColor(\"#7FFFD4\") the color is a hexadecimal string.",
    "info-description-makecolor-colorstring": ": makeColor(\"Aqua-Marine\") the color is a string in English.",
    "info-description-getpixelcolorstr": "Return the colour of the pixel at the current turtle position.",
    "info-description-getpos": "Return the coordinates (x, y) of the current turtle position. The x-coordinate can be " +
        "accessed with getPos()[0] and the y-coordinate with getPos()[1].",
    "info-description-getx": "Return the x-coordinate of the current turtle position.",
    "info-description-gety": "Return the y-coordinate of the current turtle position.",
    "info-description-moveto": "Move the turtle to the given point (x, y).",
    "info-description-setpos": "Set the turtle to the given point (x, y) without drawing.",
    "info-description-setx": "Set the turtle to the given x-coordinate without drawing.",
    "info-description-sety": "Set the turtle to the given y-coordinate without drawing.",
    "info-description-clean": "Delete the turtle traces. The turtle remains at the current position.",
    "info-description-cs": "Delete the turtle traces and set the turtle back to its initial position in the middle of the canvas.",
    "info-description-clear": "Delete the turtle traces. The turtle remains at the current position and hides itself",
    "info-description-onkey": "Calls up the specified function when the specified key is pressed. Write the function " +
        "name without parentheses. To be able to intercept the keystrokes from your external keyboard, you must click " +
        "in the drawing area after you start the program. Then call the Screen().listen() function to let the canvas hear your key input.",
    "info-description-onclick": "Invokes the specified function when you click on the canvas. Write the function " +
        "name without parentheses. The x- and y- coordinates of the click are automatically passed to the function. " +
        "Then call the Screen().listen() function to make the canvas hear your input.",
    "info-description-listen": "Captures clicks and keystrokes in the canvas. This feature is used in conjunction " +
        "with Screen().onclick(..) and Screen().onkey(..). You only need to call this function once per program.",

    "info-contact": "Contact",
    "info-contact-descr": "Please send your feedback and suggestions about the programming environment directly to Nicole Trachsler by e-mail: nicole.trachsler (at) inf.ethz.ch",
    "info-authors": "Authors:",
    "info-copyright-descr": "The application is actively developed by the ABZ of ETH Zurich. The use of the " +
        "application is free, but it may not be used for commercial purposes. Any customization or copy of the " +
        "application must be given in writing."
};