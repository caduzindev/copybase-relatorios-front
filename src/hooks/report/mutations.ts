import { useMutation } from "@tanstack/react-query"
import { ReportAPI } from "../../shared/api/report"

export const usePostReport = () => {
    return useMutation({
        mutationFn: (file: File) => ReportAPI.sendReport(file)
    })
}