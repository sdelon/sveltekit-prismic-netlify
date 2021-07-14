import Client from '../../../utils/client'
import Prismic from '@prismicio/client'

export async function get({ params }) {
    const { uid } = params

    const pageData = await Client.query(
        [Prismic.Predicates.at('my.page.uid', uid)], 
    )

    const id = pageData.results[0].id

    const otherPosts = await Client.query(
        [Prismic.Predicates.at('my.page.water', true)]
    )

    const relatedPosts = otherPosts.results.filter(post => post.id !== id)

    return {
        body: {
            post: pageData.results,
            relatedPosts
        }
    }
}