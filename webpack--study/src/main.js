import $ from 'jquery'
import "../css/index.css"
import "../css/test.less"
import "../css/test.scss"
$(function(){
    $('ul li:odd').css('backgroundColor','orange')
    $('ul li:even').css('backgroundColor','hotpink')
})