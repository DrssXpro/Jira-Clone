import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function SignUpPage() {
  return (
    <Card className="mx-auto w-1/2 max-w-[500px] rounded-sm">
      <CardHeader>
        <CardTitle className="text-xl text-center">Sign Up</CardTitle>
        <CardDescription className="text-center">
          By signing up, you agree to our
          <span className="text-blue-700 cursor-pointer">&nbsp;Privacy Policy&nbsp;</span>
          and
          <span className="text-blue-700 cursor-pointer">&nbsp;Terms of Service&nbsp;</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <Separator />
        <div className="flex flex-col gap-4">
          <Input placeholder="Enter email address" />
          <Input placeholder="Enter password" type="password" />
          <Button>Sign Up</Button>
        </div>
        <Separator />
        <div className="flex flex-col gap-4">
          <Button variant={"secondary"}>
            <FcGoogle />
            Login with Google
          </Button>
          <Button variant={"secondary"}>
            <FaGithub />
            Login with Github
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
