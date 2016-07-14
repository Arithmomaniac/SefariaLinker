var Matcher = ((() => {

    function Matcher() {
        this.anchorPattern = /^$/;
    }

    Matcher.prototype.containsAnchor = function (str) {
        return this.anchorPattern.exec(str).length > 0;
    };

    return Matcher;
})());