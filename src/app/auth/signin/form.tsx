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

export const formSchema = z.object({
  emailOrUsername: z.string(),
  password: z.string(),
});

type Props = {
  action: (data: z.infer<typeof formSchema>) => Promise<ApiResponse>;
};

export default function SignInForm({ action }: Props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      emailOrUsername: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    //console.log(values);
    const res = await action(values);
    if (res && res.isError) {
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
          name="emailOrUsername"
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
        <Button type="submit" className="w-full">
          Sign In
        </Button>
        <Link href={"/auth/signin"}>
          <Button type="button" className="w-full">
            Or Register
          </Button>
        </Link>
      </form>
    </Form>
  );
}
