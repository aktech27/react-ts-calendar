import { useEffect, useState } from "react";
import CalendarHeading from "./CalendarHeading";

export default function Calendar({ date }: { date: string }): JSX.Element {
  const [calendarHeading, setCalendarHeading] = useState<string>("");
  const [calendarBody, setCalendarBody] = useState<number[][]>();
  const [activeDate, setActiveDate] = useState<number>();

  const getMonthAndYear = (year: string, month: string): string => {
    let dateObject = new Date(parseInt(year), parseInt(month) - 1); //month starts from 0

    let monthAndYear = new Intl.DateTimeFormat("default", {
      month: "long",
      year: "numeric",
    }).format(dateObject);

    return monthAndYear;
  };

  const getWeekWiseDates = (year: string, month: string): number[][] => {
    let allDates: number[] = [];
    let weekWiseDates: number[][] = [];

    let startDay = new Date(parseInt(year), parseInt(month) - 1).getDay();
    let lastDate = new Date(parseInt(year), parseInt(month), 0).getDate();

    for (let startDate = 1; startDate <= lastDate; startDate++) {
      allDates.push(startDate);
    }

    //Insert 0 for other days before first day
    for (let i = 0; i < startDay; i++) {
      allDates.unshift(0);
    }
    console.log(allDates);

    //Create 2d array of 7 cols each
    while (allDates.length) {
      weekWiseDates.push(allDates.splice(0, 7));
    }
    console.log(weekWiseDates);

    return weekWiseDates;
  };

  useEffect(() => {
    const [dd, mm, yyyy] = date.split("/");
    setCalendarHeading(getMonthAndYear(yyyy, mm));
    setCalendarBody(getWeekWiseDates(yyyy, mm));
    setActiveDate(parseInt(dd));
  }, [date]);

  return (
    <table>
      <CalendarHeading heading={calendarHeading} />
      <tbody>
        {calendarBody?.map((weeks) => (
          <tr>
            {weeks.map((day) =>
              //show only if day is not zero
              day ? (
                <td className={day === activeDate ? "date active" : "date"}>{day}</td>
              ) : (
                <td className="no-date"></td>
              )
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
