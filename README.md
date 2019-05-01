# www.gaston.sh

My personal website sources

## Howto

### Install

Clone the project to the webserver and use __Ansible__ :

```
ansible-playbook -b --ask-become-pass -i hosts install.yml
```

You can edit the website_name, email and install_dir vars to match your own setup.

Tested on CentOS 7.

### Make my own website like this

If you want to use this project to make your own resume webpage, just edit the __src/js/resume.js__ and adapt the content with your own resume.

## Credits

- This website is built usingsing __Jquery Terminal Emulator__ by __Jakub Jankiewicz__ : http://terminal.jcubic.pl
- Background is __I see stars__ + from __Fedora 30 extras__ : https://github.com/fedoradesign/backgrounds/tree/master/extras
