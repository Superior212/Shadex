import { Button } from "./ui/button";
import heroImg from "../assets/images/heroImg.svg";

export default function Hero() {
  return (
    <section className="w-full bg-[#DFF4F0]">
      <div className="flex flex-col-reverse items-center gap-6  lg:flex-row lg:gap-10">
        <div className="flex-1 space-y-4 px-4 md:px-16">
          <h1 className="text-4xl garamond font-[700] tracking-tighter text-[#3A3A3A] sm:text-5xl md:text-6xl">
            Shade Your World in Style This Summer
          </h1>
          <p className="max-w-[580px] text-[#3A3A3A] lato md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Discover the perfect pair with us! We have an amazing collection for
            this summer.
          </p>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button className="inline-flex lato h-10 items-center justify-center rounded-md bg-transparent px-8 text-sm font-medium text-black border-2 border-[#3A3A3A] hover:bg-transparent">
              Check Out Collection
            </Button>
          </div>
        </div>
        <div className="flex-1 flex justify-end">
          <img
            src={heroImg}
            alt="Product"
            className="w-full h-auto max-w-[600px] max-h-[600px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
