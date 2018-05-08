var wms_layers = [];

        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSMStandard_0',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>'})],
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_BoucledeSaussignac_1 = new ol.format.GeoJSON();
var features_BoucledeSaussignac_1 = format_BoucledeSaussignac_1.readFeatures(json_BoucledeSaussignac_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BoucledeSaussignac_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BoucledeSaussignac_1.addFeatures(features_BoucledeSaussignac_1);var lyr_BoucledeSaussignac_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BoucledeSaussignac_1, 
                style: style_BoucledeSaussignac_1,
                title: '<img src="styles/legend/BoucledeSaussignac_1.png" /> Boucle de Saussignac'
            });var format_Liaisons_2 = new ol.format.GeoJSON();
var features_Liaisons_2 = format_Liaisons_2.readFeatures(json_Liaisons_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Liaisons_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Liaisons_2.addFeatures(features_Liaisons_2);var lyr_Liaisons_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Liaisons_2, 
                style: style_Liaisons_2,
                title: '<img src="styles/legend/Liaisons_2.png" /> Liaisons'
            });var format_BoucledeRazacdeSaussignac3_3 = new ol.format.GeoJSON();
var features_BoucledeRazacdeSaussignac3_3 = format_BoucledeRazacdeSaussignac3_3.readFeatures(json_BoucledeRazacdeSaussignac3_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BoucledeRazacdeSaussignac3_3 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BoucledeRazacdeSaussignac3_3.addFeatures(features_BoucledeRazacdeSaussignac3_3);var lyr_BoucledeRazacdeSaussignac3_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BoucledeRazacdeSaussignac3_3, 
                style: style_BoucledeRazacdeSaussignac3_3,
                title: '<img src="styles/legend/BoucledeRazacdeSaussignac3_3.png" /> Boucle de Razac-de-Saussignac 3'
            });var format_BoucledeRazacdeSaussignac2_4 = new ol.format.GeoJSON();
var features_BoucledeRazacdeSaussignac2_4 = format_BoucledeRazacdeSaussignac2_4.readFeatures(json_BoucledeRazacdeSaussignac2_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BoucledeRazacdeSaussignac2_4 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BoucledeRazacdeSaussignac2_4.addFeatures(features_BoucledeRazacdeSaussignac2_4);var lyr_BoucledeRazacdeSaussignac2_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BoucledeRazacdeSaussignac2_4, 
                style: style_BoucledeRazacdeSaussignac2_4,
                title: '<img src="styles/legend/BoucledeRazacdeSaussignac2_4.png" /> Boucle de Razac-de-Saussignac 2'
            });var format_BoucledeRazacdeSaussignac_5 = new ol.format.GeoJSON();
var features_BoucledeRazacdeSaussignac_5 = format_BoucledeRazacdeSaussignac_5.readFeatures(json_BoucledeRazacdeSaussignac_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BoucledeRazacdeSaussignac_5 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BoucledeRazacdeSaussignac_5.addFeatures(features_BoucledeRazacdeSaussignac_5);var lyr_BoucledeRazacdeSaussignac_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BoucledeRazacdeSaussignac_5, 
                style: style_BoucledeRazacdeSaussignac_5,
                title: '<img src="styles/legend/BoucledeRazacdeSaussignac_5.png" /> Boucle de Razac-de-Saussignac'
            });var format_BoucledeGageacRouillac_6 = new ol.format.GeoJSON();
var features_BoucledeGageacRouillac_6 = format_BoucledeGageacRouillac_6.readFeatures(json_BoucledeGageacRouillac_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BoucledeGageacRouillac_6 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BoucledeGageacRouillac_6.addFeatures(features_BoucledeGageacRouillac_6);var lyr_BoucledeGageacRouillac_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BoucledeGageacRouillac_6, 
                style: style_BoucledeGageacRouillac_6,
                title: '<img src="styles/legend/BoucledeGageacRouillac_6.png" /> Boucle de Gageac-Rouillac'
            });var format_BoucledeMonestier_7 = new ol.format.GeoJSON();
var features_BoucledeMonestier_7 = format_BoucledeMonestier_7.readFeatures(json_BoucledeMonestier_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BoucledeMonestier_7 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BoucledeMonestier_7.addFeatures(features_BoucledeMonestier_7);var lyr_BoucledeMonestier_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BoucledeMonestier_7, 
                style: style_BoucledeMonestier_7,
                title: '<img src="styles/legend/BoucledeMonestier_7.png" /> Boucle de Monestier'
            });var format_BoucledeLaBastide_8 = new ol.format.GeoJSON();
