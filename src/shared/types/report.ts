import { SearchParams } from "./enumerators";

export interface Report {
    id: string;
    fileName: string;
    status: StatusReport;
    resultProcess: ReportMetricResult;
}

export type ReportMetricResult = MetricsReport | MetricsReportError

export interface MetricsReport {
    mrr: {
        months: string[],
        values: number[]
    },
    churnRate: {
        months: string[],
        values: number[]
    },
}

export interface MetricsReportError {
    reason: string;
    error: true
}

export enum StatusReport {
    PROCESSING = 1,
    DONE = 2,
    ERROR = 3
}

export interface SearchParamsReport extends SearchParams {
    status: StatusReport;
}