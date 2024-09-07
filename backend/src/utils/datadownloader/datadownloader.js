async function dataDownloader() {

    let page = 1
    do {
    let data = await fetch(`https://perenual.com/api/species-list?key=sk-zNhW66db33e089a946757&indoor=1&page=${page}`).then(res => res.json())
        // let data = await fetch(`https://perenual.com/api/species-list?key=${process.env.PERENUAL_API_KEY}&indoor=1&page=${page}`)

        page++
        console.log(data)
        console.log(data.data)
        console.log(data.data.length)
    } while (false)
}

dataDownloader().catch(error => console.error(error))