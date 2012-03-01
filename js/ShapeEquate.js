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
        if ((navigator.userAgent.match(/iPhone/i)) || 
                (navigator.userAgent.match(/iPod/i))) {
            /*
             * Sound is too slow on iPad.
             * From https://developer.apple.com/library/safari/#documentation/AudioVideo/Conceptual/Using_HTML5_Audio_Video/ControllingMediaWithJavaScript/ControllingMediaWithJavaScript.html --
             * Note: On the iPad, Safari does not begin downloading until the user clicks the poster or placeholder. 
             * Currently, downloads begun in this manner do not emit progress events.
             * 
             * So we will not play sounds if the userAgent is iPad.
             */
            return;
        }
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
