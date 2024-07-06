import MemoEditIcon from "@/icons/EditIcon";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Separator } from "./ui/separator";

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
        <CardFooter
          className="flex
             gap-2">
          <Button className="bg-transparent gap-2 rounded-none hover:bg-transparent text-[#3A3A3A] border border-[#3A3A3A]">
            Change Payment Method
            <MemoEditIcon className="w-4 h-4" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default PaymentCard;
