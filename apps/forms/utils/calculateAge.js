export default function calculateAge(birthday) {
  const birthDate = new Date(birthday)
  const now = new Date()
  let age = now.getFullYear() - birthDate.getFullYear()
  const monthDifference = now.getMonth() - birthDate.getMonth()
  const dayDifference = now.getDate() - birthDate.getDate()

  // Adjust if the birthday hasn't occurred yet this year
  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age--
  }

  return age
}
