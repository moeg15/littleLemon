import { render, screen } from "@testing-library/react";

import * as timeUtils from './componets/BokkingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})




describe('timeUtils', () => {
  describe('initializeTimes', () => {
    it('should return the correct initial times', () => {
      const expectedTimes = ["18:00", "2:00", "1:00", "21:00", "22:00"];
      expect(timeUtils.initializeTimes()).toEqual(expectedTimes);
    });
  });

  describe('updateTimes', () => {
    it('should return the same value that is provided in the state when no action type matches', () => {
      const initialState = ["12:00", "13:00", "14:00"];
      const action = { type: 'UNKNOWN_ACTION' };
      expect(timeUtils.updateTimes(initialState, action)).toEqual(initialState);
    });

    it('should return the initialized times when action type is UPDATE_TIMES', () => {
      const initialState = ["12:00", "13:00", "14:00"];
      const action = { type: 'UPDATE_TIMES', date: '2023-01-01' };
      const expectedTimes = ["18:00", "2:00", "1:00", "21:00", "22:00"];
      expect(timeUtils.updateTimes(initialState, action)).toEqual(expectedTimes);
    });
  });
});