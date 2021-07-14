import Client from '../../utils/client'
import Prismic from '@prismicio/client'

import fs from 'fs'
import path from 'path'

export async function get() {
    const data = await Client.query(
        [Prismic.Predicates.at('document.type', 'page')], 
        { pageSize : 25, page : 1 }
    )

    const images = data.results.reduce((newObj, currItem) => {
        newObj[currItem.uid] = currItem.data.image.url || {}
        return newObj
    }, {})

    // fs.writeFile(`${process.cwd()}/src/routes/api/imagesFromPrismic.json`, JSON.stringify(images), err => {
    //     if(err) throw err
    //     process.stdout.write('File create successfully')
    // })

    // fs.writeFile('imagesFromPrismic.json', JSON.stringify(images), err => {
    //     if(err) throw err
    //     process.stdout.write('File create successfully')
    // })

    // const filepath = path.join(process.cwd(), 'data.json')

    // fs.readFile(filepath, (err, content) => {
    //     if(err) throw err
    //     process.stdout.write(content)
    // })

    return {
        body: {
            data : data.results
        }
    }
}