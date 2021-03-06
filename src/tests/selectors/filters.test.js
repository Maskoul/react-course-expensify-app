import moment from 'moment';
import selectExpense from '../../selectors/filters';
import expenses from '../fixtures/expense';

test('should filter by text value', () => {
    const filters= {
        text: 'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpense(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0]])
});

test('should filter by startDate value', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    };
    const result = selectExpense(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0]])
});


test('should filter by endDate value', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    };
    const result = selectExpense(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[1]])
});

test('should filter sortBy date', () => {
    const filters = {
        text:'',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpense(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]])
});

test('should filter sortBy amount', () => {
    const filters = {
        text:'',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const result = selectExpense(expenses, filters);
    expect(result).toEqual([expenses[1], expenses[2], expenses[0]])
});