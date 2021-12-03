import {supportedLangs} from "./languages/supported-lang";
//const supportedLangs = require('./languages/supported-lang.js');
//import {set} from "cordova-android/cordova-js-src/android/nativeapiprovider";

document.getElementById('language-info').innerHTML = navigator.language;

setLanguageForMobile();
const navLang = navigator.language
setLanguage(navLang)

function setLanguage(lang){
    supportedLangs.forEach((suppLanguage)=>{
        if (suppLanguage.key === lang){
            applyLanguage(suppLanguage.value)
        }
    })
}


//todo ceci n'est pas juste supportedLang['fr-FR'];
document.getElementById("set-french").addEventListener("click", ()=>setLanguage('fr-FR'));
document.getElementById("set-english").addEventListener("click", ()=>setLanguage('en-US'));
document.getElementById("set-spanish").addEventListener("click", ()=>setLanguage('es'));
document.getElementById("set-italian").addEventListener("click", ()=>setLanguage('it'));
document.getElementById("btn-log").addEventListener("click", ()=>{console.log(document.getElementById("txt-input").value)});


function applyLanguage(language){
    document.title = language.title;
    document.getElementById("main-title").innerHTML = language.subTitle;
}

function setLanguageForMobile(){
    document.addEventListener('deviceready', onDeviceReady, false);
    function onDeviceReady(){
        navigator.globalization.getPreferredLanguage(
            (language)=>{
                setLanguage(language);
                document.getElementById('language-info').innerHTML = language;
                document.getElementById("device-lang").innerHTML = language.value;
            },
            ()=>console.log("error while retrieving language"));
    }

}