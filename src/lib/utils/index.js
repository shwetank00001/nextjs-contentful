export function formatDate(
  dateString,
  options = { year: 'numeric', month: 'long', day: 'numeric' }
) {
  try {
    const formattedDate = new Intl.DateTimeFormat('en-US', options).format(
      new Date(dateString)
    )
    return formattedDate
  } catch (error) {
    console.error('Error formatting date:', error.message)
    return 'Date atrribute here'
  }
}


const validDateString = '2023-11-29'
const formattedDate = formatDate(validDateString)
console.log(formattedDate) 

const invalidDateString = '2023-02-30'
const formattedInvalidDate = formatDate(invalidDateString)
console.log(formattedInvalidDate) 
