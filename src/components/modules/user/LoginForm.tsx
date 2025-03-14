"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginUser } from "@/services/AuthService";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import { useUser } from "@/context/UserContext";
import { loginSchema } from "./loginValidation";
const LoginForm = () => {
  const form = useForm({
    resolver: zodResolver(loginSchema),
  });

  const { setIsLoading } = useUser();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const res = await loginUser(data);
      setIsLoading(true);
      console.log(res);

      if (res?.success) {
        toast.success(res?.message);
      } else {
        toast.error(res?.message);
      }
    } catch (error) {
      console.error(error);
    }
    console.log(data);
  };
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-b from-orange-50 to-white p-4">
        {/* Left Section  */}
        <div className="md:w-1/2 text-center md:text-left space-y-4">
          <h2 className="text-3xl font-semibold text-orange-600 flex items-center gap-2">
            Welcome Back <span className="wave">👋</span>{" "}
            <Link href="/">
              <span className="underline text-lg text-black">HOME</span>
            </Link>
          </h2>
          <p className="text-gray-600 lg:text-3xl text-lg ">
            <span className="font-semibold text-orange-500">Login</span> with
            your data that you entered during registration.
          </p>
          <Image
            src="https://i.ibb.co.com/39JpHWtw/71ao-Rz-Ztc-L-removebg-preview.png"
            alt="Tutor and Student"
            width={400}
            height={300}
            className="mx-auto md:mx-0 bg-cover"
          />
          <p className="text-orange-500 font-semibold text-lg">
            টিউশন বা টিউটর খুঁজে পাবার সেরা প্লাটফর্ম <br />{" "}
            hrhridoyroy503@gmail.com
          </p>
        </div>

        <Card className="md:w-1/2 max-w-md w-full p-6 shadow-lg">
          <CardContent>
            <h3 className="text-2xl font-semibold text-orange-500 text-center">
              Login Now
            </h3>

            <div className="space-y-4 mt-4">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormLabel />
                        <FormControl>
                          <Input
                            type="email"
                            {...field}
                            value={field.value || ""}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormLabel />
                        <FormControl>
                          <Input
                            type="password"
                            {...field}
                            value={field.value || ""}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full mt-2 bg-orange-500 text-white hover:bg-orange-600"
                  >
                    Login
                  </Button>
                </form>
              </Form>
            </div>
            <p className="text-gray-600 text-center mt-7">
              If you are not registered, please
              <Link href="/register" className="text-orange-500 font-semibold">
                Register
              </Link>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LoginForm;
