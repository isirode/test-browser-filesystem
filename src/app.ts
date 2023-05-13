console.log('ok');

// Info : does not exist in Chrome, Brave and Firefox
if ((window as any).requestFileSystem) {
  console.log("window.requestFileSystem exist");
} else {
  console.log("window.requestFileSystem does not exist");
}

// Info : exist in Brave and Chrome, does not exist in Firefox
if ((window as any).webkitRequestFileSystem) {
  console.log("window.webkitRequestFileSystem exist");
} else {
  console.log("window.webkitRequestFileSystem does not exist");
}

const elem = document.querySelector('#drop');
if (elem !== null) {
  // from https://wicg.github.io/entries-api/
  elem.addEventListener('dragover', e => {
    // Prevent navigation.
    e.preventDefault();
  });
  elem.addEventListener('drop', e => {
    // Prevent navigation.
    e.preventDefault();
  
    // Process all of the items.
    for (const item of (e as any).dataTransfer.items) {
      // kind will be 'file' for file/directory entries.
      if (item.kind === 'file') {
        const entry = item.webkitGetAsEntry();
        handleEntry(entry);
      }
    }
  });
}

// from https://wicg.github.io/entries-api/
function handleEntry(entry) {
  console.log('name: ' + entry.name);
  console.log('path: ' + entry.fullPath);
  if (entry.isFile) {
    console.log('... is a file');
    readFileEntry(entry);
  } else if (entry.isDirectory) {
    console.log('... is a directory');
    enumerateDir(entry);
  }
}

// from https://wicg.github.io/entries-api/
function enumerateDir(dirEntry) {
  let reader = dirEntry.createReader();
  let doBatch = function() {

    // Read a batch.
    reader.readEntries(entries => {

      // Complete?
      if (entries.length === 0) {
        return;
      }

      // Process the batch.
      entries.forEach(handleEntry);

      // Read the next batch.
      doBatch();

    }, error => console.warn(error));
  };
  doBatch();
}

// from https://wicg.github.io/entries-api/
function readFileEntry(entry) {
  entry.file(file => {
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onerror = error => console.warn(error);
    reader.onload = () => {
      console.log(reader.result);
    };
  }, error => console.warn(error));
}

if ((window as any).showSaveFilePicker) {
  console.log("window.showSaveFilePicker exist");
} else {
  console.log("window.showSaveFilePicker does not exist");
}

// from https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API
async function saveFile() {
  // create a new handle
  const newHandle = await (window as any).showSaveFilePicker();

  // create a FileSystemWritableFileStream to write to
  const writableStream = await newHandle.createWritable();

  // write our file
  await writableStream.write('Hello World !');

  // close the file and write the contents to disk.
  await writableStream.close();
}
