"use client";

import { useState } from "react";

import SectionLayout from "@/layouts/sectionLayout";
import { SendIcon } from "@/ui/assets/svg";
import Button from "@/ui/button";
import Input from "@/form/input";
import Heading from "@/ui/head";
import Text from "@/ui/text";
import { useLanguage } from "@/hooks/languageContext";
import { copy } from "@/lib/copy";
import { cn } from "@/lib/utils";

export default function ContactForm() {
  const { language } = useLanguage();
  const contact = copy[language].contact;
  const sinhala = language === "si";
  const [sent, setSent] = useState(false);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
    event.currentTarget.reset();
  };

  return (
    <SectionLayout id="contact">
      <div className="px-4 py-8 md:px-8 md:py-16">
      <div className="mx-auto max-w-[720px] space-y-8 rounded-3xl border border-[#CBCBCB] bg-[#F3F5F7] px-4 py-6 md:px-10 md:py-12">
        <div className="space-y-3 text-center">
          <Heading
            as="h2"
            intent="base-section"
            className={cn(sinhala && "font-sinhala")}
          >
            {contact.title}
          </Heading>
          <Text
            size="sm"
            color="gray"
            className={cn(sinhala && "font-sinhala")}
          >
            {contact.lead}
          </Text>
        </div>

        <form className="space-y-5" onSubmit={onSubmit}>
          <div className="grid gap-5 md:grid-cols-2">
            <label className="space-y-2">
              <Text
                size="sm"
                weight={500}
                color="black/800"
                className={cn(sinhala && "font-sinhala")}
              >
                {contact.name}
              </Text>
              <Input
                name="name"
                required
                autoComplete="name"
                className={cn("w-full bg-white", sinhala && "font-sinhala")}
              />
            </label>
            <label className="space-y-2">
              <Text
                size="sm"
                weight={500}
                color="black/800"
                className={cn(sinhala && "font-sinhala")}
              >
                {contact.phone}
              </Text>
              <Input
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                className="w-full bg-white"
              />
            </label>
          </div>

          <label className="block space-y-2">
            <Text
              size="sm"
              weight={500}
              color="black/800"
              className={cn(sinhala && "font-sinhala")}
            >
              {contact.email}
            </Text>
            <Input
              name="email"
              type="email"
              autoComplete="email"
              className="w-full bg-white"
            />
          </label>

          <label className="block space-y-2">
            <Text
              size="sm"
              weight={500}
              color="black/800"
              className={cn(sinhala && "font-sinhala")}
            >
              {contact.message}
            </Text>
            <textarea
              name="message"
              required
              rows={5}
              className={cn(
                "w-full resize-y rounded-md border border-[#CBCBCB] bg-white px-4 py-2 font-inter text-base font-normal text-[#141718] outline-none placeholder:text-[#6C7275]",
                sinhala && "font-sinhala",
              )}
            />
          </label>

          {sent && (
            <Text
              size="sm"
              weight={500}
              color="black/800"
              className={cn("text-center", sinhala && "font-sinhala")}
            >
              {contact.sent}
            </Text>
          )}

          <div className="flex justify-center">
            <Button
              type="submit"
              fontSize="sm"
              className={cn(
                "inline-flex items-center gap-2 py-3 md:text-base",
                sinhala && "font-sinhala",
              )}
            >
              <SendIcon stroke="#FEFEFE" className="h-5 w-5" />
              {contact.submit}
            </Button>
          </div>
        </form>
      </div>
      </div>
    </SectionLayout>
  );
}
