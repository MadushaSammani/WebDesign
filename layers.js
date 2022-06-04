var sourcel=new ol.source.OSM();
var osmLayer=new ol.layer.Tile({source: source1})
function init() {
	var view=new ol.View({
		          center:ol.proj.fromLonLat([135.44,-27.56]),
		          zoom: 4
		     });
			 
	var map = new ol.Map({
       target: 'map',
       controls: ol.control.defaults().extend([
     	              new ol.control.ScaleLine({
					  units: 'metric'})
	             ]),
	   view: view
	   });
	map.addLayer(osmLayer);
}