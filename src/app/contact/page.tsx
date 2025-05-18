import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import Link from "next/link";

export default function Contact() {
  return (
    <div>
      <Navigation />
      <section>
        <h3 className="text-center mt-16 text-3xl font-bold">
          Contact Information
        </h3>
        <div className="flex flex-col lg:flex-row gap-y-6 lg:gap-y-0 items-center lg:items-start lg:justify-between w-10/12 mx-auto mt-14 mb-20 text-center">
          <div className="border rounded-xl border-gray-100 basis-1/4">
            <div className="p-10">
              <h3 className="font-bold text-2xl bg-[url('/text-bg-v2.png')] bg-cover bg-clip-text text-transparent">
                Email
              </h3>
              <p>contact@larnova.ng</p>
            </div>
            <div className="bg-gray-50 h-10 border-t border-gray-100 rounded-b-xl"></div>
          </div>
          <div className="border rounded-xl border-gray-100 basis-1/4">
            <div className="p-10">
              <h3 className="font-bold text-2xl bg-[url('/text-bg-v2.png')] bg-cover bg-clip-text text-transparent">
                Phone Number
              </h3>
              <p>+234 906 900 5475</p>
            </div>
            <div className="bg-gray-50 h-10 border-t border-gray-100 rounded-b-xl"></div>
          </div>
          <div className="border rounded-xl border-gray-100 basis-1/4">
            <div className="p-10">
              <h3 className="font-bold text-2xl bg-[url('/text-bg-v2.png')] bg-cover bg-clip-text text-transparent">
                Address
              </h3>
              <p>
                NO 1, S.A. Mbaka Close, Off Shining Star Street, Phase 2 Site 2,
                Kubwa, FCT, Abuja.
              </p>
            </div>
            <div className="bg-gray-50 h-10 border-t border-gray-100 rounded-b-xl"></div>
          </div>
        </div>
      </section>
      <section className="mt-20">
        <Link
          className="list-none"
          href="https://forms.gle/1VengQkGp4zwMHNv6"
          target="_blank"
        >
          <li className="text-center font-bold text-3xl bg-[url('/text-bg-v2.png')] bg-cover bg-clip-text text-transparent">
            See Offerings
          </li>
        </Link>
      </section>
      <Footer />
    </div>
  );
}
