import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

import { ReactNode } from "react";
import MemoBackArrow from "@/icons/BackArrow";
import { Link } from "react-router-dom";
import MemoLogo from "@/icons/Logo";
import MemoVisaCard from "@/icons/VisaCard";
import { Card, CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import MemoPlus from "@/icons/Plus";

const AddNewCardDialog = ({ children }: { children: ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-[390px] sm:max-w-[825px]">
        <DialogHeader>
          <main className="sm:flex items-center justify-between">
            <div className="flex justify-center sm:justify-start">
              <MemoLogo className="md:w-28 w-20 h-20 md:h-28" />
            </div>
            <div className="flex  items-center justify-between ">
              <div className="w-full max-w-[22rem]   sm:max-w-md relative space-x-10 sm:space-x-20 flex justify-between items-center">
                <div className="sm:w-[67%] w-[73%] h-[2px] absolute sm:left-28 left-16  z-10 top-[0.3rem] bg-black" />
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
                    <div className="h-3 w-3 rounded-full bg-[#E3DFDF]" />
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
            <h1 className="garamond text-[#00A181]   text-2xl">Add New Card</h1>

            <Link
              to="/"
              className="flex items-center lato font-[400] my-3 sm:my-0 text-sm text-[#3A3A3A]">
              <MemoBackArrow className="h-4 w-4" />
              Back to Payment Method
            </Link>
          </DialogTitle>
        </DialogHeader>
        <div>
          <Card className="w-full max-w-md border-none">
            <div className="flex items-center justify-between">
              <CardTitle className="garamond">Card</CardTitle>
              <MemoVisaCard className="h-16 w-16" />
            </div>
            <form>
              <div className="mb-4">
                <label
                  className="block text-[#3A3A3A] lato text-sm font-[400] mb-2"
                  htmlFor="cardHolder">
                  Name on card
                </label>
                <input
                  id="cardHolder"
                  type="text"
                  className="  outline-none focus:outline-none focus-visible:ring-0 h-9  focus:ring-0 my-2 border-[#00A181]  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="cardNumber">
                  Card Number
                </label>
                <input
                  id="cardNumber"
                  type="text"
                  className="  outline-none focus:outline-none focus-visible:ring-0 h-9  focus:ring-0 my-2 border-[#00A181]  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
                />
              </div>

              <div className="flex justify-between">
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="expiryDate">
                    Expiry Date
                  </label>
                  <input
                    id="expiryDate"
                    type="text"
                    className="  outline-none focus:outline-none focus-visible:ring-0 h-9  focus:ring-0 my-2 border-[#00A181]  appearance-none border rounded sm:w-full w-40 py-2 px-3 text-gray-700 leading-tight"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="cvv">
                    CVV
                  </label>
                  <input
                    id="cvv"
                    type="text"
                    className="  outline-none focus:outline-none focus-visible:ring-0 h-9  focus:ring-0 my-2 border-[#00A181]  appearance-none border rounded sm:w-full w-40 py-2 px-3 text-gray-700 leading-tight"
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <RadioGroup className="flex items-center">
                  <RadioGroupItem
                    value="pay-on-delivery"
                    id="pay-on-delivery"
                  />
                  <Label
                    htmlFor="pay-on-delivery"
                    className=" cursor-pointer  lato font-[400] p-2 flex items-center gap-2 ">
                    Set as default
                  </Label>
                </RadioGroup>
              </div>
              <Button className="bg-transparent hover:bg-transparent border border-[#3A3A3A] text-[#3A3A3A] rounded-none mt-4">
                <MemoPlus className="w-4 h-4" />
                Add New Card
              </Button>
            </form>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddNewCardDialog;
