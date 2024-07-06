import MemoEditIcon from "@/icons/EditIcon";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Separator } from "./ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PaymentCard = () => {
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
              <h2 className="text-base font-[400] lato">Debit Card</h2>
            </div>
            <div className="mt-4 flex justify-between">
              <div className="flex items-center gap-2">
                <input type="checkbox" className="accent-[#00A181]" checked />
                <p className="text-base lato">Kathryn Murphy</p>
              </div>
            </div>
            <span className="lato font-[400]">**** **** **** 1234</span>
          </main>
        </CardContent>
        <CardFooter className="flex gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-transparent gap-2 rounded-none hover:bg-transparent text-[#3A3A3A] border border-[#3A3A3A]">
                Change shipping Address
                <MemoEditIcon className="w-4 h-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Edit Payment Method</DialogTitle>
                <DialogDescription>
                  Make changes to your payment method here. Click save when
                  you're done.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    defaultValue="Kathryn Murphy"
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="card-number" className="text-right">
                    Card Number
                  </Label>
                  <Input
                    id="card-number"
                    defaultValue="**** **** **** 1234"
                    className="col-span-3"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Save changes</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PaymentCard;
