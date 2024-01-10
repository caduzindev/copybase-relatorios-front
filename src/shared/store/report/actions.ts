export enum ReportActionKind {
    ADD_REPORT = 'ADD_REPORT',
    LIST_REPORT = 'LIST_REPORT'
}

export interface ReportAction {
    type: ReportActionKind;
    payload: any
}