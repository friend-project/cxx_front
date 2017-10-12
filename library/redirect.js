export default async(ctx, next) => {
    const ua = ctx.headers['user-agent'];
    const pc = [
        '/',
        '/mjsoft',
        '/tob',
        '/news',
        '/about',
        '/about/culture',
        'report',
        '/biz',
        '/mojibrand',
        '/job',
        '/updata/android',
        '/updata/iphone',
        '/updata/ipad',
        '/updata/windowsphone',
        '/updata/windows8',
        '/updata/windows'
    ];

    if (
        /AppleWebKit.*Mobile/i.test(ua) ||
        (
            /MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(ua)
        )
    ) {
    } else {
        if (pc.indexOf(ctx.url) !== -1) {
            const url = 'https://www.moji.com' + ctx.url;
            ctx.redirect(url);
        }
    }

    await next();
};
