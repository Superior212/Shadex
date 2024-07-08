import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import MemoBackArrow from "@/icons/BackArrow";
import { ShopContext } from "@/context/Shop-Context";
import { Product, ShopContextType } from "@/types";
import { Button } from "./ui/button";
import { MinusIcon, PlusIcon, TrashIcon } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Card, CardContent } from "./ui/card";
import { products } from "@/lib/data";
import AddressCard from "./AddressCard";
import PaymentCard from "./PaymentCard";
import ShippingCard from "./ShippingCard";

export default function Review() {
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext) as ShopContextType;
  const [cart] = useState<Product[]>(products);

  return (
    <section className="w-full py-12">
      <div className="container grid gap-6 md:gap-8 px-4 md:px-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight text-[#00A181] garamond">
            Preview Order
          </h1>
          <Link to="/cart" className="flex items-center text-primary">
            <MemoBackArrow className="h-4 w-4" />
            Back to cart
          </Link>
        </div>
        <div className="grid gap-6">
          {cart.filter((each) => cartItems[each.id] !== 0).length > 0 && (
            <div className="hidden md:block">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="sm:pl-32">Item(s)</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>QTY</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead />
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cart.map((item) => {
                    if (cartItems[item.id] !== 0) {
                      return (
                        <TableRow key={item.id}>
                          <TableCell className="flex items-center space-x-3">
                            <img
                              src={item.image}
                              alt={item.name}
                              width={64}
                              height={64}
                              className="aspect-square rounded-md object-cover"
                            />
                            <div>
                              <p>{item.name}</p>
                              <span>
                                Color: {item.color} Material: {item.material}
                              </span>
                            </div>
                          </TableCell>
                          <TableCell>${item.price}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2 mt-2">
                              <Button
                                variant="outline"
                                size="icon"
                                onClick={() => removeFromCart(item.id)}>
                                <MinusIcon className="h-4 w-4" />
                              </Button>
                              <input
                                className="w-12 text-center border-none outline-none bg-inherit"
                                value={cartItems[item.id]}
                                onChange={(e) =>
                                  updateCartItemCount(
                                    Number(e.target.value),
                                    item.id
                                  )
                                }
                              />
                              <Button
                                variant="outline"
                                size="icon"
                                onClick={() => addToCart(item.id)}>
                                <PlusIcon className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                          <TableCell>
                            ${item.price * cartItems[item.id]}
                          </TableCell>
                          <TableCell>
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => removeFromCart(item.id)}>
                              <TrashIcon className="h-4 w-4" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      );
                    }
                    return null;
                  })}
                </TableBody>
              </Table>
            </div>
          )}
          <div className="block md:hidden">
            {cart.map((item) => {
              if (cartItems[item.id] !== 0) {
                return (
                  <Card key={item.id} className="mb-4 p-2 py-3">
                    <CardContent className="flex flex-col">
                      <div className="flex items-center space-x-3">
                        <img
                          src={item.image}
                          alt={item.name}
                          width={64}
                          height={64}
                          className="aspect-square rounded-md object-cover"
                        />
                        <div>
                          <p className="font-[700] text-xl garamond my-2">
                            {item.name}
                          </p>
                          <span className="lato text-base font-[400]">
                            Colour: {item.color} // Material: {item.material}
                          </span>
                        </div>
                      </div>
                      <div className="mt-2">
                        <p className="font-bold my-2 lato">₦ {item.price}</p>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <Button variant="outline" size="icon">
                          <MinusIcon className="h-4 w-4" />
                        </Button>
                        <input
                          className="w-12 text-center border-none outline-none bg-inherit"
                          value={cartItems[item.id]}
                          onChange={(e) =>
                            updateCartItemCount(Number(e.target.value), item.id)
                          }
                        />
                        <Button variant="outline" size="icon">
                          <PlusIcon className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="mt-2">
                        <p className="my-2 font-[400] text-base  lato">
                          Total: ₦ {item.price * cartItems[item.id]}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
              }
              return null;
            })}
          </div>

          <AddressCard />
          <PaymentCard />
          <ShippingCard />
        </div>
      </div>
    </section>
  );
}
