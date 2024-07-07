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

import MemoLogo from "@/icons/Logo";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Badge } from "./ui/badge";
import MemoDeleteIcon from "@/icons/DeleteIcon";
import AddNewAddressDialog from "./AddNewAddressDialog";

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
        <CardFooter className="flex gap-2">
          <Dialog>
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
                  <h1 className="garamond text-[#00A181] text-2xl">
                    Choose Shipping Address
                  </h1>
                  <AddNewAddressDialog />
                </DialogTitle>
              </DialogHeader>
              <main className="flex flex-col sm:flex-row items-center justify-between">
                <Card className="w-full max-w-sm p-6 border-none flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div>
                        <RadioGroup defaultValue="">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="" id="" />
                            <Badge className="bg-[#DFF4F0] text-[#3A3A3A] hover:bg-[#DFF4F0]">
                              Default
                            </Badge>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="grid gap-1">
                      <div className="text-base text-[#3A3A3A] font-[400] lato">
                        Kathryn Murphy
                      </div>
                      <div className="text-[#3A3A3A] lato text-sm">
                        2464 Royal Ln. Mesa, New Jersey 45463
                      </div>
                      <p className="lato text-sm text-[#3A3A3A]">
                        (308) 555-0121
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-4">
                    <div className="flex items-center gap-2 flex-1 w-full">
                      <Button
                        className="text-[#3A3A3A] bg-transparent hover:bg-transparent"
                        size="icon">
                        <MemoEditIcon className="w-8 h-8" />
                        <span className="ml-1">Edit</span>
                      </Button>
                      <Button className="bg-transparent hover:bg-transparent text-[#3A3A3A]">
                        <MemoDeleteIcon className="w-4 h-4" />
                        <span className="ml-1">Delete</span>
                      </Button>
                    </div>
                    <Button className="border bg-transparent hover:bg-transparent text-[#3A3A3A]">
                      Choose this address
                    </Button>
                  </div>
                </Card>
                <Card className="w-full max-w-sm p-6 border-none flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div>
                        <RadioGroup defaultValue="hhhh">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="www" id="ww" />
                          </div>
                        </RadioGroup>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="grid gap-1">
                      <div className="text-base text-[#3A3A3A] font-[400] lato">
                        Kathryn Murphy
                      </div>
                      <div className="text-[#3A3A3A] lato text-sm">
                        2464 Royal Ln. Mesa, New Jersey 45463
                      </div>
                      <p className="lato text-sm text-[#3A3A3A]">
                        (308) 555-0121
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-4">
                    <div className="flex items-center gap-2 flex-1 w-full">
                      <Button
                        className="text-[#3A3A3A] bg-transparent hover:bg-transparent"
                        size="icon">
                        <MemoEditIcon className="w-8 h-8" />
                        <span className="ml-1">Edit</span>
                      </Button>
                      <Button className="bg-transparent hover:bg-transparent text-[#3A3A3A]">
                        <MemoDeleteIcon className="w-4 h-4" />
                        <span className="ml-1">Delete</span>
                      </Button>
                    </div>
                    <Button className="border bg-transparent hover:bg-transparent text-[#3A3A3A]">
                      Choose this address
                    </Button>
                  </div>
                </Card>
              </main>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AddressCard;
