import esriLoader from 'esri-loader';

export async function loadArcGIS() {
	return esriLoader.loadModules([
		'esri/map',
		'esri/geometry/Point',
		'esri/symbols/SimpleLineSymbol',
		'esri/symbols/SimpleMarkerSymbol',
		'esri/Color',
		'esri/graphic'
	], {
		url: 'https://js.arcgis.com/3.26/'
	});
}
