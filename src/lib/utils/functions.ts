import moment from 'moment';

export const truncate = (text: string): string => {
  return text.length > 100 ? `${text.slice(0, 99)}...` : text;
};

export const milliToHours = (value: number): string|number => {
  return moment.utc(value).format("HH:mm:ss");
};

export const formatDate = (value: string, format="ll") => {
  return moment(value).format(format);
};

export const getInitials = (name: string) => {
  return name.trim().split(" ").map(item => item.trim().charAt(0)).join("");
}