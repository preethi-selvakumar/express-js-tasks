const fs = require('fs');

fs.readFile('access.log', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    const lines = data.split('\n').filter(line => line.trim() !== '');

    const urlCount = {};

    lines.forEach(line => {
        const parts = line.split('"');
        if (parts.length > 1) {
            const requestPart = parts[1];
            const url = requestPart.split(' ')[1];
            if (url) {
                urlCount[url] = (urlCount[url] || 0) + 1;
            }
        }
    });

    console.log("Request Patterns:");
    console.log(urlCount);
});
