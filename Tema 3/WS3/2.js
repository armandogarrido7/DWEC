/*
Over an array with names, find all entries whose firstname starts with 'J', create projection combined of only the initials of the name and then sort alphabetically
*/
words = ["José Juan", "Antonio", "pepe", "jaime","lucas", "josé"];
filtered_words = (words.filter(word => word[0].toLowerCase()==='j')).sort();
document.write(filtered_words);