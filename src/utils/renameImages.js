const fs = require('fs');
const path = require('path');

// Function to rename images in the given folder
function renameImages(folderPath) {
    // Read the contents of the folder
    fs.readdir(folderPath, (err, files) => {
        if (err) {
            console.error('Error reading the folder:', err);
            return;
        }

        let imageIndex = 1;

        files.forEach(file => {
            const ext = path.extname(file).toLowerCase();
            if (ext === '.jpg' || ext === '.jpeg' || ext === '.png' || ext === '.gif') {
                const oldPath = path.join(folderPath, file);
                const newPath = path.join(folderPath, `image${imageIndex}${ext}`);

                fs.rename(oldPath, newPath, err => {
                    if (err) {
                        console.error('Error renaming file:', err);
                        return;
                    }
                    console.log(`${oldPath} renamed to ${newPath}`);
                });

                imageIndex++;
            }
        });
    });
}

const folderPath = 'C:\\Users\\routd\\OneDrive\\Desktop\\git\\emma-portfolio\\public\\assets\\Zbrush';
renameImages(folderPath);
