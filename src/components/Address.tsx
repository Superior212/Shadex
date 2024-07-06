import MemoEditIcon from "@/icons/EditIcon";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const AddressCard = () => {
  return (
    <div>
      <Card className="bg-[#EEFFFC]">
        <CardContent>
          <Separator />
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
          <Button className="bg-transparent gap-2 rounded-none hover:bg-transparent text-[#3A3A3A] border border-[#3A3A3A]">
            Change Shipping Address
            <MemoEditIcon className="w-4 h-4" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AddressCard;
