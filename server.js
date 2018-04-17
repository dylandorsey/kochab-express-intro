// bring express into the project
const express = require('express');
// if we dig into the node dependencies, we will find <exports = ... = createApplication>;
// this exports is what we import
// the export is a function. in the next line we import it and set it to a variable:
const app = express();
const PORT = 5000;
// there are thousands of ports, between 1 and 9999;
// some are assigned to special things, but many are safe for them to use

// in order to be a server, it needs to be constantly listening
// we will assign a port number to which to listen
app.listen(PORT);

