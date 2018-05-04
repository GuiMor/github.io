var wms_layers = [];
var format_BoucleSaussignac_0 = new ol.format.GeoJSON();
var features_BoucleSaussignac_0 = format_BoucleSaussignac_0.readFeatures(json_BoucleSaussignac_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BoucleSaussignac_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BoucleSaussignac_0.addFeatures(features_BoucleSaussignac_0);var lyr_BoucleSaussignac_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BoucleSaussignac_0, 
                style: style_BoucleSaussignac_0,
                title: '<img src="styles/legend/BoucleSaussignac_0.png" /> Boucle-Saussignac'
            });var format_Razac3_1 = new ol.format.GeoJSON();
var features_Razac3_1 = format_Razac3_1.readFeatures(json_Razac3_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Razac3_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Razac3_1.addFeatures(features_Razac3_1);var lyr_Razac3_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Razac3_1, 
                style: style_Razac3_1,
                title: '<img src="styles/legend/Razac3_1.png" /> Razac-3'
            });var format_Razac2_2 = new ol.format.GeoJSON();
var features_Razac2_2 = format_Razac2_2.readFeatures(json_Razac2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Razac2_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Razac2_2.addFeatures(features_Razac2_2);var lyr_Razac2_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Razac2_2, 
                style: style_Razac2_2,
                title: '<img src="styles/legend/Razac2_2.png" /> Razac-2'
            });var format_Razac_3 = new ol.format.GeoJSON();
var features_Razac_3 = format_Razac_3.readFeatures(json_Razac_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Razac_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Razac_3.addFeatures(features_Razac_3);var lyr_Razac_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Razac_3, 
                style: style_Razac_3,
                title: '<img src="styles/legend/Razac_3.png" /> Razac'
            });var format_GageacRouillac_4 = new ol.format.GeoJSON();
var features_GageacRouillac_4 = format_GageacRouillac_4.readFeatures(json_GageacRouillac_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GageacRouillac_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_GageacRouillac_4.addFeatures(features_GageacRouillac_4);var lyr_GageacRouillac_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GageacRouillac_4, 
                style: style_GageacRouillac_4,
                title: '<img src="styles/legend/GageacRouillac_4.png" /> Gageac-Rouillac'
            });var format_Monestier_5 = new ol.format.GeoJSON();
var features_Monestier_5 = format_Monestier_5.readFeatures(json_Monestier_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Monestier_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Monestier_5.addFeatures(features_Monestier_5);var lyr_Monestier_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Monestier_5, 
                style: style_Monestier_5,
                title: '<img src="styles/legend/Monestier_5.png" /> Monestier'
            });var format_LaBastide_6 = new ol.format.GeoJSON();
var features_LaBastide_6 = format_LaBastide_6.readFeatures(json_LaBastide_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LaBastide_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_LaBastide_6.addFeatures(features_LaBastide_6);var lyr_LaBastide_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LaBastide_6, 
                style: style_LaBastide_6,
                title: '<img src="styles/legend/LaBastide_6.png" /> La Bastide'
            });var format_BoucleCouturerevetement_7 = new ol.format.GeoJSON();
var features_BoucleCouturerevetement_7 = format_BoucleCouturerevetement_7.readFeatures(json_BoucleCouturerevetement_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BoucleCouturerevetement_7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BoucleCouturerevetement_7.addFeatures(features_BoucleCouturerevetement_7);var lyr_BoucleCouturerevetement_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BoucleCouturerevetement_7, 
                style: style_BoucleCouturerevetement_7,
                title: '<img src="styles/legend/BoucleCouturerevetement_7.png" /> Boucle-Couture-revetement'
            });

lyr_Razac3_1.setVisible(true);lyr_Razac2_2.setVisible(true);lyr_Razac_3.setVisible(true);lyr_GageacRouillac_4.setVisible(true);lyr_Monestier_5.setVisible(true);lyr_LaBastide_6.setVisible(true);lyr_BoucleCouturerevetement_7.setVisible(true);
var layersList = [lyr_BoucleSaussignac_0,lyr_Razac3_1,lyr_Razac2_2,lyr_Razac_3,lyr_GageacRouillac_4,lyr_Monestier_5,lyr_LaBastide_6,lyr_BoucleCouturerevetement_7];
lyr_BoucleSaussignac_0.set('fieldAliases', {'id': 'id', 'nom': 'nom', 'Type': 'Type', });
lyr_Razac3_1.set('fieldAliases', {'id': 'id', 'Nom': 'Nom', 'Revetement': 'Revetement', });
lyr_Razac2_2.set('fieldAliases', {'id': 'id', 'Nom': 'Nom', });
lyr_Razac_3.set('fieldAliases', {'id': 'id', 'Nom': 'Nom', 'Rvtment': 'Rvtment', });
lyr_GageacRouillac_4.set('fieldAliases', {'id': 'id', 'Revetement': 'Revetement', 'Nom': 'Nom', });
lyr_Monestier_5.set('fieldAliases', {'id': 'id', 'Revetmt': 'Revetmt', 'Nom': 'Nom', });
lyr_LaBastide_6.set('fieldAliases', {'id': 'id', 'Nom': 'Nom', 'Type': 'Type', });
lyr_BoucleCouturerevetement_7.set('fieldAliases', {'FID': 'FID', 'nom': 'nom', 'revetement': 'revetement', });
lyr_BoucleSaussignac_0.set('fieldImages', {'id': '', 'nom': '', 'Type': '', });
lyr_Razac3_1.set('fieldImages', {'id': '', 'Nom': '', 'Revetement': '', });
lyr_Razac2_2.set('fieldImages', {'id': '', 'Nom': '', });
lyr_Razac_3.set('fieldImages', {'id': '', 'Nom': '', 'Rvtment': '', });
lyr_GageacRouillac_4.set('fieldImages', {'id': '', 'Revetement': '', 'Nom': '', });
lyr_Monestier_5.set('fieldImages', {'id': '', 'Revetmt': '', 'Nom': '', });
lyr_LaBastide_6.set('fieldImages', {'id': 'TextEdit', 'Nom': 'TextEdit', 'Type': 'TextEdit', });
lyr_BoucleCouturerevetement_7.set('fieldImages', {'FID': '', 'nom': '', 'revetement': '', });
lyr_BoucleSaussignac_0.set('fieldLabels', {'id': 'no label', 'nom': 'no label', 'Type': 'no label', });
lyr_Razac3_1.set('fieldLabels', {'id': 'no label', 'Nom': 'no label', 'Revetement': 'no label', });
lyr_Razac2_2.set('fieldLabels', {'id': 'no label', 'Nom': 'no label', });
lyr_Razac_3.set('fieldLabels', {'id': 'no label', 'Nom': 'no label', 'Rvtment': 'no label', });
lyr_GageacRouillac_4.set('fieldLabels', {'id': 'no label', 'Revetement': 'no label', 'Nom': 'no label', });
lyr_Monestier_5.set('fieldLabels', {'id': 'no label', 'Revetmt': 'no label', 'Nom': 'no label', });
lyr_LaBastide_6.set('fieldLabels', {'id': 'no label', 'Nom': 'no label', 'Type': 'no label', });
lyr_BoucleCouturerevetement_7.set('fieldLabels', {'FID': 'no label', 'nom': 'no label', 'revetement': 'no label', });
lyr_BoucleCouturerevetement_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});