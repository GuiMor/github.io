var wms_layers = [];

        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSMStandard_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>'})],
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_BoucledeRazacdeSaussignac3_1 = new ol.format.GeoJSON();
var features_BoucledeRazacdeSaussignac3_1 = format_BoucledeRazacdeSaussignac3_1.readFeatures(json_BoucledeRazacdeSaussignac3_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BoucledeRazacdeSaussignac3_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BoucledeRazacdeSaussignac3_1.addFeatures(features_BoucledeRazacdeSaussignac3_1);var lyr_BoucledeRazacdeSaussignac3_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BoucledeRazacdeSaussignac3_1, 
                style: style_BoucledeRazacdeSaussignac3_1,
                title: '<img src="styles/legend/BoucledeRazacdeSaussignac3_1.png" /> Boucle de Razac-de-Saussignac 3'
            });var format_BoucledeRazacdeSaussignac2_2 = new ol.format.GeoJSON();
var features_BoucledeRazacdeSaussignac2_2 = format_BoucledeRazacdeSaussignac2_2.readFeatures(json_BoucledeRazacdeSaussignac2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BoucledeRazacdeSaussignac2_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BoucledeRazacdeSaussignac2_2.addFeatures(features_BoucledeRazacdeSaussignac2_2);var lyr_BoucledeRazacdeSaussignac2_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BoucledeRazacdeSaussignac2_2, 
                style: style_BoucledeRazacdeSaussignac2_2,
                title: '<img src="styles/legend/BoucledeRazacdeSaussignac2_2.png" /> Boucle de Razac-de-Saussignac 2'
            });var format_BoucledeRazacdeSaussignac_3 = new ol.format.GeoJSON();
var features_BoucledeRazacdeSaussignac_3 = format_BoucledeRazacdeSaussignac_3.readFeatures(json_BoucledeRazacdeSaussignac_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BoucledeRazacdeSaussignac_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BoucledeRazacdeSaussignac_3.addFeatures(features_BoucledeRazacdeSaussignac_3);var lyr_BoucledeRazacdeSaussignac_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BoucledeRazacdeSaussignac_3, 
                style: style_BoucledeRazacdeSaussignac_3,
                title: '<img src="styles/legend/BoucledeRazacdeSaussignac_3.png" /> Boucle de Razac-de-Saussignac'
            });var format_BoucledeGageacRouillac_4 = new ol.format.GeoJSON();
var features_BoucledeGageacRouillac_4 = format_BoucledeGageacRouillac_4.readFeatures(json_BoucledeGageacRouillac_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BoucledeGageacRouillac_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BoucledeGageacRouillac_4.addFeatures(features_BoucledeGageacRouillac_4);var lyr_BoucledeGageacRouillac_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BoucledeGageacRouillac_4, 
                style: style_BoucledeGageacRouillac_4,
                title: '<img src="styles/legend/BoucledeGageacRouillac_4.png" /> Boucle de Gageac-Rouillac'
            });var format_BoucledeMonestier_5 = new ol.format.GeoJSON();
var features_BoucledeMonestier_5 = format_BoucledeMonestier_5.readFeatures(json_BoucledeMonestier_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BoucledeMonestier_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BoucledeMonestier_5.addFeatures(features_BoucledeMonestier_5);var lyr_BoucledeMonestier_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BoucledeMonestier_5, 
                style: style_BoucledeMonestier_5,
                title: '<img src="styles/legend/BoucledeMonestier_5.png" /> Boucle de Monestier'
            });var format_BoucledeLaBastide_6 = new ol.format.GeoJSON();
var features_BoucledeLaBastide_6 = format_BoucledeLaBastide_6.readFeatures(json_BoucledeLaBastide_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BoucledeLaBastide_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BoucledeLaBastide_6.addFeatures(features_BoucledeLaBastide_6);var lyr_BoucledeLaBastide_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BoucledeLaBastide_6, 
                style: style_BoucledeLaBastide_6,
                title: '<img src="styles/legend/BoucledeLaBastide_6.png" /> Boucle de La Bastide'
            });var format_BoucledeCouture_7 = new ol.format.GeoJSON();
var features_BoucledeCouture_7 = format_BoucledeCouture_7.readFeatures(json_BoucledeCouture_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BoucledeCouture_7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BoucledeCouture_7.addFeatures(features_BoucledeCouture_7);var lyr_BoucledeCouture_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BoucledeCouture_7, 
                style: style_BoucledeCouture_7,
                title: '<img src="styles/legend/BoucledeCouture_7.png" /> Boucle de Couture'
            });var format_BoucledeSaussignac_8 = new ol.format.GeoJSON();
