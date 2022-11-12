/* 
  String Anagrams
  Given a string,
  return array where each element is a string representing a different anagram (a different sequence of the letters in that string).
  Ok to use built in methods
*/

const str1 = "lim";
const expected1 = ["ilm", "iml", "lim", "lmi", "mil", "mli"];
// Order of the output array does not matter

/**
 * Add params if needed for recursion.
 * Generates all anagrams of the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {Array<string>} All anagrams of the given str.
 */
// You will need more parameters!
function generateAnagrams(str) {
    const output = [];
    function traverse(str, perm = '') {
        const seen = new Set();
        if (!str) output.push(perm)
        for (let i = 0; i < str.length; i++) {
            if (!seen.has(str[i])) {
                seen.add(str[i]);
                traverse(str.slice(0, i) + str.slice(i + 1), perm + str[i]);
            }
        }
    }
    traverse(str)
    return output
}

console.log(generateAnagrams(str1)) //["ilm", "iml", "lim", "lmi", "mil", "mli"] (order may vary, that's okay)