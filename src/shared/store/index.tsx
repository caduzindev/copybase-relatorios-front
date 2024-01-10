import { ReportStorePovider } from "../../providers/report/ReportStore";

type Props = {
    children: React.ReactNode;
}
export const RootStore = ({ children }: Props) => {
    return (
        <ReportStorePovider>{children}</ReportStorePovider>
    )
}