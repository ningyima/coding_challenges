// Given a text document, return the top N most frequent words.
const text = `‘What a curious feeling!’ said Alice; ‘I must be shutting up like a telescope.’ And so it was indeed: she was now only ten inches high, and her face brightened up at the thought that she was now the right size for going through the little door into that lovely garden. First, however, she waited for a few minutes to see if she was going to shrink any further: she felt a little nervous about this; ‘for it might end, you know,’ said Alice to herself, ‘in my going out altogether, like a candle. I wonder what I should be like then?’ And she tried to fancy what the flame of a candle is like after the candle is blown out, for she could not remember ever having seen such a thing.`



// returns [
//   { word: 'a', count: 7 },
//   { word: 'she', count: 7 },
//   { word: 'the', count: 5 },
//   { word: 'to', count: 4 },
//   { word: 'was', count: 4 },
// ]

// -------------------------------------------------------------------------------------

const topNWords = function(text, num) {
	if (text.length === 0) {
		return [];
	}

	let words = text.split(' ');
	let results = [];
	let map = {};	
	for (let i = 0; i < words.length; i++) {
		if (map[words[i]] === undefined) {
			map[words[i]] = 1;
		} else {
			map[words[i]]++;
		}
	}

	// wordsMap.forEach(x => {});
	// Object.entries(dictionary)  → [[‘foo’, 6],[‘word’, 5],...]
  let wordsMap = Object.entries(map);
  wordsMap.sort((a, b) => b[1] - a[1]);

  for(let j = 0; j < num; j++) {
    let obj = {};
    obj['word']= wordsMap[j][0];
    obj['count']=wordsMap[j][1];
    results.push(obj);
  }
  return results;
} 

console.log(topNWords(text, 5));
