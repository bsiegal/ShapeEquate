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

/**
 * Just a for ShapeEquate.pjs
 * to define functions on, to
 * be accessible by standard JavaScript
 */
var ShapeEquate = {
    canvasFocus: function() {
        /*
         * This is the only way I know right now
         * how to force the canvas to refresh.
         * Otherwise, pressing New total or Clear pan
         * buttons will not show the new total or cleared pan
         * until you click into the canvas or implement
         * onMouseMove and move the mouse a little
         */

        var code = (function func1() {
            var result;
            
            $.ajax({
                type: "GET",
                url: 'js/ShapeEquate.pjs',
                async: false,
                processData: false,
                dataType: 'html',
                success: function(data){
                    result = data;
                }
            });
            
            return result;
        })();
        
        /*
         * Note the ShapeEquate.scope
         * is defined in ShapeEquate.pjs
         */
        var canvas = ShapeEquate.scope.view.canvas;
        ShapeEquate.scope.clear();
        ShapeEquate.scope.setup(canvas);
        ShapeEquate.scope.evaluate(code);        
    }
    
};


