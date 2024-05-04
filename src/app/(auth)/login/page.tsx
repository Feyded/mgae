"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { AlertCircle, Loader2 } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { getServerSession } from "next-auth";

export default function Login() {
  // const session = await getServerSession();
  // if (session) {
  //   redirect("/");
  // }
  const [formData, setformData] = useState({
    email: "",
    password: "",
    redirect: false,
  });
  const [errorAlert, setErrorAlert] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();
  const handleSubmit = async () => {
    setIsLoading(true);
    const res = await signIn("credentials", formData);
    if (res?.ok) {
      router.replace("/");
    } else {
      setErrorAlert(true);
    }
    setIsLoading(false);
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center bg-gray-50">
      <Card className="z-10 w-full max-w-md overflow-hidden rounded-2xl border border-gray-100 shadow-xl">
        <CardHeader>
          <CardTitle>Login </CardTitle>
          <CardDescription>
            Enter your email and password to login
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          {errorAlert && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Your email and/or password is incorrect, please try again
              </AlertDescription>
            </Alert>
          )}
          <form action={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="Example@gmail.com"
                  onChange={(e) => {
                    setformData({ ...formData, email: e.target.value });
                  }}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="******"
                  onChange={(e) => {
                    setformData({ ...formData, password: e.target.value });
                  }}
                />
              </div>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  "Login"
                )}
              </Button>
            </div>
          </form>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <Button variant="outline">
              <FaGoogle className="mr-2 h-4 w-4" /> Google
            </Button>
            <Button variant="outline">
              <FaFacebook className="mr-2 h-4 w-4" /> Facebook
            </Button>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center align-center">
          <span className="text-gray-400">
            Don't have an account?
            <Button
              className="align-self-start px-2"
              variant="link"
              onClick={() => {
                router.push("/register");
              }}
            >
              Create here
            </Button>
          </span>
        </CardFooter>
      </Card>
    </div>
  );
}
