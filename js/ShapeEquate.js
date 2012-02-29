/******************************************************************************* 
 * 
 * Copyright 2012 Bess Siegal
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 ******************************************************************************/

var ShapeEquate = {
    level: 0, /* default level */
    
    draw: function() {
        var view = ShapeEquate.scope.view;
        view.draw();
    },
    
    setLevel: function() {
        var e = document.getElementById('level');
        var lev = e.options[e.selectedIndex].value;
        ShapeEquate.level = parseInt(lev);
        ShapeEquate.newTotal(); //defined by ShapeEquate.pjs
    },
    
    playSound: function(file) {
        var soundHandle = document.getElementById('soundHandle');
        if (soundHandle && soundHandle.play) {
            soundHandle.src = 'sounds/' + file;
            soundHandle.play();                   
        }
    },
    
    playHooray: function() {
        ShapeEquate.playSound('yipee.wav');
    },
 
    playOops: function() {
        ShapeEquate.playSound('peeeooop_x.wav');
    },
    
    playAdd: function() {
        ShapeEquate.playSound('chime_up.wav');
    },
    
    playRemove: function() {
        ShapeEquate.playSound('chime_down.wav');
    },
    
    playInvalid: function() {
        ShapeEquate.playSound('blip.wav');
    }
    
};