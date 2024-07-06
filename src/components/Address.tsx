import MemoEditIcon from "@/icons/EditIcon";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import MemoLogo from "@/icons/Logo";
import { Link } from "react-router-dom";
import MemoBackArrow from "@/icons/BackArrow";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import MemoPlus from "@/icons/Plus";
const AddressCard = () => {
  return (
    <div>
      <Card className="bg-[#EEFFFC]">
        <CardContent>
          <div className="mt-4">
            <h2 className="text-xl font-bold mb-4 garamond">
              Shipping Address
            </h2>
          </div>
          <main className="px-5 max-w-[80rem] mx-auto">
            <div className="mt-4 flex justify-between">
              <h2 className="text-base font-[400] lato">Kathryn Murphy</h2>
            </div>
            <div className="mt-4 flex justify-between">
              <div className="flex items-center gap-2">
                <input type="checkbox" className="accent-[#00A181]" checked />
                <p className="text-base lato">
                  2464 Royal Ln. Mesa, New Jersey 45463
                </p>
              </div>

              <p className="lato font-[400]">₦ 2,000</p>
            </div>
            <span className="lato font-[400]">(308) 555-0121</span>
          </main>
        </CardContent>
        <CardFooter
          className="flex
             gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-transparent gap-2 rounded-none hover:bg-transparent text-[#3A3A3A] border border-[#3A3A3A]">
                Change Payment Method
                <MemoEditIcon className="w-4 h-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[825px]">
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
                <Separator />
                <DialogTitle className="my-7 flex sm:flex-row flex-col items-center justify-between">
                  <h1 className="garamond text-[#00A181]   text-2xl">
                    Choose Shipping Address
                  </h1>

                  <Link
                    to="/"
                    className="flex items-center lato font-[400] my-3 sm:my-0 text-sm text-[#3A3A3A]">
                    <MemoBackArrow className="h-4 w-4" />
                    Back to Shipping Address
                  </Link>
                </DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4 mx-auto sm:mx-0">
                <div className="">
                  <h1>Add Address</h1>
                </div>
                <div>
                  <Label htmlFor="name" className="text-right my-2">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    className=" w-[20rem] sm:w-[22rem] outline-none focus:outline-none focus-visible:ring-0 h-9   focus:ring-0 my-2 border-[#00A181]"
                  />
                </div>
                <div>
                  <Label htmlFor="address" className="text-right my-2">
                    Full Address
                  </Label>
                  <Input
                    id="address"
                    className="w-[20rem] sm:w-[22rem] outline-none focus:outline-none focus-visible:ring-0 h-9  focus:ring-0 my-2 border-[#00A181]"
                  />
                </div>
                <div>
                  <Label htmlFor="name" className="text-right my-2">
                    City
                  </Label>
                  <Input
                    id="city"
                    className=" w-[20rem] sm:w-[22rem] outline-none focus:outline-none focus-visible:ring-0 h-9   focus:ring-0 my-2 border-[#00A181]"
                  />
                </div>
                <div className="flex items-center space-x-6">
                  <div>
                    <Label htmlFor="name" className="text-right my-2">
                      Phone number
                    </Label>
                    <Input
                      id="city"
                      className="w-[9.5rem] sm:w-[10.2rem] outline-none focus:outline-none focus-visible:ring-0  h-9   focus:ring-0 my-2 border-[#00A181]"
                    />
                  </div>
                  <div>
                    <Label htmlFor="name" className="text-right my-2">
                      State
                    </Label>
                    <Input
                      id="city"
                      className="w-[9.5rem] sm:w-[10.2rem] outline-none focus:outline-none focus-visible:ring-0 h-9   focus:ring-0 my-2 border-[#00A181]"
                    />
                  </div>
                </div>
                <div>
                  <RadioGroup defaultValue="">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="" id="" />
                      <Label htmlFor="option-one">Set as default</Label>
                    </div>
                  </RadioGroup>
                </div>
                <Button className="w-fit bg-transparent hover:bg-transparent border text-[#3A3A3A] rounded-none">
                  <MemoPlus className="w-4 h-4" />
                  Add New Address
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AddressCard;
