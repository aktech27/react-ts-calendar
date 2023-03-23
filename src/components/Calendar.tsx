import { useEffect, useState } from "react";

export default function Calendar({ date }: { date: string }): JSX.Element {
  const [tableHeading, setTableHeading] = useState<string>("");

  const getMonthAndYear = (year: string, month: string): string => {
    let dateObject = new Date(parseInt(year), parseInt(month) - 1); //month starts from 0

    let monthAndYear = new Intl.DateTimeFormat("default", {
      month: "long",
      year: "numeric",
    }).format(dateObject);

    return monthAndYear;
  };

  useEffect(() => {
    const [dd, mm, yyyy] = date.split("/");
    setTableHeading(getMonthAndYear(yyyy, mm));
  }, [date]);

  return (
    <table>
      <thead>
        <tr>
          <th colSpan={7}>{tableHeading}</th>
        </tr>
        <tr>
          <th>Su</th>
          <th>Mo</th>
          <th>Tu</th>
          <th>We</th>
          <th>Th</th>
          <th>Fr</th>
          <th>Sa</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
          <td>7</td>
        </tr>
        <tr>
          <td>8</td>
          <td>9</td>
          <td>10</td>
          <td>11</td>
          <td>12</td>
          <td>13</td>
          <td>14</td>
        </tr>
      </tbody>
    </table>
  );
}
