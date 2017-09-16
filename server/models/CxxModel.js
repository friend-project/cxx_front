import 'isomorphic-fetch';

const CxxModel = {};

CxxModel.muralList = async (ctx, next, opt) => {
  try {
    const data = await new Promise(function(resolve) {
      fetch('http://admin.cxx.loseyear.com/api/muralList')
        .then((response) => {
          if (response.status >= 400) {
            ctx.logger.error('net work fail');
          }
          return response.json();
        })
        .then((stories) => {
          resolve(stories);
        });
    });

    return data;
  } catch(e) {
    ctx.logger.error(e);
  }

  await next();
};

CxxModel.exhibitionList = async (ctx, next) => {
  try {
    const data = await new Promise(function(resolve) {
      fetch('http://admin.cxx.loseyear.com/api/exhibitionList')
        .then((response) => {
          if (response.status >= 400) {
            ctx.logger.error('net work fail');
          }
          return response.json();
        })
        .then((stories) => {
          resolve(stories);
        });
    });

    return data;
  } catch(e) {
    ctx.logger.error(e);
  }

  await next();
};

CxxModel.exhibitionDetail = async (ctx, next, opt) => {
  try {
    const data = await new Promise(function(resolve) {
      fetch(`http://admin.cxx.loseyear.com/api/exhibitionDetail/${opt.id}`)
        .then((response) => {
          if (response.status >= 400) {
            ctx.logger.error('net work fail');
          }
          return response.json();
        })
        .then((stories) => {
          resolve(stories);
        });
    });

    return data;
  } catch(e) {
    ctx.logger.error(e);
  }

  await next();
};
export default CxxModel;

