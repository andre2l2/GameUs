function renderPoint(is) {
    const $poit1 = document.querySelector('div.poit div.p1');
    const $poit2 = document.querySelector('div.poit div.p2');

    if (is == 1) {

        points1 += 1;

        $poit1.innerHTML = `<span>${points1}</span>`;
    }

    else if (is == 2) {

        points2 += 1;

        $poit2.innerHTML = `<span>${points2}</span>`;
    }

    else {
        $poit1.innerHTML = `<span>${points1}</span>`;
        $poit2.innerHTML = `<span>${points2}</span>`;
    }
}