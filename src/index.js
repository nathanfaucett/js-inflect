var inflections = require("./inflections"),
    inflector = require("./inflector");


require("./languages/en");
require("./languages/es");


var inflect = module.exports,

    SPILTER = /[ \_\-\.]+|(?=[A-Z][^A-Z])/g,
    MODULE_SPILTER = /[\. \/:]+/g,
    ID = /_id$/,

    NON_TITLE_CASED = [
        "and", "or", "nor", "a", "an", "the", "so", "but", "to", "of", "at",
        "by", "from", "into", "on", "onto", "off", "out", "in", "over",
        "with", "for"
    ];


inflect.inflections = inflections;
inflect.inflector = inflector;

function capitalize(str) {

    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

inflect.pluralize = function(word, locale) {

    return inflections(locale).pluralize(word);
};


inflect.isPlural = function(word, locale) {

    return inflections(locale).isPlural(word);
};


inflect.singularize = function(word, locale) {

    return inflections(locale).singularize(word);
};


inflect.isSingular = function(word, locale) {

    return inflections(locale).isSingular(word);
};


inflect.capitalize = function(word, allWords) {
    if (allWords) {
        var parts = word.split(SPILTER),
            part, i = parts.length;

        while (i--) parts[i] = capitalize(parts[i]);
        return parts.join("");
    }

    return capitalize(word);
};


inflect.camelize = function(word, lowFirstLetter) {
    var parts = word.split(SPILTER),
        part, i = parts.length;

    while (i--) parts[i] = capitalize(parts[i]);
    word = parts.join("");

    return lowFirstLetter !== false ? word[0].toLowerCase() + word.slice(1) : word;
};


inflect.underscore = function(word) {

    return word.split(SPILTER).join("_").toLowerCase();
};


inflect.dasherize = function(word) {

    return word.split(SPILTER).join("-").toLowerCase();
};


inflect.humanize = function(word, key, camelcase) {
    var foreignKeyRegex;

    if (key instanceof RegExp) {
        foreignKeyRegex = key;
    } else {
        foreignKeyRegex = new RegExp((camelcase !== false ? capitalize(key || "id") : "_" + (key || "id")) + "$");
    }

    return word.replace(foreignKeyRegex || ID, "").split(SPILTER).join(" ");
};


inflect.titleize = function(word) {
    var parts = word.split(SPILTER),
        part, i = parts.length;

    while (i--) {
        part = parts[i].toLowerCase();
        if (NON_TITLE_CASED.indexOf(part) !== -1) continue;
        parts[i] = capitalize(part);
    }

    return parts.join(" ");
};


inflect.constize = function(word) {
    var parts = word.split(SPILTER),
        part, i = parts.length;

    while (i--) {
        part = parts[i];
        parts[i] = part.toUpperCase();
    }

    return parts.join("_");
};


inflect.tableize = function(word, locale) {

    return inflect.underscore(inflect.pluralize(word, locale));
};


inflect.classify = function(word, locale) {

    return inflect.camelize(inflect.singularize(word, locale));
};


inflect.demodulize = function(word) {

    return word.split(MODULE_SPILTER).pop();
};


inflect.foreignKey = function(word, key, camelized, lowFirstLetter) {
    if (typeof(key) === "boolean") {
        lowFirstLetter = camelized;
        camelized = key;
        key = "id";
    }
    key = key != null ? key : "id";

    if (camelized) return inflect.camelize(word + "_" + key, lowFirstLetter);

    return inflect.underscore(word + "_" + key);
};


inflect.ordinal = function(num) {
    num = Math.abs(num % 100);

    if (num > 9 && num < 14) {
        return "th";
    }

    num = num % 10;

    if (num === 1) {
        return "st";
    } else if (num === 2) {
        return "nd";
    } else if (num === 3) {
        return "rd";
    } else {
        return "th";
    }
};


inflect.ordinalize = function(num) {

    return num + inflect.ordinal(num);
};
