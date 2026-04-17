"use client";

import { Turnstile, type TurnstileProps } from "@marsidev/react-turnstile";

interface TurnstileWidgetProps extends Omit<TurnstileProps, "siteKey"> {
  onVerify: (token: string) => void;
}

export default function TurnstileWidget({ onVerify, ...props }: TurnstileWidgetProps) {
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

  if (!siteKey) {
    return (
      <div className="p-4 border border-red-500/20 bg-red-500/10 rounded-lg text-xs text-red-500">
        NEXT_PUBLIC_TURNSTILE_SITE_KEY eksik!
      </div>
    );
  }

  return (
    <div className="flex justify-center my-2">
      <Turnstile
        siteKey={siteKey}
        onSuccess={onVerify}
        options={{
          theme: "dark",
        }}
        {...props}
      />
    </div>
  );
}
