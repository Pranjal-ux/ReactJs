import React from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "./button";
import { Bookmark } from "lucide-react";
const Card1 = () => {
  return (
    <div className="  m-6 gap-5 ">
      {/* //Card start// */}
      <Card className="h-[400px] w-[400px] inline-block">
        <CardHeader>
          <div className="relative">
            <img
              className=" w-[100px] object-cover"
              src="https://imgs.search.brave.com/TwLerPGMI139cXNTEawo4P3noDxHIXFFH_PlL4MqIR4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9h/L2E5L0FtYXpvbl9s/b2dvLnN2Zw"
              alt="img1"
            />
            <Button className="w-[100px] h-[40px] absolute -top-2.5 left-[250px] text-lg font-mono leading-1">
              Save <Bookmark size={12} />
            </Button>
          </div>
          <CardDescription className="">
            <h3 className="text-xl font-bold text-gray-500">
              Amazon <span>5 days Ago</span>
            </h3>
            <h2 className="text-3xl font-semibold text-black">
              Senior UI/UX Designer{" "}
            </h2>
            <CardContent>
              <div className=" flex gap-4 mr-7 mt-5">
                <h4 className="border-2 border-black bg-gray-500 text-black w-[110px] h-[30px] rounded-[4px] text-center font-mono text-lg cursor-pointer leading-[30px]">
                  Part Time
                </h4>
                <h4 className="border-2 border-black bg-gray-500 text-black w-[150px] h-[30px] rounded-[4px] text-center font-mono text-lg cursor-pointer leading-[30px]">
                  {" "}
                  Senior Level
                </h4>
              </div>
            </CardContent>
          </CardDescription>
        </CardHeader>
        <CardFooter className="relative">
          <div className="absolute top-[140px]">
            <h3>$120/hr</h3>
            <p>Mumbai,India</p>
            <Button className="w-[106px] h-[45px] absolute -top-2 left-[250px] text-lg font-mono leading-1">
              Apply Now
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Card1;
