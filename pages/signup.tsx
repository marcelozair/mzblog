import Head from "next/head";
import Link from "next/link";
import type { NextPage } from "next";
import InputField from "components/form/InputField";
import ButtonField from "components/common/ButtonField";
import InputPassword from "components/form/InputPassword";

const SignUp: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sign Up - MzBlog</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <section className="auth-container">
        <div className="auth-container_card-signup">
          <div className="auth-container_card-image-signup">
            <img
              src="/assets/image/svg/signup.svg"
              className="h-full object-cover"
              alt="signup-image"
            />
          </div>
          <form className="auth-container_card-content">
            <h2 className="auth-container_card-title">Sing Up.</h2>
            <p className="auth-container_card-description">
              Hello there, if you is here because can to create big things, you
              just need register now and begin to create better future.
            </p>
            <div className="mt-5">
              <InputField
                type="name"
                required={true}
                label="Your name"
                placeholder="Your name"
              />
              <InputField
                type="email"
                required={true}
                label="Your e-mail"
                placeholder="your-email@mzblog.com"
              />
              <InputPassword />
              <div className="form-check">
                <input className="form-check-input" type="checkbox" />
                <label className="text-fontcolor">
                  By you creating an account you agree our{" "}
                  <a href="#">terms of used</a> and{" "}
                  <a href="#">privacy policy.</a>
                </label>
              </div>
              <div className="mt-10">
                <ButtonField name="Sign in" />
              </div>
              <p className="text-center mt-16 text-fontcolor-100 flex items-center gap-2 justify-center">
                Already have an account
                <Link href="/signin">
                  <a className="text-primary">Sign In</a>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default SignUp;
