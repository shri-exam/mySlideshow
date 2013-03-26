({
    shouldDeps: [
        {
            block: 'box',
            elems: ['mini'],
            elemMods: { state: 'active' }
        },
        {
            block: 'loading'
        },
        {
            block: 'progressbar',
            elems: ['loading'],
            mods: { theme: 'blue', type: 'stripes' }
        }
    ]
})