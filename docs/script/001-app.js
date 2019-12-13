var app = new Vue ({
    el: "#app",
    data: {
        uCounter: 0,
        ipsum: new LoremIpsum()
    },
    methods: {
        paraText: function () {
            return this.ipsum.paragraph(100, 200);
        }
    }
});