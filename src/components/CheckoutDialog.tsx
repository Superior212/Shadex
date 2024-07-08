import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";

import MemoLogo from "@/icons/Logo";
import { Separator } from "./ui/separator";
import { Card } from "./ui/card";
import MemoSuccessCheck from "@/icons/SuccessCheck";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const CheckoutDialog = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const navigate = useNavigate();
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
                    <div className="h-3 w-3 rounded-full bg-[#00A181]" />
                  </div>
                  <div className="text-sm font-medium text-[#3A3A3A] my-6">
                    Review
                  </div>
                </div>
              </div>
            </div>
          </main>
          <Separator />
        </DialogHeader>
        <main className="flex flex-col sm:flex-row items-center justify-between">
          <Card className="w-full max-w-[100%] p-6 border-none flex flex-col gap-6">
            <div className="flex items-center justify-center flex-col">
              <MemoSuccessCheck className="sm:w-60 w-40 h-40 sm:h-60 " />
              <h3 className="garamond font-[700] text-xl sm:text-2xl mb-8">
                Your Order is Successful
              </h3>
              <Button
                onClick={() => navigate("/")}
                className="bg-transparent hover:bg-transparent border rounded-none my-4 border-[#3A3A3A] text-[#3A3A3A]">
                Back To Home
              </Button>
            </div>
          </Card>
        </main>
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutDialog;
