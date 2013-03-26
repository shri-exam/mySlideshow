({
    block: 'b-page',
    title: 'Галерея картинок | ШРИ: Михаил Пешехонов',
    favicon: 'http://yandex.st/lego/_/liBu5rfmzjkGy4nVf7wXsVl8m8w.png',
    head: [
        { elem: 'css', url: '_index.css', ie: false },
        { elem: 'css', url: '_index', ie: true },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: '_index.js' },
        { elem: 'meta', attrs: { name: 'description', content: '' }},
        { elem: 'meta', attrs: { name: 'keywords', content: '' }}
    ],
    content:[
        {
            elem: 'inner',
            content: [
                {
                    block: 'album',
                    mods: { visibility: 'hidden' },
                    content: [
                        {
                            elem: 'title',
                            content: [
                                {
                                    elem: 'title-name'
                                },
                                {
                                    elem: 'count-photos'
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'progressbar',
                    mods: { theme: 'blue', type: 'stripes' },
                    content: { elem: 'loading' }
                },
                {
                    block: 'box',
                    content: [
                        {
                            elem: 'photo-wrap',
                            content: [
                                {
                                    elem: 'control',
                                    mods: { direction: 'left' }
                                },
                                {
                                    elem: 'photo',
                                    content: [
                                        {
                                            elem: 'photo-wrapper',
                                            content: [
                                                {
                                                    block: 'loading'
                                                },
                                                {
                                                    elem: 'photo-item',
                                                    content: { tag: 'img' }
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    elem: 'control',
                                    mods: { direction: 'right' }
                                }
                            ]
                        },
                        {
                            elem: 'wrapper-thumbs',
                            content: [
                                {
                                    elem: 'inner',
                                    mods: { position: 'bottom' },
                                    content: [
                                        {
                                            elem: 'thumb-arrow',
                                            mods: { direction: 'left' }
                                        },
                                        {
                                            elem: 'thumbs-list'
                                        },
                                        {
                                            elem: 'thumb-arrow',
                                            mods: { direction: 'right' }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
})
