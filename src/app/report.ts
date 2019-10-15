export class Report {
    id: number;
    title = '';
    date = '';
    time = '';
    user = '';
    office = '';
    dateTime = '';

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
