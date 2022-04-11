import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import type { NextPage } from "next";
import InputField from "components/form/InputField";
import ButtonField from "components/common/ButtonField";
import GoogleIcon from "./../public/assets/image/svg/google-icon.svg";
import SigninMainImage from "./../public/assets/image/svg/signin.svg";

const SignIn: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sign In - MzBlog</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <section className="auth-container">
        <div className="auth-container_card">
          <div className="auth-container_card-image">
            <Image src={SigninMainImage} alt="signin-image" />
          </div>
          <form className="auth-container_card-content">
            <h2 className="auth-container_card-title">Sing In.</h2>
            <p className="auth-container_card-description">
              Hello there, if you is here because can to create big things, you
              just need register now and begin to create better future.
            </p>
            <div className="mt-5">
              <InputField
                type="email"
                required={true}
                label="Your e-mail"
                placeholder="your-email@mzblog.com"
              />
              <InputField
                type="password"
                required={true}
                label="Password"
                placeholder="a leats 8 characters"
              />
              <div className="mt-10">
                <ButtonField name="Sign in" />
              </div>
              <h2 className="small-title-line">
                <span>or</span>
              </h2>
              <button className="rounded w-full border-2 border-fontcolor-150 py-2 text-fontcolor-150 flex items-center justify-center gap-4">
                <Image src={GoogleIcon} alt="google-icon" />
                Sign up with google
              </button>
              <p className="text-center mt-16 text-fontcolor-100">
                Don&apos;t have an account yet?{" "}
                <Link href="/signup">
                  <a className="text-primary">Register now</a>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default SignIn;
