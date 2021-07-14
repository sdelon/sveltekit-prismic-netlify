const getSlices = data => {
    return data.post[0].data.body.map(slice => {
        switch(slice.slice_type) {
            case 'partenaires':
                return {
                    partenaires: {
                        titre: slice.primary.titre_section,
                        logos: slice.items.map(logo => {
                            return {
                                url: logo.logo.url,
                                alt: logo.logo.alt
                            }
                        })
                    }
                }
            case 'banner_with_caption':
                return {
                    bannerWithCaption: {
                        titre: slice.primary.title_of_banner,
                        description: slice.primary.description,
                        image: {
                            url: slice.primary.image_banner.url,
                            alt: slice.primary.image_banner.alt
                        },
                        button: {
                            text: slice.primary.button_label,
                            link: slice.primary.button_link
                        }
                    }
                }
            default:
                console.log('other')
        }
    })
}

export default getSlices