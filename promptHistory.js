const tocSelector = ".bg-token-message-surface";
let toc = [];

const getToc = () => {
    toc = document.querySelectorAll(tocSelector) || [];
    if (!toc.length) {
        console.warn("There is no TOC");
        return;
    }
}

const showToc = () => {
    getToc();
    for (const [i, it] of toc.entries()) {
        console.log(`${i}: ${it.innerText}`);
    }
}

// Goto question specified:
const goToc = (n) => toc[n].scrollIntoView();

const printToc = (clipboard = false) => {
    let s, str = "";
    getToc();
    for (const [i, it] of toc.entries()) {
        s = `# Q. ${i + 1}: ${it.innerText}\n\n# A. \n\n---\n`;
        console.log(s);
        if (clipboard) {
            str += s;
        }
    }
    if (clipboard) {
        if (confirm("Copy to clipboard?") && navigator.clipboard.writeText(str)) {
            alert("Copied to clipboard");
        }
    } else {
        alert(str);
    }
}
const clearToc = () => {
    toc = [];
    console.log("TOC cleared");
}

const getTocLength = () => toc.length;
