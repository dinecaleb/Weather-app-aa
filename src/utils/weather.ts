export function ToLocalDate (inputDate:number) {
    var date = new Date(inputDate *  1000);
    return date;
}