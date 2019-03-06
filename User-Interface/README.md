# TigerJython-Localisation: User-Interface

All the texts/captions in TigerJython's user interface are stored in text-files called `uitexts_LL.txt`, where `LL` stands for the respective language: `de` for _German_, `fr` for _French_, etc.  The English translation is used as the default and has therefore no language identifier.

All files must be in `UTF-8` encoding.  Any missing entries are taken from the default file `uitexts.txt`.  Please note that some of the translations are work in progress, and we are sure that there are errors in most files.  If you see something, say something!

**If you are interested in contributing, please write an email to `jython at tobiaskohn.ch`.**


## Syntax

- Lines starting with a hash `#` are ignored and used for comments.
- Each line contains one key-value pair in the format `name = "value"`, where `name` can be a qualified name such as `copyasrtf.caption`.
- In menus, the ampersand `&` is interpreted as hot key.  E. g. in `&Edit`, the `e` becomes the hot key and will be underlined.
- Menu entries have the fields `caption`, `tooltip`, `shortcut`, and `enabled`.  The latter one is a boolean field holding either `true` or `false` as value (no quotation marks).
- Curly braces `{` and `}` can be used to group items.  `copy.caption = "copy"; copy.tooltip = "copy selected text"` (where `;` stands for a line break) can be expressed as `copy { .caption = "copy"; .tooltip = "copy selected text" }` (`;` must be replaced by a line break).
- Some messages contain a single placeholder `%s`, which will be replaced by the actual file name, say, when the message is actually displayed.
- Since the TigerJython's core is also used for _JEM_ (Jython Environment for Music), there is a predefined variable `app.name`, which can be inserted into any text using `+` for concatenation.


## Usage

These language files are typically inside the JAR-file itself and are shipped with _TigerJython_.  However, if you want to add a new language, place the `uitexts_LL.txt` file in the same location as the JAR-file.  _TigerJython_ should then find your file and offer to select the language in the respective menus.


## Run Commands

- **run**  Execute the current program (in its entirety).
- **resume**  Resume execution of the program after it has been paused.
- **runselected**  Run the selected text only without prior resetting of the interpreter.
- **singlestep**  Execute a single line, jumping into another function if appropriate.
- **stepover**  Execute a single line.  If the line contains function calls, the functions are executed in their entirety and the program runs until it arrives at the next line in the program.
- **pause**  Pause the currently running program, suspending execution.  Execution can be resumed.
- **abort**  Stop/abort execution of the current program.  Execution cannot be resumed afterwards, but starts from the beginning.
- **reset**  Reset the interpreter.  This is usually done automatically for _run_, but not for _run-selected_.
- **togglebreakpoint**  Set or remove a breakpoint at the current line.  Is only possible if the debugger is shown.
- **showdebugger**  Display or hide the debugger panel on the right.
- **showconsole**  Display the interactive console/terminal.
- **define**  Stores the currently selected function permanently, and makes it available in all subsequent program executions.
- **showfunctions**  Shows a window to manage the stored/defined functions.
- **keyboardinterrupt**  Inserts a `CTRL+C` into the running program, which usually causes the program to abort.
- **insertrandomnumbers**  Opens a window that allows to insert a list of random numbers into the program code.
- **insertprimenumber**  Opens a window that allows to insert a prime number into the program code.

The following commands are usually only available if an appropriate target (robot, microcontroller, etc.) has been selected and activated (use the preferences dialog).

- **remoteterminal**  Shows a window with a terminal/console to communicate with a remote target.
- **downloadtotarget**  Downloads and executes a program on a remote target.
- **executeontarget**  Execute the program on a remote target.
- **downloadmoduletotarget**  Download a program/module to a target without executing it.
- **terminatepythonontarget**  Stop/abort the execution of the program on the remote target.
- **shutdowntarget**  Shutdown a remote target and switch it off.
- **restarttarget**  Restart a remote target.
- **flashtarget**  Copy a new "BIOS" to the remote target.


## Special Names and Messages

While most of the actions are fairly standard or self-explanatory, some few might require additional explanation:

- **message.cannotsaveduplicate**  Is shown when ...
- **message.filenotfound**  The user tries to open a file that does not exist.
- **message.printed**  Reports how many pages have been printed.
- **message.updateavailable**  If TigerJython finds that there is a newer version available for download, this message is shown in the output window.
- **queries.overwrite**  Asks if the user really wants to replace an existing file.
- **queries.savebeforeclose**  When a file contains unsaved changes, asks the user if the changes should be saved before closing the file.
- **queries.abort**  If TigerJython is closed while a program is still being executed, it asks the user if the program should be aborted.
- **queries.reload**  If TigerJython finds that a file currently open in the editor has been modified by an external program, it asks if the user wants to reload the file.
- **dialogs.pythonfile**  The open and save dialogs let the user filter for Python files only.  This is the text displayed in the filter.
- **input.floatprompt**  Asks the user to enter a number (this can either be a floating point or integer number).
- **input.intprompt**  Asks the user to enter an integer.
- **input.nofloaterror**  Informs the user that the entered value is not a valid number.
- **input.nointerror**  Informs the user that the entered value is not a valid integer.
- **quickfind.caption**  For quick searches, TigerJython does not display a dialog window, but rather a small "quick-find" bar at the bottom of the editor, similar to what you would find in a browser.  This is the text shown in this quick-find bar.


## Example

```
# This corresponds to the 'New'-command/action in the 'File'-menu:
new.caption = "&New"
new.tooltip = "New program"
new.shortcut = "command N"
# The "command" in the shortcut corresponds to "ctrl" on Windows machines.

# Here is an alternative format for the 'Open'-command/action in the 'File'-menu:
open {
    .caption = "&Open..."
    .tooltip = "Open a file"
    .shortcut = "command O"
}

# Messages might contain a placeholder %s that will be replaced
# once the message is actually displayed.
message.filenotfound = "The file '%s' could not be found."

# Since we might not know the name of the application, it can be used as
# a variable.  In our case, this is always "TigerJython".
about.caption = "About " + app.name + "..."
```


