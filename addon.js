const { addonBuilder } = require("stremio-addon-sdk")

// Docs: https://github.com/Stremio/stremio-addon-sdk/blob/master/docs/api/responses/manifest.md
const manifest = {
	"id": "com.linvo.cinemeta",
	"version": "0.0.1",
	"catalogs": [
		{
			"type": "movie",
			"id": "top",
			"name": "Popular"
		},
		{
			"type": "series",
			"id": "top",
			"name": "Popular"
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

builder.defineCatalogHandler(({type, id, extra}) => {
	console.log("request for catalogs: "+type+" "+id)
	// Docs: https://github.com/Stremio/stremio-addon-sdk/blob/master/docs/api/requests/defineCatalogHandler.md
	return Promise.resolve({ metas: [{}] })
})

module.exports = builder.getInterface()