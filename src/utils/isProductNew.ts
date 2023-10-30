import { DAYS_TO_PRODUCT_CONSIDER_NEW } from "../constants/settings";

export function isProductNew(createdAt: string) {
  const currentDate = new Date();
  const createdAtDate = new Date(createdAt);
  const millisecondsPerDay = 1000 * 60 * 60 * 24;

  const timeDifferenceInMilliseconds = currentDate.getTime() - createdAtDate.getTime();
  const daysSinceCreation = timeDifferenceInMilliseconds / millisecondsPerDay;

  return daysSinceCreation < DAYS_TO_PRODUCT_CONSIDER_NEW;
}
