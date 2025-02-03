import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function SignInPage() {
  return (
    <Card className="mx-auto w-1/2 max-w-[500px] rounded-sm">
      <CardHeader>
        <CardTitle className="text-xl text-center">Login</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <Separator />
        <div className="flex flex-col gap-4">
          <Input placeholder="Enter email address" />
          <Input placeholder="Enter password" type="password" />
          <Button>Login</Button>
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
