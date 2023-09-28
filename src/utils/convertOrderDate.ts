const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export function convertOrderDate(orderDate: string) {
  const [date, time] = orderDate.split("T");
  const [year, month, day] = date.split("-");
  const [hours, minutes] = time.split(":");

  return { time: `${hours} : ${minutes}`, date: `${day} ${months[Number(month) - 1]} ${year}` };
}
