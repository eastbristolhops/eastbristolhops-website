// This function takes the page_from and converts it to a global variable
var globalpagename;
function passedpage(page_from){
    console.log('here');
    window.globalpagename = page_from;
    console.log(page_from);
}


function backbut(){
    if (globalpagename == 'about'){
        window.location.replace('about.html');
    }
    else if (globalpagename == 'index'){
        window.location.replace('index.html');
    }
    else if (globalpagename == 'contact'){
        window.location.replace('contact.html');
    }
    else if (globalpagename == 'subscribe'){
        window.location.replace('subscribe.html');
    }
    else if (globalpagename == 'None'){
        window.location.replace('index.html');
    }
}