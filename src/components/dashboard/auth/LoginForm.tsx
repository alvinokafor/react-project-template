import { useEffect } from "react";
import { Box, Flex, Heading, Text, TextField, Button } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginValidator, LoginSchema } from "@/lib/validations/authValidator";
import { useExampleMutation, ExampleAdapter } from "@/adapters/ExampleAdapter";
import { LoadingIcon } from "@/assets/icons";
import { toast } from "sonner";

export default function LoginForm() {
  const { register, handleSubmit, setFocus } = useForm<LoginSchema>({
    resolver: zodResolver(loginValidator),
  });

  // example of how to use the mutation adapter
  const { mutateAsync, isPending } = useExampleMutation(
    ExampleAdapter.exampleMutationApiCall,
    ""
  );

  const handleLogin = async (data: LoginSchema) => {
    try {
      await mutateAsync(data);
      toast.success("Login Successful");
    } catch (error) {
      toast.error("Invalid Credentials");
    }
  };

  useEffect(() => {
    setFocus("email");
  }, [setFocus]);
  return (
    <Box>
      <Flex mb={"5"} direction={"column"} gap={"2"}>
        <Heading size={"8"} className="text-slate-800">
          Welcome Back!
        </Heading>
        <Text className="text-slate-600">Log into your account.</Text>
      </Flex>

      <form onSubmit={handleSubmit(handleLogin)} className="space-y-6">
        <Flex direction={"column"} gap={"2"}>
          <label className="font-semibold" htmlFor="email">
            Email
          </label>
          <TextField.Input
            size={"3"}
            placeholder="Enter Email Address"
            type="email"
            {...register("email")}
          />
        </Flex>
        <Flex direction={"column"} gap={"2"}>
          <label className="font-semibold" htmlFor="password">
            Password
          </label>
          <TextField.Input
            required
            placeholder="Enter Password"
            size={"3"}
            {...register("password")}
          />
        </Flex>

        <Box className="space-y-3">
          <Button disabled={isPending} className="w-full" size={"3"}>
            {isPending ? <LoadingIcon /> : "Login"}
          </Button>
          <Flex align={"center"} justify={"between"}>
            <Text align={"center"} as="p">
              Don't have an account?{" "}
              <Link className="underline text-slate-500" to={"/sign-up"}>
                Sign Up
              </Link>
            </Text>

            <Link to={"/forgot-password"}>
              <Button variant="ghost"> Forgot Password</Button>
            </Link>
          </Flex>
        </Box>
      </form>
    </Box>
  );
}
