const domain = {};

if (process.env.NODE_ENV === 'development') {
  domain.web = 'http://0.0.0.0:9520';
  domain.static = 'http://0.0.0.0:9520';
  domain.img = 'http://0.0.0.0:9522/map/';
  domain.api = 'http://0.0.0.0:9522';
} else {
  domain.web = 'http://mobile.cxx.loseyear.com';
  domain.static = 'http://mobile.cxx.loseyear.com';
  domain.img = 'http://admin.cxx.loseyear.com/map/';
  domain.api = 'http://admin.cxx.loseyear.com';
}

export default domain;
