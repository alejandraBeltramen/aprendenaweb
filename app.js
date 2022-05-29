function myFunction () {
    var element = document.getElementsByTagName("body")[0];
    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', 'https://go.hotmart.com/J63295061I?ap=5c3a');
    iframe.setAttribute('height', '100%');
    iframe.setAttribute('width', '100%');
    iframe.setAttribute('noresize', 'noresize');
    element.appendChild(iframe);
}


window.document.ready(myFunction());