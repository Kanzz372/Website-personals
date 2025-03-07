var tombolMenu = document.getElementsByClassName('tombol-menu')[0];
var menu = document.getElementsByClassName('menu')[0];

tombolMenu.onclick = function() {
    menu.classList.toggle('active');
}

menu.onclick = function() {<script src="script.js" defer></script>
    menu.classList.toggle('active');<a href="#" class="tombol-menu">
    <span class="garis"></span>
    <span class="garis"></span>
    <span class="garis"></span>
</a>
}