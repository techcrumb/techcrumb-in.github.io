(function (t, i, s, a) {
    var c = 'script', src = 'https://tc-vai.web.app', E = window, m = document;
    try {
        m = E.top.document || m; E = E.top.document ? E.top : E;
    } catch (e) {}
    if (E.tcVideoRendered) {
        console.log('tc ad already rendered hence going to skip tc video');
        return;
    }
    E[t] = E[t] || {};
    var b = m.getElementsByTagName(c)[0];
    var se = m.createElement(c);
    E[t].i = i;
    E[t].a = a;
    E[t].s = s;
    E[t].src = src;
    se.async = 1;
    se.src = src + "/tc-initForm.js";
    b.parentNode.insertBefore(se, b)
    function getMobileSlot() {
        var slot = '.story-div.full-article > p';
        return m.querySelectorAll(slot)[1];
    }
    if(!m.getElementById(i.adSlot)) {
        var slot = '', slotEle = '';
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          slotEle = getMobileSlot();
        }else{
            slot = '.artical-description > p';
            slotEle = m.querySelectorAll(slot)[1];
            if (!slotEle) {
                slotEle = getMobileSlot();
            }
        }
        var newElement = m.createElement('div');
        newElement.id = 'tcpubslot';
        newElement.style.margin = 'auto';
        slotEle.parentNode.insertBefore(newElement, slotEle.nextSibling);
    }
})("tcEmbed", {
    ed: "jCsxHFDKTlmnRFXDB49wP6eyGA8zqZUuYZWd0IlpYVtl+cDrrzokaToijBolaV4zZ3t37SpuY3HvAf5A1k+F0Q==",
    pId: "",
    s: 0,
    logo: {url: "", cta: ""},
    adSlot: 'tcpubslot',
    waitTime: .1
}, 3);
