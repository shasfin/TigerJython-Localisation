# TigerJython-Localisation: Syntax Error Messages

All the texts/captions in TigerJython's user interface are stored in text-files called `error_messages_LL.txt`, where `LL` stands for the respective language: `de` for _German_, `fr` for _French_, etc.

All files must be in `UTF-8` encoding.  Please note that some of the translations are work in progress, and we are sure that there are errors in most files.  If you see something, say something!

**If you are interested in contributing, please write an email to `jython at tobiaskohn.ch`.**


## Syntax

- Lines starting with a hash `#` are ignored and used for comments.
- Each line must have the format `case ERROR_CONSTANT => "message"`.
- For the possible values for `ERROR_CONSTANT`, see [`error_messages_en.txt`](error_messages_en.txt).  Additional information on the error messages can be found in [Tobias Kohn's dissertation](https://tobiaskohn.ch/files/Dissertation_TKohn.pdf), p. 169ff.
- Some error messages take a string parameter, which has the form `%s` inside the message.


## Usage

These language files are typically inside the JAR-file itself and are shipped with _TigerJython_.  However, if you want to add a new language, place the `error_messages_LL.txt` file in the same location as the JAR-file.  _TigerJython_ should then find your file and use the error messages once you select the appropriate language.



