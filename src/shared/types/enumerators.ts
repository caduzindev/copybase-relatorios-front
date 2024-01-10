export interface SearchParams {
    page?: number;
    orderBy?: 'desc' | 'asc';
}

export interface PaginationReturn<T> {
    data: T[];
    currentPage: number;
    totalPages: number;
}