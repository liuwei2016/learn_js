const str = 'Red-Green-Blue';
// replaces the first occurrence only
str.replace('-', ' '); // Red Green-Blue
// use RegEx to replace all occurrences
str.replace(/\-/g, ' '); // Red Green Blue
str.replaceAll('-', ' '); // Red Green Blue