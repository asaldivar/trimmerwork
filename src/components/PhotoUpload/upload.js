function upload(formData) {
    const photo = formData.get('image')

    const fReader = new FileReader()

    return new Promise((resolve, reject) => {
        const fReader = new FileReader()

        fReader.onload = () => {
            const img = document.createElement('img')
            img.src = fReader.result
            img.onload = function(){
                const imageURL = {
                    originalName: photo.name,
                    url: imgReduce(img)
                }
                resolve(imageURL)
            }
        }
        fReader.readAsDataURL(photo)
    })

}

function imgReduce(img) {
    const canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d");
    ctx.scale(0.5, 0.5);
    ctx.drawImage(img, 0, 0);
    return canvas.toDataURL("image/png", 0.5)
}
export { upload }