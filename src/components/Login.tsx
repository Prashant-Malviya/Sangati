import { Link } from "react-router-dom";
import Button from "./shared/Button";
import Card from "./shared/Card";
import Input from "./shared/Input";
import Form from "./shared/Form";

const Login = () => {

  return (
    <div className="bg-gray-100 flex items-center justify-center h-screen">
      <div className="w-6/12 animate__animated animate__fadIn">
        <Card noPadding>
          <div className="grid grid-cols-2">
            <div className="p-8 space-y-6">
              <div>
                <h1 className="text-2xl font-bold text-pink-500 capitalize ">
                  Welcome back to your circle 
                </h1>
                <p>Lets connect...</p>
              </div>

              <Form className="space-y-6" onValue={(v)=>console.log(v)}>
                <Input name="email" placeholder="Email id" />

                <Input
                  name="password"
                  type="password"
                  placeholder="Enter your password here..."
                />

                <Button type="pink" icon="arrow-right-up-line">
                  Sign In
                </Button>
              </Form>

              <div className="flex  gap-2">
                <p>Don't have an account ?</p>
                <Link
                  to="/login"
                  className="text-pink-500 font-bold text-lg hover:underline"
                >
                  Sign up
                </Link>
              </div>
            </div>

            <div className="h-[500px]  flex items-center justify-center">
              <img
                src="/images/signin.png"
                alt="signup now"
                className="h-full animate__animated animate__fadeInRight animate__faster overflow-hidden"
              />
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Login;
