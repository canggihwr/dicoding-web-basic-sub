
let index = [1, 1];
let slide_id = ["slides", "slides1"];
let bullet_id = ["bullets", "bullets1"];
show_slide(1, 0);
show_slide(1, 1);

function next_slide(x, id) {
    show_slide((index[id] += x), id);
}

function show_slide(x, id) {
    let i;
    let slide = document.getElementsByClassName(slide_id[id]);
    let bullets = document.getElementsByClassName(bullet_id[id]);

    if (x > slide.length) {
        index[id] = 1;
    }

    if (x < 1) {
        index[id] = slide.length;
    }

    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }

    for (i = 0; i < bullets.length; i++) {
        bullets[i].className = bullets[i].className.replace(" active", "");
    }

    slide[index[id] - 1].style.display = "block";
    bullets[index[id] - 1].className += " active";
}