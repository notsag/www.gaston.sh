var bold = function(text){
    return "[[g;#EEEEEE;]" + text + "]";
}

var App = {
    motd: function(){
        return "#################################################################################\n"+
	    "#[[b;#0066C8;]\t __  __            _                   ____    _    ____ _____ ___  _   _ ]  #\n"+
 	    "#[[b;#0066C8;]\t|  \\/  | __ ___  _(_)_ __ ___   ___   / ___|  / \\  / ___|_   _/ _ \\| \\ | |]  #\n"+
 	    "#[[b;#0066C8;]\t| |\\/| |/ _` \\ \\/ / | '_ ` _ \\ / _ \\ | |  _  / _ \\ \\___ \\ | || | | |  \\| |]  #\n"+
 	    "#[[b;#0066C8;]\t| |  | | (_| |>  <| | | | | | |  __/ | |_| |/ ___ \\ ___) || || |_| | |\\  |]  #\n"+
 	    "#[[b;#0066C8;]\t|_|  |_|\\__,_/_/\\_\\_|_| |_| |_|\\___|  \\____/_/   \\_\\____/ |_| \\___/|_| \\_|]  #\n"+
            "#\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#\n"+
            "#\tHi, I'm " + bold('Maxime GASTON') + " - DevOps in Paris, France.\t\t\t\t\t\t\t#\n"+
            "#\tPlease type " + bold('about') + " for my resume or " + bold('help') + " for a list of commands.\t\t\t\t#\n"+
            "#\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t#\n"+
            "#################################################################################\n";
    },

    help: function(){
        this.echo("|  " + bold("whoami") + "            - My *quick* Resume");
        this.echo("|  " + bold("about") + "             - My Resume");
        this.echo("|  " + bold("skills") + "            - What I can do");
        this.echo("|  " + bold("experience") + "        - Where I worked");
        this.echo("|  " + bold("education") + "         - Where I learned");
        this.echo("|  " + bold("volunteering") + "      - My volunteering work");
        this.echo("|  " + bold("hobbies") + "           - What I like");
        this.echo("|");
        this.echo("|  " + bold("social") + "            - How I connect for work things");
        this.echo("|  " + bold("contact") + "           - Contact me")
        this.echo("|  " + bold("credits") + "           - Credits for this website");
        this.echo("|");
        this.echo("|  " + bold("clear") + "             - Clear the screen");
    },

    social: function(){
        this.echo("|  " + bold('Linkedin:') + "         https://www.linkedin.com/in/maximegaston/");
        this.echo("|  " + bold('Twitter:') + "          https://twitter.com/n0tsag");
        this.echo("|  " + bold('Facebook:') + "         https://www.facebook.com/emixam.notsag");
    },

    contact: function(){
        this.echo("|  " + bold("Email") + ":            maxime@gaston.sh");
    },

    whoami: function(){
        this.echo("|  " + bold('Name:') + "             " + bold('Maxime GASTON'));
        this.echo("|  " + bold('DoB:') + "              30/01/1990");
        this.echo("|  " + bold('Location:') + "         Paris, France");
        this.echo("|");
        this.echo("|  "+ bold('Vocation:') + "         I am a " + bold("Linux admin") + ", " + bold("DevOps") + " specialist and " + bold("Open Source") + " enthusiast.");
        this.echo("|                    I have a strong experience of  " + bold('over 7 years.') + " working with " + bold("Linux") + " environments on different scales.");
        this.echo("|");
        this.echo("|  " + bold('Employment:') + "       I am currently " + bold("SRE") + " at " + bold("LesFurets.com") + ", but am always open to interesting opporunities of all kinds.");
	this.echo("|                    Get in touch if you'd like to discuss a proposal!");
    },

    skills: function(){
        this.echo("|  " + bold('OS'));
        this.echo("|  " + bold('Linux'));
        this.echo("|  " + bold('RHEL/CentOS') + "       ##[[g;#00DE12;]#################################################]  ##");
        this.echo("|  " + bold('Debian/Ubuntu') + "     ##[[g;#42D100;]###############################################]    ##");
        this.echo("|  " + bold('Other'));
        this.echo("|  " + bold('MacOS X') + "           ##[[g;#B2D100;]#######################################]            ##");
        this.echo("|  " + bold('Windows') + "           ##[[g;#D1B900;]##########################]                         ##");
        this.echo("|");
        this.echo("|  " + bold("Programming"));
        this.echo("|  " + bold('Python') + "            ##[[g;#42D100;]###############################################]    ##");
        this.echo("|  " + bold('Bash') + "              ##[[g;#42D100;]###############################################]    ##");
        this.echo("|  " + bold('Perl') + "              ##[[g;#D1B900;]##########################]                         ##");
        this.echo("|  " + bold('Java') + "              ##[[g;#D15900;]####################]                               ##");
        this.echo("|  " + bold('C++/C#') + "            ##[[g;#D93F00;]#########]                                          ##");
        this.echo("|");
        this.echo("|  " + bold("CI/CD"));
        this.echo("|  " + bold('Ansible') + "           ##[[g;#5BD100;]############################################]       ##");
        this.echo("|  " + bold('Git') + "               ##[[g;#82C500;]###################################]                ##");
        this.echo("|  " + bold('Docker') + "            ##[[g;#82C500;]###################################]                ##");
        this.echo("|  " + bold('Jenkins') + "           ##[[g;#B0C100;]###############################]                    ##");
        this.echo("|  " + bold('Chef') + "              ##[[g;#D93F00;]#########]                                          ##");
        this.echo("|  " + bold('Puppet') + "            ##[[g;#D93F00;]#########]                                          ##");
    },

    experience: function(){
        this.echo("|  " + bold('Since 2018:       Site Reliability Engineer - LesFurets.com'));
        this.echo("|  " + bold('2015 - 2018:      Linux System Administrator - Ubisoft'));
        this.echo("|  " + bold('2014 - 2015:      Linux System Engineer - Universit\u00e9  Paris Dauphine'));
        this.echo("|  " + bold('2011 - 2014:      Linux System Administrator - Videomusem'));
        this.echo("|  " + bold('2010 - 2011:      Developer - Soitec Specialty Electronics'));
    },

    volunteering: function(){
        this.echo("|  " + bold('Since 2011:       First Aid worker - French Red Cross'));
        this.echo("|  " + bold('Since 2012:       First Aid instructor - French Red Cross'));
        this.echo("|  " + bold('2012 - 2013:      Operational Cover Manager - French Red Cross'));
    },

    education: function(){
        this.echo("|  " + bold('2011 - 2014:      Engineer Degree - EFREI'));
        this.echo("|  " + bold('2009 - 2011:      DUT Informatique - Universit\u00e9  Paris Sud'));
        this.echo("|  " + bold('2008 - 2009:      Baccalaur\u00e9at S - Lyc\u00e9e J.B. Corot'));
    },

    hobbies: function(){
        this.echo("|  " + bold('Running:') + "          10km, half marathon, marathon, spartan race...");
        this.echo("|  " + bold('Gym:') + "              Crossfit, strengh training");
        this.echo("|  " + bold('Music:') + "            From classical to heavy metal");
        this.echo("|  " + bold('Reading:') + "          Fantasy, thrillers, sci/fi");
        this.echo("|  " + bold('First Aid:') + "        Team First Aid level 2 and Civic First Aid Instructor");
    },

    about: function(){
	this.exec('clear');
	this.exec('whoami');
	this.exec('skills');
	this.exec('experience');
	this.exec('education');
	this.exec('volunteering');
	this.exec('hobbies');
    },

    credits: function(){
        this.echo("|  Site built by " + bold('Maxime GASTON'));
        this.echo("|  Using " + bold('Jquery Terminal Emulator') + " by " + bold('Jakub Jankiewicz') + ": http://terminal.jcubic.pl");
        this.echo("|  Powered by [[b;#4682B4;]CentOS 7] and [[b;#32CD32;]Nginx]");
        this.echo("|  Background is " + bold('I see stars') + " from [[b;#4682B4;]Fedora 30 extras]");
    },

    ls: function(){
        this.exec('help');
    }
}
