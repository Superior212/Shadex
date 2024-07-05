import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { products as initialProducts } from "@/lib/data";
import { HeartIcon } from "lucide-react";
import MemoStarFilled from "@/icons/StarFilled";
import MemoStar from "@/icons/Star";
import { Select, SelectContent, SelectItem, SelectTrigger } from "./ui/select";
import MemoFilter from "@/icons/Filter";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function ProductCatalog() {
  const [products, setProducts] = useState(initialProducts);
  const [sortBy, setSortBy] = useState("featured");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const handleFavorite = (id: number) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, isFavorite: !product.isFavorite }
          : product
      )
    );
  };

  const sortedProducts = useMemo(() => {
    switch (sortBy) {
      case "featured":
        return products;
      case "price-low-to-high":
        return [...products].sort((a, b) => a.price - b.price);
      case "price-high-to-low":
        return [...products].sort((a, b) => b.price - a.price);
      case "newest":
        return [...products].sort((a, b) => b.id - a.id);
      default:
        return products;
    }
  }, [products, sortBy]);

  const paginatedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return sortedProducts.slice(startIndex, endIndex);
  }, [sortedProducts, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="hsection container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-32 focus:ring-0 ring-offset-0  bg-transparent border-none outline-none active:outline-none flex items-center gap-2">
            <span>Best Seller</span>
          </SelectTrigger>
          <SelectContent className="w-32 ">
            <SelectItem className="text-sm" value="featured">
              Featured
            </SelectItem>
            <SelectItem className="text-sm" value="price-low-to-high">
              Price: Low to High
            </SelectItem>
            <SelectItem className="text-sm" value="price-high-to-low">
              Price: High to Low
            </SelectItem>
            <SelectItem className="text-sm" value="newest">
              Newest
            </SelectItem>
          </SelectContent>
        </Select>
        <div className="flex items-center">
          <span>Filter</span>
          <Button
            className="border-none bg-transparent hover:bg-transparent"
            size="icon">
            <MemoFilter className="w-5 h-5" />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {paginatedProducts.map((product) => (
          <div key={product.id} className=" overflow-hidden ">
            <img
              src={product.image}
              alt={product.title}
              className="w-full sm:h-80 object-cover"
            />
            <div className="p-4 h-48">
              <h3 className="sm:text-xl text-[#3A3A3A] text-center lato font-[400]">
                {product.title}
              </h3>
              <div className="flex justify-center items-center gap-0.5 my-2">
                <MemoStarFilled className="w-5 h-5 fill-[#FFD233]" />
                <MemoStarFilled className="w-5 h-5 " />
                <MemoStarFilled className="w-5 h-5 " />
                <MemoStarFilled className="w-5 h-5 " />
                <MemoStar className="w-5 h-5 fill-muted stroke-muted-foreground" />
              </div>
              <p className="text-[#3A3A3A] sm:text-2xl lato text-center font-[700]">
                ₦{product.price}
              </p>
              <div className="flex items-center justify-between gap-2 mt-4">
                <Button
                  className="bg-transparent text-[#3A3A3A] hover:bg-transparent border border-[#3A3A3A] rounded-none"
                  size="sm">
                  Add to Cart
                </Button>
                <Button
                  className="sm:border h-9 w-9 sm:w-auto sm:p-2 sm:h-auto rounded-none border-[#3A3A3A]"
                  size="icon"
                  variant="ghost"
                  onClick={() => handleFavorite(product.id)}>
                  <HeartIcon
                    className={`w-4 h-4 sm:w-5 sm:h-5 ${
                      product.isFavorite ? "fill-red-500" : "fill-white"
                    }`}
                  />
                  <span className="sr-only">Favorite</span>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={() => handlePageChange(currentPage - 1)}
              />
            </PaginationItem>
            {Array.from({ length: totalPages }, (_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  href="#"
                  onClick={() => handlePageChange(index + 1)}
                  isActive={currentPage === index + 1}>
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            {totalPages > 5 && currentPage < totalPages - 2 && (
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
            )}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={() => handlePageChange(currentPage + 1)}
                isActive={currentPage === totalPages}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
