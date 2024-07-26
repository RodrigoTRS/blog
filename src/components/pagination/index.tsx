import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from "lucide-react";
import { PaginationButton } from "./pagination-button";

interface PaginationProps {
    basePath: string
    currentPage: number,
    perPage: number,
    totalPages: number
}

export function Pagination({ basePath, currentPage, perPage, totalPages }: PaginationProps) {

    const isFirstPage = currentPage === 1
    const isLastPage = currentPage === totalPages

    return (
        <div className="flex w-full justify-between items-center gap-2">
            <span>Página {currentPage} de {totalPages} </span>

            <div className="flex items-center gap-2">
                <PaginationButton
                    disabled={isFirstPage}
                    basePath={basePath}
                    navigateTo={1}
                >
                    <ChevronsLeft />
                </PaginationButton>
                <PaginationButton
                    disabled={isFirstPage}
                    basePath={basePath}
                    navigateTo={currentPage - 1}
                >
                    <ChevronLeft />
                </PaginationButton>
                <PaginationButton
                    disabled={isLastPage}
                    basePath={basePath}
                    navigateTo={currentPage + 1 }
                >
                    <ChevronRight />
                </PaginationButton>
                <PaginationButton
                    disabled={isLastPage}
                    basePath={basePath}
                    navigateTo={totalPages}
                >
                    <ChevronsRight />
                </PaginationButton>
            </div>
        </div>
    )
}