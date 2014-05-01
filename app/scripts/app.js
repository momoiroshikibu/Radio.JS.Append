/*global define */
define(['jquery'], function ($) {
    'use strict';

    // "1件追加ボタンの押下イベント
    $('#add_color_button').on('click', function() {
        $('#radio_wrapper_color').append('<label><input type="radio" name="color">Pink</input></label>');
    });


    // 全件追加ボタンの押下イベント
    $('#add_animal_button').on('click', function() {

        var $radioWrapperAnimal = $('#radio_wrapper_animal');

        // 既にinputが存在する場合は削除
        $radioWrapperAnimal.empty();

        // 動物のradio項目を追加
        var animals = ['Dog', 'Cat', 'Bird'];
        animals.forEach(function(animal) {
            $radioWrapperAnimal.append('<label><input type="radio" name="animal">' + animal + '</input></label>');
        });
    });

});