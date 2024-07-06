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
import { Card, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import MemoBackArrow from "@/icons/BackArrow";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { MinusIcon, PlusIcon, TrashIcon } from "lucide-react";
import MemoFrontArrow from "@/icons/FrontArrow";
import { products } from "@/lib/data";
import { ShopContext } from "@/context/Shop-Context";
import { Product, ShopContextType } from "@/types";

export default function Component() {
  const { cartItems } = useContext(ShopContext) as ShopContextType;
  const [shippingMode, setShippingMode] = useState("standard");
  const [cart, setCart] = useState<Product[]>(products);

  const handleQuantityChange = (id: number, quantity: number) => {
    setCart(
      cart.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const handleRemoveItem = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

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
                      <TableCell>${item.price.toFixed(2)}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() =>
                              handleQuantityChange(
                                item.id,
                                Math.max(item.quantity - 1, 1)
                              )
                            }>
                            <MinusIcon className="h-4 w-4" />
                          </Button>
                          <span>{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() =>
                              handleQuantityChange(item.id, item.quantity + 1)
                            }>
                            <PlusIcon className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                      <TableCell>
                        ${(item.price * item.quantity).toFixed(2)}
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => handleRemoveItem(item.id)}>
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
          <Card className="bg-[#EEFFFC]">
            <main className="flex items-center justify-between px-5 py-2 max-w-[80rem] mx-auto">
              <div className="">
                <div className="grid gap-2">
                  <Label className="garamond text-xl" htmlFor="shipping-mode">
                    Choose Shipping Mode
                  </Label>
                  <RadioGroup
                    id="shipping-mode"
                    value={shippingMode}
                    onValueChange={setShippingMode}
                    className="gap-4">
                    <Label
                      htmlFor="standard"
                      className="flex lato items-center gap-2 cursor-pointer">
                      <RadioGroupItem id="door" value="standard" />
                      Door Step Delivery
                    </Label>
                    <Label
                      htmlFor="express"
                      className="flex items-center lato gap-2 cursor-pointer">
                      <RadioGroupItem id="store" value="express" />
                      Store Pick up - Free
                    </Label>
                  </RadioGroup>
                </div>
              </div>
              <div className="grid gap-4">
                <div className="flex items-center gap-2 justify-between">
                  <p className="font-medium">Sub total</p>{" "}
                  <span>₦{totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Shipping</span>
                  <span>-</span>
                </div>
                <Separator />
                <div className="flex items-center justify-between">
                  <span className="font-medium">Total</span>
                  <span>₦{totalPrice.toFixed(2)}</span>
                </div>
              </div>
            </main>
            <CardFooter className="flex justify-end gap-2">
              <Button className="bg-transparent hover:bg-transparent text-[#3A3A3A] border border-[#3A3A3A]">
                Proceed to Checkout
                <MemoFrontArrow className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
