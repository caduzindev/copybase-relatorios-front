export interface SearchParams {
    page: number;
}

export interface PaginationReturn<T> {
    data: T[];
    currentPage: number;
    totalPages: number;
}