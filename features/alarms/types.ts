// http://mdn.io/getDay
export enum Weekday {
  SUNDAY = 0,
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
}

// Only for user-facing inputs etc.
export type Time = {
  hours: number;
  minutes: number;
  seconds: number;
};

export type Alarm = {
  id: string;
  from?: Date; // if undefined, the alarm does not transition over time
  to: Date;
  weekdays: Weekday[];
  active: boolean;
  sound: string;
};
