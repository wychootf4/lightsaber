module.exports = {
    title: 'Raymond\'s lightsaber',
    themeConfig: {
        // nav: [
        //     {
        //         text: 'Languages',
        //         items: [
        //             { text: '中文', link: '/zh'},
        //             { text: 'English', link: '/en' }
        //         ]
        //     },
        //     { text: 'About Us', link: "http://ctw-inc.net/contact-us" }
        // ],
        base: "/docs/",
        sidebar: [
            '/'
        ],
        sidebarDepth: 3,
        search: true,
        searchMaxSuggestions: 10,
        lastUpdated: 'Last Updated',
        serviceWorker: {
            updatePopup: true // Boolean | Object, default to undefined.
            // If set to true, the default text config will be:
            // updatePopup: {
            //    message: "New content is available.",
            //    buttonText: "Refresh"
            // }
        }
    },
    footer: "Copyright © 2020 Raymond Wang, All rights reserved."
}