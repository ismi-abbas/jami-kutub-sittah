import { type NextPage } from "next";
import { Default } from "~/components/Default";
import { Button } from "@chakra-ui/react";
import Link from "next/link";

const ErrorPage: NextPage = () => {
  return (
    <Default>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-medium text-red-500">
          Ralat 404: Halaman tidak dijumpai/belum wujud
        </h1>
        <Button className="mt-4">
          <Link href="/">Kembali ke laman utama</Link>
        </Button>
      </div>
    </Default>
  );
};

export default ErrorPage;
