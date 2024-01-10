import { useContext } from "react";
import { ReportStoreContext } from "../../providers/report/ReportStore";

export const useReportStore = () => useContext(ReportStoreContext)