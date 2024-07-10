let title_code = document.querySelector('.text-style-code');
let name_code = "Code";
let index_code = 0;

const typeWriterCode = () => {
    let new_title = name_code.slice(0, index_code);
    title_code.innerText = new_title;

    if (index_code > name_code.length) {
        index_code = 0;
    } else {
        index_code++;
    }

    setTimeout(typeWriterCode, 700);
}

typeWriterCode();



