var config = {
  paths: {
    slick: 'js/slick/slick.min'
  },
  shim: {
    slick: {
        deps: ['jquery']
    }
  },
  map: {
    '*': {
         'gallerySlider': 'Magento_Catalog/js/gallerySlider',
         'scrollTop': 'js/scrollTop'
    }
  }
};
