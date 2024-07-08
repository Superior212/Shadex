import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import MemoLogo from "@/icons/Logo";
import { Separator } from "./ui/separator";
import { Card } from "./ui/card";
import MemoVisaCard from "@/icons/VisaCard";
import MemoMoney from "@/icons/Money";
import { Label } from "./ui/label";
import { useState } from "react";

const PayOnDeliveryDialog = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  const [selectedOption, setSelectedOption] = useState("debit-card");

  const handleChooseCard = () => {
    onClose();
  };

  const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
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
          <Separator />
          <DialogTitle className="my-7 flex sm:flex-row flex-col items-center justify-between">
            <h1 className="garamond text-[#00A181] text-2xl">Payment Method</h1>
          </DialogTitle>
        </DialogHeader>
        <main className="flex flex-col sm:flex-row items-center justify-between">
          <Card className="w-full max-w-lg p-6 border-none flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center space-x-40">
                  <div className="flex items-center space-x-4">
                    <input
                      type="radio"
                      id="debit-card"
                      name="payment-option"
                      value="debit-card"
                      className="accent-[#00A181]"
                      checked={selectedOption === "debit-card"}
                      onChange={handleOptionChange}
                    />
                    <Label htmlFor="debit-card" className="garamond">
                      Card
                    </Label>
                  </div>
                  {selectedOption === "debit-card" && (
                    <MemoVisaCard className="h-16 w-16" />
                  )}
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-36">
              <div className="flex items-center gap-2">
                <input
                  type="radio"
                  className="accent-[#00A181]"
                  id="pay-on-delivery"
                  name="payment-option"
                  value="pay-on-delivery"
                  checked={selectedOption === "pay-on-delivery"}
                  onChange={handleOptionChange}
                />
                <Label
                  htmlFor="pay-on-delivery"
                  className="garamond font-[700] p-2 flex items-center gap-2 cursor-pointer">
                  Pay on Delivery
                </Label>
              </div>
              <MemoMoney className="h-8 w-8" />
            </div>
            <div>
              <h3 className="lato font-[400] text-sm">
                Payment made with card or bank transfer during delivery
              </h3>
              <Button
                onClick={handleChooseCard}
                className="bg-transparent hover:bg-transparent border border-[#3A3A3A] text-[#3A3A3A] rounded-none my-5">
                Select this payment method
              </Button>
            </div>
          </Card>
        </main>
      </DialogContent>
    </Dialog>
  );
};

export default PayOnDeliveryDialog;
