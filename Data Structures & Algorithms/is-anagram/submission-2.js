class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let S_string = s.split("").sort();
        let T_string = t.split("").sort();

        if (S_string.length !== T_string.length) {
            return false;
        }

        let uniqueS_string = [];
        let uniqueT_string = [];

        for (let i = 0; i < S_string.length; i++) {
            if (S_string[i] !== S_string[i + 1]) {
                uniqueS_string.push(S_string[i]);
            }
        }

        for (let i = 0; i < T_string.length; i++) {
            if (T_string[i] !== T_string[i + 1]) {
                uniqueT_string.push(T_string[i]);
            }
        }

        if (uniqueS_string.length !== uniqueT_string.length) {
            return false;
        }

        for (let i = 0; i < uniqueS_string.length; i++) {
            if (uniqueS_string[i] !== uniqueT_string[i]) {
                return false;
            }
        }

        let frequencyTableS = {};

        for (let i = 0; i < uniqueS_string.length; i++) {
            frequencyTableS[uniqueS_string[i]] = 0;
        }

        let frequencyTableT = {};

        for (let i = 0; i < uniqueT_string.length; i++) {
            frequencyTableT[uniqueT_string[i]] = 0;
        }

        for (let i = 0; i < S_string.length; i++) {
            frequencyTableS[S_string[i]] += 1;
        }

        for (let i = 0; i < T_string.length; i++) {
            frequencyTableT[T_string[i]] += 1;
        }

        //comparon

        for (let i = 0; i < uniqueS_string.length; i++) {
            let char = uniqueS_string[i];

            if (frequencyTableS[char] !== frequencyTableT[char]) {
                return false;
            }
        }

        return true;
    }
}