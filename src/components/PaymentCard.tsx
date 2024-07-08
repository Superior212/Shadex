import MemoEditIcon from "@/icons/EditIcon";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Separator } from "./ui/separator";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import MemoLogo from "@/icons/Logo";
import { Link } from "react-router-dom";
import MemoBackArrow from "@/icons/BackArrow";
import MemoVisaCard from "@/icons/VisaCard";
import { Badge } from "./ui/badge";
import MemoDeleteIcon from "@/icons/DeleteIcon";
import MemoMoney from "@/icons/Money";
import AddNewCardDialog from "./AddNewCardDialog";
import { useState } from "react";
import PayOnDeliveryDialog from "./PayOnDeliveryDialog";

const PaymentCard = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isPayOnDeliveryDialogOpen, setIsPayOnDeliveryDialogOpen] =
    useState(false);
  const [paymentMethod, setPaymentMethod] = useState("debit-card");

  const handleChooseCard = () => {
    setIsDialogOpen(false);
  };

  const handlePaymentMethodChange = (method: string) => {
    if (method === "pay-on-delivery") {
      setIsDialogOpen(false);
    }
    setPaymentMethod(method);

    // Open dialog for Pay on Delivery
    if (method === "pay-on-delivery") {
      setIsPayOnDeliveryDialogOpen(true);
    }
  };

  return (
    <div>
      <Card className="bg-[#EEFFFC]">
        <CardContent>
          <Separator />
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-4 garamond">Payment Method</h2>
          </div>
          <main className="px-5 max-w-[80rem] mx-auto">
            <div className="mt-4 flex justify-between">
              <h2 className="text-base font-[400] lato">Payment Options</h2>
            </div>
            <div className="mt-4 flex justify-between">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="debit-card"
                  name="payment-method"
                  className="accent-[#00A181]"
                  checked={paymentMethod === "debit-card"}
                  onChange={() => handlePaymentMethodChange("debit-card")}
                />
                <label htmlFor="debit-card" className="text-base lato">
                  Debit Card
                </label>
              </div>
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  id="pay-on-delivery"
                  name="payment-method"
                  className="accent-[#00A181]"
                  checked={paymentMethod === "pay-on-delivery"}
                  onChange={() => handlePaymentMethodChange("pay-on-delivery")}
                />
                <label htmlFor="pay-on-delivery" className="text-base lato">
                  Pay on Delivery
                </label>
              </div>
            </div>
            <span className="lato font-[400]">**** **** **** 1234</span>
          </main>
        </CardContent>
        <CardFooter className="flex gap-2">
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-transparent gap-2 rounded-none hover:bg-transparent text-[#3A3A3A] border border-[#3A3A3A]">
                Change Payment Method
                <MemoEditIcon className="w-4 h-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[390px] sm:max-w-[825px]">
              <DialogHeader>
                <main className="sm:flex items-center justify-between">
                  <div className="flex justify-center sm:justify-start">
                    <MemoLogo className="md:w-28 w-20 h-20 md:h-28" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="w-full max-w-[22rem] sm:max-w-md relative space-x-10 sm:space-x-20 flex justify-between items-center">
                      <div className="sm:w-[67%] w-[73%] h-[2px] absolute sm:left-28 left-16 z-10 top-[0.3rem] bg-[#E3DFDF]" />
                      <div className="flex flex-col items-center z-10">
                        <div className="flex items-center">
                          <div className="h-3 w-3 rounded-full bg-[#00A181]" />
                        </div>

                        <div className="text-sm font-medium text-[#3A3A3A] my-6">
                          Shipping
                        </div>
                      </div>
                      <div className="flex flex-col items-center z-10">
                        <div className="flex items-center">
                          <div className="h-3 w-3 rounded-full bg-[#00A181]" />
                        </div>
                        <div className="text-sm font-medium text-[#3A3A3A] my-6">
                          Payment
                        </div>
                      </div>
                      <div className="flex flex-col items-center z-10">
                        <div className="flex items-center">
                          <div className="h-3 w-3 rounded-full bg-[#E3DFDF]" />
                        </div>
                        <div className="text-sm font-medium text-[#3A3A3A] my-6">
                          Review
                        </div>
                      </div>
                    </div>
                  </div>
                </main>
                <DialogTitle className="my-7 flex sm:flex-row flex-col items-center justify-between">
                  <h1 className="garamond text-[#00A181] text-2xl">
                    Payment Method
                  </h1>

                  <Link
                    to="/"
                    className="flex items-center lato font-[400] my-3 sm:my-0 text-sm text-[#3A3A3A]">
                    <MemoBackArrow className="h-4 w-4" />
                    Back to Shipping Address
                  </Link>
                </DialogTitle>
              </DialogHeader>
              <Card className="w-full max-w-md border-none">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="garamond">Card</CardTitle>
                    <MemoVisaCard className="h-16 w-16" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Badge className="bg-[#DFF4F0] text-[#3A3A3A] hover:bg-[#DFF4F0]">
                    Default
                  </Badge>
                  <p className="lato">Debit Card</p>
                  <h2>Kathryn Murphy</h2>
                  <div className="grid gap-2">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <div>
                          <div className="font-medium">**** **** **** 1234</div>
                          <div className="flex items-center space-x-10">
                            <p className="text-muted-foreground text-sm">
                              10/26
                            </p>
                            <p>***</p>
                          </div>
                          <Button className="bg-transparent hover:bg-transparent">
                            <MemoDeleteIcon className="h-4 w-4" />
                            <span className="text-[#3A3A3A] ml-2">Delete</span>
                          </Button>
                        </div>
                        <div className="flex space-x-12 my-3">
                          <Button
                            onClick={handleChooseCard}
                            className="border rounded-none bg-transparent hover:bg-transparent border-[#3A3A3A] text-[#3A3A3A]">
                            Select this Card
                          </Button>
                          <AddNewCardDialog>
                            <Button className="border rounded-none bg-transparent hover:bg-transparent border-[#3A3A3A] text-[#3A3A3A]">
                              Add New Card
                            </Button>
                          </AddNewCardDialog>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-36 my-6">
                      <div className="flex items-center gap-2">
                        <input
                          type="radio"
                          id="pay-on-delivery-alt"
                          name="payment-method-alt"
                          className="accent-[#00A181]"
                          checked={paymentMethod === "pay-on-delivery"}
                          onChange={() =>
                            handlePaymentMethodChange("pay-on-delivery")
                          }
                        />
                        <label
                          htmlFor="pay-on-delivery-alt"
                          className="text-base lato">
                          Pay on Delivery
                        </label>
                      </div>
                      <MemoMoney className="h-8 w-8" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
      <PayOnDeliveryDialog
        isOpen={isPayOnDeliveryDialogOpen}
        onClose={() => setIsPayOnDeliveryDialogOpen(false)}
      />
    </div>
  );
};

export default PaymentCard;
