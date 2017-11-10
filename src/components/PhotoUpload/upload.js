function upload(formData) {
    const photo = formData.get('image')

    const fReader = new FileReader()

    return new Promise((resolve, reject) => {
        const fReader = new FileReader()

        fReader.onload = () => {
            const imageURL = {
                originalName: photo.name,
                url: fReader.result
            }
            resolve(imageURL)
        }
        fReader.readAsDataURL(photo)
    })

}

export { upload }