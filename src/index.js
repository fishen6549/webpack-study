import $ from 'jquery'
import './css/1.css'
import './css/1.less'
import './css/1.scss'
// import App from './components/App.vue'

$(function () {
    $('li:odd').css('backgroundColor', 'yellow');
    $('li:even').css('backgroundColor', 'lightblue');
});

class Person {
    static info = 'tom';
}

console.log(Person.info);

//--------------------------

import Vue from 'vue'
import App from './components/App.vue'

const vm = new Vue({
    el: '#app',
    render: h => h(App)

});

