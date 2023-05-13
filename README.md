# test-browser-filesystem

This was supposed about to test the Chromium Sandboxed filesystem, see [File API: Directories and System](https://www.w3.org/TR/file-system-api/).

But it seems, that it is deprecated.

It was made available by [window.requestFileSystem](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestFileSystem), but it was removed from the [File and Directory Entries API](https://wicg.github.io/entries-api/).

It is built upon the [File API: Directories and System](https://dev.w3.org/2009/dap/file-system/file-dir-sys.html), which would have been a standardized filesystem sandbox system.

You can read about Firefox's support for the sandbox system [here](https://developer.mozilla.org/en-US/docs/Web/API/File_and_Directory_Entries_API/Firefox_support).

The associated doc of the filesystem is [here](https://developer.mozilla.org/en-US/docs/Web/API/FileSystem).

And the Chrome API, as indicated in the link above, is [here](https://developer.chrome.com/docs/extensions/reference/fileSystem/), and marked as deprecated.

It is indicated to replace it by the [Native FileSystem API](https://bugs.chromium.org/p/chromium/issues/detail?id=853326), also known as "Native File System API" or "Writable Files", according to the link.

The related draft is [file-system-access](https://wicg.github.io/file-system-access/), not on track to be a standard.

Unlike indicated, `window.requestFileSystem` is never present, in any browser,  `window.webkitRequestFileSystem` is present in Chrome and Brave, not present in Firefox, see [webkit](https://webkit.org/).

### conclusion

I will not use it, it is deprecated and not cross-browser.

## File System Access API 

The [File System Access API](https://developer.chrome.com/articles/file-system-access/) is an API allowing to edit directly files on the user's filesystem.

The [draft](https://wicg.github.io/file-system-access/) is not on track to become a standard.

The Mozilla documentation indicate [supported browsers](https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API) (and code).

The `window.showSaveFilePicker` support is indicated [here](https://developer.mozilla.org/en-US/docs/Web/API/window/showSaveFilePicker). It is not present in Firefox, nor Brave (unless you activate a flag, as indicated [here](https://developer.chrome.com/articles/file-system-access/)), but was present in Chrome.

There is a ponyfill [here](https://github.com/GoogleChromeLabs/browser-fs-access)

It seem that you would need to ask permissions for each save.

The documentation indicate it would be usefull for writing text editor and such.

### conclusion

I will not use it, it is deprecated and not cross-browser.

## other ways 

It seems, to me, that there is no cross browser solutions to manipulate a filesystem using one of the standards listed above.

There is the possibility to use another way, like a IndexedDB-enabled system, I was using this in another project.

### BrowserFS

Github: https://github.com/jvilk/BrowserFS

Allow to use the same API as the one of Node to read/write files, in the browser. Support multiple storages type, including IndexedDB.

Has a Typescript typing.

### level-filesystem

Github: https://github.com/mafintosh/level-filesystem

Same thing, but using [level-js](https://github.com/Level/level-js) (which is written on top of IndexedDB).

See [browserify-fs](https://github.com/mafintosh/browserify-fs) also.

It does not seem to have Typescript typing.

## filer

Github: https://github.com/filerjs/filer

Same thing, on top of IndexedDB.

It seem that there is not a Typescript definition.

## parceljs test

It check wether or not some of the features listed above are available.

You can drop a folder on the black bordered div, it will list the content of the directory (files and sub directories).

## License

Most of the code is taken from the official documentation anyway, but otherwise, see below.

It is provided with the GNU AFFERO GENERAL PUBLIC LICENSE.

This is a test and research on the Chromium Sandboxed filesystem.

Copyright (C) 2023  Isirode

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
