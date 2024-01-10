import { useQuery } from "@tanstack/react-query"
import { SearchParamsReport } from "../../shared/types/report"
import { ReportAPI } from "../../shared/api/report"

export const useGetReportsInterval = (filter: SearchParamsReport, intervalInMilliseconds: number) => {
    return useQuery({
        queryKey: ['Report', filter],
        queryFn: () => ReportAPI.getAllReports(filter),
        refetchInterval: intervalInMilliseconds
    })
}