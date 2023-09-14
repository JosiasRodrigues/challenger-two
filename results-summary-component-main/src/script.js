document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch("../repositories/data.json");
        console.log('response :>> ', response);
        const data = await response.json();
        console.log('data :>> ', data);
        if (data) {

            const { header } = data;

           

            for (const key in header) {
                console.log('key :>> ', key);
                const valueChildren = document.getElementById(`${key}`);
                valueChildren.textContent = header[key]; //header.zezinho2
            }



        }
    } catch (error) {
        console.log(erro);
    }

});