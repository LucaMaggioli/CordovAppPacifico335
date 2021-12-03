/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

let nClicks = 0;
let spanCLick = document.getElementById("clickTimes");
spanCLick.innerHTML = nClicks;

document.getElementById("buttonClick").addEventListener("click", addClick);

function addClick(){
    nClicks +=1;
    spanCLick.innerHTML = nClicks;
}

//let username = document.cookie
let username;

function sendDataToPage(){
    name = document.getElementById("name").value;
    console.log(name);
    document.cookie = `username = ${name}`;
    window.location.href = 'ex4-cookie.html';
}

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
}

document.getElementById("btnDeleteCookie").addEventListener("click", deleteUsernameCookie);

function deleteUsernameCookie(){
    console.log()
    delete_cookie("username");
}

function delete_cookie( name ) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

function setUsernameEx4(){
    document.getElementById("userName").innerHTML = getCookie("username");
}