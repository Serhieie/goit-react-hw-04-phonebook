export default function normalizeName(value) {
  const splited = value
    .split(' ')
    .map(value =>
      value.toLowerCase().replace(/\b\w/g, char => char.toUpperCase())
    );

  return splited.join(' ').trim();
}
