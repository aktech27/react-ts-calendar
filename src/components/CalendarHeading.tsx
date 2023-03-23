export default function CalendarHeading({ heading }: { heading: string }): JSX.Element {
  return (
    <thead>
      <tr>
        <th colSpan={7}>{heading}</th>
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
  );
}
