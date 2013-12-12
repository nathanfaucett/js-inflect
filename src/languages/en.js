var en = require("../inflections")("en");

en.plural(/$/, "s");
en.plural(/s$/, "s");
en.plural(/^(ax|test)is$/, "$1es");
en.plural(/(octop|vir)us$/, "$1i");
en.plural(/(octop|vir)i$/, "$1i");
en.plural(/(alias|status)$/, "$1es");
en.plural(/(bu)s$/, "$1ses");
en.plural(/(buffal|tomat)o$/, "$1oes");
en.plural(/([ti])um$/, "$1a");
en.plural(/([ti])a$/, "$1a");
en.plural(/sis$/, "ses");
en.plural(/(?:([^f])fe|([lr])f)$/, "$1$2ves");
en.plural(/(hive)$/, "$1s");
en.plural(/([^aeiouy]|qu)y$/, "$1ies");
en.plural(/(x|ch|ss|sh)$/, "$1es");
en.plural(/(matr|vert|ind)(?:ix|ex)$/, "$1ices");
en.plural(/^(m|l)ouse$/, "$1ice");
en.plural(/^(m|l)ice$/, "$1ice");
en.plural(/^(ox)$/, "$1en");
en.plural(/^(oxen)$/, "$1");
en.plural(/(quiz)$/, "$1zes");

en.singular(/s$/, "");
en.singular(/(ss)$/, "$1");
en.singular(/(n)ews$/, "$1ews");
en.singular(/([ti])a$/, "$1um");
en.singular(/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)(sis|ses)$/, "$1sis");
en.singular(/(^analy)(sis|ses)$/, "$1sis");
en.singular(/([^f])ves$/, "$1fe");
en.singular(/(hive)s$/, "$1");
en.singular(/(tive)s$/, "$1");
en.singular(/([lr])ves$/, "$1f");
en.singular(/([^aeiouy]|qu)ies$/, "$1y");
en.singular(/(s)eries$/, "$1eries");
en.singular(/(m)ovies$/, "$1ovie");
en.singular(/(x|ch|ss|sh)es$/, "$1");
en.singular(/^(m|l)ice$/, "$1ouse");
en.singular(/(bus)(es)?$/, "$1");
en.singular(/(o)es$/, "$1");
en.singular(/(shoe)s$/, "$1");
en.singular(/(cris|test)(is|es)$/, "$1is");
en.singular(/^(a)x[ie]s$/, "$1xis");
en.singular(/(octop|vir)(us|i)$/, "$1us");
en.singular(/(alias|status)(es)?$/, "$1");
en.singular(/^(ox)en/, "$1");
en.singular(/(vert|ind)ices$/, "$1ex");
en.singular(/(matr)ices$/, "$1ix");
en.singular(/(quiz)zes$/, "$1");
en.singular(/(database)s$/, "$1");

en.irregular("i", "we");
en.irregular("person", "people");
en.irregular("man", "men");
en.irregular("child", "children");
en.irregular("move", "moves");
en.irregular("she", "they");
en.irregular("he", "they");
en.irregular("myself", "ourselves");
en.irregular("yourself", "yourselves");
en.irregular("himself", "themselves");
en.irregular("herself", "themselves");
en.irregular("themself", "themselves");
en.irregular("mine", "ours");
en.irregular("hers", "theirs");
en.irregular("his", "theirs");
en.irregular("its", "theirs");
en.irregular("theirs", "theirs");
en.irregular("sex", "sexes");
en.irregular("photo", "photos");
en.irregular("video", "videos");
en.irregular("narrative", "narratives");
en.irregular("rodeo", "rodeos");
en.irregular("zombie", "zombies");
en.irregular("catus", "cacti");

en.uncountable("advice");
en.uncountable("enegery");
en.uncountable("excretion");
en.uncountable("digestion");
en.uncountable("cooperation");
en.uncountable("health");
en.uncountable("justice");
en.uncountable("jeans");
en.uncountable("labour");
en.uncountable("machinery");
en.uncountable("equipment");
en.uncountable("information");
en.uncountable("pollution");
en.uncountable("sewage");
en.uncountable("paper");
en.uncountable("money");
en.uncountable("species");
en.uncountable("series");
en.uncountable("rain");
en.uncountable("rice");
en.uncountable("fish");
en.uncountable("sheep");
en.uncountable("moose");
en.uncountable("deer");
en.uncountable("bison");
en.uncountable("proceedings");
en.uncountable("shears");
en.uncountable("pincers");
en.uncountable("breeches");
en.uncountable("hijinks");
en.uncountable("clippers");
en.uncountable("chassis");
en.uncountable("innings");
en.uncountable("elk");
en.uncountable("rhinoceros");
en.uncountable("swine");
en.uncountable("you");
en.uncountable("news");
en.uncountable("police");