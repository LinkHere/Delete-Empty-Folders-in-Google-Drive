function deleteEmptyFolders() {
  const PARENT_FOLDER_ID = "<parent-folder-id>";
  const parentFolder = DriveApp.getFolderById(PARENT_FOLDER_ID);
  const folders = parentFolder.getFolders();
  while (folders.hasNext()) {
    const subFolder = folders.next();
    treeFolder(parentFolder, subFolder);
  }
}

function treeFolder(parentFolder, folder) {


  const childfolders = folder.getFolders();      

  while (childfolders.hasNext()) {               
    const childfolder = childfolders.next();
    treeFolder(folder, childfolder);
  }

  const hasFile = folder.getFiles().hasNext();               
  const hasFolder = folder.getFolders().hasNext();               

  if (!hasFile && !hasFolder) {            
    folder.setTrashed(true)
  }             
}
