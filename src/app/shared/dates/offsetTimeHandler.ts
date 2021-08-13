export class OffsetTimeHandler {
    public static UTCFromLocal(date: Date) {
        return new Date(date.toUTCString());
    }

    public static LocalFromUTC(date: Date) {
        const localDate = new Date(date.toString() + 'Z');
        return localDate;
    }
}