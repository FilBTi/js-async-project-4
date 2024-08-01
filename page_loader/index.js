import axios from "axios";
import fs from "fs/promises";

const pageLoader = (url) => {
    const nameFile = url.replace('https://', '').replace(/[.*+?^${}()|[\]/]/g,'-');
    axios.get(url)
        .then(
            response => {
                fs.writeFile(`${nameFile}.html`, response.data)
                    .then(result => console.log(result))
                    .catch(error2 => console.log(error2))
            }
        )
        .catch(
            error => console.log(error)
        )

}

pageLoader('https://ru.hexlet.io/blog/posts/podklyuchaem-code-climate')