const Display = document.getElementById("display");
let key;

function appendToDisplay(str){
    Display.value += str;
}

function clearDisplay(){
    Display.value = "";
}

function execute(){
    const exp = Display.value;
    
    try {
        Display.value = eval(exp);
    } 
    
    catch (error) {
        Display.value = "ERROR";
    }
}

document.addEventListener("keydown", (e) => {

    switch (e.key) {

        case '0':
            key = document.getElementById("b0");
            Keypress(key);
            break;

        case '1':
            key = document.getElementById("b1");
            Keypress(key);
            break;

        case '2':
            key = document.getElementById("b2");
            Keypress(key);
            break;

        case '3':
            key = document.getElementById("b3");
            Keypress(key);
            break;

        case '4':
            key = document.getElementById("b4");
            Keypress(key);
            break;

        case '5':
            key = document.getElementById("b5");
            Keypress(key);
            break;

        case '6':
            key = document.getElementById("b6");
            Keypress(key);
            break;

        case '7':
            key = document.getElementById("b7");
            Keypress(key);
            break;

        case '8':
            key = document.getElementById("b8");
            Keypress(key);
            break;

        case '9':
            key = document.getElementById("b9");
            Keypress(key);
            break;

        case '+':
            key = document.getElementById("bplus");
            Keypress(key);
            break;

        case '-':
            key = document.getElementById("bminus");
            Keypress(key);
            break;

        case '/':
            key = document.getElementById("bslash");
            Keypress(key);
            break;

        case '*':
            key = document.getElementById("bstar");
            Keypress(key);
            break;

        case 'Enter':
            key = document.getElementById("executeBtn");
            Keypress(key);
            break;

        case 'Delete':
            key = document.getElementById("clearBtn");
            Keypress(key);
            break;

        default:
            break;
    }
})

function Keypress(keyx) {
    keyx.classList.add('active');
    keyx.click();
    setTimeout(() => {
        keyx.classList.remove('active');
    }, 100)
}