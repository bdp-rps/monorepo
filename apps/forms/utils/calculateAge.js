export default function calculateAge(birthday) {
  if (!(birthday instanceof Date) || isNaN(birthday)) {
    throw new Error('Invalid Date')
  }
  const now = new Date()
  const age = now.getFullYear() - birthday.getFullYear()
  const monthDifference = now.getMonth() - birthday.getMonth()
  const dayDifference = now.getDate() - birthday.getDate()

  // Adjust if the birthday hasn't occurred yet this year
  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    return age - 1
  }

  return age
}
