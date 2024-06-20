import { useSearchProductRequest } from "@/api/productApi"
import MainsideBar from "@/components/shared/MainsideBar"
import { MobileSideBar } from "@/components/shared/MobileSideBar"
import PaginationSelector from "@/components/shared/PaginationSelector"
import ProductCard from "@/components/shared/ProductCard"
import SearchBar from "@/components/shared/SearchBar"
import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { product } from "@/lib/types"
import { ChevronRight, X } from "lucide-react"
import { useEffect, useState } from "react"


export type SearchProductType = {
    searchQuery: string,
    category: string,
    size: string,
    price: number
    page: number
}
type pagination = {
    totalProduct: number,
    page: number,
    pages: number
}
const SearchPage = () => {
    const [searchState, setSearchState] = useState<SearchProductType>({
        searchQuery: "",
        category: "",
        size: "",
        price: 1000,
        page: 1
    })
    const { SearchProduct, isLoading } = useSearchProductRequest(searchState)
    const [productData, setProductData] = useState<product[]>([])
    const [pagination, setPagination] = useState<pagination>({
        totalProduct: 0,
        page: 1,
        pages: 1
    })

    const setSearchquery = (value: string) => {
        setSearchState((prevState) => ({
            ...prevState,
            searchQuery: value,
            page: 1
        }))
    }
    useEffect(() => {
        if (SearchProduct) {
            setProductData(SearchProduct.data)
            setPagination(SearchProduct.pagination)
        }
    }, [SearchProduct, searchState])
    const HandleCategoryChange = (value: string) => {
        setSearchState((prevState) => ({
            ...prevState,
            category: value,
            page:1
        }))
    }
    const HandleSizeChange = (value: string) => {
        setSearchState((prevState) => ({
            ...prevState,
            size: value,
            page:1
        }))
    }
    const HandlePriceChange = (value: number[]) => {
        const price = value[0]
        setSearchState((prevState) => ({
            ...prevState,
            price,
            page:1
        }))
    }
    const HandlePageChange = (page: number) => {
        setSearchState((prevState) => ({
            ...prevState,
            page
        }))
    }
    const clearCategoryQuery = () => {
        setSearchState((prevState) => ({
            ...prevState,
            category: ""
        }))
    }
    const clearSizeQuery = () => {
        setSearchState((prevState) => ({
            ...prevState,
            size: ""
        }))
    }
    console.log(searchState)
    return (
        <div className="flex flex-col">
            <div className="container bg-Neutral-white-W100 w-full py-6">
                <div className="flex gap-2 text-[14px] items-center">
                    <span className=" font-medium text-Neutral-B500">Ecommerce</span>
                    <ChevronRight className="w-4 h-4 text-Neutral-B400" />
                    <span className=" text-Neutral-B900 font-medium">Search</span>
                </div>
            </div>

            <div className="flex container flex-col lg:flex-row w-full h-full py-10 gap-5 relative">
                <div className="hidden w-1/4 h-full lg:flex sticky top-24">
                    <MainsideBar onCategoryChange={HandleCategoryChange}
                        onPriceChange={HandlePriceChange}
                        onSizeChange={HandleSizeChange}
                        searchState={searchState}
                    />
                </div>
                <div className="flex flex-col w-full lg:w-3/4 min-h-screen">
                    {/**Applied filter */}
                    <div className="py-4">
                        <span className="text-[14px] font-medium mb-3">Applied Filters:</span>
                        <div className="flex gap-5 flex-wrap">
                            {searchState.category && <Card className="flex p-3 rounded-full items-center gap-3 text-[12px] text-Neutral-B900">
                                <span>
                                    {searchState.category}
                                </span>
                                <X className="w-4 h-4 cursor-pointer" onClick={clearCategoryQuery} />
                            </Card>
                            }
                            {searchState.size && <Card className="flex p-3 rounded-full items-center gap-3 text-[12px] text-Neutral-B900 uppercase">
                                <span>
                                    size: {searchState.size}
                                </span>
                                <X className="w-4 h-4 cursor-pointer" onClick={clearSizeQuery}/>
                            </Card>
                            }
                        </div>
                    </div>
                    {/**mobile filter button and total amount of product */}
                    <div className="flex w-full justify-between lg:justify-start items-center">
                        <div className="flex gap-1 text-[12px] text-Neutral-B500 font-normal py-4">
                            Showing <span>{searchState.page > 1 ? (9 * (searchState.page - 1)) : 1}</span>
                            - <span>{9 * searchState.page}</span> of
                            <span>{pagination.totalProduct} Results</span>
                        </div>
                        <div className="flex lg:hidden">
                            <MobileSideBar onCategoryChange={HandleCategoryChange}
                                onPriceChange={HandlePriceChange}
                                onSizeChange={HandleSizeChange}
                                searchState={searchState} />
                        </div>
                    </div>
                    {/**search bar */}
                    <div className="w-full flex justify-center">
                        <SearchBar value={searchState.searchQuery} onChange={setSearchquery} />
                    </div>
                    {/**Product card */}
                    <div className="flex w-full h-full py-10 flex-1 ">

                        {
                            !SearchProduct || productData.length === 0 && (
                                <div className="flex w-full min-h-full justify-center items-center text-Neutral-B900 text-[14px] text-center">
                                    No Product Found
                                </div>
                            )
                        }
                        <div>
                            {
                                isLoading ? (
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full gap-8 justify-center">
                                       <Skeleton className="w-[238px] h-[312px] bg-Neutral-white-W100"/>
                                       <Skeleton className="w-[238px] h-[312px] bg-Neutral-white-W100"/>
                                       <Skeleton className="w-[238px] h-[312px] bg-Neutral-white-W100"/>
                                    </div>
                                ):(
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full gap-8 justify-center">
                                    {
                                        productData.map((product) => (
                                            <ProductCard product={product} />
                                        ))
                                    }
                                </div>
                                )
                            }
                        </div>
                    </div>
                    {/**pagination */}
                    <div>
                        <PaginationSelector onPageChange={HandlePageChange}
                            page={searchState.page}
                            pages={pagination.pages} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchPage