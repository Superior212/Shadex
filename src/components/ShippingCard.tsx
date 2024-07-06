import MemoFrontArrow from "@/icons/FrontArrow";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "@/context/Shop-Context";
import { ShopContextType } from "@/types";

const ShippingCard = () => {
  const navigate = useNavigate();
  const { getTotalCartAmount, shippingMode, setShippingMode } = useContext(
    ShopContext
  ) as ShopContextType;

  const totalPrice = getTotalCartAmount();

  const handleProceedToCheckout = () => {
    navigate("/review");
  };

  return (
    <div>
      <Card className="bg-[#EEFFFC]">
        <CardContent className="flex items-center justify-between px-5 py-2 max-w-[80rem] mx-auto">
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
                  className="flex items-center gap-2 cursor-pointer">
                  <RadioGroupItem id="standard" value="standard" />
                  Door Step Delivery
                </Label>
                <Label
                  htmlFor="express"
                  className="flex items-center gap-2 cursor-pointer">
                  <RadioGroupItem id="express" value="express" />
                  Store Pick-up - Free
                </Label>
              </RadioGroup>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="flex items-center gap-2 justify-between">
              <p className="font-medium">Subtotal</p> <span>₦{totalPrice}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Shipping</span>
              <span className="text-sm mx-4">
                {shippingMode === "standard"
                  ? "Door Step Delivery"
                  : "Store Pick-up - Free"}
              </span>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <span className="font-medium">Total</span>
              <span>₦{totalPrice}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end mr-24 gap-2">
          <Button
            onClick={handleProceedToCheckout}
            className="bg-transparent hover:bg-transparent text-[#3A3A3A] border border-[#3A3A3A]">
            Checkout
            <MemoFrontArrow className="h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ShippingCard;
