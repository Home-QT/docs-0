(function() {

function inIframe() {
    try {
        return (window.self !== window.top) ? 1 : 0;
    }
    catch (e) {
        return 1;
    }
}
function ReopenUrlBuilder(baseUrl) {

    this.baseUrl = baseUrl;

    /**
     * Get value of content attribute of meta tag with name attribute = name
     * Fallback to top if possible
     *
     * @return string
     */
    this._getMetaContent = function (name) {
        try {
            var meta = window.top.document.getElementsByTagName('meta');
            for (var i = 0; i < meta.length; i++) {
                if (meta[i].hasAttribute('name') && meta[i].getAttribute('name').toLowerCase() === name) {
                    var info = meta[i].getAttribute('content');
                    var indexToCut = Math.max(info.indexOf(' ', 256), info.indexOf(',', 256));
                    if (indexToCut > 384 || indexToCut < 20) {
                        indexToCut = 256;
                    }
                    return info.substring(0, indexToCut);
                }
            }
        } catch (e) {
        }

        return '';
    };

    this._getWidth = function () {
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    };

    this._getHeight = function () {
        return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    };

    this._getTitle = function () {
        var title = document.title;

        if (inIframe()) {
            try {
                title = window.top.document.title;
            }
            catch (e) {
                title = '';
            }
        }

        return title;
    };

    this.build = function () {
        return this.baseUrl
            + '&cbrandom=' + Math.random()
            + '&cbtitle=' + encodeURIComponent(this._getTitle())
            + '&cbiframe=' + inIframe()
            + '&cbWidth=' + this._getWidth()
            + '&cbHeight=' + this._getHeight()
            + '&cbdescription=' + encodeURIComponent(this._getMetaContent('description'))
            + '&cbkeywords=' + encodeURIComponent(this._getMetaContent('keywords'))
    };
}
/**
 * Detect the browser
 *
 * Parse the passed user agent if possible so we can descide what we are going to do.
 *
 * @return Object The browser that has been detected.
 */
var browser = (function (n) {
    // var n = 'Dalvik/1.6.0 (Linux; U; Android 4.3; GT-I9300 Build/JSS15J)'.toLowerCase();
    n = n.replace('OPR', 'opera').toLowerCase();
    var b = {
        webkit: /webkit/.test(n),
        chrome: /chrome|crios/.test(n),
        safari: (/safari/.test(n) && !(/chrome/.test(n)) && !(/opios/.test(n))),
        mozilla: (/mozilla/.test(n)) && (!/(compatible|webkit)/.test(n)),
        firefox: /firefox/.test(n),
        msie: (/msie/.test(n)) && (!/opera/.test(n)),
        msedge: (/edge/.test(n)),
        ms_mobile: /iemobile/.test(n),
        opera: /opera/.test(n),
        // opios is Opera Mini in iOS
        opera_mini: (/opera mini/.test(n) || /opios/.test(n)),
        android: /android/.test(n),
        mac: /macintosh/.test(n),
        blackberry: /blackberry/.test(n),
        ios: /ipad|ipod|iphone/.test(n),
        // FaceBook userAgent
        fb: /fban\/fbios|fbav|fbios|fb_iab\/fb4a/.test(n),
        presto: /presto/.test(n),
        ieQuirksMode: (typeof document.compatMode !== 'undefined') ? document.compatMode !== 'CSS1Compat' && (/msie/.test(n)) && (!/opera/.test(n)) : false
    };
    b.user_agent = n;

    // Check for the flash support
    b.flash_support = false;
    try {
        b.flash_support = navigator.mimeTypes['application/x-shockwave-flash'];
    }
    catch (e) {
    }

    // Get the browser version
    b.version = (b.safari) ? (n.match(/.+(?:ri)[\/: ]([\d.]+)/) || [])[1] : (n.match(/.+(?:ox|me|ra|ie)[\/: ]([\d.]+)/) || [])[1];

    b.touchable = 'ontouchstart' in document.documentElement;

    // Get the major browser version, like Chrome 41 or Firefox 38, from the full version
    b.major_version = parseInt(b.version);

    /* Detect if the current browser is a mobile browser or not. */
    b.is_mobile = b.android || b.ios || b.blackberry || b.ms_mobile || b.opera_mini;

    return b;
})(navigator.userAgent);

var builder = new ReopenUrlBuilder("http:\/\/www.adnetworkperformance.com\/ad\/display.php?r=422661&treqn=2075524089&runauction=1&crr=df6de2fdb4d9b9466bbf,,AZKtEWHl2VoxGdYtmWHpWeGNjMXNjYXt2SpdFaENTJpJnNyUCN0gzN5EDMwITMhFTY1cDM1Y2Nz8FMwEDejhXbhJHZv92ZENTJklWdnZjMlkXYjR0MlEjZlJnNyUiMDJTJxQ0MlgHZpZjMlADRzUCcmZjMlADM2EDRzUyd3ZjMlETO3Q0Mlg2d2ITJ3MjMENTJs5mNyUSO2UTNENTJ05mNyUSNx4yNENTJvBnNyUyNxIjZzATZyIDN1MTMlBDZkVWZlF2NiBDNzEjM1AjYiJDOkNGO2UzMzQ0MlMnNyUCM5EkMlgjM3Q0MlUmepNnRzUCd0ZkMl02bj5iclZHZhZmcugnRyUiRyUSQzUCc0RHa2036dd6a0fd25255182b&rtid=583fdd78d16c7");
var url = builder.build();

    document.write('<iframe width="728" height="90" marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" allowfullscreen="true" style="border: medium none; padding: 0; margin: 0;" sandbox="allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-pointer-lock allow-same-origin" id="583fdd78d16c7" frameborder="0" src="'+ url +'" scrolling="no"></iframe>');
    if ((browser.chrome && browser.major_version < 17) || browser.opera_mini) {
        document.getElementById('583fdd78d16c7').removeAttribute('sandbox');
    }
})();