var features_BoucledeSaussignac_8 = format_BoucledeSaussignac_8.readFeatures(json_BoucledeSaussignac_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BoucledeSaussignac_8 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BoucledeSaussignac_8.addFeatures(features_BoucledeSaussignac_8);var lyr_BoucledeSaussignac_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BoucledeSaussignac_8, 
                style: style_BoucledeSaussignac_8,
                title: '<img src="styles/legend/BoucledeSaussignac_8.png" /> Boucle de Saussignac'
            });var format_Liaisons_9 = new ol.format.GeoJSON();
var features_Liaisons_9 = format_Liaisons_9.readFeatures(json_Liaisons_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Liaisons_9 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Liaisons_9.addFeatures(features_Liaisons_9);var lyr_Liaisons_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Liaisons_9, 
                style: style_Liaisons_9,
                title: '<img src="styles/legend/Liaisons_9.png" /> Liaisons'
            });var format_ChateauxViticoles_10 = new ol.format.GeoJSON();
var features_ChateauxViticoles_10 = format_ChateauxViticoles_10.readFeatures(json_ChateauxViticoles_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ChateauxViticoles_10 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_ChateauxViticoles_10.addFeatures(features_ChateauxViticoles_10);var lyr_ChateauxViticoles_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ChateauxViticoles_10, 
                style: style_ChateauxViticoles_10,
                title: '<img src="styles/legend/ChateauxViticoles_10.png" /> Chateaux Viticoles'
            });var format_Restaurants_11 = new ol.format.GeoJSON();
var features_Restaurants_11 = format_Restaurants_11.readFeatures(json_Restaurants_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Restaurants_11 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Restaurants_11.addFeatures(features_Restaurants_11);var lyr_Restaurants_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Restaurants_11, 
                style: style_Restaurants_11,
                title: '<img src="styles/legend/Restaurants_11.png" /> Restaurants'
            });var format_Pointsdevue_12 = new ol.format.GeoJSON();
var features_Pointsdevue_12 = format_Pointsdevue_12.readFeatures(json_Pointsdevue_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pointsdevue_12 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Pointsdevue_12.addFeatures(features_Pointsdevue_12);var lyr_Pointsdevue_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pointsdevue_12, 
                style: style_Pointsdevue_12,
                title: '<img src="styles/legend/Pointsdevue_12.png" /> Points de vue'
            });var format_Pointdarrive_13 = new ol.format.GeoJSON();
var features_Pointdarrive_13 = format_Pointdarrive_13.readFeatures(json_Pointdarrive_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pointdarrive_13 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Pointdarrive_13.addFeatures(features_Pointdarrive_13);var lyr_Pointdarrive_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pointdarrive_13, 
                style: style_Pointdarrive_13,
                title: '<img src="styles/legend/Pointdarrive_13.png" /> Point d\'arrivée'
            });var format_Pointdedpart_14 = new ol.format.GeoJSON();
var features_Pointdedpart_14 = format_Pointdedpart_14.readFeatures(json_Pointdedpart_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pointdedpart_14 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Pointdedpart_14.addFeatures(features_Pointdedpart_14);var lyr_Pointdedpart_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pointdedpart_14, 
                style: style_Pointdedpart_14,
                title: '<img src="styles/legend/Pointdedpart_14.png" /> Point de départ'
            });

