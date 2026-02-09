"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

function NewsLetter() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  function handleSubscribe() {
    if (!email.trim()) {
      setMessage("Please enter a valid email address.");
      setShow(true);
    } else {
      localStorage.setItem("email", email.toString());
      setMessage("Subscribed successfully!");
      setShow(true);
      setEmail("");
    }
    setTimeout(() => {
      setShow(false);
    }, 2000);
  }
  return (
    <div className="container  flex justify-between items-center lg:flex-row flex-col max-lg:px-4 ">
      <div className="space-y-3">
        <h3 className="lg:text-4xl font-semibold text-base">
          Join our newsletter
        </h3>
        <p className="lg:text-base text-logo-text text-sm">
          Sign up today Writing copy is time-consuming and difficult.
          <br /> Headlime&apos;s artificial intelligence can take your thoughts.
        </p>
      </div>
      <div className="lg:w-126 relative w-full max-lg:mt-6 lg:px-4 lg:h-16 ">
        <input
          type="email"
          placeholder="Enter email address"
          className="border px-4 py-3 bg-white rounded-md w-full outline-none h-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          className="bg-secondary_brand lg:h-13 lg:w-34.5 w-[112] h-[37] right-1 absolute lg:right-5 top-1 lg:top-1.5 cursor-pointer hover:bg-secondary_hover_brand"
          onClick={handleSubscribe}
        >
          Subscribe
        </Button>
        {message && show && (
          <p
            className={`mt-2 p-2 ${message.includes("successfully") ? "text-green-600" : "text-red-600"}`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}

export default NewsLetter;
