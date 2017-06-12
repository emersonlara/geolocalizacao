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
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);   
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
   

    onDeviceReady: function() {
        //navigator.geolocation.getCurrentPosition(app.onSuccess, app.onError);
        //navigator.geolocation.watchPosition(app.onSuccess, app.onError, { timeout: 30000 });
            
        cordova.dialogGPS("Seu GPS está desabilitado, este aplicativo precisa ser habilitado para funcionar.",
            "Use GPS, com wifi ou 3G",function(buttonIndex) {
                switch(buttonIndex){
                    case 0: break;
                    case 1: break;
                    case 2: break;
                }
            }, "Ligue o GPS", ["Cancelar", "Mais Tarde", "Ligar"]);
        navigator.geolocation.getCurrentPosition(app.onSuccess, app.onError);
    },
 
    // calldialog: function(){
    //     document.addEventListener("deviceready",function() {
    //         cordova.dialogGPS("Seu GPS está desabilitado, este aplicativo precisa ser habilitado para funcionar.",//message
    //                 "Use GPS, com wifi ou 3G.",//description
    //                 function(buttonIndex){//callback
    //                   switch(buttonIndex) {
    //                     case 0: break;//cancel
    //                     case 1: break;//neutro option
    //                     case 2: break;//user go to configuration
    //                   }},
    //                   "Please Turn on GPS",//title
    //                   ["Cancel","Later","Go"]);//buttons
    //     });
    // }


    // showAlert: function(){
    //     function alertMensagem(){
    //         alert('Usuário clicou no botão ok');
    //     }

    //     navigator.notification.alert(
    //         'aqui e a mensagem do alerta',
    //         alertMensagem, //callback
    //         'aqui fica o titulo',
    //         'Ok'
    //     );
    // },

    onSuccess: function(position){

        var longitude = position.coords.longitude;
        var latitude = position.coords.latitude;
        var latLong = new google.maps.LatLng(latitude, longitude);

        var mapOptions = {
            center: latLong,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };

        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    
        var marker = new google.maps.Marker({
              position: latLong,
              map: map,
              title: 'Minha localização'
          });
    },
  
    onError: function(error){
    //    //document.getElementById("map").innerHTML = error.code;
         alert("cod erro " + error.code+"mensagem: " + error.message);
    //    // calldialog();
    //    //console.log(error.code);
    }

};