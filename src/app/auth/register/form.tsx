"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { ApiResponse } from "@/lib/utils";
import Link from "next/link";

export const formSchema = z
  .object({
    email: z.string().email(),
    username: z.string().min(3).max(20),
    password: z.string().min(3).max(20),
    passwordConfirm: z.string(),
  })
  .refine(
    (data) => {
      return data.password === data.passwordConfirm;
    },
    {
      message: "Passwords do not match",
      path: ["passwordConfirm"],
    }
  );

type Props = {
  action: (
    data: z.infer<typeof formSchema>
  ) => Promise<ApiResponse | void | {}>;
};

export default function RegisterForm({ action }: Props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
      passwordConfirm: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const res = await action(values);
    if (res instanceof ApiResponse && res.isError) {
      toast(res.errors[0]);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-md w-full flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => {
            return (
              <FormItem>
                <FormControl>
                  <Input placeholder="Email address" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => {
            return (
              <FormItem>
                <FormControl>
                  <Input placeholder="Username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => {
            return (
              <FormItem>
                <FormControl>
                  <Input placeholder="Password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="passwordConfirm"
          render={({ field }) => {
            return (
              <FormItem>
                <FormControl>
                  <Input placeholder="Password confirmation" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <Button type="submit" className="w-full">
          Submit
        </Button>
        <Link href={"/auth/signin"}>
          <Button type="button" className="w-full">
            Or Signin
          </Button>
        </Link>
      </form>
    </Form>
  );
}
