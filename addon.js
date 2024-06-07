const { addonBuilder } = require("stremio-addon-sdk")

// Docs: https://github.com/Stremio/stremio-addon-sdk/blob/master/docs/api/responses/manifest.md
const manifest = {
	"id": "org.cinemetakiller",
	"version": "0.0.1",
	"catalogs": [
		{
			"type": "movie",
			"id": "top",
			"name": "Popular - Movie"
		},
		{
			"type": "series",
			"id": "top",
			"name": "Popular - Series"
		},
		{
			"type": "movie",
			"id": "imdbRating",
			"name": "Featured - Movie"
		},
		{
			"type": "series",
			"id": "imdbRating",
			"name": "Featured - Series"
		}
	],
	"resources": [
		"catalog"
	],
	"types": [
		"movie",
		"series"
	],
	"name": "Cinemeta Catalogs Killer",
	"description": "Disables default Cinemeta catalogs"
}
const builder = new addonBuilder(manifest)

builder.defineResourceHandler('addon_catalog', function(args) {
    return Promise.resolve({
        addons: [
            {
                transportName: 'http',
                transportUrl: 'https://v3-cinemeta.strem.io/manifest.json',
                manifest: {
                    id: 'com.linvo.cinemeta',
                    version: '3.0.11',
                    name: 'Cinemeta',
                    catalogs: [
						{
							"type": "movie",
							"id": "top",
							"name": "Popular - Movie"
						},
						{
							"type": "series",
							"id": "top",
							"name": "Popular - Series"
						},
						{
							"type": "movie",
							"id": "imdbRating",
							"name": "Featured - Movie"
						},
						{
							"type": "series",
							"id": "imdbRating",
							"name": "Featured - Series"
						}
					],
                    resources: ['catalog'],
                    types: ['movie, series'],
                    idPrefixes: ['tt']
                }
            }
        ]
    })
})

module.exports = builder.getInterface()