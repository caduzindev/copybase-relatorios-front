import { PaginationReturn } from "../types/enumerators";
import { Report, SearchParamsReport } from "../types/report";
import { instance } from "./instance";

const API_V1 = '/report/v1'

export class ReportAPI {
    static async sendReport(file: File): Promise<void> {
        try {
            const formData = new FormData()
            formData.append('uploadReport', file);

            await instance.post(`${API_V1}/request`, formData)
        } catch (err) {
            console.log(err)
            throw err;
        }
    }

    static async getAllReports(filter: SearchParamsReport): Promise<PaginationReturn<Report>> {
        try {
            const reports = await instance.get<PaginationReturn<Report>>(`${API_V1}/list`, {
                params: filter
            })
            return reports.data;
        } catch(err) {
            console.log(err)
            throw err;
        }
    }
}