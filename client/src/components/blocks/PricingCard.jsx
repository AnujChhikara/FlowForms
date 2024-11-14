import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function PricingCards() {
  return (
    <div className=" py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="md:text-5xl font-extrabold text-white sm:text-4xl">
            Choose the perfect plan for your needs
          </h2>
          <p className="mt-4 text-xl text-gray-300">
            FlowForm offers flexible options to fit your form processing
            requirements
          </p>
        </div>
        <div
          className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:flex sm:flex-col 
        sm:gap-6 md:flex md:flex-row items-center justify-center"
        >
          {/* Free Tier */}
          <Card className="bg-black   shadow-white border-zinc-800 w-80 flex flex-col h-[550px] shadow-md hover:shadow duration-700 transition-all  ease-in-out ">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-white">
                Starter
              </CardTitle>
              <CardDescription className="text-gray-400">
                Perfect for small projects and personal use
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="text-center text-5xl font-bold text-white">
                $0
              </div>
              <p className="text-center text-gray-400 mt-2">Free forever</p>
              <ul className="mt-6 space-y-4">
                {[
                  "100 submissions/month",
                  "Basic form templates",
                  "Email notifications",
                  "1 GB storage",
                ].map((feature) => (
                  <li key={feature} className="flex">
                    <Check className="flex-shrink-0 w-6 h-6 text-green-400" />
                    <span className="ml-3 text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button className="w-full bg-white text-zinc-900 hover:bg-gray-200 transition-colors ">
                Get Started
              </Button>
            </CardFooter>
          </Card>

          {/* $5 Tier */}
          <Card className="bg-black   shadow-white border-zinc-800 w-80 relative flex flex-col h-[550px] shadow-md hover:shadow duration-700 transition-all  ease-in-out ">
            <div className="absolute top-0 right-0 -mr-1 -mt-1 w-36 h-36 overflow-hidden">
              <div className="absolute transform rotate-45 bg-pink-700 text-center text-white font-semibold py-1 right-[-35px] top-[32px] w-[170px]">
                Popular
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-white">
                Pro
              </CardTitle>
              <CardDescription className="text-gray-400">
                Ideal for growing businesses
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="text-center text-5xl font-bold text-white">
                $5
              </div>
              <p className="text-center text-gray-400 mt-2">per month</p>
              <ul className="mt-6 space-y-4">
                {[
                  "1,000 submissions/month",
                  "Advanced form templates",
                  "Zapier integration",
                  "10 GB storage",
                  "Priority support",
                ].map((feature) => (
                  <li key={feature} className="flex">
                    <Check className="flex-shrink-0 w-6 h-6 text-green-400" />
                    <span className="ml-3 text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button className="w-full bg-pink-700 text-white hover:bg-pink-800 transition-colors ">
                Upgrade to Pro
              </Button>
            </CardFooter>
          </Card>

          {/* $20 Tier */}
          <Card className="bg-black   shadow-white border-zinc-800 w-80 flex flex-col h-[550px] shadow-md hover:shadow duration-700 transition-all  ease-in-out ">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-white">
                Enterprise
              </CardTitle>
              <CardDescription className="text-gray-400">
                For large-scale operations
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="text-center text-5xl font-bold text-white">
                $20
              </div>
              <p className="text-center text-gray-400 mt-2">per month</p>
              <ul className="mt-6 space-y-4">
                {[
                  "Unlimited submissions",
                  "Custom form builder",
                  "Advanced analytics",
                  "Unlimited storage",
                  "24/7 dedicated support",
                  "Custom integrations",
                ].map((feature) => (
                  <li key={feature} className="flex">
                    <Check className="flex-shrink-0 w-6 h-6 text-green-400" />
                    <span className="ml-3 text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button className="w-full bg-purple-600 text-white hover:bg-purple-700 transition-colors ">
                Contact Sales
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
