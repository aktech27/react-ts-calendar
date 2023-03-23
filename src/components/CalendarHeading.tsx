export default function CalendarHeading({ heading }: { heading: string | null }): JSX.Element {
  return (
    <thead>
      <tr>
        <th className="calendar-month-year" colSpan={7}>
          {heading}
        </th>
      </tr>
      <tr className="calendar-weeks">
        <th>Su</th>
        <th>Mo</th>
        <th>Tu</th>
        <th>We</th>
        <th>Th</th>
        <th>Fr</th>
        <th>Sa</th>
      </tr>
    </thead>
  );
}