lyr_BoucledeRazacdeSaussignac3_1.setVisible(true);lyr_BoucledeRazacdeSaussignac2_2.setVisible(true);lyr_BoucledeRazacdeSaussignac_3.setVisible(true);lyr_BoucledeGageacRouillac_4.setVisible(true);lyr_BoucledeMonestier_5.setVisible(true);lyr_BoucledeLaBastide_6.setVisible(true);lyr_BoucledeCouture_7.setVisible(true);lyr_BoucledeSaussignac_8.setVisible(true);lyr_Liaisons_9.setVisible(true);lyr_ChateauxViticoles_10.setVisible(true);lyr_Restaurants_11.setVisible(true);lyr_Pointsdevue_12.setVisible(true);lyr_Pointdarrive_13.setVisible(true);lyr_Pointdedpart_14.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_BoucledeRazacdeSaussignac3_1,lyr_BoucledeRazacdeSaussignac2_2,lyr_BoucledeRazacdeSaussignac_3,lyr_BoucledeGageacRouillac_4,lyr_BoucledeMonestier_5,lyr_BoucledeLaBastide_6,lyr_BoucledeCouture_7,lyr_BoucledeSaussignac_8,lyr_Liaisons_9,lyr_ChateauxViticoles_10,lyr_Restaurants_11,lyr_Pointsdevue_12,lyr_Pointdarrive_13,lyr_Pointdedpart_14];
lyr_BoucledeRazacdeSaussignac3_1.set('fieldAliases', {'id': 'id', 'Nom': 'Nom', });
lyr_BoucledeRazacdeSaussignac2_2.set('fieldAliases', {'id': 'id', 'Nom': 'Nom', });
lyr_BoucledeRazacdeSaussignac_3.set('fieldAliases', {'id': 'id', 'Nom': 'Nom', });
lyr_BoucledeGageacRouillac_4.set('fieldAliases', {'id': 'id', 'Revetement': 'Revetement', 'Nom': 'Nom', });
lyr_BoucledeMonestier_5.set('fieldAliases', {'id': 'id', 'Nom': 'Nom', });
lyr_BoucledeLaBastide_6.set('fieldAliases', {'id': 'id', 'Nom': 'Nom', });
lyr_BoucledeCouture_7.set('fieldAliases', {'FID': 'FID', 'nom': 'nom', });
lyr_BoucledeSaussignac_8.set('fieldAliases', {'id': 'id', 'nom': 'nom', });
lyr_Liaisons_9.set('fieldAliases', {'id': 'id', });
lyr_ChateauxViticoles_10.set('fieldAliases', {'id': 'id', 'nom': 'nom', });
lyr_Restaurants_11.set('fieldAliases', {'id': 'id', 'nom': 'nom', });
lyr_Pointsdevue_12.set('fieldAliases', {'id': 'id', });
lyr_Pointdarrive_13.set('fieldAliases', {'id': 'id', 'Arrivee': 'Arrivee', });
lyr_Pointdedpart_14.set('fieldAliases', {'id': 'id', 'Depart': 'Depart', });
lyr_BoucledeRazacdeSaussignac3_1.set('fieldImages', {'id': 'TextEdit', 'Nom': 'TextEdit', });
lyr_BoucledeRazacdeSaussignac2_2.set('fieldImages', {'id': 'TextEdit', 'Nom': 'TextEdit', });
lyr_BoucledeRazacdeSaussignac_3.set('fieldImages', {'id': 'TextEdit', 'Nom': 'TextEdit', });
lyr_BoucledeGageacRouillac_4.set('fieldImages', {'id': 'TextEdit', 'Revetement': 'TextEdit', 'Nom': 'TextEdit', });
lyr_BoucledeMonestier_5.set('fieldImages', {'id': 'TextEdit', 'Nom': 'TextEdit', });
lyr_BoucledeLaBastide_6.set('fieldImages', {'id': 'TextEdit', 'Nom': 'TextEdit', });
lyr_BoucledeCouture_7.set('fieldImages', {'FID': 'TextEdit', 'nom': 'TextEdit', });
lyr_BoucledeSaussignac_8.set('fieldImages', {'id': 'TextEdit', 'nom': 'TextEdit', });
lyr_Liaisons_9.set('fieldImages', {'id': 'TextEdit', });
lyr_ChateauxViticoles_10.set('fieldImages', {'id': 'TextEdit', 'nom': 'TextEdit', });
lyr_Restaurants_11.set('fieldImages', {'id': 'TextEdit', 'nom': 'TextEdit', });
lyr_Pointsdevue_12.set('fieldImages', {'id': 'TextEdit', });
lyr_Pointdarrive_13.set('fieldImages', {'id': 'TextEdit', 'Arrivee': 'TextEdit', });
lyr_Pointdedpart_14.set('fieldImages', {'id': 'TextEdit', 'Depart': 'TextEdit', });
lyr_BoucledeRazacdeSaussignac3_1.set('fieldLabels', {'id': 'no label', 'Nom': 'no label', });
lyr_BoucledeRazacdeSaussignac2_2.set('fieldLabels', {'id': 'no label', 'Nom': 'no label', });
lyr_BoucledeRazacdeSaussignac_3.set('fieldLabels', {'id': 'no label', 'Nom': 'no label', });
lyr_BoucledeGageacRouillac_4.set('fieldLabels', {'id': 'no label', 'Revetement': 'no label', 'Nom': 'no label', });
lyr_BoucledeMonestier_5.set('fieldLabels', {'id': 'no label', 'Nom': 'no label', });
lyr_BoucledeLaBastide_6.set('fieldLabels', {'id': 'no label', 'Nom': 'no label', });
lyr_BoucledeCouture_7.set('fieldLabels', {'FID': 'no label', 'nom': 'no label', });
lyr_BoucledeSaussignac_8.set('fieldLabels', {'id': 'no label', 'nom': 'no label', });
lyr_Liaisons_9.set('fieldLabels', {'id': 'no label', });
lyr_ChateauxViticoles_10.set('fieldLabels', {'id': 'no label', 'nom': 'no label', });
lyr_Restaurants_11.set('fieldLabels', {'id': 'no label', 'nom': 'no label', });
lyr_Pointsdevue_12.set('fieldLabels', {'id': 'no label', });
lyr_Pointdarrive_13.set('fieldLabels', {'id': 'no label', 'Arrivee': 'no label', });
lyr_Pointdedpart_14.set('fieldLabels', {'id': 'no label', 'Depart': 'no label', });
lyr_Pointdedpart_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});