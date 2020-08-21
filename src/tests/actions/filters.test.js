import moment from 'moment';
import { setStartDate, setEndDate, setSortByAmount, setSortByDate, setTextFilter, } from '../../actions/filters';

test("should generate set start date action object",() => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test("should generate set end date action object",() => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('should generate set sort by amount action object', () => {
    const action = setSortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    });
});

test('should generate set sort by date action object', () => {
    const action = setSortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    });
});

test('should generate set text filter action object with provide value', () => {
    const action = setTextFilter('Coffee');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'Coffee'
    });
});

test('should generate set text filter action object with default value', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});