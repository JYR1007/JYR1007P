        const fullText = 'Yurin PORTFOLIO';
        const typingSpeed = 100;
        let currentIndex = 0;
        let typingInterval;

        function typeWriter() {
            const textElement = document.getElementById('typewriter_text');
            const cursor = textElement.querySelector('.cursor');
            
            if (currentIndex < fullText.length) {
                const textNode = document.createTextNode(fullText.charAt(currentIndex));
                textElement.insertBefore(textNode, cursor);
                currentIndex++;
            } else {
                clearInterval(typingInterval);
                cursor.classList.add('blink');
            }
        }

        function restartTyping() {
            clearInterval(typingInterval);
            currentIndex = 0;
            const textElement = document.getElementById('typewriter_text');
            textElement.innerHTML = '<span class="cursor"></span>';
            
            typingInterval = setInterval(typeWriter, typingSpeed);
        }

        window.onload = function() {
            typingInterval = setInterval(typeWriter, typingSpeed);
        };