var features_BoucledeLaBastide_8 = format_BoucledeLaBastide_8.readFeatures(json_BoucledeLaBastide_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BoucledeLaBastide_8 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BoucledeLaBastide_8.addFeatures(features_BoucledeLaBastide_8);var lyr_BoucledeLaBastide_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BoucledeLaBastide_8, 
                style: style_BoucledeLaBastide_8,
                title: '<img src="styles/legend/BoucledeLaBastide_8.png" /> Boucle de La Bastide'
            });var format_BoucledeCouture_9 = new ol.format.GeoJSON();
var features_BoucledeCouture_9 = format_BoucledeCouture_9.readFeatures(json_BoucledeCouture_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BoucledeCouture_9 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_BoucledeCouture_9.addFeatures(features_BoucledeCouture_9);var lyr_BoucledeCouture_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BoucledeCouture_9, 
                style: style_BoucledeCouture_9,
                title: '<img src="styles/legend/BoucledeCouture_9.png" /> Boucle de Couture'
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
            });var format_Pointsdevue_11 = new ol.format.GeoJSON();
var features_Pointsdevue_11 = format_Pointsdevue_11.readFeatures(json_Pointsdevue_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pointsdevue_11 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Pointsdevue_11.addFeatures(features_Pointsdevue_11);var lyr_Pointsdevue_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pointsdevue_11, 
                style: style_Pointsdevue_11,
                title: '<img src="styles/legend/Pointsdevue_11.png" /> Points de vue'
            });var format_Pointdarrive_12 = new ol.format.GeoJSON();
var features_Pointdarrive_12 = format_Pointdarrive_12.readFeatures(json_Pointdarrive_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pointdarrive_12 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Pointdarrive_12.addFeatures(features_Pointdarrive_12);var lyr_Pointdarrive_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pointdarrive_12, 
                style: style_Pointdarrive_12,
                title: '<img src="styles/legend/Pointdarrive_12.png" /> Point d\'arrivée'
            });var format_Pointdedpart_13 = new ol.format.GeoJSON();
var features_Pointdedpart_13 = format_Pointdedpart_13.readFeatures(json_Pointdedpart_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pointdedpart_13 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Pointdedpart_13.addFeatures(features_Pointdedpart_13);var lyr_Pointdedpart_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pointdedpart_13, 
                style: style_Pointdedpart_13,
                title: '<img src="styles/legend/Pointdedpart_13.png" /> Point de départ'
            });

