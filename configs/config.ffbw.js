module.exports = function () {
  return {
    // Array of data provider are supported
    // Not yet finished
    'dataPath': [
      '/map-data/ff3l/',
      '/map-data/hoho/',
      '/map-data/wtk/',
      '/map-data/wald/',
      '/map-data/wiese/',
      '/map-data/loe/',
      '/map-data/3land/',
      '/map-data/ref/',
      '/map-data/test/',
      '/map-data/swb/',
      '/map-data/ng/',
      '/map-data/nalb/',
      '/map-data/fftut/',
      '/ffbw/ffbsee-data/',
//      '/ffbw/ffs-data/',
//      '/ffbw/fffr-data/',
      '/ffbw/ffka-data/',
      '/ffbw/ffrn-data/',
      '/ffbw/fful-data/'
    ],
    'siteName': 'Freifunk Baden-Württemberg',
    'mapLayers': [
      {
        'name': 'Carto light',
        'url': 'https://map.freifunk-3laendereck.net/cartolite/{z}/{x}/{y}.png',
        'config': {
          'type': 'osm',
          'attribution': '&copy; OpenStreetMap contributors, &copy; CartoDB',
          'maxZoom': 19
        }
      },
      {
        'name': 'Carto dark',
        'url': 'https://map.freifunk-3laendereck.net/cartodark/{z}/{x}/{y}.png',
        'config': {
          'type': 'osm',
          'attribution': '&copy; OpenStreetMap contributors, &copy; CartoDB',
          'maxZoom': 19
        }
      },
      {
        'name': 'Openstreetmap',
        'url': 'https://map.freifunk-3laendereck.net/tiles/{z}/{x}/{y}.png',
        'config': {
          'type': 'osm',
          'attribution': 'Tiles CC-BY-SA OpenStreetMap',
          'maxZoom': 19
        }
      },
      {
        'name': 'Esri.WorldImagery',
        'url': '//server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
        'config': {
          'maxZoom': 20,
          'attribution': 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
         }
      },
      {
        'name': 'OpenTopoMap',
        'url': 'https://map.freifunk-3laendereck.net/opentopo/{z}/{x}/{y}.png',
        'config': {
          'attribution': 'Kartendaten: © OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung: © OpenTopoMap (CC-BY-SA)',
          'maxZoom': 17
        }
      }
    ],
    // Set a visible frame
    'fixedCenter': [
      // Northwest
      [
        47.8795,
        7.5407
      ],
      // Southeast
      [
        47.5042,
        7.9994
      ]
    ],
    'allCommunities': {
      'name': 'Gesamtkarte',
      'url': '/'
    },
    'domainNames': [
      {
        'domain': 'default',
        'name': 'Freifunk Dreiländereck',
        'url': '/ff3l/'
      },
      {
        'domain': 'ff3l',
        'name': 'Freifunk Dreiländereck'
      },
      {
        'domain': 'hoho',
        'name': 'Hochrhein-Hotzenwald',
        'url': '/ff3l-hoho/'
      },
      {
        'domain': 'wtk',
        'name': 'Waldshut-Tiengen-Klettgau',
        'url': '/ff3l-wtk/'
      },
      {
        'domain': 'ff3l-hoho',
        'name': 'Hochrhein-Hotzenwald'
      },
      {
        'domain': 'ff3l-wtk',
        'name': 'Waldshut-Tiengen-Klettgau'
      },
      {
        'domain': 'wald',
        'name': 'Südschwarzwald',
        'url': '/ff3l-wald/'
      },
      {
        'domain': 'wiese',
        'name': 'Wiesental',
        'url': '/ff3l-wiese/'
      },
      {
        'domain': 'ff3l-wiese',
        'name': 'Wiesental'
      },
      {
        'domain':'loe',
        'name': 'Lörrach-Oberrhein',
        'url': '/ff3l-loe/'
      },
      {
        'domain':'3land',
        'name': 'Dreiland',
        'url': '/ff3l-3land/'
      },
      {
        'domain': 'ref',
        'name': 'Refugees',
        'url': '/ff3l-ref/'
      },
      {
        'domain': 'test',
        'name': 'Testnetz',
        'url': '/ff3l-test/'
      },
      {
        'domain': 'nalb',
        'name': 'Neckar-Alb',
        'url': '/ff3l-nalb/'
      },
      {
        'domain': 'swb',
        'name': 'Schwarzwald-Baar',
        'url': '/ff3l-swb/'
      },
      {
        'domain': 'ffng',
        'name': 'Nordschwarzwald-Gäu',
        'url': '/ffng/'
      },
      {
        'site': 'ff3l-ng',
        'domain': 'ff3l-ng',
        'name': 'Nordschwarzwald-Gäu'
      },
      {
        'domain': 'ff3l-wald',
        'name': 'Südschwarzwald'
      },
      {
        'domain':'ff3l-3land',
        'name': 'Dreiland'
      },
      {
        'domain': 'fftut',
        'name': 'Tuttlingen',
        'url': '/fftut/'
      }
    ],
    'linkList': [
      {
        'title': 'Impressum',
        'href': 'https://freifunk-3laendereck.net/impressum-mehr/',
        'target': '_blank'
      },
      {
        'title': 'Datenschutz',
        'href': 'https://freifunk-3laendereck.net/rechtliche-hinweise/',
        'target': '_blank'
      },
      {
        'title': 'Knotenliste',
        'href': 'https://www.knotenliste.de/index.html',
        'target': '_blank'
      }
    ],
    geo: [
      {
        json: function () {
          return require('helper').getJSON('https://map.freifunk-3laendereck.net/geojson/ffbw.geojson').then(function (result) {
            return result.features ? result.features : false;
          }, function () {
            return false;
          });
        },
        option: {
          style: {
            color: '#6de922',
            weight: 5,
            opacity: 0.4,
            fill: false,
//            fillColor: '#6de922',
//            fillOpacity: 0.05,
            interactive: false
          }
        }
      }
    ]
  };
};
