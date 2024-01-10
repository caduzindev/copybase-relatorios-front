import { Report } from "../../types/report"
import { ReportAction, ReportActionKind } from "./actions"

export interface ReportState {
    reports: Report[]
}

export const reportInitialState: ReportState = {
    reports: []
} 

export const reportReducer = (state: ReportState, action: ReportAction) => {
    switch(action.type) {
        case ReportActionKind.ADD_REPORT:
            return {...state, reports: [action.payload, ...state.reports]}
        case ReportActionKind.LIST_REPORT:
            return { ...state, reports: [...action.payload] };
    }
}