lyr_BoucledeSaussignac_1.setVisible(true);lyr_Liaisons_2.setVisible(true);lyr_BoucledeRazacdeSaussignac3_3.setVisible(true);lyr_BoucledeRazacdeSaussignac2_4.setVisible(true);lyr_BoucledeRazacdeSaussignac_5.setVisible(true);lyr_BoucledeGageacRouillac_6.setVisible(true);lyr_BoucledeMonestier_7.setVisible(true);lyr_BoucledeLaBastide_8.setVisible(true);lyr_BoucledeCouture_9.setVisible(true);lyr_ChateauxViticoles_10.setVisible(true);lyr_Pointsdevue_11.setVisible(true);lyr_Pointdarrive_12.setVisible(true);lyr_Pointdedpart_13.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_BoucledeSaussignac_1,lyr_Liaisons_2,lyr_BoucledeRazacdeSaussignac3_3,lyr_BoucledeRazacdeSaussignac2_4,lyr_BoucledeRazacdeSaussignac_5,lyr_BoucledeGageacRouillac_6,lyr_BoucledeMonestier_7,lyr_BoucledeLaBastide_8,lyr_BoucledeCouture_9,lyr_ChateauxViticoles_10,lyr_Pointsdevue_11,lyr_Pointdarrive_12,lyr_Pointdedpart_13];
lyr_BoucledeSaussignac_1.set('fieldAliases', {'id': 'id', 'nom': 'nom', });
lyr_Liaisons_2.set('fieldAliases', {'id': 'id', });
lyr_BoucledeRazacdeSaussignac3_3.set('fieldAliases', {'id': 'id', 'Nom': 'Nom', });
lyr_BoucledeRazacdeSaussignac2_4.set('fieldAliases', {'id': 'id', 'Nom': 'Nom', });
lyr_BoucledeRazacdeSaussignac_5.set('fieldAliases', {'id': 'id', 'Nom': 'Nom', });
lyr_BoucledeGageacRouillac_6.set('fieldAliases', {'id': 'id', 'Revetement': 'Revetement', 'Nom': 'Nom', });
lyr_BoucledeMonestier_7.set('fieldAliases', {'id': 'id', 'Nom': 'Nom', });
lyr_BoucledeLaBastide_8.set('fieldAliases', {'id': 'id', 'Nom': 'Nom', });
lyr_BoucledeCouture_9.set('fieldAliases', {'FID': 'FID', 'nom': 'nom', });
lyr_ChateauxViticoles_10.set('fieldAliases', {'id': 'id', 'nom': 'nom', });
lyr_Pointsdevue_11.set('fieldAliases', {'id': 'id', });
lyr_Pointdarrive_12.set('fieldAliases', {'id': 'id', 'Arrivee': 'Arrivee', });
lyr_Pointdedpart_13.set('fieldAliases', {'id': 'id', 'Depart': 'Depart', });
lyr_BoucledeSaussignac_1.set('fieldImages', {'id': 'TextEdit', 'nom': 'TextEdit', });
lyr_Liaisons_2.set('fieldImages', {'id': 'TextEdit', });
lyr_BoucledeRazacdeSaussignac3_3.set('fieldImages', {'id': 'TextEdit', 'Nom': 'TextEdit', });
lyr_BoucledeRazacdeSaussignac2_4.set('fieldImages', {'id': 'TextEdit', 'Nom': 'TextEdit', });
lyr_BoucledeRazacdeSaussignac_5.set('fieldImages', {'id': 'TextEdit', 'Nom': 'TextEdit', });
lyr_BoucledeGageacRouillac_6.set('fieldImages', {'id': 'TextEdit', 'Revetement': 'TextEdit', 'Nom': 'TextEdit', });
lyr_BoucledeMonestier_7.set('fieldImages', {'id': 'TextEdit', 'Nom': 'TextEdit', });
lyr_BoucledeLaBastide_8.set('fieldImages', {'id': 'TextEdit', 'Nom': 'TextEdit', });
lyr_BoucledeCouture_9.set('fieldImages', {'FID': 'TextEdit', 'nom': 'TextEdit', });
lyr_ChateauxViticoles_10.set('fieldImages', {'id': 'TextEdit', 'nom': 'TextEdit', });
lyr_Pointsdevue_11.set('fieldImages', {'id': 'TextEdit', });
lyr_Pointdarrive_12.set('fieldImages', {'id': 'TextEdit', 'Arrivee': 'TextEdit', });
lyr_Pointdedpart_13.set('fieldImages', {'id': 'TextEdit', 'Depart': 'TextEdit', });
lyr_BoucledeSaussignac_1.set('fieldLabels', {'id': 'no label', 'nom': 'no label', });
lyr_Liaisons_2.set('fieldLabels', {'id': 'no label', });
lyr_BoucledeRazacdeSaussignac3_3.set('fieldLabels', {'id': 'no label', 'Nom': 'no label', });
lyr_BoucledeRazacdeSaussignac2_4.set('fieldLabels', {'id': 'no label', 'Nom': 'no label', });
lyr_BoucledeRazacdeSaussignac_5.set('fieldLabels', {'id': 'no label', 'Nom': 'no label', });
lyr_BoucledeGageacRouillac_6.set('fieldLabels', {'id': 'no label', 'Revetement': 'no label', 'Nom': 'no label', });
lyr_BoucledeMonestier_7.set('fieldLabels', {'id': 'no label', 'Nom': 'no label', });
lyr_BoucledeLaBastide_8.set('fieldLabels', {'id': 'no label', 'Nom': 'no label', });
lyr_BoucledeCouture_9.set('fieldLabels', {'FID': 'no label', 'nom': 'no label', });
lyr_ChateauxViticoles_10.set('fieldLabels', {'id': 'no label', 'nom': 'no label', });
lyr_Pointsdevue_11.set('fieldLabels', {'id': 'no label', });
lyr_Pointdarrive_12.set('fieldLabels', {'id': 'no label', 'Arrivee': 'no label', });
lyr_Pointdedpart_13.set('fieldLabels', {'id': 'no label', 'Depart': 'no label', });
lyr_Pointdedpart_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});