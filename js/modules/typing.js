export default function initTyping() {
    let letter = 0;
    const text = '  Vitória Gabriele';

    function typeWriter() {
        if(letter < text.length) {
            document.querySelector(".principal__sentence").innerHTML += text.charAt(letter);
            letter++;
            setTimeout(typeWriter, 180)
        }
    }

    typeWriter();
}
