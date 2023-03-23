# Calendar Component

## Approach
Created a 2D array from the given `date` prop, one dimension for week and another for individual days. Mapped through each week for creating the calendar rows. Mapped through each day of a week for creating the individual cells

## Requirements Implemented

- A reusable component `<Calendar/>` is created which accepts a `date` prop.
- The first row of the calendar displays the `date` prop's month and year.
- The second row of the calendar displays the days of the week, one per column - Sunday to Saturday.
- Dates are aligned properly according to the corresponding day of the given `date` prop's month and year.
- The appropriate date cell is highlighted based on the `date` props date.

## Additional Implementations

- Using `react-testing-library` the given dates **03/10/2022** and **23/03/2020** are tested if correct month and year are shown.
- When Invalid Date is given, instead of showing calendar, **Invalid date given** is shown.
- INTL library is used for formatting dates.
- Added CSS to improve the overall UI of the component.

