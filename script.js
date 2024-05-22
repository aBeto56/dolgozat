document.addEventListener('DOMContentLoaded', function () {
    // element-one: Dupla kattintásra hozzáad egy "animation" class-t kattintáskor
    const elementOne = document.getElementById('element-one');
    document.getElementById('element-one').ondblclick=function(){
        document.getElementById('element-one').classList.add("animation")
    }

    // element-two: Ha rámegy az egér, hozzáad egy box-shadow-t
    const elementTwo = document.getElementById('element-two');
    document.getElementById('element-two').onmouseover=function(){
        document.getElementById('element-two').style.boxShadow = "10px 20px 30px blue"
    }

    // element-three: Kattintásra eltűnik
    const elementThree = document.getElementById('element-three');
    document.getElementById('element-three').onclick=function(){
        document.getElementById('element-three').style.opacity=0
    }

    // element-four: Kattintásra a háttere zöld lesz
    const elementFour = document.getElementById('element-four');
    document.getElementById('element-four').onclick=function(){
        document.getElementById('element-four').style.backgroundColor="green"
    }
    
});