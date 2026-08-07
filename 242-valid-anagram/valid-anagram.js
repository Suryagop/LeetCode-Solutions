/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length != t.length) return false;

    let map = new Map();


    for (let i = 0; i < s.length; i++) {
        if (map.has(s[i])) {
            let freq = map.get(s[i]) + 1;
            map.set(s[i], freq);
        }
        else map.set(s[i], 1);
    }

    for (let i = 0; i < t.length; i++) {
        if (map.has(t[i])) {
            let frq = map.get(t[i]) - 1;
            map.set(t[i], frq);
        }
    }


    for (let value of map.values()) {
        if (value != 0) return false;
    }

    return true;

};