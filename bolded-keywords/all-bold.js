for (var i = 0; i < 1; i++) {

    const modal = function() {
        var overlay_div, modal_div;

        function page_height() {
            if (window.innerHeight && window.scrollMaxY) { return window.innerHeight + window.scrollMaxY; } else if (document.body.scrollHeight > document.body.offsetHeight) { return document.body.scrollHeight; } else { return document.body.offsetHeight + document.body.offsetTop; }
        }

        function close() {
            document.body.removeChild(overlay_div);
            document.body.removeChild(modal_div);
            return false;
        }

        function open(html) {
            overlay_div = document.createElement('DIV');
            overlay_div.style.cssText = "position: absolute; top: 0%; left: 0%; width: 100%; height: " + page_height() + "px; background-color: black; z-index:1001; -moz-opacity: 0.8; opacity:.80; filter: alpha(opacity=80);";
            document.body.appendChild(overlay_div);
            modal_div = document.createElement('DIV');
            modal_div.style.cssText = "position: absolute; top: 25%; left: 25%; width: 50%; height: 50%; padding: 0px; border: 2px solid #666; background-color: #fff; z-index:1002; overflow: auto; padding: 12px 2px 2px 2px;";
            modal_div.innerHTML = html;
            document.body.appendChild(modal_div);
            var a = document.createElement('A');
            a.innerHTML = 'X';
            a.setAttribute('href', '#');
            a.style.cssText = 'display:block; color: #000; background:#ccc; text-decoration: none; font-size: 30px; height: 45px; padding: 0px 3px 3px 3px; border: 1px solid #000';
            a.onclick = close;
            var x = document.createElement('DIV');
            x.appendChild(a);
            x.style.cssText = "position: absolute; right: 1px; top: 1px;";
            modal_div.appendChild(x);
            window.scrollTo(0, 0);
        }
        return { open: open, close: close };
    };

    let unique = [];
    const em = document.getElementsByTagName('em');
    const b = document.getElementsByTagName('b');
    const strong = document.getElementsByTagName('strong');
    for (const s of em) unique.push(s.textContent.trim().toLowerCase());
    for (const s of b) unique.push(s.textContent.trim().toLowerCase());
    for (const s of strong) unique.push(s.textContent.trim().toLowerCase());
    unique = unique.filter((value, index, self) => self.indexOf(value) === index);

    const m = new modal();
    m.open(`<p>${unique.join('</br>')}</p>`);
}