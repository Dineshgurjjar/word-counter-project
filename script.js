document.getElementById('text-input').addEventListener('input', function() {
    let text = this.value;

    // Word Count
    let words = text.trim().split(/\s+/).filter(word => word.length > 0);
    document.getElementById('word-count').innerText = words.length;

    // Character Count (excluding spaces)
    let charactersExcludingSpaces = text.replace(/\s+/g, '');
    document.getElementById('char-count').innerText = charactersExcludingSpaces.length;

    // Character Count (including spaces)
    let charactersIncludingSpaces = text;
    document.getElementById('char-count-spaces').innerText = charactersIncludingSpaces.length;

    // Sentence Count
    let sentences = text.split(/[.!?]/).filter(sentence => sentence.trim().length > 0);
    document.getElementById('sentence-count').innerText = sentences.length;

    // Paragraph Count
    let paragraphs = text.split(/\n+/).filter(paragraph => paragraph.trim().length > 0);
    document.getElementById('paragraph-count').innerText = paragraphs.length;

    // Reading Time (assuming average reading speed of 200 words per minute)
    let readingTime = Math.ceil(words.length / 200);
    document.getElementById('reading-time').innerText = readingTime;

    // Average Word Length
    let totalWordLength = words.reduce((total, word) => total + word.length, 0);
    let avgWordLength = (words.length > 0) ? (totalWordLength / words.length).toFixed(2) : 0;
    document.getElementById('avg-word-length').innerText = avgWordLength;

    // Most Frequent Word
    let wordFrequency = {};
    words.forEach(word => {
        word = word.toLowerCase();
        if (wordFrequency[word]) {
            wordFrequency[word]++;
        } else {
            wordFrequency[word] = 1;
        }
    });
    let mostFrequentWord = Object.keys(wordFrequency).reduce((a, b) => wordFrequency[a] > wordFrequency[b] ? a : b, '');
    document.getElementById('most-freq-word').innerText = mostFrequentWord || 'None';

    // Longest Word
    let longestWord = words.reduce((a, b) => a.length > b.length ? a : b, '');
    document.getElementById('longest-word').innerText = longestWord || 'None';
});
