document.addEventListener('DOMContentLoaded', function () {
    const line1 = '끊임없이 성장하는 퍼블리셔';
    const line2 = 'Yurin PORTFOLIO';
    const typingSpeed = 100;
    let currentIndex = 0;
    let currentLine = 1;
    let typingInterval;
    let line2Span;

    function typeWriter() {
        const textElement = document.getElementById('typewriter_text');
        const cursor = textElement.querySelector('.cursor');

        if (currentLine === 1) {
            if (currentIndex < line1.length) {
                const textNode = document.createTextNode(line1.charAt(currentIndex));
                textElement.insertBefore(textNode, cursor);
                currentIndex++;
            } else {
                const br = document.createElement('br');
                textElement.insertBefore(br, cursor);

                line2Span = document.createElement('span');
                line2Span.className = 'subtitle';
                textElement.insertBefore(line2Span, cursor);

                line2Span.appendChild(cursor);

                currentLine = 2;
                currentIndex = 0;
            }
        }

        else if (currentLine === 2) {
            if (currentIndex < line2.length) {
                const textNode = document.createTextNode(line2.charAt(currentIndex));
                line2Span.insertBefore(textNode, cursor);
                currentIndex++;
            } else {
                clearInterval(typingInterval);
                cursor.classList.add('blink');
            }
        }
    }

    typingInterval = setInterval(typeWriter, typingSpeed);

    let lastScrollTop = 0;
    const header = document.querySelector('header');
    let scrollThreshold = 100;

    window.addEventListener('scroll', function () {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > scrollThreshold) {
            if (scrollTop > lastScrollTop) {
                header.style.transform = 'translateY(-100%)';
            } else {
                header.style.transform = 'translateY(0)';
            }
        } else {
            header.style.transform = 'translateY(0)';
        }

        lastScrollTop = scrollTop;
    });

});