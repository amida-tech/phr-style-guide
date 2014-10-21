# Personal Health Record Style Guide

###An open source style guide for Personal Health Records.

This project uses [KSS-Node](https://github.com/kss-node/kss-node) to automatically generate CSS documentation and the style guide.  KSS-Node is a Node.js implementation of [KSS](http://warpspire.com/kss/).

The style is written in Sassy CSS (SCSS).

To compile the documentation, you will need to install kss-node; kss-node can be installed via npm with the following command (npm must also be installed).

``
sudo npm install -g kss
``

Then, run the following command from the project base directory

``
kss-node src/styleguide ./ --sass src/styleguide/styles.scss --template src/styleguide-template
``

The 'phr' directory contains the SCSS files from which the styleguide is generated.  The styleguide-template directory contains the template or 'skin' of the styleguide.  The Styleguide itself will be output to the 'styleguide' directory; open the base 'index.html' file in your browser to view the styleguide.


Note:  Working on automating with Grunt, but current grunt-kss implementation out of date.  For now simply use above command.
