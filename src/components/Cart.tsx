import { useContext, useState } from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Link, useNavigate } from "react-router-dom";
import MemoBackArrow from "@/icons/BackArrow";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { MinusIcon, PlusIcon, TrashIcon } from "lucide-react";
import MemoFrontArrow from "@/icons/FrontArrow";
import { products } from "@/lib/data";
import { ShopContext } from "@/context/Shop-Context";
import { Product, ShopContextType } from "@/types";
import { Separator } from "./ui/separator";

export default function Cart() {
  const navigate = useNavigate();
  const {
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount,
    shippingMode,
    setShippingMode,
  } = useContext(ShopContext) as ShopContextType;

  const [cart] = useState<Product[]>(products);

  const handleRemoveItem = (id: string) => {
    updateCartItemCount(0, Number(id));
  };

  const totalPrice = getTotalCartAmount();

  const handleProceedToCheckout = () => {
    navigate("/review");
  };

  return (
    <section className="w-full py-12">
      <div className="container grid gap-6 md:gap-8 px-4 md:px-6">
        <div>
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold tracking-tight text-[#00A181] garamond">
              My Cart
            </h1>
            <Link to="/" className="flex items-center text-primary underline">
              <MemoBackArrow className="h-4 w-4" />
              Continue Shopping
            </Link>
          </div>
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
                                Color: {item.color}, Material: {item.material}
                              </span>
                            </div>
                          </TableCell>
                          <TableCell>${item.price.toFixed(2)}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
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
                            ${(item.price * cartItems[item.id]).toFixed(2)}
                          </TableCell>
                          <TableCell>
                            <Button
                              variant="outline"
                              size="icon"
                              onClick={() => handleRemoveItem(String(item.id))}>
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
                            Color: {item.color}, Material: {item.material}
                          </span>
                        </div>
                      </div>
                      <div className="mt-2">
                        <p className="font-[400] text-base my-2 lato">
                          ₦ {item.price.toFixed(2)}
                        </p>
                      </div>
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
                            updateCartItemCount(Number(e.target.value), item.id)
                          }
                        />
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => addToCart(item.id)}>
                          <PlusIcon className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="mt-2">
                        <p className="my-2 font-[400] text-base  lato">
                          Total: ₦{" "}
                          {(item.price * cartItems[item.id]).toFixed(2)}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                );
              }
              return null;
            })}
          </div>
          {totalPrice > 0 ? (
            <Card className="bg-[#EEFFFC]">
              <CardContent className="flex sm:flex-row flex-col sm:items-center justify-center sm:justify-between sm:px-5 px-8 py-2 max-w-[80rem] sm:mx-auto">
                <div className="">
                  <div className="grid  gap-2 py-5 sm:py-0">
                    <Label className="garamond text-xl" htmlFor="shipping-mode">
                      Choose Shipping Mode
                    </Label>
                    <RadioGroup
                      id="shipping-mode"
                      value={shippingMode}
                      onValueChange={setShippingMode}
                      className="gap-4 ">
                      <Label
                        htmlFor="standard"
                        className="flex items-center gap-2 my-3  sm:my-0  cursor-pointer">
                        <RadioGroupItem id="standard" value="standard" />
                        Door Step Delivery
                      </Label>
                      <Label
                        htmlFor="express"
                        className="flex items-center  my-3  sm:my-0   gap-2 cursor-pointer">
                        <RadioGroupItem id="express" value="express" />
                        Store Pick-up - Free
                      </Label>
                    </RadioGroup>
                  </div>
                </div>
                <div className="grid gap-4">
                  <div className="flex items-center gap-2 my-3  sm:my-0  justify-between">
                    <p className="font-medium">Subtotal</p>{" "}
                    <span>₦{totalPrice}</span>
                  </div>
                  <div className="flex items-center my-3  sm:my-0  justify-between">
                    <span className="font-medium">Shipping</span>
                    <span className="text-sm mx-4">
                      {shippingMode === "standard"
                        ? "Door Step Delivery"
                        : "Store Pick-up - Free"}
                    </span>
                  </div>
                  <Separator />
                  <div className="flex items-center my-3 sm:my-0 justify-between">
                    <span className="font-medium">Total</span>
                    <span>₦{totalPrice}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex sm:justify-end gap-2 my-3 sm:my-0">
                <Button
                  onClick={handleProceedToCheckout}
                  className="bg-transparent hover:bg-transparent text-[#3A3A3A] border border-[#3A3A3A]">
                  Proceed to Checkout
                  <MemoFrontArrow className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ) : (
            <Card>
              <CardContent className="flex items-center py-5 justify-center">
                <h1 className="text-2xl garamond font-[700] ">Cart is empty</h1>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}
