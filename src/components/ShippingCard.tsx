import MemoFrontArrow from "@/icons/FrontArrow";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useContext, useState } from "react";
import { ShopContext } from "@/context/Shop-Context";
import { ShopContextType } from "@/types";
import CheckoutDialog from "./CheckoutDialog";

const ShippingCard = () => {
  // const navigate = useNavigate();
  const { getTotalCartAmount, shippingMode, setShippingMode } = useContext(
    ShopContext
  ) as ShopContextType;

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const totalPrice = getTotalCartAmount();

  const handleProceedToCheckout = () => {
    setIsDialogOpen(true);
  };

  return (
    <div>
      <Card className="bg-[#EEFFFC]">
        <CardContent className="flex sm:flex-row flex-col sm:items-center  justify-center sm:justify-between sm:px-5 px-8 py-2 sm:max-w-[80rem] mx-auto">
          <div className="">
            <div className="grid gap-2 py-5 sm:py-0">
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
                  className="flex items-center gap-2 my-3  sm:my-0 cursor-pointer">
                  <RadioGroupItem id="standard" value="standard" />
                  Door Step Delivery
                </Label>
                <Label
                  htmlFor="express"
                  className="flex items-center gap-2 my-3  sm:my-0 cursor-pointer">
                  <RadioGroupItem id="express" value="express" />
                  Store Pick-up - Free
                </Label>
              </RadioGroup>
            </div>
          </div>
          <div className="grid gap-4">
            <div className="flex items-center gap-2 my-3  sm:my-0 justify-between">
              <p className="font-medium">Subtotal</p> <span>₦{totalPrice}</span>
            </div>
            <div className="flex items-center my-3  sm:my-0 justify-between">
              <span className="font-medium">Shipping</span>
              <span className="text-sm mx-4">
                {shippingMode === "standard"
                  ? "Door Step Delivery"
                  : "Store Pick-up - Free"}
              </span>
            </div>
            <Separator />
            <div className="flex items-center my-3  sm:my-0 justify-between">
              <span className="font-medium">Total</span>
              <span>₦{totalPrice}</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex sm:justify-end justify-center my-3  sm:my-0 sm:mr-24 gap-2">
          <Button
            onClick={handleProceedToCheckout}
            className="bg-transparent hover:bg-transparent text-[#3A3A3A] rounded-none border border-[#3A3A3A]">
            Checkout
            <MemoFrontArrow className="h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
      <CheckoutDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </div>
  );
};

export default ShippingCard;
