"use client";

import Image from "next/image";
import monalisa from "../../../public/evidenceform/monalisawithbluebowl.svg";
import { CustomInput, CustomInputDropdown } from "@/components/evidence/input";
import { PrimaryButton } from "@/components/evidence/button";
import { FormEvent, useEffect, useRef, useState } from "react";
import { LicenseType, WorkMedium } from "@/resources/enums";
import toast from "react-hot-toast";
import { useMagic } from "../context/useMagic";
import { useRouter } from "next/navigation";

export default function EvidenceForm() {
  const [lastName, setLastName] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [medium, setMedium] = useState<string>("");
  const [workName, setWorkName] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [dateOfCreation, setDateOfCreation] = useState<string>("");
  const [license, setLicense] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isLoadingAuth, setIsLoadingAuth] = useState<boolean>(true);
  const { magic } = useMagic();
  const router = useRouter();

  // Add ref for the file input
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const checkIsLoggedIn = async () => {
      if (!magic) return;

      setIsLoadingAuth(true);

      try {
        const loggedIn = await magic?.user.isLoggedIn();
        console.log("User Logged In", loggedIn);

        if (!loggedIn) {
          toast.error("Please Login to access this page");
          router.push("/");
        }
      } catch (error) {
        console.error("Auth check failed:", error);
        toast.error("Authentication Error");
        router.push("/");
      } finally {
        setIsLoadingAuth(false);
      }
    };

    checkIsLoggedIn();
  }, [magic, router]);

  if (isLoadingAuth) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  const isInValidSubmission = () =>
    !firstName ||
    !lastName ||
    !email ||
    !medium ||
    !workName ||
    !file ||
    !dateOfCreation ||
    !license;

  const toBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();

      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const resetState = () => {
    setFirstName("");
    setFile(null);
    setEmail("");
    setMedium("");
    setWorkName("");
    setDateOfCreation("");
    setLastName("");
    setLicense("");
    setIsLoading(false);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    setIsLoading(true);

    const fileAsBase64 = await toBase64(file as File);

    try {
      await fetch("/api/creatorworks", {
        method: "POST",
        body: JSON.stringify({
          lastName,
          email,
          firstName,
          medium,
          workName,
          file: fileAsBase64,
          dateOfCreation,
          license,
        }),
      });
    } catch {
      toast.error("Evidence Creation Failed");
      return;
    }

    resetState();
    toast.success("Evidence Creation Successful!");
  };

  return (
    <section className="flex flex-col-reverse md:flex-row md:justify-between h-min">
      <form
        onSubmit={handleSubmit}
        className="w-[100%] p-5 md:w-[30%] md:mt-[8rem] h-full"
      >
        <h3 className="font-[700] text-2xl text-start md:text-4xl text-[#3A3A3A] mb-6">
          Evidence Form
        </h3>
        <section className="flex flex-col gap-4">
          <CustomInput
            type="text"
            placeHolder="Enter First Name"
            value={firstName}
            inputName="Creator First Name"
            onChanges={(e) => setFirstName(e.target.value)}
          />

          <CustomInput
            type="text"
            placeHolder="Enter Last Name"
            value={lastName}
            inputName="Creator Last Name"
            onChanges={(e) => setLastName(e.target.value)}
          />

          <CustomInput
            type="email"
            placeHolder="Enter Email"
            value={email}
            inputName="Creator's Email"
            onChanges={(e) => setEmail(e.target.value)}
          />

          <CustomInput
            type="text"
            placeHolder="Enter Work Name"
            value={workName}
            inputName="Name Of Work"
            onChanges={(e) => setWorkName(e.target.value)}
          />

          <CustomInputDropdown
            dropdownOptions={Object.values(WorkMedium)}
            onSelect={setMedium}
            dropDownTitle="Medium"
          />

          <CustomInput
            type="file"
            placeHolder="File"
            inputName="File"
            onChanges={(e) =>
              setFile(
                e?.target?.files && e?.target?.files[0]
                  ? e.target.files[0]
                  : null
              )
            }
            ref={fileInputRef}
          />

          <CustomInput
            type="date"
            max={new Date().toISOString().split("T")[0]}
            placeHolder="Enter Date Created"
            value={dateOfCreation}
            inputName="Date Of Creation"
            onChanges={(e) => setDateOfCreation(e.target.value)}
          />

          <CustomInputDropdown
            dropdownOptions={Object.values(LicenseType)}
            onSelect={setLicense}
            dropDownTitle="Select A License"
          />
        </section>
        <div className="w-[40%] mt-10">
          <PrimaryButton
            text="Submit"
            disabled={isInValidSubmission() || isLoading}
            className={`${
              isLoading
                ? "bg-[#666666] px-5 py-3 cursor-wait"
                : "bg-primary px-5 py-3 text-white hover:bg-white hover:text-primary cursor-pointer"
            }`}
          />
        </div>
      </form>
      <div className="mt-[5rem] md:w-[55%] h-[15rem] md:h-[65rem]">
        <Image
          src={monalisa}
          alt={"Image of monalisa"}
          className="h-full w-full object-cover"
          width={100}
          height={100}
        />
      </div>
    </section>
  );
}
