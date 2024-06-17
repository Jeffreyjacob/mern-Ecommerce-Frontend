import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Input } from "../ui/input";
import { useGetProductByUser } from "@/api/adminProduct";
import { useEffect, useState } from "react";
import { product } from "@/lib/types";
import { ArrowUpDown, Ellipsis, Trash } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import PaginationSelector from "./PaginationSelector";
import { Skeleton } from "../ui/skeleton";


export type AdminSearchState = {
    searchTerm: string,
    page: number
}


const GetUserProduct = () => {
    const [searchState, setSearchState] = useState<AdminSearchState>({
        searchTerm: "",
        page: 1
    })
    const { fetchProductByUser, isLoading } = useGetProductByUser(searchState);
    const [productData, setProductData] = useState<product[]>()

    useEffect(() => {
        setProductData(fetchProductByUser?.data)
    }, [fetchProductByUser, searchState])
    if (productData?.length === 0) {
        return <div className="w-full h-full">
            <h4 className="text-[14px] text-Neutral-B500">No Product Found</h4>
        </div>
    }
    const setSearchquery = (searchQuery: string) => {
        setSearchState((prevState) => ({
            ...prevState,
            searchTerm: searchQuery
        }))
    }
    const setPageChange = (page: number) => {
        setSearchState((prevState) => ({
            ...prevState,
            page
        }))
    }
    return (
        <Card className="h-full">
            <CardHeader>
                <CardTitle className="w-full">
                    <div className="flex justify-between items-center">
                        <h4 className="text-[18px] font-medium text-Neutral-B900">
                            Product
                        </h4>
                        <div>
                            <Input placeholder="Search Product"
                                onChange={(e) => setSearchquery(e.target.value)}
                                className=" border-[1px] border-Neutral-B100 text-Neutral-B300 shadow-none   bg-transparent" />
                        </div>
                    </div>
                </CardTitle>
                <CardContent>
                    <Table>
                        <TableCaption>
                            <PaginationSelector onPageChange={setPageChange}
                                page={fetchProductByUser?.pagination.page || 1}
                                pages={fetchProductByUser?.pagination.pages || 1} />
                        </TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">
                                    <ArrowUpDown className="w-5 h-5" />
                                </TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Price</TableHead>
                                <TableHead>category</TableHead>
                                <TableHead>Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        {
                            isLoading ? (
                                <TableBody>
                                    <TableRow className="flex flex-col gap-4 mt-5">
                                        <TableCell colSpan={5} className="p-0">
                                            <div className="flex flex-col gap-4 mt-5 w-full">
                                                <Skeleton className="h-[50px] w-full" />
                                                <Skeleton className="h-[50px] w-full" />
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            ) : (
                                <TableBody>
                                    {
                                        productData?.map((product, index) => (
                                            <TableRow key={index} className="text-[14px] text-Neutral-B500 font-medium">
                                                <TableCell>
                                                    <img src={product.imageUrl} width={35} height={35} className=" rounded-lg" />
                                                </TableCell>
                                                <TableCell>{product.title}</TableCell>
                                                <TableCell>${product.price}</TableCell>
                                                <TableCell>{product.category}</TableCell>
                                                <TableCell>
                                                    <Popover>
                                                        <PopoverTrigger>
                                                            <Ellipsis className="w-5 h-5" />
                                                        </PopoverTrigger>
                                                        <PopoverContent className="w-fit">
                                                            <Trash className=" text-red-500" />
                                                        </PopoverContent>
                                                    </Popover>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    }
                                </TableBody>
                            )
                        }
                    </Table>
                </CardContent>
            </CardHeader>
        </Card>
    )
}

export default GetUserProduct