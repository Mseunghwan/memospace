const faces = ["😊","🐸","😂","🐲","👽","👻","💩","❤","🤓","🦋","😍","🙉","🤣","🙏","😸","🥴","💕","🤯","😭","🔥","😘","👍","🥰","😎","😆","😁","😉","🌸","🤔","💙","😋","🎉"]


const facelinks = document.querySelector("h1#faces");
const thisface = faces[Math.floor(Math.random() * faces.length)];
facelinks.innerHTML = thisface;