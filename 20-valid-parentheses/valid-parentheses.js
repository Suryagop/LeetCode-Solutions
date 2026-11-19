/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let st = new Array();
    for (let i = 0; i < s.length; i++) {
        if (s[i] == "(" || s[i] == "[" || s[i] == "{") {
            st.push(s[i]);
            continue;
        }
        else if (s[i] == ")" || s[i] == "]" || s[i] == "}") {
            if (st[st.length - 1] == "(" && s[i] == ")") {
                st.pop();
            }
            else if (st[st.length - 1] == "(" && s[i] != ")") return false;
            else if (st[st.length - 1] == "[" && s[i] == "]") {
                st.pop();
            }
            else if (st[st.length - 1] == "[" && s[i] != "]") return false;
            else if (st[st.length - 1] == "{" && s[i] == "}") {
                st.pop()
            }
            else if (st[st.length - 1] == "{" && s[i] != "}") return false;
            else if (s[0] == ")" || s[0] == "]" || s[0] == "}") return false;
            else return false
        }
    }
    if (st.length == 0) return true;
    else return false;
};

