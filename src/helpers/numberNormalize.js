export default function normalizePhoneNumber(value) {
  const cleaned = value.replace(/\D/g, '');

  const patterns = [
    /^(\d{2})(\d{3})(\d{3})(\d{2})(\d{2})$/,
    /^(\d{3})(\d{3})(\d{2})(\d{2})$/,
    /^(\d{3})(\d{2})(\d{2})$/,
  ];

  for (const pattern of patterns) {
    const match = cleaned.match(pattern);
    if (match) {
      return match.slice(1).join('-');
    }
  }
  return cleaned;
}
