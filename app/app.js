import React from 'react';
import ReactDOM from 'react-dom';

// Notice that we've organized all of our routes into a separate file.
import Router from './router';

require("../css/components/_nav.css");
require("../css/components/_buttons.css");
require("../css/components/_loginpage.css");
require("../css/components/_mainpage.css");
require("../css/main.css");

// Now we can attach the router to the 'root' element like this:
ReactDOM.render(Router, document.getElementById('root'));
