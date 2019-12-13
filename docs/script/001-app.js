var app = new Vue({
    el: "#app",
    data: {
        uCounter: 0,
        ipsum: new LoremIpsum(),
        sFont: "0",
        cText: "You can edit this text to test the selected font.",
        fonts: {
            'cmun-bright': "Computer Modern Bright",
            'cmun-bright-semibold': "Computer Modern Bright Semibold",
            'cmun-classical-serif-italic': "Computer Modern Classical Serif Italic",
            'cmun-concrete': "Computer Modern Concrete",
            'cmun-sans': "Computer Modern Sans",
            'cmun-sans-demicondensed': "Computer Modern Sans Demi-Condensed",
            'cmun-serif': "Computer Modern Serif",
            'cmun-serif-slanted': "Computer Modern Serif Slanted",
            'cmun-typewriter': "Computer Modern Typewriter",
            'cmun-typewriter-light': "Computer Modern Typewriter Light",
            'cmun-typewriter-variable': "Computer Modern Typewriter Variable",
            'cmun-upright-italic': "Computer Modern Upright Italic",
            'u57c': "Univers 57 Condensed",
            'uc': "Univers Condensed"
        }
    },
    watch: {
        sFont: function () {
            var cssId = this.sFont;
            var cssLink = "https://cdn.jsdelivr.net/gh/skgadi/wf/fonts/" + cssId + ".min.css";
            if (!document.getElementById(cssId)) {
                var head = document.getElementsByTagName('head')[0];
                var link = document.createElement('link');
                link.id = cssId;
                link.rel = 'stylesheet';
                link.type = 'text/css';
                link.href = cssLink;
                link.media = 'all';
                head.appendChild(link);
            }
            document.getElementById("app").style.fontFamily = "\"" + this.fonts[cssId] + "\"";
            console.log(this.fonts[cssId]);
        }
    },
    computed: {
        code: function () {
            return "<link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/gh/skgadi/wf/fonts/" + this.sFont + ".min.css\">";
        }
    },
    methods: {
        paraText: function () {
            return this.ipsum.paragraph(100, 200);
        }
    }
});