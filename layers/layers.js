var wms_layers = [];

var format_aqueduct_projections_20150309_0 = new ol.format.GeoJSON();
var features_aqueduct_projections_20150309_0 = format_aqueduct_projections_20150309_0.readFeatures(json_aqueduct_projections_20150309_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_aqueduct_projections_20150309_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_aqueduct_projections_20150309_0.addFeatures(features_aqueduct_projections_20150309_0);
var lyr_aqueduct_projections_20150309_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_aqueduct_projections_20150309_0, 
                style: style_aqueduct_projections_20150309_0,
                popuplayertitle: 'aqueduct_projections_20150309',
                interactive: false,
    title: 'aqueduct_projections_20150309<br />\
    <img src="styles/legend/aqueduct_projections_20150309_0_0.png" /> Arid and low water use<br />\
    <img src="styles/legend/aqueduct_projections_20150309_0_1.png" /> Extremely high (>80%)<br />\
    <img src="styles/legend/aqueduct_projections_20150309_0_2.png" /> High (40-80%)<br />\
    <img src="styles/legend/aqueduct_projections_20150309_0_3.png" /> Medium-high (20-40%)<br />\
    <img src="styles/legend/aqueduct_projections_20150309_0_4.png" /> Low-medium (10-20%)<br />\
    <img src="styles/legend/aqueduct_projections_20150309_0_5.png" /> Low (<10%)<br />\
    <img src="styles/legend/aqueduct_projections_20150309_0_6.png" /> No data<br />'
        });
var format_datacentermap_pruned_1 = new ol.format.GeoJSON();
var features_datacentermap_pruned_1 = format_datacentermap_pruned_1.readFeatures(json_datacentermap_pruned_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_datacentermap_pruned_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_datacentermap_pruned_1.addFeatures(features_datacentermap_pruned_1);
var lyr_datacentermap_pruned_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_datacentermap_pruned_1, 
                style: style_datacentermap_pruned_1,
                popuplayertitle: 'datacentermap_pruned',
                interactive: false,
                title: '<img src="styles/legend/datacentermap_pruned_1.png" /> datacentermap_pruned'
            });

lyr_aqueduct_projections_20150309_0.setVisible(true);lyr_datacentermap_pruned_1.setVisible(true);
var layersList = [lyr_aqueduct_projections_20150309_0,lyr_datacentermap_pruned_1];
lyr_aqueduct_projections_20150309_0.set('fieldAliases', {'BasinID': 'BasinID', 'dwnBasinID': 'dwnBasinID', 'Area_km2': 'Area_km2', 'Shape_Leng': 'Shape_Leng', 'ws3028tr': 'ws3028tr', 'ws3028tl': 'ws3028tl', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_datacentermap_pruned_1.set('fieldAliases', {'id': 'id', 'latitude': 'latitude', 'longitude': 'longitude', 'field_4': 'field_4', });
lyr_aqueduct_projections_20150309_0.set('fieldImages', {'BasinID': 'TextEdit', 'dwnBasinID': 'TextEdit', 'Area_km2': 'TextEdit', 'Shape_Leng': 'TextEdit', 'ws3028tr': 'TextEdit', 'ws3028tl': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_datacentermap_pruned_1.set('fieldImages', {'id': 'Range', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'field_4': 'TextEdit', });
lyr_aqueduct_projections_20150309_0.set('fieldLabels', {'BasinID': 'hidden field', 'dwnBasinID': 'hidden field', 'Area_km2': 'hidden field', 'Shape_Leng': 'hidden field', 'ws3028tr': 'inline label - always visible', 'ws3028tl': 'inline label - always visible', 'Shape_Le_1': 'hidden field', 'Shape_Area': 'hidden field', });
lyr_datacentermap_pruned_1.set('fieldLabels', {'id': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'field_4': 'no label', });
lyr_datacentermap_pruned_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});