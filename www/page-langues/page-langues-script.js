const langFR = {title: 'Titre', subTitle:'sous titre'}
const langEN = {title: 'Title', subTitle:'sub title'}
const langSP = {title: 'Titulo', subTitle:'sub titulo'}

document.getElementById('language-info').innerHTML = navigator.language;


setLanguageForMobile();
const navLang = navigator.language
switch (navLang){
    case 'fr-FR':
        setFrenchLanguage();
        break;
    case 'en-GB':
        setEnglishLanguage();
        break;
    case 'en-US':
        setEnglishLanguage();
        break;
    default:
        setSpanishLanguage();
}

document.getElementById("set-french").addEventListener("click", ()=>setLanguage(langFR));
document.getElementById("set-english").addEventListener("click", setEnglishLanguage);
document.getElementById("set-spanish").addEventListener("click", setSpanishLanguage);
document.getElementById("btn-log").addEventListener("click", ()=>{console.log(document.getElementById("txt-input").value)});

function setEnglishLanguage(){
    console.log("setting english")
    setLanguage(langEN);
}
function setFrenchLanguage(){
    console.log("setting french")
    setLanguage(langFR);
}
function setSpanishLanguage(){
    console.log("setting spanish")
    setLanguage(langSP);
}

function setLanguage(language){
    document.title = language.title;
    document.getElementById("main-title").innerHTML = language.subTitle;
}

function setLanguageForMobile(){

    document.addEventListener('deviceready', onDeviceReady, false);
    function onDeviceReady(){
        navigator.globalization.getPreferredLanguage(
            (language)=>{
                console.log("language device is:");
                console.log(language);
                document.getElementById('language-info').innerHTML = language;
                document.getElementById("device-lang").innerHTML = language.value;
            },
            ()=>console.log("error while retrieving language"));
    }

}