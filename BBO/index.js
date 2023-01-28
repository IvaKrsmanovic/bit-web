function welcomeMessage() {console.log('Hello World!')} ;
welcomeMessage();

// window.navigator
// Create a function that prints out in the console the following information
// the platform on which the browser is running
// the information about the browser version
// the company that created that browser
// Each piece of information should be printed out in a new row.

function browserInfo() {
    var nVer = navigator.appVersion;
    var nAgt = navigator.userAgent;
    var browserName  = navigator.appName;
    var fullVersion  = ''+parseFloat(navigator.appVersion); 
    var majorVersion = parseInt(navigator.appVersion,10);
    var nameOffset,verOffset,ix;
    
    // In Opera, the true version is after "Opera" or after "Version"
    if ((verOffset=nAgt.indexOf("Opera"))!=-1) {
     browserName = "Opera";
     fullVersion = nAgt.substring(verOffset+6);
     if ((verOffset=nAgt.indexOf("Version"))!=-1) 
       fullVersion = nAgt.substring(verOffset+8);
    }
    // In MSIE, the true version is after "MSIE" in userAgent
    else if ((verOffset=nAgt.indexOf("MSIE"))!=-1) {
     browserName = "Microsoft Internet Explorer";
     fullVersion = nAgt.substring(verOffset+5);
    }
    // In Chrome, the true version is after "Chrome" 
    else if ((verOffset=nAgt.indexOf("Chrome"))!=-1) {
     browserName = "Chrome";
     fullVersion = nAgt.substring(verOffset+7);
    }
    // In Safari, the true version is after "Safari" or after "Version" 
    else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
     browserName = "Safari";
     fullVersion = nAgt.substring(verOffset+7);
     if ((verOffset=nAgt.indexOf("Version"))!=-1) 
       fullVersion = nAgt.substring(verOffset+8);
    }
    // In Firefox, the true version is after "Firefox" 
    else if ((verOffset=nAgt.indexOf("Firefox"))!=-1) {
     browserName = "Firefox";
     fullVersion = nAgt.substring(verOffset+8);
    }
    // In most other browsers, "name/version" is at the end of userAgent 
    else if ( (nameOffset=nAgt.lastIndexOf(' ')+1) < 
              (verOffset=nAgt.lastIndexOf('/')) ) 
    {
     browserName = nAgt.substring(nameOffset,verOffset);
     fullVersion = nAgt.substring(verOffset+1);
     if (browserName.toLowerCase()==browserName.toUpperCase()) {
      browserName = navigator.appName;
     }
    }
    // trim the fullVersion string at semicolon/space if present
    if ((ix=fullVersion.indexOf(";"))!=-1)
       fullVersion=fullVersion.substring(0,ix);
    if ((ix=fullVersion.indexOf(" "))!=-1)
       fullVersion=fullVersion.substring(0,ix);
    
    majorVersion = parseInt(''+fullVersion,10);
    if (isNaN(majorVersion)) {
     fullVersion  = ''+parseFloat(navigator.appVersion); 
     majorVersion = parseInt(navigator.appVersion,10);
    }
    
    console.log(''
     +'Browser name  = '+browserName+'<br>'
     +'Full version  = '+fullVersion+'<br>'
     +'Major version = '+majorVersion+'<br>'
     +'navigator.appName = '+navigator.appName+'<br>'
     +'navigator.userAgent = '+navigator.userAgent+'<br>'
    )    
}

browserInfo();

// Create new “isOnline” function that checks if the browser is online.
// It should print out “online” when the browser is online and “offline” when there is no Internet connection.

function isOnline() {
    var status;
    if (window.navigator.onLine == true) {
        status = 'online';
    } else {
        status = 'offline'
    }

    console.log(status);
}

isOnline();

// window.screen
// Create a function that prints out the following information in the console:
// current browser width and height
// max possible browser height

function screenInfo () {
    console.log(   
    `Max possible browser height: ${window.screen.availHeight}
Max possible browser width: ${window.screen.availWidth}
Current height: ${window.screen.height}
Current width: ${window.screen.width}`
    )
}

screenInfo();

// window.location
// Write a function that prints out website’s url information in the console:
// full url address
// domain name
// used protocol
// parameters which are part of URL.

function urlInfo () {
    console.log(
        `Full URL address: ${window.location.href}
Domain name: ${window.location.hostname}
Used protocol: ${window.location.protocol}`
    )
}

urlInfo();

// Create a function for reloading the page.
// Create a function that redirects you to a website address passed to it.
// Test all three functions

function redirect(address) {
    window.location.assign(address);
}

function reload() {
    window.location.reload();
}

// Create a function that stores passed data in the browser local storage.
// Create a function that reads the stored data, and print it out in console.
// If there is no data, print "There is no data" in the console.
// Create a function that removes data from the local storage.


function fillStorage (key, value){
    localStorage.setItem(key, value)
}

function readStorage (key) {
    if (localStorage.length == 0) {
        window.alert('There is no data in storage')
    } else {
        window.alert(`the font used is ${localStorage.getItem(key)}`)
    }
}

function clearStorage () {
    localStorage.clear();
}

// Create a function that shows the user a greeting message using alert
// Then a question is presented to the user using prompt
// When the user provides the answer, that answer is used in the confirm dialog
// The format of the message in the dialog should be: "We will submit this answer now! " + the answer
// If the user clicks OK, show alert with success message
// If the user clicks Cancel, don't show anything

function kneel () {
    window.alert ('Greetings peasant!');
    var userInput = window.prompt('Will you bow to the king?');
    var userChoice = window.confirm(`We will submit this answer now: ${userInput}`)
    if (userChoice == true) {
        window.alert(`You shall be spared!`)
    }
}

kneel()
    
// Math

// Random
// Create a function that builds an array of 10 random numbers between 1 and 50.
// The function prints that array out in the console and then returns it.

function makeArrayTo50 () {
    var newArray = [];
    for (var i = 0; i < 10; i++) {
        var randNum =  Math.floor(Math.random() * 50) + 1;
        newArray.push(randNum);
      }

      return newArray;
}

console.log(makeArrayTo50());

// Round
// Create a function that uses the passed array of numbers and rounds all its elements to two decimals.
// Print out the modified array in the console.
// Use the first function for generating the input array.

function makeArray () {
    var newArray = [];
    for (var i = 0; i < 10; i++) {
        var randNum =  Math.random()*50;
        newArray.push(randNum);
      }

      return newArray
}

function roundArrayTo50 (array) {
    var returnArray = [];
    for (var i = 0; i<array.length; i++) {
        var newNum = array[i].toFixed(2);
        returnArray.push(newNum);
    }

    return returnArray;
}

console.log(roundArrayTo50(makeArray()));

// Floor
// Create a function that uses the passed array of numbers and rounds all its elements to the nearest integer.
// Print out the modified array in the console.
// Use the first function for generating the input array.
        
// Max
// Create a function that finds and prints out the biggest element in the passed array of numbers.
    
// Date
    
// Print out the whole date object in the console.
// Print out the current time in the console.
// Print out the current date in the console.
