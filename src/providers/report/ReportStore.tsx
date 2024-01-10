import { createContext, useCallback, useReducer } from "react";
import { reportInitialState, reportReducer } from "../../shared/store/report/reducer";
import { Report } from "../../shared/types/report";
import { ReportActionKind } from "../../shared/store/report/actions";

export const ReportStoreContext = createContext({})

type Props = {
    children: React.ReactNode
}
export const ReportStorePovider = ({ children }: Props) => {
    const [state, dispatch] = useReducer(reportReducer, reportInitialState)

    const addReport = useCallback((report: Omit<Report, 'resultProcess'>)  => {
        dispatch({
            type: ReportActionKind.ADD_REPORT,
            payload: report
        })
    }, [])

    const listReport = useCallback((reports: Report) => {
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