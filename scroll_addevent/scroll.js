let windowleft = document.getElementById('windowleft');
let windowright = document.getElementById('windowright');
let position = 0;

window.addEventListener('scroll', function(e) {
position = window.scrollY;
if(position > 156 || position < 233){
    windowleft.style.right = '300px';

    windowright.style.left = '150px';
    
}
});