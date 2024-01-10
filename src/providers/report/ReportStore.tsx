import { createContext, useCallback, useReducer } from "react";
import { reportInitialState, reportReducer } from "../../shared/store/report/reducer";
import { Report } from "../../shared/types/report";
import { ReportActionKind } from "../../shared/store/report/actions";

interface IReportStoreContext {
    reports: Report[];
    addReport: (report: Omit<Report, 'resultProcess' | 'id'>) => void;
    listReport: (reports: Report[]) => void
}
export const ReportStoreContext = createContext({} as IReportStoreContext);

type Props = {
    children: React.ReactNode
}
export const ReportStorePovider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(reportReducer, reportInitialState)

    const addReport = useCallback((report: Omit<Report, 'resultProcess' | 'id'>)  => {
        dispatch({
            type: ReportActionKind.ADD_REPORT,
            payload: report
        })
    }, [])

    const listReport = useCallback((reports: Report[]) => {
        dispatch({
            type: ReportActionKind.LIST_REPORT,
            payload: reports
        })
    }, [])

    return (
        <ReportStoreContext.Provider value={{
            reports: state.reports,
            addReport,
            listReport
        }}>{children}</ReportStoreContext.Provider>
    )
}